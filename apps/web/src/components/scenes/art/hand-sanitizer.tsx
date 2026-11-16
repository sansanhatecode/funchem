import { useId } from 'react'
import { Bubble, C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const GEL = '#6BD8CF'
const GEL_DEEP = '#35B5AB'
const PUMP = C.waterDeep
const PUMP_DEEP = '#3A8CC2'
const SKIN = '#F8D0A8'
const SKIN_DEEP = '#E9B286'
const BOTTLE =
  'M88 96 Q88 78 106 76 H134 Q152 78 152 96 V158 Q152 170 140 170 H100 Q88 170 88 158 Z'

export function HandSanitizerScene(props: SceneProps) {
  const clip = useId()
  return (
    <Scene {...props}>
      <IndoorBg wall="#FFEADF" wallShade="#FFD5C2" tableY={160} />

      {/* khăn treo trên thanh */}
      <rect x="226" y="24" width="82" height="5" rx="2.5" fill={C.metalDark} />
      <rect x="240" y="22" width="54" height="62" rx="6" fill={C.white} />
      <rect x="240" y="64" width="54" height="8" fill={GEL} opacity="0.8" />
      <rect x="240" y="22" width="54" height="9" rx="4.5" fill={C.metalLight} />

      {/* bàn tay ngửa hứng gel */}
      <g transform="translate(-10 2)">
        <rect
          x="262"
          y="118"
          width="80"
          height="40"
          rx="10"
          fill={C.purple}
          transform="rotate(-6 262 138)"
        />
        <rect
          x="262"
          y="118"
          width="12"
          height="40"
          rx="6"
          fill={C.white}
          opacity="0.45"
          transform="rotate(-6 262 138)"
        />
        <rect
          x="238"
          y="98"
          width="17"
          height="40"
          rx="8.5"
          fill={SKIN_DEEP}
          transform="rotate(-36 246 128)"
        />
        <rect
          x="176"
          y="124"
          width="98"
          height="25"
          rx="12.5"
          fill={SKIN}
          transform="rotate(-6 226 136)"
        />
        <rect
          x="186"
          y="140"
          width="84"
          height="9"
          rx="4.5"
          fill={SKIN_DEEP}
          opacity="0.7"
          transform="rotate(-6 226 136)"
        />
        <rect
          x="172"
          y="112"
          width="16"
          height="28"
          rx="8"
          fill={SKIN}
          transform="rotate(-22 180 130)"
        />
        <ellipse cx="204" cy="127" rx="17" ry="7.5" fill={GEL} />
        <ellipse cx="208" cy="129" rx="12" ry="4" fill={GEL_DEEP} opacity="0.45" />
        <ellipse cx="198" cy="124.5" rx="6" ry="2" fill={C.white} opacity="0.8" />
      </g>

      {/* giọt gel rơi; ma trận nghiêng để khử độ trôi ngang của sc-rain */}
      <clipPath id={clip}>
        <rect x="176" y="53" width="20" height="70" />
      </clipPath>
      <g clipPath={`url(#${clip})`}>
        <g transform="matrix(1 0 0.133 1 0 0)">
          <path
            d="M175.2 76 q5.5 9 0 14 q-5.5 -5 0 -14"
            fill={GEL}
            className="sc sc-rain"
            style={{ animationDuration: '1.5s' }}
          />
        </g>
      </g>

      {/* chai có vòi nhấn */}
      <Shadow cx={124} cy={172} rx={44} ry={6} />
      <rect x="116" y="42" width="8" height="24" fill={C.metalLight} />
      <path d="M128 31 H152 Q186 31 191 45 V52 H181 V47 Q179 41 166 41 H128 Z" fill={PUMP} />
      <rect x="100" y="28" width="40" height="16" rx="6" fill={PUMP} />
      <path
        d="M100 38 H166 Q181 39 184 47 V52 H181 V47 Q179 41 166 41 H139 Q138 44 134 44 H106 Q100 44 100 38 Z"
        fill={PUMP_DEEP}
        opacity="0.6"
      />
      <rect x="106" y="31" width="22" height="3.4" rx="1.7" fill={C.white} opacity="0.55" />
      <rect x="107" y="60" width="26" height="18" rx="4" fill={PUMP} />
      <path
        d="M113 63 v12 M120 63 v12 M127 63 v12"
        stroke={PUMP_DEEP}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path d="M92 102 H148 V157 Q148 166 139 166 H101 Q92 166 92 157 Z" fill={GEL} />
      <path d="M126 102 H148 V157 Q148 166 139 166 H126 Z" fill={GEL_DEEP} opacity="0.45" />
      <rect x="92" y="102" width="56" height="4" fill={GEL_DEEP} opacity="0.7" />
      <path
        d="M120 78 L123 160"
        stroke={C.white}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
      <Bubble x={102} y={160} r={2.4} />
      <Bubble x={140} y={162} r={2.8} delay={-1.4} />
      <path d={BOTTLE} fill={C.white} opacity="0.35" />
      <path d={BOTTLE} fill="none" stroke={C.white} strokeWidth="3" />
      <path
        d="M96 100 V152"
        stroke={C.white}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.65"
      />
      {/* nhãn chai: giọt nước, không chữ */}
      <rect x="106" y="110" width="28" height="28" rx="7" fill={C.white} opacity="0.95" />
      <path
        d="M120 115 C115 122 113.5 125.5 113.5 127.5 A6.5 6.5 0 0 0 126.5 127.5 C126.5 125.5 125 122 120 115 Z"
        fill={GEL_DEEP}
      />

      <Sparkle x={64} y={58} size={9} color={C.gold} />
      <Sparkle x={216} y={84} size={7} color={C.gold} delay={-0.8} />
      <Sparkle x={168} y={100} size={5} color={C.gold} delay={-1.5} />
    </Scene>
  )
}
