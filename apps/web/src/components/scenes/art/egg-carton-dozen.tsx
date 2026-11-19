import { C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const WALL = '#E3F3E1'
const WALL_SHADE = '#C9E6C6'
const CARTON = '#D8C2A0'
const CARTON_DEEP = '#B99F78'
const CARTON_LIGHT = '#E9D9BF'
const EGG = '#F7D9B5'
const EGG_DEEP = '#E5B98A'
const EGG_XS = [48, 78, 108, 138, 168, 198]
const GLASS = 'M250 122 V160 Q250 170 260 170 H280 Q290 170 290 160 V122'

/** Một quả trứng nằm trong hốc vỉ, chỉ lộ nửa trên. */
function Egg({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <ellipse cx={x} cy={y} rx="12.5" ry="16" fill={EGG_DEEP} />
      <ellipse cx={x - 1.5} cy={y - 1.5} rx="11" ry="14.5" fill={EGG} />
      <ellipse
        cx={x - 5}
        cy={y - 8}
        rx="2.6"
        ry="4.6"
        fill={C.white}
        opacity="0.7"
        transform={`rotate(20 ${x - 5} ${y - 8})`}
      />
    </g>
  )
}

export function EggCartonDozenScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={146} tiles />

      {/* nắp vỉ mở ngửa ra phía sau */}
      <path d="M30 96 L40 52 Q41 46 48 46 H198 Q205 46 206 52 L216 96 Z" fill={CARTON_LIGHT} />
      <path d="M30 96 L33 84 H213 L216 96 Z" fill={CARTON} />
      <rect x="92" y="56" width="62" height="22" rx="5" fill={C.white} opacity="0.85" />
      <text
        x="123"
        y="72"
        textAnchor="middle"
        fontSize="13"
        fontWeight="800"
        fill={C.inkSoft}
        fontFamily="inherit"
      >
        12 quả
      </text>

      {/* khay vỉ */}
      <Shadow cx={123} cy={182} rx={108} ry={7} />
      <rect x="24" y="94" width="198" height="86" rx="12" fill={CARTON_DEEP} />
      <rect x="24" y="94" width="198" height="50" rx="12" fill={CARTON} />

      {/* hàng trứng phía sau */}
      {EGG_XS.map((x) => (
        <Egg key={x} x={x} y={110} />
      ))}
      {/* vách ngăn giữa hai hàng */}
      <path
        d={`M26 122 ${EGG_XS.map((x) => `Q${x - 15} 114 ${x} 124 T${x + 15} 122`).join(' ')} H222 V134 H26 Z`}
        fill={CARTON}
      />
      {/* hàng trứng phía trước */}
      {EGG_XS.map((x) => (
        <Egg key={x} x={x} y={142} />
      ))}
      {/* thành trước của vỉ, lượn theo từng hốc */}
      <path
        d={`M24 156 ${EGG_XS.map((x) => `Q${x - 15} 146 ${x} 158 T${x + 15} 156`).join(' ')} H222 V168 Q222 180 210 180 H36 Q24 180 24 168 Z`}
        fill={CARTON_LIGHT}
      />
      <path d="M24 170 Q24 180 36 180 H210 Q222 180 222 170 Z" fill={CARTON} />

      {/* chén nước nhỏ */}
      <Shadow cx={270} cy={173} rx={28} ry={5} />
      <path d="M252 144 H288 V160 Q288 168 280 168 H260 Q252 168 252 160 Z" fill={C.water} />
      <path d="M270 144 H288 V160 Q288 168 280 168 H270 Z" fill={C.waterDeep} opacity="0.4" />
      <ellipse cx="270" cy="144" rx="18" ry="3" fill={C.glass} />
      <ellipse
        cx="265"
        cy="144"
        rx="8"
        ry="1.4"
        fill={C.white}
        opacity="0.8"
        className="sc sc-float"
      />
      <path d={`${GLASS} Z`} fill={C.glass} opacity="0.25" />
      <path d={GLASS} fill="none" stroke={C.white} strokeWidth="3" strokeLinejoin="round" />
      <ellipse cx="270" cy="122" rx="20" ry="3.5" fill="none" stroke={C.white} strokeWidth="3" />
      <path
        d="M257 130 V158"
        stroke={C.white}
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <Sparkle x={294} y={116} size={5} />
      <Sparkle x={244} y={136} size={4} delay={-1.1} />
    </Scene>
  )
}
