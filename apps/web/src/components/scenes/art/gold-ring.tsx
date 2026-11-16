import { C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const VELVET = '#7A5CC4'
const VELVET_DARK = '#5B43A3'
const SATIN = '#F3ECFF'
const SATIN_SHADE = '#E2D6FA'

/** Hình vành khuyên elip (dùng với fillRule evenodd). */
const oval = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx - rx} ${cy} a${rx} ${ry} 0 1 0 ${rx * 2} 0 a${rx} ${ry} 0 1 0 ${-rx * 2} 0 Z`
const band = (cx: number) => `${oval(cx, 82, 37, 45)} ${oval(cx, 82, 23, 31)}`

export function GoldRingScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall="#FFECEF" wallShade="#FFD5DC" tableY={152} />
      <Shadow cx={160} cy={179} rx={88} ry={7} />

      {/* nắp hộp mở dựng phía sau */}
      <rect x="90" y="12" width="140" height="126" rx="16" fill={VELVET} />
      <path d="M160 12 H214 A16 16 0 0 1 230 28 V138 H160 Z" fill={VELVET_DARK} opacity="0.4" />
      <rect x="99" y="21" width="122" height="112" rx="10" fill={SATIN} />
      <path d="M124 21 V133 M160 21 V133 M196 21 V133" stroke={SATIN_SHADE} strokeWidth="5" />
      <circle cx="158" cy="80" r="50" fill={C.yellow} opacity="0.45" className="sc sc-pulse" />

      {/* khe đệm nhung phía sau nhẫn */}
      <path d="M99 133 V124 Q99 112 111 112 H209 Q221 112 221 124 V133 Z" fill={VELVET_DARK} />

      {/* nhẫn vàng: mặt sau (thấy lòng nhẫn và cạnh ngoài) rồi mặt trước */}
      <path d={band(166)} fill={C.goldDeep} fillRule="evenodd" />
      <path d={band(152)} fill={C.gold} fillRule="evenodd" />
      <path
        d="M152 44 A30 38 0 0 1 152 120"
        fill="none"
        stroke={C.goldDeep}
        strokeWidth="13"
        opacity="0.3"
      />
      <path
        d="M124.8 66 A30 38 0 0 1 157.2 44.6"
        fill="none"
        stroke={C.white}
        strokeWidth="4.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M135 104 A30 38 0 0 1 124.5 92"
        fill="none"
        stroke={C.white}
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* đệm nhung phía trước ôm chân nhẫn */}
      <path d="M99 138 V128 Q99 117 111 117 H209 Q221 117 221 128 V138 Z" fill={C.purple} />
      <path
        d="M108 122 H212"
        stroke={C.white}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.3"
      />

      {/* thân hộp */}
      <rect x="90" y="132" width="140" height="48" rx="13" fill={VELVET} />
      <path
        d="M160 132 H217 A13 13 0 0 1 230 145 V167 A13 13 0 0 1 217 180 H160 Z"
        fill={VELVET_DARK}
        opacity="0.45"
      />
      <rect x="90" y="132" width="140" height="10" rx="5" fill="#9478E0" />
      <rect x="151" y="136" width="18" height="14" rx="4" fill={C.gold} />
      <rect x="151" y="143" width="18" height="7" rx="3.5" fill={C.goldDeep} opacity="0.6" />

      <Sparkle x={128} y={52} size={10} />
      <Sparkle x={200} y={60} size={8} delay={-0.8} />
      <Sparkle x={176} y={30} size={6} color={C.gold} delay={-1.5} />
    </Scene>
  )
}
