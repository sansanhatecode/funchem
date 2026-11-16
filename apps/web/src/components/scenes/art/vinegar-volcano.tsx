import { C, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

const ROCK = '#B47C4F'
const ROCK_DEEP = '#8A5732'
const FOAM_PINK = '#FFB9CF'
const VINEGAR = '#FFEFA8'
const BOTTLE =
  'M262 106 Q262 95 271 93 L273 80 H287 L289 93 Q298 95 298 106 V162 Q298 170 290 170 H270 Q262 170 262 162 Z'
/** Lớp bọt phủ đỉnh núi rồi chảy thành ba dòng xuống sườn. */
const FOAM =
  'M131 79 L110 125 Q104 139 115 141 Q125 142 128 129 L136 108 Q139 101 143 107 V120 Q143 132 152 132 Q161 132 161 120 V106 Q164 100 168 106 L181 142 Q186 153 195 150 Q203 146 197 134 L173 79 Z'

/** Bọt khí rỗng ruột nổi lên rồi tan. */
function Fizz({ x, y, r, delay }: { x: number; y: number; r: number; delay: number }) {
  return (
    <circle
      cx={x}
      cy={y}
      r={r}
      fill={C.white}
      fillOpacity="0.6"
      stroke={C.white}
      strokeWidth="1.6"
      className="sc sc-rise"
      style={{ animationDelay: `${delay}s`, animationDuration: '2.6s' }}
    />
  )
}

export function VinegarVolcanoScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall="#D3DCF8" wallShade="#BCC9F1" tableY={152} />
      {/* tranh núi treo tường */}
      <rect x="18" y="20" width="72" height="56" rx="8" fill={C.woodDeep} />
      <rect x="24" y="26" width="60" height="44" rx="4" fill={C.sky} />
      <circle cx="72" cy="38" r="6" fill={C.sun} />
      <path d="M28 70 L50 36 L72 70 Z" fill={C.grassDeep} />
      <path d="M43 47 L50 36 L57 47 L50 44 Z" fill={C.white} />

      {/* núi lửa mô hình */}
      <Shadow cx={152} cy={179} rx={110} ry={6} />
      <path d="M70 170 Q112 140 132 80 H172 Q192 140 234 170 Z" fill={ROCK} />
      <path d="M152 80 H172 Q192 140 234 170 H152 Z" fill={ROCK_DEEP} opacity="0.5" />
      <path d="M70 170 Q90 154 104 150 Q110 160 124 170 Z" fill={C.grassDeep} />
      <path d="M234 170 Q222 160 212 155 Q204 162 190 170 Z" fill={C.greenDeep} opacity="0.8" />
      <path
        d="M122 118 l6 5 M178 104 l5 6 M134 150 l7 3"
        stroke={ROCK_DEEP}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* bọt chảy xuống sườn núi */}
      <path d={FOAM} fill={C.white} />
      <g fill={C.white}>
        <circle cx="198" cy="159" r="8" />
        <circle cx="211" cy="161" r="6" />
        <circle cx="112" cy="158" r="7" />
      </g>
      <g fill={FOAM_PINK}>
        <circle cx="126" cy="108" r="3" />
        <circle cx="118" cy="132" r="4" />
        <circle cx="155" cy="104" r="2.6" />
        <circle cx="149" cy="122" r="3.6" />
        <circle cx="178" cy="112" r="3" />
        <circle cx="190" cy="140" r="4" />
      </g>

      {/* khay hứng */}
      <path d="M56 160 H248 L243 174 Q242 178 237 178 H67 Q62 178 61 174 Z" fill={C.waterDeep} />
      <rect x="50" y="156" width="204" height="8" rx="4" fill={C.water} />
      <rect x="60" y="158" width="60" height="2.4" rx="1.2" fill={C.white} opacity="0.6" />

      {/* bọt phun trào ở miệng núi */}
      <g className="sc sc-pulse">
        <circle cx="152" cy="72" r="16" fill={C.white} />
        <circle cx="136" cy="78" r="10" fill={C.white} />
        <circle cx="168" cy="78" r="11" fill={C.white} />
        <circle cx="145" cy="59" r="10" fill={C.white} />
        <circle cx="161" cy="56" r="9" fill={C.white} />
        <circle cx="159" cy="73" r="5" fill={FOAM_PINK} />
        <circle cx="143" cy="66" r="3.4" fill={FOAM_PINK} />
        <circle cx="168" cy="82" r="3" fill={FOAM_PINK} />
      </g>
      <Fizz x={152} y={46} r={5} delay={0} />
      <Fizz x={136} y={52} r={3.4} delay={-0.7} />
      <Fizz x={168} y={48} r={4} delay={-1.3} />
      <Fizz x={158} y={34} r={2.8} delay={-1.9} />
      <g fill={C.white} className="sc sc-float">
        <circle cx="118" cy="60" r="3" />
        <circle cx="188" cy="56" r="3.4" />
        <circle cx="178" cy="34" r="2.2" />
        <circle cx="128" cy="38" r="2" />
      </g>

      {/* chai giấm */}
      <Shadow cx={282} cy={171} rx={26} ry={4.5} />
      <path d="M263 128 H297 V162 Q297 169 290 169 H270 Q263 169 263 162 Z" fill={VINEGAR} />
      <path d="M282 128 H297 V162 Q297 169 290 169 H282 Z" fill={C.goldDeep} opacity="0.25" />
      <path d={BOTTLE} fill={C.glass} opacity="0.35" />
      <path d={BOTTLE} fill="none" stroke={C.white} strokeWidth="3" strokeLinejoin="round" />
      <path
        d="M269 108 V156"
        stroke={C.white}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.6"
      />
      <rect x="269" y="66" width="22" height="15" rx="4" fill={C.green} />
      <rect x="282" y="66" width="9" height="15" rx="4" fill={C.greenDeep} opacity="0.6" />

      {/* thìa bột nở */}
      <Shadow cx={62} cy={192} rx={34} ry={4} />
      <path d="M14 192 L52 186" stroke={C.metal} strokeWidth="5.5" strokeLinecap="round" />
      <ellipse cx="68" cy="186" rx="19" ry="7" fill={C.metal} />
      <ellipse cx="68" cy="185" rx="15" ry="5" fill={C.metalLight} />
      <path d="M53 185 Q68 162 83 185 Q68 189 53 185 Z" fill={C.white} />
      <path d="M75 176.5 Q81 180 83 185 Q78 187.5 72 188 Q77 182 75 176.5 Z" fill={C.metalLight} />
      <circle cx="94" cy="190" r="1.8" fill={C.white} />
      <circle cx="100" cy="184" r="1.4" fill={C.white} />
      <circle cx="40" cy="197" r="1.6" fill={C.white} />
    </Scene>
  )
}
