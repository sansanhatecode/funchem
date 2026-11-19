import { Bubble, C, Flame, IndoorBg, Scene, type SceneProps, Shadow, Steam } from '../kit'

const WALL = '#FFE7D0'
const WALL_SHADE = '#FBCFA6'
const STOVE = '#3A4658'
const STOVE_LIGHT = '#5B6B80'
const CAN = '#F4F7FA'
const CAN_BAND = '#3B9BFF'
const POT = '#C9D2DC'
const POT_DEEP = '#9AA7B6'
const BROTH = '#F2793A'
const BROTH_LIGHT = '#FFA65C'

export function HotpotGasStoveScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={150} />

      {/* đĩa rau bên cạnh */}
      <ellipse cx="286" cy="178" rx="30" ry="7" fill={C.white} />
      <g fill={C.green}>
        <ellipse cx="276" cy="170" rx="12" ry="6" transform="rotate(-18 276 170)" />
        <ellipse
          cx="294"
          cy="168"
          rx="12"
          ry="6"
          transform="rotate(16 294 168)"
          fill={C.greenDeep}
        />
        <ellipse cx="286" cy="174" rx="11" ry="5" />
      </g>

      {/* bếp gas mini */}
      <Shadow cx={150} cy={188} rx={136} ry={7} />
      <rect x="18" y="140" width="266" height="46" rx="10" fill={STOVE} />
      <rect x="18" y="140" width="266" height="10" rx="5" fill={STOVE_LIGHT} />
      {/* ngăn chứa lon gas, nắp đang mở để thấy lon bên trong */}
      <rect x="26" y="150" width="104" height="30" rx="6" fill={C.ink} />
      <path d="M26 140 L34 108 H138 L130 140 Z" fill={STOVE_LIGHT} />
      <path d="M40 114 H132 L129 124 H37 Z" fill={C.white} opacity="0.18" />
      {/* lon butane nằm ngang */}
      <rect x="34" y="153" width="82" height="24" rx="8" fill={CAN} />
      <rect x="52" y="153" width="34" height="24" fill={CAN_BAND} />
      <path d="M69 158 C75 163 74 171 69 172 C64 171 63 163 69 158 Z" fill={C.white} />
      <rect x="34" y="155" width="82" height="4" rx="2" fill={C.white} opacity="0.7" />
      <rect x="114" y="160" width="12" height="10" rx="3" fill={C.metalDark} />
      {/* núm vặn */}
      <circle cx="258" cy="168" r="10" fill={C.metal} />
      <path d="M258 168 l6 -6" stroke={C.ink} strokeWidth="3" strokeLinecap="round" />

      {/* kiềng và vòng lửa xanh */}
      <path
        d="M158 140 v-12 M246 140 v-12"
        stroke={C.metalDark}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <rect x="176" y="134" width="52" height="7" rx="3.5" fill={C.metalDark} />
      {[170, 183, 196, 209, 222, 235].map((x, i) => (
        <Flame
          key={x}
          x={x}
          y={138}
          size={i % 2 ? 14 : 18}
          outer={C.blueFlame}
          core={C.blueFlameCore}
          delay={-i * 0.13}
        />
      ))}

      {/* nồi lẩu */}
      <rect x="126" y="92" width="18" height="9" rx="4.5" fill={POT_DEEP} />
      <rect x="260" y="92" width="18" height="9" rx="4.5" fill={POT_DEEP} />
      <path d="M140 86 H264 V112 Q264 128 248 128 H156 Q140 128 140 112 Z" fill={POT} />
      <path d="M202 86 H264 V112 Q264 128 248 128 H202 Z" fill={POT_DEEP} opacity="0.55" />
      <ellipse cx="202" cy="86" rx="62" ry="11" fill={C.metalLight} />
      <ellipse cx="202" cy="87" rx="55" ry="8" fill={BROTH} />
      <ellipse cx="188" cy="85" rx="20" ry="3" fill={BROTH_LIGHT} />
      {/* đồ nhúng nổi trên mặt nước lẩu */}
      <ellipse cx="174" cy="88" rx="10" ry="3.6" fill={C.green} />
      <ellipse cx="226" cy="86" rx="9" ry="3.4" fill={C.greenDeep} />
      <circle cx="202" cy="89" r="4.4" fill={C.white} />
      <circle cx="240" cy="90" r="3.6" fill={C.yellow} />
      <rect x="148" y="94" width="6" height="26" rx="3" fill={C.white} opacity="0.5" />

      <Bubble x={190} y={84} r={2.2} color={BROTH_LIGHT} duration={1.4} />
      <Bubble x={216} y={84} r={2.6} color={BROTH_LIGHT} delay={-0.7} duration={1.6} />
      <Steam x={178} y={66} />
      <Steam x={204} y={58} delay={-1.2} />
      <Steam x={230} y={66} delay={-2.4} />
    </Scene>
  )
}
