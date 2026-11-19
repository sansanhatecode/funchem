'use client'

import { useMemo, useState } from 'react'
import { cn } from '@/lib/cn'
import { seededShuffle } from '@/lib/shuffle'
import { type ExerciseProps, ItemContent, Mark } from './shared'

export function SortExercise({ exercise, value, onChange, checked }: ExerciseProps<'sort'>) {
  const [selected, setSelected] = useState<string | null>(null)
  const items = useMemo(() => seededShuffle(exercise.items, exercise.id), [exercise])
  const assignments = value?.assignments ?? {}
  const tray = items.filter((i) => !assignments[i.id])

  const assign = (itemId: string, groupId: string | null) => {
    const next = { ...assignments }
    if (groupId) next[itemId] = groupId
    else delete next[itemId]
    onChange({ type: 'sort', assignments: next })
  }

  const chip = (extra?: string) =>
    cn(
      'rounded-xl border-2 bg-paper px-3 py-2 text-sm font-bold transition-transform duration-100',
      'active:translate-y-[2px] disabled:pointer-events-none',
      extra,
    )

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-ink-soft">
        Chạm một thẻ, rồi chạm vào nhóm của nó. Chạm thẻ trong nhóm để lấy ra.
      </p>

      <ul className="flex min-h-14 flex-wrap justify-center gap-2" aria-label="Thẻ chưa xếp">
        {tray.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              disabled={checked}
              data-item-id={item.id}
              aria-pressed={selected === item.id}
              onClick={() => setSelected(selected === item.id ? null : item.id)}
              className={chip(
                selected === item.id
                  ? 'border-brand bg-brand-soft ring-2 ring-brand/30'
                  : 'border-line',
              )}
            >
              <ItemContent item={item} moleculeSize={68} />
            </button>
          </li>
        ))}
        {tray.length === 0 && !checked && (
          <li className="self-center text-sm text-ink-soft">Đã xếp hết.</li>
        )}
      </ul>

      <div
        className={cn('grid gap-3', exercise.groups.length === 3 ? 'grid-cols-3' : 'grid-cols-2')}
      >
        {exercise.groups.map((g) => {
          const inGroup = items.filter((i) => assignments[i.id] === g.id)
          return (
            <div
              key={g.id}
              className={cn(
                'flex min-h-36 flex-col rounded-2xl border-2 border-dashed p-2',
                selected ? 'border-brand bg-brand-soft/40' : 'border-line bg-canvas',
              )}
            >
              <button
                type="button"
                data-group-id={g.id}
                disabled={checked || !selected}
                onClick={() => {
                  if (selected) {
                    assign(selected, g.id)
                    setSelected(null)
                  }
                }}
                className="rounded-xl px-2 py-1.5 text-center text-sm font-extrabold enabled:bg-brand enabled:text-ink"
                aria-label={selected ? `Xếp thẻ đang chọn vào nhóm ${g.label}` : `Nhóm ${g.label}`}
              >
                {g.label}
              </button>
              <ul
                className="mt-2 flex flex-1 flex-wrap content-start justify-center gap-2"
                aria-label={`Thẻ trong nhóm ${g.label}`}
              >
                {inGroup.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      disabled={checked}
                      onClick={() => assign(item.id, null)}
                      aria-label={`Lấy thẻ ra khỏi nhóm ${g.label}`}
                      className={chip(
                        cn(
                          'flex items-center gap-1.5',
                          !checked && 'border-line',
                          checked &&
                            (item.groupId === g.id
                              ? 'border-good bg-good-soft'
                              : 'border-bad bg-bad-soft'),
                        ),
                      )}
                    >
                      <ItemContent item={item} moleculeSize={60} />
                      {checked && <Mark ok={item.groupId === g.id} />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
