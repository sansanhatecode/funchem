import { C, IndoorBg, Scene, type SceneProps, Sparkle } from '../kit'

const PX = 10.6
const PY = 12
const X0 = 160 - 9 * PX
const Y0 = 30

interface Cell {
  r: number
  c: number
}
const CELLS: Cell[] = []
for (let r = 1; r <= 9; r++) {
  for (let c = 1; c <= 18; c++) {
    const ok =
      r === 1 ? c === 1 || c === 18 : r <= 3 ? c <= 2 || c >= 13 : r <= 7 ? true : c >= 4 && c <= 17
    if (ok) CELLS.push({ r, c })
  }
}
const SYMBOLS: Record<string, string> = {
  '1-1': 'H',
  '1-18': 'He',
  '2-14': 'C',
  '2-16': 'O',
  '4-8': 'Fe',
  '4-11': 'Cu',
  '6-11': 'Au',
}

function tone({ r, c }: Cell): string {
  if (r === 8) return '#7FD3C4'
  if (r === 9) return '#C7B6F2'
  if (c === 1) return r === 1 ? C.water : C.red
  if (c === 2) return C.flame
  if (c <= 12) return C.gold
  if (c <= 14) return C.grassDeep
  if (c <= 16) return C.water
  return c === 17 ? C.purple : C.pink
}
const cx = (c: number) => X0 + (c - 1) * PX
const cy = (r: number) => Y0 + (r - 1) * PY + (r >= 8 ? 4 : 0)

export function ClassroomScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg wall="#FFF1C4" wallShade="#FDE2A0" tableY={176} />
      {/* chân tường sơn xanh */}
      <rect y="140" width="320" height="36" fill={C.grass} />
      <rect y="140" width="320" height="5" fill={C.grassDeep} />

      {/* tấm áp phích bảng tuần hoàn */}
      <path
        d="M72 14 L160 3 L248 14"
        fill="none"
        stroke={C.inkSoft}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="160" cy="4" r="3.5" fill={C.metalDark} />
      <rect x="58" y="19" width="212" height="138" rx="6" fill={C.shadow} />
      <rect x="54" y="15" width="212" height="138" rx="6" fill={C.white} />
      <rect x="49" y="10" width="222" height="9" rx="4.5" fill={C.woodDeep} />
      <rect x="49" y="149" width="222" height="9" rx="4.5" fill={C.woodDeep} />
      <rect x="49" y="149" width="222" height="4" rx="2" fill={C.wood} />
      <rect x="102" y="35" width="76" height="6" rx="3" fill={C.inkSoft} opacity="0.4" />
      <rect x="114" y="47" width="52" height="4" rx="2" fill={C.inkSoft} opacity="0.22" />

      {CELLS.map((cell) => {
        const key = `${cell.r}-${cell.c}`
        const symbol = SYMBOLS[key]
        return (
          <g key={key}>
            <rect
              x={cx(cell.c)}
              y={cy(cell.r)}
              width={PX - 1.4}
              height={PY - 1.4}
              rx="2.2"
              fill={tone(cell)}
              className={
                symbol === 'Fe' || symbol === 'O' || symbol === 'Au' ? 'sc sc-pulse' : undefined
              }
              style={symbol ? { animationDelay: `${-cell.c * 0.2}s` } : undefined}
            />
            {symbol && (
              <text
                x={cx(cell.c) + (PX - 1.4) / 2}
                y={cy(cell.r) + 7.4}
                textAnchor="middle"
                fontSize="5.6"
                fontWeight="800"
                fill={C.ink}
              >
                {symbol}
              </text>
            )}
          </g>
        )
      })}
      <Sparkle x={262} y={24} size={8} color={C.gold} />

      {/* bàn giáo viên: chồng sách và quả táo */}
      <rect x="72" y="167" width="52" height="9" rx="3" fill={C.waterDeep} />
      <rect x="76" y="169" width="44" height="3" rx="1.5" fill={C.white} opacity="0.7" />
      <rect x="78" y="160" width="42" height="7" rx="3" fill={C.purple} />
      <circle cx="200" cy="168" r="9" fill={C.red} />
      <path d="M200 159 A9 9 0 0 1 200 177 Z" fill={C.redDeep} opacity="0.5" />
      <path
        d="M200 160 q1 -4 4 -5"
        fill="none"
        stroke={C.woodDark}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <ellipse cx="207" cy="156" rx="4.5" ry="2.4" fill={C.green} transform="rotate(-24 207 156)" />
    </Scene>
  )
}
