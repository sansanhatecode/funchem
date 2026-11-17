'use client'

import { formatFormula, type Molecule, moleculeLabel } from '@funchem/content/lib'
import { useRef, useState } from 'react'
import { MoleculeView } from '@/components/chem/molecule-view'
import { MoleculeZoom } from '@/components/chem/molecule-zoom'
import { AppShell } from '@/components/learn/app-shell'
import { SceneView } from '@/components/scenes'
import { Button } from '@/components/ui/button'
import { LockIcon } from '@/components/ui/icons'
import { cn } from '@/lib/cn'
import { useProgress } from '@/lib/use-progress'

const STATE_LABEL: Record<Molecule['state'], string> = {
  solid: 'Thể rắn',
  liquid: 'Thể lỏng',
  gas: 'Thể khí',
}

const sceneOf = (m: Molecule) => m.lifeExamples.find((e) => e.illustration)?.illustration

export function MoleculeGallery({ molecules: all }: { molecules: Molecule[] }) {
  const { progress: p, isLoading } = useProgress()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState<Molecule | null>(null)
  const unlocked = new Set(p?.molecules ?? [])

  const show = (m: Molecule) => {
    setOpen(m)
    dialogRef.current?.showModal()
  }

  return (
    <AppShell stats={p ? { streak: p.stats.streak, xpTotal: p.stats.xpTotal } : undefined}>
      <main>
        <h1 className="mt-2 text-2xl font-extrabold">Bộ sưu tập phân tử</h1>
        <p className="mt-1 text-ink-soft" aria-busy={isLoading}>
          {isLoading
            ? 'Đang tải…'
            : `Bạn đã mở ${unlocked.size} trên ${all.length} phân tử. Học thêm bài để mở phần còn lại.`}
        </p>

        <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {all.map((m) => {
            const has = unlocked.has(m.id)
            const scene = sceneOf(m)
            const card = (
              <div
                className={cn(
                  'overflow-hidden rounded-(--radius-card) border border-line bg-paper text-left shadow-(--shadow-card)',
                  has && 'transition-transform duration-100 hover:-translate-y-0.5',
                )}
              >
                <div
                  className={cn('relative', !has && 'opacity-60 blur-[3px] grayscale')}
                  aria-hidden="true"
                >
                  {scene && <SceneView id={scene} still decorative />}
                  <div className="absolute -bottom-5 right-2 rounded-full border-4 border-paper bg-paper shadow-(--shadow-card)">
                    <MoleculeView molecule={m} size={52} decorative />
                  </div>
                </div>
                <div className="p-3 pt-4">
                  {has ? (
                    <>
                      <p className="font-extrabold">{moleculeLabel(m)}</p>
                      <p className="text-sm text-ink-soft">{formatFormula(m.formula)}</p>
                    </>
                  ) : (
                    <>
                      <p className="flex items-center gap-1.5 font-extrabold text-ink-soft">
                        <LockIcon weight="fill" size={16} aria-hidden="true" />
                        Chưa mở khoá
                      </p>
                      <p className="text-sm text-ink-soft">???</p>
                    </>
                  )}
                </div>
              </div>
            )
            return (
              <li key={m.id}>
                {has ? (
                  <button
                    type="button"
                    onClick={() => show(m)}
                    className="block w-full rounded-(--radius-card)"
                    aria-haspopup="dialog"
                  >
                    {card}
                  </button>
                ) : (
                  card
                )}
              </li>
            )
          })}
        </ul>
      </main>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(null)}
        onClick={(e) => {
          // chạm ra ngoài hộp thoại để đóng
          if (e.target === e.currentTarget) e.currentTarget.close()
        }}
        aria-labelledby="molecule-title"
        className={cn(
          'm-auto max-h-[92dvh] w-[min(94vw,30rem)] overflow-y-auto rounded-(--radius-card) border border-line bg-paper p-0 text-ink shadow-(--shadow-card)',
          'backdrop:bg-ink/40',
        )}
      >
        {open && (
          <div className="flex flex-col gap-4 p-5">
            <div>
              <h2 id="molecule-title" className="text-2xl font-extrabold">
                {moleculeLabel(open)}{' '}
                <span className="font-bold text-ink-soft">{formatFormula(open.formula)}</span>
              </h2>
              <p className="text-sm text-ink-soft">{STATE_LABEL[open.state]} ở nhiệt độ phòng.</p>
            </div>

            {sceneOf(open) ? (
              <MoleculeZoom key={open.id} molecule={open} scene={sceneOf(open)!} />
            ) : (
              <div className="flex justify-center rounded-2xl bg-canvas py-4">
                <MoleculeView molecule={open} size={200} animated />
              </div>
            )}

            <div>
              <p className="font-extrabold">Bạn gặp nó ở đâu?</p>
              <ul className="mt-2 flex flex-col gap-2">
                {open.lifeExamples.map((ex) => (
                  <li
                    key={ex.title}
                    className="flex items-center gap-3 rounded-2xl bg-brand-soft p-3"
                  >
                    {ex.illustration && (
                      <SceneView
                        id={ex.illustration}
                        still
                        decorative
                        className="w-20 shrink-0 rounded-xl"
                      />
                    )}
                    <div>
                      <p className="font-bold">{ex.title}</p>
                      <p className="text-sm text-ink-soft">{ex.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {open.funFact && (
              <p className="rounded-2xl border border-sun bg-[#fff8e1] p-3 text-sm">
                <span className="font-bold">Bạn có biết? </span>
                {open.funFact}
              </p>
            )}

            <Button variant="secondary" onClick={() => dialogRef.current?.close()}>
              Đóng
            </Button>
          </div>
        )}
      </dialog>
    </AppShell>
  )
}
