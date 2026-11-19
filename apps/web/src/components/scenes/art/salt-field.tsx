import { C, Cloud, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const SEA = '#3FA9DC'
const PAN = '#BFE6F5'
const PAN_LIGHT = '#E4F6FC'
const DIKE = '#B9A07E'
const DIKE_DEEP = '#9A8262'
const SALT = '#FFFFFF'
const SALT_SHADE = '#D5E0EC'
const HAT = '#F3DFA6'
const HAT_DEEP = '#D9BC72'
const SHIRT = '#8E6BBF'

/** Một đống muối hình nón. */
function SaltPile({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <ellipse cx="0" cy="0" rx="34" ry="5" fill={C.shadow} />
      <path d="M-32 0 Q-14 -40 0 -44 Q14 -40 32 0 Q0 8 -32 0 Z" fill={SALT} />
      <path d="M0 -44 Q14 -40 32 0 Q16 4 4 4 Q10 -20 0 -44 Z" fill={SALT_SHADE} />
    </g>
  )
}

export function SaltFieldScene(props: SceneProps) {
  return (
    <Scene {...props}>
      {/* trời nắng gắt và biển xa */}
      <rect width="320" height="200" fill={C.sky} />
      <circle cx="258" cy="32" r="20" fill={C.sun} />
      <circle cx="258" cy="32" r="29" fill={C.sun} opacity="0.25" className="sc sc-pulse" />
      <Cloud x={70} y={30} scale={0.7} drift />
      <rect y="58" width="320" height="16" fill={SEA} />

      {/* các ô ruộng muối chứa nước biển cạn */}
      <rect y="72" width="320" height="128" fill={DIKE} />
      <g fill={PAN}>
        <path d="M6 80 H98 L84 110 H-14 Z" />
        <path d="M108 80 H212 L218 110 H96 Z" />
        <path d="M222 80 H316 L336 110 H230 Z" />
        <path d="M-18 118 H80 L60 162 H-50 Z" />
        <path d="M94 118 H220 L228 162 H76 Z" />
        <path d="M232 118 H340 L366 162 H242 Z" />
      </g>
      <g fill={PAN_LIGHT} opacity="0.8" className="sc sc-float">
        <path d="M30 90 H70 L66 96 H26 Z" />
        <path d="M130 126 H180 L181 134 H128 Z" />
        <path d="M250 88 H292 L296 94 H252 Z" />
      </g>
      <path d="M0 170 H320 V200 H0 Z" fill={DIKE_DEEP} opacity="0.5" />

      {/* hơi nước bốc lên dưới nắng */}
      <g fill="none" stroke={C.white} strokeWidth="3" strokeLinecap="round" opacity="0.8">
        <path d="M150 104 q-5 -7 0 -14 q5 -7 0 -14" className="sc sc-rise" />
        <path
          d="M40 132 q-5 -7 0 -14 q5 -7 0 -14"
          className="sc sc-rise"
          style={{ animationDelay: '-1.4s' }}
        />
        <path
          d="M268 106 q-5 -7 0 -14 q5 -7 0 -14"
          className="sc sc-rise"
          style={{ animationDelay: '-2.4s' }}
        />
      </g>

      {/* người làm muối đội nón lá đang cào muối */}
      <g transform="translate(256 150)">
        <Shadow cx={0} cy={22} rx={20} ry={4} />
        <path d="M-7 4 L-9 22 M7 4 L9 22" stroke={C.ink} strokeWidth="5" strokeLinecap="round" />
        <path d="M-11 -22 Q0 -28 11 -22 L9 6 H-9 Z" fill={SHIRT} />
        <path d="M-9 -16 L-30 4" stroke={SHIRT} strokeWidth="5" strokeLinecap="round" />
        <path d="M-26 -18 L-46 26" stroke={C.woodDark} strokeWidth="3" strokeLinecap="round" />
        <path d="M-54 24 H-38" stroke={C.woodDark} strokeWidth="4" strokeLinecap="round" />
        <circle cx="0" cy="-28" r="7" fill="#F2C9A0" />
        <path d="M-20 -28 L0 -46 L20 -28 Z" fill={HAT} />
        <path d="M0 -46 L20 -28 H4 Z" fill={HAT_DEEP} opacity="0.6" />
      </g>

      {/* những đống muối trắng */}
      <SaltPile x={170} y={166} s={0.7} />
      <SaltPile x={56} y={178} s={0.85} />
      <SaltPile x={112} y={184} s={1.15} />
      <Sparkle x={104} y={150} size={6} delay={0} />
      <Sparkle x={60} y={156} size={4} delay={-0.9} />
      <Sparkle x={176} y={146} size={4} delay={-1.6} />
    </Scene>
  )
}
