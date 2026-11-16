import { useId } from 'react'
import { C, IndoorBg, OutdoorBg, Raindrop, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

/** Cây đinh nằm nghiêng. Vẽ quanh gốc (0,0) ở mũ đinh, dài 156. */
function Nail({ rusted }: { rusted: boolean }) {
  const clip = useId()
  return (
    <g>
      <clipPath id={clip}>
        <path d="M0 -8 H128 L156 0 L128 8 H0 Z" />
      </clipPath>
      {/* thân đinh */}
      <path d="M0 -8 H128 L156 0 L128 8 H0 Z" fill={C.metal} />
      <path d="M0 2 H130 L148 2 L128 8 H0 Z" fill={C.metalDark} opacity="0.55" />
      <rect x="6" y="-5.5" width="116" height="3" rx="1.5" fill={C.metalLight} />
      {rusted && (
        <g clipPath={`url(#${clip})`}>
          <ellipse cx="34" cy="-2" rx="16" ry="9" fill={C.rust} />
          <ellipse cx="74" cy="3" rx="22" ry="10" fill={C.rust} className="sc sc-pulse" />
          <ellipse cx="112" cy="-3" rx="14" ry="8" fill={C.rust} />
          <circle cx="28" cy="1" r="4" fill={C.rustDark} />
          <circle cx="68" cy="-1" r="5" fill={C.rustDark} />
          <circle cx="84" cy="4" r="3.5" fill={C.rustDark} />
          <circle cx="114" cy="-1" r="3.5" fill={C.rustDark} />
          <circle cx="50" cy="5" r="3" fill={C.rustDark} opacity="0.8" />
        </g>
      )}
      {/* mũ đinh */}
      <rect x="-12" y="-17" width="13" height="34" rx="4.5" fill={C.metalDark} />
      <rect x="-12" y="-17" width="6" height="34" rx="3" fill={C.metal} />
      {rusted && <circle cx="-4" cy="8" r="4" fill={C.rust} />}
    </g>
  )
}

export function RustyNailScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <OutdoorBg rainy groundY={132} />
      {/* tấm ván gỗ cũ */}
      <rect x="14" y="118" width="292" height="50" rx="9" fill={C.woodDeep} />
      <rect x="14" y="118" width="292" height="40" rx="9" fill={C.wood} />
      <path
        d="M40 132 h70 M150 128 h96 M70 148 h120 M230 146 h50"
        stroke={C.woodDeep}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle
        cx="262"
        cy="134"
        r="5"
        fill="none"
        stroke={C.woodDeep}
        strokeWidth="2.5"
        opacity="0.6"
      />
      {/* vệt gỉ loang trên gỗ */}
      <ellipse cx="166" cy="148" rx="46" ry="6" fill={C.rust} opacity="0.28" />

      <g transform="translate(92 152) rotate(-13)">
        <Shadow cx={74} cy={13} rx={76} ry={4} />
        <Nail rusted />
      </g>

      {/* vũng nước và gợn sóng */}
      <ellipse cx="258" cy="184" rx="44" ry="8" fill={C.waterDeep} opacity="0.55" />
      <ellipse
        cx="250"
        cy="184"
        rx="14"
        ry="3"
        fill="none"
        stroke={C.white}
        strokeWidth="1.6"
        className="sc sc-ripple"
      />
      <ellipse
        cx="274"
        cy="185"
        rx="12"
        ry="2.6"
        fill="none"
        stroke={C.white}
        strokeWidth="1.6"
        className="sc sc-ripple"
        style={{ animationDelay: '-1.1s' }}
      />

      {[28, 66, 104, 142, 186, 224, 262, 298].map((x, i) => (
        <Raindrop key={x} x={x} y={50 + (i % 3) * 14} delay={-i * 0.23} />
      ))}
      {[48, 124, 204, 284].map((x, i) => (
        <Raindrop key={x} x={x} y={84 + (i % 2) * 10} delay={-0.5 - i * 0.31} />
      ))}
    </Scene>
  )
}

export function IronNailScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={C.wallCool} wallShade={C.wallCoolShade} tableY={128} />
      {/* búa */}
      <g transform="translate(232 150) rotate(24)">
        <Shadow cx={0} cy={30} rx={50} ry={5} />
        <rect x="-6" y="-56" width="12" height="92" rx="5" fill={C.woodDark} />
        <rect x="-6" y="-56" width="5" height="92" rx="2.5" fill={C.woodDeep} />
        <rect x="-30" y="-74" width="60" height="26" rx="6" fill={C.inkSoft} />
        <rect x="-30" y="-74" width="60" height="9" rx="4.5" fill={C.metalDark} />
      </g>
      {/* đinh nhỏ rải rác */}
      <g transform="translate(40 178) rotate(8) scale(0.36)">
        <Nail rusted={false} />
      </g>
      <g transform="translate(118 186) rotate(-30) scale(0.3)">
        <Nail rusted={false} />
      </g>

      <g transform="translate(58 158) rotate(-13)">
        <Shadow cx={74} cy={13} rx={76} ry={4} />
        <Nail rusted={false} />
      </g>
      <Sparkle x={84} y={132} size={8} />
      <Sparkle x={150} y={118} size={6} delay={-0.8} />
      <Sparkle x={196} y={112} size={5} delay={-1.5} />
    </Scene>
  )
}
