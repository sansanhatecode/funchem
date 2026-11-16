'use client'

import { useRouter } from 'next/navigation'
import { type FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { authClient } from '@/lib/auth-client'
import { AUTH_APPLE, AUTH_GOOGLE } from '@/lib/config'

type Step = { name: 'email' } | { name: 'otp'; email: string }

const inputClass =
  'w-full min-h-12 rounded-xl border-2 border-line bg-paper px-4 text-base outline-none ' +
  'focus-visible:border-brand aria-invalid:border-bad'

export function LoginForm() {
  const router = useRouter()
  const [step, setStep] = useState<Step>({ name: 'email' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function sendOtp(email: string) {
    setLoading(true)
    setError(null)
    const { error } = await authClient.emailOtp.sendVerificationOtp({ email, type: 'sign-in' })
    setLoading(false)
    if (error) {
      setError('Không gửi được mã. Kiểm tra lại email và thử lại.')
      return false
    }
    return true
  }

  async function onEmailSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const email = String(new FormData(e.currentTarget).get('email') ?? '').trim()
    if (await sendOtp(email)) setStep({ name: 'otp', email })
  }

  async function onOtpSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (step.name !== 'otp') return
    const otp = String(new FormData(e.currentTarget).get('otp') ?? '').trim()
    setLoading(true)
    setError(null)
    const { error } = await authClient.signIn.emailOtp({ email: step.email, otp })
    setLoading(false)
    if (error) {
      setError('Mã không đúng hoặc đã hết hạn.')
      return
    }
    router.push('/learn')
  }

  async function social(provider: 'google' | 'apple') {
    setError(null)
    const { error } = await authClient.signIn.social({
      provider,
      callbackURL: `${window.location.origin}/learn`,
    })
    if (error) setError('Không đăng nhập được. Thử lại sau.')
  }

  return (
    <Card className="p-6">
      {step.name === 'email' ? (
        <>
          <h1 className="text-2xl font-extrabold">Đăng nhập hoặc tạo tài khoản</h1>
          <p className="mt-1 text-sm text-ink-soft">
            Nhập email, chúng tôi gửi cho bạn một mã 6 số. Không cần mật khẩu.
          </p>
          <form onSubmit={onEmailSubmit} className="mt-5 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-bold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                required
                autoFocus
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? 'form-error' : undefined}
                className={inputClass}
                placeholder="ban@example.com"
              />
            </div>
            <Button type="submit" size="lg" loading={loading}>
              Gửi mã cho tôi
            </Button>
          </form>

          {(AUTH_GOOGLE || AUTH_APPLE) && (
            <div className="mt-5 flex flex-col gap-3 border-t border-line pt-5">
              {AUTH_GOOGLE && (
                <Button variant="secondary" size="lg" onClick={() => social('google')}>
                  Tiếp tục với Google
                </Button>
              )}
              {AUTH_APPLE && (
                <Button variant="secondary" size="lg" onClick={() => social('apple')}>
                  Tiếp tục với Apple
                </Button>
              )}
            </div>
          )}
        </>
      ) : (
        <>
          <h1 className="text-2xl font-extrabold">Nhập mã xác nhận</h1>
          <form onSubmit={onOtpSubmit} className="mt-5 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="otp" className="text-sm font-bold">
                Mã 6 số
              </label>
              {/* Gợi ý đặt phía trên ô nhập để bàn phím và khung autofill không che */}
              <p id="otp-hint" className="text-sm text-ink-soft">
                Đã gửi tới <strong className="text-ink">{step.email}</strong>. Mã có hiệu lực 5
                phút.
              </p>
              <input
                id="otp"
                name="otp"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                pattern="\d{6}"
                maxLength={6}
                required
                autoFocus
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? 'otp-hint form-error' : 'otp-hint'}
                className={`${inputClass} text-center font-mono text-2xl tracking-[0.35em]`}
              />
            </div>
            <Button type="submit" size="lg" loading={loading}>
              Xác nhận
            </Button>
          </form>
          <div className="mt-4 flex justify-between text-sm">
            <button
              type="button"
              className="font-bold text-brand-deep underline-offset-4 hover:underline"
              onClick={() => {
                setError(null)
                setStep({ name: 'email' })
              }}
            >
              Đổi email
            </button>
            <button
              type="button"
              className="font-bold text-brand-deep underline-offset-4 hover:underline disabled:opacity-50"
              disabled={loading}
              onClick={() => sendOtp(step.email)}
            >
              Gửi lại mã
            </button>
          </div>
        </>
      )}

      <p id="form-error" role="alert" className="mt-4 min-h-5 text-sm font-medium text-bad">
        {error}
      </p>
    </Card>
  )
}
