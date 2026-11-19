import { C, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const WALL = '#F3E9F7'
const WALL_SHADE = '#E3D3EC'
const COUNTER = '#3F3A66'
const COUNTER_TOP = '#5A548C'
const SCALE = '#E6EDF4'
const SCALE_DEEP = '#B9C4D0'
const SCREEN = '#1F2A37'
const DIGIT = '#7CF5C4'
const GEM = '#BFEFFF'
const GEM_LIGHT = '#F2FCFF'
const GEM_MID = '#8FD6F2'
const GEM_DEEP = '#5FB6DE'

/** Một chữ số kiểu màn hình bảy thanh, vẽ bằng các nét thẳng. */
function Digit({ x, d }: { x: number; d: string }) {
  return (
    <path
      transform={`translate(${x} 150)`}
      d={d}
      fill="none"
      stroke={DIGIT}
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}
const ZERO = 'M0 0 H8 V16 H0 Z'
const TWO = 'M0 0 H8 V8 H0 V16 H8'

/** Viên kim cương nhỏ đặt trên đĩa cân tiểu li ở tiệm kim hoàn. */
export function DiamondScaleScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <rect width="320" height="200" fill={WALL} />
      {Array.from({ length: 6 }, (_, i) => (
        <rect
          key={i}
          x={i * 56 + 10}
          y="0"
          width="18"
          height="120"
          fill={WALL_SHADE}
          opacity="0.5"
        />
      ))}
      {/* tủ kính trưng bày phía sau */}
      <rect x="20" y="30" width="96" height="74" rx="8" fill={C.white} opacity="0.7" />
      <rect x="28" y="84" width="80" height="6" rx="3" fill={COUNTER_TOP} opacity="0.5" />
      <circle cx="46" cy="72" r="9" fill="none" stroke={C.gold} strokeWidth="4" />
      <circle cx="46" cy="61" r="3.4" fill={C.red} />
      <circle cx="74" cy="72" r="9" fill="none" stroke={C.gold} strokeWidth="4" />
      <path d="M92 60 Q98 78 104 60" fill="none" stroke={C.goldDeep} strokeWidth="3" />
      <circle cx="98" cy="74" r="3.4" fill={C.waterDeep} />
      {/* đèn rọi */}
      <path d="M250 0 V16" stroke={C.inkSoft} strokeWidth="3" />
      <path d="M236 30 Q238 14 250 14 Q262 14 264 30 Z" fill={C.inkSoft} />
      <path d="M238 30 L196 120 H292 L262 30 Z" fill={C.yellow} opacity="0.22" />

      {/* mặt quầy */}
      <rect y="120" width="320" height="80" fill={COUNTER} />
      <rect y="120" width="320" height="7" fill={COUNTER_TOP} />

      {/* chiếc cân tiểu li */}
      <Shadow cx={160} cy={186} rx={96} ry={8} />
      <path
        d="M74 138 H246 Q256 138 258 148 L262 174 Q262 184 252 184 H68 Q58 184 58 174 L62 148 Q64 138 74 138 Z"
        fill={SCALE}
      />
      <path d="M58 172 H262 V174 Q262 184 252 184 H68 Q58 184 58 174 Z" fill={SCALE_DEEP} />
      {/* màn hình hiện 0.200 */}
      <rect x="170" y="144" width="74" height="28" rx="5" fill={SCREEN} />
      <Digit x={180} d={ZERO} />
      <circle cx="193" cy="166" r="1.6" fill={DIGIT} />
      <Digit x={198} d={TWO} />
      <Digit x={212} d={ZERO} />
      <Digit x={226} d={ZERO} />
      <circle cx="82" cy="158" r="6" fill={C.green} />
      <circle cx="102" cy="158" r="6" fill={C.red} />
      {/* đĩa cân */}
      <rect x="118" y="124" width="12" height="16" fill={SCALE_DEEP} />
      <ellipse cx="124" cy="126" rx="56" ry="9" fill={SCALE_DEEP} />
      <ellipse cx="124" cy="122" rx="56" ry="9" fill={C.metalLight} />
      <ellipse cx="124" cy="121" rx="46" ry="6" fill={C.white} opacity="0.7" />

      {/* viên kim cương */}
      <g className="sc sc-pulse" style={{ animationDuration: '3.6s' }}>
        <path d="M100 96 L110 84 H138 L148 96 L124 122 Z" fill={GEM} />
        <path d="M100 96 L110 84 H118 L112 96 Z" fill={GEM_LIGHT} />
        <path d="M118 84 H130 L136 96 H112 Z" fill={GEM_MID} />
        <path d="M130 84 H138 L148 96 H136 Z" fill={GEM_DEEP} />
        <path d="M100 96 H112 L124 122 Z" fill={GEM_MID} />
        <path d="M112 96 H136 L124 122 Z" fill={GEM_LIGHT} />
        <path d="M136 96 H148 L124 122 Z" fill={GEM_DEEP} />
      </g>
      <Sparkle x={152} y={80} size={8} delay={0} />
      <Sparkle x={98} y={82} size={5} delay={-0.9} />
      <Sparkle x={130} y={72} size={4} delay={-1.6} />

      {/* chiếc nhíp gắp đá */}
      <path
        d="M276 132 L224 106 M276 138 L224 112"
        stroke={C.metalDark}
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path d="M270 128 L286 136 L284 142 L268 136 Z" fill={C.metal} />
    </Scene>
  )
}
