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
  it('sự kiện học tập cần đăng nhập', async () => {
    const res = await app.request('/events', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ type: 'lesson_start', lessonId: 'u1-l1-atoms' }),
    })
    expect(res.status).toBe(401)
  })
  it('nhận báo lỗi từ trình duyệt không cần đăng nhập, từ chối dữ liệu sai và chặn khi gửi dồn dập', async () => {
    const send = (body: unknown, ip: string) =>
      app.request('/client-errors', {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-forwarded-for': ip },
        body: JSON.stringify(body),
      })
    expect(
      (await send({ message: 'x is not a function', source: 'error' }, '198.51.100.1')).status,
    ).toBe(201)
    expect((await send({ message: '' }, '198.51.100.1')).status).toBe(400)
    expect((await send({ message: 'a'.repeat(501) }, '198.51.100.1')).status).toBe(400)
    const statuses: number[] = []
    for (let i = 0; i < 25; i++)
      statuses.push((await send({ message: 'lặp' }, '198.51.100.2')).status)
    expect(statuses.filter((s) => s === 201)).toHaveLength(20)
    expect(statuses.at(-1)).toBe(429)
  })
  it('404 JSON', async () => {
    const res = await app.request('/khong-co')
    expect(res.status).toBe(404)
  })
})
