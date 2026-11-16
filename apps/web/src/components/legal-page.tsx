import Link from 'next/link'
import type { ReactNode } from 'react'
import { Mascot } from '@/components/mascot'

/** Khung chung cho trang điều khoản và chính sách riêng tư. */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <div className="mx-auto max-w-2xl px-5 pb-16">
      <header className="flex h-16 items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-brand-deep"
        >
          <Mascot size={30} />
          FunChem
        </Link>
      </header>
      <main>
        <h1 className="mt-4 text-3xl font-extrabold">{title}</h1>
        <p className="mt-1 text-sm text-ink-soft">Cập nhật lần cuối: {updated}</p>
        <p className="mt-4 rounded-2xl border border-sun bg-[#fff8e1] p-3 text-sm">
          Đây là bản nháp mô tả đúng cách FunChem đang hoạt động. Văn bản cần được người có chuyên
          môn pháp lý rà soát trước khi mở cho công chúng.
        </p>
        <div className="mt-6 flex flex-col gap-6 [&_h2]:text-xl [&_h2]:font-extrabold [&_li]:ml-5 [&_li]:list-disc [&_p]:mt-2 [&_p]:text-ink-soft [&_ul]:mt-2 [&_ul]:text-ink-soft">
          {children}
        </div>
      </main>
    </div>
  )
}
