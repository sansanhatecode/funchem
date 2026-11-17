import { C, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

const POTATO = '#F7E6A8'
const POTATO_DEEP = '#E6CC7A'
const PEEL = '#B98A52'
const IODINE = '#B56A1C'
const IODINE_DEEP = '#8A4A10'
const STAIN = '#4340B8'
const STAIN_DEEP = '#272A80'
const DISH_SHADE = '#D5E0EC'
const BULB = '#F25F5C'
const AMBER = '#9A5A1E'
const AMBER_DEEP = '#74400F'

/** Lát khoai tây nhìn nghiêng: vỏ nâu viền quanh, ruột vàng nhạt. */
function Slice({ cx, cy, rx, ry }: { cx: number; cy: number; rx: number; ry: number }) {
  return (
    <>
      <ellipse cx={cx} cy={cy + 5} rx={rx} ry={ry} fill={PEEL} />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={PEEL} />
      <ellipse cx={cx} cy={cy} rx={rx - 3.5} ry={ry - 2.5} fill={POTATO} />
      <path
        d={`M${cx} ${cy + ry - 2.5} A${rx - 3.5} ${ry - 2.5} 0 0 0 ${cx + rx - 3.5} ${cy} A${rx + 6} ${ry + 4} 0 0 1 ${cx} ${cy + ry - 2.5} Z`}
        fill={POTATO_DEEP}
        opacity="0.7"
      />
    </>
  )
}

export function IodinePotatoScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={C.wallCool} wallShade={C.wallCoolShade} tableY={132} tiles />

      {/* lọ dung dịch iodine màu nâu */}
      <Shadow cx={272} cy={173} rx={30} ry={5} />
      <path
        d="M250 104 Q250 92 262 90 V78 H282 V90 Q294 92 294 104 V162 Q294 172 284 172 H260 Q250 172 250 162 Z"
        fill={AMBER}
      />
      <path
        d="M274 90 H282 Q294 92 294 104 V162 Q294 172 284 172 H274 Z"
        fill={AMBER_DEEP}
        opacity="0.7"
      />
      <rect x="258" y="66" width="28" height="14" rx="4" fill={C.ink} />
      <rect x="256" y="114" width="32" height="34" rx="5" fill={C.white} opacity="0.95" />
      <circle cx="272" cy="131" r="9" fill={IODINE} />
      <circle cx="269" cy="128" r="3" fill="#E0A35C" />
      <path
        d="M256 100 V156"
        stroke={C.white}
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.35"
      />

      {/* đĩa trắng */}
      <Shadow cx={136} cy={182} rx={122} ry={8} />
      <ellipse cx="134" cy="166" rx="122" ry="26" fill={C.white} />
      <ellipse cx="134" cy="163" rx="100" ry="19" fill={DISH_SHADE} opacity="0.7" />

      {/* lát khoai chưa nhỏ iodine, vẫn vàng nhạt */}
      <Slice cx={62} cy={156} rx={36} ry={15} />
      <Slice cx={206} cy={164} rx={34} ry={14} />

      {/* lát khoai ở giữa: chỗ nhỏ iodine đã chuyển xanh tím */}
      <Slice cx={136} cy={148} rx={58} ry={24} />
      <g className="sc sc-pulse" style={{ animationDuration: '3.2s' }}>
        <path
          d="M108 146 Q104 134 122 132 Q134 124 150 131 Q170 130 170 144 Q174 158 154 160 Q138 168 122 160 Q106 158 108 146 Z"
          fill={STAIN}
        />
        <path
          d="M120 146 Q120 138 134 138 Q150 134 156 144 Q158 154 142 155 Q124 156 120 146 Z"
          fill={STAIN_DEEP}
        />
        <ellipse cx="130" cy="141" rx="6" ry="2.4" fill={C.white} opacity="0.35" />
      </g>
      <circle cx="178" cy="150" r="4" fill={STAIN} />
      <circle cx="100" cy="156" r="3" fill={STAIN} />

      {/* ống nhỏ giọt chứa dung dịch iodine nâu vàng */}
      <g className="sc sc-float" style={{ animationDuration: '3s' }}>
        <path d="M130 14 Q130 2 140 2 Q150 2 150 14 V34 H130 Z" fill={BULB} />
        <path d="M142 2 Q150 3 150 14 V34 H142 Z" fill={C.redDeep} opacity="0.6" />
        <rect x="126" y="32" width="28" height="8" rx="3" fill={C.ink} />
        <path d="M132 40 H148 V78 L143 100 H137 L132 78 Z" fill={C.glass} opacity="0.75" />
        <path d="M133.5 60 H146.5 V78 L142.4 98 H137.6 L133.5 78 Z" fill={IODINE} />
        <path
          d="M132 40 H148 V78 L143 100 H137 L132 78 Z"
          fill="none"
          stroke={C.white}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M136 46 V74"
          stroke={C.white}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />
      </g>
      {/* giọt iodine đang rơi */}
      <path
        d="M140 106 q6 9 0 14 q-6 -5 0 -14 Z"
        fill={IODINE_DEEP}
        className="sc sc-rain"
        style={{ animationDuration: '1.8s' }}
      />
    </Scene>
  )
}
