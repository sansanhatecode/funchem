'use client'

import { type ReviewResponse, type ReviewResultResponse, unwrap } from '@funchem/api-client'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { ExerciseRunner, RunnerShell } from '@/components/learn/exercise-runner'
import { NewBadges, Stat, StreakValue } from '@/components/learn/result-parts'
import { Mascot } from '@/components/mascot'
import { buttonClass } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Confetti } from '@/components/ui/confetti'
import { api } from '@/lib/api'
import { ContentProvider } from '@/lib/content-context'
import type { ContentSlice, ExercisesBundle } from '@/lib/content-types'
import { trackEvent } from '@/lib/track'
import { progressKey, useProgress } from '@/lib/use-progress'

const EMPTY_SLICE: ContentSlice = { molecules: [], reactions: [] }

/** Lượt ôn hằng ngày: vài câu từ các bài đã học, ưu tiên khái niệm bạn hay sai. */
export function ReviewPlayer() {
  const { user } = useProgress()
  const queryClient = useQueryClient()
  const review = useQuery<ReviewResponse>({
    queryKey: ['review', user?.id],
    queryFn: async () => unwrap(await api.me.review.$get()),
    enabled: Boolean(user),
    // giữ nguyên bộ câu trong suốt lượt ôn
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  })

  // nội dung của đúng các câu cần ôn, do server của web cắt sẵn
  const ids = review.data?.exerciseIds ?? []
  const bundle = useQuery<ExercisesBundle>({
    queryKey: ['review-content', ids],
    queryFn: async () => {
      const res = await fetch(`/content/exercises?ids=${ids.map(encodeURIComponent).join(',')}`)
      if (!res.ok) throw new Error('Không tải được nội dung ôn tập')
      return (await res.json()) as ExercisesBundle
    },
    enabled: ids.length > 0,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  })

  if (!user || review.isPending || (ids.length > 0 && bundle.isPending)) {
    return (
      <RunnerShell>
        <div className="m-auto flex flex-col items-center gap-3 p-5" aria-busy="true">
          <Mascot mood="think" size={96} />
          <p className="font-bold text-ink-soft">Đang chọn câu để ôn…</p>
        </div>
      </RunnerShell>
    )
  }

  const exercises = bundle.data?.exercises ?? []

  if (review.isError || bundle.isError || exercises.length === 0) {
    return (
      <RunnerShell>
        <Card className="m-auto mx-5 flex flex-col items-center gap-3 text-center">
          <Mascot mood="happy" size={96} />
          <p className="text-lg font-extrabold">
            {review.isError || bundle.isError ? 'Không tải được bài ôn' : 'Chưa có gì để ôn'}
          </p>
          <p className="text-sm text-ink-soft">
            {review.isError || bundle.isError
              ? 'Kiểm tra kết nối rồi thử lại.'
              : 'Học xong một bài rồi quay lại đây, Bình sẽ chọn câu cho bạn ôn.'}
          </p>
          <Link href="/learn" className={buttonClass('primary', 'md')}>
            Về bản đồ học
          </Link>
        </Card>
      </RunnerShell>
    )
  }

  const unitCount = bundle.data?.unitCount ?? 0
  return (
    <ContentProvider slice={bundle.data?.slice ?? EMPTY_SLICE}>
      <ExerciseRunner<ReviewResultResponse>
        exercises={exercises}
        color="var(--color-sun-deep)"
        exitHref="/learn"
        submit={async (answers) => unwrap(await api.review.$post({ json: { answers } }))}
        onEvent={(e) =>
          trackEvent({
            type: e.kind === 'start' ? 'review_start' : 'review_exit',
            ...(e.exerciseId ? { exerciseId: e.exerciseId } : {}),
            answered: e.answered,
          })
        }
        onSubmitted={() => void queryClient.invalidateQueries({ queryKey: progressKey(user.id) })}
        renderResult={(result) => (
          <div className="relative m-auto flex w-full flex-col items-center gap-5 py-6 text-center">
            <Confetti count={24} />
            <div style={{ animation: 'pop-in 500ms ease-out' }}>
              <Mascot mood="cheer" size={132} />
            </div>
            <h1 className="text-3xl font-extrabold">Ôn xong rồi!</h1>
            <dl className="grid w-full grid-cols-3 gap-3">
              <Stat label="Đúng" value={`${result.correct}/${result.total}`} />
              <Stat label="Kinh nghiệm" value={`+${result.xpEarned} XP`} tone="sun" />
              <Stat label="Chuỗi ngày" value={<StreakValue days={result.streak.current} />} />
            </dl>
            {result.xpLimited && (
              <p className="-mt-2 text-sm text-ink-soft">
                Hôm nay bạn đã nhận đủ XP ôn tập. Ôn thêm vẫn giúp bạn nhớ lâu hơn.
              </p>
            )}
            <NewBadges ids={result.newBadges} unitCount={unitCount} />
            <Link href="/learn" className={buttonClass('primary', 'lg', 'mt-2 w-full')}>
              Về bản đồ học
            </Link>
          </div>
        )}
      />
    </ContentProvider>
  )
}
