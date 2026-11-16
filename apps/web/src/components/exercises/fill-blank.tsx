'use client'

import { Fragment, useState } from 'react'
import { cn } from '@/lib/cn'
import { choiceClass, type ExerciseProps, Mark } from './shared'

const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, ' ')

export function FillBlankExercise({
  exercise,
  value,
  onChange,
  checked,
}: ExerciseProps<'fill-blank'>) {
  const [active, setActive] = useState(0)
  const values = value?.values ?? exercise.blanks.map(() => '')
  const parts = exercise.template.split('___')

  const setValue = (i: number, v: string) => {
    const next = [...values]
    next[i] = v
    onChange({ type: 'fill-blank', values: next })
  }

  const isOk = (i: number) => exercise.blanks[i]!.accepted.map(norm).includes(norm(values[i] ?? ''))
  const activeBlank = exercise.blanks[active]
  const bank = activeBlank?.wordBank

  return (
    <div className="flex flex-col gap-5">
      <p className="rounded-2xl border border-line bg-paper p-4 text-lg leading-loose">
        {parts.map((part, i) => {
          const blank = exercise.blanks[i]
          return (
            <Fragment key={i}>
              {part}
              {blank &&
                (blank.wordBank ? (
                  <button
                    type="button"
                    disabled={checked}
                    onClick={() => {
                      setActive(i)
                      if (values[i]) setValue(i, '')
                    }}
                    aria-label={
                      values[i]
                        ? `Chỗ trống ${i + 1}: ${values[i]}. Chạm để xoá.`
                        : `Chỗ trống ${i + 1}`
                    }
                    className={cn(
                      'mx-1 inline-flex min-w-16 items-center justify-center gap-1 rounded-lg border-b-4 px-2 align-baseline font-extrabold',
                      !checked &&
                        (i === active ? 'border-brand bg-brand-soft' : 'border-line bg-canvas'),
                      checked && (isOk(i) ? 'border-good bg-good-soft' : 'border-bad bg-bad-soft'),
                    )}
                  >
                    {values[i] || ' '}
                    {checked && <Mark ok={isOk(i)} />}
                  </button>
                ) : (
                  <input
                    type="text"
                    value={values[i] ?? ''}
                    disabled={checked}
                    onChange={(e) => setValue(i, e.target.value)}
                    onFocus={() => setActive(i)}
                    aria-label={`Chỗ trống ${i + 1}`}
                    data-blank={i}
                    autoCapitalize="none"
                    autoComplete="off"
                    className={cn(
                      'mx-1 inline-block w-24 rounded-lg border-b-4 bg-canvas px-2 text-center font-extrabold outline-none',
                      !checked && 'border-line focus-visible:border-brand',
                      checked && (isOk(i) ? 'border-good bg-good-soft' : 'border-bad bg-bad-soft'),
                    )}
                  />
                ))}
            </Fragment>
          )
        })}
      </p>

      {bank && !checked && (
        <ul className="flex flex-wrap justify-center gap-3" aria-label="Các từ để chọn">
          {bank.map((word) => (
            <li key={word}>
              <button
                type="button"
                data-word={word}
                onClick={() => {
                  setValue(active, word)
                  const nextEmpty = values.findIndex((v, i) => i !== active && !v)
                  if (nextEmpty >= 0) setActive(nextEmpty)
                }}
                className={choiceClass(values[active] === word ? 'selected' : 'idle', 'px-5')}
              >
                {word}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
