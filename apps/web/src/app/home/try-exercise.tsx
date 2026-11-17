'use client'

import type { Answer, Exercise } from '@funchem/content/lib'
import { gradeExercise, isAnswerComplete } from '@funchem/core'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import { ExerciseView } from '@/components/exercises/exercise-view'
import { Mascot } from '@/components/mascot'
import { Button, buttonClass } from '@/components/ui/button'
import { useContent } from '@/lib/content-context'

/** Một bài tập thật của khoá học, làm được ngay trên trang chủ: ghép một phân tử nước. */
export function TryExercise({ exercise }: { exercise: Exercise }) {
  const content = useContent()
  const [value, setValue] = useState<Answer | null>(null)
  const [checked, setChecked] = useState(false)
  const [round, setRound] = useState(0)
  const onChange = useCallback((a: Answer) => setValue(a), [])
  const correct = checked && value ? gradeExercise(exercise, value, content).correct : false

  return (
    <div className="rounded-(--radius-card) border border-line bg-paper p-5 shadow-(--shadow-card)">
      <h3 className="mb-4 text-xl font-extrabold">{exercise.prompt}</h3>
      <ExerciseView
        key={round}
        exercise={exercise}
        value={value}
        onChange={onChange}
        checked={checked}
      />

      <div className="mt-5" role="status">
        {!checked && (
          <Button
            size="lg"
            className="w-full"
            disabled={!isAnswerComplete(exercise, value)}
            onClick={() => setChecked(true)}
          >
            Kiểm tra
          </Button>
        )}
        {checked && correct && (
          <div className="flex flex-col items-center gap-3 rounded-2xl bg-good-soft p-4 text-center sm:flex-row sm:text-left">
            <Mascot mood="cheer" size={64} />
            <div className="flex-1">
              <p className="text-lg font-extrabold text-good">Chính xác!</p>
              <p className="text-sm text-ink-soft">
                Bạn vừa làm xong một bài tập hoá học. {exercise.explanation}
              </p>
            </div>
            <Link href="/learn" className={buttonClass('primary', 'md', 'shrink-0')}>
              Bắt đầu học
            </Link>
          </div>
        )}
        {checked && !correct && (
          <div className="flex flex-col items-center gap-3 rounded-2xl bg-bad-soft p-4 text-center sm:flex-row sm:text-left">
            <Mascot mood="oops" size={64} />
            <div className="flex-1">
              <p className="text-lg font-extrabold text-bad">Chưa đúng</p>
              <p className="text-sm text-ink-soft">
                Gợi ý: công thức của nước là H₂O, tức 2 hydrogen và 1 oxygen.
              </p>
            </div>
            <Button
              variant="secondary"
              onClick={() => {
                setValue(null)
                setChecked(false)
                setRound((r) => r + 1)
              }}
            >
              Thử lại
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
