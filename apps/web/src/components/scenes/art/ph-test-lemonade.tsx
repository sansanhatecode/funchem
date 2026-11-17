import { Bubble, C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const LEMONADE = '#F4F0A2'
const LEMONADE_DEEP = '#DDD56A'
const RIND = '#4FA83D'
const FLESH = '#D2E66A'
const PITH = '#F4F8DC'
const PAPER = '#F6D365'
const PAPER_DEEP = '#E0B43C'
const TIP = '#EA5B2A'
/** Dải màu của bảng so màu, từ acid mạnh (đỏ) tới base mạnh (tím). */
const CHART = [
  '#D7263D',
  '#EA5B2A',
  '#F5B82E',
  '#C9DC3F',
  '#5FBF4A',
  '#1F9AA8',
  '#3C5FC4',
  '#5E2B8F',
]
const GLASS = 'M70 52 L78 158 Q79 168 89 168 H133 Q143 168 144 158 L152 52'

export function PhTestLemonadeScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall="#E6F4D8" wallShade="#CFE8B6" tableY={152} />

      {/* ly nước chanh */}
      <Shadow cx={114} cy={172} rx={48} ry={6} />
      <path d="M72.3 82 L78 158 Q79 168 89 168 H133 Q143 168 144 158 L149.7 82 Z" fill={LEMONADE} />
      <path
        d="M111 82 H149.7 L144 158 Q143 168 133 168 H111 Z"
        fill={LEMONADE_DEEP}
        opacity="0.5"
      />
      <ellipse cx="111" cy="82" rx="38.7" ry="5.4" fill={LEMONADE_DEEP} />
      <ellipse cx="102" cy="81" rx="18" ry="2.2" fill={C.white} opacity="0.65" />
      {/* đá viên */}
      <rect
        x="84"
        y="90"
        width="20"
        height="20"
        rx="4"
        fill={C.white}
        opacity="0.75"
        transform="rotate(-12 94 100)"
      />
      <rect
        x="114"
        y="96"
        width="18"
        height="18"
        rx="4"
        fill={C.white}
        opacity="0.65"
        transform="rotate(16 123 105)"
      />
      <rect
        x="96"
        y="120"
        width="17"
        height="17"
        rx="4"
        fill={C.white}
        opacity="0.55"
        transform="rotate(8 104 128)"
        className="sc sc-float"
      />
      <Bubble x={92} y={150} r={2} />
      <Bubble x={126} y={146} r={2.4} delay={-1.4} />
      <path
        d={GLASS}
        fill="none"
        stroke={C.white}
        strokeWidth="3.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <ellipse cx="111" cy="52" rx="41" ry="5.6" fill="none" stroke={C.white} strokeWidth="3.2" />
      <path
        d="M82 66 L87 150"
        stroke={C.white}
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* lát chanh gài miệng ly */}
      <g transform="rotate(14 150 54)">
        <circle cx="150" cy="54" r="20" fill={RIND} />
        <circle cx="150" cy="54" r="16" fill={PITH} />
        <circle cx="150" cy="54" r="13.5" fill={FLESH} />
        <path
          d="M150 40.5 V67.5 M136.5 54 H163.5 M140.5 44.5 L159.5 63.5 M159.5 44.5 L140.5 63.5"
          stroke={PITH}
          strokeWidth="2.2"
        />
      </g>

      {/* mẩu giấy pH vừa nhúng: đầu dưới đổi sang cam đỏ */}
      <g transform="rotate(24 196 120)">
        <rect x="188" y="36" width="15" height="132" rx="2" fill={PAPER} />
        <rect x="198" y="36" width="5" height="132" rx="2" fill={PAPER_DEEP} opacity="0.45" />
        <rect x="188" y="118" width="15" height="50" rx="2" fill={TIP} />
        <rect x="188" y="118" width="15" height="5" fill={C.white} opacity="0.35" />
      </g>
      {/* giọt nước chanh rơi khỏi mẩu giấy */}
      <path
        d="M172 170 Q177 179 172 183 Q167 179 172 170 Z"
        fill={LEMONADE_DEEP}
        className="sc sc-float"
        style={{ animationDuration: '2s' }}
      />

      {/* bảng so màu */}
      <Shadow cx={254} cy={182} rx={52} ry={5} />
      <g transform="rotate(-5 252 150)">
        <rect x="204" y="112" width="100" height="66" rx="8" fill={C.white} />
        <rect x="204" y="112" width="100" height="14" rx="7" fill={C.ink} opacity="0.85" />
        {CHART.map((color, i) => (
          <rect
            key={color}
            x={210 + (i % 4) * 22.5}
            y={132 + Math.floor(i / 4) * 21}
            width="19"
            height="17"
            rx="4"
            fill={color}
          />
        ))}
        {/* ô khớp màu với đầu giấy */}
        <rect
          x="230.5"
          y="130"
          width="23"
          height="21"
          rx="6"
          fill="none"
          stroke={C.ink}
          strokeWidth="3"
          className="sc sc-pulse"
        />
      </g>

      <Sparkle x={226} y={92} size={7} color={TIP} />
      <Sparkle x={58} y={70} size={6} delay={-1.2} />
    </Scene>
  )
}
