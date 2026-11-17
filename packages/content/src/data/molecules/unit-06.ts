import type { MoleculeInput } from '../../schema/molecule.js'

/** Phân tử xuất hiện lần đầu ở Unit 6. */
export const unit06Molecules: MoleculeInput[] = [
  {
    id: 'c3h8',
    name: 'Propane',
    formula: 'C3H8',
    state: 'gas',
    atoms: [
      { id: 'c1', element: 'C', x: 24, y: 50 },
      { id: 'c2', element: 'C', x: 50, y: 50 },
      { id: 'c3', element: 'C', x: 76, y: 50 },
      { id: 'h1', element: 'H', x: 2, y: 50 },
      { id: 'h2', element: 'H', x: 24, y: 26 },
      { id: 'h3', element: 'H', x: 24, y: 74 },
      { id: 'h4', element: 'H', x: 50, y: 26 },
      { id: 'h5', element: 'H', x: 50, y: 74 },
      { id: 'h6', element: 'H', x: 76, y: 26 },
      { id: 'h7', element: 'H', x: 76, y: 74 },
      { id: 'h8', element: 'H', x: 98, y: 50 },
    ],
    bonds: [
      { a: 'c1', b: 'c2' },
      { a: 'c2', b: 'c3' },
      { a: 'c1', b: 'h1' },
      { a: 'c1', b: 'h2' },
      { a: 'c1', b: 'h3' },
      { a: 'c2', b: 'h4' },
      { a: 'c2', b: 'h5' },
      { a: 'c3', b: 'h6' },
      { a: 'c3', b: 'h7' },
      { a: 'c3', b: 'h8' },
    ],
    lifeExamples: [
      {
        illustration: 'gas-stove-wok',
        title: 'Bình gas trong bếp',
        description:
          'Gas đun nấu là hỗn hợp propane và butane, được nén thành chất lỏng trong bình thép. Mở van, nó hoá hơi thành khí rồi cháy với ngọn lửa xanh.',
      },
      {
        title: 'Mùi gas là mùi được thêm vào',
        description:
          'Propane vốn không có mùi. Nhà máy cố ý pha thêm một chất có mùi hôi rất mạnh để bạn nhận ra ngay khi gas rò rỉ.',
      },
    ],
    funFact:
      'Methane CH₄, ethane C₂H₆, propane C₃H₈: cứ thêm một nguyên tử carbon vào mạch là thêm hai nguyên tử hydrogen.',
    conceptIds: ['molecule', 'compound', 'formula', 'combustion', 'exothermic-endothermic'],
  },
  {
    id: 'c6h12o6',
    name: 'Glucose',
    commonName: 'đường nho',
    formula: 'C6H12O6',
    state: 'solid',
    // Phân tử 24 nguyên tử không thể xếp trong hộp 100x100 mà không chạm nhau.
    // Các nguyên tử H đứng trước để được vẽ ở dưới, nép vào nguyên tử C hay O mà nó liên kết.
    atoms: [
      { id: 'h1', element: 'H', x: 2, y: 28 },
      { id: 'h2', element: 'H', x: 17, y: 72 },
      { id: 'h3', element: 'H', x: 32, y: 28 },
      { id: 'h4', element: 'H', x: 47.5, y: 72 },
      { id: 'h5', element: 'H', x: 62.5, y: 28 },
      { id: 'h6', element: 'H', x: 78, y: 72 },
      { id: 'h7', element: 'H', x: 100, y: 48 },
      { id: 'h8', element: 'H', x: 40, y: 96 },
      { id: 'h9', element: 'H', x: 55.5, y: 4 },
      { id: 'h10', element: 'H', x: 70.5, y: 96 },
      { id: 'h11', element: 'H', x: 86, y: 4 },
      { id: 'h12', element: 'H', x: 100, y: 96 },
      { id: 'c1', element: 'C', x: 13, y: 40 },
      { id: 'c2', element: 'C', x: 28.2, y: 60 },
      { id: 'c3', element: 'C', x: 43.4, y: 40 },
      { id: 'c4', element: 'C', x: 58.6, y: 60 },
      { id: 'c5', element: 'C', x: 73.8, y: 40 },
      { id: 'c6', element: 'C', x: 89, y: 60 },
      { id: 'o1', element: 'O', x: 13, y: 16 },
      { id: 'o2', element: 'O', x: 28.2, y: 84 },
      { id: 'o3', element: 'O', x: 43.4, y: 16 },
      { id: 'o4', element: 'O', x: 58.6, y: 84 },
      { id: 'o5', element: 'O', x: 73.8, y: 16 },
      { id: 'o6', element: 'O', x: 89, y: 84 },
    ],
    bonds: [
      { a: 'c1', b: 'c2' },
      { a: 'c2', b: 'c3' },
      { a: 'c3', b: 'c4' },
      { a: 'c4', b: 'c5' },
      { a: 'c5', b: 'c6' },
      { a: 'c1', b: 'o1', order: 2 },
      { a: 'c2', b: 'o2' },
      { a: 'c3', b: 'o3' },
      { a: 'c4', b: 'o4' },
      { a: 'c5', b: 'o5' },
      { a: 'c6', b: 'o6' },
      { a: 'c1', b: 'h1' },
      { a: 'c2', b: 'h2' },
      { a: 'c3', b: 'h3' },
      { a: 'c4', b: 'h4' },
      { a: 'c5', b: 'h5' },
      { a: 'c6', b: 'h6' },
      { a: 'c6', b: 'h7' },
      { a: 'o2', b: 'h8' },
      { a: 'o3', b: 'h9' },
      { a: 'o4', b: 'h10' },
      { a: 'o5', b: 'h11' },
      { a: 'o6', b: 'h12' },
    ],
    lifeExamples: [
      {
        illustration: 'bread-oven',
        title: 'Thức ăn của men làm bánh',
        description:
          'Men trong bột bánh mì ăn glucose rồi nhả ra khí carbon dioxide. Bong bóng khí kẹt trong bột làm ổ bánh nở phồng.',
      },
      {
        title: 'Vị ngọt của nho chín và mật ong',
        description:
          'Nho chín và mật ong chứa nhiều glucose. Tinh bột trong cơm, bánh mì cũng được cơ thể cắt dần thành glucose.',
      },
    ],
    funFact:
      'Glucose là nhiên liệu chính của cơ thể bạn. Máu chở nó tới từng tế bào, kể cả tế bào não đang đọc dòng này.',
    conceptIds: ['molecule', 'compound', 'formula', 'fermentation'],
  },
  {
    id: 'c3h6o3',
    name: 'Lactic acid',
    formula: 'C3H6O3',
    state: 'liquid',
    atoms: [
      { id: 'c1', element: 'C', x: 22, y: 56 },
      { id: 'c2', element: 'C', x: 46, y: 44 },
      { id: 'c3', element: 'C', x: 70, y: 56 },
      { id: 'o1', element: 'O', x: 46, y: 20 },
      { id: 'o2', element: 'O', x: 90, y: 40 },
      { id: 'o3', element: 'O', x: 74, y: 80 },
      { id: 'h1', element: 'H', x: 2, y: 50 },
      { id: 'h2', element: 'H', x: 22, y: 32 },
      { id: 'h3', element: 'H', x: 16, y: 78 },
      { id: 'h4', element: 'H', x: 46, y: 70 },
      { id: 'h5', element: 'H', x: 66, y: 10 },
      { id: 'h6', element: 'H', x: 94, y: 90 },
    ],
    bonds: [
      { a: 'c1', b: 'c2' },
      { a: 'c2', b: 'c3' },
      { a: 'c2', b: 'o1' },
      { a: 'c3', b: 'o2', order: 2 },
      { a: 'c3', b: 'o3' },
      { a: 'c1', b: 'h1' },
      { a: 'c1', b: 'h2' },
      { a: 'c1', b: 'h3' },
      { a: 'c2', b: 'h4' },
      { a: 'o1', b: 'h5' },
      { a: 'o3', b: 'h6' },
    ],
    lifeExamples: [
      {
        illustration: 'pickle-jars',
        title: 'Vị chua của dưa muối và sữa chua',
        description:
          'Vi khuẩn lactic biến đường trong rau cải và trong sữa thành lactic acid. Chính chất này làm dưa chua giòn và làm sữa đặc lại thành sữa chua.',
      },
      {
        title: 'Cốc sữa để quên qua đêm',
        description:
          'Sữa để ngoài tủ lạnh bị chua và vón lại cũng vì lactic acid, nhưng lần này do những vi khuẩn không ai mời. Sữa như vậy thì phải bỏ đi.',
      },
    ],
    funFact:
      'Một phân tử glucose C₆H₁₂O₆ tách ra được đúng hai phân tử lactic acid C₃H₆O₃, không thừa không thiếu nguyên tử nào.',
    conceptIds: ['molecule', 'compound', 'formula', 'fermentation'],
  },
  {
    id: 'na2co3',
    name: 'Sodium carbonate',
    commonName: 'soda',
    formula: 'Na2CO3',
    state: 'solid',
    atoms: [
      { id: 'na1', element: 'Na', x: 14, y: 80 },
      { id: 'o2', element: 'O', x: 31, y: 58 },
      { id: 'c', element: 'C', x: 50, y: 44 },
      { id: 'o1', element: 'O', x: 50, y: 20 },
      { id: 'o3', element: 'O', x: 69, y: 58 },
      { id: 'na2', element: 'Na', x: 86, y: 80 },
    ],
    bonds: [
      { a: 'na1', b: 'o2', kind: 'ionic' },
      { a: 'na2', b: 'o3', kind: 'ionic' },
      { a: 'c', b: 'o1', order: 2 },
      { a: 'c', b: 'o2' },
      { a: 'c', b: 'o3' },
    ],
    lifeExamples: [
      {
        illustration: 'baking-cake',
        title: 'Chất ở lại trong ruột bánh',
        description:
          'Trong lò nóng, baking soda tách thành khí carbon dioxide, nước và sodium carbonate. Khí làm bánh nở, còn sodium carbonate ở lại trong bánh. Cho quá tay bột nở, bánh sẽ có vị nồng vì chất này.',
      },
      {
        title: 'Bột giặt và thuỷ tinh',
        description:
          'Sodium carbonate có trong nhiều loại bột giặt và là một nguyên liệu để nấu thuỷ tinh.',
      },
    ],
    funFact:
      'Baking soda NaHCO₃ và soda Na₂CO₃ có tên gần giống nhau nhưng là hai chất khác nhau. Đun nóng chất thứ nhất thì thu được chất thứ hai.',
    conceptIds: ['compound', 'ionic-bond', 'formula'],
  },
]
