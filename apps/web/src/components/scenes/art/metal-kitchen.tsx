import { C, Flame, IndoorBg, Scene, type SceneProps, Shadow, Sparkle, Steam } from '../kit'

const WALL = '#FFE1C4'
const WALL_SHADE = '#FFCFA3'
const PAN_FLOOR = '#46566C'

/** Chìa khoá nằm ngang: đầu tròn ở gốc (0,0), thân chìa chĩa sang phải. */
function Key({ color, shade }: { color: string; shade: string }) {
  return (
    <g>
      <path d="M6 -3.5 H38 L42 0 L38 3.5 H6 Z" fill={color} />
      <path d="M18 3.5 v5 h5 v-5 M27 3.5 v6 h5 v-6" fill={color} />
      <path d="M6 0.5 H40 L38 3.5 H6 Z" fill={shade} opacity="0.55" />
      <circle cx="0" cy="0" r="10" fill={color} />
      <path d="M0 -10 A10 10 0 0 1 0 10 A14 14 0 0 0 0 -10 Z" fill={shade} opacity="0.55" />
      <circle cx="-2" cy="0" r="3.4" fill={C.wood} />
    </g>
  )
}

export function MetalKitchenScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={164} tiles />

      {/* chảo treo trên tường */}
      <circle cx="268" cy="16" r="5" fill={C.metalDark} />
      <path d="M268 20 V62" stroke={C.ink} strokeWidth="10" strokeLinecap="round" />
      <path d="M266 26 V56" stroke={C.inkSoft} strokeWidth="3" strokeLinecap="round" />
      <circle cx="268" cy="88" r="31" fill={C.ink} />
      <circle cx="268" cy="88" r="24" fill={PAN_FLOOR} />
      <path
        d="M251 78 Q258 68 270 67"
        fill="none"
        stroke={C.white}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* bếp gas */}
      <Shadow cx={130} cy={186} rx={104} ry={6} />
      <rect x="36" y="152" width="188" height="34" rx="9" fill={C.ink} />
      <rect x="36" y="152" width="188" height="9" rx="4.5" fill={C.inkSoft} />
      <circle cx="64" cy="174" r="7" fill={C.metal} />
      <path d="M64 174 v-5" stroke={C.ink} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="196" cy="174" r="7" fill={C.metal} />
      <path
        d="M78 152 v-10 M182 152 v-10"
        stroke={C.metalDark}
        strokeWidth="5"
        strokeLinecap="round"
      />
      {[94, 108, 122, 136, 150, 164].map((x, i) => (
        <Flame
          key={x}
          x={x}
          y={152}
          size={i % 2 ? 13 : 16}
          outer={C.blueFlame}
          core={C.blueFlameCore}
          delay={-i * 0.13}
        />
      ))}

      {/* nồi nhôm */}
      <rect x="50" y="90" width="26" height="10" rx="5" fill={C.ink} />
      <rect x="184" y="90" width="26" height="10" rx="5" fill={C.ink} />
      <path d="M70 80 V128 Q70 142 84 142 H176 Q190 142 190 128 V80 Z" fill={C.metal} />
      <path d="M152 80 H190 V128 Q190 142 176 142 H152 Z" fill={C.metalDark} opacity="0.45" />
      <rect x="80" y="92" width="9" height="40" rx="4.5" fill={C.white} opacity="0.7" />
      <rect x="94" y="92" width="4" height="26" rx="2" fill={C.white} opacity="0.45" />
      <rect x="64" y="76" width="132" height="10" rx="5" fill={C.metalLight} />
      <path d="M150 76 H191 Q196 76 196 81 Q196 86 191 86 H150 Z" fill={C.metal} opacity="0.7" />

      {/* vung nồi hé mở, hơi nước thoát ra */}
      <g transform="rotate(-5 130 70)">
        <path d="M72 76 Q130 44 188 76 Z" fill={C.metalLight} />
        <path d="M134 60 Q161 61 188 76 H134 Z" fill={C.metal} opacity="0.6" />
        <rect x="121" y="46" width="18" height="11" rx="4.5" fill={C.ink} />
        <path
          d="M90 70 Q106 58 122 56"
          fill="none"
          stroke={C.white}
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.8"
        />
      </g>
      <Steam x={84} y={66} />
      <Steam x={176} y={60} delay={-1.3} />
      <Steam x={102} y={44} delay={-2.4} />
      <Sparkle x={168} y={104} size={7} />
      <Sparkle x={112} y={126} size={5} delay={-1.1} />

      {/* chùm chìa khoá trên bàn */}
      <Shadow cx={270} cy={190} rx={38} ry={4} />
      <g transform="translate(250 180) rotate(14)">
        <Key color={C.metal} shade={C.metalDark} />
      </g>
      <g transform="translate(254 176) rotate(-16)">
        <Key color={C.gold} shade={C.goldDeep} />
      </g>
      <circle cx="248" cy="174" r="9" fill="none" stroke={C.metalDark} strokeWidth="2.6" />
      <Sparkle x={292} y={162} size={5} delay={-0.6} />
    </Scene>
  )
}
