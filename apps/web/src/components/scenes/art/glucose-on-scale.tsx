import { C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const WALL = '#FFE9D6'
const WALL_SHADE = '#FFD5B3'
const SCALE = '#F4F7FA'
const SCALE_SHADE = '#CBD5E0'
const LCD = '#BFE8C8'
const BOWL = '#6FB7E9'
const BOWL_DEEP = '#4A97CF'
const POWDER_SHADE = '#E4EAF1'
const BAG = '#FFC93C'
const BAG_DEEP = '#E0A100'

export function GlucoseOnScaleScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={156} tiles />

      {/* túi bột glucose */}
      <Shadow cx={276} cy={184} rx={34} ry={5} />
      <path
        d="M252 100 L256 92 H296 L300 100 V176 Q300 182 294 182 H258 Q252 182 252 176 Z"
        fill={BAG}
      />
      <path d="M278 92 H296 L300 100 V176 Q300 182 294 182 H278 Z" fill={BAG_DEEP} opacity="0.5" />
      <path d="M256 92 l5 -6 l5 6 l5 -6 l5 6 l5 -6 l5 6 l5 -6 l5 6 Z" fill={BAG_DEEP} />
      <rect x="258" y="116" width="36" height="40" rx="6" fill={C.white} />
      {/* chùm nho trên nhãn túi */}
      {[
        [270, 128],
        [279, 128],
        [274.5, 135],
        [283.5, 135],
        [279, 142],
        [270, 142],
        [274.5, 149],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4.6" fill={C.purple} />
      ))}
      <path
        d="M276 124 q2 -6 8 -6"
        fill="none"
        stroke={C.greenDeep}
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* chiếc thìa dính bột */}
      <Shadow cx={42} cy={188} rx={34} ry={4} />
      <path d="M14 188 L52 180" stroke={C.metal} strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="66" cy="178" rx="16" ry="8" fill={C.metal} transform="rotate(-10 66 178)" />
      <ellipse cx="66" cy="176" rx="11" ry="5" fill={C.white} transform="rotate(-10 66 176)" />

      {/* cân nhà bếp */}
      <Shadow cx={150} cy={188} rx={90} ry={7} />
      <rect x="68" y="150" width="164" height="38" rx="12" fill={SCALE_SHADE} />
      <rect x="68" y="150" width="164" height="30" rx="12" fill={SCALE} />
      <rect x="112" y="157" width="76" height="20" rx="5" fill={C.ink} />
      <rect x="115" y="160" width="70" height="14" rx="3" fill={LCD} />
      <text
        x="150"
        y="172"
        textAnchor="middle"
        fontSize="13"
        fontWeight="800"
        fill={C.ink}
        fontFamily="inherit"
      >
        180 g
      </text>
      <circle cx="88" cy="167" r="6" fill={C.green} />
      <circle cx="212" cy="167" r="6" fill={SCALE_SHADE} />
      {/* mặt cân */}
      <rect x="78" y="140" width="144" height="12" rx="6" fill={C.metalLight} />
      <rect x="78" y="146" width="144" height="6" rx="3" fill={C.metal} />

      {/* bát bột glucose */}
      <path d="M96 100 Q98 140 130 140 H170 Q202 140 204 100 Z" fill={BOWL} />
      <path d="M150 100 H204 Q202 140 170 140 H150 Z" fill={BOWL_DEEP} opacity="0.55" />
      <ellipse cx="150" cy="100" rx="54" ry="9" fill={BOWL_DEEP} />
      <path d="M102 100 Q118 76 150 72 Q182 76 198 100 Q150 110 102 100 Z" fill={C.white} />
      <path d="M150 72 Q182 76 198 100 Q176 105 156 105 Q172 90 150 72 Z" fill={POWDER_SHADE} />
      <path
        d="M104 112 Q108 128 122 134"
        fill="none"
        stroke={C.white}
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <Sparkle x={132} y={84} size={5} />
      <Sparkle x={170} y={90} size={4} delay={-0.9} />
      <Sparkle x={150} y={66} size={4} delay={-1.6} />
    </Scene>
  )
}
