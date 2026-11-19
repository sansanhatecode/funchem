import { Bubble, C, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

const WALL = '#DDF1FB'
const WALL_SHADE = '#C4E4F5'
const JUG = '#8FD0F5'
const JUG_DEEP = '#5FB2E6'
const JUG_CAP = '#2F8AC4'
const JUG_BODY =
  'M214 92 Q214 78 228 74 L238 66 V54 H266 V66 L276 74 Q290 78 290 92 V172 Q290 182 280 182 H224 Q214 182 214 172 Z'

export function BalloonAndJugScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={160} />

      {/* bình nước lọc 20 lít */}
      <Shadow cx={252} cy={184} rx={48} ry={6} />
      <path d={JUG_BODY} fill={JUG} opacity="0.55" />
      <path
        d="M216 104 H288 V172 Q288 180 280 180 H224 Q216 180 216 172 Z"
        fill={JUG_DEEP}
        opacity="0.75"
      />
      <ellipse cx="252" cy="104" rx="36" ry="4" fill={C.white} opacity="0.6" />
      <Bubble x={236} y={166} r={2.6} delay={0} />
      <Bubble x={266} y={170} r={3.2} delay={-1.4} />
      <path d={JUG_BODY} fill="none" stroke={C.white} strokeWidth="3" strokeLinejoin="round" />
      <path d="M214 118 H290 M214 142 H290" stroke={C.white} strokeWidth="2.4" opacity="0.6" />
      <rect x="236" y="44" width="32" height="12" rx="4" fill={JUG_CAP} />
      <rect x="228" y="122" width="48" height="18" rx="5" fill={C.white} />
      <text
        x="252"
        y="136"
        textAnchor="middle"
        fontSize="13"
        fontWeight="800"
        fill={C.ink}
        fontFamily="inherit"
      >
        20 L
      </text>
      <path d="M223 90 V168" stroke={C.white} strokeWidth="4" strokeLinecap="round" opacity="0.6" />

      {/* quả cân giữ bóng */}
      <Shadow cx={112} cy={186} rx={26} ry={4} />
      <path d="M96 186 L100 172 H124 L128 186 Z" fill={C.metalDark} />
      <path d="M100 172 H124 L125 176 H99 Z" fill={C.metal} />
      <circle cx="112" cy="170" r="4" fill="none" stroke={C.metalDark} strokeWidth="2.4" />

      {/* quả bóng bay căng tròn, đung đưa quanh quả cân */}
      <g className="sc sc-sway" style={{ animationDuration: '4.8s' }}>
        <rect x="42" y="166" width="140" height="1" fill="none" />
        <path
          d="M112 152 Q108 160 112 167"
          fill="none"
          stroke={C.inkSoft}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M105 153 L112 143 L119 153 Z"
          fill={C.redDeep}
          stroke={C.redDeep}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <ellipse cx="112" cy="82" rx="66" ry="64" fill={C.redDeep} />
        <ellipse cx="108" cy="78" rx="61" ry="59" fill={C.red} />
        <ellipse
          cx="80"
          cy="50"
          rx="10"
          ry="20"
          fill={C.white}
          opacity="0.55"
          transform="rotate(32 80 50)"
        />
        <circle cx="66" cy="84" r="4" fill={C.white} opacity="0.4" />
      </g>
    </Scene>
  )
}
