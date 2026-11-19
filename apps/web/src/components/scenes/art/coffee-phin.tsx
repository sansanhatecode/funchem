import { C, IndoorBg, Scene, type SceneProps, Shadow, Steam } from '../kit'

const WALL = '#FBEEDB'
const WALL_SHADE = '#F4DAB6'
const COFFEE = '#5A3420'
const COFFEE_DEEP = '#3E2213'
const COFFEE_LIGHT = '#8A5A3A'
const GROUNDS = '#3A2012'
const GLASS = 'M116 104 V156 Q116 172 132 172 H188 Q204 172 204 156 V104'

export function CoffeePhinScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={150} />

      {/* nắp phin đặt ngửa bên cạnh */}
      <Shadow cx={262} cy={182} rx={38} ry={5} />
      <ellipse cx="262" cy="174" rx="34" ry="8" fill={C.metalDark} />
      <ellipse cx="262" cy="171" rx="34" ry="8" fill={C.metal} />
      <ellipse cx="262" cy="170" rx="24" ry="5" fill={C.metalLight} />
      <circle cx="262" cy="168" r="4" fill={C.metalDark} />

      {/* thìa và ít bột cà phê rơi vãi */}
      <path d="M22 184 L64 178" stroke={C.metal} strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="76" cy="176" rx="14" ry="7" fill={C.metal} transform="rotate(-8 76 176)" />
      <ellipse cx="76" cy="174" rx="9" ry="4" fill={GROUNDS} transform="rotate(-8 76 174)" />
      <g fill={GROUNDS}>
        <circle cx="44" cy="170" r="1.6" />
        <circle cx="54" cy="166" r="1.2" />
        <circle cx="96" cy="182" r="1.4" />
      </g>

      {/* cốc thuỷ tinh hứng cà phê */}
      <Shadow cx={160} cy={176} rx={58} ry={7} />
      <path d="M120 138 H200 V156 Q200 168 188 168 H132 Q120 168 120 156 Z" fill={COFFEE} />
      <path d="M160 138 H200 V156 Q200 168 188 168 H160 Z" fill={COFFEE_DEEP} opacity="0.6" />
      <ellipse cx="160" cy="138" rx="40" ry="5" fill={COFFEE_LIGHT} />
      <ellipse
        cx="160"
        cy="138"
        rx="12"
        ry="2.4"
        fill="none"
        stroke={C.white}
        strokeWidth="1.4"
        opacity="0.8"
        className="sc sc-ripple"
        style={{ transformOrigin: '160px 138px' }}
      />
      {/* giọt cà phê nhỏ xuống qua các lỗ phin */}
      <g fill={COFFEE}>
        <path d="M160 108 q4 7 0 11 q-4 -4 0 -11" className="sc sc-float" />
        <path
          d="M146 106 q3 6 0 9 q-3 -3 0 -9"
          className="sc sc-float"
          style={{ animationDelay: '-1.3s' }}
        />
        <path
          d="M174 106 q3 6 0 9 q-3 -3 0 -9"
          className="sc sc-float"
          style={{ animationDelay: '-2.6s' }}
        />
      </g>
      <path d={`${GLASS} Z`} fill={C.glass} opacity="0.16" />
      <path d={GLASS} fill="none" stroke={C.white} strokeWidth="3.5" strokeLinejoin="round" />
      <path
        d="M124 114 V150"
        stroke={C.white}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* chiếc phin nhôm đặt trên miệng cốc */}
      <ellipse cx="160" cy="102" rx="60" ry="7" fill={C.metalDark} />
      <ellipse cx="160" cy="99" rx="60" ry="7" fill={C.metal} />
      <path d="M126 50 H194 L190 98 H130 Z" fill={C.metal} />
      <path d="M160 50 H194 L190 98 H160 Z" fill={C.metalDark} opacity="0.5" />
      <path d="M132 58 L134 92" stroke={C.metalLight} strokeWidth="4" strokeLinecap="round" />
      {/* bột cà phê và nước nóng bên trong phin */}
      <ellipse cx="160" cy="50" rx="34" ry="6" fill={C.metalLight} />
      <ellipse cx="160" cy="51" rx="29" ry="4.4" fill={GROUNDS} />
      <ellipse cx="152" cy="50" rx="10" ry="1.6" fill={COFFEE_LIGHT} opacity="0.8" />

      <Steam x={146} y={40} delay={0} />
      <Steam x={172} y={42} delay={-1.6} />
    </Scene>
  )
}
