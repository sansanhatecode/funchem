'use client'

import { type Answer, content, type Exercise } from '@funchem/content'
import {
  describeCorrectAnswer,
  type GradeResult,
  gradeExercise,
  isAnswerComplete,
} from '@funchem/core'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { ExerciseView } from '@/components/exercises/exercise-view'
import { Mascot } from '@/components/mascot'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { SpeakerHighIcon, SpeakerSlashIcon, XIcon } from '@/components/ui/icons'
import { ProgressBar } from '@/components/ui/progress-bar'
import { cn } from '@/lib/cn'
import { playSound, setMuted, useMuted } from '@/lib/sound'

export type Submitted = { exerciseId: string; answer: Answer }

/** Mỗi câu sai được hỏi lại tối đa chừng này lần ở cuối lượt. */
const MAX_RETRIES = 2

export interface ExerciseRunnerProps<R> {
  exercises: Exercise[]
  color: string
  exitHref: string
  /** màn mở đầu (thẻ Khám phá); bỏ trống thì vào thẳng bài tập */
  intro?: ReactNode
  /** gửi các câu trả lời ĐẦU TIÊN của người học lên server để chấm */
  submit: (answers: Submitted[], durationSec: number) => Promise<R>
  onSubmitted?: () => void
  renderResult: (result: R, restart: () => void) => ReactNode
}

/**
 * Chạy một lượt bài tập: từng câu một, phản hồi ngay, câu sai quay lại ở cuối lượt để làm lại.
 * Điểm chỉ tính theo câu trả lời đầu tiên; các lần làm lại chỉ để học.
 * Dùng chung cho bài học và ôn tập.
 */
export function ExerciseRunner<R>({
  exercises,
  color,
  exitHref,
  intro,
  submit,
  onSubmitted,
  renderResult,
}: ExerciseRunnerProps<R>) {
  type Item = { exercise: Exercise; retry: boolean }
  const initialQueue = () => exercises.map((exercise): Item => ({ exercise, retry: false }))

  const [phase, setPhase] = useState<'intro' | 'exercise' | 'result'>(intro ? 'intro' : 'exercise')
  const [queue, setQueue] = useState<Item[]>(initialQueue)
  const [pos, setPos] = useState(0)
  const [answers, setAnswers] = useState<Submitted[]>([])
  const [draft, setDraft] = useState<Answer | null>(null)
  const [check, setCheck] = useState<GradeResult | null>(null)
  const startedAt = useRef<number | null>(null)
  const muted = useMuted()

  const mutation = useMutation({
    mutationFn: (all: Submitted[]) => {
      const sec = startedAt.current ? Math.round((Date.now() - startedAt.current) / 1000) : 0
      return submit(all, Math.min(sec, 3600))
    },
    onSuccess: () => {
      playSound('complete')
      onSubmitted?.()
    },
  })

  const onDraft = useCallback((a: Answer) => setDraft(a), [])
  const item = queue[pos]!
  const exercise = item.exercise

  const start = () => {
    startedAt.current = Date.now()
    setPhase('exercise')
  }

  const doCheck = () => {
    if (!draft) return
    if (startedAt.current === null) startedAt.current = Date.now()
    const result = gradeExercise(exercise, draft, content)
    setCheck(result)
    playSound(result.correct ? 'correct' : 'wrong')
    if (!item.retry) setAnswers((a) => [...a, { exerciseId: exercise.id, answer: draft }])
    if (!result.correct) {
      const tries = queue.filter((q) => q.exercise.id === exercise.id && q.retry).length
      if (tries < MAX_RETRIES) setQueue((q) => [...q, { exercise, retry: true }])
    }
  }

  const next = () => {
    if (pos + 1 < queue.length) {
      setPos(pos + 1)
      setDraft(null)
      setCheck(null)
    } else {
      setPhase('result')
      mutation.mutate(answers)
    }
  }

  const restart = () => {
    mutation.reset()
    setQueue(initialQueue())
    setPos(0)
    setAnswers([])
    setDraft(null)
    setCheck(null)
    startedAt.current = Date.now()
    setPhase('exercise')
  }

  // Phím Enter = nút chính, khi tiêu điểm không nằm trên một điều khiển khác
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
  primaryRef.current = () => {
    if (phase === 'intro') start()
    else if (phase === 'exercise') {
      if (check) next()
      else if (isAnswerComplete(exercise, draft)) doCheck()
    }
  }

  const done = phase === 'result' ? queue.length : pos + (check ? 1 : 0)
  const isLast = pos + 1 >= queue.length

  return (
    <RunnerShell>
      <header className="flex items-center gap-3 px-5 py-4">
        <Link
          href={exitHref}
          aria-label="Thoát"
          className="grid size-10 shrink-0 place-items-center rounded-full text-ink-soft hover:bg-line"
          onClick={(e) => {
            if (
              phase === 'exercise' &&
              answers.length > 0 &&
              !window.confirm('Thoát bây giờ sẽ mất tiến độ của lượt này. Thoát?')
            ) {
              e.preventDefault()
            }
          }}
        >
          <XIcon weight="bold" size={22} aria-hidden="true" />
        </Link>
        <ProgressBar value={done / queue.length} label="Tiến độ" color={color} />
        <button
          type="button"
          onClick={() => setMuted(!muted)}
          aria-label={muted ? 'Bật âm thanh' : 'Tắt âm thanh'}
          aria-pressed={!muted}
          className="grid size-10 shrink-0 place-items-center rounded-full text-ink-soft hover:bg-line"
        >
          {muted ? (
            <SpeakerSlashIcon weight="fill" size={20} />
          ) : (
            <SpeakerHighIcon weight="fill" size={20} />
          )}
        </button>
      </header>

      {phase === 'intro' && (
        <>
          <main className="flex-1 px-5 pb-32">{intro}</main>
          <BottomBar>
            <Button size="lg" className="w-full" onClick={start}>
              Bắt đầu luyện tập
            </Button>
          </BottomBar>
        </>
      )}

      {phase === 'exercise' && (
        <>
          <main
            className="flex-1 px-5 pb-64"
            data-exercise-id={exercise.id}
            data-retry={item.retry || undefined}
          >
            <p className="flex items-center gap-2 text-xs font-bold tracking-wide text-ink-soft uppercase">
              {item.retry ? (
                <span className="rounded-full bg-sun px-2.5 py-0.5 text-ink normal-case">
                  Làm lại câu này
                </span>
              ) : (
                <>
                  Câu {answers.length + (check ? 0 : 1)} / {exercises.length}
                </>
              )}
            </p>
            <h1 className="mt-1 mb-5 text-xl font-extrabold text-balance">{exercise.prompt}</h1>
            <ExerciseView
              key={`${exercise.id}:${pos}`}
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
                {isLast ? 'Hoàn thành' : 'Tiếp tục'}
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
          {mutation.isPending && (
            <div className="m-auto flex flex-col items-center gap-3" aria-busy="true">
              <Mascot mood="think" size={96} />
              <p className="font-bold text-ink-soft">Đang chấm bài…</p>
            </div>
          )}
          {mutation.isError && (
            <Card className="m-auto w-full">
              <p className="text-lg font-extrabold">Không gửi được kết quả</p>
              <p className="mt-1 text-sm text-ink-soft">
                Câu trả lời của bạn vẫn còn. Kiểm tra kết nối rồi gửi lại.
              </p>
              <Button className="mt-4" onClick={() => mutation.mutate(answers)}>
                Gửi lại
              </Button>
            </Card>
          )}
          {mutation.data !== undefined && renderResult(mutation.data, restart)}
        </main>
      )}
    </RunnerShell>
  )
}

export function RunnerShell({ children }: { children: ReactNode }) {
  return <div className="mx-auto flex min-h-dvh max-w-2xl flex-col">{children}</div>
}

function BottomBar({ children, tone }: { children: ReactNode; tone?: 'good' | 'bad' | undefined }) {
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
