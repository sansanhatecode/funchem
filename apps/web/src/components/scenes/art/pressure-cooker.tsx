import { C, Flame, IndoorBg, Scene, type SceneProps, Shadow, Steam } from '../kit'

const WALL = '#E3F0DC'
const WALL_SHADE = '#C9E2BD'

export function PressureCookerScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={166} tiles />

      {/* bếp gas */}
      <Shadow cx={160} cy={186} rx={106} ry={7} />
      <rect x="62" y="152" width="196" height="34" rx="9" fill={C.ink} />
      <rect x="62" y="152" width="196" height="9" rx="4.5" fill={C.inkSoft} />
      <circle cx="92" cy="173" r="7" fill={C.metal} />
      <path d="M92 173 v-5" stroke={C.ink} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="228" cy="173" r="7" fill={C.metal} />
      <path
        d="M100 152 v-12 M214 152 v-12"
        stroke={C.metalDark}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <rect x="128" y="146" width="60" height="7" rx="3.5" fill={C.metalDark} />
      {[116, 130, 144, 158, 172, 186, 200].map((x, i) => (
        <Flame
          key={x}
          x={x}
          y={150}
          size={i % 2 ? 15 : 19}
          outer={C.blueFlame}
          core={C.blueFlameCore}
          delay={-i * 0.13}
        />
      ))}

      {/* tia hơi phụt ra từ van */}
      <g
        fill="none"
        stroke={C.white}
        strokeWidth="5"
        strokeLinecap="round"
        className="sc sc-pulse"
        style={{ transformOrigin: '50% 100%' }}
      >
        <path d="M150 40 L128 18" />
        <path d="M158 36 V8" />
        <path d="M166 40 L188 18" />
      </g>
      <Steam x={124} y={22} />
      <Steam x={158} y={14} delay={-1.2} />
      <Steam x={192} y={22} delay={-2.3} />

      {/* tay cầm dài: nửa trên gắn với nắp, nửa dưới gắn với thân nồi */}
      <rect x="226" y="72" width="82" height="13" rx="6.5" fill={C.ink} />
      <rect x="226" y="88" width="78" height="13" rx="6.5" fill={C.inkSoft} />
      <rect x="64" y="86" width="30" height="14" rx="7" fill={C.ink} />

      {/* thân nồi */}
      <path d="M90 86 H230 V126 Q230 140 216 140 H104 Q90 140 90 126 Z" fill={C.metalLight} />
      <path d="M170 86 H230 V126 Q230 140 216 140 H170 Z" fill={C.metal} opacity="0.75" />
      <rect x="100" y="96" width="8" height="34" rx="4" fill={C.white} opacity="0.8" />
      <rect x="90" y="128" width="140" height="12" rx="6" fill={C.metalDark} opacity="0.6" />

      {/* nắp khoá chặt */}
      <path d="M88 82 Q160 52 232 82 Z" fill={C.metal} />
      <path d="M160 60 Q204 62 232 82 H160 Z" fill={C.metalDark} opacity="0.4" />
      <rect x="84" y="78" width="152" height="11" rx="5.5" fill={C.metalDark} />
      <path
        d="M108 76 Q128 64 150 62"
        fill="none"
        stroke={C.white}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="202" cy="70" r="5" fill={C.red} />

      {/* van xả hơi lắc lư */}
      <g className="sc sc-sway" style={{ animationDuration: '0.5s' }}>
        <rect x="148" y="38" width="20" height="22" rx="5" fill={C.ink} />
        <rect x="148" y="38" width="20" height="7" rx="3.5" fill={C.inkSoft} />
      </g>
      <rect x="154" y="56" width="8" height="8" fill={C.metalDark} />
    </Scene>
  )
}
