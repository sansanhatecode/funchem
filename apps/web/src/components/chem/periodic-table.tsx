import { CATEGORY_COLOR, PERIODIC_TABLE, type TableElement } from '@funchem/chem-ui'
import { MicroBackdrop } from './particle-view'

const CELL = 16.6
const LEFT = (320 - 18 * CELL) / 2
const TOP = 46

/**
 * Bảng tuần hoàn rút gọn vẽ trong khung 320x200.
 * Bốn hàng đầu đủ ô; hàng 5 và 6 chỉ hiện vài nguyên tố quen thuộc, các ô còn lại mờ để vẫn ra hình dáng bảng.
 */
export function PeriodicTableSvg({
  highlight = [],
  selected,
  className,
}: {
  highlight?: readonly string[]
  /** ký hiệu nguyên tố đang được chọn */
  selected?: string | undefined
  className?: string
}) {
  const known = new Map(PERIODIC_TABLE.map((e) => [`${e.period}-${e.group}`, e]))
  const hl = new Set(highlight)
  const ghosts: { period: number; group: number }[] = []
  for (const period of [5, 6]) {
    for (let group = 1; group <= 18; group++) {
      if (!known.has(`${period}-${group}`)) ghosts.push({ period, group })
    }
  }
  const pos = (e: { group: number; period: number }) => ({
    x: LEFT + (e.group - 1) * CELL,
    y: TOP + (e.period - 1) * CELL + (e.period > 4 ? 4 : 0),
  })

  return (
    <svg
      viewBox="0 0 320 200"
      preserveAspectRatio="xMidYMid slice"
      className={className ?? 'block h-full w-full'}
      role="img"
      aria-label="Bảng tuần hoàn rút gọn: các nguyên tố xếp theo số hiệu tăng dần, kim loại bên trái và ở giữa, phi kim ở góc trên bên phải, khí hiếm ở cột cuối."
    >
      <MicroBackdrop />
      {ghosts.map((g) => {
        const p = pos(g)
        return (
          <rect
            key={`${g.period}-${g.group}`}
            x={p.x + 0.8}
            y={p.y + 0.8}
            width={CELL - 1.6}
            height={CELL - 1.6}
            rx="2.5"
            fill="#fff"
            opacity="0.55"
          />
        )
      })}
      {PERIODIC_TABLE.map((e) => {
        const p = pos(e)
        const isSel = e.symbol === selected
        const isHl = hl.has(e.symbol)
        return (
          <g key={e.number} data-element={e.symbol}>
            <rect
              x={p.x + 0.8}
              y={p.y + 0.8}
              width={CELL - 1.6}
              height={CELL - 1.6}
              rx="2.5"
              fill={CATEGORY_COLOR[e.category]}
              stroke={isSel ? '#1f2a37' : isHl ? '#0b8f68' : 'none'}
              strokeWidth={isSel ? 1.8 : 1.2}
              opacity={hl.size > 0 && !isHl && !isSel ? 0.55 : 1}
            />
            <text
              x={p.x + CELL / 2}
              y={p.y + CELL / 2 + 1.6}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="6.2"
              fontWeight={800}
              fill="#1f2a37"
            >
              {e.symbol}
            </text>
            <text
              x={p.x + 2.4}
              y={p.y + 4.6}
              fontSize="3"
              fontWeight={700}
              fill="#1f2a37"
              opacity="0.7"
            >
              {e.number}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export function findTableElement(symbol: string): TableElement | undefined {
  return PERIODIC_TABLE.find((e) => e.symbol === symbol)
}
