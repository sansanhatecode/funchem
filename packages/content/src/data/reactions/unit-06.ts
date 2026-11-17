import type { ReactionInput } from '../../schema/reaction.js'

/** Phản ứng xuất hiện lần đầu ở Unit 6. */
export const unit06Reactions: ReactionInput[] = [
  {
    id: 'propane-combustion',
    name: 'Gas bếp cháy',
    reactants: [
      { moleculeId: 'c3h8', coefficient: 1 },
      { moleculeId: 'o2', coefficient: 5 },
    ],
    products: [
      { moleculeId: 'co2', coefficient: 3 },
      { moleculeId: 'h2o', coefficient: 4 },
    ],
    signs: ['Ngọn lửa xanh', 'Toả nhiều nhiệt', 'Hơi nước đọng trên đáy nồi lạnh'],
    condition: 'tia lửa mồi',
    story: {
      illustration: 'gas-stove-wok',
      title: 'Vòng lửa xanh dưới đáy chảo',
      description:
        'Gas trong bình chứa propane. Vặn núm bếp, propane thoát ra gặp oxygen trong không khí. Một tia lửa mồi là đủ để phản ứng bắt đầu: các nguyên tử sắp xếp lại thành carbon dioxide và hơi nước, đồng thời toả ra rất nhiều nhiệt.',
    },
    conceptIds: ['reaction', 'combustion', 'exothermic-endothermic', 'balancing'],
  },
  {
    id: 'limestone-decomposition',
    name: 'Nung đá vôi',
    reactants: [{ moleculeId: 'caco3', coefficient: 1 }],
    products: [
      { moleculeId: 'cao', coefficient: 1 },
      { moleculeId: 'co2', coefficient: 1 },
    ],
    signs: ['Phải đốt lò liên tục', 'Khí carbon dioxide bay ra', 'Đá xám thành vôi trắng, nhẹ hơn'],
    condition: 'khoảng 900 °C',
    story: {
      illustration: 'lime-kiln',
      title: 'Lò vôi đỏ lửa ngày đêm',
      description:
        'Đá vôi là calcium carbonate. Trong lò nung nóng khoảng 900 °C, nó tách thành calcium oxide (vôi sống) và khí carbon dioxide. Phản ứng này hấp thụ nhiệt, nên lò phải được đốt liên tục. Lửa tắt là phản ứng dừng.',
    },
    conceptIds: ['reaction', 'exothermic-endothermic', 'conservation-of-mass'],
  },
  {
    id: 'lactic-fermentation',
    name: 'Đường thành lactic acid',
    reactants: [{ moleculeId: 'c6h12o6', coefficient: 1 }],
    products: [{ moleculeId: 'c3h6o3', coefficient: 2 }],
    signs: ['Có mùi chua', 'Sữa vón lại', 'Nhanh khi ấm, rất chậm khi lạnh'],
    condition: 'vi khuẩn lactic',
    story: {
      illustration: 'open-fridge',
      title: 'Cốc sữa để quên qua đêm',
      description:
        'Vi khuẩn lactic cắt đường trong sữa thành những phân tử đường nhỏ hơn như glucose (C₆H₁₂O₆), rồi biến mỗi phân tử glucose thành hai phân tử lactic acid (C₃H₆O₃). Lactic acid làm sữa chua và vón lại. Ngoài bàn bếp, phản ứng này diễn ra nhanh. Trong tủ lạnh, nó chậm đi rất nhiều.',
    },
    conceptIds: ['reaction', 'reaction-rate', 'fermentation'],
  },
  {
    id: 'peroxide-with-potato',
    name: 'Oxy già gặp lát khoai tây',
    reactants: [{ moleculeId: 'h2o2', coefficient: 2 }],
    products: [
      { moleculeId: 'h2o', coefficient: 2 },
      { moleculeId: 'o2', coefficient: 1 },
    ],
    signs: ['Lát khoai phủ kín bọt trắng', 'Sủi bọt ngay lập tức', 'Lát khoai dùng lại được'],
    condition: 'enzyme trong khoai tây',
    story: {
      illustration: 'potato-peroxide',
      title: 'Lát khoai tây trong cốc oxy già',
      description:
        'Hydrogen peroxide tự tách thành nước và khí oxygen rất chậm. Khoai tây sống có một enzyme tên là catalase giúp phản ứng này nhanh hơn rất nhiều lần, nên lát khoai sủi đầy bọt oxygen. Nếu muốn tự làm, hãy làm cùng người lớn, chỉ dùng oxy già 3% trong tủ thuốc và đừng để nó dây vào mắt hay miệng.',
    },
    conceptIds: ['reaction', 'reaction-rate', 'catalyst', 'balancing'],
  },
  {
    id: 'baking-soda-decomposition',
    name: 'Baking soda bị nhiệt phân',
    reactants: [{ moleculeId: 'nahco3', coefficient: 2 }],
    products: [
      { moleculeId: 'na2co3', coefficient: 1 },
      { moleculeId: 'h2o', coefficient: 1 },
      { moleculeId: 'co2', coefficient: 1 },
    ],
    signs: ['Bánh nở phồng', 'Ruột bánh đầy lỗ khí nhỏ'],
    condition: 'nhiệt của lò nướng',
    story: {
      illustration: 'baking-cake',
      title: 'Bánh bông lan nở trong lò',
      description:
        'Bột nở chứa baking soda. Trong lò nóng, baking soda tách thành sodium carbonate, nước và khí carbon dioxide. Bọt khí nở ra trong bột làm bánh phồng lên và xốp. Phản ứng này hấp thụ nhiệt của lò.',
    },
    conceptIds: ['reaction', 'exothermic-endothermic', 'balancing'],
  },
  {
    id: 'alcoholic-fermentation',
    name: 'Men làm bột nở',
    reactants: [{ moleculeId: 'c6h12o6', coefficient: 1 }],
    products: [
      { moleculeId: 'c2h6o', coefficient: 2 },
      { moleculeId: 'co2', coefficient: 2 },
    ],
    signs: ['Bột phồng lên gấp đôi', 'Bọt khí li ti trong bột', 'Mùi thơm hơi nồng'],
    condition: 'enzyme của men',
    story: {
      illustration: 'bread-oven',
      title: 'Ổ bánh mì nở phồng',
      description:
        'Men làm bánh là một loại nấm bé xíu còn sống. Nhờ enzyme, men biến glucose trong bột thành ethanol và khí carbon dioxide. Bong bóng khí kẹt lại làm bột phồng lên. Khi nướng, ethanol bay hơi gần hết, còn các lỗ khí ở lại thành ruột bánh xốp.',
    },
    conceptIds: ['reaction', 'fermentation', 'catalyst', 'balancing'],
  },
  {
    id: 'vinegar-fermentation',
    name: 'Lên men giấm',
    reactants: [
      { moleculeId: 'c2h6o', coefficient: 1 },
      { moleculeId: 'o2', coefficient: 1 },
    ],
    products: [
      { moleculeId: 'c2h4o2', coefficient: 1 },
      { moleculeId: 'h2o', coefficient: 1 },
    ],
    signs: ['Mùi rượu nhạt dần', 'Mùi chua của giấm đậm dần', 'Mất vài tuần'],
    condition: 'vi khuẩn giấm',
    story: {
      illustration: 'vinegar-bottle',
      title: 'Hũ giấm nuôi trong bếp',
      description:
        'Vi khuẩn giấm lấy oxygen từ không khí để biến ethanol trong rượu loãng thành acetic acid và nước. Vì cần oxygen nên hũ nuôi giấm chỉ đậy bằng vải thưa. Sau vài tuần, rượu thành giấm chua.',
    },
    conceptIds: ['reaction', 'fermentation', 'balancing'],
  },
]
