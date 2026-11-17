'use client'

import { type Answer, content, type Exercise } from '@funchem/content'
import { fixtureContent } from '@funchem/content/testing'
import { describeCorrectAnswer, gradeExercise, isAnswerComplete } from '@funchem/core'
import { useCallback, useState } from 'react'
import { ReactionPlayer } from '@/components/chem/reaction-player'
import { ExerciseView } from '@/components/exercises/exercise-view'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ContentProvider } from '@/lib/content-context'

// bài tập dùng nội dung fixture, còn phần hoạt hình phản ứng bên dưới dùng nội dung thật
const FIXTURE_SLICE = {
  molecules: [...content.molecules.values(), ...fixtureContent.molecules.values()],
  reactions: [...content.reactions.values(), ...fixtureContent.reactions.values()],
}

export function ExerciseGallery() {
  const exercises = [...fixtureContent.exercises.values()].map((e) => e.exercise)
  return (
    <ContentProvider slice={FIXTURE_SLICE}>
      <main className="mx-auto max-w-2xl px-5 py-8">
        <h1 className="text-2xl font-extrabold">Thử nghiệm dạng bài</h1>
        <p className="text-sm text-ink-soft">Dùng nội dung fixture. Không lưu gì lên server.</p>

        <h2 className="mt-8 text-xl font-extrabold">Hoạt hình phản ứng</h2>
        {[...content.reactions.values()].map((rx) => (
          <Card key={rx.id} className="mt-4" data-reaction={rx.id}>
            <h3 className="mb-3 font-extrabold">{rx.name}</h3>
            <ReactionPlayer reaction={rx} showStory />
          </Card>
        ))}

        <h2 className="mt-8 text-xl font-extrabold">Bài tập</h2>
        {exercises.map((ex) => (
          <ExerciseDemo key={ex.id} exercise={ex} />
        ))}
      </main>
    </ContentProvider>
  )
}

function ExerciseDemo({ exercise }: { exercise: Exercise }) {
  const [value, setValue] = useState<Answer | null>(null)
  const [checked, setChecked] = useState(false)
  const [round, setRound] = useState(0)
  const onChange = useCallback((a: Answer) => setValue(a), [])
  const result = checked && value ? gradeExercise(exercise, value, fixtureContent) : null

  return (
    <Card className="mt-4" data-exercise={exercise.id} data-type={exercise.type}>
      <p className="text-xs font-bold text-ink-soft uppercase">
        {exercise.type} · {exercise.id}
      </p>
      <h3 className="mt-1 mb-4 text-lg font-extrabold">{exercise.prompt}</h3>
      <ExerciseView
        key={round}
        exercise={exercise}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <div className="mt-4 flex items-center gap-3">
        <Button
          disabled={checked || !isAnswerComplete(exercise, value)}
          onClick={() => setChecked(true)}
        >
          Kiểm tra
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setValue(null)
            setChecked(false)
            setRound((r) => r + 1)
          }}
        >
          Làm lại
        </Button>
        {result && (
          <p
            role="status"
            className={result.correct ? 'font-bold text-good' : 'font-bold text-bad'}
          >
            {result.correct
              ? 'Đúng'
              : `Sai. Đáp án: ${describeCorrectAnswer(exercise, fixtureContent)}`}
          </p>
        )}
      </div>
    </Card>
  )
}
