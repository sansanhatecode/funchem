import { type Answer, content as defaultContent, type ContentRegistry } from '@funchem/content'
import {
  badgeCatalog,
  computeLessonStatuses,
  conceptsDueForReview,
  type ConceptStrength,
  effectiveStreak,
  gradeExercise,
  type LessonRecord,
  localDate,
  pickReviewExercises,
  updateConceptStrength,
  updateStreak,
  xpForReview,
} from '@funchem/core'
import { type Db, and, eq, gte, schema, sql } from '@funchem/db'
import { awardBadges, ensureProfile, startOfLocalDay } from './progress.js'

/** Múi giờ dùng để chia tuần của bảng xếp hạng. */
const LEADERBOARD_TZ = 'Asia/Ho_Chi_Minh'

async function completedLessons(
  db: Db,
  userId: string,
  content: ContentRegistry,
): Promise<string[]> {
  const rows = await db
    .select()
    .from(schema.userLessons)
    .where(eq(schema.userLessons.userId, userId))
  const records = new Map<string, LessonRecord>(
    rows.map((r) => [r.lessonId, { lessonId: r.lessonId, bestAccuracy: r.bestAccuracy }]),
  )
  return [...computeLessonStatuses(content, records)]
    .filter(([, st]) => st === 'completed')
    .map(([id]) => id)
}

async function conceptStrengths(db: Db, userId: string): Promise<Map<string, ConceptStrength>> {
  const rows = await db
    .select()
    .from(schema.conceptStrength)
    .where(eq(schema.conceptStrength.userId, userId))
  return new Map(
    rows.map((r) => [
      r.conceptId,
      { strength: r.strength, lastReviewedAt: r.lastReviewedAt, nextReviewAt: r.nextReviewAt },
    ]),
  )
}

/** Bài tập cho lượt ôn hôm nay. Cùng một ngày trả về cùng một bộ câu. */
export async function getReview(
  db: Db,
  userId: string,
  now = new Date(),
  content: ContentRegistry = defaultContent,
) {
  const profile = await ensureProfile(db, userId)
  const completed = await completedLessons(db, userId, content)
  const due = conceptsDueForReview(await conceptStrengths(db, userId), now)
  const exercises = pickReviewExercises(content, {
    completedLessonIds: completed,
    dueConceptIds: due,
    seed: `${userId}:${localDate(now, profile.timezone)}`,
  })
  return { exerciseIds: exercises.map((e) => e.id), dueConceptIds: due }
}

export interface SubmitReviewInput {
  userId: string
  answers: { exerciseId: string; answer: Answer }[]
  now?: Date
}

/** Chấm một lượt ôn. Chỉ nhận câu thuộc bài đã học; cập nhật độ mạnh khái niệm, XP và chuỗi ngày. */
export async function submitReview(
  db: Db,
  input: SubmitReviewInput,
  content: ContentRegistry = defaultContent,
) {
  const now = input.now ?? new Date()
  const profile = await ensureProfile(db, input.userId)
  const allowed = new Set(
    (await completedLessons(db, input.userId, content)).flatMap(
      (id) => content.lessons.get(id)?.lesson.exercises.map((e) => e.id) ?? [],
    ),
  )
  const seen = new Set<string>()
  const results = input.answers
    .filter((a) => allowed.has(a.exerciseId) && !seen.has(a.exerciseId) && seen.add(a.exerciseId))
    .map((a) => gradeExercise(content.exercises.get(a.exerciseId)!.exercise, a.answer, content))
  const correct = results.filter((r) => r.correct).length

  return db.transaction(async (tx) => {
    // khoá dòng thống kê để các lượt nộp cùng lúc không cùng lách qua giới hạn trong ngày
    await tx
      .select({ userId: schema.userStats.userId })
      .from(schema.userStats)
      .where(eq(schema.userStats.userId, input.userId))
      .for('update')
    const [rewarded] = await tx
      .select({ n: sql<number>`count(*)::int` })
      .from(schema.xpEvents)
      .where(
        and(
          eq(schema.xpEvents.userId, input.userId),
          eq(schema.xpEvents.source, 'review'),
          gte(schema.xpEvents.createdAt, startOfLocalDay(now, profile.timezone)),
        ),
      )
    const rewardedRunsToday = rewarded?.n ?? 0
    const xpEarned = xpForReview(correct, { rewardedRunsToday })
    const xpLimited = correct > 0 && xpEarned === 0
    const byConcept = new Map<string, boolean>()
    for (const r of results) {
      for (const c of content.exercises.get(r.exerciseId)?.exercise.conceptIds ?? []) {
        byConcept.set(c, (byConcept.get(c) ?? true) && r.correct)
      }
    }
    for (const [conceptId, ok] of byConcept) {
      const [prev] = await tx
        .select()
        .from(schema.conceptStrength)
        .where(
          and(
            eq(schema.conceptStrength.userId, input.userId),
            eq(schema.conceptStrength.conceptId, conceptId),
          ),
        )
      const next = updateConceptStrength(prev ?? null, ok, now)
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

    const [stats] = await tx
      .select()
      .from(schema.userStats)
      .where(eq(schema.userStats.userId, input.userId))
    let streak = {
      streakCurrent: stats!.streakCurrent,
      streakLongest: stats!.streakLongest,
      lastActiveDate: stats!.lastActiveDate,
    }
    // lượt ôn rỗng (không câu nào hợp lệ) không tính là đã học hôm nay
    if (results.length > 0) streak = updateStreak(streak, now, profile.timezone)
    await tx
      .update(schema.userStats)
      .set({
        xpTotal: sql`${schema.userStats.xpTotal} + ${xpEarned}`,
        streakCurrent: streak.streakCurrent,
        streakLongest: streak.streakLongest,
        lastActiveDate: streak.lastActiveDate,
        updatedAt: now,
      })
      .where(eq(schema.userStats.userId, input.userId))
    if (xpEarned > 0) {
      await tx
        .insert(schema.xpEvents)
        .values({ userId: input.userId, amount: xpEarned, source: 'review', createdAt: now })
    }
    const newBadges = await awardBadges(tx, input.userId, content, now)

    return {
      results,
      total: results.length,
      correct,
      xpEarned,
      /** true nếu hôm nay đã hết số lượt ôn được cộng XP */
      xpLimited,
      streak: { current: streak.streakCurrent, longest: streak.streakLongest },
      xpTotal: stats!.xpTotal + xpEarned,
      newBadges,
    }
  })
}

/** Hồ sơ: thông tin hiển thị, số liệu, huy hiệu và XP theo ngày trong 5 tuần gần nhất. */
export async function getProfile(
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
  const badgeRows = await db
    .select()
    .from(schema.userBadges)
    .where(eq(schema.userBadges.userId, userId))
  const since = new Date(now.getTime() - 35 * 86_400_000)
  const activity = await db
    .select({
      date: sql<string>`to_char(${schema.xpEvents.createdAt} at time zone ${profile.timezone}, 'YYYY-MM-DD')`,
      xp: sql<number>`sum(${schema.xpEvents.amount})::int`,
    })
    .from(schema.xpEvents)
    .where(and(eq(schema.xpEvents.userId, userId), gte(schema.xpEvents.createdAt, since)))
    .groupBy(sql`1`)
    .orderBy(sql`1`)
  const earned = new Map(badgeRows.map((b) => [b.badgeId, b.earnedAt]))

  return {
    displayName: profile.displayName,
    dailyGoalXp: profile.dailyGoalXp,
    timezone: profile.timezone,
    memberSince: profile.createdAt.toISOString(),
    today: localDate(now, profile.timezone),
    stats: {
      xpTotal: stats!.xpTotal,
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
    badges: badgeCatalog(content.units.length).map((b) => ({
      ...b,
      earnedAt: earned.get(b.id)?.toISOString() ?? null,
    })),
    activity,
  }
}

export async function updateProfile(
  db: Db,
  userId: string,
  patch: { displayName?: string | null | undefined; dailyGoalXp?: number | undefined },
) {
  await ensureProfile(db, userId)
  const set: Partial<typeof schema.profiles.$inferInsert> = { updatedAt: new Date() }
  if (patch.displayName !== undefined) set.displayName = patch.displayName?.trim() || null
  if (patch.dailyGoalXp !== undefined) set.dailyGoalXp = patch.dailyGoalXp
  await db.update(schema.profiles).set(set).where(eq(schema.profiles.userId, userId))
}

/** Xoá tài khoản và toàn bộ dữ liệu học tập (các bảng khác xoá theo cascade). */
export async function deleteAccount(db: Db, userId: string) {
  await db.delete(schema.user).where(eq(schema.user.id, userId))
}

/**
 * Bảng xếp hạng tuần: tổng XP từ 0 giờ thứ Hai (giờ Việt Nam).
 * Chỉ tính tài khoản đã đăng ký. Không bao giờ lộ email hay tên thật:
 * chỉ hiện biệt danh người dùng tự đặt, nếu chưa đặt thì là "Bạn học" kèm vài ký tự.
 */
export async function getLeaderboard(db: Db, userId: string, limit = 20) {
  const weekStart = sql`(date_trunc('week', now() at time zone ${LEADERBOARD_TZ}) at time zone ${LEADERBOARD_TZ})`
  const rows = await db
    .select({
      userId: schema.xpEvents.userId,
      displayName: schema.profiles.displayName,
      xp: sql<number>`sum(${schema.xpEvents.amount})::int`,
    })
    .from(schema.xpEvents)
    .innerJoin(schema.user, eq(schema.user.id, schema.xpEvents.userId))
    .leftJoin(schema.profiles, eq(schema.profiles.userId, schema.xpEvents.userId))
    .where(and(gte(schema.xpEvents.createdAt, weekStart), eq(schema.user.isAnonymous, false)))
    .groupBy(schema.xpEvents.userId, schema.profiles.displayName)
    .orderBy(sql`3 desc`, schema.xpEvents.userId)

  const ranked = rows.map((r, i) => ({
    rank: i + 1,
    name: r.displayName ?? `Bạn học ${r.userId.slice(0, 4).toUpperCase()}`,
    xp: r.xp,
    isMe: r.userId === userId,
  }))
  const me = ranked.find((r) => r.isMe) ?? null
  const [mine] = await db
    .select({ xp: sql<number>`coalesce(sum(${schema.xpEvents.amount}), 0)::int` })
    .from(schema.xpEvents)
    .where(and(eq(schema.xpEvents.userId, userId), gte(schema.xpEvents.createdAt, weekStart)))
  return { top: ranked.slice(0, limit), me, myXp: mine?.xp ?? 0, participants: ranked.length }
}
