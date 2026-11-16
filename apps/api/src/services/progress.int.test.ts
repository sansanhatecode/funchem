import { fixtureContent } from '@funchem/content/testing'
import { createDb, schema, sql } from '@funchem/db'
import { afterAll, beforeEach, describe, expect, it } from 'vitest'
import { getProgress, mergeProgress, NotFoundError, submitAttempt } from './progress.js'

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
        lessonId: 'u1-l1-atoms',
        answers: [],
        now: new Date('2026-11-11T03:00:00Z'),
      },
      fixtureContent,
    )
    expect(r2.streak.current).toBe(2)
    expect(r2.newlyUnlockedMolecules).toEqual([])
    const p = await getProgress(db, u, new Date('2026-11-11T04:00:00Z'), fixtureContent)
    expect(p.lessons['u1-l1-atoms']?.bestAccuracy).toBe(1)
    expect(p.stats.xpToday).toBe(10)
    expect(p.stats.xpTotal).toBe(25)
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
})
