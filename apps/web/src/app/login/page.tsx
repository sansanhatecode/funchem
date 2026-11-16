import type { Metadata } from 'next'
import Link from 'next/link'
import { LoginForm } from './login-form'

export const metadata: Metadata = { title: 'Đăng nhập' }

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col px-5 py-8">
      <Link href="/" className="text-xl font-extrabold tracking-tight text-brand-deep">
        FunChem
      </Link>
      <div className="flex flex-1 flex-col justify-center py-8">
        <LoginForm />
      </div>
    </main>
  )
}
