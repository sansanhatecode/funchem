import { content } from '@funchem/content'
import { notFound } from 'next/navigation'
import { AtomZoom, PeriodicTableZoom, StatesLab } from '@/components/chem/intro-visuals'
import { MoleculeView } from '@/components/chem/molecule-view'
import { ParticleView } from '@/components/chem/particle-view'
import { PhScaleLab } from '@/components/chem/ph-scale'

/** Trang xem trước các hình mở đầu đặc biệt. Chỉ có ở môi trường phát triển. */
export default function DevVisualsPage() {
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_ENABLE_DEV_PAGES !== '1')
    notFound()
  return (
    <main className="mx-auto grid max-w-5xl gap-8 p-5 sm:grid-cols-2">
      <section data-visual="table">
        <h2 className="mb-2 font-extrabold">Bảng tuần hoàn</h2>
        <PeriodicTableZoom
          scene="classroom"
          highlight={['H', 'He', 'C', 'N', 'O', 'Fe', 'Cu', 'Au']}
        />
      </section>
      <section data-visual="states">
        <h2 className="mb-2 font-extrabold">Ba trạng thái</h2>
        <StatesLab
          molecule={content.molecules.get('h2o')!}
          scenes={{ solid: 'ice-cubes', liquid: 'glass-of-water', gas: 'boiling-kettle' }}
        />
      </section>
      <section data-visual="atom-he">
        <h2 className="mb-2 font-extrabold">Nguyên tử helium</h2>
        <AtomZoom scene="balloons" element="He" />
      </section>
      <section data-visual="atom-na">
        <h2 className="mb-2 font-extrabold">Nguyên tử sodium</h2>
        <AtomZoom scene="salt-shaker" element="Na" />
      </section>
      <section data-visual="ph-scale">
        <h2 className="mb-2 font-extrabold">Thang pH</h2>
        <PhScaleLab
          items={[
            { label: 'Giấm', ph: 3, scene: 'vinegar-bottle' },
            { label: 'Nước', ph: 7, scene: 'glass-of-water' },
            { label: 'Kem đánh răng', ph: 9, scene: 'toothpaste' },
          ]}
        />
      </section>
      <section data-visual="solution-hcl">
        <h2 className="mb-2 font-extrabold">Dung dịch hydrochloric acid</h2>
        <div className="aspect-[8/5] overflow-hidden rounded-2xl border border-line">
          <ParticleView molecule={content.molecules.get('hcl')!} />
        </div>
      </section>
      <section data-visual="solution-h2so4">
        <h2 className="mb-2 font-extrabold">Dung dịch sulfuric acid</h2>
        <div className="aspect-[8/5] overflow-hidden rounded-2xl border border-line">
          <ParticleView molecule={content.molecules.get('h2so4')!} />
        </div>
      </section>
      <section data-visual="big-molecules" className="sm:col-span-2">
        <h2 className="mb-2 font-extrabold">Phân tử lớn</h2>
        <div className="flex flex-wrap items-end gap-6">
          {(['c6h12o6', 'c12h22o11', 'c3h6o3', 'h2o'] as const).flatMap((id) =>
            [88, 150, 240].map((size) => (
              <MoleculeView
                key={`${id}-${size}`}
                molecule={content.molecules.get(id)!}
                size={size}
                showLabel
              />
            )),
          )}
        </div>
      </section>
    </main>
  )
}
