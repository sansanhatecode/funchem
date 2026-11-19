import type { UnitInput } from '../../schema/lesson.js'

/**
 * Unit 12: Nhiên liệu và hợp chất hữu cơ
 * 6 bài học + checkpoint: hợp chất hữu cơ và công thức cấu tạo, alkane, ethylene,
 * dầu mỏ và nhiên liệu, ethylic alcohol, acetic acid (kèm phản ứng ester hoá).
 */
export const unit12: UnitInput = {
  id: 'u12-organic',
  order: 12,
  title: 'Nhiên liệu và hợp chất hữu cơ',
  tagline: 'Gas, xăng, cồn và giấm',
  color: '#52606D',
  lessons: [
    // ───────────────────────── Bài 1: Hợp chất hữu cơ ─────────────────────────
    {
      id: 'u12-l1-organic',
      title: 'Vì sao cháy khét lại hoá đen?',
      intro: {
        title: 'Lát bánh mì nướng quá tay',
        story: [
          'Bạn vặn máy nướng bánh mì lên nấc to nhất rồi quên mất. Lúc lát bánh bật lên, nó đã đen thui và bốc khói. Miếng thịt nướng quá lửa, nồi cơm cháy, que củi trong bếp cũng vậy: cháy khét rồi đều hoá đen. Sao thứ nào cũng ra cùng một màu?',
          'Màu đen ấy là carbon, cũng là thứ làm nên cục than. Bánh mì, thịt, gỗ đều tạo từ những phân tử có bộ khung là các nguyên tử carbon. Bị nung quá nóng, phần lớn hydrogen và oxygen thoát đi dưới dạng hơi nước và các chất khí, còn lại chủ yếu là carbon. Bấm kính lúp để xem glucose, mắt xích của tinh bột trong bánh mì: khung của nó gồm 6 nguyên tử carbon.',
          'Các hợp chất của carbon như thế gọi là hợp chất hữu cơ, và ngành hoá học nghiên cứu chúng gọi là hoá học hữu cơ. Đường, tinh bột, chất béo, protein, ethanol đều là hợp chất hữu cơ. Nhựa và xăng cũng làm từ hợp chất hữu cơ. Có một số ngoại lệ, như carbon monoxide CO, carbon dioxide CO₂ và các muối carbonate như đá vôi CaCO₃: tuy có carbon nhưng chúng được xếp vào chất vô cơ, cùng nhóm với nước, muối ăn và kim loại.',
          'Vì sao carbon làm được bộ khung? Mỗi nguyên tử carbon có 4 "tay" để tạo liên kết. Các nguyên tử carbon nắm tay nhau thành mạch ngắn, mạch dài, mạch có nhánh, rồi mới dùng những tay còn lại để giữ hydrogen, oxygen. Nhờ vậy, số hợp chất hữu cơ đã biết lên tới hàng chục triệu, nhiều hơn hẳn số chất vô cơ.',
        ],
        visual: { type: 'molecule', moleculeId: 'c6h12o6', scene: 'burnt-toast' },
      },
      exercises: [
        {
          id: 'u12-l1-e1',
          type: 'mcq',
          prompt:
            'Lát bánh mì nướng quá lửa hoá đen. Chất màu đen còn lại chủ yếu là nguyên tố nào?',
          visual: { id: 'v', image: 'burnt-toast' },
          options: [
            { id: 'a', text: 'Oxygen' },
            { id: 'b', text: 'Carbon' },
            { id: 'c', text: 'Hydrogen' },
          ],
          correctOptionId: 'b',
          explanation:
            'Phân tử trong bánh mì có bộ khung carbon. Khi bị nung quá nóng, phần lớn hydrogen và oxygen thoát đi dưới dạng hơi nước và chất khí, để lại carbon màu đen. Oxygen và hydrogen ở dạng đơn chất đều là chất khí không màu.',
          conceptIds: ['organic-compound', 'element'],
        },
        {
          id: 'u12-l1-e2',
          type: 'sort',
          prompt:
            'Hợp chất hữu cơ là hợp chất của carbon, trừ vài chất như CO, CO₂ và muối carbonate. Xếp mỗi chất vào đúng nhóm',
          groups: [
            { id: 'organic', label: 'Hợp chất hữu cơ' },
            { id: 'inorganic', label: 'Chất vô cơ' },
          ],
          items: [
            { id: 'i1', moleculeId: 'c6h12o6', text: 'Glucose C₆H₁₂O₆', groupId: 'organic' },
            { id: 'i2', moleculeId: 'h2o', text: 'Nước H₂O', groupId: 'inorganic' },
            { id: 'i3', moleculeId: 'ch4', text: 'Methane CH₄', groupId: 'organic' },
            { id: 'i4', moleculeId: 'nacl', text: 'Sodium chloride NaCl', groupId: 'inorganic' },
            { id: 'i5', moleculeId: 'c2h6o', text: 'Ethanol C₂H₆O', groupId: 'organic' },
            { id: 'i6', moleculeId: 'co2', text: 'Carbon dioxide CO₂', groupId: 'inorganic' },
          ],
          explanation:
            'Glucose, methane và ethanol đều là hợp chất của carbon nên là hợp chất hữu cơ. Nước và muối ăn không có carbon. Carbon dioxide có carbon nhưng nằm trong danh sách ngoại lệ, được xếp vào chất vô cơ.',
          conceptIds: ['organic-compound', 'formula'],
        },
        {
          id: 'u12-l1-e3',
          type: 'true-false',
          prompt: 'Đá vôi CaCO₃ có nguyên tử carbon nên là hợp chất hữu cơ.',
          answer: false,
          explanation:
            'Có carbon thôi thì chưa đủ. Các muối carbonate như CaCO₃, cùng với CO và CO₂, được xếp vào chất vô cơ. Chúng không có bộ khung carbon nối với hydrogen như đường, chất béo hay xăng.',
          conceptIds: ['organic-compound'],
        },
        {
          id: 'u12-l1-e4',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Mỗi nguyên tử carbon có ___ "tay" để tạo liên kết. Nhờ đó các nguyên tử carbon nối được với nhau thành ___ làm khung cho phân tử.',
          blanks: [
            { accepted: ['4'], wordBank: ['1', '2', '4'] },
            { accepted: ['mạch'], wordBank: ['mạch', 'ion', 'hạt nhân'] },
          ],
          explanation:
            'Carbon có 4 "tay", hydrogen chỉ có 1, oxygen có 2. Có nhiều tay nên carbon vừa nối được với các carbon khác thành mạch, vừa còn tay để giữ những nguyên tử khác.',
          conceptIds: ['organic-compound', 'covalent-bond'],
        },
        {
          id: 'u12-l1-e5',
          type: 'sort',
          prompt:
            'Hợp chất hữu cơ chia làm hai nhóm lớn. Hydrocarbon chỉ gồm carbon và hydrogen. Dẫn xuất của hydrocarbon thì ngoài carbon và hydrogen còn có nguyên tố khác, như oxygen. Xếp mỗi chất vào đúng nhóm',
          groups: [
            { id: 'hc', label: 'Hydrocarbon' },
            { id: 'derivative', label: 'Dẫn xuất của hydrocarbon' },
          ],
          items: [
            { id: 'i1', moleculeId: 'ch4', text: 'Methane CH₄', groupId: 'hc' },
            { id: 'i2', moleculeId: 'c2h6o', text: 'Ethanol C₂H₆O', groupId: 'derivative' },
            { id: 'i3', moleculeId: 'c3h8', text: 'Propane C₃H₈', groupId: 'hc' },
            { id: 'i4', moleculeId: 'c2h4o2', text: 'Acetic acid CH₃COOH', groupId: 'derivative' },
            { id: 'i5', moleculeId: 'c2h4', text: 'Ethylene C₂H₄', groupId: 'hc' },
            { id: 'i6', moleculeId: 'c6h12o6', text: 'Glucose C₆H₁₂O₆', groupId: 'derivative' },
          ],
          explanation:
            'Chỉ cần đọc công thức: methane, propane, ethylene chỉ có C và H nên là hydrocarbon. Ethanol, acetic acid và glucose có thêm O nên là dẫn xuất của hydrocarbon. Tên "hydrocarbon" ghép từ chính hai nguyên tố hydrogen và carbon.',
          conceptIds: ['hydrocarbon', 'organic-compound', 'formula'],
        },
        {
          id: 'u12-l1-e6',
          type: 'mcq',
          prompt:
            'Túi nilon làm từ polyethylene, một chất do nhà máy tạo ra, chỉ gồm carbon và hydrogen. Theo hoá học, polyethylene thuộc loại nào?',
          options: [
            { id: 'a', text: 'Chất vô cơ, vì do nhà máy làm ra' },
            { id: 'b', text: 'Chất vô cơ, vì không có trong cơ thể sống' },
            { id: 'c', text: 'Hợp chất hữu cơ, vì là hợp chất của carbon' },
          ],
          correctOptionId: 'c',
          explanation:
            'Trong hoá học, "hữu cơ" chỉ có nghĩa là hợp chất của carbon, trừ vài ngoại lệ như CO, CO₂ và muối carbonate. Nó không có nghĩa là tự nhiên hay sạch. Polyethylene và các chất trong xăng đều là hợp chất hữu cơ, còn nước và muối ăn lấy từ thiên nhiên lại là chất vô cơ.',
          conceptIds: ['organic-compound'],
        },
        {
          id: 'u12-l1-e7',
          type: 'mcq',
          prompt:
            'Công thức phân tử, như C₂H₆O, chỉ cho biết phân tử có những nguyên tử nào và mỗi loại bao nhiêu. Công thức cấu tạo cho biết thêm nguyên tử nào nối với nguyên tử nào. Hình dưới là ethanol C₂H₆O. Nguyên tử oxygen nối với những nguyên tử nào?',
          visual: { id: 'v', moleculeId: 'c2h6o' },
          options: [
            { id: 'a', text: 'Một carbon và một hydrogen' },
            { id: 'b', text: 'Hai nguyên tử carbon' },
            { id: 'c', text: 'Hai nguyên tử hydrogen' },
          ],
          correctOptionId: 'a',
          explanation:
            'Oxygen có 2 "tay": một tay nắm carbon, một tay nắm hydrogen. Viết thành công thức cấu tạo, ethanol là CH₃–CH₂–OH, mỗi vạch là một liên kết. Công thức phân tử C₂H₆O không cho bạn thấy điều này.',
          conceptIds: ['structural-formula', 'formula'],
        },
        {
          id: 'u12-l1-e8',
          type: 'match-pairs',
          prompt:
            'Công thức cấu tạo thường được viết gọn theo từng nhóm. CH₃–CH₃ nghĩa là hai nguyên tử carbon nối nhau, mỗi carbon giữ 3 hydrogen. Nối mỗi công thức cấu tạo với công thức phân tử của nó',
          pairs: [
            { left: { id: 'l1', text: 'CH₃–CH₃' }, right: { id: 'r1', text: 'C₂H₆' } },
            { left: { id: 'l2', text: 'CH₃–CH₂–CH₃' }, right: { id: 'r2', text: 'C₃H₈' } },
            { left: { id: 'l3', text: 'CH₃–CH₂–OH' }, right: { id: 'r3', text: 'C₂H₆O' } },
            { left: { id: 'l4', text: 'CH₂=CH₂' }, right: { id: 'r4', text: 'C₂H₄' } },
          ],
          explanation:
            'Muốn ra công thức phân tử, bạn cộng dồn từng loại nguyên tử. CH₃–CH₂–CH₃ có 3 C và 3 + 2 + 3 = 8 H. CH₃–CH₂–OH có 2 C, 3 + 2 + 1 = 6 H và 1 O. Hai vạch trong CH₂=CH₂ là một liên kết đôi.',
          conceptIds: ['structural-formula', 'formula'],
        },
        {
          id: 'u12-l1-e9',
          type: 'mcq',
          prompt:
            'Ethanol CH₃–CH₂–OH là chất lỏng trong gel rửa tay. Dimethyl ether CH₃–O–CH₃ là một chất khí dùng trong bình xịt. Đếm nguyên tử thì cả hai đều là C₂H₆O. Điều gì khiến chúng là hai chất khác nhau?',
          options: [
            { id: 'a', text: 'Số nguyên tử hydrogen của hai chất khác nhau' },
            { id: 'b', text: 'Thứ tự các nguyên tử nối với nhau khác nhau' },
            { id: 'c', text: 'Một chất có carbon, chất kia không có' },
          ],
          correctOptionId: 'b',
          explanation:
            'Hai chất có cùng số nguyên tử mỗi loại, nên cùng công thức phân tử. Nhưng ở ethanol, oxygen đứng cuối mạch và giữ một hydrogen. Ở dimethyl ether, oxygen chen giữa hai carbon. Cách nối khác nhau cho ra hai chất khác nhau. Vì thế với hợp chất hữu cơ, người ta cần công thức cấu tạo.',
          conceptIds: ['structural-formula'],
        },
        {
          id: 'u12-l1-e10',
          type: 'build-molecule',
          prompt: 'Ghép phân tử ethane, hydrocarbon có công thức cấu tạo CH₃–CH₃',
          targetMoleculeId: 'c2h6',
          availableAtoms: { C: 3, H: 8, O: 1 },
          explanation:
            'CH₃–CH₃ có 2 carbon và 3 + 3 = 6 hydrogen, tức C₂H₆. Mỗi carbon dùng 1 tay nắm carbon bên cạnh và 3 tay giữ hydrogen, vừa đủ 4 tay. Ethane là hydrocarbon nên không cần tới nguyên tử oxygen.',
          conceptIds: ['structural-formula', 'hydrocarbon'],
        },
      ],
      unlocksMolecules: ['c2h6'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 2: Alkane ─────────────────────────
    {
      id: 'u12-l2-alkanes',
      title: 'Alkane: họ hàng nhà khí gas',
      intro: {
        title: 'Nồi lẩu và chiếc lon gas mini',
        story: [
          'Cả nhà quây quanh nồi lẩu. Bố lắp một lon gas nhỏ vào bếp mini, vặn núm, và vòng lửa xanh bùng lên. Lon gas mới cầm khá nặng tay vì bên trong là chất lỏng. Vậy mà thứ thoát ra để cháy lại là chất khí.',
          'Trong lon là butane C₄H₁₀, được nén cho hoá lỏng. Mở van, butane hoá hơi thành khí rồi mới cháy. Phân tử butane chỉ gồm carbon và hydrogen, nên nó là một hydrocarbon: 4 nguyên tử carbon nối thành mạch, quanh mạch là 10 nguyên tử hydrogen. Mọi liên kết trong phân tử đều là liên kết đơn.',
          'Hydrocarbon mạch hở, tức mạch carbon không khép thành vòng, mà chỉ có liên kết đơn thì gọi là alkane. Bốn alkane nhỏ nhất là methane CH₄, ethane C₂H₆, propane C₃H₈ và butane C₄H₁₀. Cứ thêm một nguyên tử carbon vào mạch là thêm hai nguyên tử hydrogen. Cả bốn đều là chất khí không màu, hầu như không tan trong nước.',
          'Alkane rất dễ cháy. Khi cháy đủ oxygen, chúng tạo ra carbon dioxide và hơi nước, đồng thời toả nhiều nhiệt. Vì thế alkane là nhiên liệu quen thuộc: methane trong biogas và khí thiên nhiên, propane và butane trong bình gas ở bếp.',
        ],
        visual: { type: 'molecule', moleculeId: 'c4h10' },
      },
      exercises: [
        {
          id: 'u12-l2-e1',
          type: 'match-pairs',
          prompt: 'Nối tên mỗi alkane với công thức phân tử của nó',
          pairs: [
            { left: { id: 'l1', text: 'Methane' }, right: { id: 'r1', text: 'CH₄' } },
            { left: { id: 'l2', text: 'Ethane' }, right: { id: 'r2', text: 'C₂H₆' } },
            { left: { id: 'l3', text: 'Propane' }, right: { id: 'r3', text: 'C₃H₈' } },
            { left: { id: 'l4', text: 'Butane' }, right: { id: 'r4', text: 'C₄H₁₀' } },
          ],
          explanation:
            'Methane có 1 carbon, ethane 2, propane 3, butane 4. Số hydrogen lần lượt là 4, 6, 8, 10: mỗi bậc tăng thêm 2.',
          conceptIds: ['alkane', 'formula'],
        },
        {
          id: 'u12-l2-e2',
          type: 'mcq',
          prompt: 'Trong phân tử alkane, như butane ở hình, các nguyên tử nối với nhau thế nào?',
          visual: { id: 'v', moleculeId: 'c4h10' },
          options: [
            { id: 'a', text: 'Chỉ bằng liên kết đơn' },
            { id: 'b', text: 'Có một liên kết đôi giữa hai carbon' },
            { id: 'c', text: 'Bằng liên kết ion' },
          ],
          correctOptionId: 'a',
          explanation:
            'Alkane chỉ có liên kết đơn: carbon nối carbon một vạch, carbon nối hydrogen một vạch. Đếm quanh mỗi nguyên tử carbon trong hình, bạn luôn thấy đủ 4 vạch. Liên kết ion là kiểu của muối ăn, không có ở đây.',
          conceptIds: ['alkane', 'covalent-bond'],
        },
        {
          id: 'u12-l2-e3',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Butane trong lon gas mini được nén thành chất ___. Khi mở van, nó hoá hơi thành chất ___ rồi mới cháy.',
          blanks: [
            { accepted: ['lỏng'], wordBank: ['rắn', 'lỏng', 'khí'] },
            { accepted: ['khí'], wordBank: ['rắn', 'lỏng', 'khí'] },
          ],
          explanation:
            'Ở điều kiện thường butane là chất khí. Nén lại, các phân tử bị ép sát nhau thành chất lỏng, nên một lon nhỏ chứa được rất nhiều nhiên liệu. Đây là biến đổi vật lí: phân tử butane vẫn nguyên là C₄H₁₀.',
          conceptIds: ['alkane', 'state-change'],
        },
        {
          id: 'u12-l2-e4',
          type: 'mcq',
          prompt:
            'CH₄, C₂H₆, C₃H₈, C₄H₁₀: cứ thêm 1 carbon là thêm 2 hydrogen. Alkane kế tiếp có 5 nguyên tử carbon. Nó có bao nhiêu nguyên tử hydrogen?',
          options: [
            { id: 'a', text: '10' },
            { id: 'b', text: '12' },
            { id: 'c', text: '14' },
          ],
          correctOptionId: 'b',
          explanation:
            'Butane có 10 hydrogen, thêm 2 nữa là 12: C₅H₁₂. Có một cách tính nhanh cho mọi alkane: lấy số carbon nhân đôi rồi cộng 2. Với 5 carbon, ta có 5 × 2 + 2 = 12.',
          conceptIds: ['alkane', 'formula'],
        },
        {
          id: 'u12-l2-e5',
          type: 'build-molecule',
          prompt: 'Ghép phân tử butane C₄H₁₀, alkane trong lon gas mini',
          targetMoleculeId: 'c4h10',
          availableAtoms: { C: 5, H: 12, O: 2 },
          explanation:
            'Butane gồm 4 carbon và 10 hydrogen. Hai carbon ở đầu mạch mỗi cái giữ 3 hydrogen, hai carbon ở giữa mỗi cái giữ 2 hydrogen: 3 + 2 + 2 + 3 = 10. Là hydrocarbon nên butane không có oxygen.',
          conceptIds: ['alkane', 'formula'],
        },
        {
          id: 'u12-l2-e6',
          type: 'sort',
          prompt: 'Mỗi nhiên liệu dưới đây chứa chủ yếu alkane nào?',
          groups: [
            { id: 'methane', label: 'Methane' },
            { id: 'lpg', label: 'Propane, butane' },
          ],
          items: [
            { id: 'i1', text: 'Biogas', image: 'biogas-stove', groupId: 'methane' },
            { id: 'i2', text: 'Bình gas trong bếp', image: 'gas-stove-wok', groupId: 'lpg' },
            { id: 'i3', text: 'Khí thiên nhiên', groupId: 'methane' },
            { id: 'i4', text: 'Lon gas mini', image: 'hotpot-gas-stove', groupId: 'lpg' },
          ],
          explanation:
            'Biogas và khí thiên nhiên chứa chủ yếu methane. Bình gas ở bếp là hỗn hợp propane và butane đã nén lỏng, còn lon gas mini chứa chủ yếu butane. Methane khó nén lỏng hơn nhiều nên thường được dẫn bằng đường ống.',
          conceptIds: ['alkane', 'fuel'],
        },
        {
          id: 'u12-l2-e7',
          type: 'order-steps',
          prompt: 'Cân bằng sơ đồ ethane cháy: C₂H₆ + O₂ → CO₂ + H₂O. Sắp xếp các bước theo thứ tự',
          steps: [
            { id: 's1', text: 'Carbon trước: ethane có 2 C, nên đặt hệ số 2 trước CO₂' },
            { id: 's2', text: 'Tới hydrogen: ethane có 6 H, nên đặt hệ số 3 trước H₂O' },
            {
              id: 's3',
              text: 'Đếm oxygen ở vế phải: 2CO₂ có 4 O, 3H₂O có 3 O, tổng cộng 7 O',
            },
            {
              id: 's4',
              text: '7 là số lẻ mà O₂ luôn đi theo cặp, nên nhân đôi tất cả: 2C₂H₆, 4CO₂, 6H₂O',
            },
            { id: 's5', text: 'Vế phải giờ có 14 O, nên đặt hệ số 7 trước O₂' },
          ],
          explanation:
            'Vẫn là mẹo carbon trước, hydrogen sau, oxygen cuối cùng. Điểm mới là khi số nguyên tử oxygen cần có là số lẻ, ta nhân đôi mọi hệ số để nó thành số chẵn. Kết quả: 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O.',
          conceptIds: ['balancing', 'combustion', 'alkane'],
        },
        {
          id: 'u12-l2-e8',
          type: 'balance-reaction',
          reactionId: 'ethane-combustion',
          maxCoefficient: 8,
          prompt:
            'Đến lượt bạn: cân bằng phương trình ethane cháy. Nếu số oxygen cần có bị lẻ, hãy nhân đôi mọi hệ số',
          explanation:
            '2 phân tử ethane có 4 C và 12 H, cần 4 CO₂ và 6 H₂O. Vế phải có 8 + 6 = 14 O, tức 7 O₂. Kết quả: 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O. Butane cháy cũng theo đúng kiểu này: 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O.',
          conceptIds: ['balancing', 'chemical-equation', 'combustion'],
        },
        {
          id: 'u12-l2-e9',
          type: 'mcq',
          prompt:
            'Gas cháy đủ oxygen cho ngọn lửa xanh. Khi thiếu oxygen, ngọn lửa chuyển vàng, sinh ra khí độc carbon monoxide CO và muội đen bám đáy nồi. Muội đen đó là gì?',
          options: [
            { id: 'a', text: 'Hơi nước đọng lại thành lớp' },
            { id: 'b', text: 'Carbon dioxide đóng thành lớp' },
            { id: 'c', text: 'Carbon từ gas chưa cháy hết' },
          ],
          correctOptionId: 'c',
          explanation:
            'Thiếu oxygen, một phần carbon trong gas không kịp thành CO₂. Nó thành khí CO hoặc thành những hạt carbon đen li ti, tức là muội. Hơi nước và carbon dioxide đều không màu, không thể tạo ra lớp đen. Lửa vàng là dấu hiệu bếp đang phí gas và sinh khí độc.',
          conceptIds: ['combustion', 'alkane'],
        },
        {
          id: 'u12-l2-e10',
          type: 'true-false',
          prompt: 'Khi butane cháy hết, các nguyên tử carbon của nó biến mất cùng ngọn lửa.',
          visual: { id: 'v', image: 'hotpot-gas-stove' },
          answer: false,
          explanation:
            'Không nguyên tử nào biến mất. Phương trình 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O cho thấy 8 nguyên tử carbon đi vào thì 8 nguyên tử carbon đi ra, nằm trong các phân tử carbon dioxide. Chúng bay vào không khí nên bạn không nhìn thấy.',
          conceptIds: ['conservation-of-mass', 'combustion'],
        },
      ],
      // butane đã được mở khoá ở Unit 10 (bài tỉ khối của chất khí)
      baseXp: 10,
    },

    // ───────────────────────── Bài 3: Ethylene ─────────────────────────
    {
      id: 'u12-l3-ethylene',
      title: 'Ethylene: một liên kết đôi làm nên khác biệt',
      intro: {
        title: 'Hai chất khí trông giống hệt nhau',
        story: [
          'Trong giờ thí nghiệm, thầy cô có hai bình khí không màu: một bình methane, một bình ethylene. Nhìn bằng mắt thì không thể phân biệt. Thầy cô dẫn từng khí qua một lọ nước bromine màu vàng cam. Với methane, màu vàng cam vẫn nguyên. Với ethylene, màu nhạt dần rồi mất hẳn.',
          'Khác biệt nằm ở một liên kết. Bạn đã gặp ethylene C₂H₄ ở Unit 7: hai nguyên tử carbon của nó nối với nhau bằng liên kết đôi. Hydrocarbon mạch hở có một liên kết đôi giữa hai nguyên tử carbon gọi là alkene, và ethylene là alkene nhỏ nhất. Nó là chất khí không màu, rất ít tan trong nước.',
          'Liên kết đôi có thể mở ra một nửa. Khi gặp bromine, liên kết đôi mở thành liên kết đơn, mỗi nguyên tử carbon gắn thêm một nguyên tử bromine. Bromine bị giữ vào một phân tử mới không màu, nên nước bromine mất màu. Methane chỉ có liên kết đơn, không có liên kết đôi nào để mở ra, nên không gắn thêm được bromine.',
          'Cũng nhờ liên kết đôi mở ra mà các phân tử ethylene nối được với nhau thành mạch polyethylene của chiếc túi nilon. Phản ứng nối rất nhiều phân tử nhỏ thành polymer như thế gọi là phản ứng trùng hợp. Và giống mọi hydrocarbon, ethylene cháy được, tạo ra carbon dioxide và hơi nước.',
        ],
        visual: { type: 'molecule', moleculeId: 'c2h4', scene: 'bromine-water' },
      },
      exercises: [
        {
          id: 'u12-l3-e1',
          type: 'mcq',
          prompt: 'Điểm nào làm ethylene khác với các alkane như methane và ethane?',
          visual: { id: 'v', moleculeId: 'c2h4' },
          options: [
            { id: 'a', text: 'Phân tử có thêm nguyên tử oxygen' },
            { id: 'b', text: 'Phân tử có một liên kết đôi giữa hai carbon' },
            { id: 'c', text: 'Phân tử không có nguyên tử hydrogen' },
          ],
          correctOptionId: 'b',
          explanation:
            'Ethylene C₂H₄ vẫn chỉ gồm carbon và hydrogen, nên vẫn là hydrocarbon. Khác biệt là hai nguyên tử carbon của nó nối với nhau bằng liên kết đôi, trong khi alkane chỉ có liên kết đơn.',
          conceptIds: ['alkene', 'multiple-bond'],
        },
        {
          id: 'u12-l3-e2',
          type: 'fill-blank',
          prompt: 'Thí nghiệm do thầy cô làm ở trường. Chọn từ đúng cho từng chỗ trống',
          template: 'Dẫn khí ethylene qua nước bromine màu ___, dung dịch ___.',
          blanks: [
            { accepted: ['vàng cam'], wordBank: ['vàng cam', 'xanh tím', 'hồng'] },
            { accepted: ['mất màu'], wordBank: ['mất màu', 'đậm màu hơn', 'hoá xanh'] },
          ],
          explanation:
            'Nước bromine có màu vàng cam. Ethylene phản ứng với bromine, tạo thành một chất không màu: C₂H₄ + Br₂ → C₂H₄Br₂. Bromine có màu bị dùng dần, nên màu vàng cam nhạt đi rồi mất. Bromine là chất độc, nên thí nghiệm này chỉ do thầy cô làm trong phòng thí nghiệm.',
          conceptIds: ['alkene', 'reaction-signs'],
        },
        {
          id: 'u12-l3-e3',
          type: 'sort',
          prompt:
            'Alkane chỉ có liên kết đơn. Alkene có một liên kết đôi giữa hai carbon, viết là C=C. Xếp mỗi chất vào đúng nhóm',
          groups: [
            { id: 'alkane', label: 'Alkane' },
            { id: 'alkene', label: 'Alkene' },
          ],
          items: [
            { id: 'i1', text: 'CH₄', groupId: 'alkane' },
            { id: 'i2', text: 'CH₂=CH₂', groupId: 'alkene' },
            { id: 'i3', text: 'CH₃–CH₃', groupId: 'alkane' },
            { id: 'i4', text: 'CH₂=CH–CH₃', groupId: 'alkene' },
            { id: 'i5', text: 'CH₃–CH₂–CH₂–CH₃', groupId: 'alkane' },
          ],
          explanation:
            'Tìm dấu "=" trong công thức cấu tạo: có một liên kết đôi C=C thì là alkene. CH₂=CH₂ là ethylene. CH₂=CH–CH₃ là alkene có 3 carbon, nguyên liệu làm nhựa PP. Ba chất còn lại chỉ có vạch đơn nên là alkane: methane, ethane và butane.',
          conceptIds: ['alkane', 'alkene', 'structural-formula'],
        },
        {
          id: 'u12-l3-e4',
          type: 'mcq',
          prompt:
            'Phòng thí nghiệm có hai bình khí không màu, một bình methane và một bình ethylene, nhưng nhãn đã bong mất. Thầy cô làm cách nào để nhận ra bình ethylene?',
          visual: { id: 'v', image: 'bromine-water' },
          options: [
            { id: 'a', text: 'Dẫn từng khí qua nước bromine: khí làm mất màu là ethylene' },
            { id: 'b', text: 'Nhìn màu của từng khí: khí có màu là ethylene' },
            { id: 'c', text: 'Dẫn từng khí qua nước: khí tan hết là ethylene' },
          ],
          correctOptionId: 'a',
          explanation:
            'Cả hai khí đều không màu và đều rất ít tan trong nước, nên nhìn hay hoà vào nước đều không phân biệt được. Chỉ ethylene có liên kết đôi để phản ứng với bromine, nên chỉ nó làm nước bromine mất màu.',
          conceptIds: ['alkene', 'reaction-signs'],
        },
        {
          id: 'u12-l3-e5',
          type: 'true-false',
          prompt:
            'Khi ethylene làm mất màu nước bromine, các nguyên tử bromine đã biến mất khỏi lọ.',
          answer: false,
          explanation:
            'Các nguyên tử bromine vẫn còn nguyên trong lọ. Chúng chỉ chuyển từ phân tử bromine có màu sang gắn vào phân tử mới C₂H₄Br₂ không màu. Mất màu là dấu hiệu có chất mới tạo thành, không phải dấu hiệu nguyên tử bị mất đi.',
          conceptIds: ['alkene', 'conservation-of-mass'],
        },
        {
          id: 'u12-l3-e6',
          type: 'match-pairs',
          prompt: 'Nối mỗi phản ứng của ethylene với điều xảy ra',
          pairs: [
            {
              left: { id: 'l1', text: 'Gặp nước bromine' },
              right: { id: 'r1', text: 'Dung dịch vàng cam mất màu' },
            },
            {
              left: { id: 'l2', text: 'Trùng hợp' },
              right: { id: 'r2', text: 'Rất nhiều phân tử nối thành mạch polyethylene' },
            },
            {
              left: { id: 'l3', text: 'Cháy trong oxygen' },
              right: { id: 'r3', text: 'Tạo ra carbon dioxide và hơi nước, toả nhiệt' },
            },
          ],
          explanation:
            'Hai phản ứng đầu đều nhờ liên kết đôi mở ra: một bên gắn thêm bromine, một bên nắm lấy phân tử ethylene bên cạnh. Phản ứng cháy thì hydrocarbon nào cũng có.',
          conceptIds: ['alkene', 'polymer', 'combustion'],
        },
        {
          id: 'u12-l3-e7',
          type: 'mcq',
          prompt:
            'Túi nilon làm bằng polyethylene, tạo ra từ ethylene. Vậy polyethylene có làm mất màu nước bromine như ethylene không?',
          visual: { id: 'v', image: 'banana-bag' },
          options: [
            { id: 'a', text: 'Có, vì polyethylene vẫn làm từ ethylene' },
            { id: 'b', text: 'Có, vì polyethylene là chất rắn' },
            { id: 'c', text: 'Không, vì các liên kết đôi đã mở thành liên kết đơn' },
          ],
          correctOptionId: 'c',
          explanation:
            'Khi trùng hợp, mỗi phân tử ethylene đã mở liên kết đôi để nắm tay hai phân tử bên cạnh. Trong mạch polyethylene chỉ còn liên kết đơn, giống một alkane rất dài, nên không còn chỗ để gắn thêm bromine.',
          conceptIds: ['alkene', 'polymer'],
        },
        {
          id: 'u12-l3-e8',
          type: 'fill-blank',
          prompt:
            'Ethylene cháy tạo ra carbon dioxide và nước. Đếm nguyên tử hydrogen ở hai vế rồi chọn hệ số còn thiếu',
          template: 'C₂H₄ + 3O₂ → 2CO₂ + ___H₂O',
          blanks: [{ accepted: ['2'], wordBank: ['2', '3', '4'] }],
          explanation:
            'Ethylene có 4 H, mỗi phân tử nước giữ 2 H, nên cần 2 H₂O. Kiểm tra oxygen: vế trái có 3 × 2 = 6 O, vế phải có 4 + 2 = 6 O. Phương trình đã cân bằng: C₂H₄ + 3O₂ → 2CO₂ + 2H₂O.',
          conceptIds: ['balancing', 'combustion', 'alkene'],
        },
        {
          id: 'u12-l3-e9',
          type: 'sort',
          prompt: 'Methane và ethylene: mỗi ý dưới đây đúng với chất nào?',
          groups: [
            { id: 'methane', label: 'Chỉ methane' },
            { id: 'ethylene', label: 'Chỉ ethylene' },
            { id: 'both', label: 'Cả hai' },
          ],
          items: [
            { id: 'i1', text: 'Phân tử chỉ có liên kết đơn', groupId: 'methane' },
            { id: 'i2', text: 'Làm mất màu nước bromine', groupId: 'ethylene' },
            { id: 'i3', text: 'Là hydrocarbon', groupId: 'both' },
            { id: 'i4', text: 'Trùng hợp được thành polymer', groupId: 'ethylene' },
            { id: 'i5', text: 'Cháy tạo ra carbon dioxide và nước', groupId: 'both' },
            { id: 'i6', text: 'Là thành phần chính của biogas', groupId: 'methane' },
          ],
          explanation:
            'Cả hai đều là hydrocarbon nên đều cháy thành carbon dioxide và nước. Methane là alkane, chỉ có liên kết đơn, và là thành phần chính của biogas. Ethylene có liên kết đôi nên làm mất màu nước bromine và trùng hợp được.',
          conceptIds: ['alkane', 'alkene', 'hydrocarbon'],
        },
        {
          id: 'u12-l3-e10',
          type: 'mcq',
          prompt:
            'Ở kho hoa quả, người ta xếp chuối xanh vào phòng kín rồi cho thêm một lượng nhỏ khí ethylene. Họ làm vậy để làm gì?',
          options: [
            { id: 'a', text: 'Để chuối chín nhanh và đều hơn' },
            { id: 'b', text: 'Để chuối giữ màu xanh lâu hơn' },
            { id: 'c', text: 'Để chuối nặng cân hơn' },
          ],
          correctOptionId: 'a',
          explanation:
            'Như bạn đã biết ở Unit 7, chuối chín tự toả ra ethylene và khí này thúc quả chín. Thêm ethylene từ ngoài vào thì cả phòng chuối chín đều cùng lúc. Cùng một phân tử nhỏ ấy vừa là tín hiệu chín của quả, vừa là nguyên liệu làm nhựa.',
          conceptIds: ['alkene'],
        },
      ],
      baseXp: 10,
    },

    // ───────────────────────── Bài 4: Dầu mỏ và nhiên liệu ─────────────────────────
    {
      id: 'u12-l4-petroleum',
      title: 'Từ mỏ dầu tới cây xăng',
      intro: {
        title: 'Lít xăng đã đi đường nào tới đây?',
        story: [
          'Xe dừng ở cây xăng. Vòi bơm cắm vào bình, con số trên trụ bơm nhảy liên tục, trong không khí thoảng mùi xăng quen thuộc. Thứ chất lỏng ấy đã đi một chặng đường rất dài, bắt đầu từ sâu dưới lòng đất.',
          'Điểm xuất phát là dầu mỏ: một chất lỏng sánh, màu nâu đen, không tan trong nước và nhẹ hơn nước. Dầu mỏ nằm trong các mỏ sâu dưới lòng đất, có khi dưới cả đáy biển. Nó không phải một chất mà là hỗn hợp của rất nhiều hydrocarbon khác nhau. Dưới lòng đất còn có khí thiên nhiên, với thành phần chính là methane.',
          'Giàn khoan hút dầu mỏ lên rồi đưa về nhà máy lọc dầu. Ở đó, dầu được đun nóng cho hoá hơi rồi dẫn vào một tháp cao. Phân tử càng nhỏ thì càng dễ bay hơi, nên các hydrocarbon tách dần thành từng nhóm theo nhiệt độ sôi: khí gas, xăng, dầu hoả, dầu diesel. Phần nặng nhất đọng lại ở đáy tháp, từ đó người ta lấy ra nhựa đường. Cách tách này gọi là chưng cất phân đoạn.',
          'Xăng là nhóm hydrocarbon có khoảng 5 tới 11 nguyên tử carbon. Bấm kính lúp để xem octane C₈H₁₈, một phân tử tiêu biểu trong xăng. Than, dầu mỏ và khí thiên nhiên hình thành từ xác sinh vật bị vùi lấp qua hàng triệu năm, nên được gọi là nhiên liệu hoá thạch. Dùng hết rồi thì không thể chờ lứa mới.',
        ],
        visual: { type: 'molecule', moleculeId: 'c8h18' },
      },
      exercises: [
        {
          id: 'u12-l4-e1',
          type: 'mcq',
          prompt: 'Dầu mỏ vừa được giàn khoan hút lên là thứ gì?',
          visual: { id: 'v', image: 'oil-rig' },
          options: [
            { id: 'a', text: 'Một hợp chất có công thức cố định' },
            { id: 'b', text: 'Hỗn hợp của rất nhiều hydrocarbon' },
            { id: 'c', text: 'Một đơn chất của carbon' },
          ],
          correctOptionId: 'b',
          explanation:
            'Dầu mỏ là hỗn hợp: rất nhiều loại phân tử hydrocarbon to nhỏ khác nhau trộn lẫn, ngoài ra còn một lượng nhỏ các chất khác. Vì là hỗn hợp nên không thể viết cho nó một công thức hoá học, và cũng vì thế mà người ta tách được nó thành xăng, dầu hoả, dầu diesel.',
          conceptIds: ['petroleum', 'mixture'],
        },
        {
          id: 'u12-l4-e2',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Dầu mỏ là chất lỏng sánh, màu ___, không tan trong nước và ___ hơn nước nên nổi trên mặt nước.',
          blanks: [
            { accepted: ['nâu đen'], wordBank: ['nâu đen', 'vàng cam', 'xanh tím'] },
            { accepted: ['nhẹ'], wordBank: ['nhẹ', 'nặng'] },
          ],
          explanation:
            'Dầu mỏ màu nâu đen, sánh, và không tan trong nước. Nó nhẹ hơn nước nên nổi lên trên. Vì vậy khi tàu chở dầu gặp sự cố, dầu loang thành lớp trên mặt biển, bám vào chim và cá.',
          conceptIds: ['petroleum'],
        },
        {
          id: 'u12-l4-e3',
          type: 'sort',
          prompt:
            'Nhiên liệu là chất cháy được, khi cháy toả nhiệt và phát sáng. Xếp mỗi nhiên liệu theo thể của nó ở điều kiện thường',
          groups: [
            { id: 'solid', label: 'Rắn' },
            { id: 'liquid', label: 'Lỏng' },
            { id: 'gas', label: 'Khí' },
          ],
          items: [
            { id: 'i1', text: 'Than đá', image: 'coal-stove', groupId: 'solid' },
            { id: 'i2', text: 'Xăng', image: 'gas-station', groupId: 'liquid' },
            { id: 'i3', text: 'Khí thiên nhiên', groupId: 'gas' },
            { id: 'i4', text: 'Củi', image: 'firewood-stove', groupId: 'solid' },
            { id: 'i5', text: 'Dầu hoả', groupId: 'liquid' },
            { id: 'i6', text: 'Biogas', image: 'biogas-stove', groupId: 'gas' },
          ],
          explanation:
            'Than và củi là nhiên liệu rắn. Xăng và dầu hoả là nhiên liệu lỏng. Khí thiên nhiên và biogas là nhiên liệu khí. Nhiên liệu khí trộn đều với không khí dễ nhất nên thường cháy sạch hơn cả.',
          conceptIds: ['fuel', 'state-of-matter'],
        },
        {
          id: 'u12-l4-e4',
          type: 'order-steps',
          prompt: 'Hành trình của xăng, từ lòng đất tới chiếc xe. Sắp xếp theo thứ tự',
          steps: [
            { id: 's1', text: 'Xác sinh vật bị vùi lấp hàng triệu năm, dần biến thành dầu mỏ' },
            { id: 's2', text: 'Giàn khoan khoan xuống mỏ và hút dầu mỏ lên' },
            { id: 's3', text: 'Nhà máy lọc dầu chưng cất, tách dầu mỏ thành từng nhóm' },
            { id: 's4', text: 'Xe bồn chở xăng tới cây xăng' },
            { id: 's5', text: 'Xăng cháy trong động cơ, đẩy xe chạy' },
          ],
          explanation:
            'Thiên nhiên mất hàng triệu năm để tạo ra dầu mỏ, còn một bình xăng thì cháy hết trong vài ngày. Đó là lí do nhiên liệu hoá thạch được coi là nguồn tài nguyên có hạn, cần dùng tiết kiệm.',
          conceptIds: ['petroleum', 'fuel'],
        },
        {
          id: 'u12-l4-e5',
          type: 'mcq',
          prompt:
            'Trong tháp chưng cất của nhà máy lọc dầu, vì sao khí gas và xăng tách ra được khỏi dầu diesel và nhựa đường?',
          visual: { id: 'v', image: 'refinery-tower' },
          options: [
            { id: 'a', text: 'Vì mỗi nhóm phản ứng với một hoá chất riêng' },
            { id: 'b', text: 'Vì tháp lọc chúng qua nhiều lớp giấy lọc' },
            { id: 'c', text: 'Vì mỗi nhóm sôi ở một khoảng nhiệt độ khác nhau' },
          ],
          correctOptionId: 'c',
          explanation:
            'Chưng cất phân đoạn dựa vào nhiệt độ sôi. Hơi dầu nóng bay lên trong tháp và nguội dần. Nhóm phân tử lớn, sôi ở nhiệt độ cao, ngưng tụ ngay ở tầng dưới. Nhóm phân tử nhỏ, dễ bay hơi, lên tới tầng trên mới ngưng tụ. Đây là biến đổi vật lí: không phân tử nào bị biến thành chất khác.',
          conceptIds: ['petroleum', 'physical-change'],
        },
        {
          id: 'u12-l4-e6',
          type: 'match-pairs',
          prompt:
            'Nhiên liệu máy bay được pha chế từ dầu hoả, còn xe tải và tàu thuỷ thường chạy dầu diesel. Nối mỗi sản phẩm của dầu mỏ với công dụng chính của nó',
          pairs: [
            {
              left: { id: 'l1', text: 'Khí gas' },
              right: { id: 'r1', text: 'Đun nấu trong bếp', image: 'gas-stove-wok' },
            },
            {
              left: { id: 'l2', text: 'Xăng' },
              right: { id: 'r2', text: 'Chạy xe máy, ô tô con', image: 'gas-station' },
            },
            {
              left: { id: 'l3', text: 'Dầu hoả' },
              right: { id: 'r3', text: 'Nhiên liệu cho máy bay' },
            },
            {
              left: { id: 'l4', text: 'Dầu diesel' },
              right: { id: 'r4', text: 'Chạy xe tải, tàu thuỷ' },
            },
            {
              left: { id: 'l5', text: 'Nhựa đường' },
              right: { id: 'r5', text: 'Rải mặt đường' },
            },
          ],
          explanation:
            'Từ một thứ dầu thô nâu đen, tháp chưng cất tách ra cả một dãy sản phẩm. Dầu mỏ còn là nguyên liệu: ethylene để làm nhựa cũng được lấy từ dầu mỏ và khí thiên nhiên.',
          conceptIds: ['petroleum', 'fuel'],
        },
        {
          id: 'u12-l4-e7',
          type: 'mcq',
          prompt:
            'Phân tử hydrocarbon càng dài thì càng khó bay hơi, nhiệt độ sôi càng cao. Chất nào dưới đây sôi ở nhiệt độ thấp nhất?',
          options: [
            { id: 'a', moleculeId: 'c4h10', text: 'Butane C₄H₁₀ trong khí gas' },
            { id: 'b', moleculeId: 'c8h18', text: 'Octane C₈H₁₈ trong xăng' },
            { id: 'c', text: 'Hydrocarbon có 16 carbon trong dầu diesel' },
          ],
          correctOptionId: 'a',
          explanation:
            'Butane có mạch ngắn nhất nên sôi ở nhiệt độ thấp nhất, khoảng âm 0,5 °C. Vì thế ở điều kiện thường nó đã là chất khí. Octane sôi ở khoảng 126 °C nên xăng là chất lỏng. Hydrocarbon trong dầu diesel còn sôi ở nhiệt độ cao hơn nữa.',
          conceptIds: ['petroleum', 'alkane', 'state-change'],
        },
        {
          id: 'u12-l4-e8',
          type: 'true-false',
          prompt: 'Đốt xăng trong động cơ làm tăng lượng carbon dioxide trong không khí.',
          answer: true,
          explanation:
            'Xăng là hỗn hợp hydrocarbon, mà hydrocarbon cháy thì tạo ra carbon dioxide và nước. Các nguyên tử carbon nằm yên dưới lòng đất hàng triệu năm, nay theo ống xả bay vào không khí.',
          conceptIds: ['fuel', 'combustion'],
        },
        {
          id: 'u12-l4-e9',
          type: 'sort',
          prompt:
            'Carbon dioxide và methane trong không khí giữ nhiệt lại quanh Trái Đất. Hiện tượng này gọi là hiệu ứng nhà kính. Đốt nhiều nhiên liệu hoá thạch làm carbon dioxide tăng lên, khiến Trái Đất ấm dần. Việc nào giúp giảm đốt nhiên liệu hoá thạch?',
          groups: [
            { id: 'less', label: 'Giúp giảm' },
            { id: 'more', label: 'Gây lãng phí' },
          ],
          items: [
            { id: 'i1', text: 'Đi xe đạp hoặc xe buýt thay cho xe máy', groupId: 'less' },
            { id: 'i2', text: 'Để xe nổ máy suốt lúc đứng chờ', groupId: 'more' },
            { id: 'i3', text: 'Tắt đèn và quạt khi ra khỏi phòng', groupId: 'less' },
            { id: 'i4', text: 'Đun bếp lửa thật to dưới chiếc nồi nhỏ', groupId: 'more' },
            { id: 'i5', text: 'Dùng điện mặt trời, điện gió', groupId: 'less' },
            { id: 'i6', text: 'Bật điều hoà khi cả nhà đi vắng', groupId: 'more' },
          ],
          explanation:
            'Nhiều nhà máy điện đốt than và khí để phát điện, nên tiết kiệm điện cũng là bớt đốt nhiên liệu hoá thạch. Điện mặt trời và điện gió không cần đốt gì. Còn xe nổ máy không, lửa to quá cỡ nồi, điều hoà chạy khi vắng người đều là đốt nhiên liệu mà chẳng được việc gì.',
          conceptIds: ['fuel', 'petroleum'],
        },
        {
          id: 'u12-l4-e10',
          type: 'mcq',
          prompt:
            'Bếp gas cháy lửa vàng, đáy nồi bám muội đen là dấu hiệu gas cháy thiếu oxygen: vừa phí gas, vừa sinh khí độc. Nên xử lí thế nào?',
          visual: { id: 'v', image: 'gas-stove-wok' },
          options: [
            { id: 'a', text: 'Vặn gas to hơn nữa cho lửa mạnh lên' },
            { id: 'b', text: 'Nhờ người lớn vệ sinh, chỉnh bếp để không khí vào đủ' },
            { id: 'c', text: 'Đóng kín cửa bếp cho đỡ gió' },
          ],
          correctOptionId: 'b',
          explanation:
            'Muốn nhiên liệu cháy hết và toả nhiều nhiệt nhất, phải cho nó đủ oxygen. Bếp bị bẩn, tắc lỗ thì không khí vào không đủ, nên cần vệ sinh và chỉnh lại. Vặn gas to hơn chỉ làm thiếu oxygen thêm. Đóng kín cửa còn khiến khí độc CO tích lại trong bếp.',
          conceptIds: ['fuel', 'combustion'],
        },
      ],
      unlocksMolecules: ['c8h18'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 5: Ethylic alcohol ─────────────────────────
    {
      id: 'u12-l5-ethanol',
      title: 'Ethylic alcohol: cồn trong chai, rượu trong chén',
      intro: {
        title: 'Giọt gel mát lạnh trên tay',
        story: [
          'Bóp một giọt gel rửa tay khô vào lòng bàn tay rồi xoa đều. Tay bạn mát lạnh, và chỉ nửa phút sau đã khô ráo, không cần khăn lau. Nước thì đâu có khô nhanh như vậy.',
          'Thành phần chính của gel thường là ethylic alcohol, còn gọi là ethanol, quen miệng là cồn. Đó là chất lỏng không màu, sôi ở khoảng 78 °C nên bay hơi nhanh hơn nước. Lúc bay hơi, nó lấy nhiệt từ da bạn, vì thế bạn thấy mát. Công thức phân tử của nó là C₂H₆O, viết rõ cấu tạo là CH₃–CH₂–OH, hay gọn hơn là C₂H₅OH. Nhờ nhóm –OH mà ethanol tan trong nước theo bất kì tỉ lệ nào.',
          'Trên nhãn chai cồn y tế thường ghi 70 độ. Con số ấy là độ cồn: số mililít ethanol nguyên chất có trong 100 mL dung dịch, đo ở 20 °C. Cồn 70 độ nghĩa là cứ 100 mL thì có 70 mL ethanol. Bia thường khoảng 5 độ, rượu trắng khoảng 30 tới 40 độ.',
          'Ethanol trong rượu bia là do men biến đường và tinh bột thành, như bạn đã gặp ở Unit 6. Uống vào, ethanol theo máu lên não, làm phản xạ chậm đi và phán đoán kém đi. Vì thế đã uống rượu bia thì không lái xe. Uống nhiều và lâu dài còn hại gan, dạ dày, tim mạch và gây nghiện. Não của người dưới 18 tuổi vẫn đang phát triển nên càng dễ bị tổn hại, và pháp luật nước ta không cho phép người dưới 18 tuổi uống rượu bia.',
        ],
        visual: { type: 'molecule', moleculeId: 'c2h6o' },
      },
      exercises: [
        {
          id: 'u12-l5-e1',
          type: 'mcq',
          prompt: 'Chất nào là thành phần chính của gel rửa tay khô, làm tay bạn mát và mau khô?',
          visual: { id: 'v', image: 'hand-sanitizer' },
          options: [
            { id: 'a', moleculeId: 'h2o', text: 'Nước' },
            { id: 'b', moleculeId: 'c2h4o2', text: 'Acetic acid' },
            { id: 'c', moleculeId: 'c2h6o', text: 'Ethylic alcohol (ethanol)' },
          ],
          correctOptionId: 'c',
          explanation:
            'Đó là ethylic alcohol, tên khác là ethanol. Nó bay hơi nhanh hơn nước và lấy nhiệt từ da khi bay hơi, nên tay vừa mát vừa mau khô. Acetic acid là chất tạo vị chua của giấm.',
          conceptIds: ['ethylic-alcohol'],
        },
        {
          id: 'u12-l5-e2',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Ethanol là chất ___ không màu, sôi ở khoảng 78 °C. Đổ ethanol vào nước, hai chất ___.',
          blanks: [
            { accepted: ['lỏng'], wordBank: ['rắn', 'lỏng', 'khí'] },
            {
              accepted: ['tan vào nhau theo mọi tỉ lệ'],
              wordBank: ['tan vào nhau theo mọi tỉ lệ', 'tách thành hai lớp'],
            },
          ],
          explanation:
            'Ethanol là chất lỏng không màu và tan trong nước theo bất kì tỉ lệ nào, nhờ nhóm –OH trong phân tử. Dầu ăn hay xăng không có nhóm này nên mới tách lớp với nước.',
          conceptIds: ['ethylic-alcohol', 'solution'],
        },
        {
          id: 'u12-l5-e3',
          type: 'build-molecule',
          prompt:
            'Ghép phân tử ethanol CH₃–CH₂–OH. Hãy cộng dồn từng loại nguyên tử trong công thức cấu tạo',
          targetMoleculeId: 'c2h6o',
          availableAtoms: { C: 3, H: 8, O: 2 },
          explanation:
            'CH₃–CH₂–OH có 2 carbon, 3 + 2 + 1 = 6 hydrogen và 1 oxygen, tức công thức phân tử C₂H₆O. Nguyên tử hydrogen thứ sáu không gắn vào carbon mà gắn vào oxygen, tạo thành nhóm –OH.',
          conceptIds: ['ethylic-alcohol', 'structural-formula'],
        },
        {
          id: 'u12-l5-e4',
          type: 'mcq',
          prompt:
            'Độ cồn là số mL ethanol nguyên chất có trong 100 mL dung dịch. Một chai cồn y tế 500 mL ghi 70 độ. Trong chai có bao nhiêu mL ethanol nguyên chất?',
          options: [
            { id: 'a', text: '70 mL' },
            { id: 'b', text: '350 mL' },
            { id: 'c', text: '430 mL' },
          ],
          correctOptionId: 'b',
          explanation:
            'Cứ 100 mL có 70 mL ethanol. Chai 500 mL gấp 5 lần 100 mL, nên có 5 × 70 = 350 mL ethanol. 70 mL mới là lượng ethanol trong 100 mL đầu tiên. Còn 430 là lấy 500 trừ 70, cách tính đó không đúng với nghĩa của độ cồn.',
          conceptIds: ['ethylic-alcohol', 'solution'],
        },
        {
          id: 'u12-l5-e5',
          type: 'mcq',
          prompt:
            'Một lon bia 330 mL có độ cồn 5 độ. Một chén rượu trắng 30 mL có độ cồn 40 độ. Bên nào chứa nhiều ethanol hơn?',
          options: [
            { id: 'a', text: 'Lon bia, khoảng 16,5 mL ethanol' },
            { id: 'b', text: 'Chén rượu, khoảng 40 mL ethanol' },
            { id: 'c', text: 'Hai bên chứa lượng bằng nhau' },
          ],
          correctOptionId: 'a',
          explanation:
            'Lon bia: 330 × 5 : 100 = 16,5 mL ethanol. Chén rượu: 30 × 40 : 100 = 12 mL ethanol. Bia có độ cồn thấp nhưng thể tích lớn, nên một lon bia chứa nhiều ethanol hơn cả một chén rượu. Độ cồn thấp không có nghĩa là vô hại.',
          conceptIds: ['ethylic-alcohol'],
        },
        {
          id: 'u12-l5-e6',
          type: 'true-false',
          prompt: 'Cồn sát khuẩn và rượu đều chứa ethanol, nên cồn sát khuẩn cũng uống được.',
          answer: false,
          explanation:
            'Cồn sát khuẩn chỉ để dùng ngoài da. Nồng độ ethanol của nó rất cao, và nó không được làm ra để uống. Cồn công nghiệp còn có thể lẫn methanol CH₃OH, một chất họ hàng với ethanol nhưng rất độc: uống một lượng nhỏ cũng có thể gây mù hoặc chết người.',
          conceptIds: ['ethylic-alcohol'],
        },
        {
          id: 'u12-l5-e7',
          type: 'balance-reaction',
          reactionId: 'ethanol-combustion',
          prompt:
            'Ethanol cháy với ngọn lửa xanh nhạt, tạo ra carbon dioxide và hơi nước. Cân bằng phương trình. Nhớ rằng trong ethanol đã có sẵn 1 nguyên tử oxygen',
          explanation:
            '2 C cần 2 CO₂. 6 H cần 3 H₂O. Vế phải có 4 + 3 = 7 O. Ethanol đã góp 1 O, còn 6 O nữa là 3 O₂. Kết quả: C₂H₆O + 3O₂ → 2CO₂ + 3H₂O. Phản ứng toả nhiều nhiệt nên ethanol dùng được làm nhiên liệu.',
          conceptIds: ['balancing', 'combustion', 'ethylic-alcohol'],
        },
        {
          id: 'u12-l5-e8',
          type: 'match-pairs',
          prompt:
            'Xăng sinh học E5 là xăng pha khoảng 5% ethanol. Nối mỗi tính chất của ethanol với ứng dụng dựa vào tính chất đó',
          pairs: [
            {
              left: { id: 'l1', text: 'Diệt được vi khuẩn' },
              right: { id: 'r1', text: 'Cồn y tế, gel rửa tay', image: 'hand-sanitizer' },
            },
            {
              left: { id: 'l2', text: 'Hoà tan được nhiều chất' },
              right: { id: 'r2', text: 'Dung môi pha nước hoa', image: 'perfume' },
            },
            {
              left: { id: 'l3', text: 'Cháy toả nhiều nhiệt' },
              right: { id: 'r3', text: 'Pha vào xăng thành xăng E5', image: 'gas-station' },
            },
          ],
          explanation:
            'Một chất, ba việc: ethanol diệt khuẩn nên dùng để sát khuẩn, hoà tan được các chất thơm nên làm dung môi cho nước hoa, và cháy toả nhiệt nên làm nhiên liệu. Ethanol pha xăng được làm từ sắn, mía, ngô, những thứ trồng lại được.',
          conceptIds: ['ethylic-alcohol', 'fuel'],
        },
        {
          id: 'u12-l5-e9',
          type: 'fill-blank',
          prompt:
            'Có hai cách làm ra ethanol. Cách thứ hai dùng ethylene C₂H₄: nó cần thêm đúng 2 H và 1 O để thành C₂H₆O. Chọn từ đúng cho từng chỗ trống',
          template:
            'Men biến ___ trong ngũ cốc và hoa quả thành ethanol. Nhà máy thì cho ethylene phản ứng với ___.',
          blanks: [
            {
              accepted: ['đường và tinh bột'],
              wordBank: ['đường và tinh bột', 'chất béo', 'muối khoáng'],
            },
            { accepted: ['nước'], wordBank: ['nước', 'oxygen', 'bromine'] },
          ],
          explanation:
            'Lên men là cách lâu đời: enzyme của men biến đường thành ethanol và carbon dioxide. Tinh bột thì được cắt thành đường trước rồi mới lên men. Cách công nghiệp là cho ethylene phản ứng với nước, có acid làm xúc tác: C₂H₄ + H₂O → C₂H₅OH. Liên kết đôi của ethylene lại mở ra, lần này để gắn thêm H và OH.',
          conceptIds: ['ethylic-alcohol', 'fermentation', 'alkene'],
        },
        {
          id: 'u12-l5-e10',
          type: 'sort',
          prompt:
            'Ethanol trong rượu bia theo máu lên não, làm phản xạ chậm và phán đoán kém. Câu nào đúng, câu nào là hiểu lầm?',
          groups: [
            { id: 'true', label: 'Đúng' },
            { id: 'myth', label: 'Hiểu lầm' },
          ],
          items: [
            { id: 'i1', text: 'Đã uống rượu bia thì không lái xe', groupId: 'true' },
            { id: 'i2', text: 'Bia nhẹ nên uống bao nhiêu cũng không sao', groupId: 'myth' },
            { id: 'i3', text: 'Uống nhiều, lâu dài làm hại gan', groupId: 'true' },
            { id: 'i4', text: 'Rượu bia chỉ hại dạ dày, không ảnh hưởng tới não', groupId: 'myth' },
            { id: 'i5', text: 'Rượu bia có thể gây nghiện', groupId: 'true' },
            {
              id: 'i6',
              text: 'Ở tuổi 15, rượu bia chỉ gây hại ngang với người lớn',
              groupId: 'myth',
            },
          ],
          explanation:
            'Ethanol tác động thẳng lên não, nên người đã uống rượu bia phản xạ chậm và dễ gây tai nạn khi lái xe. Uống nhiều, lâu dài làm hại gan và gây nghiện. Bia vẫn chứa ethanol, uống nhiều thì lượng ethanol vào người vẫn lớn. Não của người dưới 18 tuổi còn đang phát triển nên dễ bị tổn hại hơn, vì thế pháp luật nước ta không cho phép người dưới 18 tuổi uống rượu bia.',
          conceptIds: ['ethylic-alcohol'],
        },
      ],
      baseXp: 10,
    },

    // ───────────────────────── Bài 6: Acetic acid ─────────────────────────
    {
      id: 'u12-l6-acetic-acid',
      title: 'Acetic acid: rượu để lâu hoá giấm',
      intro: {
        title: 'Hũ giấm nuôi của bà',
        story: [
          'Trong góc bếp, bà có một hũ thuỷ tinh miệng rộng, đậy bằng miếng vải thưa. Bà đổ vào đó ít rượu pha loãng. Vài tuần sau, thứ nước trong hũ đã chua thành giấm. Trên mặt nổi một lớp màng trắng đục, dai dai, bà gọi là con giấm.',
          'Lớp màng ấy là nơi ở của vi khuẩn giấm. Chúng dùng oxygen trong không khí để biến ethanol thành acetic acid CH₃COOH, chất tạo vị chua của giấm. Giấm ăn chỉ chứa khoảng 2 tới 5% acetic acid, còn lại chủ yếu là nước. Acetic acid nguyên chất là chất lỏng không màu, mùi hăng, tan trong nước theo bất kì tỉ lệ nào.',
          'Hãy nhìn công thức cấu tạo CH₃–COOH. Nhóm –COOH ở cuối phân tử làm nên tính acid: trong nước, nguyên tử hydrogen của nhóm này có thể tách ra thành ion H⁺. Nhưng chỉ một phần rất nhỏ số phân tử nhả H⁺, nên acetic acid là một acid yếu. Hydrochloric acid thì nhả gần như toàn bộ, nên là acid mạnh.',
          'Yếu nhưng vẫn là acid. Giấm làm quỳ tím hoá đỏ, làm sủi bọt khí hydrogen với kim loại như magnesium và kẽm, trung hoà được base, và làm sủi bọt khí carbon dioxide với muối carbonate như vỏ trứng hay cặn trong ấm. Bạn đã gặp cả bốn tính chất này của acid ở Unit 5.',
        ],
        visual: { type: 'molecule', moleculeId: 'c2h4o2', scene: 'vinegar-jar' },
      },
      exercises: [
        {
          id: 'u12-l6-e1',
          type: 'true-false',
          prompt: 'Hũ nuôi giấm phải đậy thật kín thì vi khuẩn giấm mới làm việc được.',
          visual: { id: 'v', image: 'vinegar-jar' },
          answer: false,
          explanation:
            'Vi khuẩn giấm cần oxygen trong không khí để biến ethanol thành acetic acid: C₂H₆O + O₂ → CH₃COOH + H₂O. Vì thế hũ chỉ đậy bằng vải thưa, vừa cho không khí vào vừa chắn bụi. Đậy kín thì thiếu oxygen, rượu không thành giấm được.',
          conceptIds: ['acetic-acid', 'fermentation'],
        },
        {
          id: 'u12-l6-e2',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Giấm ăn là dung dịch chứa khoảng ___ acetic acid, phần còn lại chủ yếu là ___.',
          blanks: [
            { accepted: ['2 tới 5%'], wordBank: ['2 tới 5%', '50%', 'gần 100%'] },
            { accepted: ['nước'], wordBank: ['nước', 'ethanol', 'dầu ăn'] },
          ],
          explanation:
            'Giấm ăn rất loãng: chỉ khoảng 2 tới 5% là acetic acid, còn lại chủ yếu là nước. Acetic acid đậm đặc gây bỏng da, không phải thứ dùng trong bếp.',
          conceptIds: ['acetic-acid', 'solution'],
        },
        {
          id: 'u12-l6-e3',
          type: 'mcq',
          prompt: 'Trong phân tử CH₃–COOH, phần nào làm nên tính acid?',
          visual: { id: 'v', moleculeId: 'c2h4o2' },
          options: [
            { id: 'a', text: 'Nhóm CH₃– ở đầu mạch' },
            { id: 'b', text: 'Nhóm –COOH ở cuối mạch' },
            { id: 'c', text: 'Liên kết đơn giữa hai carbon' },
          ],
          correctOptionId: 'b',
          explanation:
            'Nguyên tử hydrogen trong nhóm –COOH gắn với oxygen và có thể tách ra thành ion H⁺ khi ở trong nước. Ba hydrogen của nhóm CH₃– gắn với carbon thì không tách ra như vậy. Vì thế mỗi phân tử acetic acid có 4 hydrogen nhưng chỉ nhả được nhiều nhất 1 ion H⁺.',
          conceptIds: ['acetic-acid', 'acid', 'structural-formula'],
        },
        {
          id: 'u12-l6-e4',
          type: 'true-false',
          prompt:
            'Acetic acid là acid yếu vì trong nước chỉ một phần rất nhỏ số phân tử của nó tách ra ion H⁺.',
          answer: true,
          explanation:
            'Đúng rồi. Mạnh hay yếu là nói về chuyện phân tử acid nhả ion H⁺ nhiều hay ít. Trong giấm, phần lớn phân tử acetic acid vẫn còn nguyên, chỉ một phần rất nhỏ đã tách ra H⁺. Chừng đó vẫn đủ làm giấm chua và làm quỳ tím hoá đỏ.',
          conceptIds: ['acetic-acid', 'acid'],
        },
        {
          id: 'u12-l6-e5',
          type: 'sort',
          prompt:
            'Giấm phản ứng với kim loại đứng trước hydrogen trong dãy hoạt động hoá học và với muối carbonate. Magnesium và kẽm đứng trước hydrogen, còn đồng đứng sau. Thả mỗi thứ sau vào giấm, điều gì xảy ra?',
          groups: [
            { id: 'h2', label: 'Sủi bọt khí hydrogen' },
            { id: 'co2', label: 'Sủi bọt khí carbon dioxide' },
            { id: 'none', label: 'Không sủi bọt' },
          ],
          items: [
            { id: 'i1', text: 'Dải magnesium', groupId: 'h2' },
            { id: 'i2', text: 'Vỏ trứng (CaCO₃)', image: 'eggshell-vinegar', groupId: 'co2' },
            { id: 'i3', text: 'Sợi dây đồng', image: 'copper-wire', groupId: 'none' },
            { id: 'i4', text: 'Mẩu kẽm', groupId: 'h2' },
            { id: 'i5', text: 'Cặn trắng trong ấm (CaCO₃)', groupId: 'co2' },
          ],
          explanation:
            'Magnesium và kẽm đứng trước hydrogen nên đẩy được hydrogen ra khỏi acid, tạo bọt khí H₂. Vỏ trứng và cặn ấm đều là calcium carbonate, gặp acid thì tạo bọt khí CO₂. Đồng đứng sau hydrogen nên không phản ứng với giấm theo kiểu này.',
          conceptIds: ['acetic-acid', 'acid', 'reactivity-series'],
        },
        {
          id: 'u12-l6-e6',
          type: 'fill-blank',
          prompt:
            'Acid gặp base thì tạo ra muối và nước. Với acetic acid và sodium hydroxide, muối tạo ra là sodium acetate CH₃COONa. Chọn chất còn thiếu',
          template: 'CH₃COOH + NaOH → CH₃COONa + ___',
          blanks: [{ accepted: ['H₂O', 'H2O'], wordBank: ['H₂O', 'H₂', 'CO₂'] }],
          explanation:
            'Đây là phản ứng trung hoà: H⁺ của acid gặp OH⁻ của base thành nước H₂O. Sodium thế chỗ nguyên tử hydrogen trong nhóm –COOH, tạo thành muối sodium acetate. Đếm lại: mỗi vế có 2 C, 5 H, 3 O và 1 Na.',
          conceptIds: ['acetic-acid', 'neutralisation', 'salt'],
        },
        {
          id: 'u12-l6-e7',
          type: 'mcq',
          prompt:
            'Trong giờ thí nghiệm, thầy cô thả hai dải magnesium giống nhau vào hai cốc: một cốc acetic acid, một cốc hydrochloric acid có cùng nồng độ. Cốc nào sủi bọt chậm hơn?',
          options: [
            { id: 'a', text: 'Cốc acetic acid, vì acid yếu tạo ra ít ion H⁺ hơn' },
            { id: 'b', text: 'Cốc hydrochloric acid, vì acid mạnh phản ứng chậm hơn' },
            { id: 'c', text: 'Hai cốc sủi bọt như nhau, vì đều là acid' },
          ],
          correctOptionId: 'a',
          explanation:
            'Magnesium phản ứng với ion H⁺. Cùng nồng độ, hydrochloric acid nhả gần như toàn bộ H⁺ nên sủi bọt mạnh. Acetic acid chỉ nhả một phần rất nhỏ, nên nồng độ ion H⁺ trong cốc thấp hơn nhiều và sủi bọt chậm hơn hẳn. Ở Unit 6 bạn đã biết: nồng độ chất tham gia càng thấp thì phản ứng càng chậm.',
          conceptIds: ['acetic-acid', 'acid', 'reaction-rate'],
        },
        {
          id: 'u12-l6-e8',
          type: 'mcq',
          prompt:
            'Đun nóng acetic acid với ethanol, có sulfuric acid đặc làm xúc tác, hai phân tử ghép lại với nhau và tách ra một phân tử nhỏ. Chất mới tên là ethyl acetate, có mùi thơm, thuộc nhóm chất gọi là ester. Đây là phản ứng ester hoá: CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + ?. Phân tử nhỏ tách ra là gì?',
          options: [
            { id: 'a', moleculeId: 'h2', text: 'Hydrogen H₂' },
            { id: 'b', moleculeId: 'co2', text: 'Carbon dioxide CO₂' },
            { id: 'c', moleculeId: 'h2o', text: 'Nước H₂O' },
          ],
          correctOptionId: 'c',
          explanation:
            'Đếm nguyên tử: vế trái có 4 C, 10 H và 3 O. Ethyl acetate giữ 4 C, 8 H và 2 O. Còn dư đúng 2 H và 1 O, tức một phân tử nước. Phản ứng ester hoá diễn ra chậm và chạy được cả hai chiều: ester và nước cũng phản ứng ngược lại thành acid và alcohol. Vì thế trong bình luôn còn một phần acid và alcohol, và người ta thường viết phản ứng này với mũi tên hai chiều: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O.',
          conceptIds: ['ester', 'acetic-acid', 'conservation-of-mass'],
        },
        {
          id: 'u12-l6-e9',
          type: 'build-molecule',
          prompt:
            'Ghép phân tử ethyl acetate. Mẹo: lấy các nguyên tử của acetic acid C₂H₄O₂ cộng với ethanol C₂H₆O, rồi bớt đi một phân tử nước H₂O',
          targetMoleculeId: 'c4h8o2',
          availableAtoms: { C: 5, H: 10, O: 3 },
          explanation:
            'Carbon: 2 + 2 = 4. Hydrogen: 4 + 6 − 2 = 8. Oxygen: 2 + 1 − 1 = 2. Ethyl acetate là C₄H₈O₂, viết rõ cấu tạo là CH₃COOC₂H₅. Nhiều ester có mùi thơm dễ chịu, và mùi của nhiều loại quả chín đến từ các ester.',
          conceptIds: ['ester', 'formula'],
        },
        {
          id: 'u12-l6-e10',
          type: 'mcq',
          prompt: 'Bà dặn không muối dưa hay ngâm đồ chua lâu ngày trong nồi nhôm. Vì sao?',
          visual: { id: 'v', image: 'pickle-jars' },
          options: [
            { id: 'a', text: 'Vì nhôm làm đồ chua mất hết vị chua ngay' },
            { id: 'b', text: 'Vì acid trong đồ chua phản ứng dần với nhôm, làm mòn nồi' },
            { id: 'c', text: 'Vì nồi nhôm khiến acid mạnh lên nhiều lần' },
          ],
          correctOptionId: 'b',
          explanation:
            'Nhôm là kim loại đứng trước hydrogen trong dãy hoạt động hoá học. Acid trong đồ chua, dù yếu, vẫn ăn mòn dần lớp oxide bảo vệ rồi tới nhôm bên dưới. Nồi bị mòn, còn nhôm thì lẫn vào thức ăn. Vì thế đồ chua nên đựng trong hũ thuỷ tinh hoặc sành sứ.',
          conceptIds: ['acetic-acid', 'acid', 'reactivity-series'],
        },
      ],
      unlocksMolecules: ['c4h8o2'],
      baseXp: 10,
    },

    // ───────────────────────── Checkpoint Unit 12 ─────────────────────────
    {
      id: 'u12-checkpoint',
      title: 'Kiểm tra Unit 12',
      kind: 'checkpoint',
      exercises: [
        {
          id: 'u12-cp-e1',
          type: 'sort',
          prompt: 'Chất nào là hợp chất hữu cơ, chất nào là chất vô cơ?',
          groups: [
            { id: 'organic', label: 'Hợp chất hữu cơ' },
            { id: 'inorganic', label: 'Chất vô cơ' },
          ],
          items: [
            { id: 'i1', text: 'Saccharose C₁₂H₂₂O₁₁', groupId: 'organic' },
            { id: 'i2', text: 'Calcium carbonate CaCO₃', groupId: 'inorganic' },
            { id: 'i3', text: 'Butane C₄H₁₀', groupId: 'organic' },
            { id: 'i4', text: 'Carbon monoxide CO', groupId: 'inorganic' },
            { id: 'i5', text: 'Acetic acid CH₃COOH', groupId: 'organic' },
            { id: 'i6', text: 'Sodium hydroxide NaOH', groupId: 'inorganic' },
          ],
          explanation:
            'Saccharose, butane và acetic acid là hợp chất của carbon nên là hợp chất hữu cơ. Sodium hydroxide không có carbon. Calcium carbonate và carbon monoxide có carbon nhưng thuộc nhóm ngoại lệ, được xếp vào chất vô cơ.',
          conceptIds: ['organic-compound'],
        },
        {
          id: 'u12-cp-e2',
          type: 'mcq',
          prompt:
            'Trong chiếc bật lửa gas trong suốt có một chất lỏng không màu. Đó là một alkane có 4 nguyên tử carbon đã được nén lỏng. Chất đó là gì?',
          options: [
            { id: 'a', text: 'Methane CH₄' },
            { id: 'b', text: 'Propane C₃H₈' },
            { id: 'c', text: 'Butane C₄H₁₀' },
          ],
          correctOptionId: 'c',
          explanation:
            'Alkane có 4 carbon là butane, với 4 × 2 + 2 = 10 hydrogen. Cũng như trong lon gas mini, butane trong bật lửa được nén thành chất lỏng, thoát ra ngoài thì hoá hơi thành khí rồi cháy.',
          conceptIds: ['alkane', 'formula'],
        },
        {
          id: 'u12-cp-e3',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Hydrocarbon mạch hở chỉ có liên kết đơn gọi là ___. Hydrocarbon mạch hở có một liên kết đôi giữa hai carbon gọi là ___.',
          blanks: [
            { accepted: ['alkane'], wordBank: ['alkane', 'alkene', 'ester'] },
            { accepted: ['alkene'], wordBank: ['alkane', 'alkene', 'ester'] },
          ],
          explanation:
            'Alkane chỉ có liên kết đơn, như methane và butane. Alkene có một liên kết đôi C=C, như ethylene. Ester là nhóm chất khác hẳn, tạo ra khi acid phản ứng với alcohol.',
          conceptIds: ['alkane', 'alkene'],
        },
        {
          id: 'u12-cp-e4',
          type: 'balance-reaction',
          reactionId: 'methane-combustion',
          prompt:
            'Một số xe buýt chạy bằng khí thiên nhiên nén, với thành phần chính là methane. Cân bằng phương trình methane cháy trong động cơ',
          explanation:
            '1 C cần 1 CO₂. 4 H cần 2 H₂O. Vế phải có 2 + 2 = 4 O, tức 2 O₂. Kết quả: CH₄ + 2O₂ → CO₂ + 2H₂O.',
          conceptIds: ['balancing', 'combustion', 'alkane'],
        },
        {
          id: 'u12-cp-e5',
          type: 'mcq',
          prompt:
            'Nhà máy nhựa nhận về một bình khí chưa dán nhãn, bên trong là ethane hoặc ethylene. Kĩ sư dẫn một ít khí qua nước bromine và thấy màu vàng cam biến mất. Khí trong bình là gì?',
          options: [
            { id: 'a', text: 'Ethane, vì alkane làm mất màu nước bromine' },
            { id: 'b', text: 'Ethylene, vì nó có liên kết đôi' },
            { id: 'c', text: 'Chưa thể kết luận, vì khí nào cũng làm mất màu' },
          ],
          correctOptionId: 'b',
          explanation:
            'Chỉ ethylene có liên kết đôi để gắn thêm bromine, nên chỉ nó làm nước bromine mất màu. Ethane là alkane, chỉ có liên kết đơn, không làm được việc này. Và ethylene cũng chính là thứ nhà máy nhựa cần để làm polyethylene.',
          conceptIds: ['alkene', 'reaction-signs'],
        },
        {
          id: 'u12-cp-e6',
          type: 'true-false',
          prompt: 'Dầu mỏ là một hợp chất có công thức hoá học cố định.',
          answer: false,
          explanation:
            'Dầu mỏ là hỗn hợp của rất nhiều hydrocarbon khác nhau, nên không có công thức chung. Chính vì là hỗn hợp mà nhà máy lọc dầu tách được nó thành khí gas, xăng, dầu hoả, dầu diesel và nhựa đường.',
          conceptIds: ['petroleum', 'mixture'],
        },
        {
          id: 'u12-cp-e7',
          type: 'order-steps',
          prompt:
            'Sắp xếp các sản phẩm tách ra từ dầu mỏ theo nhiệt độ sôi tăng dần, tức là từ phân tử nhỏ tới phân tử lớn',
          steps: [
            { id: 's1', text: 'Khí gas' },
            { id: 's2', text: 'Xăng' },
            { id: 's3', text: 'Dầu hoả' },
            { id: 's4', text: 'Dầu diesel' },
            { id: 's5', text: 'Nhựa đường' },
          ],
          explanation:
            'Phân tử càng lớn thì càng khó bay hơi, nhiệt độ sôi càng cao. Khí gas có phân tử nhỏ nhất, chỉ 3 tới 4 carbon. Xăng khoảng 5 tới 11 carbon. Tiếp đó là dầu hoả, dầu diesel, và nặng nhất là nhựa đường.',
          conceptIds: ['petroleum', 'state-change'],
        },
        {
          id: 'u12-cp-e8',
          type: 'mcq',
          prompt:
            'Một chai nước rửa tay 200 mL có độ cồn 70 độ. Trong chai có bao nhiêu mL ethanol nguyên chất?',
          options: [
            { id: 'a', text: '70 mL' },
            { id: 'b', text: '130 mL' },
            { id: 'c', text: '140 mL' },
          ],
          correctOptionId: 'c',
          explanation:
            'Độ cồn 70 nghĩa là cứ 100 mL dung dịch có 70 mL ethanol. Chai 200 mL gấp đôi 100 mL nên có 2 × 70 = 140 mL ethanol.',
          conceptIds: ['ethylic-alcohol', 'solution'],
        },
        {
          id: 'u12-cp-e9',
          type: 'match-pairs',
          prompt: 'Nối mỗi chất với thứ quen thuộc có chứa nó',
          pairs: [
            {
              left: { id: 'l1', moleculeId: 'ch4', text: 'Methane' },
              right: { id: 'r1', text: 'Biogas', image: 'biogas-stove' },
            },
            {
              left: { id: 'l2', moleculeId: 'c4h10', text: 'Butane' },
              right: { id: 'r2', text: 'Lon gas mini', image: 'hotpot-gas-stove' },
            },
            {
              left: { id: 'l3', moleculeId: 'c2h4', text: 'Ethylene' },
              right: { id: 'r3', text: 'Khí toả ra từ chuối chín', image: 'banana-bag' },
            },
            {
              left: { id: 'l4', moleculeId: 'c2h6o', text: 'Ethanol' },
              right: { id: 'r4', text: 'Gel rửa tay khô', image: 'hand-sanitizer' },
            },
            {
              left: { id: 'l5', moleculeId: 'c2h4o2', text: 'Acetic acid' },
              right: { id: 'r5', text: 'Giấm ăn', image: 'vinegar-bottle' },
            },
          ],
          explanation:
            'Methane và butane là alkane dùng làm nhiên liệu. Ethylene là alkene, vừa thúc quả chín vừa là nguyên liệu làm nhựa. Ethanol có nhóm –OH, là thành phần chính của cồn. Acetic acid có nhóm –COOH, tạo vị chua của giấm.',
          conceptIds: ['alkane', 'alkene', 'ethylic-alcohol', 'acetic-acid'],
        },
        {
          id: 'u12-cp-e10',
          type: 'mcq',
          prompt:
            'Vòi hoa sen bám đầy cặn trắng, chủ yếu là calcium carbonate. Mẹ ngâm vòi trong giấm và thấy bọt khí sủi lên từ lớp cặn. Bọt đó là khí gì?',
          options: [
            { id: 'a', moleculeId: 'h2', text: 'Hydrogen' },
            { id: 'b', moleculeId: 'co2', text: 'Carbon dioxide' },
            { id: 'c', moleculeId: 'o2', text: 'Oxygen' },
          ],
          correctOptionId: 'b',
          explanation:
            'Acetic acid trong giấm phản ứng với muối carbonate, tạo ra khí carbon dioxide, và lớp cặn tan dần. Khí hydrogen chỉ sinh ra khi acid gặp kim loại đứng trước hydrogen trong dãy hoạt động hoá học.',
          conceptIds: ['acetic-acid', 'acid', 'salt'],
        },
        {
          id: 'u12-cp-e11',
          type: 'true-false',
          prompt: 'Bia có độ cồn thấp nên người vừa uống bia vẫn lái xe an toàn.',
          answer: false,
          explanation:
            'Bia vẫn chứa ethanol. Ethanol theo máu lên não, làm phản xạ chậm và phán đoán kém đi, dù nó đến từ bia hay rượu. Đã uống rượu bia thì không lái xe.',
          conceptIds: ['ethylic-alcohol'],
        },
        {
          id: 'u12-cp-e12',
          type: 'fill-blank',
          prompt:
            'Đun nóng acetic acid với ethanol, có sulfuric acid đặc làm xúc tác. Chọn từ đúng cho từng chỗ trống',
          template:
            'Acetic acid + ethanol → ethyl acetate + ___. Ethyl acetate thuộc nhóm chất gọi là ___.',
          blanks: [
            { accepted: ['nước'], wordBank: ['nước', 'hydrogen', 'oxygen'] },
            { accepted: ['ester'], wordBank: ['ester', 'alkane', 'muối'] },
          ],
          explanation:
            'Trong phản ứng ester hoá, phân tử acid và phân tử alcohol ghép lại với nhau và tách ra một phân tử nước. Sản phẩm là một ester. Ethyl acetate có mùi thơm và được dùng làm dung môi.',
          conceptIds: ['ester', 'acetic-acid', 'ethylic-alcohol'],
        },
      ],
      baseXp: 20,
    },
  ],
}
