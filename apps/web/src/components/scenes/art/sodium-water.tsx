import { C, Flame, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const WALL = '#E4DEFA'
const WALL_SHADE = '#D0C6F3'
const SURFACE = '#A9DFF8'
const NA_FLAME = '#FFA62B'

/** Bọt khí hydrogen rỗng ruột nổi lên rồi tan. */
function Fizz({ x, y, r, delay }: { x: number; y: number; r: number; delay: number }) {
  return (
    <circle
      cx={x}
      cy={y}
      r={r}
      fill={C.white}
      fillOpacity="0.85"
      stroke={C.waterDeep}
      strokeWidth="1.4"
      className="sc sc-rise"
      style={{ animationDelay: `${delay}s`, animationDuration: '2s' }}
    />
  )
}

export function SodiumWaterScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={150} />

      {/* chậu thuỷ tinh đựng nước */}
      <Shadow cx={190} cy={181} rx={104} ry={8} />
      <ellipse cx="190" cy="84" rx="100" ry="20" fill={C.glass} opacity="0.5" />
      <path d="M90 100 V152 A100 20 0 0 0 290 152 V100 Z" fill={C.water} />
      <path
        d="M210 118 Q260 116 290 100 V152 A100 20 0 0 1 210 171 Z"
        fill={C.waterDeep}
        opacity="0.5"
      />
      <ellipse cx="190" cy="100" rx="100" ry="19" fill={SURFACE} />

      {/* vệt chạy vòng của mẩu natri trên mặt nước */}
      <path
        d="M246 100 A58 11 0 1 0 216 109"
        fill="none"
        stroke={C.white}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 9"
        opacity="0.9"
      />
      <ellipse
        cx="238"
        cy="102"
        rx="20"
        ry="5"
        fill="none"
        stroke={C.white}
        strokeWidth="1.8"
        className="sc sc-ripple"
      />
      <ellipse
        cx="238"
        cy="102"
        rx="20"
        ry="5"
        fill="none"
        stroke={C.white}
        strokeWidth="1.8"
        className="sc sc-ripple"
        style={{ animationDelay: '-1.1s' }}
      />

      {/* bọt khí hydrogen xì ra phía sau */}
      <Fizz x={218} y={98} r={4} delay={0} />
      <Fizz x={206} y={102} r={3.2} delay={-0.5} />
      <Fizz x={226} y={92} r={3} delay={-1} />
      <Fizz x={196} y={98} r={2.6} delay={-1.4} />
      <Fizz x={212} y={90} r={2.4} delay={-1.8} />

      {/* mẩu natri vo tròn, bốc cháy */}
      <g className="sc sc-float" style={{ animationDuration: '1.4s' }}>
        <circle cx="240" cy="72" r="26" fill={C.yellow} opacity="0.45" />
        <Flame x={240} y={92} size={34} outer={NA_FLAME} core={C.flameCore} />
        <circle cx="240" cy="98" r="10" fill={C.metal} />
        <path d="M230 98 A10 10 0 0 1 250 98 Q240 102 230 98 Z" fill={C.metalLight} />
        <circle cx="236" cy="94" r="2.8" fill={C.white} />
      </g>
      <Sparkle x={262} y={58} size={7} color={C.gold} />
      <Sparkle x={218} y={50} size={6} color={C.gold} delay={-0.7} />
      <Sparkle x={250} y={36} size={5} color={C.flame} delay={-1.4} />

      {/* thành chậu phía trước */}
      <path
        d="M90 84 V152 A100 20 0 0 0 290 152 V84"
        fill="none"
        stroke={C.white}
        strokeWidth="3.4"
        strokeLinejoin="round"
      />
      <ellipse cx="190" cy="84" rx="100" ry="20" fill="none" stroke={C.white} strokeWidth="3.4" />
      <path
        d="M102 104 V150"
        stroke={C.white}
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* tấm chắn an toàn trong suốt */}
      <Shadow cx={62} cy={192} rx={58} ry={4.5} />
      <rect x="14" y="26" width="96" height="158" rx="8" fill={C.glass} opacity="0.45" />
      <rect
        x="14"
        y="26"
        width="96"
        height="158"
        rx="8"
        fill="none"
        stroke={C.inkSoft}
        strokeWidth="4.5"
      />
      <path
        d="M30 92 L62 44 M34 132 L86 54"
        stroke={C.white}
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path d="M22 184 L10 194 H44 Z M102 184 L114 194 H80 Z" fill={C.inkSoft} />
      <rect x="6" y="190" width="112" height="7" rx="3.5" fill={C.inkSoft} />
    </Scene>
  )
}
