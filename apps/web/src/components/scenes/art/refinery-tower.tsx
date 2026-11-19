import { C, Cloud, Flame, Scene, type SceneProps, Shadow } from '../kit'

const TOWER = '#C9D2DC'
const TOWER_DEEP = '#9AA7B6'
const PIPE = '#7C8A9B'
const GROUND = '#D9C7A6'
const GROUND_DEEP = '#C2AD88'
/**
 * Các tầng của tháp chưng cất, từ trên xuống: [y của ống ra, màu sản phẩm].
 * Càng xuống dưới, phân tử càng lớn và sản phẩm càng sẫm màu.
 */
const CUTS = [
  [44, '#BFE6FF'],
  [70, '#FFE27A'],
  [96, '#FFB347'],
  [122, '#B5642B'],
  [148, '#3A3230'],
] as const

export function RefineryTowerScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <rect width="320" height="200" fill={C.sky} />
      <Cloud x={50} y={34} scale={0.8} drift />
      <Cloud x={270} y={26} scale={0.6} drift delay={-10} />
      <rect y="166" width="320" height="34" fill={GROUND} />
      <rect y="166" width="320" height="5" fill={GROUND_DEEP} />

      {/* lò đun dầu thô ở chân tháp */}
      <Shadow cx={62} cy={184} rx={44} ry={5} />
      <rect x="26" y="126" width="72" height="56" rx="8" fill={C.rust} />
      <rect x="62" y="126" width="36" height="56" rx="8" fill={C.rustDark} opacity="0.5" />
      <rect x="40" y="150" width="44" height="32" rx="6" fill={C.ink} />
      <Flame x={52} y={178} size={18} />
      <Flame x={64} y={178} size={22} delay={-0.2} />
      <Flame x={76} y={178} size={17} delay={-0.35} />
      <rect x="54" y="96" width="14" height="32" rx="4" fill={C.rustDark} />
      {/* ống đưa hơi dầu nóng vào tháp */}
      <path d="M98 150 H124" fill="none" stroke={PIPE} strokeWidth="7" strokeLinecap="round" />

      {/* tháp chưng cất */}
      <Shadow cx={150} cy={184} rx={40} ry={5} />
      <path d="M122 34 Q122 14 150 14 Q178 14 178 34 V182 H122 Z" fill={TOWER} />
      <path d="M150 14 Q178 14 178 34 V182 H150 Z" fill={TOWER_DEEP} opacity="0.6" />
      <rect x="128" y="30" width="7" height="146" rx="3.5" fill={C.white} opacity="0.5" />
      {CUTS.map(([y]) => (
        <rect key={y} x="122" y={y + 11} width="56" height="3" fill={TOWER_DEEP} />
      ))}

      {/* mỗi tầng một ống dẫn ra một bồn chứa sản phẩm */}
      {CUTS.map(([y, color], i) => (
        <g key={y}>
          <path d={`M178 ${y} H228`} stroke={PIPE} strokeWidth="5" strokeLinecap="round" />
          <rect x="228" y={y - 11} width="66" height="22" rx="11" fill={color} />
          <rect x="236" y={y - 8} width="40" height="4" rx="2" fill={C.white} opacity="0.5" />
          <circle
            cx="204"
            cy={y}
            r="3.2"
            fill={color}
            className="sc sc-float"
            style={{ animationDelay: `${-i * 0.6}s` }}
          />
        </g>
      ))}

      {/* hơi nóng bốc lên trong tháp */}
      <g fill={C.white} opacity="0.75">
        <circle cx="150" cy="150" r="3" className="sc sc-rise" />
        <circle
          cx="160"
          cy="120"
          r="2.6"
          className="sc sc-rise"
          style={{ animationDelay: '-1.2s' }}
        />
        <circle
          cx="144"
          cy="92"
          r="2.4"
          className="sc sc-rise"
          style={{ animationDelay: '-2.2s' }}
        />
      </g>
    </Scene>
  )
}
