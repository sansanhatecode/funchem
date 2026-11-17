import { C, IndoorBg, Scene, type SceneProps, Shadow, Steam } from '../kit'

const WALL = '#CFEBDD'
const WALL_SHADE = '#B3DEC8'
const BOWL = '#4F9BE0'
const BOWL_DEEP = '#2F78C2'
const BOWL_LIGHT = '#8CC3F2'
const RICE_SHADE = '#DDE6EF'
const GRAIN_LINE = '#C5D2DF'
/** Hạt cơm trên mặt bát: [x, y, góc xoay]. */
const GRAINS = [
  [118, 96, -20],
  [136, 84, 12],
  [156, 76, -8],
  [176, 78, 24],
  [196, 88, -16],
  [208, 100, 10],
  [128, 104, 30],
  [148, 94, -28],
  [168, 92, 6],
  [188, 102, -4],
  [142, 108, 14],
  [164, 106, -18],
  [182, 112, 22],
  [112, 110, 4],
  [158, 64, 18],
  [144, 70, -32],
  [174, 66, -10],
] as const

export function RiceBowlScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={146} />

      {/* đôi đũa gác bên phải */}
      <Shadow cx={270} cy={182} rx={36} ry={4} />
      <path d="M236 186 L306 150" stroke={C.woodDark} strokeWidth="5" strokeLinecap="round" />
      <path d="M244 192 L310 162" stroke={C.woodDeep} strokeWidth="5" strokeLinecap="round" />
      <rect x="252" y="176" width="26" height="12" rx="5" fill={C.red} />

      {/* đĩa lót */}
      <Shadow cx={162} cy={182} rx={104} ry={8} />
      <ellipse cx="160" cy="174" rx="92" ry="12" fill={C.white} />
      <ellipse cx="160" cy="172" rx="66" ry="7" fill={RICE_SHADE} />

      {/* lòng bát phía sau */}
      <ellipse cx="160" cy="114" rx="82" ry="11" fill={BOWL_DEEP} />

      {/* cơm đắp ngọn trong bát */}
      <path d="M86 116 Q92 60 160 54 Q228 60 234 116 V128 H86 Z" fill={C.white} />
      <path
        d="M160 54 Q228 60 234 116 V128 H176 V116 Q204 92 160 54 Z"
        fill={RICE_SHADE}
        opacity="0.8"
      />
      {GRAINS.map(([x, y, rot], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="8"
          ry="4"
          fill={C.white}
          stroke={GRAIN_LINE}
          strokeWidth="1.4"
          transform={`rotate(${rot} ${x} ${y})`}
        />
      ))}

      {/* bát sứ xanh */}
      <path d="M78 114 Q160 136 242 114 Q240 158 194 168 H126 Q80 158 78 114 Z" fill={BOWL} />
      <path d="M160 125 Q204 124 242 114 Q240 158 194 168 H160 Z" fill={BOWL_DEEP} opacity="0.55" />
      <path
        d="M78 114 Q160 136 242 114"
        fill="none"
        stroke={BOWL_LIGHT}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M86 136 Q160 156 234 136"
        fill="none"
        stroke={C.white}
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M98 151 Q160 166 222 151"
        fill="none"
        stroke={BOWL_LIGHT}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="130" y="166" width="60" height="9" rx="4" fill={BOWL_DEEP} />

      {/* hơi nóng bốc lên */}
      <Steam x={132} y={56} />
      <Steam x={160} y={46} delay={-1.2} />
      <Steam x={188} y={56} delay={-2.4} />
    </Scene>
  )
}
