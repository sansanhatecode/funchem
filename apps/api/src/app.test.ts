import { describe, expect, it } from 'vitest'
import { createApp } from './app.js'

const env = {
  NODE_ENV: 'test' as const,
  PORT: 0,
  DATABASE_URL: 'postgres://x:y@localhost/z',
  API_URL: 'http://localhost:4000',
  WEB_URL: 'http://localhost:3000',
  BETTER_AUTH_SECRET: 'x'.repeat(32),
  EMAIL_FROM: 't',
  LOG_LEVEL: 'silent',
}

// auth giả: không có session → mọi route bảo vệ trả 401
const fakeAuth = {
  handler: async () => new Response('auth', { status: 200 }),
  api: { getSession: async () => null },
} as unknown as Parameters<typeof createApp>[0]['auth']

const app = createApp({ env, db: {} as never, auth: fakeAuth })

describe('API', () => {
  it('/health', async () => {
    const res = await app.request('/health')
    expect(res.status).toBe(200)
    expect(await res.json()).toMatchObject({ ok: true })
  })
  it('route bảo vệ trả 401 khi chưa đăng nhập', async () => {
    expect((await app.request('/me/progress')).status).toBe(401)
    const res = await app.request('/attempts', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ lessonId: 'x', answers: [] }),
    })
    expect(res.status).toBe(401)
  })
  it('chuyển /api/auth/* cho Better Auth', async () => {
    const res = await app.request('/api/auth/get-session')
    expect(await res.text()).toBe('auth')
  })
  it('404 JSON', async () => {
    const res = await app.request('/khong-co')
    expect(res.status).toBe(404)
  })
})
