import { badgeCatalog } from '@funchem/core'
import type { ReactNode } from 'react'
import { BadgeMedal } from '@/components/ui/badge-medal'
import { Card } from '@/components/ui/card'
import { FireIcon } from '@/components/ui/icons'
import { cn } from '@/lib/cn'

export function Stat({ label, value, tone }: { label: string; value: ReactNode; tone?: 'sun' }) {
  return (
    <div
      className={cn(
        'rounded-2xl border-2 p-3',
        tone === 'sun' ? 'border-sun bg-[#fff8e1]' : 'border-line bg-paper',
      )}
    >
      <dt className="text-xs font-bold tracking-wide text-ink-soft uppercase">{label}</dt>
      <dd className="mt-1 text-xl font-extrabold">{value}</dd>
    </div>
  )
}

export function StreakValue({ days }: { days: number }) {
  return (
    <span className="inline-flex items-center gap-1">
      <FireIcon weight="fill" size={22} className="text-flame" aria-hidden="true" />
      {days}
    </span>
  )
}

/** Huy hiệu vừa nhận ở lượt này. */
export function NewBadges({ ids, unitCount }: { ids: string[]; unitCount: number }) {
  if (ids.length === 0) return null
  const catalog = new Map(badgeCatalog(unitCount).map((b) => [b.id, b]))
  const badges = ids
    .map((id) => catalog.get(id))
    .filter((b): b is NonNullable<typeof b> => Boolean(b))
  if (badges.length === 0) return null
  return (
    <Card className="w-full border-sun bg-[#fff8e1]">
      <p className="font-extrabold">Huy hiệu mới</p>
      <ul className="mt-3 flex flex-col gap-3">
        {badges.map((b, i) => (
          <li
            key={b.id}
            className="flex items-center gap-3 text-left"
            style={{ animation: `pop-in 500ms ease-out ${200 + i * 150}ms backwards` }}
          >
            <BadgeMedal badge={b} earned size={52} />
            <div>
              <p className="font-extrabold">{b.title}</p>
              <p className="text-sm text-ink-soft">{b.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}
