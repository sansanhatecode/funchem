import { C, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

const WALL = '#D9ECFB'
const WALL_SHADE = '#BFDDF5'
const WHEY = '#E9EDC9'
const WHEY_DEEP = '#CDD49E'
const CURD_SHADE = '#D5E0EC'
const LEMON = '#FFD23F'
const LEMON_DEEP = '#E6B21A'
const LEMON_FLESH = '#FFF3A6'
const BOTTLE_CAP = '#4F9BE0'
const GLASS = 'M104 50 V150 Q104 168 122 168 H190 Q208 168 208 150 V50'
/** Cục sữa vón: [x, y, cỡ, có lắc lư không]. */
const CURDS = [
  [128, 100, 1.2, 1],
  [162, 92, 1.5, 0],
  [188, 106, 1, 1],
  [140, 126, 1.4, 0],
  [176, 132, 1.2, 1],
  [124, 148, 1, 0],
  [156, 152, 1.3, 1],
  [190, 152, 0.9, 0],
] as const

/** Một cục sữa vón: khối trắng sần sùi gồm vài hình tròn chồng nhau. */
function Curd({ x, y, s, wobble }: { x: number; y: number; s: number; wobble: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className={wobble ? 'sc sc-float' : undefined} style={{ animationDelay: `${-x / 40}s` }}>
        <circle cx="0" cy="2" r="8" fill={CURD_SHADE} />
        <circle cx="-5" cy="0" r="6" fill={C.white} />
        <circle cx="4" cy="-2" r="7" fill={C.white} />
        <circle cx="1" cy="4" r="5.5" fill={C.white} />
      </g>
    </g>
  )
}

/** Nửa quả chanh: vỏ vàng, mặt cắt chia múi. */
function LemonHalf({ x, y, rot }: { x: number; y: number; rot: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <path d="M-24 0 A24 24 0 0 1 24 0 Z" fill={LEMON} />
      <path d="M0 -24 A24 24 0 0 1 24 0 H0 Z" fill={LEMON_DEEP} opacity="0.5" />
      <ellipse cx="0" cy="0" rx="24" ry="7" fill={LEMON} />
      <ellipse cx="0" cy="0" rx="20" ry="5.2" fill={LEMON_FLESH} />
      <path
        d="M-20 0 H20 M-12 -4 L12 4 M12 -4 L-12 4 M0 -5 V5"
        stroke={LEMON}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </g>
  )
}

export function CurdledMilkScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={150} tiles />

      {/* chai sữa tươi còn mịn */}
      <Shadow cx={48} cy={173} rx={30} ry={5} />
      <path
        d="M28 96 Q28 82 38 78 V62 H58 V78 Q68 82 68 96 V160 Q68 172 56 172 H40 Q28 172 28 160 Z"
        fill={C.white}
      />
      <path d="M50 62 H58 V78 Q68 82 68 96 V160 Q68 172 56 172 H50 Z" fill={CURD_SHADE} />
      <rect x="34" y="50" width="28" height="14" rx="5" fill={BOTTLE_CAP} />
      <rect x="28" y="108" width="40" height="30" fill={BOTTLE_CAP} opacity="0.9" />
      <circle cx="48" cy="123" r="9" fill={C.white} />

      {/* nửa quả chanh trên bàn */}
      <Shadow cx={268} cy={176} rx={30} ry={5} />
      <LemonHalf x={268} y={170} rot={180} />
      <ellipse cx="268" cy="170" rx="20" ry="5.2" fill="none" />

      {/* cốc sữa đã vón cục: nước trong vàng nhạt và các cục trắng */}
      <Shadow cx={158} cy={173} rx={64} ry={7} />
      <path d="M108 80 H204 V150 Q204 164 190 164 H122 Q108 164 108 150 Z" fill={WHEY} />
      <path d="M156 80 H204 V150 Q204 164 190 164 H156 Z" fill={WHEY_DEEP} opacity="0.5" />
      {CURDS.map(([x, y, s, w], i) => (
        <Curd key={i} x={x} y={y} s={s} wobble={w === 1} />
      ))}
      <ellipse cx="156" cy="80" rx="48" ry="6" fill={WHEY_DEEP} />
      <g fill={C.white}>
        <circle cx="130" cy="79" r="7" />
        <circle cx="142" cy="77" r="6" />
        <circle cx="166" cy="80" r="8" />
        <circle cx="180" cy="78" r="5.5" />
        <circle cx="152" cy="82" r="5" />
      </g>
      <path d={`${GLASS} Z`} fill={C.glass} opacity="0.12" />
      <path d={GLASS} fill="none" stroke={C.white} strokeWidth="3.5" strokeLinejoin="round" />
      <ellipse cx="156" cy="50" rx="52" ry="7" fill="none" stroke={C.white} strokeWidth="3.5" />
      <path d="M116 64 V146" stroke={C.white} strokeWidth="5" strokeLinecap="round" opacity="0.6" />

      {/* nửa quả chanh đang vắt phía trên cốc */}
      <g className="sc sc-sway" style={{ animationDuration: '2.2s' }}>
        <LemonHalf x={176} y={26} rot={196} />
      </g>
      {/* giọt nước chanh rơi xuống */}
      {[
        [166, 52, 0],
        [176, 58, -0.6],
        [158, 60, -1.1],
      ].map(([x, y, d], i) => (
        <path
          key={i}
          d={`M${x} ${y} q5 8 0 12 q-5 -4 0 -12 Z`}
          fill={LEMON}
          stroke={LEMON_DEEP}
          strokeWidth="1"
          className="sc sc-rain"
          style={{ animationDelay: `${d}s`, animationDuration: '1.6s' }}
        />
      ))}
    </Scene>
  )
}
