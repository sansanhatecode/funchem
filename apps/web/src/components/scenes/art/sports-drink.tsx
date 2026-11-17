import { Bubble, C, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const TRACK = '#E58B6B'
const TRACK_DEEP = '#CF7253'
const BENCH = '#E3B37C'
const BENCH_DEEP = '#C48B50'
const DRINK = '#45C8E8'
const DRINK_DEEP = '#1F9FC6'
const CAP = '#FF8A3D'
const CAP_DEEP = '#E06A1C'
const LABEL = '#FFFFFF'
const SHOE = '#F25F5C'
const SHOE_DEEP = '#C93F3C'
const SOLE = '#FFFFFF'
const SOLE_SHADE = '#D5E0EC'
const BOTTLE =
  'M70 64 Q70 50 82 46 V34 H110 V46 Q122 50 122 64 V156 Q122 168 110 168 H82 Q70 168 70 156 Z'

/** Một chiếc giày thể thao nhìn ngang, mũi giày quay sang phải. */
function Sneaker({ x, y, back = false }: { x: number; y: number; back?: boolean }) {
  const upper = back ? SHOE_DEEP : SHOE
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d="M4 -40 Q2 -46 10 -46 H34 Q42 -46 44 -38 L50 -26 Q76 -20 92 -12 Q102 -6 100 4 H4 Q-2 -16 4 -40 Z"
        fill={upper}
      />
      <path
        d="M50 -26 Q76 -20 92 -12 Q102 -6 100 4 H60 Q66 -12 50 -26 Z"
        fill={SHOE_DEEP}
        opacity={back ? 0 : 0.55}
      />
      <path d="M74 -17 Q92 -12 99 -2 H78 Q80 -10 74 -17 Z" fill={C.white} opacity="0.9" />
      <path d="M4 -40 Q2 -46 10 -46 H18 V4 H4 Q-2 -16 4 -40 Z" fill={C.white} opacity="0.3" />
      {/* dây giày */}
      <path
        d="M40 -36 L54 -30 M44 -29 L60 -24 M50 -22 L66 -18"
        stroke={C.white}
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M12 -22 Q26 -8 46 -10"
        fill="none"
        stroke={C.yellow}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* đế */}
      <path d="M0 2 H104 Q106 14 96 14 H8 Q-2 14 0 2 Z" fill={SOLE} />
      <path d="M0 8 H105 Q104 14 96 14 H8 Q0 14 0 8 Z" fill={SOLE_SHADE} />
    </g>
  )
}

export function SportsDrinkScene(props: SceneProps) {
  return (
    <Scene {...props}>
      {/* sân vận động: trời, cỏ, đường chạy */}
      <rect width="320" height="200" fill={C.sky} />
      <circle cx="270" cy="36" r="18" fill={C.sun} />
      <circle cx="270" cy="36" r="26" fill={C.sun} opacity="0.25" className="sc sc-pulse" />
      <path d="M0 84 Q80 66 170 80 T320 72 V200 H0 Z" fill={C.grass} />
      <path d="M0 100 Q160 78 320 96 V134 H0 Z" fill={TRACK} />
      <path
        d="M0 116 Q160 96 320 114"
        fill="none"
        stroke={C.white}
        strokeWidth="2.4"
        opacity="0.8"
      />
      <path d="M0 100 Q160 78 320 96 V100 Q160 83 0 105 Z" fill={TRACK_DEEP} opacity="0.7" />

      {/* băng ghế gỗ */}
      <rect y="134" width="320" height="66" fill={BENCH} />
      <rect y="134" width="320" height="7" fill={BENCH_DEEP} />
      <rect y="166" width="320" height="3" fill={BENCH_DEEP} opacity="0.45" />

      {/* đôi giày thể thao */}
      <Shadow cx={236} cy={184} rx={76} ry={7} />
      <Sneaker x={196} y={150} back />
      <Sneaker x={166} y={168} />

      {/* chai nước điện giải */}
      <Shadow cx={98} cy={172} rx={40} ry={6} />
      <path d="M72 70 H120 V156 Q120 166 110 166 H82 Q72 166 72 156 Z" fill={DRINK} />
      <path d="M98 70 H120 V156 Q120 166 110 166 H98 Z" fill={DRINK_DEEP} opacity="0.55" />
      <ellipse cx="96" cy="70" rx="24" ry="3.5" fill={DRINK_DEEP} />
      <Bubble x={84} y={152} r={2.4} delay={0} />
      <Bubble x={104} y={156} r={3} delay={-1.2} />
      <Bubble x={94} y={146} r={2} delay={-2.2} />
      <path d={BOTTLE} fill={C.glass} opacity="0.28" />
      <path d={BOTTLE} fill="none" stroke={C.white} strokeWidth="3" strokeLinejoin="round" />
      {/* nắp bật kiểu thể thao */}
      <rect x="78" y="20" width="36" height="16" rx="5" fill={CAP} />
      <rect x="98" y="20" width="16" height="16" rx="5" fill={CAP_DEEP} opacity="0.6" />
      <rect x="88" y="8" width="16" height="14" rx="5" fill={C.white} />
      {/* nhãn chai: dấu cộng và dấu trừ gợi ý các ion */}
      <rect x="70" y="92" width="52" height="44" fill={LABEL} opacity="0.96" />
      <circle cx="84" cy="114" r="10" fill={CAP} />
      <path d="M79 114 H89 M84 109 V119" stroke={C.white} strokeWidth="3" strokeLinecap="round" />
      <circle cx="108" cy="114" r="10" fill={DRINK_DEEP} />
      <path d="M103 114 H113" stroke={C.white} strokeWidth="3" strokeLinecap="round" />
      <path d="M77 58 V88" stroke={C.white} strokeWidth="4" strokeLinecap="round" opacity="0.65" />
      {/* giọt nước đọng ngoài chai lạnh */}
      <path
        d="M116 146 q3 6 0 9 q-3 -3 0 -9"
        fill={C.white}
        opacity="0.9"
        className="sc sc-float"
      />
      <path
        d="M76 148 q3 6 0 9 q-3 -3 0 -9"
        fill={C.white}
        opacity="0.85"
        className="sc sc-float"
        style={{ animationDelay: '-1.6s' }}
      />
      <Sparkle x={128} y={56} size={6} delay={0} />
      <Sparkle x={62} y={84} size={4} delay={-1.2} />
    </Scene>
  )
}
