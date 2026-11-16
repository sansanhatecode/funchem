import { Bubble, C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const VINEGAR = '#FFF2B0'
const VINEGAR_DEEP = '#EFD066'
const GARLIC = '#FFFDF3'
const GARLIC_SHADE = '#E9E2D0'
const BOTTLE =
  'M149 42 V60 Q149 70 138 76 Q126 82 126 98 V160 Q126 172 138 172 H182 Q194 172 194 160 V98 Q194 82 182 76 Q171 70 171 60 V42 Z'

/** Quả ớt đỏ nhỏ có cuống xanh. */
function Chili({
  x,
  y,
  rotate = 0,
  scale = 1,
}: {
  x: number
  y: number
  rotate?: number
  scale?: number
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <path d="M0 -4 Q14 -8 28 2 Q14 8 0 4 Q-3 0 0 -4 Z" fill={C.red} />
      <path d="M4 2 Q14 5 24 2.6 Q14 7 2 4 Z" fill={C.redDeep} opacity="0.7" />
      <path
        d="M-1 0 q-5 -1 -7 -5"
        fill="none"
        stroke={C.greenDeep}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  )
}

/** Tép tỏi hình giọt. */
function Clove({ x, y, rotate = 0 }: { x: number; y: number; rotate?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <path d="M0 -8 Q9 0 5 6 Q0 9 -5 6 Q-9 0 0 -8 Z" fill={GARLIC} />
      <path d="M0 -8 Q9 0 5 6 Q2 8 0 8 Q4 0 0 -8 Z" fill={GARLIC_SHADE} />
    </g>
  )
}

export function VinegarBottleScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall="#E4F3D6" wallShade="#CBE6B2" tableY={152} tiles />
      {/* thớt gỗ dựng sát tường */}
      <rect x="24" y="58" width="62" height="98" rx="12" fill={C.woodDeep} />
      <rect x="24" y="58" width="14" height="98" rx="7" fill={C.wood} opacity="0.6" />
      <circle cx="55" cy="72" r="5" fill="#CBE6B2" />

      {/* bát đồ chua: cà rốt, củ cải */}
      <Shadow cx={250} cy={176} rx={42} ry={5} />
      <g transform="translate(250 150)">
        <rect x="-24" y="-20" width="9" height="30" rx="3" fill={C.flame} transform="rotate(-16)" />
        <rect x="-10" y="-25" width="9" height="32" rx="3" fill={GARLIC} transform="rotate(-4)" />
        <rect x="3" y="-22" width="9" height="30" rx="3" fill={C.flame} transform="rotate(10)" />
        <rect x="14" y="-18" width="9" height="28" rx="3" fill={GARLIC} transform="rotate(22)" />
        <ellipse cx="-2" cy="-5" rx="8" ry="4" fill={C.green} transform="rotate(-30 -2 -5)" />
        <path d="M-36 0 H36 Q36 22 18 25 H-18 Q-36 22 -36 0 Z" fill={C.white} />
        <path d="M8 0 H36 Q36 22 18 25 H8 Z" fill={C.metalLight} />
        <path d="M-36 0 H36 Q36 4 35 7 H-35 Q-36 4 -36 0 Z" fill={C.waterDeep} />
      </g>

      {/* củ tỏi và quả ớt trên bàn */}
      <Shadow cx={84} cy={181} rx={32} ry={4.5} />
      <g transform="translate(72 166)">
        <path d="M0 -18 Q2 -8 12 -2 Q19 8 8 14 H-8 Q-19 8 -12 -2 Q-2 -8 0 -18 Z" fill={GARLIC} />
        <path d="M0 -18 Q2 -8 12 -2 Q19 8 8 14 H2 Q8 2 0 -18 Z" fill={GARLIC_SHADE} />
        <path
          d="M-5 -4 Q-9 4 -5 13"
          fill="none"
          stroke={GARLIC_SHADE}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <Chili x={86} y={184} rotate={-8} scale={1.15} />

      {/* chai thuỷ tinh trong đựng giấm */}
      <Shadow cx={164} cy={175} rx={50} ry={6} />
      <g transform="translate(160 172) scale(1.08) translate(-160 -172)">
        <path d={BOTTLE} fill={C.glass} opacity="0.45" />
        <path d="M129 100 H191 V160 Q191 169 182 169 H138 Q129 169 129 160 Z" fill={VINEGAR} />
        <path d="M160 100 H191 V160 Q191 169 182 169 H160 Z" fill={VINEGAR_DEEP} opacity="0.4" />
        <ellipse cx="160" cy="100" rx="31" ry="4" fill={VINEGAR_DEEP} />
        <ellipse cx="152" cy="99.5" rx="15" ry="1.8" fill={C.white} opacity="0.7" />
        {/* tỏi ớt ngâm */}
        <Clove x={142} y={159} rotate={70} />
        <Clove x={160} y={161} rotate={-80} />
        <Clove x={177} y={158} rotate={100} />
        <Clove x={152} y={150} rotate={20} />
        <g className="sc sc-float" style={{ animationDelay: '-1.4s' }}>
          <Chili x={146} y={130} rotate={20} scale={0.9} />
        </g>
        <Chili x={162} y={150} rotate={-14} scale={0.9} />
        <Bubble x={140} y={150} r={2.2} />
        <Bubble x={172} y={152} r={2.8} delay={-1.3} />
        <Bubble x={182} y={146} r={2} delay={-2.3} />
        <path d={BOTTLE} fill="none" stroke={C.white} strokeWidth="3" strokeLinejoin="round" />
        <path
          d="M134 98 V156"
          stroke={C.white}
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.65"
        />
        <path
          d="M154 48 V62"
          stroke={C.white}
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.65"
        />
        <rect x="145" y="38" width="30" height="7" rx="3.5" fill={C.white} />
        <rect x="150" y="22" width="20" height="17" rx="4" fill={C.wood} />
        <rect x="161" y="22" width="9" height="17" rx="4" fill={C.woodDeep} opacity="0.7" />
      </g>

      <Sparkle x={212} y={60} size={8} color={C.white} />
      <Sparkle x={108} y={100} size={6} color={C.white} delay={-1.1} />
    </Scene>
  )
}
