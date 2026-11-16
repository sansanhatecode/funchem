'use client'

import { content } from '@funchem/content'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AppShell } from '@/components/learn/app-shell'
import { Mascot } from '@/components/mascot'
import { ArrowRightIcon, BrainIcon } from '@/components/ui/icons'
import { type LessonStatus, UnitPath } from '@/components/learn/unit-path'
import { Button, buttonClass } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ProgressBar } from '@/components/ui/progress-bar'
import { signOut } from '@/lib/auth-client'
import { useProgress } from '@/lib/use-progress'

export function LearnHome() {
  const router = useRouter()
  const { user, isGuest, progress: p, isLoading, isError, refetch } = useProgress()

  if (isLoading || !user) {
    return (
      <AppShell>
        <div className="flex flex-col items-center gap-3 py-16" aria-busy="true">
          <Mascot mood="think" size={96} />
          <p className="font-bold text-ink-soft">Đang chuẩn bị bài học…</p>
        </div>
      </AppShell>
    )
  }
  if (isError || !p) {
    return (
      <AppShell>
        <Card className="mt-6">
          <p className="font-bold">Không tải được tiến độ.</p>
          <p className="mt-1 text-sm text-ink-soft">Kiểm tra kết nối rồi thử lại.</p>
          <Button className="mt-4" onClick={() => refetch()}>
            Thử lại
          </Button>
        </Card>
      </AppShell>
    )
  }

  const statusOf = (id: string) => (p.lessons[id]?.status ?? 'locked') as LessonStatus
  const goalRatio = p.profile.dailyGoalXp ? p.stats.xpToday / p.profile.dailyGoalXp : 0
  const completedCount = Object.values(p.lessons).filter((l) => l.status === 'completed').length
  const current = content.units
    .flatMap((u) => u.lessons)
    .find((l) => statusOf(l.id) === 'available')

  return (
    <AppShell stats={{ streak: p.stats.streak, xpTotal: p.stats.xpTotal }}>
      <main>
        {isGuest ? (
          <Card className="mt-2 flex flex-col gap-3 border-sun bg-[#fff8e1] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold">Bạn đang học với tư cách khách</p>
              <p className="text-sm text-ink-soft">
                Tạo tài khoản để giữ tiến độ trên mọi thiết bị.
              </p>
            </div>
            <Link href="/login" className={buttonClass('primary', 'md', 'shrink-0')}>
              Lưu tiến độ
            </Link>
          </Card>
        ) : (
          <div className="mt-2 flex items-center justify-between text-sm text-ink-soft">
            <span>{user.email}</span>
            <button
              type="button"
              className="font-bold text-brand-deep underline-offset-4 hover:underline"
              onClick={async () => {
                await signOut()
                router.push('/')
              }}
            >
              Đăng xuất
            </button>
          </div>
        )}

        <Card className="mt-4">
          <div className="flex items-baseline justify-between">
            <h2 className="font-bold">Mục tiêu hôm nay</h2>
            <span className="text-sm font-bold text-ink-soft">
              {p.stats.xpToday} / {p.profile.dailyGoalXp} XP
            </span>
          </div>
          <ProgressBar
            className="mt-3"
            value={goalRatio}
            label="Mục tiêu XP hôm nay"
            color="var(--color-sun)"
          />
        </Card>

        {completedCount > 0 && (
          <Link
            href="/review"
            className="mt-4 flex items-center gap-4 rounded-(--radius-card) border-2 border-sun bg-[#fff8e1] p-4 transition-transform duration-100 hover:-translate-y-0.5"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-sun text-ink">
              <BrainIcon weight="fill" size={26} aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-extrabold">Ôn tập hôm nay</span>
              <span className="block text-sm text-ink-soft">
                Vài câu từ các bài đã học, ưu tiên chỗ bạn hay sai.
              </span>
            </span>
            <ArrowRightIcon weight="bold" size={20} aria-hidden="true" />
          </Link>
        )}

        {content.units.map((unit) => (
          <UnitPath
            key={unit.id}
            unit={unit}
            statusOf={statusOf}
            ratio={p.units.find((u) => u.unitId === unit.id)?.ratio ?? 0}
            currentLessonId={current?.id}
          />
        ))}
      </main>
    </AppShell>
  )
}
