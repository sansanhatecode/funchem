import { C, Scene, type SceneProps, Shadow } from '../kit'

const WALL = '#FFF3DC'
const CEILING = '#E9D9B8'
const FLOOR = '#E3B37C'
const FLOOR_DEEP = '#C48B50'
const HELIUM = '#F25F5C'
const HELIUM_DEEP = '#D03F3C'
const BREATH = '#4FADE0'
const BREATH_DEEP = '#2F8CC2'
const FLAGS = [C.red, C.gold, C.green, C.purple, C.pink, C.waterDeep, C.gold, C.red]

/** Phòng tiệc sinh nhật: quả bóng helium bay sát trần, quả bóng thổi bằng miệng nằm trên sàn. */
export function PartyBalloonsScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <rect width="320" height="200" fill={WALL} />
      {/* trần nhà */}
      <rect width="320" height="14" fill={CEILING} />
      <rect y="14" width="320" height="3" fill={C.woodDeep} opacity="0.35" />
      {/* dây cờ tam giác */}
      <path d="M0 30 Q160 62 320 30" fill="none" stroke={C.inkSoft} strokeWidth="1.6" />
      {FLAGS.map((color, i) => {
        const x = 18 + i * 40
        const t = x / 320
        const y = 30 + 64 * t * (1 - t)
        return <path key={i} d={`M${x - 9} ${y} H${x + 9} L${x} ${y + 17} Z`} fill={color} />
      })}

      {/* sàn gỗ */}
      <rect y="150" width="320" height="50" fill={FLOOR} />
      <rect y="150" width="320" height="6" fill={FLOOR_DEEP} />
      <rect y="174" width="320" height="2" fill={FLOOR_DEEP} opacity="0.35" />

      {/* bàn có bánh sinh nhật */}
      <rect x="226" y="122" width="88" height="8" rx="3" fill={C.woodDeep} />
      <rect x="236" y="130" width="8" height="40" fill={C.woodDark} />
      <rect x="298" y="130" width="8" height="40" fill={C.woodDark} />
      <rect x="244" y="100" width="52" height="22" rx="5" fill={C.pink} />
      <path
        d="M244 108 q6.5 7 13 0 t13 0 t13 0 t13 0 V104 Q296 100 291 100 H249 Q244 100 244 104 Z"
        fill={C.white}
      />
      <rect x="268" y="84" width="4" height="16" rx="2" fill={C.gold} />
      <path d="M270 74 Q275 80 270 85 Q265 80 270 74 Z" fill={C.flame} className="sc sc-flicker" />

      {/* quả bóng helium bay lên, chạm trần */}
      <g className="sc sc-float" style={{ animationDuration: '5s' }}>
        <path
          d="M112 76 Q104 104 114 126 Q120 140 112 152"
          fill="none"
          stroke={C.inkSoft}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <ellipse cx="112" cy="46" rx="26" ry="31" fill={HELIUM} />
        <path d="M112 77 A26 31 0 0 0 138 46 A34 40 0 0 1 112 77 Z" fill={HELIUM_DEEP} />
        <path d="M107 76 H117 L112 82 Z" fill={HELIUM_DEEP} />
        <ellipse cx="102" cy="34" rx="6" ry="10" fill={C.white} opacity="0.55" />
      </g>

      {/* quả bóng thổi bằng miệng nằm trên sàn */}
      <Shadow cx={166} cy={182} rx={36} ry={5} />
      <ellipse cx="164" cy="158" rx="31" ry="25" fill={BREATH} />
      <path d="M164 183 A31 25 0 0 0 195 158 A40 32 0 0 1 164 183 Z" fill={BREATH_DEEP} />
      <path d="M193 163 L201 164 L198 171 Z" fill={BREATH_DEEP} />
      <path
        d="M199 167 Q214 172 220 182 Q226 190 238 188"
        fill="none"
        stroke={C.inkSoft}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <ellipse cx="152" cy="148" rx="9" ry="6" fill={C.white} opacity="0.55" />

      {/* hộp quà và mũ sinh nhật */}
      <Shadow cx={52} cy={184} rx={30} ry={4} />
      <rect x="28" y="152" width="48" height="32" rx="4" fill={C.purple} />
      <rect x="48" y="152" width="8" height="32" fill={C.yellow} />
      <rect x="24" y="146" width="56" height="10" rx="3" fill={C.purple} />
      <rect x="24" y="146" width="56" height="10" rx="3" fill={C.ink} opacity="0.12" />
      <path
        d="M52 146 Q40 132 36 142 Q38 148 52 146 Q64 132 68 142 Q66 148 52 146 Z"
        fill={C.yellow}
      />
    </Scene>
  )
}
