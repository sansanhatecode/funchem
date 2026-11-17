import { C, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

const ACID = '#BDE6F6'
const ACID_DEEP = '#8FCFEA'
const BEAKER =
  'M106 52 Q112 54 112 62 V156 Q112 168 124 168 H196 Q208 168 208 156 V62 Q208 54 214 52'
/** Bọt khí hydrogen nổi lên từ mẩu kim loại: [x, y, r, độ trễ] */
const FIZZ = [
  [138, 142, 3.4, 0],
  [150, 138, 2.6, -0.5],
  [160, 144, 4, -1.1],
  [170, 138, 3, -1.6],
  [182, 142, 3.6, -0.3],
  [146, 118, 2.4, -2],
  [166, 114, 3, -0.8],
  [178, 120, 2.2, -1.4],
  [156, 96, 2.6, -2.3],
] as const

export function MetalInAcidScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={C.wallCool} wallShade={C.wallCoolShade} tableY={152} tiles />

      {/* giá ống nghiệm phía sau */}
      <rect x="236" y="96" width="66" height="8" rx="4" fill={C.woodDeep} />
      <rect x="240" y="100" width="6" height="54" fill={C.woodDeep} />
      <rect x="292" y="100" width="6" height="54" fill={C.woodDeep} />
      {[254, 270, 286].map((x, i) => (
        <g key={x}>
          <path
            d={`M${x - 5} 78 V140 Q${x - 5} 146 ${x} 146 Q${x + 5} 146 ${x + 5} 140 V78`}
            fill={C.glass}
            opacity="0.7"
          />
          <path
            d={`M${x - 5} ${112 + i * 6} V140 Q${x - 5} 146 ${x} 146 Q${x + 5} 146 ${x + 5} 140 V${112 + i * 6} Z`}
            fill={[C.pink, C.yellow, C.purple][i]}
            opacity="0.85"
          />
          <path
            d={`M${x - 5} 78 V140 Q${x - 5} 146 ${x} 146 Q${x + 5} 146 ${x + 5} 140 V78`}
            fill="none"
            stroke={C.white}
            strokeWidth="2"
          />
        </g>
      ))}
      <rect x="232" y="150" width="74" height="8" rx="4" fill={C.woodDark} />

      {/* kính bảo hộ */}
      <Shadow cx={52} cy={178} rx={40} ry={5} />
      <path
        d="M14 160 Q14 150 26 150 H78 Q90 150 90 160 V166 Q90 176 78 176 H62 Q52 176 52 168 Q52 176 42 176 H26 Q14 176 14 166 Z"
        fill={C.purple}
      />
      <rect x="20" y="155" width="27" height="16" rx="6" fill={C.glass} />
      <rect x="57" y="155" width="27" height="16" rx="6" fill={C.glass} />
      <path
        d="M24 159 l8 -2 M61 159 l8 -2"
        stroke={C.white}
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* cốc thuỷ tinh đựng acid */}
      <Shadow cx={162} cy={172} rx={58} ry={7} />
      <path d="M112 84 V156 Q112 168 124 168 H196 Q208 168 208 156 V84 Z" fill={ACID} />
      <path d="M160 84 H208 V156 Q208 168 196 168 H160 Z" fill={ACID_DEEP} opacity="0.5" />
      <ellipse cx="160" cy="84" rx="48" ry="6" fill={ACID_DEEP} />
      <ellipse cx="150" cy="83" rx="22" ry="2.4" fill={C.white} opacity="0.6" />

      {/* mẩu magnesium dưới đáy cốc */}
      <path
        d="M130 158 Q142 146 154 156 Q166 164 178 152 L190 156"
        fill="none"
        stroke={C.metalDark}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M130 156 Q142 144 154 154 Q166 162 178 150 L190 154"
        fill="none"
        stroke={C.metalLight}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* bọt khí hydrogen */}
      {FIZZ.map(([x, y, r, delay], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={r}
          fill={C.white}
          fillOpacity="0.7"
          stroke={C.white}
          strokeWidth="1.6"
          className="sc sc-rise"
          style={{ animationDelay: `${delay}s`, animationDuration: '2.4s' }}
        />
      ))}
      <g fill={C.white} className="sc sc-pulse">
        <circle cx="140" cy="82" r="4" />
        <circle cx="152" cy="80" r="5" />
        <circle cx="166" cy="81" r="4.4" />
        <circle cx="178" cy="83" r="3.6" />
      </g>

      {/* thành cốc và vạch chia */}
      <path d={BEAKER} fill="none" stroke={C.white} strokeWidth="3.4" strokeLinecap="round" />
      <path
        d="M196 100 h-10 M196 116 h-6 M196 132 h-10 M196 148 h-6"
        stroke={C.white}
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path d="M120 66 V150" stroke={C.white} strokeWidth="5" strokeLinecap="round" opacity="0.6" />

      {/* nhãn trên cốc */}
      <rect x="128" y="98" width="36" height="18" rx="4" fill={C.white} />
      <text x="146" y="111.5" textAnchor="middle" fontSize="12" fontWeight="800" fill={C.redDeep}>
        HCl
      </text>

      {/* bọt bay khỏi mặt dung dịch */}
      <g fill={C.white} className="sc sc-float">
        <circle cx="148" cy="62" r="2.6" />
        <circle cx="170" cy="56" r="3" />
        <circle cx="160" cy="42" r="2" />
      </g>
    </Scene>
  )
}
