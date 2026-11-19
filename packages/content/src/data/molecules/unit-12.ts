import type { MoleculeInput } from '../../schema/molecule.js'

/** Mạch carbon thẳng của octane: 8 nguyên tử C cách đều nhau, mỗi C có H ở trên và ở dưới. */
const OCTANE_X = [12, 22.9, 33.7, 44.6, 55.4, 66.3, 77.1, 88] as const

/** Phân tử xuất hiện lần đầu ở Unit 12. */
export const unit12Molecules: MoleculeInput[] = [
  {
    id: 'c2h6',
    name: 'Ethane',
    formula: 'C2H6',
    state: 'gas',
    atoms: [
      { id: 'c1', element: 'C', x: 37, y: 50 },
      { id: 'c2', element: 'C', x: 63, y: 50 },
      { id: 'h1', element: 'H', x: 13, y: 50 },
      { id: 'h2', element: 'H', x: 37, y: 24 },
      { id: 'h3', element: 'H', x: 37, y: 76 },
      { id: 'h4', element: 'H', x: 63, y: 24 },
      { id: 'h5', element: 'H', x: 63, y: 76 },
      { id: 'h6', element: 'H', x: 87, y: 50 },
    ],
    bonds: [
      { a: 'c1', b: 'c2' },
      { a: 'c1', b: 'h1' },
      { a: 'c1', b: 'h2' },
      { a: 'c1', b: 'h3' },
      { a: 'c2', b: 'h4' },
      { a: 'c2', b: 'h5' },
      { a: 'c2', b: 'h6' },
    ],
    lifeExamples: [
      {
        illustration: 'oil-rig',
        title: 'Khí lấy lên từ mỏ dầu',
        description:
          'Khí thiên nhiên và khí lấy lên cùng dầu mỏ chứa nhiều methane nhất. Đứng thứ hai thường là ethane.',
      },
      {
        title: 'Nguyên liệu làm ethylene',
        description:
          'Nhà máy nung ethane ở nhiệt độ rất cao để tách bớt hydrogen, thu được ethylene. Từ ethylene, người ta làm ra nhựa polyethylene.',
      },
    ],
    funFact:
      'Trên Titan, một mặt trăng của Sao Thổ lạnh khoảng âm 180 °C, có những hồ chứa methane và ethane ở thể lỏng.',
    conceptIds: ['molecule', 'compound', 'covalent-bond', 'hydrocarbon', 'alkane'],
  },
  {
    id: 'c8h18',
    name: 'Octane',
    formula: 'C8H18',
    state: 'liquid',
    atoms: [
      { id: 'h1', element: 'H', x: 2, y: 50 },
      ...OCTANE_X.flatMap((x, i) => [
        { id: `h${2 * i + 2}`, element: 'H' as const, x, y: 34 },
        { id: `h${2 * i + 3}`, element: 'H' as const, x, y: 66 },
      ]),
      { id: 'h18', element: 'H', x: 98, y: 50 },
      ...OCTANE_X.map((x, i) => ({ id: `c${i + 1}`, element: 'C' as const, x, y: 50 })),
    ],
    bonds: [
      ...OCTANE_X.slice(1).map((_, i) => ({ a: `c${i + 1}`, b: `c${i + 2}` })),
      { a: 'c1', b: 'h1' },
      ...OCTANE_X.flatMap((_, i) => [
        { a: `c${i + 1}`, b: `h${2 * i + 2}` },
        { a: `c${i + 1}`, b: `h${2 * i + 3}` },
      ]),
      { a: 'c8', b: 'h18' },
    ],
    lifeExamples: [
      {
        illustration: 'gas-station',
        title: 'Xăng ở cây xăng',
        description:
          'Xăng là hỗn hợp của nhiều hydrocarbon, phần lớn có khoảng 5 tới 11 nguyên tử carbon. Octane, với 8 nguyên tử carbon, là một phân tử tiêu biểu trong đó.',
      },
      {
        title: 'Con số 92, 95 trên trụ bơm',
        description:
          'Đó là chỉ số octane. Nó cho biết xăng chịu nén tốt tới đâu trước khi tự bốc cháy trong động cơ. Chỉ số càng cao thì động cơ càng ít bị gõ.',
      },
    ],
    funFact:
      'Mốc 100 điểm của chỉ số octane không phải phân tử mạch thẳng trong hình. Đó là một chất cùng công thức phân tử C₈H₁₈ nhưng mạch carbon có nhánh. Cùng công thức phân tử, khác công thức cấu tạo, tính chất đã khác hẳn.',
    conceptIds: ['molecule', 'compound', 'hydrocarbon', 'alkane', 'fuel', 'petroleum'],
  },
  {
    id: 'c4h8o2',
    name: 'Ethyl acetate',
    formula: 'CH3COOC2H5',
    state: 'liquid',
    atoms: [
      { id: 'c1', element: 'C', x: 14, y: 54 },
      { id: 'c2', element: 'C', x: 32, y: 46 },
      { id: 'o1', element: 'O', x: 32, y: 22 },
      { id: 'o2', element: 'O', x: 50, y: 56 },
      { id: 'c3', element: 'C', x: 68, y: 46 },
      { id: 'c4', element: 'C', x: 86, y: 56 },
      { id: 'h1', element: 'H', x: 3, y: 40 },
      { id: 'h2', element: 'H', x: 6, y: 72 },
      { id: 'h3', element: 'H', x: 22, y: 74 },
      { id: 'h4', element: 'H', x: 59, y: 28 },
      { id: 'h5', element: 'H', x: 77, y: 28 },
      { id: 'h6', element: 'H', x: 97, y: 42 },
      { id: 'h7', element: 'H', x: 94, y: 74 },
      { id: 'h8', element: 'H', x: 78, y: 74 },
    ],
    bonds: [
      { a: 'c1', b: 'c2' },
      { a: 'c2', b: 'o1', order: 2 },
      { a: 'c2', b: 'o2' },
      { a: 'o2', b: 'c3' },
      { a: 'c3', b: 'c4' },
      { a: 'c1', b: 'h1' },
      { a: 'c1', b: 'h2' },
      { a: 'c1', b: 'h3' },
      { a: 'c3', b: 'h4' },
      { a: 'c3', b: 'h5' },
      { a: 'c4', b: 'h6' },
      { a: 'c4', b: 'h7' },
      { a: 'c4', b: 'h8' },
    ],
    lifeExamples: [
      {
        illustration: 'nail-polish-remover',
        title: 'Nước tẩy sơn móng tay',
        description:
          'Nhiều loại nước tẩy sơn móng tay dùng ethyl acetate để hoà tan lớp sơn. Chất này bay hơi nhanh và có mùi thơm hắc đặc trưng.',
      },
      {
        title: 'Mùi của quả chín',
        description:
          'Mùi thơm của nhiều loại quả chín đến từ các ester. Ethyl acetate có mặt với lượng rất nhỏ trong nhiều loại quả.',
      },
    ],
    funFact:
      'Dầu chuối, thứ hương liệu có mùi chuối chín, cũng là một ester. Nó là họ hàng gần của ethyl acetate, chỉ khác ở chỗ phần đến từ alcohol dài hơn.',
    conceptIds: ['molecule', 'compound', 'formula', 'ester'],
  },
]
