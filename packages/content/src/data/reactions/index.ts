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
]
