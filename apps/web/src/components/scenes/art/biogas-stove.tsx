import { C, Flame, IndoorBg, Scene, type SceneProps, Shadow, Steam } from '../kit'

export function BiogasStoveScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={C.wallCool} wallShade={C.wallCoolShade} tableY={162} tiles />
      {/* giá treo muôi */}
      <rect x="20" y="26" width="92" height="5" rx="2.5" fill={C.metalDark} />
      <path d="M40 31 v34" stroke={C.metalDark} strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="40" cy="74" rx="10" ry="12" fill={C.metal} />
      <path d="M78 31 v40" stroke={C.woodDark} strokeWidth="4" strokeLinecap="round" />
      <rect x="70" y="68" width="16" height="24" rx="5" fill={C.woodDeep} />

      {/* ống dẫn khí từ hầm biogas */}
      <path
        d="M320 150 H262 Q250 150 250 162"
        fill="none"
        stroke={C.green}
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path d="M320 147 H264" stroke={C.white} strokeWidth="2" opacity="0.5" />

      {/* bếp */}
      <Shadow cx={160} cy={180} rx={104} ry={7} />
      <rect x="62" y="146" width="196" height="34" rx="9" fill={C.ink} />
      <rect x="62" y="146" width="196" height="9" rx="4.5" fill={C.inkSoft} />
      <circle cx="92" cy="167" r="7" fill={C.metal} />
      <path d="M92 167 v-5" stroke={C.ink} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="228" cy="167" r="7" fill={C.metal} />
      {/* kiềng bếp */}
      <path
        d="M106 146 v-16 M214 146 v-16 M160 146 v-10"
        stroke={C.metalDark}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <rect x="130" y="138" width="60" height="8" rx="4" fill={C.metalDark} />

      {/* lửa xanh */}
      {[118, 132, 146, 160, 174, 188, 202].map((x, i) => (
        <Flame
          key={x}
          x={x}
          y={139}
          size={i % 2 ? 17 : 21}
          outer={C.blueFlame}
          core={C.blueFlameCore}
          delay={-i * 0.13}
        />
      ))}

      {/* nồi */}
      <rect x="92" y="74" width="136" height="56" rx="12" fill={C.red} />
      <rect x="92" y="74" width="136" height="56" rx="12" fill={C.redDeep} opacity="0.0" />
      <path
        d="M160 74 H216 Q228 74 228 86 V118 Q228 130 216 130 H160 Z"
        fill={C.redDeep}
        opacity="0.45"
      />
      <rect x="102" y="84" width="8" height="34" rx="4" fill={C.white} opacity="0.45" />
      <rect x="76" y="86" width="20" height="10" rx="5" fill={C.ink} />
      <rect x="224" y="86" width="20" height="10" rx="5" fill={C.ink} />
      {/* vung */}
      <path d="M88 76 Q160 44 232 76 Z" fill={C.metal} />
      <path d="M160 53 Q200 56 232 76 H160 Z" fill={C.metalDark} opacity="0.35" />
      <rect x="86" y="72" width="148" height="7" rx="3.5" fill={C.metalDark} />
      <circle cx="160" cy="52" r="7" fill={C.ink} />

      <Steam x={130} y={46} />
      <Steam x={160} y={36} delay={-1.2} />
      <Steam x={190} y={46} delay={-2.3} />
    </Scene>
  )
}
