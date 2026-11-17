import type { MoleculeInput } from '../../schema/molecule.js'

/** Phân tử xuất hiện lần đầu ở Unit 7. */
export const unit07Molecules: MoleculeInput[] = [
  {
    id: 'zn',
    name: 'Zinc',
    commonName: 'kẽm',
    formula: 'Zn',
    state: 'solid',
    atoms: [{ id: 'zn', element: 'Zn', x: 50, y: 50 }],
    bonds: [],
    lifeExamples: [
      {
        illustration: 'zinc-roof',
        title: 'Mái tôn mạ kẽm',
        description:
          'Tôn lợp mái là thép cán mỏng, bên ngoài mạ một lớp kẽm. Lớp kẽm che cho thép khỏi gặp nước mưa và oxygen nên mái lâu gỉ.',
      },
      {
        title: 'Vỏ viên pin tiểu',
        description:
          'Lớp vỏ kim loại bên trong của loại pin tiểu thông thường (pin kẽm carbon) làm bằng kẽm.',
      },
    ],
    funFact: 'Đồng thau, thứ hợp kim vàng óng dùng làm chìa khoá và kèn, là đồng pha kẽm.',
    conceptIds: ['element', 'metal', 'reactivity-series'],
  },
  {
    id: 'zncl2',
    name: 'Zinc chloride',
    formula: 'ZnCl2',
    state: 'solid',
    atoms: [
      { id: 'cl1', element: 'Cl', x: 22, y: 50 },
      { id: 'zn', element: 'Zn', x: 50, y: 50 },
      { id: 'cl2', element: 'Cl', x: 78, y: 50 },
    ],
    bonds: [
      { a: 'zn', b: 'cl1', kind: 'ionic' },
      { a: 'zn', b: 'cl2', kind: 'ionic' },
    ],
    lifeExamples: [
      {
        illustration: 'zinc-acid',
        title: 'Thứ ở lại sau khi kẽm gặp acid',
        description:
          'Trong phòng thí nghiệm, viên kẽm tan dần trong dung dịch hydrochloric acid. Các nguyên tử zinc không mất đi: chúng nằm trong zinc chloride, một muối tan trong nước nên mắt không thấy.',
      },
      {
        title: 'Làm sạch mối hàn',
        description:
          'Thợ hàn dùng dung dịch zinc chloride để làm sạch bề mặt kim loại trước khi hàn. Chất này ăn da, chỉ thợ có đồ bảo hộ mới dùng.',
      },
    ],
    funFact:
      'Giống muối ăn, zinc chloride gồm ion kim loại và ion chloride hút nhau: một ion Zn²⁺ đi với hai ion Cl⁻.',
    conceptIds: ['compound', 'ionic-bond', 'salt'],
  },
  {
    id: 'cuso4',
    name: 'Copper(II) sulfate',
    formula: 'CuSO4',
    state: 'solid',
    atoms: [
      { id: 'cu', element: 'Cu', x: 14, y: 50 },
      { id: 'o1', element: 'O', x: 38, y: 33 },
      { id: 'o2', element: 'O', x: 38, y: 67 },
      { id: 's', element: 'S', x: 59, y: 50 },
      { id: 'o3', element: 'O', x: 80, y: 33 },
      { id: 'o4', element: 'O', x: 80, y: 67 },
    ],
    bonds: [
      { a: 'cu', b: 'o1', kind: 'ionic' },
      { a: 'cu', b: 'o2', kind: 'ionic' },
      { a: 's', b: 'o1' },
      { a: 's', b: 'o2' },
      { a: 's', b: 'o3', order: 2 },
      { a: 's', b: 'o4', order: 2 },
    ],
    lifeExamples: [
      {
        illustration: 'copper-coated-nail',
        title: 'Cốc dung dịch xanh lam',
        description:
          'Copper(II) sulfate tan trong nước cho dung dịch màu xanh lam rất đẹp. Màu xanh ấy là của ion Cu²⁺. Chất này độc, chỉ dùng trong phòng thí nghiệm của trường.',
      },
      {
        title: 'Thuốc trừ nấm cho vườn nho',
        description:
          'Người trồng nho trộn copper(II) sulfate với vôi thành thuốc Bordeaux để trừ nấm. Khi pha phải đeo găng tay và khẩu trang.',
      },
    ],
    funFact:
      'Copper(II) sulfate khô hoàn toàn có màu trắng. Chỉ khi ngậm nước hoặc tan trong nước nó mới có màu xanh lam.',
    conceptIds: ['compound', 'ionic-bond', 'salt', 'displacement'],
  },
  {
    id: 'feso4',
    name: 'Iron(II) sulfate',
    formula: 'FeSO4',
    state: 'solid',
    atoms: [
      { id: 'fe', element: 'Fe', x: 14, y: 50 },
      { id: 'o1', element: 'O', x: 38, y: 33 },
      { id: 'o2', element: 'O', x: 38, y: 67 },
      { id: 's', element: 'S', x: 59, y: 50 },
      { id: 'o3', element: 'O', x: 80, y: 33 },
      { id: 'o4', element: 'O', x: 80, y: 67 },
    ],
    bonds: [
      { a: 'fe', b: 'o1', kind: 'ionic' },
      { a: 'fe', b: 'o2', kind: 'ionic' },
      { a: 's', b: 'o1' },
      { a: 's', b: 'o2' },
      { a: 's', b: 'o3', order: 2 },
      { a: 's', b: 'o4', order: 2 },
    ],
    lifeExamples: [
      {
        illustration: 'copper-coated-nail',
        title: 'Thứ tan trong cốc sau khi sắt đẩy đồng',
        description:
          'Khi đinh sắt đẩy đồng ra khỏi dung dịch copper(II) sulfate, các nguyên tử iron (sắt) thành ion Fe²⁺ và tan vào nước. Trong cốc lúc này có dung dịch iron(II) sulfate.',
      },
      {
        title: 'Viên sắt',
        description:
          'Nhiều loại viên bổ sung sắt chứa iron(II) sulfate. Sắt trong đó ở dạng ion Fe²⁺ chứ không phải kim loại sắt.',
      },
    ],
    funFact:
      'Dung dịch iron(II) sulfate có màu xanh lục rất nhạt. Vì thế cốc dung dịch xanh lam nhạt màu dần khi sắt thay chỗ đồng.',
    conceptIds: ['compound', 'ionic-bond', 'salt', 'displacement'],
  },
  {
    id: 'al2o3',
    name: 'Aluminium oxide',
    formula: 'Al2O3',
    state: 'solid',
    atoms: [
      { id: 'al1', element: 'Al', x: 30, y: 36 },
      { id: 'al2', element: 'Al', x: 70, y: 36 },
      { id: 'o1', element: 'O', x: 20, y: 68 },
      { id: 'o2', element: 'O', x: 50, y: 72 },
      { id: 'o3', element: 'O', x: 80, y: 68 },
    ],
    bonds: [
      { a: 'al1', b: 'o1', kind: 'ionic' },
      { a: 'al1', b: 'o2', kind: 'ionic' },
      { a: 'al2', b: 'o2', kind: 'ionic' },
      { a: 'al2', b: 'o3', kind: 'ionic' },
    ],
    lifeExamples: [
      {
        illustration: 'aluminium-cans',
        title: 'Lớp áo vô hình của đồ nhôm',
        description:
          'Mặt nhôm vừa gặp không khí là phủ ngay một lớp aluminium oxide. Lớp này mỏng tới mức mắt không thấy, nhưng kín và bám chặt, nên đồ nhôm không bị gỉ sâu vào trong như sắt.',
      },
      {
        title: 'Hồng ngọc và lam ngọc',
        description:
          'Ruby (hồng ngọc) và sapphire (lam ngọc) là tinh thể aluminium oxide có lẫn một chút chất khác tạo màu.',
      },
    ],
    funFact: 'Aluminium oxide cứng tới mức được dùng làm giấy nhám và đá mài.',
    conceptIds: ['compound', 'ionic-bond', 'oxide'],
  },
  {
    id: 'c2h4',
    name: 'Ethylene',
    formula: 'C2H4',
    state: 'gas',
    atoms: [
      { id: 'c1', element: 'C', x: 38, y: 50 },
      { id: 'c2', element: 'C', x: 62, y: 50 },
      { id: 'h1', element: 'H', x: 24, y: 30 },
      { id: 'h2', element: 'H', x: 24, y: 70 },
      { id: 'h3', element: 'H', x: 76, y: 30 },
      { id: 'h4', element: 'H', x: 76, y: 70 },
    ],
    bonds: [
      { a: 'c1', b: 'c2', order: 2 },
      { a: 'c1', b: 'h1' },
      { a: 'c1', b: 'h2' },
      { a: 'c2', b: 'h3' },
      { a: 'c2', b: 'h4' },
    ],
    lifeExamples: [
      {
        illustration: 'banana-bag',
        title: 'Nải chuối đang chín',
        description:
          'Chuối chín toả ra khí ethylene. Khí này thúc những quả bên cạnh chín theo, nên cả nải chuối thường chín gần như cùng lúc.',
      },
      {
        title: 'Nguyên liệu làm nhựa',
        description:
          'Nhà máy lấy ethylene từ dầu mỏ và khí thiên nhiên, rồi nối các phân tử lại thành polyethylene để làm túi nilon, chai lọ, ống nước.',
      },
    ],
    funFact:
      'Để một quả chuối chín cạnh quả bơ còn xanh, quả bơ sẽ chín nhanh hơn. Đó là nhờ khí ethylene từ quả chuối.',
    conceptIds: ['molecule', 'covalent-bond', 'multiple-bond', 'polymer'],
  },
]
