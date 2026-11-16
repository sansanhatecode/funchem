import { C, OutdoorBg, Scene, type SceneProps } from '../kit'

const KNOT_X = 160
const KNOT_Y = 170

interface BalloonSpec {
  x: number
  y: number
  fill: string
  deep: string
  delay: number
}
const BALLOONS: BalloonSpec[] = [
  { x: 160, y: 48, fill: C.gold, deep: C.goldDeep, delay: 0 },
  { x: 112, y: 70, fill: C.red, deep: C.redDeep, delay: -1.3 },
  { x: 208, y: 68, fill: C.waterDeep, deep: '#2F8AC4', delay: -2.4 },
  { x: 136, y: 100, fill: C.green, deep: C.greenDeep, delay: -3.1 },
  { x: 186, y: 98, fill: C.purple, deep: '#7458C2', delay: -0.7 },
]

/** Một quả bóng cùng sợi dây; cả nhóm đung đưa quanh nút buộc. */
function Balloon({ x, y, fill, deep, delay }: BalloonSpec) {
  const half = Math.abs(x - KNOT_X) + 30
  const neck = y + 36
  return (
    <g className="sc sc-sway" style={{ animationDelay: `${delay}s` }}>
      {/* khung vô hình để tâm xoay nằm đúng nút buộc */}
      <rect x={KNOT_X - half} y={KNOT_Y - 1} width={half * 2} height="1" fill="none" />
      <path
        d={`M${x} ${neck} Q${x + (KNOT_X - x) * 0.15} ${(neck + KNOT_Y) / 2 + 8} ${KNOT_X} ${KNOT_Y}`}
        fill="none"
        stroke={C.inkSoft}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d={`M${x - 5} ${neck + 2} L${x} ${neck - 7} L${x + 5} ${neck + 2} Z`}
        fill={deep}
        stroke={deep}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <ellipse cx={x} cy={y} rx="28" ry="33" fill={deep} />
      <ellipse cx={x - 3} cy={y - 3} rx="25" ry="30" fill={fill} />
      <ellipse
        cx={x - 12}
        cy={y - 13}
        rx="5"
        ry="9.5"
        fill={C.white}
        opacity="0.6"
        transform={`rotate(24 ${x - 12} ${y - 13})`}
      />
    </g>
  )
}

export function BalloonsScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <OutdoorBg groundY={176} />
      {/* cọc gỗ giữ chùm bóng */}
      <ellipse cx="162" cy="190" rx="20" ry="4" fill={C.shadow} />
      <rect x="154" y="166" width="12" height="25" rx="4" fill={C.woodDeep} />
      <rect x="154" y="166" width="5" height="25" rx="2.5" fill={C.wood} />

      {BALLOONS.map((b) => (
        <Balloon key={b.fill} {...b} />
      ))}

      {/* nơ buộc dây */}
      <path
        d="M160 170 l-11 -6 v12 Z M160 170 l11 -6 v12 Z"
        fill={C.pink}
        stroke={C.pink}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="160" cy="170" r="3.6" fill="#E96A92" />
    </Scene>
  )
}
