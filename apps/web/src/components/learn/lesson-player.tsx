'use client'

import { type AttemptResponse, unwrap } from '@funchem/api-client'
import { type Answer, content } from '@funchem/content'
import {
  describeCorrectAnswer,
  type GradeResult,
  gradeExercise,
  isAnswerComplete,
} from '@funchem/core'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { MoleculeView } from '@/components/chem/molecule-view'
import { Mascot } from '@/components/mascot'
import { ExerciseView } from '@/components/exercises/exercise-view'
import { Button, buttonClass } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Confetti } from '@/components/ui/confetti'
import { FireIcon, XIcon } from '@/components/ui/icons'
import { ProgressBar } from '@/components/ui/progress-bar'
import { api } from '@/lib/api'
import { cn } from '@/lib/cn'
import { progressKey, useProgress } from '@/lib/use-progress'
import { IntroCard } from './intro-card'

type Phase = 'intro' | 'exercise' | 'result'
type Submitted = { exerciseId: string; answer: Answer }

export function LessonPlayer({ lessonId }: { lessonId: string }) {
  const entry = content.lessons.get(lessonId)!
  const { lesson, unit } = entry
  const total = lesson.exercises.length

  const { user, progress, isLoading, isError, refetch } = useProgress()
  const queryClient = useQueryClient()

  const [phase, setPhase] = useState<Phase>(lesson.intro ? 'intro' : 'exercise')
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Submitted[]>([])
  const [draft, setDraft] = useState<Answer | null>(null)
  const [check, setCheck] = useState<GradeResult | null>(null)
  const startedAt = useRef<number | null>(null)
  // trạng thái khoá chỉ xét lúc vào bài; sau khi nộp, tiến độ thay đổi nhưng không ảnh hưởng màn kết quả
  const [initialStatus, setInitialStatus] = useState<string | null>(null)
  if (progress && initialStatus === null) {
    setInitialStatus(progress.lessons[lessonId]?.status ?? 'locked')
  }

  const submit = useMutation({
    mutationFn: async (all: Submitted[]): Promise<AttemptResponse> => {
      const durationSec = startedAt.current
        ? Math.round((Date.now() - startedAt.current) / 1000)
        : undefined
      return unwrap(
        await api.attempts.$post({
          json: {
            lessonId,
            answers: all,
            ...(durationSec !== undefined ? { durationSec: Math.min(durationSec, 3600) } : {}),
          },
        }),
      )
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: progressKey(user?.id) }),
  })

  const onDraft = useCallback((a: Answer) => setDraft(a), [])

  // Phím Enter = nút chính (Kiểm tra / Tiếp tục), khi tiêu điểm không nằm trên một điều khiển khác
  const primaryRef = useRef<() => void>(() => {})
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Enter' || e.repeat) return
      const t = e.target as HTMLElement | null
      if (t && t.closest('button, a, input, textarea, select, [role="radio"]')) return
      primaryRef.current()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (isLoading) {
    return (
      <Shell>
        <div className="m-auto flex flex-col items-center gap-3 p-5" aria-busy="true">
          <Mascot mood="think" size={96} />
          <p className="font-bold text-ink-soft">Đang chuẩn bị bài học…</p>
        </div>
      </Shell>
    )
  }
  if (isError) {
    return (
      <Shell>
        <Card className="m-5">
          <p className="font-bold">Không tải được tiến độ.</p>
          <Button className="mt-4" onClick={() => refetch()}>
            Thử lại
          </Button>
        </Card>
      </Shell>
    )
  }
  if (initialStatus === 'locked') {
    return (
      <Shell>
        <Card className="m-5">
          <p className="text-lg font-extrabold">Bài này chưa mở</p>
          <p className="mt-1 text-sm text-ink-soft">
            Hoàn thành các bài trước để mở khoá “{lesson.title}”.
          </p>
          <Link href="/learn" className={buttonClass('primary', 'md', 'mt-4')}>
            Về bản đồ học
          </Link>
        </Card>
      </Shell>
    )
  }

  const exercise = lesson.exercises[index]!
  const done = phase === 'result' ? total : index + (check ? 1 : 0)

  function start() {
    startedAt.current = Date.now()
    setPhase('exercise')
  }

  function doCheck() {
    if (!draft) return
    if (startedAt.current === null) startedAt.current = Date.now()
    setCheck(gradeExercise(exercise, draft, content))
    setAnswers((a) => [...a, { exerciseId: exercise.id, answer: draft }])
  }

  function next() {
    if (index + 1 < total) {
      setIndex(index + 1)
      setDraft(null)
      setCheck(null)
    } else {
      setPhase('result')
      submit.mutate(answers)
    }
  }

  function restart() {
    submit.reset()
    setAnswers([])
    setDraft(null)
    setCheck(null)
    setIndex(0)
    startedAt.current = Date.now()
    setPhase('exercise')
  }

  primaryRef.current = () => {
    if (phase === 'intro') start()
    else if (phase === 'exercise') {
      if (check) next()
      else if (isAnswerComplete(exercise, draft)) doCheck()
    }
  }

  return (
    <Shell>
      <header className="flex items-center gap-4 px-5 py-4">
        <Link
          href="/learn"
          aria-label="Thoát bài học"
          className="grid size-10 shrink-0 place-items-center rounded-full text-ink-soft hover:bg-line"
          onClick={(e) => {
            if (
              phase === 'exercise' &&
              answers.length > 0 &&
              !window.confirm('Thoát bây giờ sẽ mất tiến độ của bài này. Thoát?')
            ) {
              e.preventDefault()
            }
          }}
        >
          <XIcon weight="bold" size={22} aria-hidden="true" />
        </Link>
        <ProgressBar value={done / total} label="Tiến độ bài học" color={unit.color} />
      </header>

      {phase === 'intro' && lesson.intro && (
        <>
          <main className="flex-1 px-5 pb-32">
            <IntroCard intro={lesson.intro} />
          </main>
          <BottomBar>
            <Button size="lg" className="w-full" onClick={start}>
              Bắt đầu luyện tập
            </Button>
          </BottomBar>
        </>
      )}

      {phase === 'exercise' && (
        <>
          <main className="flex-1 px-5 pb-64">
            <p className="text-xs font-bold tracking-wide text-ink-soft uppercase">
              Câu {index + 1} / {total}
            </p>
            <h1 className="mt-1 mb-5 text-xl font-extrabold text-balance">{exercise.prompt}</h1>
            <ExerciseView
              key={exercise.id}
              exercise={exercise}
              value={draft}
              onChange={onDraft}
              checked={check !== null}
            />
          </main>

          <BottomBar tone={check ? (check.correct ? 'good' : 'bad') : undefined}>
            {check && (
              <div className="mb-3 flex items-start gap-3">
                <Mascot mood={check.correct ? 'cheer' : 'oops'} size={56} className="-mt-1" />
                <div role="status" className="min-w-0 flex-1">
                  <p
                    className={cn(
                      'text-lg font-extrabold',
                      check.correct ? 'text-good' : 'text-bad',
                    )}
                  >
                    {check.correct ? 'Chính xác!' : 'Chưa đúng'}
                  </p>
                  {!check.correct && (
                    <p className="mt-1 text-sm">
                      {check.reason && <span>{check.reason}. </span>}
                      <span className="font-bold">Đáp án: </span>
                      {describeCorrectAnswer(exercise, content)}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-ink-soft">{exercise.explanation}</p>
                </div>
              </div>
            )}
            {check ? (
              <Button size="lg" className="w-full" onClick={next}>
                {index + 1 < total ? 'Tiếp tục' : 'Hoàn thành'}
              </Button>
            ) : (
              <Button
                size="lg"
                className="w-full"
                disabled={!isAnswerComplete(exercise, draft)}
                onClick={doCheck}
              >
                Kiểm tra
              </Button>
            )}
          </BottomBar>
        </>
      )}

      {phase === 'result' && (
        <main className="flex flex-1 flex-col px-5 pb-10">
          {submit.isPending && (
            <div className="m-auto flex flex-col items-center gap-3" aria-busy="true">
              <Mascot mood="think" size={96} />
              <p className="font-bold text-ink-soft">Đang chấm bài…</p>
            </div>
          )}
          {submit.isError && (
            <Card className="m-auto w-full">
              <p className="text-lg font-extrabold">Không gửi được kết quả</p>
              <p className="mt-1 text-sm text-ink-soft">
                Câu trả lời của bạn vẫn còn. Kiểm tra kết nối rồi gửi lại.
              </p>
              <Button className="mt-4" onClick={() => submit.mutate(answers)}>
                Gửi lại
              </Button>
            </Card>
          )}
          {submit.data && (
            <ResultScreen result={submit.data} lessonId={lessonId} onRetry={restart} />
          )}
        </main>
      )}
    </Shell>
  )
}

function Shell({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto flex min-h-dvh max-w-2xl flex-col">{children}</div>
}

function BottomBar({
  children,
  tone,
}: {
  children: React.ReactNode
  tone?: 'good' | 'bad' | undefined
}) {
  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-10 border-t',
        tone === 'good' && 'border-good/30 bg-good-soft',
        tone === 'bad' && 'border-bad/30 bg-bad-soft',
        !tone && 'border-line bg-paper',
      )}
      style={tone ? { animation: 'slide-up 180ms ease-out' } : undefined}
    >
      <div className="mx-auto max-w-2xl px-5 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
        {children}
      </div>
    </div>
  )
}

function ResultScreen({
  result,
  lessonId,
  onRetry,
}: {
  result: AttemptResponse
  lessonId: string
  onRetry: () => void
}) {
  const { grade } = result
  const entry = content.lessons.get(lessonId)!
  const pct = Math.round(grade.accuracy * 100)
  const isCheckpoint = entry.lesson.kind === 'checkpoint'

  // bài kế tiếp theo thứ tự chương trình
  const flat = content.units.flatMap((u) => u.lessons)
  const nextLesson = flat[flat.findIndex((l) => l.id === lessonId) + 1]
  const unlocked = result.newlyUnlockedMolecules
    .map((id) => content.molecules.get(id))
    .filter((m): m is NonNullable<typeof m> => Boolean(m))

  const headline = !grade.passed
    ? 'Gần được rồi!'
    : isCheckpoint
      ? `Hoàn thành Unit ${entry.unit.order}!`
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
          Bài kiểm tra cần đúng ít nhất 80%. Bạn đúng {grade.correct}/{grade.total} câu. Xem lại rồi
          thử lần nữa nhé.
        </p>
      )}

      <dl className="grid w-full grid-cols-3 gap-3">
        <Stat label="Chính xác" value={`${pct}%`} />
        <Stat label="Kinh nghiệm" value={`+${grade.xpEarned} XP`} tone="sun" />
        <Stat
          label="Chuỗi ngày"
          value={
            <span className="inline-flex items-center gap-1">
              <FireIcon weight="fill" size={22} className="text-flame" aria-hidden="true" />
              {result.streak.current}
            </span>
          }
        />
      </dl>

      {unlocked.length > 0 && (
        <Card className="w-full">
          <p className="font-extrabold">Phân tử mới trong bộ sưu tập</p>
          <ul className="mt-3 flex flex-wrap justify-center gap-4">
            {unlocked.map((m) => (
              <li key={m.id} style={{ animation: 'pop-in 500ms ease-out 200ms backwards' }}>
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

function Stat({ label, value, tone }: { label: string; value: React.ReactNode; tone?: 'sun' }) {
  return (
    <div
      className={cn(
        'rounded-2xl border-2 p-3',
        tone === 'sun' ? 'border-sun bg-[#fff8e1]' : 'border-line bg-paper',
      )}
    >
      <dt className="text-xs font-bold tracking-wide text-ink-soft uppercase">{label}</dt>
      <dd className="mt-1 text-xl font-extrabold">{value}</dd>
    </div>
  )
}
