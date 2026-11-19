import type { Answer, Exercise } from '@funchem/content/lib'
import { describe, expect, it } from 'vitest'
import { applyCheck, MAX_RETRIES, type RunState, startRun } from './run-queue'

const ex = (id: string): Exercise => ({
  id,
  type: 'true-false',
  prompt: `Câu ${id}`,
  explanation: 'Giải thích',
  conceptIds: [],
  answer: true,
})
const yes: Answer = { type: 'true-false', value: true }
const no: Answer = { type: 'true-false', value: false }

/** Chạy hết hàng đợi; `isCorrect` quyết định đúng sai cho từng lượt hỏi. */
function play(exercises: Exercise[], isCorrect: (id: string, visit: number) => boolean) {
  let state: RunState = startRun(exercises)
  const visits = new Map<string, number>()
  const asked: string[] = []
  for (let pos = 0; pos < state.queue.length; pos++) {
    const item = state.queue[pos]!
    const visit = (visits.get(item.exercise.id) ?? 0) + 1
    visits.set(item.exercise.id, visit)
    asked.push(`${item.exercise.id}${item.retry ? '*' : ''}`)
    const correct = isCorrect(item.exercise.id, visit)
    state = applyCheck(state, pos, correct ? yes : no, correct)
  }
  return { state, asked }
}

describe('hàng đợi của một lượt bài tập', () => {
  const exercises = [ex('a'), ex('b'), ex('c')]

  it('đúng hết: mỗi câu hỏi một lần, đủ câu trả lời', () => {
    const { state, asked } = play(exercises, () => true)
    expect(asked).toEqual(['a', 'b', 'c'])
    expect(state.answers.map((a) => a.exerciseId)).toEqual(['a', 'b', 'c'])
  })

  it('câu sai quay lại ở cuối lượt, sau các câu còn lại', () => {
    const { asked } = play(exercises, (id, visit) => id !== 'a' || visit > 1)
    expect(asked).toEqual(['a', 'b', 'c', 'a*'])
  })

  it('chỉ câu trả lời đầu tiên được gửi đi chấm, lần hỏi lại không ghi đè', () => {
    const { state } = play(exercises, (id, visit) => id !== 'b' || visit > 1)
    expect(state.answers).toEqual([
      { exerciseId: 'a', answer: yes },
      { exerciseId: 'b', answer: no },
      { exerciseId: 'c', answer: yes },
    ])
  })

  it(`sai mãi cũng chỉ bị hỏi lại ${MAX_RETRIES} lần`, () => {
    const { state, asked } = play(exercises, (id) => id !== 'c')
    expect(asked).toEqual(['a', 'b', 'c', 'c*', 'c*'])
    expect(state.answers).toHaveLength(3)
  })

  it('hai câu cùng sai được hỏi lại theo đúng thứ tự đã sai', () => {
    const { asked } = play(exercises, (id, visit) => id === 'b' || visit > 1)
    expect(asked).toEqual(['a', 'b', 'c', 'a*', 'c*'])
  })

  it('vị trí không tồn tại thì giữ nguyên trạng thái', () => {
    const state = startRun(exercises)
    expect(applyCheck(state, 9, yes, true)).toBe(state)
  })
})
