import type { Env } from '../env.js'
import { logger } from './logger.js'

type Capture = (err: unknown, context?: Record<string, unknown>) => void

let capture: Capture = () => {}

/**
 * Bật giám sát lỗi nếu có SENTRY_DSN. Không có thì hàm này không làm gì:
 * thư viện Sentry không được nạp và lỗi chỉ đi vào log.
 */
export async function initMonitoring(env: Pick<Env, 'SENTRY_DSN' | 'NODE_ENV'>): Promise<void> {
  if (!env.SENTRY_DSN) return
  const Sentry = await import('@sentry/node')
  Sentry.init({
    dsn: env.SENTRY_DSN,
    environment: env.NODE_ENV,
    // chỉ báo lỗi, không thu thập trace hiệu năng
    tracesSampleRate: 0,
  })
  capture = (err, context) => {
    Sentry.withScope((scope) => {
      if (context) scope.setContext('funchem', context)
      if (err instanceof Error) Sentry.captureException(err)
      else Sentry.captureMessage(String(err), 'error')
    })
  }
  logger.info('Giám sát lỗi Sentry đã bật')
}

/** Báo một lỗi lên dịch vụ giám sát (nếu đã bật). Không bao giờ ném lỗi. */
export function captureError(err: unknown, context?: Record<string, unknown>): void {
  try {
    capture(err, context)
  } catch (e) {
    logger.warn({ err: e }, 'Không gửi được lỗi lên dịch vụ giám sát')
  }
}
