import { useId } from 'react'
import { C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const BAG = C.purple
const BAG_DEEP = '#7658C6'
const BODY = 'M-50 -62 C-71 -30 -71 30 -50 62 H50 C71 30 71 -30 50 -62 Z'
/** Mép hàn răng cưa ở hai đầu gói. */
const crimp = (y: number, d: number) =>
  `M-54 ${y} L${Array.from({ length: 21 }, (_, i) => `${-54 + i * 5.4} ${y + d * (i % 2 ? 18 : 14)}`).join(' L')} L54 ${y} Z`
const ridges = (y: number, d: number) =>
  Array.from({ length: 9 }, (_, i) => `M${-44 + i * 11} ${y + d * 3} v${d * 9}`).join(' ')

/** Miếng khoai tây chiên lượn sóng. */
function Crisp({ x, y, rot, s = 1 }: { x: number; y: number; rot: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <ellipse rx="16" ry="9.5" fill={C.gold} />
      <path d="M-15 2 Q0 12 15 2 Q10 9.5 0 9.5 Q-10 9.5 -15 2 Z" fill={C.goldDeep} opacity="0.7" />
      <path
        d="M-9 -3 Q-4 -7 2 -4 M4 1 Q8 -2 11 0"
        fill="none"
        stroke={C.yellow}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </g>
  )
}

export function SnackBagScene(props: SceneProps) {
  const clip = useId()
  return (
    <Scene {...props}>
      <IndoorBg wall="#FBEFF4" wallShade="#F3D9E4" tableY={148} />
      <Shadow cx={166} cy={183} rx={64} ry={7} />
      <Crisp x={84} y={172} rot={-18} />
      <Crisp x={246} y={158} rot={14} s={0.9} />

      <g transform="translate(158 102)">
        <g className="sc sc-sway" style={{ animationDuration: '4.8s' }}>
          <g transform="rotate(-6)">
            <path d={crimp(-60, -1)} fill={BAG_DEEP} />
            <path d={crimp(60, 1)} fill={BAG_DEEP} />
            <path
              d={`${ridges(-60, -1)} ${ridges(60, 1)}`}
              stroke={BAG}
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <clipPath id={clip}>
              <path d={BODY} />
            </clipPath>
            <path d={BODY} fill={BAG} />
            <g clipPath={`url(#${clip})`}>
              {/* hoạ tiết trừu tượng */}
              <path
                d="M-66 34 C-38 14 -14 50 12 34 S48 20 66 36"
                fill="none"
                stroke={C.yellow}
                strokeWidth="13"
              />
              <circle cx="0" cy="-14" r="27" fill={C.yellow} />
              <circle cx="0" cy="-14" r="20" fill={C.white} opacity="0.55" />
              <ellipse
                cx="0"
                cy="-14"
                rx="14"
                ry="8.5"
                fill={C.flame}
                transform="rotate(-18 0 -14)"
              />
              <circle cx="-34" cy="-40" r="3.5" fill={C.pink} />
              <circle cx="35" cy="-42" r="3.5" fill={C.pink} />
              <circle cx="-30" cy="52" r="3" fill={C.white} opacity="0.8" />
              <circle cx="32" cy="54" r="3" fill={C.white} opacity="0.8" />
              {/* mảng tối bên phải và nếp nhăn sát mép hàn */}
              <path
                d="M24 -62 H50 C71 -30 71 30 50 62 H18 C42 30 44 -30 24 -62 Z"
                fill={C.ink}
                opacity="0.16"
              />
              <path
                d="M-28 -62 l5 13 M0 -62 v12 M28 -62 l-5 13 M-28 62 l5 -13 M0 62 v-12 M28 62 l-5 -13"
                stroke={BAG_DEEP}
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.7"
              />
            </g>
            <path
              d="M-52 -38 C-60 -14 -60 14 -54 36"
              fill="none"
              stroke={C.white}
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.6"
            />
            <path
              d="M-38 -48 q4 -5 12 -6"
              fill="none"
              stroke={C.white}
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.6"
            />
          </g>
        </g>
      </g>

      <Crisp x={224} y={171} rot={-24} s={1.1} />
      <Crisp x={104} y={184} rot={10} s={0.8} />
      <Sparkle x={78} y={62} size={8} color={C.gold} />
      <Sparkle x={244} y={74} size={7} color={C.gold} delay={-0.9} />
      <Sparkle x={184} y={84} size={5} delay={-1.5} />
    </Scene>
  )
}
