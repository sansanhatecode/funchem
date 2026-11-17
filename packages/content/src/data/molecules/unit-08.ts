import type { MoleculeInput } from '../../schema/molecule.js'

/** Phân tử xuất hiện lần đầu ở Unit 8. */
export const unit08Molecules: MoleculeInput[] = [
  {
    id: 'c2h5no2',
    name: 'Glycine',
    formula: 'C2H5NO2',
    state: 'solid',
    atoms: [
      { id: 'n', element: 'N', x: 22, y: 52 },
      { id: 'c1', element: 'C', x: 44, y: 42 },
      { id: 'c2', element: 'C', x: 66, y: 54 },
      { id: 'o1', element: 'O', x: 62, y: 80 },
      { id: 'o2', element: 'O', x: 88, y: 44 },
      { id: 'h1', element: 'H', x: 6, y: 38 },
      { id: 'h2', element: 'H', x: 14, y: 76 },
      { id: 'h3', element: 'H', x: 34, y: 20 },
      { id: 'h4', element: 'H', x: 54, y: 20 },
      { id: 'h5', element: 'H', x: 94, y: 22 },
    ],
    bonds: [
      { a: 'n', b: 'c1' },
      { a: 'c1', b: 'c2' },
      { a: 'c2', b: 'o1', order: 2 },
      { a: 'c2', b: 'o2' },
      { a: 'o2', b: 'h5' },
      { a: 'n', b: 'h1' },
      { a: 'n', b: 'h2' },
      { a: 'c1', b: 'h3' },
      { a: 'c1', b: 'h4' },
    ],
    lifeExamples: [
      {
        illustration: 'curdled-milk',
        title: 'Một mắt xích của protein trong sữa',
        description:
          'Protein trong sữa, trứng, thịt là những chuỗi dài gồm hàng trăm amino acid nối nhau. Glycine là amino acid nhỏ nhất trong số đó.',
      },
      {
        title: 'Da, gân và thạch gelatin',
        description:
          'Collagen, loại protein làm da và gân dai chắc, có rất nhiều glycine. Gelatin dùng làm thạch và kẹo dẻo được nấu ra từ collagen.',
      },
    ],
    funFact:
      'Tên glycine lấy từ chữ Hy Lạp "glykys", nghĩa là ngọt, vì chất này có vị ngọt nhẹ. Nó khác đường ở chỗ có thêm nguyên tử nitrogen.',
    conceptIds: ['molecule', 'compound', 'formula', 'covalent-bond', 'protein'],
  },
  {
    id: 'kcl',
    name: 'Potassium chloride',
    formula: 'KCl',
    state: 'solid',
    atoms: [
      { id: 'k', element: 'K', x: 33, y: 50 },
      { id: 'cl', element: 'Cl', x: 67, y: 50 },
    ],
    bonds: [{ a: 'k', b: 'cl', kind: 'ionic' }],
    lifeExamples: [
      {
        illustration: 'sports-drink',
        title: 'Nước điện giải',
        description:
          'Nhiều loại nước điện giải có hoà tan potassium chloride. Trong nước, nó tách thành ion K⁺ và ion Cl⁻, hai loại ion cơ thể mất đi theo mồ hôi.',
      },
      {
        title: 'Phân kali',
        description:
          'Phân kali bón cho cây trồng thường chính là potassium chloride. Cây cũng cần potassium như bạn vậy.',
      },
    ],
    funFact:
      'Kí hiệu K lấy từ "kalium", tên Latinh của potassium. Vì thế tiếng Việt quen gọi nguyên tố này là kali.',
    conceptIds: ['compound', 'ionic-bond', 'ion', 'minerals'],
  },
]
