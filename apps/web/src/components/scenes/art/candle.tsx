import { C, Flame, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const WAX = '#FFF1D2'
const WAX_SHADE = '#EFD5A4'

export function CandleScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall="#564B8F" wallShade="#493F7E" tableY={150} />

      {/* quầng sáng ấm */}
      <circle cx="160" cy="60" r="66" fill={C.flame} opacity="0.16" />
      <circle cx="160" cy="60" r="44" fill={C.flame} opacity="0.26" className="sc sc-pulse" />
      <circle cx="160" cy="60" r="27" fill={C.flameCore} opacity="0.4" />

      {/* lọ thuỷ tinh úp bên cạnh */}
      <Shadow cx={236} cy={169} rx={34} ry={5} />
      <path
        d="M212 168 V112 Q212 96 228 96 H244 Q260 96 260 112 V168 Z"
        fill={C.glass}
        opacity="0.3"
      />
      <path
        d="M212 168 V112 Q212 96 228 96 H244 Q260 96 260 112 V168 Z"
        fill="none"
        stroke={C.white}
        strokeWidth="3"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M220 114 V154"
        stroke={C.white}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* hộp diêm và que diêm */}
      <Shadow cx={84} cy={171} rx={32} ry={5} />
      <rect x="58" y="148" width="50" height="22" rx="4" fill={C.waterDeep} />
      <rect x="58" y="162" width="50" height="8" rx="3" fill={C.woodDark} />
      <path d="M83 150 l6 5 l-6 5 l-6 -5 Z" fill={C.yellow} />

      {/* đĩa đồng đỡ nến */}
      <Shadow cx={160} cy={176} rx={56} ry={6} />
      <ellipse cx="160" cy="170" rx="46" ry="9" fill={C.goldDeep} />
      <ellipse cx="160" cy="167" rx="46" ry="8" fill={C.gold} />
      <path d="M70 188 L108 182" stroke={WAX} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="109" cy="182" r="4" fill={C.red} />

      {/* thân nến */}
      <path d="M131 90 V160 Q131 168 160 168 Q189 168 189 160 V90 Z" fill={WAX} />
      <path d="M166 90 H189 V160 Q189 168 160 168 H166 Z" fill={WAX_SHADE} />
      <rect x="138" y="100" width="6" height="54" rx="3" fill={C.white} opacity="0.7" />
      {/* vũng sáp chảy và giọt sáp */}
      <path
        d="M131 92 Q131 104 137 104 Q142 104 142 96 Q146 92 149 98 V118 Q149 124 154 124 Q159 124 159 118 V98 Q168 92 174 98 V108 Q174 113 178.5 113 Q183 113 183 108 V98 Q189 98 189 92 Z"
        fill={C.white}
      />
      <ellipse cx="160" cy="90" rx="29" ry="7.5" fill={C.white} />
      <ellipse cx="160" cy="90" rx="21" ry="4.8" fill={C.yellow} opacity="0.75" />

      {/* bấc và ngọn lửa */}
      <path d="M160 90 V76" stroke={C.ink} strokeWidth="3" strokeLinecap="round" />
      <Flame x={160} y={78} size={40} />

      <Sparkle x={104} y={48} size={6} color={C.yellow} delay={-0.4} />
      <Sparkle x={222} y={36} size={5} color={C.yellow} delay={-1.4} />
    </Scene>
  )
}
