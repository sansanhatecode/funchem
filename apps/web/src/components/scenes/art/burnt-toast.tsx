import { C, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

const WALL = '#FFF0D6'
const WALL_SHADE = '#FBDDAE'
const BODY = '#F25F5C'
const BODY_DEEP = '#D03F3C'
const CRUST = '#C98A45'
const CRUMB = '#F6D79A'
const BURNT = '#2E2A2B'
const BURNT_SOFT = '#4A4243'
const SMOKE = '#8B8F99'
/** Lát bánh mì: gốc (0,0) ở giữa mép dưới, cao 62. */
const SLICE = 'M-24 0 V-40 Q-34 -44 -30 -54 Q-24 -64 0 -62 Q24 -64 30 -54 Q34 -44 24 -40 V0 Z'
const SLICE_IN = 'M-18 -2 V-38 Q-27 -43 -24 -50 Q-19 -57 0 -56 Q19 -57 24 -50 Q27 -43 18 -38 V-2 Z'

/** Làn khói xám bốc lên từ lát bánh cháy. */
function Smoke({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <path
      d={`M${x} ${y} q-7 -9 0 -18 q7 -9 0 -18`}
      fill="none"
      stroke={SMOKE}
      strokeWidth="4.5"
      strokeLinecap="round"
      opacity="0.7"
      className="sc sc-rise"
      style={{ animationDelay: `${delay}s`, animationDuration: '3.8s' }}
    />
  )
}

export function BurntToastScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={152} tiles />

      {/* lát bánh nướng vừa, vàng ruộm, nằm trên đĩa */}
      <Shadow cx={270} cy={184} rx={44} ry={5} />
      <ellipse cx="270" cy="178" rx="44" ry="9" fill={C.white} />
      <ellipse cx="270" cy="176" rx="31" ry="5" fill={C.metalLight} />
      <rect x="248" y="164" width="44" height="13" rx="5" fill={CRUST} />
      <rect x="251" y="165" width="38" height="7" rx="3.5" fill={CRUMB} />

      {/* lò nướng bánh mì */}
      <Shadow cx={128} cy={186} rx={92} ry={7} />
      {/* lát bánh cháy đen đang bật lên khỏi khe */}
      <g className="sc sc-float">
        <g transform="translate(98 116)">
          <path d={SLICE} fill={BURNT} />
          <path d={SLICE_IN} fill={BURNT_SOFT} />
          <g fill={BURNT}>
            <circle cx="-8" cy="-40" r="3" />
            <circle cx="9" cy="-30" r="2.4" />
            <circle cx="-4" cy="-18" r="2" />
            <circle cx="12" cy="-46" r="1.8" />
          </g>
        </g>
      </g>
      {/* lát bên cạnh mới sém vàng nâu */}
      <g transform="translate(160 122)">
        <path d={SLICE} fill={CRUST} />
        <path d={SLICE_IN} fill="#E2B46A" />
      </g>
      <path
        d="M46 110 Q46 96 60 96 H196 Q210 96 210 110 V172 Q210 184 198 184 H58 Q46 184 46 172 Z"
        fill={BODY}
      />
      <path
        d="M128 96 H196 Q210 96 210 110 V172 Q210 184 198 184 H128 Z"
        fill={BODY_DEEP}
        opacity="0.5"
      />
      <rect x="66" y="96" width="62" height="7" rx="3.5" fill={C.ink} />
      <rect x="130" y="96" width="62" height="7" rx="3.5" fill={C.ink} />
      <rect x="54" y="108" width="7" height="60" rx="3.5" fill={C.white} opacity="0.4" />
      {/* cần gạt và núm vặn */}
      <rect x="210" y="118" width="16" height="9" rx="4.5" fill={C.ink} />
      <circle cx="186" cy="160" r="9" fill={C.metalLight} />
      <path d="M186 160 l5 -5" stroke={C.ink} strokeWidth="2.6" strokeLinecap="round" />
      <rect x="58" y="182" width="18" height="6" rx="3" fill={C.ink} />
      <rect x="180" y="182" width="18" height="6" rx="3" fill={C.ink} />

      {/* khói từ lát bánh cháy */}
      <Smoke x={86} y={52} delay={0} />
      <Smoke x={104} y={46} delay={-1.3} />
      <Smoke x={118} y={56} delay={-2.5} />
    </Scene>
  )
}
