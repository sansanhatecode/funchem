import type { BadgeDef } from '@funchem/core'
import { cn } from '@/lib/cn'
import {
  AtomIcon,
  FireIcon,
  LightningIcon,
  LockIcon,
  MedalIcon,
  RocketLaunchIcon,
  TargetIcon,
} from './icons'

const STYLE: Record<BadgeDef['kind'], { Icon: typeof FireIcon; bg: string; ring: string }> = {
  start: { Icon: RocketLaunchIcon, bg: '#12b886', ring: '#0b8f68' },
  perfect: { Icon: TargetIcon, bg: '#F25F5C', ring: '#D03F3C' },
  unit: { Icon: MedalIcon, bg: '#1CB0F6', ring: '#1490CC' },
  streak: { Icon: FireIcon, bg: '#FF7A45', ring: '#E0602C' },
  collector: { Icon: AtomIcon, bg: '#9B7EDE', ring: '#7C5FC4' },
  xp: { Icon: LightningIcon, bg: '#FFC233', ring: '#E0A100' },
}

/** Một huy hiệu dạng huy chương. Chưa đạt thì xám và có ổ khoá. */
export function BadgeMedal({
  badge,
  earned,
  size = 64,
  className,
}: {
  badge: Pick<BadgeDef, 'kind' | 'title'>
  earned: boolean
  size?: number
  className?: string
}) {
  const st = STYLE[badge.kind]
  const Icon = earned ? st.Icon : LockIcon
  return (
    <span
      className={cn('grid shrink-0 place-items-center rounded-full text-white', className)}
      style={{
        width: size,
        height: size,
        backgroundColor: earned ? st.bg : 'var(--color-line)',
        boxShadow: `0 ${Math.round(size / 14)}px 0 ${earned ? st.ring : '#cfd6df'}`,
        color: earned ? '#fff' : 'var(--color-ink-soft)',
      }}
      aria-hidden="true"
    >
      <Icon weight="fill" size={Math.round(size * 0.5)} />
    </span>
  )
}
