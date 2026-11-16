import { fixtureContent as content } from '@funchem/content/testing'
import { describe, expect, it } from 'vitest'
import { gradeExercise, gradeLesson } from './grading.js'

const ex = (id: string) => content.exercises.get(id)!.exercise

describe('gradeExercise', () => {
  it('mcq', () => {
    expect(gradeExercise(ex('u1-l1-e1'), { type: 'mcq', optionId: 'a' }, content).correct).toBe(
      true,
    )
    expect(gradeExercise(ex('u1-l1-e1'), { type: 'mcq', optionId: 'b' }, content).correct).toBe(
      false,
    )
  })
  it('sai dạng bài thì sai, không ném lỗi', () => {
    expect(
      gradeExercise(ex('u1-l1-e1'), { type: 'true-false', value: true }, content).correct,
    ).toBe(false)
  })
  it('match-pairs cần đủ và đúng mọi cặp', () => {
    const full = [
      { leftId: 'l1', rightId: 'r1' },
      { leftId: 'l2', rightId: 'r2' },
      { leftId: 'l3', rightId: 'r3' },
      { leftId: 'l4', rightId: 'r4' },
    ]
    expect(
      gradeExercise(ex('u1-l1-e4'), { type: 'match-pairs', pairs: full }, content).correct,
    ).toBe(true)
    expect(
      gradeExercise(ex('u1-l1-e4'), { type: 'match-pairs', pairs: full.slice(0, 3) }, content)
        .correct,
    ).toBe(false)
    const swapped = [
      ...full.slice(0, 2),
      { leftId: 'l3', rightId: 'r4' },
      { leftId: 'l4', rightId: 'r3' },
    ]
    expect(
      gradeExercise(ex('u1-l1-e4'), { type: 'match-pairs', pairs: swapped }, content).correct,
    ).toBe(false)
  })
  it('build-molecule so sánh số nguyên tử với công thức', () => {
    expect(
      gradeExercise(ex('u1-l2-e1'), { type: 'build-molecule', atoms: { O: 2 } }, content).correct,
    ).toBe(true)
    expect(
      gradeExercise(ex('u1-l2-e1'), { type: 'build-molecule', atoms: { O: 2, H: 0 } }, content)
        .correct,
    ).toBe(true)
    expect(
      gradeExercise(ex('u1-l2-e1'), { type: 'build-molecule', atoms: { O: 3 } }, content).correct,
    ).toBe(false)
    expect(
      gradeExercise(ex('u1-l2-e1'), { type: 'build-molecule', atoms: { O: 2, H: 1 } }, content)
        .correct,
    ).toBe(false)
  })
  it('fill-blank không phân biệt hoa thường và khoảng trắng', () => {
    expect(
      gradeExercise(ex('u1-l2-e3'), { type: 'fill-blank', values: [' Hai '] }, content).correct,
    ).toBe(true)
    expect(
      gradeExercise(ex('u1-l2-e3'), { type: 'fill-blank', values: ['3'] }, content).correct,
    ).toBe(false)
  })
  it('sort và order-steps', () => {
    expect(
      gradeExercise(
        ex('u1-l2-e2'),
        { type: 'sort', assignments: { i1: 'element', i2: 'not', i3: 'element', i4: 'not' } },
        content,
      ).correct,
    ).toBe(true)
    expect(
      gradeExercise(
        ex('u1-cp-e2'),
        { type: 'order-steps', order: ['s1', 's2', 's3', 's4'] },
        content,
      ).correct,
    ).toBe(true)
    expect(
      gradeExercise(
        ex('u1-cp-e2'),
        { type: 'order-steps', order: ['s2', 's1', 's3', 's4'] },
        content,
      ).correct,
    ).toBe(false)
  })
})

describe('balance-reaction', () => {
  const balance = {
    id: 'test-balance',
    type: 'balance-reaction' as const,
    prompt: 'p',
    explanation: 'e',
    conceptIds: [],
    reactionId: 'methane-combustion',
    maxCoefficient: 6,
  }
  it('đúng khi cân bằng và tối giản', () => {
    expect(
      gradeExercise(
        balance,
        { type: 'balance-reaction', reactants: [1, 2], products: [1, 2] },
        content,
      ).correct,
    ).toBe(true)
  })
  it('sai khi chưa cân', () => {
    const r = gradeExercise(
      balance,
      { type: 'balance-reaction', reactants: [1, 1], products: [1, 1] },
      content,
    )
    expect(r.correct).toBe(false)
    expect(r.reason).toMatch(/nguyên tử/)
  })
  it('sai khi cân nhưng chưa tối giản', () => {
    const r = gradeExercise(
      balance,
      { type: 'balance-reaction', reactants: [2, 4], products: [2, 4] },
      content,
    )
    expect(r.correct).toBe(false)
    expect(r.reason).toMatch(/tối giản/)
  })
})

describe('gradeLesson', () => {
  const lesson = content.lessons.get('u1-l1-atoms')!.lesson
  it('bài thường luôn pass, XP = base + thưởng', () => {
    const g = gradeLesson(
      lesson,
      {
        lessonId: lesson.id,
        answers: [
          { exerciseId: 'u1-l1-e1', answer: { type: 'mcq', optionId: 'a' } },
          { exerciseId: 'u1-l1-e2', answer: { type: 'true-false', value: true } },
          { exerciseId: 'u1-l1-e3', answer: { type: 'mcq', optionId: 'b' } },
          {
            exerciseId: 'u1-l1-e4',
            answer: {
              type: 'match-pairs',
              pairs: [
                { leftId: 'l1', rightId: 'r1' },
                { leftId: 'l2', rightId: 'r2' },
                { leftId: 'l3', rightId: 'r3' },
                { leftId: 'l4', rightId: 'r4' },
              ],
            },
          },
        ],
      },
      content,
    )
    expect(g.accuracy).toBe(1)
    expect(g.passed).toBe(true)
    expect(g.xpEarned).toBe(15)
  })
  it('thiếu câu trả lời tính là sai', () => {
    const g = gradeLesson(lesson, { lessonId: lesson.id, answers: [] }, content)
    expect(g.correct).toBe(0)
    expect(g.passed).toBe(true)
    expect(g.xpEarned).toBe(10)
  })
  it('checkpoint dưới ngưỡng thì không pass và XP giảm', () => {
    const cp = content.lessons.get('u1-checkpoint')!.lesson
    const g = gradeLesson(
      cp,
      {
        lessonId: cp.id,
        answers: [{ exerciseId: 'u1-cp-e1', answer: { type: 'mcq', optionId: 'b' } }],
      },
      content,
    )
    expect(g.accuracy).toBe(0.5)
    expect(g.passed).toBe(false)
    expect(g.xpEarned).toBe(5)
  })
})
