import { ELEMENTS, type ElementSymbol } from '@funchem/content'
import { cn } from '@/lib/cn'
import { AtomShape } from './shapes'

/** Nguyên tử bấm được, dùng trong bài ghép phân tử. */
export function AtomChip({
  element,
  onClick,
  disabled,
  label,
  size = 56,
  testId,
}: {
  element: ElementSymbol
  onClick?: () => void
  disabled?: boolean
  label: string
  size?: number
  /** thuộc tính nhận diện cho test */
  testId?: string
}) {
  const r = 20 * Math.min(1.25, ELEMENTS[element].radius * 0.85)
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      data-testid={testId}
      className={cn(
        'grid place-items-center rounded-full transition-transform duration-100',
        'hover:scale-110 active:scale-95 disabled:pointer-events-none',
      )}
      style={{ width: size, height: size }}
    >
      <svg viewBox="-28 -28 56 56" width={size} height={size} aria-hidden="true">
        <AtomShape element={element} r={r} />
      </svg>
    </button>
  )
}
