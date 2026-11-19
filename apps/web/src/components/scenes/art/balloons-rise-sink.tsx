import { C, Scene, type SceneProps, Shadow } from '../kit'

const WALL = '#FBE9F0'
const WALL_SHADE = '#F6D3E0'
const FLOOR = '#E3B37C'
const FLOOR_DEEP = '#C48B50'
const CEILING = '#FFFFFF'
const CO2 = '#6FB7E9'
const CO2_DEEP = '#4A97CF'
const CHAIR = '#9B7EDE'
const CHAIR_DEEP = '#7458C2'

function Tag({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fontSize="15"
      fontWeight="800"
      fill={C.ink}
      fontFamily="inherit"
    >
      {children}
    </text>
  )
}

export function BalloonsRiseSinkScene(props: SceneProps) {
  return (
    <Scene {...props}>
      {/* căn phòng: trần, tường, sàn gỗ */}
      <rect width="320" height="200" fill={WALL} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x={i * 56 + 10}
          y="0"
          width="18"
          height="160"
          fill={WALL_SHADE}
          opacity="0.5"
        />
      ))}
      <rect width="320" height="12" fill={CEILING} />
      <rect y="12" width="320" height="4" fill={WALL_SHADE} />
      <rect y="160" width="320" height="40" fill={FLOOR} />
      <rect y="160" width="320" height="6" fill={FLOOR_DEEP} />
      <rect y="182" width="320" height="2" fill={FLOOR_DEEP} opacity="0.35" />

      {/* chiếc ghế đẩu giữ dây bóng helium */}
      <Shadow cx={104} cy={190} rx={34} ry={5} />
      <path
        d="M84 150 L78 188 M124 150 L130 188"
        stroke={CHAIR_DEEP}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <rect x="74" y="140" width="60" height="12" rx="6" fill={CHAIR} />
      <rect x="74" y="146" width="60" height="6" rx="3" fill={CHAIR_DEEP} opacity="0.6" />

      {/* bóng helium bay lên, kéo căng sợi dây */}
      <path d="M104 96 L104 142" stroke={C.inkSoft} strokeWidth="1.6" strokeLinecap="round" />
      <g className="sc sc-float">
        <path
          d="M98 97 L104 88 L110 97 Z"
          fill={C.goldDeep}
          stroke={C.goldDeep}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <ellipse cx="104" cy="56" rx="32" ry="36" fill={C.goldDeep} />
        <ellipse cx="101" cy="53" rx="29" ry="33" fill={C.gold} />
        <ellipse
          cx="90"
          cy="40"
          rx="5"
          ry="10"
          fill={C.white}
          opacity="0.6"
          transform="rotate(24 90 40)"
        />
        <Tag x={103} y={62}>
          He
        </Tag>
      </g>
      {/* mũi tên đi lên */}
      <path
        d="M152 66 V34 M143 44 L152 33 L161 44"
        fill="none"
        stroke={C.green}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="sc sc-float"
      />

      {/* bóng carbon dioxide nằm trên sàn, dây buông chùng */}
      <Shadow cx={228} cy={186} rx={38} ry={6} />
      <path
        d="M262 176 Q282 170 290 184 Q296 192 306 188"
        fill="none"
        stroke={C.inkSoft}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M258 170 L268 176 L258 182 Z"
        fill={CO2_DEEP}
        stroke={CO2_DEEP}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <ellipse cx="226" cy="154" rx="36" ry="31" fill={CO2_DEEP} />
      <ellipse cx="223" cy="151" rx="33" ry="28" fill={CO2} />
      <ellipse
        cx="208"
        cy="138"
        rx="5"
        ry="10"
        fill={C.white}
        opacity="0.6"
        transform="rotate(40 208 138)"
      />
      <Tag x={225} y={160}>
        CO₂
      </Tag>
      {/* mũi tên đi xuống */}
      <path
        d="M286 92 V124 M277 114 L286 125 L295 114"
        fill="none"
        stroke={C.red}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Scene>
  )
}
