import { cn } from '@/lib/cn'

export interface ProgressBarProps {
  /** 0..1 */
  value: number
  label: string
  color?: string
  className?: string
}

export function ProgressBar({ value, label, color, className }: ProgressBarProps) {
  const pct = Math.round(Math.min(1, Math.max(0, value)) * 100)
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
      className={cn('h-3 w-full overflow-hidden rounded-full bg-line', className)}
    >
      <div
        className="h-full rounded-full transition-[width] duration-500 ease-out"
        style={{ width: `${pct}%`, backgroundColor: color ?? 'var(--color-brand)' }}
      />
    </div>
  )
}
