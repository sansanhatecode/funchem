import { C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const WALL = '#FDEFD8'
const WALL_SHADE = '#F8DDB2'
const SYRUP = '#FFD98A'
const SYRUP_DEEP = '#F2B84B'
const CRYSTAL = '#FFF6DC'
const CRYSTAL_SHADE = '#F3D58E'
const CRYSTAL_LIGHT = '#FFFFFF'
const PLATE = '#FFFFFF'
const PLATE_SHADE = '#D9E4EE'
const JAR = 'M100 46 V150 Q100 168 118 168 H194 Q212 168 212 150 V46'

/** Một viên đường phèn nhiều cạnh. */
function Crystal({ x, y, s = 1, r = 0 }: { x: number; y: number; s?: number; r?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <path d="M-10 -4 L-3 -12 L8 -9 L12 2 L5 11 L-7 9 Z" fill={CRYSTAL} />
      <path d="M8 -9 L12 2 L5 11 L1 0 Z" fill={CRYSTAL_SHADE} />
      <path d="M-10 -4 L-3 -12 L8 -9 L1 0 Z" fill={CRYSTAL_LIGHT} />
    </g>
  )
}

export function RockSugarScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={150} />

      {/* đĩa đường phèn đã lấy ra */}
      <Shadow cx={262} cy={180} rx={46} ry={5} />
      <ellipse cx="262" cy="174" rx="44" ry="10" fill={PLATE_SHADE} />
      <ellipse cx="262" cy="171" rx="44" ry="10" fill={PLATE} />
      <Crystal x={246} y={160} s={1.2} r={-10} />
      <Crystal x={272} y={156} s={1.5} r={25} />
      <Crystal x={284} y={168} s={0.9} r={60} />
      <Crystal x={258} y={170} s={0.8} r={110} />

      {/* hũ nước đường */}
      <Shadow cx={156} cy={172} rx={66} ry={7} />
      <path d="M104 64 H208 V150 Q208 164 194 164 H118 Q104 164 104 150 Z" fill={SYRUP} />
      <path d="M156 64 H208 V150 Q208 164 194 164 H156 Z" fill={SYRUP_DEEP} opacity="0.45" />
      <ellipse cx="156" cy="64" rx="52" ry="6" fill={SYRUP_DEEP} />

      {/* chiếc đũa gác ngang miệng hũ, buộc sợi chỉ */}
      <path d="M156 38 V132" stroke={C.white} strokeWidth="1.6" />
      {/* chùm tinh thể đường bám quanh sợi chỉ */}
      <g className="sc sc-float">
        <Crystal x={156} y={84} s={1} r={10} />
        <Crystal x={148} y={100} s={1.4} r={-20} />
        <Crystal x={166} y={104} s={1.3} r={40} />
        <Crystal x={156} y={120} s={1.7} r={75} />
        <Crystal x={142} y={124} s={1} r={130} />
        <Crystal x={170} y={126} s={1.1} r={-60} />
        <Crystal x={156} y={138} s={1.2} r={15} />
      </g>
      <Sparkle x={138} y={96} size={6} delay={0} />
      <Sparkle x={178} y={114} size={5} delay={-0.8} />
      <Sparkle x={150} y={142} size={4} delay={-1.5} />

      {/* thành hũ */}
      <path d={`${JAR} Z`} fill={C.glass} opacity="0.14" />
      <path d={JAR} fill="none" stroke={C.white} strokeWidth="3.5" strokeLinejoin="round" />
      <ellipse cx="156" cy="46" rx="56" ry="7" fill="none" stroke={C.white} strokeWidth="3.5" />
      <path d="M112 60 V140" stroke={C.white} strokeWidth="5" strokeLinecap="round" opacity="0.6" />
      <rect x="84" y="33" width="144" height="7" rx="3.5" fill={C.woodDeep} />
      <rect x="84" y="33" width="144" height="3" rx="1.5" fill={C.wood} />
    </Scene>
  )
}
