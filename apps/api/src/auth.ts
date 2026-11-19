import { type Db, schema } from '@funchem/db'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { anonymous, bearer, emailOTP } from 'better-auth/plugins'
import type { Env } from './env.js'
import type { Mailer } from './lib/email.js'
import { logger } from './lib/logger.js'
import { mergeProgress } from './services/progress.js'

export function createAuth(env: Env, db: Db, mailer: Mailer) {
  const social: NonNullable<Parameters<typeof betterAuth>[0]['socialProviders']> = {}
  if (env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET) {
    social.google = { clientId: env.GOOGLE_CLIENT_ID, clientSecret: env.GOOGLE_CLIENT_SECRET }
  }
  if (env.APPLE_CLIENT_ID && env.APPLE_CLIENT_SECRET) {
    social.apple = { clientId: env.APPLE_CLIENT_ID, clientSecret: env.APPLE_CLIENT_SECRET }
  }

  const trustedOrigins = [env.WEB_URL, ...(env.MOBILE_SCHEME ? [`${env.MOBILE_SCHEME}//`] : [])]

  return betterAuth({
    baseURL: env.API_URL,
    secret: env.BETTER_AUTH_SECRET,
    basePath: '/api/auth',
    trustedOrigins,
    database: drizzleAdapter(db, {
      provider: 'pg',
      schema: {
        user: schema.user,
        session: schema.session,
        account: schema.account,
        verification: schema.verification,
        rateLimit: schema.rateLimit,
      },
    }),
    // Giới hạn tần suất (ví dụ gửi OTP: 3 lần mỗi phút cho một địa chỉ IP) mặc định chỉ bật ở production.
    // Bộ đếm nằm trong Postgres để mọi máy chạy API dùng chung một con số.
    rateLimit: { storage: 'database' },
    emailAndPassword: { enabled: false },
    socialProviders: social,
    session: {
      expiresIn: 60 * 60 * 24 * 30,
      updateAge: 60 * 60 * 24,
      // Không bật cookieCache: bộ đệm phiên trong cookie vẫn trả về tài khoản khách đã bị xoá sau khi
      // khách đăng ký, và vẫn coi phiên là hợp lệ sau khi người dùng xoá tài khoản. Mỗi request tra database một lần.
    },
    advanced: {
      // Production: web (funchem.vn) và API (api.funchem.vn) cùng domain gốc,
      // cookie đặt cho domain gốc để cả hai dùng chung, vẫn giữ SameSite=Lax.
      ...(env.COOKIE_DOMAIN
        ? { crossSubDomainCookies: { enabled: true, domain: env.COOKIE_DOMAIN } }
        : {}),
      useSecureCookies: env.NODE_ENV === 'production',
    },
    plugins: [
      anonymous({
        emailDomainName: 'anon.funchem.local',
        onLinkAccount: async ({ anonymousUser, newUser }) => {
          // Người dùng ẩn danh đăng ký: chuyển toàn bộ tiến độ sang tài khoản thật
          try {
            await mergeProgress(db, anonymousUser.user.id, newUser.user.id)
          } catch (err) {
            logger.error(
              { err, from: anonymousUser.user.id, to: newUser.user.id },
              'mergeProgress thất bại',
            )
            throw err
          }
        },
      }),
      emailOTP({
        otpLength: 6,
        expiresIn: 300,
        async sendVerificationOTP({ email, otp, type }) {
          await mailer.sendOtp(email, otp, type)
        },
      }),
      bearer(),
    ],
  })
}

export type Auth = ReturnType<typeof createAuth>
