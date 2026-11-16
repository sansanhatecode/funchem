import { fixtureContent as content } from '@funchem/content/testing'
import { describe, expect, it } from 'vitest'
import { isAnswerComplete } from './complete.js'

const ex = (id: string) => content.exercises.get(id)!.exercise

describe('isAnswerComplete', () => {
  it('null hoặc sai dạng → chưa đủ', () => {
    expect(isAnswerComplete(ex('u1-l1-e1'), null)).toBe(false)
    expect(isAnswerComplete(ex('u1-l1-e1'), { type: 'true-false', value: true })).toBe(false)
  })
  it('match-pairs cần đủ số cặp', () => {
    expect(
      isAnswerComplete(ex('u1-l1-e4'), {
        type: 'match-pairs',
        pairs: [{ leftId: 'l1', rightId: 'r1' }],
      }),
    ).toBe(false)
  })
  it('build-molecule cần ít nhất một nguyên tử', () => {
    expect(isAnswerComplete(ex('u1-l2-e1'), { type: 'build-molecule', atoms: {} })).toBe(false)
    expect(isAnswerComplete(ex('u1-l2-e1'), { type: 'build-molecule', atoms: { O: 1 } })).toBe(true)
  })
  it('fill-blank, sort, order-steps cần điền hết', () => {
    expect(isAnswerComplete(ex('u1-l2-e3'), { type: 'fill-blank', values: [' '] })).toBe(false)
    expect(isAnswerComplete(ex('u1-l2-e3'), { type: 'fill-blank', values: ['2'] })).toBe(true)
    expect(isAnswerComplete(ex('u1-l2-e2'), { type: 'sort', assignments: { i1: 'element' } })).toBe(
      false,
    )
    expect(
      isAnswerComplete(ex('u1-cp-e2'), { type: 'order-steps', order: ['s1', 's2', 's3', 's4'] }),
    ).toBe(true)
  })
  it('balance-reaction luôn kiểm tra được', () => {
    expect(
      isAnswerComplete(ex('u2-l1-e1'), {
        type: 'balance-reaction',
        reactants: [1, 1],
        products: [1, 1],
      }),
    ).toBe(true)
  })
})
