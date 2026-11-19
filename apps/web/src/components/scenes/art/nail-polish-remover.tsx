import { C, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

const WALL = '#FFE6EE'
const WALL_SHADE = '#FFCFDD'
const LIQUID = '#E9F7FB'
const LIQUID_DEEP = '#C9E9F3'
const CAP = '#FF8FB1'
const CAP_DEEP = '#E86A92'
const POLISH = '#E8334F'
const POLISH_DEEP = '#B81F3A'
const SKIN = '#F8D0A8'
const SKIN_DEEP = '#E9B286'
const SCENT = '#FFB3C8'
/** Ba ngón tay: [x gốc, dài, đã lau sạch sơn chưa]. */
const FINGERS = [
  [204, 58, false],
  [228, 66, true],
  [252, 58, false],
] as const

export function NailPolishRemoverScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={152} />

      {/* chai nước tẩy sơn móng tay */}
      <Shadow cx={84} cy={184} rx={50} ry={6} />
      <rect x="68" y="44" width="32" height="24" rx="5" fill={CAP} />
      <rect x="84" y="44" width="16" height="24" rx="5" fill={CAP_DEEP} opacity="0.6" />
      <path
        d="M52 92 Q52 68 76 66 H92 Q116 68 116 92 V170 Q116 182 104 182 H64 Q52 182 52 170 Z"
        fill={C.glass}
      />
      <path d="M52 104 H116 V170 Q116 182 104 182 H64 Q52 182 52 170 Z" fill={LIQUID} />
      <path d="M84 104 H116 V170 Q116 182 104 182 H84 Z" fill={LIQUID_DEEP} opacity="0.7" />
      <rect x="60" y="118" width="48" height="36" rx="6" fill={C.white} />
      <ellipse cx="84" cy="131" rx="9" ry="6" fill={POLISH} />
      <path
        d="M72 144 H96"
        stroke={C.inkSoft}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
      <rect x="58" y="76" width="6" height="96" rx="3" fill={C.white} opacity="0.7" />

      {/* lọ sơn móng tay nhỏ */}
      <Shadow cx={150} cy={184} rx={24} ry={4} />
      <rect x="143" y="118" width="14" height="30" rx="4" fill={C.ink} />
      <rect x="134" y="146" width="32" height="36" rx="9" fill={POLISH} />
      <rect x="150" y="146" width="16" height="36" rx="9" fill={POLISH_DEEP} opacity="0.6" />
      <rect x="139" y="152" width="5" height="22" rx="2.5" fill={C.white} opacity="0.6" />

      {/* bàn tay đặt trên bàn, móng giữa vừa được lau sạch */}
      <Shadow cx={236} cy={186} rx={58} ry={5} />
      <rect x="186" y="150" width="88" height="50" rx="20" fill={SKIN} />
      <rect x="230" y="150" width="44" height="50" rx="20" fill={SKIN_DEEP} opacity="0.4" />
      {FINGERS.map(([x, len, clean]) => (
        <g key={x}>
          <rect x={x} y={170 - len} width="20" height={len} rx="10" fill={SKIN} />
          <rect
            x={x + 3}
            y={174 - len}
            width="14"
            height="17"
            rx="6"
            fill={clean ? '#FFE9DC' : POLISH}
          />
          {!clean && (
            <rect
              x={x + 5}
              y={176 - len}
              width="3"
              height="10"
              rx="1.5"
              fill={C.white}
              opacity="0.6"
            />
          )}
        </g>
      ))}
      <rect
        x="270"
        y="132"
        width="20"
        height="40"
        rx="10"
        fill={SKIN}
        transform="rotate(24 280 152)"
      />
      <rect
        x="273"
        y="135"
        width="14"
        height="15"
        rx="6"
        fill={POLISH}
        transform="rotate(24 280 152)"
      />

      {/* miếng bông thấm nước tẩy, dính vệt sơn đỏ */}
      <g className="sc sc-float">
        <ellipse cx="238" cy="92" rx="20" ry="11" fill={C.white} />
        <ellipse cx="238" cy="95" rx="20" ry="8" fill={C.metalLight} opacity="0.6" />
        <ellipse cx="236" cy="96" rx="8" ry="3.4" fill={POLISH} opacity="0.75" />
      </g>

      {/* mùi thơm bay lên từ miệng chai */}
      <g fill="none" stroke={SCENT} strokeWidth="3.4" strokeLinecap="round" opacity="0.85">
        <path d="M76 36 q-6 -8 0 -16 q6 -8 0 -16" className="sc sc-rise" />
        <path
          d="M96 40 q-6 -8 0 -16 q6 -8 0 -16"
          className="sc sc-rise"
          style={{ animationDelay: '-1.5s' }}
        />
      </g>
    </Scene>
  )
}
