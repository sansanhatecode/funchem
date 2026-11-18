import { content } from '@funchem/content'
import { describe, expect, it } from 'vitest'
import {
  atomScale,
  BASE_ATOM_RADIUS,
  layoutReaction,
  layoutSide,
  moleculeViewBox,
  placeMolecule,
} from './layout.js'

const stage = { width: 320, height: 160 }

describe('placeMolecule', () => {
  it('đặt nguyên tử theo tỉ lệ quanh tâm ô', () => {
    const m = placeMolecule(content.molecules.get('o2')!, 'k', 100, 50, 50)
    expect(m.atoms).toHaveLength(2)
    expect(m.atoms[0]!.x).toBeCloseTo(100 + (36 - 50) * 0.5)
    expect(m.atoms[0]!.y).toBeCloseTo(50)
    expect(m.bonds[0]!.order).toBe(2)
  })
})

describe('layoutSide', () => {
  it('nhân theo hệ số và nằm trong sân khấu', () => {
    const rx = content.reactions.get('rusting')!
    const placed = layoutSide(rx.reactants, content.molecules, stage, 'r')
    expect(placed).toHaveLength(7) // 4 Fe + 3 O2
    for (const m of placed) {
      for (const a of m.atoms) {
        expect(a.x - a.r).toBeGreaterThanOrEqual(0)
        expect(a.x + a.r).toBeLessThanOrEqual(stage.width)
        expect(a.y - a.r).toBeGreaterThanOrEqual(0)
        expect(a.y + a.r).toBeLessThanOrEqual(stage.height)
      }
    }
  })
})

describe('layoutReaction', () => {
  it.each([...content.reactions.keys()])(
    '%s: mỗi nguyên tử có đích cùng nguyên tố, không trùng đích',
    (id) => {
      const rx = content.reactions.get(id)!
      const l = layoutReaction(rx, content.molecules, stage)
      const productAtoms = l.products.flatMap((m) => m.atoms)
      expect(l.atoms).toHaveLength(productAtoms.length)
      const seen = new Set<string>()
      for (const a of l.atoms) {
        const target = productAtoms.find(
          (p) => p.x === a.to.x && p.y === a.to.y && p.element === a.element,
        )
        expect(target, `đích của ${a.key}`).toBeDefined()
        expect(seen.has(target!.key)).toBe(false)
        seen.add(target!.key)
      }
      expect(l.counts.reduce((s, c) => s + c.count, 0)).toBe(l.atoms.length)
    },
  )

  it('đếm đúng số nguyên tử của phản ứng cháy methane', () => {
    const l = layoutReaction(content.reactions.get('methane-combustion')!, content.molecules, stage)
    expect(l.counts).toEqual([
      { element: 'H', count: 4 },
      { element: 'C', count: 1 },
      { element: 'O', count: 4 },
    ])
  })

  it('ném lỗi nếu phản ứng không cân bằng', () => {
    const rx = content.reactions.get('water-formation')!
    const bad = { reactants: rx.reactants, products: [{ moleculeId: 'h2o', coefficient: 1 }] }
    expect(() => layoutReaction(bad, content.molecules, stage)).toThrow(/không cân bằng/)
  })
})

describe('moleculeViewBox', () => {
  it.each([...content.molecules.keys()])('%s: mọi nguyên tử nằm trọn trong khung', (id) => {
    const m = content.molecules.get(id)!
    const vb = moleculeViewBox(m)
    for (const a of m.atoms) {
      const r = BASE_ATOM_RADIUS * 1.8 // bán kính lớn nhất có thể
      expect(a.x).toBeGreaterThanOrEqual(vb.x)
      expect(a.x).toBeLessThanOrEqual(vb.x + vb.side)
      expect(a.y).toBeGreaterThanOrEqual(vb.y)
      expect(a.y).toBeLessThanOrEqual(vb.y + vb.side)
      expect(r).toBeLessThan(vb.side)
    }
  })
  it('phân tử một nguyên tử không bị phóng quá to', () => {
    // He: đường kính 18 + lề 10 = 28, nhỏ hơn mức tối thiểu 36
    expect(moleculeViewBox(content.molecules.get('he')!).side).toBe(36)
  })
})

describe('atomScale', () => {
  it('phân tử nhỏ giữ nguyên cỡ quả cầu', () => {
    expect(atomScale(content.molecules.get('h2o')!)).toBe(1)
    expect(atomScale(content.molecules.get('fe')!)).toBe(1)
  })
  it('phân tử lớn được thu nhỏ quả cầu', () => {
    expect(atomScale(content.molecules.get('c6h12o6')!)).toBeLessThan(0.8)
  })
  it.each([...content.molecules.keys()])('%s: không có hai quả cầu nào đè lên nhau', (id) => {
    const placed = placeMolecule(content.molecules.get(id)!, 'k', 50, 50, 100)
    for (let i = 0; i < placed.atoms.length; i++) {
      for (let j = i + 1; j < placed.atoms.length; j++) {
        const a = placed.atoms[i]!
        const b = placed.atoms[j]!
        expect(Math.hypot(a.x - b.x, a.y - b.y)).toBeGreaterThan(a.r + b.r)
      }
    }
  })
})
