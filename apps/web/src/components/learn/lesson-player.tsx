'use client'

import { type AttemptResponse, unwrap } from '@funchem/api-client'
import { moleculeLabel } from '@funchem/content/lib'
import { passAccuracy } from '@funchem/core'
import { useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { useState } from 'react'
import { MoleculeView } from '@/components/chem/molecule-view'
import { Mascot } from '@/components/mascot'
import { Button, buttonClass } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Confetti } from '@/components/ui/confetti'
import { api } from '@/lib/api'
import type { LessonBundle } from '@/lib/content-types'
import { trackEvent } from '@/lib/track'
import { progressKey, useProgress } from '@/lib/use-progress'
import { ExerciseRunner, RunnerShell } from './exercise-runner'
import { IntroCard } from './intro-card'
import { NewBadges, Stat, StreakValue } from './result-parts'
import { useContent } from '@/lib/content-context'

export function LessonPlayer({ bundle }: { bundle: LessonBundle }) {
  const { lesson, unit } = bundle
  const lessonId = lesson.id
  const { user, progress, isLoading, isError, refetch } = useProgress()
  const queryClient = useQueryClient()

  // trạng thái khoá chỉ xét lúc vào bài; sau khi nộp, tiến độ thay đổi nhưng không ảnh hưởng màn kết quả
  const [initialStatus, setInitialStatus] = useState<string | null>(null)
  if (progress && initialStatus === null) {
    setInitialStatus(progress.lessons[lessonId]?.status ?? 'locked')
  }

  if (isLoading) {
    return (
      <RunnerShell>
        <div className="m-auto flex flex-col items-center gap-3 p-5" aria-busy="true">
          <Mascot mood="think" size={96} />
          <p className="font-bold text-ink-soft">Đang chuẩn bị bài học…</p>
        </div>
      </RunnerShell>
    )
  }
  if (isError) {
    return (
      <RunnerShell>
        <Card className="m-5">
          <p className="font-bold">Không tải được tiến độ.</p>
          <Button className="mt-4" onClick={() => refetch()}>
            Thử lại
          </Button>
        </Card>
      </RunnerShell>
    )
  }
  if (initialStatus === 'locked') {
    return (
      <RunnerShell>
        <Card className="m-5">
          <p className="text-lg font-extrabold">Bài này chưa mở</p>
          <p className="mt-1 text-sm text-ink-soft">
            Hoàn thành các bài trước để mở khoá “{lesson.title}”.
          </p>
          <Link href="/learn" className={buttonClass('primary', 'md', 'mt-4')}>
            Về bản đồ học
          </Link>
        </Card>
      </RunnerShell>
    )
  }

  return (
    <ExerciseRunner<AttemptResponse>
      exercises={lesson.exercises}
      color={unit.color}
      exitHref="/learn"
      intro={lesson.intro ? <IntroCard intro={lesson.intro} /> : undefined}
      submit={async (answers, durationSec) =>
        unwrap(await api.attempts.$post({ json: { lessonId, answers, durationSec } }))
      }
      onEvent={(e) =>
        trackEvent({
          type: e.kind === 'start' ? 'lesson_start' : 'lesson_exit',
          lessonId,
          ...(e.exerciseId ? { exerciseId: e.exerciseId } : {}),
          answered: e.answered,
        })
      }
      onSubmitted={() => {
        void queryClient.invalidateQueries({ queryKey: progressKey(user?.id) })
        void queryClient.invalidateQueries({ queryKey: ['review'] })
      }}
      renderResult={(result, restart) => (
        <ResultScreen result={result} bundle={bundle} onRetry={restart} />
      )}
    />
  )
}

function ResultScreen({
  result,
  bundle,
  onRetry,
}: {
  result: AttemptResponse
  bundle: LessonBundle
  onRetry: () => void
}) {
  const content = useContent()
  const { grade } = result
  const pct = Math.round(grade.accuracy * 100)
  const isCheckpoint = bundle.lesson.kind === 'checkpoint'

  // bài kế tiếp theo thứ tự chương trình
  const nextLesson = bundle.next
  const unlocked = result.newlyUnlockedMolecules
    .map((id) => content.molecules.get(id))
    .filter((m): m is NonNullable<typeof m> => Boolean(m))

  const headline = !grade.passed
    ? 'Gần được rồi!'
    : isCheckpoint
      ? `Hoàn thành Unit ${bundle.unit.order}!`
      : pct === 100
        ? 'Hoàn hảo!'
        : 'Xong bài!'

  return (
    <div className="relative m-auto flex w-full flex-col items-center gap-5 py-6 text-center">
      {grade.passed && <Confetti />}
      <div style={{ animation: 'pop-in 500ms ease-out' }}>
        <Mascot mood={grade.passed ? 'cheer' : 'oops'} size={132} />
      </div>
      <h1 className="text-3xl font-extrabold">{headline}</h1>
      {!grade.passed && (
        <p className="max-w-sm text-ink-soft">
          {isCheckpoint ? 'Bài kiểm tra' : 'Bài học'} cần đúng ít nhất{' '}
          {Math.round(passAccuracy(bundle.lesson.kind) * 100)}% để mở bài tiếp theo. Bạn đúng{' '}
          {grade.correct}/{grade.total} câu. Xem lại rồi thử lần nữa nhé.
        </p>
      )}

      <dl className="grid w-full grid-cols-3 gap-3">
        <Stat label="Chính xác" value={`${pct}%`} />
        <Stat label="Kinh nghiệm" value={`+${grade.xpEarned} XP`} tone="sun" />
        <Stat label="Chuỗi ngày" value={<StreakValue days={result.streak.current} />} />
      </dl>
      {result.xpLimited ? (
        <p className="-mt-2 text-sm text-ink-soft">
          Hôm nay bạn đã nhận XP của bài này rồi. Làm lại để luyện thêm vẫn rất tốt, ngày mai bài
          này lại có XP.
        </p>
      ) : (
        result.repeat &&
        grade.passed && (
          <p className="-mt-2 text-sm text-ink-soft">
            Bạn đã học bài này rồi nên lần làm lại được một nửa XP.
          </p>
        )
      )}

      <NewBadges ids={result.newBadges} unitCount={bundle.unitCount} />

      {unlocked.length > 0 && (
        <Card className="w-full">
          <p className="font-extrabold">Phân tử mới trong bộ sưu tập</p>
          <ul className="mt-3 flex flex-wrap justify-center gap-4">
            {unlocked.map((m) => (
              <li
                key={m.id}
                style={{ animation: 'pop-in 500ms ease-out 200ms backwards' }}
                title={moleculeLabel(m)}
              >
                <MoleculeView molecule={m} size={110} animated showLabel />
              </li>
            ))}
          </ul>
        </Card>
      )}

      <div className="mt-2 flex w-full flex-col gap-3">
        {grade.passed && nextLesson ? (
          <Link href={`/learn/${nextLesson.id}`} className={buttonClass('primary', 'lg', 'w-full')}>
            Bài tiếp theo
          </Link>
        ) : !grade.passed ? (
          <Button size="lg" className="w-full" onClick={onRetry}>
            Làm lại
          </Button>
        ) : null}
        <Link
          href="/learn"
          className={buttonClass(
            grade.passed && nextLesson ? 'secondary' : 'primary',
            'lg',
            'w-full',
          )}
        >
          Về bản đồ học
        </Link>
      </div>
    </div>
  )
}
