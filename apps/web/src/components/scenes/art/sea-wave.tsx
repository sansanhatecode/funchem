import { C, Cloud, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const SEA = '#3FA9DC'
const SEA_DEEP = '#2B8CC4'
const SEA_LIGHT = '#8FD8F4'
const SAND = '#F6DFA6'
const SAND_DEEP = '#E5C57F'
const BUCKET = '#F25F5C'
const BUCKET_DEEP = '#D03F3C'

export function SeaWaveScene(props: SceneProps) {
  return (
    <Scene {...props}>
      {/* trời */}
      <rect width="320" height="200" fill={C.sky} />
      <circle cx="262" cy="34" r="18" fill={C.sun} />
      <circle cx="262" cy="34" r="26" fill={C.sun} opacity="0.25" className="sc sc-pulse" />
      <Cloud x={60} y={30} scale={0.8} drift />
      <Cloud x={170} y={44} scale={0.55} drift delay={-12} />

      {/* biển xa */}
      <rect y="62" width="320" height="90" fill={SEA_DEEP} />
      <path
        d="M0 76 Q40 70 80 76 T160 76 T240 76 T320 76"
        fill="none"
        stroke={SEA_LIGHT}
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.6"
        className="sc sc-float"
      />
      <Sparkle x={104} y={70} size={4} delay={-0.4} />
      <Sparkle x={214} y={72} size={5} delay={-1.3} />

      {/* con sóng lớn đang cuộn vào bờ */}
      <path d="M0 96 Q60 78 120 92 Q170 104 214 86 Q268 68 320 92 V160 H0 Z" fill={SEA} />
      <path d="M150 96 Q186 100 214 86 Q268 68 320 92 V160 H150 Z" fill={SEA_DEEP} opacity="0.35" />
      <g className="sc sc-float">
        <path
          d="M0 96 Q60 78 120 92 Q170 104 214 86 Q268 68 320 92"
          fill="none"
          stroke={C.white}
          strokeWidth="7"
          strokeLinecap="round"
        />
        <circle cx="214" cy="86" r="7" fill={C.white} />
        <circle cx="228" cy="80" r="5" fill={C.white} />
        <circle cx="120" cy="92" r="5" fill={C.white} />
      </g>

      {/* nước nông tràn lên cát */}
      <path d="M0 132 Q80 120 160 134 T320 128 V168 H0 Z" fill={SEA_LIGHT} />
      <g className="sc sc-float" style={{ animationDelay: '-2s' }}>
        <path
          d="M0 150 Q70 138 140 152 Q210 166 320 146"
          fill="none"
          stroke={C.white}
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>

      {/* bãi cát */}
      <path d="M0 156 Q70 144 140 158 Q210 172 320 152 V200 H0 Z" fill={SAND} />
      <path d="M0 186 Q120 176 320 188 V200 H0 Z" fill={SAND_DEEP} opacity="0.6" />

      {/* xô chơi cát */}
      <Shadow cx={74} cy={190} rx={26} ry={4} />
      <path d="M52 160 H96 L90 188 Q89 192 84 192 H64 Q59 192 58 188 Z" fill={BUCKET} />
      <path d="M76 160 H96 L90 188 Q89 192 84 192 H76 Z" fill={BUCKET_DEEP} opacity="0.6" />
      <ellipse cx="74" cy="160" rx="22" ry="4" fill={SEA_LIGHT} />
      <path
        d="M52 160 Q74 124 96 160"
        fill="none"
        stroke={C.white}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* sao biển và vỏ sò */}
      <g transform="translate(246 180)">
        {[0, 72, 144, 216, 288].map((a) => (
          <ellipse key={a} cx="0" cy="-9" rx="4" ry="9" fill={C.flame} transform={`rotate(${a})`} />
        ))}
        <circle r="5" fill={C.flameCore} />
      </g>
      <path d="M176 186 q8 -12 16 0 Z" fill={C.pink} />
      <path d="M180 186 l4 -7 M184 186 v-8 M188 186 l-4 -7" stroke={C.white} strokeWidth="1.2" />
    </Scene>
  )
}
