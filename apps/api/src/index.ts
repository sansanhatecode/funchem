import { serve } from '@hono/node-server'
import { createDb } from '@funchem/db'
import { createApp } from './app.js'
import { createAuth } from './auth.js'
import { loadEnv } from './env.js'
import { createMailer } from './lib/email.js'
import { logger } from './lib/logger.js'
import { initMonitoring } from './lib/monitoring.js'

const env = loadEnv()
await initMonitoring(env)
const db = createDb(env.DATABASE_URL)
const auth = createAuth(env, db, createMailer(env))
const app = createApp({ env, db, auth })

serve({ fetch: app.fetch, port: env.PORT }, (info) => {
  logger.info({ port: info.port, env: env.NODE_ENV }, 'FunChem API đang chạy')
})
