import { defineConfig } from 'vitest/config'
export default defineConfig({
  test: {
    // không in log của API ra màn hình khi chạy test
    env: { LOG_LEVEL: 'silent' },
    include: ['src/**/*.test.ts'],
  },
})
