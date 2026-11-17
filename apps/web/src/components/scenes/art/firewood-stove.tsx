import { C, Flame, IndoorBg, Scene, type SceneProps, Shadow, Steam } from '../kit'

const WALL = '#F3D9B4'
const WALL_SHADE = '#E6BE8B'
const BARK = '#8A5A34'
const BARK_DEEP = '#6B4223'
const HEART = '#F1C98F'
const HEART_DEEP = '#D9A560'
const POT = '#2B3445'
/** Các thanh củi chẻ nhỏ chụm đầu vào lửa: [góc xoay, dài]. */
const STICKS = [
  [-152, 62],
  [-168, 70],
  [176, 58],
  [-28, 62],
  [-12, 70],
  [4, 58],
] as const

/** Một thanh củi chẻ: mặt gỗ sáng, một cạnh còn vỏ. */
function Split({ x, y, w, rotate }: { x: number; y: number; w: number; rotate: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <rect x="0" y="-5" width={w} height="10" rx="3" fill={HEART} />
      <rect x="0" y="1" width={w} height="4" rx="2" fill={BARK} />
      <path d={`M6 -2 H${w - 8}`} stroke={HEART_DEEP} strokeWidth="1.6" strokeLinecap="round" />
    </g>
  )
}

export function FirewoodStoveScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={150} />
      <rect y="150" width="320" height="50" fill="#C99B6B" />
      <rect y="150" width="320" height="6" fill="#B08352" />

      {/* khúc gỗ to chưa chẻ, cái rìu cắm bên trên */}
      <Shadow cx={62} cy={186} rx={58} ry={6} />
      <rect x="20" y="120" width="92" height="64" rx="10" fill={BARK} />
      <rect x="20" y="152" width="92" height="32" rx="10" fill={BARK_DEEP} opacity="0.6" />
      <path
        d="M34 134 v36 M52 128 v26 M74 132 v40 M94 130 v30"
        stroke={BARK_DEEP}
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <ellipse cx="66" cy="122" rx="46" ry="13" fill={HEART} />
      <ellipse cx="66" cy="122" rx="32" ry="8.5" fill="none" stroke={HEART_DEEP} strokeWidth="2" />
      <ellipse cx="66" cy="122" rx="17" ry="4.5" fill="none" stroke={HEART_DEEP} strokeWidth="2" />
      <path d="M52 118 L10 52" stroke={C.woodDeep} strokeWidth="7" strokeLinecap="round" />
      <path d="M38 116 L62 100 L72 116 Q58 130 44 126 Z" fill={C.metalDark} />
      <path d="M44 126 Q58 130 72 116 L68 110 Q56 122 42 122 Z" fill={C.metalLight} />

      {/* mấy thanh củi đã chẻ nằm chờ */}
      <Split x={96} y={190} w={62} rotate={-6} />
      <Split x={112} y={178} w={54} rotate={4} />

      {/* quầng sáng của lửa */}
      <ellipse
        cx="222"
        cy="150"
        rx="74"
        ry="44"
        fill={C.flame}
        opacity="0.22"
        className="sc sc-pulse"
      />

      {/* kiềng ba chân và nồi */}
      <Shadow cx={222} cy={184} rx={74} ry={7} />
      <path
        d="M176 112 L162 180 M268 112 L282 180 M222 112 V132"
        stroke={C.ink}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <rect x="170" y="108" width="104" height="8" rx="4" fill={C.ink} />
      <path d="M174 60 H270 V86 Q270 108 248 108 H196 Q174 108 174 86 Z" fill={POT} />
      <path d="M222 60 H270 V86 Q270 108 248 108 H222 Z" fill={C.ink} opacity="0.55" />
      <rect x="166" y="54" width="112" height="10" rx="5" fill={C.inkSoft} />
      <rect x="182" y="70" width="7" height="26" rx="3.5" fill={C.white} opacity="0.3" />
      <path d="M176 56 Q222 28 268 56 Z" fill={C.inkSoft} />
      <circle cx="222" cy="38" r="6" fill={C.ink} />
      <Steam x={196} y={34} />
      <Steam x={250} y={34} delay={-1.6} />

      {/* củi chẻ nhỏ chụm đầu vào giữa, lửa bốc lên */}
      {STICKS.map(([rotate, w], i) => (
        <Split key={i} x={222} y={176} w={w} rotate={rotate} />
      ))}
      <Flame x={202} y={176} size={30} delay={-0.3} />
      <Flame x={242} y={176} size={32} delay={-0.15} />
      <Flame x={222} y={178} size={46} />
      <Flame x={212} y={178} size={22} outer={C.flameCore} core={C.white} delay={-0.4} />
      <g fill={C.flameCore}>
        <circle cx="190" cy="126" r="2.2" className="sc sc-rise" />
        <circle
          cx="256"
          cy="130"
          r="1.8"
          className="sc sc-rise"
          style={{ animationDelay: '-1.4s' }}
        />
      </g>
    </Scene>
  )
}
