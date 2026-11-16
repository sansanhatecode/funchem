import { relations, sql } from 'drizzle-orm'
import {
  boolean,
  index,
  integer,
  jsonb,
  pgTable,
  primaryKey,
  real,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core'

/* ------------------------------------------------------------------ */
/* Bảng do Better Auth quản lý. Tên trường phải khớp tài liệu Better Auth. */
/* ------------------------------------------------------------------ */

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').notNull().default(false),
  image: text('image'),
  /** plugin anonymous */
  isAnonymous: boolean('is_anonymous').notNull().default(false),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
})

export const session = pgTable(
  'session',
  {
    id: text('id').primaryKey(),
    expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
    token: text('token').notNull().unique(),
    ipAddress: text('ip_address'),
    userAgent: text('user_agent'),
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index('session_user_id_idx').on(t.userId)],
)

export const account = pgTable(
  'account',
  {
    id: text('id').primaryKey(),
    accountId: text('account_id').notNull(),
    providerId: text('provider_id').notNull(),
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    accessToken: text('access_token'),
    refreshToken: text('refresh_token'),
    idToken: text('id_token'),
    accessTokenExpiresAt: timestamp('access_token_expires_at', { withTimezone: true }),
    refreshTokenExpiresAt: timestamp('refresh_token_expires_at', { withTimezone: true }),
    scope: text('scope'),
    password: text('password'),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index('account_user_id_idx').on(t.userId)],
)

export const verification = pgTable(
  'verification',
  {
    id: text('id').primaryKey(),
    identifier: text('identifier').notNull(),
    value: text('value').notNull(),
    expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index('verification_identifier_idx').on(t.identifier)],
)

/* ------------------------------------------------------------------ */
/* Bảng của FunChem                                                    */
/* ------------------------------------------------------------------ */

export const profiles = pgTable('profiles', {
  userId: text('user_id')
    .primaryKey()
    .references(() => user.id, { onDelete: 'cascade' }),
  displayName: text('display_name'),
  avatar: text('avatar'),
  timezone: text('timezone').notNull().default('Asia/Ho_Chi_Minh'),
  dailyGoalXp: integer('daily_goal_xp').notNull().default(20),
  locale: text('locale').notNull().default('vi'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
})

/** Mỗi lần làm bài, không ghi đè. Nguồn dữ liệu phân tích học tập. */
export const lessonAttempts = pgTable(
  'lesson_attempts',
  {
    id: text('id')
      .primaryKey()
      .default(sql`gen_random_uuid()`),
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    lessonId: text('lesson_id').notNull(),
    contentVersion: text('content_version').notNull(),
    /** 0..1 */
    accuracy: real('accuracy').notNull(),
    correctCount: integer('correct_count').notNull(),
    totalCount: integer('total_count').notNull(),
    passed: boolean('passed').notNull(),
    xpEarned: integer('xp_earned').notNull(),
    durationSec: integer('duration_sec'),
    /** câu trả lời + kết quả từng bài tập, để phân tích câu nào sai nhiều */
    answers: jsonb('answers').notNull(),
    completedAt: timestamp('completed_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index('lesson_attempts_user_idx').on(t.userId, t.completedAt),
    index('lesson_attempts_lesson_idx').on(t.lessonId),
  ],
)

/** Trạng thái tốt nhất của từng bài cho mỗi người. */
export const userLessons = pgTable(
  'user_lessons',
  {
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    lessonId: text('lesson_id').notNull(),
    bestAccuracy: real('best_accuracy').notNull(),
    attempts: integer('attempts').notNull().default(1),
    firstCompletedAt: timestamp('first_completed_at', { withTimezone: true })
      .notNull()
      .defaultNow(),
    lastCompletedAt: timestamp('last_completed_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.lessonId] })],
)

export const userStats = pgTable('user_stats', {
  userId: text('user_id')
    .primaryKey()
    .references(() => user.id, { onDelete: 'cascade' }),
  xpTotal: integer('xp_total').notNull().default(0),
  streakCurrent: integer('streak_current').notNull().default(0),
  streakLongest: integer('streak_longest').notNull().default(0),
  /** YYYY-MM-DD theo múi giờ người dùng */
  lastActiveDate: text('last_active_date'),
  freezeCount: integer('freeze_count').notNull().default(0),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
})

export const userMolecules = pgTable(
  'user_molecules',
  {
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    moleculeId: text('molecule_id').notNull(),
    unlockedAt: timestamp('unlocked_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.moleculeId] })],
)

export const userBadges = pgTable(
  'user_badges',
  {
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    badgeId: text('badge_id').notNull(),
    earnedAt: timestamp('earned_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.badgeId] })],
)

export const conceptStrength = pgTable(
  'concept_strength',
  {
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    conceptId: text('concept_id').notNull(),
    strength: real('strength').notNull(),
    lastReviewedAt: timestamp('last_reviewed_at', { withTimezone: true }).notNull(),
    nextReviewAt: timestamp('next_review_at', { withTimezone: true }).notNull(),
  },
  (t) => [
    primaryKey({ columns: [t.userId, t.conceptId] }),
    index('concept_strength_due_idx').on(t.userId, t.nextReviewAt),
  ],
)

/** Nguồn cho bảng xếp hạng tuần và biểu đồ XP theo ngày. */
export const xpEvents = pgTable(
  'xp_events',
  {
    id: text('id')
      .primaryKey()
      .default(sql`gen_random_uuid()`),
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    amount: integer('amount').notNull(),
    source: text('source').notNull(),
    refId: text('ref_id'),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index('xp_events_user_time_idx').on(t.userId, t.createdAt),
    index('xp_events_time_idx').on(t.createdAt),
  ],
)

/** Phiên bản nội dung đã phát hành, để lịch sử attempt luôn tra ngược được. */
export const contentReleases = pgTable(
  'content_releases',
  {
    version: text('version').primaryKey(),
    releasedAt: timestamp('released_at', { withTimezone: true }).notNull().defaultNow(),
    notes: text('notes'),
  },
  (t) => [uniqueIndex('content_releases_version_idx').on(t.version)],
)

/* ---------------------------- relations ---------------------------- */

export const userRelations = relations(user, ({ one, many }) => ({
  profile: one(profiles, { fields: [user.id], references: [profiles.userId] }),
  stats: one(userStats, { fields: [user.id], references: [userStats.userId] }),
  lessons: many(userLessons),
  attempts: many(lessonAttempts),
  molecules: many(userMolecules),
}))

export const userLessonsRelations = relations(userLessons, ({ one }) => ({
  user: one(user, { fields: [userLessons.userId], references: [user.id] }),
}))
export const lessonAttemptsRelations = relations(lessonAttempts, ({ one }) => ({
  user: one(user, { fields: [lessonAttempts.userId], references: [user.id] }),
}))
export const userMoleculesRelations = relations(userMolecules, ({ one }) => ({
  user: one(user, { fields: [userMolecules.userId], references: [user.id] }),
}))
