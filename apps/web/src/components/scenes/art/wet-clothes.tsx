import { useId } from 'react'
import { C, OutdoorBg, Scene, type SceneProps, Steam } from '../kit'

const TOWEL_DEEP = '#7B5FC4'
const SOCK = '#FFB13D'
const WET = '#A32B2B'

/** Giọt nước nhỏ xuống từ mép vải. */
function Drip({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <path
      d={`M${x} ${y - 6} q5 8 0 11 q-5 -3 0 -11`}
      fill={C.waterDeep}
      className="sc sc-rain"
      style={{ animationDelay: `${delay}s`, animationDuration: '1.7s' }}
    />
  )
}

/** Chiếc tất treo bằng kẹp gỗ. */
function Sock({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d="M0 0 H16 V26 L27 35 Q33 41 28 47 Q23 52 16 48 L3 40 Q0 38 0 33 Z"
        fill={SOCK}
        stroke={SOCK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M19 30 L27 35 Q33 41 28 47 Q24 51 19 49 Q25 40 19 30 Z" fill={C.rust} />
      <rect x="-1.5" y="-1.5" width="19" height="9" rx="3" fill={C.white} />
      <rect x="5.5" y="-8" width="5" height="13" rx="2" fill={C.woodDeep} />
    </g>
  )
}

export function WetClothesScene(props: SceneProps) {
  const clip = useId()
  return (
    <Scene {...props}>
      <OutdoorBg groundY={166} />

      {/* cột và dây phơi */}
      <rect x="24" y="48" width="9" height="140" rx="4" fill={C.woodDeep} />
      <rect x="289" y="48" width="9" height="140" rx="4" fill={C.woodDeep} />
      <path
        d="M29 56 Q161 80 293 56"
        fill="none"
        stroke={C.white}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <ellipse cx="160" cy="189" rx="30" ry="4" fill={C.grassDeep} />
      <ellipse cx="74" cy="184" rx="16" ry="3" fill={C.grassDeep} />

      {/* giọt nước nhỏ xuống */}
      <clipPath id={clip}>
        <rect x="40" y="141" width="240" height="60" />
      </clipPath>
      <g clipPath={`url(#${clip})`}>
        <Drip x={142} y={170} delay={0} />
        <Drip x={180} y={174} delay={-0.9} />
        <Drip x={70} y={158} delay={-0.4} />
      </g>

      {/* khăn tắm */}
      <path d="M48 58 L98 64 V137 Q98 141 94 141 H52 Q48 141 48 137 Z" fill={C.purple} />
      <path d="M82 62 L98 64 V137 Q98 141 94 141 H82 Z" fill={TOWEL_DEEP} opacity="0.55" />
      <path d="M48 104 H98 V112 H48 Z M48 117 H98 V121 H48 Z" fill={C.white} opacity="0.85" />
      <path
        d="M48 128 q6.25 -5 12.5 0 t12.5 0 t12.5 0 t12.5 0 V137 Q98 141 94 141 H52 Q48 141 48 137 Z"
        fill={TOWEL_DEEP}
        opacity="0.6"
      />
      <rect x="55" y="68" width="5" height="30" rx="2.5" fill={C.white} opacity="0.45" />

      {/* áo phông ướt */}
      <path
        d="M136 66 Q160 86 184 66 L220 84 L209 110 L196 104 V150 Q196 154 192 154 H128 Q124 154 124 150 V104 L111 110 L100 84 Z"
        fill={C.red}
        stroke={C.red}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M174 76 Q180 72 186 68 L198 74 V150 Q198 156 192 156 H174 Z"
        fill={C.redDeep}
        opacity="0.5"
      />
      <path
        d="M136 66 Q160 86 184 66"
        fill="none"
        stroke={C.redDeep}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path d="M122 110 H198 V120 H122 Z" fill={C.white} opacity="0.9" />
      <path
        d="M122 134 q6.33 -6 12.67 0 t12.67 0 t12.67 0 t12.67 0 t12.67 0 t12.67 0 V150 Q198 156 192 156 H128 Q122 156 122 150 Z"
        fill={WET}
        opacity="0.55"
      />
      <rect x="130" y="84" width="6" height="12" rx="3" fill={C.white} opacity="0.5" />
      <rect x="139" y="58" width="6" height="15" rx="2.5" fill={C.woodDeep} />
      <rect x="175" y="58" width="6" height="15" rx="2.5" fill={C.woodDeep} />

      {/* đôi tất */}
      <Sock x={230} y={66} />
      <Sock x={256} y={63} />

      {/* hơi nước bốc lên */}
      <g opacity="0.75">
        <Steam x={128} y={58} />
        <Steam x={192} y={54} delay={-1.3} />
        <Steam x={72} y={52} delay={-2.4} />
      </g>
    </Scene>
  )
}
