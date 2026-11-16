'use client'

import { CheckIcon, XIcon } from '@/components/ui/icons'
import { type ChoiceState, choiceClass, type ExerciseProps, ExerciseVisual } from './shared'

export function TrueFalseExercise({
  exercise,
  value,
  onChange,
  checked,
}: ExerciseProps<'true-false'>) {
  const options = [
    { v: true, label: 'Đúng', Icon: CheckIcon },
    { v: false, label: 'Sai', Icon: XIcon },
  ]
  return (
    <div>
      {exercise.visual && <ExerciseVisual item={exercise.visual} />}
      <div role="radiogroup" aria-label="Đúng hay sai" className="grid grid-cols-2 gap-3">
        {options.map((o) => {
          const selected = value?.value === o.v
          let state: ChoiceState = selected ? 'selected' : 'idle'
          if (checked) {
            if (o.v === exercise.answer) state = 'correct'
            else if (selected) state = 'wrong'
          }
          return (
            <button
              key={o.label}
              type="button"
              role="radio"
              data-value={String(o.v)}
              aria-checked={selected}
              disabled={checked}
              onClick={() => onChange({ type: 'true-false', value: o.v })}
              className={choiceClass(state, 'flex flex-col items-center gap-1 py-6 text-lg')}
            >
              <o.Icon weight="bold" size={28} aria-hidden="true" />
              {o.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
