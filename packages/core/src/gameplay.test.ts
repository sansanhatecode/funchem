import { fixtureContent as content } from '@funchem/content/testing'
import { describe, expect, it } from 'vitest'
import { badgeCatalog, earnedBadges } from './badges.js'
import { pickReviewExercises } from './review.js'
import { xpForAttempt, xpForReview } from './xp.js'

describe('xpForAttempt', () => {
  it('lần đầu được đủ XP, làm lại được một nửa (làm tròn lên)', () => {
    expect(xpForAttempt({ xpEarned: 15 }, { alreadyCompleted: false })).toBe(15)
    expect(xpForAttempt({ xpEarned: 15 }, { alreadyCompleted: true })).toBe(8)
    expect(xpForAttempt({ xpEarned: 0 }, { alreadyCompleted: true })).toBe(0)
  })
  it('ôn tập: 1 XP mỗi câu đúng, tối đa 10', () => {
    expect(xpForReview(6)).toBe(6)
    expect(xpForReview(14)).toBe(10)
  })
})

describe('huy hiệu', () => {
  const base = {
    lessonsCompleted: 0,
    unitsPassed: [],
    streakLongest: 0,
    moleculesUnlocked: 0,
    xpTotal: 0,
    hasPerfectLesson: false,
  }
  it('chưa học gì thì chưa có huy hiệu', () => {
    expect(earnedBadges(base)).toEqual([])
  })
  it('đạt mốc nào nhận huy hiệu mốc đó', () => {
    const got = earnedBadges({
      lessonsCompleted: 7,
      unitsPassed: [1],
      streakLongest: 8,
      moleculesUnlocked: 6,
      xpTotal: 120,
      hasPerfectLesson: true,
    })
    expect(got).toEqual([
      'first-lesson',
      'perfect-lesson',
      'unit-1',
      'streak-3',
      'streak-7',
      'collector-5',
      'xp-100',
    ])
  })
  it('mọi huy hiệu nhận được đều có trong danh mục', () => {
    const ids = new Set(badgeCatalog(4).map((b) => b.id))
    const all = earnedBadges({
      lessonsCompleted: 99,
      unitsPassed: [1, 2, 3, 4],
      streakLongest: 99,
      moleculesUnlocked: 99,
      xpTotal: 9999,
      hasPerfectLesson: true,
    })
    for (const id of all) expect(ids.has(id), id).toBe(true)
    expect(ids.size).toBe(badgeCatalog(4).length)
  })
})

describe('pickReviewExercises', () => {
  it('chưa học bài nào thì không có gì để ôn', () => {
    expect(
      pickReviewExercises(content, { completedLessonIds: [], dueConceptIds: ['atom'] }),
    ).toEqual([])
  })
  it('chỉ lấy câu từ bài đã học, không lặp, không quá số lượng', () => {
    const picked = pickReviewExercises(content, {
      completedLessonIds: ['u1-l1-atoms'],
      dueConceptIds: [],
      count: 3,
      seed: 's',
    })
    const allowed = new Set(content.lessons.get('u1-l1-atoms')!.lesson.exercises.map((e) => e.id))
    expect(picked).toHaveLength(3)
    expect(new Set(picked.map((e) => e.id)).size).toBe(3)
    for (const e of picked) expect(allowed.has(e.id)).toBe(true)
  })
  it('ưu tiên câu thuộc khái niệm đang yếu', () => {
    const picked = pickReviewExercises(content, {
      completedLessonIds: ['u1-l1-atoms', 'u1-l2-elements'],
      dueConceptIds: ['formula'],
      count: 2,
      seed: 's',
    })
    expect(picked.some((e) => e.conceptIds.includes('formula'))).toBe(true)
  })
  it('cùng seed cho cùng kết quả', () => {
    const args = {
      completedLessonIds: ['u1-l1-atoms', 'u1-l2-elements'],
      dueConceptIds: ['element'],
      seed: 'ngay-1',
    }
    expect(pickReviewExercises(content, args).map((e) => e.id)).toEqual(
      pickReviewExercises(content, args).map((e) => e.id),
    )
  })
})
