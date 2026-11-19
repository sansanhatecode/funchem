import { useId } from 'react'
import { Bubble, C, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

const ALCOHOL = '#D9F1FB'
const ALCOHOL_DEEP = '#B9E2F5'
const FLAME_OUT = '#9CCBFF'
const FLAME_IN = '#E6F3FF'
const STAND = '#5B6B80'
const LAMP = 'M-34 0 Q-46 -4 -44 -26 Q-40 -50 -14 -54 V-62 H14 V-54 Q40 -50 44 -26 Q46 -4 34 0 Z'

export function AlcoholLampScene(props: SceneProps) {
  const clip = useId()
  return (
    <Scene {...props}>
      <IndoorBg wall={C.wallCool} wallShade={C.wallCoolShade} tableY={160} tiles />

      {/* giá sắt và kẹp giữ ống nghiệm */}
      <Shadow cx={236} cy={184} rx={50} ry={5} />
      <rect x="204" y="174" width="72" height="10" rx="4" fill={STAND} />
      <rect x="254" y="22" width="7" height="154" rx="3.5" fill={STAND} />
      <rect x="150" y="56" width="112" height="6" rx="3" fill={C.metalDark} />
      <rect x="248" y="50" width="18" height="18" rx="4" fill={C.ink} />

      {/* ống nghiệm nghiêng, đáy ở ngay trên ngọn lửa */}
      <g transform="translate(-22 -32) rotate(34 152 92)">
        <rect x="140" y="26" width="24" height="78" rx="12" fill={C.glass} />
        <path d="M140 74 H164 V92 Q164 104 152 104 Q140 104 140 92 Z" fill={C.water} />
        <rect x="145" y="32" width="4" height="60" rx="2" fill={C.white} opacity="0.7" />
        <rect x="136" y="22" width="32" height="7" rx="3.5" fill={C.metalLight} />
        <Bubble x={150} y={96} r={2} duration={1.5} />
        <Bubble x={156} y={94} r={1.6} delay={-0.7} duration={1.7} />
      </g>

      {/* đèn cồn */}
      <Shadow cx={128} cy={182} rx={54} ry={6} />
      <g transform="translate(128 178)">
        <clipPath id={clip}>
          <path d={LAMP} />
        </clipPath>
        <path d={LAMP} fill={C.glass} />
        <g clipPath={`url(#${clip})`}>
          <rect x="-48" y="-30" width="96" height="32" fill={ALCOHOL} />
          <rect x="0" y="-30" width="48" height="32" fill={ALCOHOL_DEEP} opacity="0.7" />
          <rect x="-48" y="-30" width="96" height="3" fill={C.white} opacity="0.6" />
        </g>
        {/* bấc chạy từ cồn lên cổ đèn */}
        <path
          d="M-10 -8 Q0 -30 0 -74"
          fill="none"
          stroke={C.white}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <rect x="-11" y="-70" width="22" height="12" rx="3" fill={C.metalDark} />
        <rect x="-4" y="-78" width="8" height="10" rx="2" fill={C.wall} />
        <path
          d="M-34 -30 Q-32 -14 -26 -6"
          fill="none"
          stroke={C.white}
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.8"
        />
      </g>
      {/* ngọn lửa xanh nhạt, gần như trong suốt */}
      <g transform="translate(128 102)">
        <g className="sc sc-flicker">
          <path
            d="M0 -34 C13 -18 12 -3 0 0 C-12 -3 -13 -18 0 -34 Z"
            fill={FLAME_OUT}
            opacity="0.75"
          />
          <path d="M0 -18 C6 -10 6 -2 0 0 C-6 -2 -6 -10 0 -18 Z" fill={FLAME_IN} opacity="0.9" />
        </g>
      </g>

      {/* nắp chụp để tắt đèn, đặt bên cạnh */}
      <Shadow cx={48} cy={182} rx={22} ry={4} />
      <path d="M32 180 V160 Q32 150 48 150 Q64 150 64 160 V180 Z" fill={C.glass} />
      <rect x="28" y="176" width="40" height="6" rx="3" fill={C.metalLight} />
      <rect x="37" y="156" width="4" height="18" rx="2" fill={C.white} opacity="0.8" />
    </Scene>
  )
}
