import { C, Cloud, Scene, type SceneProps, Shadow } from '../kit'

const SKY = '#D9E6F0'
const RIVER = '#C9794F'
const RIVER_DEEP = '#B0623B'
const RIVER_LIGHT = '#DD9870'
const BANK = '#7CC486'
const BANK_DEEP = '#57AB68'
const PIER = '#E3B37C'
const PIER_DEEP = '#C48B50'
const MUD = '#9A5230'
const CUP_WATER = '#F0D9C4'
const CUP_WATER_MID = '#E2B894'
const GLASS = 'M190 62 V156 Q190 172 206 172 H258 Q274 172 274 156 V62'

export function MuddyRiverScene(props: SceneProps) {
  return (
    <Scene {...props}>
      {/* trời sau mưa */}
      <rect width="320" height="200" fill={SKY} />
      <Cloud x={70} y={26} scale={1.1} color={C.cloudRain} />
      <Cloud x={230} y={20} scale={0.9} color={C.cloudRain} />

      {/* bờ bên kia */}
      <path d="M0 62 Q80 44 170 58 T320 50 V84 H0 Z" fill={BANK_DEEP} />
      <path d="M0 72 Q100 60 200 70 T320 64 V88 H0 Z" fill={BANK} />

      {/* dòng sông đỏ ngầu phù sa */}
      <rect y="80" width="320" height="76" fill={RIVER} />
      <path d="M0 118 Q80 108 160 120 T320 114 V156 H0 Z" fill={RIVER_DEEP} opacity="0.45" />
      <g
        fill="none"
        stroke={RIVER_LIGHT}
        strokeWidth="3"
        strokeLinecap="round"
        className="sc sc-float"
      >
        <path d="M18 96 q16 -6 32 0 t32 0" />
        <path d="M116 108 q16 -6 32 0 t32 0" />
        <path d="M30 132 q16 -6 32 0 t32 0" />
      </g>
      <g
        fill="none"
        stroke={RIVER_LIGHT}
        strokeWidth="3"
        strokeLinecap="round"
        className="sc sc-float"
        style={{ animationDelay: '-2s' }}
      >
        <path d="M220 94 q16 -6 32 0 t32 0" />
        <path d="M96 140 q16 -6 32 0 t32 0" />
      </g>

      {/* con thuyền nan */}
      <g className="sc sc-float" style={{ animationDelay: '-1s' }}>
        <path d="M44 104 Q76 124 116 104 Q104 118 80 118 Q56 118 44 104 Z" fill={C.woodDark} />
        <path d="M52 106 Q80 116 108 106" fill="none" stroke={C.wood} strokeWidth="2.4" />
      </g>

      {/* cầu ao bằng gỗ */}
      <rect y="150" width="320" height="50" fill={PIER} />
      <rect y="150" width="320" height="6" fill={PIER_DEEP} />
      <path
        d="M0 174 H320 M80 156 V174 M210 156 V174 M150 174 V200 M280 174 V200"
        stroke={PIER_DEEP}
        strokeWidth="2"
        opacity="0.5"
      />

      {/* cốc nước sông để yên: bùn lắng ở đáy, phía trên trong dần */}
      <Shadow cx={232} cy={176} rx={54} ry={6} />
      <path d="M194 76 H270 V156 Q270 168 258 168 H206 Q194 168 194 156 Z" fill={CUP_WATER} />
      <path
        d="M194 112 H270 V156 Q270 168 258 168 H206 Q194 168 194 156 Z"
        fill={CUP_WATER_MID}
        opacity="0.8"
      />
      <path
        d="M194 134 H270 V156 Q270 168 258 168 H206 Q194 168 194 156 Z"
        fill={RIVER}
        opacity="0.75"
      />
      <path
        d="M194 152 Q214 144 232 150 Q252 144 270 152 V156 Q270 168 258 168 H206 Q194 168 194 156 Z"
        fill={MUD}
      />
      <ellipse cx="232" cy="76" rx="38" ry="5" fill={CUP_WATER_MID} />
      {/* hạt phù sa đang chìm dần */}
      <g fill={MUD} className="sc sc-float" style={{ animationDuration: '6s' }}>
        <circle cx="210" cy="104" r="1.6" />
        <circle cx="236" cy="96" r="1.3" />
        <circle cx="254" cy="112" r="1.8" />
        <circle cx="222" cy="124" r="2" />
        <circle cx="246" cy="130" r="2.2" />
        <circle cx="206" cy="138" r="2.2" />
        <circle cx="260" cy="142" r="2.4" />
        <circle cx="232" cy="142" r="2.4" />
      </g>
      <path d={`${GLASS} Z`} fill={C.glass} opacity="0.14" />
      <path d={GLASS} fill="none" stroke={C.white} strokeWidth="3.5" strokeLinejoin="round" />
      <ellipse cx="232" cy="62" rx="42" ry="6" fill="none" stroke={C.white} strokeWidth="3.5" />
      <path d="M202 74 V140" stroke={C.white} strokeWidth="5" strokeLinecap="round" opacity="0.6" />
    </Scene>
  )
}
