import { C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const CABLE = 'M-14 172 C44 172 46 110 116 110'
const COPPER_LIGHT = '#F4AE74'
/** điểm cuối của từng sợi đồng xoè ra */
const STRANDS: [number, number, string][] = [
  [218, 54, C.copperDeep],
  [234, 72, C.copper],
  [243, 91, COPPER_LIGHT],
  [246, 110, C.copper],
  [243, 129, C.copperDeep],
  [234, 148, C.copper],
  [218, 164, COPPER_LIGHT],
]

export function CopperWireScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall="#EAF5E4" wallShade="#D3E9CA" tableY={146} />

      {/* bóng đèn sáng treo trên tường */}
      <path d="M96 0 V26" stroke={C.red} strokeWidth="5" />
      <circle cx="96" cy="56" r="30" fill={C.yellow} opacity="0.5" className="sc sc-pulse" />
      <circle cx="96" cy="56" r="19" fill={C.yellow} />
      <path d="M96 37 A19 19 0 0 1 96 75 Z" fill={C.gold} opacity="0.55" />
      <rect x="86" y="24" width="20" height="17" rx="4" fill={C.inkSoft} />
      <rect x="86" y="24" width="20" height="6" rx="3" fill={C.metalDark} />
      <ellipse cx="89" cy="52" rx="4" ry="7" fill={C.white} opacity="0.8" />

      {/* dây điện: vỏ nhựa đỏ */}
      <Shadow cx={38} cy={189} rx={66} ry={5} />
      <path d={CABLE} fill="none" stroke={C.redDeep} strokeWidth="32" />
      <path d={CABLE} fill="none" stroke={C.red} strokeWidth="23" transform="translate(0 -4.5)" />
      <path
        d={CABLE}
        fill="none"
        stroke={C.white}
        strokeWidth="3.5"
        opacity="0.5"
        transform="translate(0 -9)"
      />

      {/* các sợi đồng xoè ra */}
      {STRANDS.map(([x, y, color]) => (
        <path
          key={y}
          d={`M140 110 Q186 ${110 + (y - 110) * 0.18} ${x} ${y}`}
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
        />
      ))}
      {STRANDS.map(([x, y]) => (
        <circle key={y} cx={x} cy={y} r="1.8" fill="#FFE1C2" />
      ))}
      <path
        d="M150 104 Q190 92 226 68 M150 113 Q196 112 238 108"
        fill="none"
        stroke={C.white}
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* đoạn lõi xoắn chặt và mép vỏ bị tuốt */}
      <rect x="114" y="100" width="42" height="20" rx="5" fill={C.copper} />
      <path
        d="M116 110 H152 Q156 110 156 115 Q156 120 151 120 H116 Z"
        fill={C.copperDeep}
        opacity="0.6"
      />
      <path
        d="M126 101 l7 18 M137 101 l7 18 M148 101 l6 15"
        stroke={C.copperDeep}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <rect x="120" y="103" width="30" height="3" rx="1.5" fill={C.white} opacity="0.55" />
      <ellipse cx="116" cy="110" rx="6" ry="16" fill={C.redDeep} />
      <ellipse cx="117" cy="110" rx="3.5" ry="10.5" fill="#A82F2C" />

      <Sparkle x={222} y={60} size={9} />
      <Sparkle x={250} y={104} size={7} delay={-0.8} />
      <Sparkle x={196} y={136} size={6} delay={-1.5} />
    </Scene>
  )
}
