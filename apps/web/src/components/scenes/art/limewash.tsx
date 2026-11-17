import { C, OutdoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const BARK = '#A8734A'
const BARK_DEEP = '#855635'
const LIME = '#FFFFFF'
const LIME_SHADE = '#DCE6EE'
const BUCKET = '#5BA7E0'
const BUCKET_DEEP = '#3D85BF'
const ROCK = '#EEF1F2'
const ROCK_SHADE = '#C9D1D6'

/** Cục vôi sống: khối đá trắng xám có một mặt tối. */
function Lump({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-14 6 L-10 -8 L2 -12 L14 -4 L12 8 L-2 11 Z" fill={ROCK} />
      <path d="M2 -12 L14 -4 L12 8 L-2 11 L3 -1 Z" fill={ROCK_SHADE} />
    </g>
  )
}

export function LimewashScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <OutdoorBg groundY={150} />

      {/* gốc cây: nửa dưới đã quét vôi trắng */}
      <Shadow cx={236} cy={176} rx={52} ry={7} />
      <path d="M206 0 H266 V150 Q268 168 284 176 H188 Q204 168 206 150 Z" fill={BARK} />
      <path d="M240 0 H266 V150 Q268 168 284 176 H240 Z" fill={BARK_DEEP} opacity="0.55" />
      <path
        d="M218 14 v22 M252 30 v18 M230 52 v14"
        stroke={BARK_DEEP}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M206 86 Q214 80 222 87 Q230 94 238 85 Q246 78 254 86 Q260 92 266 84 V150 Q268 168 284 176 H188 Q204 168 206 150 Z"
        fill={LIME}
      />
      <path
        d="M240 84 Q246 78 254 86 Q260 92 266 84 V150 Q268 168 284 176 H240 Z"
        fill={LIME_SHADE}
      />
      {/* vệt vôi còn ướt chảy xuống */}
      <g className="sc sc-float" style={{ animationDuration: '3s' }}>
        <path d="M222 86 v-10" stroke={LIME} strokeWidth="5" strokeLinecap="round" />
        <path d="M254 85 v-7" stroke={LIME_SHADE} strokeWidth="5" strokeLinecap="round" />
      </g>

      {/* mấy cục vôi sống */}
      <Shadow cx={40} cy={184} rx={34} ry={4.5} />
      <Lump x={30} y={174} s={1.2} />
      <Lump x={56} y={178} s={0.9} />
      <Lump x={42} y={162} s={0.8} />

      {/* xô vôi */}
      <Shadow cx={124} cy={182} rx={56} ry={7} />
      <path
        d="M76 118 Q124 84 172 118"
        fill="none"
        stroke={C.metalDark}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M76 118 L86 172 Q88 180 98 180 H150 Q160 180 162 172 L172 118 Z" fill={BUCKET} />
      <path d="M124 118 H172 L162 172 Q160 180 150 180 H124 Z" fill={BUCKET_DEEP} opacity="0.6" />
      <path
        d="M86 140 Q124 150 162 140"
        fill="none"
        stroke={C.white}
        strokeWidth="3"
        opacity="0.5"
      />
      <ellipse cx="124" cy="118" rx="48" ry="11" fill={BUCKET_DEEP} />
      <ellipse cx="124" cy="120" rx="43" ry="8.5" fill={LIME} />
      <path d="M124 111.5 A43 8.5 0 0 1 124 128.5 A18 8.5 0 0 0 124 111.5 Z" fill={LIME_SHADE} />
      <ellipse
        cx="110"
        cy="118"
        rx="14"
        ry="2.2"
        fill={LIME_SHADE}
        className="sc sc-float"
        style={{ animationDuration: '3.2s' }}
      />
      {/* vôi trào ra mép xô */}
      <path
        d="M90 124 Q88 138 92 146"
        stroke={LIME}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* chổi quét vôi dựng trong xô */}
      <g className="sc sc-sway" style={{ animationDuration: '2.8s' }}>
        <path d="M140 116 L176 34" stroke={C.woodDeep} strokeWidth="8" strokeLinecap="round" />
        <path d="M150 100 L176 40" stroke={C.wood} strokeWidth="3" strokeLinecap="round" />
        <path d="M128 100 L152 110 L146 124 L122 114 Z" fill={C.goldDeep} />
        <path d="M122 114 L146 124 L142 134 Q130 136 118 124 Z" fill={LIME} />
      </g>

      {/* giọt vôi bắn ra */}
      <g fill={LIME}>
        <circle cx="184" cy="166" r="3.4" />
        <circle cx="70" cy="190" r="2.6" />
        <circle cx="176" cy="188" r="2" />
      </g>

      <Sparkle x={226} y={118} size={8} color={C.yellow} />
      <Sparkle x={252} y={146} size={6} color={C.yellow} delay={-1.2} />
    </Scene>
  )
}
