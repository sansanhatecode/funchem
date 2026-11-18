import { fixtureContent as content } from '@funchem/content/testing'
import { describe, expect, it } from 'vitest'
import { computeLessonStatuses, computeUnitProgress, type LessonRecord } from './progress.js'

const rec = (entries: [string, number][]) =>
  new Map<string, LessonRecord>(
    entries.map(([lessonId, bestAccuracy]) => [lessonId, { lessonId, bestAccuracy }]),
  )

describe('computeLessonStatuses', () => {
  it('chưa học: chỉ bài đầu mở', () => {
    const s = computeLessonStatuses(content, rec([]))
    expect(s.get('u1-l1-atoms')).toBe('available')
    expect(s.get('u1-l2-elements')).toBe('locked')
    expect(s.get('u1-checkpoint')).toBe('locked')
  })
  it('xong bài 1 thì bài 2 mở', () => {
    const s = computeLessonStatuses(content, rec([['u1-l1-atoms', 0.5]]))
    expect(s.get('u1-l1-atoms')).toBe('completed')
    expect(s.get('u1-l2-elements')).toBe('available')
  })
  it('bài thường dưới 50% chưa tính hoàn thành, bài kế tiếp vẫn khoá', () => {
    const s = computeLessonStatuses(content, rec([['u1-l1-atoms', 0.25]]))
    expect(s.get('u1-l1-atoms')).toBe('available')
    expect(s.get('u1-l2-elements')).toBe('locked')
  })
  it('checkpoint dưới ngưỡng chưa tính hoàn thành', () => {
    const s = computeLessonStatuses(
      content,
      rec([
        ['u1-l1-atoms', 1],
        ['u1-l2-elements', 1],
        ['u1-checkpoint', 0.5],
      ]),
    )
    expect(s.get('u1-checkpoint')).toBe('available')
    const p = computeUnitProgress(content.units[0]!, s)
    expect(p.completed).toBe(2)
    expect(p.passed).toBe(false)
  })
  it('checkpoint đạt ngưỡng → unit pass', () => {
    const s = computeLessonStatuses(
      content,
      rec([
        ['u1-l1-atoms', 1],
        ['u1-l2-elements', 1],
        ['u1-checkpoint', 0.8],
      ]),
    )
    expect(computeUnitProgress(content.units[0]!, s).passed).toBe(true)
  })
})
