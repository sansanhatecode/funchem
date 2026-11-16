'use client'

import { useMemo, useState } from 'react'
import { cn } from '@/lib/cn'
import { seededShuffle } from '@/lib/shuffle'
import { type ExerciseProps, ItemContent, Mark } from './shared'

// Mỗi cặp có màu và số riêng; số để không phụ thuộc vào màu
const PAIR_COLORS = ['#dbeafe', '#fef3c7', '#fce7f3', '#dcfce7', '#ede9fe', '#ffedd5']

export function MatchPairsExercise({
  exercise,
  value,
  onChange,
  checked,
}: ExerciseProps<'match-pairs'>) {
  const [activeLeft, setActiveLeft] = useState<string | null>(null)
  const rights = useMemo(
    () =>
      seededShuffle(
        exercise.pairs.map((p) => p.right),
        exercise.id,
      ),
    [exercise],
  )
  const pairs = value?.pairs ?? []
  const leftToRight = new Map(pairs.map((p) => [p.leftId, p.rightId]))
  const rightToLeft = new Map(pairs.map((p) => [p.rightId, p.leftId]))
  const expected = new Map(exercise.pairs.map((p) => [p.left.id, p.right.id]))
  const pairIndex = (leftId: string | undefined) =>
    leftId ? pairs.findIndex((p) => p.leftId === leftId) : -1

  const emit = (next: typeof pairs) => onChange({ type: 'match-pairs', pairs: next })

  function tapLeft(id: string) {
    if (leftToRight.has(id)) {
      emit(pairs.filter((p) => p.leftId !== id))
      setActiveLeft(id)
    } else {
      setActiveLeft(activeLeft === id ? null : id)
    }
  }

  function tapRight(id: string) {
    if (activeLeft) {
      emit([
        ...pairs.filter((p) => p.leftId !== activeLeft && p.rightId !== id),
        { leftId: activeLeft, rightId: id },
      ])
      setActiveLeft(null)
    } else if (rightToLeft.has(id)) {
      emit(pairs.filter((p) => p.rightId !== id))
    }
  }

  const cell = (opts: { paired: number; active: boolean; ok: boolean | null }) =>
    cn(
      'flex min-h-14 w-full items-center justify-between gap-2 rounded-2xl border-2 px-3 py-2 text-left font-bold',
      'transition-[transform,border-color] duration-100 active:translate-y-[2px] disabled:pointer-events-none',
      opts.active ? 'border-brand ring-2 ring-brand/30' : 'border-line',
      opts.ok === true && 'border-good',
      opts.ok === false && 'border-bad',
    )

  return (
    <div>
      <p className="mb-3 text-sm text-ink-soft">
        Chạm một ô bên trái, rồi chạm ô tương ứng bên phải.
      </p>
      <div className="grid grid-cols-2 gap-3">
        <ul className="flex flex-col gap-3" aria-label="Cột trái">
          {exercise.pairs.map(({ left }) => {
            const idx = pairIndex(left.id)
            const ok = checked ? leftToRight.get(left.id) === expected.get(left.id) : null
            return (
              <li key={left.id}>
                <button
                  type="button"
                  disabled={checked}
                  data-left-id={left.id}
                  aria-pressed={activeLeft === left.id}
                  onClick={() => tapLeft(left.id)}
                  className={cell({ paired: idx, active: activeLeft === left.id, ok })}
                  style={{
                    backgroundColor:
                      idx >= 0 ? PAIR_COLORS[idx % PAIR_COLORS.length] : 'var(--color-paper)',
                  }}
                >
                  <ItemContent item={left} moleculeSize={64} />
                  {ok !== null ? <Mark ok={ok} /> : idx >= 0 && <PairBadge n={idx + 1} />}
                </button>
              </li>
            )
          })}
        </ul>
        <ul className="flex flex-col gap-3" aria-label="Cột phải">
          {rights.map((right) => {
            const idx = pairIndex(rightToLeft.get(right.id))
            return (
              <li key={right.id}>
                <button
                  type="button"
                  disabled={checked}
                  data-right-id={right.id}
                  onClick={() => tapRight(right.id)}
                  className={cell({ paired: idx, active: false, ok: null })}
                  style={{
                    backgroundColor:
                      idx >= 0 ? PAIR_COLORS[idx % PAIR_COLORS.length] : 'var(--color-paper)',
                  }}
                >
                  <ItemContent item={right} moleculeSize={64} />
                  {idx >= 0 && <PairBadge n={idx + 1} />}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

function PairBadge({ n }: { n: number }) {
  return (
    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-ink text-xs font-extrabold text-white">
      <span className="sr-only">cặp </span>
      {n}
    </span>
  )
}
