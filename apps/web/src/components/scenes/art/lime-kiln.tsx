import { C, Flame, OutdoorBg, Scene, type SceneProps, Shadow } from '../kit'

const BRICK = '#D68A5E'
const BRICK_DEEP = '#A9603C'
const MORTAR = '#8E4E30'
const HEARTH = '#3F2216'
const STONE = '#AEB8C4'
const STONE_DEEP = '#8490A0'
const LIME_SHADE = '#DDE5EC'
const SMOKE = '#F3F6F9'
/** Đống đá vôi xám chờ nung: các điểm của từng tảng đá. */
const ROCKS = [
  'M14 184 L20 164 L36 158 L48 168 L50 184 Z',
  'M44 184 L50 160 L66 150 L82 160 L86 184 Z',
  'M30 164 L40 146 L56 142 L64 154 L52 166 Z',
  'M80 184 L84 168 L98 164 L106 174 L104 184 Z',
]
/** Vôi sống trắng vừa ra lò: [x, y, bán kính]. */
const LIME = [
  [232, 178, 11],
  [250, 174, 13],
  [270, 177, 12],
  [288, 180, 9],
  [242, 162, 10],
  [262, 158, 12],
  [280, 164, 10],
  [254, 146, 9],
  [270, 147, 8],
] as const
/** Cụm khói trắng bốc lên từ miệng lò: [x, y, bán kính]. */
const PUFFS = [
  [148, 44, 11],
  [170, 40, 13],
  [158, 28, 12],
  [176, 22, 9],
] as const

export function LimeKilnScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <OutdoorBg groundY={156} />
      <rect y="172" width="320" height="28" fill={C.soil} opacity="0.55" />

      {/* đá vôi xám */}
      <Shadow cx={60} cy={186} rx={52} ry={5} />
      {ROCKS.map((d, i) => (
        <path key={d} d={d} fill={i % 2 ? STONE_DEEP : STONE} />
      ))}
      <path
        d="M22 166 L34 162 M52 162 L66 154 M40 148 L54 146"
        stroke={C.white}
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* lò nung vôi xây gạch */}
      <Shadow cx={160} cy={186} rx={74} ry={7} />
      <path d="M96 186 L114 62 Q160 46 206 62 L224 186 Z" fill={BRICK} />
      <path d="M160 50 Q186 52 206 62 L224 186 H160 Z" fill={BRICK_DEEP} opacity="0.55" />
      <path
        d="M111 84 H209 M107 110 H213 M104 136 H216 M100 162 H220 M134 62 V84 M186 62 V84 M160 84 V110 M122 110 V136 M198 110 V136 M112 136 V162 M208 136 V162"
        stroke={MORTAR}
        strokeWidth="2"
        opacity="0.5"
      />
      <ellipse cx="160" cy="60" rx="46" ry="10" fill={BRICK_DEEP} />
      <ellipse cx="160" cy="60" rx="37" ry="7" fill={HEARTH} />
      <ellipse cx="160" cy="61" rx="26" ry="4" fill={C.flame} className="sc sc-pulse" />

      {/* khói và khí bốc lên từ miệng lò */}
      {PUFFS.map(([x, y, r], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={r}
          fill={SMOKE}
          className="sc sc-rise"
          style={{ animationDelay: `${-i * 0.8}s`, animationDuration: '3.4s' }}
        />
      ))}

      {/* cửa lò đỏ lửa, bên trong là đá vôi đang nung */}
      <path d="M128 186 V142 Q160 104 192 142 V186 Z" fill={MORTAR} />
      <path d="M134 186 V144 Q160 114 186 144 V186 Z" fill={HEARTH} />
      <path
        d="M138 186 V150 Q160 126 182 150 V186 Z"
        fill={C.flame}
        opacity="0.55"
        className="sc sc-pulse"
        style={{ transformOrigin: '50% 100%' }}
      />
      <g fill={C.flameCore}>
        <path d="M140 186 L144 172 L154 168 L160 176 L158 186 Z" />
        <path d="M160 186 L164 170 L174 166 L182 176 L180 186 Z" />
        <path d="M150 170 L156 158 L166 156 L170 166 L162 172 Z" />
      </g>
      <Flame x={146} y={170} size={22} />
      <Flame x={160} y={160} size={28} delay={-0.2} />
      <Flame x={174} y={170} size={22} delay={-0.35} />

      {/* vôi sống trắng và cái xẻng */}
      <Shadow cx={262} cy={188} rx={46} ry={5} />
      {LIME.map(([x, y, r], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r} fill={C.white} />
          <path
            d={`M${x} ${y + r} A${r} ${r} 0 0 0 ${x + r} ${y} Q${x + r * 0.2} ${y + r * 0.3} ${x} ${y + r} Z`}
            fill={LIME_SHADE}
          />
        </g>
      ))}
      <path d="M304 120 L286 172" stroke={C.woodDeep} strokeWidth="5" strokeLinecap="round" />
      <path d="M278 170 L294 174 L290 190 Q282 194 274 188 Z" fill={C.metalDark} />
    </Scene>
  )
}
