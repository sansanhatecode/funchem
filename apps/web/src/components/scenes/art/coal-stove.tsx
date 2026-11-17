import { useId } from 'react'
import { C, Flame, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

const NIGHT = '#44568C'
const COAL = '#3B414D'
const COAL_TOP = '#525A68'
const WISP = '#7D8696'
/** Lỗ tổ ong trên mặt viên than: 1 lỗ giữa, vòng 6 lỗ, vòng 12 lỗ (nhìn nghiêng nên dẹt). */
const HOLES = [
  [0, 0],
  ...Array.from({ length: 6 }, (_, i) => [
    15 * Math.cos((i * Math.PI) / 3),
    3.6 * Math.sin((i * Math.PI) / 3),
  ]),
  ...Array.from({ length: 12 }, (_, i) => [
    30 * Math.cos(((i + 0.5) * Math.PI) / 6),
    7.2 * Math.sin(((i + 0.5) * Math.PI) / 6),
  ]),
] as [number, number][]

export function CoalStoveScene(props: SceneProps) {
  const glow = useId()
  return (
    <Scene {...props}>
      <IndoorBg wall="#D9DAEC" wallShade="#C2C4DE" tableY={160} />
      {/* cửa sổ đóng kín, ngoài trời đã tối */}
      <rect x="20" y="18" width="88" height="88" rx="10" fill={C.woodDark} />
      <rect x="26" y="24" width="76" height="76" rx="6" fill={NIGHT} />
      <circle cx="82" cy="44" r="9" fill={C.yellow} />
      <circle cx="78" cy="41" r="8" fill={NIGHT} />
      <circle cx="44" cy="42" r="1.6" fill={C.white} />
      <circle cx="52" cy="82" r="1.6" fill={C.white} />
      <circle cx="88" cy="76" r="1.4" fill={C.white} />
      <path d="M64 24 V100 M26 62 H102" stroke={C.woodDark} strokeWidth="5" />
      <rect x="59" y="55" width="10" height="14" rx="3" fill={C.metal} />
      {/* cửa ra vào cũng đóng */}
      <rect x="252" y="22" width="80" height="138" rx="5" fill={C.woodDeep} />
      <rect x="262" y="34" width="60" height="50" rx="4" fill={C.woodDark} opacity="0.45" />
      <rect x="262" y="94" width="60" height="56" rx="4" fill={C.woodDark} opacity="0.45" />
      <circle cx="262" cy="90" r="4.5" fill={C.gold} />
      {/* phòng hơi tối */}
      <rect width="320" height="200" fill={C.ink} opacity="0.13" />
      <radialGradient id={glow}>
        <stop offset="0.2" stopColor={C.flame} stopOpacity="0.5" />
        <stop offset="1" stopColor={C.flame} stopOpacity="0" />
      </radialGradient>
      <circle cx="160" cy="90" r="84" fill={`url(#${glow})`} className="sc sc-pulse" />

      {/* bếp than tổ ong */}
      <Shadow cx={164} cy={183} rx={68} ry={7} />
      <path
        d="M104 122 q-13 0 -13 11 t13 11 M216 122 q13 0 13 11 t-13 11"
        fill="none"
        stroke={C.metalDark}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path d="M104 100 V170 A56 11 0 0 0 216 170 V100 Z" fill={C.copper} />
      <path d="M180 100 H216 V170 A56 11 0 0 1 180 180.3 Z" fill={C.copperDeep} opacity="0.6" />
      <path
        d="M104 118 A56 11 0 0 0 216 118 M104 156 A56 11 0 0 0 216 156"
        fill="none"
        stroke={C.copperDeep}
        strokeWidth="3"
        opacity="0.55"
      />
      <rect x="113" y="118" width="6" height="42" rx="3" fill={C.white} opacity="0.35" />
      <rect x="145" y="140" width="30" height="20" rx="6" fill={C.ink} />
      <rect
        x="150"
        y="146"
        width="20"
        height="10"
        rx="4"
        fill={C.flame}
        className="sc sc-pulse"
        style={{ animationDelay: '-1.2s' }}
      />
      <ellipse cx="160" cy="100" rx="56" ry="13" fill={C.metalDark} />
      <ellipse cx="160" cy="100" rx="49" ry="10.5" fill={C.ink} />
      {/* viên than nhô lên, các lỗ đỏ rực */}
      <path d="M118 84 V98 A42 10 0 0 0 202 98 V84 Z" fill={COAL} />
      <ellipse cx="160" cy="84" rx="42" ry="10" fill={COAL_TOP} />
      {HOLES.map(([dx, dy], i) => (
        <g key={i}>
          <ellipse cx={160 + dx} cy={84 + dy} rx="3.6" ry="1.8" fill={C.flame} />
          <ellipse cx={160 + dx} cy={84.3 + dy} rx="1.8" ry="0.9" fill={C.flameCore} />
        </g>
      ))}
      <Flame x={145} y={83} size={11} outer={C.blueFlame} core={C.blueFlameCore} />
      <Flame x={160} y={85} size={15} outer={C.blueFlame} core={C.blueFlameCore} delay={-0.2} />
      <Flame x={175} y={83} size={11} outer={C.blueFlame} core={C.blueFlameCore} delay={-0.35} />

      {/* làn khí xám mờ bốc lên */}
      {[
        [142, 68, 0],
        [162, 60, -1.5],
        [182, 70, -2.9],
      ].map(([x, y, delay]) => (
        <path
          key={x}
          d={`M${x} ${y} q-7 -9 0 -18 q7 -9 0 -18`}
          fill="none"
          stroke={WISP}
          strokeWidth="4.5"
          strokeLinecap="round"
          opacity="0.55"
          className="sc sc-rise"
          style={{ animationDelay: `${delay}s`, animationDuration: '4.4s' }}
        />
      ))}
    </Scene>
  )
}
