import { C, Cloud, Flame, Scene, type SceneProps } from '../kit'

const SEA = '#4FA9DC'
const SEA_DEEP = '#2F86BF'
const SEA_LIGHT = '#8FD0F2'
const DECK = '#F2B43A'
const DECK_DEEP = '#D4922A'
const LEG = '#5B6B80'
const STEEL = '#C8433F'
const CABIN = '#F4F7FA'

export function OilRigScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <rect width="320" height="200" fill={C.sky} />
      <circle cx="46" cy="38" r="18" fill={C.sun} />
      <circle cx="46" cy="38" r="26" fill={C.sun} opacity="0.25" className="sc sc-pulse" />
      <Cloud x={130} y={30} scale={0.8} drift />
      <Cloud x={250} y={62} scale={0.55} drift delay={-14} />

      {/* biển */}
      <rect y="142" width="320" height="58" fill={SEA} />
      <rect y="170" width="320" height="30" fill={SEA_DEEP} opacity="0.55" />

      {/* chân giàn cắm xuống biển */}
      <g stroke={LEG} strokeWidth="8" strokeLinecap="round">
        <path d="M96 118 V176 M150 118 V176 M204 118 V176" />
      </g>
      <g stroke={LEG} strokeWidth="3.5" strokeLinecap="round" opacity="0.8">
        <path d="M96 122 L150 146 M150 122 L96 146 M150 122 L204 146 M204 122 L150 146" />
      </g>

      {/* cần đốt khí chìa ra ngoài, đầu cần là ngọn đuốc */}
      <path d="M210 108 L286 62" stroke={LEG} strokeWidth="5" strokeLinecap="round" />
      <path d="M232 108 L262 78" stroke={LEG} strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <Flame x={290} y={62} size={30} />
      <circle cx="290" cy="48" r="20" fill={C.flame} opacity="0.18" className="sc sc-pulse" />

      {/* sàn giàn khoan */}
      <rect x="78" y="100" width="150" height="20" rx="4" fill={DECK} />
      <rect x="78" y="112" width="150" height="8" rx="4" fill={DECK_DEEP} />
      <rect x="84" y="103" width="60" height="4" rx="2" fill={C.white} opacity="0.4" />

      {/* tháp khoan */}
      <path
        d="M150 20 L128 100 H172 Z"
        fill="none"
        stroke={STEEL}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <g stroke={STEEL} strokeWidth="3" strokeLinecap="round">
        <path d="M144 44 H156 M139 62 H161 M134 80 H166" />
        <path d="M144 44 L161 62 M156 44 L139 62 M139 62 L166 80 M161 62 L134 80" opacity="0.75" />
      </g>
      <rect x="146" y="12" width="8" height="12" rx="3" fill={C.ink} />
      {/* cần khoan đi xuống đáy biển */}
      <path d="M150 100 V180" stroke={C.ink} strokeWidth="3" strokeLinecap="round" />

      {/* nhà điều hành và sân trực thăng */}
      <rect x="182" y="76" width="40" height="24" rx="4" fill={CABIN} />
      <rect x="188" y="82" width="10" height="8" rx="2" fill={SEA_LIGHT} />
      <rect x="204" y="82" width="10" height="8" rx="2" fill={SEA_LIGHT} />
      <rect x="62" y="92" width="40" height="6" rx="3" fill={C.metalDark} />
      <path d="M80 98 V104" stroke={C.metalDark} strokeWidth="5" />
      {/* cần cẩu nhỏ */}
      <path
        d="M108 100 V74 L84 62"
        fill="none"
        stroke={C.ink}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M86 63 V78" stroke={C.ink} strokeWidth="1.6" />

      {/* sóng */}
      <g
        fill="none"
        stroke={SEA_LIGHT}
        strokeWidth="3"
        strokeLinecap="round"
        className="sc sc-float"
      >
        <path d="M14 156 q8 -6 16 0 t16 0" />
        <path d="M232 160 q8 -6 16 0 t16 0" />
        <path d="M110 184 q8 -6 16 0 t16 0" />
        <path d="M268 186 q8 -6 16 0 t16 0" />
      </g>
      <g fill={C.white} opacity="0.6">
        <ellipse cx="96" cy="176" rx="12" ry="3" />
        <ellipse cx="150" cy="178" rx="12" ry="3" />
        <ellipse cx="204" cy="176" rx="12" ry="3" />
      </g>
    </Scene>
  )
}
