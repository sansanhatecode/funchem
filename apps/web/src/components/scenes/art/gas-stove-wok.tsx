import { Bubble, C, Flame, IndoorBg, Scene, type SceneProps, Shadow, Steam } from '../kit'

const WALL = '#FFE9C7'
const WALL_SHADE = '#F9D29C'
const HOSE = '#FF9A3D'
const WOK = '#232C3B'
const WOK_IN = '#3D4A60'
/** Rau củ đang xào trong chảo: [x, y, rộng, góc xoay, màu]. */
const FOOD = [
  [176, 98, 16, -20, C.green],
  [196, 102, 18, 12, C.flame],
  [216, 98, 16, -8, C.greenDeep],
  [236, 101, 15, 24, C.red],
  [206, 94, 14, 40, C.yellow],
  [186, 105, 14, 6, C.red],
  [226, 105, 16, -30, C.green],
] as const

export function GasStoveWokScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={168} tiles />

      {/* ống dẫn gas từ bình tới bếp */}
      <path
        d="M66 52 Q108 34 110 104 Q112 158 134 164"
        fill="none"
        stroke={HOSE}
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* bình gas */}
      <Shadow cx={58} cy={187} rx={46} ry={6} />
      <path
        d="M36 66 Q36 42 58 42 Q80 42 80 66"
        fill="none"
        stroke={C.redDeep}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <rect x="52" y="50" width="12" height="18" rx="3" fill={C.metalDark} />
      <rect x="45" y="46" width="26" height="8" rx="4" fill={C.gold} />
      <path
        d="M20 94 Q20 64 58 64 Q96 64 96 94 V170 Q96 186 80 186 H36 Q20 186 20 170 Z"
        fill={C.red}
      />
      <path d="M58 64 Q96 64 96 94 V170 Q96 186 80 186 H58 Z" fill={C.redDeep} opacity="0.5" />
      <rect x="28" y="92" width="7" height="72" rx="3.5" fill={C.white} opacity="0.4" />
      <rect x="40" y="104" width="38" height="34" rx="7" fill={C.white} />
      <path
        d="M59 110 C68 118 67 130 59 132 C51 130 50 118 59 110 Z"
        fill={C.blueFlame}
        stroke={C.blueFlame}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M59 120 C63 124 62 130 59 131 C56 130 55 124 59 120 Z" fill={C.blueFlameCore} />
      <rect x="26" y="180" width="64" height="8" rx="4" fill={C.redDeep} />

      {/* bếp gas */}
      <Shadow cx={210} cy={188} rx={100} ry={6} />
      <rect x="118" y="154" width="184" height="34" rx="9" fill={C.ink} />
      <rect x="118" y="154" width="184" height="9" rx="4.5" fill={C.inkSoft} />
      <circle cx="146" cy="175" r="7" fill={C.metal} />
      <path d="M146 175 v-5" stroke={C.ink} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="274" cy="175" r="7" fill={C.metal} />
      <path
        d="M156 154 v-12 M264 154 v-12"
        stroke={C.metalDark}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <rect x="180" y="148" width="60" height="7" rx="3.5" fill={C.metalDark} />
      {[168, 182, 196, 210, 224, 238, 252].map((x, i) => (
        <Flame
          key={x}
          x={x}
          y={152}
          size={i % 2 ? 16 : 20}
          outer={C.blueFlame}
          core={C.blueFlameCore}
          delay={-i * 0.13}
        />
      ))}

      {/* chảo sâu lòng */}
      <path d="M274 94 L314 78" stroke={C.ink} strokeWidth="13" strokeLinecap="round" />
      <path d="M290 86 L310 78" stroke={C.woodDeep} strokeWidth="9" strokeLinecap="round" />
      <path d="M140 96 Q150 138 196 141 H224 Q270 138 280 96 Z" fill={WOK} />
      <path d="M210 141 H224 Q270 138 280 96 H210 Z" fill={C.ink} opacity="0.5" />
      <ellipse cx="210" cy="96" rx="70" ry="14" fill={C.inkSoft} />
      <ellipse cx="210" cy="97" rx="63" ry="11" fill={WOK_IN} />
      <path
        d="M150 106 Q156 126 178 134"
        fill="none"
        stroke={C.white}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.3"
      />
      {FOOD.map(([x, y, w, r, color], i) => (
        <rect
          key={i}
          x={x - w / 2}
          y={y - 3.5}
          width={w}
          height="7"
          rx="3.5"
          fill={color}
          transform={`rotate(${r} ${x} ${y})`}
        />
      ))}
      {/* vài miếng rau đang được hất lên */}
      <g className="sc sc-float">
        <rect
          x="190"
          y="72"
          width="15"
          height="7"
          rx="3.5"
          fill={C.green}
          transform="rotate(-28 197 75)"
        />
        <rect
          x="218"
          y="66"
          width="14"
          height="7"
          rx="3.5"
          fill={C.flame}
          transform="rotate(20 225 69)"
        />
      </g>

      <Bubble x={170} y={92} r={2} color={C.yellow} delay={0} duration={1.3} />
      <Bubble x={248} y={92} r={2.2} color={C.yellow} delay={-0.6} duration={1.5} />
      <Steam x={176} y={66} />
      <Steam x={246} y={62} delay={-1.8} />
    </Scene>
  )
}
