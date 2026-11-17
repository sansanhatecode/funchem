import { C, Scene, type SceneProps, Shadow, Sparkle } from '../kit'

const SKY = '#BFDDF5'
const SKY_LOW = '#DCEEFA'
const HILL = '#9CCFC0'
const TRACK = '#E58B6B'
const TRACK_DEEP = '#CF7253'
const SKIN = '#F6CFA6'
const SKIN_DEEP = '#E8B288'
const HAT = '#7C5CD6'
const HAT_DEEP = '#5E41B8'
const JACKET = '#FFB23E'
const JACKET_DEEP = '#E8922A'
const PANTS = '#34507A'
const TREE = '#7FBF9E'
const TREE_DEEP = '#5FA683'

/** Cụm hơi thở trắng: vài đám tròn chồng lên nhau, tan dần khi bay lên. */
function Puff({ x, y, s, delay }: { x: number; y: number; s: number; delay: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="sc sc-float" style={{ animationDelay: `${delay}s`, animationDuration: '2.4s' }}>
        <g transform={`scale(${s})`} fill={C.white}>
          <circle cx="0" cy="0" r="9" />
          <circle cx="10" cy="-4" r="7" />
          <circle cx="-9" cy="-3" r="6" />
          <circle cx="3" cy="-9" r="6" />
        </g>
      </g>
    </g>
  )
}

function Tree({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-3" y="-8" width="6" height="22" rx="3" fill={C.woodDark} />
      <circle cx="0" cy="-22" r="18" fill={TREE} />
      <path d="M0 -40 A18 18 0 0 1 0 -4 Z" fill={TREE_DEEP} opacity="0.55" />
    </g>
  )
}

export function JoggingBreathScene(props: SceneProps) {
  return (
    <Scene {...props}>
      {/* trời sáng sớm mùa đông */}
      <rect width="320" height="200" fill={SKY} />
      <rect y="92" width="320" height="50" fill={SKY_LOW} />
      <circle cx="52" cy="50" r="19" fill={C.sun} opacity="0.9" />
      <circle cx="52" cy="50" r="28" fill={C.sun} opacity="0.22" className="sc sc-pulse" />
      <path d="M0 132 Q70 104 150 126 T320 112 V200 H0 Z" fill={HILL} />
      <Tree x={24} y={128} s={0.9} />
      <Tree x={286} y={122} s={1.1} />
      <Tree x={246} y={126} s={0.7} />

      {/* đường chạy */}
      <rect y="150" width="320" height="50" fill={TRACK} />
      <rect y="150" width="320" height="5" fill={TRACK_DEEP} />
      <path
        d="M0 176 H320"
        stroke={C.white}
        strokeWidth="3"
        strokeDasharray="26 18"
        opacity="0.75"
      />
      <Shadow cx={132} cy={184} rx={46} ry={6} />

      {/* bạn nhỏ đang chạy, mặt quay sang phải */}
      <g className="sc sc-float" style={{ animationDuration: '0.7s' }}>
        {/* chân sau duỗi ra phía sau */}
        <path
          d="M122 132 L100 150 L74 152"
          fill="none"
          stroke={PANTS}
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M60 144 h16 q6 0 6 7 v5 h-22 q-6 0 -6 -6 q0 -6 6 -6 Z" fill={C.white} />
        <rect x="54" y="153" width="28" height="4" rx="2" fill={C.red} />
        {/* tay sau */}
        <path
          d="M128 96 L106 108 L98 126"
          fill="none"
          stroke={JACKET_DEEP}
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="97" cy="129" r="6.5" fill={SKIN_DEEP} />
        {/* chân trước co lên */}
        <path
          d="M130 132 L156 146 L150 174"
          fill="none"
          stroke={PANTS}
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M142 170 h20 q8 0 8 7 v5 h-28 q-5 0 -5 -6 q0 -6 5 -6 Z" fill={C.white} />
        <rect x="137" y="179" width="33" height="4" rx="2" fill={C.red} />
        {/* thân áo khoác */}
        <path
          d="M118 88 Q116 80 126 78 H146 Q156 80 154 90 L146 132 Q144 140 134 140 H124 Q114 140 114 130 Z"
          fill={JACKET}
        />
        <path d="M140 78 H146 Q156 80 154 90 L146 132 Q144 140 134 140 Z" fill={JACKET_DEEP} />
        {/* khăn quàng bay về phía sau */}
        <g className="sc sc-sway" style={{ animationDuration: '0.9s' }}>
          <path d="M122 84 L92 78 L96 92 L122 92 Z" fill={C.red} />
          <path d="M92 78 L84 82 L96 92 Z" fill={C.redDeep} />
        </g>
        <rect x="118" y="76" width="36" height="12" rx="6" fill={C.red} />
        {/* đầu */}
        <circle cx="138" cy="56" r="23" fill={SKIN} />
        <path d="M138 79 A23 23 0 0 0 160 62 Q150 76 138 79 Z" fill={SKIN_DEEP} opacity="0.6" />
        <circle cx="150" cy="56" r="3" fill={C.ink} />
        <circle cx="151" cy="55" r="1" fill={C.white} />
        <circle cx="146" cy="66" r="4.5" fill={C.pink} opacity="0.75" />
        <ellipse cx="158" cy="67" rx="3.2" ry="4" fill={C.redDeep} />
        <path
          d="M144 48 q5 -3 10 0"
          fill="none"
          stroke={C.ink}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* mũ len */}
        <path d="M114 52 Q114 28 138 28 Q162 28 162 50 Q138 40 114 52 Z" fill={HAT} />
        <path d="M138 28 Q162 28 162 50 Q150 45 138 43 Z" fill={HAT_DEEP} opacity="0.6" />
        <path d="M113 54 Q138 40 163 51 L163 44 Q138 34 113 46 Z" fill={C.white} />
        <circle cx="136" cy="24" r="7" fill={C.white} />
        {/* tay trước gập lại */}
        <path
          d="M140 96 L160 112 L176 100"
          fill="none"
          stroke={JACKET}
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="178" cy="98" r="6.5" fill={SKIN} />
      </g>

      {/* hơi thở trắng bay ra trước miệng */}
      <Puff x={180} y={68} s={0.8} delay={0} />
      <Puff x={200} y={60} s={1.2} delay={-0.8} />
      <Puff x={226} y={50} s={1.7} delay={-1.6} />
      {/* làn hơi mới thở ra, tan dần khi bay lên */}
      <circle
        cx="172"
        cy="70"
        r="5"
        fill={C.white}
        className="sc sc-rise"
        style={{ animationDuration: '2s' }}
      />
      <circle
        cx="248"
        cy="40"
        r="8"
        fill={C.white}
        className="sc sc-rise"
        style={{ animationDelay: '-1s', animationDuration: '2.6s' }}
      />

      {/* sương lạnh lấp lánh */}
      <Sparkle x={206} y={110} size={5} delay={-0.4} />
      <Sparkle x={262} y={78} size={4} delay={-1.3} />
      <Sparkle x={92} y={34} size={4} delay={-0.9} />
    </Scene>
  )
}
