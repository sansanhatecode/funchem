import { C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const CLOTH = '#7A5BB5'
const CLOTH_DEEP = '#5E4494'
const SILVER = '#E3E9F0'
const SILVER_SHADE = '#B4BFCC'
const TARNISH = '#5A5560'
const TARNISH_DEEP = '#3B3842'
const TARNISH_LIGHT = '#857E8C'
const RAG = '#FFE9A8'
const RAG_DEEP = '#E8C96A'

/** Một chiếc thìa nằm ngang, đầu thìa bên trái. */
function Spoon({
  y,
  body,
  shade,
  shine,
}: {
  y: number
  body: string
  shade: string
  shine: string
}) {
  return (
    <g transform={`translate(0 ${y})`}>
      <path d="M112 -5 Q150 -8 262 -6 Q276 -6 276 0 Q276 6 262 6 Q150 8 112 5 Z" fill={body} />
      <path d="M112 1 Q150 4 262 3 Q276 3 276 0 Q276 6 262 6 Q150 8 112 5 Z" fill={shade} />
      <ellipse cx="82" cy="0" rx="38" ry="22" fill={body} />
      <path d="M82 22 A38 22 0 0 0 120 0 A44 30 0 0 1 82 22 Z" fill={shade} />
      <ellipse cx="80" cy="-1" rx="27" ry="14" fill={shade} opacity="0.55" />
      <ellipse cx="70" cy="-7" rx="12" ry="4.5" fill={shine} opacity="0.85" />
      <path d="M130 -3 H250" stroke={shine} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </g>
  )
}

/** Hai chiếc thìa bạc trên khăn nhung: một chiếc sáng bóng, một chiếc đã xỉn đen. */
export function TarnishedSilverScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg tableY={56} />
      {/* tấm khăn nhung trải trên bàn */}
      <path
        d="M14 70 H306 Q312 70 312 76 V186 Q312 192 306 192 H14 Q8 192 8 186 V76 Q8 70 14 70 Z"
        fill={CLOTH}
      />
      <path
        d="M8 170 H312 V186 Q312 192 306 192 H14 Q8 192 8 186 Z"
        fill={CLOTH_DEEP}
        opacity="0.7"
      />
      <path d="M8 108 H312" stroke={CLOTH_DEEP} strokeWidth="2" opacity="0.4" />

      {/* chiếc thìa mới đánh bóng */}
      <Shadow cx={172} cy={104} rx={128} ry={5} />
      <Spoon y={92} body={SILVER} shade={SILVER_SHADE} shine={C.white} />
      <Sparkle x={62} y={78} size={7} delay={0} />
      <Sparkle x={236} y={84} size={5} delay={-1.1} />

      {/* chiếc thìa để lâu đã xỉn đen */}
      <Shadow cx={172} cy={158} rx={128} ry={5} />
      <Spoon y={146} body={TARNISH} shade={TARNISH_DEEP} shine={TARNISH_LIGHT} />
      {/* vài đốm xỉn loang lổ */}
      <circle cx="96" cy="150" r="5" fill={TARNISH_DEEP} opacity="0.7" />
      <circle cx="160" cy="145" r="3" fill={TARNISH_DEEP} opacity="0.7" />
      <circle cx="214" cy="147" r="3.4" fill={TARNISH_DEEP} opacity="0.7" />
      {/* một vệt vừa được chùi sạch, lộ bạc sáng bên dưới */}
      <path d="M232 141 Q250 139 262 141 V151 Q250 153 232 151 Z" fill={SILVER} />
      <path d="M232 147 Q250 150 262 148 V151 Q250 153 232 151 Z" fill={SILVER_SHADE} />

      {/* miếng vải đánh bóng đang chùi */}
      <g className="sc sc-float" style={{ animationDuration: '2.4s' }}>
        <path
          d="M252 118 Q262 108 282 112 Q304 110 306 128 Q312 146 296 154 Q278 162 262 152 Q246 146 250 132 Z"
          fill={RAG}
        />
        <path
          d="M296 154 Q312 146 306 128 Q304 140 290 146 Q276 152 262 152 Q278 162 296 154 Z"
          fill={RAG_DEEP}
        />
        <path
          d="M266 124 Q278 120 290 126 M264 136 Q276 132 292 138"
          fill="none"
          stroke={RAG_DEEP}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M256 146 Q262 152 270 152 L262 156 Z" fill={TARNISH} opacity="0.55" />
      </g>
      <Sparkle x={244} y={136} size={4} delay={-0.6} />
    </Scene>
  )
}
