import type { MoleculeInput } from '../../schema/molecule.js'

/** Phân tử xuất hiện lần đầu ở Unit 5. */
export const unit05Molecules: MoleculeInput[] = [
  {
    id: 'hcl',
    name: 'Hydrochloric acid',
    formula: 'HCl',
    state: 'liquid',
    atoms: [
      { id: 'h', element: 'H', x: 36, y: 50 },
      { id: 'cl', element: 'Cl', x: 62, y: 50 },
    ],
    bonds: [{ a: 'h', b: 'cl' }],
    lifeExamples: [
      {
        illustration: 'metal-in-acid',
        title: 'Cốc acid trong phòng thí nghiệm',
        description:
          'Thả một mẩu magnesium vào dung dịch hydrochloric acid, bọt khí hydrogen sủi lên và mẩu kim loại tan dần. Thí nghiệm này chỉ làm ở trường, có thầy cô và kính bảo hộ.',
      },
      {
        title: 'Dịch dạ dày',
        description:
          'Dạ dày của bạn tự tiết ra hydrochloric acid loãng để giúp tiêu hoá thức ăn và diệt bớt vi khuẩn.',
      },
      {
        title: 'Tẩy gỉ cho thép',
        description:
          'Trong nhà máy, thép được nhúng qua hydrochloric acid để làm sạch lớp gỉ trước khi sơn hoặc mạ.',
      },
    ],
    funFact:
      'Hydrochloric acid là dung dịch của khí hydrogen chloride HCl trong nước. Tan vào nước, mỗi phân tử HCl tách thành một ion H⁺ và một ion Cl⁻.',
    conceptIds: ['acid', 'compound', 'covalent-bond'],
  },
  {
    id: 'h2so4',
    name: 'Sulfuric acid',
    formula: 'H2SO4',
    state: 'liquid',
    atoms: [
      { id: 's', element: 'S', x: 50, y: 50 },
      { id: 'o1', element: 'O', x: 50, y: 23 },
      { id: 'o2', element: 'O', x: 50, y: 77 },
      { id: 'o3', element: 'O', x: 25, y: 50 },
      { id: 'o4', element: 'O', x: 75, y: 50 },
      { id: 'h1', element: 'H', x: 10, y: 34 },
      { id: 'h2', element: 'H', x: 90, y: 66 },
    ],
    bonds: [
      { a: 's', b: 'o1', order: 2 },
      { a: 's', b: 'o2', order: 2 },
      { a: 's', b: 'o3' },
      { a: 's', b: 'o4' },
      { a: 'o3', b: 'h1' },
      { a: 'o4', b: 'h2' },
    ],
    lifeExamples: [
      {
        illustration: 'acid-rain',
        title: 'Trong giọt mưa acid',
        description:
          'Khí sulfur dioxide từ ống khói gặp oxygen và hơi nước, dần biến thành sulfuric acid rồi theo mưa rơi xuống. Mưa như vậy làm mòn tượng đá và hại cây cối.',
      },
      {
        title: 'Bình ắc quy',
        description:
          'Bình ắc quy chì của xe máy, ô tô chứa dung dịch sulfuric acid. Acid này gây bỏng nặng, nên không bao giờ tự mở bình.',
      },
      {
        title: 'Sản xuất phân bón',
        description: 'Phần lớn sulfuric acid trên thế giới được dùng để sản xuất phân bón.',
      },
    ],
    funFact:
      'Sulfuric acid là một trong những hoá chất được sản xuất nhiều nhất thế giới. Mỗi phân tử có thể nhả ra tới 2 ion H⁺.',
    conceptIds: ['acid', 'compound', 'formula'],
  },
  {
    id: 'naoh',
    name: 'Sodium hydroxide',
    commonName: 'xút',
    formula: 'NaOH',
    state: 'solid',
    atoms: [
      { id: 'na', element: 'Na', x: 22, y: 54 },
      { id: 'o', element: 'O', x: 52, y: 54 },
      { id: 'h', element: 'H', x: 72, y: 40 },
    ],
    bonds: [
      { a: 'na', b: 'o', kind: 'ionic' },
      { a: 'o', b: 'h' },
    ],
    lifeExamples: [
      {
        illustration: 'soap-bar',
        title: 'Nguyên liệu nấu xà phòng',
        description:
          'Xà phòng được nấu từ dầu mỡ và sodium hydroxide. Trong bánh xà phòng thành phẩm, sodium hydroxide đã phản ứng hết nên không còn nữa.',
      },
      {
        title: 'Bột thông cống',
        description:
          'Một số loại bột thông cống chứa sodium hydroxide. Nó ăn mòn da và mắt rất mạnh, chỉ người lớn mới dùng và phải đeo găng tay, kính bảo hộ.',
      },
    ],
    funFact:
      'Tên dân gian đầy đủ của NaOH là "xút ăn da". Cái tên đã nói lên lí do không ai được chạm tay vào nó.',
    conceptIds: ['base', 'compound', 'ionic-bond'],
  },
  {
    id: 'caoh2',
    name: 'Calcium hydroxide',
    commonName: 'vôi tôi',
    formula: 'Ca(OH)2',
    state: 'solid',
    atoms: [
      { id: 'ca', element: 'Ca', x: 50, y: 56 },
      { id: 'o1', element: 'O', x: 24, y: 46 },
      { id: 'h1', element: 'H', x: 9, y: 30 },
      { id: 'o2', element: 'O', x: 76, y: 46 },
      { id: 'h2', element: 'H', x: 91, y: 30 },
    ],
    bonds: [
      { a: 'ca', b: 'o1', kind: 'ionic' },
      { a: 'ca', b: 'o2', kind: 'ionic' },
      { a: 'o1', b: 'h1' },
      { a: 'o2', b: 'h2' },
    ],
    lifeExamples: [
      {
        illustration: 'limewash',
        title: 'Xô vôi quét tường, quét gốc cây',
        description:
          'Thứ bột nhão màu trắng trong xô vôi là calcium hydroxide trộn với nước. Vôi bắn vào mắt rất nguy hiểm, nên thợ quét vôi luôn đeo kính và găng tay.',
      },
      {
        title: 'Nước vôi trong',
        description:
          'Calcium hydroxide chỉ tan một ít trong nước. Phần nước trong gạn ra gọi là nước vôi trong, hay được dùng để ngâm bí, ngâm dừa cho giòn trước khi làm mứt.',
      },
    ],
    funFact:
      'Lớp vôi trên tường hút dần khí carbon dioxide trong không khí và biến thành calcium carbonate, cứng như đá vôi.',
    conceptIds: ['base', 'compound', 'ionic-bond', 'formula'],
  },
  {
    id: 'cao',
    name: 'Calcium oxide',
    commonName: 'vôi sống',
    formula: 'CaO',
    state: 'solid',
    atoms: [
      { id: 'ca', element: 'Ca', x: 36, y: 50 },
      { id: 'o', element: 'O', x: 65, y: 50 },
    ],
    bonds: [{ a: 'ca', b: 'o', kind: 'ionic' }],
    lifeExamples: [
      {
        illustration: 'limewash',
        title: 'Cục vôi sống trước khi tôi',
        description:
          'Vôi sống là những cục trắng xám nung ra từ đá vôi. Thả vào nước, nó toả nhiệt rất mạnh, nước sôi sùng sục, rồi thành vôi tôi. Việc tôi vôi chỉ dành cho thợ có đồ bảo hộ.',
      },
      {
        title: 'Khử chua cho đất',
        description:
          'Đất quá chua thì cây khó lớn. Nông dân rắc vôi bột lên ruộng để trung hoà bớt acid trong đất.',
      },
    ],
    funFact:
      'Nung đá vôi CaCO₃ ở khoảng 900 °C, khí carbon dioxide bay đi, thứ còn lại trong lò chính là vôi sống CaO.',
    conceptIds: ['oxide', 'compound', 'ionic-bond'],
  },
  {
    id: 'mgoh2',
    name: 'Magnesium hydroxide',
    formula: 'Mg(OH)2',
    state: 'solid',
    atoms: [
      { id: 'mg', element: 'Mg', x: 50, y: 44 },
      { id: 'o1', element: 'O', x: 24, y: 54 },
      { id: 'h1', element: 'H', x: 9, y: 70 },
      { id: 'o2', element: 'O', x: 76, y: 54 },
      { id: 'h2', element: 'H', x: 91, y: 70 },
    ],
    bonds: [
      { a: 'mg', b: 'o1', kind: 'ionic' },
      { a: 'mg', b: 'o2', kind: 'ionic' },
      { a: 'o1', b: 'h1' },
      { a: 'o2', b: 'h2' },
    ],
    lifeExamples: [
      {
        illustration: 'antacid',
        title: 'Thuốc giảm acid dạ dày',
        description:
          'Một số thuốc dạ dày dạng sữa trắng chứa magnesium hydroxide. Nó gần như không tan trong nước nên lơ lửng thành thứ sữa đục. Gặp acid trong dạ dày, nó trung hoà bớt acid. Dùng thuốc thì luôn theo chỉ dẫn của bác sĩ.',
      },
      {
        title: 'Nhựa khó cháy',
        description:
          'Magnesium hydroxide được trộn vào một số loại nhựa bọc dây điện để chúng khó bắt lửa hơn.',
      },
    ],
    funFact:
      'Magnesium hydroxide là base nhưng gần như không tan trong nước, nên nó không phải là kiềm.',
    conceptIds: ['base', 'compound', 'ionic-bond', 'neutralisation'],
  },
  {
    id: 'mgcl2',
    name: 'Magnesium chloride',
    formula: 'MgCl2',
    state: 'solid',
    atoms: [
      { id: 'cl1', element: 'Cl', x: 21, y: 50 },
      { id: 'mg', element: 'Mg', x: 50, y: 50 },
      { id: 'cl2', element: 'Cl', x: 79, y: 50 },
    ],
    bonds: [
      { a: 'mg', b: 'cl1', kind: 'ionic' },
      { a: 'mg', b: 'cl2', kind: 'ionic' },
    ],
    lifeExamples: [
      {
        illustration: 'metal-in-acid',
        title: 'Muối tan trong cốc sau thí nghiệm',
        description:
          'Khi mẩu magnesium tan hết trong hydrochloric acid, trong cốc còn lại dung dịch magnesium chloride. Mắt không thấy, nhưng cô cạn nước đi sẽ thu được muối màu trắng.',
      },
      {
        title: 'Nước ót làm đậu phụ',
        description:
          'Nước ót, phần nước đắng còn lại ở ruộng muối, có nhiều magnesium chloride. Ở nhiều nơi, người ta dùng nó để làm sữa đậu nành đông lại thành đậu phụ.',
      },
    ],
    funFact:
      'Ion magnesium mang hai điện tích dương (Mg²⁺) nên cần tới hai ion Cl⁻ đi kèm. Vì thế công thức là MgCl₂ chứ không phải MgCl.',
    conceptIds: ['salt', 'compound', 'ionic-bond', 'formula'],
  },
  {
    id: 'so2',
    name: 'Sulfur dioxide',
    formula: 'SO2',
    state: 'gas',
    atoms: [
      { id: 's', element: 'S', x: 50, y: 40 },
      { id: 'o1', element: 'O', x: 25, y: 58 },
      { id: 'o2', element: 'O', x: 75, y: 58 },
    ],
    bonds: [
      { a: 's', b: 'o1', order: 2 },
      { a: 's', b: 'o2', order: 2 },
    ],
    lifeExamples: [
      {
        illustration: 'acid-rain',
        title: 'Khói nhà máy và mưa acid',
        description:
          'Đốt than và dầu có lẫn sulfur (lưu huỳnh) sinh ra khí sulfur dioxide. Trong không khí ẩm, khí này dần biến thành acid rồi theo mưa rơi xuống.',
      },
      {
        title: 'Núi lửa phun',
        description: 'Mỗi lần phun trào, núi lửa thải vào bầu trời rất nhiều khí sulfur dioxide.',
      },
    ],
    funFact: 'Mùi hắc lúc vừa quẹt que diêm có phần của khí sulfur dioxide.',
    conceptIds: ['oxide', 'molecule', 'compound'],
  },
]
