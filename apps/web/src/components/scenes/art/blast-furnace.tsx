import { Bubble, C, Cloud, Flame, Scene, type SceneProps, Sparkle } from '../kit'

const SKY = '#FFE3C2'
const FAR = '#F2C59C'
const FLOOR = '#8E7C78'
const FLOOR_DEEP = '#75645F'
const STEEL = '#5B6B80'
const STEEL_DARK = '#3D4B5E'
const STEEL_LIGHT = '#7F8FA3'
const MOLTEN = '#FF8A2B'
const MOLTEN_CORE = '#FFE27A'
const FURNACE = 'M100 170 L108 100 Q110 84 122 74 L130 34 H182 L190 74 Q202 84 204 100 L212 170 Z'

export function BlastFurnaceScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <rect width="320" height="200" fill={SKY} />
      <circle cx="286" cy="34" r="18" fill={C.sun} />
      <Cloud x={62} y={30} scale={0.8} drift />
      {/* dãy nhà xưởng phía xa */}
      <path
        d="M0 150 V120 H40 V132 H70 V110 H96 V150 Z M228 150 V124 H262 V112 H296 V128 H320 V150 Z"
        fill={FAR}
      />
      <rect y="150" width="320" height="50" fill={FLOOR} />
      <rect y="150" width="320" height="6" fill={FLOOR_DEEP} />

      {/* băng nâng đưa quặng và than cốc lên đỉnh lò */}
      <path d="M10 168 L128 30" stroke={STEEL_DARK} strokeWidth="6" strokeLinecap="round" />
      <path d="M34 168 V140 M62 168 V108 M90 168 V76" stroke={STEEL_DARK} strokeWidth="4" />
      <g className="sc sc-float" style={{ animationDuration: '3s' }}>
        <rect
          x="44"
          y="106"
          width="20"
          height="13"
          rx="3"
          fill={C.rust}
          transform="rotate(-49.5 54 112)"
        />
        <rect
          x="84"
          y="59"
          width="20"
          height="13"
          rx="3"
          fill={C.ink}
          transform="rotate(-49.5 94 65)"
        />
      </g>

      {/* đống quặng nâu đỏ và than cốc */}
      <path d="M0 176 Q20 150 44 176 Z" fill={C.rust} />
      <path d="M18 176 Q26 164 44 176 Z" fill={C.rustDark} opacity="0.6" />
      <path d="M38 180 Q56 160 78 180 Z" fill={C.ink} />
      <path d="M56 180 Q64 170 78 180 Z" fill={C.inkSoft} opacity="0.6" />

      {/* ống dẫn khí lò và tháp lọc bụi */}
      <path
        d="M178 30 L258 78 V96"
        fill="none"
        stroke={STEEL_DARK}
        strokeWidth="11"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <rect x="240" y="92" width="38" height="66" rx="8" fill={STEEL} />
      <rect x="262" y="92" width="16" height="66" rx="8" fill={STEEL_DARK} opacity="0.6" />
      <path d="M244 158 L250 170 H268 L274 158 Z" fill={STEEL_DARK} />

      {/* thân lò cao */}
      <path d={FURNACE} fill={STEEL} />
      <path
        d="M156 34 H182 L190 74 Q202 84 204 100 L212 170 H156 Z"
        fill={STEEL_DARK}
        opacity="0.55"
      />
      <path d="M138 42 L134 66" stroke={STEEL_LIGHT} strokeWidth="5" strokeLinecap="round" />
      <path d="M118 112 L116 128" stroke={STEEL_LIGHT} strokeWidth="5" strokeLinecap="round" />
      <path
        d="M121 74 H191 M107 104 H205 M104 136 H208"
        stroke={STEEL_DARK}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <rect x="122" y="22" width="68" height="14" rx="5" fill={STEEL_DARK} />
      {/* cửa quan sát rực lửa */}
      <circle cx="156" cy="120" r="19" fill={MOLTEN} opacity="0.35" className="sc sc-pulse" />
      <circle cx="156" cy="120" r="13" fill={STEEL_DARK} />
      <circle cx="156" cy="120" r="9.5" fill={MOLTEN} />
      <circle cx="156" cy="120" r="5" fill={MOLTEN_CORE} className="sc sc-pulse" />
      <g fill={MOLTEN}>
        <circle cx="122" cy="152" r="3.4" />
        <circle cx="142" cy="154" r="3.4" />
        <circle cx="170" cy="154" r="3.4" />
        <circle cx="190" cy="152" r="3.4" />
      </g>
      {/* khói trắng trên đỉnh lò */}
      <g fill={C.white} opacity="0.9" className="sc sc-float">
        <circle cx="150" cy="14" r="9" />
        <circle cx="164" cy="8" r="11" />
        <circle cx="178" cy="14" r="8" />
      </g>

      {/* dòng gang nóng chảy rót vào thùng */}
      <circle cx="250" cy="176" r="34" fill={MOLTEN} opacity="0.25" className="sc sc-pulse" />
      <path d="M206 160 H232 L236 168 H206 Z" fill={STEEL_DARK} />
      <path
        d="M208 160 H226 Q240 160 242 176"
        fill="none"
        stroke={MOLTEN}
        strokeWidth="11"
        strokeLinecap="round"
      />
      <path
        d="M208 160 H226 Q239 160 241 174"
        fill="none"
        stroke={MOLTEN_CORE}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M218 172 H286 L280 192 Q279 197 273 197 H231 Q225 197 224 192 Z" fill={STEEL_DARK} />
      <ellipse cx="252" cy="173" rx="34" ry="6.5" fill={STEEL} />
      <ellipse cx="252" cy="173.5" rx="29" ry="4.6" fill={MOLTEN} />
      <ellipse cx="248" cy="173" rx="15" ry="2.4" fill={MOLTEN_CORE} />
      <path
        d="M212 180 H218 M286 180 H294"
        stroke={STEEL_DARK}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <Flame x={212} y={160} size={15} outer={MOLTEN} core={MOLTEN_CORE} />
      <Bubble x={240} y={168} r={2.2} color={MOLTEN_CORE} delay={0} duration={1.4} />
      <Bubble x={258} y={166} r={1.8} color={MOLTEN} delay={-0.5} duration={1.7} />
      <Bubble x={268} y={168} r={2} color={MOLTEN_CORE} delay={-0.9} duration={1.5} />
      <Sparkle x={228} y={146} size={6} color={MOLTEN_CORE} />
      <Sparkle x={270} y={150} size={5} color={MOLTEN_CORE} delay={-0.8} />
      <Sparkle x={250} y={138} size={4} color={C.white} delay={-1.5} />
    </Scene>
  )
}
