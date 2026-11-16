import { C, Cloud, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const ICE = '#C3E8FB'
const ICE_TOP = '#EAF7FF'
const ICE_SIDE = '#8FCDF1'

/** Viên đá khối: mặt trước, mặt trên sáng, mặt bên tối. */
function Cube({ x, y, s, rot = 0 }: { x: number; y: number; s: number; rot?: number }) {
  const d = s * 0.34
  const e = d * 0.6
  return (
    <g
      transform={`rotate(${rot} ${x + s / 2} ${y + s / 2})`}
      strokeWidth="5"
      strokeLinejoin="round"
    >
      <path
        d={`M${x + s} ${y} l${d} ${-e} v${s} l${-d} ${e} Z`}
        fill={ICE_SIDE}
        stroke={ICE_SIDE}
      />
      <path d={`M${x} ${y} l${d} ${-e} h${s} l${-d} ${e} Z`} fill={ICE_TOP} stroke={ICE_TOP} />
      <rect x={x} y={y} width={s} height={s} rx="3" fill={ICE} stroke={ICE} />
      <rect
        x={x + 6}
        y={y + 6}
        width={s - 12}
        height={s - 12}
        rx="5"
        fill={C.white}
        opacity="0.38"
      />
      <rect x={x + 5} y={y + 6} width="5" height={s * 0.52} rx="2.5" fill={C.white} />
      <circle cx={x + s - 12} cy={y + s - 11} r="2.6" fill={C.white} opacity="0.8" />
    </g>
  )
}

export function IceCubesScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg tableY={150} />
      {/* cửa sổ nhìn ra trời */}
      <rect x="18" y="20" width="78" height="78" rx="10" fill={C.woodDeep} />
      <rect x="24" y="26" width="66" height="66" rx="6" fill={C.sky} />
      <circle cx="72" cy="44" r="8" fill={C.sun} />
      <Cloud x={46} y={66} scale={0.5} />
      <path d="M57 26 V92 M24 59 H90" stroke={C.woodDeep} strokeWidth="5" />

      {/* vũng nước tan */}
      <path
        d="M78 170 Q78 162 114 162 H230 Q278 162 278 172 Q278 182 240 181 H186 Q146 184 112 180 Q78 178 78 170 Z"
        fill={C.water}
      />
      <path
        d="M94 172 Q124 177 170 175"
        fill="none"
        stroke={C.white}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <Shadow cx={160} cy={168} rx={66} ry={6} />

      {/* đống đá viên */}
      <Cube x={96} y={112} s={50} rot={-3} />
      <Cube x={158} y={116} s={46} rot={5} />
      <Cube x={124} y={62} s={48} rot={-9} />

      {/* viên đá đang tan */}
      <Cube x={228} y={146} s={24} rot={12} />
      <path d="M214 169 Q240 158 270 168 Q266 180 242 180 Q222 180 214 169 Z" fill={C.water} />
      <ellipse
        cx="243"
        cy="171"
        rx="19"
        ry="3.6"
        fill="none"
        stroke={C.white}
        strokeWidth="2"
        className="sc sc-ripple"
      />
      <path
        d="M223 148 q3.5 7 0 10 q-3.5 -3 0 -10"
        fill={C.waterDeep}
        className="sc sc-float"
        style={{ animationDelay: '-1.4s' }}
      />

      {/* hơi lạnh */}
      <g stroke={C.white} strokeWidth="7" strokeLinecap="round" opacity="0.7">
        <path d="M62 138 h30 M74 150 h34" className="sc sc-float" />
        <path
          d="M214 92 h28 M204 104 h24"
          className="sc sc-float"
          style={{ animationDelay: '-2s' }}
        />
      </g>

      <Sparkle x={193} y={76} size={7} delay={-0.3} />
      <Sparkle x={219} y={136} size={5} delay={-1.3} />
    </Scene>
  )
}
