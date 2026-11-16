import { C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const AMBER = '#B9692F'
const AMBER_DEEP = '#864619'
const SKIN = '#F8D0A8'
const SKIN_DEEP = '#E9B286'
const SCRAPE = '#F47C7A'
const BOTTLE =
  'M62 102 Q62 86 78 82 L83 68 H109 L114 82 Q130 86 130 102 V162 Q130 173 119 173 H73 Q62 173 62 162 Z'
/** Đám bọt trắng sủi trên vết xước: [x, y, bán kính]. */
const FOAM = [
  [180, 110, 4.5],
  [187, 103, 5.5],
  [195, 98, 4.5],
  [189, 111, 4],
  [197, 105, 5],
  [204, 99, 3.6],
  [181, 102, 3],
]

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
      style={{ animationDelay: `${delay}s`, animationDuration: '2.4s' }}
    />
  )
}

export function HydrogenPeroxideScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall="#D8CEF4" wallShade="#C7B9EC" tableY={160} />
      {/* tủ thuốc treo tường */}
      <rect x="236" y="16" width="62" height="46" rx="8" fill={C.white} />
      <rect x="236" y="52" width="62" height="10" rx="5" fill={C.metalLight} />
      <path d="M267 48 C246 34 258 20 267 30 C276 20 288 34 267 48 Z" fill={C.red} />

      {/* chai oxy già màu nâu */}
      <g transform="translate(8 0)">
        <Shadow cx={100} cy={174} rx={44} ry={6} />
        <rect x="79" y="42" width="34" height="28" rx="6" fill={C.white} />
        <rect x="99" y="42" width="14" height="28" rx="6" fill={C.metalLight} />
        <path d="M86 48 V64 M93 48 V64" stroke={C.metal} strokeWidth="2.4" strokeLinecap="round" />
        <path d={BOTTLE} fill={AMBER} />
        <path
          d="M100 68 H109 L114 82 Q130 86 130 102 V162 Q130 173 119 173 H100 Z"
          fill={AMBER_DEEP}
          opacity="0.55"
        />
        <rect x="69" y="98" width="6" height="62" rx="3" fill={C.white} opacity="0.4" />
        <rect x="74" y="108" width="44" height="46" rx="7" fill={C.white} />
        <path
          d="M96 118 V144 M83 131 H109"
          stroke={C.green}
          strokeWidth="9"
          strokeLinecap="round"
        />
      </g>

      {/* băng cá nhân và bông gòn */}
      <g transform="rotate(-10 34 186)">
        <rect x="10" y="179" width="48" height="14" rx="7" fill={SKIN_DEEP} />
        <rect x="26" y="179" width="16" height="14" fill={C.wall} />
      </g>
      <Shadow cx={154} cy={187} rx={22} ry={4} />
      <ellipse cx="154" cy="183" rx="17" ry="5" fill={C.metalLight} />
      <g fill={C.white}>
        <circle cx="144" cy="178" r="8" />
        <circle cx="155" cy="174" r="10" />
        <circle cx="165" cy="179" r="7" />
      </g>

      {/* chân ngồi co, đầu gối bị xước */}
      <g transform="translate(6 0)">
        <path
          d="M320 88 H206 Q170 88 170 124 L175 200 H222 L219 152 Q220 142 236 142 H320 Z"
          fill={SKIN}
        />
        <path
          d="M212 200 L210 152 Q212 134 234 134 H320 V142 H236 Q220 142 219 152 L222 200 Z"
          fill={SKIN_DEEP}
          opacity="0.6"
        />
        <path d="M268 84 H320 V146 H268 Z" fill={C.waterDeep} />
        <rect x="262" y="84" width="12" height="62" rx="5" fill={C.water} />
        <ellipse cx="190" cy="106" rx="19" ry="11" fill={SCRAPE} transform="rotate(-38 190 106)" />
        <path
          d="M180 116 l5 -5 M190 109 l6 -6 M199 100 l4 -4"
          stroke={C.redDeep}
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {/* bọt trắng sủi lên trên vết xước */}
        <g className="sc sc-pulse">
          {FOAM.map(([x, y, r]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill={C.white} />
          ))}
        </g>
        <Fizz x={184} y={96} r={3.6} delay={0} />
        <Fizz x={194} y={90} r={4.4} delay={-0.6} />
        <Fizz x={176} y={102} r={2.8} delay={-1.2} />
        <Fizz x={203} y={88} r={3} delay={-1.8} />
      </g>

      <Sparkle x={44} y={70} size={8} color={C.white} />
      <Sparkle x={150} y={56} size={6} color={C.white} delay={-1.1} />
    </Scene>
  )
}
