import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-2xl font-bold tracking-wide select-none ' +
  'transition-[transform,box-shadow,background-color] duration-100 ' +
  'disabled:opacity-50 disabled:pointer-events-none'

// Nút kiểu "phím bấm": viền dưới dày, nhấn xuống thì lún
const variants: Record<Variant, string> = {
  primary:
    'bg-brand text-white shadow-[0_4px_0_var(--color-brand-deep)] hover:brightness-105 ' +
    'active:translate-y-[4px] active:shadow-none',
  secondary:
    'bg-paper text-ink border-2 border-line shadow-[0_4px_0_var(--color-line)] hover:bg-canvas ' +
    'active:translate-y-[4px] active:shadow-none',
  ghost: 'text-brand-deep hover:bg-brand-soft',
}

const sizes: Record<Size, string> = {
  md: 'min-h-12 px-5 text-sm',
  lg: 'min-h-14 px-7 text-base',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  className,
  children,
  disabled,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(base, variants[variant], sizes[size], className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? 'Đang xử lý…' : children}
    </button>
  )
}

/** Cùng kiểu dáng với Button, dùng cho thẻ <a> / <Link>. */
export function buttonClass(variant: Variant = 'primary', size: Size = 'md', className?: string) {
  return cn(base, variants[variant], sizes[size], className)
}
