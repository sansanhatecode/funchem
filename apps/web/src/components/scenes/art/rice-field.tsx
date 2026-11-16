import { useId } from 'react'
import { C, OutdoorBg, Scene, type SceneProps, Shadow } from '../kit'

const SKIN = '#F6CFA6'
const HAT = '#F9E7AE'
const HAT_SHADE = '#E6C877'
const BEAD_SHADE = '#D3E2EE'
const PADDY_WATER = '#86CFCF'
const BLADES = 'M0 0 Q-6 -8 -12 -9 M0 0 Q-3 -10 -6 -16 M0 0 V-19 M0 0 Q3 -10 6 -16 M0 0 Q6 -8 12 -9'
/** Hàng lúa: [y, cỡ khóm, khoảng cách] từ xa tới gần. */
const ROWS = [
  [106, 0.6, 19],
  [126, 0.85, 26],
  [152, 1.2, 34],
] as const

function RiceRow({ y, s, gap }: { y: number; s: number; gap: number }) {
  return (
    <>
      <rect x="0" y={y - 3 * s} width="320" height={9 * s} fill={PADDY_WATER} />
      {Array.from({ length: Math.ceil(320 / gap) + 1 }, (_, i) => (
        <g key={i} transform={`translate(${i * gap + ((s * 20) % 11)} ${y}) scale(${s})`}>
          <path
            d={BLADES}
            fill="none"
            stroke={i % 2 ? C.green : C.greenDeep}
            strokeWidth="2.8"
            strokeLinecap="round"
            className="sc sc-sway"
            style={{ animationDelay: `${-i * 0.7}s` }}
          />
        </g>
      ))}
    </>
  )
}

export function RiceFieldScene(props: SceneProps) {
  const clip = useId()
  return (
    <Scene {...props}>
      <OutdoorBg groundY={96} />
      <RiceRow y={ROWS[0][0]} s={ROWS[0][1]} gap={ROWS[0][2]} />
      <RiceRow y={ROWS[1][0]} s={ROWS[1][1]} gap={ROWS[1][2]} />

      {/* bác nông dân đội nón lá đang rải phân */}
      <g transform="translate(102 150)">
        <rect x="-13" y="-46" width="26" height="50" rx="10" fill={C.waterDeep} />
        <path d="M2 -46 H3 Q13 -46 13 -36 V4 H2 Z" fill={C.ink} opacity="0.14" />
        <path d="M8 -36 L31 -31" stroke={C.waterDeep} strokeWidth="9" strokeLinecap="round" />
        <circle cx="35" cy="-30" r="5" fill={SKIN} />
        <path d="M-34 -22 H-6 Q-8 -6 -20 -6 Q-32 -6 -34 -22 Z" fill={C.woodDeep} />
        <ellipse cx="-20" cy="-22" rx="14" ry="4" fill={C.white} />
        <circle cx="0" cy="-55" r="9" fill={SKIN} />
        <path d="M-27 -57 L0 -84 L27 -57 Q0 -50 -27 -57 Z" fill={HAT} />
        <path d="M0 -84 L27 -57 Q14 -53.6 0 -53.4 Z" fill={HAT_SHADE} />
      </g>
      <clipPath id={clip}>
        <rect x="124" y="120" width="40" height="30" />
      </clipPath>
      <g clipPath={`url(#${clip})`}>
        {[138, 144, 150, 141, 147, 153, 136, 145, 151].map((x, i) => (
          <circle
            key={i}
            cx={x}
            cy={130 + (i % 4) * 5}
            r="2.6"
            fill={C.white}
            className="sc sc-rain"
            style={{ animationDelay: `${-i * 0.15}s`, animationDuration: '1.4s' }}
          />
        ))}
      </g>

      <RiceRow y={ROWS[2][0]} s={ROWS[2][1]} gap={ROWS[2][2]} />

      {/* bờ ruộng */}
      <path d="M0 176 Q80 166 160 173 T320 170 V200 H0 Z" fill={C.soil} />
      <path
        d="M0 176 Q80 166 160 173 T320 170 V175 Q240 172 160 178 T0 181 Z"
        fill={C.woodDeep}
        opacity="0.5"
      />

      {/* bao phân đạm mở miệng */}
      <Shadow cx={214} cy={186} rx={48} ry={6} />
      <path
        d="M172 182 C163 152 165 126 175 106 H243 C253 126 255 152 246 182 Q209 190 172 182 Z"
        fill={C.copper}
      />
      <path
        d="M223 106 H243 C253 126 255 152 246 182 Q236 185 224 186 C233 156 233 130 223 106 Z"
        fill={C.copperDeep}
        opacity="0.6"
      />
      <rect x="188" y="130" width="36" height="36" rx="7" fill={C.white} opacity="0.92" />
      <path d="M206 160 C194 150 197 137 206 134 C215 137 218 150 206 160 Z" fill={C.green} />
      <path d="M206 160 V142" stroke={C.greenDeep} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M178 122 C173 138 172 156 176 172"
        fill="none"
        stroke={C.white}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.35"
      />
      <ellipse cx="209" cy="106" rx="36" ry="9" fill={C.copperDeep} />
      <path d="M179 106 Q182 84 209 80 Q236 84 239 106 Q209 116 179 106 Z" fill={C.white} />
      {[
        [190, 92],
        [200, 84],
        [218, 84],
        [228, 92],
        [209, 81],
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="5" fill={C.white} />
      ))}
      {[
        [196, 98],
        [208, 92],
        [220, 99],
        [203, 104],
        [226, 104],
        [214, 105],
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="2.4" fill={BEAD_SHADE} />
      ))}
      <path
        d="M173 106 Q209 120 245 106"
        fill="none"
        stroke="#F0A56B"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* đống hạt phân trắng rơi vãi */}
      <path d="M118 191 Q144 164 170 191 Z" fill={C.white} />
      <path d="M148 191 Q160 176 170 191 Z" fill={BEAD_SHADE} />
      {[
        [108, 190],
        [100, 186],
        [134, 180],
        [144, 176],
        [152, 184],
        [92, 192],
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="2.6" fill={C.white} />
      ))}
    </Scene>
  )
}
