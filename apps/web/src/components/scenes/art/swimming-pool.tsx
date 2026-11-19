import { C, Cloud, Scene, type SceneProps, Sparkle } from '../kit'

const POOL = '#4FC3E8'
const POOL_DEEP = '#2AA3D4'
const POOL_LIGHT = '#9BE2F6'
const DECK = '#F3E3C4'
const DECK_DEEP = '#DCC59B'
const RING = '#FF8A3D'
const ROPE_RED = '#F25F5C'

/** Hồ bơi ngoài trời nước xanh trong, có dây phao, thang inox và chiếc phao bơi. */
export function SwimmingPoolScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <rect width="320" height="200" fill={C.sky} />
      <circle cx="268" cy="34" r="18" fill={C.sun} />
      <circle cx="268" cy="34" r="26" fill={C.sun} opacity="0.25" className="sc sc-pulse" />
      <Cloud x={60} y={30} scale={0.9} drift />
      {/* hàng rào cây phía xa */}
      <path
        d="M0 76 Q20 58 40 72 Q62 54 86 70 Q110 56 132 72 Q158 56 182 72 Q206 58 230 72 Q256 58 280 72 Q302 60 320 72 V92 H0 Z"
        fill={C.grassDeep}
      />
      {/* bờ hồ lát gạch */}
      <rect y="86" width="320" height="114" fill={DECK} />
      <rect y="86" width="320" height="6" fill={DECK_DEEP} />

      {/* mặt nước hình thang nhìn từ trên bờ */}
      <path d="M52 104 H268 L312 200 H8 Z" fill={POOL} />
      <path d="M52 104 H268 L272 112 H48 Z" fill={POOL_DEEP} />
      <path d="M8 200 L52 104 H64 L30 200 Z" fill={POOL_DEEP} opacity="0.55" />
      {/* vạch đáy hồ */}
      <path
        d="M120 112 L92 200 M160 112 V200 M200 112 L228 200"
        stroke={POOL_DEEP}
        strokeWidth="5"
        opacity="0.5"
      />
      {/* dây phao chia làn */}
      <path d="M100 112 L56 200" stroke={C.white} strokeWidth="4" strokeDasharray="9 9" />
      <path
        d="M100 112 L56 200"
        stroke={ROPE_RED}
        strokeWidth="4"
        strokeDasharray="9 9"
        strokeDashoffset="9"
      />
      {/* gợn sóng lấp lánh */}
      <g className="sc sc-float" style={{ animationDuration: '3.2s' }}>
        <path
          d="M132 130 q10 -5 20 0 t20 0 M196 150 q10 -5 20 0 t20 0 M120 176 q10 -5 20 0 t20 0"
          fill="none"
          stroke={POOL_LIGHT}
          strokeWidth="3.4"
          strokeLinecap="round"
        />
      </g>
      <g className="sc sc-float" style={{ animationDuration: '3.2s', animationDelay: '-1.6s' }}>
        <path
          d="M216 126 q8 -4 16 0 t16 0 M160 158 q8 -4 16 0 t16 0 M236 182 q8 -4 16 0 t16 0"
          fill="none"
          stroke={C.white}
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.85"
        />
      </g>
      <Sparkle x={182} y={134} size={5} delay={0} />
      <Sparkle x={248} y={164} size={4} delay={-1.1} />

      {/* chiếc phao bơi nổi trên mặt nước */}
      <g className="sc sc-float">
        <ellipse cx="206" cy="170" rx="30" ry="12" fill={POOL_DEEP} opacity="0.4" />
        <ellipse cx="206" cy="164" rx="22" ry="8" fill="none" stroke={RING} strokeWidth="11" />
        <path
          d="M186 158 A22 8 0 0 1 198 156.6 M214 156.6 A22 8 0 0 1 226 158 M190 171 A22 8 0 0 0 200 171.9"
          fill="none"
          stroke={C.white}
          strokeWidth="11"
        />
      </g>

      {/* thang inox */}
      <path
        d="M268 132 V84 Q268 72 280 72 Q292 72 292 84 M246 124 V78 Q246 66 258 66 Q270 66 270 78"
        fill="none"
        stroke={C.metalDark}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M268 132 V84 Q268 72 280 72 M246 124 V78 Q246 66 258 66"
        fill="none"
        stroke={C.metalLight}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M247 102 H268 M247 116 H268" stroke={C.metal} strokeWidth="4" />

      {/* dép và khăn tắm trên bờ */}
      <rect x="18" y="92" width="44" height="9" rx="4" fill={C.pink} />
      <rect x="18" y="92" width="14" height="9" rx="4" fill={C.white} opacity="0.7" />
      <ellipse cx="292" cy="98" rx="8" ry="3.4" fill={C.purple} />
      <ellipse cx="306" cy="101" rx="8" ry="3.4" fill={C.purple} />
    </Scene>
  )
}
