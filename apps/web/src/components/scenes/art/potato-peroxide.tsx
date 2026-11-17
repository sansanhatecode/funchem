import { C, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

const AMBER = '#B9692F'
const AMBER_DEEP = '#864619'
const LIQUID = '#D9F1FB'
const LIQUID_DEEP = '#B5E0F5'
const FLESH = '#FBE9A9'
const FLESH_DEEP = '#EBCF7C'
const SKIN = '#B4854F'
const SKIN_DEEP = '#8F6535'
const BOTTLE =
  'M22 104 Q22 88 38 84 L43 70 H69 L74 84 Q90 88 90 104 V164 Q90 175 79 175 H33 Q22 175 22 164 Z'
const GLASS = 'M114 60 L123 166 Q124 175 133 175 H203 Q212 175 213 166 L222 60 Z'
/** Bọt trắng bám kín lát khoai: [x, y, bán kính]. */
const FOAM = [
  [142, 138, 6],
  [152, 131, 7],
  [164, 127, 8],
  [177, 125, 7],
  [189, 127, 6],
  [198, 132, 5],
  [158, 139, 5],
  [171, 136, 6],
  [184, 137, 5],
  [147, 128, 4],
  [193, 122, 4],
] as const
/** Lớp bọt nổi trên mặt nước: [x, y, bán kính]. */
const CAP = [
  [130, 92, 7],
  [143, 88, 8],
  [158, 91, 7],
  [172, 87, 9],
  [187, 90, 7],
  [200, 92, 7],
  [165, 81, 5],
] as const

/** Bọt khí rỗng ruột nổi lên rồi tan. */
function Fizz({ x, y, r, delay }: { x: number; y: number; r: number; delay: number }) {
  return (
    <circle
      cx={x}
      cy={y}
      r={r}
      fill={C.white}
      fillOpacity="0.7"
      stroke={C.white}
      strokeWidth="1.6"
      className="sc sc-rise"
      style={{ animationDelay: `${delay}s`, animationDuration: '2.2s' }}
    />
  )
}

export function PotatoPeroxideScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall="#E3DAF7" wallShade="#D0C3F0" tableY={152} />

      {/* chai oxy già màu nâu */}
      <Shadow cx={58} cy={177} rx={42} ry={6} />
      <rect x="39" y="46" width="34" height="27" rx="6" fill={C.white} />
      <rect x="59" y="46" width="14" height="27" rx="6" fill={C.metalLight} />
      <path d={BOTTLE} fill={AMBER} />
      <path
        d="M60 70 H69 L74 84 Q90 88 90 104 V164 Q90 175 79 175 H60 Z"
        fill={AMBER_DEEP}
        opacity="0.55"
      />
      <rect x="29" y="100" width="6" height="62" rx="3" fill={C.white} opacity="0.4" />
      <rect x="34" y="110" width="44" height="46" rx="7" fill={C.white} />
      <path d="M56 120 V146 M43 133 H69" stroke={C.green} strokeWidth="9" strokeLinecap="round" />

      {/* cốc thuỷ tinh đựng oxy già */}
      <Shadow cx={168} cy={178} rx={62} ry={6} />
      <path d={GLASS} fill={C.glass} opacity="0.5" />
      <path d="M117 94 L123 166 Q124 175 133 175 H203 Q212 175 213 166 L219 94 Z" fill={LIQUID} />
      <path d="M168 94 H219 L213 166 Q212 175 203 175 H168 Z" fill={LIQUID_DEEP} opacity="0.6" />

      {/* lát khoai tây sống chìm trong cốc */}
      <g transform="rotate(-8 170 142)">
        <ellipse cx="170" cy="145" rx="36" ry="13" fill={SKIN_DEEP} />
        <ellipse cx="170" cy="142" rx="36" ry="13" fill={SKIN} />
        <ellipse cx="170" cy="141.5" rx="32" ry="10.5" fill={FLESH} />
        <ellipse cx="178" cy="144" rx="18" ry="5" fill={FLESH_DEEP} opacity="0.6" />
      </g>

      {/* bọt oxygen bám kín lát khoai rồi nổi lên */}
      <g className="sc sc-pulse">
        {FOAM.map(([x, y, r], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill={C.white} />
        ))}
      </g>
      <Fizz x={150} y={122} r={3.6} delay={0} />
      <Fizz x={166} y={118} r={4.4} delay={-0.5} />
      <Fizz x={182} y={120} r={3.2} delay={-1} />
      <Fizz x={196} y={124} r={2.8} delay={-1.5} />
      <Fizz x={158} y={110} r={3} delay={-1.9} />
      <g className="sc sc-pulse" style={{ animationDelay: '-1.2s', transformOrigin: '50% 100%' }}>
        {CAP.map(([x, y, r], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill={C.white} />
        ))}
      </g>
      <Fizz x={146} y={74} r={3.4} delay={-0.3} />
      <Fizz x={186} y={72} r={4} delay={-1.3} />

      {/* thành cốc */}
      <path d={GLASS} fill="none" stroke={C.white} strokeWidth="3.4" strokeLinejoin="round" />
      <path
        d="M124 76 L131 156"
        stroke={C.white}
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* củ khoai tây cắt dở trên thớt */}
      <Shadow cx={270} cy={182} rx={46} ry={5} />
      <rect x="228" y="166" width="88" height="14" rx="6" fill={C.woodDeep} />
      <rect x="228" y="166" width="88" height="5" rx="2.5" fill={C.wood} />
      <path d="M246 166 Q238 138 262 130 Q292 124 302 146 Q308 160 300 166 Z" fill={SKIN} />
      <path
        d="M270 129 Q292 124 302 146 Q308 160 300 166 H282 Q296 150 270 129 Z"
        fill={SKIN_DEEP}
        opacity="0.6"
      />
      <ellipse cx="252" cy="150" rx="11" ry="17" fill={FLESH} transform="rotate(-12 252 150)" />
      <ellipse
        cx="253"
        cy="152"
        rx="6"
        ry="10"
        fill={FLESH_DEEP}
        opacity="0.5"
        transform="rotate(-12 253 152)"
      />
      <circle cx="278" cy="142" r="1.8" fill={SKIN_DEEP} />
      <circle cx="290" cy="152" r="1.6" fill={SKIN_DEEP} />
    </Scene>
  )
}
