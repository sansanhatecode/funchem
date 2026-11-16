'use client'

import { cn } from '@/lib/cn'
import {
  type ChoiceState,
  choiceClass,
  type ExerciseProps,
  ExerciseVisual,
  ItemContent,
} from './shared'

export function McqExercise({ exercise, value, onChange, checked }: ExerciseProps<'mcq'>) {
  const pictorial = exercise.options.every((o) => o.moleculeId)
  return (
    <div>
      {exercise.visual && <ExerciseVisual item={exercise.visual} />}
      <div
        role="radiogroup"
        aria-label="Các lựa chọn"
        className={cn('grid gap-3', pictorial ? 'grid-cols-2' : 'grid-cols-1')}
      >
        {exercise.options.map((o) => {
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
