import { C, OutdoorBg, Raindrop, Scene, type SceneProps, Sparkle } from '../kit'

const HOUSE = '#FFE9C7'
const HOUSE_SHADE = '#F3CF9B'
const DOOR = '#3F8FB5'
const DOOR_DEEP = '#2F7396'
/** Các gợn sóng của tấm tôn: x ở mép trên, x ở mép dưới */
const RIDGES = [
  [76, 33],
  [96, 63],
  [116, 94],
  [136, 124],
  [156, 154],
  [176, 184],
  [196, 214],
  [216, 245],
  [236, 275],
] as const

export function ZincRoofScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <OutdoorBg rainy groundY={158} />

      {/* tường nhà */}
      <rect x="52" y="96" width="216" height="76" fill={HOUSE} />
      <rect x="196" y="96" width="72" height="76" fill={HOUSE_SHADE} opacity="0.6" />
      <rect x="46" y="170" width="228" height="8" rx="3" fill={C.inkSoft} opacity="0.5" />
      {/* cửa ra vào và cửa sổ */}
      <rect x="88" y="116" width="36" height="56" rx="4" fill={DOOR} />
      <rect x="106" y="116" width="18" height="56" rx="4" fill={DOOR_DEEP} />
      <circle cx="101" cy="146" r="2.6" fill={C.gold} />
      <rect x="160" y="116" width="62" height="34" rx="4" fill={C.woodDeep} />
      <rect x="165" y="121" width="24" height="24" rx="2" fill={C.sky} />
      <rect x="193" y="121" width="24" height="24" rx="2" fill={C.sky} />
      <path d="M168 140 l8 -12 M196 140 l8 -12" stroke={C.white} strokeWidth="3" opacity="0.7" />

      {/* mái tôn mạ kẽm */}
      <path d="M24 104 L70 38 H250 L296 104 Z" fill={C.metalLight} />
      {RIDGES.map(([top, bottom], i) => (
        <path
          key={top}
          d={`M${top} 38 L${bottom} 104 h15 L${top + 10} 38 Z`}
          fill={i % 2 ? C.metalDark : C.metal}
          opacity={i % 2 ? 0.5 : 0.8}
        />
      ))}
      <path d="M70 38 H250 L253 43 H67 Z" fill={C.white} opacity="0.8" />
      <rect x="20" y="100" width="280" height="9" rx="4.5" fill={C.metalDark} />
      <rect x="20" y="100" width="280" height="3.5" rx="1.75" fill={C.metal} />
      <Sparkle x={112} y={62} size={8} />
      <Sparkle x={206} y={80} size={7} delay={-0.9} />
      <Sparkle x={160} y={50} size={5} delay={-1.6} />

      {/* nước mưa chảy khỏi mép mái */}
      {[40, 88, 136, 184, 232, 280].map((x, i) => (
        <circle
          key={x}
          cx={x}
          cy="114"
          r="2.6"
          fill={C.waterDeep}
          className="sc sc-rain"
          style={{ animationDelay: `${-i * 0.17}s`, animationDuration: '1.1s' }}
        />
      ))}

      {/* vũng nước */}
      <ellipse cx="70" cy="188" rx="40" ry="6" fill={C.waterDeep} opacity="0.55" />
      <ellipse
        cx="64"
        cy="188"
        rx="13"
        ry="2.8"
        fill="none"
        stroke={C.white}
        strokeWidth="1.6"
        className="sc sc-ripple"
      />
      <ellipse cx="246" cy="190" rx="34" ry="5" fill={C.waterDeep} opacity="0.55" />
      <ellipse
        cx="252"
        cy="190"
        rx="12"
        ry="2.6"
        fill="none"
        stroke={C.white}
        strokeWidth="1.6"
        className="sc sc-ripple"
        style={{ animationDelay: '-1.1s' }}
      />

      {[22, 62, 104, 146, 188, 230, 272, 306].map((x, i) => (
        <Raindrop key={x} x={x} y={8 + (i % 3) * 10} delay={-i * 0.21} />
      ))}
      {[44, 126, 210, 290].map((x, i) => (
        <Raindrop key={x} x={x} y={120 + (i % 2) * 12} delay={-0.4 - i * 0.29} />
      ))}
    </Scene>
  )
}
