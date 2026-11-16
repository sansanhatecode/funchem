import { Bubble, C, Cloud, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

export function GlassOfWaterScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg tableY={150} />
      {/* cửa sổ nhìn ra trời */}
      <rect x="22" y="22" width="84" height="84" rx="10" fill={C.woodDeep} />
      <rect x="28" y="28" width="72" height="72" rx="6" fill={C.sky} />
      <circle cx="80" cy="46" r="9" fill={C.sun} />
      <Cloud x={52} y={70} scale={0.55} />
      <path d="M64 28 V100 M28 64 H100" stroke={C.woodDeep} strokeWidth="5" />
      {/* tia nắng */}
      <path d="M100 40 L210 150 H130 L64 100 Z" fill={C.yellow} opacity="0.22" />

      {/* đế lót */}
      <ellipse cx="160" cy="166" rx="52" ry="9" fill={C.woodDeep} />
      <Shadow cx={166} cy={167} rx={46} ry={6} />

      {/* ống hút */}
      <path d="M186 36 L152 152" stroke={C.red} strokeWidth="7" strokeLinecap="round" />
      <path
        d="M184 44 l-2 7 M179 61 l-2 7 M174 78 l-2 7"
        stroke={C.white}
        strokeWidth="7"
        opacity="0.75"
      />

      {/* nước */}
      <path
        d="M121 86 L128.5 156 Q129.5 162 136 162 H184 Q190.5 162 191.5 156 L199 86 Z"
        fill={C.water}
      />
      <path
        d="M160 86 H199 L191.5 156 Q190.5 162 184 162 H160 Z"
        fill={C.waterDeep}
        opacity="0.35"
      />
      <ellipse cx="160" cy="86" rx="39" ry="5.5" fill={C.waterDeep} />
      <ellipse
        cx="152"
        cy="85"
        rx="20"
        ry="2.4"
        fill={C.white}
        opacity="0.6"
        className="sc sc-float"
      />

      {/* đá viên */}
      <rect
        x="132"
        y="92"
        width="20"
        height="20"
        rx="4"
        fill={C.white}
        opacity="0.78"
        transform="rotate(-14 142 102)"
      />
      <rect
        x="164"
        y="98"
        width="18"
        height="18"
        rx="4"
        fill={C.white}
        opacity="0.7"
        transform="rotate(18 173 107)"
      />

      <Bubble x={146} y={150} r={2.6} delay={0} />
      <Bubble x={170} y={154} r={3.2} delay={-1.1} />
      <Bubble x={158} y={146} r={2} delay={-2.2} />
      <Bubble x={180} y={148} r={2.4} delay={-0.6} />

      {/* thành ly */}
      <path
        d="M116 58 L126.5 157 Q127.5 165 136 165 H184 Q192.5 165 193.5 157 L204 58 Z"
        fill={C.glass}
        opacity="0.38"
      />
      <path
        d="M116 58 L126.5 157 Q127.5 165 136 165 H184 Q192.5 165 193.5 157 L204 58"
        fill="none"
        stroke={C.white}
        strokeWidth="3"
        strokeLinejoin="round"
        opacity="0.95"
      />
      <ellipse
        cx="160"
        cy="58"
        rx="44"
        ry="6"
        fill="none"
        stroke={C.white}
        strokeWidth="3"
        opacity="0.95"
      />
      <path
        d="M126 70 L133 146"
        stroke={C.white}
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* lát chanh cài miệng ly */}
      <g transform="translate(203 60)">
        <circle r="15" fill={C.gold} />
        <circle r="11.5" fill={C.yellow} />
        <path d="M0 -11 V11 M-11 0 H11 M-8 -8 L8 8 M8 -8 L-8 8" stroke={C.gold} strokeWidth="1.6" />
        <circle r="2.4" fill={C.gold} />
      </g>

      {/* giọt nước đọng ngoài ly */}
      <path
        d="M186 118 q3 6 0 9 q-3 -3 0 -9"
        fill={C.white}
        opacity="0.9"
        className="sc sc-float"
      />
      <path
        d="M134 128 q3 6 0 9 q-3 -3 0 -9"
        fill={C.white}
        opacity="0.8"
        className="sc sc-float"
        style={{ animationDelay: '-1.6s' }}
      />
    </Scene>
  )
}
