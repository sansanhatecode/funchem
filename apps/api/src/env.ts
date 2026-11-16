import { z } from 'zod'

const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(4000),
  DATABASE_URL: z.string().url(),
  /** URL công khai của API, ví dụ https://api.funchem.vn */
  API_URL: z.string().url().default('http://localhost:4000'),
  /** URL web, dùng cho CORS và redirect sau đăng nhập */
  WEB_URL: z.string().url().default('http://localhost:3000'),
  /** scheme của app mobile, ví dụ funchem:// (giai đoạn 3) */
  MOBILE_SCHEME: z.string().optional(),
  BETTER_AUTH_SECRET: z.string().min(32),
  /** domain gốc dùng chung cookie giữa web và API ở production, ví dụ "funchem.vn" */
  COOKIE_DOMAIN: z.string().optional(),
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),
  APPLE_CLIENT_ID: z.string().optional(),
  APPLE_CLIENT_SECRET: z.string().optional(),
  /** Resend API key để gửi mã OTP. Không có thì in mã ra log (chỉ dev). */
  RESEND_API_KEY: z.string().optional(),
  /** chỉ dev/test: ghi mã OTP ra file để test trình duyệt đọc */
  OTP_DEBUG_FILE: z.string().optional(),
  EMAIL_FROM: z.string().default('FunChem <no-reply@funchem.vn>'),
  LOG_LEVEL: z.string().default('info'),
})

export type Env = z.infer<typeof EnvSchema>

export function loadEnv(source: NodeJS.ProcessEnv = process.env): Env {
  const r = EnvSchema.safeParse(source)
  if (!r.success) {
    throw new Error(
      `Thiếu hoặc sai biến môi trường:\n${r.error.issues.map((i) => `- ${i.path.join('.')}: ${i.message}`).join('\n')}`,
    )
  }
  return r.data
}
