import { C, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

const WALL = '#D9F0E4'
const WALL_SHADE = '#BFE3D0'
const ACID = '#E3F6FB'
const ACID_DEEP = '#BFE6F2'
const ZINC = '#8E97B4'
const ZINC_DARK = '#6C7594'
const ZINC_LIGHT = '#C3CADF'
const BOTTLE = '#B9743A'
const BOTTLE_DARK = '#8E5524'
const TUBE = 'M138 24 V138 Q138 162 160 162 Q182 162 182 138 V24'

/** Bọt khí hydrogen rỗng ruột nổi lên rồi tan. */
function Fizz({ x, y, r, delay }: { x: number; y: number; r: number; delay: number }) {
  return (
    <circle
      cx={x}
      cy={y}
      r={r}
      fill={C.white}
      fillOpacity="0.7"
      stroke={C.waterDeep}
      strokeWidth="1.4"
      className="sc sc-rise"
      style={{ animationDelay: `${delay}s`, animationDuration: '2.2s' }}
    />
  )
}

export function ZincAcidScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={156} tiles />

      {/* giá gỗ */}
      <Shadow cx={160} cy={180} rx={86} ry={6} />
      <rect x="92" y="64" width="10" height="106" rx="4" fill={C.woodDark} />
      <rect x="218" y="64" width="10" height="106" rx="4" fill={C.woodDark} />
      <rect x="84" y="60" width="152" height="13" rx="6" fill={C.woodDeep} />
      <rect x="84" y="60" width="152" height="5" rx="2.5" fill={C.wood} />
      <rect x="80" y="166" width="160" height="14" rx="6" fill={C.woodDark} />
      <rect x="80" y="166" width="160" height="5" rx="2.5" fill={C.woodDeep} />

      {/* dung dịch acid trong ống nghiệm */}
      <path d="M138 70 V138 Q138 162 160 162 Q182 162 182 138 V70 Z" fill={ACID} />
      <path d="M162 70 H182 V138 Q182 162 160 162 Q168 150 162 70 Z" fill={ACID_DEEP} />
      <ellipse cx="160" cy="70" rx="22" ry="4" fill={C.white} opacity="0.9" />

      {/* viên kẽm */}
      <path d="M146 150 L150 138 L162 134 L174 140 L176 151 L166 157 L153 157 Z" fill={ZINC} />
      <path d="M162 134 L174 140 L176 151 L166 157 L164 146 Z" fill={ZINC_DARK} />
      <path d="M150 139 L161 136 L158 143 L151 146 Z" fill={ZINC_LIGHT} />

      {/* bọt khí hydrogen bám quanh viên kẽm rồi nổi lên */}
      <g fill={C.white} stroke={C.waterDeep} strokeWidth="1.2">
        <circle cx="146" cy="142" r="3" />
        <circle cx="176" cy="136" r="3.4" />
        <circle cx="157" cy="130" r="2.6" />
        <circle cx="168" cy="131" r="2.2" />
        <circle cx="150" cy="133" r="2" />
      </g>
      <Fizz x={150} y={126} r={3.2} delay={0} />
      <Fizz x={166} y={124} r={3.8} delay={-0.6} />
      <Fizz x={158} y={118} r={2.6} delay={-1.2} />
      <Fizz x={172} y={116} r={2.8} delay={-1.7} />
      <Fizz x={148} y={108} r={2.4} delay={-0.3} />
      <Fizz x={162} y={104} r={3.2} delay={-0.9} />
      <Fizz x={170} y={98} r={2.2} delay={-1.5} />
      <Fizz x={152} y={94} r={2.8} delay={-2} />
      <g fill={C.white} stroke={C.waterDeep} strokeWidth="1.2" className="sc sc-pulse">
        <circle cx="150" cy="68" r="3.4" />
        <circle cx="160" cy="66" r="4.4" />
        <circle cx="170" cy="68" r="3" />
      </g>

      {/* ống nghiệm thuỷ tinh */}
      <path d={`${TUBE} Z`} fill={C.glass} opacity="0.22" />
      <path d={TUBE} fill="none" stroke={C.white} strokeWidth="3.4" strokeLinejoin="round" />
      <rect x="133" y="19" width="54" height="8" rx="4" fill={C.white} />
      <path d="M146 34 V126" stroke={C.white} strokeWidth="5" strokeLinecap="round" opacity="0.7" />

      {/* kính bảo hộ */}
      <Shadow cx={48} cy={192} rx={36} ry={4} />
      <path
        d="M14 172 Q14 162 24 162 H72 Q82 162 82 172 V180 Q82 190 72 190 H24 Q14 190 14 180 Z"
        fill={C.blueFlame}
      />
      <rect x="20" y="167" width="25" height="18" rx="7" fill={C.glass} />
      <rect x="51" y="167" width="25" height="18" rx="7" fill={C.glass} />
      <path
        d="M24 172 l6 -3 M55 172 l6 -3"
        stroke={C.white}
        strokeWidth="2.6"
        strokeLinecap="round"
      />

      {/* lọ hoá chất */}
      <Shadow cx={274} cy={182} rx={28} ry={4.5} />
      <rect x="264" y="92" width="20" height="14" rx="4" fill={C.inkSoft} />
      <path
        d="M252 122 Q252 108 266 106 H282 Q296 108 296 122 V170 Q296 180 286 180 H262 Q252 180 252 170 Z"
        fill={BOTTLE}
      />
      <path
        d="M278 106 H282 Q296 108 296 122 V170 Q296 180 286 180 H278 Z"
        fill={BOTTLE_DARK}
        opacity="0.6"
      />
      <rect x="255" y="128" width="38" height="28" rx="4" fill={C.white} />
      <text
        x="274"
        y="147"
        textAnchor="middle"
        fontSize="13"
        fontWeight="800"
        fill={C.ink}
        fontFamily="inherit"
      >
        HCl
      </text>
    </Scene>
  )
}
