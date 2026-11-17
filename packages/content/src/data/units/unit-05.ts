import type { UnitInput } from '../../schema/lesson.js'

/**
 * Unit 5: Chua như chanh, trơn như xà phòng
 * 7 bài học + checkpoint: acid, base, chất chỉ thị, thang pH,
 * phản ứng trung hoà, oxide, muối.
 */
export const unit05: UnitInput = {
  id: 'u5-acids-bases',
  order: 5,
  title: 'Chua như chanh, trơn như xà phòng',
  tagline: 'Acid, base, thang pH và muối',
  color: '#FF4B4B',
  lessons: [
    // ───────────────────────── Bài 1: Acid ─────────────────────────
    {
      id: 'u5-l1-acids',
      title: 'Vị chua đến từ đâu?',
      intro: {
        title: 'Chanh và giấm chung một bí mật',
        story: [
          'Ăn phở, người vắt miếng chanh, người chan thìa giấm. Hai thứ khác hẳn nhau, vậy mà cùng làm bát phở chua thanh. Vì sao thế?',
          'Phóng to vào chén giấm, bạn gặp lại acetic acid CH₃COOH. Trong nước chanh là một chất khác, tên là citric acid. Hai chất này cùng một họ: họ acid.',
          'Mọi acid đều giống nhau ở một điểm. Khi tan trong nước, phân tử acid nhả ra ion H⁺, tức là nguyên tử hydrogen đã bỏ lại electron nên mang điện dương. Chính ion H⁺ làm lưỡi ta thấy chua.',
          'Không phải acid nào cũng ăn được. Dạ dày bạn tự tiết ra hydrochloric acid HCl loãng để tiêu hoá thức ăn, còn hydrochloric acid đặc trong nhà máy thì gây bỏng nặng. Vì vậy đừng bao giờ nếm hay chạm vào một chất lạ để thử xem nó có chua không.',
        ],
        visual: { type: 'molecule', moleculeId: 'c2h4o2', scene: 'lime-and-vinegar' },
      },
      exercises: [
        {
          id: 'u5-l1-e1',
          type: 'mcq',
          prompt: 'Khi tan trong nước, acid nào cũng tạo ra thứ gì?',
          options: [
            { id: 'a', text: 'Ion H⁺' },
            { id: 'b', text: 'Ion Na⁺' },
            { id: 'c', text: 'Khí oxygen' },
          ],
          correctOptionId: 'a',
          explanation:
            'Acid là chất tạo ra ion H⁺ khi tan trong nước. Đó là điểm chung của giấm, nước chanh và mọi acid khác. Ion Na⁺ thì có trong muối ăn, không liên quan tới vị chua.',
          conceptIds: ['acid', 'ion'],
        },
        {
          id: 'u5-l1-e2',
          type: 'match-pairs',
          prompt: 'Nối mỗi thứ với acid có trong nó',
          pairs: [
            {
              left: { id: 'l1', text: 'Giấm ăn', image: 'vinegar-bottle' },
              right: { id: 'r1', text: 'Acetic acid' },
            },
            { left: { id: 'l2', text: 'Quả chanh' }, right: { id: 'r2', text: 'Citric acid' } },
            {
              left: { id: 'l3', text: 'Dịch dạ dày' },
              right: { id: 'r3', text: 'Hydrochloric acid' },
            },
          ],
          explanation:
            'Giấm chứa acetic acid, chanh chứa citric acid, còn dạ dày tiết ra hydrochloric acid. Ba chất khác nhau nhưng đều là acid vì đều tạo ra ion H⁺ trong nước.',
          conceptIds: ['acid'],
        },
        {
          id: 'u5-l1-e3',
          type: 'true-false',
          prompt: 'Giấm có vị chua vì acetic acid trong giấm tạo ra ion H⁺ khi tan trong nước.',
          visual: { id: 'v', image: 'vinegar-bottle' },
          answer: true,
          explanation:
            'Đúng rồi. Vị chua là cách lưỡi ta nhận ra ion H⁺. Thứ gì ăn được mà chua, như chanh, me, sữa chua, thì trong đó có acid.',
          conceptIds: ['acid'],
        },
        {
          id: 'u5-l1-e4',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template: 'Acid là chất khi tan trong ___ thì tạo ra ion ___.',
          blanks: [
            { accepted: ['nước'], wordBank: ['nước', 'dầu ăn', 'không khí'] },
            { accepted: ['H⁺', 'H+'], wordBank: ['H⁺', 'Na⁺', 'Cl⁻'] },
          ],
          explanation:
            'Phải có nước thì phân tử acid mới nhả ra ion H⁺. Na⁺ và Cl⁻ là hai ion của muối ăn bạn đã gặp ở Unit 2.',
          conceptIds: ['acid', 'ion'],
        },
        {
          id: 'u5-l1-e5',
          type: 'build-molecule',
          prompt: 'Ghép phân tử hydrochloric acid HCl, acid có trong dịch dạ dày',
          targetMoleculeId: 'hcl',
          availableAtoms: { H: 2, Cl: 2, O: 1, Na: 1 },
          explanation:
            'HCl chỉ gồm 1 nguyên tử hydrogen và 1 nguyên tử chlorine. Nói cho đủ thì hydrochloric acid là khí hydrogen chloride HCl đã tan vào nước.',
          conceptIds: ['acid', 'formula'],
        },
        {
          id: 'u5-l1-e6',
          type: 'mcq',
          prompt:
            'Tan vào nước, phân tử HCl tách thành hai ion. Hydrogen thành ion H⁺. Chlorine thành ion nào?',
          visual: { id: 'v', moleculeId: 'hcl' },
          options: [
            { id: 'a', text: 'Cl⁺' },
            { id: 'b', text: 'Cl⁻' },
            { id: 'c', text: 'Na⁺' },
          ],
          correctOptionId: 'b',
          explanation:
            'Hydrogen bỏ lại electron cho chlorine. Mất electron thì hydrogen mang điện dương (H⁺), nhận thêm electron thì chlorine mang điện âm (Cl⁻). Đây cũng chính là ion Cl⁻ trong muối ăn.',
          conceptIds: ['acid', 'ion'],
        },
        {
          id: 'u5-l1-e7',
          type: 'mcq',
          prompt:
            'Trong phòng thí nghiệm, thầy cô thả một mẩu magnesium vào dung dịch hydrochloric acid HCl. Mẩu kim loại sủi bọt và tan dần. Bọt đó là khí hydrogen H₂. Các nguyên tử hydrogen trong khí ấy lấy từ đâu?',
          visual: { id: 'v', image: 'metal-in-acid' },
          options: [
            { id: 'a', text: 'Từ mẩu magnesium' },
            { id: 'b', text: 'Từ không khí phía trên cốc' },
            { id: 'c', text: 'Từ acid HCl' },
          ],
          correctOptionId: 'c',
          explanation:
            'Magnesium chỉ có nguyên tử Mg, nên hydrogen phải đến từ acid. Acid tác dụng được với một số kim loại như magnesium, kẽm, sắt và sinh ra khí hydrogen. Còn đồng và vàng thì không phản ứng với hydrochloric acid.',
          conceptIds: ['acid', 'conservation-of-mass'],
        },
        {
          id: 'u5-l1-e8',
          type: 'balance-reaction',
          reactionId: 'magnesium-hcl',
          prompt:
            'Magnesium tác dụng với hydrochloric acid tạo ra magnesium chloride MgCl₂ và khí hydrogen. Cân bằng phương trình này',
          explanation:
            'MgCl₂ có 2 nguyên tử Cl nên cần 2 phân tử HCl. Hai phân tử HCl mang theo 2 nguyên tử H, vừa đủ cho 1 phân tử H₂. Kết quả: Mg + 2HCl → MgCl₂ + H₂.',
          conceptIds: ['acid', 'balancing', 'chemical-equation'],
        },
        {
          id: 'u5-l1-e9',
          type: 'match-pairs',
          prompt:
            'Ba acid thông dụng: hydrochloric acid HCl để tẩy gỉ cho thép, sulfuric acid H₂SO₄ nằm trong bình ắc quy xe máy, acetic acid CH₃COOH làm nên giấm ăn. Nối mỗi acid với nơi bạn gặp nó',
          pairs: [
            {
              left: { id: 'l1', moleculeId: 'hcl', text: 'HCl' },
              right: { id: 'r1', text: 'Tẩy gỉ cho thép' },
            },
            {
              left: { id: 'l2', moleculeId: 'h2so4', text: 'H₂SO₄' },
              right: { id: 'r2', text: 'Bình ắc quy' },
            },
            {
              left: { id: 'l3', moleculeId: 'c2h4o2', text: 'CH₃COOH' },
              right: { id: 'r3', text: 'Giấm ăn' },
            },
          ],
          explanation:
            'Cả ba công thức đều có nguyên tử H mà phân tử nhả ra được thành ion H⁺ khi tan trong nước. Hydrochloric acid và sulfuric acid đặc gây bỏng nặng, chỉ dùng trong nhà máy và phòng thí nghiệm.',
          conceptIds: ['acid', 'formula'],
        },
        {
          id: 'u5-l1-e10',
          type: 'true-false',
          prompt: 'Chất nào là acid thì cũng độc, không thể có trong thức ăn.',
          answer: false,
          explanation:
            'Giấm, chanh, sữa chua đều chứa acid và bạn vẫn ăn hằng ngày. Một acid nguy hiểm hay không tuỳ vào đó là acid nào và nó đặc hay loãng. Dù vậy, với chất lạ thì không bao giờ nếm thử.',
          conceptIds: ['acid'],
        },
      ],
      unlocksMolecules: ['hcl', 'h2so4'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 2: Base ─────────────────────────
    {
      id: 'u5-l2-bases',
      title: 'Base, đối thủ của acid',
      intro: {
        title: 'Xô vôi trắng ngày giáp Tết',
        story: [
          'Giáp Tết, bố hoà vôi vào xô rồi quét lên tường rào và gốc cây cho trắng tinh. Bố đeo găng tay, đeo kính và dặn bạn đứng xa kẻo vôi bắn vào mắt.',
          'Thứ bột nhão màu trắng trong xô là calcium hydroxide (vôi tôi), công thức Ca(OH)₂. Số 2 ngoài ngoặc cho biết có 2 nhóm OH. Đếm tất cả: 1 Ca, 2 O và 2 H.',
          'Khi tan trong nước, calcium hydroxide tách ra ion OH⁻ (ion hydroxide): một nguyên tử oxygen dính với một nguyên tử hydrogen, cả nhóm mang điện âm. Chất tạo ra ion OH⁻ trong nước gọi là base. Acid cho H⁺, base cho OH⁻: hai họ đối nghịch nhau.',
          'Phần lớn base không tan trong nước. Số ít base tan tốt được gọi là kiềm, ví dụ sodium hydroxide NaOH (xút). Kiềm đặc ăn mòn da và mắt chẳng kém gì acid đặc, nên không ai thử base bằng cách chạm tay hay nếm.',
        ],
        visual: { type: 'molecule', moleculeId: 'caoh2', scene: 'limewash' },
      },
      exercises: [
        {
          id: 'u5-l2-e1',
          type: 'mcq',
          prompt: 'Base là chất khi tan trong nước tạo ra ion nào?',
          options: [
            { id: 'a', text: 'Ion H⁺' },
            { id: 'b', text: 'Ion OH⁻' },
            { id: 'c', text: 'Ion Cl⁻' },
          ],
          correctOptionId: 'b',
          explanation:
            'Base tạo ra ion OH⁻ (ion hydroxide) trong nước. Ion H⁺ là dấu hiệu của acid, họ chất đối nghịch với base.',
          conceptIds: ['base', 'ion'],
        },
        {
          id: 'u5-l2-e2',
          type: 'mcq',
          prompt: 'Vôi tôi có công thức Ca(OH)₂. Công thức này gồm những nguyên tử nào?',
          visual: { id: 'v', moleculeId: 'caoh2' },
          options: [
            { id: 'a', text: '1 calcium, 1 oxygen, 1 hydrogen' },
            { id: 'b', text: '1 calcium, 1 oxygen, 2 hydrogen' },
            { id: 'c', text: '1 calcium, 2 oxygen, 2 hydrogen' },
          ],
          correctOptionId: 'c',
          explanation:
            'Số 2 đứng ngoài ngoặc nhân với mọi thứ trong ngoặc. Có 2 nhóm OH, tức 2 nguyên tử oxygen và 2 nguyên tử hydrogen, đi cùng 1 nguyên tử calcium.',
          conceptIds: ['base', 'formula'],
        },
        {
          id: 'u5-l2-e3',
          type: 'fill-blank',
          prompt: 'Chọn ion đúng cho từng chỗ trống',
          template: 'Trong nước, acid tạo ra ion ___, còn base tạo ra ion ___.',
          blanks: [
            { accepted: ['H⁺', 'H+'], wordBank: ['H⁺', 'OH⁻', 'Na⁺'] },
            { accepted: ['OH⁻', 'OH-'], wordBank: ['H⁺', 'OH⁻', 'Na⁺'] },
          ],
          explanation:
            'H⁺ thuộc về acid, OH⁻ thuộc về base. Nhớ được cặp này là bạn đã nắm ý quan trọng nhất của cả Unit.',
          conceptIds: ['acid', 'base'],
        },
        {
          id: 'u5-l2-e4',
          type: 'build-molecule',
          prompt: 'Ghép sodium hydroxide NaOH (xút), một kiềm rất mạnh',
          targetMoleculeId: 'naoh',
          availableAtoms: { Na: 2, O: 2, H: 2, Cl: 1 },
          explanation:
            'NaOH gồm 1 Na, 1 O và 1 H. Tan vào nước, nó tách thành ion Na⁺ và ion OH⁻. Chính ion OH⁻ làm nên tính base.',
          conceptIds: ['base', 'formula'],
        },
        {
          id: 'u5-l2-e5',
          type: 'match-pairs',
          prompt:
            'Calcium hydroxide Ca(OH)₂ là vôi tôi để quét tường. Sodium hydroxide NaOH là nguyên liệu nấu xà phòng. Magnesium hydroxide Mg(OH)₂ có trong một số thuốc dạ dày. Nối mỗi base với nơi bạn gặp nó',
          pairs: [
            {
              left: { id: 'l1', moleculeId: 'caoh2', text: 'Ca(OH)₂' },
              right: { id: 'r1', text: 'Xô vôi quét tường', image: 'limewash' },
            },
            {
              left: { id: 'l2', moleculeId: 'naoh', text: 'NaOH' },
              right: { id: 'r2', text: 'Nấu xà phòng', image: 'soap-bar' },
            },
            {
              left: { id: 'l3', moleculeId: 'mgoh2', text: 'Mg(OH)₂' },
              right: { id: 'r3', text: 'Thuốc dạ dày', image: 'antacid' },
            },
          ],
          explanation:
            'Cả ba công thức đều có nhóm OH đi cùng một kim loại. Bánh xà phòng thành phẩm không còn xút, nhưng nước xà phòng vẫn có tính base nhẹ.',
          conceptIds: ['base'],
        },
        {
          id: 'u5-l2-e6',
          type: 'sort',
          prompt:
            'Sodium hydroxide NaOH và potassium hydroxide KOH tan tốt trong nước. Magnesium hydroxide Mg(OH)₂ và copper(II) hydroxide Cu(OH)₂ gần như không tan. Xếp mỗi base vào đúng nhóm',
          groups: [
            { id: 'alkali', label: 'Kiềm' },
            { id: 'insoluble', label: 'Base không tan' },
          ],
          items: [
            { id: 'i1', moleculeId: 'naoh', text: 'NaOH', groupId: 'alkali' },
            { id: 'i2', moleculeId: 'mgoh2', text: 'Mg(OH)₂', groupId: 'insoluble' },
            { id: 'i3', text: 'KOH', groupId: 'alkali' },
            { id: 'i4', text: 'Cu(OH)₂', groupId: 'insoluble' },
          ],
          explanation:
            'Kiềm là tên riêng của những base tan tốt trong nước, như NaOH và KOH. Base không tan vẫn là base vì vẫn có nhóm OH đi với kim loại, chỉ là nó gần như không tan trong nước.',
          conceptIds: ['base', 'solution'],
        },
        {
          id: 'u5-l2-e7',
          type: 'mcq',
          prompt: 'Sodium hydroxide NaOH tan vào nước thì tách thành hai ion nào?',
          visual: { id: 'v', moleculeId: 'naoh' },
          options: [
            { id: 'a', text: 'Na⁺ và OH⁻' },
            { id: 'b', text: 'Na⁻ và OH⁺' },
            { id: 'c', text: 'NaO⁻ và H⁺' },
          ],
          correctOptionId: 'a',
          explanation:
            'Sodium là kim loại nên thành ion dương Na⁺, giống như trong muối ăn. Nhóm OH giữ nguyên cả cụm và mang điện âm: OH⁻. Trong công thức NaOH có chữ H, nhưng nó không nhả ra ion H⁺, nên NaOH không phải acid.',
          conceptIds: ['base', 'ion'],
        },
        {
          id: 'u5-l2-e8',
          type: 'build-molecule',
          prompt: 'Ghép calcium hydroxide Ca(OH)₂, thứ bột trắng trong xô vôi',
          targetMoleculeId: 'caoh2',
          availableAtoms: { Ca: 1, O: 3, H: 3, Na: 1 },
          explanation:
            'Ca(OH)₂ cần 1 Ca và 2 nhóm OH, tức 2 O và 2 H. Ion calcium mang hai điện tích dương nên đi cùng được hai ion OH⁻.',
          conceptIds: ['base', 'formula'],
        },
        {
          id: 'u5-l2-e9',
          type: 'true-false',
          prompt: 'Chỉ acid mới gây bỏng, còn base thì chất nào cũng vô hại.',
          visual: { id: 'v', image: 'limewash' },
          answer: false,
          explanation:
            'Kiềm đặc như xút ăn mòn da và mắt rất mạnh, vôi bắn vào mắt cũng rất nguy hiểm. Acid hay base đều có chất nhẹ, chất mạnh. Vì thế thợ quét vôi mới phải đeo kính và găng tay.',
          conceptIds: ['base'],
        },
        {
          id: 'u5-l2-e10',
          type: 'mcq',
          prompt:
            'Công thức của ethanol (cồn) hay được viết là C₂H₅OH. Nhưng khi tan trong nước, ethanol không tách ra ion OH⁻. Vậy ethanol có phải là base không?',
          visual: { id: 'v', moleculeId: 'c2h6o' },
          options: [
            { id: 'a', text: 'Có, vì công thức có chữ OH' },
            { id: 'b', text: 'Không, vì nó không tạo ra ion OH⁻' },
            { id: 'c', text: 'Có, vì nó tan được trong nước' },
          ],
          correctOptionId: 'b',
          explanation:
            'Bạn đã dùng đúng định nghĩa: base phải tạo ra ion OH⁻ trong nước. Chỉ nhìn chữ OH trong công thức thì chưa đủ. Tương tự, không phải chất nào có chữ H trong công thức cũng là acid.',
          conceptIds: ['base'],
        },
      ],
      unlocksMolecules: ['naoh', 'caoh2'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 3: Chất chỉ thị ─────────────────────────
    {
      id: 'u5-l3-indicators',
      title: 'Đổi màu để báo tin',
      intro: {
        title: 'Ba cốc nước bắp cải tím',
        story: [
          'Thái nhỏ vài lá bắp cải tím rồi ngâm với nước ấm (phần dao và nước nóng thì nhờ người lớn), bạn sẽ được một thứ nước màu tím. Chia ra ba cốc. Cốc giữa để nguyên. Nhỏ giấm vào cốc bên trái, nước chuyển sang hồng đỏ. Khuấy chút baking soda vào cốc bên phải, nước ngả sang xanh.',
          'Giấm chứa acid. Baking soda tan trong nước thì cho một dung dịch có tính base nhẹ. Nước bắp cải tím đổi màu theo từng loại: gặp acid thì hồng đỏ, gặp base thì xanh. Chất đổi màu để báo tin như vậy gọi là chất chỉ thị.',
          'Phòng thí nghiệm hay dùng giấy quỳ tím. Gặp dung dịch acid, quỳ tím hoá đỏ. Gặp dung dịch base, quỳ tím hoá xanh. Còn phenolphthalein thì vốn không màu, chỉ hoá hồng khi gặp dung dịch base.',
          'Nhờ chất chỉ thị, ta biết một dung dịch là acid hay base mà không cần nếm hay chạm. Chỉ cần một lượng rất nhỏ. Nó báo tin chứ không biến dung dịch thành acid hay base.',
        ],
        visual: { type: 'molecule', moleculeId: 'c2h4o2', scene: 'cabbage-indicator' },
      },
      exercises: [
        {
          id: 'u5-l3-e1',
          type: 'mcq',
          prompt: 'Nhúng giấy quỳ tím vào một dung dịch acid. Giấy chuyển sang màu gì?',
          visual: { id: 'v', image: 'litmus-paper' },
          options: [
            { id: 'a', text: 'Đỏ' },
            { id: 'b', text: 'Xanh' },
            { id: 'c', text: 'Vẫn tím như cũ' },
          ],
          correctOptionId: 'a',
          explanation:
            'Acid làm quỳ tím hoá đỏ, như mẩu giấy trong cốc nước chanh ở hình. Base thì ngược lại, làm quỳ tím hoá xanh, như mẩu giấy trong cốc nước xà phòng.',
          conceptIds: ['indicator', 'acid'],
        },
        {
          id: 'u5-l3-e2',
          type: 'match-pairs',
          prompt: 'Nối mỗi trường hợp với màu bạn sẽ thấy',
          pairs: [
            {
              left: { id: 'l1', text: 'Quỳ tím trong dung dịch acid' },
              right: { id: 'r1', text: 'Đỏ' },
            },
            {
              left: { id: 'l2', text: 'Quỳ tím trong dung dịch base' },
              right: { id: 'r2', text: 'Xanh' },
            },
            {
              left: { id: 'l3', text: 'Phenolphthalein trong dung dịch base' },
              right: { id: 'r3', text: 'Hồng' },
            },
            {
              left: { id: 'l4', text: 'Phenolphthalein trong dung dịch acid' },
              right: { id: 'r4', text: 'Không màu' },
            },
          ],
          explanation:
            'Quỳ tím báo được cả hai phía: đỏ với acid, xanh với base. Phenolphthalein chỉ lên tiếng với base: hoá hồng. Gặp acid nó vẫn không màu.',
          conceptIds: ['indicator'],
        },
        {
          id: 'u5-l3-e3',
          type: 'fill-blank',
          prompt: 'Chọn màu đúng cho từng chỗ trống',
          template:
            'Nước bắp cải tím gặp giấm thì chuyển sang màu ___, gặp dung dịch baking soda thì chuyển sang màu ___.',
          blanks: [
            { accepted: ['hồng đỏ'], wordBank: ['hồng đỏ', 'xanh', 'trắng'] },
            { accepted: ['xanh'], wordBank: ['hồng đỏ', 'xanh', 'trắng'] },
          ],
          explanation:
            'Giấm có acid nên nước bắp cải tím ngả hồng đỏ. Dung dịch baking soda có tính base nhẹ nên nước ngả xanh. Bắp cải tím là một chất chỉ thị có sẵn trong bếp.',
          conceptIds: ['indicator'],
        },
        {
          id: 'u5-l3-e4',
          type: 'true-false',
          prompt: 'Phenolphthalein hoá hồng khi gặp dung dịch acid.',
          answer: false,
          explanation:
            'Phenolphthalein chỉ hoá hồng trong dung dịch base. Trong acid, nó vẫn không màu. Muốn nhận ra acid thì dùng quỳ tím: quỳ sẽ hoá đỏ.',
          conceptIds: ['indicator', 'base'],
        },
        {
          id: 'u5-l3-e5',
          type: 'mcq',
          prompt: 'Nhúng giấy quỳ tím vào ly nước chanh. Giấy sẽ có màu gì?',
          visual: { id: 'v', image: 'ph-test-lemonade' },
          options: [
            { id: 'a', text: 'Xanh' },
            { id: 'b', text: 'Tím như cũ' },
            { id: 'c', text: 'Đỏ' },
          ],
          correctOptionId: 'c',
          explanation:
            'Nước chanh chứa citric acid, mà acid thì làm quỳ tím hoá đỏ. Bạn vừa đoán được màu giấy quỳ chỉ nhờ biết trong chanh có gì.',
          conceptIds: ['indicator', 'acid'],
        },
        {
          id: 'u5-l3-e6',
          type: 'sort',
          prompt:
            'Nước xà phòng có tính base nhẹ. Nước vôi trong là phần nước trong gạn ra từ xô vôi, có chứa calcium hydroxide nên cũng có tính base. Mỗi dung dịch sau làm quỳ tím đổi sang màu nào?',
          groups: [
            { id: 'red', label: 'Quỳ tím hoá đỏ' },
            { id: 'blue', label: 'Quỳ tím hoá xanh' },
          ],
          items: [
            { id: 'i1', text: 'Giấm', image: 'vinegar-bottle', groupId: 'red' },
            { id: 'i2', text: 'Nước xà phòng', image: 'soap-bar', groupId: 'blue' },
            { id: 'i3', text: 'Hydrochloric acid', moleculeId: 'hcl', groupId: 'red' },
            { id: 'i4', text: 'Nước vôi trong', moleculeId: 'caoh2', groupId: 'blue' },
            { id: 'i5', text: 'Dung dịch NaOH', moleculeId: 'naoh', groupId: 'blue' },
          ],
          explanation:
            'Giấm và hydrochloric acid là acid nên quỳ hoá đỏ. Nước xà phòng, nước vôi trong và dung dịch NaOH có tính base nên quỳ hoá xanh.',
          conceptIds: ['indicator', 'acid', 'base'],
        },
        {
          id: 'u5-l3-e7',
          type: 'mcq',
          prompt:
            'Nhỏ phenolphthalein vào một dung dịch không màu, dung dịch hoá hồng. Dung dịch đó có thể là gì?',
          options: [
            { id: 'a', text: 'Giấm trắng' },
            { id: 'b', text: 'Nước vôi trong' },
            { id: 'c', text: 'Nước chanh lọc' },
          ],
          correctOptionId: 'b',
          explanation:
            'Phenolphthalein hoá hồng nghĩa là dung dịch có tính base. Trong ba lựa chọn, chỉ nước vôi trong là base. Giấm và nước chanh là acid nên phenolphthalein vẫn không màu.',
          conceptIds: ['indicator', 'base'],
        },
        {
          id: 'u5-l3-e8',
          type: 'order-steps',
          prompt:
            'Tự làm chất chỉ thị từ bắp cải tím (nhờ người lớn giúp phần dao và nước nóng). Sắp xếp các bước theo thứ tự',
          steps: [
            { id: 's1', text: 'Thái nhỏ vài lá bắp cải tím' },
            { id: 's2', text: 'Ngâm bắp cải trong nước ấm cho nước ra màu tím' },
            { id: 's3', text: 'Lọc lấy nước tím rồi chia ra vài cốc nhỏ' },
            { id: 's4', text: 'Nhỏ giấm vào một cốc và xem nước đổi sang hồng đỏ' },
          ],
          explanation:
            'Phải có nước tím trước rồi mới thử được. Bạn có thể thử tiếp với nước chanh và baking soda. Chỉ dùng những thứ ăn được trong bếp, không thử với chất tẩy rửa.',
          conceptIds: ['indicator'],
        },
        {
          id: 'u5-l3-e9',
          type: 'true-false',
          prompt: 'Nhỏ vài giọt chất chỉ thị vào là một dung dịch acid sẽ biến thành base.',
          visual: { id: 'v', image: 'cabbage-indicator' },
          answer: false,
          explanation:
            'Chất chỉ thị chỉ đổi màu của chính nó để báo tin. Dung dịch acid vẫn là acid, dung dịch base vẫn là base. Cũng như cái nhiệt kế đo nhiệt độ chứ không làm bạn hết sốt.',
          conceptIds: ['indicator'],
        },
        {
          id: 'u5-l3-e10',
          type: 'mcq',
          prompt:
            'Nhúng giấy quỳ tím vào nước cất (nước tinh khiết). Giấy vẫn tím, không đỏ cũng không xanh. Điều đó cho biết gì?',
          options: [
            { id: 'a', text: 'Nước cất là một acid mạnh' },
            { id: 'b', text: 'Nước cất là một base mạnh' },
            { id: 'c', text: 'Nước cất không có tính acid, cũng không có tính base' },
          ],
          correctOptionId: 'c',
          explanation:
            'Quỳ không đổi màu vì nước cất không nghiêng về phía nào. Người ta gọi đó là trung tính. Bài sau, bạn sẽ có một cây thước để đo xem một dung dịch lệch về phía acid hay base bao nhiêu.',
          conceptIds: ['indicator', 'ph-scale'],
        },
      ],
      baseXp: 10,
    },

    // ───────────────────────── Bài 4: Thang pH ─────────────────────────
    {
      id: 'u5-l4-ph-scale',
      title: 'Thang pH: cây thước đo độ chua',
      intro: {
        title: 'Chua tới mức nào?',
        story: [
          'Pha một ly nước chanh rồi nhúng vào đó một mẩu giấy pH, loại giấy tẩm sẵn nhiều chất chỉ thị. Mẩu giấy vàng đổi ngay sang cam đỏ. Đem so với bảng màu in trên hộp giấy, ta đọc được một con số: pH khoảng 2,5.',
          'pH là con số cho biết một dung dịch có tính acid hay base, và mạnh tới đâu. Xếp các con số ấy thành một hàng, ta có thang pH. Nhỏ hơn 7 là acid, càng nhỏ thì tính acid càng mạnh. Bằng 7 là trung tính, như nước tinh khiết. Lớn hơn 7 là base, càng lớn thì tính base càng mạnh.',
          'Hãy chọn từng thứ ở hình trên rồi phóng to. pH càng nhỏ thì trong dung dịch càng nhiều ion H⁺. pH càng lớn thì càng nhiều ion OH⁻.',
          'pH có mặt ở khắp nơi. Dịch dạ dày rất chua, pH khoảng 1,5 tới 3,5. Máu của bạn luôn có pH khoảng 7,4. Nước mưa sạch có pH khoảng 5,6 vì khí carbon dioxide trong không khí tan vào. Còn đa số cây trồng ưa đất có pH khoảng 5 tới 8.',
        ],
        visual: {
          type: 'ph-scale',
          items: [
            { label: 'Nước chanh', ph: 2.5, scene: 'ph-test-lemonade' },
            { label: 'Nước ngọt có ga', ph: 3.5, scene: 'soda-can' },
            { label: 'Nước tinh khiết', ph: 7, scene: 'glass-of-water' },
            { label: 'Kem đánh răng', ph: 8, scene: 'toothpaste' },
            { label: 'Nước xà phòng', ph: 10, scene: 'soap-bar' },
            { label: 'Nước vôi', ph: 12, scene: 'limewash' },
          ],
        },
      },
      exercises: [
        {
          id: 'u5-l4-e1',
          type: 'mcq',
          prompt: 'Một dung dịch có pH nhỏ hơn 7. Dung dịch đó có tính gì?',
          options: [
            { id: 'a', text: 'Tính acid' },
            { id: 'b', text: 'Tính base' },
            { id: 'c', text: 'Trung tính' },
          ],
          correctOptionId: 'a',
          explanation:
            'Số 7 là cột mốc. Nhỏ hơn 7 là acid, đúng bằng 7 là trung tính, lớn hơn 7 là base.',
          conceptIds: ['ph-scale', 'acid'],
        },
        {
          id: 'u5-l4-e2',
          type: 'sort',
          prompt: 'Dựa vào pH, xếp mỗi thứ vào đúng nhóm',
          groups: [
            { id: 'acid', label: 'Acid (pH nhỏ hơn 7)' },
            { id: 'neutral', label: 'Trung tính (pH bằng 7)' },
            { id: 'base', label: 'Base (pH lớn hơn 7)' },
          ],
          items: [
            {
              id: 'i1',
              text: 'Nước chanh, pH khoảng 2,5',
              image: 'ph-test-lemonade',
              groupId: 'acid',
            },
            { id: 'i2', text: 'Nước xà phòng, pH khoảng 10', image: 'soap-bar', groupId: 'base' },
            { id: 'i3', text: 'Nước tinh khiết, pH 7', groupId: 'neutral' },
            {
              id: 'i4',
              text: 'Nước ngọt có ga, pH khoảng 3,5',
              image: 'soda-can',
              groupId: 'acid',
            },
            { id: 'i5', text: 'Nước vôi, pH khoảng 12', image: 'limewash', groupId: 'base' },
          ],
          explanation:
            'Chỉ cần so con số với 7. Nước chanh và nước ngọt có ga dưới 7 nên là acid. Nước xà phòng và nước vôi trên 7 nên là base. Nước tinh khiết đứng đúng ở mốc 7.',
          conceptIds: ['ph-scale'],
        },
        {
          id: 'u5-l4-e3',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Dung dịch có pH bằng 7 là ___. pH càng nhỏ hơn 7 thì tính ___ càng mạnh. pH càng lớn hơn 7 thì tính ___ càng mạnh.',
          blanks: [
            { accepted: ['trung tính'], wordBank: ['trung tính', 'acid', 'base'] },
            { accepted: ['acid'], wordBank: ['trung tính', 'acid', 'base'] },
            { accepted: ['base'], wordBank: ['trung tính', 'acid', 'base'] },
          ],
          explanation:
            'Hãy hình dung cái bập bênh có trụ ở số 7. Càng đi xa về phía số nhỏ, tính acid càng mạnh. Càng đi xa về phía số lớn, tính base càng mạnh.',
          conceptIds: ['ph-scale'],
        },
        {
          id: 'u5-l4-e4',
          type: 'true-false',
          prompt: 'pH càng lớn thì tính acid càng mạnh.',
          answer: false,
          explanation:
            'Chỗ này rất dễ nhầm vì nó đi ngược: pH càng nhỏ thì càng nhiều ion H⁺, tính acid càng mạnh. pH lớn hơn 7 thì đã sang phía base rồi.',
          conceptIds: ['ph-scale', 'acid'],
        },
        {
          id: 'u5-l4-e5',
          type: 'mcq',
          prompt: 'Cà phê có pH khoảng 5, giấm có pH khoảng 3. Thứ nào có tính acid mạnh hơn?',
          visual: { id: 'v', image: 'vinegar-bottle' },
          options: [
            { id: 'a', text: 'Cà phê, vì 5 lớn hơn 3' },
            { id: 'b', text: 'Giấm, vì pH của nó nhỏ hơn' },
            { id: 'c', text: 'Như nhau, vì cả hai đều dưới 7' },
          ],
          correctOptionId: 'b',
          explanation:
            'Cả hai đều là acid vì pH dưới 7, nhưng giấm có pH nhỏ hơn nên tính acid mạnh hơn. Bạn cũng thấy điều đó ở vị: giấm chua gắt hơn cà phê nhiều.',
          conceptIds: ['ph-scale', 'acid'],
        },
        {
          id: 'u5-l4-e6',
          type: 'match-pairs',
          prompt:
            'Dịch dạ dày chứa hydrochloric acid nên rất chua. Nước mưa sạch chỉ hơi chua. Máu lệch rất nhẹ về phía base. Nước xà phòng là base rõ rệt. Nối mỗi thứ với pH của nó',
          pairs: [
            {
              left: { id: 'l1', text: 'Dịch dạ dày' },
              right: { id: 'r1', text: 'Khoảng 1,5 tới 3,5' },
            },
            { left: { id: 'l2', text: 'Nước mưa sạch' }, right: { id: 'r2', text: 'Khoảng 5,6' } },
            { left: { id: 'l3', text: 'Máu' }, right: { id: 'r3', text: 'Khoảng 7,4' } },
            {
              left: { id: 'l4', text: 'Nước xà phòng', image: 'soap-bar' },
              right: { id: 'r4', text: 'Khoảng 10' },
            },
          ],
          explanation:
            'Càng chua thì pH càng nhỏ, nên dịch dạ dày nhận con số nhỏ nhất. Nước mưa sạch hơi chua nên ở dưới 7 một chút. Máu chỉ nhỉnh hơn 7. Nước xà phòng là base rõ rệt nên nhận con số lớn nhất.',
          conceptIds: ['ph-scale'],
        },
        {
          id: 'u5-l4-e7',
          type: 'order-steps',
          prompt: 'Sắp xếp từ thứ có tính acid mạnh nhất tới thứ có tính base mạnh nhất',
          steps: [
            { id: 's1', text: 'Dịch dạ dày, pH khoảng 2' },
            { id: 's2', text: 'Nước mưa sạch, pH khoảng 5,6' },
            { id: 's3', text: 'Nước tinh khiết, pH 7' },
            { id: 's4', text: 'Kem đánh răng, pH khoảng 8' },
            { id: 's5', text: 'Nước vôi, pH khoảng 12' },
          ],
          explanation:
            'Xếp theo pH tăng dần là xong: 2, rồi 5,6, rồi 7, rồi 8, rồi 12. Càng về đầu danh sách càng nhiều ion H⁺, càng về cuối càng nhiều ion OH⁻.',
          conceptIds: ['ph-scale'],
        },
        {
          id: 'u5-l4-e8',
          type: 'mcq',
          prompt: 'Máu người có pH khoảng 7,4. Vậy máu có tính gì?',
          options: [
            { id: 'a', text: 'Acid mạnh, vì máu có màu đỏ' },
            { id: 'b', text: 'Acid rất nhẹ, vì pH gần 7' },
            { id: 'c', text: 'Base rất nhẹ, vì pH lớn hơn 7 một chút' },
          ],
          correctOptionId: 'c',
          explanation:
            '7,4 lớn hơn 7 nên nằm bên phía base, nhưng chỉ lệch một chút. Màu đỏ của máu không liên quan gì tới giấy quỳ. Cơ thể giữ pH của máu rất ổn định, quanh mức 7,4.',
          conceptIds: ['ph-scale', 'base'],
        },
        {
          id: 'u5-l4-e9',
          type: 'true-false',
          prompt: 'Nước mưa sạch có pH khoảng 5,6, nghĩa là nó hơi có tính acid.',
          answer: true,
          explanation:
            '5,6 nhỏ hơn 7 nên nước mưa sạch hơi có tính acid. Đó là do khí carbon dioxide trong không khí tan vào giọt mưa. Mức này hoàn toàn bình thường.',
          conceptIds: ['ph-scale', 'acid'],
        },
        {
          id: 'u5-l4-e10',
          type: 'mcq',
          prompt:
            'Đa số cây trồng ưa đất có pH khoảng 5 tới 8. Bác nông dân đo đất ruộng nhà mình thì thấy pH chỉ khoảng 4. Đất ruộng đang thế nào?',
          visual: { id: 'v', image: 'rice-field' },
          options: [
            { id: 'a', text: 'Tính acid quá mạnh so với mức cây ưa' },
            { id: 'b', text: 'Tính base quá mạnh so với mức cây ưa' },
            { id: 'c', text: 'Trung tính, vừa đúng mức cây ưa' },
          ],
          correctOptionId: 'a',
          explanation:
            'pH 4 nhỏ hơn 5 nên đất có tính acid mạnh hơn mức cây ưa. Nông dân gọi đó là đất chua. Bài sau bạn sẽ biết vì sao rắc vôi lại chữa được đất chua.',
          conceptIds: ['ph-scale', 'acid'],
        },
      ],
      baseXp: 10,
    },

    // ───────────────────────── Bài 5: Phản ứng trung hoà ─────────────────────────
    {
      id: 'u5-l5-neutralisation',
      title: 'Khi acid gặp base',
      intro: {
        title: 'Thìa thuốc trắng như sữa',
        story: [
          'Ăn quá no hay quá cay, có người thấy nóng rát vì dạ dày tiết quá nhiều acid. Một số thuốc giảm acid dạ dày trông như sữa đặc màu trắng. Trong thứ sữa đó có gì?',
          'Đó là magnesium hydroxide Mg(OH)₂, một base. Gặp hydrochloric acid HCl trong dạ dày, ion OH⁻ của base bắt lấy ion H⁺ của acid, thành phân tử nước H₂O. Ion H⁺ bớt đi nên dạ dày dịu lại.',
          'Phần còn lại là ion magnesium và ion chloride. Chúng làm thành magnesium chloride MgCl₂. Chất gồm ion kim loại đi với phần còn lại của acid như vậy gọi là muối. Muối ăn NaCl chỉ là một thành viên của họ này.',
          'Acid tác dụng với base tạo thành muối và nước: đó là phản ứng trung hoà. Ví dụ gọn nhất là HCl + NaOH → NaCl + H₂O. Ở đây ta chỉ tìm hiểu phần hoá học, còn dùng thuốc thế nào là việc của bác sĩ.',
        ],
        visual: { type: 'reaction', reactionId: 'antacid-neutralisation' },
      },
      exercises: [
        {
          id: 'u5-l5-e1',
          type: 'mcq',
          prompt: 'Acid tác dụng với base thì tạo ra những gì?',
          options: [
            { id: 'a', text: 'Muối và khí hydrogen' },
            { id: 'b', text: 'Muối và nước' },
            { id: 'c', text: 'Chỉ có nước' },
          ],
          correctOptionId: 'b',
          explanation:
            'Phản ứng trung hoà tạo ra muối và nước. Muối và khí hydrogen là sản phẩm khi acid gặp kim loại như magnesium, một phản ứng khác bạn đã thấy ở Bài 1.',
          conceptIds: ['neutralisation', 'salt'],
        },
        {
          id: 'u5-l5-e2',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Trong phản ứng trung hoà, ion ___ của acid kết hợp với ion ___ của base, tạo thành ___.',
          blanks: [
            { accepted: ['H⁺', 'H+'], wordBank: ['H⁺', 'OH⁻', 'Na⁺'] },
            { accepted: ['OH⁻', 'OH-'], wordBank: ['H⁺', 'OH⁻', 'Na⁺'] },
            { accepted: ['nước'], wordBank: ['nước', 'muối', 'khí hydrogen'] },
          ],
          explanation:
            'Một ion H⁺ cộng một ion OH⁻ thành đúng một phân tử H₂O. Đếm thử: 2 hydrogen và 1 oxygen, không thừa không thiếu.',
          conceptIds: ['neutralisation', 'acid', 'base'],
        },
        {
          id: 'u5-l5-e3',
          type: 'balance-reaction',
          reactionId: 'hcl-naoh-neutralisation',
          prompt:
            'Cân bằng phản ứng trung hoà giữa hydrochloric acid và sodium hydroxide. Hãy đếm nguyên tử trước khi đổi hệ số!',
          explanation:
            'Mỗi vế đều có 1 Na, 1 Cl, 1 O và 2 H, nên phương trình đã cân bằng sẵn: HCl + NaOH → NaCl + H₂O. Mọi hệ số đều là 1.',
          conceptIds: ['neutralisation', 'balancing'],
        },
        {
          id: 'u5-l5-e4',
          type: 'sort',
          prompt:
            'Nhớ lại: acid tạo ra ion H⁺, base tạo ra ion OH⁻, muối gồm ion kim loại đi với phần còn lại của acid. Xếp mỗi chất vào đúng họ',
          groups: [
            { id: 'acid', label: 'Acid' },
            { id: 'base', label: 'Base' },
            { id: 'salt', label: 'Muối' },
          ],
          items: [
            { id: 'i1', moleculeId: 'hcl', text: 'HCl', groupId: 'acid' },
            { id: 'i2', moleculeId: 'naoh', text: 'NaOH', groupId: 'base' },
            { id: 'i3', moleculeId: 'nacl', text: 'NaCl', groupId: 'salt' },
            { id: 'i4', moleculeId: 'mgoh2', text: 'Mg(OH)₂', groupId: 'base' },
            { id: 'i5', moleculeId: 'mgcl2', text: 'MgCl₂', groupId: 'salt' },
            { id: 'i6', moleculeId: 'c2h4o2', text: 'CH₃COOH', groupId: 'acid' },
          ],
          explanation:
            'HCl và CH₃COOH nhả ra ion H⁺ nên là acid. NaOH và Mg(OH)₂ có nhóm OH đi với kim loại nên là base. NaCl và MgCl₂ gồm ion kim loại đi với phần còn lại của HCl nên là muối.',
          conceptIds: ['acid', 'base', 'salt'],
        },
        {
          id: 'u5-l5-e5',
          type: 'mcq',
          prompt: 'Vì sao magnesium hydroxide trong thuốc làm dịu được một dạ dày đang thừa acid?',
          visual: { id: 'v', image: 'antacid' },
          options: [
            { id: 'a', text: 'Vì ion OH⁻ của nó kết hợp với ion H⁺ thành nước' },
            { id: 'b', text: 'Vì nó thêm nhiều ion H⁺ vào dạ dày' },
            { id: 'c', text: 'Vì nó làm thức ăn trong dạ dày bay hơi' },
          ],
          correctOptionId: 'a',
          explanation:
            'Tính acid là do ion H⁺. Ion OH⁻ của base bắt lấy ion H⁺ và biến nó thành nước, nên lượng H⁺ giảm đi. Thêm H⁺ thì chỉ làm dạ dày chua hơn.',
          conceptIds: ['neutralisation', 'base'],
        },
        {
          id: 'u5-l5-e6',
          type: 'balance-reaction',
          reactionId: 'antacid-neutralisation',
          prompt:
            'Magnesium hydroxide trung hoà hydrochloric acid, tạo ra magnesium chloride và nước. Cân bằng phương trình này',
          explanation:
            'Mg(OH)₂ có 2 nhóm OH nên cần 2 ion H⁺, tức 2 phân tử HCl. Hai cặp H⁺ và OH⁻ tạo thành 2 phân tử nước. Kết quả: Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O.',
          conceptIds: ['neutralisation', 'balancing', 'chemical-equation'],
        },
        {
          id: 'u5-l5-e7',
          type: 'true-false',
          prompt:
            'Trong phản ứng HCl + NaOH → NaCl + H₂O, nguyên tử chlorine của acid biến mất sau phản ứng.',
          answer: false,
          explanation:
            'Không nguyên tử nào biến mất cả. Chlorine của acid giờ nằm trong muối NaCl, còn hydrogen của acid nằm trong phân tử nước. Định luật bảo toàn khối lượng vẫn đúng ở đây.',
          conceptIds: ['neutralisation', 'conservation-of-mass'],
        },
        {
          id: 'u5-l5-e8',
          type: 'mcq',
          prompt:
            'Trong phòng thí nghiệm, cô giáo nhỏ từ từ dung dịch NaOH vào một cốc hydrochloric acid. pH trong cốc thay đổi thế nào?',
          options: [
            { id: 'a', text: 'Giảm dần, vì dung dịch chua thêm' },
            { id: 'b', text: 'Không đổi, vì acid vẫn là acid' },
            { id: 'c', text: 'Tăng dần, vì ion H⁺ bị dùng bớt' },
          ],
          correctOptionId: 'c',
          explanation:
            'Mỗi ion OH⁻ thêm vào lấy đi một ion H⁺. Càng ít H⁺ thì pH càng lớn. Khi acid vừa hết, pH lên tới khoảng 7. Nếu vẫn nhỏ tiếp thì base bị thừa và pH vượt lên trên 7.',
          conceptIds: ['neutralisation', 'ph-scale'],
        },
        {
          id: 'u5-l5-e9',
          type: 'mcq',
          prompt:
            'Đất ruộng bị chua, pH chỉ khoảng 4. Bác nông dân rắc lên ruộng một lớp vôi bột, thứ có tính base. Việc này nhằm mục đích gì?',
          visual: { id: 'v', image: 'rice-field' },
          options: [
            { id: 'a', text: 'Trung hoà bớt acid trong đất để pH tăng lên' },
            { id: 'b', text: 'Thêm acid cho đất để pH giảm xuống' },
            { id: 'c', text: 'Nhuộm trắng mặt ruộng cho đất mát hơn' },
          ],
          correctOptionId: 'a',
          explanation:
            'Vôi có tính base nên trung hoà bớt acid trong đất, đưa pH tăng dần về mức cây ưa. Cùng một phản ứng trung hoà, lúc thì ở trong dạ dày, lúc thì ở ngoài đồng.',
          conceptIds: ['neutralisation', 'ph-scale'],
        },
        {
          id: 'u5-l5-e10',
          type: 'true-false',
          prompt:
            'Cứ trộn acid với base, bất kể mỗi thứ nhiều hay ít, là luôn thu được dung dịch trung tính có pH bằng 7.',
          answer: false,
          explanation:
            'Dung dịch chỉ trung tính khi lượng acid và lượng base vừa đủ cho nhau. Thừa acid thì pH vẫn dưới 7, thừa base thì pH trên 7. Vì thế người ta dùng chất chỉ thị để biết lúc nào thì vừa đủ.',
          conceptIds: ['neutralisation', 'ph-scale'],
        },
      ],
      unlocksMolecules: ['mgoh2', 'mgcl2'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 6: Oxide ─────────────────────────
    {
      id: 'u5-l6-oxides',
      title: 'Oxide: bắt cặp với oxygen',
      intro: {
        title: 'Cơn mưa làm mòn tượng đá',
        story: [
          'Ở những vùng nhiều nhà máy và xe cộ, mưa có thể chua hơn bình thường, pH xuống dưới 5,6. Người ta gọi đó là mưa acid. Lâu ngày, nó làm tượng đá mòn dần và cây cối úa lá.',
          'Một thủ phạm chính bốc ra từ ống khói: khí sulfur dioxide SO₂, sinh ra khi đốt than và dầu có lẫn sulfur (lưu huỳnh). Trong không khí ẩm, SO₂ dần biến thành sulfuric acid H₂SO₄ rồi theo mưa rơi xuống.',
          'SO₂ là một oxide: hợp chất chỉ gồm hai nguyên tố, trong đó một nguyên tố là oxygen. Bạn đã gặp nhiều oxide rồi: carbon dioxide CO₂, magnesium oxide MgO, gỉ sắt Fe₂O₃.',
          'Oxide của phi kim như SO₂, CO₂ thường là oxide acid: chúng đứng về phe acid và tác dụng được với base. Oxide của kim loại như MgO hay vôi sống CaO thường là oxide base: chúng đứng về phe base và tác dụng được với acid.',
        ],
        visual: { type: 'molecule', moleculeId: 'so2', scene: 'acid-rain' },
      },
      exercises: [
        {
          id: 'u5-l6-e1',
          type: 'mcq',
          prompt: 'Oxide là gì?',
          options: [
            { id: 'a', text: 'Khí oxygen O₂ có trong không khí' },
            { id: 'b', text: 'Hợp chất của oxygen với một nguyên tố khác' },
            { id: 'c', text: 'Bất kì chất nào có oxygen, kể cả NaOH' },
          ],
          correctOptionId: 'b',
          explanation:
            'Oxide chỉ gồm hai nguyên tố, một trong hai là oxygen. Khí O₂ chỉ có một nguyên tố nên là đơn chất. NaOH có tới ba nguyên tố nên không phải oxide.',
          conceptIds: ['oxide', 'compound'],
        },
        {
          id: 'u5-l6-e2',
          type: 'sort',
          prompt: 'Chất nào là oxide?',
          groups: [
            { id: 'yes', label: 'Là oxide' },
            { id: 'no', label: 'Không phải oxide' },
          ],
          items: [
            { id: 'i1', moleculeId: 'co2', text: 'CO₂', groupId: 'yes' },
            { id: 'i2', moleculeId: 'o2', text: 'O₂', groupId: 'no' },
            { id: 'i3', moleculeId: 'cao', text: 'CaO', groupId: 'yes' },
            { id: 'i4', moleculeId: 'naoh', text: 'NaOH', groupId: 'no' },
            { id: 'i5', moleculeId: 'so2', text: 'SO₂', groupId: 'yes' },
            { id: 'i6', moleculeId: 'nacl', text: 'NaCl', groupId: 'no' },
          ],
          explanation:
            'CO₂, CaO và SO₂ đều gồm oxygen và đúng một nguyên tố khác. O₂ là đơn chất. NaOH có ba nguyên tố. NaCl thì không có oxygen.',
          conceptIds: ['oxide', 'formula'],
        },
        {
          id: 'u5-l6-e3',
          type: 'build-molecule',
          prompt: 'Ghép phân tử sulfur dioxide SO₂, khí gây ra mưa acid',
          targetMoleculeId: 'so2',
          availableAtoms: { S: 2, O: 3, H: 2, C: 1 },
          explanation:
            'SO₂ gồm 1 nguyên tử sulfur và 2 nguyên tử oxygen. Tên gọi cũng nói rõ điều đó: "di" nghĩa là hai, giống như trong carbon dioxide.',
          conceptIds: ['oxide', 'formula'],
        },
        {
          id: 'u5-l6-e4',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Oxide của phi kim như SO₂, CO₂ thường là oxide ___. Oxide của kim loại như CaO, MgO thường là oxide ___.',
          blanks: [
            { accepted: ['acid'], wordBank: ['acid', 'base', 'muối'] },
            { accepted: ['base'], wordBank: ['acid', 'base', 'muối'] },
          ],
          explanation:
            'Phi kim thường cho oxide acid, kim loại thường cho oxide base. Chữ "thường" là có lí do: vẫn có ngoại lệ, như carbon monoxide CO không đứng về phe nào, gọi là oxide trung tính.',
          conceptIds: ['oxide', 'metal', 'nonmetal'],
        },
        {
          id: 'u5-l6-e5',
          type: 'balance-reaction',
          reactionId: 'magnesium-burning',
          prompt:
            'Kim loại cháy trong oxygen tạo thành oxide. Cân bằng lại phản ứng magnesium cháy mà bạn đã gặp ở que pháo bông',
          explanation:
            'O₂ có 2 nguyên tử oxygen nên tạo được 2 MgO, và cần 2 Mg. Kết quả: 2Mg + O₂ → 2MgO. Sản phẩm MgO là oxide của một kim loại, tức một oxide base.',
          conceptIds: ['oxide', 'balancing', 'combustion'],
        },
        {
          id: 'u5-l6-e6',
          type: 'mcq',
          prompt:
            'Than cháy: C + O₂ → CO₂. Carbon là phi kim. Vậy sản phẩm CO₂ được xếp vào loại nào?',
          visual: { id: 'v', image: 'charcoal-grill' },
          options: [
            { id: 'a', text: 'Oxide acid' },
            { id: 'b', text: 'Oxide base' },
            { id: 'c', text: 'Không phải oxide' },
          ],
          correctOptionId: 'a',
          explanation:
            'CO₂ là oxide của một phi kim nên là oxide acid. Bằng chứng: CO₂ tan vào nước mưa làm nước mưa hơi chua, pH khoảng 5,6.',
          conceptIds: ['oxide', 'nonmetal'],
        },
        {
          id: 'u5-l6-e7',
          type: 'balance-reaction',
          reactionId: 'lime-slaking',
          prompt:
            'Thợ xây thả vôi sống CaO vào nước. Nước sôi sùng sục và vôi sống thành vôi tôi Ca(OH)₂, một base. Cân bằng phương trình này',
          explanation:
            'Đếm thử: mỗi vế có 1 Ca, 2 O và 2 H, nên mọi hệ số đều là 1: CaO + H₂O → Ca(OH)₂. Oxide base này gặp nước thì tạo thành base. Phản ứng toả nhiệt rất mạnh nên chỉ thợ có đồ bảo hộ mới làm.',
          conceptIds: ['oxide', 'base', 'balancing'],
        },
        {
          id: 'u5-l6-e8',
          type: 'balance-reaction',
          reactionId: 'mgo-hcl',
          prompt:
            'Oxide base tác dụng với acid tạo thành muối và nước. Cân bằng phản ứng giữa magnesium oxide MgO và hydrochloric acid',
          explanation:
            'MgCl₂ cần 2 Cl nên phải có 2 HCl. Hai H của chúng cùng với O của MgO vừa đủ làm 1 phân tử nước. Kết quả: MgO + 2HCl → MgCl₂ + H₂O.',
          conceptIds: ['oxide', 'salt', 'balancing'],
        },
        {
          id: 'u5-l6-e9',
          type: 'true-false',
          prompt: 'Mưa acid là mưa có pH lớn hơn 7.',
          visual: { id: 'v', image: 'acid-rain' },
          answer: false,
          explanation:
            'pH lớn hơn 7 là phía base. Mưa acid thì chua hơn mưa bình thường, tức pH nhỏ hơn 5,6. pH càng nhỏ, tính acid càng mạnh.',
          conceptIds: ['ph-scale', 'oxide'],
        },
        {
          id: 'u5-l6-e10',
          type: 'order-steps',
          prompt: 'Mưa acid hình thành thế nào? Sắp xếp theo thứ tự',
          steps: [
            { id: 's1', text: 'Nhà máy đốt than có lẫn sulfur' },
            { id: 's2', text: 'Khí sulfur dioxide SO₂ theo ống khói bay lên trời' },
            { id: 's3', text: 'SO₂ gặp oxygen và hơi nước, dần biến thành sulfuric acid' },
            { id: 's4', text: 'Acid tan trong giọt mưa, rơi xuống làm mòn tượng đá' },
          ],
          explanation:
            'Mọi chuyện bắt đầu từ một oxide acid: SO₂. Muốn bớt mưa acid, các nhà máy lọc SO₂ khỏi khói trước khi thải, thường bằng chính các chất có tính base như vôi.',
          conceptIds: ['oxide', 'acid'],
        },
      ],
      unlocksMolecules: ['so2', 'cao'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 7: Muối ─────────────────────────
    {
      id: 'u5-l7-salts',
      title: 'Muối không chỉ là muối ăn',
      intro: {
        title: 'Quả trứng sủi bọt trong giấm',
        story: [
          'Thả một quả trứng sống vào cốc giấm. Chỉ một lát, vỏ trứng phủ kín những bọt khí li ti. Để qua một hai ngày, lớp vỏ cứng tan gần hết, chỉ còn lớp màng mềm bọc lấy quả trứng.',
          'Vỏ trứng gần như toàn là calcium carbonate CaCO₃. Acetic acid trong giấm phản ứng với nó và sinh ra khí carbon dioxide. Đá vôi, vỏ sò, lớp cặn trắng trong ấm nước cũng chủ yếu là CaCO₃, và cũng sủi bọt khi gặp acid.',
          'Calcium carbonate là một muối. Trong hoá học, muối là cả một họ chất: ion kim loại đi với phần còn lại của một acid, gọi là gốc acid. Hãy nhìn HCl: thay ion H⁺ bằng ion Na⁺, bạn được muối NaCl.',
          'Tên muối ghép từ tên kim loại và tên gốc acid. NaCl là sodium chloride. CaCO₃ là calcium carbonate. Baking soda NaHCO₃ là sodium hydrogencarbonate. Nhiều muối không hề mặn, và phần lớn không ăn được.',
        ],
        visual: { type: 'molecule', moleculeId: 'caco3', scene: 'eggshell-vinegar' },
      },
      exercises: [
        {
          id: 'u5-l7-e1',
          type: 'mcq',
          prompt: 'Trong hoá học, muối là gì?',
          options: [
            { id: 'a', text: 'Chỉ riêng sodium chloride, thứ dùng để nêm canh' },
            { id: 'b', text: 'Bất kì chất rắn màu trắng nào có vị mặn' },
            { id: 'c', text: 'Hợp chất có ion kim loại thế chỗ ion H⁺ của acid' },
          ],
          correctOptionId: 'c',
          explanation:
            'Muối là cả một họ chất: lấy một acid, thay ion H⁺ của nó bằng ion kim loại là được một muối. Muối ăn chỉ là thành viên nổi tiếng nhất của họ này.',
          conceptIds: ['salt'],
        },
        {
          id: 'u5-l7-e2',
          type: 'match-pairs',
          prompt: 'Nối công thức của mỗi muối với tên của nó',
          pairs: [
            {
              left: { id: 'l1', moleculeId: 'nacl', text: 'NaCl' },
              right: { id: 'r1', text: 'Sodium chloride' },
            },
            {
              left: { id: 'l2', moleculeId: 'caco3', text: 'CaCO₃' },
              right: { id: 'r2', text: 'Calcium carbonate' },
            },
            {
              left: { id: 'l3', moleculeId: 'nahco3', text: 'NaHCO₃' },
              right: { id: 'r3', text: 'Sodium hydrogencarbonate' },
            },
            {
              left: { id: 'l4', moleculeId: 'mgcl2', text: 'MgCl₂' },
              right: { id: 'r4', text: 'Magnesium chloride' },
            },
          ],
          explanation:
            'Tên kim loại đứng trước, tên gốc acid đứng sau. Gốc Cl đọc là chloride, gốc CO₃ đọc là carbonate, gốc HCO₃ đọc là hydrogencarbonate.',
          conceptIds: ['salt', 'formula'],
        },
        {
          id: 'u5-l7-e3',
          type: 'true-false',
          prompt:
            'Vỏ trứng sủi bọt trong giấm vì calcium carbonate phản ứng với acetic acid, sinh ra khí carbon dioxide.',
          visual: { id: 'v', image: 'eggshell-vinegar' },
          answer: true,
          explanation:
            'Đúng vậy. Bọt li ti bám trên vỏ trứng là khí carbon dioxide vừa sinh ra. Sủi bọt khí là một dấu hiệu của phản ứng hoá học mà bạn đã biết từ Unit 4.',
          conceptIds: ['salt', 'reaction-signs'],
        },
        {
          id: 'u5-l7-e4',
          type: 'fill-blank',
          prompt:
            'Ion magnesium mang hai điện tích dương (Mg²⁺) nên đi cùng được hai ion Cl⁻. Chọn công thức đúng cho từng chỗ trống',
          template:
            'Thay ion H⁺ trong HCl bằng ion Na⁺, ta được muối ___. Thay bằng ion Mg²⁺, ta được muối ___.',
          blanks: [
            { accepted: ['NaCl'], wordBank: ['NaCl', 'MgCl₂', 'NaOH'] },
            { accepted: ['MgCl₂', 'MgCl2'], wordBank: ['NaCl', 'MgCl₂', 'NaOH'] },
          ],
          explanation:
            'Cả hai muối đều giữ lại gốc Cl của hydrochloric acid, chỉ khác ở ion kim loại thế chỗ cho H⁺. NaOH có nhóm OH nên là base, không phải muối.',
          conceptIds: ['salt', 'ion'],
        },
        {
          id: 'u5-l7-e5',
          type: 'sort',
          prompt: 'Chất nào là muối?',
          groups: [
            { id: 'salt', label: 'Là muối' },
            { id: 'other', label: 'Không phải muối' },
          ],
          items: [
            { id: 'i1', moleculeId: 'caco3', text: 'CaCO₃', groupId: 'salt' },
            { id: 'i2', moleculeId: 'h2so4', text: 'H₂SO₄', groupId: 'other' },
            { id: 'i3', moleculeId: 'nahco3', text: 'NaHCO₃', groupId: 'salt' },
            { id: 'i4', moleculeId: 'caoh2', text: 'Ca(OH)₂', groupId: 'other' },
            { id: 'i5', moleculeId: 'mgcl2', text: 'MgCl₂', groupId: 'salt' },
            { id: 'i6', moleculeId: 'cao', text: 'CaO', groupId: 'other' },
          ],
          explanation:
            'CaCO₃, NaHCO₃ và MgCl₂ đều có ion kim loại đi với một gốc acid nên là muối. H₂SO₄ là acid, Ca(OH)₂ là base, còn CaO là oxide.',
          conceptIds: ['salt', 'acid', 'base', 'oxide'],
        },
        {
          id: 'u5-l7-e6',
          type: 'mcq',
          prompt:
            'Gốc acid của sulfuric acid H₂SO₄ là SO₄, đọc là sulfate. Muối CuSO₄ là những tinh thể màu xanh lam, hay dùng để trị nấm cho cây. Tên của nó là gì?',
          options: [
            { id: 'a', text: 'Copper(II) chloride' },
            { id: 'b', text: 'Copper(II) sulfate' },
            { id: 'c', text: 'Copper(II) carbonate' },
          ],
          correctOptionId: 'b',
          explanation:
            'Kim loại là copper (đồng), gốc acid là sulfate, ghép lại thành copper(II) sulfate. Con số La Mã trong ngoặc cho biết loại ion copper trong muối này mang hai điện tích dương. Đây là một muối không mặn và không ăn được.',
          conceptIds: ['salt', 'formula'],
        },
        {
          id: 'u5-l7-e7',
          type: 'balance-reaction',
          reactionId: 'co2-limewater',
          prompt:
            'Lớp vôi quét tường hút khí CO₂ trong không khí rồi cứng lại thành calcium carbonate. Đây cũng là một cách tạo ra muối: oxide acid tác dụng với base. Cân bằng phương trình này',
          explanation:
            'Mỗi vế có 1 Ca, 1 C, 4 O và 2 H, nên mọi hệ số đều là 1: CO₂ + Ca(OH)₂ → CaCO₃ + H₂O. Sản phẩm vẫn là muối và nước, giống như khi acid gặp base.',
          conceptIds: ['salt', 'oxide', 'balancing'],
        },
        {
          id: 'u5-l7-e8',
          type: 'mcq',
          prompt:
            'Ở Bài 1, magnesium tác dụng với hydrochloric acid: Mg + 2HCl → MgCl₂ + H₂. Trong phương trình này, chất nào là muối?',
          visual: { id: 'v', image: 'metal-in-acid' },
          options: [
            { id: 'a', text: 'MgCl₂' },
            { id: 'b', text: 'H₂' },
            { id: 'c', text: 'HCl' },
          ],
          correctOptionId: 'a',
          explanation:
            'Ion magnesium đã thế chỗ ion H⁺ của HCl, tạo thành muối MgCl₂. Hydrogen bị thế chỗ thì thoát ra thành khí H₂. Vậy là bạn đã gặp bốn cách tạo muối: acid với kim loại, acid với base, oxide base với acid, và oxide acid với base.',
          conceptIds: ['salt', 'acid'],
        },
        {
          id: 'u5-l7-e9',
          type: 'true-false',
          prompt: 'Muối nào cũng mặn và ăn được như muối ăn.',
          answer: false,
          explanation:
            'Calcium carbonate trong vỏ trứng và đá vôi là muối nhưng chẳng mặn chút nào. Copper(II) sulfate là muối nhưng độc. Trong hoá học, chữ "muối" nói về thành phần của chất, tức ion kim loại đi với gốc acid, chứ không nói về vị.',
          conceptIds: ['salt'],
        },
        {
          id: 'u5-l7-e10',
          type: 'mcq',
          prompt:
            'Đáy ấm đun nước lâu ngày đóng một lớp cặn trắng, chủ yếu là calcium carbonate. Người ta ngâm ấm với chút giấm để làm sạch cặn. Vì sao cách này hiệu quả?',
          visual: { id: 'v', image: 'boiling-kettle' },
          options: [
            { id: 'a', text: 'Giấm làm cặn cứng lại rồi tự bong ra' },
            { id: 'b', text: 'Giấm chỉ che đi màu trắng của cặn' },
            { id: 'c', text: 'Acid trong giấm phản ứng với cặn, làm cặn tan dần' },
          ],
          correctOptionId: 'c',
          explanation:
            'Cặn ấm và vỏ trứng cùng là calcium carbonate, nên cũng sủi bọt và tan dần khi gặp acetic acid trong giấm. Bạn vừa dùng chuyện quả trứng để giải thích một mẹo làm bếp.',
          conceptIds: ['salt', 'acid'],
        },
      ],
      baseXp: 10,
    },

    // ───────────────────────── Checkpoint Unit 5 ─────────────────────────
    {
      id: 'u5-checkpoint',
      title: 'Kiểm tra Unit 5',
      kind: 'checkpoint',
      exercises: [
        {
          id: 'u5-cp-e1',
          type: 'mcq',
          prompt: 'Chất nào dưới đây tạo ra ion OH⁻ khi tan trong nước?',
          options: [
            { id: 'a', moleculeId: 'hcl', text: 'HCl' },
            { id: 'b', moleculeId: 'naoh', text: 'NaOH' },
            { id: 'c', moleculeId: 'nacl', text: 'NaCl' },
          ],
          correctOptionId: 'b',
          explanation:
            'NaOH là base: tan vào nước, nó tách thành ion Na⁺ và ion OH⁻. HCl là acid nên tạo ra ion H⁺. NaCl là muối, chỉ tách thành Na⁺ và Cl⁻.',
          conceptIds: ['base', 'acid'],
        },
        {
          id: 'u5-cp-e2',
          type: 'sort',
          prompt: 'Xếp mỗi chất vào đúng họ',
          groups: [
            { id: 'acid', label: 'Acid' },
            { id: 'base', label: 'Base' },
            { id: 'salt', label: 'Muối' },
          ],
          items: [
            { id: 'i1', moleculeId: 'h2so4', text: 'H₂SO₄', groupId: 'acid' },
            { id: 'i2', moleculeId: 'caoh2', text: 'Ca(OH)₂', groupId: 'base' },
            { id: 'i3', moleculeId: 'caco3', text: 'CaCO₃', groupId: 'salt' },
            { id: 'i4', moleculeId: 'c2h4o2', text: 'CH₃COOH', groupId: 'acid' },
            { id: 'i5', moleculeId: 'nacl', text: 'NaCl', groupId: 'salt' },
            { id: 'i6', moleculeId: 'naoh', text: 'NaOH', groupId: 'base' },
          ],
          explanation:
            'H₂SO₄ và CH₃COOH nhả ra ion H⁺ nên là acid. Ca(OH)₂ và NaOH có nhóm OH đi với kim loại nên là base. CaCO₃ và NaCl gồm ion kim loại đi với gốc acid nên là muối.',
          conceptIds: ['acid', 'base', 'salt'],
        },
        {
          id: 'u5-cp-e3',
          type: 'balance-reaction',
          reactionId: 'magnesium-hcl',
          prompt:
            'Magnesium tan trong hydrochloric acid, tạo ra magnesium chloride và khí hydrogen. Cân bằng phương trình này',
          explanation:
            'MgCl₂ có 2 Cl nên cần 2 HCl. Hai H của chúng vừa đủ cho 1 phân tử H₂. Kết quả: Mg + 2HCl → MgCl₂ + H₂.',
          conceptIds: ['acid', 'balancing'],
        },
        {
          id: 'u5-cp-e4',
          type: 'true-false',
          prompt: 'Giấy quỳ tím hoá xanh khi nhúng vào dung dịch acid.',
          answer: false,
          explanation:
            'Acid làm quỳ tím hoá đỏ. Quỳ tím chỉ hoá xanh khi gặp dung dịch base, như nước vôi trong hay nước xà phòng.',
          conceptIds: ['indicator'],
        },
        {
          id: 'u5-cp-e5',
          type: 'mcq',
          prompt:
            'Nọc của một số loài kiến có chứa một acid tên là formic acid. Dân gian hay rửa chỗ kiến đốt bằng nước xà phòng, thứ có tính base nhẹ. Về mặt hoá học, cách làm này dựa trên phản ứng nào?',
          options: [
            { id: 'a', text: 'Phản ứng cháy' },
            { id: 'b', text: 'Phản ứng trung hoà giữa acid và base' },
            { id: 'c', text: 'Phản ứng của acid với kim loại' },
          ],
          correctOptionId: 'b',
          explanation:
            'Base trong nước xà phòng trung hoà bớt acid trong nọc kiến, tạo thành muối và nước. Đó vẫn là phản ứng trung hoà, giống như thuốc dạ dày hay vôi bón ruộng.',
          conceptIds: ['neutralisation'],
        },
        {
          id: 'u5-cp-e6',
          type: 'true-false',
          prompt: 'Nước trong một bể cá cảnh đo được pH 6. Nước này hơi có tính acid.',
          answer: true,
          explanation:
            '6 nhỏ hơn 7 nên nước nghiêng về phía acid, nhưng chỉ nhẹ vì còn rất gần mốc trung tính. Người nuôi cá đo pH thường xuyên vì mỗi loài cá ưa một khoảng pH riêng.',
          conceptIds: ['ph-scale'],
        },
        {
          id: 'u5-cp-e7',
          type: 'order-steps',
          prompt: 'Sắp xếp theo pH tăng dần, từ acid mạnh nhất tới base mạnh nhất',
          steps: [
            { id: 's1', text: 'Nước chanh, pH khoảng 2,5' },
            { id: 's2', text: 'Cà phê, pH khoảng 5' },
            { id: 's3', text: 'Nước tinh khiết, pH 7' },
            { id: 's4', text: 'Nước xà phòng, pH khoảng 10' },
          ],
          explanation:
            'pH tăng dần: 2,5 rồi 5 rồi 7 rồi 10. Nước chanh có tính acid mạnh nhất, nước xà phòng có tính base mạnh nhất, nước tinh khiết đứng ở mốc trung tính.',
          conceptIds: ['ph-scale'],
        },
        {
          id: 'u5-cp-e8',
          type: 'fill-blank',
          prompt: 'Chọn màu đúng cho từng chỗ trống',
          template:
            'Phenolphthalein không màu sẽ hoá ___ trong dung dịch base. Giấy quỳ tím sẽ hoá ___ trong dung dịch acid.',
          blanks: [
            { accepted: ['hồng'], wordBank: ['hồng', 'đỏ', 'xanh'] },
            { accepted: ['đỏ'], wordBank: ['hồng', 'đỏ', 'xanh'] },
          ],
          explanation:
            'Phenolphthalein hoá hồng với base. Quỳ tím hoá đỏ với acid và hoá xanh với base.',
          conceptIds: ['indicator'],
        },
        {
          id: 'u5-cp-e9',
          type: 'mcq',
          prompt:
            'Một số gói hút ẩm đặt trong hộp bánh kẹo chứa vôi sống CaO, vì nó hút nước rất mạnh. CaO thuộc loại hợp chất nào?',
          visual: { id: 'v', moleculeId: 'cao' },
          options: [
            { id: 'a', text: 'Oxide base' },
            { id: 'b', text: 'Oxide acid' },
            { id: 'c', text: 'Muối' },
          ],
          correctOptionId: 'a',
          explanation:
            'CaO gồm oxygen và một kim loại nên là oxide base. Gặp nước, nó thành base Ca(OH)₂ và toả nhiều nhiệt. Vì thế trên gói hút ẩm luôn ghi không được mở, không được ăn.',
          conceptIds: ['oxide'],
        },
        {
          id: 'u5-cp-e10',
          type: 'balance-reaction',
          reactionId: 'acid-rain-formation',
          prompt:
            'Mưa acid: khí sulfur dioxide SO₂ gặp oxygen và nước, qua vài bước thì thành sulfuric acid H₂SO₄. Viết gộp các bước lại, ta được một phương trình. Cân bằng phương trình này',
          explanation:
            'Thử với 2 SO₂: cần 2 H₂SO₄ để đủ 2 S, và 2 H₂O để đủ 4 H. Đếm oxygen: vế trái 4 + 2 + 2 = 8, vế phải 2 × 4 = 8. Kết quả: 2SO₂ + O₂ + 2H₂O → 2H₂SO₄.',
          conceptIds: ['oxide', 'acid', 'balancing'],
        },
        {
          id: 'u5-cp-e11',
          type: 'match-pairs',
          prompt: 'Nối các chất phản ứng với thứ chúng tạo ra',
          pairs: [
            { left: { id: 'l1', text: 'Acid + base' }, right: { id: 'r1', text: 'Muối + nước' } },
            {
              left: { id: 'l2', text: 'Acid + magnesium' },
              right: { id: 'r2', text: 'Muối + khí hydrogen' },
            },
            {
              left: { id: 'l3', text: 'Vôi sống + nước' },
              right: { id: 'r3', text: 'Calcium hydroxide' },
            },
            {
              left: { id: 'l4', text: 'Vỏ trứng + giấm' },
              right: { id: 'r4', text: 'Bọt khí carbon dioxide' },
            },
          ],
          explanation:
            'Acid gặp base thì trung hoà thành muối và nước. Acid gặp magnesium thì có thêm khí hydrogen thoát ra. Vôi sống là oxide base, gặp nước thành base. Calcium carbonate trong vỏ trứng gặp acid thì sủi bọt carbon dioxide.',
          conceptIds: ['neutralisation', 'acid', 'oxide', 'salt'],
        },
        {
          id: 'u5-cp-e12',
          type: 'mcq',
          prompt:
            'Viên sủi vitamin C có citric acid và sodium hydrogencarbonate NaHCO₃ ở dạng khô. Thả viên vào nước, hai chất tan ra, gặp nhau và sủi bọt. Khí trong bọt là gì?',
          options: [
            { id: 'a', moleculeId: 'h2', text: 'Hydrogen' },
            { id: 'b', moleculeId: 'o2', text: 'Oxygen' },
            { id: 'c', moleculeId: 'co2', text: 'Carbon dioxide' },
          ],
          correctOptionId: 'c',
          explanation:
            'Muối có gốc carbonate hay hydrogencarbonate gặp acid thì sinh ra khí carbon dioxide, giống vỏ trứng trong giấm và núi lửa baking soda. Khí hydrogen chỉ sinh ra khi acid gặp kim loại như magnesium.',
          conceptIds: ['salt', 'acid', 'reaction-signs'],
        },
      ],
      baseXp: 20,
    },
  ],
}
