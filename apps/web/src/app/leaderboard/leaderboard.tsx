'use client'

import { type LeaderboardResponse, unwrap } from '@funchem/api-client'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { AppShell } from '@/components/learn/app-shell'
import { Mascot } from '@/components/mascot'
import { buttonClass } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { LightningIcon, TrophyIcon } from '@/components/ui/icons'
import { api } from '@/lib/api'
import { cn } from '@/lib/cn'
import { useProgress } from '@/lib/use-progress'

const PODIUM = ['#FFC233', '#B9C4D0', '#DE8A4A']

export function Leaderboard() {
  const { user, isGuest, progress: p } = useProgress()
  const board = useQuery<LeaderboardResponse>({
    queryKey: ['leaderboard', user?.id],
    queryFn: async () => unwrap(await api.leaderboard.$get()),
    enabled: Boolean(user),
  })

  return (
    <AppShell stats={p ? { streak: p.stats.streak, xpTotal: p.stats.xpTotal } : undefined}>
      <main>
        <h1 className="mt-2 flex items-center gap-2 text-2xl font-extrabold">
          <TrophyIcon weight="fill" size={28} className="text-sun-deep" aria-hidden="true" />
          Bảng xếp hạng tuần
        </h1>
        <p className="mt-1 text-ink-soft">
          Tổng XP từ thứ Hai. Tuần mới, mọi người cùng bắt đầu lại từ 0.
        </p>

        {isGuest && (
          <Card className="mt-4 flex flex-col gap-3 border-sun bg-[#fff8e1] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold">Tạo tài khoản để có tên trên bảng</p>
              <p className="text-sm text-ink-soft">
                Tuần này bạn đã có {board.data?.myXp ?? 0} XP. Khách chưa được xếp hạng.
              </p>
            </div>
            <Link href="/login" className={buttonClass('primary', 'md', 'shrink-0')}>
              Lưu tiến độ
            </Link>
          </Card>
        )}

        {board.isPending && (
          <p className="py-10 text-center text-ink-soft" aria-busy="true">
            Đang tải…
          </p>
        )}
        {board.isError && (
          <p className="py-10 text-center text-ink-soft">Không tải được bảng xếp hạng.</p>
        )}

        {board.data && board.data.top.length === 0 && (
          <Card className="mt-6 flex flex-col items-center gap-3 text-center">
            <Mascot mood="wave" size={96} />
            <p className="font-extrabold">Tuần này chưa ai ghi điểm</p>
            <p className="text-sm text-ink-soft">Học một bài để đứng đầu bảng.</p>
            <Link href="/learn" className={buttonClass('primary', 'md')}>
              Học ngay
            </Link>
          </Card>
        )}

        {board.data && board.data.top.length > 0 && (
          <ol className="mt-6 flex flex-col gap-2" aria-label="Thứ hạng tuần này">
            {board.data.top.map((row) => (
              <li
                key={row.rank}
                className={cn(
                  'flex items-center gap-3 rounded-2xl border-2 bg-paper px-4 py-3',
                  row.isMe ? 'border-brand bg-brand-soft' : 'border-line',
                )}
                aria-current={row.isMe ? 'true' : undefined}
              >
                <span
                  className="grid size-9 shrink-0 place-items-center rounded-full text-sm font-extrabold"
                  style={
                    row.rank <= 3
                      ? { backgroundColor: PODIUM[row.rank - 1], color: '#1f2a37' }
                      : { backgroundColor: 'var(--color-line)' }
                  }
                >
                  {row.rank}
                </span>
                <span className="min-w-0 flex-1 truncate font-extrabold">
                  {row.name}
                  {row.isMe && <span className="ml-2 font-bold text-brand-deep">(bạn)</span>}
                </span>
                <span className="flex items-center gap-1 font-extrabold">
                  <LightningIcon
                    weight="fill"
                    size={18}
                    className="text-sun-deep"
                    aria-hidden="true"
                  />
                  {row.xp} XP
                </span>
              </li>
            ))}
          </ol>
        )}

        {board.data?.me && board.data.me.rank > board.data.top.length && (
          <p className="mt-4 rounded-2xl border-2 border-brand bg-brand-soft px-4 py-3 text-center font-extrabold">
            Bạn đang ở hạng {board.data.me.rank} với {board.data.me.xp} XP
          </p>
        )}
        {!isGuest && (
          <p className="mt-6 text-center text-sm text-ink-soft">
            Tên hiện trên bảng là biệt danh của bạn. Đặt biệt danh ở trang{' '}
            <Link
              href="/profile"
              className="font-bold text-brand-deep underline-offset-4 hover:underline"
            >
              Hồ sơ
            </Link>
            .
          </p>
        )}
      </main>
    </AppShell>
  )
}
