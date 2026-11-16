import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { defineConfig } from '@playwright/test'

/**
 * Test trình duyệt chạy trên cổng riêng (web 3100, API 4100) với database riêng,
 * nên không đụng tới bản `pnpm dev` đang chạy ở 3000/4000.
 * Cần E2E_DATABASE_URL trỏ tới một database đã chạy migration.
 */
const WEB = 'http://localhost:3100'
const API = 'http://localhost:4100'
export const OTP_FILE = process.env.OTP_DEBUG_FILE ?? join(tmpdir(), 'funchem-e2e-otp.jsonl')

const databaseUrl = process.env.E2E_DATABASE_URL
if (!databaseUrl)
  throw new Error('Đặt E2E_DATABASE_URL, ví dụ postgres://localhost:5432/funchem_e2e')

export default defineConfig({
  testDir: './e2e',
  timeout: 90_000,
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL: WEB,
    // CI dùng Chromium của Playwright; ở máy dev dùng Chrome có sẵn
    ...(process.env.CI ? {} : { channel: 'chrome' }),
    viewport: { width: 390, height: 844 },
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  webServer: [
    {
      command: 'node dist/index.js',
      cwd: '../api',
      url: `${API}/health`,
      reuseExistingServer: !process.env.CI,
      env: {
        NODE_ENV: 'test',
        PORT: '4100',
        API_URL: API,
        WEB_URL: WEB,
        DATABASE_URL: databaseUrl,
        BETTER_AUTH_SECRET: 'e2e-secret-e2e-secret-e2e-secret-0000',
        OTP_DEBUG_FILE: OTP_FILE,
        LOG_LEVEL: 'warn',
      },
    },
    {
      command: 'pnpm exec next start --port 3100',
      url: WEB,
      reuseExistingServer: !process.env.CI,
      env: { NEXT_DIST_DIR: '.next-e2e' },
    },
  ],
})
