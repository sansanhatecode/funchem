import type { ReactionInput } from '../../schema/reaction.js'

export const reactions: ReactionInput[] = [
  {
    id: 'methane-combustion',
    name: 'Methane cháy',
    reactants: [
      { moleculeId: 'ch4', coefficient: 1 },
      { moleculeId: 'o2', coefficient: 2 },
    ],
    products: [
      { moleculeId: 'co2', coefficient: 1 },
      { moleculeId: 'h2o', coefficient: 2 },
    ],
    signs: ['Ngọn lửa xanh', 'Toả nhiệt', 'Hơi nước đọng trên nồi lạnh'],
    condition: 'tia lửa',
    story: {
      illustration: 'biogas-stove',
      title: 'Ngọn lửa xanh trên bếp biogas',
      description:
        'Hầm biogas ở nông thôn và khí thiên nhiên đều chứa chủ yếu là methane. Khi bật bếp, methane gặp oxygen trong không khí. Tia lửa khởi động phản ứng, các nguyên tử sắp xếp lại thành CO₂ và hơi nước, đồng thời toả nhiệt để nấu ăn.',
    },
    conceptIds: ['reaction', 'conservation-of-mass', 'combustion'],
  },
  {
    id: 'rusting',
    name: 'Sắt bị gỉ',
    reactants: [
      { moleculeId: 'fe', coefficient: 4 },
      { moleculeId: 'o2', coefficient: 3 },
    ],
    products: [{ moleculeId: 'fe2o3', coefficient: 2 }],
    signs: ['Bề mặt chuyển nâu đỏ', 'Bong tróc', 'Diễn ra rất chậm'],
    condition: 'có hơi ẩm',
    story: {
      illustration: 'rusty-nail',
      title: 'Cây đinh để quên ngoài mưa',
      description:
        'Sắt gặp oxygen và hơi nước lâu ngày sẽ dần biến thành gỉ. Đây là phản ứng chậm, nhưng mỗi năm làm hỏng hàng triệu tấn thép trên thế giới.',
    },
    conceptIds: ['reaction', 'conservation-of-mass', 'oxidation'],
  },
  {
    id: 'water-formation',
    name: 'Tạo thành nước',
    reactants: [
      { moleculeId: 'h2', coefficient: 2 },
      { moleculeId: 'o2', coefficient: 1 },
    ],
    products: [{ moleculeId: 'h2o', coefficient: 2 }],
    signs: ['Nổ nhẹ', 'Toả nhiệt mạnh'],
    condition: 'tia lửa',
    story: {
      illustration: 'rocket',
      title: 'Nhiên liệu tên lửa',
      description: 'Tên lửa đốt hydrogen với oxygen; sản phẩm phụt ra phía sau chỉ là hơi nước.',
    },
    conceptIds: ['reaction', 'conservation-of-mass'],
  },
  {
    id: 'carbon-combustion',
    name: 'Than cháy',
    reactants: [
      { moleculeId: 'c', coefficient: 1 },
      { moleculeId: 'o2', coefficient: 1 },
    ],
    products: [{ moleculeId: 'co2', coefficient: 1 }],
    signs: ['Than đỏ rực', 'Toả nhiệt', 'Cục than nhỏ dần'],
    condition: 'mồi lửa',
    story: {
      illustration: 'charcoal-grill',
      title: 'Bếp than nướng thịt',
      description:
        'Than gồm chủ yếu là carbon. Khi được mồi lửa và quạt đủ gió, mỗi nguyên tử carbon kết hợp với một phân tử oxygen thành khí carbon dioxide bay đi, đồng thời toả nhiệt làm chín thịt. Vì thế cục than cứ nhỏ dần.',
    },
    conceptIds: ['reaction', 'conservation-of-mass', 'combustion', 'balancing'],
  },
  {
    id: 'magnesium-burning',
    name: 'Magnesium cháy',
    reactants: [
      { moleculeId: 'mg', coefficient: 2 },
      { moleculeId: 'o2', coefficient: 1 },
    ],
    products: [{ moleculeId: 'mgo', coefficient: 2 }],
    signs: ['Ánh sáng trắng chói', 'Toả nhiệt mạnh', 'Để lại bột trắng'],
    condition: 'mồi lửa',
    story: {
      illustration: 'sparkler',
      title: 'Que pháo bông đêm giao thừa',
      description:
        'Trong que pháo bông có bột kim loại, thường là magnesium. Khi cháy, magnesium kết hợp với oxygen thành magnesium oxide, một chất bột màu trắng, đồng thời phát ra ánh sáng trắng chói mắt.',
    },
    conceptIds: ['reaction', 'conservation-of-mass', 'combustion', 'balancing'],
  },
  {
    id: 'ammonia-synthesis',
    name: 'Tổng hợp ammonia',
    reactants: [
      { moleculeId: 'n2', coefficient: 1 },
      { moleculeId: 'h2', coefficient: 3 },
    ],
    products: [{ moleculeId: 'nh3', coefficient: 2 }],
    signs: ['Diễn ra trong tháp kín của nhà máy', 'Sinh ra khí có mùi khai'],
    condition: 'nhiệt độ và áp suất cao, có xúc tác',
    story: {
      illustration: 'rice-field',
      title: 'Từ không khí đến ruộng lúa',
      description:
        'Nhà máy phân đạm lấy khí nitrogen từ không khí, cho kết hợp với khí hydrogen để tạo ra ammonia. Từ ammonia, người ta làm ra phân đạm bón cho lúa. Ước tính khoảng một nửa lương thực trên thế giới có được là nhờ phản ứng này.',
    },
    conceptIds: ['reaction', 'conservation-of-mass', 'balancing'],
  },
  {
    id: 'carbon-monoxide-burning',
    name: 'Carbon monoxide cháy',
    reactants: [
      { moleculeId: 'co', coefficient: 2 },
      { moleculeId: 'o2', coefficient: 1 },
    ],
    products: [{ moleculeId: 'co2', coefficient: 2 }],
    signs: ['Ngọn lửa xanh lam', 'Toả nhiệt'],
    condition: 'nhiệt độ cao',
    story: {
      illustration: 'coal-stove',
      title: 'Ngọn lửa xanh trên bếp than tổ ong',
      description:
        'Than cháy thiếu không khí sinh ra khí độc carbon monoxide. Phía trên viên than đang đỏ, CO gặp thêm oxygen và cháy tiếp với ngọn lửa xanh lam, thành carbon dioxide. Phần CO chưa kịp cháy sẽ thoát ra ngoài, vì thế đừng bao giờ đốt than trong phòng kín.',
    },
    conceptIds: ['reaction', 'conservation-of-mass', 'combustion', 'balancing'],
  },
  {
    id: 'peroxide-decomposition',
    name: 'Oxy già sủi bọt',
    reactants: [{ moleculeId: 'h2o2', coefficient: 2 }],
    products: [
      { moleculeId: 'h2o', coefficient: 2 },
      { moleculeId: 'o2', coefficient: 1 },
    ],
    signs: ['Sủi bọt trắng', 'Hơi ấm lên'],
    condition: 'chất xúc tác',
    story: {
      illustration: 'hydrogen-peroxide',
      title: 'Oxy già sủi bọt trên vết xước',
      description:
        'Nhỏ oxy già lên vết xước, bạn thấy bọt trắng sủi lên. Một chất có sẵn trong máu và tế bào giúp hydrogen peroxide tách rất nhanh thành nước và khí oxygen. Bọt trắng đó chính là những bong bóng oxygen.',
    },
    conceptIds: ['reaction', 'conservation-of-mass', 'reaction-signs', 'balancing'],
  },
  {
    id: 'baking-soda-vinegar',
    name: 'Núi lửa giấm và baking soda',
    reactants: [
      { moleculeId: 'nahco3', coefficient: 1 },
      { moleculeId: 'c2h4o2', coefficient: 1 },
    ],
    products: [
      { moleculeId: 'c2h3nao2', coefficient: 1 },
      { moleculeId: 'h2o', coefficient: 1 },
      { moleculeId: 'co2', coefficient: 1 },
    ],
    signs: ['Sủi bọt mạnh', 'Bọt trào ra ngoài', 'Hỗn hợp lạnh đi một chút'],
    story: {
      illustration: 'vinegar-volcano',
      title: 'Núi lửa trong bếp',
      description:
        'Đổ giấm vào baking soda, bọt trắng sủi lên ùn ùn như núi lửa phun. Acetic acid trong giấm phản ứng với baking soda, sinh ra khí carbon dioxide. Trong cốc còn lại nước và sodium acetate hoà tan.',
    },
    conceptIds: ['reaction', 'reaction-signs', 'conservation-of-mass'],
  },
]
