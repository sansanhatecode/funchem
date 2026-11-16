import { appendFile } from 'node:fs/promises'
import type { Env } from '../env.js'
import { logger } from './logger.js'

export interface Mailer {
  sendOtp(to: string, code: string, purpose: string): Promise<void>
}

/** Gửi OTP qua Resend; nếu chưa cấu hình thì in ra log để dev. */
export function createMailer(env: Env): Mailer {
  if (!env.RESEND_API_KEY) {
    if (env.NODE_ENV === 'production') {
      throw new Error('Production cần RESEND_API_KEY để gửi mã OTP')
    }
    return {
      async sendOtp(to, code, purpose) {
        logger.warn({ to, code, purpose }, 'RESEND_API_KEY chưa đặt, OTP in ra log')
        // Test trình duyệt đọc mã từ file này. Không bao giờ bật ở production (đã chặn ở trên).
        if (env.OTP_DEBUG_FILE) {
          await appendFile(
            env.OTP_DEBUG_FILE,
            `${JSON.stringify({ to, code, purpose, at: Date.now() })}\n`,
          )
        }
      },
    }
  }
  const apiKey = env.RESEND_API_KEY
  return {
    async sendOtp(to, code, purpose) {
      const subject =
        purpose === 'sign-in' ? `Mã đăng nhập FunChem: ${code}` : `Mã xác nhận FunChem: ${code}`
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: env.EMAIL_FROM,
          to,
          subject,
          text: `Mã của bạn là ${code}. Mã có hiệu lực 5 phút. Nếu bạn không yêu cầu, hãy bỏ qua email này.`,
        }),
      })
      if (!res.ok) {
        logger.error({ status: res.status, body: await res.text() }, 'Gửi OTP thất bại')
        throw new Error('Không gửi được email')
      }
    },
  }
}
