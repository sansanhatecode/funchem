import { C, H, Scene, type SceneProps, Shadow, Sparkle, W } from '../kit'

const COAL = '#2B303A'
const COAL_LIGHT = '#4B5361'
const GRAPHITE = '#3D4654'

/** Cục than nhiều cạnh, vẽ quanh gốc (0,0), rộng khoảng 60. */
function Lump({
  x,
  y,
  scale = 1,
  rotate = 0,
}: {
  x: number
  y: number
  scale?: number
  rotate?: number
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <Shadow cx={2} cy={21} rx={32} ry={6} />
      <path
        d="M-26 6 L-19 -13 L3 -20 L24 -9 L27 9 L9 18 L-13 17 Z"
        fill={COAL}
        stroke={COAL}
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <path
        d="M-19 -13 L3 -20 L24 -9 L4 -3 Z"
        fill={COAL_LIGHT}
        stroke={COAL_LIGHT}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M4 -3 L9 18 M4 -3 L-26 6"
        stroke={COAL_LIGHT}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path d="M-12 -13 L1 -17" stroke="#8792A3" strokeWidth="2.6" strokeLinecap="round" />
    </g>
  )
}

export function CharcoalPencilScene(props: SceneProps) {
  return (
    <Scene {...props}>
      {/* mặt bàn gỗ nhìn từ trên xuống */}
      <rect width={W} height={H} fill={C.wood} />
      <path
        d="M0 48 H320 M0 100 H320 M0 152 H320"
        stroke={C.woodDeep}
        strokeWidth="2.5"
        opacity="0.45"
      />
      <path
        d="M30 24 h60 M210 74 h80 M20 126 h44 M236 176 h60"
        stroke={C.woodDeep}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* tờ giấy */}
      <g transform="rotate(-5 160 80)">
        <rect
          x="62"
          y="22"
          width="206"
          height="124"
          rx="6"
          fill={C.shadow}
          transform="translate(4 5)"
        />
        <rect x="62" y="18" width="206" height="124" rx="6" fill={C.white} />
      </g>

      {/* nét chì than chì */}
      <path
        d="M82 74 q11 -26 24 -2 q11 22 22 0 q10 -20 20 2 q5 12 14 22"
        fill="none"
        stroke={GRAPHITE}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="152" cy="104" r="1.5" fill={GRAPHITE} opacity="0.7" />
      <circle cx="172" cy="106" r="1.2" fill={GRAPHITE} opacity="0.6" />
      <circle cx="160" cy="110" r="1" fill={GRAPHITE} opacity="0.6" />

      {/* bút chì, đầu nhọn ở gốc (0,0) */}
      <g transform="translate(162 96) rotate(47)">
        <g className="sc sc-sway">
          <rect x="-11" y="-134" width="22" height="18" rx="7" fill={C.pink} />
          <rect x="-11" y="-122" width="22" height="13" fill={C.metal} />
          <rect x="-11" y="-118" width="22" height="3" fill={C.metalDark} opacity="0.6" />
          <rect x="-11" y="-110" width="22" height="84" fill={C.gold} />
          <rect x="-11" y="-110" width="7" height="84" fill={C.yellow} />
          <rect x="4" y="-110" width="7" height="84" fill={C.goldDeep} />
          <path d="M-11 -27 L-3.6 -8 H3.6 L11 -27 Z" fill={C.wood} />
          <path d="M4 -27 H11 L3.6 -8 H1.2 Z" fill={C.woodDeep} />
          <path
            d="M-3.6 -8 L0 0 L3.6 -8 Z"
            fill={GRAPHITE}
            stroke={GRAPHITE}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>
      </g>

      {/* mấy cục than */}
      <Lump x={62} y={170} scale={0.62} rotate={-18} />
      <Lump x={168} y={166} scale={0.8} rotate={14} />
      <Lump x={112} y={152} scale={1.15} />
      <Sparkle x={96} y={134} size={6} delay={-0.6} />
      <Sparkle x={178} y={152} size={5} delay={-1.6} />
    </Scene>
  )
}
