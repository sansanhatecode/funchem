import { Bubble, C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const WALL = '#FFE3EC'
const WALL_SHADE = '#FBCADB'
const GRAPE = '#9A63D8'
const GRAPE_DEEP = '#7443B8'
const GRAPE_LIGHT = '#C9A6F0'
const BANANA = '#FFD84A'
const BANANA_DEEP = '#E9B21E'
const JUICE = '#D6E36A'
const JUICE_DEEP = '#B4C644'
const CANE = '#B9CF6B'
const CANE_DEEP = '#8FA845'
const CANE_NODE = '#6F8A33'
const PLATE_SHADE = '#D5E0EC'
/** Chùm nho: [x, y] từng quả, xếp từ hàng trên xuống hàng dưới. */
const GRAPES = [
  [72, 96],
  [92, 92],
  [112, 96],
  [132, 100],
  [62, 114],
  [82, 112],
  [102, 114],
  [122, 117],
  [74, 131],
  [94, 132],
  [114, 134],
  [86, 149],
  [105, 151],
] as const

export function FruitPlateScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={146} />

      {/* khúc mía dựng nghiêng phía sau */}
      <g transform="rotate(8 290 110)">
        <rect x="280" y="26" width="20" height="150" rx="8" fill={CANE} />
        <rect x="291" y="26" width="9" height="150" rx="4.5" fill={CANE_DEEP} opacity="0.55" />
        {[58, 96, 134].map((y) => (
          <rect key={y} x="279" y={y} width="22" height="5" rx="2.5" fill={CANE_NODE} />
        ))}
        <ellipse cx="290" cy="27" rx="10" ry="3.5" fill="#EEF3C4" />
      </g>

      {/* đĩa hoa quả */}
      <Shadow cx={112} cy={178} rx={98} ry={7} />
      <ellipse cx="110" cy="168" rx="98" ry="15" fill={C.white} />
      <ellipse cx="110" cy="166" rx="74" ry="9" fill={PLATE_SHADE} />

      {/* quả chuối nằm sau chùm nho */}
      <path
        d="M96 152 Q150 168 190 118 Q193 113 198 115 Q201 118 198 123 Q170 186 96 168 Q90 160 96 152 Z"
        fill={BANANA}
      />
      <path d="M98 164 Q160 178 196 124 Q170 186 96 168 Z" fill={BANANA_DEEP} opacity="0.7" />
      <path d="M190 118 l6 -7 l5 4 l-5 7 Z" fill={C.woodDark} />

      {/* chùm nho */}
      <path
        d="M100 86 Q98 70 106 60"
        fill="none"
        stroke={C.woodDark}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M104 66 Q124 48 146 60 Q130 78 104 66 Z" fill={C.green} />
      <path d="M104 66 Q126 60 146 60 Q130 78 104 66 Z" fill={C.greenDeep} opacity="0.6" />
      {GRAPES.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="12" fill={i % 3 === 1 ? GRAPE_DEEP : GRAPE} />
          <path
            d={`M${x} ${y + 12} A12 12 0 0 0 ${x + 12} ${y} A14 14 0 0 1 ${x} ${y + 12} Z`}
            fill={GRAPE_DEEP}
            opacity="0.55"
          />
          <circle cx={x - 4} cy={y - 4.5} r="3.2" fill={GRAPE_LIGHT} opacity="0.9" />
        </g>
      ))}
      <Sparkle x={66} y={90} size={6} delay={0} />
      <Sparkle x={128} y={126} size={5} delay={-1.1} />

      {/* cốc nước mía có đá */}
      <Shadow cx={236} cy={177} rx={36} ry={5} />
      <path d="M260 26 L238 150" stroke={C.pink} strokeWidth="7" strokeLinecap="round" />
      <path d="M207 80 L213 160 Q214 168 222 168 H250 Q258 168 259 160 L265 80 Z" fill={JUICE} />
      <path d="M236 80 H265 L259 160 Q258 168 250 168 H236 Z" fill={JUICE_DEEP} opacity="0.6" />
      <ellipse cx="236" cy="80" rx="29" ry="5" fill={JUICE_DEEP} />
      <g className="sc sc-float">
        <rect
          x="214"
          y="84"
          width="18"
          height="18"
          rx="4"
          fill={C.white}
          opacity="0.75"
          transform="rotate(-12 223 93)"
        />
      </g>
      <g className="sc sc-float" style={{ animationDelay: '-1.8s' }}>
        <rect
          x="238"
          y="90"
          width="16"
          height="16"
          rx="4"
          fill={C.white}
          opacity="0.7"
          transform="rotate(16 246 98)"
        />
      </g>
      <Bubble x={224} y={152} r={2.2} delay={0} />
      <Bubble x={246} y={150} r={2.6} delay={-1.4} />
      <path
        d="M201 56 L211 160 Q212 171 222 171 H250 Q260 171 261 160 L271 56 Z"
        fill={C.glass}
        opacity="0.3"
      />
      <path
        d="M201 56 L211 160 Q212 171 222 171 H250 Q260 171 261 160 L271 56"
        fill="none"
        stroke={C.white}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <ellipse cx="236" cy="56" rx="35" ry="5.5" fill="none" stroke={C.white} strokeWidth="3" />
      <path
        d="M211 70 L217 148"
        stroke={C.white}
        strokeWidth="4.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </Scene>
  )
}
