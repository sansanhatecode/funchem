import { Bubble, C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const BRINE = '#F1F3B4'
const BRINE_DEEP = '#DADD84'
const LEAF = '#C4CF4F'
const LEAF_DEEP = '#9FAE34'
const STEM = '#F2EDB8'
const YOGURT_SHADE = '#E6ECF2'
const JAR = 'M70 60 Q52 66 52 86 V162 Q52 176 66 176 H152 Q166 176 166 162 V86 Q166 66 148 60 Z'
/** Lá và cuống dưa cải ngâm trong hũ: [x, y, góc xoay, cỡ]. */
const GREENS = [
  [76, 148, -20, 1.1],
  [104, 156, 12, 1.2],
  [136, 150, -8, 1.1],
  [88, 124, 26, 1],
  [122, 126, -30, 1.1],
  [146, 118, 16, 0.9],
  [70, 106, -12, 0.9],
  [106, 100, 6, 1],
] as const

/** Một lá dưa cải: phiến lá vàng xanh, cuống trắng ngà. */
function Green({ x, y, rotate, scale }: { x: number; y: number; rotate: number; scale: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <path d="M-18 0 Q-10 -12 6 -10 Q20 -8 20 2 Q16 12 0 11 Q-14 10 -18 0 Z" fill={LEAF} />
      <path d="M0 11 Q16 12 20 2 Q10 6 -6 4 Z" fill={LEAF_DEEP} opacity="0.7" />
      <path d="M-18 0 Q0 -2 14 0" fill="none" stroke={STEM} strokeWidth="4" strokeLinecap="round" />
    </g>
  )
}

/** Hũ sữa chua thuỷ tinh nhỏ có nắp. */
function Yogurt({ x, lid }: { x: number; lid: string }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <path
        d="M-20 126 Q-22 122 -18 120 H18 Q22 122 20 126 V168 Q20 176 12 176 H-12 Q-20 176 -20 168 Z"
        fill={C.glass}
        opacity="0.6"
      />
      <path d="M-18 132 H18 V168 Q18 174 12 174 H-12 Q-18 174 -18 168 Z" fill={C.white} />
      <path d="M2 132 H18 V168 Q18 174 12 174 H2 Z" fill={YOGURT_SHADE} />
      <path
        d="M-20 126 Q-22 122 -18 120 H18 Q22 122 20 126 V168 Q20 176 12 176 H-12 Q-20 176 -20 168 Z"
        fill="none"
        stroke={C.white}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <rect x="-23" y="111" width="46" height="11" rx="4" fill={lid} />
      <rect x="-23" y="117" width="46" height="5" rx="2.5" fill={C.ink} opacity="0.14" />
    </g>
  )
}

export function PickleJarsScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall="#DDF0E2" wallShade="#C2E3CB" tableY={152} tiles />

      {/* hũ dưa cải muối */}
      <Shadow cx={110} cy={178} rx={70} ry={7} />
      <path d={JAR} fill={C.glass} opacity="0.45" />
      <path d="M52 92 H166 V162 Q166 176 152 176 H66 Q52 176 52 162 Z" fill={BRINE} />
      <path d="M110 92 H166 V162 Q166 176 152 176 H110 Z" fill={BRINE_DEEP} opacity="0.45" />
      {GREENS.map(([x, y, rotate, scale], i) => (
        <Green key={i} x={x} y={y} rotate={rotate} scale={scale} />
      ))}
      <path d="M118 140 Q132 134 146 142 Q132 148 118 144 Z" fill={C.red} />
      <path d="M84 168 Q96 162 108 168 Q96 173 84 170 Z" fill={C.red} />
      <ellipse cx="109" cy="92" rx="57" ry="5" fill={BRINE_DEEP} />
      <ellipse cx="96" cy="91.5" rx="26" ry="2" fill={C.white} opacity="0.7" />
      {/* bọt khí li ti nổi lên khi dưa đang lên men */}
      <Bubble x={72} y={134} r={2.4} />
      <Bubble x={96} y={142} r={3} delay={-0.9} />
      <Bubble x={128} y={136} r={2.4} delay={-1.7} />
      <Bubble x={152} y={144} r={2.8} delay={-2.4} />
      <Bubble x={112} y={120} r={2} delay={-2.9} />
      <path d={JAR} fill="none" stroke={C.white} strokeWidth="3.4" strokeLinejoin="round" />
      <path d="M62 90 V156" stroke={C.white} strokeWidth="6" strokeLinecap="round" opacity="0.65" />
      {/* nắp hũ */}
      <rect x="62" y="38" width="94" height="24" rx="7" fill={C.red} />
      <rect x="62" y="52" width="94" height="10" rx="5" fill={C.redDeep} opacity="0.6" />
      <path
        d="M76 42 V58 M92 42 V58 M108 42 V58 M124 42 V58 M140 42 V58"
        stroke={C.redDeep}
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* hai hũ sữa chua */}
      <Shadow cx={246} cy={178} rx={62} ry={6} />
      <Yogurt x={214} lid={C.waterDeep} />
      <Yogurt x={270} lid={C.pink} />
      {/* hũ đã mở, thìa múc sữa chua */}
      <g transform="translate(244 0)">
        <ellipse cx="0" cy="190" rx="26" ry="6" fill={C.shadow} />
        <path d="M-22 166 H22 L18 186 Q17 191 12 191 H-12 Q-17 191 -18 186 Z" fill={C.white} />
        <path d="M4 166 H22 L18 186 Q17 191 12 191 H4 Z" fill={YOGURT_SHADE} />
        <ellipse cx="0" cy="166" rx="22" ry="5" fill={C.white} />
        <ellipse cx="0" cy="166.5" rx="17" ry="3.2" fill={YOGURT_SHADE} />
        <path d="M6 164 L34 138" stroke={C.metal} strokeWidth="4.5" strokeLinecap="round" />
        <ellipse
          cx="5"
          cy="165"
          rx="8"
          ry="4.5"
          fill={C.metalLight}
          transform="rotate(-42 5 165)"
        />
      </g>

      <Sparkle x={182} y={60} size={7} color={C.white} />
      <Sparkle x={292} y={98} size={5} color={C.white} delay={-1.1} />
    </Scene>
  )
}
