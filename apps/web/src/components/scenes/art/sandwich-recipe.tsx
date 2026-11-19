import { C, IndoorBg, Scene, type SceneProps, Shadow, Steam } from '../kit'

const WALL = '#E2F4EC'
const WALL_SHADE = '#C6E8D8'
const BOARD = '#EBC592'
const BOARD_DEEP = '#C99A5E'
const CRUST = '#C98B4A'
const CRUMB = '#FBE6BE'
const CRUMB_SHADE = '#F0D09A'
const YOLK = '#FFB52E'
const YOLK_LIGHT = '#FFD98A'
const EGG_SHADE = '#DCE5EE'
const SLICE = 'M-22 -10 Q-26 -24 -12 -24 H12 Q26 -24 22 -10 V20 Q22 24 18 24 H-18 Q-22 24 -22 20 Z'

/** Một lát bánh mì gối nhìn thẳng, tâm ở (x, y). */
function Bread({ x, y, rotate = 0 }: { x: number; y: number; rotate?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <path d={SLICE} fill={CRUST} stroke={CRUST} strokeWidth="5" strokeLinejoin="round" />
      <path d={SLICE} fill={CRUMB} />
      <path
        d="M2 -24 H12 Q26 -24 22 -10 V20 Q22 24 18 24 H8 Q16 0 2 -24 Z"
        fill={CRUMB_SHADE}
        opacity="0.7"
      />
    </g>
  )
}

export function SandwichRecipeScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={56} tiles />

      {/* thớt gỗ lớn */}
      <Shadow cx={160} cy={180} rx={150} ry={8} />
      <rect x="10" y="64" width="300" height="114" rx="16" fill={BOARD_DEEP} />
      <rect x="10" y="60" width="300" height="112" rx="16" fill={BOARD} />
      <circle cx="292" cy="78" r="6" fill={BOARD_DEEP} />
      <path
        d="M30 150 Q120 142 200 152"
        fill="none"
        stroke={BOARD_DEEP}
        strokeWidth="2"
        opacity="0.4"
      />

      {/* hai lát bánh mì */}
      <Bread x={46} y={112} rotate={-8} />
      <Bread x={74} y={120} rotate={7} />

      {/* dấu cộng */}
      <path d="M108 116 H124 M116 108 V124" stroke={C.ink} strokeWidth="5" strokeLinecap="round" />

      {/* một quả trứng ốp la */}
      <path
        d="M134 116 C130 102 146 96 156 100 C166 92 184 98 184 110 C192 120 182 134 170 132 C160 140 142 136 140 128 C134 126 132 122 134 116 Z"
        fill={EGG_SHADE}
        transform="translate(0 2.5)"
      />
      <path
        d="M134 116 C130 102 146 96 156 100 C166 92 184 98 184 110 C192 120 182 134 170 132 C160 140 142 136 140 128 C134 126 132 122 134 116 Z"
        fill={C.white}
      />
      <circle cx="160" cy="115" r="11" fill={YOLK} />
      <circle cx="156.5" cy="111.5" r="3.6" fill={YOLK_LIGHT} />

      {/* mũi tên của công thức */}
      <path
        d="M198 116 H222 M214 107 L223 116 L214 125"
        fill="none"
        stroke={C.ink}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* chiếc bánh kẹp hoàn chỉnh */}
      <g className="sc sc-float">
        <rect x="236" y="124" width="58" height="14" rx="6" fill={CRUST} />
        <rect x="239" y="124" width="52" height="10" rx="5" fill={CRUMB} />
        <path
          d="M232 124 Q240 114 250 122 Q258 112 268 122 Q278 113 286 122 Q294 116 298 124 Z"
          fill={C.green}
        />
        <path d="M238 118 Q252 104 266 110 Q282 104 292 118 Q266 126 238 118 Z" fill={C.white} />
        <ellipse cx="266" cy="113" rx="11" ry="4.5" fill={YOLK} />
        <rect x="236" y="94" width="58" height="15" rx="6" fill={CRUST} />
        <rect x="239" y="97" width="52" height="10" rx="5" fill={CRUMB} />
        <rect x="268" y="97" width="23" height="10" rx="5" fill={CRUMB_SHADE} opacity="0.7" />
      </g>
      <Steam x={258} y={80} />
      <Steam x={276} y={78} delay={-1.5} />
    </Scene>
  )
}
