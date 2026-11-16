import type { ReactNode } from 'react'

export function StatPill({
  icon,
  value,
  label,
}: {
  icon: ReactNode
  value: ReactNode
  label: string
}) {
  return (
    <div className="flex items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-1.5 text-sm font-extrabold">
      <span aria-hidden="true" className="flex">
        {icon}
      </span>
      <span>{value}</span>
      <span className="sr-only">{label}</span>
    </div>
  )
}
