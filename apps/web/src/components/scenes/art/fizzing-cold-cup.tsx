import { Bubble, C, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

const VINEGAR = '#FFF2B0'
const VINEGAR_DEEP = '#EFD066'
const COLD = '#3B9BFF'
const GLASS = 'M112 66 L121 166 Q122 175 131 175 H189 Q198 175 199 166 L208 66 Z'
/** Lớp bọt trắng trên mặt dung dịch: [x, y, bán kính]. */
const FOAM = [
  [126, 100, 8],
  [139, 96, 9],
  [154, 99, 8],
  [168, 95, 10],
  [183, 99, 8],
  [195, 101, 7],
  [147, 90, 7],
  [176, 88, 6],
  [161, 87, 6],
] as const

/** Bọt khí rỗng ruột nổi lên rồi tan. */
function Fizz({ x, y, r, delay }: { x: number; y: number; r: number; delay: number }) {
  return (
    <circle
      cx={x}
      cy={y}
      r={r}
      fill={C.white}
      fillOpacity="0.6"
      stroke={C.white}
      strokeWidth="1.6"
      className="sc sc-rise"
      style={{ animationDelay: `${delay}s`, animationDuration: '2.4s' }}
    />
  )
}

export function FizzingColdCupScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall="#D6E9F8" wallShade="#BCD9F2" tableY={152} />

      {/* hộp baking soda */}
      <Shadow cx={52} cy={177} rx={36} ry={5} />
      <rect x="22" y="104" width="58" height="72" rx="5" fill={C.red} />
      <rect x="60" y="104" width="20" height="72" rx="5" fill={C.redDeep} opacity="0.6" />
      <path d="M22 106 L30 92 H74 L80 106 Z" fill={C.pink} />
      <circle cx="49" cy="140" r="16" fill={C.white} />
      <path d="M49 128 q2 10 12 12 q-10 2 -12 12 q-2 -10 -12 -12 q10 -2 12 -12 Z" fill={C.gold} />

      {/* cốc giấm đang sủi bọt */}
      <Shadow cx={160} cy={177} rx={56} ry={6} />
      <path d={GLASS} fill={C.glass} opacity="0.5" />
      <path
        d="M115.5 104 L121 166 Q122 175 131 175 H189 Q198 175 199 166 L204.5 104 Z"
        fill={VINEGAR}
      />
      <path
        d="M160 104 H204.5 L199 166 Q198 175 189 175 H160 Z"
        fill={VINEGAR_DEEP}
        opacity="0.4"
      />
      <Bubble x={136} y={160} r={3} />
      <Bubble x={152} y={166} r={2.4} delay={-0.8} />
      <Bubble x={170} y={160} r={3.2} delay={-1.5} />
      <Bubble x={184} y={164} r={2.4} delay={-2.2} />
      <Bubble x={144} y={150} r={2} delay={-2.7} />

      {/* nhiệt kế cắm trong cốc, cột đỏ đang tụt thấp */}
      <g transform="rotate(16 172 160)">
        <rect x="163" y="12" width="18" height="154" rx="9" fill={C.metal} />
        <rect x="165" y="14" width="14" height="150" rx="7" fill={C.white} />
        <rect x="169.5" y="22" width="5" height="134" rx="2.5" fill={C.metalLight} />
        <rect x="169.5" y="116" width="5" height="42" rx="2.5" fill={C.red} />
        <circle cx="172" cy="162" r="11.5" fill={C.metal} />
        <circle cx="172" cy="162" r="9.5" fill={C.white} />
        <circle cx="172" cy="162" r="7" fill={C.red} />
        <path
          d="M175 30 h4 M175 42 h4 M175 54 h4 M175 66 h4 M175 78 h4 M175 90 h4 M175 102 h4"
          stroke={C.inkSoft}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </g>

      {/* bọt trắng trên mặt và bọt khí bay lên */}
      <g className="sc sc-pulse" style={{ transformOrigin: '50% 100%' }}>
        {FOAM.map(([x, y, r], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill={C.white} />
        ))}
      </g>
      <Fizz x={132} y={82} r={4} delay={0} />
      <Fizz x={150} y={76} r={3} delay={-0.7} />
      <Fizz x={182} y={78} r={3.6} delay={-1.4} />

      {/* thành cốc */}
      <path d={GLASS} fill="none" stroke={C.white} strokeWidth="3.4" strokeLinejoin="round" />
      <path
        d="M122 80 L128 150"
        stroke={C.white}
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.65"
      />

      {/* mũi tên xanh: nhiệt độ đang giảm */}
      <g className="sc sc-float">
        <circle cx="258" cy="40" r="24" fill={C.white} opacity="0.9" />
        <path
          d="M258 24 V52 M247 43 L258 56 L269 43"
          fill="none"
          stroke={COLD}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* chai giấm */}
      <Shadow cx={276} cy={177} rx={26} ry={4.5} />
      <path d="M258 134 H294 V166 Q294 174 286 174 H266 Q258 174 258 166 Z" fill={VINEGAR} />
      <path
        d="M257 112 Q257 101 266 99 L268 88 H284 L286 99 Q295 101 295 112 V166 Q295 175 286 175 H266 Q257 175 257 166 Z"
        fill={C.glass}
        opacity="0.35"
      />
      <path
        d="M257 112 Q257 101 266 99 L268 88 H284 L286 99 Q295 101 295 112 V166 Q295 175 286 175 H266 Q257 175 257 166 Z"
        fill="none"
        stroke={C.white}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect x="265" y="76" width="22" height="13" rx="4" fill={C.green} />
    </Scene>
  )
}
