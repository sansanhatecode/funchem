import { C, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

const VINEGAR = '#FFF2B0'
const VINEGAR_DEEP = '#EFD066'
const EGG = '#F4D3A4'
const EGG_SHADE = '#DBAE76'
const GLASS = 'M96 44 V156 Q96 170 110 170 H210 Q224 170 224 156 V44'
/** Bọt khí li ti bám trên vỏ trứng: [x, y, r] */
const CLING = [
  [132, 112, 2.6],
  [142, 100, 2],
  [154, 94, 2.8],
  [168, 94, 2.2],
  [180, 100, 2.6],
  [190, 110, 2],
  [196, 124, 2.6],
  [126, 126, 2.2],
  [138, 124, 1.8],
  [150, 110, 2.2],
  [164, 106, 1.8],
  [176, 116, 2.4],
  [186, 132, 2],
  [134, 140, 2.4],
  [148, 132, 2],
  [162, 124, 2.6],
  [174, 136, 2],
  [156, 146, 2.2],
  [144, 152, 1.8],
  [170, 150, 2.4],
  [184, 146, 1.8],
] as const
/** Bọt rời vỏ trứng nổi lên mặt giấm: [x, y, r, độ trễ] */
const RISING = [
  [136, 96, 3, 0],
  [152, 86, 2.4, -0.7],
  [168, 88, 3.4, -1.4],
  [184, 96, 2.6, -2.1],
  [144, 78, 2.2, -1.1],
  [176, 76, 2.8, -0.3],
  [160, 70, 2.4, -1.8],
  [196, 106, 2.2, -2.5],
  [124, 108, 2.4, -0.9],
] as const

export function EggshellVinegarScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall="#FCE4EC" wallShade="#F6CADB" tableY={152} />

      {/* quả trứng khác trên bàn */}
      <Shadow cx={48} cy={178} rx={30} ry={4.5} />
      <ellipse cx="46" cy="160" rx="22" ry="17" fill={EGG} transform="rotate(-10 46 160)" />
      <path
        d="M46 143 Q68 146 68 160 Q68 174 46 177 Q60 162 46 143 Z"
        fill={EGG_SHADE}
        opacity="0.6"
      />
      <ellipse
        cx="38"
        cy="152"
        rx="7"
        ry="3.4"
        fill={C.white}
        opacity="0.6"
        transform="rotate(-24 38 152)"
      />

      {/* chai giấm */}
      <Shadow cx={274} cy={174} rx={30} ry={5} />
      <path d="M254 124 H294 V162 Q294 170 286 170 H262 Q254 170 254 162 Z" fill={VINEGAR} />
      <path d="M274 124 H294 V162 Q294 170 286 170 H274 Z" fill={VINEGAR_DEEP} opacity="0.4" />
      <path
        d="M254 104 Q254 92 264 90 L266 74 H282 L284 90 Q294 92 294 104 V162 Q294 170 286 170 H262 Q254 170 254 162 Z"
        fill={C.glass}
        fillOpacity="0.35"
        stroke={C.white}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M261 106 V156"
        stroke={C.white}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.6"
      />
      <rect x="262" y="58" width="24" height="17" rx="4" fill={C.green} />
      <rect x="276" y="58" width="10" height="17" rx="4" fill={C.greenDeep} opacity="0.6" />

      {/* cốc giấm */}
      <Shadow cx={164} cy={174} rx={74} ry={8} />
      <path d="M96 62 V156 Q96 170 110 170 H210 Q224 170 224 156 V62 Z" fill={VINEGAR} />
      <path d="M160 62 H224 V156 Q224 170 210 170 H160 Z" fill={VINEGAR_DEEP} opacity="0.35" />
      <ellipse cx="160" cy="62" rx="64" ry="7" fill={VINEGAR_DEEP} />
      <ellipse cx="146" cy="61" rx="30" ry="2.6" fill={C.white} opacity="0.6" />

      {/* quả trứng chìm trong giấm */}
      <ellipse cx="160" cy="124" rx="44" ry="34" fill={EGG} />
      <path
        d="M160 90 Q204 94 204 124 Q204 154 160 158 Q206 136 160 90 Z"
        fill={EGG_SHADE}
        opacity="0.7"
      />
      <ellipse
        cx="140"
        cy="106"
        rx="13"
        ry="6"
        fill={C.white}
        opacity="0.55"
        transform="rotate(-28 140 106)"
      />

      {/* bọt khí bám kín vỏ trứng */}
      <g
        fill={C.white}
        fillOpacity="0.85"
        stroke={C.white}
        strokeWidth="1"
        className="sc sc-pulse"
        style={{ animationDuration: '3s' }}
      >
        {CLING.map(([x, y, r], i) => (
          <circle key={i} cx={x} cy={y} r={r} />
        ))}
      </g>
      {/* bọt rời ra, nổi lên */}
      {RISING.map(([x, y, r, delay], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={r}
          fill={C.white}
          fillOpacity="0.7"
          stroke={C.white}
          strokeWidth="1.4"
          className="sc sc-rise"
          style={{ animationDelay: `${delay}s`, animationDuration: '2.8s' }}
        />
      ))}
      {/* bọt vỡ trên mặt giấm */}
      <g fill={C.white}>
        <circle cx="138" cy="60" r="4" />
        <circle cx="150" cy="58" r="5" />
        <circle cx="164" cy="59" r="4.4" />
        <circle cx="178" cy="60" r="3.6" />
        <circle cx="190" cy="61" r="3" />
      </g>

      {/* thành cốc */}
      <path
        d={GLASS}
        fill="none"
        stroke={C.white}
        strokeWidth="3.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <ellipse cx="160" cy="44" rx="64" ry="7" fill="none" stroke={C.white} strokeWidth="3.4" />
      <path
        d="M106 58 V150"
        stroke={C.white}
        strokeWidth="5.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </Scene>
  )
}
