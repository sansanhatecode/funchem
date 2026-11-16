import { C, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

const ORANGE_DEEP = '#E2761B'
const DRINK = '#FFA53A'

/** Bọt khí rỗng ruột nổi lên rồi tan. */
function Fizz({
  x,
  y,
  r,
  delay,
  color = C.white,
}: {
  x: number
  y: number
  r: number
  delay: number
  color?: string
}) {
  return (
    <circle
      cx={x}
      cy={y}
      r={r}
      fill={color}
      fillOpacity="0.55"
      stroke={color}
      strokeWidth="1.6"
      className="sc sc-rise"
      style={{ animationDelay: `${delay}s`, animationDuration: '2.6s' }}
    />
  )
}

export function SodaCanScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall="#CDEFE6" wallShade="#A9E1D4" tableY={150} tiles />

      {/* ly nước có ga bên cạnh */}
      <Shadow cx={228} cy={170} rx={34} ry={5} />
      <path
        d="M204 116 L208.5 160 Q209.5 166 215 166 H239 Q244.5 166 245.5 160 L250 116 Z"
        fill={DRINK}
      />
      <path
        d="M227 116 H250 L245.5 160 Q244.5 166 239 166 H227 Z"
        fill={ORANGE_DEEP}
        opacity="0.35"
      />
      <ellipse cx="227" cy="116" rx="23" ry="4.5" fill={C.white} />
      <Fizz x={218} y={156} r={2.2} delay={-0.4} />
      <Fizz x={234} y={158} r={2.8} delay={-1.5} />
      <Fizz x={226} y={150} r={1.8} delay={-2.2} />
      <path
        d="M199 98 L206.5 161 Q207.5 169 215 169 H239 Q246.5 169 247.5 161 L255 98 Z"
        fill={C.glass}
        opacity="0.22"
      />
      <path
        d="M199 98 L206.5 161 Q207.5 169 215 169 H239 Q246.5 169 247.5 161 L255 98"
        fill="none"
        stroke={C.white}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <ellipse cx="227" cy="98" rx="28" ry="4.5" fill="none" stroke={C.white} strokeWidth="3" />
      <path
        d="M207 108 L212 152"
        stroke={C.white}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* lon nước ngọt */}
      <Shadow cx={140} cy={172} rx={54} ry={7} />
      <path d="M96 74 V160 Q96 172 108 172 H164 Q176 172 176 160 V74 Z" fill={C.flame} />
      <path
        d="M96 106 Q116 90 136 106 T176 106 V134 Q156 150 136 134 T96 134 Z"
        fill={C.white}
        opacity="0.92"
      />
      <circle cx="136" cy="120" r="15" fill={C.gold} />
      <circle cx="136" cy="120" r="11.5" fill={C.yellow} />
      <path
        d="M136 109 V131 M125 120 H147 M128 112 L144 128 M144 112 L128 128"
        stroke={C.gold}
        strokeWidth="1.6"
      />
      <path d="M148 74 H176 V160 Q176 172 164 172 H148 Z" fill={ORANGE_DEEP} opacity="0.5" />
      <rect x="104" y="80" width="8" height="78" rx="4" fill={C.white} opacity="0.5" />
      <path d="M96 162 H176 Q175 172 164 172 H108 Q97 172 96 162 Z" fill={C.metal} />
      <path d="M96 76 Q96 66 106 63 H166 Q176 66 176 76 Z" fill={C.metal} />
      <path d="M148 63 H166 Q176 66 176 76 H148 Z" fill={C.metalDark} opacity="0.5" />
      <ellipse cx="136" cy="63" rx="31" ry="6.5" fill={C.metalLight} />
      <ellipse cx="158" cy="62" rx="6" ry="2.6" fill="none" stroke={C.metalDark} strokeWidth="2" />

      {/* bọt trào khỏi miệng lon */}
      <path d="M103 66 q-5 16 -1 26 q3 7 6 0 q2 -8 6 -4 q4 5 5 -8 V62 Z" fill={C.white} />
      <g className="sc sc-pulse">
        <circle cx="124" cy="60" r="9" fill={C.white} />
        <circle cx="150" cy="59" r="10" fill={C.white} />
        <circle cx="137" cy="52" r="12" fill={C.white} />
        <circle cx="112" cy="64" r="6" fill={C.white} />
      </g>
      <circle cx="132" cy="50" r="3" fill={C.wallCoolShade} />
      <circle cx="148" cy="58" r="2.4" fill={C.wallCoolShade} />
      <Fizz x={137} y={46} r={5} delay={0} />
      <Fizz x={120} y={50} r={3.4} delay={-0.7} />
      <Fizz x={154} y={48} r={4} delay={-1.3} />
      <Fizz x={144} y={36} r={2.6} delay={-1.9} />
      <Fizz x={128} y={38} r={2.8} delay={-2.3} />
      <g fill={C.flame} className="sc sc-float">
        <circle cx="102" cy="42" r="3" />
        <circle cx="174" cy="38" r="3.4" />
        <circle cx="164" cy="22" r="2.2" />
        <circle cx="112" cy="26" r="2" />
      </g>
    </Scene>
  )
}
