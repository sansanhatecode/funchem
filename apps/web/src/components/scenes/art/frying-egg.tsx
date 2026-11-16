import { Bubble, C, Flame, IndoorBg, Scene, type SceneProps, Shadow, Steam } from '../kit'

const WALL = '#CFE7F1'
const WALL_SHADE = '#B3D7E6'
const PAN_WALL = '#1E2A3B'
const PAN_FLOOR = '#46566C'
const WHITE_SHADE = '#DCE5EE'
const SHELL = '#FFF3E0'
const SHELL_DEEP = '#F0CFA6'
const EGG_WHITE =
  'M98 108 C94 97 110 92 122 95 C130 86 152 88 162 92 C176 87 200 93 200 104 C208 112 194 122 180 119 C170 127 146 126 136 121 C122 127 102 120 98 108 Z'

export function FryingEggScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={166} tiles />

      {/* vỏ trứng trên bàn */}
      <path
        d="M14 176 l5 -5 l5 5 l5 -5 l5 5 l5 -5 l5 5 Q44 192 29 192 Q14 192 14 176 Z"
        fill={SHELL}
      />
      <path d="M32 173 l2 -2 l5 5 l5 -5 l0 5 Q44 192 29 192 Q40 186 32 173 Z" fill={SHELL_DEEP} />

      {/* bếp */}
      <Shadow cx={160} cy={186} rx={106} ry={7} />
      <rect x="62" y="152" width="196" height="34" rx="9" fill={C.ink} />
      <rect x="62" y="152" width="196" height="9" rx="4.5" fill={C.inkSoft} />
      <circle cx="92" cy="173" r="7" fill={C.metal} />
      <path d="M92 173 v-5" stroke={C.ink} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="228" cy="173" r="7" fill={C.metal} />
      <path
        d="M98 152 v-12 M206 152 v-12"
        stroke={C.metalDark}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <rect x="122" y="146" width="60" height="7" rx="3.5" fill={C.metalDark} />
      {[112, 126, 140, 154, 168, 182, 196].map((x, i) => (
        <Flame
          key={x}
          x={x}
          y={150}
          size={i % 2 ? 15 : 19}
          outer={C.blueFlame}
          core={C.blueFlameCore}
          delay={-i * 0.13}
        />
      ))}

      {/* chảo */}
      <path d="M238 92 L304 76" stroke={C.ink} strokeWidth="14" strokeLinecap="round" />
      <path d="M252 86 L298 75" stroke={C.inkSoft} strokeWidth="4" strokeLinecap="round" />
      <path d="M60 96 Q62 133 108 138 H196 Q242 133 244 96 Z" fill={C.ink} />
      <ellipse cx="152" cy="96" rx="92" ry="36" fill={C.inkSoft} />
      <ellipse cx="152" cy="97" rx="85" ry="31" fill={PAN_WALL} />
      <ellipse cx="152" cy="103" rx="79" ry="26" fill={PAN_FLOOR} />
      <path
        d="M78 88 Q98 72 132 66"
        fill="none"
        stroke={C.white}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.35"
      />

      {/* trứng ốp la */}
      <g transform="translate(0 -19.2) scale(1 1.15)">
        <path d={EGG_WHITE} fill={WHITE_SHADE} transform="translate(0 2.5)" />
        <path d={EGG_WHITE} fill={C.white} />
      </g>
      <g fill="none" stroke={WHITE_SHADE} strokeWidth="1.8" className="sc sc-pulse">
        <circle cx="112" cy="108" r="3.4" />
        <circle cx="185" cy="109" r="3" />
        <circle cx="131" cy="90" r="2.4" />
      </g>
      <ellipse cx="154" cy="103" rx="19" ry="14.5" fill={C.goldDeep} />
      <ellipse cx="154" cy="101" rx="19" ry="14.5" fill={C.gold} />
      <ellipse cx="150" cy="97" rx="11.5" ry="7.5" fill={C.yellow} />
      <ellipse cx="146" cy="94.5" rx="4" ry="2.4" fill={C.white} />

      {/* dầu bắn lách tách và hơi nóng */}
      <Bubble x={102} y={96} r={2} color={C.yellow} delay={0} duration={1.3} />
      <Bubble x={196} y={94} r={2.4} color={C.yellow} delay={-0.5} duration={1.5} />
      <Bubble x={174} y={84} r={1.8} color={C.yellow} delay={-0.9} duration={1.2} />
      <Steam x={116} y={74} />
      <Steam x={190} y={70} delay={-1.8} />
    </Scene>
  )
}
