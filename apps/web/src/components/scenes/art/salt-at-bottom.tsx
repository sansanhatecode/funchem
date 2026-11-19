import { C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const WALL = '#FFF1E0'
const WALL_SHADE = '#FADDB8'
const SALT = '#FFFFFF'
const SALT_SHADE = '#DCE6F0'
const JAR_LID = '#4FADE0'
const JAR_LID_DEEP = '#2B8CC4'
const GLASS = 'M104 44 V150 Q104 168 122 168 H190 Q208 168 208 150 V44'

export function SaltAtBottomScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={150} />

      {/* hũ muối mở nắp */}
      <Shadow cx={264} cy={174} rx={34} ry={5} />
      <rect x="236" y="96" width="56" height="76" rx="10" fill={C.glass} opacity="0.75" />
      <path
        d="M240 122 Q264 112 288 122 V162 Q288 168 282 168 H246 Q240 168 240 162 Z"
        fill={SALT}
      />
      <path d="M264 117 Q278 116 288 122 V162 Q288 168 282 168 H264 Z" fill={SALT_SHADE} />
      <rect
        x="236"
        y="96"
        width="56"
        height="76"
        rx="10"
        fill="none"
        stroke={C.white}
        strokeWidth="3"
      />
      <rect x="232" y="86" width="64" height="14" rx="5" fill={JAR_LID} />
      <rect x="264" y="86" width="32" height="14" rx="5" fill={JAR_LID_DEEP} opacity="0.6" />

      {/* chiếc thìa nhỏ còn dính muối */}
      <Shadow cx={52} cy={186} rx={38} ry={4} />
      <path d="M20 186 L62 178" stroke={C.metal} strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="76" cy="176" rx="17" ry="8" fill={C.metal} transform="rotate(-10 76 176)" />
      <ellipse cx="76" cy="174" rx="11" ry="5" fill={SALT} transform="rotate(-10 76 174)" />

      {/* cốc nước muối */}
      <Shadow cx={156} cy={172} rx={64} ry={7} />
      <path d="M108 70 H204 V150 Q204 164 190 164 H122 Q108 164 108 150 Z" fill={C.water} />
      <path d="M156 70 H204 V150 Q204 164 190 164 H156 Z" fill={C.waterDeep} opacity="0.35" />
      <ellipse cx="156" cy="70" rx="48" ry="6" fill={C.waterDeep} />
      <ellipse
        cx="146"
        cy="69"
        rx="20"
        ry="2.4"
        fill={C.white}
        opacity="0.6"
        className="sc sc-float"
      />

      {/* lớp muối không tan nằm ở đáy */}
      <path
        d="M110 152 Q124 138 142 144 Q158 132 176 142 Q194 138 202 152 Q202 164 190 164 H122 Q110 164 110 152 Z"
        fill={SALT}
      />
      <path
        d="M158 138 Q176 136 190 142 Q200 144 202 152 Q202 164 190 164 H158 Z"
        fill={SALT_SHADE}
      />
      <g fill={SALT}>
        <rect x="128" y="134" width="5" height="5" rx="1" transform="rotate(20 130 136)" />
        <rect x="182" y="132" width="4" height="4" rx="1" transform="rotate(-15 184 134)" />
      </g>
      {/* vài hạt muối còn đang rơi xuống */}
      <g fill={SALT} className="sc sc-float">
        <rect x="140" y="112" width="4" height="4" rx="1" />
        <rect x="170" y="120" width="3.4" height="3.4" rx="1" />
        <rect x="154" y="100" width="3" height="3" rx="1" />
      </g>
      <Sparkle x={150} y={146} size={5} delay={0} />
      <Sparkle x={184} y={150} size={4} delay={-1.1} />

      {/* thìa khuấy trong cốc */}
      <g className="sc sc-sway" style={{ transformOrigin: '168px 150px' }}>
        <path d="M186 22 L168 136" stroke={C.metalLight} strokeWidth="6" strokeLinecap="round" />
        <path d="M186 22 L180 60" stroke={C.metal} strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* thành cốc */}
      <path d={`${GLASS} Z`} fill={C.glass} opacity="0.14" />
      <path d={GLASS} fill="none" stroke={C.white} strokeWidth="3.5" strokeLinejoin="round" />
      <ellipse cx="156" cy="44" rx="52" ry="7" fill="none" stroke={C.white} strokeWidth="3.5" />
      <path d="M116 58 V132" stroke={C.white} strokeWidth="5" strokeLinecap="round" opacity="0.6" />
    </Scene>
  )
}
