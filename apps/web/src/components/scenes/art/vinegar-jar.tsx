import { useId } from 'react'
import { Bubble, C, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

const WALL = '#FBEBD0'
const WALL_SHADE = '#F3D5A4'
const VINEGAR = '#F3D27A'
const VINEGAR_DEEP = '#E3B552'
const MOTHER = '#FBF3E2'
const MOTHER_DEEP = '#E8DAC0'
const CLOTH = '#FFFFFF'
const CLOTH_LINE = '#F25F5C'
const WINE = '#EAF4EE'
/** Hũ thuỷ tinh miệng rộng: gốc (0,0) ở giữa đáy, cao 112. */
const JAR =
  'M-36 -112 H36 V-98 Q58 -90 58 -64 V-12 Q58 0 46 0 H-46 Q-58 0 -58 -12 V-64 Q-58 -90 -36 -98 Z'

export function VinegarJarScene(props: SceneProps) {
  const clip = useId()
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={156} />

      {/* chai rượu trắng và chén nhỏ bên cạnh */}
      <Shadow cx={264} cy={184} rx={36} ry={5} />
      <path
        d="M252 96 H268 V116 Q282 122 282 138 V174 Q282 182 274 182 H246 Q238 182 238 174 V138 Q238 122 252 116 Z"
        fill={WINE}
      />
      <path d="M238 146 H282 V174 Q282 182 274 182 H246 Q238 182 238 174 Z" fill={C.glass} />
      <rect x="250" y="88" width="20" height="10" rx="3" fill={C.woodDeep} />
      <rect x="243" y="140" width="34" height="22" rx="4" fill={C.white} />
      <rect x="248" y="146" width="24" height="4" rx="2" fill={C.red} />
      <rect x="248" y="153" width="16" height="3" rx="1.5" fill={C.inkSoft} opacity="0.6" />
      <path d="M296 170 H316 L312 184 H300 Z" fill={C.white} />

      {/* hũ giấm nuôi */}
      <Shadow cx={140} cy={184} rx={74} ry={7} />
      <g transform="translate(140 180)">
        <clipPath id={clip}>
          <path d={JAR} />
        </clipPath>
        <path d={JAR} fill={C.glass} />
        <g clipPath={`url(#${clip})`}>
          <rect x="-60" y="-78" width="120" height="80" fill={VINEGAR} />
          <rect x="0" y="-78" width="60" height="80" fill={VINEGAR_DEEP} opacity="0.6" />
          {/* con giấm: lớp màng trắng đục nổi trên mặt */}
          <g className="sc sc-float">
            <path
              d="M-60 -82 Q-30 -88 0 -82 Q30 -76 60 -82 V-70 Q30 -64 0 -70 Q-30 -76 -60 -70 Z"
              fill={MOTHER}
            />
            <path
              d="M-60 -74 Q-30 -80 0 -74 Q30 -68 60 -74 V-70 Q30 -64 0 -70 Q-30 -76 -60 -70 Z"
              fill={MOTHER_DEEP}
            />
          </g>
        </g>
        <path
          d="M-48 -62 V-18"
          stroke={C.white}
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.75"
        />
        <Bubble x={-14} y={-18} r={2.2} color={MOTHER} duration={3.4} />
        <Bubble x={20} y={-26} r={1.8} color={MOTHER} delay={-1.6} duration={3.8} />

        {/* miếng vải thưa đậy miệng hũ, buộc dây */}
        <path
          d="M-46 -116 Q0 -128 46 -116 L56 -88 Q44 -94 34 -86 Q22 -94 12 -86 Q0 -94 -12 -86 Q-22 -94 -34 -86 Q-44 -94 -56 -88 Z"
          fill={CLOTH}
        />
        <g stroke={CLOTH_LINE} strokeWidth="1.6" opacity="0.7">
          <path d="M-30 -120 L-38 -92 M-10 -122 L-13 -90 M10 -122 L13 -90 M30 -120 L38 -92" />
          <path d="M-46 -108 Q0 -118 46 -108" fill="none" />
        </g>
        <path
          d="M-40 -100 Q0 -108 40 -100"
          fill="none"
          stroke={C.woodDark}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M40 -100 q8 4 6 12"
          fill="none"
          stroke={C.woodDark}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </g>

      {/* không khí đi qua lớp vải vào hũ */}
      <g fill={C.waterDeep} opacity="0.55" className="sc sc-float">
        <circle cx="112" cy="46" r="3" />
        <circle cx="140" cy="38" r="2.6" />
        <circle cx="168" cy="46" r="3" />
      </g>
    </Scene>
  )
}
