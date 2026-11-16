import { useId } from 'react'
import { C, IndoorBg, Scene, type SceneProps, Shadow, Steam } from '../kit'

const WALL = '#B9E4DA'
const WALL_SHADE = '#8FD0C2'
const PORCELAIN_SHADE = '#D9E4EE'
const BROTH = '#FFC76E'
const BROTH_DEEP = '#F0A23C'
/** Hạt muối đang rơi: [x, y] */
const GRAINS = [
  [176, 108],
  [181, 114],
  [172, 118],
  [178, 124],
  [184, 106],
  [170, 110],
  [175, 128],
  [182, 120],
  [168, 122],
  [179, 102],
  [173, 100],
  [185, 126],
  [177, 116],
  [171, 130],
] as const

export function SaltShakerScene(props: SceneProps) {
  const clip = useId()
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={152} tiles />

      {/* bát canh */}
      <Shadow cx={146} cy={191} rx={62} ry={6} />
      <rect x="116" y="182" width="48" height="9" rx="3" fill={PORCELAIN_SHADE} />
      <path d="M72 134 C74 166 100 184 116 186 H164 C180 184 206 166 208 134 Z" fill={C.white} />
      <path
        d="M140 186 H164 C180 184 206 166 208 134 H178 C178 160 162 180 140 186 Z"
        fill={PORCELAIN_SHADE}
      />
      <path
        d="M81 154 Q140 172 199 154"
        fill="none"
        stroke={C.waterDeep}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <ellipse cx="140" cy="134" rx="68" ry="13" fill={C.white} />
      <ellipse cx="140" cy="135" rx="61" ry="10" fill={BROTH_DEEP} />
      <ellipse cx="140" cy="137" rx="58" ry="8" fill={BROTH} />
      {/* cà chua, rau, đậu phụ */}
      <path d="M100 138 a9 6 0 0 1 18 0 Z" fill={C.red} />
      <path d="M152 141 a9 6 0 0 1 18 0 Z" fill={C.red} />
      <ellipse cx="128" cy="134" rx="9" ry="3.4" fill={C.green} transform="rotate(-14 128 134)" />
      <ellipse cx="176" cy="134" rx="8" ry="3" fill={C.green} transform="rotate(12 176 134)" />
      <ellipse cx="140" cy="141" rx="7" ry="2.6" fill={C.greenDeep} />
      <rect x="114" y="139" width="9" height="5" rx="1.5" fill={C.white} />
      <rect x="184" y="136" width="8" height="5" rx="1.5" fill={C.white} />
      <Steam x={104} y={126} />
      <Steam x={128} y={120} delay={-1.6} />

      {/* muối rơi */}
      <clipPath id={clip}>
        <rect x="150" y="92" width="50" height="43" />
      </clipPath>
      <path
        d="M178 99 h0 M173 105 h0 M181 109 h0 M176 115 h0 M171 121 h0 M179 125 h0 M174 130 h0"
        stroke={C.white}
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <g clipPath={`url(#${clip})`}>
        {GRAINS.map(([x, y], i) => (
          <rect
            key={i}
            x={x}
            y={y}
            width="3.2"
            height="3.2"
            rx="1"
            fill={C.white}
            className="sc sc-rain"
            style={{ animationDelay: `${-i * 0.13}s`, animationDuration: '1.2s' }}
          />
        ))}
      </g>

      {/* lọ muối nghiêng */}
      <g className="sc sc-float">
        <g transform="translate(214 60) rotate(-130) scale(1.12)">
          <rect x="-19" y="-27" width="38" height="58" rx="9" fill={C.white} opacity="0.5" />
          <path
            d="M-15 -25 H15 V-15 L-15 21 Z"
            fill={C.white}
            stroke={C.white}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <rect
            x="-19"
            y="-27"
            width="38"
            height="58"
            rx="9"
            fill="none"
            stroke={C.white}
            strokeWidth="2.6"
          />
          <rect x="9" y="-12" width="4" height="34" rx="2" fill={C.white} opacity="0.8" />
          <rect x="-22" y="-46" width="44" height="22" rx="8" fill={C.metal} />
          <path
            d="M0 -46 H14 Q22 -46 22 -38 V-32 Q22 -24 14 -24 H0 Z"
            fill={C.metalDark}
            opacity="0.5"
          />
          <rect x="-17" y="-42" width="5" height="14" rx="2.5" fill={C.metalLight} />
          <circle cx="-7" cy="-41" r="1.8" fill={C.ink} />
          <circle cx="1" cy="-42" r="1.8" fill={C.ink} />
          <circle cx="9" cy="-41" r="1.8" fill={C.ink} />
        </g>
      </g>

      {/* đống muối nhỏ trên bàn */}
      <path d="M224 171 Q242 150 260 171 Z" fill={C.white} />
      <path d="M244 171 Q252 160 260 171 Z" fill={PORCELAIN_SHADE} />
      <circle cx="218" cy="170" r="1.8" fill={C.white} />
      <circle cx="266" cy="169" r="1.8" fill={C.white} />
      <circle cx="272" cy="172" r="1.4" fill={C.white} />
    </Scene>
  )
}
