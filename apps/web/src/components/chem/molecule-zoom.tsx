'use client'

import {
  formatFormula,
  lowerFirst,
  type Molecule,
  moleculeLabel,
  type SceneId,
} from '@funchem/content/lib'
import { useState } from 'react'
import { ZoomScene } from '@/components/scenes/zoom-scene'
import { MoleculeView } from './molecule-view'
import { PARTICLE_CAPTION, ParticleLegend, particleMode, ParticleView } from './particle-view'

/**
 * Một chất, nhìn từ ngoài vào trong: cảnh đời sống trước,
 * bấm kính lúp thì thấy thế giới hạt của chất đó, kèm chú giải và cận cảnh một hạt.
 */
export function MoleculeZoom({
  molecule,
  scene,
  hint,
}: {
  molecule: Molecule
  scene: SceneId
  /** câu gợi ý dưới cảnh khi chưa phóng to */
  hint?: string | undefined
}) {
  const [zoomed, setZoomed] = useState(false)
  const unit =
    molecule.atoms.length === 1
      ? 'nguyên tử'
      : particleMode(molecule) === 'ionic'
        ? 'cặp ion'
        : 'phân tử'

  return (
    <div className="flex flex-col gap-3">
      <ZoomScene scene={scene} zoomed={zoomed} onZoomChange={setZoomed}>
        <ParticleView molecule={molecule} />
      </ZoomScene>

      {zoomed ? (
        <div
          className="flex flex-col gap-3 rounded-2xl bg-brand-soft p-4"
          style={{ animation: 'pop-in 350ms ease-out' }}
        >
          <div className="flex items-center gap-4">
            <div className="shrink-0 rounded-2xl bg-paper p-2">
              <MoleculeView molecule={molecule} size={84} />
            </div>
            <div>
              <p className="font-extrabold">
                Một {unit} {lowerFirst(moleculeLabel(molecule))}{' '}
                <span className="font-bold text-ink-soft">{formatFormula(molecule.formula)}</span>
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                {PARTICLE_CAPTION[particleMode(molecule)]}
              </p>
            </div>
          </div>
          <ParticleLegend molecule={molecule} />
        </div>
      ) : (
        <p className="text-center text-sm text-ink-soft">
          {hint ?? 'Bấm kính lúp để nhìn sâu vào bên trong.'}
        </p>
      )}
    </div>
  )
}
