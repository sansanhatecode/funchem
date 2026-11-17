import { C, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

const WALL = '#FFE3D3'
const WALL_SHADE = '#FFCDB5'
const BAG_BACK = '#CFE3F5'
const BAG_FRONT = '#F4FAFF'
const BAG_LINE = '#9FC4E6'
const PEEL = '#FFD23F'
const PEEL_LIGHT = '#FFE680'
const PEEL_DEEP = '#E8A91A'
const PEEL_GREEN = '#B9D65A'
const STEM = '#7A6A2C'
const GAS = '#58C48A'
/** Quả chuối cong: cuống ở gốc (0,0), đầu quả ở khoảng x = 116. */
const BANANA = 'M0 0 C26 24 78 28 110 6 C114 3 119 6 117 11 C92 48 32 46 -6 12 C-9 6 -5 -2 0 0 Z'
const BANANA_BELLY = 'M-4 10 C30 40 88 42 116 10 C94 50 32 48 -6 12 Z'
const BAG_SIDES = 'L256 174 Q257 184 247 184 H73 Q63 184 64 174 Z'

function Banana({
  rot,
  color = PEEL,
  shade = PEEL_DEEP,
}: {
  rot: number
  color?: string
  shade?: string
}) {
  return (
    <g transform={`rotate(${rot})`}>
      <path d={BANANA} fill={color} />
      <path d={BANANA_BELLY} fill={shade} opacity="0.55" />
      <path
        d="M10 9 C36 24 74 25 100 12"
        fill="none"
        stroke={C.white}
        strokeWidth="3.4"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path d="M109 5 Q118 2 118 10 Q114 13 110 10 Z" fill={STEM} />
    </g>
  )
}

/** Làn khí ethylene vẽ tượng trưng: thật ra khí này không màu. */
function Wisp({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <path
      d={`M${x} ${y} q-6 -8 0 -16 q6 -8 0 -16`}
      fill="none"
      stroke={GAS}
      strokeWidth="3.6"
      strokeLinecap="round"
      opacity="0.75"
      className="sc sc-rise"
      style={{ animationDelay: `${delay}s`, animationDuration: '3.8s' }}
    />
  )
}

export function BananaBagScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={150} />
      <Shadow cx={160} cy={185} rx={112} ry={8} />

      {/* túi nilon: mặt sau và hai quai */}
      <path
        d="M92 86 Q74 26 100 22 Q124 22 114 82 M206 82 Q196 22 220 22 Q246 26 228 86"
        fill="none"
        stroke={BAG_BACK}
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path d={`M78 80 Q120 66 160 76 Q200 66 242 80 ${BAG_SIDES}`} fill={BAG_BACK} />

      {/* nải chuối chín vàng, còn một quả xanh */}
      <g transform="translate(158 62)">
        <Banana rot={54} color={PEEL_DEEP} shade={STEM} />
        <Banana rot={69} />
        <Banana rot={84} color={PEEL_LIGHT} />
        <Banana rot={99} />
        <Banana rot={115} color={PEEL_GREEN} shade={C.greenDeep} />
        <path d="M-14 -14 Q0 -20 12 -10 Q16 4 6 14 Q-8 14 -14 4 Z" fill={STEM} />
        <path
          d="M-9 -10 Q0 -14 7 -7"
          fill="none"
          stroke={PEEL_GREEN}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
      {/* đốm nâu của chuối chín */}
      <g fill={STEM} opacity="0.75">
        <circle cx="172" cy="118" r="2" />
        <circle cx="150" cy="132" r="1.7" />
        <circle cx="186" cy="100" r="1.6" />
        <circle cx="142" cy="108" r="1.6" />
        <circle cx="160" cy="150" r="1.5" />
      </g>

      {/* mặt trước của túi, trong mờ nên vẫn thấy chuối bên trong */}
      <path
        d={`M78 80 Q118 104 160 92 Q202 104 242 80 ${BAG_SIDES}`}
        fill={BAG_FRONT}
        opacity="0.3"
      />
      <path
        d="M78 80 Q118 104 160 92 Q202 104 242 80"
        fill="none"
        stroke={BAG_FRONT}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M84 110 Q92 140 80 168 M236 108 Q226 138 240 170 M112 172 Q150 164 196 174 M104 124 Q110 134 106 146"
        fill="none"
        stroke={BAG_LINE}
        strokeWidth="2.6"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M222 100 Q230 130 226 160"
        fill="none"
        stroke={C.white}
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M96 98 Q98 112 94 124"
        fill="none"
        stroke={C.white}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* khí ethylene toả ra từ chuối chín */}
      <Wisp x={136} y={62} delay={0} />
      <Wisp x={184} y={58} delay={-1.3} />
      <Wisp x={160} y={44} delay={-2.5} />
      <g fill={GAS} opacity="0.8" className="sc sc-float">
        <circle cx="148" cy="24" r="3" />
        <circle cx="176" cy="16" r="2.4" />
        <circle cx="198" cy="34" r="2.6" />
      </g>
    </Scene>
  )
}
