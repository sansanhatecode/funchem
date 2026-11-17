'use client'

import type { Answer, ContentItem, Exercise } from '@funchem/content/lib'
import { MoleculeView } from '@/components/chem/molecule-view'
import { SceneView } from '@/components/scenes'
import { CheckIcon, XIcon } from '@/components/ui/icons'
import { cn } from '@/lib/cn'
import { useContent } from '@/lib/content-context'

export type ExerciseOf<T extends Exercise['type']> = Extract<Exercise, { type: T }>
export type AnswerOf<T extends Answer['type']> = Extract<Answer, { type: T }>

export interface ExerciseProps<T extends Exercise['type']> {
  exercise: ExerciseOf<T>
  value: AnswerOf<T> | null
  onChange: (answer: AnswerOf<T>) => void
  /** đã bấm "Kiểm tra": khoá tương tác và tô đúng/sai */
  checked: boolean
}

export type ChoiceState = 'idle' | 'selected' | 'correct' | 'wrong'

/** Kiểu dáng chung cho mọi ô chọn: thẻ bấm được với viền dưới dày. */
export function choiceClass(state: ChoiceState, extra?: string) {
  return cn(
    'rounded-2xl border-2 bg-paper px-4 py-3 text-left font-bold transition-[transform,background-color,border-color] duration-100',
    'shadow-[0_3px_0_var(--color-line)] active:translate-y-[3px] active:shadow-none',
    'disabled:pointer-events-none',
    state === 'idle' && 'border-line hover:bg-canvas',
    state === 'selected' && 'border-brand bg-brand-soft shadow-[0_3px_0_var(--color-brand)]',
    state === 'correct' && 'border-good bg-good-soft shadow-[0_3px_0_var(--color-good)]',
    state === 'wrong' && 'border-bad bg-bad-soft shadow-[0_3px_0_var(--color-bad)]',
    extra,
  )
}

/** Hiển thị một ContentItem: cảnh đời sống hoặc phân tử (nếu có), kèm chữ. */
export function ItemContent({
  item,
  moleculeSize = 88,
}: {
  item: ContentItem
  moleculeSize?: number
}) {
  const content = useContent()
  const molecule = item.moleculeId ? content.molecules.get(item.moleculeId) : undefined
  return (
    <span className="flex flex-col items-center gap-1.5 text-center">
      {item.image && (
        <span
          className="block overflow-hidden rounded-xl"
          style={{ width: Math.round(moleculeSize * 1.5) }}
        >
          <SceneView id={item.image} still decorative={Boolean(item.text)} />
        </span>
      )}
      {molecule && (
        <MoleculeView molecule={molecule} size={moleculeSize} decorative={Boolean(item.text)} />
      )}
      {item.text && <span>{item.text}</span>}
    </span>
  )
}

/** Hình minh hoạ đi kèm câu hỏi. */
export function ExerciseVisual({ item }: { item: ContentItem }) {
  if (item.image && !item.moleculeId) {
    return (
      <div className="mb-4 overflow-hidden rounded-2xl border border-line">
        <SceneView id={item.image} decorative={Boolean(item.text)} />
        {item.text && <p className="bg-paper p-2 text-center text-sm font-bold">{item.text}</p>}
      </div>
    )
  }
  return (
    <div className="mb-4 flex justify-center rounded-2xl border border-line bg-canvas p-3">
      <ItemContent item={item} moleculeSize={150} />
    </div>
  )
}

/** Dấu đúng / sai nhỏ, có nhãn cho trình đọc màn hình. */
export function Mark({ ok }: { ok: boolean }) {
  return (
    <span
      className={cn(
        'inline-grid size-5 shrink-0 place-items-center rounded-full text-white',
        ok ? 'bg-good' : 'bg-bad',
      )}
    >
      {ok ? <CheckIcon weight="bold" size={12} /> : <XIcon weight="bold" size={12} />}
      <span className="sr-only">{ok ? 'đúng' : 'sai'}</span>
    </span>
  )
}
