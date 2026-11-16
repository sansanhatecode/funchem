import { describe, expect, it } from 'vitest'
import { atomStructure, layoutNucleus } from './atom.js'
import { PERIODIC_TABLE } from './periodic-table.js'

describe('atomStructure', () => {
  it('helium: 2 proton, 2 neutron, 2 electron ở một lớp', () => {
    expect(atomStructure(2)).toEqual({ protons: 2, neutrons: 2, electrons: 2, shells: [2] })
  })
  it('sodium: lớp ngoài cùng chỉ có 1 electron', () => {
    expect(atomStructure(11).shells).toEqual([2, 8, 1])
  })
  it('calcium: 2, 8, 8, 2', () => {
    expect(atomStructure(20).shells).toEqual([2, 8, 8, 2])
  })
  it.each(Array.from({ length: 20 }, (_, i) => i + 1))(
    'Z=%i: tổng electron bằng số proton',
    (z) => {
      const a = atomStructure(z)
      expect(a.shells.reduce((s, n) => s + n, 0)).toBe(z)
      expect(a.electrons).toBe(a.protons)
    },
  )
  it('từ chối số hiệu ngoài 1..20', () => {
    expect(() => atomStructure(26)).toThrow()
    expect(() => atomStructure(0)).toThrow()
  })
})

describe('layoutNucleus', () => {
  it('đủ số hạt mỗi loại', () => {
    const n = layoutNucleus(6, 6, 5)
    expect(n).toHaveLength(12)
    expect(n.filter((x) => x.kind === 'proton')).toHaveLength(6)
    expect(n.filter((x) => x.kind === 'neutron')).toHaveLength(6)
  })
  it('hydrogen chỉ có một proton ở tâm', () => {
    expect(layoutNucleus(1, 0, 5)).toEqual([{ kind: 'proton', x: 0, y: 0 }])
  })
})

describe('PERIODIC_TABLE', () => {
  it('không trùng số hiệu, không trùng ô', () => {
    expect(new Set(PERIODIC_TABLE.map((e) => e.number)).size).toBe(PERIODIC_TABLE.length)
    expect(new Set(PERIODIC_TABLE.map((e) => `${e.period}-${e.group}`)).size).toBe(
      PERIODIC_TABLE.length,
    )
  })
  it('đủ 36 nguyên tố của bốn hàng đầu, theo đúng thứ tự', () => {
    const first = PERIODIC_TABLE.filter((e) => e.period <= 4).map((e) => e.number)
    expect(first).toEqual(Array.from({ length: 36 }, (_, i) => i + 1))
  })
  it('số hiệu tăng dần từ trái sang phải trong mỗi hàng', () => {
    for (let p = 1; p <= 6; p++) {
      const rowEls = PERIODIC_TABLE.filter((e) => e.period === p).sort((a, b) => a.group - b.group)
      for (let i = 1; i < rowEls.length; i++)
        expect(rowEls[i]!.number).toBeGreaterThan(rowEls[i - 1]!.number)
    }
  })
})
