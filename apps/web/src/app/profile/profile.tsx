'use client'

import { type ProfileResponse, unwrap } from '@funchem/api-client'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { type FormEvent, useRef, useState } from 'react'
import { AppShell } from '@/components/learn/app-shell'
import { Mascot } from '@/components/mascot'
import { BadgeMedal } from '@/components/ui/badge-medal'
import { Button, buttonClass } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  FireIcon,
  LightningIcon,
  SignOutIcon,
  SpeakerHighIcon,
  SpeakerSlashIcon,
  TrashIcon,
} from '@/components/ui/icons'
import { api } from '@/lib/api'
import { signOut } from '@/lib/auth-client'
import { cn } from '@/lib/cn'
import { setMuted, useMuted } from '@/lib/sound'
import { progressKey, useProgress } from '@/lib/use-progress'

const GOALS = [10, 20, 30, 50] as const

export function Profile() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const { user, isGuest, progress: p } = useProgress()
  const muted = useMuted()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [saved, setSaved] = useState(false)

  const profile = useQuery<ProfileResponse>({
    queryKey: ['profile', user?.id],
    queryFn: async () => unwrap(await api.me.profile.$get()),
    enabled: Boolean(user),
  })

  const update = useMutation({
    mutationFn: async (patch: {
      displayName?: string | null
      dailyGoalXp?: (typeof GOALS)[number]
    }) => unwrap(await api.me.profile.$patch({ json: patch })),
    onSuccess: () => {
      setSaved(true)
      void queryClient.invalidateQueries({ queryKey: ['profile', user?.id] })
      void queryClient.invalidateQueries({ queryKey: progressKey(user?.id) })
      void queryClient.invalidateQueries({ queryKey: ['leaderboard'] })
    },
  })

  const remove = useMutation({
    mutationFn: async () => unwrap(await api.me.$delete()),
    onSuccess: async () => {
      await signOut().catch(() => undefined)
      queryClient.clear()
      router.push('/')
    },
  })

  function onNameSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const name = String(new FormData(e.currentTarget).get('displayName') ?? '').trim()
    update.mutate({ displayName: name || null })
  }

  const d = profile.data

  return (
    <AppShell stats={p ? { streak: p.stats.streak, xpTotal: p.stats.xpTotal } : undefined}>
      <main className="flex flex-col gap-5">
        <div className="mt-2 flex items-center gap-4">
          <Mascot mood="wave" size={72} />
          <div className="min-w-0">
            <h1 className="truncate text-2xl font-extrabold">
              {d?.displayName ?? (isGuest ? 'Khách' : 'Bạn học')}
            </h1>
            <p className="truncate text-sm text-ink-soft">
              {isGuest ? 'Đang học với tư cách khách' : user?.email}
            </p>
          </div>
        </div>

        {isGuest && (
          <Card className="flex flex-col gap-3 border-sun bg-[#fff8e1] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold">Tạo tài khoản để giữ tiến độ</p>
              <p className="text-sm text-ink-soft">
                Huy hiệu và chuỗi ngày sẽ theo bạn trên mọi thiết bị.
              </p>
            </div>
            <Link href="/login" className={buttonClass('primary', 'md', 'shrink-0')}>
              Lưu tiến độ
            </Link>
          </Card>
        )}

        {profile.isPending && (
          <p className="py-10 text-center text-ink-soft" aria-busy="true">
            Đang tải hồ sơ…
          </p>
        )}
        {profile.isError && (
          <p className="py-10 text-center text-ink-soft">Không tải được hồ sơ.</p>
        )}

        {d && (
          <>
            <dl className="grid grid-cols-3 gap-3">
              <StatBox
                label="Tổng XP"
                value={d.stats.xpTotal}
                icon={<LightningIcon weight="fill" size={20} className="text-sun-deep" />}
              />
              <StatBox
                label="Chuỗi ngày"
                value={d.stats.streak}
                icon={<FireIcon weight="fill" size={20} className="text-flame" />}
              />
              <StatBox
                label="Kỷ lục"
                value={d.stats.streakLongest}
                icon={<FireIcon weight="fill" size={20} className="text-ink-soft" />}
              />
            </dl>

            <Card>
              <h2 className="font-extrabold">5 tuần gần đây</h2>
              <ActivityGrid activity={d.activity} today={d.today} goal={d.dailyGoalXp} />
            </Card>

            <Card>
              <h2 className="font-extrabold">
                Huy hiệu{' '}
                <span className="font-bold text-ink-soft">
                  {d.badges.filter((b) => b.earnedAt).length}/{d.badges.length}
                </span>
              </h2>
              <ul className="mt-4 grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-4">
                {d.badges.map((b) => (
                  <li
                    key={b.id}
                    className="flex flex-col items-center gap-2 text-center"
                    title={b.description}
                  >
                    <BadgeMedal badge={b} earned={Boolean(b.earnedAt)} size={60} />
                    <span
                      className={cn(
                        'text-xs leading-tight font-bold',
                        !b.earnedAt && 'text-ink-soft',
                      )}
                    >
                      {b.title}
                      <span className="sr-only">
                        {b.earnedAt ? ', đã đạt' : ', chưa đạt'}. {b.description}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h2 className="font-extrabold">Cài đặt</h2>

              <form onSubmit={onNameSubmit} className="mt-4 flex flex-col gap-1.5">
                <label htmlFor="displayName" className="text-sm font-bold">
                  Biệt danh
                </label>
                <p id="name-hint" className="text-sm text-ink-soft">
                  Tên này hiện trên bảng xếp hạng. Tối đa 30 ký tự, đừng dùng tên thật nếu bạn không
                  muốn.
                </p>
                <div className="flex gap-2">
                  <input
                    id="displayName"
                    name="displayName"
                    type="text"
                    maxLength={30}
                    defaultValue={d.displayName ?? ''}
                    autoComplete="nickname"
                    aria-describedby="name-hint"
                    onChange={() => setSaved(false)}
                    className="min-h-12 w-full rounded-xl border-2 border-line bg-paper px-4 text-base outline-none focus-visible:border-brand"
                  />
                  <Button type="submit" loading={update.isPending}>
                    Lưu
                  </Button>
                </div>
                <p role="status" className="min-h-5 text-sm font-bold text-good-ink">
                  {saved && !update.isPending ? 'Đã lưu.' : ''}
                </p>
              </form>

              <fieldset className="mt-2">
                <legend className="text-sm font-bold">Mục tiêu mỗi ngày</legend>
                <div
                  className="mt-2 grid grid-cols-4 gap-2"
                  role="radiogroup"
                  aria-label="Mục tiêu XP mỗi ngày"
                >
                  {GOALS.map((g) => (
                    <button
                      key={g}
                      type="button"
                      role="radio"
                      aria-checked={d.dailyGoalXp === g}
                      onClick={() => update.mutate({ dailyGoalXp: g })}
                      className={cn(
                        'min-h-12 rounded-xl border-2 font-extrabold transition-transform duration-100 active:translate-y-[2px]',
                        d.dailyGoalXp === g
                          ? 'border-brand bg-brand-soft text-brand-deep'
                          : 'border-line bg-paper',
                      )}
                    >
                      {g} XP
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                <span className="font-bold">Âm thanh khi trả lời</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={!muted}
                  onClick={() => setMuted(!muted)}
                  className={cn(
                    'flex min-h-11 items-center gap-2 rounded-full border-2 px-4 font-extrabold',
                    muted
                      ? 'border-line bg-paper text-ink-soft'
                      : 'border-brand bg-brand-soft text-brand-deep',
                  )}
                >
                  {muted ? (
                    <SpeakerSlashIcon weight="fill" size={18} />
                  ) : (
                    <SpeakerHighIcon weight="fill" size={18} />
                  )}
                  {muted ? 'Đang tắt' : 'Đang bật'}
                </button>
              </div>
            </Card>

            <div className="flex flex-col gap-3">
              {!isGuest && (
                <Button
                  variant="secondary"
                  onClick={async () => {
                    await signOut()
                    queryClient.clear()
                    router.push('/')
                  }}
                >
                  <SignOutIcon weight="bold" size={18} />
                  Đăng xuất
                </Button>
              )}
              <button
                type="button"
                onClick={() => dialogRef.current?.showModal()}
                className="flex min-h-11 items-center justify-center gap-2 rounded-2xl text-sm font-bold text-bad-ink hover:bg-bad-soft"
              >
                <TrashIcon weight="bold" size={16} />
                Xoá tài khoản và toàn bộ dữ liệu
              </button>
              <p className="text-center text-sm text-ink-soft">
                <Link href="/terms" className="underline-offset-4 hover:underline">
                  Điều khoản sử dụng
                </Link>
                {' · '}
                <Link href="/privacy" className="underline-offset-4 hover:underline">
                  Chính sách riêng tư
                </Link>
              </p>
            </div>
          </>
        )}
      </main>

      <dialog
        ref={dialogRef}
        aria-labelledby="delete-title"
        className="m-auto w-[min(92vw,26rem)] rounded-(--radius-card) border border-line bg-paper p-6 text-ink shadow-(--shadow-card) backdrop:bg-ink/40"
      >
        <h2 id="delete-title" className="text-xl font-extrabold">
          Xoá tài khoản?
        </h2>
        <p className="mt-2 text-sm text-ink-soft">
          Toàn bộ tiến độ, XP, chuỗi ngày, huy hiệu và bộ sưu tập sẽ bị xoá vĩnh viễn. Không thể
          khôi phục.
        </p>
        {remove.isError && (
          <p className="mt-2 text-sm font-bold text-bad-ink">Không xoá được. Thử lại sau.</p>
        )}
        <div className="mt-5 flex flex-col gap-2">
          <button
            type="button"
            disabled={remove.isPending}
            onClick={() => remove.mutate()}
            className="min-h-12 rounded-2xl bg-bad font-extrabold text-white shadow-[0_4px_0_#b93a3e] active:translate-y-[4px] active:shadow-none disabled:opacity-50"
          >
            {remove.isPending ? 'Đang xoá…' : 'Xoá vĩnh viễn'}
          </button>
          <Button variant="secondary" onClick={() => dialogRef.current?.close()}>
            Giữ lại
          </Button>
        </div>
      </dialog>
    </AppShell>
  )
}

function StatBox({ label, value, icon }: { label: string; value: number; icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl border-2 border-line bg-paper p-3 text-center">
      <dt className="text-xs font-bold tracking-wide text-ink-soft uppercase">{label}</dt>
      <dd className="mt-1 flex items-center justify-center gap-1 text-xl font-extrabold">
        <span aria-hidden="true">{icon}</span>
        {value}
      </dd>
    </div>
  )
}

/** Lưới 35 ngày gần nhất: ô càng đậm là hôm đó học càng nhiều; đạt mục tiêu thì có viền. */
function ActivityGrid({
  activity,
  today,
  goal,
}: {
  activity: { date: string; xp: number }[]
  today: string
  goal: number
}) {
  const byDate = new Map(activity.map((a) => [a.date, a.xp]))
  const [y, m, d] = today.split('-').map(Number) as [number, number, number]
  const end = Date.UTC(y, m - 1, d)
  const days = Array.from({ length: 35 }, (_, i) => {
    const date = new Date(end - (34 - i) * 86_400_000).toISOString().slice(0, 10)
    return { date, xp: byDate.get(date) ?? 0 }
  })
  const activeDays = days.filter((x) => x.xp > 0).length
  return (
    <>
      <ul
        className="mt-3 grid grid-cols-7 gap-1.5"
        aria-label={`Bạn đã học ${activeDays} trên 35 ngày gần nhất`}
      >
        {days.map((day) => {
          const level = day.xp === 0 ? 0 : day.xp >= goal ? 3 : day.xp >= goal / 2 ? 2 : 1
          return (
            <li
              key={day.date}
              title={`${day.date}: ${day.xp} XP`}
              className={cn(
                'aspect-square rounded-lg',
                level === 0 && 'bg-line',
                level === 1 && 'bg-brand/35',
                level === 2 && 'bg-brand/65',
                level === 3 && 'bg-brand',
                day.date === today && 'ring-2 ring-ink ring-offset-1',
              )}
            />
          )
        })}
      </ul>
      <p className="mt-3 text-sm text-ink-soft">
        Học {activeDays} trên 35 ngày. Ô đậm nhất là ngày đạt mục tiêu {goal} XP.
      </p>
    </>
  )
}
