'use client'

import { content, formatFormula, lowerFirst, moleculeLabel, type SceneId } from '@funchem/content'
import { useState } from 'react'
import { MoleculeView } from '@/components/chem/molecule-view'
import { PARTICLE_CAPTION, particleMode, ParticleView } from '@/components/chem/particle-view'
import { SceneView } from '@/components/scenes'
import { ZoomScene } from '@/components/scenes/zoom-scene'
import { cn } from '@/lib/cn'

const THINGS: { scene: SceneId; molecule: string; label: string }[] = [
  { scene: 'glass-of-water', molecule: 'h2o', label: 'Ly nước' },
  { scene: 'soda-can', molecule: 'co2', label: 'Lon nước ngọt' },
  { scene: 'candle', molecule: 'o2', label: 'Ngọn nến' },
  { scene: 'salt-shaker', molecule: 'nacl', label: 'Lọ muối' },
  { scene: 'balloons', molecule: 'he', label: 'Bóng bay' },
  { scene: 'gold-ring', molecule: 'au', label: 'Nhẫn vàng' },
]

/**
 * Khu "chạm thử" ở đầu trang chủ: chọn một thứ quen thuộc, bấm kính lúp, thấy ngay thế giới hạt bên trong.
 * Mục đích là để người mới tự thấy trong 5 giây rằng hoá học ở khắp nơi và không đáng sợ.
 */
export function HeroPlayground() {
  const [index, setIndex] = useState(0)
  const [zoomed, setZoomed] = useState(false)
  const thing = THINGS[index]!
  const molecule = content.molecules.get(thing.molecule)!

  return (
    <div className="flex flex-col gap-3">
      <ZoomScene
        key={thing.scene}
        scene={thing.scene}
        zoomed={zoomed}
        onZoomChange={setZoomed}
        className="shadow-(--shadow-card)"
      >
        <ParticleView molecule={molecule} />
      </ZoomScene>

      <div>
        <p className="mb-2 text-sm font-extrabold text-ink-soft">Thử thứ khác</p>
        <ul className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2">
          {THINGS.map((t, i) => (
            <li key={t.scene} className="shrink-0">
              <button
                type="button"
                aria-pressed={i === index}
                aria-label={t.label}
                onClick={() => {
                  setIndex(i)
                  setZoomed(false)
                }}
                className={cn(
                  'block w-20 overflow-hidden rounded-xl border-4 transition-transform duration-100 hover:-translate-y-0.5',
                  i === index
                    ? 'border-brand shadow-[0_3px_0_var(--color-brand-deep)]'
                    : 'border-paper shadow-(--shadow-card)',
                )}
              >
                <SceneView id={t.scene} still decorative />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={cn(
          'flex items-center gap-3 rounded-2xl border border-line bg-paper p-3 transition-opacity duration-300',
          zoomed ? 'opacity-100' : 'opacity-0',
        )}
        aria-hidden={!zoomed}
        role="status"
      >
        <MoleculeView molecule={molecule} size={56} decorative />
        <p className="text-sm">
          <span className="font-extrabold">
            Bên trong {thing.label.toLowerCase()} là {lowerFirst(moleculeLabel(molecule))}{' '}
            {formatFormula(molecule.formula)}.
          </span>{' '}
          <span className="text-ink-soft">{PARTICLE_CAPTION[particleMode(molecule)]}</span>
        </p>
      </div>
    </div>
  )
}
