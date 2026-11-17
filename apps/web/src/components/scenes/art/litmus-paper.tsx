import { C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const LITMUS = '#A67FE0'
const LITMUS_DEEP = '#8660C4'
const LITMUS_RED = '#F04E55'
const LITMUS_BLUE = '#2F7FD6'
const LEMONADE = '#F4F0A2'
const LEMONADE_DEEP = '#DDD56A'
const SOAPY = '#CDEBFA'
const SOAPY_DEEP = '#9FD3F0'
const RIND = '#4FA83D'
const FLESH = '#D2E66A'

/** Cốc thấp miệng rộng, tâm đáy ở (x, 170). */
function Cup({ x, fill, deep }: { x: number; fill: string; deep: string }) {
  const l = x - 38
  const r = x + 38
  return (
    <g>
      <Shadow cx={x + 3} cy={172} rx={46} ry={6} />
      <path
        d={`M${l} 118 V158 Q${l} 170 ${l + 12} 170 H${r - 12} Q${r} 170 ${r} 158 V118 Z`}
        fill={fill}
      />
      <path d={`M${x} 118 H${r} V158 Q${r} 170 ${r - 12} 170 H${x} Z`} fill={deep} opacity="0.5" />
      <ellipse cx={x} cy="118" rx="38" ry="6" fill={deep} />
    </g>
  )
}

function CupGlass({ x }: { x: number }) {
  const l = x - 38
  const r = x + 38
  return (
    <g>
      <path
        d={`M${l} 100 V158 Q${l} 170 ${l + 12} 170 H${r - 12} Q${r} 170 ${r} 158 V100`}
        fill="none"
        stroke={C.white}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <ellipse cx={x} cy="100" rx="38" ry="6" fill="none" stroke={C.white} strokeWidth="3" />
      <path
        d={`M${l + 9} 110 V154`}
        stroke={C.white}
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </g>
  )
}

/** Mẩu giấy quỳ nhúng vào cốc: phần trên còn tím, phần đã ướt đổi sang màu `tip`. */
function Strip({ x, tip, rot }: { x: number; tip: string; rot: number }) {
  return (
    <g transform={`rotate(${rot} ${x} 150)`}>
      <rect x={x - 9} y="34" width="18" height="118" rx="3" fill={LITMUS} />
      <rect x={x + 2} y="34" width="7" height="118" rx="3" fill={LITMUS_DEEP} opacity="0.5" />
      <rect x={x - 9} y="92" width="18" height="60" rx="3" fill={tip} />
      <rect x={x - 9} y="92" width="18" height="6" fill={C.white} opacity="0.35" />
    </g>
  )
}

export function LitmusPaperScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall="#E3EEFB" wallShade="#CBDDF5" tableY={152} />

      {/* cốc nước chanh: giấy quỳ hoá đỏ */}
      <Cup x={88} fill={LEMONADE} deep={LEMONADE_DEEP} />
      <Strip x={96} tip={LITMUS_RED} rot={-10} />
      <path
        d="M50 118 V158 Q50 170 62 170 H114 Q126 170 126 158 V118 Z"
        fill={LEMONADE}
        opacity="0.45"
      />
      <CupGlass x={88} />
      {/* lát chanh gài trên miệng cốc */}
      <g transform="rotate(-18 52 100)">
        <circle cx="52" cy="100" r="17" fill={RIND} />
        <circle cx="52" cy="100" r="13.5" fill={FLESH} />
        <path
          d="M52 87 V113 M39 100 H65 M43 91 L61 109 M61 91 L43 109"
          stroke="#F4F8DC"
          strokeWidth="2"
        />
      </g>

      {/* cốc nước xà phòng: giấy quỳ hoá xanh */}
      <Cup x={232} fill={SOAPY} deep={SOAPY_DEEP} />
      <Strip x={224} tip={LITMUS_BLUE} rot={10} />
      <path
        d="M194 118 V158 Q194 170 206 170 H258 Q270 170 270 158 V118 Z"
        fill={SOAPY}
        opacity="0.45"
      />
      <CupGlass x={232} />
      {/* bọt xà phòng trên mặt cốc */}
      <g fill={C.white}>
        <circle cx="252" cy="116" r="8" />
        <circle cx="264" cy="112" r="6" />
        <circle cx="242" cy="113" r="5" />
        <circle cx="206" cy="116" r="6" />
      </g>
      <g className="sc sc-float">
        <circle
          cx="276"
          cy="86"
          r="7"
          fill={C.white}
          fillOpacity="0.4"
          stroke={C.white}
          strokeWidth="2"
        />
        <circle
          cx="258"
          cy="70"
          r="4.6"
          fill={C.white}
          fillOpacity="0.4"
          stroke={C.white}
          strokeWidth="2"
        />
      </g>

      {/* xấp giấy quỳ còn tím ở giữa */}
      <Shadow cx={160} cy={186} rx={34} ry={4} />
      <g transform="rotate(-8 160 176)">
        <rect x="134" y="160" width="52" height="26" rx="4" fill={C.white} />
        <rect x="134" y="160" width="52" height="8" rx="4" fill={C.goldDeep} />
        <rect x="140" y="150" width="9" height="30" rx="2" fill={LITMUS} />
        <rect x="152" y="146" width="9" height="34" rx="2" fill={LITMUS} />
        <rect x="164" y="149" width="9" height="31" rx="2" fill={LITMUS_DEEP} />
        <rect x="134" y="170" width="52" height="16" rx="4" fill={C.white} />
        <rect x="142" y="176" width="36" height="3" rx="1.5" fill={C.metal} />
      </g>

      <Sparkle x={128} y={92} size={8} color={LITMUS_RED} />
      <Sparkle x={194} y={92} size={8} color={LITMUS_BLUE} delay={-1.1} />
      <Sparkle x={160} y={128} size={6} delay={-0.5} />
    </Scene>
  )
}
