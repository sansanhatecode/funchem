import { notFound } from 'next/navigation'
import { Mascot, type MascotMood } from '@/components/mascot'

const MOODS: MascotMood[] = ['happy', 'wave', 'cheer', 'oops', 'think']

export default function DevMascotPage() {
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_ENABLE_DEV_PAGES !== '1')
    notFound()
  return (
    <main className="mx-auto flex max-w-3xl flex-wrap items-end gap-8 p-8" data-mascots>
      {MOODS.map((m) => (
        <figure key={m} className="flex flex-col items-center gap-2">
          <Mascot mood={m} size={120} />
          <figcaption className="text-sm font-bold text-ink-soft">{m}</figcaption>
        </figure>
      ))}
      <Mascot mood="happy" size={40} />
    </main>
  )
}
