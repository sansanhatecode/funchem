import { atomStructure, layoutNucleus, round2 } from '@funchem/chem-ui'
import { elementLabel, ELEMENTS, type ElementSymbol } from '@funchem/content'
import type { CSSProperties } from 'react'
import { MicroBackdrop } from './particle-view'

const CX = 160
const CY = 100
const SHELL_RADIUS = [36, 58, 78, 94]
const PROTON = '#F25F5C'
const NEUTRON = '#A9B4C2'
const ELECTRON = '#3B82F6'

/**
 * Bên trong một nguyên tử: hạt nhân gồm proton và neutron ở giữa,
 * các electron chuyển động trên từng lớp xung quanh.
 * Mô hình lớp vỏ đơn giản hoá, đủ cho người mới bắt đầu; lấp đầy khung 8:5.
 */
export function AtomModel({ element, className }: { element: ElementSymbol; className?: string }) {
  const a = atomStructure(ELEMENTS[element].number)
  const nucleonR = a.protons + a.neutrons > 24 ? 3.4 : a.protons + a.neutrons > 8 ? 4.2 : 5.5
  const nucleus = layoutNucleus(a.protons, a.neutrons, nucleonR * 2)
  const label =
    `Mô hình nguyên tử ${elementLabel(element)}: hạt nhân có ${a.protons} proton và ${a.neutrons} neutron, ` +
    `${a.electrons} electron chuyển động trên ${a.shells.length} lớp xung quanh.`

  return (
    <svg
      viewBox="0 0 320 200"
      preserveAspectRatio="xMidYMid slice"
      className={className ?? 'block h-full w-full'}
      role="img"
      aria-label={label}
    >
      <MicroBackdrop />
      {a.shells.map((count, i) => {
        const r = SHELL_RADIUS[i]!
        return (
          <g key={i}>
            <circle
              cx={CX}
              cy={CY}
              r={r}
              fill="none"
              stroke="#9FC6E0"
              strokeWidth="1.2"
              strokeDasharray="3 4"
            />
            <g
              className="orbit"
              style={
                {
                  '--dur': `${9 + i * 6}s`,
                  animationDirection: i % 2 ? 'reverse' : 'normal',
                } as CSSProperties
              }
            >
              {Array.from({ length: count }, (_, k) => {
                const angle = (k / count) * Math.PI * 2 + i * 0.6
                const x = round2(CX + r * Math.cos(angle))
                const y = round2(CY + r * Math.sin(angle))
                return (
                  <g key={k}>
                    <circle
                      cx={x}
                      cy={y}
                      r="5"
                      fill={ELECTRON}
                      stroke="rgb(31 42 55 / 0.25)"
                      strokeWidth="0.8"
                    />
                    <path
                      d={`M${x - 2.4} ${y} h4.8`}
                      stroke="#fff"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </g>
                )
              })}
            </g>
          </g>
        )
      })}
      {/* hạt nhân */}
      <g
        className="sc sc-pulse"
        style={{
          transformBox: 'view-box',
          transformOrigin: `${CX}px ${CY}px`,
          animationDuration: '3.2s',
        }}
      >
        {nucleus.map((n, i) => (
          <g key={i} transform={`translate(${CX + n.x} ${CY + n.y})`}>
            <circle
              r={nucleonR}
              fill={n.kind === 'proton' ? PROTON : NEUTRON}
              stroke="rgb(31 42 55 / 0.25)"
              strokeWidth="0.7"
            />
            {n.kind === 'proton' && nucleonR > 4 && (
              <path
                d={`M${-nucleonR * 0.45} 0 h${nucleonR * 0.9} M0 ${-nucleonR * 0.45} v${nucleonR * 0.9}`}
                stroke="#fff"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            )}
          </g>
        ))}
      </g>
    </svg>
  )
}

/** Chú giải ba loại hạt kèm số lượng, đặt dưới mô hình. */
export function AtomLegend({ element }: { element: ElementSymbol }) {
  const a = atomStructure(ELEMENTS[element].number)
  const items = [
    { color: PROTON, count: a.protons, name: 'proton', note: 'mang điện dương, trong hạt nhân' },
    { color: NEUTRON, count: a.neutrons, name: 'neutron', note: 'không mang điện, trong hạt nhân' },
    { color: ELECTRON, count: a.electrons, name: 'electron', note: 'mang điện âm, quanh hạt nhân' },
  ]
  return (
    <ul className="flex flex-col gap-1.5" aria-label="Các hạt trong nguyên tử">
      {items.map((it) => (
        <li key={it.name} className="flex items-center gap-2 text-sm">
          <span
            aria-hidden="true"
            className="inline-block size-4 shrink-0 rounded-full border border-ink/25"
            style={{ backgroundColor: it.color }}
          />
          <span className="font-extrabold">
            {it.count} {it.name}
          </span>
          <span className="text-ink-soft">{it.note}</span>
        </li>
      ))}
    </ul>
  )
}
