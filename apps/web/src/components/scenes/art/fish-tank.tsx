import { Bubble, C, IndoorBg, Scene, type SceneProps, Shadow } from '../kit'

const WALL = '#E8F1FB'
const WALL_SHADE = '#D3E3F5'
const GRAVEL = '#E9C98C'
const GRAVEL_DEEP = '#D2A862'
const FISH = '#FF9A3D'
const FISH_DEEP = '#E9761A'
const PLANT = '#2FBF71'
const PLANT_DEEP = '#1F9A58'

/** Một chú cá vàng bơi sang phải (lật ngang khi `flip`). */
function Fish({ x, y, s = 1, flip = false }: { x: number; y: number; s?: number; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      <path d="M-16 0 L-30 -11 Q-26 0 -30 11 Z" fill={FISH_DEEP} />
      <ellipse cx="0" cy="0" rx="19" ry="11.5" fill={FISH} />
      <path d="M-4 -11 Q4 -20 12 -9 Z" fill={FISH_DEEP} />
      <path d="M-19 0 A19 11.5 0 0 0 19 0 Z" fill={FISH_DEEP} opacity="0.35" />
      <circle cx="10" cy="-3" r="3.4" fill={C.white} />
      <circle cx="11" cy="-3" r="1.7" fill={C.ink} />
    </g>
  )
}

export function FishTankScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall={WALL} wallShade={WALL_SHADE} tableY={160} />

      {/* bể cá */}
      <Shadow cx={160} cy={176} rx={126} ry={7} />
      <rect x="40" y="44" width="240" height="130" rx="10" fill={C.water} />
      <path
        d="M160 44 H270 Q280 44 280 54 V164 Q280 174 270 174 H160 Z"
        fill={C.waterDeep}
        opacity="0.3"
      />

      {/* sỏi đáy bể */}
      <path
        d="M40 152 Q100 142 160 150 T280 148 V164 Q280 174 270 174 H50 Q40 174 40 164 Z"
        fill={GRAVEL}
      />
      <g fill={GRAVEL_DEEP}>
        <circle cx="72" cy="162" r="4" />
        <circle cx="118" cy="166" r="3" />
        <circle cx="176" cy="160" r="4" />
        <circle cx="244" cy="164" r="3.5" />
      </g>

      {/* cây thuỷ sinh */}
      <g className="sc sc-sway" style={{ transformOrigin: '76px 154px' }}>
        <path d="M76 154 Q62 124 72 96 Q84 124 76 154 Z" fill={PLANT} />
        <path d="M80 154 Q96 130 90 108 Q76 132 80 154 Z" fill={PLANT_DEEP} />
      </g>
      <g className="sc sc-sway" style={{ transformOrigin: '250px 152px', animationDelay: '-1.4s' }}>
        <path d="M250 152 Q238 128 246 104 Q258 128 250 152 Z" fill={PLANT_DEEP} />
        <path d="M256 152 Q270 134 264 116 Q252 134 256 152 Z" fill={PLANT} />
      </g>

      {/* đá sủi nối với máy sục khí */}
      <path
        d="M200 152 Q204 90 214 30"
        fill="none"
        stroke={C.white}
        strokeWidth="2.6"
        strokeLinecap="round"
        opacity="0.85"
      />
      <rect x="188" y="146" width="24" height="10" rx="5" fill={C.metalDark} />
      <Bubble x={196} y={140} r={3} delay={0} />
      <Bubble x={204} y={132} r={4} delay={-0.8} />
      <Bubble x={198} y={118} r={2.6} delay={-1.6} />
      <Bubble x={206} y={104} r={3.4} delay={-2.4} />
      <Bubble x={200} y={90} r={2.4} delay={-1.2} />
      <Bubble x={194} y={76} r={3} delay={-2.9} />

      {/* cá */}
      <g className="sc sc-float">
        <Fish x={112} y={96} />
      </g>
      <g className="sc sc-float" style={{ animationDelay: '-2s' }}>
        <Fish x={150} y={130} s={0.7} flip />
      </g>

      {/* mặt nước và thành kính */}
      <rect x="40" y="52" width="240" height="5" fill={C.white} opacity="0.55" />
      <rect
        x="40"
        y="34"
        width="240"
        height="140"
        rx="10"
        fill="none"
        stroke={C.white}
        strokeWidth="4"
      />
      <path d="M52 62 V140" stroke={C.white} strokeWidth="5" strokeLinecap="round" opacity="0.55" />
      <rect x="34" y="26" width="252" height="12" rx="5" fill={C.ink} />
    </Scene>
  )
}
