'use client'

import { useMemo } from 'react'
import { cn } from '@/lib/cn'
import { seededShuffle } from '@/lib/shuffle'
import {
  type ChoiceState,
  choiceClass,
  type ExerciseProps,
  ExerciseVisual,
  ItemContent,
} from './shared'

export function McqExercise({ exercise, value, onChange, checked }: ExerciseProps<'mcq'>) {
  const pictorial = exercise.options.every((o) => o.moleculeId)
  // Xáo thứ tự lựa chọn (ổn định theo id bài tập) để vị trí không gợi ý đáp án:
  // trong nội dung, đáp án đúng hay được viết ở cùng một vị trí.
  const options = useMemo(
    () => seededShuffle(exercise.options, exercise.id),
    [exercise.options, exercise.id],
  )
  return (
    <div>
      {exercise.visual && <ExerciseVisual item={exercise.visual} />}
      <div
        role="radiogroup"
        aria-label="Các lựa chọn"
        className={cn('grid gap-3', pictorial ? 'grid-cols-2' : 'grid-cols-1')}
      >
        {options.map((o) => {
          const selected = value?.optionId === o.id
          let state: ChoiceState = selected ? 'selected' : 'idle'
          if (checked) {
            if (o.id === exercise.correctOptionId) state = 'correct'
            else if (selected) state = 'wrong'
          }
          return (
            <button
              key={o.id}
              type="button"
              role="radio"
              data-option-id={o.id}
              aria-checked={selected}
              disabled={checked}
              onClick={() => onChange({ type: 'mcq', optionId: o.id })}
              className={choiceClass(state, pictorial ? 'flex justify-center' : undefined)}
            >
              <ItemContent item={o} />
            </button>
          )
        })}
      </div>
    </div>
  )
}
