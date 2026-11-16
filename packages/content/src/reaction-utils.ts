import { formatFormula, parseFormula } from './formula.js'
import type { ElementCounts, ElementSymbol } from './schema/elements.js'
import type { Molecule } from './schema/molecule.js'
import type { Reaction, ReactionSide } from './schema/reaction.js'

/**
 * Tổng số nguyên tử từng nguyên tố ở một vế.
 * `coefficients` ghi đè hệ số khai báo (dùng khi người học đang thử cân bằng).
 */
export function sideAtomCounts(
  sides: ReactionSide[],
  molecules: Map<string, Molecule>,
  coefficients?: number[],
): ElementCounts {
  const counts: ElementCounts = {}
  sides.forEach((s, i) => {
    const m = molecules.get(s.moleculeId)
    if (!m) return
    const k = coefficients?.[i] ?? s.coefficient
    for (const [el, n] of Object.entries(parseFormula(m.formula)) as [ElementSymbol, number][]) {
      counts[el] = (counts[el] ?? 0) + n * k
    }
  })
  return counts
}

/** "CH₄ + 2O₂ → CO₂ + 2H₂O" */
export function equationText(
  rx: Pick<Reaction, 'reactants' | 'products'>,
  molecules: Map<string, Molecule>,
  coefficients?: { reactants: number[]; products: number[] },
): string {
  const side = (sides: ReactionSide[], coeffs?: number[]) =>
    sides
      .map((s, i) => {
        const k = coeffs?.[i] ?? s.coefficient
        const f = formatFormula(molecules.get(s.moleculeId)?.formula ?? s.moleculeId)
        return `${k === 1 ? '' : k}${f}`
      })
      .join(' + ')
  return `${side(rx.reactants, coefficients?.reactants)} → ${side(rx.products, coefficients?.products)}`
}
