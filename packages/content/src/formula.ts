import { ELEMENTS, type ElementCounts, type ElementSymbol } from './schema/elements.js'

/**
 * Phân tích công thức như "H2O", "Ca(OH)2", "Fe2O3" thành số nguyên tử từng nguyên tố.
 * Ném lỗi nếu gặp ký hiệu không có trong bảng ELEMENTS.
 */
export function parseFormula(formula: string): ElementCounts {
  let i = 0
  const parseGroup = (): ElementCounts => {
    const counts: ElementCounts = {}
    while (i < formula.length) {
      const ch = formula[i]!
      if (ch === ')') {
        i++
        return counts
      }
      let inner: ElementCounts
      if (ch === '(') {
        i++
        inner = parseGroup()
      } else {
        const m = /^[A-Z][a-z]?/.exec(formula.slice(i))
        if (!m) throw new Error(`Công thức không hợp lệ tại vị trí ${i}: "${formula}"`)
        const sym = m[0]
        if (!(sym in ELEMENTS)) throw new Error(`Nguyên tố không hỗ trợ: ${sym} trong "${formula}"`)
        i += sym.length
        inner = { [sym as ElementSymbol]: 1 }
      }
      const num = /^\d+/.exec(formula.slice(i))
      const mult = num ? Number(num[0]) : 1
      if (num) i += num[0].length
      for (const [k, v] of Object.entries(inner) as [ElementSymbol, number][]) {
        counts[k] = (counts[k] ?? 0) + v * mult
      }
    }
    return counts
  }
  const result = parseGroup()
  if (i !== formula.length) throw new Error(`Dấu ngoặc không khớp trong "${formula}"`)
  return result
}

/** Chuyển "H2O" thành "H₂O" để hiển thị. */
export function formatFormula(formula: string): string {
  const sub = '₀₁₂₃₄₅₆₇₈₉'
  return formula.replace(/\d/g, (d) => sub[Number(d)]!)
}

export function sameCounts(a: ElementCounts, b: ElementCounts): boolean {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]) as Set<ElementSymbol>
  for (const k of keys) if ((a[k] ?? 0) !== (b[k] ?? 0)) return false
  return true
}

export function countAtoms(atoms: { element: ElementSymbol }[]): ElementCounts {
  const counts: ElementCounts = {}
  for (const a of atoms) counts[a.element] = (counts[a.element] ?? 0) + 1
  return counts
}

/** Viết thường chữ cái đầu để ghép vào giữa câu, giữ nguyên phần còn lại (ví dụ số La Mã trong "Iron(III) oxide"). */
export function lowerFirst(text: string): string {
  return text.charAt(0).toLowerCase() + text.slice(1)
}
