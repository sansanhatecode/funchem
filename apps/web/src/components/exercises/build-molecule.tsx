'use client'

import {
  elementLabel,
  ELEMENTS,
  type ElementCounts,
  type ElementSymbol,
} from '@funchem/content/lib'
import { AtomChip } from '@/components/chem/atom-chip'
import { MoleculeView } from '@/components/chem/molecule-view'
import { cn } from '@/lib/cn'
import type { ExerciseProps } from './shared'
import { useContent } from '@/lib/content-context'

export function BuildMoleculeExercise({
  exercise,
  value,
  onChange,
  checked,
}: ExerciseProps<'build-molecule'>) {
  const placed: ElementCounts = value?.atoms ?? {}
  const elements = Object.keys(exercise.availableAtoms) as ElementSymbol[]
  const content = useContent()
  const target = content.molecules.get(exercise.targetMoleculeId)

  const change = (el: ElementSymbol, delta: number) => {
    const next = { ...placed, [el]: Math.max(0, (placed[el] ?? 0) + delta) }
    onChange({ type: 'build-molecule', atoms: next })
  }

  const placedList = elements.flatMap((el) =>
    Array.from({ length: placed[el] ?? 0 }, (_, i) => ({ el, i })),
  )
  const summary = elements
    .filter((el) => (placed[el] ?? 0) > 0)
    .map((el) => `${placed[el]} ${ELEMENTS[el].name}`)
    .join(' + ')

  return (
    <div className="flex flex-col gap-4">
      <div
        className={cn(
          'flex min-h-40 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed p-4',
          checked ? 'border-line bg-canvas' : 'border-brand/50 bg-brand-soft/40',
        )}
        aria-label="Bàn ghép"
      >
        {checked && target ? (
          <>
            <MoleculeView molecule={target} size={150} animated showLabel />
          </>
        ) : placedList.length === 0 ? (
          <p className="text-sm text-ink-soft">Chạm vào nguyên tử bên dưới để đưa lên bàn ghép</p>
        ) : (
          <>
            <ul className="flex flex-wrap justify-center gap-1">
              {placedList.map(({ el, i }) => (
                <li key={`${el}-${i}`}>
                  <AtomChip
                    element={el}
                    onClick={() => change(el, -1)}
                    label={`Bỏ một nguyên tử ${ELEMENTS[el].name}`}
                    testId={`remove-atom-${el}`}
                  />
                </li>
              ))}
            </ul>
            <p className="text-sm font-bold text-ink-soft" aria-live="polite">
              {summary}
            </p>
          </>
        )}
      </div>

      {!checked && (
        <div>
          <p className="mb-2 text-sm font-bold text-ink-soft">Nguyên tử có sẵn</p>
          <ul className="flex flex-wrap gap-4">
            {elements.map((el) => {
              const left = (exercise.availableAtoms[el] ?? 0) - (placed[el] ?? 0)
              return (
                <li key={el} className="flex flex-col items-center gap-1">
                  <AtomChip
                    element={el}
                    disabled={left <= 0}
                    onClick={() => change(el, +1)}
                    label={`Thêm một nguyên tử ${ELEMENTS[el].name}, còn ${left}`}
                    testId={`add-atom-${el}`}
                  />
                  <span
                    className={cn('text-xs font-bold', left <= 0 ? 'text-line' : 'text-ink-soft')}
                  >
                    {elementLabel(el)} × {left}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
