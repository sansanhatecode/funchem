import type { MoleculeInput } from '../../schema/molecule.js'

/** Phân tử xuất hiện lần đầu ở Unit 10. */
export const unit10Molecules: MoleculeInput[] = [
  {
    id: 'c4h10',
    name: 'Butane',
    formula: 'C4H10',
    state: 'gas',
    atoms: [
      { id: 'c1', element: 'C', x: 20, y: 50 },
      { id: 'c2', element: 'C', x: 40, y: 50 },
      { id: 'c3', element: 'C', x: 60, y: 50 },
      { id: 'c4', element: 'C', x: 80, y: 50 },
      { id: 'h1', element: 'H', x: 3, y: 50 },
      { id: 'h2', element: 'H', x: 20, y: 28 },
      { id: 'h3', element: 'H', x: 20, y: 72 },
      { id: 'h4', element: 'H', x: 40, y: 28 },
      { id: 'h5', element: 'H', x: 40, y: 72 },
      { id: 'h6', element: 'H', x: 60, y: 28 },
      { id: 'h7', element: 'H', x: 60, y: 72 },
      { id: 'h8', element: 'H', x: 80, y: 28 },
      { id: 'h9', element: 'H', x: 80, y: 72 },
      { id: 'h10', element: 'H', x: 97, y: 50 },
    ],
    bonds: [
      { a: 'c1', b: 'c2' },
      { a: 'c2', b: 'c3' },
      { a: 'c3', b: 'c4' },
      { a: 'c1', b: 'h1' },
      { a: 'c1', b: 'h2' },
      { a: 'c1', b: 'h3' },
      { a: 'c2', b: 'h4' },
      { a: 'c2', b: 'h5' },
      { a: 'c3', b: 'h6' },
      { a: 'c3', b: 'h7' },
      { a: 'c4', b: 'h8' },
      { a: 'c4', b: 'h9' },
      { a: 'c4', b: 'h10' },
    ],
    lifeExamples: [
      {
        illustration: 'hotpot-gas-can',
        title: 'Lon gas của bếp gas mini',
        description:
          'Lon gas gắn vào bếp gas mini trên bàn lẩu chứa chủ yếu là butane đã được nén thành chất lỏng. Mở van, butane hoá hơi thành khí rồi cháy với ngọn lửa xanh.',
      },
      {
        title: 'Bình gas trong bếp',
        description:
          'Gas đun nấu trong bình thép là hỗn hợp propane và butane. Cả hai đều nặng hơn không khí, nên bình gas luôn được đặt ở nơi thoáng gió.',
      },
    ],
    funFact:
      'Butane có khối lượng mol 58 g/mol, đúng gấp đôi con số 29 g/mol của không khí. Vì thế khí butane nặng gấp đôi không khí.',
    conceptIds: ['molecule', 'compound', 'covalent-bond', 'relative-density'],
  },
]
