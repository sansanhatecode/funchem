import { C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const BOTTLE = '#FFFFFF'
const BOTTLE_SHADE = '#DCE6EE'
const CAP = '#2FBFA8'
const CAP_DEEP = '#1F9A88'
const LABEL = '#D9F3EF'
const STOMACH = '#FF8FB1'
const STOMACH_DEEP = '#E8668F'
const MILK = '#FFFFFF'
const MILK_SHADE = '#DDE7F0'

export function AntacidScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall="#DDEBFB" wallShade="#C5DAF5" tableY={150} />

      {/* cốc nước phía sau */}
      <Shadow cx={268} cy={160} rx={30} ry={4} />
      <path
        d="M246 104 L250 152 Q251 158 257 158 H279 Q285 158 286 152 L290 104 Z"
        fill={C.water}
        opacity="0.8"
      />
      <path
        d="M244 84 L250 152 Q251 158 257 158 H279 Q285 158 286 152 L292 84"
        fill="none"
        stroke={C.white}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <ellipse cx="268" cy="104" rx="22" ry="3.4" fill={C.waterDeep} />

      {/* chai thuốc */}
      <Shadow cx={96} cy={174} rx={52} ry={7} />
      <path
        d="M52 76 Q52 60 68 58 H120 Q136 60 136 76 V160 Q136 172 124 172 H64 Q52 172 52 160 Z"
        fill={BOTTLE}
      />
      <path d="M94 58 H120 Q136 60 136 76 V160 Q136 172 124 172 H94 Z" fill={BOTTLE_SHADE} />
      <rect x="72" y="28" width="44" height="32" rx="6" fill={CAP} />
      <rect x="96" y="28" width="20" height="32" rx="6" fill={CAP_DEEP} opacity="0.7" />
      <path
        d="M80 34 V54 M88 34 V54"
        stroke={C.white}
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* nhãn có hình dạ dày */}
      <rect x="52" y="88" width="84" height="62" fill={LABEL} />
      <rect x="52" y="88" width="84" height="7" fill={CAP} />
      <rect x="52" y="143" width="84" height="7" fill={CAP} />
      <g className="sc sc-pulse" style={{ animationDuration: '3s' }}>
        <path
          d="M88 100 Q88 108 96 110 Q112 112 112 124 Q112 138 96 138 Q80 138 78 126 Q77 118 84 118 Q90 118 90 124 Q92 128 96 126 Q100 124 96 120 Q80 116 80 104 V100 Z"
          fill={STOMACH}
        />
        <path
          d="M96 110 Q112 112 112 124 Q112 138 96 138 Q106 128 96 110 Z"
          fill={STOMACH_DEEP}
          opacity="0.5"
        />
      </g>
      <path d="M62 152 V164" stroke={C.white} strokeWidth="4" strokeLinecap="round" opacity="0.9" />

      {/* thìa đầy thuốc sữa trắng đục */}
      <Shadow cx={212} cy={186} rx={62} ry={6} />
      <path d="M226 170 L306 134" stroke={C.metalDark} strokeWidth="11" strokeLinecap="round" />
      <path d="M226 167 L306 131" stroke={C.metal} strokeWidth="11" strokeLinecap="round" />
      <path d="M240 158 L304 129" stroke={C.metalLight} strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="200" cy="178" rx="40" ry="16" fill={C.metalDark} />
      <ellipse cx="200" cy="173" rx="40" ry="16" fill={C.metal} />
      <ellipse cx="200" cy="171" rx="34" ry="12" fill={MILK} />
      <path d="M200 159 A34 12 0 0 1 200 183 A14 12 0 0 0 200 159 Z" fill={MILK_SHADE} />
      <ellipse
        cx="188"
        cy="168"
        rx="13"
        ry="2.6"
        fill={MILK_SHADE}
        className="sc sc-float"
        style={{ animationDuration: '3s' }}
      />
      {/* giọt thuốc rơi xuống thìa */}
      <path
        d="M196 118 Q204 132 196 138 Q188 132 196 118 Z"
        fill={MILK}
        stroke={MILK_SHADE}
        strokeWidth="1.5"
        className="sc sc-rain"
        style={{ animationDuration: '1.8s' }}
      />
      <ellipse
        cx="198"
        cy="170"
        rx="14"
        ry="3.4"
        fill="none"
        stroke={MILK_SHADE}
        strokeWidth="2"
        className="sc sc-ripple"
      />
      <circle cx="160" cy="190" r="3" fill={MILK} />
      <circle cx="248" cy="192" r="2.2" fill={MILK} />

      <Sparkle x={150} y={52} size={8} />
      <Sparkle x={226} y={132} size={6} delay={-1.2} />
    </Scene>
  )
}
