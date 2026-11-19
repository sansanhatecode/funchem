import { C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const WALL = '#E8E4FA'
const WALL_SHADE = '#D5CEF3'
const PLATE = '#FFFFFF'
const PLATE_SHADE = '#D9E2EC'
const COAL = '#2E3440'
const COAL_LIGHT = '#566074'
const GLASS = 'M104 96 V132 Q104 142 114 142 H130 Q140 142 140 132 V96'
/** Tâm của bốn chiếc đĩa. */
const XS = [48, 122, 196, 270] as const
const TAGS = ['12 g', '18 g', '27 g', '56 g'] as const

/** Cây đinh nằm ngang, mũ đinh ở gốc (0,0), mũi nhọn chĩa sang phải. */
function Nail({ length = 40 }: { length?: number }) {
  return (
    <g>
      <path d={`M0 -2 H${length - 7} L${length} 0 L${length - 7} 2 H0 Z`} fill={C.metal} />
      <path d={`M0 0.4 H${length - 3} L${length - 7} 2 H0 Z`} fill={C.metalDark} opacity="0.6" />
      <rect x="-2.5" y="-5.5" width="4" height="11" rx="1.6" fill={C.metalDark} />
    </g>
  )
}

export function OneMoleSamplesScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={120} />

      {/* bốn chiếc đĩa và thẻ ghi khối lượng */}
      {XS.map((x, i) => (
        <g key={x}>
          <Shadow cx={x} cy={150} rx={36} ry={6} />
          <ellipse cx={x} cy={144} rx="33" ry="9" fill={PLATE_SHADE} />
          <ellipse cx={x} cy={142} rx="33" ry="9" fill={PLATE} />
          <ellipse cx={x} cy={142.5} rx="24" ry="5.5" fill={PLATE_SHADE} opacity="0.55" />
          <rect x={x - 22} y="164" width="44" height="22" rx="6" fill={C.white} />
          <rect x={x - 22} y="181" width="44" height="5" rx="2.5" fill={PLATE_SHADE} />
          <text
            x={x}
            y="180"
            textAnchor="middle"
            fontSize="13"
            fontWeight="800"
            fill={C.ink}
            fontFamily="inherit"
          >
            {TAGS[i]}
          </text>
        </g>
      ))}

      {/* 12 g carbon: mấy mẩu than */}
      <path d="M26 140 L30 124 L44 118 L54 126 L52 141 Z" fill={COAL} />
      <path d="M30 124 L44 118 L42 130 L34 132 Z" fill={COAL_LIGHT} />
      <path d="M48 142 L52 128 L64 124 L72 132 L68 143 Z" fill={COAL} />
      <path d="M52 128 L64 124 L62 133 Z" fill={COAL_LIGHT} />
      <path d="M38 144 L42 136 L52 135 L56 144 Z" fill={COAL} />
      <path d="M42 136 L52 135 L48 140 Z" fill={COAL_LIGHT} />

      {/* 18 g nước: chén thuỷ tinh nhỏ */}
      <path d="M106 120 H138 V132 Q138 140 130 140 H114 Q106 140 106 132 Z" fill={C.water} />
      <path d="M122 120 H138 V132 Q138 140 130 140 H122 Z" fill={C.waterDeep} opacity="0.4" />
      <ellipse cx="122" cy="120" rx="16" ry="2.6" fill={C.glass} />
      <path d={`${GLASS} Z`} fill={C.glass} opacity="0.25" />
      <path d={GLASS} fill="none" stroke={C.white} strokeWidth="3" strokeLinejoin="round" />
      <ellipse cx="122" cy="96" rx="18" ry="3.2" fill="none" stroke={C.white} strokeWidth="3" />
      <path
        d="M111 104 V130"
        stroke={C.white}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* 27 g nhôm: cuộn giấy nhôm */}
      <rect x="170" y="120" width="52" height="22" rx="11" fill={C.metal} />
      <rect x="170" y="120" width="52" height="9" rx="4.5" fill={C.metalLight} />
      <ellipse cx="222" cy="131" rx="6" ry="11" fill={C.metalDark} />
      <ellipse cx="222" cy="131" rx="2.6" ry="5" fill={C.woodDeep} />
      <path d="M172 136 Q160 140 164 146 L190 146 L194 140 Z" fill={C.metalLight} />
      <path d="M164 146 L190 146 L192 143 L166 143 Z" fill={C.metal} />
      <Sparkle x={186} y={116} size={6} />

      {/* 56 g sắt: nắm đinh */}
      <g transform="translate(250 140) rotate(-8)">
        <Nail length={44} />
      </g>
      <g transform="translate(248 134) rotate(6)">
        <Nail length={46} />
      </g>
      <g transform="translate(254 128) rotate(-14)">
        <Nail length={40} />
      </g>
      <g transform="translate(292 124) rotate(172)">
        <Nail length={42} />
      </g>
      <g transform="translate(290 142) rotate(186)">
        <Nail length={38} />
      </g>
      <Sparkle x={282} y={112} size={5} delay={-1.2} />
    </Scene>
  )
}
