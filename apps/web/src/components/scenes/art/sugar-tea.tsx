import { Bubble, C, IndoorBg, Scene, type SceneProps, Shadow, Steam } from '../kit'

const WALL = '#DDD0F3'
const WALL_SHADE = '#CBB9EA'
const TEA = '#F4A64E'
const TEA_DEEP = '#D27C2B'
const BOWL_DEEP = '#E8668F'
const SUGAR_SHADE = '#D5E0EC'
/** Hạt đường li ti đang tan ra quanh viên đường: [x, y] */
const DUST = [
  [126, 150],
  [130, 142],
  [136, 154],
  [142, 146],
  [147, 138],
  [166, 144],
  [171, 152],
  [158, 136],
  [172, 132],
  [118, 136],
] as const
const LIQUID = 'V154 Q180 164 170 164 H110 Q100 164 100 154'

/** Viên đường vuông: mặt sáng và một mảng tối bên phải. */
function Sugar({ x, y, s = 14, rot = 0 }: { x: number; y: number; s?: number; rot?: number }) {
  return (
    <g transform={`rotate(${rot} ${x + s / 2} ${y + s / 2})`}>
      <rect x={x} y={y} width={s} height={s} rx="3" fill={C.white} />
      <path
        d={`M${x + s * 0.62} ${y} h${s * 0.38 - 3} q3 0 3 3 v${s - 6} q0 3 -3 3 h${-s * 0.38 + 3} Z`}
        fill={SUGAR_SHADE}
      />
    </g>
  )
}

export function SugarTeaScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={150} />

      {/* hũ đường */}
      <Shadow cx={242} cy={175} rx={40} ry={5} />
      <ellipse cx="240" cy="134" rx="34" ry="6" fill={BOWL_DEEP} />
      <Sugar x={216} y={120} rot={-10} />
      <Sugar x={248} y={121} rot={-6} />
      <Sugar x={232} y={116} s={15} rot={8} />
      <Sugar x={226} y={104} rot={16} />
      <Sugar x={243} y={103} s={13} rot={-12} />
      <path d="M206 134 Q240 144 274 134 Q274 160 257 170 H223 Q206 160 206 134 Z" fill={C.pink} />
      <path d="M240 139 Q262 138 274 134 Q274 160 257 170 H240 Z" fill={BOWL_DEEP} opacity="0.55" />
      <rect x="224" y="168" width="32" height="7" rx="3" fill={BOWL_DEEP} />
      <path
        d="M214 144 Q216 156 224 162"
        fill="none"
        stroke={C.white}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.6"
      />
      <Sugar x={190} y={177} s={13} rot={-14} />

      {/* đế lót */}
      <ellipse cx="140" cy="169" rx="54" ry="9" fill={C.woodDeep} />
      <Shadow cx={146} cy={170} rx={46} ry={6} />

      {/* trà */}
      <path d={`M100 72 H180 ${LIQUID} Z`} fill={TEA} />
      <ellipse cx="140" cy="72" rx="40" ry="5.5" fill={TEA_DEEP} />
      <ellipse cx="130" cy="71" rx="18" ry="2.2" fill={C.white} opacity="0.5" />

      {/* thìa đang khuấy */}
      <g className="sc sc-sway" style={{ animationDuration: '1.3s' }}>
        <path d="M134 146 L186 28" stroke={C.metal} strokeWidth="6" strokeLinecap="round" />
        <path d="M150 104 L184 28" stroke={C.metalLight} strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="132" cy="150" rx="8" ry="12" fill={C.metal} transform="rotate(24 132 150)" />
      </g>
      <path d={`M100 72 Q140 84 180 72 ${LIQUID} Z`} fill={TEA} opacity="0.62" />
      <path d="M140 78 Q166 77 180 72 V154 Q180 164 170 164 H140 Z" fill={TEA_DEEP} opacity="0.3" />

      {/* vệt xoáy do khuấy */}
      <path
        d="M110 96 Q140 108 170 96 M120 114 Q140 121 160 114"
        fill="none"
        stroke={C.white}
        strokeWidth="2.6"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* đường đang tan */}
      <ellipse cx="140" cy="158" rx="36" ry="6" fill={C.white} opacity="0.3" />
      <Sugar x={108} y={143} rot={-12} />
      <g opacity="0.75">
        <Sugar x={152} y={148} s={11} rot={18} />
        <g className="sc sc-float" style={{ animationDelay: '-1s' }}>
          <Sugar x={160} y={124} s={8} rot={28} />
        </g>
      </g>
      <g fill={C.white} opacity="0.8">
        {DUST.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 2 ? 1.3 : 1.8} />
        ))}
      </g>
      <Bubble x={122} y={138} r={1.8} delay={0} />
      <Bubble x={150} y={142} r={2.2} delay={-1.2} />
      <Bubble x={168} y={140} r={1.6} delay={-2.1} />
      <Bubble x={112} y={134} r={1.5} delay={-2.7} />

      {/* cốc thuỷ tinh có quai */}
      <path
        d="M96 90 C62 90 62 142 96 142"
        fill="none"
        stroke={C.white}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M96 54 V156 Q96 168 108 168 H172 Q184 168 184 156 V54 Z"
        fill={C.glass}
        opacity="0.12"
      />
      <path
        d="M96 54 V156 Q96 168 108 168 H172 Q184 168 184 156 V54"
        fill="none"
        stroke={C.white}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <ellipse cx="140" cy="54" rx="44" ry="6" fill="none" stroke={C.white} strokeWidth="3" />
      <path d="M106 66 V148" stroke={C.white} strokeWidth="5" strokeLinecap="round" opacity="0.6" />

      <Steam x={124} y={60} />
      <Steam x={150} y={56} delay={-1.7} />
    </Scene>
  )
}
