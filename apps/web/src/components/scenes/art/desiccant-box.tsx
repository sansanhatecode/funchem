import { C, Scene, type SceneProps, Shadow } from '../kit'

const CLOSET = '#C9996A'
const CLOSET_DEEP = '#A9784A'
const CLOSET_BACK = '#8A5F38'
const BOX = '#DFF2FB'
const LID = '#4FADE0'
const LID_DEEP = '#2F8CC2'
const GRAIN = '#FFFFFF'
const GRAIN_SHADE = '#D5E0EC'
const WATER = '#7CCBF2'

/** Hạt hút ẩm trắng xếp thành đống ở ngăn trên của hộp. */
const GRAINS: [number, number][] = [
  [124, 128],
  [136, 130],
  [148, 127],
  [160, 130],
  [172, 127],
  [184, 130],
  [196, 128],
  [130, 120],
  [143, 119],
  [156, 121],
  [169, 119],
  [182, 121],
  [193, 120],
  [138, 111],
  [152, 112],
  [166, 110],
  [180, 112],
]

/** Hộp hút ẩm trong tủ quần áo: hạt trắng ở ngăn trên, nước nhỏ giọt xuống ngăn dưới. */
export function DesiccantBoxScene(props: SceneProps) {
  return (
    <Scene {...props}>
      {/* lòng tủ gỗ */}
      <rect width="320" height="200" fill={CLOSET_BACK} />
      <rect x="0" y="0" width="16" height="200" fill={CLOSET_DEEP} />
      <rect x="304" y="0" width="16" height="200" fill={CLOSET_DEEP} />
      {/* thanh treo và quần áo */}
      <rect x="16" y="14" width="288" height="6" rx="3" fill={C.metal} />
      <g className="sc sc-sway" style={{ animationDuration: '5s' }}>
        <path
          d="M58 18 Q58 10 64 10 Q70 10 68 16"
          fill="none"
          stroke={C.metalDark}
          strokeWidth="2.5"
        />
        <path d="M64 18 L34 34 V92 H94 V34 Z" fill={C.red} />
        <path d="M64 18 L94 34 V92 H76 V30 Z" fill={C.redDeep} opacity="0.6" />
        <path d="M54 24 L64 34 L74 24" fill="none" stroke={C.white} strokeWidth="3" />
      </g>
      <path
        d="M254 18 Q254 10 260 10 Q266 10 264 16"
        fill="none"
        stroke={C.metalDark}
        strokeWidth="2.5"
      />
      <path d="M260 18 L232 32 V98 H288 V32 Z" fill={C.purple} />
      <path d="M260 18 L288 32 V98 H272 V28 Z" fill={C.ink} opacity="0.2" />
      <path d="M150 18 L128 30 V66 H172 V30 Z" fill={C.yellow} opacity="0.95" />
      <path d="M150 18 L172 30 V66 H160 V26 Z" fill={C.goldDeep} opacity="0.45" />

      {/* đợt tủ và chồng áo gấp */}
      <rect x="16" y="176" width="288" height="24" fill={CLOSET} />
      <rect x="16" y="176" width="288" height="5" fill={CLOSET_DEEP} />
      <rect x="28" y="150" width="62" height="12" rx="4" fill={C.green} />
      <rect x="26" y="162" width="66" height="14" rx="4" fill={C.pink} />
      <rect x="232" y="158" width="60" height="18" rx="4" fill={C.waterDeep} />
      <rect x="236" y="146" width="52" height="12" rx="4" fill={C.white} />

      {/* hộp hút ẩm */}
      <Shadow cx={160} cy={180} rx={58} ry={5} />
      <path d="M112 100 H208 L202 176 H118 Z" fill={BOX} opacity="0.92" />
      {/* nước đọng ở ngăn dưới */}
      <path d="M115.4 152 H204.6 L202 176 H118 Z" fill={WATER} />
      <path d="M115.4 152 H204.6 L204.2 156 H115.8 Z" fill={C.white} opacity="0.5" />
      {/* vỉ ngăn giữa hai ngăn */}
      <path d="M113.5 134 H206.5" stroke={LID_DEEP} strokeWidth="3" strokeDasharray="6 4" />
      {/* hạt hút ẩm */}
      {GRAINS.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6.4" fill={i % 3 ? GRAIN : GRAIN_SHADE} />
      ))}
      {/* giọt nước rơi xuống ngăn dưới */}
      <path
        d="M146 136 q4 7 0 10 q-4 -3 0 -10 Z"
        fill={C.waterDeep}
        className="sc sc-rain"
        style={{ animationDuration: '2.2s' }}
      />
      <path
        d="M176 136 q4 7 0 10 q-4 -3 0 -10 Z"
        fill={C.waterDeep}
        className="sc sc-rain"
        style={{ animationDuration: '2.2s', animationDelay: '-1.1s' }}
      />
      {/* viền hộp và nắp có khe thoáng */}
      <path
        d="M112 100 H208 L202 176 H118 Z"
        fill="none"
        stroke={C.white}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect x="106" y="88" width="108" height="14" rx="5" fill={LID} />
      <rect x="170" y="88" width="44" height="14" rx="5" fill={LID_DEEP} opacity="0.6" />
      <path
        d="M122 95 H136 M144 95 H158 M166 95 H180 M188 95 H202"
        stroke={C.white}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M121 108 L125 168"
        stroke={C.white}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* hơi ẩm trong tủ bị hút về phía hộp */}
      <g className="sc sc-float" style={{ animationDuration: '3s' }}>
        <path
          d="M100 62 q4 7 0 10 q-4 -3 0 -10 Z M214 56 q4 7 0 10 q-4 -3 0 -10 Z M196 72 q3 6 0 8 q-3 -2 0 -8 Z"
          fill={C.water}
          opacity="0.85"
        />
      </g>
      <path
        d="M102 76 Q112 84 122 86 M212 70 Q204 80 198 86"
        fill="none"
        stroke={C.water}
        strokeWidth="2"
        strokeDasharray="3 4"
        strokeLinecap="round"
        opacity="0.8"
      />
    </Scene>
  )
}
