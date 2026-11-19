import type { ReactionInput } from '../../schema/reaction.js'

/** Phản ứng xuất hiện lần đầu ở Unit 12. */
export const unit12Reactions: ReactionInput[] = [
  {
    id: 'ethane-combustion',
    name: 'Ethane cháy',
    reactants: [
      { moleculeId: 'c2h6', coefficient: 2 },
      { moleculeId: 'o2', coefficient: 7 },
    ],
    products: [
      { moleculeId: 'co2', coefficient: 4 },
      { moleculeId: 'h2o', coefficient: 6 },
    ],
    signs: ['Ngọn lửa sáng', 'Toả nhiều nhiệt', 'Không để lại tro'],
    condition: 'mồi lửa',
    story: {
      illustration: 'oil-rig',
      title: 'Ngọn đuốc trên giàn khoan',
      description:
        'Khí lấy lên cùng dầu mỏ chứa methane, ethane và vài alkane khác. Phần khí chưa kịp thu gom được đốt ở đầu một ống cao, thành ngọn đuốc nhìn thấy từ rất xa. Ethane trong đó phản ứng với oxygen, tạo thành carbon dioxide và hơi nước.',
    },
    conceptIds: ['reaction', 'combustion', 'alkane', 'balancing'],
  },
  {
    id: 'ethanol-combustion',
    name: 'Ethanol cháy',
    reactants: [
      { moleculeId: 'c2h6o', coefficient: 1 },
      { moleculeId: 'o2', coefficient: 3 },
    ],
    products: [
      { moleculeId: 'co2', coefficient: 2 },
      { moleculeId: 'h2o', coefficient: 3 },
    ],
    signs: ['Ngọn lửa xanh nhạt', 'Toả nhiều nhiệt', 'Gần như không có khói'],
    condition: 'mồi lửa',
    story: {
      illustration: 'alcohol-lamp',
      title: 'Ngọn lửa xanh nhạt của đèn cồn',
      description:
        'Trong phòng thí nghiệm, thầy cô dùng đèn cồn để đun nóng ống nghiệm. Ethanol thấm lên bấc, bay hơi rồi phản ứng với oxygen trong không khí, tạo thành carbon dioxide và hơi nước. Ngọn lửa xanh nhạt, gần như không có khói, ban ngày rất khó nhìn thấy.',
    },
    conceptIds: ['reaction', 'combustion', 'ethylic-alcohol', 'balancing'],
  },
  {
    id: 'esterification',
    name: 'Phản ứng ester hoá',
    reactants: [
      { moleculeId: 'c2h4o2', coefficient: 1 },
      { moleculeId: 'c2h6o', coefficient: 1 },
    ],
    products: [
      { moleculeId: 'c4h8o2', coefficient: 1 },
      { moleculeId: 'h2o', coefficient: 1 },
    ],
    signs: ['Xuất hiện mùi thơm', 'Chất lỏng mới nổi thành lớp trên mặt nước', 'Diễn ra chậm'],
    condition: 'sulfuric acid đặc, đun nóng',
    story: {
      illustration: 'nail-polish-remover',
      title: 'Mùi thơm trong lọ nước tẩy sơn móng tay',
      description:
        'Nhiều loại nước tẩy sơn móng tay chứa ethyl acetate, một chất lỏng mùi thơm hoà tan được lớp sơn. Nhà máy có thể làm ra nó bằng cách đun nóng acetic acid với ethanol, có sulfuric acid đặc làm xúc tác. Hai phân tử ghép lại thành một phân tử ester và tách ra một phân tử nước.',
    },
    conceptIds: ['reaction', 'ester', 'acetic-acid', 'ethylic-alcohol'],
  },
]
