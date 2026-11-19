import { fixtureContent } from '@funchem/content/testing'
import { createDb, schema, sql } from '@funchem/db'
import { afterAll, beforeEach, describe, expect, it } from 'vitest'
import { recordLearningEvent } from './analytics.js'
import {
  getProgress,
  LessonLockedError,
  mergeProgress,
  NotFoundError,
  submitAttempt,
} from './progress.js'
import {
  deleteAccount,
  getLeaderboard,
  getProfile,
  getReview,
  submitReview,
  updateProfile,
} from './social.js'

/**
 * Test tích hợp với Postgres thật. Chỉ chạy khi có TEST_DATABASE_URL
 * (database đã chạy migration). CI tự dựng Postgres; ở máy dev xem README.
 */
const url = process.env.TEST_DATABASE_URL
const d = url ? describe : describe.skip

d('progress service (Postgres)', () => {
  const db = createDb(url!)
  const mkUser = async (id: string, anonymous = false) => {
    await db
      .insert(schema.user)
      .values({ id, name: id, email: `${id}@test.local`, isAnonymous: anonymous })
    return id
  }
  const lesson1 = {
    lessonId: 'u1-l1-atoms',
    answers: [
      { exerciseId: 'u1-l1-e1', answer: { type: 'mcq' as const, optionId: 'a' } },
      { exerciseId: 'u1-l1-e2', answer: { type: 'true-false' as const, value: true } },
      { exerciseId: 'u1-l1-e3', answer: { type: 'mcq' as const, optionId: 'b' } },
      {
        exerciseId: 'u1-l1-e4',
        answer: {
          type: 'match-pairs' as const,
          pairs: [
            { leftId: 'l1', rightId: 'r1' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r3' },
            { leftId: 'l4', rightId: 'r4' },
          ],
        },
      },
    ],
  }

  /** đúng 2 trên 4 câu của bài 1: vừa đủ ngưỡng 50% của bài thường */
  const lesson1Half = { lessonId: lesson1.lessonId, answers: lesson1.answers.slice(0, 2) }
  /** đúng 2 trên 3 câu của bài 2 */
  const lesson2 = {
    lessonId: 'u1-l2-elements',
    answers: [
      {
        exerciseId: 'u1-l2-e2',
        answer: {
          type: 'sort' as const,
          assignments: { i1: 'element', i2: 'not', i3: 'element', i4: 'not' },
        },
      },
      { exerciseId: 'u1-l2-e3', answer: { type: 'fill-blank' as const, values: ['2'] } },
    ],
  }

  beforeEach(async () => {
    await db.execute(sql`truncate table "user" cascade`)
  })
  afterAll(async () => {
    await db.$client.end()
  })

  it('nộp bài: chấm ở server, cộng XP, streak, mở khoá phân tử và bài kế tiếp', async () => {
    const u = await mkUser('u-a')
    const r = await submitAttempt(
      db,
      {
        userId: u,
        ...lesson1,
        now: new Date('2026-11-10T03:00:00Z'),
      },
      fixtureContent,
    )
    expect(r.grade.accuracy).toBe(1)
    expect(r.grade.xpEarned).toBe(15)
    expect(r.streak.current).toBe(1)
    expect(r.newlyUnlockedMolecules).toEqual(['fe'])

    const p = await getProgress(db, u, new Date('2026-11-10T04:00:00Z'), fixtureContent)
    expect(p.stats).toMatchObject({ xpTotal: 15, xpToday: 15, streak: 1 })
    expect(p.lessons['u1-l1-atoms']?.status).toBe('completed')
    expect(p.lessons['u1-l2-elements']?.status).toBe('available')
    expect(p.lessons['u1-checkpoint']?.status).toBe('locked')
    expect(p.lessons['u2-l1-reactions']?.status).toBe('locked')
    expect(p.molecules).toEqual(['fe'])
  })

  it('học hai ngày liên tiếp tăng streak; làm lại giữ điểm cao nhất', async () => {
    const u = await mkUser('u-b')
    await submitAttempt(
      db,
      { userId: u, ...lesson1, now: new Date('2026-11-10T03:00:00Z') },
      fixtureContent,
    )
    const r2 = await submitAttempt(
      db,
      {
        userId: u,
        ...lesson1Half,
        now: new Date('2026-11-11T03:00:00Z'),
      },
      fixtureContent,
    )
    expect(r2.streak.current).toBe(2)
    expect(r2.newlyUnlockedMolecules).toEqual([])
    const p = await getProgress(db, u, new Date('2026-11-11T04:00:00Z'), fixtureContent)
    expect(p.lessons['u1-l1-atoms']?.bestAccuracy).toBe(1)
    expect(r2.repeat).toBe(true)
    // làm lại bài đã xong: 10 XP cơ bản giảm còn một nửa
    expect(p.stats.xpToday).toBe(5)
    expect(p.stats.xpTotal).toBe(20)
  })

  it('bài không tồn tại → NotFoundError, không ghi gì', async () => {
    const u = await mkUser('u-c')
    await expect(
      submitAttempt(db, { userId: u, lessonId: 'khong-co', answers: [] }, fixtureContent),
    ).rejects.toBeInstanceOf(NotFoundError)
    const [n] = await db.select({ c: sql<number>`count(*)::int` }).from(schema.lessonAttempts)
    expect(n?.c).toBe(0)
  })

  it('mergeProgress chuyển trọn tiến độ từ khách sang tài khoản thật', async () => {
    const guest = await mkUser('u-guest', true)
    const real = await mkUser('u-real')
    await submitAttempt(
      db,
      { userId: guest, ...lesson1, now: new Date('2026-11-10T03:00:00Z') },
      fixtureContent,
    )

    await mergeProgress(db, guest, real)
    await db.delete(schema.user).where(sql`id = ${guest}`) // Better Auth xoá user ẩn danh sau khi liên kết

    const p = await getProgress(db, real, new Date('2026-11-10T04:00:00Z'), fixtureContent)
    expect(p.stats).toMatchObject({ xpTotal: 15, xpToday: 15, streak: 1 })
    expect(p.lessons['u1-l1-atoms']?.status).toBe('completed')
    expect(p.molecules).toEqual(['fe'])
    const [n] = await db.select({ c: sql<number>`count(*)::int` }).from(schema.lessonAttempts)
    expect(n?.c).toBe(1)
  })
  it('lần đầu hoàn thành nhận huy hiệu, làm lại không nhận trùng', async () => {
    const u = await mkUser('u-badge')
    const first = await submitAttempt(db, { userId: u, ...lesson1 }, fixtureContent)
    expect(first.repeat).toBe(false)
    expect(first.newBadges.sort()).toEqual(['first-lesson', 'perfect-lesson'])
    const again = await submitAttempt(db, { userId: u, ...lesson1 }, fixtureContent)
    // cùng ngày nên không được cộng thêm XP
    expect(again.grade.xpEarned).toBe(0)
    expect(again.xpLimited).toBe(true)
    expect(again.newBadges).toEqual([])
  })

  it('bài chưa mở khoá: gọi thẳng API cũng bị từ chối, không ghi gì', async () => {
    const u = await mkUser('u-locked')
    for (const lessonId of ['u1-l2-elements', 'u1-checkpoint', 'u2-l1-reactions']) {
      await expect(
        submitAttempt(db, { userId: u, lessonId, answers: [] }, fixtureContent),
      ).rejects.toBeInstanceOf(LessonLockedError)
    }
    const [n] = await db.select({ c: sql<number>`count(*)::int` }).from(schema.lessonAttempts)
    expect(n?.c).toBe(0)
    const p = await getProgress(db, u, new Date(), fixtureContent)
    expect(p.stats.xpTotal).toBe(0)

    // học xong bài 1 thì bài 2 mở, bài kiểm tra vẫn khoá
    await submitAttempt(db, { userId: u, ...lesson1 }, fixtureContent)
    await expect(
      submitAttempt(db, { userId: u, lessonId: 'u1-checkpoint', answers: [] }, fixtureContent),
    ).rejects.toBeInstanceOf(LessonLockedError)
    // bài 2 làm sai hết: được nộp, nhưng chưa đạt 50% nên bài kiểm tra vẫn khoá
    const failed = await submitAttempt(
      db,
      { userId: u, lessonId: 'u1-l2-elements', answers: [] },
      fixtureContent,
    )
    expect(failed.grade.passed).toBe(false)
    expect(failed.grade.xpEarned).toBe(0)
    await expect(
      submitAttempt(db, { userId: u, lessonId: 'u1-checkpoint', answers: [] }, fixtureContent),
    ).rejects.toBeInstanceOf(LessonLockedError)
    const passed = await submitAttempt(db, { userId: u, ...lesson2 }, fixtureContent)
    expect(passed.grade.passed).toBe(true)
    expect(passed.repeat).toBe(false)
    // Unit 2 chỉ mở khi bài kiểm tra Unit 1 đạt
    await submitAttempt(db, { userId: u, lessonId: 'u1-checkpoint', answers: [] }, fixtureContent)
    await expect(
      submitAttempt(db, { userId: u, lessonId: 'u2-l1-reactions', answers: [] }, fixtureContent),
    ).rejects.toBeInstanceOf(LessonLockedError)
  })

  it('cày lại một bài trong cùng ngày không cộng dồn XP, sang ngày mới được nửa XP', async () => {
    const u = await mkUser('u-farm')
    const day1 = new Date('2026-11-10T03:00:00Z')
    const first = await submitAttempt(db, { userId: u, ...lesson1, now: day1 }, fixtureContent)
    expect(first.grade.xpEarned).toBe(15)
    expect(first.xpLimited).toBe(false)

    for (let i = 1; i <= 5; i++) {
      const again = await submitAttempt(
        db,
        { userId: u, ...lesson1, now: new Date(day1.getTime() + i * 60_000) },
        fixtureContent,
      )
      expect(again.grade.xpEarned).toBe(0)
      expect(again.xpLimited).toBe(true)
    }
    const p1 = await getProgress(db, u, new Date('2026-11-10T05:00:00Z'), fixtureContent)
    expect(p1.stats.xpTotal).toBe(15)

    const nextDay = await submitAttempt(
      db,
      { userId: u, ...lesson1, now: new Date('2026-11-11T03:00:00Z') },
      fixtureContent,
    )
    expect(nextDay.grade.xpEarned).toBe(8)
    expect(nextDay.xpLimited).toBe(false)
  })

  it('hai lần nộp cùng lúc chỉ một lần được XP', async () => {
    const u = await mkUser('u-race')
    const now = new Date('2026-11-10T03:00:00Z')
    const results = await Promise.all(
      Array.from({ length: 6 }, () =>
        submitAttempt(db, { userId: u, ...lesson1, now }, fixtureContent),
      ),
    )
    expect(results.reduce((n, r) => n + r.grade.xpEarned, 0)).toBe(15)
    const p = await getProgress(db, u, new Date('2026-11-10T04:00:00Z'), fixtureContent)
    expect(p.stats.xpTotal).toBe(15)
  })

  it('ôn tập: chỉ 3 lượt đầu trong ngày được cộng XP', async () => {
    const u = await mkUser('u-review-cap')
    const day = new Date('2026-11-10T03:00:00Z')
    await submitAttempt(db, { userId: u, ...lesson1, now: day }, fixtureContent)
    const run = (at: Date) =>
      submitReview(db, { userId: u, answers: lesson1.answers, now: at }, fixtureContent)
    for (let i = 1; i <= 3; i++) {
      const r = await run(new Date(day.getTime() + i * 60_000))
      expect(r.xpEarned).toBe(4)
      expect(r.xpLimited).toBe(false)
    }
    const fourth = await run(new Date(day.getTime() + 4 * 60_000))
    expect(fourth.correct).toBe(4)
    expect(fourth.xpEarned).toBe(0)
    expect(fourth.xpLimited).toBe(true)
    const p = await getProgress(db, u, new Date(day.getTime() + 5 * 60_000), fixtureContent)
    expect(p.stats.xpTotal).toBe(15 + 12)

    const tomorrow = await run(new Date('2026-11-11T03:00:00Z'))
    expect(tomorrow.xpEarned).toBe(4)
  })

  it('ôn tập: chỉ lấy câu từ bài đã học, chấm ở server, cộng XP theo số câu đúng', async () => {
    const u = await mkUser('u-review')
    expect((await getReview(db, u, new Date(), fixtureContent)).exerciseIds).toEqual([])

    await submitAttempt(db, { userId: u, ...lesson1 }, fixtureContent)
    const review = await getReview(db, u, new Date(), fixtureContent)
    const allowed = lesson1.answers.map((a) => a.exerciseId)
    expect(review.exerciseIds.length).toBeGreaterThan(0)
    for (const id of review.exerciseIds) expect(allowed).toContain(id)

    const r = await submitReview(
      db,
      {
        userId: u,
        answers: [
          ...lesson1.answers,
          // câu của bài chưa học và câu lặp lại đều bị bỏ qua
          { exerciseId: 'u1-l2-e1', answer: { type: 'build-molecule', atoms: { O: 2 } } },
          lesson1.answers[0]!,
        ],
      },
      fixtureContent,
    )
    expect(r.total).toBe(4)
    expect(r.correct).toBe(4)
    expect(r.xpEarned).toBe(4)
    const p = await getProgress(db, u, new Date(), fixtureContent)
    expect(p.stats.xpTotal).toBe(15 + 4)
  })

  it('hồ sơ: đổi biệt danh và mục tiêu, có huy hiệu và XP theo ngày', async () => {
    const u = await mkUser('u-profile')
    await submitAttempt(db, { userId: u, ...lesson1 }, fixtureContent)
    await updateProfile(db, u, { displayName: '  Minh  ', dailyGoalXp: 30 })
    const profile = await getProfile(db, u, new Date(), fixtureContent)
    expect(profile.displayName).toBe('Minh')
    expect(profile.dailyGoalXp).toBe(30)
    expect(profile.badges.find((b) => b.id === 'first-lesson')?.earnedAt).not.toBeNull()
    expect(profile.badges.find((b) => b.id === 'streak-7')?.earnedAt).toBeNull()
    expect(profile.activity).toEqual([{ date: profile.today, xp: 15 }])
  })

  it('bảng xếp hạng tuần: không tính khách, không lộ email, xếp theo XP', async () => {
    const guest = await mkUser('u-lb-guest', true)
    const a = await mkUser('u-lb-a')
    const b = await mkUser('u-lb-b')
    await submitAttempt(db, { userId: guest, ...lesson1 }, fixtureContent)
    await submitAttempt(db, { userId: a, ...lesson1 }, fixtureContent)
    await submitAttempt(db, { userId: b, ...lesson1Half }, fixtureContent)
    await updateProfile(db, a, { displayName: 'An' })

    const board = await getLeaderboard(db, b)
    expect(board.participants).toBe(2)
    expect(board.top.map((r) => [r.rank, r.name, r.xp])).toEqual([
      [1, 'An', 15],
      [2, 'Bạn học U-LB', 10],
    ])
    expect(board.me?.rank).toBe(2)
    expect(JSON.stringify(board)).not.toContain('@')

    const asGuest = await getLeaderboard(db, guest)
    expect(asGuest.me).toBeNull()
    expect(asGuest.myXp).toBe(15)
  })

  it('sự kiện học tập: ghi lại, theo người học khi khách đăng ký, mất khi xoá tài khoản', async () => {
    const guest = await mkUser('u-ev-guest', true)
    const real = await mkUser('u-ev-real')
    await recordLearningEvent(db, { userId: guest, type: 'lesson_start', lessonId: 'u1-l1-atoms' })
    await recordLearningEvent(db, {
      userId: guest,
      type: 'lesson_exit',
      lessonId: 'u1-l1-atoms',
      exerciseId: 'u1-l1-e3',
      answered: 2,
    })
    await submitAttempt(db, { userId: guest, ...lesson1 }, fixtureContent)
    await mergeProgress(db, guest, real)
    await db.delete(schema.user).where(sql`id = ${guest}`)

    const rows = await db.select().from(schema.learningEvents).orderBy(schema.learningEvents.type)
    expect(rows.map((r) => [r.userId, r.type, r.exerciseId, r.answered])).toEqual([
      [real, 'lesson_exit', 'u1-l1-e3', 2],
      [real, 'lesson_start', null, null],
    ])

    await deleteAccount(db, real)
    const [n] = await db.select({ c: sql<number>`count(*)::int` }).from(schema.learningEvents)
    expect(n?.c).toBe(0)
  })

  it('xoá tài khoản xoá sạch dữ liệu học tập', async () => {
    const u = await mkUser('u-delete')
    await submitAttempt(db, { userId: u, ...lesson1 }, fixtureContent)
    await deleteAccount(db, u)
    for (const table of [
      schema.lessonAttempts,
      schema.userLessons,
      schema.userStats,
      schema.xpEvents,
      schema.userBadges,
      schema.profiles,
    ]) {
      const [n] = await db.select({ c: sql<number>`count(*)::int` }).from(table)
      expect(n?.c).toBe(0)
    }
  })
})
