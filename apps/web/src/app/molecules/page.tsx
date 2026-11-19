import { content } from '@funchem/content'
import type { Metadata } from 'next'
import { MoleculeGallery } from './molecule-gallery'

export const metadata: Metadata = {
  title: 'Bộ sưu tập phân tử',
  description:
    'Các phân tử quen thuộc trong đời sống, vẽ ở cấp nguyên tử: nước, muối ăn, khí carbon dioxide và nhiều chất khác.',
  alternates: { canonical: '/molecules' },
}

export default function MoleculesPage() {
  return <MoleculeGallery molecules={[...content.molecules.values()]} />
}
