import { useId } from 'react'
import { C, Flame, Scene, type SceneProps, Shadow } from '../kit'

const DUSK = '#4F4A8F'
const HORIZON = '#F4A47C'
const HOUSE = '#5A4E8E'
const PAVE = '#877C9F'
const GRILL = '#465063'
const GRILL_DARK = '#2B313D'
const MEAT = '#C46C3E'
const MEAT_DEEP = '#93441E'
/** Các cục than trong lòng bếp: [x, y, bán kính]. */
const COALS = [
  ...[94, 116, 139, 162, 185, 207, 228].map((x) => [x, 101, 9]),
  ...[86, 108, 131, 154, 177, 200, 222, 240].map((x) => [x, 112, 10]),
] as [number, number, number][]

function Skewer({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 0) rotate(7 0 104)`}>
      <path d="M0 80 V149" stroke={C.wood} strokeWidth="3" strokeLinecap="round" />
      {[85, 97, 109].map((y, i) => (
        <g key={y}>
          <rect
            x={i === 1 ? -12 : -11}
            y={y}
            width={i === 1 ? 24 : 22}
            height="11"
            rx="5"
            fill={MEAT}
          />
          <path d={`M2 ${y} h4 q5 0 5 5.5 t-5 5.5 h-4 Z`} fill={MEAT_DEEP} opacity="0.55" />
          <path d={`M-6 ${y + 3.5} h7`} stroke={C.copper} strokeWidth="2.4" strokeLinecap="round" />
        </g>
      ))}
    </g>
  )
}

export function CharcoalGrillScene(props: SceneProps) {
  const sky = useId()
  const glow = useId()
  return (
    <Scene {...props}>
      <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={DUSK} />
        <stop offset="0.75" stopColor={HORIZON} />
      </linearGradient>
      <radialGradient id={glow}>
        <stop offset="0.15" stopColor={C.flame} stopOpacity="0.6" />
        <stop offset="1" stopColor={C.flame} stopOpacity="0" />
      </radialGradient>
      <rect width="320" height="200" fill={`url(#${sky})`} />
      {/* phố chiều: nhà hai bên, dây đèn */}
      <path d="M0 150 V78 H44 V58 H76 V150 Z M250 150 V92 L284 72 L320 92 V150 Z" fill={HOUSE} />
      <g fill={C.yellow}>
        <rect x="12" y="92" width="14" height="16" rx="3" />
        <rect x="52" y="74" width="14" height="16" rx="3" />
        <rect x="52" y="112" width="14" height="16" rx="3" />
      </g>
      <path
        d="M0 14 Q80 40 160 18 T320 14"
        fill="none"
        stroke={C.ink}
        strokeWidth="1.6"
        opacity="0.6"
      />
      {[30, 76, 122, 198, 244, 290].map((x, i) => (
        <circle
          key={x}
          cx={x}
          cy={i === 2 || i === 3 ? 26 : i === 1 || i === 4 ? 28 : 23}
          r="4.5"
          fill={i % 2 ? C.yellow : C.pink}
        />
      ))}
      <rect y="150" width="320" height="50" fill={PAVE} />
      <rect y="150" width="320" height="5" fill={HOUSE} opacity="0.7" />
      <circle cx="160" cy="104" r="92" fill={`url(#${glow})`} className="sc sc-pulse" />

      {/* quạt nan */}
      <g transform="translate(286 150) rotate(16)">
        <path d="M0 16 V40" stroke={C.woodDeep} strokeWidth="5" strokeLinecap="round" />
        <path
          d="M0 -30 Q27 -28 25 -2 Q22 16 0 20 Q-22 16 -25 -2 Q-27 -28 0 -30 Z"
          fill={C.yellow}
        />
        <path d="M0 -30 Q27 -28 25 -2 Q22 16 0 20 Z" fill={C.goldDeep} opacity="0.3" />
        <path
          d="M0 -24 V18 M-13 -18 L-4 18 M13 -18 L4 18"
          stroke={C.goldDeep}
          strokeWidth="1.6"
          opacity="0.6"
        />
      </g>

      {/* bếp nướng than hoa */}
      <Shadow cx={160} cy={185} rx={110} ry={7} />
      <rect x="78" y="150" width="9" height="34" rx="3" fill={GRILL_DARK} />
      <rect x="233" y="150" width="9" height="34" rx="3" fill={GRILL_DARK} />
      <path d="M62 121 H258 V150 Q258 159 249 159 H71 Q62 159 62 150 Z" fill={GRILL} />
      <path d="M176 121 H258 V150 Q258 159 249 159 H176 Z" fill={GRILL_DARK} opacity="0.45" />
      <rect x="70" y="128" width="6" height="22" rx="3" fill={C.white} opacity="0.25" />
      {[96, 130, 164, 198, 232].map((x) => (
        <rect key={x} x={x - 9} y="137" width="18" height="6" rx="3" fill={C.flame} />
      ))}
      <path d="M62 122 L79 88 H241 L258 122 Z" fill={C.inkSoft} />
      <path d="M71 119 L85 93 H235 L249 119 Z" fill={GRILL_DARK} />
      {/* than hồng */}
      {COALS.map(([x, y, r], i) => (
        <g key={i}>
          <ellipse cx={x} cy={y} rx={r} ry={r * 0.6} fill={i % 4 === 3 ? C.rust : C.flame} />
          <ellipse
            cx={x - 1}
            cy={y - 1}
            rx={r * 0.55}
            ry={r * 0.3}
            fill={i % 4 === 3 ? C.flame : C.flameCore}
          />
        </g>
      ))}
      <Flame x={186} y={104} size={11} />
      <Flame x={92} y={108} size={9} delay={-0.3} />
      <path d="M77 107 H243 M82 98 H238" stroke={C.metalDark} strokeWidth="1.6" opacity="0.8" />

      <Skewer x={114} />
      <Skewer x={164} />
      <Skewer x={214} />

      {/* khói mỏng bay lên */}
      {[
        [136, 76, 0],
        [186, 70, -1.5],
        [232, 80, -2.9],
      ].map(([x, y, delay]) => (
        <path
          key={x}
          d={`M${x} ${y} q-7 -9 0 -18 q7 -9 0 -18`}
          fill="none"
          stroke={C.white}
          strokeWidth="4.5"
          strokeLinecap="round"
          opacity="0.55"
          className="sc sc-rise"
          style={{ animationDelay: `${delay}s`, animationDuration: '4.4s' }}
        />
      ))}
    </Scene>
  )
}
