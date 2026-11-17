import type { UnitInput } from '../../schema/lesson.js'

/**
 * Unit 8: Hoá học trong cơ thể
 * 6 bài học + checkpoint: hô hấp tế bào, glucose và saccharose (kèm quang hợp),
 * tinh bột và cellulose, chất béo, protein, nước và khoáng chất.
 */
export const unit08: UnitInput = {
  id: 'u8-body',
  order: 8,
  title: 'Hoá học trong cơ thể',
  tagline: 'Đường, đạm, béo và hơi thở',
  color: '#FF86D0',
  lessons: [
    // ───────────────────────── Bài 1: Hô hấp tế bào ─────────────────────────
    {
      id: 'u8-l1-respiration',
      title: 'Cơ thể "đốt" gì để sống?',
      intro: {
        title: 'Hơi thở buổi sáng lạnh',
        story: [
          'Sáng mùa đông, bạn chạy quanh sân. Người ấm dần lên, tim đập nhanh, và mỗi lần thở ra lại có một làn trắng bay trước mặt. Hơi ấm ấy ở đâu ra?',
          'Nó đến từ một phản ứng hoá học trong các tế bào, những "căn phòng" tí hon tạo nên cơ thể bạn. Ở đó, glucose (một loại đường lấy từ thức ăn) phản ứng với oxygen bạn hít vào, tạo thành carbon dioxide và nước, đồng thời giải phóng năng lượng. Phản ứng này gọi là hô hấp tế bào.',
          'Đường cháy trong lửa cũng dùng oxygen và cũng sinh ra carbon dioxide với nước. Nhưng trong tế bào không có ngọn lửa nào. Nhờ enzyme, phản ứng đi qua rất nhiều bước nhỏ ở khoảng 37 °C, năng lượng thoát ra từ từ, vừa đủ để giữ ấm và cho cơ bắp hoạt động.',
          'Carbon dioxide theo máu về phổi rồi ra ngoài cùng hơi thở, kèm theo hơi nước. Gặp không khí lạnh, hơi nước ngưng tụ thành những giọt li ti. Đó chính là làn trắng bạn thấy.',
        ],
        visual: { type: 'reaction', reactionId: 'cellular-respiration' },
      },
      exercises: [
        {
          id: 'u8-l1-e1',
          type: 'mcq',
          prompt: 'Trong hô hấp tế bào, glucose phản ứng với chất khí nào bạn hít vào?',
          options: [
            { id: 'a', moleculeId: 'n2', text: 'Nitrogen' },
            { id: 'b', moleculeId: 'o2', text: 'Oxygen' },
            { id: 'c', moleculeId: 'co2', text: 'Carbon dioxide' },
          ],
          correctOptionId: 'b',
          explanation:
            'Tế bào cần oxygen để phản ứng với glucose. Nitrogen chiếm phần lớn không khí nhưng cơ thể không dùng tới, hít vào rồi lại thở ra. Carbon dioxide thì là sản phẩm của phản ứng.',
          conceptIds: ['respiration', 'reactants-products'],
        },
        {
          id: 'u8-l1-e2',
          type: 'sort',
          prompt:
            'Hô hấp tế bào: glucose và oxygen biến thành carbon dioxide và nước. Xếp mỗi chất vào đúng nhóm',
          groups: [
            { id: 'reactant', label: 'Chất phản ứng' },
            { id: 'product', label: 'Sản phẩm' },
          ],
          items: [
            { id: 'i1', moleculeId: 'co2', text: 'Carbon dioxide', groupId: 'product' },
            { id: 'i2', moleculeId: 'c6h12o6', text: 'Glucose', groupId: 'reactant' },
            { id: 'i3', moleculeId: 'h2o', text: 'Nước', groupId: 'product' },
            { id: 'i4', moleculeId: 'o2', text: 'Oxygen', groupId: 'reactant' },
          ],
          explanation:
            'Glucose đến từ thức ăn, oxygen đến từ không khí bạn hít vào: đó là hai chất phản ứng. Carbon dioxide và nước sinh ra trong tế bào: đó là hai sản phẩm.',
          conceptIds: ['respiration', 'reactants-products'],
        },
        {
          id: 'u8-l1-e3',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template: 'Hô hấp tế bào diễn ra ở ___ và giải phóng ___ để cơ thể giữ ấm và hoạt động.',
          blanks: [
            {
              accepted: ['tế bào khắp cơ thể'],
              wordBank: ['tế bào khắp cơ thể', 'riêng lá phổi', 'riêng dạ dày'],
            },
            { accepted: ['năng lượng'], wordBank: ['năng lượng', 'glucose', 'oxygen'] },
          ],
          explanation:
            'Phổi chỉ là nơi đổi khí: nhận oxygen vào máu và thải carbon dioxide ra. Còn phản ứng giữa glucose và oxygen xảy ra trong tế bào ở khắp cơ thể, từ não tới đầu ngón chân. Thứ tế bào cần lấy từ phản ứng này là năng lượng.',
          conceptIds: ['respiration'],
        },
        {
          id: 'u8-l1-e4',
          type: 'mcq',
          prompt: 'Một phân tử glucose C₆H₁₂O₆ có tổng cộng bao nhiêu nguyên tử?',
          visual: { id: 'v', moleculeId: 'c6h12o6' },
          options: [
            { id: 'a', text: '3' },
            { id: 'b', text: '18' },
            { id: 'c', text: '24' },
          ],
          correctOptionId: 'c',
          explanation:
            '6 carbon + 12 hydrogen + 6 oxygen = 24 nguyên tử. Nếu ra 18 thì bạn đã bỏ sót một số 6. Còn 3 là số nguyên tố có trong glucose, không phải số nguyên tử.',
          conceptIds: ['formula'],
        },
        {
          id: 'u8-l1-e5',
          type: 'true-false',
          prompt: 'Trong tế bào của bạn có những ngọn lửa tí hon đang đốt glucose.',
          answer: false,
          explanation:
            'Hô hấp tế bào giống sự cháy ở chất phản ứng và sản phẩm, nhưng không có lửa. Phản ứng đi qua nhiều bước nhỏ ở khoảng 37 °C, nên năng lượng thoát ra từ từ chứ không bùng lên thành ngọn lửa.',
          conceptIds: ['respiration', 'combustion'],
        },
        {
          id: 'u8-l1-e6',
          type: 'order-steps',
          prompt:
            'Cân bằng sơ đồ C₆H₁₂O₆ + O₂ → CO₂ + H₂O. Oxygen có mặt ở nhiều chất nhất nên để sau cùng. Sắp xếp các bước theo thứ tự',
          steps: [
            {
              id: 's1',
              text: 'Bắt đầu với carbon: glucose có 6 C, nên đặt hệ số 6 trước CO₂',
            },
            {
              id: 's2',
              text: 'Tiếp theo là hydrogen: glucose có 12 H, mỗi H₂O có 2 H, nên đặt hệ số 6 trước H₂O',
            },
            {
              id: 's3',
              text: 'Giờ đếm oxygen ở vế phải: 6CO₂ có 12 O, 6H₂O có 6 O, tổng cộng 18 O',
            },
            {
              id: 's4',
              text: 'Vế trái: glucose có sẵn 6 O, còn thiếu 12 O, nên đặt hệ số 6 trước O₂',
            },
            { id: 's5', text: 'Đếm lần cuối: mỗi vế có 6 C, 12 H và 18 O' },
          ],
          explanation:
            'Mẹo cho phương trình dài: cân bằng nguyên tố chỉ nằm trong một chất ở mỗi vế trước (carbon, rồi hydrogen). Oxygen nằm rải ở nhiều chất nên để cuối, và nhớ trừ đi 6 O đã có sẵn trong glucose.',
          conceptIds: ['balancing', 'respiration'],
        },
        {
          id: 'u8-l1-e7',
          type: 'balance-reaction',
          reactionId: 'cellular-respiration',
          prompt:
            'Đến lượt bạn: cân bằng phương trình của hô hấp tế bào. Carbon trước, hydrogen sau, oxygen cuối cùng',
          explanation:
            '6 C cần 6 CO₂. 12 H cần 6 H₂O. Vế phải khi đó có 12 + 6 = 18 O. Glucose đã góp 6 O, còn 12 O nữa là 6 O₂. Kết quả: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O.',
          conceptIds: ['balancing', 'chemical-equation', 'respiration'],
        },
        {
          id: 'u8-l1-e8',
          type: 'mcq',
          prompt: 'Các nguyên tử carbon trong khí CO₂ bạn thở ra vốn nằm ở đâu?',
          options: [
            { id: 'a', text: 'Trong khí oxygen bạn hít vào' },
            { id: 'b', text: 'Trong glucose lấy từ thức ăn' },
            { id: 'c', text: 'Trong nước bạn uống' },
          ],
          correctOptionId: 'b',
          explanation:
            'Khí oxygen O₂ và nước H₂O đều không có nguyên tử carbon nào. Carbon chỉ có trong glucose. Vậy phổi không "đổi" oxygen thành carbon dioxide: carbon bạn thở ra đến từ thức ăn bạn đã ăn.',
          conceptIds: ['respiration', 'conservation-of-mass'],
        },
        {
          id: 'u8-l1-e9',
          type: 'sort',
          prompt: 'Methane cháy trên bếp biogas và hô hấp tế bào: mỗi ý đúng với bên nào?',
          groups: [
            { id: 'fire', label: 'Chỉ sự cháy' },
            { id: 'cell', label: 'Chỉ hô hấp tế bào' },
            { id: 'both', label: 'Cả hai' },
          ],
          items: [
            { id: 'i1', text: 'Có ngọn lửa và phát sáng', image: 'biogas-stove', groupId: 'fire' },
            { id: 'i2', text: 'Diễn ra ở khoảng 37 °C', groupId: 'cell' },
            { id: 'i3', text: 'Cần khí oxygen', groupId: 'both' },
            { id: 'i4', text: 'Sinh ra carbon dioxide và nước', groupId: 'both' },
            { id: 'i5', text: 'Năng lượng thoát ra từ từ qua nhiều bước nhỏ', groupId: 'cell' },
            { id: 'i6', text: 'Nóng hơn một nghìn độ C', groupId: 'fire' },
          ],
          explanation:
            'Hai phản ứng giống nhau ở chỗ đều cần oxygen và đều sinh ra carbon dioxide với nước. Khác nhau ở cách năng lượng thoát ra: ngọn lửa toả nhiệt dồn dập nên rất nóng và phát sáng, còn tế bào lấy năng lượng từng chút một ở nhiệt độ cơ thể.',
          conceptIds: ['respiration', 'combustion'],
        },
        {
          id: 'u8-l1-e10',
          type: 'true-false',
          prompt: 'Làn trắng trước miệng khi bạn thở ra trong sáng lạnh là khí carbon dioxide.',
          visual: { id: 'v', image: 'jogging-breath' },
          answer: false,
          explanation:
            'Khí carbon dioxide không màu, mắt không thấy được. Làn trắng là hơi nước trong hơi thở gặp lạnh ngưng tụ thành những giọt nước li ti, giống làn trắng phía trên vòi ấm đang sôi.',
          conceptIds: ['respiration', 'state-change'],
        },
      ],
      unlocksMolecules: [],
      baseXp: 10,
    },

    // ───────────────────────── Bài 2: Glucose và saccharose ─────────────────────────
    {
      id: 'u8-l2-sugars',
      title: 'Vị ngọt đến từ đâu?',
      intro: {
        title: 'Chùm nho và cốc nước mía',
        story: [
          'Cắn một quả nho chín, rồi uống một ngụm nước mía: cả hai đều ngọt lịm. Nhưng đó là hai loại đường khác nhau. Nho chín và mật ong có nhiều glucose. Mía và củ cải đường có nhiều saccharose (đường mía), cũng chính là đường kính trắng trong bếp.',
          'Glucose là C₆H₁₂O₆. Saccharose là C₁₂H₂₂O₁₁, phân tử to gần gấp đôi. Tách riêng ra, cả hai đều là chất rắn, vị ngọt, tan rất tốt trong nước. Hình phóng to cho thấy glucose khi đứng riêng như thế. Còn trong quả nho, các phân tử glucose tan lẫn giữa các phân tử nước.',
          'Cây lấy đường ở đâu? Nó tự làm ra. Lá cây hứng ánh sáng, dùng năng lượng đó ghép carbon dioxide trong không khí với nước hút từ rễ thành glucose, rồi nhả ra khí oxygen. Quá trình này gọi là quang hợp. Viết thành phương trình, nó đúng là hô hấp tế bào đảo ngược hai vế.',
          'Cây mía nối glucose với một loại đường khác tên là fructose, thành saccharose, rồi trữ trong thân. Khi bạn ăn đường, cơ thể làm ngược lại: enzyme cắt mỗi phân tử saccharose thành một glucose và một fructose rồi mới đưa vào máu.',
        ],
        visual: { type: 'molecule', moleculeId: 'c6h12o6', scene: 'fruit-plate' },
      },
      exercises: [
        {
          id: 'u8-l2-e1',
          type: 'sort',
          prompt: 'Mỗi thứ dưới đây có nhiều loại đường nào?',
          groups: [
            { id: 'glucose', label: 'Nhiều glucose' },
            { id: 'saccharose', label: 'Nhiều saccharose' },
          ],
          items: [
            { id: 'i1', text: 'Nho chín', image: 'fruit-plate', groupId: 'glucose' },
            { id: 'i2', text: 'Cây mía', groupId: 'saccharose' },
            { id: 'i3', text: 'Mật ong', groupId: 'glucose' },
            { id: 'i4', text: 'Đường kính trắng', image: 'sugar-tea', groupId: 'saccharose' },
            { id: 'i5', text: 'Củ cải đường', groupId: 'saccharose' },
          ],
          explanation:
            'Nho chín và mật ong có nhiều glucose, đi cùng một loại đường họ hàng tên là fructose, còn saccharose thì rất ít. Mía và củ cải đường chứa nhiều saccharose. Đường kính trắng chính là saccharose được tách ra từ nước mía hoặc củ cải đường.',
          conceptIds: ['carbohydrate'],
        },
        {
          id: 'u8-l2-e2',
          type: 'mcq',
          prompt: 'Công thức nào là của saccharose, loại đường có nhiều trong cây mía?',
          options: [
            { id: 'a', text: 'C₆H₁₂O₆' },
            { id: 'b', text: 'C₁₂H₂₂O₁₁' },
            { id: 'c', text: 'C₂H₆O' },
          ],
          correctOptionId: 'b',
          explanation:
            'Saccharose là C₁₂H₂₂O₁₁: 12 carbon, 22 hydrogen, 11 oxygen. C₆H₁₂O₆ là glucose, phân tử chỉ to bằng khoảng một nửa. C₂H₆O là ethanol, không phải đường.',
          conceptIds: ['carbohydrate', 'formula'],
        },
        {
          id: 'u8-l2-e3',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Tách riêng ra, glucose và saccharose đều là chất ___, có vị ___ và tan tốt trong nước.',
          blanks: [
            { accepted: ['rắn'], wordBank: ['rắn', 'lỏng', 'khí'] },
            { accepted: ['ngọt'], wordBank: ['ngọt', 'chua', 'mặn'] },
          ],
          explanation:
            'Hạt đường kính trong lọ là saccharose ở thể rắn. Nước mía hay nước nho thì là dung dịch: các phân tử đường đã tan lẫn vào nước.',
          conceptIds: ['carbohydrate', 'state-of-matter'],
        },
        {
          id: 'u8-l2-e4',
          type: 'true-false',
          prompt:
            'Khuấy đường kính vào cốc trà, các phân tử saccharose bị phá vỡ thành từng nguyên tử.',
          visual: { id: 'v', image: 'sugar-tea' },
          answer: false,
          explanation:
            'Hoà tan không phá vỡ phân tử. Các phân tử saccharose chỉ rời khỏi hạt đường và chen vào giữa các phân tử nước, mỗi phân tử vẫn còn nguyên. Vì thế trà mới có vị ngọt của đường.',
          conceptIds: ['solution', 'physical-change'],
        },
        {
          id: 'u8-l2-e5',
          type: 'mcq',
          prompt: 'Khi quang hợp, lá cây lấy vào hai chất nào để làm ra glucose?',
          visual: { id: 'v', image: 'sunlit-leaf' },
          options: [
            { id: 'a', text: 'Carbon dioxide và nước' },
            { id: 'b', text: 'Oxygen và glucose' },
            { id: 'c', text: 'Oxygen và đất' },
          ],
          correctOptionId: 'a',
          explanation:
            'Lá lấy carbon dioxide từ không khí, rễ hút nước từ đất. Hai chất này đủ cả ba nguyên tố C, H, O để ghép thành glucose. Oxygen là thứ lá nhả ra, không phải thứ lá lấy vào để quang hợp.',
          conceptIds: ['photosynthesis', 'reactants-products'],
        },
        {
          id: 'u8-l2-e6',
          type: 'fill-blank',
          prompt:
            'Lá có màu xanh vì chứa chất diệp lục. Chất này hứng ánh sáng để cây có năng lượng làm quang hợp. Chọn từ đúng cho từng chỗ trống',
          template:
            'Quang hợp cần carbon dioxide, nước, ___ và chất diệp lục. Sản phẩm là glucose và khí ___.',
          blanks: [
            { accepted: ['ánh sáng'], wordBank: ['ánh sáng', 'bóng tối', 'ngọn lửa'] },
            { accepted: ['oxygen'], wordBank: ['oxygen', 'nitrogen', 'hydrogen'] },
          ],
          explanation:
            'Ghép carbon dioxide và nước thành glucose cần năng lượng, và năng lượng đó lấy từ ánh sáng. Vì thế cây để trong tối lâu ngày sẽ yếu dần. Khí oxygen lá nhả ra chính là khí bạn đang hít vào.',
          conceptIds: ['photosynthesis'],
        },
        {
          id: 'u8-l2-e7',
          type: 'balance-reaction',
          reactionId: 'photosynthesis',
          prompt:
            'Cân bằng phương trình quang hợp. Vẫn mẹo cũ: carbon trước, hydrogen sau, oxygen cuối cùng',
          explanation:
            'Glucose có 6 C nên cần 6 CO₂. Glucose có 12 H nên cần 6 H₂O. Vế trái khi đó có 12 + 6 = 18 O. Ở vế phải, glucose giữ 6 O, còn 12 O là 6 O₂. Kết quả: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.',
          conceptIds: ['balancing', 'chemical-equation', 'photosynthesis'],
        },
        {
          id: 'u8-l2-e8',
          type: 'mcq',
          prompt:
            'Một hạt giống bé xíu lớn thành cây to nặng hàng trăm kilôgam. Phần lớn khối lượng của thân, cành, lá đến từ đâu?',
          options: [
            { id: 'a', text: 'Đất mà rễ cây hút dần vào' },
            { id: 'b', text: 'Ánh sáng mặt trời biến thành gỗ' },
            { id: 'c', text: 'Carbon dioxide trong không khí và nước' },
          ],
          correctOptionId: 'c',
          explanation:
            'Cây xây thân mình từ glucose, mà mọi nguyên tử C, H, O của glucose đều đến từ carbon dioxide và nước. Đất chỉ góp một phần nhỏ là các khoáng chất. Ánh sáng là năng lượng, không có nguyên tử nào nên không thể thành gỗ.',
          conceptIds: ['photosynthesis', 'conservation-of-mass'],
        },
        {
          id: 'u8-l2-e9',
          type: 'mcq',
          prompt:
            'Tế bào nào đang sống cũng cần năng lượng, kể cả tế bào của cây. Vậy cây lấy năng lượng để mọc rễ, ra hoa bằng cách nào?',
          options: [
            { id: 'a', text: 'Cây cũng hô hấp tế bào, dùng oxygen và chính glucose nó làm ra' },
            { id: 'b', text: 'Cây hút thẳng năng lượng có sẵn trong đất qua rễ' },
            { id: 'c', text: 'Cây không cần năng lượng vì nó chỉ đứng yên một chỗ' },
          ],
          correctOptionId: 'a',
          explanation:
            'Cây không chỉ quang hợp. Tế bào của cây cũng hô hấp suốt ngày đêm, giống tế bào của bạn. Ban ngày cây quang hợp mạnh hơn nên làm ra nhiều glucose và oxygen hơn lượng nó tự dùng. Phần glucose dư được cất lại trong quả, hạt, củ.',
          conceptIds: ['respiration', 'photosynthesis'],
        },
        {
          id: 'u8-l2-e10',
          type: 'order-steps',
          prompt: 'Hành trình của đường từ cây mía tới tế bào của bạn. Sắp xếp theo thứ tự',
          steps: [
            { id: 's1', text: 'Lá mía quang hợp, tạo ra glucose' },
            { id: 's2', text: 'Cây mía nối glucose với fructose thành saccharose, trữ trong thân' },
            {
              id: 's3',
              text: 'Bạn uống nước mía, cơ thể cắt saccharose thành glucose và fructose',
            },
            { id: 's4', text: 'Glucose theo máu tới các tế bào' },
            { id: 's5', text: 'Tế bào cho glucose phản ứng với oxygen, giải phóng năng lượng' },
          ],
          explanation:
            'Năng lượng bạn dùng để chạy nhảy vốn là năng lượng ánh sáng mà lá mía đã hứng. Glucose là thứ mang năng lượng ấy từ chiếc lá tới tế bào của bạn. Fructose có cùng công thức C₆H₁₂O₆ với glucose. Khi hai phân tử nối nhau, một phân tử nước tách ra, nên saccharose là C₁₂H₂₂O₁₁ chứ không phải C₁₂H₂₄O₁₂.',
          conceptIds: ['photosynthesis', 'respiration', 'carbohydrate'],
        },
      ],
      baseXp: 10,
    },

    // ───────────────────────── Bài 3: Tinh bột và cellulose ─────────────────────────
    {
      id: 'u8-l3-starch-cellulose',
      title: 'Chuỗi dài làm từ đường',
      intro: {
        title: 'Bát cơm nhai lâu hoá ngọt',
        story: [
          'Xới một bát cơm trắng còn nóng hổi. Miếng đầu tiên gần như không có vị ngọt. Nhưng thử nhai thật lâu, bạn sẽ thấy nó ngọt dần. Đường ở đâu ra vậy?',
          'Gạo, khoai, bột mì chứa đầy tinh bột. Mỗi phân tử tinh bột là một chuỗi rất dài, gồm từ vài trăm tới hàng nghìn mắt xích glucose nối nhau, có khi còn nhiều hơn thế. Bạn đã gặp kiểu phân tử này ở Unit 7: tinh bột là một polymer, chỉ khác là do cây tạo ra chứ không phải nhà máy. Chuỗi dài như thế không có vị ngọt. Bấm kính lúp để thấy glucose, mắt xích của chuỗi, khi đứng riêng.',
          'Trong nước bọt có enzyme, chất xúc tác do cơ thể sống tạo ra. Enzyme này cắt chuỗi tinh bột thành các phân tử đường nhỏ, và lưỡi bạn nhận ra vị ngọt. Ở trường, thầy cô còn có cách tìm tinh bột: nhỏ dung dịch iodine (iốt) màu nâu vàng lên lát khoai tây, chỗ đó chuyển sang màu xanh tím.',
          'Tinh bột là cách cây cất glucose để dành trong hạt và củ. Cây còn nối glucose theo một kiểu khác thành cellulose: những sợi dai chắc dựng nên thân, cành, lá. Gỗ, giấy và sợi bông chứa rất nhiều cellulose. Chất xơ trong rau phần lớn cũng là cellulose. Cơ thể người không có enzyme cắt được cellulose.',
        ],
        visual: { type: 'molecule', moleculeId: 'c6h12o6', scene: 'rice-bowl' },
      },
      exercises: [
        {
          id: 'u8-l3-e1',
          type: 'mcq',
          prompt:
            'Mỗi phân tử tinh bột trong hạt cơm là một chuỗi rất dài. Mỗi mắt xích của chuỗi là gì?',
          visual: { id: 'v', image: 'rice-bowl' },
          options: [
            { id: 'a', moleculeId: 'h2o', text: 'Nước' },
            { id: 'b', moleculeId: 'c6h12o6', text: 'Glucose' },
            { id: 'c', moleculeId: 'nacl', text: 'Sodium chloride (muối ăn)' },
          ],
          correctOptionId: 'b',
          explanation:
            'Tinh bột là rất nhiều mắt xích glucose nối thành chuỗi. Mỗi lần nối thêm một mắt xích, một phân tử nước H₂O tách ra. Vì thế mỗi mắt xích trong chuỗi là C₆H₁₀O₅, tức một glucose đã bớt đi H₂O, và công thức của tinh bột viết là (C₆H₁₀O₅)ₙ, với n là số mắt xích. Khi enzyme cắt chuỗi, nước được gắn trở vào và ta lại có glucose C₆H₁₂O₆.',
          conceptIds: ['carbohydrate'],
        },
        {
          id: 'u8-l3-e2',
          type: 'sort',
          prompt: 'Thứ nào chứa nhiều tinh bột, thứ nào chứa nhiều cellulose?',
          groups: [
            { id: 'starch', label: 'Nhiều tinh bột' },
            { id: 'cellulose', label: 'Nhiều cellulose' },
          ],
          items: [
            { id: 'i1', text: 'Cơm trắng', image: 'rice-bowl', groupId: 'starch' },
            { id: 'i2', text: 'Sợi bông', groupId: 'cellulose' },
            { id: 'i3', text: 'Củ khoai tây', image: 'iodine-potato', groupId: 'starch' },
            { id: 'i4', text: 'Khúc gỗ', groupId: 'cellulose' },
            { id: 'i5', text: 'Bột mì', groupId: 'starch' },
            { id: 'i6', text: 'Tờ giấy', groupId: 'cellulose' },
          ],
          explanation:
            'Hạt và củ là nơi cây cất tinh bột để dành: gạo, khoai, bột mì. Còn thân cây và sợi của cây thì dai chắc nhờ cellulose: gỗ, giấy làm từ gỗ, sợi bông.',
          conceptIds: ['carbohydrate'],
        },
        {
          id: 'u8-l3-e3',
          type: 'fill-blank',
          prompt: 'Thí nghiệm ở phòng học, làm cùng thầy cô. Chọn từ đúng cho từng chỗ trống',
          template:
            'Nhỏ dung dịch iodine màu nâu vàng lên lát khoai tây, chỗ đó chuyển sang màu ___ vì khoai tây có nhiều ___.',
          blanks: [
            { accepted: ['xanh tím'], wordBank: ['xanh tím', 'đỏ cam', 'trắng đục'] },
            { accepted: ['tinh bột'], wordBank: ['tinh bột', 'cellulose', 'muối ăn'] },
          ],
          explanation:
            'Iodine gặp tinh bột thì tạo màu xanh tím. Đây là cách quen thuộc để biết một thứ có tinh bột hay không. Dung dịch iodine chỉ dùng để thử, không uống và không nếm.',
          conceptIds: ['carbohydrate', 'reaction-signs'],
        },
        {
          id: 'u8-l3-e4',
          type: 'mcq',
          prompt:
            'Trong giờ thực hành, thầy cô nhỏ dung dịch iodine lên bốn thứ. Thứ nào không chuyển sang màu xanh tím?',
          visual: { id: 'v', image: 'iodine-potato' },
          options: [
            { id: 'a', text: 'Mẩu bánh mì' },
            { id: 'b', text: 'Hạt cơm' },
            { id: 'c', text: 'Viên đường kính' },
            { id: 'd', text: 'Lát khoai lang' },
          ],
          correctOptionId: 'c',
          explanation:
            'Bánh mì, cơm và khoai lang đều chứa tinh bột nên đổi màu. Đường kính là saccharose, một phân tử nhỏ chứ không phải chuỗi tinh bột dài, nên giọt iodine vẫn giữ màu nâu vàng.',
          conceptIds: ['carbohydrate', 'reaction-signs'],
        },
        {
          id: 'u8-l3-e5',
          type: 'true-false',
          prompt: 'Nhai cơm lâu thấy ngọt vì trong nước bọt có sẵn đường.',
          answer: false,
          explanation:
            'Nước bọt không có đường. Nó có enzyme cắt chuỗi tinh bột trong cơm thành các phân tử đường nhỏ. Chính những phân tử đường mới sinh ra ấy làm bạn thấy ngọt.',
          conceptIds: ['carbohydrate'],
        },
        {
          id: 'u8-l3-e6',
          type: 'order-steps',
          prompt:
            'Việc cắt tinh bột bắt đầu ở miệng và hoàn tất ở ruột, nơi glucose thấm vào máu. Sắp xếp hành trình của miếng cơm theo thứ tự',
          steps: [
            { id: 's1', text: 'Răng nghiền nhỏ hạt cơm, trộn đều với nước bọt' },
            { id: 's2', text: 'Enzyme trong nước bọt cắt chuỗi tinh bột thành những đoạn ngắn' },
            {
              id: 's3',
              text: 'Ở ruột, các enzyme khác cắt tiếp cho tới khi còn từng phân tử glucose',
            },
            { id: 's4', text: 'Glucose thấm qua thành ruột vào máu' },
            { id: 's5', text: 'Tế bào nhận glucose từ máu để hô hấp' },
          ],
          explanation:
            'Chuỗi tinh bột quá lớn để thấm qua thành ruột. Cơ thể phải cắt nó về từng phân tử glucose nhỏ thì mới đưa được vào máu. Tiêu hoá tinh bột chính là việc cắt chuỗi.',
          conceptIds: ['carbohydrate', 'respiration'],
        },
        {
          id: 'u8-l3-e7',
          type: 'mcq',
          prompt:
            'Rau có nhiều cellulose, cũng là chuỗi glucose như tinh bột. Vì sao ăn rau, cơ thể bạn không lấy được glucose từ cellulose?',
          options: [
            { id: 'a', text: 'Vì cellulose tan hết trong nước bọt rồi biến mất' },
            { id: 'b', text: 'Vì cơ thể người không có enzyme cắt được cellulose' },
            { id: 'c', text: 'Vì cellulose thật ra không chứa mắt xích glucose' },
          ],
          correctOptionId: 'b',
          explanation:
            'Trong cellulose, các mắt xích glucose nối với nhau theo kiểu khác tinh bột, và enzyme của người không cắt được kiểu nối đó. Cellulose đi qua ruột gần như nguyên vẹn, nên được gọi là chất xơ. Bò và mối tiêu hoá được nó nhờ các vi sinh vật sống trong ống tiêu hoá của chúng cắt giúp.',
          conceptIds: ['carbohydrate'],
        },
        {
          id: 'u8-l3-e8',
          type: 'match-pairs',
          prompt: 'Nối mỗi chất với mô tả đúng về nó',
          pairs: [
            {
              left: { id: 'l1', moleculeId: 'c6h12o6', text: 'Glucose' },
              right: { id: 'r1', text: 'Phân tử đường nhỏ, vị ngọt, tan tốt trong nước' },
            },
            {
              left: { id: 'l2', text: 'Tinh bột' },
              right: { id: 'r2', text: 'Chuỗi glucose cây cất trong hạt và củ' },
            },
            {
              left: { id: 'l3', text: 'Cellulose' },
              right: { id: 'r3', text: 'Chuỗi glucose tạo nên sợi dai chắc của gỗ và bông' },
            },
            {
              left: { id: 'l4', text: 'Enzyme' },
              right: { id: 'r4', text: 'Chất xúc tác do cơ thể sống tạo ra' },
            },
          ],
          explanation:
            'Cùng một loại mắt xích là glucose, nối theo hai kiểu khác nhau thì cho hai chất khác hẳn: tinh bột mềm, ăn được, còn cellulose dai và chắc. Enzyme không phải mắt xích mà là thứ giúp cắt chuỗi.',
          conceptIds: ['carbohydrate'],
        },
        {
          id: 'u8-l3-e9',
          type: 'mcq',
          prompt:
            'Glucose, saccharose, tinh bột và cellulose là họ hàng: chất nào cũng chỉ gồm ba nguyên tố carbon, hydrogen và oxygen. Cả họ có tên chung là carbohydrate (chất bột đường). Chất nào dưới đây không thuộc họ carbohydrate?',
          options: [
            { id: 'a', text: 'Tinh bột trong cơm' },
            { id: 'b', text: 'Cellulose trong giấy' },
            { id: 'c', moleculeId: 'nacl', text: 'Sodium chloride (muối ăn)' },
            { id: 'd', text: 'Saccharose trong mía' },
          ],
          correctOptionId: 'c',
          explanation:
            'Muối ăn NaCl gồm sodium và chlorine, không có carbon, hydrogen hay oxygen, nên không phải carbohydrate. Ba chất còn lại đều được xây từ các phân tử đường. Lưu ý: chỉ gồm C, H, O thôi thì chưa đủ để là carbohydrate. Ethanol C₂H₆O cũng gồm ba nguyên tố ấy nhưng không phải đường.',
          conceptIds: ['carbohydrate', 'formula'],
        },
        {
          id: 'u8-l3-e10',
          type: 'true-false',
          prompt:
            'Các nguyên tử carbon trong hạt gạo vốn đến từ khí carbon dioxide trong không khí.',
          visual: { id: 'v', image: 'rice-field' },
          answer: true,
          explanation:
            'Lá lúa quang hợp, ghép carbon dioxide và nước thành glucose. Cây lúa nối glucose thành tinh bột rồi cất vào hạt. Vậy carbon trong bát cơm của bạn từng bay lơ lửng trong không khí.',
          conceptIds: ['photosynthesis', 'carbohydrate', 'conservation-of-mass'],
        },
      ],
      baseXp: 10,
    },

    // ───────────────────────── Bài 4: Chất béo ─────────────────────────
    {
      id: 'u8-l4-lipids',
      title: 'Dầu, mỡ và năng lượng để dành',
      intro: {
        title: 'Dầu với nước không chịu trộn',
        story: [
          'Rót một thìa dầu ăn vào cốc nước rồi khuấy thật mạnh. Dầu vỡ thành những hạt tròn li ti. Nhưng chỉ một lát sau, chúng lại nổi lên và gom thành một lớp vàng óng trên mặt nước. Khuấy bao nhiêu lần cũng vậy.',
          'Dầu ăn và mỡ đều là chất béo. Dầu thực vật thường ở thể lỏng, mỡ động vật thường ở thể rắn. Phân tử chất béo khá lớn, phần chính là những chuỗi dài gồm carbon và hydrogen. Các phân tử nước hút nhau rất mạnh, còn hút những chuỗi ấy thì yếu hơn nhiều, nên chúng dồn lại với nhau và đẩy chất béo ra ngoài. Vì thế chất béo không tan trong nước.',
          'Chất béo lại nhẹ hơn nước: cùng một thể tích thì dầu nhẹ hơn. Vì thế lớp dầu luôn nổi ở trên. Bấm kính lúp vào phần nước bên dưới, bạn sẽ thấy toàn phân tử nước.',
          'Trong cơ thể, chất béo là kho năng lượng để dành. Cùng một khối lượng, chất béo cho năng lượng nhiều hơn gấp đôi đường hay tinh bột. Chất béo thuộc một nhóm chất rộng hơn gọi là lipid. Lipid còn góp phần tạo nên lớp màng bao quanh mỗi tế bào.',
        ],
        visual: { type: 'molecule', moleculeId: 'h2o', scene: 'oil-on-water' },
      },
      exercises: [
        {
          id: 'u8-l4-e1',
          type: 'mcq',
          prompt: 'Khuấy dầu ăn với nước rồi để yên. Một lát sau bạn thấy gì?',
          visual: { id: 'v', image: 'oil-on-water' },
          options: [
            { id: 'a', text: 'Dầu chìm xuống đáy cốc' },
            { id: 'b', text: 'Dầu tan đều, nước trong trở lại' },
            { id: 'c', text: 'Dầu nổi thành một lớp trên mặt nước' },
          ],
          correctOptionId: 'c',
          explanation:
            'Dầu không tan trong nước nên không thể lẫn đều vào nước như đường. Dầu lại nhẹ hơn nước nên nổi lên trên chứ không chìm.',
          conceptIds: ['lipid'],
        },
        {
          id: 'u8-l4-e2',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template: 'Chất béo ___ trong nước và ___ hơn nước, nên dầu ăn nổi thành lớp ở trên.',
          blanks: [
            { accepted: ['không tan'], wordBank: ['không tan', 'tan tốt', 'bay hơi'] },
            { accepted: ['nhẹ'], wordBank: ['nhẹ', 'nặng', 'ngọt'] },
          ],
          explanation:
            'Hai tính chất này đi cùng nhau mới tạo ra lớp dầu nổi: không tan nên dầu tách riêng ra, nhẹ hơn nên phần tách ra ấy nằm ở trên.',
          conceptIds: ['lipid'],
        },
        {
          id: 'u8-l4-e3',
          type: 'sort',
          prompt: 'Thả từng thứ vào cốc nước rồi khuấy. Thứ nào tan, thứ nào không?',
          groups: [
            { id: 'yes', label: 'Tan trong nước' },
            { id: 'no', label: 'Không tan trong nước' },
          ],
          items: [
            { id: 'i1', text: 'Đường kính', image: 'sugar-tea', groupId: 'yes' },
            { id: 'i2', text: 'Dầu ăn', image: 'oil-on-water', groupId: 'no' },
            { id: 'i3', text: 'Muối ăn', image: 'salt-shaker', groupId: 'yes' },
            { id: 'i4', text: 'Mỡ lợn', groupId: 'no' },
            { id: 'i5', moleculeId: 'c6h12o6', text: 'Glucose', groupId: 'yes' },
            { id: 'i6', text: 'Dầu vừng', groupId: 'no' },
          ],
          explanation:
            'Đường kính, glucose và muối ăn tan tốt trong nước. Dầu ăn, dầu vừng và mỡ lợn đều là chất béo nên không tan, dù ở thể lỏng hay thể rắn.',
          conceptIds: ['lipid', 'solution'],
        },
        {
          id: 'u8-l4-e4',
          type: 'mcq',
          prompt: 'Cát cũng không tan trong nước nhưng lại chìm. Vậy vì sao dầu ăn nổi?',
          options: [
            { id: 'a', text: 'Vì cùng một thể tích, dầu nhẹ hơn nước' },
            { id: 'b', text: 'Vì dầu không tan trong nước' },
            { id: 'c', text: 'Vì phân tử dầu nhỏ hơn phân tử nước' },
          ],
          correctOptionId: 'a',
          explanation:
            'Không tan chỉ giải thích vì sao dầu tách riêng ra. Nổi hay chìm là chuyện nặng nhẹ: một cốc dầu nhẹ hơn một cốc nước cùng cỡ nên dầu nổi, còn cát nặng hơn nên chìm. Phân tử chất béo thật ra lớn hơn phân tử nước rất nhiều.',
          conceptIds: ['lipid'],
        },
        {
          id: 'u8-l4-e5',
          type: 'true-false',
          prompt: 'Mỡ lợn ở thể rắn còn dầu ăn ở thể lỏng, nên chỉ dầu ăn mới là chất béo.',
          answer: false,
          explanation:
            'Cả hai đều là chất béo. Ở nhiệt độ phòng, mỡ động vật thường ở thể rắn còn dầu thực vật thường ở thể lỏng. Đun nóng thì mỡ lợn cũng chảy lỏng, và nó vẫn là chất béo.',
          conceptIds: ['lipid', 'state-of-matter'],
        },
        {
          id: 'u8-l4-e6',
          type: 'mcq',
          prompt:
            'Lạc đà sống ở sa mạc mang trên lưng cái bướu chứa đầy mỡ. Cái bướu ấy giúp gì cho nó?',
          options: [
            { id: 'a', text: 'Là bình chứa nước uống dự trữ' },
            { id: 'b', text: 'Là kho năng lượng cho những ngày không có thức ăn' },
            { id: 'c', text: 'Là chiếc phao giúp nó nổi khi lội qua sông' },
          ],
          correctOptionId: 'b',
          explanation:
            'Bướu lạc đà chứa mỡ chứ không chứa nước. Chất béo là cách cất năng lượng gọn nhất: cùng một khối lượng, nó cho năng lượng nhiều hơn gấp đôi đường hay tinh bột.',
          conceptIds: ['lipid'],
        },
        {
          id: 'u8-l4-e7',
          type: 'match-pairs',
          prompt: 'Nối mỗi hiện tượng với lời giải thích',
          pairs: [
            {
              left: { id: 'l1', text: 'Mỡ luôn nổi lên mặt bát canh chứ không chìm xuống đáy' },
              right: { id: 'r1', text: 'Chất béo nhẹ hơn nước' },
            },
            {
              left: { id: 'l2', text: 'Chỉ xả nước thì bát dính mỡ vẫn nhờn' },
              right: { id: 'r2', text: 'Chất béo không tan trong nước' },
            },
            {
              left: { id: 'l3', text: 'Gấu ngủ đông nhiều tháng không cần ăn' },
              right: { id: 'r3', text: 'Chất béo là kho năng lượng để dành' },
            },
            {
              left: { id: 'l4', text: 'Dầu ăn chảy lỏng, mỡ lợn đông đặc' },
              right: { id: 'r4', text: 'Chất béo có loại ở thể lỏng, có loại ở thể rắn' },
            },
          ],
          explanation:
            'Nổi hay chìm là do nặng nhẹ. Rửa không trôi là do không tan. Sống lâu không cần ăn là nhờ năng lượng đã cất sẵn trong lớp mỡ.',
          conceptIds: ['lipid'],
        },
        {
          id: 'u8-l4-e8',
          type: 'mcq',
          prompt:
            'Ở Unit 5 bạn đã biết sodium hydroxide NaOH (xút) là một kiềm dùng để nấu xà phòng. Thứ được đun cùng với nó chính là chất béo. Phân tử xà phòng có một đầu bám vào nước và một đầu bám vào dầu mỡ. Nhờ thế, xà phòng giúp gì khi rửa bát?',
          options: [
            { id: 'a', text: 'Kéo dầu mỡ lẫn vào nước để trôi đi' },
            { id: 'b', text: 'Biến dầu mỡ thành nước' },
            { id: 'c', text: 'Làm dầu mỡ nặng lên để chìm xuống' },
          ],
          correctOptionId: 'a',
          explanation:
            'Nước không kéo được dầu mỡ, nhưng xà phòng thì bám được cả hai. Các phân tử xà phòng vây quanh từng hạt mỡ nhỏ, đầu bám nước quay ra ngoài, nên hạt mỡ trôi đi theo nước. Dầu mỡ vẫn là dầu mỡ, không biến thành chất khác.',
          conceptIds: ['lipid'],
        },
        {
          id: 'u8-l4-e9',
          type: 'true-false',
          prompt:
            'Dầu đang cháy trong chảo thì không được đổ nước vào, vì nước chìm xuống dưới lớp dầu nóng, sôi bùng lên và hất dầu cháy ra xung quanh.',
          answer: true,
          explanation:
            'Nước nặng hơn dầu và không trộn với dầu, nên nó lọt xuống đáy chảo nóng rồi sôi bùng lên, làm dầu đang cháy bắn tung toé. Cách an toàn là tắt bếp, đậy kín vung để lửa hết oxygen, và gọi ngay người lớn. Chuyện này chỉ để biết mà tránh, tuyệt đối không thử.',
          conceptIds: ['lipid', 'combustion'],
        },
        {
          id: 'u8-l4-e10',
          type: 'order-steps',
          prompt:
            'Cơ thể cất năng lượng dư dưới dạng chất béo, kể cả khi phần dư ấy đến từ đường và tinh bột. Sắp xếp chuỗi sự việc dẫn tới thừa cân, béo phì',
          steps: [
            { id: 's1', text: 'Thức ăn đưa vào cơ thể đường, tinh bột và chất béo' },
            { id: 's2', text: 'Tế bào chỉ dùng một phần để lấy năng lượng cho hoạt động' },
            { id: 's3', text: 'Phần còn dư được chuyển thành chất béo' },
            { id: 's4', text: 'Chất béo dự trữ tích dần lại trong cơ thể qua nhiều tháng' },
          ],
          explanation:
            'Chất béo không phải thứ có hại: nó là kho dự trữ, là lớp đệm và là một phần của màng tế bào. Béo phì xuất hiện khi lượng cất vào nhiều hơn lượng lấy ra trong thời gian dài. Lúc cần, tế bào lại cho chất béo phản ứng với oxygen, cũng tạo thành carbon dioxide và nước.',
          conceptIds: ['lipid', 'respiration'],
        },
      ],
      baseXp: 10,
    },

    // ───────────────────────── Bài 5: Protein ─────────────────────────
    {
      id: 'u8-l5-proteins',
      title: 'Protein: chuỗi hạt muôn hình',
      intro: {
        title: 'Cốc sữa vón cục',
        story: [
          'Vắt vài giọt chanh vào cốc sữa. Sữa đang mịn bỗng lợn cợn rồi vón lại thành từng cục trắng. Đập quả trứng vào chảo nóng cũng thế: lòng trắng đang trong veo chuyển sang trắng đục và cứng lại.',
          'Cả hai chuyện đều do protein, còn gọi là chất đạm. Mỗi phân tử protein là một chuỗi dài, gồm từ vài chục tới hàng nghìn mắt xích nhỏ gọi là amino acid. Chuỗi ấy cuộn gấp lại thành một hình dạng riêng. Bấm kính lúp để thấy glycine, amino acid nhỏ nhất.',
          'Gặp nóng, hoặc gặp acid như trong nước chanh và giấm, chuỗi protein bung ra rồi dính chùm vào nhau thành khối. Hiện tượng này gọi là sự đông tụ. Trứng đã rán chín thì không trở lại thành trứng sống được nữa.',
          'Protein có nhiều trong thịt, cá, trứng, sữa và các loại đậu. Cơ thể cắt chúng thành từng amino acid, rồi nối lại thành protein của riêng mình. Cơ bắp, tóc, móng tay của bạn đều được dựng nên từ protein.',
        ],
        visual: { type: 'molecule', moleculeId: 'c2h5no2', scene: 'curdled-milk' },
      },
      exercises: [
        {
          id: 'u8-l5-e1',
          type: 'mcq',
          prompt: 'Mỗi phân tử protein là một chuỗi rất dài. Các mắt xích của chuỗi đó gọi là gì?',
          options: [
            { id: 'a', text: 'Glucose' },
            { id: 'b', text: 'Amino acid' },
            { id: 'c', text: 'Chất béo' },
          ],
          correctOptionId: 'b',
          explanation:
            'Protein là chuỗi các amino acid. Glucose là mắt xích của tinh bột và cellulose, không phải của protein.',
          conceptIds: ['protein'],
        },
        {
          id: 'u8-l5-e2',
          type: 'sort',
          prompt: 'Thực phẩm nào giàu protein, thực phẩm nào giàu tinh bột?',
          groups: [
            { id: 'protein', label: 'Giàu protein' },
            { id: 'starch', label: 'Giàu tinh bột' },
          ],
          items: [
            { id: 'i1', text: 'Trứng', image: 'frying-egg', groupId: 'protein' },
            { id: 'i2', text: 'Cơm', image: 'rice-bowl', groupId: 'starch' },
            { id: 'i3', text: 'Cá', groupId: 'protein' },
            { id: 'i4', text: 'Khoai tây', image: 'iodine-potato', groupId: 'starch' },
            { id: 'i5', text: 'Đậu phụ', groupId: 'protein' },
            { id: 'i6', text: 'Bánh mì', groupId: 'starch' },
            { id: 'i7', text: 'Thịt gà', groupId: 'protein' },
          ],
          explanation:
            'Thịt, cá, trứng, sữa và các loại đậu giàu protein. Cơm, khoai, bánh mì giàu tinh bột. Một bữa ăn thường có cả hai nhóm.',
          conceptIds: ['protein', 'carbohydrate'],
        },
        {
          id: 'u8-l5-e3',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Khi gặp ___ hoặc gặp acid, protein đông tụ: các chuỗi bung ra rồi ___ vào nhau thành khối.',
          blanks: [
            { accepted: ['nhiệt độ cao'], wordBank: ['nhiệt độ cao', 'bóng tối', 'đường kính'] },
            { accepted: ['dính chùm'], wordBank: ['dính chùm', 'tan đều', 'bay hơi'] },
          ],
          explanation:
            'Nóng và acid đều làm chuỗi protein mất hình dạng cuộn gấp ban đầu. Các chuỗi đã bung ra thì vướng và dính vào nhau, tạo thành khối đặc mà mắt thấy được. Base cũng làm protein đông tụ theo cách tương tự.',
          conceptIds: ['protein'],
        },
        {
          id: 'u8-l5-e4',
          type: 'sort',
          prompt: 'Protein trong mỗi món đông tụ vì gặp nóng hay vì gặp acid?',
          groups: [
            { id: 'heat', label: 'Vì gặp nóng' },
            { id: 'acid', label: 'Vì gặp acid' },
          ],
          items: [
            { id: 'i1', text: 'Lòng trắng trứng rán', image: 'frying-egg', groupId: 'heat' },
            { id: 'i2', text: 'Sữa vón cục khi vắt chanh', image: 'curdled-milk', groupId: 'acid' },
            { id: 'i3', text: 'Riêu cua nổi thành mảng khi nấu canh', groupId: 'heat' },
            {
              id: 'i4',
              text: 'Sữa đậu nành đông thành đậu phụ khi thêm nước chua',
              groupId: 'acid',
            },
            { id: 'i5', text: 'Miếng thịt luộc săn lại', groupId: 'heat' },
          ],
          explanation:
            'Trứng rán, canh cua, thịt luộc đều đông tụ nhờ nhiệt của bếp. Chanh và nước chua có acid, làm protein trong sữa và sữa đậu nành dính lại thành khối.',
          conceptIds: ['protein'],
        },
        {
          id: 'u8-l5-e5',
          type: 'true-false',
          prompt: 'Để nguội quả trứng luộc, lòng trắng sẽ trong veo trở lại như lúc còn sống.',
          visual: { id: 'v', image: 'frying-egg' },
          answer: false,
          explanation:
            'Protein đã đông tụ vì nóng thì không tự trở lại như cũ. Các chuỗi đã bung ra và dính vào nhau, nguội đi chúng vẫn dính như thế. Điều này khác với nước đá: đá tan rồi vẫn đông lại được.',
          conceptIds: ['protein'],
        },
        {
          id: 'u8-l5-e6',
          type: 'build-molecule',
          prompt:
            'Có khoảng 20 loại amino acid tạo nên protein. Ghép loại nhỏ nhất: glycine C₂H₅NO₂',
          targetMoleculeId: 'c2h5no2',
          availableAtoms: { C: 3, H: 6, N: 2, O: 3, Na: 1 },
          explanation:
            'Glycine có 2 carbon, 5 hydrogen, 1 nitrogen và 2 oxygen. Chữ N là nitrogen, đừng nhầm với Na là sodium. Các amino acid khác cũng có khung như vậy, chỉ gắn thêm những nhánh khác nhau.',
          conceptIds: ['protein', 'formula'],
        },
        {
          id: 'u8-l5-e7',
          type: 'mcq',
          prompt:
            'Glucose là C₆H₁₂O₆, glycine là C₂H₅NO₂. Nguyên tố nào có trong amino acid mà không có trong glucose?',
          visual: { id: 'v', moleculeId: 'c2h5no2' },
          options: [
            { id: 'a', text: 'Oxygen' },
            { id: 'b', text: 'Sodium' },
            { id: 'c', text: 'Nitrogen' },
          ],
          correctOptionId: 'c',
          explanation:
            'Đường, tinh bột và chất béo chỉ gồm C, H, O. Amino acid có thêm nitrogen. Vì thế cây cần phân đạm, loại phân cung cấp nitrogen, để làm ra protein.',
          conceptIds: ['protein', 'formula'],
        },
        {
          id: 'u8-l5-e8',
          type: 'mcq',
          prompt:
            'Bạn ăn một miếng cá. Protein của cá có được đưa nguyên vẹn vào cơ bắp của bạn không?',
          options: [
            { id: 'a', text: 'Có. Protein của cá đi thẳng vào cơ bắp và nằm nguyên ở đó' },
            { id: 'b', text: 'Không. Cơ thể cắt nó thành amino acid rồi nối lại theo cách riêng' },
            { id: 'c', text: 'Không. Protein của cá bị thải ra hết, cơ thể không dùng được' },
          ],
          correctOptionId: 'b',
          explanation:
            'Giống tinh bột, chuỗi protein quá lớn để thấm vào máu. Enzyme cắt nó thành từng amino acid. Tế bào của bạn nhận các amino acid ấy rồi xếp lại theo thứ tự riêng, tạo ra protein của người chứ không phải của cá.',
          conceptIds: ['protein'],
        },
        {
          id: 'u8-l5-e9',
          type: 'match-pairs',
          prompt: 'Nối mỗi chất với mô tả đúng về nó',
          pairs: [
            {
              left: { id: 'l1', text: 'Tinh bột' },
              right: { id: 'r1', text: 'Chuỗi glucose, gặp iodine chuyển màu xanh tím' },
            },
            {
              left: { id: 'l2', text: 'Cellulose' },
              right: { id: 'r2', text: 'Chuỗi glucose tạo nên sợi bông và gỗ' },
            },
            {
              left: { id: 'l3', text: 'Protein' },
              right: { id: 'r3', text: 'Chuỗi amino acid, đông tụ khi gặp nóng hoặc acid' },
            },
            {
              left: { id: 'l4', text: 'Chất béo' },
              right: { id: 'r4', text: 'Không tan trong nước, là kho năng lượng để dành' },
            },
          ],
          explanation:
            'Tinh bột, cellulose và protein đều là những chuỗi dài, tức là polymer do sinh vật tạo ra, chỉ khác loại mắt xích và cách nối. Chất béo thì nổi bật ở chỗ không tan trong nước.',
          conceptIds: ['protein', 'carbohydrate', 'lipid'],
        },
        {
          id: 'u8-l5-e10',
          type: 'mcq',
          prompt:
            'Tơ do con tằm nhả ra, len là lông cừu: cả hai đều do cơ thể động vật tạo ra, giống như tóc của bạn. Còn sợi bông thì mọc trên cây bông. Vậy áo lụa tơ tằm và áo sợi bông khác nhau thế nào?',
          options: [
            { id: 'a', text: 'Tơ tằm là protein, sợi bông là cellulose' },
            { id: 'b', text: 'Tơ tằm là cellulose, sợi bông là protein' },
            { id: 'c', text: 'Cả hai loại sợi đều là cellulose' },
          ],
          correctOptionId: 'a',
          explanation:
            'Tóc, lông, móng và tơ của động vật đều là protein. Sợi của cây như bông, đay, lanh là cellulose. Hai chiếc áo đều dệt từ sợi tự nhiên, nhưng là hai loại chuỗi khác hẳn nhau.',
          conceptIds: ['protein', 'carbohydrate'],
        },
      ],
      unlocksMolecules: ['c2h5no2'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 6: Nước và khoáng chất ─────────────────────────
    {
      id: 'u8-l6-water-minerals',
      title: 'Nước và khoáng chất',
      intro: {
        title: 'Vệt trắng trên áo sau trận bóng',
        story: [
          'Đá bóng xong, áo bạn ướt đẫm mồ hôi. Giọt mồ hôi lăn qua môi có vị mằn mặn. Chiếc áo phơi khô còn để lại những vệt trắng loang lổ.',
          'Khoảng 60% khối lượng cơ thể bạn là nước. Máu, mồ hôi, nước mắt phần lớn đều là nước, trong đó hoà tan các ion bạn từng gặp ở muối ăn là Na⁺ và Cl⁻, cùng với ion K⁺ của potassium (kali). Mồ hôi bay hơi thì nước đi mất, còn muối ở lại thành vệt trắng.',
          'Các ion này giúp dây thần kinh truyền tín hiệu và giúp cơ co lại. Nước điện giải là nước hoà tan sẵn những ion ấy. Bấm kính lúp để thấy potassium chloride KCl, một loại muối hay có trong nước điện giải, lúc còn là hạt khô. Tan vào nước, ion K⁺ và ion Cl⁻ rời nhau ra và trôi tự do.',
          'Cơ thể chỉ cần một lượng nhỏ sodium, potassium và vài nguyên tố khác, nhưng thiếu thì không được. Chúng được gọi là khoáng chất. Calcium (canxi) làm xương và răng cứng chắc. Iron (sắt) nằm trong máu, giúp chở oxygen đi khắp cơ thể. Iodine (iốt) cần cho tuyến giáp ở cổ, nên người ta thêm một lượng rất nhỏ vào muối iốt.',
        ],
        visual: { type: 'molecule', moleculeId: 'kcl', scene: 'sports-drink' },
      },
      exercises: [
        {
          id: 'u8-l6-e1',
          type: 'mcq',
          prompt: 'Chất nào chiếm khoảng 60% khối lượng cơ thể bạn?',
          options: [
            { id: 'a', text: 'Protein' },
            { id: 'b', moleculeId: 'h2o', text: 'Nước' },
            { id: 'c', text: 'Chất béo' },
          ],
          correctOptionId: 'b',
          explanation:
            'Hơn một nửa cơ thể bạn là nước. Nước là dung môi: glucose, các ion và nhiều chất khác tan trong nước để theo máu đi tới từng tế bào.',
          conceptIds: ['minerals', 'solution'],
        },
        {
          id: 'u8-l6-e2',
          type: 'match-pairs',
          prompt: 'Nối mỗi khoáng chất với việc nó làm trong cơ thể',
          pairs: [
            {
              left: { id: 'l1', text: 'Calcium' },
              right: { id: 'r1', text: 'Làm xương và răng cứng chắc' },
            },
            {
              left: { id: 'l2', text: 'Iron (sắt)' },
              right: { id: 'r2', text: 'Ở trong máu, giúp chở oxygen' },
            },
            {
              left: { id: 'l3', text: 'Iodine' },
              right: { id: 'r3', text: 'Cần cho tuyến giáp ở cổ' },
            },
            {
              left: { id: 'l4', text: 'Sodium và potassium' },
              right: { id: 'r4', text: 'Giúp thần kinh truyền tín hiệu và cơ co' },
            },
          ],
          explanation:
            'Mỗi khoáng chất có việc riêng. Calcium ở xương và răng, iron ở máu, iodine ở tuyến giáp, còn ion sodium và ion potassium có mặt trong mọi dịch của cơ thể.',
          conceptIds: ['minerals', 'element'],
        },
        {
          id: 'u8-l6-e3',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template: 'Mồ hôi mặn vì có hoà tan ion ___ và ion Cl⁻, giống như trong ___.',
          blanks: [
            { accepted: ['Na⁺', 'Na+'], wordBank: ['Na⁺', 'Na⁻', 'N⁺'] },
            { accepted: ['muối ăn'], wordBank: ['muối ăn', 'đường kính', 'dầu ăn'] },
          ],
          explanation:
            'Muối ăn là sodium chloride, gồm ion Na⁺ và ion Cl⁻. Nguyên tử sodium cho đi 1 electron nên mang điện dương, viết là Na⁺. Kí hiệu của sodium là Na, còn N là nitrogen.',
          conceptIds: ['minerals', 'ion'],
        },
        {
          id: 'u8-l6-e4',
          type: 'true-false',
          prompt: 'Khi mồ hôi trên áo bay hơi, muối cũng bay hơi theo nước.',
          answer: false,
          explanation:
            'Chỉ các phân tử nước rời khỏi vải và bay vào không khí. Các ion của muối không bay hơi ở nhiệt độ thường, nên chúng ở lại và xếp thành những hạt muối nhỏ: đó là vệt trắng trên áo.',
          conceptIds: ['minerals', 'state-change', 'solution'],
        },
        {
          id: 'u8-l6-e5',
          type: 'build-molecule',
          prompt:
            'Potassium chloride KCl là một loại muối hay có trong nước điện giải. Ghép một cặp ion của nó',
          targetMoleculeId: 'kcl',
          availableAtoms: { K: 2, Cl: 2, Na: 1, C: 1 },
          explanation:
            'KCl gồm 1 potassium và 1 chlorine. Giống sodium, nguyên tử potassium cho đi 1 electron thành ion K⁺, còn chlorine nhận vào thành ion Cl⁻. Kí hiệu K lấy từ tên Latinh "kalium".',
          conceptIds: ['minerals', 'ionic-bond', 'formula'],
        },
        {
          id: 'u8-l6-e6',
          type: 'mcq',
          prompt:
            'Thả muối ăn vào nước, các ion Na⁺ và Cl⁻ rời nhau ra và trôi tự do. Dung dịch có ion trôi tự do như vậy gọi là dung dịch điện giải. Thứ nào dưới đây là dung dịch điện giải?',
          options: [
            { id: 'a', text: 'Nước đường', image: 'sugar-tea' },
            { id: 'b', text: 'Nước muối', image: 'salt-shaker' },
            { id: 'c', text: 'Dầu ăn', image: 'oil-on-water' },
          ],
          correctOptionId: 'b',
          explanation:
            'Muối tan thành các ion mang điện nên nước muối là dung dịch điện giải. Đường tan thành từng phân tử nguyên vẹn, không mang điện. Dầu ăn thì không có ion nào.',
          conceptIds: ['minerals', 'ion', 'solution'],
        },
        {
          id: 'u8-l6-e7',
          type: 'mcq',
          prompt:
            'Cùng một nguyên tố có thể ở dạng kim loại, như sắt trong cây đinh, hoặc ở dạng ion trong hợp chất, như Na⁺ trong muối ăn. Iron (sắt) trong máu của bạn ở dạng nào?',
          options: [
            { id: 'a', text: 'Những mẩu kim loại sắt li ti trôi theo dòng máu' },
            { id: 'b', text: 'Những hạt gỉ sắt nhỏ bám trên thành mạch máu' },
            { id: 'c', text: 'Ion sắt gắn trong một loại protein của máu' },
          ],
          correctOptionId: 'c',
          explanation:
            'Trong máu, mỗi ion sắt nằm giữa một phân tử protein và giữ lấy oxygen để chở đi. Đó vẫn là nguyên tố iron nhưng không phải kim loại sắt, nên nam châm không hút được máu. Calcium trong xương cũng vậy: nó nằm trong hợp chất chứ không phải những mẩu kim loại calcium.',
          conceptIds: ['minerals', 'element', 'ion'],
        },
        {
          id: 'u8-l6-e8',
          type: 'true-false',
          prompt:
            'Iodine trong muối iốt nằm trong một hợp chất chứ không phải đơn chất iodine, nên rắc muối iốt lên lát khoai tây thì khoai không chuyển màu xanh tím.',
          visual: { id: 'v', image: 'iodine-potato' },
          answer: true,
          explanation:
            'Chỉ đơn chất iodine trong dung dịch thử mới tạo màu xanh tím với tinh bột. Trong muối iốt, nguyên tố iodine đã liên kết với nguyên tố khác thành hợp chất, và hợp chất có tính chất khác hẳn đơn chất. Lượng thêm vào cũng rất nhỏ.',
          conceptIds: ['minerals', 'compound', 'elemental-substance'],
        },
        {
          id: 'u8-l6-e9',
          type: 'order-steps',
          prompt:
            'Mồ hôi làm mát cơ thể: khi bay hơi, nước mang nhiệt đi theo. Sắp xếp các việc xảy ra trong một trận bóng theo thứ tự',
          steps: [
            { id: 's1', text: 'Tế bào cơ hô hấp mạnh hơn, cơ thể nóng lên' },
            { id: 's2', text: 'Mồ hôi tiết ra, thấm ướt áo' },
            { id: 's3', text: 'Nước trong mồ hôi bay hơi, mang bớt nhiệt đi' },
            { id: 's4', text: 'Muối không bay hơi, ở lại trên vải thành vệt trắng' },
          ],
          explanation:
            'Vận động làm tế bào cần nhiều năng lượng hơn nên hô hấp tế bào mạnh lên và toả nhiều nhiệt. Mồ hôi mang nhiệt đi khi bay hơi, nhưng cũng lấy theo nước và các ion của cơ thể.',
          conceptIds: ['minerals', 'respiration', 'state-change'],
        },
        {
          id: 'u8-l6-e10',
          type: 'mcq',
          prompt:
            'Một gói bột pha nước bù điện giải ghi thành phần có glucose, sodium chloride và potassium chloride. Pha vào nước, gói này đưa vào cốc những ion nào?',
          visual: { id: 'v', image: 'sports-drink' },
          options: [
            { id: 'a', text: 'Na⁺, K⁺ và Cl⁻' },
            { id: 'b', text: 'Chỉ có Na⁺ và Cl⁻' },
            { id: 'c', text: 'Na⁺, K⁺, Cl⁻ và ion glucose' },
          ],
          correctOptionId: 'a',
          explanation:
            'Sodium chloride tách thành Na⁺ và Cl⁻, potassium chloride tách thành K⁺ và Cl⁻, nên trong cốc có cả ba loại ion. Glucose thì tan thành từng phân tử nguyên vẹn, không mang điện, nên không có ion glucose nào.',
          conceptIds: ['minerals', 'ion', 'solution'],
        },
      ],
      unlocksMolecules: ['kcl'],
      baseXp: 10,
    },

    // ───────────────────────── Checkpoint ─────────────────────────
    {
      id: 'u8-checkpoint',
      title: 'Kiểm tra Unit 8',
      kind: 'checkpoint',
      exercises: [
        {
          id: 'u8-cp-e1',
          type: 'balance-reaction',
          reactionId: 'cellular-respiration',
          prompt: 'Cân bằng phương trình của hô hấp tế bào',
          explanation:
            '6 C cần 6 CO₂, 12 H cần 6 H₂O. Vế phải có 18 O, trong đó glucose đã góp 6 O, còn 12 O là 6 O₂. Kết quả: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O.',
          conceptIds: ['balancing', 'respiration'],
        },
        {
          id: 'u8-cp-e2',
          type: 'sort',
          prompt: 'Mỗi thực phẩm nổi bật về nhóm chất nào?',
          groups: [
            { id: 'carb', label: 'Carbohydrate (chất bột đường)' },
            { id: 'fat', label: 'Chất béo' },
            { id: 'protein', label: 'Protein' },
          ],
          items: [
            { id: 'i1', text: 'Cơm trắng', image: 'rice-bowl', groupId: 'carb' },
            { id: 'i2', text: 'Dầu ăn', image: 'oil-on-water', groupId: 'fat' },
            { id: 'i3', text: 'Trứng', image: 'frying-egg', groupId: 'protein' },
            { id: 'i4', text: 'Nước mía', image: 'fruit-plate', groupId: 'carb' },
            { id: 'i5', text: 'Mỡ lợn', groupId: 'fat' },
            { id: 'i6', text: 'Đậu phụ', groupId: 'protein' },
          ],
          explanation:
            'Cơm giàu tinh bột, nước mía giàu saccharose: cả hai đều là carbohydrate. Dầu và mỡ là chất béo. Trứng và đậu phụ giàu protein.',
          conceptIds: ['carbohydrate', 'lipid', 'protein'],
        },
        {
          id: 'u8-cp-e3',
          type: 'mcq',
          prompt:
            'Trong giờ thực hành, cô giáo nhỏ dung dịch iodine lên một lát chuối xanh và thấy chỗ đó chuyển màu xanh tím. Lát chuối xanh có chứa chất gì?',
          options: [
            { id: 'a', text: 'Tinh bột' },
            { id: 'b', text: 'Protein' },
            { id: 'c', text: 'Chất béo' },
          ],
          correctOptionId: 'a',
          explanation:
            'Màu xanh tím với iodine là dấu hiệu của tinh bột. Chuối xanh chứa nhiều tinh bột. Khi chuối chín, phần lớn tinh bột được cắt thành đường nên chuối ngọt dần.',
          conceptIds: ['carbohydrate', 'reaction-signs'],
        },
        {
          id: 'u8-cp-e4',
          type: 'true-false',
          prompt:
            'Carbon trong khí carbon dioxide bạn thở ra đến từ khí oxygen bạn hít vào chứ không đến từ thức ăn.',
          answer: false,
          explanation:
            'Khí oxygen O₂ không có nguyên tử carbon nào. Carbon bạn thở ra đến từ glucose và các chất khác trong thức ăn, sau khi tế bào cho chúng phản ứng với oxygen.',
          conceptIds: ['respiration', 'conservation-of-mass'],
        },
        {
          id: 'u8-cp-e5',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Tinh bột là chuỗi dài gồm các mắt xích ___. Protein là chuỗi dài gồm các mắt xích ___.',
          blanks: [
            { accepted: ['glucose'], wordBank: ['glucose', 'amino acid', 'chất béo'] },
            { accepted: ['amino acid'], wordBank: ['glucose', 'amino acid', 'chất béo'] },
          ],
          explanation:
            'Cả hai đều là chuỗi dài, chỉ khác loại mắt xích. Khi tiêu hoá, enzyme cắt tinh bột về glucose và cắt protein về amino acid.',
          conceptIds: ['carbohydrate', 'protein'],
        },
        {
          id: 'u8-cp-e6',
          type: 'mcq',
          prompt:
            'Nồi nước hầm xương để qua đêm trong tủ lạnh. Sáng ra có một lớp mỡ trắng đông cứng trên mặt nước. Vì sao mỡ nằm ở trên?',
          options: [
            { id: 'a', text: 'Vì mỡ tan trong nước rồi kết tinh lại' },
            { id: 'b', text: 'Vì mỡ bay hơi rồi ngưng tụ trên mặt nước' },
            { id: 'c', text: 'Vì mỡ không tan trong nước và nhẹ hơn nước' },
          ],
          correctOptionId: 'c',
          explanation:
            'Chất béo không tan nên tách riêng khỏi nước, và nhẹ hơn nước nên nổi lên trên. Gặp lạnh, lớp mỡ ấy đông đặc lại thành mảng trắng.',
          conceptIds: ['lipid'],
        },
        {
          id: 'u8-cp-e7',
          type: 'match-pairs',
          prompt: 'Nối mỗi hiện tượng với lời giải thích',
          pairs: [
            {
              left: { id: 'l1', text: 'Miếng cá ngâm nước cốt chanh chuyển sang trắng đục' },
              right: { id: 'r1', text: 'Protein đông tụ khi gặp acid' },
            },
            {
              left: { id: 'l2', text: 'Bánh mì nhai lâu thấy ngọt' },
              right: { id: 'r2', text: 'Enzyme cắt tinh bột thành đường nhỏ' },
            },
            {
              left: { id: 'l3', text: 'Tắm biển xong, da khô để lại lớp bụi trắng' },
              right: { id: 'r3', text: 'Nước bay hơi, muối ở lại' },
            },
            {
              left: { id: 'l4', text: 'Thở vào tấm kính lạnh, kính mờ đi' },
              right: { id: 'r4', text: 'Hơi nước trong hơi thở ngưng tụ' },
            },
          ],
          explanation:
            'Nước chanh có acid nên làm protein của cá đông tụ dù không đun. Bánh mì giàu tinh bột như cơm. Nước biển khô đi thì muối ở lại như mồ hôi trên áo. Hơi thở luôn có hơi nước, gặp lạnh thì đọng thành giọt.',
          conceptIds: ['protein', 'carbohydrate', 'minerals', 'respiration'],
        },
        {
          id: 'u8-cp-e8',
          type: 'balance-reaction',
          reactionId: 'photosynthesis',
          prompt: 'Cân bằng phương trình của quang hợp',
          explanation:
            'Glucose có 6 C và 12 H nên cần 6 CO₂ và 6 H₂O. Vế trái có 18 O, glucose giữ 6 O, còn 12 O là 6 O₂. Kết quả: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.',
          conceptIds: ['balancing', 'photosynthesis'],
        },
        {
          id: 'u8-cp-e9',
          type: 'mcq',
          prompt:
            'Một cây con trồng trong chậu. Năm năm sau cây nặng thêm hàng chục kilôgam, còn đất trong chậu gần như không hụt đi. Khối lượng tăng thêm của cây chủ yếu đến từ đâu?',
          options: [
            { id: 'a', text: 'Carbon dioxide trong không khí và nước tưới' },
            { id: 'b', text: 'Đất trong chậu' },
            { id: 'c', text: 'Ánh sáng mặt trời' },
          ],
          correctOptionId: 'a',
          explanation:
            'Cây quang hợp, ghép carbon dioxide và nước thành glucose, rồi nối glucose thành cellulose và tinh bột để xây thân. Đất hầu như không hụt vì nó chỉ góp một ít khoáng chất. Ánh sáng cho năng lượng chứ không cho nguyên tử.',
          conceptIds: ['photosynthesis', 'conservation-of-mass'],
        },
        {
          id: 'u8-cp-e10',
          type: 'true-false',
          prompt: 'Chất béo là thứ có hại, cơ thể không cần tới nó.',
          answer: false,
          explanation:
            'Cơ thể cần chất béo: nó là kho năng lượng để dành, và lipid góp phần tạo nên màng của mọi tế bào. Thừa cân chỉ xuất hiện khi lượng cất vào nhiều hơn lượng dùng trong thời gian dài.',
          conceptIds: ['lipid'],
        },
        {
          id: 'u8-cp-e11',
          type: 'order-steps',
          prompt:
            'Một nguyên tử carbon đi từ không khí vào cơ thể bạn rồi quay lại không khí. Sắp xếp hành trình của nó',
          steps: [
            { id: 's1', text: 'Nguyên tử carbon nằm trong một phân tử CO₂ của không khí' },
            { id: 's2', text: 'Lá lúa quang hợp, đưa nó vào một phân tử glucose' },
            { id: 's3', text: 'Cây lúa nối glucose thành tinh bột, cất trong hạt gạo' },
            { id: 's4', text: 'Bạn ăn cơm, enzyme cắt tinh bột trở lại thành glucose' },
            { id: 's5', text: 'Tế bào của bạn hô hấp, đưa nó vào một phân tử CO₂ mới' },
            { id: 's6', text: 'Bạn thở ra, phân tử CO₂ ấy bay vào không khí' },
          ],
          explanation:
            'Quang hợp và hô hấp tế bào là hai nửa của một vòng tròn. Nguyên tử carbon không mất đi, nó chỉ chuyển từ chất này sang chất khác: carbon dioxide, glucose, tinh bột, rồi lại carbon dioxide.',
          conceptIds: ['photosynthesis', 'respiration', 'conservation-of-mass'],
        },
        {
          id: 'u8-cp-e12',
          type: 'mcq',
          prompt:
            'Chai nước điện giải ghi thành phần có sodium chloride và potassium chloride. Trong chai nước, hai chất này ở dạng nào?',
          visual: { id: 'v', image: 'sports-drink' },
          options: [
            { id: 'a', text: 'Những hạt muối nhỏ chưa tan, lơ lửng trong nước' },
            { id: 'b', text: 'Các ion Na⁺, K⁺, Cl⁻ trôi tự do giữa các phân tử nước' },
            { id: 'c', text: 'Các nguyên tử kim loại sodium và potassium tách riêng ra' },
          ],
          correctOptionId: 'b',
          explanation:
            'Khi tan, hai loại muối này tách thành các ion và trôi tự do trong nước, nên nước vẫn trong suốt. Đó là các ion Na⁺ và K⁺ chứ không phải kim loại sodium hay potassium.',
          conceptIds: ['minerals', 'ion', 'solution'],
        },
      ],
      baseXp: 20,
    },
  ],
}
