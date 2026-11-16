'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { AtomIcon, FireIcon, FlaskIcon, LightningIcon } from '@/components/ui/icons'
import { StatPill } from '@/components/ui/stat-pill'
import { cn } from '@/lib/cn'

const NAV = [
  { href: '/learn', label: 'Học', Icon: FlaskIcon },
  { href: '/molecules', label: 'Phân tử', Icon: AtomIcon },
]

/** Khung chung của các trang sau đăng nhập: đầu trang có streak/XP, điều hướng dưới đáy trên điện thoại. */
export function AppShell({
  children,
  stats,
}: {
  children: ReactNode
  stats?: { streak: number; xpTotal: number } | undefined
}) {
  const pathname = usePathname()
  return (
    <div className="mx-auto min-h-dvh max-w-2xl overflow-x-clip px-5 pb-28">
      <header className="sticky top-0 z-10 -mx-5 flex items-center justify-between gap-3 bg-canvas/90 px-5 py-4 backdrop-blur">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-brand-deep">
          FunChem
        </Link>
        <nav aria-label="Chính" className="hidden gap-1 sm:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={pathname === n.href ? 'page' : undefined}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-bold',
                pathname === n.href
                  ? 'bg-brand-soft text-brand-deep'
                  : 'text-ink-soft hover:bg-line',
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex min-h-9 items-center gap-2">
          {stats && (
            <>
              <StatPill
                icon={<FireIcon weight="fill" size={18} className="text-flame" />}
                value={stats.streak}
                label="ngày liên tiếp"
              />
              <StatPill
                icon={<LightningIcon weight="fill" size={18} className="text-sun-deep" />}
                value={stats.xpTotal}
                label="điểm kinh nghiệm"
              />
            </>
          )}
        </div>
      </header>

      {children}

      <nav
        aria-label="Chính"
        className="fixed inset-x-0 bottom-0 z-10 border-t border-line bg-paper pb-[env(safe-area-inset-bottom)] sm:hidden"
      >
        <ul className="mx-auto flex max-w-2xl">
          {NAV.map((n) => (
            <li key={n.href} className="flex-1">
              <Link
                href={n.href}
                aria-current={pathname === n.href ? 'page' : undefined}
                className={cn(
                  'flex flex-col items-center gap-0.5 py-2.5 text-xs font-bold',
                  pathname === n.href ? 'text-brand-deep' : 'text-ink-soft',
                )}
              >
                <n.Icon
                  weight={pathname === n.href ? 'fill' : 'regular'}
                  size={24}
                  aria-hidden="true"
                />
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
