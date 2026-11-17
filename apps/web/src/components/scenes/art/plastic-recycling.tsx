import { C, OutdoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const BIN = '#2FA8E0'
const BIN_DEEP = '#1F86BC'
const BIN_LID = '#52C0F0'
const PET = '#BDE8FA'
const PET_DEEP = '#8FD0EE'
const JUG = '#FFFFFF'
const JUG_SHADE = '#DCE5EE'
const BAG = '#FFC7D9'
const BAG_DEEP = '#F29AB8'

/** Chai nhựa đứng thẳng: đáy ở (0,0), cao 62. */
function Bottle({ cap = C.red, label = C.green }: { cap?: string; label?: string }) {
  return (
    <g>
      <path
        d="M-11 -4 V-38 Q-11 -46 -5 -50 V-56 H5 V-50 Q11 -46 11 -38 V-4 Q11 0 7 0 H-7 Q-11 0 -11 -4 Z"
        fill={PET}
      />
      <path d="M3 -56 H5 V-50 Q11 -46 11 -38 V-4 Q11 0 7 0 H3 Z" fill={PET_DEEP} />
      <rect x="-11" y="-32" width="22" height="13" fill={label} />
      <rect x="3" y="-32" width="8" height="13" fill={C.ink} opacity="0.18" />
      <rect x="-6" y="-63" width="12" height="8" rx="2.5" fill={cap} />
      <rect x="-8" y="-46" width="3" height="40" rx="1.5" fill={C.white} opacity="0.8" />
    </g>
  )
}

/** Một mũi tên trong vòng tái chế, vẽ quanh tâm (0,0). */
function RecycleArrow({ rot }: { rot: number }) {
  return (
    <g transform={`rotate(${rot})`}>
      <path
        d="M-9 -8 L0 -22 L8 -9"
        fill="none"
        stroke={C.white}
        strokeWidth="5.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M2 -8 L14 -6 L7 -18 Z" fill={C.white} />
    </g>
  )
}

export function PlasticRecyclingScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <OutdoorBg groundY={142} />

      {/* thùng tái chế */}
      <Shadow cx={112} cy={184} rx={66} ry={7} />
      {/* chai nhựa nhô ra khỏi miệng thùng */}
      <g transform="translate(88 86) rotate(-16)">
        <Bottle cap={C.gold} label={C.red} />
      </g>
      <g transform="translate(132 88) rotate(12)">
        <Bottle cap={C.blueFlame} label={C.gold} />
      </g>
      <path d="M62 76 H162 L152 176 Q151 184 143 184 H81 Q73 184 72 176 Z" fill={BIN} />
      <path d="M124 76 H162 L152 176 Q151 184 143 184 H124 Z" fill={BIN_DEEP} opacity="0.7" />
      <rect x="54" y="68" width="116" height="13" rx="6" fill={BIN_LID} />
      <rect x="120" y="68" width="50" height="13" rx="6" fill={BIN} />
      <path
        d="M78 92 L84 168"
        stroke={C.white}
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.45"
      />
      <g transform="translate(112 136)">
        <RecycleArrow rot={0} />
        <RecycleArrow rot={120} />
        <RecycleArrow rot={240} />
      </g>

      {/* chai đang được thả vào thùng */}
      <g className="sc sc-float" style={{ animationDuration: '2.4s' }}>
        <g transform="translate(112 62) rotate(8)">
          <Bottle />
        </g>
      </g>
      <Sparkle x={134} y={18} size={7} />
      <Sparkle x={86} y={30} size={5} delay={-1} />

      {/* đống chai lọ nhựa chờ phân loại */}
      <Shadow cx={244} cy={186} rx={66} ry={6} />
      <g transform="translate(206 184)">
        <Bottle cap={C.blueFlame} label={C.blueFlame} />
      </g>
      {/* can nhựa trắng */}
      <path
        d="M226 132 Q226 122 236 122 H244 V114 H258 V122 H262 Q272 122 272 132 V178 Q272 184 266 184 H232 Q226 184 226 178 Z"
        fill={JUG}
      />
      <path
        d="M254 114 H258 V122 H262 Q272 122 272 132 V178 Q272 184 266 184 H254 Z"
        fill={JUG_SHADE}
      />
      <rect x="242" y="107" width="18" height="9" rx="3" fill={C.red} />
      <rect x="232" y="142" width="26" height="22" rx="3" fill={C.yellow} />
      <path
        d="M258 130 h8 v22 h-8"
        fill="none"
        stroke={JUG_SHADE}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* chai nằm ngang */}
      <g transform="translate(250 190) rotate(78)">
        <Bottle cap={C.green} label={C.pink} />
      </g>
      {/* túi nilon nhàu */}
      <path
        d="M176 186 Q170 170 184 166 Q186 154 196 162 Q208 160 204 174 Q212 184 200 188 Z"
        fill={BAG}
      />
      <path
        d="M186 168 Q192 176 188 186 M198 166 Q196 176 202 182"
        fill="none"
        stroke={BAG_DEEP}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <Sparkle x={214} y={134} size={5} delay={-0.5} />
      <Sparkle x={290} y={166} size={5} delay={-1.6} />
    </Scene>
  )
}
