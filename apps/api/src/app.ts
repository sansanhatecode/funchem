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
import {
  getProgress,
  getRecentAttempts,
  NotFoundError,
  submitAttempt,
} from './services/progress.js'

export interface AppDeps {
  env: Env
  db: Db
  auth: Auth
}

type SessionUser = Auth['$Infer']['Session']['user']
type Variables = { user: SessionUser; sessionId: string }

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
        throw err
      }
    },
  )

  const routes = app.route('/me', me).route('/attempts', attempts)

  app.notFound((c) => c.json({ error: 'not_found' }, 404))
  app.onError((err, c) => {
    logger.error({ err, path: c.req.path }, 'unhandled')
    return c.json({ error: 'internal' }, 500)
  })

  return routes
}

export type AppType = ReturnType<typeof createApp>
