import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export function Card({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-(--radius-card) border border-line bg-paper p-5 shadow-(--shadow-card)',
        className,
      )}
      {...rest}
    />
  )
}
