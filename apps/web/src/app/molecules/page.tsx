import { content } from '@funchem/content'
import type { Metadata } from 'next'
import { MoleculeGallery } from './molecule-gallery'

export const metadata: Metadata = { title: 'Bộ sưu tập phân tử' }

export default function MoleculesPage() {
  return <MoleculeGallery molecules={[...content.molecules.values()]} />
}
