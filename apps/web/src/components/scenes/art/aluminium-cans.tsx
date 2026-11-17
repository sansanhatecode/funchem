import { useId } from 'react'
import { C, OutdoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const LABEL = '#58C7B4'
const LABEL_DEEP = '#3BA896'
const RUST_HOLE = '#5E2A14'
const TIN_BODY = 'M190 100 V156 Q190 166 200 166 H256 Q266 166 266 156 V100 Z'

export function AluminiumCansScene(props: SceneProps) {
  const clip = useId()
  return (
    <Scene {...props}>
      <OutdoorBg groundY={146} />

      {/* vũng nước sau mưa */}
      <ellipse cx="160" cy="184" rx="58" ry="8" fill={C.waterDeep} opacity="0.55" />
      <ellipse
        cx="150"
        cy="184"
        rx="14"
        ry="3"
        fill="none"
        stroke={C.white}
        strokeWidth="1.6"
        className="sc sc-ripple"
      />
      <ellipse
        cx="182"
        cy="185"
        rx="12"
        ry="2.6"
        fill="none"
        stroke={C.white}
        strokeWidth="1.6"
        className="sc sc-ripple"
        style={{ animationDelay: '-1.1s' }}
      />

      {/* vỏ lon nhôm: vẫn sáng */}
      <Shadow cx={110} cy={168} rx={48} ry={6} />
      <path d="M70 72 V154 Q70 166 82 166 H138 Q150 166 150 154 V72 Z" fill={C.metalLight} />
      <path
        d="M70 100 Q90 86 110 100 T150 100 V132 Q130 146 110 132 T70 132 Z"
        fill={LABEL}
        opacity="0.9"
      />
      <path d="M124 72 H150 V154 Q150 166 138 166 H124 Z" fill={C.metalDark} opacity="0.35" />
      <path d="M124 95 Q138 92 150 100 V132 Q138 144 124 140 Z" fill={LABEL_DEEP} opacity="0.6" />
      <rect x="78" y="78" width="9" height="80" rx="4.5" fill={C.white} opacity="0.8" />
      <rect x="92" y="78" width="4" height="50" rx="2" fill={C.white} opacity="0.5" />
      <path d="M70 156 H150 Q149 166 138 166 H82 Q71 166 70 156 Z" fill={C.metal} />
      <path d="M70 74 Q70 64 80 61 H140 Q150 64 150 74 Z" fill={C.metal} />
      <path d="M124 61 H140 Q150 64 150 74 H124 Z" fill={C.metalDark} opacity="0.4" />
      <ellipse cx="110" cy="61" rx="31" ry="6.5" fill={C.metalLight} />
      <ellipse cx="120" cy="60" rx="7" ry="2.8" fill={C.ink} opacity="0.7" />
      <ellipse cx="102" cy="62" rx="6" ry="2.4" fill="none" stroke={C.metalDark} strokeWidth="2" />
      <Sparkle x={84} y={88} size={9} />
      <Sparkle x={140} y={70} size={7} delay={-0.8} />
      <Sparkle x={118} y={150} size={6} delay={-1.5} />

      {/* vỏ hộp sắt: gỉ nâu, nắp bật lên */}
      <Shadow cx={230} cy={168} rx={50} ry={6} />
      <clipPath id={clip}>
        <path d={TIN_BODY} />
      </clipPath>
      <path d={TIN_BODY} fill={C.rust} />
      <g clipPath={`url(#${clip})`}>
        <path d="M240 100 H266 V166 H240 Z" fill={C.rustDark} opacity="0.45" />
        <path d="M190 118 H266 M190 132 H266 M190 146 H266" stroke={C.rustDark} strokeWidth="3" />
        <ellipse cx="206" cy="110" rx="9" ry="6" fill={C.metal} />
        <ellipse cx="250" cy="160" rx="10" ry="5" fill={C.metal} opacity="0.8" />
        <ellipse cx="228" cy="126" rx="13" ry="9" fill={C.rustDark} className="sc sc-pulse" />
        <circle cx="252" cy="114" r="6" fill={C.rustDark} />
        <circle cx="204" cy="152" r="7" fill={C.rustDark} />
        <circle cx="236" cy="150" r="4" fill={RUST_HOLE} />
        <circle cx="214" cy="134" r="3" fill={RUST_HOLE} />
      </g>
      <ellipse cx="228" cy="100" rx="38" ry="8" fill={C.rustDark} />
      <ellipse cx="228" cy="101" rx="32" ry="5.5" fill={RUST_HOLE} />
      <g transform="rotate(-58 196 96)">
        <ellipse cx="226" cy="96" rx="34" ry="7" fill={C.rust} />
        <ellipse cx="226" cy="94.5" rx="30" ry="5" fill={C.metal} opacity="0.55" />
        <circle cx="238" cy="95" r="4" fill={C.rustDark} />
        <circle cx="214" cy="94" r="3" fill={C.rustDark} />
      </g>
      {/* vệt gỉ loang trên đất */}
      <ellipse cx="232" cy="172" rx="40" ry="5" fill={C.rust} opacity="0.3" />

      {/* cỏ */}
      <path
        d="M22 180 q-1 -10 -5 -15 M28 180 q0 -12 2 -18 M34 180 q2 -9 7 -13 M286 178 q-1 -10 -5 -15 M292 178 q0 -12 2 -18 M298 178 q2 -9 7 -13"
        fill="none"
        stroke={C.greenDeep}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </Scene>
  )
}
