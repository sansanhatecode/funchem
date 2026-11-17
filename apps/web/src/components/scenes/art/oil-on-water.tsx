import { Bubble, C, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

const WALL = '#DDF3E4'
const WALL_SHADE = '#C2E6CF'
const OIL = '#FFC93C'
const OIL_DEEP = '#E9A712'
const OIL_LIGHT = '#FFE38A'
const CAP = '#2FBF71'
const LABEL = '#FFF6DA'
const BOTTLE =
  'M236 74 Q236 60 248 56 V40 H272 V56 Q284 60 284 74 V160 Q284 172 272 172 H248 Q236 172 236 160 Z'
const GLASS = 'M96 46 V152 Q96 168 112 168 H184 Q200 168 200 152 V46'
/** Hạt dầu tròn đang nổi dần lên lớp dầu phía trên: [x, y, bán kính, độ trễ]. */
const DROPS = [
  [120, 150, 5, 0],
  [150, 156, 6.5, -1.1],
  [176, 148, 4.5, -2],
  [136, 140, 4, -2.8],
  [164, 142, 3.5, -0.6],
] as const

export function OilOnWaterScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={150} tiles />

      {/* chai dầu ăn */}
      <Shadow cx={262} cy={173} rx={34} ry={5} />
      <path d="M238 86 H282 V160 Q282 170 272 170 H248 Q238 170 238 160 Z" fill={OIL} />
      <path d="M262 86 H282 V160 Q282 170 272 170 H262 Z" fill={OIL_DEEP} opacity="0.55" />
      <ellipse cx="260" cy="86" rx="22" ry="3.5" fill={OIL_DEEP} />
      <path d={BOTTLE} fill={C.glass} opacity="0.3" />
      <path d={BOTTLE} fill="none" stroke={C.white} strokeWidth="3" strokeLinejoin="round" />
      <rect x="245" y="26" width="30" height="16" rx="5" fill={CAP} />
      <rect x="262" y="26" width="13" height="16" rx="5" fill={C.greenDeep} opacity="0.6" />
      <rect x="240" y="104" width="40" height="44" rx="6" fill={LABEL} />
      {/* hình bông hướng dương trên nhãn */}
      <g transform="translate(260 126)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <ellipse key={a} cx="0" cy="-10" rx="4" ry="6.5" fill={OIL} transform={`rotate(${a})`} />
        ))}
        <circle r="6.5" fill={C.woodDark} />
      </g>
      <path d="M243 68 V98" stroke={C.white} strokeWidth="4" strokeLinecap="round" opacity="0.6" />

      {/* chiếc thìa vừa khuấy */}
      <Shadow cx={50} cy={184} rx={36} ry={4} />
      <path d="M22 186 L62 178" stroke={C.metal} strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="76" cy="176" rx="17" ry="8" fill={C.metal} transform="rotate(-10 76 176)" />
      <ellipse cx="76" cy="175" rx="12" ry="5" fill={OIL} transform="rotate(-10 76 175)" />

      {/* cốc nước: nước ở dưới, lớp dầu vàng nổi ở trên */}
      <Shadow cx={150} cy={172} rx={62} ry={7} />
      <path d="M100 96 H196 V152 Q196 164 184 164 H112 Q100 164 100 152 Z" fill={C.water} />
      <path d="M150 96 H196 V152 Q196 164 184 164 H150 Z" fill={C.waterDeep} opacity="0.35" />
      {DROPS.map(([x, y, r, delay], i) => (
        <Bubble key={i} x={x} y={y} r={r} delay={delay} color={OIL} duration={3.6} />
      ))}
      {/* hạt dầu to còn lơ lửng trong nước */}
      <circle cx="128" cy="122" r="7" fill={OIL} />
      <circle cx="126" cy="120" r="2.4" fill={OIL_LIGHT} />
      <circle cx="170" cy="114" r="5" fill={OIL} />
      <circle cx="168.5" cy="112.5" r="1.8" fill={OIL_LIGHT} />
      {/* lớp dầu */}
      <path d="M100 70 H196 V96 Q172 104 148 97 Q124 90 100 98 Z" fill={OIL} />
      <path d="M150 70 H196 V96 Q172 104 150 97.5 Z" fill={OIL_DEEP} opacity="0.5" />
      <ellipse cx="148" cy="70" rx="48" ry="6" fill={OIL_LIGHT} />
      <ellipse
        cx="136"
        cy="69"
        rx="20"
        ry="2.4"
        fill={C.white}
        opacity="0.7"
        className="sc sc-float"
      />
      <path
        d="M100 98 Q124 90 148 97 Q172 104 196 96"
        fill="none"
        stroke={C.white}
        strokeWidth="2.4"
        opacity="0.75"
      />
      {/* thành cốc */}
      <path d={`${GLASS} Z`} fill={C.glass} opacity="0.14" />
      <path d={GLASS} fill="none" stroke={C.white} strokeWidth="3.5" strokeLinejoin="round" />
      <ellipse cx="148" cy="46" rx="52" ry="7" fill="none" stroke={C.white} strokeWidth="3.5" />
      <path d="M108 60 V146" stroke={C.white} strokeWidth="5" strokeLinecap="round" opacity="0.6" />
    </Scene>
  )
}
