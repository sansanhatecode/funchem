import type { ReactionInput } from '../../schema/reaction.js'

/** Phản ứng xuất hiện lần đầu ở Unit 7. */
export const unit07Reactions: ReactionInput[] = [
  {
    id: 'aluminium-oxidation',
    name: 'Nhôm tự phủ lớp aluminium oxide',
    reactants: [
      { moleculeId: 'al', coefficient: 4 },
      { moleculeId: 'o2', coefficient: 3 },
    ],
    products: [{ moleculeId: 'al2o3', coefficient: 2 }],
    signs: ['Mặt nhôm mới cắt mất dần vẻ sáng gương', 'Lớp màng mỏng tới mức mắt không thấy'],
    story: {
      illustration: 'aluminium-cans',
      title: 'Hai vỏ lon bỏ quên ngoài sân',
      description:
        'Sau một mùa mưa, vỏ hộp sắt đã gỉ nâu, còn vỏ lon nhôm nằm ngay cạnh vẫn sáng. Không phải nhôm lười phản ứng: aluminium (nhôm) kết hợp với oxygen rất nhanh, tạo thành một lớp aluminium oxide mỏng, kín và bám chặt, che cho phần nhôm bên dưới.',
    },
    conceptIds: ['reaction', 'oxidation', 'oxide', 'balancing'],
  },
  {
    id: 'zinc-hydrochloric-acid',
    name: 'Kẽm gặp hydrochloric acid',
    reactants: [
      { moleculeId: 'zn', coefficient: 1 },
      { moleculeId: 'hcl', coefficient: 2 },
    ],
    products: [
      { moleculeId: 'zncl2', coefficient: 1 },
      { moleculeId: 'h2', coefficient: 1 },
    ],
    signs: ['Sủi bọt khí quanh viên kẽm', 'Viên kẽm nhỏ dần', 'Ống nghiệm ấm lên'],
    story: {
      illustration: 'zinc-acid',
      title: 'Viên kẽm sủi bọt trong ống nghiệm',
      description:
        'Trong phòng thí nghiệm của trường, giáo viên thả một viên zinc (kẽm) vào dung dịch hydrochloric acid. Bọt khí hydrogen sủi lên quanh viên kẽm, còn viên kẽm nhỏ dần. Thí nghiệm cần kính bảo hộ vì acid ăn da và hydrogen dễ cháy, không làm ở nhà.',
    },
    conceptIds: ['reaction', 'reaction-signs', 'acid', 'reactivity-series', 'balancing'],
  },
  {
    id: 'iron-copper-sulfate',
    name: 'Sắt đẩy đồng khỏi dung dịch muối',
    reactants: [
      { moleculeId: 'fe', coefficient: 1 },
      { moleculeId: 'cuso4', coefficient: 1 },
    ],
    products: [
      { moleculeId: 'feso4', coefficient: 1 },
      { moleculeId: 'cu', coefficient: 1 },
    ],
    signs: ['Đinh sắt phủ một lớp đồng màu đỏ nâu', 'Màu xanh lam của dung dịch nhạt dần'],
    story: {
      illustration: 'copper-coated-nail',
      title: 'Cây đinh sắt khoác áo đồng',
      description:
        'Trong phòng thí nghiệm, một cây đinh sắt xám bạc được thả vào cốc dung dịch copper(II) sulfate màu xanh lam. Ít phút sau, phần đinh ngập trong dung dịch phủ một lớp đồng màu đỏ nâu, còn màu xanh của dung dịch nhạt dần. Copper(II) sulfate độc, nên đây không phải thí nghiệm làm ở nhà.',
    },
    conceptIds: ['reaction', 'reaction-signs', 'displacement', 'reactivity-series', 'salt'],
  },
  {
    id: 'iron-extraction',
    name: 'Tách sắt khỏi quặng trong lò cao',
    reactants: [
      { moleculeId: 'fe2o3', coefficient: 1 },
      { moleculeId: 'co', coefficient: 3 },
    ],
    products: [
      { moleculeId: 'fe', coefficient: 2 },
      { moleculeId: 'co2', coefficient: 3 },
    ],
    signs: ['Quặng nâu đỏ biến thành kim loại nóng chảy', 'Dòng gang đỏ rực chảy ra ở đáy lò'],
    condition: 'nhiệt độ cao',
    story: {
      illustration: 'blast-furnace',
      title: 'Dòng gang đỏ rực chảy ra từ lò cao',
      description:
        'Quặng sắt chứa iron(III) oxide được đổ vào lò cao cùng than cốc. Than cháy thiếu oxygen sinh ra khí carbon monoxide. Ở nhiệt độ rất cao, carbon monoxide lấy oxygen của iron(III) oxide, để lại sắt nóng chảy chảy xuống đáy lò.',
    },
    conceptIds: ['reaction', 'metal-extraction', 'balancing'],
  },
]
