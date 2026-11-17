import { Bubble, C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const RIND = '#4FA83D'
const RIND_DEEP = '#3C8A30'
const PITH = '#F4F8DC'
const FLESH = '#D2E66A'
const FLESH_DEEP = '#B4D04A'
const VINEGAR = '#FFF2B0'
const VINEGAR_DEEP = '#EFD066'
const GARLIC = '#FFFDF3'

/** Tâm và bán kính của mặt cắt quả chanh. */
const LX = 104
const LY = 108
const LR = 46

/** Tám vách ngăn múi chanh, toạ độ đã làm tròn để server và trình duyệt vẽ giống nhau. */
const SPOKES = Array.from({ length: 8 }, (_, i) => {
  const a = (i * Math.PI) / 4 + 0.2
  return [Math.round(LX + 36 * Math.cos(a)), Math.round(LY + 36 * Math.sin(a))] as const
})
/** Tép chanh: một hạt sáng nhỏ nằm giữa mỗi múi. */
const PULP = Array.from({ length: 8 }, (_, i) => {
  const a = (i * Math.PI) / 4 + 0.2 + Math.PI / 8
  return [Math.round(LX + 22 * Math.cos(a)), Math.round(LY + 22 * Math.sin(a))] as const
})

/** Lát ớt đỏ cắt khoanh, có hạt vàng ở giữa. */
function ChiliSlice({ x, y, r = 6 }: { x: number; y: number; r?: number }) {
  return (
    <g>
      <ellipse cx={x} cy={y} rx={r} ry={r * 0.62} fill={C.red} />
      <ellipse cx={x} cy={y} rx={r * 0.5} ry={r * 0.28} fill={C.yellow} />
    </g>
  )
}

export function LimeAndVinegarScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall="#FFE7C7" wallShade="#FFD5A3" tableY={150} />

      {/* quả chanh nguyên nằm phía sau */}
      <Shadow cx={50} cy={171} rx={34} ry={5} />
      <ellipse cx="46" cy="142" rx="34" ry="29" fill={RIND} />
      <path
        d="M46 113 Q80 116 80 142 Q80 168 46 171 Q66 150 46 113 Z"
        fill={RIND_DEEP}
        opacity="0.5"
      />
      <ellipse
        cx="34"
        cy="128"
        rx="10"
        ry="5"
        fill={C.white}
        opacity="0.35"
        transform="rotate(-30 34 128)"
      />
      <circle cx="14" cy="140" r="3.4" fill={RIND_DEEP} />

      {/* nửa quả chanh: mặt cắt quay ra phía người xem */}
      <Shadow cx={108} cy={172} rx={48} ry={6} />
      <ellipse cx={LX + 17} cy={LY + 1} rx={LR - 8} ry={LR - 2} fill={RIND_DEEP} />
      <circle cx={LX} cy={LY} r={LR} fill={RIND} />
      <circle cx={LX} cy={LY} r="41" fill={PITH} />
      <circle cx={LX} cy={LY} r="36" fill={FLESH} />
      <path
        d={`M${LX} ${LY - 36} A36 36 0 0 1 ${LX} ${LY + 36} A16 36 0 0 0 ${LX} ${LY - 36} Z`}
        fill={FLESH_DEEP}
        opacity="0.45"
      />
      {SPOKES.map(([x, y], i) => (
        <path
          key={i}
          d={`M${LX} ${LY} L${x} ${y}`}
          stroke={PITH}
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      ))}
      <g fill={C.white} opacity="0.7">
        {PULP.map(([x, y], i) => (
          <ellipse key={i} cx={x} cy={y} rx="3.4" ry="2" />
        ))}
      </g>
      <circle cx={LX} cy={LY} r="5" fill={PITH} />
      <path
        d={`M${LX - 28} ${LY - 24} Q${LX - 12} ${LY - 38} ${LX + 8} ${LY - 36}`}
        fill="none"
        stroke={C.white}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* giọt nước chanh */}
      <g className="sc sc-float" style={{ animationDuration: '2.4s' }}>
        <path d="M112 158 Q118 168 112 172 Q106 168 112 158 Z" fill={FLESH} />
        <circle cx="110.6" cy="167" r="1.4" fill={C.white} opacity="0.8" />
      </g>
      <ellipse cx="128" cy="176" rx="9" ry="2.6" fill={FLESH} opacity="0.8" />

      {/* chén giấm ngâm ớt tỏi */}
      <Shadow cx={226} cy={174} rx={58} ry={7} />
      <path d="M170 124 Q172 164 204 170 H248 Q280 164 282 124 Z" fill={C.white} />
      <path d="M226 124 H282 Q280 164 248 170 H226 Z" fill={C.metalLight} />
      <path
        d="M178 142 Q226 154 274 142"
        fill="none"
        stroke={C.waterDeep}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M184 154 Q226 164 268 154"
        fill="none"
        stroke={C.waterDeep}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <ellipse cx="226" cy="124" rx="56" ry="13" fill={C.white} />
      <ellipse cx="226" cy="125" rx="50" ry="10.5" fill={VINEGAR} />
      <path
        d="M226 114.5 A50 10.5 0 0 1 226 135.5 A20 10.5 0 0 0 226 114.5 Z"
        fill={VINEGAR_DEEP}
        opacity="0.4"
      />
      <ellipse
        cx="206"
        cy="121"
        rx="18"
        ry="2.4"
        fill={C.white}
        opacity="0.7"
        className="sc sc-float"
      />
      {/* tỏi và ớt nổi trên mặt giấm */}
      <ellipse cx="236" cy="121" rx="6" ry="3.2" fill={GARLIC} />
      <ellipse cx="216" cy="130" rx="5.4" ry="3" fill={GARLIC} />
      <g className="sc sc-float" style={{ animationDelay: '-1.2s' }}>
        <ChiliSlice x={250} y={127} />
      </g>
      <ChiliSlice x={200} y={126} r={5} />
      <g className="sc sc-float" style={{ animationDelay: '-2.4s' }}>
        <ChiliSlice x={228} y={131} r={5.4} />
      </g>
      <Bubble x={220} y={124} r={1.8} />
      <Bubble x={244} y={122} r={1.5} delay={-1.6} />

      {/* thìa sứ gác bên chén */}
      <path d="M262 120 L302 96" stroke={C.white} strokeWidth="8" strokeLinecap="round" />
      <path d="M266 121 L302 99" stroke={C.metalLight} strokeWidth="3" strokeLinecap="round" />

      <Sparkle x={140} y={72} size={8} />
      <Sparkle x={76} y={84} size={6} delay={-1.1} />
      <Sparkle x={196} y={104} size={6} color={C.white} delay={-0.6} />
    </Scene>
  )
}
