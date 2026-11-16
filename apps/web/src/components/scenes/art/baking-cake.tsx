import { C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle, Steam } from '../kit'

const TOP = '#E9A44C'
const TOP_LIGHT = '#F6C67A'
const SIDE = '#D98E3B'
const SIDE_DEEP = '#B86F26'
const CRUMB = '#FFEBAE'
const CRUMB_DEEP = '#F3CF78'
const HOLE = '#E9B955'
/** Lỗ khí li ti trên mặt cắt của bánh: [x, y, rx, ry]. */
const HOLES = [
  [198, 112, 4, 3],
  [214, 107, 2.6, 2],
  [227, 118, 5, 3.6],
  [243, 110, 3, 2.4],
  [206, 128, 3.2, 2.4],
  [221, 139, 4.6, 3.2],
  [239, 131, 3.6, 2.6],
  [246, 149, 2.6, 2],
  [196, 145, 3.6, 2.6],
  [232, 153, 2.4, 1.8],
  [210, 152, 2.2, 1.6],
  [236, 142, 1.6, 1.3],
  [203, 119, 1.6, 1.3],
  [217, 124, 1.8, 1.4],
  [248, 123, 1.6, 1.3],
  [192, 131, 1.6, 1.3],
  [224, 150, 1.5, 1.2],
  [177, 128, 2, 3],
  [178, 150, 1.8, 2.6],
]

export function BakingCakeScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall="#DCEFFB" wallShade="#C3E1F6" tableY={150} tiles />
      {/* giá treo găng lò nướng và cây đánh trứng */}
      <rect x="16" y="22" width="92" height="5" rx="2.5" fill={C.metalDark} />
      <path
        d="M40 27 v10 M84 27 v16"
        stroke={C.metalDark}
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <rect x="27" y="36" width="26" height="40" rx="12" fill={C.pink} />
      <ellipse cx="55" cy="60" rx="7" ry="10" fill={C.pink} transform="rotate(-24 55 60)" />
      <rect x="27" y="36" width="26" height="9" rx="4.5" fill={C.white} />
      <path
        d="M84 42 q-13 18 0 30 q13 -12 0 -30 M84 42 q-5 18 0 30 q5 -12 0 -30"
        fill="none"
        stroke={C.metalDark}
        strokeWidth="2.2"
      />

      {/* hộp bột nở */}
      <Shadow cx={58} cy={163} rx={36} ry={5} />
      <rect x="28" y="98" width="56" height="64" rx="5" fill={C.red} />
      <rect x="64" y="98" width="20" height="64" rx="5" fill={C.redDeep} opacity="0.6" />
      <path d="M28 100 L36 86 H78 L84 100 Z" fill={C.pink} />
      <circle cx="54" cy="132" r="15" fill={C.white} />
      <path d="M54 121 q2 9 11 11 q-9 2 -11 11 q-2 -9 -11 -11 q9 -2 11 -11 Z" fill={C.gold} />

      {/* đĩa và bánh bông lan */}
      <g transform="translate(12 0)">
        <Shadow cx={188} cy={180} rx={96} ry={7} />
        <ellipse cx="184" cy="166" rx="94" ry="17" fill={C.metalLight} />
        <ellipse cx="184" cy="163" rx="94" ry="16" fill={C.white} />
        <path d="M112 96 V158 A72 16 0 0 0 256 158 V96 Z" fill={SIDE} />
        <path
          d="M112 148 A72 16 0 0 0 256 148 V158 A72 16 0 0 1 112 158 Z"
          fill={SIDE_DEEP}
          opacity="0.5"
        />
        <rect x="120" y="112" width="6" height="42" rx="3" fill={C.white} opacity="0.35" />
        <ellipse cx="184" cy="96" rx="72" ry="16" fill={TOP} />
        <ellipse cx="158" cy="91" rx="34" ry="6" fill={TOP_LIGHT} opacity="0.8" />

        {/* miếng bánh đã cắt đi, lộ ruột bánh xốp */}
        <path d="M184 96 L254.4 99.3 V161.3 A72 16 0 0 1 171.5 173.8 V111.8 Z" fill={C.white} />
        <path d="M184 158 L254.4 161.3 A72 16 0 0 1 171.5 173.8 Z" fill={C.shadow} />
        <path d="M184 96 L254.4 99.3 V161.3 L184 158 Z" fill={CRUMB} />
        <path d="M184 96 L171.5 111.8 V173.8 L184 158 Z" fill={CRUMB_DEEP} />
        {HOLES.map(([x, y, rx, ry]) => (
          <ellipse key={`${x}-${y}`} cx={x} cy={y} rx={rx} ry={ry} fill={HOLE} />
        ))}
        <path
          d="M171.5 173.8 V111.8 L184 96 L254.4 99.3 V161.3"
          fill="none"
          stroke={SIDE}
          strokeWidth="3.4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        <Steam x={150} y={74} />
        <Steam x={186} y={66} delay={-1.2} />
        <Steam x={222} y={76} delay={-2.3} />
      </g>

      {/* thìa bột nở trắng */}
      <g transform="translate(12 0)">
        <Shadow cx={70} cy={191} rx={36} ry={4} />
        <path d="M16 191 L56 185" stroke={C.metal} strokeWidth="5.5" strokeLinecap="round" />
        <ellipse cx="74" cy="185" rx="20" ry="7.5" fill={C.metal} />
        <ellipse cx="74" cy="184" rx="16" ry="5.4" fill={C.metalLight} />
        <path d="M58 184 Q74 158 90 184 Q74 188.5 58 184 Z" fill={C.white} />
        <path d="M82 175 Q88 179 90 184 Q85 186.5 79 187 Q84 181 82 175 Z" fill={C.metalLight} />
        <circle cx="101" cy="189" r="1.8" fill={C.white} />
        <circle cx="108" cy="183" r="1.4" fill={C.white} />
        <circle cx="46" cy="196" r="1.6" fill={C.white} />
        <Sparkle x={96} y={166} size={5} color={C.gold} delay={-0.6} />
      </g>
    </Scene>
  )
}
