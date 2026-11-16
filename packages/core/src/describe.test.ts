import { fixtureContent as content } from '@funchem/content/testing'
import { describe, expect, it } from 'vitest'
import { describeCorrectAnswer } from './describe.js'

const d = (id: string) => describeCorrectAnswer(content.exercises.get(id)!.exercise, content)

describe('describeCorrectAnswer', () => {
  it('mcq, true-false', () => {
    expect(d('u1-l1-e1')).toBe('Nguyên tử')
    expect(d('u1-l1-e2')).toBe('Đúng')
  })
  it('match-pairs', () => {
    expect(d('u1-l1-e4')).toBe('O – Oxygen, H – Hydrogen, Fe – Iron (sắt), Na – Sodium (natri)')
  })
  it('build-molecule', () => {
    expect(d('u1-l2-e1')).toBe('O₂: 2 Oxygen')
    expect(d('u2-l1-e2')).toBe('H₂O: 2 Hydrogen + 1 Oxygen')
  })
  it('balance-reaction', () => {
    expect(d('u2-l1-e1')).toBe('CH₄ + 2O₂ → CO₂ + 2H₂O')
  })
  it('fill-blank, sort, order-steps', () => {
    expect(d('u1-l2-e3')).toBe('Khí oxygen trong không khí gồm 2 nguyên tử O ghép lại.')
    expect(d('u1-l2-e2')).toBe('Nguyên tố: Gold (vàng), Iron (sắt) · Không phải: Nước, Muối ăn')
    expect(d('u1-cp-e2')).toBe('Nguyên tử → Phân tử → Hạt muối → Lọ muối')
  })
})
