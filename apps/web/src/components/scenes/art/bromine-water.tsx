import { useId } from 'react'
import { Bubble, C, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

const BROMINE = '#F2A23A'
const BROMINE_DEEP = '#DE8420'
const FADED = '#F1F8F2'
const FADED_DEEP = '#DDECE6'
const TUBE = '#9FB4C8'
const STOPPER = '#B5642B'
/** Bình tam giác: gốc (0,0) ở giữa đáy, cao 92. */
const FLASK = 'M-13 -92 H13 V-58 L40 -8 Q44 0 34 0 H-34 Q-44 0 -40 -8 L-13 -58 Z'

function Flask({
  x,
  liquid,
  liquidDeep,
  label,
  delay,
}: {
  x: number
  liquid: string
  liquidDeep: string
  label: string
  delay: number
}) {
  const clip = useId()
  return (
    <g transform={`translate(${x} 176)`}>
      <clipPath id={clip}>
        <path d={FLASK} />
      </clipPath>
      <path d={FLASK} fill={C.glass} />
      <g clipPath={`url(#${clip})`}>
        <rect x="-46" y="-50" width="92" height="52" fill={liquid} />
        <rect x="0" y="-50" width="46" height="52" fill={liquidDeep} opacity="0.55" />
        <rect x="-46" y="-50" width="92" height="4" fill={C.white} opacity="0.45" />
      </g>
      {/* ống dẫn khí cắm tới gần đáy */}
      <path
        d="M-56 -128 H-6 Q0 -128 0 -122 V-14"
        fill="none"
        stroke={TUBE}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="-15" y="-100" width="30" height="12" rx="4" fill={STOPPER} />
      <path
        d="M-30 -22 L-14 -54"
        stroke={C.white}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* bọt khí sủi lên từ đầu ống */}
      <Bubble x={-6} y={-12} r={3} delay={delay} duration={1.8} />
      <Bubble x={7} y={-14} r={2.4} delay={delay - 0.6} duration={2.1} />
      <Bubble x={0} y={-18} r={2} delay={delay - 1.2} duration={1.6} />
      {/* nhãn trên bình khí */}
      <rect x="-86" y="-140" width="34" height="24" rx="6" fill={C.white} />
      <text
        x="-69"
        y="-123.5"
        textAnchor="middle"
        fontSize="11"
        fontWeight="800"
        fill={C.ink}
        fontFamily="inherit"
      >
        {label}
      </text>
    </g>
  )
}

export function BromineWaterScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={C.wallCool} wallShade={C.wallCoolShade} tableY={160} tiles />
      <Shadow cx={108} cy={180} rx={50} ry={6} />
      <Shadow cx={250} cy={180} rx={50} ry={6} />

      {/* bình bên trái: methane sục qua, nước bromine vẫn vàng cam */}
      <Flask x={108} liquid={BROMINE} liquidDeep={BROMINE_DEEP} label="CH₄" delay={0} />
      {/* bình bên phải: ethylene sục qua, nước bromine đã mất màu */}
      <Flask x={250} liquid={FADED} liquidDeep={FADED_DEEP} label="C₂H₄" delay={-0.9} />
    </Scene>
  )
}
