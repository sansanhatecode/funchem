import { C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const WALL = '#FFD6C6'
const WALL_SHADE = '#FFC2AC'
const DOOR = '#FFF4E8'
const DOOR_SHADE = '#F4D9C4'
const PERFUME_DEEP = '#7B5FC4'
const TINTS = [C.purple, C.white, C.pink] as const
/** Hạt hương toả ra, càng xa càng thưa: [x, y, r] */
const DOTS = [
  [154, 56, 2.4],
  [166, 78, 2],
  [170, 42, 2.2],
  [184, 92, 2.6],
  [190, 28, 2],
  [240, 26, 3],
  [252, 72, 3.4],
  [238, 112, 3],
  [258, 46, 2.4],
  [262, 98, 2.8],
  [278, 30, 2.2],
  [284, 70, 2.6],
  [294, 50, 1.8],
  [296, 108, 2],
  [308, 82, 1.6],
  [270, 128, 2],
  [248, 138, 1.8],
  [310, 28, 1.4],
] as const

export function PerfumeScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={152} />

      {/* cánh cửa phía xa */}
      <rect x="262" y="24" width="58" height="128" fill={WALL_SHADE} />
      <rect x="270" y="32" width="50" height="120" fill={DOOR} />
      <rect x="280" y="42" width="40" height="42" rx="3" fill={DOOR_SHADE} />
      <rect x="280" y="94" width="40" height="48" rx="3" fill={DOOR_SHADE} />
      <rect x="274" y="84" width="4" height="14" rx="2" fill={C.goldDeep} />

      {/* làn sương phun ra */}
      <g className="sc sc-pulse" style={{ transformOrigin: '0% 50%' }}>
        <g fill={C.white} opacity="0.62">
          <path d="M136 64 L204 30 L208 104 Z" />
          <circle cx="208" cy="42" r="15" />
          <circle cx="227" cy="65" r="18" />
          <circle cx="212" cy="91" r="15" />
          <circle cx="204" cy="66" r="20" />
          <circle cx="246" cy="42" r="6" />
          <circle cx="244" cy="92" r="5" />
        </g>
      </g>

      {/* hạt hương lan khắp phòng */}
      {[0, 1].map((k) => (
        <g key={k} className="sc sc-float" style={{ animationDelay: `${-k * 2}s` }}>
          {DOTS.map(([x, y, r], i) =>
            i % 2 === k ? <circle key={i} cx={x} cy={y} r={r} fill={TINTS[i % 3]} /> : null,
          )}
        </g>
      ))}
      {[52, 78, 100].map((y, i) => (
        <circle
          key={y}
          cx="180"
          cy={y}
          r={3 - i * 0.4}
          fill={TINTS[(i * 2) % 3]}
          className="sc sc-drift"
          style={{ animationDuration: '11s', animationDelay: `${-i * 3.6}s` }}
        />
      ))}

      {/* lọ nước hoa */}
      <Shadow cx={114} cy={171} rx={50} ry={6} />
      <rect x="68" y="94" width="84" height="76" rx="16" fill={C.white} opacity="0.55" />
      <path d="M74 122 H146 V152 Q146 164 134 164 H86 Q74 164 74 152 Z" fill={C.purple} />
      <path d="M114 122 H146 V152 Q146 164 134 164 H114 Z" fill={PERFUME_DEEP} opacity="0.55" />
      <rect x="74" y="122" width="72" height="4" fill={C.white} opacity="0.35" />
      <rect
        x="68"
        y="94"
        width="84"
        height="76"
        rx="16"
        fill="none"
        stroke={C.white}
        strokeWidth="3"
      />
      <rect x="78" y="106" width="6" height="48" rx="3" fill={C.white} opacity="0.65" />
      {/* cổ lọ và đầu xịt */}
      <rect x="101" y="80" width="18" height="16" fill={C.goldDeep} />
      <rect x="92" y="88" width="36" height="9" rx="3.5" fill={C.gold} />
      <rect x="122" y="59" width="15" height="10" rx="3" fill={C.goldDeep} />
      <rect x="94" y="50" width="32" height="34" rx="7" fill={C.gold} />
      <path
        d="M112 50 H119 Q126 50 126 57 V77 Q126 84 119 84 H112 Z"
        fill={C.goldDeep}
        opacity="0.6"
      />
      <rect x="99" y="56" width="5" height="20" rx="2.5" fill={C.white} opacity="0.6" />

      <Sparkle x={134} y={142} size={6} delay={-0.6} />
    </Scene>
  )
}
