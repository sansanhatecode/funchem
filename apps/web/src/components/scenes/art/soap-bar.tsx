import { C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const SOAP = '#FF9DBB'
const SOAP_DEEP = '#E8668F'
const SOAP_LIGHT = '#FFC4D6'
const DISH = '#7CCBF2'
const DISH_DEEP = '#4FADE0'

/** Bong bóng xà phòng trong suốt có vệt sáng. */
function SoapBubble({
  x,
  y,
  r,
  delay = 0,
  rise = false,
}: {
  x: number
  y: number
  r: number
  delay?: number
  rise?: boolean
}) {
  return (
    <g
      className={rise ? 'sc sc-rise' : 'sc sc-float'}
      style={{ animationDelay: `${delay}s`, animationDuration: rise ? '4.2s' : '3.4s' }}
    >
      <circle
        cx={x}
        cy={y}
        r={r}
        fill={C.white}
        fillOpacity="0.35"
        stroke={C.white}
        strokeWidth="2"
      />
      <path
        d={`M${x - r * 0.55} ${y - r * 0.2} Q${x - r * 0.45} ${y - r * 0.6} ${x - r * 0.05} ${y - r * 0.62}`}
        fill="none"
        stroke={C.white}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
  )
}

export function SoapBarScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall="#D6F0EC" wallShade="#B9E3DC" tableY={150} tiles />
      <rect y="150" width="320" height="50" fill="#F4FAFD" />
      <rect y="150" width="320" height="6" fill="#CFE4F2" />

      {/* vòi nước nhỏ giọt */}
      <path
        d="M32 0 V44 Q32 62 50 62 H74 Q84 62 84 72 V80"
        fill="none"
        stroke={C.metal}
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M28 0 V44 Q28 58 44 58"
        fill="none"
        stroke={C.metalLight}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M84 92 Q89 101 84 105 Q79 101 84 92 Z"
        fill={C.waterDeep}
        className="sc sc-rain"
        style={{ animationDuration: '1.6s' }}
      />

      {/* khay đựng xà phòng */}
      <Shadow cx={166} cy={182} rx={104} ry={8} />
      <path d="M68 150 H264 Q264 178 240 180 H92 Q68 178 68 150 Z" fill={DISH} />
      <path d="M166 150 H264 Q264 178 240 180 H166 Z" fill={DISH_DEEP} opacity="0.6" />
      <ellipse cx="166" cy="150" rx="98" ry="12" fill={DISH_DEEP} />
      <ellipse cx="166" cy="152" rx="90" ry="9" fill="#E9F7FD" />

      {/* bánh xà phòng */}
      <g transform="rotate(-6 160 126)">
        <rect x="100" y="104" width="124" height="48" rx="20" fill={SOAP_DEEP} />
        <rect x="100" y="98" width="124" height="44" rx="20" fill={SOAP} />
        <rect x="124" y="108" width="76" height="24" rx="12" fill={SOAP_LIGHT} opacity="0.75" />
        <path
          d="M114 110 Q118 102 130 102"
          fill="none"
          stroke={C.white}
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.8"
        />
      </g>

      {/* bọt xà phòng phủ lên bánh và tràn ra khay */}
      <g fill={C.white}>
        <circle cx="196" cy="108" r="15" />
        <circle cx="214" cy="118" r="12" />
        <circle cx="180" cy="100" r="10" />
        <circle cx="226" cy="134" r="13" />
        <circle cx="206" cy="140" r="11" />
        <circle cx="244" cy="146" r="9" />
        <circle cx="106" cy="146" r="10" />
        <circle cx="92" cy="152" r="7" />
        <circle cx="122" cy="152" r="8" />
      </g>
      <g fill="#DDEEF8">
        <circle cx="200" cy="112" r="4" />
        <circle cx="218" cy="124" r="3.4" />
        <circle cx="228" cy="138" r="4.4" />
        <circle cx="108" cy="148" r="3.4" />
        <circle cx="186" cy="102" r="2.6" />
      </g>
      <g className="sc sc-pulse" style={{ animationDuration: '3s' }}>
        <circle cx="236" cy="122" r="8" fill={C.white} />
        <circle cx="170" cy="92" r="7" fill={C.white} />
      </g>

      {/* bong bóng bay lên */}
      <SoapBubble x={252} y={84} r={13} />
      <SoapBubble x={210} y={62} r={9} delay={-1.2} />
      <SoapBubble x={278} y={50} r={7} delay={-2.2} />
      <SoapBubble x={150} y={64} r={7} delay={-0.6} rise />
      <SoapBubble x={234} y={96} r={5} delay={-2.8} rise />

      <Sparkle x={128} y={84} size={7} />
      <Sparkle x={288} y={106} size={6} delay={-1.3} />
    </Scene>
  )
}
