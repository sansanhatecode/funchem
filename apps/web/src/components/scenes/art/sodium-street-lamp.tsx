import { useId } from 'react'
import { C, Scene, type SceneProps } from '../kit'

const NIGHT = '#243055'
const NIGHT_LOW = '#3A4470'
const HOUSE = '#1B2442'
const ROAD = '#4A4E66'
const ROAD_LIT = '#B98A4A'
const PAVEMENT = '#6B6F88'
const SODIUM = '#FFB02E'
const SODIUM_CORE = '#FFE3A1'
const POLE = '#56608A'

/** Đèn đường hơi sodium toả ánh vàng cam xuống con phố tối. */
export function SodiumStreetLampScene(props: SceneProps) {
  const glow = useId()
  const cone = useId()
  return (
    <Scene {...props}>
      <defs>
        <radialGradient id={glow}>
          <stop offset="0" stopColor={SODIUM} stopOpacity="0.85" />
          <stop offset="1" stopColor={SODIUM} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={cone} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={SODIUM} stopOpacity="0.55" />
          <stop offset="1" stopColor={SODIUM} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill={NIGHT} />
      <rect y="96" width="320" height="50" fill={NIGHT_LOW} opacity="0.6" />
      {/* sao và trăng khuyết */}
      <circle cx="40" cy="26" r="1.6" fill={C.white} />
      <circle cx="92" cy="48" r="1.3" fill={C.white} />
      <circle cx="232" cy="22" r="1.6" fill={C.white} />
      <circle cx="286" cy="62" r="1.3" fill={C.white} />
      <circle cx="270" cy="34" r="11" fill={C.yellow} />
      <circle cx="265" cy="30" r="10" fill={NIGHT} />

      {/* dãy nhà tối, vài ô cửa sổ còn sáng */}
      <path
        d="M0 146 V92 H34 V74 H76 V100 H104 V146 Z M222 146 V86 H262 V104 H296 V78 H320 V146 Z"
        fill={HOUSE}
      />
      <rect x="44" y="86" width="10" height="12" rx="2" fill={C.yellow} opacity="0.85" />
      <rect x="12" y="106" width="10" height="12" rx="2" fill={C.yellow} opacity="0.5" />
      <rect x="236" y="98" width="10" height="12" rx="2" fill={C.yellow} opacity="0.7" />
      <rect x="302" y="92" width="10" height="12" rx="2" fill={C.yellow} opacity="0.5" />

      {/* vỉa hè và mặt đường */}
      <rect y="146" width="320" height="12" fill={PAVEMENT} />
      <rect y="158" width="320" height="42" fill={ROAD} />
      <path
        d="M20 180 H60 M100 180 H140 M180 180 H220 M260 180 H300"
        stroke={C.white}
        strokeWidth="3"
        opacity="0.55"
      />

      {/* vùng sáng vàng cam hắt xuống đường */}
      <path d="M150 58 L60 200 H262 L176 58 Z" fill={`url(#${cone})`} />
      <ellipse cx="160" cy="172" rx="92" ry="20" fill={ROAD_LIT} opacity="0.55" />

      {/* cột đèn */}
      <rect x="226" y="40" width="7" height="118" rx="3" fill={POLE} />
      <rect x="220" y="150" width="19" height="10" rx="3" fill={POLE} />
      <path d="M230 44 Q230 30 214 30 H176" fill="none" stroke={POLE} strokeWidth="6" />
      {/* chao đèn và bóng đèn */}
      <path d="M136 46 Q138 28 164 28 Q190 28 192 46 Z" fill={POLE} />
      <circle
        cx="164"
        cy="52"
        r="44"
        fill={`url(#${glow})`}
        className="sc sc-pulse"
        style={{ animationDuration: '4s' }}
      />
      <path d="M142 46 H186 Q184 60 164 60 Q144 60 142 46 Z" fill={SODIUM} />
      <ellipse cx="164" cy="50" rx="13" ry="5" fill={SODIUM_CORE} />

      {/* vài con thiêu thân bay quanh đèn */}
      <circle cx="132" cy="70" r="1.8" fill={SODIUM_CORE} className="sc sc-float" />
      <circle
        cx="196"
        cy="78"
        r="1.6"
        fill={SODIUM_CORE}
        className="sc sc-float"
        style={{ animationDelay: '-1.4s' }}
      />
      <circle
        cx="170"
        cy="92"
        r="1.4"
        fill={SODIUM_CORE}
        className="sc sc-float"
        style={{ animationDelay: '-2.6s' }}
      />

      {/* chiếc xe đạp dựng dưới đèn */}
      <g opacity="0.92">
        <circle cx="96" cy="158" r="14" fill="none" stroke={HOUSE} strokeWidth="3.5" />
        <circle cx="144" cy="158" r="14" fill="none" stroke={HOUSE} strokeWidth="3.5" />
        <path
          d="M96 158 L112 134 H136 L144 158 M112 134 L122 158 H96 M136 134 L132 124 H140 M108 128 H118"
          fill="none"
          stroke={HOUSE}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <ellipse cx="120" cy="174" rx="40" ry="4" fill={C.ink} opacity="0.3" />
    </Scene>
  )
}
