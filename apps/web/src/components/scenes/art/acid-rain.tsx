import { C, OutdoorBg, Raindrop, Scene, type SceneProps, Shadow } from '../kit'

const FACTORY = '#8794A6'
const FACTORY_DEEP = '#667487'
const BRICK = '#C8604A'
const BRICK_DEEP = '#A2463A'
const SMOKE = '#8E97A3'
const SMOKE_LIGHT = '#B4BCC6'
const STONE = '#D9DDE2'
const STONE_SHADE = '#B2B9C2'
const STONE_DARK = '#8B939E'
const LEAF_SICK = '#D6C24E'
const LEAF_DEAD = '#B99A3A'

/** Cụm khói xám bốc lên từ ống khói. */
function Puff({
  x,
  y,
  r,
  delay,
  color = SMOKE,
}: {
  x: number
  y: number
  r: number
  delay: number
  color?: string
}) {
  return (
    <circle
      cx={x}
      cy={y}
      r={r}
      fill={color}
      className="sc sc-float"
      style={{ animationDelay: `${delay}s`, animationDuration: '3.4s' }}
    />
  )
}

export function AcidRainScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <OutdoorBg rainy groundY={152} />

      {/* nhà máy với hai ống khói */}
      <rect x="62" y="58" width="20" height="74" fill={BRICK} />
      <rect x="72" y="58" width="10" height="74" fill={BRICK_DEEP} opacity="0.6" />
      <rect x="59" y="54" width="26" height="8" rx="2" fill={BRICK_DEEP} />
      <rect x="102" y="76" width="16" height="56" fill={BRICK} />
      <rect x="110" y="76" width="8" height="56" fill={BRICK_DEEP} opacity="0.6" />
      <rect x="99" y="72" width="22" height="7" rx="2" fill={BRICK_DEEP} />
      <path d="M14 152 V112 L44 96 V112 L74 96 V112 L104 96 V112 H138 V152 Z" fill={FACTORY} />
      <path d="M104 112 H138 V152 H104 Z" fill={FACTORY_DEEP} />
      <g fill={C.yellow} opacity="0.9">
        <rect x="24" y="124" width="12" height="12" rx="2" />
        <rect x="52" y="124" width="12" height="12" rx="2" />
        <rect x="80" y="124" width="12" height="12" rx="2" />
        <rect x="114" y="124" width="12" height="12" rx="2" />
      </g>

      {/* khói bốc lên hoà vào mây */}
      <Puff x={72} y={44} r={11} delay={0} />
      <Puff x={84} y={30} r={14} delay={-0.8} color={SMOKE_LIGHT} />
      <Puff x={66} y={20} r={12} delay={-1.6} />
      <Puff x={110} y={62} r={9} delay={-0.4} color={SMOKE_LIGHT} />
      <Puff x={120} y={48} r={12} delay={-1.2} />
      <Puff x={104} y={36} r={10} delay={-2.2} color={SMOKE_LIGHT} />
      <g className="sc sc-rise" style={{ animationDuration: '4s' }}>
        <circle cx="72" cy="52" r="7" fill={SMOKE} />
      </g>
      <g className="sc sc-rise" style={{ animationDuration: '4s', animationDelay: '-2s' }}>
        <circle cx="110" cy="70" r="6" fill={SMOKE} />
      </g>

      {/* cây úa lá */}
      <rect x="290" y="112" width="8" height="46" rx="3" fill={C.woodDark} />
      <circle cx="294" cy="100" r="22" fill={LEAF_SICK} />
      <circle cx="304" cy="110" r="13" fill={LEAF_DEAD} />
      <circle cx="282" cy="92" r="9" fill={LEAF_DEAD} opacity="0.8" />
      <path
        d="M276 150 q4 -6 9 -1 q-4 5 -9 1 Z"
        fill={LEAF_DEAD}
        className="sc sc-float"
        style={{ animationDuration: '2.6s' }}
      />

      {/* bức tượng đá bị mưa acid làm mòn */}
      <Shadow cx={214} cy={184} rx={58} ry={7} />
      <rect x="170" y="158" width="88" height="24" rx="4" fill={STONE_SHADE} />
      <rect x="214" y="158" width="44" height="24" rx="4" fill={STONE_DARK} opacity="0.5" />
      <rect x="178" y="146" width="72" height="14" rx="3" fill={STONE} />
      {/* thân và vai */}
      <path d="M182 146 Q182 118 204 112 H224 Q246 118 246 146 Z" fill={STONE} />
      <path d="M214 112 H224 Q246 118 246 146 H214 Z" fill={STONE_SHADE} />
      <rect x="205" y="98" width="18" height="18" fill={STONE} />
      <rect x="214" y="98" width="9" height="18" fill={STONE_SHADE} />
      {/* đầu: một bên đã mòn lẹm */}
      <path
        d="M214 54 Q238 54 238 80 Q238 88 232 92 Q236 98 228 102 Q220 106 214 106 Q190 106 190 80 Q190 54 214 54 Z"
        fill={STONE}
      />
      <path
        d="M214 54 Q238 54 238 80 Q238 88 232 92 Q236 98 228 102 Q220 106 214 106 Q224 82 214 54 Z"
        fill={STONE_SHADE}
      />
      <path
        d="M200 76 q4 -3 8 0 M218 76 q4 -3 8 0"
        stroke={STONE_DARK}
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M206 92 q7 3 14 0"
        stroke={STONE_DARK}
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      {/* lỗ rỗ và vệt chảy do bị ăn mòn */}
      <g fill={STONE_DARK}>
        <circle cx="196" cy="66" r="3" />
        <circle cx="230" cy="64" r="2.4" />
        <circle cx="194" cy="128" r="3.4" />
        <circle cx="234" cy="134" r="2.6" />
        <circle cx="210" cy="124" r="2" />
        <circle cx="186" cy="170" r="2.6" />
      </g>
      <path
        d="M200 110 v14 M228 116 v18 M190 134 v10 M240 150 v14 M218 136 v8"
        stroke={STONE_DARK}
        strokeWidth="2.6"
        strokeLinecap="round"
        opacity="0.75"
      />
      {/* mảnh đá vỡ dưới chân tượng */}
      <path d="M160 186 l8 -6 l8 4 l-4 6 Z" fill={STONE_SHADE} />
      <path d="M262 188 l6 -5 l7 4 l-5 5 Z" fill={STONE} />

      {/* mưa */}
      <Raindrop x={150} y={70} />
      <Raindrop x={178} y={50} delay={-0.3} />
      <Raindrop x={206} y={36} delay={-0.6} />
      <Raindrop x={244} y={56} delay={-0.15} />
      <Raindrop x={270} y={40} delay={-0.45} />
      <Raindrop x={300} y={62} delay={-0.75} />
      <Raindrop x={160} y={110} delay={-0.5} />
      <Raindrop x={262} y={100} delay={-0.2} />
      <Raindrop x={40} y={70} delay={-0.65} />
      <Raindrop x={130} y={30} delay={-0.35} />
      {/* giọt mưa toé trên đầu tượng */}
      <g
        fill="none"
        stroke={C.waterDeep}
        strokeWidth="2.2"
        strokeLinecap="round"
        className="sc sc-twinkle"
      >
        <path d="M204 50 l-4 -5 M214 48 v-6 M224 50 l4 -5" />
      </g>
    </Scene>
  )
}
