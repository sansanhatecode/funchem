import { content } from '@funchem/content'
import { describe, expect, it } from 'vitest'
import { contrast, INK, inkOn, readableOn } from './color'

describe('màu chữ đọc được', () => {
  it('tính tỉ lệ tương phản theo WCAG', () => {
    expect(contrast('#000000', '#ffffff')).toBeCloseTo(21, 1)
    expect(contrast('#ffffff', '#ffffff')).toBe(1)
    expect(contrast('#12b886', '#ffffff')).toBeCloseTo(2.55, 1)
  })

  it('nền sáng dùng chữ đậm, nền tối dùng chữ trắng', () => {
    expect(inkOn('#58CC02')).toBe(INK)
    expect(inkOn('#FFC800')).toBe(INK)
    expect(inkOn('#1f2a37')).toBe('#ffffff')
  })

  it.each(content.units.map((u) => [u.title, u.color] as const))(
    'Unit "%s": chữ trên nền màu Unit và chữ màu Unit trên nền trắng đều đạt 4.5:1',
    (_title, color) => {
      expect(contrast(inkOn(color), color)).toBeGreaterThanOrEqual(4.5)
      expect(contrast(readableOn(color), '#ffffff')).toBeGreaterThanOrEqual(4.5)
      expect(contrast(readableOn(color, '#f6f8fb'), '#f6f8fb')).toBeGreaterThanOrEqual(4.5)
    },
  )

  it('màu đã đủ đậm thì giữ nguyên', () => {
    expect(readableOn('#1f2a37')).toBe('#1f2a37')
  })
})
