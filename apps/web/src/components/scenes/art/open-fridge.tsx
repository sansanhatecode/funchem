import { C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const SHELL = '#F4F8FB'
const SHELL_SHADE = '#D5DFE8'
const INSIDE = '#D3EEFC'
const INSIDE_DEEP = '#B4DFF7'
const MILK = '#FFFFFF'
const SOUR = '#F3EDB5'
const STINK = '#8DBB3C'

/** Cốc sữa: thuỷ tinh trong, bên trong là sữa. */
function MilkGlass({
  x,
  y,
  sour = false,
  scale = 1,
}: {
  x: number
  y: number
  sour?: boolean
  scale?: number
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-13 -30 L-10 0 H10 L13 -30 Z" fill={C.glass} opacity="0.7" />
      <path d="M-12.2 -22 L-10 0 H10 L12.2 -22 Z" fill={sour ? SOUR : MILK} />
      {sour && (
        <g fill="#D9CE7C">
          <circle cx="-5" cy="-18" r="3" />
          <circle cx="3" cy="-20" r="3.6" />
          <circle cx="7" cy="-13" r="2.4" />
          <circle cx="-3" cy="-9" r="2.6" />
        </g>
      )}
      <path
        d="M-13 -30 L-10 0 H10 L13 -30"
        fill="none"
        stroke={C.white}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M-13 -30 H13" stroke={C.metal} strokeWidth="1.6" opacity="0.7" />
    </g>
  )
}

export function OpenFridgeScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall="#FFEBCB" wallShade="#F9D7A6" tableY={178} tiles />

      {/* bàn bếp với cốc sữa bị bỏ quên */}
      <Shadow cx={54} cy={188} rx={46} ry={5} />
      <path
        d="M22 132 V186 M86 132 V186"
        stroke={C.woodDark}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <rect x="8" y="124" width="92" height="11" rx="5" fill={C.woodDeep} />
      <rect x="8" y="124" width="92" height="4" rx="2" fill={C.wood} />
      <MilkGlass x={54} y={124} sour scale={1.5} />
      {[38, 54, 70].map((x, i) => (
        <path
          key={x}
          d={`M${x} 70 q-5 -6 0 -12 q5 -6 0 -12`}
          fill="none"
          stroke={STINK}
          strokeWidth="3"
          strokeLinecap="round"
          className="sc sc-rise"
          style={{ animationDelay: `${-i * 1.1}s`, animationDuration: '3.4s' }}
        />
      ))}

      {/* tủ lạnh mở cửa */}
      <Shadow cx={196} cy={190} rx={96} ry={6} />
      <rect x="116" y="10" width="124" height="178" rx="10" fill={SHELL} />
      <rect x="124" y="18" width="108" height="162" rx="5" fill={INSIDE} />
      <rect x="124" y="18" width="108" height="14" rx="5" fill={C.white} opacity="0.8" />
      <rect x="196" y="32" width="36" height="148" fill={INSIDE_DEEP} opacity="0.5" />
      <g fill={C.white}>
        <rect x="124" y="70" width="108" height="4" />
        <rect x="124" y="122" width="108" height="4" />
      </g>

      {/* ngăn trên: trứng và hũ mứt */}
      <g fill="#FFF3E0">
        <ellipse cx="140" cy="61" rx="6.5" ry="8.5" />
        <ellipse cx="155" cy="61" rx="6.5" ry="8.5" />
        <ellipse cx="170" cy="61" rx="6.5" ry="8.5" />
      </g>
      <rect x="196" y="44" width="24" height="26" rx="5" fill={C.red} />
      <rect x="194" y="40" width="28" height="7" rx="3.5" fill={C.gold} />

      {/* ngăn giữa: hộp sữa và cốc sữa còn ngon */}
      <path d="M134 90 L144 80 H160 L170 90 V122 H134 Z" fill={C.white} />
      <path d="M134 90 L144 80 H160 L170 90 Z" fill={C.waterDeep} />
      <rect x="134" y="100" width="36" height="12" fill={C.water} />
      <circle cx="152" cy="106" r="4" fill={C.white} />
      <MilkGlass x={200} y={122} />

      {/* ngăn dưới: rau củ */}
      <circle cx="148" cy="160" r="17" fill={C.green} />
      <path
        d="M148 143 q10 8 4 22 M140 146 q-6 10 2 22"
        fill="none"
        stroke={C.greenDeep}
        strokeWidth="2.4"
      />
      <path d="M180 176 L196 146 Q204 144 206 152 L196 178 Z" fill={C.flame} />
      <path
        d="M200 148 l5 -9 M203 149 l9 -5"
        stroke={C.greenDeep}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="218" cy="168" r="10" fill={C.red} />

      {/* cánh cửa mở sang phải, có ngăn để chai */}
      <path d="M240 10 L306 22 V196 L240 188 Z" fill={SHELL} />
      <path d="M248 22 L298 31 V186 L248 180 Z" fill={SHELL_SHADE} opacity="0.7" />
      <path d="M248 96 L298 101 V110 L248 106 Z M248 150 L298 154 V163 L248 160 Z" fill={C.white} />
      <rect x="258" y="68" width="12" height="30" rx="4" fill={C.green} />
      <rect x="276" y="74" width="12" height="27" rx="4" fill={C.gold} />
      <rect x="262" y="126" width="14" height="28" rx="4" fill={C.waterDeep} />

      {/* hơi lạnh tràn ra và lấp lánh */}
      <g fill={C.white} opacity="0.8" className="sc sc-float">
        <ellipse cx="150" cy="184" rx="26" ry="7" />
        <ellipse cx="196" cy="188" rx="30" ry="7" />
        <ellipse cx="118" cy="190" rx="18" ry="5" />
      </g>
      <Sparkle x={184} y={52} size={6} delay={-0.4} />
      <Sparkle x={222} y={94} size={7} />
      <Sparkle x={130} y={138} size={5} delay={-1.2} />
    </Scene>
  )
}
