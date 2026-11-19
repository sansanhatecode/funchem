import { Bubble, C, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

const WALL = '#F1F8E4'
const WALL_SHADE = '#DDEFC2'
const OIL = '#FFC93C'
const OIL_DEEP = '#E9A712'
const OIL_LIGHT = '#FFE38A'
const VINEGAR = '#B5533C'
const VINEGAR_DEEP = '#8E3B28'
const CORK = '#D9A066'
const CORK_DEEP = '#B57A3F'
const BOWL = '#FFFFFF'
const BOWL_SHADE = '#D9E4EE'
const LEAF = '#8FD694'
const LEAF_DEEP = '#4FB262'
const TOMATO = '#F25F5C'
const BOTTLE =
  'M70 86 Q70 70 86 64 V34 H114 V64 Q130 70 130 86 V156 Q130 170 116 170 H84 Q70 170 70 156 Z'
/** Giọt dầu li ti còn lơ lửng trong lớp giấm, đang nổi dần lên: [x, y, bán kính, độ trễ]. */
const DROPS = [
  [84, 158, 3.4, 0],
  [100, 162, 4.4, -1.2],
  [116, 156, 3, -2.1],
  [92, 150, 2.6, -2.8],
  [108, 148, 3.2, -0.6],
] as const

export function SaladDressingScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={150} />

      {/* bát salad */}
      <Shadow cx={226} cy={182} rx={70} ry={6} />
      <g>
        <ellipse
          cx="196"
          cy="132"
          rx="26"
          ry="16"
          fill={LEAF_DEEP}
          transform="rotate(-20 196 132)"
        />
        <ellipse cx="232" cy="124" rx="30" ry="18" fill={LEAF} transform="rotate(8 232 124)" />
        <ellipse
          cx="262"
          cy="134"
          rx="24"
          ry="15"
          fill={LEAF_DEEP}
          transform="rotate(24 262 134)"
        />
        <ellipse cx="216" cy="136" rx="22" ry="13" fill={LEAF} transform="rotate(-6 216 136)" />
        <circle cx="244" cy="136" r="11" fill={TOMATO} />
        <circle cx="241" cy="133" r="3.4" fill={C.white} opacity="0.5" />
        <circle cx="198" cy="140" r="8" fill={TOMATO} />
        <path
          d="M222 122 Q232 112 244 118"
          fill="none"
          stroke={C.white}
          strokeWidth="2"
          opacity="0.6"
        />
      </g>
      <path d="M160 142 H292 Q290 182 226 182 Q162 182 160 142 Z" fill={BOWL} />
      <path d="M226 142 H292 Q290 182 226 182 Z" fill={BOWL_SHADE} />
      <rect x="158" y="138" width="136" height="8" rx="4" fill={BOWL} />

      {/* chai dầu giấm: dầu vàng nổi trên, giấm nâu đỏ ở dưới */}
      <Shadow cx={100} cy={174} rx={42} ry={6} />
      <path d="M72 124 H128 V156 Q128 168 116 168 H84 Q72 168 72 156 Z" fill={VINEGAR} />
      <path d="M100 124 H128 V156 Q128 168 116 168 H100 Z" fill={VINEGAR_DEEP} opacity="0.55" />
      {DROPS.map(([x, y, r, delay], i) => (
        <Bubble key={i} x={x} y={y} r={r} delay={delay} color={OIL} duration={3.8} />
      ))}
      <path d="M72 92 H128 V124 Q114 130 100 125 Q86 120 72 126 Z" fill={OIL} />
      <path d="M100 92 H128 V124 Q114 130 100 125 Z" fill={OIL_DEEP} opacity="0.5" />
      <ellipse cx="100" cy="92" rx="28" ry="4" fill={OIL_LIGHT} />
      {/* giọt giấm còn lẫn trong lớp dầu sau khi lắc */}
      <circle cx="90" cy="110" r="3.4" fill={VINEGAR} opacity="0.85" className="sc sc-float" />
      <circle cx="112" cy="104" r="2.6" fill={VINEGAR} opacity="0.85" className="sc sc-float" />
      <path
        d="M72 126 Q86 120 100 125 Q114 130 128 124"
        fill="none"
        stroke={C.white}
        strokeWidth="2.2"
        opacity="0.75"
      />
      <path d={BOTTLE} fill={C.glass} opacity="0.26" />
      <path d={BOTTLE} fill="none" stroke={C.white} strokeWidth="3" strokeLinejoin="round" />
      <rect x="88" y="20" width="24" height="18" rx="5" fill={CORK} />
      <rect x="100" y="20" width="12" height="18" rx="5" fill={CORK_DEEP} opacity="0.6" />
      <path d="M78 78 V150" stroke={C.white} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
    </Scene>
  )
}
