import { type Answer, content as defaultContent, type ContentRegistry } from '@funchem/content'
import {
  computeLessonStatuses,
  computeUnitProgress,
  earnedBadges,
  effectiveStreak,
  gradeLesson,
  isLessonCompleted,
  type LessonRecord,
  updateConceptStrength,
  updateStreak,
  xpForAttempt,
} from '@funchem/core'
import { type Db, and, desc, eq, gte, schema, sql } from '@funchem/db'

export interface SubmitAttemptInput {
  userId: string
  lessonId: string
  answers: { exerciseId: string; answer: Answer }[]
  durationSec?: number | undefined
  now?: Date
}

export class NotFoundError extends Error {
  constructor(msg: string) {
    super(msg)
    this.name = 'NotFoundError'
  }
}

export async function ensureProfile(db: Db, userId: string) {
  await db.insert(schema.profiles).values({ userId }).onConflictDoNothing()
  await db.insert(schema.userStats).values({ userId }).onConflictDoNothing()
  const [p] = await db.select().from(schema.profiles).where(eq(schema.profiles.userId, userId))
  return p!
}

/**
 * Chấm bài ở server, ghi attempt, cập nhật best, XP, streak, bộ sưu tập, độ mạnh khái niệm.
 * Chạy trong một transaction để không bao giờ cộng XP mà thiếu attempt.
 */
export async function submitAttempt(
  db: Db,
  input: SubmitAttemptInput,
  content: ContentRegistry = defaultContent,
) {
  const entry = content.lessons.get(input.lessonId)
  if (!entry) throw new NotFoundError(`Bài học không tồn tại: ${input.lessonId}`)
  const now = input.now ?? new Date()
  const profile = await ensureProfile(db, input.userId)

  const graded = gradeLesson(
    entry.lesson,
    { lessonId: input.lessonId, answers: input.answers },
    content,
  )

  return db.transaction(async (tx) => {
    // làm lại bài đã hoàn thành chỉ được một nửa XP
    const [previous] = await tx
      .select()
      .from(schema.userLessons)
      .where(
        and(
          eq(schema.userLessons.userId, input.userId),
          eq(schema.userLessons.lessonId, input.lessonId),
        ),
      )
    const alreadyCompleted = previous
      ? isLessonCompleted(
          input.lessonId,
          new Map([
            [input.lessonId, { lessonId: input.lessonId, bestAccuracy: previous.bestAccuracy }],
          ]),
          content,
        )
      : false
    const grade = { ...graded, xpEarned: xpForAttempt(graded, { alreadyCompleted }) }

    const [attempt] = await tx
      .insert(schema.lessonAttempts)
      .values({
        userId: input.userId,
        lessonId: input.lessonId,
        contentVersion: content.version,
        accuracy: grade.accuracy,
        correctCount: grade.correct,
        totalCount: grade.total,
        passed: grade.passed,
        xpEarned: grade.xpEarned,
        durationSec: input.durationSec ?? null,
        answers: { answers: input.answers, results: grade.results },
        completedAt: now,
      })
      .returning({ id: schema.lessonAttempts.id })

    await tx
      .insert(schema.userLessons)
      .values({
        userId: input.userId,
        lessonId: input.lessonId,
        bestAccuracy: grade.accuracy,
        firstCompletedAt: now,
        lastCompletedAt: now,
      })
      .onConflictDoUpdate({
        target: [schema.userLessons.userId, schema.userLessons.lessonId],
        set: {
          bestAccuracy: sql`greatest(${schema.userLessons.bestAccuracy}, ${grade.accuracy})`,
          attempts: sql`${schema.userLessons.attempts} + 1`,
          lastCompletedAt: now,
        },
      })

    const [stats] = await tx
      .select()
      .from(schema.userStats)
      .where(eq(schema.userStats.userId, input.userId))
    const streak = updateStreak(
      {
        streakCurrent: stats!.streakCurrent,
        streakLongest: stats!.streakLongest,
        lastActiveDate: stats!.lastActiveDate,
      },
      now,
      profile.timezone,
    )
    await tx
      .update(schema.userStats)
      .set({
        xpTotal: sql`${schema.userStats.xpTotal} + ${grade.xpEarned}`,
        streakCurrent: streak.streakCurrent,
        streakLongest: streak.streakLongest,
        lastActiveDate: streak.lastActiveDate,
        updatedAt: now,
      })
      .where(eq(schema.userStats.userId, input.userId))

    if (grade.xpEarned > 0) {
      await tx.insert(schema.xpEvents).values({
        userId: input.userId,
        amount: grade.xpEarned,
        source: 'lesson',
        refId: attempt!.id,
        createdAt: now,
      })
    }

    const newlyUnlocked: string[] = []
    if (grade.passed && entry.lesson.unlocksMolecules.length) {
      const rows = await tx
        .insert(schema.userMolecules)
        .values(
          entry.lesson.unlocksMolecules.map((moleculeId) => ({
            userId: input.userId,
            moleculeId,
            unlockedAt: now,
          })),
        )
        .onConflictDoNothing()
        .returning({ moleculeId: schema.userMolecules.moleculeId })
      newlyUnlocked.push(...rows.map((r) => r.moleculeId))
    }

    // độ mạnh khái niệm: gom theo concept, đúng nếu mọi bài tập của concept đó đúng
    const byConcept = new Map<string, boolean>()
    for (const r of grade.results) {
      const ex = content.exercises.get(r.exerciseId)?.exercise
      for (const c of ex?.conceptIds ?? [])
        byConcept.set(c, (byConcept.get(c) ?? true) && r.correct)
    }
    for (const [conceptId, correct] of byConcept) {
      const [prev] = await tx
        .select()
        .from(schema.conceptStrength)
        .where(
          and(
            eq(schema.conceptStrength.userId, input.userId),
            eq(schema.conceptStrength.conceptId, conceptId),
          ),
        )
      const next = updateConceptStrength(prev ?? null, correct, now)
      await tx
        .insert(schema.conceptStrength)
        .values({ userId: input.userId, conceptId, ...next })
        .onConflictDoUpdate({
          target: [schema.conceptStrength.userId, schema.conceptStrength.conceptId],
          set: {
            strength: next.strength,
            lastReviewedAt: next.lastReviewedAt,
            nextReviewAt: next.nextReviewAt,
          },
        })
    }

    const newBadges = await awardBadges(tx, input.userId, content, now)

    return {
      attemptId: attempt!.id,
      grade,
      /** true nếu đây là lần làm lại một bài đã hoàn thành (XP giảm một nửa) */
      repeat: alreadyCompleted,
      streak: { current: streak.streakCurrent, longest: streak.streakLongest },
      xpTotal: stats!.xpTotal + grade.xpEarned,
      newlyUnlockedMolecules: newlyUnlocked,
      newBadges,
    }
  })
}

type Tx = Parameters<Parameters<Db['transaction']>[0]>[0]

/** Tính lại huy hiệu từ trạng thái hiện tại, ghi những cái mới và trả về id của chúng. */
export async function awardBadges(
  tx: Tx | Db,
  userId: string,
  content: ContentRegistry,
  now: Date,
): Promise<string[]> {
  const [stats] = await tx
    .select()
    .from(schema.userStats)
    .where(eq(schema.userStats.userId, userId))
  const lessonRows = await tx
    .select()
    .from(schema.userLessons)
    .where(eq(schema.userLessons.userId, userId))
  const [molecules] = await tx
    .select({ c: sql<number>`count(*)::int` })
    .from(schema.userMolecules)
    .where(eq(schema.userMolecules.userId, userId))
  const records = new Map<string, LessonRecord>(
    lessonRows.map((r) => [r.lessonId, { lessonId: r.lessonId, bestAccuracy: r.bestAccuracy }]),
  )
  const statuses = computeLessonStatuses(content, records)
  const earned = earnedBadges({
    lessonsCompleted: [...statuses.values()].filter((st) => st === 'completed').length,
    unitsPassed: content.units
      .filter((u) => computeUnitProgress(u, statuses).passed)
      .map((u) => u.order),
    streakLongest: stats?.streakLongest ?? 0,
    moleculesUnlocked: molecules?.c ?? 0,
    xpTotal: stats?.xpTotal ?? 0,
    hasPerfectLesson: lessonRows.some((r) => r.bestAccuracy >= 1),
  })
  if (earned.length === 0) return []
  const inserted = await tx
    .insert(schema.userBadges)
    .values(earned.map((badgeId) => ({ userId, badgeId, earnedAt: now })))
    .onConflictDoNothing()
    .returning({ badgeId: schema.userBadges.badgeId })
  return inserted.map((r) => r.badgeId)
}

export async function getProgress(
  db: Db,
  userId: string,
  now = new Date(),
  content: ContentRegistry = defaultContent,
) {
  const profile = await ensureProfile(db, userId)
  const [stats] = await db
    .select()
    .from(schema.userStats)
    .where(eq(schema.userStats.userId, userId))
  const lessonRows = await db
    .select()
    .from(schema.userLessons)
    .where(eq(schema.userLessons.userId, userId))
  const moleculeRows = await db
    .select()
    .from(schema.userMolecules)
    .where(eq(schema.userMolecules.userId, userId))

  const records = new Map<string, LessonRecord>(
    lessonRows.map((r) => [r.lessonId, { lessonId: r.lessonId, bestAccuracy: r.bestAccuracy }]),
  )
  const statuses = computeLessonStatuses(content, records)

  // XP hôm nay theo múi giờ người dùng
  const todayStart = startOfLocalDay(now, profile.timezone)
  const [todayXp] = await db
    .select({ sum: sql<number>`coalesce(sum(${schema.xpEvents.amount}), 0)::int` })
    .from(schema.xpEvents)
    .where(and(eq(schema.xpEvents.userId, userId), gte(schema.xpEvents.createdAt, todayStart)))

  return {
    profile: {
      displayName: profile.displayName,
      avatar: profile.avatar,
      timezone: profile.timezone,
      dailyGoalXp: profile.dailyGoalXp,
    },
    stats: {
      xpTotal: stats!.xpTotal,
      xpToday: todayXp?.sum ?? 0,
      streak: effectiveStreak(
        {
          streakCurrent: stats!.streakCurrent,
          streakLongest: stats!.streakLongest,
          lastActiveDate: stats!.lastActiveDate,
        },
        now,
        profile.timezone,
      ),
      streakLongest: stats!.streakLongest,
    },
    lessons: Object.fromEntries(
      [...statuses].map(([lessonId, status]) => [
        lessonId,
        { status, bestAccuracy: records.get(lessonId)?.bestAccuracy ?? null },
      ]),
    ),
    units: content.units.map((u) => computeUnitProgress(u, statuses)),
    molecules: moleculeRows.map((m) => m.moleculeId),
    contentVersion: content.version,
  }
}

export async function getRecentAttempts(db: Db, userId: string, limit = 20) {
  return db
    .select({
      id: schema.lessonAttempts.id,
      lessonId: schema.lessonAttempts.lessonId,
      accuracy: schema.lessonAttempts.accuracy,
      passed: schema.lessonAttempts.passed,
      xpEarned: schema.lessonAttempts.xpEarned,
      completedAt: schema.lessonAttempts.completedAt,
    })
    .from(schema.lessonAttempts)
    .where(eq(schema.lessonAttempts.userId, userId))
    .orderBy(desc(schema.lessonAttempts.completedAt))
    .limit(limit)
}

/**
 * Chuyển toàn bộ tiến độ của tài khoản ẩn danh sang tài khoản thật khi liên kết.
 * Tài khoản đích thường mới tinh; nếu đã có dữ liệu thì giữ giá trị tốt hơn.
 */
export async function mergeProgress(db: Db, fromUserId: string, toUserId: string) {
  if (fromUserId === toUserId) return
  await db.transaction(async (tx) => {
    await tx.insert(schema.profiles).values({ userId: toUserId }).onConflictDoNothing()
    await tx.insert(schema.userStats).values({ userId: toUserId }).onConflictDoNothing()

    await tx
      .update(schema.lessonAttempts)
      .set({ userId: toUserId })
      .where(eq(schema.lessonAttempts.userId, fromUserId))
    await tx
      .update(schema.xpEvents)
      .set({ userId: toUserId })
      .where(eq(schema.xpEvents.userId, fromUserId))

    await tx.execute(sql`
      insert into user_lessons (user_id, lesson_id, best_accuracy, attempts, first_completed_at, last_completed_at)
      select ${toUserId}, lesson_id, best_accuracy, attempts, first_completed_at, last_completed_at
      from user_lessons where user_id = ${fromUserId}
      on conflict (user_id, lesson_id) do update set
        best_accuracy = greatest(user_lessons.best_accuracy, excluded.best_accuracy),
        attempts = user_lessons.attempts + excluded.attempts,
        first_completed_at = least(user_lessons.first_completed_at, excluded.first_completed_at),
        last_completed_at = greatest(user_lessons.last_completed_at, excluded.last_completed_at)
    `)
    await tx.execute(sql`
      insert into user_molecules (user_id, molecule_id, unlocked_at)
      select ${toUserId}, molecule_id, unlocked_at from user_molecules where user_id = ${fromUserId}
      on conflict do nothing
    `)
    await tx.execute(sql`
      insert into user_badges (user_id, badge_id, earned_at)
      select ${toUserId}, badge_id, earned_at from user_badges where user_id = ${fromUserId}
      on conflict do nothing
    `)
    await tx.execute(sql`
      insert into concept_strength (user_id, concept_id, strength, last_reviewed_at, next_review_at)
      select ${toUserId}, concept_id, strength, last_reviewed_at, next_review_at
      from concept_strength where user_id = ${fromUserId}
      on conflict (user_id, concept_id) do update set
        strength = greatest(concept_strength.strength, excluded.strength),
        last_reviewed_at = greatest(concept_strength.last_reviewed_at, excluded.last_reviewed_at),
        next_review_at = greatest(concept_strength.next_review_at, excluded.next_review_at)
    `)
    await tx.execute(sql`
      update user_stats t set
        xp_total = t.xp_total + s.xp_total,
        streak_current = greatest(t.streak_current, s.streak_current),
        streak_longest = greatest(t.streak_longest, s.streak_longest),
        last_active_date = greatest(t.last_active_date, s.last_active_date),
        updated_at = now()
      from user_stats s where s.user_id = ${fromUserId} and t.user_id = ${toUserId}
    `)
    // dữ liệu ẩn danh còn lại bị xoá theo cascade khi Better Auth xoá user ẩn danh
  })
}

export function startOfLocalDay(now: Date, timeZone: string): Date {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(now)
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value ?? 0)
  // thời điểm hiện tại biểu diễn theo giờ địa phương, lấy phần giờ trong ngày và trừ đi
  const localMs = Date.UTC(
    get('year'),
    get('month') - 1,
    get('day'),
    get('hour'),
    get('minute'),
    get('second'),
  )
  const offsetMs = localMs - now.getTime()
  const localMidnight = Date.UTC(get('year'), get('month') - 1, get('day'))
  return new Date(localMidnight - offsetMs)
}
