import { content, SCENE_IDS, type SceneId } from '@funchem/content'
import { notFound } from 'next/navigation'
import { ParticleView } from '@/components/chem/particle-view'
import { SCENES, SceneView } from '@/components/scenes'
import { ZoomScene } from '@/components/scenes/zoom-scene'

/** Trang xem trước mọi cảnh minh hoạ. Chỉ có ở môi trường phát triển. `?only=<id>` để xem một cảnh cỡ lớn. */
export default async function DevScenesPage({
  searchParams,
}: {
  searchParams: Promise<{ only?: string }>
}) {
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_ENABLE_DEV_PAGES !== '1')
    notFound()
  const { only } = await searchParams
  const ids = SCENE_IDS.filter((id) => !only || id === only)
  const moleculeFor = (id: SceneId) =>
    [...content.molecules.values()].find((m) => m.lifeExamples.some((e) => e.illustration === id))

  return (
    <main className={only ? 'mx-auto max-w-3xl p-4' : 'mx-auto max-w-5xl p-5'}>
      {!only && <h1 className="mb-4 text-2xl font-extrabold">Cảnh minh hoạ ({ids.length})</h1>}
      <div className={only ? 'flex flex-col gap-4' : 'grid gap-5 sm:grid-cols-2'}>
        {ids.map((id) => {
          const m = moleculeFor(id)
          return (
            <section key={id} data-scene={id}>
              {!only && (
                <h2 className="mb-1 text-sm font-bold text-ink-soft">
                  {id} · {SCENES[id].label}
                </h2>
              )}
              {m ? (
                <ZoomScene scene={id}>
                  <ParticleView molecule={m} />
                </ZoomScene>
              ) : (
                <SceneView id={id} className="rounded-2xl border border-line" />
              )}
              {only && (
                <div className="mt-4 flex gap-3">
                  <SceneView
                    id={id}
                    still
                    decorative
                    className="w-24 rounded-xl border border-line"
                  />
                  <SceneView
                    id={id}
                    still
                    decorative
                    className="w-40 rounded-xl border border-line"
                  />
                </div>
              )}
            </section>
          )
        })}
      </div>
    </main>
  )
}
