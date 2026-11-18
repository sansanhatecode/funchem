import { moleculeViewBox, placeMolecule } from '@funchem/chem-ui'
import {
  elementLabel,
  ELEMENTS,
  type ElementSymbol,
  formatFormula,
  type Molecule,
  moleculeLabel,
} from '@funchem/content/lib'
import type { CSSProperties } from 'react'
import { AtomShape, BondShape } from './shapes'

const W = 320
const H = 200

export type ParticleMode = 'gas' | 'liquid' | 'solution' | 'metal' | 'ionic' | 'solid'

/** Chọn cách sắp xếp hạt theo trạng thái và kiểu liên kết của chất. */
export function particleMode(m: Molecule): ParticleMode {
  if (m.state === 'gas') return 'gas'
  if (m.state === 'liquid') return m.ions ? 'solution' : 'liquid'
  if (m.atoms.length === 1) return 'metal'
  if (m.atoms.length === 2 && m.bonds.every((b) => b.kind === 'ionic')) return 'ionic'
  return 'solid'
}

export const PARTICLE_CAPTION: Record<ParticleMode, string> = {
  gas: 'Thể khí: các phân tử bay tự do, cách xa nhau.',
  liquid: 'Thể lỏng: các phân tử chen sát nhau nhưng vẫn trượt qua nhau được.',
  solution:
    'Dung dịch trong nước: chất tan tách thành ion dương và ion âm, bơi giữa các phân tử nước (vẽ mờ).',
  metal: 'Thể rắn: các nguyên tử xếp khít thành hàng lối, chỉ rung nhẹ tại chỗ.',
  ionic: 'Tinh thể ion: ion dương và ion âm xếp xen kẽ, hút chặt lấy nhau.',
  solid: 'Thể rắn: các hạt xếp khít, chỉ rung nhẹ tại chỗ.',
}

/** Bộ sinh số giả ngẫu nhiên ổn định theo seed, để server và client vẽ giống hệt nhau. */
function rng(seed: string) {
  let h = 2166136261
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619)
  return () => {
    h += 0x6d2b79f5
    let t = h
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const move = (dx: number, dy: number, rot: number, dur: number, delay: number) =>
  ({
    '--dx': `${dx}px`,
    '--dy': `${dy}px`,
    '--rot': `${rot}deg`,
    '--dur': `${dur}s`,
    '--delay': `${delay}s`,
  }) as CSSProperties

function MoleculeGlyph({
  molecule,
  size,
  labels,
}: {
  molecule: Molecule
  size: number
  labels: boolean
}) {
  // vẽ phân tử quanh gốc (0,0), cạnh hộp bao = size
  const vb = moleculeViewBox(molecule, { padding: 0, minSide: 0 })
  const k = size / vb.side
  const placed = placeMolecule(molecule, molecule.id, 50, 50, 100)
  const cx = vb.x + vb.side / 2
  const cy = vb.y + vb.side / 2
  return (
    <g transform={`scale(${k}) translate(${-cx} ${-cy})`}>
      {placed.bonds.map((b) => (
        <BondShape key={b.key} bond={b} />
      ))}
      {placed.atoms.map((a) => (
        <g key={a.key} transform={`translate(${a.x} ${a.y})`}>
          <AtomShape element={a.element} r={a.r} showLabel={labels} />
        </g>
      ))}
    </g>
  )
}

/** Nhãn điện tích ở góc trên phải của một ion: "+", "−", "2−"… */
function ChargeBadge({ charge, r }: { charge: number; r: number }) {
  const n = Math.abs(charge)
  const text = `${n > 1 ? n : ''}${charge > 0 ? '+' : '−'}`
  return (
    <g>
      <circle r={r} fill="#fff" stroke="rgb(31 42 55 / 0.3)" strokeWidth="0.8" />
      <text
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={r * (n > 1 ? 1.15 : 1.45)}
        fontWeight={800}
        fill="#1f2a37"
      >
        {text}
      </text>
    </g>
  )
}

/** Một phân tử nước nhỏ, vẽ mờ làm nền cho dung dịch. */
function WaterGlyph() {
  return (
    <g opacity="0.45">
      <g transform="translate(-5.4 4.2)">
        <AtomShape element="H" r={3.6} showLabel={false} />
      </g>
      <g transform="translate(5.4 4.2)">
        <AtomShape element="H" r={3.6} showLabel={false} />
      </g>
      <AtomShape element="O" r={5.6} showLabel={false} />
    </g>
  )
}

/** Tỉ lệ vẽ ion trong dung dịch so với hộp phân tử 100x100. */
const ION_SCALE = 0.72
/** Cạnh lớn nhất của một ion, theo đơn vị khung 320x200 (một ô nước rộng khoảng 46x40). */
const MAX_ION_SIDE = 36

/** Tách một chất thành các ion của nó, mỗi ion là một "phân tử con" vẽ được bằng MoleculeGlyph. */
function ionParts(molecule: Molecule): { part: Molecule; charge: number; side: number }[] {
  return (molecule.ions ?? []).map((ion, i) => {
    const ids = new Set(ion.atomIds)
    const part: Molecule = {
      ...molecule,
      id: `${molecule.id}:ion${i}`,
      atoms: molecule.atoms.filter((a) => ids.has(a.id)),
      bonds: molecule.bonds.filter((b) => ids.has(b.a) && ids.has(b.b)),
    }
    return {
      part,
      charge: ion.charge,
      // ion nhiều nguyên tử (SO₄²⁻…) được giới hạn cỡ để không tràn sang ô bên cạnh
      side: Math.min(
        MAX_ION_SIDE,
        moleculeViewBox(part, { padding: 0, minSide: 0 }).side * ION_SCALE,
      ),
    }
  })
}

/**
 * "Thế giới hạt" của một chất: rất nhiều nguyên tử hoặc phân tử chuyển động
 * đúng với trạng thái của chất đó. Đây là thứ hiện ra khi phóng to một cảnh đời sống.
 */
export function ParticleView({
  molecule,
  className,
  mode: modeOverride,
}: {
  molecule: Molecule
  className?: string
  /** ép một trạng thái khác với trạng thái thường gặp của chất, ví dụ nước ở thể rắn hay thể khí */
  mode?: ParticleMode
}) {
  const mode = modeOverride ?? particleMode(molecule)
  const rand = rng(`${molecule.id}:${mode}`)
  const label = `Cận cảnh ${moleculeLabel(molecule)} (${formatFormula(molecule.formula)}) ở cấp nguyên tử. ${PARTICLE_CAPTION[mode]}`
  let content: React.ReactNode

  if (mode === 'gas' || mode === 'liquid') {
    const gas = mode === 'gas'
    const size = gas ? (molecule.atoms.length > 3 ? 54 : 46) : molecule.atoms.length > 4 ? 46 : 36
    const cols = gas ? 4 : 7
    const rows = gas ? 3 : 5
    const cellW = W / cols
    const cellH = (gas ? H : H * 0.94) / rows
    const top = gas ? 0 : H * 0.06
    const items = []
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (gas && rand() < 0.3) continue // khí thưa: bỏ trống một số ô
        const x =
          (c + 0.5) * cellW +
          (rand() - 0.5) * cellW * (gas ? 0.5 : 0.3) +
          (!gas && r % 2 ? cellW * 0.4 : 0)
        const y = top + (r + 0.5) * cellH + (rand() - 0.5) * cellH * (gas ? 0.4 : 0.2)
        const amp = gas ? 46 : 6
        items.push(
          <g
            key={`${r}-${c}`}
            transform={`translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${Math.round(rand() * 360)})`}
          >
            <g
              className="particle"
              style={move(
                Math.round((rand() - 0.5) * amp * 2),
                Math.round((rand() - 0.5) * amp * 1.4),
                Math.round((rand() - 0.5) * (gas ? 220 : 50)),
                +(gas ? 3.5 + rand() * 3 : 1.6 + rand() * 1.4).toFixed(2),
                -+(rand() * 4).toFixed(2),
              )}
            >
              <MoleculeGlyph molecule={molecule} size={size} labels={molecule.atoms.length === 1} />
            </g>
          </g>,
        )
      }
    }
    content = items
  } else if (mode === 'solution') {
    // lưới phân tử nước chen sát như chất lỏng; một số ô nhường chỗ cho các ion của chất tan
    const parts = ionParts(molecule)
    const cols = 7
    const rows = 5
    const cellW = W / cols
    const cellH = H / rows
    // mỗi "đơn vị công thức" góp đủ bộ ion của nó; lặp tới khi chiếm khoảng một phần ba số ô
    const units = Math.max(2, Math.floor((cols * rows) / 3.5 / Math.max(1, parts.length)))
    // ion không nằm ở cột ngoài cùng, để ion lớn không bị mép khung cắt mất
    const cells = Array.from({ length: cols * rows }, (_, i) => i).filter(
      (i) => i % cols !== 0 && i % cols !== cols - 1,
    )
    for (let i = cells.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1))
      ;[cells[i], cells[j]] = [cells[j]!, cells[i]!]
    }
    const ionAt = new Map<number, (typeof parts)[number]>()
    for (let u = 0; u < units; u++)
      parts.forEach((part, k) => ionAt.set(cells[u * parts.length + k]!, part))
    const items = []
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const ion = ionAt.get(r * cols + c)
        const x = (c + 0.5) * cellW + (rand() - 0.5) * cellW * 0.25 + (r % 2 ? cellW * 0.2 : 0)
        const y = (r + 0.5) * cellH + (rand() - 0.5) * cellH * 0.2
        const drift = move(
          Math.round((rand() - 0.5) * 12),
          Math.round((rand() - 0.5) * 9),
          ion ? 0 : Math.round((rand() - 0.5) * 50),
          +(1.6 + rand() * 1.4).toFixed(2),
          -+(rand() * 4).toFixed(2),
        )
        items.push(
          <g
            key={`${r}-${c}`}
            transform={`translate(${x.toFixed(1)} ${y.toFixed(1)})${ion ? '' : ` rotate(${Math.round(rand() * 360)})`}`}
          >
            <g className="particle" style={drift}>
              {ion ? (
                <>
                  <MoleculeGlyph molecule={ion.part} size={ion.side} labels />
                  <g transform={`translate(${ion.side * 0.4} ${-ion.side * 0.4})`}>
                    <ChargeBadge charge={ion.charge} r={5} />
                  </g>
                </>
              ) : (
                <WaterGlyph />
              )}
            </g>
          </g>,
        )
      }
    }
    // ion vẽ sau cùng để nằm trên các phân tử nước
    content = [...items.filter((_, i) => !ionAt.has(i)), ...items.filter((_, i) => ionAt.has(i))]
  } else if (mode === 'metal' || mode === 'ionic') {
    const elements: ElementSymbol[] =
      mode === 'metal'
        ? [molecule.atoms[0]!.element]
        : [molecule.atoms[0]!.element, molecule.atoms[1]!.element]
    const metals = new Set<ElementSymbol>([
      'Li',
      'Na',
      'K',
      'Mg',
      'Ca',
      'Al',
      'Fe',
      'Cu',
      'Zn',
      'Ag',
      'Au',
    ])
    const cols = 8
    const rows = 5
    const step = W / cols
    const items = []
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c <= cols; c++) {
        const el = elements[(r + c) % elements.length]!
        // kim loại: xếp so le như các viên bi; ion: xếp ô bàn cờ
        const x = c * step + (mode === 'metal' && r % 2 ? step / 2 : 0)
        const y = (r + 0.5) * (H / rows)
        const rr =
          mode === 'metal' ? step * 0.5 : step * (0.5 * Math.min(1.15, ELEMENTS[el].radius / 1.5))
        const charge = mode === 'ionic' ? (metals.has(el) ? '+' : '−') : null
        items.push(
          <g key={`${r}-${c}`} transform={`translate(${x.toFixed(1)} ${y.toFixed(1)})`}>
            <g
              className="particle"
              style={move(
                rand() * 3 - 1.5,
                rand() * 3 - 1.5,
                0,
                +(0.25 + rand() * 0.2).toFixed(2),
                -+rand().toFixed(2),
              )}
            >
              <AtomShape element={el} r={rr} />
              {charge && (
                <g transform={`translate(${rr * 0.62} ${-rr * 0.62})`}>
                  <circle
                    r={rr * 0.34}
                    fill="#fff"
                    stroke="rgb(31 42 55 / 0.3)"
                    strokeWidth="0.8"
                  />
                  <text
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={rr * 0.5}
                    fontWeight={800}
                    fill="#1f2a37"
                  >
                    {charge}
                  </text>
                </g>
              )}
            </g>
          </g>,
        )
      }
    }
    content = items
  } else {
    const cols = 4
    const rows = 3
    const size = Math.min(W / cols, H / rows) * 0.98
    const items = []
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        items.push(
          <g
            key={`${r}-${c}`}
            transform={`translate(${(c + 0.5) * (W / cols)} ${(r + 0.5) * (H / rows)})`}
          >
            <g
              className="particle"
              style={move(
                rand() * 3 - 1.5,
                rand() * 3 - 1.5,
                0,
                +(0.3 + rand() * 0.2).toFixed(2),
                -+rand().toFixed(2),
              )}
            >
              <MoleculeGlyph molecule={molecule} size={size} labels />
            </g>
          </g>,
        )
      }
    }
    content = items
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={className ?? 'block h-full w-full'}
      role="img"
      aria-label={label}
    >
      <MicroBackdrop />
      {content}
    </svg>
  )
}

/** Nền của thế giới hạt: sáng dịu, có lưới chấm như nhìn qua kính hiển vi. */
export function MicroBackdrop() {
  return (
    <>
      <rect width={W} height={H} fill="#EAF7FF" />
      <g fill="#BFE0F2">
        {Array.from({ length: 9 }, (_, r) =>
          Array.from({ length: 15 }, (_, c) => (
            <circle key={`${r}-${c}`} cx={c * 22 + 6} cy={r * 22 + 12} r="1.3" />
          )),
        )}
      </g>
    </>
  )
}

/** Chú giải màu: nguyên tố nào ứng với quả bóng màu nào. Đặt dưới thế giới hạt. */
export function ParticleLegend({ molecule }: { molecule: Molecule }) {
  const elements = [...new Set(molecule.atoms.map((a) => a.element))]
  return (
    <ul className="flex flex-wrap justify-center gap-2" aria-label="Chú giải màu nguyên tử">
      {elements.map((el) => (
        <li
          key={el}
          className="flex items-center gap-1.5 rounded-full bg-paper px-3 py-1 text-sm font-bold shadow-[0_1px_0_var(--color-line)]"
        >
          <span
            aria-hidden="true"
            className="inline-block size-3.5 rounded-full border border-ink/25"
            style={{ backgroundColor: ELEMENTS[el].color }}
          />
          {elementLabel(el)}
        </li>
      ))}
    </ul>
  )
}
