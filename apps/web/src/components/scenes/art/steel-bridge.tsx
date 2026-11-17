import { C, Cloud, Scene, type SceneProps, Sparkle } from '../kit'

const STEEL = '#4F6F94'
const STEEL_DARK = '#35506F'
const STEEL_LIGHT = '#86A6C8'
const STONE = '#C9BBA8'
const STONE_DEEP = '#A8977F'
const RIVER = '#6EC3EE'
const RIVER_DEEP = '#4AA6DC'
const TRAIN = '#F25F5C'
const TRAIN_DEEP = '#D03F3C'
/** Các nút trên của giàn thép: [x, y] */
const TOP = [
  [70, 96],
  [110, 66],
  [160, 54],
  [210, 66],
  [250, 96],
] as const
/** Các nút dưới, nằm trên mặt cầu */
const BOTTOM = [30, 70, 110, 160, 210, 250, 290] as const
const DECK_Y = 122

export function SteelBridgeScene(props: SceneProps) {
  const chord = `M30 ${DECK_Y} ${TOP.map(([x, y]) => `L${x} ${y}`).join(' ')} L290 ${DECK_Y}`
  const posts = TOP.map(([x, y]) => `M${x} ${y} V${DECK_Y}`).join(' ')
  const braces = `M110 66 L70 ${DECK_Y} M110 66 L160 ${DECK_Y} M210 66 L160 ${DECK_Y} M210 66 L250 ${DECK_Y}`
  return (
    <Scene {...props}>
      <rect width="320" height="200" fill={C.sky} />
      <circle cx="268" cy="34" r="18" fill={C.sun} />
      <circle cx="268" cy="34" r="26" fill={C.sun} opacity="0.25" className="sc sc-pulse" />
      <Cloud x={52} y={30} scale={0.9} drift />
      <Cloud x={180} y={22} scale={0.6} drift delay={-12} />
      {/* đồi xa và hai bờ sông */}
      <path d="M0 132 Q60 104 130 128 T320 118 V160 H0 Z" fill={C.grassDeep} opacity="0.7" />
      <rect y="150" width="320" height="50" fill={RIVER} />
      <path
        d="M0 150 H44 Q52 168 30 176 H0 Z M320 150 H276 Q268 168 290 176 H320 Z"
        fill={C.grass}
      />
      <rect y="176" width="320" height="24" fill={RIVER_DEEP} opacity="0.5" />

      {/* trụ cầu bằng đá */}
      <path d="M96 128 H124 L128 178 H92 Z M196 128 H224 L228 178 H192 Z" fill={STONE} />
      <path
        d="M112 128 H124 L128 178 H112 Z M212 128 H224 L228 178 H212 Z"
        fill={STONE_DEEP}
        opacity="0.7"
      />
      <ellipse cx="110" cy="178" rx="24" ry="4" fill={C.white} opacity="0.5" />
      <ellipse cx="210" cy="178" rx="24" ry="4" fill={C.white} opacity="0.5" />

      {/* đoàn tàu chạy qua cầu */}
      <g className="sc sc-drift" style={{ animationDuration: '14s' }}>
        <rect x="-64" y="103" width="30" height="17" rx="4" fill={TRAIN} />
        <rect x="-30" y="103" width="30" height="17" rx="4" fill={TRAIN} />
        <path
          d="M-64 114 H-34 V116 Q-34 120 -38 120 H-60 Q-64 120 -64 116 Z M-30 114 H0 V116 Q0 120 -4 120 H-26 Q-30 120 -30 116 Z"
          fill={TRAIN_DEEP}
        />
        <g fill={C.white}>
          <rect x="-59" y="107" width="8" height="6" rx="1.5" />
          <rect x="-47" y="107" width="8" height="6" rx="1.5" />
          <rect x="-25" y="107" width="8" height="6" rx="1.5" />
          <rect x="-13" y="107" width="8" height="6" rx="1.5" />
        </g>
      </g>

      {/* giàn thép */}
      <path d={braces} stroke={STEEL_DARK} strokeWidth="5" strokeLinecap="round" />
      <path d={posts} stroke={STEEL} strokeWidth="6" strokeLinecap="round" />
      <path
        d={chord}
        fill="none"
        stroke={STEEL}
        strokeWidth="9"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M72 92 L110 63 L160 51 L210 63"
        fill="none"
        stroke={STEEL_LIGHT}
        strokeWidth="2.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* mặt cầu */}
      <rect x="0" y={DECK_Y - 2} width="320" height="11" rx="2" fill={STEEL_DARK} />
      <rect x="0" y={DECK_Y - 2} width="320" height="4" fill={STEEL} />
      {/* đinh tán ở các nút */}
      <g fill={STEEL_LIGHT}>
        {TOP.map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="4.6" />
        ))}
        {BOTTOM.map((x) => (
          <circle key={x} cx={x} cy={DECK_Y + 3.5} r="2.6" />
        ))}
      </g>
      <Sparkle x={160} y={50} size={8} />
      <Sparkle x={236} y={84} size={6} delay={-1} />

      {/* gợn sóng và con thuyền nhỏ */}
      <ellipse
        cx="60"
        cy="188"
        rx="16"
        ry="3"
        fill="none"
        stroke={C.white}
        strokeWidth="1.8"
        className="sc sc-ripple"
      />
      <ellipse
        cx="262"
        cy="186"
        rx="14"
        ry="2.8"
        fill="none"
        stroke={C.white}
        strokeWidth="1.8"
        className="sc sc-ripple"
        style={{ animationDelay: '-1.1s' }}
      />
      <g className="sc sc-float">
        <path d="M140 180 H184 L176 190 H148 Z" fill={C.woodDark} />
        <path d="M160 180 V160 L176 176 H160 Z" fill={C.white} />
      </g>
    </Scene>
  )
}
