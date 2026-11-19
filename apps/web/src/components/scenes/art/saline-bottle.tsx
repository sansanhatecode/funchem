import { C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const WALL = '#E6F6F3'
const WALL_SHADE = '#CDEBE5'
const CAP = '#2F9BE0'
const CAP_DEEP = '#1E78B8'
const LABEL = '#FFFFFF'
const LABEL_BAND = '#2F9BE0'
const COTTON = '#FFFFFF'
const COTTON_SHADE = '#DDE7F0'
const BOTTLE =
  'M112 78 Q112 62 126 58 V46 H178 V58 Q192 62 192 78 V156 Q192 170 178 170 H126 Q112 170 112 156 Z'

export function SalineBottleScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={150} tiles />

      {/* túi bông gòn */}
      <Shadow cx={254} cy={180} rx={44} ry={5} />
      <g>
        <circle cx="236" cy="166" r="14" fill={COTTON} />
        <circle cx="256" cy="158" r="16" fill={COTTON} />
        <circle cx="276" cy="168" r="13" fill={COTTON} />
        <circle cx="258" cy="172" r="13" fill={COTTON_SHADE} />
        <circle cx="244" cy="172" r="10" fill={COTTON} />
      </g>

      {/* lọ nhỏ giọt mini */}
      <Shadow cx={58} cy={180} rx={22} ry={4} />
      <path
        d="M44 128 Q44 120 52 120 H64 Q72 120 72 128 V170 Q72 178 64 178 H52 Q44 178 44 170 Z"
        fill={C.glass}
      />
      <path d="M46 146 H70 V170 Q70 176 64 176 H52 Q46 176 46 170 Z" fill={C.water} opacity="0.8" />
      <path d="M52 120 L56 100 H60 L64 120 Z" fill={CAP} />
      <rect x="44" y="138" width="28" height="18" fill={LABEL} opacity="0.95" />
      <rect x="44" y="138" width="28" height="5" fill={LABEL_BAND} />

      {/* chai nước muối sinh lí */}
      <Shadow cx={152} cy={174} rx={54} ry={7} />
      <path
        d="M114 84 H190 V156 Q190 168 178 168 H126 Q114 168 114 156 Z"
        fill={C.water}
        opacity="0.75"
      />
      <path d="M152 84 H190 V156 Q190 168 178 168 H152 Z" fill={C.waterDeep} opacity="0.3" />
      <ellipse cx="152" cy="84" rx="38" ry="4" fill={C.waterDeep} opacity="0.8" />
      <path d={BOTTLE} fill={C.glass} opacity="0.3" />
      <path d={BOTTLE} fill="none" stroke={C.white} strokeWidth="3" strokeLinejoin="round" />
      <rect x="122" y="28" width="60" height="20" rx="6" fill={CAP} />
      <rect x="152" y="28" width="30" height="20" rx="6" fill={CAP_DEEP} opacity="0.6" />
      <path
        d="M132 32 V44 M142 32 V44 M152 32 V44"
        stroke={C.white}
        strokeWidth="2"
        opacity="0.5"
      />

      {/* nhãn chai */}
      <rect x="112" y="98" width="80" height="54" fill={LABEL} opacity="0.97" />
      <rect x="112" y="98" width="80" height="12" fill={LABEL_BAND} />
      <text
        x="152"
        y="134"
        textAnchor="middle"
        fontSize="20"
        fontWeight="800"
        fill={CAP_DEEP}
        fontFamily="inherit"
      >
        0,9%
      </text>
      <rect x="128" y="141" width="48" height="4" rx="2" fill={C.metalLight} />
      <path d="M120 66 V92" stroke={C.white} strokeWidth="4" strokeLinecap="round" opacity="0.65" />

      <Sparkle x={202} y={62} size={6} delay={0} />
      <Sparkle x={100} y={88} size={4} delay={-1.2} />
    </Scene>
  )
}
