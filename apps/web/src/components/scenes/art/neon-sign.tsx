import { useId } from 'react'
import { C, Scene, type SceneProps } from '../kit'

const WALL = '#2A2540'
const BRICK = '#3A3358'
const NEON = '#FF5A3C'
const NEON_CORE = '#FFD9C8'
const AWNING = '#3F3A66'
const AWNING_DEEP = '#2F2B50'
const WINDOW = '#FFD98A'

/** Ống neon uốn thành chữ CAFE và hình tách cà phê bốc khói. */
const SIGN =
  // C
  'M92 62 Q72 62 72 84 Q72 106 92 106 ' +
  // A
  'M106 106 L120 62 L134 106 M111 92 H129 ' +
  // F
  'M150 106 V62 H172 M150 84 H168 ' +
  // E
  'M208 62 H186 V106 H208 M186 84 H204'
const CUP =
  'M226 76 H262 V92 Q262 106 244 106 Q226 106 226 92 Z M262 80 Q274 80 274 88 Q274 96 262 96 M220 112 H268'
const STEAM = 'M236 68 q-4 -6 0 -12 q4 -6 0 -12 M252 68 q-4 -6 0 -12 q4 -6 0 -12'

function Tube({ d }: { d: string }) {
  const common = { d, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' } as const
  return (
    <>
      <path {...common} stroke={NEON} strokeWidth="16" opacity="0.18" />
      <path {...common} stroke={NEON} strokeWidth="9" opacity="0.4" />
      <path {...common} stroke={NEON} strokeWidth="4.5" />
      <path {...common} stroke={NEON_CORE} strokeWidth="1.6" />
    </>
  )
}

export function NeonSignScene(props: SceneProps) {
  const glow = useId()
  return (
    <Scene {...props}>
      <defs>
        <radialGradient id={glow}>
          <stop offset="0" stopColor={NEON} stopOpacity="0.5" />
          <stop offset="1" stopColor={NEON} stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* bức tường gạch trong đêm */}
      <rect width="320" height="200" fill={WALL} />
      {Array.from({ length: 7 }, (_, row) =>
        Array.from({ length: 6 }, (_, col) => (
          <rect
            key={`${row}-${col}`}
            x={col * 60 + (row % 2 ? -30 : 0) + 2}
            y={row * 20 + 2}
            width="56"
            height="16"
            rx="2"
            fill={BRICK}
            opacity={(row + col) % 3 ? 0.55 : 0.85}
          />
        )),
      )}

      {/* quầng sáng đỏ cam hắt lên tường */}
      <ellipse
        cx="170"
        cy="84"
        rx="170"
        ry="96"
        fill={`url(#${glow})`}
        className="sc sc-pulse"
        style={{ animationDuration: '3.4s' }}
      />

      {/* tấm biển và các kẹp giữ ống */}
      <rect x="52" y="34" width="238" height="92" rx="12" fill={C.ink} opacity="0.55" />
      <circle cx="62" cy="44" r="2.5" fill={C.metalDark} />
      <circle cx="280" cy="44" r="2.5" fill={C.metalDark} />
      <circle cx="62" cy="116" r="2.5" fill={C.metalDark} />
      <circle cx="280" cy="116" r="2.5" fill={C.metalDark} />

      {/* ống neon */}
      <Tube d={SIGN} />
      <Tube d={CUP} />
      <g className="sc sc-float" style={{ animationDuration: '3s' }}>
        <Tube d={STEAM} />
      </g>

      {/* mái hiên và cửa kính quán bên dưới */}
      <rect x="40" y="150" width="240" height="50" fill={AWNING_DEEP} />
      <rect x="64" y="158" width="74" height="42" rx="4" fill={WINDOW} opacity="0.85" />
      <rect x="182" y="158" width="74" height="42" rx="4" fill={WINDOW} opacity="0.85" />
      <rect x="146" y="156" width="28" height="44" rx="3" fill={C.woodDark} />
      <circle cx="168" cy="180" r="2" fill={C.gold} />
      <path d="M30 150 L50 132 H270 L290 150 Z" fill={AWNING} />
      <path
        d="M70 132 L58 150 M110 132 L102 150 M150 132 L146 150 M190 132 L194 150 M230 132 L238 150"
        stroke={NEON}
        strokeWidth="5"
        opacity="0.35"
      />
      <rect y="150" width="320" height="50" fill={NEON} opacity="0.07" />
    </Scene>
  )
}
