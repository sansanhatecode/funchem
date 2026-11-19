import { C, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

const WALL = '#EAF4FF'
const WALL_SHADE = '#D2E6FA'
const MARK = '#F25F5C'
const BOWL = '#FFC93C'
const BOWL_DEEP = '#E0A100'
const SALT = '#FFFFFF'
const SALT_SHADE = '#DCE6F0'
const JUG = 'M92 40 L100 152 Q101 168 118 168 H186 Q203 168 204 152 L212 40'

export function MeasuringJugScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={150} tiles />

      {/* bát muối và chiếc thìa */}
      <Shadow cx={268} cy={182} rx={40} ry={5} />
      <path d="M232 152 H304 Q302 180 268 180 Q234 180 232 152 Z" fill={BOWL} />
      <path d="M268 152 H304 Q302 180 268 180 Z" fill={BOWL_DEEP} opacity="0.55" />
      <path d="M236 152 Q250 132 268 138 Q288 130 300 152 Z" fill={SALT} />
      <path d="M268 138 Q288 130 300 152 H268 Z" fill={SALT_SHADE} />
      <path d="M284 110 L262 146" stroke={C.metal} strokeWidth="5" strokeLinecap="round" />

      {/* ca đong 1 lít */}
      <Shadow cx={152} cy={172} rx={70} ry={7} />
      {/* quai ca */}
      <path
        d="M208 66 Q246 66 244 100 Q242 132 206 130"
        fill="none"
        stroke={C.white}
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M208 66 Q246 66 244 100 Q242 132 206 130"
        fill="none"
        stroke={C.glass}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* nước tới đúng vạch 1 lít */}
      <path d="M96.5 68 H207.5 L202 152 Q201 164 186 164 H118 Q103 164 102 152 Z" fill={C.water} />
      <path d="M152 68 H207.5 L202 152 Q201 164 186 164 H152 Z" fill={C.waterDeep} opacity="0.35" />
      <ellipse cx="152" cy="68" rx="55.5" ry="6" fill={C.waterDeep} />
      <ellipse
        cx="140"
        cy="67"
        rx="22"
        ry="2.4"
        fill={C.white}
        opacity="0.6"
        className="sc sc-float"
      />

      {/* hạt muối đang tan dần trong nước */}
      <g fill={SALT} className="sc sc-float" style={{ animationDelay: '-1s' }}>
        <rect x="150" y="104" width="4" height="4" rx="1" />
        <rect x="172" y="122" width="3.4" height="3.4" rx="1" />
        <rect x="160" y="140" width="3" height="3" rx="1" />
        <rect x="182" y="96" width="3" height="3" rx="1" />
      </g>

      {/* thìa khuấy */}
      <g className="sc sc-sway" style={{ transformOrigin: '170px 150px' }}>
        <path d="M196 16 L172 138" stroke={C.metalLight} strokeWidth="6" strokeLinecap="round" />
        <path d="M196 16 L188 56" stroke={C.metal} strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* thành ca và các vạch chia */}
      <path d={`${JUG} Z`} fill={C.glass} opacity="0.14" />
      <path d={JUG} fill="none" stroke={C.white} strokeWidth="3.5" strokeLinejoin="round" />
      <path
        d="M92 40 Q84 36 80 44"
        fill="none"
        stroke={C.white}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <ellipse cx="152" cy="40" rx="60" ry="7" fill="none" stroke={C.white} strokeWidth="3.5" />
      <g stroke={MARK} strokeWidth="2.6" strokeLinecap="round">
        <path d="M108 68 H134" />
        <path d="M110 92 H124" />
        <path d="M111 116 H131" />
        <path d="M113 140 H125" />
      </g>
      <text x="140" y="62" fontSize="12" fontWeight="800" fill={MARK} fontFamily="inherit">
        1 L
      </text>
      <text x="136" y="120" fontSize="9" fontWeight="800" fill={MARK} fontFamily="inherit">
        0,5 L
      </text>
    </Scene>
  )
}
