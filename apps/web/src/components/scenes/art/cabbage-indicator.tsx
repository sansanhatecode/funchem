import { C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const CABBAGE = '#8E4FB8'
const CABBAGE_DEEP = '#6C3594'
const CABBAGE_VEIN = '#F1E4F7'
const ACID = { fill: '#F4628B', deep: '#D53C6B' }
const NEUTRAL = { fill: '#9A63D4', deep: '#7645B4' }
const BASE = { fill: '#3F9BE0', deep: '#2577BF' }
const VINEGAR = '#FFEFA8'

/** Cốc thuỷ tinh thẳng đứng đựng nước bắp cải, tâm đáy ở (x, 168). */
function Glass({ x, tone }: { x: number; tone: { fill: string; deep: string } }) {
  const l = x - 27
  const r = x + 27
  return (
    <g>
      <Shadow cx={x + 3} cy={170} rx={34} ry={5} />
      <path
        d={`M${l} 96 V156 Q${l} 168 ${l + 12} 168 H${r - 12} Q${r} 168 ${r} 156 V96 Z`}
        fill={tone.fill}
      />
      <path
        d={`M${x} 96 H${r} V156 Q${r} 168 ${r - 12} 168 H${x} Z`}
        fill={tone.deep}
        opacity="0.45"
      />
      <ellipse cx={x} cy="96" rx="27" ry="4.6" fill={tone.deep} />
      <ellipse cx={x - 6} cy="95.4" rx="12" ry="1.8" fill={C.white} opacity="0.6" />
      <path
        d={`M${l} 76 V156 Q${l} 168 ${l + 12} 168 H${r - 12} Q${r} 168 ${r} 156 V76`}
        fill="none"
        stroke={C.white}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <ellipse cx={x} cy="76" rx="27" ry="4.6" fill="none" stroke={C.white} strokeWidth="3" />
      <path
        d={`M${l + 8} 86 V150`}
        stroke={C.white}
        strokeWidth="4.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </g>
  )
}

export function CabbageIndicatorScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall="#FFF1D6" wallShade="#FBE1B4" tableY={152} tiles />

      {/* nửa cây bắp cải tím phía sau */}
      <Shadow cx={268} cy={156} rx={44} ry={5} />
      <circle cx="268" cy="112" r="44" fill={CABBAGE_DEEP} />
      <circle cx="268" cy="112" r="38" fill={CABBAGE} />
      {/* các lớp lá cuộn quanh lõi trắng */}
      <g fill="none" stroke={CABBAGE_VEIN} strokeLinecap="round">
        <path d="M243 136 Q230 108 250 88 Q268 74 286 88 Q306 108 293 136" strokeWidth="3.4" />
        <path d="M252 134 Q244 112 256 100 Q268 90 280 100 Q292 112 284 134" strokeWidth="3" />
        <path d="M261 126 Q258 114 268 108 Q278 114 275 126" strokeWidth="2.6" />
      </g>
      <path d="M258 150 Q262 132 268 120 Q274 132 278 150 Z" fill={CABBAGE_VEIN} />

      {/* ba cốc: acid, để nguyên, base */}
      <Glass x={70} tone={ACID} />
      <Glass x={146} tone={NEUTRAL} />
      <Glass x={222} tone={BASE} />

      {/* thìa giấm nhỏ vào cốc bên trái */}
      <g transform="rotate(-18 60 46)">
        <path d="M0 38 L44 44" stroke={C.metal} strokeWidth="5.5" strokeLinecap="round" />
        <ellipse cx="60" cy="46" rx="17" ry="7" fill={C.metal} />
        <ellipse cx="60" cy="45" rx="13" ry="4.6" fill={VINEGAR} />
      </g>
      <path
        d="M74 58 Q79 68 74 72 Q69 68 74 58 Z"
        fill={VINEGAR}
        stroke={C.goldDeep}
        strokeWidth="1"
        className="sc sc-float"
        style={{ animationDuration: '1.6s' }}
      />
      <ellipse
        cx="70"
        cy="96"
        rx="12"
        ry="2.4"
        fill="none"
        stroke={C.white}
        strokeWidth="2"
        className="sc sc-ripple"
      />
      {/* vệt hồng đỏ loang trong cốc acid */}
      <path
        d="M58 108 Q70 118 82 108 M62 128 Q72 136 80 128"
        fill="none"
        stroke={C.white}
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* thìa baking soda rắc vào cốc bên phải */}
      <g transform="rotate(16 232 44)">
        <path d="M292 36 L248 42" stroke={C.metal} strokeWidth="5.5" strokeLinecap="round" />
        <ellipse cx="232" cy="44" rx="17" ry="7" fill={C.metal} />
        <path d="M219 43 Q232 28 245 43 Q232 47 219 43 Z" fill={C.white} />
      </g>
      <g fill={C.white} className="sc sc-rain" style={{ animationDuration: '1.9s' }}>
        <circle cx="220" cy="62" r="2" />
        <circle cx="226" cy="70" r="1.6" />
        <circle cx="216" cy="74" r="1.4" />
      </g>
      <g fill={C.white} opacity="0.8">
        <circle cx="212" cy="120" r="1.8" />
        <circle cx="228" cy="134" r="1.5" />
        <circle cx="220" cy="150" r="2" />
        <circle cx="234" cy="112" r="1.4" />
      </g>

      {/* lá bắp cải thái nhỏ trên bàn */}
      <g fill={CABBAGE}>
        <path d="M122 186 q8 -8 18 -2 q-8 8 -18 2 Z" />
        <path d="M162 190 q10 -6 18 0 q-10 6 -18 0 Z" fill={CABBAGE_DEEP} />
        <path d="M22 184 q8 -8 18 -2 q-8 8 -18 2 Z" fill={CABBAGE_DEEP} />
      </g>

      <Sparkle x={104} y={70} size={7} />
      <Sparkle x={186} y={64} size={6} delay={-1.2} />
    </Scene>
  )
}
