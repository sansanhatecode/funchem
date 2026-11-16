import { useId } from 'react'
import { C, Flame, OutdoorBg, Scene, type SceneProps } from '../kit'

const PUFF_SHADE = '#E3EEF7'
/** Cụm hơi nước: [cx, cy, r]. Lớp sau hơi xám, lớp trước trắng tinh. */
const BACK_PUFFS = [
  [58, 176, 24],
  [96, 162, 28],
  [132, 154, 22],
  [160, 172, 22],
  [190, 154, 22],
  [226, 162, 28],
  [264, 176, 24],
] as const
const FRONT_PUFFS = [
  [34, 194, 26],
  [78, 186, 30],
  [122, 182, 26],
  [160, 190, 26],
  [198, 182, 26],
  [242, 186, 30],
  [288, 194, 26],
] as const

export function RocketScene(props: SceneProps) {
  const clip = useId()
  const body = 'M160 10 C147 26 142 44 142 62 V116 H178 V62 C178 44 173 26 160 10 Z'
  return (
    <Scene {...props}>
      <OutdoorBg groundY={172} />
      {/* bệ và tháp phóng */}
      <rect x="76" y="166" width="168" height="14" rx="5" fill={C.metal} />
      <rect x="222" y="60" width="13" height="112" rx="3" fill={C.metalDark} />
      <path
        d="M222 80 h13 M222 102 h13 M222 124 h13 M222 146 h13"
        stroke={C.metal}
        strokeWidth="3"
      />
      <path
        d="M224 90 H198 M224 128 H202"
        stroke={C.metalDark}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="228.5" cy="56" r="5" fill={C.red} />

      {BACK_PUFFS.map(([cx, cy, r], i) => (
        <circle
          key={cx}
          cx={cx}
          cy={cy}
          r={r}
          fill={PUFF_SHADE}
          className="sc sc-pulse"
          style={{ animationDelay: `${-i * 0.5}s` }}
        />
      ))}

      {/* tên lửa */}
      <g className="sc sc-float">
        <g transform="translate(160 124) rotate(180)">
          <Flame x={0} y={0} size={46} />
        </g>
        <path d="M143 86 L121 116 Q118 122 124 123 L143 116 Z" fill={C.red} />
        <path d="M177 86 L199 116 Q202 122 196 123 L177 116 Z" fill={C.redDeep} />
        <path d="M149 114 H171 L176 128 H144 Z" fill={C.inkSoft} />
        <path d="M160 114 H171 L176 128 H160 Z" fill={C.ink} opacity="0.35" />
        <clipPath id={clip}>
          <path d={body} />
        </clipPath>
        <path d={body} fill={C.white} />
        <g clipPath={`url(#${clip})`}>
          <rect x="140" y="8" width="40" height="34" fill={C.red} />
          <rect x="140" y="98" width="40" height="7" fill={C.gold} />
          <rect x="167" y="8" width="13" height="110" fill={C.ink} opacity="0.14" />
        </g>
        <circle cx="160" cy="68" r="11" fill={C.metalDark} />
        <circle cx="160" cy="68" r="7.5" fill={C.waterDeep} />
        <path
          d="M155 66 a5.5 5.5 0 0 1 5 -3.5"
          fill="none"
          stroke={C.white}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {FRONT_PUFFS.map(([cx, cy, r], i) => (
        <circle
          key={cx}
          cx={cx}
          cy={cy}
          r={r}
          fill={C.white}
          className={i % 2 ? 'sc sc-pulse' : undefined}
          style={{ animationDelay: `${-i * 0.4}s` }}
        />
      ))}
    </Scene>
  )
}
