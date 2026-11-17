import { useId } from 'react'
import { C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const OVEN = '#3A4558'
const OVEN_DEEP = '#27303F'
const HOT = '#FF9440'
const HOT_DEEP = '#E2601F'
const CRUST = '#EBA54A'
const CRUST_LIGHT = '#F8CB80'
const CRUST_DEEP = '#C27A26'
const SCORE = '#FFE9B8'

/** Ổ bánh mì dài có các đường rạch trên mặt. */
function Loaf({ cx, cy, rx, ry }: { cx: number; cy: number; rx: number; ry: number }) {
  return (
    <g>
      <ellipse cx={cx} cy={cy + ry * 0.22} rx={rx} ry={ry} fill={CRUST_DEEP} />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={CRUST} />
      <ellipse
        cx={cx - rx * 0.2}
        cy={cy - ry * 0.4}
        rx={rx * 0.6}
        ry={ry * 0.35}
        fill={CRUST_LIGHT}
      />
      {[-0.5, -0.17, 0.17, 0.5].map((k) => (
        <path
          key={k}
          d={`M${cx + rx * k - rx * 0.08} ${cy + ry * 0.35} Q${cx + rx * k} ${cy - ry * 0.2} ${cx + rx * k + rx * 0.1} ${cy - ry * 0.55}`}
          fill="none"
          stroke={SCORE}
          strokeWidth={ry * 0.26}
          strokeLinecap="round"
        />
      ))}
    </g>
  )
}

export function BreadOvenScene(props: SceneProps) {
  const glow = useId()
  return (
    <Scene {...props}>
      <IndoorBg wall="#FFE3C2" wallShade="#F8C996" tableY={176} tiles />
      <linearGradient id={glow} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={HOT_DEEP} />
        <stop offset="1" stopColor={HOT} />
      </linearGradient>

      {/* lò nướng */}
      <Shadow cx={160} cy={190} rx={130} ry={6} />
      <rect x="34" y="8" width="252" height="182" rx="14" fill={OVEN} />
      <rect x="34" y="150" width="252" height="40" rx="14" fill={OVEN_DEEP} opacity="0.7" />
      {/* bảng điều khiển */}
      <rect x="46" y="16" width="228" height="26" rx="8" fill={OVEN_DEEP} />
      <circle cx="68" cy="29" r="8" fill={C.metal} />
      <path d="M68 29 l4 -5" stroke={OVEN_DEEP} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="94" cy="29" r="8" fill={C.metal} />
      <path d="M94 29 v-6" stroke={OVEN_DEEP} strokeWidth="2.4" strokeLinecap="round" />
      <rect x="206" y="21" width="56" height="16" rx="5" fill={C.ink} />
      <rect x="212" y="26" width="26" height="6" rx="3" fill={C.flame} className="sc sc-pulse" />
      <circle cx="252" cy="29" r="3" fill={C.red} />

      {/* cửa kính nhìn vào buồng nướng nóng rực */}
      <rect x="52" y="50" width="216" height="112" rx="12" fill={OVEN_DEEP} />
      <rect x="60" y="58" width="200" height="96" rx="8" fill={`url(#${glow})`} />
      <rect x="72" y="62" width="176" height="5" rx="2.5" fill={C.red} className="sc sc-pulse" />
      <ellipse cx="160" cy="118" rx="92" ry="34" fill={C.flameCore} opacity="0.35" />
      {/* vỉ nướng */}
      <path
        d="M60 140 H260 M84 140 V154 M122 140 V154 M160 140 V154 M198 140 V154 M236 140 V154"
        stroke={OVEN_DEEP}
        strokeWidth="2.4"
        opacity="0.6"
      />

      {/* hai ổ bánh mì đang nở phồng */}
      <g className="sc sc-pulse" style={{ transformOrigin: '50% 100%', animationDuration: '3.4s' }}>
        <Loaf cx={146} cy={94} rx={56} ry={15} />
      </g>
      <g
        className="sc sc-pulse"
        style={{ transformOrigin: '50% 100%', animationDuration: '3.4s', animationDelay: '-1.5s' }}
      >
        <Loaf cx={166} cy={124} rx={72} ry={19} />
      </g>

      {/* hơi nóng lấp lánh và ánh phản chiếu trên kính */}
      <Sparkle x={84} y={86} size={6} color={C.flameCore} />
      <Sparkle x={236} y={84} size={7} color={C.flameCore} delay={-0.9} />
      <Sparkle x={226} y={104} size={4} color={C.white} delay={-1.5} />
      <path d="M70 66 L96 66 L74 104 Z" fill={C.white} opacity="0.16" />
      <path d="M238 152 L252 152 L256 128 Z" fill={C.white} opacity="0.12" />

      {/* tay nắm cửa lò */}
      <rect x="84" y="168" width="152" height="9" rx="4.5" fill={C.metalLight} />
      <rect x="84" y="173" width="152" height="4" rx="2" fill={C.metalDark} opacity="0.6" />
    </Scene>
  )
}
