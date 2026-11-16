import { useId } from 'react'
import { C, Scene, type SceneProps, Sparkle } from '../kit'

const NIGHT = '#252C66'
const NIGHT_LOW = '#4B4E9C'
const ROOF = '#1A2150'
const SKIN = '#F8D0A8'
const SKIN_DEEP = '#E9B286'
const TX = 146
const TY = 78
/** Tia lửa toé quanh đầu que: [góc xoay, độ dài]. Tia đối xứng qua tâm để nhịp đập không lệch. */
const RAYS = Array.from({ length: 16 }, (_, i): [number, number] => [
  i * 22.5 + (i % 2 ? 7 : -4),
  [46, 30, 54, 36][i % 4]!,
])
const STARS = [
  [22, 70],
  [58, 52],
  [96, 20],
  [214, 16],
  [236, 58],
  [296, 84],
  [304, 22],
  [30, 112],
  [262, 112],
]

function Lantern({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 -16 V-11 M0 11 V20" stroke={C.gold} strokeWidth="2" strokeLinecap="round" />
      <ellipse rx="10" ry="11.5" fill={C.red} />
      <ellipse rx="4.5" ry="11.5" fill={C.redDeep} opacity="0.55" />
      <rect x="-5.5" y="-13.5" width="11" height="4" rx="2" fill={C.gold} />
      <rect x="-5.5" y="9.5" width="11" height="4" rx="2" fill={C.gold} />
    </g>
  )
}

export function SparklerScene(props: SceneProps) {
  const sky = useId()
  const glow = useId()
  return (
    <Scene {...props}>
      <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={NIGHT} />
        <stop offset="1" stopColor={NIGHT_LOW} />
      </linearGradient>
      <radialGradient id={glow}>
        <stop offset="0" stopColor="#FFF7CF" stopOpacity="0.95" />
        <stop offset="0.4" stopColor={C.yellow} stopOpacity="0.4" />
        <stop offset="1" stopColor={C.yellow} stopOpacity="0" />
      </radialGradient>
      <rect width="320" height="200" fill={`url(#${sky})`} />
      {STARS.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 ? 1.3 : 1.9} fill={C.white} opacity="0.8" />
      ))}
      <path d="M274 24 A14 14 0 1 0 288 46 A11.5 11.5 0 0 1 274 24 Z" fill={C.yellow} />

      {/* mái nhà phố đêm giao thừa */}
      <path
        d="M0 200 V156 L22 142 L44 156 V164 H84 V150 H122 V170 H196 V158 L224 140 L252 158 V150 H292 V166 H320 V200 Z"
        fill={ROOF}
      />
      <g fill={C.gold} opacity="0.9">
        <rect x="14" y="166" width="9" height="11" rx="2" />
        <rect x="94" y="160" width="9" height="11" rx="2" />
        <rect x="262" y="162" width="9" height="11" rx="2" />
        <rect x="278" y="162" width="9" height="11" rx="2" />
      </g>
      {/* dây đèn lồng */}
      <path d="M0 8 Q46 30 112 6" fill="none" stroke={C.gold} strokeWidth="1.6" opacity="0.7" />
      <Lantern x={26} y={33} />
      <Lantern x={70} y={33} />

      {/* quầng sáng và các tia lửa */}
      <circle cx={TX} cy={TY} r="78" fill={`url(#${glow})`} className="sc sc-pulse" />
      <g transform={`translate(${TX} ${TY})`} strokeLinecap="round" strokeWidth="2.6">
        {[0, 1].map((k) => (
          <g
            key={k}
            className="sc sc-pulse"
            style={{ animationDuration: '0.9s', animationDelay: `${-k * 0.45}s` }}
          >
            {RAYS.filter((_, i) => i % 2 === k).map(([a, len]) => (
              <g key={a} transform={`rotate(${a})`}>
                <path d={`M14 0 H${len}`} stroke={k ? C.yellow : C.white} />
                <circle cx={len + 7} r="1.9" fill={k ? C.white : C.yellow} />
              </g>
            ))}
          </g>
        ))}
      </g>

      {/* que pháo bông và bàn tay cầm */}
      <g transform={`translate(${TX} ${TY}) rotate(-24)`}>
        <path d="M0 0 V70" stroke={C.metal} strokeWidth="2.6" strokeLinecap="round" />
        <path d="M0 2 V40" stroke="#8D93AD" strokeWidth="5.5" strokeLinecap="round" />
        <rect x="-11" y="88" width="22" height="26" fill={SKIN} />
        <rect x="-18" y="106" width="36" height="90" rx="6" fill={C.red} />
        <rect x="3" y="106" width="15" height="90" rx="6" fill={C.redDeep} opacity="0.6" />
        <rect x="-20" y="102" width="40" height="10" rx="5" fill={C.gold} />
        <rect x="-15" y="60" width="30" height="36" rx="11" fill={SKIN} />
        <path d="M4 60 Q15 60 15 71 V85 Q15 96 4 96 Z" fill={SKIN_DEEP} opacity="0.55" />
        <path
          d="M-13 69.5 H5 M-14 78 H5 M-13 86.5 H5"
          stroke={SKIN_DEEP}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="-8" y="55" width="25" height="12" rx="6" fill={SKIN} transform="rotate(14 4 61)" />
      </g>

      {/* đầu que cháy sáng trắng */}
      <circle cx={TX} cy={TY} r="15" fill={C.flameCore} opacity="0.75" />
      <path
        d={`M${TX} ${TY - 25} q3 22 25 25 q-22 3 -25 25 q-3 -22 -25 -25 q22 -3 25 -25 Z`}
        fill={C.white}
        className="sc sc-pulse"
        style={{ animationDuration: '0.7s' }}
      />
      <circle cx={TX} cy={TY} r="9" fill={C.white} />

      <Sparkle x={84} y={48} size={7} color={C.white} />
      <Sparkle x={212} y={60} size={8} color={C.yellow} delay={-0.7} />
      <Sparkle x={104} y={128} size={6} color={C.yellow} delay={-1.3} />
      <Sparkle x={176} y={22} size={6} color={C.white} delay={-1.8} />
      {/* tàn lửa rơi */}
      {[
        [128, 118, 0],
        [158, 126, -0.5],
        [112, 100, -0.9],
      ].map(([x, y, delay]) => (
        <circle
          key={x}
          cx={x}
          cy={y}
          r="2.2"
          fill={C.flameCore}
          className="sc sc-rain"
          style={{ animationDelay: `${delay}s`, animationDuration: '1.4s' }}
        />
      ))}
    </Scene>
  )
}
