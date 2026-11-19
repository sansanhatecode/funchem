import { Bubble, C, Flame, IndoorBg, Scene, type SceneProps, Shadow, Steam } from '../kit'

const WALL = '#FFF0D2'
const WALL_SHADE = '#FBDDA6'
const STOVE = '#3A4658'
const STOVE_LIGHT = '#5B6B80'
const BROTH = '#F2793C'
const BROTH_DEEP = '#D95A22'
const CAN = '#FFC93C'
const CAN_DEEP = '#E0A100'

export function HotpotGasCanScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={170} tiles />

      {/* thân bếp gas mini */}
      <Shadow cx={160} cy={190} rx={140} ry={6} />
      <rect x="24" y="128" width="272" height="60" rx="10" fill={STOVE} />
      <rect x="24" y="128" width="272" height="10" rx="5" fill={STOVE_LIGHT} />
      {/* núm vặn */}
      <circle cx="50" cy="162" r="11" fill={C.metal} />
      <path d="M50 162 l6 -7" stroke={C.ink} strokeWidth="3" strokeLinecap="round" />

      {/* ngăn chứa lon gas, nắp đang mở */}
      <rect x="206" y="134" width="84" height="48" rx="7" fill={C.ink} />
      <path d="M206 134 L212 108 H284 L290 134 Z" fill={STOVE_LIGHT} />
      <path d="M212 108 H284 L285 113 H211 Z" fill={C.metal} opacity="0.6" />
      {/* lon gas butane nằm ngang */}
      <rect x="216" y="142" width="62" height="32" rx="8" fill={CAN} />
      <rect x="216" y="160" width="62" height="14" rx="7" fill={CAN_DEEP} opacity="0.6" />
      <rect x="232" y="142" width="30" height="32" fill={C.red} />
      <path
        d="M247 148 C254 155 253 165 247 167 C241 165 240 155 247 148 Z"
        fill={C.blueFlameCore}
      />
      <rect x="209" y="152" width="9" height="12" rx="2" fill={C.metalDark} />
      <rect x="220" y="145" width="5" height="26" rx="2.5" fill={C.white} opacity="0.5" />

      {/* kiềng và lửa xanh */}
      <path
        d="M92 128 v-12 M178 128 v-12"
        stroke={C.metalDark}
        strokeWidth="5"
        strokeLinecap="round"
      />
      {[106, 120, 135, 150, 164].map((x, i) => (
        <Flame
          key={x}
          x={x}
          y={128}
          size={i % 2 ? 12 : 15}
          outer={C.blueFlame}
          core={C.blueFlameCore}
          delay={-i * 0.14}
        />
      ))}

      {/* nồi lẩu */}
      <rect x="62" y="74" width="24" height="9" rx="4.5" fill={C.ink} />
      <rect x="184" y="74" width="24" height="9" rx="4.5" fill={C.ink} />
      <path d="M80 66 V102 Q80 116 94 116 H176 Q190 116 190 102 V66 Z" fill={C.metal} />
      <path d="M150 66 H190 V102 Q190 116 176 116 H150 Z" fill={C.metalDark} opacity="0.45" />
      <rect x="88" y="78" width="7" height="28" rx="3.5" fill={C.white} opacity="0.7" />
      <ellipse cx="135" cy="66" rx="59" ry="10" fill={C.metalLight} />
      <ellipse cx="135" cy="67" rx="52" ry="7.5" fill={BROTH} />
      <path
        d="M135 59.5 A52 7.5 0 0 1 187 67 A52 7.5 0 0 1 135 74.5 Z"
        fill={BROTH_DEEP}
        opacity="0.5"
      />
      {/* rau, nấm, đậu phụ nổi trong nồi */}
      <ellipse cx="108" cy="66" rx="9" ry="3.4" fill={C.green} />
      <ellipse cx="128" cy="69" rx="7" ry="3" fill={C.white} />
      <ellipse cx="150" cy="65" rx="8" ry="3.2" fill={C.greenDeep} />
      <ellipse cx="168" cy="69" rx="6" ry="2.6" fill={C.yellow} />
      <Bubble x={118} y={70} r={2.4} delay={0} duration={2.4} />
      <Bubble x={158} y={70} r={2} delay={-1} duration={2.4} />
      <Steam x={112} y={54} />
      <Steam x={140} y={46} delay={-1.2} />
      <Steam x={164} y={54} delay={-2.3} />
    </Scene>
  )
}
