import type { MoleculeInput } from '../../schema/molecule.js'
import { unit05Molecules } from './unit-05.js'
import { unit06Molecules } from './unit-06.js'
import { unit07Molecules } from './unit-07.js'
import { unit08Molecules } from './unit-08.js'
import { unit09Molecules } from './unit-09.js'

export const molecules: MoleculeInput[] = [
  {
    id: 'h2o',
    name: 'Nước',
    formula: 'H2O',
    state: 'liquid',
    atoms: [
      { id: 'o', element: 'O', x: 50, y: 42 },
      { id: 'h1', element: 'H', x: 28, y: 64 },
      { id: 'h2', element: 'H', x: 72, y: 64 },
    ],
    bonds: [
      { a: 'o', b: 'h1' },
      { a: 'o', b: 'h2' },
    ],
    lifeExamples: [
      {
        illustration: 'glass-of-water',
        title: 'Ly nước bạn uống',
        description: 'Mỗi ngụm nước chứa hàng trăm nghìn tỉ tỉ phân tử H₂O y hệt nhau.',
      },
      {
        title: 'Mưa và mây',
        description: 'Mây là nước ở dạng giọt li ti, mưa là khi các giọt gộp lại đủ nặng.',
      },
    ],
    funFact: 'Khoảng 60% khối lượng cơ thể bạn là nước.',
    conceptIds: ['molecule', 'covalent-bond'],
  },
  {
    id: 'o2',
    name: 'Oxygen',
    formula: 'O2',
    state: 'gas',
    atoms: [
      { id: 'o1', element: 'O', x: 36, y: 50 },
      { id: 'o2', element: 'O', x: 64, y: 50 },
    ],
    bonds: [{ a: 'o1', b: 'o2', order: 2 }],
    lifeExamples: [
      {
        illustration: 'candle',
        title: 'Ngọn lửa',
        description:
          'Lửa cần oxygen. Khi cây nến bị úp trong một chiếc lọ thuỷ tinh, oxygen trong lọ giảm dần, đến khi không còn đủ để nuôi lửa thì nến tắt.',
      },
      {
        title: 'Hơi thở',
        description:
          'Cứ vài giây bạn lại hít oxygen vào phổi. Cơ thể cần oxygen liên tục để lấy năng lượng từ thức ăn.',
      },
    ],
    conceptIds: ['molecule', 'element'],
  },
  {
    id: 'h2',
    name: 'Hydrogen',
    formula: 'H2',
    state: 'gas',
    atoms: [
      { id: 'h1', element: 'H', x: 38, y: 50 },
      { id: 'h2', element: 'H', x: 62, y: 50 },
    ],
    bonds: [{ a: 'h1', b: 'h2' }],
    lifeExamples: [
      {
        illustration: 'rocket',
        title: 'Nhiên liệu của tên lửa',
        description:
          'Một số tên lửa đốt hydrogen với oxygen để bay lên. Thứ phụt ra phía sau chủ yếu là hơi nước.',
      },
      {
        title: 'Xe chạy hydrogen',
        description: 'Một số ô tô và xe buýt chạy bằng hydrogen. Thứ chúng thải ra chỉ là nước.',
      },
    ],
    conceptIds: ['molecule', 'element'],
  },
  {
    id: 'co2',
    name: 'Carbon dioxide',
    formula: 'CO2',
    state: 'gas',
    atoms: [
      { id: 'c', element: 'C', x: 50, y: 50 },
      { id: 'o1', element: 'O', x: 22, y: 50 },
      { id: 'o2', element: 'O', x: 78, y: 50 },
    ],
    bonds: [
      { a: 'c', b: 'o1', order: 2 },
      { a: 'c', b: 'o2', order: 2 },
    ],
    lifeExamples: [
      {
        illustration: 'soda-can',
        title: 'Bọt trong nước ngọt',
        description: 'Tiếng xì khi mở lon là CO₂ thoát ra.',
      },
      { title: 'Hơi thở ra', description: 'Cơ thể thải CO₂ mỗi khi bạn thở ra.' },
    ],
    conceptIds: ['molecule', 'compound'],
  },
  {
    id: 'nacl',
    name: 'Sodium chloride',
    commonName: 'muối ăn',
    formula: 'NaCl',
    state: 'solid',
    atoms: [
      { id: 'na', element: 'Na', x: 36, y: 50 },
      { id: 'cl', element: 'Cl', x: 66, y: 50 },
    ],
    bonds: [{ a: 'na', b: 'cl', kind: 'ionic' }],
    lifeExamples: [
      {
        illustration: 'salt-shaker',
        title: 'Lọ muối trong bếp',
        description:
          'Một hạt muối nhỏ xíu đã gồm hàng trăm triệu tỉ cặp Na⁺ và Cl⁻ xếp thành khối lập phương.',
      },
      { title: 'Nước biển mặn', description: 'Biển mặn vì chứa rất nhiều muối hoà tan.' },
    ],
    funFact:
      'Sodium là kim loại phản ứng mãnh liệt với nước, chlorine là khí độc. Liên kết với nhau, chúng thành thứ bạn rắc lên đồ ăn mỗi ngày.',
    conceptIds: ['compound', 'ionic-bond'],
  },
  {
    id: 'ch4',
    name: 'Methane',
    formula: 'CH4',
    state: 'gas',
    atoms: [
      { id: 'c', element: 'C', x: 50, y: 50 },
      { id: 'h1', element: 'H', x: 50, y: 22 },
      { id: 'h2', element: 'H', x: 24, y: 64 },
      { id: 'h3', element: 'H', x: 76, y: 64 },
      { id: 'h4', element: 'H', x: 50, y: 80 },
    ],
    bonds: [
      { a: 'c', b: 'h1' },
      { a: 'c', b: 'h2' },
      { a: 'c', b: 'h3' },
      { a: 'c', b: 'h4' },
    ],
    lifeExamples: [
      {
        illustration: 'biogas-stove',
        title: 'Bếp biogas',
        description:
          'Ở nhiều vùng quê, khí methane từ hầm biogas được dẫn lên bếp và cháy với ngọn lửa xanh.',
      },
      {
        title: 'Khí thiên nhiên',
        description:
          'Methane là thành phần chính của khí thiên nhiên dùng để đun nấu và phát điện.',
      },
    ],
    funFact: 'Bò ợ hơi cũng thải ra methane, mỗi con vài trăm lít một ngày.',
    conceptIds: ['molecule', 'compound', 'covalent-bond'],
  },
  {
    id: 'fe',
    name: 'Iron',
    commonName: 'sắt',
    formula: 'Fe',
    state: 'solid',
    atoms: [{ id: 'fe', element: 'Fe', x: 50, y: 50 }],
    bonds: [],
    lifeExamples: [
      {
        illustration: 'iron-nail',
        title: 'Cây đinh, khung xe',
        description: 'Sắt là kim loại được dùng nhiều nhất trên thế giới.',
      },
    ],
    conceptIds: ['element', 'metal'],
  },
  {
    id: 'fe2o3',
    name: 'Iron(III) oxide',
    commonName: 'gỉ sắt',
    formula: 'Fe2O3',
    state: 'solid',
    atoms: [
      { id: 'fe1', element: 'Fe', x: 30, y: 36 },
      { id: 'fe2', element: 'Fe', x: 70, y: 36 },
      { id: 'o1', element: 'O', x: 20, y: 68 },
      { id: 'o2', element: 'O', x: 50, y: 72 },
      { id: 'o3', element: 'O', x: 80, y: 68 },
    ],
    bonds: [
      { a: 'fe1', b: 'o1', kind: 'ionic' },
      { a: 'fe1', b: 'o2', kind: 'ionic' },
      { a: 'fe2', b: 'o2', kind: 'ionic' },
      { a: 'fe2', b: 'o3', kind: 'ionic' },
    ],
    lifeExamples: [
      {
        illustration: 'rusty-nail',
        title: 'Đinh để ngoài mưa',
        description: 'Lớp nâu đỏ bong tróc trên sắt cũ chủ yếu là Fe₂O₃.',
      },
    ],
    conceptIds: ['compound', 'oxidation'],
  },
  {
    id: 'he',
    name: 'Helium',
    formula: 'He',
    state: 'gas',
    atoms: [{ id: 'he', element: 'He', x: 50, y: 50 }],
    bonds: [],
    lifeExamples: [
      {
        illustration: 'balloons',
        title: 'Bóng bay lơ lửng',
        description: 'Helium nhẹ hơn không khí nên quả bóng bơm helium tự bay lên trần nhà.',
      },
      {
        title: 'Máy chụp cộng hưởng từ',
        description: 'Helium lỏng cực lạnh giữ cho nam châm của máy MRI trong bệnh viện hoạt động.',
      },
    ],
    funFact: 'Helium là nguyên tố nhiều thứ hai trong vũ trụ, chỉ sau hydrogen.',
    conceptIds: ['atom', 'element', 'atomic-number'],
  },
  {
    id: 'c',
    name: 'Carbon',
    formula: 'C',
    state: 'solid',
    atoms: [{ id: 'c', element: 'C', x: 50, y: 50 }],
    bonds: [],
    lifeExamples: [
      {
        illustration: 'charcoal-pencil',
        title: 'Cục than, ruột bút chì',
        description: 'Than trong bếp lò và than chì trong ruột bút chì đều gồm chủ yếu là carbon.',
      },
      {
        title: 'Kim cương',
        description:
          'Kim cương cũng chỉ gồm carbon, nhưng các nguyên tử xếp theo kiểu khác nên cứng và trong suốt.',
      },
    ],
    funFact: 'Mọi sinh vật sống, kể cả bạn, đều được xây từ những bộ khung carbon.',
    conceptIds: ['atom', 'element', 'nonmetal', 'atomic-number'],
  },
  {
    id: 'cu',
    name: 'Copper',
    commonName: 'đồng',
    formula: 'Cu',
    state: 'solid',
    atoms: [{ id: 'cu', element: 'Cu', x: 50, y: 50 }],
    bonds: [],
    lifeExamples: [
      {
        illustration: 'copper-wire',
        title: 'Lõi dây điện',
        description: 'Đồng dẫn điện rất tốt nên lõi của hầu hết dây điện trong nhà làm bằng đồng.',
      },
      {
        title: 'Trống đồng Đông Sơn',
        description: 'Người Việt cổ đã đúc trống từ đồng pha thiếc cách đây hơn 2.000 năm.',
      },
    ],
    funFact: 'Kí hiệu Cu đến từ "cuprum", tên Latin của đồng.',
    conceptIds: ['element', 'metal', 'chemical-symbol'],
  },
  {
    id: 'au',
    name: 'Gold',
    commonName: 'vàng',
    formula: 'Au',
    state: 'solid',
    atoms: [{ id: 'au', element: 'Au', x: 50, y: 50 }],
    bonds: [],
    lifeExamples: [
      {
        illustration: 'gold-ring',
        title: 'Nhẫn cưới, vàng miếng',
        description: 'Vàng không gỉ và không xỉn màu nên được dùng làm trang sức và của để dành.',
      },
      {
        title: 'Bên trong điện thoại',
        description:
          'Các điểm tiếp xúc tí hon trên mạch điện thoại được mạ vàng vì vàng dẫn điện tốt và không gỉ.',
      },
    ],
    funFact:
      'Toàn bộ số vàng loài người từng khai thác, nếu đúc lại, chỉ vừa một khối lập phương cạnh hơn 20 mét.',
    conceptIds: ['element', 'metal', 'chemical-symbol'],
  },
  {
    id: 'n2',
    name: 'Nitrogen',
    formula: 'N2',
    state: 'gas',
    atoms: [
      { id: 'n1', element: 'N', x: 34, y: 50 },
      { id: 'n2', element: 'N', x: 66, y: 50 },
    ],
    bonds: [{ a: 'n1', b: 'n2', order: 3 }],
    lifeExamples: [
      {
        illustration: 'snack-bag',
        title: 'Gói bim bim phồng căng',
        description:
          'Khí bơm trong gói bim bim là nitrogen, giúp bánh giòn lâu và không bị vỡ vụn.',
      },
      {
        title: 'Không khí quanh bạn',
        description: 'Gần bốn phần năm không khí bạn hít vào là khí nitrogen.',
      },
    ],
    funFact:
      'Liên kết ba trong N₂ rất bền, nên khí nitrogen gần như không phản ứng với thứ gì quanh bạn.',
    conceptIds: ['molecule', 'elemental-substance', 'covalent-bond', 'multiple-bond'],
  },
  {
    id: 'nh3',
    name: 'Ammonia',
    formula: 'NH3',
    state: 'gas',
    atoms: [
      { id: 'n', element: 'N', x: 50, y: 38 },
      { id: 'h1', element: 'H', x: 24, y: 56 },
      { id: 'h2', element: 'H', x: 50, y: 68 },
      { id: 'h3', element: 'H', x: 76, y: 56 },
    ],
    bonds: [
      { a: 'n', b: 'h1' },
      { a: 'n', b: 'h2' },
      { a: 'n', b: 'h3' },
    ],
    lifeExamples: [
      {
        illustration: 'rice-field',
        title: 'Phân đạm',
        description: 'Ammonia là nguyên liệu để sản xuất phân đạm bón cho lúa và rau.',
      },
      {
        title: 'Mùi khai',
        description: 'Mùi khai nồng ở chuồng trại hay nhà vệ sinh kém sạch là do ammonia bay ra.',
      },
    ],
    conceptIds: ['molecule', 'compound', 'covalent-bond', 'formula'],
  },
  {
    id: 'co',
    name: 'Carbon monoxide',
    formula: 'CO',
    state: 'gas',
    atoms: [
      { id: 'c', element: 'C', x: 34, y: 50 },
      { id: 'o', element: 'O', x: 66, y: 50 },
    ],
    bonds: [{ a: 'c', b: 'o', order: 3 }],
    lifeExamples: [
      {
        illustration: 'coal-stove',
        title: 'Đốt than trong phòng kín',
        description:
          'Than cháy thiếu oxygen sinh ra CO, một khí độc không màu, không mùi. Đừng bao giờ sưởi than trong phòng đóng kín.',
      },
      {
        title: 'Khói xe',
        description: 'Khí thải xe máy, ô tô có chứa CO, vì thế không nên nổ máy lâu trong nhà kín.',
      },
    ],
    funFact: 'Chỉ kém CO₂ một nguyên tử oxygen, nhưng CO lại là một chất khác hẳn và rất độc.',
    conceptIds: ['molecule', 'compound', 'formula'],
  },
  {
    id: 'c2h6o',
    name: 'Ethanol',
    commonName: 'cồn',
    formula: 'C2H6O',
    state: 'liquid',
    atoms: [
      { id: 'c1', element: 'C', x: 36, y: 56 },
      { id: 'c2', element: 'C', x: 58, y: 44 },
      { id: 'o', element: 'O', x: 80, y: 56 },
      { id: 'h1', element: 'H', x: 14, y: 46 },
      { id: 'h2', element: 'H', x: 26, y: 80 },
      { id: 'h3', element: 'H', x: 48, y: 80 },
      { id: 'h4', element: 'H', x: 48, y: 20 },
      { id: 'h5', element: 'H', x: 72, y: 22 },
      { id: 'h6', element: 'H', x: 84, y: 80 },
    ],
    bonds: [
      { a: 'c1', b: 'c2' },
      { a: 'c2', b: 'o' },
      { a: 'o', b: 'h6' },
      { a: 'c1', b: 'h1' },
      { a: 'c1', b: 'h2' },
      { a: 'c1', b: 'h3' },
      { a: 'c2', b: 'h4' },
      { a: 'c2', b: 'h5' },
    ],
    lifeExamples: [
      {
        illustration: 'hand-sanitizer',
        title: 'Nước rửa tay sát khuẩn',
        description: 'Ethanol là chất diệt khuẩn chính trong cồn y tế và nước rửa tay khô.',
      },
      {
        title: 'Rượu, bia',
        description: 'Men biến đường trong gạo, nho, lúa mạch thành ethanol, tạo nên rượu và bia.',
      },
    ],
    funFact: 'Xăng sinh học ở cây xăng có pha ethanol: xăng E5 khoảng 5%, xăng E10 khoảng 10%.',
    conceptIds: ['molecule', 'compound', 'formula', 'covalent-bond'],
  },
  {
    id: 'naf',
    name: 'Sodium fluoride',
    formula: 'NaF',
    state: 'solid',
    atoms: [
      { id: 'na', element: 'Na', x: 36, y: 50 },
      { id: 'f', element: 'F', x: 64, y: 50 },
    ],
    bonds: [{ a: 'na', b: 'f', kind: 'ionic' }],
    lifeExamples: [
      {
        illustration: 'toothpaste',
        title: 'Kem đánh răng',
        description:
          'Nhiều loại kem đánh răng chứa sodium fluoride, giúp men răng chắc hơn và ngừa sâu răng.',
      },
    ],
    funFact:
      'Giống muối ăn, sodium fluoride gồm các ion trái dấu hút nhau: Na⁺ và F⁻, xếp xen kẽ thành tinh thể.',
    conceptIds: ['compound', 'ionic-bond', 'ion'],
  },
  {
    id: 'al',
    name: 'Aluminium',
    commonName: 'nhôm',
    formula: 'Al',
    state: 'solid',
    atoms: [{ id: 'al', element: 'Al', x: 50, y: 50 }],
    bonds: [],
    lifeExamples: [
      {
        illustration: 'soda-can',
        title: 'Vỏ lon nước ngọt',
        description:
          'Vỏ lon mỏng, nhẹ mà chắc là nhờ làm bằng nhôm. Lon cũ được nấu chảy ở khoảng 660 °C rồi đúc thành lon mới, và nó vẫn là nhôm.',
      },
      {
        title: 'Giấy bạc gói đồ nướng',
        description: 'Tên gọi là giấy bạc, nhưng thật ra đó là nhôm cán thật mỏng.',
      },
    ],
    funFact: 'Tái chế một vỏ lon nhôm tiết kiệm khoảng 95% năng lượng so với làm lon mới từ quặng.',
    conceptIds: ['element', 'metal', 'state-of-matter'],
  },
  {
    id: 'caco3',
    name: 'Calcium carbonate',
    formula: 'CaCO3',
    state: 'solid',
    atoms: [
      { id: 'ca', element: 'Ca', x: 16, y: 50 },
      { id: 'o1', element: 'O', x: 40, y: 32 },
      { id: 'o2', element: 'O', x: 40, y: 68 },
      { id: 'c', element: 'C', x: 60, y: 50 },
      { id: 'o3', element: 'O', x: 86, y: 50 },
    ],
    bonds: [
      { a: 'ca', b: 'o1', kind: 'ionic' },
      { a: 'ca', b: 'o2', kind: 'ionic' },
      { a: 'c', b: 'o1' },
      { a: 'c', b: 'o2' },
      { a: 'c', b: 'o3', order: 2 },
    ],
    lifeExamples: [
      {
        illustration: 'frying-egg',
        title: 'Vỏ quả trứng',
        description:
          'Vỏ trứng cứng là nhờ calcium carbonate. Đập vỡ vỏ để rán trứng, các mảnh vỏ vẫn là calcium carbonate.',
      },
      {
        title: 'Đá vôi và cặn trong ấm',
        description:
          'Núi đá vôi ở vịnh Hạ Long và lớp cặn trắng dưới đáy ấm đun nước đều chủ yếu là calcium carbonate.',
      },
    ],
    funFact: 'Vỏ sò, vỏ ốc, san hô và ngọc trai cũng được xây từ calcium carbonate.',
    conceptIds: ['compound', 'ionic-bond', 'physical-change'],
  },
  {
    id: 'mg',
    name: 'Magnesium',
    formula: 'Mg',
    state: 'solid',
    atoms: [{ id: 'mg', element: 'Mg', x: 50, y: 50 }],
    bonds: [],
    lifeExamples: [
      {
        illustration: 'sparkler',
        title: 'Que pháo bông',
        description:
          'Một số loại que pháo bông có bột magnesium, cháy thành những tia sáng trắng chói mắt.',
      },
      {
        title: 'Rau xanh',
        description:
          'Chất diệp lục làm lá cây có màu xanh chứa magnesium. Ăn rau xanh là cách bạn nạp magnesium cho cơ thể.',
      },
    ],
    funFact:
      'Magnesium cháy sáng đến mức ngày xưa thợ ảnh đốt bột magnesium để làm đèn flash chụp hình.',
    conceptIds: ['element', 'metal', 'combustion'],
  },
  {
    id: 'mgo',
    name: 'Magnesium oxide',
    formula: 'MgO',
    state: 'solid',
    atoms: [
      { id: 'mg', element: 'Mg', x: 36, y: 50 },
      { id: 'o', element: 'O', x: 64, y: 50 },
    ],
    bonds: [{ a: 'mg', b: 'o', kind: 'ionic' }],
    lifeExamples: [
      {
        illustration: 'sparkler',
        title: 'Bột trắng sau khi magnesium cháy',
        description:
          'Magnesium cháy xong để lại một chất bột màu trắng. Đó là magnesium oxide, sản phẩm của magnesium với oxygen.',
      },
      {
        title: 'Gạch lót lò nung',
        description:
          'Magnesium oxide chịu nhiệt rất tốt, phải hơn 2.800 °C mới nóng chảy, nên được dùng làm gạch lót lò luyện thép.',
      },
    ],
    funFact:
      'Giống muối ăn, magnesium oxide gồm các ion trái dấu hút nhau: Mg²⁺ và O²⁻, xếp xen kẽ thành tinh thể.',
    conceptIds: ['compound', 'ionic-bond', 'oxidation'],
  },
  {
    id: 'h2o2',
    name: 'Hydrogen peroxide',
    commonName: 'oxy già',
    formula: 'H2O2',
    state: 'liquid',
    atoms: [
      { id: 'h1', element: 'H', x: 20, y: 30 },
      { id: 'o1', element: 'O', x: 37, y: 50 },
      { id: 'o2', element: 'O', x: 63, y: 50 },
      { id: 'h2', element: 'H', x: 80, y: 70 },
    ],
    bonds: [
      { a: 'h1', b: 'o1' },
      { a: 'o1', b: 'o2' },
      { a: 'o2', b: 'h2' },
    ],
    lifeExamples: [
      {
        illustration: 'hydrogen-peroxide',
        title: 'Chai oxy già trong tủ thuốc',
        description:
          'Chai oxy già ở hiệu thuốc là hydrogen peroxide pha loãng trong nước, khoảng 3%. Nhỏ lên vết xước, nó sủi bọt trắng vì tách thành nước và khí oxygen. Ngày nay bác sĩ khuyên rửa vết xước bằng nước sạch là đủ.',
      },
      {
        title: 'Thuốc tẩy tóc',
        description:
          'Hydrogen peroxide phá được chất màu nên có trong thuốc tẩy tóc và một số chất tẩy trắng.',
      },
    ],
    funFact:
      'Chỉ hơn nước một nguyên tử oxygen, nhưng H₂O₂ là một chất khác hẳn: uống nước thì khoẻ, còn oxy già thì tuyệt đối không được uống.',
    conceptIds: ['molecule', 'compound', 'formula', 'coefficient'],
  },
  {
    id: 'nahco3',
    name: 'Sodium hydrogencarbonate',
    commonName: 'baking soda',
    formula: 'NaHCO3',
    state: 'solid',
    atoms: [
      { id: 'na', element: 'Na', x: 16, y: 46 },
      { id: 'o1', element: 'O', x: 42, y: 58 },
      { id: 'c', element: 'C', x: 62, y: 42 },
      { id: 'o2', element: 'O', x: 60, y: 16 },
      { id: 'o3', element: 'O', x: 82, y: 58 },
      { id: 'h', element: 'H', x: 82, y: 84 },
    ],
    bonds: [
      { a: 'na', b: 'o1', kind: 'ionic' },
      { a: 'c', b: 'o1' },
      { a: 'c', b: 'o2', order: 2 },
      { a: 'c', b: 'o3' },
      { a: 'o3', b: 'h' },
    ],
    lifeExamples: [
      {
        illustration: 'baking-cake',
        title: 'Bánh nở phồng trong lò',
        description:
          'Gặp nóng, baking soda trong bột bánh sinh ra khí carbon dioxide. Bọt khí làm bánh phồng lên và xốp.',
      },
      {
        title: 'Khử mùi tủ lạnh',
        description: 'Một bát nhỏ baking soda để trong tủ lạnh giúp hút bớt mùi thức ăn.',
      },
    ],
    funFact:
      'Baking soda gặp giấm sẽ sủi bọt ùn ùn. Đó là cách làm mô hình núi lửa quen thuộc trong các hội chợ khoa học.',
    conceptIds: ['compound', 'ionic-bond', 'formula', 'reaction-signs'],
  },
  {
    id: 'c2h4o2',
    name: 'Acetic acid',
    formula: 'CH3COOH',
    state: 'liquid',
    atoms: [
      { id: 'c1', element: 'C', x: 38, y: 45 },
      { id: 'c2', element: 'C', x: 64, y: 45 },
      { id: 'o1', element: 'O', x: 80, y: 25 },
      { id: 'o2', element: 'O', x: 62, y: 71 },
      { id: 'h1', element: 'H', x: 38, y: 19 },
      { id: 'h2', element: 'H', x: 38, y: 71 },
      { id: 'h3', element: 'H', x: 14, y: 45 },
      { id: 'h4', element: 'H', x: 86, y: 80 },
    ],
    bonds: [
      { a: 'c1', b: 'c2' },
      { a: 'c2', b: 'o1', order: 2 },
      { a: 'c2', b: 'o2' },
      { a: 'o2', b: 'h4' },
      { a: 'c1', b: 'h1' },
      { a: 'c1', b: 'h2' },
      { a: 'c1', b: 'h3' },
    ],
    lifeExamples: [
      {
        illustration: 'vinegar-bottle',
        title: 'Vị chua của giấm',
        description:
          'Giấm ăn không phải là acetic acid nguyên chất mà là một dung dịch: chỉ khoảng 2 đến 5% acetic acid hoà tan trong nước. Chừng đó đã đủ tạo vị chua.',
      },
      {
        title: 'Đồ chua ngâm giấm',
        description:
          'Cà rốt, củ cải, dưa chuột ngâm giấm giữ được lâu vì acetic acid kìm hãm vi khuẩn làm hỏng thức ăn.',
      },
    ],
    funFact:
      'Công thức thường được viết là CH₃COOH để thấy rõ các nhóm nguyên tử. Đếm gộp lại, phân tử có 2 C, 4 H và 2 O.',
    conceptIds: ['molecule', 'compound', 'formula', 'solution'],
  },
  {
    id: 'c2h3nao2',
    name: 'Sodium acetate',
    formula: 'CH3COONa',
    state: 'solid',
    atoms: [
      { id: 'c1', element: 'C', x: 41, y: 40 },
      { id: 'c2', element: 'C', x: 67, y: 40 },
      { id: 'o1', element: 'O', x: 83, y: 20 },
      { id: 'o2', element: 'O', x: 75, y: 64 },
      { id: 'na', element: 'Na', x: 53, y: 82 },
      { id: 'h1', element: 'H', x: 33, y: 16 },
      { id: 'h2', element: 'H', x: 33, y: 64 },
      { id: 'h3', element: 'H', x: 17, y: 40 },
    ],
    bonds: [
      { a: 'c1', b: 'c2' },
      { a: 'c2', b: 'o1', order: 2 },
      { a: 'c2', b: 'o2' },
      { a: 'na', b: 'o2', kind: 'ionic' },
      { a: 'c1', b: 'h1' },
      { a: 'c1', b: 'h2' },
      { a: 'c1', b: 'h3' },
    ],
    lifeExamples: [
      {
        illustration: 'vinegar-volcano',
        title: 'Thứ còn lại sau núi lửa giấm',
        description:
          'Khi giấm và baking soda ngừng sủi bọt, trong cốc còn nước và sodium acetate hoà tan trong đó. Bạn không nhìn thấy nó, nhưng nó vẫn ở đấy.',
      },
      {
        title: 'Túi sưởi tay',
        description:
          'Loại túi sưởi bẻ miếng kim loại là nóng lên chứa dung dịch sodium acetate. Khi nó kết tinh, túi toả nhiệt.',
      },
    ],
    funFact:
      'Công thức thường được viết là CH₃COONa: giống acetic acid CH₃COOH, chỉ khác là sodium đã thế chỗ một nguyên tử hydrogen.',
    conceptIds: ['compound', 'ionic-bond', 'formula', 'conservation-of-mass'],
  },
  ...unit05Molecules,
  ...unit06Molecules,
  ...unit07Molecules,
  ...unit08Molecules,
  ...unit09Molecules,
]
