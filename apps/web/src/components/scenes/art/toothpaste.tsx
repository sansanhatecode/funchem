import { C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const TUBE = C.waterDeep
const TUBE_DEEP = '#3A8CC2'
const BRUSH = C.pink
const BRUSH_DEEP = '#E96C96'
const PASTE = 'M139 97 L128 108 Q121 116 113 109 Q106 103 100 110 Q94 116 88 108'

export function ToothpasteScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall="#D6F1E8" wallShade="#A9DECE" tableY={162} tiles />
      {/* gương tròn */}
      <circle cx="56" cy="50" r="33" fill={C.metal} />
      <circle cx="56" cy="50" r="27" fill={C.sky} />
      <path
        d="M40 50 L58 32 M48 60 L70 38"
        stroke={C.white}
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* cốc súc miệng */}
      <Shadow cx={50} cy={166} rx={26} ry={4} />
      <path d="M26 112 H72 L67 159 Q66.4 165 60 165 H38 Q31.6 165 31 159 Z" fill={C.yellow} />
      <path d="M52 112 H72 L67 159 Q66.4 165 60 165 H52 Z" fill={C.goldDeep} opacity="0.35" />
      <rect x="24" y="108" width="50" height="8" rx="4" fill={C.gold} />
      <rect x="34" y="122" width="5" height="30" rx="2.5" fill={C.white} opacity="0.6" />

      {/* bàn chải */}
      <Shadow cx={190} cy={178} rx={96} ry={5} />
      <path
        d="M144 142 C176 142 200 151 298 151"
        fill="none"
        stroke={BRUSH}
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M150 146 C178 146 200 155 298 155"
        fill="none"
        stroke={BRUSH_DEEP}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M176 141 C200 145 230 147 262 148"
        fill="none"
        stroke={C.white}
        strokeWidth="2.6"
        strokeLinecap="round"
        opacity="0.6"
      />
      {[84, 92, 100, 108, 116, 124, 132].map((x, i) => (
        <rect
          key={x}
          x={x}
          y="118"
          width="7.4"
          height="21"
          rx="2.4"
          fill={i % 2 ? C.water : C.white}
        />
      ))}
      <rect x="78" y="136" width="72" height="12" rx="6" fill={BRUSH} />
      <rect x="82" y="143" width="66" height="5" rx="2.5" fill={BRUSH_DEEP} opacity="0.6" />

      {/* kem đánh răng có sọc */}
      <path
        d={PASTE}
        fill="none"
        stroke={C.white}
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={PASTE}
        fill="none"
        stroke={C.red}
        strokeWidth="3"
        strokeLinecap="round"
        transform="translate(1 -3.4)"
      />
      <path
        d={PASTE}
        fill="none"
        stroke={TUBE}
        strokeWidth="3"
        strokeLinecap="round"
        transform="translate(-1 3.4)"
      />

      {/* tuýp kem đang bóp */}
      <g className="sc sc-float">
        <g transform="translate(130 106) rotate(-36)">
          <rect x="0" y="-5.5" width="14" height="11" rx="2.5" fill={C.white} />
          <path d="M4 -5.5 v11 M8 -5.5 v11" stroke={C.metal} strokeWidth="1.6" />
          <path d="M11 -8 L28 -25 V25 L11 8 Z" fill={C.white} />
          <path d="M11 2 L28 8 V25 L11 8 Z" fill={C.metal} opacity="0.6" />
          <path d="M26 -25 C60 -20 92 -31 124 -29 V29 C92 31 60 20 26 25 Z" fill={TUBE} />
          <path d="M42 -6 C62 -15 86 4 108 -7 V9 C86 19 62 0 42 9 Z" fill={C.white} />
          <path
            d="M75 -7 Q76.5 -0.5 83 1 Q76.5 2.5 75 9 Q73.5 2.5 67 1 Q73.5 -0.5 75 -7 Z"
            fill={TUBE_DEEP}
          />
          <rect x="29" y="-25" width="6" height="50" fill={C.yellow} />
          <path d="M26 8 C60 6 92 12 124 10 V29 C92 31 60 20 26 25 Z" fill={C.ink} opacity="0.14" />
          <path
            d="M40 -17 C62 -14 90 -23 114 -22"
            fill="none"
            stroke={C.white}
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.5"
          />
          <rect x="121" y="-31" width="11" height="62" rx="3" fill={TUBE_DEEP} />
          <path
            d="M126.5 -25 v8 M126.5 -11 v8 M126.5 3 v8 M126.5 17 v8"
            stroke={TUBE}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      </g>

      <Sparkle x={104} y={92} size={7} />
      <Sparkle x={76} y={104} size={5} delay={-0.9} />
      <Sparkle x={256} y={96} size={7} delay={-1.5} />
    </Scene>
  )
}
