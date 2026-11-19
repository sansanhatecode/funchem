import type { MoleculeInput } from '../../schema/molecule.js'

/** Phân tử xuất hiện lần đầu ở Unit 9. */
export const unit09Molecules: MoleculeInput[] = [
  {
    id: 'ne',
    name: 'Neon',
    formula: 'Ne',
    state: 'gas',
    atoms: [{ id: 'ne', element: 'Ne', x: 50, y: 50 }],
    bonds: [],
    lifeExamples: [
      {
        illustration: 'neon-sign',
        title: 'Biển hiệu đèn neon',
        description:
          'Ống thuỷ tinh uốn thành chữ, bên trong chứa khí neon. Khi có dòng điện chạy qua, neon phát ra ánh sáng đỏ cam đặc trưng.',
      },
      {
        title: 'Một phần rất nhỏ của không khí',
        description:
          'Trong không khí bạn đang thở có lẫn một chút neon, khoảng 18 phần triệu. Người ta lấy neon bằng cách tách nó ra từ không khí.',
      },
    ],
    funFact:
      'Chỉ ống chứa neon mới cho màu đỏ cam. Những biển hiệu "neon" màu xanh hay tím thật ra dùng khí khác, như argon, hoặc ống có phủ lớp bột phát sáng.',
    conceptIds: ['atom', 'element', 'electron-shell', 'noble-gas-shell'],
  },
  {
    id: 'h2s',
    name: 'Hydrogen sulfide',
    formula: 'H2S',
    state: 'gas',
    atoms: [
      { id: 's', element: 'S', x: 50, y: 40 },
      { id: 'h1', element: 'H', x: 26, y: 66 },
      { id: 'h2', element: 'H', x: 74, y: 66 },
    ],
    bonds: [
      { a: 's', b: 'h1' },
      { a: 's', b: 'h2' },
    ],
    lifeExamples: [
      {
        illustration: 'rotten-egg',
        title: 'Mùi trứng thối',
        description:
          'Protein trong trứng có chứa sulfur. Khi trứng hỏng, vi khuẩn phân huỷ protein và sinh ra khí hydrogen sulfide, thứ khí tạo nên mùi thối đặc trưng.',
      },
      {
        title: 'Suối nước nóng và miệng núi lửa',
        description:
          'Nhiều suối nước nóng và miệng núi lửa có mùi trứng thối vì khí hydrogen sulfide thoát lên từ lòng đất.',
      },
    ],
    funFact:
      'Hydrogen sulfide là khí độc. Mũi người nhận ra nó ở lượng cực nhỏ, nhưng ở lượng lớn nó làm tê liệt khứu giác, nên không thể dựa vào mùi để biết còn khí hay không.',
    conceptIds: ['molecule', 'compound', 'covalent-bond', 'valence'],
  },
  {
    id: 'cl2',
    name: 'Chlorine',
    formula: 'Cl2',
    state: 'gas',
    atoms: [
      { id: 'cl1', element: 'Cl', x: 34, y: 50 },
      { id: 'cl2', element: 'Cl', x: 66, y: 50 },
    ],
    bonds: [{ a: 'cl1', b: 'cl2' }],
    lifeExamples: [
      {
        illustration: 'swimming-pool',
        title: 'Nước hồ bơi sạch khuẩn',
        description:
          'Nước hồ bơi và nước máy được khử trùng bằng chlorine hoặc hợp chất của chlorine. Một lượng rất nhỏ đã đủ diệt vi khuẩn trong nước.',
      },
      {
        title: 'Nguyên liệu làm nhựa PVC',
        description:
          'Ống nước màu xám và vỏ bọc dây điện thường làm bằng nhựa PVC, loại nhựa được sản xuất từ khí chlorine.',
      },
    ],
    funFact:
      'Khí chlorine có màu vàng lục và rất độc. Tên của nó lấy từ chữ Hy Lạp "chloros", nghĩa là xanh lục nhạt.',
    conceptIds: ['molecule', 'elemental-substance', 'covalent-bond', 'valence'],
  },
  {
    id: 'ag2s',
    name: 'Silver sulfide',
    formula: 'Ag2S',
    state: 'solid',
    atoms: [
      { id: 'ag1', element: 'Ag', x: 22, y: 58 },
      { id: 's', element: 'S', x: 50, y: 42 },
      { id: 'ag2', element: 'Ag', x: 78, y: 58 },
    ],
    bonds: [
      { a: 'ag1', b: 's', kind: 'ionic' },
      { a: 'ag2', b: 's', kind: 'ionic' },
    ],
    lifeExamples: [
      {
        illustration: 'tarnished-silver',
        title: 'Lớp xỉn đen trên đồ bạc',
        description:
          'Thìa bạc, vòng bạc để lâu ngày xỉn dần thành xám đen. Bạc đã phản ứng với lượng rất nhỏ khí hydrogen sulfide trong không khí, tạo thành một lớp silver sulfide mỏng trên bề mặt.',
      },
      {
        title: 'Thìa bạc và lòng đỏ trứng',
        description:
          'Chiếc thìa bạc dùng để ăn trứng xỉn màu rất nhanh, vì trứng có các hợp chất chứa sulfur.',
      },
    ],
    funFact:
      'Lớp xỉn mỏng hơn sợi tóc hàng nghìn lần mà đã đủ làm bạc mất vẻ sáng. Đánh bóng là chà cho lớp mỏng ấy bong đi.',
    conceptIds: ['compound', 'formula', 'valence', 'writing-formula'],
  },
  {
    id: 'cacl2',
    name: 'Calcium chloride',
    formula: 'CaCl2',
    state: 'solid',
    atoms: [
      { id: 'cl1', element: 'Cl', x: 21, y: 50 },
      { id: 'ca', element: 'Ca', x: 50, y: 50 },
      { id: 'cl2', element: 'Cl', x: 79, y: 50 },
    ],
    bonds: [
      { a: 'ca', b: 'cl1', kind: 'ionic' },
      { a: 'ca', b: 'cl2', kind: 'ionic' },
    ],
    lifeExamples: [
      {
        illustration: 'desiccant-box',
        title: 'Hộp hút ẩm trong tủ quần áo',
        description:
          'Những hạt trắng ở ngăn trên của hộp hút ẩm là calcium chloride. Chúng hút hơi nước trong không khí mạnh tới mức tự tan ra, nhỏ thành nước xuống ngăn dưới.',
      },
      {
        title: 'Rải đường chống băng',
        description:
          'Ở xứ lạnh, người ta rải calcium chloride lên mặt đường mùa đông để băng tuyết tan nhanh hơn.',
      },
    ],
    funFact:
      'Ion calcium mang hai điện tích dương (Ca²⁺) nên đi cùng hai ion Cl⁻. Vì thế công thức là CaCl₂, giống kiểu của magnesium chloride MgCl₂.',
    conceptIds: ['salt', 'compound', 'ionic-bond', 'valence', 'writing-formula'],
  },
]
