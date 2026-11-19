import { C, Cloud, Scene, type SceneProps, Shadow } from '../kit'

const GROUND = '#C9CED6'
const GROUND_DEEP = '#AEB5BF'
const ROOF = '#F25F5C'
const ROOF_DEEP = '#D03F3C'
const PUMP = '#2FBF71'
const PUMP_DEEP = '#1F9A58'
const BIKE = '#3B9BFF'
const BIKE_DEEP = '#2A78CC'
const TYRE = '#27364A'

export function GasStationScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <rect width="320" height="200" fill={C.sky} />
      <Cloud x={262} y={64} scale={0.6} drift delay={-8} />
      <rect y="156" width="320" height="44" fill={GROUND} />
      <rect y="156" width="320" height="5" fill={GROUND_DEEP} />

      {/* mái che và cột */}
      <rect x="46" y="40" width="12" height="118" fill={C.metalLight} />
      <rect x="0" y="14" width="250" height="26" rx="5" fill={ROOF} />
      <rect x="0" y="32" width="250" height="8" rx="4" fill={ROOF_DEEP} />
      <rect x="10" y="19" width="120" height="5" rx="2.5" fill={C.white} opacity="0.5" />

      {/* trụ bơm */}
      <Shadow cx={112} cy={184} rx={40} ry={5} />
      <rect x="72" y="174" width="80" height="10" rx="4" fill={C.metalDark} />
      <rect x="82" y="60" width="60" height="116" rx="9" fill={PUMP} />
      <rect x="112" y="60" width="30" height="116" rx="9" fill={PUMP_DEEP} opacity="0.5" />
      <rect x="90" y="70" width="44" height="34" rx="5" fill={C.ink} />
      {/* các con số đang nhảy */}
      <g fill={C.yellow}>
        <rect x="95" y="76" width="34" height="6" rx="2" />
        <rect x="103" y="87" width="26" height="6" rx="2" className="sc sc-pulse" />
      </g>
      <rect x="90" y="112" width="44" height="12" rx="4" fill={C.white} opacity="0.85" />
      <rect x="88" y="66" width="6" height="100" rx="3" fill={C.white} opacity="0.3" />
      <rect x="140" y="92" width="10" height="26" rx="4" fill={C.ink} />

      {/* xe máy */}
      <Shadow cx={252} cy={186} rx={62} ry={5} />
      <circle cx="210" cy="168" r="17" fill={TYRE} />
      <circle cx="210" cy="168" r="7" fill={C.metal} />
      <circle cx="296" cy="168" r="17" fill={TYRE} />
      <circle cx="296" cy="168" r="7" fill={C.metal} />
      <path d="M296 168 L280 112" stroke={C.metalDark} strokeWidth="6" strokeLinecap="round" />
      <path d="M270 108 H292" stroke={C.ink} strokeWidth="6" strokeLinecap="round" />
      <path
        d="M206 150 Q208 124 232 122 H262 Q276 122 280 136 L286 156 Q262 166 226 164 Q208 164 206 150 Z"
        fill={BIKE}
      />
      <path
        d="M244 122 H262 Q276 122 280 136 L286 156 Q268 162 244 164 Z"
        fill={BIKE_DEEP}
        opacity="0.55"
      />
      {/* yên xe đã lật lên, lộ miệng bình xăng */}
      <path d="M196 118 Q206 104 232 110 L236 120 H200 Z" fill={TYRE} />
      <ellipse cx="240" cy="121" rx="8" ry="3" fill={C.ink} />
      <rect x="214" y="128" width="26" height="5" rx="2.5" fill={C.white} opacity="0.5" />

      {/* ống bơm võng xuống rồi vòng lên, cò bơm cắm vào miệng bình xăng */}
      <path
        d="M146 104 Q174 102 178 134 Q182 160 200 138 Q212 122 220 98"
        fill="none"
        stroke={C.ink}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M218 98 L238 92" stroke={C.metalDark} strokeWidth="9" strokeLinecap="round" />
      <path d="M238 92 L241 118" stroke={C.metal} strokeWidth="5" strokeLinecap="round" />

      {/* hơi xăng thoảng lên quanh miệng bình */}
      <g fill="none" stroke={C.white} strokeWidth="3" strokeLinecap="round" opacity="0.8">
        <path d="M250 104 q-5 -7 0 -14 q5 -7 0 -14" className="sc sc-rise" />
        <path
          d="M262 110 q-5 -7 0 -14 q5 -7 0 -14"
          className="sc sc-rise"
          style={{ animationDelay: '-1.6s' }}
        />
      </g>
    </Scene>
  )
}
