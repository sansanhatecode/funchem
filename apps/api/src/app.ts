import { AnswerSchema } from '@funchem/content'
import type { Db } from '@funchem/db'
import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { createMiddleware } from 'hono/factory'
import { logger as honoLogger } from 'hono/logger'
import { secureHeaders } from 'hono/secure-headers'
import { z } from 'zod'
import type { Auth } from './auth.js'
import type { Env } from './env.js'
import { logger } from './lib/logger.js'
import { captureError } from './lib/monitoring.js'
import { LEARNING_EVENT_TYPES, recordLearningEvent } from './services/analytics.js'
import {
  getProgress,
  getRecentAttempts,
  LessonLockedError,
  NotFoundError,
  submitAttempt,
} from './services/progress.js'
import {
  deleteAccount,
  getLeaderboard,
  getProfile,
  getReview,
  submitReview,
  updateProfile,
} from './services/social.js'

export interface AppDeps {
  env: Env
  db: Db
  auth: Auth
}

type SessionUser = Auth['$Infer']['Session']['user']
type Variables = { user: SessionUser; sessionId: string }

/** Bộ đếm đơn giản trong bộ nhớ: tối đa `max` lần mỗi `windowMs` cho một khoá. Đủ dùng để chặn tràn log. */
function createWindowLimiter(max: number, windowMs: number) {
  const hits = new Map<string, { count: number; resetAt: number }>()
  return (key: string, now = Date.now()): boolean => {
    const hit = hits.get(key)
    if (!hit || now >= hit.resetAt) {
      if (hits.size > 5000) hits.clear()
      hits.set(key, { count: 1, resetAt: now + windowMs })
      return true
    }
    hit.count++
    return hit.count <= max
  }
}

export function createApp({ env, db, auth }: AppDeps) {
  const app = new Hono<{ Variables: Variables }>()

  app.use('*', secureHeaders())
  app.use(
    '*',
    honoLogger((msg) => logger.info(msg)),
  )
  app.use(
    '*',
    cors({
      origin: [env.WEB_URL],
      credentials: true,
      allowHeaders: ['Content-Type', 'Authorization'],
      allowMethods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
      exposeHeaders: ['set-auth-token'],
    }),
  )

  app.get('/health', (c) => c.json({ ok: true, version: process.env.npm_package_version ?? 'dev' }))

  app.on(['GET', 'POST'], '/api/auth/*', (c) => auth.handler(c.req.raw))

  const requireUser = createMiddleware<{ Variables: Variables }>(async (c, next) => {
    const session = await auth.api.getSession({ headers: c.req.raw.headers })
    if (!session) return c.json({ error: 'unauthorized' }, 401)
    c.set('user', session.user)
    c.set('sessionId', session.session.id)
    await next()
  })

  const me = new Hono<{ Variables: Variables }>()
    .use('*', requireUser)
    .get('/', (c) => {
      const u = c.get('user')
      return c.json({
        id: u.id,
        name: u.name,
        email: u.email,
        image: u.image,
        isAnonymous: u.isAnonymous ?? false,
      })
    })
    .get('/progress', async (c) => c.json(await getProgress(db, c.get('user').id)))
    .get('/attempts', async (c) =>
      c.json({ attempts: await getRecentAttempts(db, c.get('user').id) }),
    )
    .get('/review', async (c) => c.json(await getReview(db, c.get('user').id)))
    .get('/profile', async (c) => c.json(await getProfile(db, c.get('user').id)))
    .patch(
      '/profile',
      zValidator(
        'json',
        z.object({
          displayName: z.string().trim().max(30).nullable().optional(),
          dailyGoalXp: z
            .union([z.literal(10), z.literal(20), z.literal(30), z.literal(50)])
            .optional(),
        }),
      ),
      async (c) => {
        await updateProfile(db, c.get('user').id, c.req.valid('json'))
        return c.json({ ok: true })
      },
    )
    .delete('/', async (c) => {
      await deleteAccount(db, c.get('user').id)
      return c.json({ ok: true })
    })

  const attempts = new Hono<{ Variables: Variables }>().use('*', requireUser).post(
    '/',
    zValidator(
      'json',
      z.object({
        lessonId: z.string().min(1),
        answers: z.array(z.object({ exerciseId: z.string().min(1), answer: AnswerSchema })).max(50),
        durationSec: z
          .number()
          .int()
          .nonnegative()
          .max(60 * 60)
          .optional(),
      }),
    ),
    async (c) => {
      const body = c.req.valid('json')
      try {
        const result = await submitAttempt(db, { userId: c.get('user').id, ...body })
        return c.json(result, 201)
      } catch (err) {
        if (err instanceof NotFoundError) return c.json({ error: err.message }, 404)
        if (err instanceof LessonLockedError) return c.json({ error: 'lesson_locked' }, 403)
        throw err
      }
    },
  )

  const answersSchema = z
    .array(z.object({ exerciseId: z.string().min(1), answer: AnswerSchema }))
    .max(50)

  const review = new Hono<{ Variables: Variables }>()
    .use('*', requireUser)
    .post('/', zValidator('json', z.object({ answers: answersSchema })), async (c) =>
      c.json(
        await submitReview(db, { userId: c.get('user').id, answers: c.req.valid('json').answers }),
        201,
      ),
    )

  const leaderboard = new Hono<{ Variables: Variables }>()
    .use('*', requireUser)
    .get('/', async (c) => c.json(await getLeaderboard(db, c.get('user').id)))

  // Sự kiện học tập (bắt đầu, rời một lượt) để biết bài nào bị bỏ dở và bỏ ở câu nào.
  const events = new Hono<{ Variables: Variables }>().use('*', requireUser).post(
    '/',
    zValidator(
      'json',
      z.object({
        type: z.enum(LEARNING_EVENT_TYPES),
        lessonId: z.string().min(1).max(100).optional(),
        exerciseId: z.string().min(1).max(100).optional(),
        answered: z.number().int().min(0).max(200).optional(),
      }),
    ),
    async (c) => {
      await recordLearningEvent(db, { userId: c.get('user').id, ...c.req.valid('json') })
      return c.json({ ok: true }, 201)
    },
  )

  // Lỗi JavaScript ở trình duyệt được gửi về đây thay vì nhúng thư viện giám sát vào trang web.
  // Không cần đăng nhập (lỗi có thể xảy ra trước khi có phiên), nên giới hạn số lần theo địa chỉ IP.
  const allowClientError = createWindowLimiter(20, 60_000)
  const clientErrors = new Hono().post(
    '/',
    zValidator(
      'json',
      z.object({
        message: z.string().min(1).max(500),
        stack: z.string().max(4000).optional(),
        url: z.string().max(500).optional(),
        source: z.enum(['error', 'unhandledrejection', 'boundary']).optional(),
      }),
    ),
    (c) => {
      const ip = c.req.header('fly-client-ip') ?? c.req.header('x-forwarded-for') ?? 'unknown'
      if (!allowClientError(ip)) return c.json({ error: 'too_many' }, 429)
      const report = { ...c.req.valid('json'), userAgent: c.req.header('user-agent') }
      logger.error({ clientError: report }, 'lỗi ở trình duyệt')
      const err = new Error(report.message)
      err.name = 'ClientError'
      if (report.stack) err.stack = report.stack
      captureError(err, { ...report, stack: undefined })
      return c.json({ ok: true }, 201)
    },
  )

  const routes = app
    .route('/me', me)
    .route('/attempts', attempts)
    .route('/review', review)
    .route('/leaderboard', leaderboard)
    .route('/events', events)
    .route('/client-errors', clientErrors)

  app.notFound((c) => c.json({ error: 'not_found' }, 404))
  app.onError((err, c) => {
    logger.error({ err, path: c.req.path }, 'unhandled')
    captureError(err, { path: c.req.path, method: c.req.method })
    return c.json({ error: 'internal' }, 500)
  })

  return routes
}

export type AppType = ReturnType<typeof createApp>
