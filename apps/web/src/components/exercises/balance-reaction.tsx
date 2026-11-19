'use client'

import {
  elementLabel,
  ELEMENTS,
  type ElementSymbol,
  formatFormula,
  type ReactionSide,
  sideAtomCounts,
} from '@funchem/content/lib'
import { Fragment, useEffect } from 'react'
import { MoleculeView } from '@/components/chem/molecule-view'
import { cn } from '@/lib/cn'
import type { ExerciseProps } from './shared'
import { useContent } from '@/lib/content-context'

export function BalanceReactionExercise({
  exercise,
  value,
  onChange,
  checked,
}: ExerciseProps<'balance-reaction'>) {
  const content = useContent()
  const rx = content.reactions.get(exercise.reactionId)

  // Hệ số ban đầu đều là 1; phát ra ngay vì có phản ứng vốn đã cân bằng với hệ số 1
  useEffect(() => {
    if (!value && rx) {
      onChange({
        type: 'balance-reaction',
        reactants: rx.reactants.map(() => 1),
        products: rx.products.map(() => 1),
      })
    }
  }, [value, rx, onChange])

  if (!rx) return null
  const reactants = value?.reactants ?? rx.reactants.map(() => 1)
  const products = value?.products ?? rx.products.map(() => 1)

  const set = (side: 'reactants' | 'products', i: number, delta: number) => {
    const next = { reactants: [...reactants], products: [...products] }
    next[side][i] = Math.min(exercise.maxCoefficient, Math.max(1, next[side][i]! + delta))
    onChange({ type: 'balance-reaction', ...next })
  }

  const left = sideAtomCounts(rx.reactants, content.molecules, reactants)
  const right = sideAtomCounts(rx.products, content.molecules, products)
  const elements = (
    [...new Set([...Object.keys(left), ...Object.keys(right)])] as ElementSymbol[]
  ).sort((a, b) => ELEMENTS[a].number - ELEMENTS[b].number)

  const renderSide = (sides: ReactionSide[], coeffs: number[], side: 'reactants' | 'products') => (
    <div className="flex flex-wrap items-stretch justify-center gap-2">
      {sides.map((s, i) => {
        const m = content.molecules.get(s.moleculeId)
        if (!m) return null
        const k = coeffs[i]!
        return (
          <Fragment key={`${s.moleculeId}-${i}`}>
            {i > 0 && <span className="self-center text-xl font-extrabold text-ink-soft">+</span>}
            <div className="flex min-w-28 flex-1 flex-col items-center gap-2 rounded-2xl border-2 border-line bg-paper p-3">
              <div
                className="flex min-h-14 flex-wrap items-center justify-center"
                aria-hidden="true"
              >
                {Array.from({ length: k }, (_, n) => (
                  <MoleculeView
                    key={n}
                    molecule={m}
                    size={k > 4 ? 30 : k > 2 ? 40 : 56}
                    decorative
                  />
                ))}
              </div>
              <p className="font-bold">
                <span className="text-brand-deep">{k > 1 ? k : ''}</span>
                {formatFormula(m.formula)}
              </p>
              <div className="flex items-center gap-2">
                <StepButton
                  testId={`coef-dec-${side}-${i}`}
                  label={`Giảm hệ số của ${m.name}, hiện là ${k}`}
                  disabled={checked || k <= 1}
                  onClick={() => set(side, i, -1)}
                >
                  −
                </StepButton>
                <span className="w-6 text-center text-lg font-extrabold" aria-hidden="true">
                  {k}
                </span>
                <StepButton
                  testId={`coef-inc-${side}-${i}`}
                  label={`Tăng hệ số của ${m.name}, hiện là ${k}`}
                  disabled={checked || k >= exercise.maxCoefficient}
                  onClick={() => set(side, i, +1)}
                >
                  +
                </StepButton>
              </div>
            </div>
          </Fragment>
        )
      })}
    </div>
  )

  return (
    <div className="flex flex-col gap-3">
      {renderSide(rx.reactants, reactants, 'reactants')}
      <p className="text-center text-2xl font-extrabold text-ink-soft" aria-label="tạo thành">
        ↓
      </p>
      {renderSide(rx.products, products, 'products')}

      <table className="mt-2 w-full overflow-hidden rounded-2xl border border-line bg-paper text-center text-sm">
        <caption className="sr-only">Số nguyên tử mỗi nguyên tố ở hai vế</caption>
        <thead className="bg-canvas text-xs text-ink-soft">
          <tr>
            <th scope="col" className="p-2 text-left font-bold">
              Nguyên tố
            </th>
            <th scope="col" className="p-2 font-bold">
              Trước
            </th>
            <th scope="col" className="p-2 font-bold">
              <span className="sr-only">So sánh</span>
            </th>
            <th scope="col" className="p-2 font-bold">
              Sau
            </th>
          </tr>
        </thead>
        <tbody>
          {elements.map((el) => {
            const l = left[el] ?? 0
            const r = right[el] ?? 0
            const ok = l === r
            return (
              <tr key={el} className="border-t border-line">
                <th scope="row" className="p-2 text-left font-bold">
                  <span
                    aria-hidden="true"
                    className="mr-2 inline-block size-3 rounded-full border border-ink/20 align-middle"
                    style={{ backgroundColor: ELEMENTS[el].color }}
                  />
                  {elementLabel(el)}
                </th>
                <td className="p-2 text-lg font-extrabold">{l}</td>
                <td
                  className={cn(
                    'p-2 text-lg font-extrabold',
                    ok ? 'text-good-ink' : 'text-bad-ink',
                  )}
                >
                  <span aria-hidden="true">{ok ? '=' : '≠'}</span>
                  <span className="sr-only">{ok ? 'bằng' : 'khác'}</span>
                </td>
                <td className="p-2 text-lg font-extrabold">{r}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function StepButton({
  children,
  label,
  testId,
  ...rest
}: {
  children: string
  label: string
  testId: string
  disabled: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-label={label}
      data-testid={testId}
      className="grid size-10 place-items-center rounded-full border-2 border-line bg-paper text-xl font-extrabold shadow-[0_2px_0_var(--color-line)] active:translate-y-[2px] active:shadow-none disabled:opacity-40 disabled:pointer-events-none"
      {...rest}
    >
      {children}
    </button>
  )
}
