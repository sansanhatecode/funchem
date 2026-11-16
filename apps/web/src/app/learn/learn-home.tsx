'use client'

import { content } from '@funchem/content'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AppShell } from '@/components/learn/app-shell'
import { Mascot } from '@/components/mascot'
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
