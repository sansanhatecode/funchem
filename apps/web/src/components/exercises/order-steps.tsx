'use client'

import { useMemo } from 'react'
import { cn } from '@/lib/cn'
import { seededShuffle } from '@/lib/shuffle'
import { choiceClass, type ExerciseProps, ItemContent, Mark } from './shared'

export function OrderStepsExercise({
  exercise,
  value,
  onChange,
  checked,
}: ExerciseProps<'order-steps'>) {
  const shuffled = useMemo(() => seededShuffle(exercise.steps, exercise.id), [exercise])
  const order = value?.order ?? []
  const byId = new Map(exercise.steps.map((s) => [s.id, s]))
  const remaining = shuffled.filter((s) => !order.includes(s.id))

  const emit = (next: string[]) => onChange({ type: 'order-steps', order: next })

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-ink-soft">
        Chạm các thẻ theo đúng thứ tự. Chạm thẻ đã xếp để bỏ ra.
      </p>

      <ol
        className="flex min-h-24 flex-col gap-2 rounded-2xl border-2 border-dashed border-line bg-canvas p-3"
        aria-label="Thứ tự của bạn"
      >
        {order.length === 0 && (
          <li className="m-auto text-sm text-ink-soft">Thứ tự của bạn sẽ hiện ở đây</li>
        )}
        {order.map((id, i) => {
          const step = byId.get(id)
          if (!step) return null
          const ok = checked ? exercise.steps[i]?.id === id : null
          return (
            <li key={id}>
              <button
                type="button"
                disabled={checked}
                onClick={() => emit(order.filter((x) => x !== id))}
                className={cn(
                  'flex w-full items-center gap-3 rounded-xl border-2 bg-paper px-3 py-2 text-left font-bold',
                  ok === null && 'border-line',
                  ok === true && 'border-good bg-good-soft',
                  ok === false && 'border-bad bg-bad-soft',
                )}
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-ink text-sm text-white">
                  {i + 1}
                </span>
                <span className="flex-1">
                  <ItemContent item={step} moleculeSize={56} />
                </span>
                {ok !== null && <Mark ok={ok} />}
              </button>
            </li>
          )
        })}
      </ol>

      {!checked && (
        <ul className="flex flex-wrap justify-center gap-3" aria-label="Thẻ chưa xếp">
          {remaining.map((s) => (
            <li key={s.id}>
              <button
                type="button"
                data-step-id={s.id}
                onClick={() => emit([...order, s.id])}
                className={choiceClass('idle')}
              >
                <ItemContent item={s} moleculeSize={56} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
