import type { ReactionInput } from '../../schema/reaction.js'

/** Phản ứng xuất hiện lần đầu ở Unit 5. */
export const unit05Reactions: ReactionInput[] = [
  {
    id: 'magnesium-hcl',
    name: 'Magnesium tan trong hydrochloric acid',
    reactants: [
      { moleculeId: 'mg', coefficient: 1 },
      { moleculeId: 'hcl', coefficient: 2 },
    ],
    products: [
      { moleculeId: 'mgcl2', coefficient: 1 },
      { moleculeId: 'h2', coefficient: 1 },
    ],
    signs: ['Sủi bọt khí', 'Mẩu kim loại tan dần', 'Cốc ấm lên'],
    story: {
      illustration: 'metal-in-acid',
      title: 'Kim loại sủi bọt trong acid',
      description:
        'Trong phòng thí nghiệm, thầy cô thả một mẩu magnesium vào dung dịch hydrochloric acid. Mẩu kim loại sủi bọt rồi tan dần. Magnesium đã chiếm chỗ của hydrogen trong acid, tạo thành muối magnesium chloride, còn hydrogen thoát ra thành bọt khí.',
    },
    conceptIds: ['acid', 'salt', 'reaction-signs', 'balancing'],
  },
  {
    id: 'hcl-naoh-neutralisation',
    name: 'Trung hoà hydrochloric acid bằng sodium hydroxide',
    reactants: [
      { moleculeId: 'hcl', coefficient: 1 },
      { moleculeId: 'naoh', coefficient: 1 },
    ],
    products: [
      { moleculeId: 'nacl', coefficient: 1 },
      { moleculeId: 'h2o', coefficient: 1 },
    ],
    signs: ['Dung dịch ấm lên', 'Chất chỉ thị đổi màu khi acid vừa hết'],
    story: {
      illustration: 'salt-shaker',
      title: 'Hai chất gây bỏng thành nước muối',
      description:
        'Hydrochloric acid và sodium hydroxide đều gây bỏng. Vậy mà trong phòng thí nghiệm, khi cho chúng gặp nhau với lượng vừa đủ, thứ thu được chỉ là nước và sodium chloride, đúng chất làm nên hạt muối bạn nêm vào canh. Ion H⁺ của acid đã kết hợp với ion OH⁻ của base thành nước. Phản ứng toả nhiệt và hai chất đều nguy hiểm, nên chỉ làm ở trường, có thầy cô hướng dẫn.',
    },
    conceptIds: ['neutralisation', 'acid', 'base', 'salt'],
  },
  {
    id: 'antacid-neutralisation',
    name: 'Thuốc dạ dày trung hoà acid',
    reactants: [
      { moleculeId: 'mgoh2', coefficient: 1 },
      { moleculeId: 'hcl', coefficient: 2 },
    ],
    products: [
      { moleculeId: 'mgcl2', coefficient: 1 },
      { moleculeId: 'h2o', coefficient: 2 },
    ],
    signs: ['Lớp sữa đục tan dần', 'Dung dịch bớt chua, pH tăng lên'],
    story: {
      illustration: 'antacid',
      title: 'Thìa thuốc sữa cho dạ dày thừa acid',
      description:
        'Một số thuốc giảm acid dạ dày có dạng sữa trắng đục, chứa magnesium hydroxide. Vào tới dạ dày, base này gặp hydrochloric acid. Ion OH⁻ bắt lấy ion H⁺ thành nước, phần còn lại thành muối magnesium chloride. Acid bớt đi nên cơn nóng rát dịu lại.',
    },
    conceptIds: ['neutralisation', 'acid', 'base', 'balancing'],
  },
  {
    id: 'lime-slaking',
    name: 'Tôi vôi',
    reactants: [
      { moleculeId: 'cao', coefficient: 1 },
      { moleculeId: 'h2o', coefficient: 1 },
    ],
    products: [{ moleculeId: 'caoh2', coefficient: 1 }],
    signs: ['Toả nhiệt rất mạnh', 'Nước sôi sùng sục', 'Cục vôi rã ra thành bột nhão'],
    story: {
      illustration: 'limewash',
      title: 'Thả vôi sống vào nước',
      description:
        'Thợ xây thả những cục vôi sống (calcium oxide) vào nước. Nước sôi sùng sục dù không hề đun, cục vôi rã ra thành thứ bột nhão màu trắng: vôi tôi (calcium hydroxide). Phản ứng toả nhiệt đủ gây bỏng, nên đây là việc của thợ có đồ bảo hộ.',
    },
    conceptIds: ['oxide', 'base', 'reaction-signs'],
  },
  {
    id: 'mgo-hcl',
    name: 'Magnesium oxide tan trong hydrochloric acid',
    reactants: [
      { moleculeId: 'mgo', coefficient: 1 },
      { moleculeId: 'hcl', coefficient: 2 },
    ],
    products: [
      { moleculeId: 'mgcl2', coefficient: 1 },
      { moleculeId: 'h2o', coefficient: 1 },
    ],
    signs: ['Bột trắng tan dần', 'Dung dịch trở nên trong suốt'],
    story: {
      illustration: 'antacid',
      title: 'Oxide base gặp acid',
      description:
        'Magnesium oxide, thứ bột trắng bạn gặp ở que pháo bông, không tan trong nước nhưng tan được trong hydrochloric acid, tạo thành muối magnesium chloride và nước. Vì trung hoà được acid như vậy nên magnesium oxide cũng có mặt trong một số thuốc giảm acid dạ dày.',
    },
    conceptIds: ['oxide', 'acid', 'salt', 'balancing'],
  },
  {
    id: 'co2-limewater',
    name: 'Vôi hút carbon dioxide',
    reactants: [
      { moleculeId: 'co2', coefficient: 1 },
      { moleculeId: 'caoh2', coefficient: 1 },
    ],
    products: [
      { moleculeId: 'caco3', coefficient: 1 },
      { moleculeId: 'h2o', coefficient: 1 },
    ],
    signs: ['Lớp vôi khô và cứng dần', 'Nước vôi trong hoá đục'],
    story: {
      illustration: 'limewash',
      title: 'Vì sao vôi quét tường cứng lại',
      description:
        'Lớp vôi mới quét còn ướt và mềm. Dần dần, calcium hydroxide trong vôi tác dụng với khí carbon dioxide của không khí, thành calcium carbonate cứng như đá vôi, còn nước thì bay hơi. Ở phòng thí nghiệm, khi thầy cô sục khí carbon dioxide vào cốc nước vôi trong, cũng chính chất rắn ấy làm nước hoá đục.',
    },
    conceptIds: ['oxide', 'base', 'salt', 'reaction-signs'],
  },
  {
    id: 'acid-rain-formation',
    name: 'Mưa acid hình thành',
    reactants: [
      { moleculeId: 'so2', coefficient: 2 },
      { moleculeId: 'o2', coefficient: 1 },
      { moleculeId: 'h2o', coefficient: 2 },
    ],
    products: [{ moleculeId: 'h2so4', coefficient: 2 }],
    signs: ['Nước mưa có pH thấp hơn bình thường', 'Tượng đá mòn dần', 'Lá cây úa vàng'],
    story: {
      illustration: 'acid-rain',
      title: 'Từ ống khói tới giọt mưa',
      description:
        'Khí sulfur dioxide bốc lên từ ống khói. Trên cao, nó gặp oxygen và hơi nước, qua vài bước thì thành sulfuric acid. Acid tan trong giọt mưa rồi rơi xuống, làm mòn tượng đá và hại cây cối. Phương trình ở đây gộp các bước lại thành một.',
    },
    conceptIds: ['oxide', 'acid', 'balancing'],
  },
]
