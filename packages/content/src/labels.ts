import { ELEMENTS, type ElementSymbol } from './elements.js'
import type { Molecule } from './schema/molecule.js'

/** Tên hiển thị của một chất: tên quốc tế, kèm tên thường gọi trong ngoặc nếu có. Ví dụ "Sodium chloride (muối ăn)". */
export function moleculeLabel(m: Pick<Molecule, 'name' | 'commonName'>): string {
  return m.commonName ? `${m.name} (${m.commonName})` : m.name
}

/**
 * Mô tả hình vẽ của một chất mà không gọi tên chất: "2 hydrogen, 1 oxygen".
 * Dùng làm nhãn cho trình đọc màn hình ở những chỗ tên chất chính là đáp án;
 * người nhìn hình cũng chỉ thấy đúng chừng đó (các quả cầu có kí hiệu nguyên tố).
 */
export function moleculeComposition(m: Pick<Molecule, 'atoms'>): string {
  const counts = new Map<ElementSymbol, number>()
  for (const a of m.atoms) counts.set(a.element, (counts.get(a.element) ?? 0) + 1)
  return [...counts].map(([el, n]) => `${n} ${ELEMENTS[el].name.toLowerCase()}`).join(', ')
}
