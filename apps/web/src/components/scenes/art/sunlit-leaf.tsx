import { C, Cloud, Scene, type SceneProps, Sparkle } from '../kit'

const LEAF = '#4CC56F'
const LEAF_DEEP = '#2FA455'
const LEAF_LIGHT = '#8BE39A'
const VEIN = '#D8F7C8'
const BRANCH = '#9C6A38'
const BRANCH_DEEP = '#7A4F26'
const LEAF_SHAPE = 'M92 150 C96 86 168 44 262 52 C258 122 186 172 92 150 Z'
/** Tia nắng quanh mặt trời: góc tính bằng độ. */
const RAYS = [0, 45, 90, 135, 180, 225, 270, 315] as const

export function SunlitLeafScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <rect width="320" height="200" fill={C.sky} />
      <Cloud x={250} y={30} scale={0.8} drift />
      <path d="M0 178 Q80 160 170 174 T320 166 V200 H0 Z" fill={C.grassDeep} />

      {/* mặt trời và tia nắng quay chậm */}
      <g transform="translate(48 44)">
        <g className="sc sc-spin" style={{ animationDuration: '24s' }}>
          {RAYS.map((a) => (
            <rect
              key={a}
              x="-3"
              y="-42"
              width="6"
              height="14"
              rx="3"
              fill={C.sun}
              transform={`rotate(${a})`}
            />
          ))}
          <circle r="42" fill="none" />
        </g>
        <circle r="23" fill={C.sun} />
        <circle r="15" fill={C.yellow} />
      </g>

      {/* luồng nắng chiếu xuống mặt lá */}
      <g fill={C.yellow} className="sc sc-pulse" style={{ animationDuration: '3.4s' }}>
        <path d="M70 62 L84 50 L170 112 L150 130 Z" opacity="0.5" />
        <path d="M88 46 L104 38 L222 92 L204 110 Z" opacity="0.5" />
        <path d="M62 78 L72 68 L128 136 L112 148 Z" opacity="0.5" />
      </g>

      {/* cành cây */}
      <path
        d="M20 196 Q58 168 96 152"
        fill="none"
        stroke={BRANCH}
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M20 198 Q58 172 94 156"
        fill="none"
        stroke={BRANCH_DEEP}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* lá nhỏ phía sau */}
      <g className="sc sc-sway" style={{ animationDelay: '-1.4s' }}>
        <path d="M70 168 C40 150 30 118 40 96 C66 106 82 136 70 168 Z" fill={LEAF_DEEP} />
        <path d="M68 164 Q52 132 42 100" fill="none" stroke={LEAF} strokeWidth="2.4" />
      </g>

      {/* chiếc lá lớn hứng nắng */}
      <g className="sc sc-sway" style={{ animationDuration: '4.6s' }}>
        <path d={LEAF_SHAPE} fill={LEAF} />
        <path d="M92 150 C150 146 216 110 262 52 C258 122 186 172 92 150 Z" fill={LEAF_DEEP} />
        <path
          d="M104 132 C116 92 164 62 232 58 C176 74 132 100 104 132 Z"
          fill={LEAF_LIGHT}
          opacity="0.7"
        />
        <path
          d="M92 150 C150 138 214 104 262 52"
          fill="none"
          stroke={VEIN}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M128 140 Q130 110 142 92 M164 126 Q164 96 180 76 M200 106 Q202 84 218 66 M134 139 Q160 152 186 150 M172 122 Q198 132 220 126 M208 100 Q228 104 244 96"
          fill="none"
          stroke={VEIN}
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.85"
        />
        {/* giọt sương */}
        <ellipse cx="150" cy="112" rx="7" ry="5.5" fill={C.white} opacity="0.75" />
        <circle cx="148" cy="110" r="1.8" fill={C.white} />
      </g>

      <Sparkle x={196} y={84} size={7} color={C.white} delay={0} />
      <Sparkle x={132} y={104} size={5} color={C.white} delay={-0.8} />
      <Sparkle x={232} y={70} size={5} color={C.yellow} delay={-1.5} />
    </Scene>
  )
}
