import { C, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

const SHELL = '#F6E3CC'
const SHELL_DEEP = '#DFC3A2'
const BOWL = '#8EC5E8'
const BOWL_DEEP = '#5FA3CF'
const WHITE_BAD = '#D9DDB4'
const YOLK_BAD = '#8E9A3A'
const YOLK_BAD_DEEP = '#6C7727'
const STINK = '#8DA63A'

/** Làn mùi uốn lượn bốc lên. */
function Stink({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <path
      d={`M${x} ${y} q-8 -9 0 -18 q8 -9 0 -18 q-8 -9 0 -18`}
      fill="none"
      stroke={STINK}
      strokeWidth="4.5"
      strokeLinecap="round"
      opacity="0.8"
      className="sc sc-rise"
      style={{ animationDelay: `${delay}s`, animationDuration: '3.8s' }}
    />
  )
}

/** Quả trứng hỏng vừa đập ra bát, bốc mùi, cạnh mấy quả trứng còn nguyên. */
export function RottenEggScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={C.wallCool} wallShade={C.wallCoolShade} tableY={138} tiles />

      {/* khay trứng còn nguyên phía sau */}
      <Shadow cx={262} cy={160} rx={46} ry={6} />
      <ellipse cx="240" cy="132" rx="15" ry="20" fill={SHELL} />
      <ellipse cx="274" cy="132" rx="15" ry="20" fill={SHELL} />
      <path d="M246 114 Q256 130 244 151 Q258 146 255 128 Q253 118 246 114 Z" fill={SHELL_DEEP} />
      <path d="M280 114 Q290 130 278 151 Q292 146 289 128 Q287 118 280 114 Z" fill={SHELL_DEEP} />
      <path d="M216 140 H298 L292 160 H222 Z" fill={C.woodDeep} />
      <path d="M216 140 H298 L296 147 H218 Z" fill={C.woodDark} opacity="0.5" />

      {/* hai nửa vỏ trứng vừa đập */}
      <Shadow cx={62} cy={170} rx={36} ry={5} />
      <path
        d="M30 164 Q30 142 44 142 L48 150 L54 142 L58 152 L62 144 Q70 150 68 164 Q60 172 48 172 Q36 172 30 164 Z"
        fill={SHELL}
      />
      <path d="M52 172 Q66 170 68 164 Q70 152 62 144 Q64 162 52 172 Z" fill={SHELL_DEEP} />
      <path
        d="M70 172 Q66 156 78 150 L82 158 L88 150 L92 160 L98 154 Q104 164 98 174 Q84 180 70 172 Z"
        fill={SHELL}
      />

      {/* cái bát đựng quả trứng hỏng */}
      <Shadow cx={160} cy={184} rx={74} ry={8} />
      <path d="M88 132 Q90 182 160 182 Q230 182 232 132 Z" fill={BOWL} />
      <path d="M176 132 H232 Q230 182 160 182 Q210 172 176 132 Z" fill={BOWL_DEEP} opacity="0.6" />
      <ellipse cx="160" cy="132" rx="72" ry="16" fill={C.white} />
      <ellipse cx="160" cy="133" rx="64" ry="12" fill={BOWL_DEEP} opacity="0.35" />
      {/* lòng trắng ngả màu, lòng đỏ xám xanh */}
      <path
        d="M106 134 Q110 124 136 126 Q160 118 188 126 Q214 126 214 136 Q206 146 170 144 Q130 148 106 134 Z"
        fill={WHITE_BAD}
      />
      <ellipse cx="160" cy="134" rx="22" ry="8.5" fill={YOLK_BAD} />
      <path d="M160 142.5 A22 8.5 0 0 0 182 134 A28 12 0 0 1 160 142.5 Z" fill={YOLK_BAD_DEEP} />
      <ellipse cx="152" cy="131" rx="6" ry="2" fill={C.white} opacity="0.4" />
      <circle cx="128" cy="134" r="2.4" fill={YOLK_BAD} opacity="0.7" />
      <circle cx="194" cy="136" r="2" fill={YOLK_BAD} opacity="0.7" />

      {/* mùi bốc lên */}
      <Stink x={130} y={116} delay={0} />
      <Stink x={160} y={110} delay={-1.3} />
      <Stink x={190} y={116} delay={-2.5} />

      {/* con ruồi bay vòng quanh */}
      <g className="sc sc-float" style={{ animationDuration: '2.2s' }}>
        <ellipse cx="226" cy="74" rx="5" ry="3.6" fill={C.ink} />
        <ellipse cx="222" cy="69" rx="5" ry="2.6" fill={C.white} opacity="0.8" />
        <ellipse cx="230" cy="69" rx="5" ry="2.6" fill={C.white} opacity="0.8" />
      </g>
      <path
        d="M236 78 Q250 86 244 98"
        fill="none"
        stroke={C.inkSoft}
        strokeWidth="1.6"
        strokeDasharray="3 4"
        strokeLinecap="round"
        opacity="0.6"
      />
    </Scene>
  )
}
