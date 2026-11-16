import { C, Cloud, Flame, IndoorBg, Scene, type SceneProps, Shadow, Steam } from '../kit'

const WALL = '#FFE6BF'
const WALL_SHADE = '#F8CE96'
const STEAM_SHADE = '#DCEBF5'
/** Cụm hơi nước cuộn ở đầu luồng hơi: [x, y, r] */
const HEAD = [
  [80, 58, 10],
  [99, 56, 11],
  [89, 43, 13],
  [73, 46, 8],
  [106, 42, 9],
] as const
/** Các cụm hơi bay lên rồi tan: [x, y, r] */
const PUFFS = [
  [78, 32, 9],
  [101, 28, 9],
  [89, 20, 10],
] as const

export function BoilingKettleScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={168} tiles />
      {/* cửa sổ nhìn ra trời */}
      <rect x="236" y="22" width="70" height="70" rx="10" fill={C.woodDeep} />
      <rect x="242" y="28" width="58" height="58" rx="6" fill={C.sky} />
      <circle cx="285" cy="43" r="7" fill={C.sun} />
      <Cloud x={262} y={66} scale={0.45} />
      <path d="M271 28 V86 M242 57 H300" stroke={C.woodDeep} strokeWidth="5" />
      <g transform="translate(0 4)">
        {/* bếp */}
        <Shadow cx={166} cy={183} rx={106} ry={7} />
        <rect x="66" y="150" width="200" height="33" rx="9" fill={C.ink} />
        <rect x="66" y="150" width="200" height="9" rx="4.5" fill={C.inkSoft} />
        <circle cx="96" cy="170" r="7" fill={C.metal} />
        <path d="M96 170 v-5" stroke={C.ink} strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="236" cy="170" r="7" fill={C.metal} />
        <path
          d="M118 150 v-14 M226 150 v-14"
          stroke={C.metalDark}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <rect x="140" y="143" width="64" height="7" rx="3.5" fill={C.metalDark} />
        {[130, 144, 158, 172, 186, 200, 214].map((x, i) => (
          <Flame
            key={x}
            x={x}
            y={145}
            size={i % 2 ? 15 : 19}
            outer={C.blueFlame}
            core={C.blueFlameCore}
            delay={-i * 0.13}
          />
        ))}

        {/* hơi nước phun mạnh từ vòi */}
        <g fill={C.white}>
          <path d="M92 83 C90 74 84 68 80 60 H106 C103 68 102 76 103 81 Z" />
          <g className="sc sc-pulse" style={{ transformOrigin: '50% 100%' }}>
            {HEAD.map(([x, y, r], i) => (
              <circle key={i} cx={x} cy={y} r={r} />
            ))}
            <path
              d="M84 55 q9 -9 18 0"
              fill="none"
              stroke={STEAM_SHADE}
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
          {PUFFS.map(([x, y, r], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={r}
              className="sc sc-rise"
              style={{ animationDelay: `${-i * 0.9}s`, animationDuration: '2.7s' }}
            />
          ))}
        </g>

        {/* quai ấm */}
        <path
          d="M138 82 C130 30 214 30 206 82"
          fill="none"
          stroke={C.ink}
          strokeWidth="9"
          strokeLinecap="round"
        />
        {/* vòi ấm */}
        <path
          d="M124 122 C106 114 98 100 91 84 L103 79 C108 94 116 100 130 102 Z"
          fill={C.redDeep}
        />
        <ellipse cx="97" cy="81.5" rx="7" ry="3" fill={C.ink} transform="rotate(-22 97 81.5)" />
        {/* thân ấm */}
        <path
          d="M112 126 C112 88 136 72 172 72 C208 72 232 88 232 126 Q232 134 224 134 H120 Q112 134 112 126 Z"
          fill={C.red}
        />
        <path
          d="M172 72 C208 72 232 88 232 126 Q232 134 224 134 H172 Z"
          fill={C.redDeep}
          opacity="0.5"
        />
        <path
          d="M125 116 C125 100 132 90 146 84"
          fill="none"
          stroke={C.white}
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.5"
        />
        <rect x="112" y="126" width="120" height="10" rx="5" fill={C.metalDark} />
        {/* nắp và núm */}
        <path d="M142 76 Q172 60 202 76 Z" fill={C.redDeep} />
        <rect x="138" y="73" width="68" height="6" rx="3" fill={C.metalDark} />
        <circle cx="172" cy="63" r="7" fill={C.ink} />

        {/* hơi thoát quanh nắp */}
        <Steam x={150} y={62} delay={-0.8} />
        <Steam x={196} y={62} delay={-2.2} />
      </g>
    </Scene>
  )
}
