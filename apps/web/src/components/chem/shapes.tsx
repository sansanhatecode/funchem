import type { PlacedBond } from '@funchem/chem-ui'
import { ELEMENTS, type ElementSymbol } from '@funchem/content/lib'

/** Một nguyên tử vẽ quanh gốc toạ độ (0,0) với bán kính r. Đặt vị trí bằng transform ở phần tử cha. */
export function AtomShape({
  element,
  r,
  showLabel = true,
}: {
  element: ElementSymbol
  r: number
  /** tắt ký hiệu khi nguyên tử bị xoay (chữ sẽ lộn ngược); khi đó cần chú giải màu bên cạnh */
  showLabel?: boolean
}) {
  const el = ELEMENTS[element]
  return (
    <>
      <circle
        r={r}
        fill={el.color}
        stroke="rgb(31 42 55 / 0.25)"
        strokeWidth={Math.max(0.6, r * 0.09)}
      />
      {/* điểm sáng tạo cảm giác khối cầu */}
      <circle cx={-r * 0.32} cy={-r * 0.34} r={r * 0.22} fill="rgb(255 255 255 / 0.45)" />
      {showLabel && (
        <text
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={r * (element.length > 1 ? 0.82 : 0.95)}
          fontWeight={800}
          fill={el.textColor}
        >
          {element}
        </text>
      )}
    </>
  )
}

/** Liên kết: que đơn/đôi/ba cho cộng hoá trị, nét đứt cho ion. */
export function BondShape({ bond }: { bond: PlacedBond }) {
  if (bond.kind === 'ionic') {
    return (
      <line
        x1={bond.x1}
        y1={bond.y1}
        x2={bond.x2}
        y2={bond.y2}
        stroke="#9aa5b1"
        strokeWidth={bond.width * 0.5}
        strokeDasharray={`${bond.width * 0.6} ${bond.width}`}
        strokeLinecap="round"
      />
    )
  }
  const dx = bond.x2 - bond.x1
  const dy = bond.y2 - bond.y1
  const len = Math.hypot(dx, dy) || 1
  // làm tròn để server và trình duyệt cho ra đúng một chuỗi toạ độ
  const nx = Math.round((-dy / len) * 1000) / 1000
  const ny = Math.round((dx / len) * 1000) / 1000
  const gap = bond.width * 0.95
  const offsets =
    bond.order === 1 ? [0] : bond.order === 2 ? [-gap, gap] : [-gap * 1.6, 0, gap * 1.6]
  return (
    <>
      {offsets.map((o) => (
        <line
          key={o}
          x1={bond.x1 + nx * o}
          y1={bond.y1 + ny * o}
          x2={bond.x2 + nx * o}
          y2={bond.y2 + ny * o}
          stroke="#6b7785"
          strokeWidth={bond.width}
          strokeLinecap="round"
        />
      ))}
    </>
  )
}
