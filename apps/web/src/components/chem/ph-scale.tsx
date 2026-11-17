'use client'

import type { SceneId } from '@funchem/content/lib'
import { type CSSProperties, useState } from 'react'
import { ZoomScene } from '@/components/scenes/zoom-scene'
import { cn } from '@/lib/cn'

export interface PhItem {
  label: string
  ph: number
  scene: SceneId
}

/** Màu của chất chỉ thị vạn năng từ pH 0 tới 14. */
export const PH_COLORS = [
  '#D7263D',
  '#E03A2F',
  '#EA5B2A',
  '#F28C28',
  '#F5B82E',
  '#F1D93A',
  '#C9DC3F',
  '#5FBF4A',
  '#2FA77A',
  '#1F9AA8',
  '#2A7FC9',
  '#3C5FC4',
  '#4B46B8',
  '#5B33A6',
  '#5E2B8F',
] as const

const ACID = { fill: '#FFE3E3', stroke: '#E5484D', text: '#B4232A' }
const BASE = { fill: '#DCEBFF', stroke: '#2A7FC9', text: '#1B5A94' }
const TOTAL_IONS = 12

export const formatPh = (ph: number) => String(ph).replace('.', ',')

/** Số ion H⁺ trong hình minh hoạ (trên tổng 12 hạt): pH càng nhỏ càng nhiều. */
export function hydrogenIonCount(ph: number): number {
  const n = Math.round((TOTAL_IONS * (14 - ph)) / 14)
  return Math.min(TOTAL_IONS - 1, Math.max(1, n))
}

export function phKind(ph: number): 'acid' | 'neutral' | 'base' {
  return ph < 6.5 ? 'acid' : ph > 7.5 ? 'base' : 'neutral'
}

/** Bộ sinh số giả ngẫu nhiên ổn định theo seed, để server và client vẽ giống hệt nhau. */
function rng(seed: string) {
  let h = 2166136261
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619)
  return () => {
    h += 0x6d2b79f5
    let t = h
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Thế giới hạt trong dung dịch: ion H⁺ (đỏ) và ion OH⁻ (xanh) trôi trong nước. */
export function IonView({ ph, seed }: { ph: number; seed: string }) {
  const rand = rng(`${seed}:${ph}`)
  const acidCount = hydrogenIonCount(ph)
  // 12 ô lưới 4x3, mỗi hạt lệch ngẫu nhiên trong ô của nó để không chồng lên nhau
  const cells = Array.from({ length: TOTAL_IONS }, (_, i) => i)
  for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[cells[i], cells[j]] = [cells[j]!, cells[i]!]
  }
  const ions = cells.map((cell, i) => {
    const col = cell % 4
    const row = Math.floor(cell / 4)
    return {
      key: i,
      acid: i < acidCount,
      x: Math.round(40 + col * 80 + (rand() - 0.5) * 30),
      y: Math.round(36 + row * 64 + (rand() - 0.5) * 22),
      style: {
        '--dx': `${Math.round((rand() - 0.5) * 26)}px`,
        '--dy': `${Math.round((rand() - 0.5) * 22)}px`,
        '--rot': '0deg',
        '--dur': `${(3.5 + rand() * 3).toFixed(1)}s`,
        '--delay': `${(-rand() * 4).toFixed(1)}s`,
      } as CSSProperties,
    }
  })
  return (
    <svg
      viewBox="0 0 320 200"
      className="h-full w-full"
      role="img"
      aria-label={`Trong dung dịch có ${acidCount} ion H cộng và ${TOTAL_IONS - acidCount} ion OH trừ (hình minh hoạ)`}
    >
      <rect width="320" height="200" fill="#EAF5FD" />
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M-10 ${52 + i * 60} q40 -14 80 0 t80 0 t80 0 t80 0 t80 0`}
          fill="none"
          stroke="#CFE6F7"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
      {ions.map((ion) => {
        const c = ion.acid ? ACID : BASE
        return (
          <g key={ion.key} className="particle" style={ion.style}>
            <circle
              cx={ion.x}
              cy={ion.y}
              r={ion.acid ? 15 : 19}
              fill={c.fill}
              stroke={c.stroke}
              strokeWidth="2.5"
            />
            <text
              x={ion.x}
              y={ion.y + 5}
              textAnchor="middle"
              fontSize={ion.acid ? 14 : 13}
              fontWeight="800"
              fill={c.text}
            >
              {ion.acid ? 'H⁺' : 'OH⁻'}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

/** Thang pH 0-14 với kim chỉ vào giá trị đang xem. */
export function PhBar({ ph, className }: { ph: number; className?: string }) {
  const x = ph * 20 + 10
  return (
    <svg
      viewBox="0 0 300 62"
      className={cn('w-full', className)}
      role="img"
      aria-label={`Thang pH từ 0 tới 14, kim đang chỉ pH ${formatPh(ph)}`}
    >
      <defs>
        <clipPath id="ph-bar-clip">
          <rect x="0" y="26" width="300" height="18" rx="9" />
        </clipPath>
      </defs>
      <g clipPath="url(#ph-bar-clip)">
        {PH_COLORS.map((color, i) => (
          <rect key={color} x={i * 20} y="26" width="20.5" height="18" fill={color} />
        ))}
      </g>
      {PH_COLORS.map((_, i) => (
        <text
          key={i}
          x={i * 20 + 10}
          y="57"
          textAnchor="middle"
          fontSize="9"
          fontWeight="700"
          fill="var(--color-ink-soft)"
        >
          {i}
        </text>
      ))}
      <g
        style={{
          transform: `translateX(${x}px)`,
          transition: 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <rect x="-19" y="1" width="38" height="17" rx="8.5" fill="var(--color-ink)" />
        <path d="M-5 17 L0 24 L5 17 Z" fill="var(--color-ink)" />
        <text x="0" y="13.5" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff">
          pH {formatPh(ph)}
        </text>
        <rect
          x="-3"
          y="24"
          width="6"
          height="22"
          rx="3"
          fill="#fff"
          stroke="var(--color-ink)"
          strokeWidth="2"
        />
      </g>
    </svg>
  )
}

const KIND_TEXT = {
  acid: 'có tính acid. Trong nước có nhiều ion H⁺ hơn ion OH⁻. Càng nhiều H⁺, pH càng nhỏ.',
  neutral: 'trung tính. Số ion H⁺ và ion OH⁻ bằng nhau.',
  base: 'có tính base. Trong nước có nhiều ion OH⁻ hơn ion H⁺. Càng nhiều OH⁻, pH càng lớn.',
} as const

/**
 * Phòng thí nghiệm pH: chọn một thứ quen thuộc, xem nó nằm ở đâu trên thang pH,
 * rồi phóng to để thấy trong đó ion H⁺ hay ion OH⁻ nhiều hơn.
 */
export function PhScaleLab({ items }: { items: PhItem[] }) {
  const [index, setIndex] = useState(0)
  const [zoomed, setZoomed] = useState(false)
  const item = items[index] ?? items[0]
  if (!item) return null
  const kind = phKind(item.ph)

  return (
    <div className="flex flex-col gap-3">
      <div role="radiogroup" aria-label="Chọn một thứ để đo pH" className="flex flex-wrap gap-2">
        {items.map((it, i) => (
          <button
            key={it.label}
            type="button"
            role="radio"
            aria-checked={i === index}
            onClick={() => setIndex(i)}
            className={cn(
              'flex min-h-11 flex-1 basis-[30%] items-center justify-center gap-2 rounded-2xl border-2 px-3 text-sm font-extrabold transition-transform duration-100 active:translate-y-[2px]',
              i === index
                ? 'border-brand bg-brand-soft text-brand-deep shadow-[0_3px_0_var(--color-brand)]'
                : 'border-line bg-paper text-ink-soft shadow-[0_3px_0_var(--color-line)]',
            )}
          >
            <span
              aria-hidden="true"
              className="h-3 w-3 shrink-0 rounded-full"
              style={{ background: PH_COLORS[Math.round(it.ph)] }}
            />
            {it.label}
          </button>
        ))}
      </div>

      <ZoomScene
        key={index}
        scene={item.scene}
        zoomed={zoomed}
        onZoomChange={setZoomed}
        zoomLabel="Phóng to vào trong dung dịch"
      >
        <IonView ph={item.ph} seed={item.label} />
      </ZoomScene>

      <PhBar ph={item.ph} />
      <div
        className="-mt-2 flex justify-between text-xs font-bold text-ink-soft"
        aria-hidden="true"
      >
        <span>← tính acid tăng</span>
        <span>trung tính</span>
        <span>tính base tăng →</span>
      </div>

      <p className="rounded-2xl bg-brand-soft p-3 text-center text-sm" role="status">
        <span className="font-extrabold">
          {item.label} có pH khoảng {formatPh(item.ph)}:
        </span>{' '}
        {KIND_TEXT[kind]}
        {zoomed && (
          <span className="mt-1 block text-xs text-ink-soft">
            Hình chỉ minh hoạ. Thật ra mỗi bậc pH, số ion H⁺ chênh nhau tới 10 lần.
          </span>
        )}
      </p>
    </div>
  )
}
