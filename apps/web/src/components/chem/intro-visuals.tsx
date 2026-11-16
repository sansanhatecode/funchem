'use client'

import { CATEGORY_COLOR, CATEGORY_LABEL, PERIODIC_TABLE, tableElementLabel } from '@funchem/chem-ui'
import {
  elementLabel,
  type ElementSymbol,
  formatFormula,
  lowerFirst,
  type Molecule,
  moleculeLabel,
  type SceneId,
} from '@funchem/content'
import { CloudIcon, DropIcon, SnowflakeIcon } from '@phosphor-icons/react'
import { useState } from 'react'
import { ZoomScene } from '@/components/scenes/zoom-scene'
import { cn } from '@/lib/cn'
import { AtomLegend, AtomModel } from './atom-model'
import { PARTICLE_CAPTION, type ParticleMode, ParticleView } from './particle-view'
import { findTableElement, PeriodicTableSvg } from './periodic-table'

/** Từ cảnh lớp học phóng to vào bảng tuần hoàn; chạm một nguyên tố để xem nó là gì và gặp ở đâu. */
export function PeriodicTableZoom({
  scene,
  highlight,
}: {
  scene: SceneId
  highlight: readonly ElementSymbol[]
}) {
  const [zoomed, setZoomed] = useState(false)
  const [selected, setSelected] = useState<string>(highlight[0] ?? 'H')
  const el = findTableElement(selected)
  // ô trong bảng quá nhỏ để chạm trên điện thoại, nên có thêm hàng nút lớn bên dưới
  const chips = highlight.length > 0 ? highlight : PERIODIC_TABLE.slice(0, 10).map((e) => e.symbol)

  return (
    <div className="flex flex-col gap-3">
      <ZoomScene
        scene={scene}
        zoomed={zoomed}
        onZoomChange={setZoomed}
        zoomLabel="Phóng to tấm bảng"
      >
        <PeriodicTableSvg highlight={highlight} selected={selected} />
      </ZoomScene>

      {zoomed ? (
        <div
          className="flex flex-col gap-3 rounded-2xl bg-brand-soft p-4"
          style={{ animation: 'pop-in 350ms ease-out' }}
        >
          <ul className="flex flex-wrap gap-2" aria-label="Chọn một nguyên tố">
            {chips.map((symbol) => (
              <li key={symbol}>
                <button
                  type="button"
                  aria-pressed={symbol === selected}
                  onClick={() => setSelected(symbol)}
                  className={cn(
                    'grid size-11 place-items-center rounded-xl border-2 text-sm font-extrabold transition-transform duration-100 active:translate-y-[2px]',
                    symbol === selected ? 'border-ink bg-paper' : 'border-transparent bg-paper/70',
                  )}
                >
                  {symbol}
                </button>
              </li>
            ))}
          </ul>
          {el && (
            <div className="flex items-center gap-3" role="status">
              <span
                className="grid size-16 shrink-0 place-items-center rounded-2xl text-2xl font-extrabold"
                style={{ backgroundColor: CATEGORY_COLOR[el.category] }}
                aria-hidden="true"
              >
                {el.symbol}
              </span>
              <div>
                <p className="font-extrabold">
                  Ô số {el.number}: {tableElementLabel(el)}
                </p>
                <p className="text-sm text-ink-soft">
                  {CATEGORY_LABEL[el.category]}
                  {el.note ? `. ${el.note}.` : '.'}
                </p>
              </div>
            </div>
          )}
          <ul
            className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-bold text-ink-soft"
            aria-label="Chú giải màu"
          >
            {(Object.keys(CATEGORY_LABEL) as (keyof typeof CATEGORY_LABEL)[]).map((c) => (
              <li key={c} className="flex items-center gap-1.5">
                <span
                  aria-hidden="true"
                  className="inline-block size-3 rounded"
                  style={{ backgroundColor: CATEGORY_COLOR[c] }}
                />
                {CATEGORY_LABEL[c]}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-center text-sm text-ink-soft">
          Bấm kính lúp để xem tấm bảng treo trên tường.
        </p>
      )}
    </div>
  )
}

/** Từ một vật ngoài đời phóng to thẳng vào bên trong một nguyên tử. */
export function AtomZoom({ scene, element }: { scene: SceneId; element: ElementSymbol }) {
  const [zoomed, setZoomed] = useState(false)
  return (
    <div className="flex flex-col gap-3">
      <ZoomScene
        scene={scene}
        zoomed={zoomed}
        onZoomChange={setZoomed}
        zoomLabel="Phóng to vào trong nguyên tử"
      >
        <AtomModel element={element} />
      </ZoomScene>
      {zoomed ? (
        <div
          className="rounded-2xl bg-brand-soft p-4"
          style={{ animation: 'pop-in 350ms ease-out' }}
        >
          <p className="mb-2 font-extrabold">
            Bên trong một nguyên tử {lowerFirst(elementLabel(element))}
          </p>
          <AtomLegend element={element} />
        </div>
      ) : (
        <p className="text-center text-sm text-ink-soft">
          Bấm kính lúp để chui vào bên trong một nguyên tử.
        </p>
      )}
    </div>
  )
}

const STATES: {
  id: 'solid' | 'liquid' | 'gas'
  label: string
  Icon: typeof DropIcon
  mode: ParticleMode
}[] = [
  { id: 'solid', label: 'Rắn', Icon: SnowflakeIcon, mode: 'solid' },
  { id: 'liquid', label: 'Lỏng', Icon: DropIcon, mode: 'liquid' },
  { id: 'gas', label: 'Khí', Icon: CloudIcon, mode: 'gas' },
]

/**
 * Phòng thí nghiệm ba trạng thái: cùng một chất ở thể rắn, lỏng, khí.
 * Giữ nguyên mức phóng to khi đổi trạng thái để so sánh cách các hạt chuyển động.
 */
export function StatesLab({
  molecule,
  scenes,
}: {
  molecule: Molecule
  scenes: Record<'solid' | 'liquid' | 'gas', SceneId>
}) {
  const [state, setState] = useState<'solid' | 'liquid' | 'gas'>('liquid')
  const [zoomed, setZoomed] = useState(false)
  const current = STATES.find((s) => s.id === state)!

  return (
    <div className="flex flex-col gap-3">
      <div role="radiogroup" aria-label="Chọn thể của chất" className="grid grid-cols-3 gap-2">
        {STATES.map((s) => (
          <button
            key={s.id}
            type="button"
            role="radio"
            aria-checked={s.id === state}
            onClick={() => setState(s.id)}
            className={cn(
              'flex min-h-12 items-center justify-center gap-2 rounded-2xl border-2 font-extrabold transition-transform duration-100 active:translate-y-[2px]',
              s.id === state
                ? 'border-brand bg-brand-soft text-brand-deep shadow-[0_3px_0_var(--color-brand)]'
                : 'border-line bg-paper text-ink-soft shadow-[0_3px_0_var(--color-line)]',
            )}
          >
            <s.Icon weight="fill" size={20} aria-hidden="true" />
            {s.label}
          </button>
        ))}
      </div>

      <ZoomScene key={state} scene={scenes[state]} zoomed={zoomed} onZoomChange={setZoomed}>
        <ParticleView molecule={molecule} mode={current.mode} />
      </ZoomScene>

      <p className="rounded-2xl bg-brand-soft p-3 text-center text-sm" role="status">
        {zoomed ? (
          <>
            <span className="font-extrabold">
              Vẫn là {lowerFirst(moleculeLabel(molecule))} {formatFormula(molecule.formula)}.
            </span>{' '}
            {PARTICLE_CAPTION[current.mode]}
          </>
        ) : (
          'Chọn một thể rồi bấm kính lúp. Đổi thể khi đang phóng to để so sánh.'
        )}
      </p>
    </div>
  )
}
