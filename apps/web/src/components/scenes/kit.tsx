import type { ReactNode, SVGProps } from 'react'

/**
 * Bộ công cụ vẽ cảnh đời sống. Mọi cảnh dùng chung khung 320x200, bảng màu và
 * các lớp hoạt ảnh `sc-*` trong globals.css để trông như cùng một hoạ sĩ vẽ.
 *
 * Quy ước phong cách:
 * - Hình phẳng, bo tròn, không viền đen. Tạo khối bằng một mảng tối hơn và một vệt sáng.
 * - Vật chính to, nằm giữa, chiếm khoảng một nửa khung. Nền đơn giản, ít chi tiết.
 * - 2 đến 4 chi tiết chuyển động có ý nghĩa (mưa rơi, lửa cháy, bọt nổi), không hơn.
 */
export const W = 320
export const H = 200

export const C = {
  sky: '#CDEBFF',
  skyDeep: '#A9DCFF',
  skyRain: '#C3D3E3',
  cloud: '#FFFFFF',
  cloudRain: '#94A6BA',
  sun: '#FFD25E',
  grass: '#8FD694',
  grassDeep: '#63BF72',
  soil: '#B98A5E',
  wood: '#E3B37C',
  woodDeep: '#C48B50',
  woodDark: '#9C6A38',
  wall: '#FFF3DC',
  wallShade: '#FBE4BD',
  wallCool: '#E4F1FA',
  wallCoolShade: '#CFE4F2',
  tile: '#F4FAFD',
  ink: '#27364A',
  inkSoft: '#5B6B80',
  metal: '#B9C4D0',
  metalLight: '#E6EDF4',
  metalDark: '#8492A2',
  rust: '#C8602F',
  rustDark: '#9B3F1C',
  water: '#7CCBF2',
  waterDeep: '#4FADE0',
  glass: '#E3F5FD',
  flame: '#FF9A3D',
  flameCore: '#FFE08A',
  blueFlame: '#3B9BFF',
  blueFlameCore: '#C6E6FF',
  gold: '#FFC93C',
  goldDeep: '#E0A100',
  copper: '#DE8A4A',
  copperDeep: '#B5642B',
  red: '#F25F5C',
  redDeep: '#D03F3C',
  green: '#2FBF71',
  greenDeep: '#1F9A58',
  purple: '#9B7EDE',
  pink: '#FF8FB1',
  yellow: '#FFE27A',
  white: '#FFFFFF',
  shadow: 'rgb(39 54 74 / 0.16)',
} as const

export interface SceneProps {
  /** mô tả cho trình đọc màn hình; bỏ trống khi cảnh chỉ để trang trí */
  label?: string | undefined
  className?: string | undefined
}

/** Khung SVG chung của mọi cảnh. */
export function Scene({ label, className, children }: SceneProps & { children: ReactNode }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={className ?? 'block h-full w-full'}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {children}
    </svg>
  )
}

export function Cloud({
  x,
  y,
  scale = 1,
  color = C.cloud,
  drift = false,
  delay = 0,
}: {
  x: number
  y: number
  scale?: number
  color?: string
  drift?: boolean
  delay?: number
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <g
        className={drift ? 'sc sc-drift' : undefined}
        style={drift ? { animationDelay: `${delay}s` } : undefined}
      >
        <ellipse cx="0" cy="6" rx="26" ry="10" fill={color} />
        <circle cx="-10" cy="0" r="11" fill={color} />
        <circle cx="6" cy="-5" r="14" fill={color} />
        <circle cx="19" cy="3" r="9" fill={color} />
      </g>
    </g>
  )
}

/** Trời ngoài trời: nền trời, mặt trời hoặc mây mưa, đồi cỏ. */
export function OutdoorBg({ rainy = false, groundY = 150 }: { rainy?: boolean; groundY?: number }) {
  return (
    <>
      <rect width={W} height={H} fill={rainy ? C.skyRain : C.sky} />
      {!rainy && (
        <>
          <circle cx="262" cy="42" r="20" fill={C.sun} />
          <circle cx="262" cy="42" r="28" fill={C.sun} opacity="0.25" className="sc sc-pulse" />
          <Cloud x={50} y={36} scale={0.9} drift />
          <Cloud x={170} y={58} scale={0.6} drift delay={-12} />
        </>
      )}
      {rainy && (
        <>
          <Cloud x={70} y={30} scale={1.2} color={C.cloudRain} />
          <Cloud x={190} y={24} scale={1.4} color={C.cloudRain} />
          <Cloud x={280} y={38} scale={1} color={C.cloudRain} />
        </>
      )}
      <path
        d={`M0 ${groundY - 14} Q80 ${groundY - 34} 170 ${groundY - 12} T320 ${groundY - 20} V${H} H0 Z`}
        fill={C.grassDeep}
        opacity={rainy ? 0.75 : 1}
      />
      <rect y={groundY} width={W} height={H - groundY} fill={C.grass} opacity={rainy ? 0.85 : 1} />
    </>
  )
}

/** Trong nhà: tường và mặt bàn gỗ. */
export function IndoorBg({
  wall = C.wall,
  wallShade = C.wallShade,
  tableY = 150,
  tiles = false,
}: {
  wall?: string
  wallShade?: string
  tableY?: number
  tiles?: boolean
}) {
  return (
    <>
      <rect width={W} height={H} fill={wall} />
      {tiles
        ? Array.from({ length: 8 }, (_, i) => (
            <rect
              key={i}
              x={i * 40 + 1}
              y="0"
              width="38"
              height={tableY}
              fill={wallShade}
              opacity={i % 2 ? 0.55 : 0.2}
            />
          ))
        : Array.from({ length: 6 }, (_, i) => (
            <rect
              key={i}
              x={i * 56 + 10}
              y="0"
              width="18"
              height={tableY}
              fill={wallShade}
              opacity="0.5"
            />
          ))}
      <rect y={tableY} width={W} height={H - tableY} fill={C.wood} />
      <rect y={tableY} width={W} height="6" fill={C.woodDeep} />
      <rect y={tableY + 22} width={W} height="2" fill={C.woodDeep} opacity="0.35" />
    </>
  )
}

/** Bóng đổ dưới vật. */
export function Shadow({
  cx,
  cy,
  rx,
  ry = rx * 0.22,
}: {
  cx: number
  cy: number
  rx: number
  ry?: number
}) {
  return <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={C.shadow} />
}

/** Tia lấp lánh bốn cánh. */
export function Sparkle({
  x,
  y,
  size = 6,
  color = C.white,
  delay = 0,
}: {
  x: number
  y: number
  size?: number
  color?: string
  delay?: number
}) {
  const s = size
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        className="sc sc-twinkle"
        style={{ animationDelay: `${delay}s` }}
        d={`M0 ${-s} Q${s * 0.18} ${-s * 0.18} ${s} 0 Q${s * 0.18} ${s * 0.18} 0 ${s} Q${-s * 0.18} ${s * 0.18} ${-s} 0 Q${-s * 0.18} ${-s * 0.18} 0 ${-s} Z`}
        fill={color}
      />
    </g>
  )
}

/** Bọt khí nổi lên rồi tan. */
export function Bubble({
  x,
  y,
  r = 3,
  delay = 0,
  color = C.white,
  duration = 3.2,
}: {
  x: number
  y: number
  r?: number
  delay?: number
  color?: string
  duration?: number
}) {
  return (
    <circle
      cx={x}
      cy={y}
      r={r}
      fill={color}
      opacity="0.9"
      className="sc sc-rise"
      style={{ animationDelay: `${delay}s`, animationDuration: `${duration}s` }}
    />
  )
}

/** Hạt mưa. */
export function Raindrop({ x, y, delay = 0 }: { x: number; y: number; delay?: number }) {
  return (
    <path
      d={`M${x} ${y} l-3 12`}
      stroke={C.waterDeep}
      strokeWidth="2.4"
      strokeLinecap="round"
      className="sc sc-rain"
      style={{ animationDelay: `${delay}s` }}
    />
  )
}

/** Ngọn lửa hình giọt, gồm lớp ngoài và lõi sáng. */
export function Flame({
  x,
  y,
  size = 20,
  outer = C.flame,
  core = C.flameCore,
  delay = 0,
}: {
  x: number
  y: number
  size?: number
  outer?: string
  core?: string
  delay?: number
}) {
  const s = size
  const drop = (k: number) =>
    `M0 ${-s * k} C${s * 0.55 * k} ${-s * 0.35 * k} ${s * 0.5 * k} ${s * 0.1 * k} 0 ${s * 0.12 * k} C${-s * 0.5 * k} ${s * 0.1 * k} ${-s * 0.55 * k} ${-s * 0.35 * k} 0 ${-s * k} Z`
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="sc sc-flicker" style={{ animationDelay: `${delay}s` }}>
        <path d={drop(1)} fill={outer} />
        <path d={drop(0.55)} fill={core} />
      </g>
    </g>
  )
}

/** Làn hơi nước uốn lượn bay lên. */
export function Steam({ x, y, delay = 0 }: { x: number; y: number; delay?: number }) {
  return (
    <path
      d={`M${x} ${y} q-6 -8 0 -16 q6 -8 0 -16`}
      fill="none"
      stroke={C.white}
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.85"
      className="sc sc-rise"
      style={{ animationDelay: `${delay}s`, animationDuration: '3.6s' }}
    />
  )
}

export type G = SVGProps<SVGGElement>
