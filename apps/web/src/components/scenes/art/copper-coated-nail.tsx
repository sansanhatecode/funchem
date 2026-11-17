import { useId } from 'react'
import { C, IndoorBg, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const SOLUTION = '#4FB4F2'
const SOLUTION_DEEP = '#2F92DC'
const SOLUTION_PALE = '#A8DCFA'
const COPPER = '#D9713F'
const COPPER_DARK = '#A84E24'
const COPPER_LIGHT = '#F2A06E'
const BEAKER = 'M100 40 V156 Q100 170 114 170 H206 Q220 170 220 156 V40'
const LIQUID = 'M100 86 V156 Q100 170 114 170 H206 Q220 170 220 156 V86 Z'

/** Cây đinh nằm ngang: mũ đinh ở gốc (0,0), mũi nhọn ở x = 150. */
function NailShape({ body, shade, light }: { body: string; shade: string; light: string }) {
  return (
    <g>
      <path d="M0 -7 H126 L150 0 L126 7 H0 Z" fill={body} />
      <path d="M0 2 H128 L144 2 L126 7 H0 Z" fill={shade} opacity="0.6" />
      <rect x="6" y="-5" width="112" height="2.6" rx="1.3" fill={light} />
      <rect x="-11" y="-16" width="12" height="32" rx="4.5" fill={shade} />
      <rect x="-11" y="-16" width="5.5" height="32" rx="2.75" fill={body} />
    </g>
  )
}

export function CopperCoatedNailScene(props: SceneProps) {
  const clip = useId()
  return (
    <Scene {...props}>
      <IndoorBg tableY={152} />

      {/* cây đinh sắt còn mới để so sánh */}
      <g transform="translate(246 184) rotate(-12) scale(0.42)">
        <Shadow cx={74} cy={14} rx={76} ry={5} />
        <NailShape body={C.metal} shade={C.metalDark} light={C.metalLight} />
      </g>
      <Sparkle x={278} y={168} size={5} />

      {/* dung dịch copper(II) sulfate xanh lam */}
      <Shadow cx={162} cy={173} rx={72} ry={7} />
      <path d={LIQUID} fill={SOLUTION} />
      <path d="M172 86 H220 V156 Q220 170 206 170 H172 Z" fill={SOLUTION_DEEP} opacity="0.55" />
      {/* quanh đinh, dung dịch đã nhạt màu */}
      <ellipse
        cx="170"
        cy="124"
        rx="30"
        ry="42"
        fill={SOLUTION_PALE}
        opacity="0.5"
        transform="rotate(-28 170 124)"
        className="sc sc-pulse"
      />
      <ellipse cx="160" cy="86" rx="60" ry="6" fill={SOLUTION_PALE} />

      {/* đinh sắt: phần ngập trong dung dịch phủ lớp đồng đỏ nâu */}
      <clipPath id={clip}>
        <rect x="90" y="87" width="140" height="90" />
      </clipPath>
      <g transform="translate(126 20) rotate(62)">
        <NailShape body={C.metal} shade={C.metalDark} light={C.metalLight} />
      </g>
      <g clipPath={`url(#${clip})`}>
        <g transform="translate(126 20) rotate(62)">
          <path d="M60 -9 H126 L154 0 L126 9 H60 Z" fill={COPPER} />
          <path d="M60 2 H130 L146 3 L126 9 H60 Z" fill={COPPER_DARK} opacity="0.6" />
          <g fill={COPPER}>
            <circle cx="82" cy="-9" r="3.4" />
            <circle cx="98" cy="9" r="3.8" />
            <circle cx="112" cy="-8.5" r="3" />
            <circle cx="128" cy="8" r="3.2" />
            <circle cx="140" cy="-4" r="2.6" />
          </g>
          <g fill={COPPER_LIGHT}>
            <circle cx="88" cy="-3" r="2.4" />
            <circle cx="106" cy="-4" r="2" />
            <circle cx="122" cy="-2" r="2.4" />
            <circle cx="136" cy="0" r="1.8" />
          </g>
          <g fill={COPPER_DARK}>
            <circle cx="96" cy="3" r="2.2" />
            <circle cx="116" cy="4" r="2.6" />
            <circle cx="132" cy="3" r="1.8" />
          </g>
        </g>
      </g>
      {/* vụn đồng li ti rơi xuống đáy cốc */}
      <g fill={COPPER} className="sc sc-float">
        <circle cx="176" cy="160" r="2.2" />
        <circle cx="204" cy="150" r="1.8" />
        <circle cx="150" cy="158" r="1.6" />
      </g>
      <g fill={COPPER_DARK}>
        <circle cx="188" cy="165" r="2.4" />
        <circle cx="200" cy="166" r="1.8" />
        <circle cx="166" cy="166" r="2" />
      </g>
      <Sparkle x={186} y={128} size={5} color={COPPER_LIGHT} delay={-0.6} />
      <Sparkle x={160} y={108} size={4} color={COPPER_LIGHT} delay={-1.5} />

      {/* cốc thuỷ tinh */}
      <path d={`${BEAKER} Z`} fill={C.glass} opacity="0.16" />
      <path d={BEAKER} fill="none" stroke={C.white} strokeWidth="3.4" strokeLinejoin="round" />
      <path d="M92 40 H228" stroke={C.white} strokeWidth="5" strokeLinecap="round" />
      <path d="M110 52 V150" stroke={C.white} strokeWidth="6" strokeLinecap="round" opacity="0.6" />
      <path
        d="M206 70 h8 M206 100 h8 M206 130 h8 M210 85 h4 M210 115 h4 M210 145 h4"
        stroke={C.white}
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.9"
      />
    </Scene>
  )
}
