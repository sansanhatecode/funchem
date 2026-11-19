import { defineConfig } from 'vitest/config'

// Test đơn vị cho logic thuần của web. Test trình duyệt (Playwright) nằm ở e2e/ và chạy bằng `pnpm e2e`.
export default defineConfig({ test: { include: ['src/**/*.test.ts'] } })
