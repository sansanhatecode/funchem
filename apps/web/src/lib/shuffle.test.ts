import { describe, expect, it } from 'vitest'
import { seededShuffle } from './shuffle'

describe('seededShuffle', () => {
  const items = ['a', 'b', 'c', 'd', 'e']

  it('cùng seed cho cùng thứ tự, không làm đổi mảng gốc', () => {
    const copy = [...items]
    expect(seededShuffle(items, 'u1-l1-e1')).toEqual(seededShuffle(items, 'u1-l1-e1'))
    expect(items).toEqual(copy)
  })

  it('giữ đủ các phần tử', () => {
    expect([...seededShuffle(items, 'x')].sort()).toEqual(items)
  })

  it('không bao giờ trả về đúng thứ tự gốc, kể cả với hai phần tử', () => {
    for (let i = 0; i < 200; i++) {
      expect(seededShuffle(items, `seed-${i}`)).not.toEqual(items)
      expect(seededShuffle(['x', 'y'], `seed-${i}`)).toEqual(['y', 'x'])
    }
  })

  it('mảng rỗng và mảng một phần tử giữ nguyên', () => {
    expect(seededShuffle([], 's')).toEqual([])
    expect(seededShuffle(['a'], 's')).toEqual(['a'])
  })
})
