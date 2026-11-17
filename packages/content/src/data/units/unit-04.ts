import type { UnitInput } from '../../schema/lesson.js'

/**
 * Unit 4: Phản ứng hoá học đầu tiên
 * 5 bài học + checkpoint: chất tham gia và sản phẩm, dấu hiệu phản ứng,
 * bảo toàn khối lượng, hệ số và cân bằng phương trình, phản ứng quanh ta.
 *
 * Thuật ngữ: dùng "chất tham gia" (lần đầu ghi thêm "còn gọi là chất phản ứng").
 * Thứ tự bài tập trong mảng là thứ tự người học gặp. Ở Bài 4 và Bài 5, thứ tự này
 * không trùng thứ tự số trong id: id cũ được giữ nguyên khi chèn thêm bậc thang.
 */
export const unit04: UnitInput = {
  id: 'u4-reactions',
  order: 4,
  title: 'Phản ứng hoá học đầu tiên',
  tagline: 'Chất mới sinh ra, nguyên tử vẫn còn đủ',
  color: '#CE82FF',
  lessons: [
    // ───────────────────────── Bài 1: Phản ứng là gì ─────────────────────────
    {
      id: 'u4-l1-what-is-a-reaction',
      title: 'Chất cũ đi, chất mới đến',
      intro: {
        title: 'Cây đinh đổi màu',
        story: [
          'Cây đinh sắt sáng bóng để quên ngoài mưa. Vài tuần sau, nó phủ một lớp nâu đỏ, sần sùi và dễ bong.',
          'Lớp gỉ ấy không phải là sắt bị bẩn. Các nguyên tử iron (sắt) đã kết hợp với oxygen trong không khí ẩm thành một chất mới: iron(III) oxide.',
          'Quá trình chất này biến thành chất khác gọi là phản ứng hoá học. Chất có lúc đầu là chất tham gia (còn gọi là chất phản ứng). Chất mới sinh ra là sản phẩm. Viết gọn: iron + oxygen → iron(III) oxide. Mũi tên đọc là "tạo thành".',
          'Trong phản ứng, nguyên tử không biến mất và cũng không tự sinh ra. Liên kết cũ đứt, các nguyên tử sắp xếp lại rồi nối với nhau thành chất mới. Còn mấy con số đứng trước công thức trong hình thì Bài 4 sẽ nói kĩ.',
        ],
        visual: { type: 'reaction', reactionId: 'rusting' },
      },
      exercises: [
        {
          id: 'u4-l1-e1',
          type: 'mcq',
          prompt: 'Trong một phản ứng hoá học, chất mới được tạo ra gọi là gì?',
          options: [
            { id: 'a', text: 'Sản phẩm' },
            { id: 'b', text: 'Chất tham gia' },
            { id: 'c', text: 'Dung môi' },
          ],
          correctOptionId: 'a',
          explanation:
            'Chất có lúc đầu là chất tham gia. Chất mới sinh ra sau phản ứng là sản phẩm. Còn dung môi là chất dùng để hoà tan chất khác, như nước trong cốc trà đường ở Unit 3.',
          conceptIds: ['reactants-products', 'reaction'],
        },
        {
          id: 'u4-l1-e2',
          type: 'sort',
          prompt:
            'Bếp biogas cháy: methane và oxygen biến thành carbon dioxide và nước. Xếp mỗi chất vào đúng nhóm',
          groups: [
            { id: 'reactant', label: 'Chất tham gia' },
            { id: 'product', label: 'Sản phẩm' },
          ],
          items: [
            { id: 'i1', moleculeId: 'co2', text: 'Carbon dioxide', groupId: 'product' },
            { id: 'i2', moleculeId: 'ch4', text: 'Methane', groupId: 'reactant' },
            { id: 'i3', moleculeId: 'h2o', text: 'Nước', groupId: 'product' },
            { id: 'i4', moleculeId: 'o2', text: 'Oxygen', groupId: 'reactant' },
          ],
          explanation:
            'Methane và oxygen có từ đầu nên là chất tham gia. Carbon dioxide và nước sinh ra sau khi cháy nên là sản phẩm.',
          conceptIds: ['reactants-products'],
        },
        {
          id: 'u4-l1-e3',
          type: 'mcq',
          prompt: 'Khi cây đinh sắt bị gỉ, chất nào là sản phẩm?',
          visual: { id: 'v', image: 'rusty-nail' },
          options: [
            { id: 'a', moleculeId: 'fe', text: 'Iron (sắt)' },
            { id: 'b', moleculeId: 'o2', text: 'Oxygen' },
            { id: 'c', moleculeId: 'fe2o3', text: 'Iron(III) oxide' },
          ],
          correctOptionId: 'c',
          explanation:
            'Iron (sắt) và oxygen là hai chất tham gia. Chúng kết hợp thành iron(III) oxide, tức gỉ sắt. Gỉ là chất mới sinh ra nên nó là sản phẩm.',
          conceptIds: ['reactants-products', 'oxidation'],
        },
        {
          id: 'u4-l1-e4',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Iron (sắt) + oxygen → iron(III) oxide (gỉ sắt). Các chất đứng trước mũi tên là ___, chất đứng sau mũi tên là ___.',
          blanks: [
            { accepted: ['chất tham gia'], wordBank: ['chất tham gia', 'sản phẩm', 'dung môi'] },
            { accepted: ['sản phẩm'], wordBank: ['chất tham gia', 'sản phẩm', 'dung môi'] },
          ],
          explanation:
            'Mũi tên đọc là "tạo thành". Chất tham gia viết bên trái mũi tên, sản phẩm viết bên phải. Cách viết bằng tên chất như thế này gọi là sơ đồ phản ứng dạng chữ.',
          conceptIds: ['reactants-products', 'chemical-equation'],
        },
        {
          id: 'u4-l1-e5',
          type: 'true-false',
          prompt:
            'Trong phản ứng hoá học, các nguyên tử cũ bị phá huỷ và nguyên tử mới được tạo ra.',
          answer: false,
          explanation:
            'Nguyên tử không mất đi và cũng không sinh thêm. Chỉ liên kết giữa chúng đứt ra rồi nối lại theo cách khác, tạo thành chất mới. Trong lớp gỉ vẫn là những nguyên tử iron (sắt) của cây đinh ngày nào.',
          conceptIds: ['reaction', 'conservation-of-mass'],
        },
        {
          id: 'u4-l1-e6',
          type: 'order-steps',
          prompt:
            'Methane cháy trên bếp biogas. Chuyện gì xảy ra với các nguyên tử? Sắp xếp theo thứ tự',
          steps: [
            { id: 's1', text: 'Phân tử methane và phân tử oxygen va vào nhau' },
            { id: 's2', text: 'Các liên kết cũ đứt ra' },
            { id: 's3', text: 'Các nguyên tử sắp xếp lại' },
            { id: 's4', text: 'Liên kết mới hình thành, tạo ra carbon dioxide và nước' },
          ],
          explanation:
            'Ở mức này, bạn có thể hình dung phản ứng nào cũng theo một kịch bản: liên kết cũ đứt, nguyên tử sắp xếp lại, liên kết mới hình thành.',
          conceptIds: ['reaction'],
        },
        {
          id: 'u4-l1-e7',
          type: 'match-pairs',
          prompt:
            'Nối chất tham gia với sản phẩm. Gợi ý: sản phẩm chỉ chứa những nguyên tố có trong chất tham gia',
          pairs: [
            {
              left: { id: 'l1', text: 'Iron (sắt) + oxygen' },
              right: { id: 'r1', text: 'Iron(III) oxide' },
            },
            { left: { id: 'l2', text: 'Hydrogen + oxygen' }, right: { id: 'r2', text: 'Nước' } },
            {
              left: { id: 'l3', text: 'Methane (CH₄) + oxygen' },
              right: { id: 'r3', text: 'Carbon dioxide + nước' },
            },
            {
              left: { id: 'l4', text: 'Carbon + oxygen' },
              right: { id: 'r4', text: 'Carbon dioxide' },
            },
          ],
          explanation:
            'Sản phẩm chỉ chứa những nguyên tố đã có trong chất tham gia. Carbon cháy không thể sinh ra nước vì không có hydrogen. Methane CH₄ có cả carbon lẫn hydrogen nên sinh ra cả carbon dioxide lẫn nước.',
          conceptIds: ['reactants-products', 'reaction'],
        },
        {
          id: 'u4-l1-e8',
          type: 'build-molecule',
          prompt: 'Ghép iron(III) oxide Fe₂O₃, chất tạo nên gỉ sắt',
          targetMoleculeId: 'fe2o3',
          availableAtoms: { Fe: 3, O: 4, H: 2 },
          explanation:
            'Fe₂O₃ gồm 2 nguyên tử iron (sắt) và 3 nguyên tử oxygen. Oxygen đó lấy từ không khí, nên gỉ là một chất khác hẳn sắt.',
          conceptIds: ['formula', 'oxidation'],
        },
        {
          id: 'u4-l1-e9',
          type: 'true-false',
          prompt: 'Nước đá tan chảy thành nước lỏng là một phản ứng hoá học.',
          visual: { id: 'v', image: 'ice-cubes' },
          answer: false,
          explanation:
            'Trước và sau đều là H₂O, không có chất mới. Đó là biến đổi vật lí. Phản ứng hoá học chính là biến đổi hoá học bạn gặp ở Unit 3: phải có chất mới sinh ra.',
          conceptIds: ['reaction', 'physical-change'],
        },
        {
          id: 'u4-l1-e10',
          type: 'mcq',
          prompt:
            'Hydrogen peroxide (oxy già) chạm vào vết xước thì tách thành nước và khí oxygen. Phản ứng này có mấy chất tham gia?',
          visual: { id: 'v', image: 'hydrogen-peroxide' },
          options: [
            { id: 'a', text: '1' },
            { id: 'b', text: '2' },
            { id: 'c', text: '3' },
          ],
          correctOptionId: 'a',
          explanation:
            'Chỉ có một chất tham gia là hydrogen peroxide. Nước và khí oxygen là hai sản phẩm. Phản ứng không nhất thiết phải có hai chất gặp nhau: một chất cũng có thể tách ra thành các chất mới.',
          conceptIds: ['reactants-products'],
        },
      ],
      unlocksMolecules: ['fe2o3'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 2: Dấu hiệu phản ứng ─────────────────────────
    {
      id: 'u4-l2-signs',
      title: 'Dấu hiệu nhận biết phản ứng',
      intro: {
        title: 'Núi lửa trong bếp',
        story: [
          'Đổ giấm vào một cốc có vài thìa baking soda. Bọt trắng sủi lên ùn ùn rồi trào ra ngoài như núi lửa phun.',
          'Bọt đó chứa khí carbon dioxide, một chất mới vừa sinh ra. Baking soda, tên hoá học là sodium hydrogencarbonate (NaHCO₃), đã phản ứng với acetic acid (CH₃COOH) trong giấm.',
          'Mắt ta không thấy được nguyên tử, nhưng thấy được dấu hiệu của phản ứng: có khí thoát ra làm sủi bọt, đổi màu, toả nhiệt hay phát sáng, hoặc xuất hiện kết tủa. Kết tủa là chất rắn không tan vừa sinh ra trong chất lỏng, làm chất lỏng đang trong hoá đục.',
          'Dấu hiệu chỉ là gợi ý. Nước sôi cũng sủi bọt mà đâu có chất mới, còn nhiều phản ứng lại diễn ra lặng lẽ, mắt chẳng thấy gì. Câu hỏi quyết định vẫn là: có chất mới sinh ra hay không?',
        ],
        visual: { type: 'reaction', reactionId: 'baking-soda-vinegar' },
      },
      exercises: [
        {
          id: 'u4-l2-e1',
          type: 'mcq',
          prompt: 'Trong "núi lửa" giấm và baking soda, dấu hiệu nào cho thấy có phản ứng?',
          visual: { id: 'v', image: 'vinegar-volcano' },
          options: [
            { id: 'a', text: 'Sủi bọt khí' },
            { id: 'b', text: 'Phát sáng' },
            { id: 'c', text: 'Xuất hiện ngọn lửa' },
          ],
          correctOptionId: 'a',
          explanation:
            'Giấm và baking soda đều không phải chất khí, vậy mà khi trộn lại sủi bọt. Khí carbon dioxide trong bọt là chất mới sinh ra từ phản ứng.',
          conceptIds: ['reaction-signs'],
        },
        {
          id: 'u4-l2-e2',
          type: 'match-pairs',
          prompt: 'Nối mỗi phản ứng với dấu hiệu dễ thấy nhất',
          pairs: [
            {
              left: { id: 'l1', text: 'Đinh sắt bị gỉ', image: 'rusty-nail' },
              right: { id: 'r1', text: 'Đổi màu' },
            },
            {
              left: { id: 'l2', text: 'Giấm gặp baking soda', image: 'vinegar-volcano' },
              right: { id: 'r2', text: 'Sủi bọt khí' },
            },
            {
              left: { id: 'l3', text: 'Nến cháy', image: 'candle' },
              right: { id: 'r3', text: 'Toả nhiệt và phát sáng' },
            },
            {
              left: {
                id: 'l4',
                text: 'Dẫn khí carbon dioxide vào nước vôi trong (thí nghiệm ở trường)',
              },
              right: { id: 'r4', text: 'Xuất hiện kết tủa trắng, nước hoá đục' },
            },
          ],
          explanation:
            'Bốn nhóm dấu hiệu thường gặp: đổi màu, có khí thoát ra, toả nhiệt hay phát sáng, và xuất hiện kết tủa. Nước vôi trong là dung dịch calcium hydroxide. Khí carbon dioxide phản ứng với nó, tạo ra calcium carbonate, một chất rắn màu trắng không tan, nên nước hoá đục.',
          conceptIds: ['reaction-signs'],
        },
        {
          id: 'u4-l2-e3',
          type: 'true-false',
          prompt: 'Cứ thấy sủi bọt là chắc chắn có phản ứng hoá học.',
          visual: { id: 'v', image: 'boiling-kettle' },
          answer: false,
          explanation:
            'Nước sôi cũng sủi bọt, nhưng bọt đó là hơi nước, vẫn là H₂O. Dấu hiệu chỉ là gợi ý. Điều quyết định là có chất mới sinh ra hay không.',
          conceptIds: ['reaction-signs', 'physical-change'],
        },
        {
          id: 'u4-l2-e4',
          type: 'build-molecule',
          prompt: 'Ghép phân tử khí đã làm "núi lửa" sủi bọt: carbon dioxide CO₂',
          targetMoleculeId: 'co2',
          availableAtoms: { C: 2, O: 3, H: 2, Na: 1 },
          explanation:
            'CO₂ gồm 1 nguyên tử carbon và 2 nguyên tử oxygen. Các nguyên tử này vốn nằm trong baking soda NaHCO₃. Khi gặp acetic acid, chúng tách ra và sắp xếp lại thành chất khí.',
          conceptIds: ['reaction', 'formula'],
        },
        {
          id: 'u4-l2-e5',
          type: 'sort',
          prompt: 'Trường hợp nào có phản ứng hoá học? Hãy tự hỏi: có chất mới sinh ra không?',
          groups: [
            { id: 'yes', label: 'Có phản ứng hoá học' },
            { id: 'no', label: 'Không có phản ứng hoá học' },
          ],
          items: [
            {
              id: 'i1',
              text: 'Oxy già sủi bọt trên vết xước',
              image: 'hydrogen-peroxide',
              groupId: 'yes',
            },
            { id: 'i2', text: 'Nước sôi sủi bọt', image: 'boiling-kettle', groupId: 'no' },
            { id: 'i3', text: 'Pháo bông cháy sáng', image: 'sparkler', groupId: 'yes' },
            { id: 'i4', text: 'Đường tan trong trà', image: 'sugar-tea', groupId: 'no' },
            {
              id: 'i5',
              text: 'Baking soda trong bột bánh gặp nóng, sinh khí làm bánh nở',
              image: 'baking-cake',
              groupId: 'yes',
            },
            { id: 'i6', text: 'Viên đá tan chảy trong ly', image: 'ice-cubes', groupId: 'no' },
          ],
          explanation:
            'Oxy già sủi bọt vì sinh ra khí oxygen, pháo bông cháy thành chất mới, baking soda gặp nóng sinh ra khí carbon dioxide. Cả ba đều có chất mới. Sôi, hoà tan và nóng chảy thì không: nước vẫn là nước, đường vẫn là đường.',
          conceptIds: ['reaction-signs', 'chemical-change', 'physical-change'],
        },
        {
          id: 'u4-l2-e6',
          type: 'mcq',
          prompt: 'Baking soda có công thức NaHCO₃. Công thức này gồm những nguyên tử nào?',
          visual: { id: 'v', moleculeId: 'nahco3' },
          options: [
            { id: 'a', text: '1 nitrogen, 1 hydrogen, 1 carbon, 3 oxygen' },
            { id: 'b', text: '1 sodium, 1 hydrogen, 1 carbon, 3 oxygen' },
            { id: 'c', text: '1 sodium, 3 hydrogen, 3 carbon, 3 oxygen' },
          ],
          correctOptionId: 'b',
          explanation:
            'Na là kí hiệu của sodium (natri), còn nitrogen là N. Số 3 nhỏ chỉ thuộc về chữ O đứng ngay trước nó, nên chỉ oxygen mới có 3 nguyên tử. Trong tên hoá học sodium hydrogencarbonate, bạn cũng nghe ra được sodium, hydrogen và carbon.',
          conceptIds: ['formula'],
        },
        {
          id: 'u4-l2-e7',
          type: 'fill-blank',
          prompt: 'Điền vào chỗ trống',
          template: 'Chất khí sinh ra khi giấm gặp baking soda là khí ___.',
          blanks: [
            {
              accepted: ['carbon dioxide', 'CO₂', 'CO2'],
              wordBank: ['oxygen', 'hydrogen', 'carbon dioxide', 'nitrogen'],
            },
          ],
          explanation:
            'Đó là carbon dioxide CO₂, cũng chính là khí tạo bọt trong nước ngọt có ga và làm bánh nở xốp.',
          conceptIds: ['reaction-signs', 'reactants-products'],
        },
        {
          id: 'u4-l2-e8',
          type: 'true-false',
          prompt: 'Phản ứng hoá học nào cũng có dấu hiệu nhìn thấy được bằng mắt.',
          answer: false,
          explanation:
            'Nhiều phản ứng diễn ra lặng lẽ: chất trước và sau đều không màu, không sủi bọt, không phát sáng, như các phản ứng xảy ra trong cơ thể bạn mỗi giây. Có phản ứng lại rất chậm, phải nhiều ngày mới thấy dấu hiệu. Không thấy dấu hiệu chưa chắc là không có phản ứng.',
          conceptIds: ['reaction-signs'],
        },
        {
          id: 'u4-l2-e9',
          type: 'mcq',
          prompt:
            'Giấm và baking soda phản ứng vừa hết, tạo ra ba sản phẩm: khí carbon dioxide, nước và sodium acetate (một chất rắn tan được trong nước). Khi hết sủi bọt, trong cốc còn lại gì?',
          options: [
            { id: 'a', text: 'Giấm và baking soda như lúc đầu' },
            { id: 'b', text: 'Chỉ còn nước, vì sodium acetate tan rồi thì biến mất' },
            { id: 'c', text: 'Nước và sodium acetate tan trong đó' },
          ],
          correctOptionId: 'c',
          explanation:
            'Khí carbon dioxide bay vào không khí, còn nước và sodium acetate ở lại. Sodium acetate tan trong nước nên bạn không nhìn thấy, nhưng nó vẫn ở đó, giống đường tan trong trà. Giấm và baking soda thì đã biến thành chất mới, không còn như lúc đầu.',
          conceptIds: ['reactants-products', 'solution'],
        },
        {
          id: 'u4-l2-e10',
          type: 'order-steps',
          prompt: 'Làm "núi lửa" trong bếp. Sắp xếp theo thứ tự',
          steps: [
            { id: 's1', text: 'Cho vài thìa baking soda vào cốc' },
            { id: 's2', text: 'Rót giấm lên lớp baking soda trong cốc' },
            { id: 's3', text: 'Acetic acid trong giấm phản ứng với baking soda' },
            { id: 's4', text: 'Khí carbon dioxide sinh ra, đẩy bọt trào khỏi cốc' },
          ],
          explanation:
            'Chỉ khi hai chất tham gia gặp nhau thì phản ứng mới bắt đầu. Chất khí chiếm nhiều chỗ hơn hẳn chất rắn và chất lỏng nên đẩy bọt trào lên. Nếu muốn thử, bạn hãy dùng lượng nhỏ, đặt cốc trong khay và để hở miệng cốc.',
          conceptIds: ['reaction', 'reaction-signs'],
        },
      ],
      unlocksMolecules: ['nahco3'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 3: Bảo toàn khối lượng ─────────────────────────
    {
      id: 'u4-l3-conservation',
      title: 'Không nguyên tử nào biến mất',
      intro: {
        title: 'Đếm trước, đếm sau',
        story: [
          'Nấu xong nồi canh, bếp biogas đã đốt mất một ít khí methane. Số methane ấy đi đâu? Phóng to lên bạn sẽ thấy: mỗi phân tử methane (CH₄) gặp 2 phân tử oxygen (O₂), cháy thành 1 phân tử carbon dioxide (CO₂) và 2 phân tử nước (H₂O).',
          'Thử đếm nguyên tử. Trước phản ứng: 1 C và 4 H trong CH₄, 4 O trong hai phân tử O₂. Sau phản ứng: 1 C và 2 O trong CO₂, 4 H và 2 O trong hai phân tử H₂O. Vẫn đủ 1 carbon, 4 hydrogen, 4 oxygen. Chúng chỉ đổi chỗ.',
          'Nguyên tử nào cũng có khối lượng. Nguyên tử còn đủ thì tổng khối lượng cũng không đổi. Đó là định luật bảo toàn khối lượng: trong một phản ứng hoá học, tổng khối lượng các sản phẩm bằng tổng khối lượng các chất tham gia.',
          'Ví dụ: 16 g methane cháy hết với 64 g oxygen thì carbon dioxide và nước sinh ra nặng tổng cộng đúng 16 + 64 = 80 g.',
        ],
        visual: { type: 'reaction', reactionId: 'methane-combustion' },
      },
      exercises: [
        {
          id: 'u4-l3-e1',
          type: 'mcq',
          prompt: 'Trong một phản ứng hoá học, điều gì luôn giữ nguyên?',
          options: [
            { id: 'a', text: 'Số phân tử' },
            { id: 'b', text: 'Thể của các chất' },
            { id: 'c', text: 'Số nguyên tử của mỗi nguyên tố' },
          ],
          correctOptionId: 'c',
          explanation:
            'Nguyên tử chỉ sắp xếp lại nên số nguyên tử của mỗi nguyên tố không đổi. Số phân tử thì có thể thay đổi: 2 phân tử H₂ và 1 phân tử O₂ (ba phân tử) tạo thành chỉ 2 phân tử H₂O. Thể cũng có thể đổi, như sáp nến rắn cháy thành các chất khí.',
          conceptIds: ['conservation-of-mass'],
        },
        {
          id: 'u4-l3-e2',
          type: 'fill-blank',
          prompt: 'Đếm nguyên tử rồi chọn số đúng',
          template:
            '2 phân tử H₂ và 1 phân tử O₂ tạo thành 2 phân tử H₂O. Trước phản ứng có 4 nguyên tử hydrogen và 2 nguyên tử oxygen. Sau phản ứng có ___ nguyên tử hydrogen và ___ nguyên tử oxygen.',
          blanks: [
            { accepted: ['4', 'bốn'], wordBank: ['2', '4', '6'] },
            { accepted: ['2', 'hai'], wordBank: ['1', '2', '4'] },
          ],
          explanation:
            'Mỗi phân tử H₂O có 2 hydrogen và 1 oxygen. Hai phân tử có 4 hydrogen và 2 oxygen, đúng bằng trước phản ứng.',
          conceptIds: ['conservation-of-mass'],
        },
        {
          id: 'u4-l3-e3',
          type: 'mcq',
          prompt:
            'Methane cháy: 1 phân tử CH₄ gặp 2 phân tử O₂. Trước phản ứng có tổng cộng mấy nguyên tử oxygen?',
          visual: { id: 'v', moleculeId: 'o2' },
          options: [
            { id: 'a', text: '2' },
            { id: 'b', text: '4' },
            { id: 'c', text: '8' },
          ],
          correctOptionId: 'b',
          explanation:
            'Mỗi phân tử O₂ có 2 nguyên tử oxygen, hai phân tử có 4. Sau phản ứng, 4 nguyên tử này nằm trong 1 phân tử CO₂ và 2 phân tử H₂O.',
          conceptIds: ['conservation-of-mass', 'formula'],
        },
        {
          id: 'u4-l3-e4',
          type: 'true-false',
          prompt: 'Cây nến cháy ngắn dần, nghĩa là các nguyên tử trong sáp đã biến mất.',
          visual: { id: 'v', image: 'candle' },
          answer: false,
          explanation:
            'Các nguyên tử carbon và hydrogen trong sáp đã kết hợp với oxygen thành khí carbon dioxide và hơi nước, rồi bay vào không khí. Chúng vẫn tồn tại, chỉ là bạn không nhìn thấy.',
          conceptIds: ['conservation-of-mass', 'combustion'],
        },
        {
          id: 'u4-l3-e5',
          type: 'mcq',
          prompt:
            'Đốt cháy hết 12 g carbon cần 32 g oxygen. Thu được bao nhiêu gam carbon dioxide?',
          visual: { id: 'v', image: 'charcoal-grill' },
          options: [
            { id: 'a', text: '20 g' },
            { id: 'b', text: '32 g' },
            { id: 'c', text: '44 g' },
          ],
          correctOptionId: 'c',
          explanation:
            '12 + 32 = 44. Tổng khối lượng các chất tham gia luôn bằng tổng khối lượng các sản phẩm. Ở đây chỉ có một sản phẩm, nên cả 44 g đều là carbon dioxide.',
          conceptIds: ['conservation-of-mass'],
        },
        {
          id: 'u4-l3-e6',
          type: 'mcq',
          prompt:
            'Làm "núi lửa" giấm và baking soda trong một cốc hở đặt trên cân. Sau phản ứng, số chỉ của cân nhỏ hơn lúc đầu. Vì sao?',
          visual: { id: 'v', image: 'vinegar-volcano' },
          options: [
            { id: 'a', text: 'Vì khí carbon dioxide đã bay ra khỏi cốc' },
            { id: 'b', text: 'Vì một số nguyên tử đã bị phá huỷ' },
            { id: 'c', text: 'Vì phản ứng sủi bọt không tuân theo bảo toàn khối lượng' },
          ],
          correctOptionId: 'a',
          explanation:
            'Chất khí cũng có khối lượng. Khí carbon dioxide bay khỏi cốc mang theo phần khối lượng của nó, nên số chỉ của cân giảm. Không nguyên tử nào bị phá huỷ. Nếu giữ lại được toàn bộ lượng khí đó thì cân sẽ chỉ đúng như lúc đầu. Đừng tự đậy kín chai để thử: khí sinh ra có thể làm bật nắp hoặc vỡ chai.',
          conceptIds: ['conservation-of-mass'],
        },
        {
          id: 'u4-l3-e7',
          type: 'fill-blank',
          prompt: 'Tìm khối lượng còn thiếu',
          template:
            'Đốt cháy hết 6 g carbon trong khí oxygen, thu được 22 g carbon dioxide. Vậy đã có ___ g oxygen tham gia phản ứng.',
          blanks: [{ accepted: ['16'], wordBank: ['16', '22', '28'] }],
          explanation:
            'Khối lượng carbon cộng với khối lượng oxygen phải bằng 22 g carbon dioxide. Vậy oxygen nặng 22 − 6 = 16 g. Khi biết tổng và một phần, bạn lấy tổng trừ đi phần đã biết. Cộng 6 với 22 thành 28 là nhầm, vì 22 g đã là tổng rồi.',
          conceptIds: ['conservation-of-mass'],
        },
        {
          id: 'u4-l3-e8',
          type: 'sort',
          prompt: 'Trong một phản ứng hoá học, điều gì giữ nguyên, điều gì thay đổi?',
          groups: [
            { id: 'same', label: 'Giữ nguyên' },
            { id: 'changed', label: 'Thay đổi' },
          ],
          items: [
            { id: 'i1', text: 'Số nguyên tử của mỗi nguyên tố', groupId: 'same' },
            { id: 'i2', text: 'Liên kết giữa các nguyên tử', groupId: 'changed' },
            { id: 'i3', text: 'Tổng khối lượng', groupId: 'same' },
            { id: 'i4', text: 'Các chất có mặt', groupId: 'changed' },
            { id: 'i5', text: 'Các nguyên tố có mặt', groupId: 'same' },
          ],
          explanation:
            'Nguyên tử còn nguyên nên số nguyên tử, các nguyên tố và tổng khối lượng đều giữ nguyên. Thứ thay đổi là cách chúng liên kết, vì thế chất cũ mất đi và chất mới xuất hiện.',
          conceptIds: ['conservation-of-mass', 'reaction'],
        },
        {
          id: 'u4-l3-e9',
          type: 'true-false',
          prompt: 'Một cây đinh sắt bị gỉ (lớp gỉ chưa bong ra) nặng hơn lúc còn mới.',
          visual: { id: 'v', image: 'rusty-nail' },
          answer: true,
          explanation:
            'Gỉ sắt gồm các nguyên tử iron (sắt) ban đầu cộng thêm các nguyên tử oxygen lấy từ không khí. Phần nặng thêm chính là lượng oxygen đã kết hợp vào. Sắt gỉ lâu ngày trông mục dần là vì lớp gỉ bong ra, chứ không phải vì nguyên tử biến mất.',
          conceptIds: ['conservation-of-mass', 'oxidation'],
        },
        {
          id: 'u4-l3-e10',
          type: 'build-molecule',
          prompt:
            'Ghép sodium acetate CH₃COONa, chất ở lại trong cốc sau "núi lửa". Gợi ý: C và O đều xuất hiện hai lần, hãy đếm cho đủ',
          targetMoleculeId: 'c2h3nao2',
          availableAtoms: { C: 3, H: 5, O: 3, Na: 2 },
          explanation:
            'CH₃COONa có 2 carbon, 3 hydrogen, 2 oxygen và 1 sodium, viết gộp là C₂H₃NaO₂. Các nguyên tử này đều đến từ giấm và baking soda, không có nguyên tử nào mới.',
          conceptIds: ['formula', 'conservation-of-mass'],
        },
      ],
      unlocksMolecules: ['c2h3nao2'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 4: Cân bằng phương trình ─────────────────────────
    {
      id: 'u4-l4-balancing',
      title: 'Cân bằng phương trình',
      intro: {
        title: 'Bếp than và những con số đứng trước',
        story: [
          'Than trong bếp nướng cháy đỏ rực. Mỗi nguyên tử carbon lấy một phân tử oxygen, thành một phân tử carbon dioxide. Viết bằng công thức: C + O₂ → CO₂. Cách viết này gọi là phương trình hoá học.',
          'Không nguyên tử nào mất đi hay sinh thêm, nên hai vế của phương trình phải có số nguyên tử mỗi nguyên tố bằng nhau. Vế trái là phần trước mũi tên, vế phải là phần sau mũi tên. Ở đây mỗi vế đều có 1 C và 2 O: phương trình đã cân bằng.',
          'Còn H₂ + O₂ → H₂O thì chưa cân bằng: vế trái có 2 O, vế phải chỉ có 1. Muốn có thêm nguyên tử, ta lấy thêm cả phân tử bằng cách viết một con số trước công thức, gọi là hệ số. 2H₂O là 2 phân tử nước, có tất cả 4 H và 2 O.',
          'Con số nhỏ bên dưới gọi là chỉ số, và không được sửa nó. Đổi H₂O thành H₂O₂ là biến nước thành chất khác: hydrogen peroxide (oxy già). Hệ số thì chọn bộ số nhỏ nhất: viết 2H₂ + O₂ → 2H₂O, không viết 4H₂ + 2O₂ → 4H₂O.',
        ],
        visual: { type: 'reaction', reactionId: 'carbon-combustion' },
      },
      exercises: [
        {
          id: 'u4-l4-e1',
          type: 'mcq',
          prompt: 'Trong 2H₂O, số 2 lớn đứng trước cho biết điều gì?',
          visual: { id: 'v', moleculeId: 'h2o' },
          options: [
            { id: 'a', text: 'Mỗi phân tử nước có 2 nguyên tử oxygen' },
            { id: 'b', text: 'Có 2 phân tử nước' },
            { id: 'c', text: 'Có tất cả 2 nguyên tử hydrogen' },
          ],
          correctOptionId: 'b',
          explanation:
            'Số đứng trước công thức là hệ số, cho biết lấy bao nhiêu phân tử. 2H₂O là 2 phân tử nước, tổng cộng 4 nguyên tử hydrogen và 2 nguyên tử oxygen. Mỗi phân tử nước vẫn chỉ có 1 nguyên tử oxygen.',
          conceptIds: ['coefficient'],
        },
        {
          id: 'u4-l4-e2',
          type: 'match-pairs',
          prompt: 'Nối cách viết với ý nghĩa của nó',
          pairs: [
            { left: { id: 'l1', text: 'H₂O' }, right: { id: 'r1', text: '1 phân tử nước' } },
            { left: { id: 'l2', text: '2H₂O' }, right: { id: 'r2', text: '2 phân tử nước' } },
            {
              left: { id: 'l3', text: 'H₂O₂' },
              right: { id: 'r3', text: '1 phân tử hydrogen peroxide' },
            },
            {
              left: { id: 'l4', text: '2H₂' },
              right: { id: 'r4', text: '2 phân tử khí hydrogen' },
            },
          ],
          explanation:
            'Hệ số đứng trước cho biết lấy mấy phân tử. Chỉ số nhỏ bên dưới là một phần của công thức: H₂O là nước, thêm một chỉ số 2 thành H₂O₂ thì đã là chất khác.',
          conceptIds: ['coefficient', 'formula'],
        },
        {
          id: 'u4-l4-e8',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Con số đứng trước công thức, cho biết lấy mấy phân tử hay mấy nguyên tử của chất đó, gọi là ___. Con số nhỏ bên dưới, là một phần của công thức, gọi là ___.',
          blanks: [
            { accepted: ['hệ số'], wordBank: ['hệ số', 'chỉ số', 'kí hiệu'] },
            { accepted: ['chỉ số'], wordBank: ['hệ số', 'chỉ số', 'kí hiệu'] },
          ],
          explanation:
            'Trong 2H₂O, số 2 đứng trước là hệ số, số 2 nhỏ sau chữ H là chỉ số. Khi cân bằng, bạn chỉ được thay đổi hệ số.',
          conceptIds: ['coefficient'],
        },
        {
          id: 'u4-l4-e5',
          type: 'mcq',
          prompt: '3CO₂ có tổng cộng bao nhiêu nguyên tử oxygen?',
          visual: { id: 'v', moleculeId: 'co2' },
          options: [
            { id: 'a', text: '2' },
            { id: 'b', text: '3' },
            { id: 'c', text: '5' },
            { id: 'd', text: '6' },
          ],
          correctOptionId: 'd',
          explanation:
            'Có 3 phân tử, mỗi phân tử có 2 nguyên tử oxygen: 3 × 2 = 6. Hệ số nhân với cả phân tử, tức là nhân với mọi nguyên tử trong công thức. Cộng 3 với 2 thành 5 là nhầm: phải nhân chứ không cộng.',
          conceptIds: ['coefficient'],
        },
        {
          id: 'u4-l4-e11',
          type: 'fill-blank',
          prompt: 'Đếm nguyên tử oxygen ở từng vế',
          template:
            'H₂ + O₂ → H₂O. Vế trái có ___ nguyên tử oxygen, vế phải có ___ nguyên tử oxygen.',
          blanks: [
            { accepted: ['2', 'hai'], wordBank: ['1', '2', '3'] },
            { accepted: ['1', 'một'], wordBank: ['1', '2', '3'] },
          ],
          explanation:
            'Vế trái: phân tử O₂ có 2 nguyên tử oxygen. Vế phải: phân tử H₂O chỉ có 1. Hai vế chưa bằng nhau, nên cách viết này mới chỉ là sơ đồ phản ứng. Thêm hệ số cho cân bằng xong, nó mới thành phương trình hoá học.',
          conceptIds: ['balancing', 'chemical-equation'],
        },
        {
          id: 'u4-l4-e12',
          type: 'sort',
          prompt: 'Cách viết nào đã cân bằng? Đếm số nguyên tử của từng nguyên tố ở hai vế',
          groups: [
            { id: 'balanced', label: 'Đã cân bằng' },
            { id: 'unbalanced', label: 'Chưa cân bằng' },
          ],
          items: [
            { id: 'i1', text: 'C + O₂ → CO₂', groupId: 'balanced' },
            { id: 'i2', text: 'H₂ + O₂ → H₂O', groupId: 'unbalanced' },
            { id: 'i3', text: 'CH₄ + 2O₂ → CO₂ + 2H₂O', groupId: 'balanced' },
            { id: 'i4', text: 'CO + O₂ → CO₂', groupId: 'unbalanced' },
            { id: 'i5', text: 'N₂ + H₂ → NH₃', groupId: 'unbalanced' },
          ],
          explanation:
            'C + O₂ → CO₂ có 1 C và 2 O ở mỗi vế. CH₄ + 2O₂ → CO₂ + 2H₂O có 1 C, 4 H và 4 O ở mỗi vế. Ba cách viết còn lại đều lệch: H₂ + O₂ → H₂O lệch oxygen (2 và 1), CO + O₂ → CO₂ lệch oxygen (3 và 2), N₂ + H₂ → NH₃ lệch cả nitrogen (2 và 1) lẫn hydrogen (2 và 3).',
          conceptIds: ['balancing', 'chemical-equation'],
        },
        {
          id: 'u4-l4-e3',
          type: 'balance-reaction',
          reactionId: 'carbon-combustion',
          prompt:
            'Làm quen với bảng cân bằng. Than cháy: C + O₂ → CO₂. Xem bảng đếm nguyên tử, nếu hai vế đã bằng nhau thì bạn không cần đổi hệ số nào',
          explanation:
            'Mỗi vế đều có 1 C và 2 O nên phương trình đã cân bằng sẵn: C + O₂ → CO₂. Mọi hệ số đều là 1, và hệ số 1 thì không cần viết ra. Viết 2C + 2O₂ → 2CO₂ cũng đủ nguyên tử nhưng chưa phải bộ hệ số nhỏ nhất.',
          conceptIds: ['balancing', 'chemical-equation'],
        },
        {
          id: 'u4-l4-e4',
          type: 'true-false',
          prompt: 'Để cân bằng phương trình, bạn được phép đổi H₂O thành H₂O₂.',
          visual: { id: 'v', moleculeId: 'h2o2' },
          answer: false,
          explanation:
            'Đổi chỉ số là đổi sang chất khác: H₂O là nước, còn H₂O₂ là hydrogen peroxide (oxy già). Phản ứng sinh ra nước thì bạn phải viết đúng công thức của nước. Khi cân bằng, chỉ được thay đổi hệ số đứng trước công thức.',
          conceptIds: ['coefficient', 'balancing'],
        },
        {
          id: 'u4-l4-e6',
          type: 'order-steps',
          prompt: 'Cân bằng sơ đồ phản ứng H₂ + O₂ → H₂O. Sắp xếp các bước theo thứ tự',
          steps: [
            { id: 's1', text: 'Đếm nguyên tử ở hai vế: oxygen bị lệch, trái 2, phải 1' },
            { id: 's2', text: 'Đặt hệ số 2 trước H₂O để vế phải có 2 oxygen' },
            { id: 's3', text: 'Đếm lại: giờ hydrogen bị lệch, trái 2, phải 4' },
            { id: 's4', text: 'Đặt hệ số 2 trước H₂ để vế trái có 4 hydrogen' },
            { id: 's5', text: 'Đếm lần cuối: mỗi vế có 4 hydrogen và 2 oxygen' },
          ],
          explanation:
            'Cân bằng là lặp lại hai việc: đếm, rồi thêm hệ số cho nguyên tố đang lệch. Sửa xong chỗ này có thể làm lệch chỗ khác. Chuyện đó rất bình thường, bạn cứ đếm lại rồi sửa tiếp.',
          conceptIds: ['balancing'],
        },
        {
          id: 'u4-l4-e7',
          type: 'balance-reaction',
          reactionId: 'water-formation',
          prompt: 'Đến lượt bạn: cân bằng phản ứng tạo thành nước, H₂ + O₂ → H₂O',
          explanation:
            'Vế trái có 2 O nên cần 2 phân tử H₂O. Khi đó vế phải có 4 H, nên cần 2 phân tử H₂. Kết quả: 2H₂ + O₂ → 2H₂O.',
          conceptIds: ['balancing', 'chemical-equation'],
        },
        {
          id: 'u4-l4-e9',
          type: 'balance-reaction',
          reactionId: 'carbon-monoxide-burning',
          prompt:
            'Khí carbon monoxide cháy trên bếp than tổ ong: CO + O₂ → CO₂. Cân bằng phương trình này. Gợi ý: sửa xong oxygen thì nhớ đếm lại carbon',
          explanation:
            'Carbon đã bằng nhau, chỉ oxygen bị lệch: trái 3, phải 2. Thử lấy 2 CO₂: vế phải có 2 C và 4 O. Vế trái cần 2 C nên lấy 2 CO, khi đó oxygen là 2 + 2 = 4, vừa khít. Kết quả: 2CO + O₂ → 2CO₂.',
          conceptIds: ['balancing', 'combustion'],
        },
        {
          id: 'u4-l4-e10',
          type: 'balance-reaction',
          reactionId: 'peroxide-decomposition',
          prompt:
            'Hydrogen peroxide (oxy già) tách thành nước và khí oxygen: H₂O₂ → H₂O + O₂. Cân bằng phương trình này',
          explanation:
            'Lúc đầu chỉ oxygen bị lệch: trái 2, phải 3. Lấy 2 phân tử H₂O₂ thì vế trái có 4 H và 4 O. Vế phải cần 2 phân tử H₂O để đủ 4 H, khi đó oxygen là 2 + 2 = 4, vừa khít. Kết quả: 2H₂O₂ → 2H₂O + O₂.',
          conceptIds: ['balancing', 'chemical-equation'],
        },
      ],
      unlocksMolecules: ['h2o2'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 5: Phản ứng quanh ta ─────────────────────────
    {
      id: 'u4-l5-reactions-around-you',
      title: 'Phản ứng quanh ta',
      intro: {
        title: 'Pháo bông đêm giao thừa',
        story: [
          'Đêm giao thừa, bố châm một que pháo bông cho cả nhà cùng ngắm. Những tia sáng bắn ra tí tách, chói đến mức phải nheo mắt.',
          'Lớp thuốc bọc quanh que pháo có trộn bột kim loại. Loại cho tia sáng trắng thường có magnesium (Mg). Khi cháy, magnesium kết hợp với oxygen thành magnesium oxide (MgO), một chất rắn màu trắng, đồng thời toả nhiệt và phát sáng rất mạnh.',
          'Bếp than, bếp biogas, cây đinh gỉ, nhà máy phân đạm: quanh bạn đâu đâu cũng có phản ứng hoá học. Phương trình nào cũng lập được theo cùng một cách: viết sơ đồ phản ứng với công thức đúng, đếm nguyên tử rồi thêm hệ số cho tới khi hai vế bằng nhau, cuối cùng đếm lại để kiểm tra.',
          'Gặp phương trình có nhiều nguyên tố, bạn cân bằng từng nguyên tố một. Mẹo nhỏ: nguyên tố nào có mặt ở nhiều chất, thường là oxygen, thì để sau cùng.',
        ],
        visual: { type: 'reaction', reactionId: 'magnesium-burning' },
      },
      exercises: [
        {
          id: 'u4-l5-e1',
          type: 'mcq',
          prompt: 'Magnesium cháy xong để lại một chất bột màu trắng. Đó là chất gì?',
          visual: { id: 'v', image: 'sparkler' },
          options: [
            { id: 'a', moleculeId: 'mg', text: 'Magnesium' },
            { id: 'b', moleculeId: 'mgo', text: 'Magnesium oxide' },
            { id: 'c', moleculeId: 'o2', text: 'Oxygen' },
          ],
          correctOptionId: 'b',
          explanation:
            'Magnesium và oxygen là chất tham gia. Sản phẩm là magnesium oxide MgO, một chất rắn màu trắng, khác hẳn kim loại magnesium ánh bạc.',
          conceptIds: ['reactants-products', 'combustion'],
        },
        {
          id: 'u4-l5-e2',
          type: 'balance-reaction',
          reactionId: 'magnesium-burning',
          prompt: 'Cân bằng phương trình của phản ứng magnesium cháy: Mg + O₂ → MgO',
          explanation:
            'Vế trái có 2 O nên cần 2 MgO. Khi đó vế phải có 2 Mg, nên cần 2 Mg ở vế trái. Kết quả: 2Mg + O₂ → 2MgO.',
          conceptIds: ['balancing', 'combustion'],
        },
        {
          id: 'u4-l5-e3',
          type: 'match-pairs',
          prompt:
            'Nối mỗi phản ứng với sản phẩm của nó. Gợi ý: sản phẩm chỉ chứa những nguyên tố có trong chất tham gia',
          pairs: [
            {
              left: { id: 'l1', text: 'Than (carbon) cháy', image: 'charcoal-grill' },
              right: { id: 'r1', text: 'Carbon dioxide' },
            },
            {
              left: { id: 'l2', text: 'Magnesium trong pháo bông cháy', image: 'sparkler' },
              right: { id: 'r2', text: 'Magnesium oxide' },
            },
            {
              left: { id: 'l3', text: 'Đinh sắt gỉ', image: 'rusty-nail' },
              right: { id: 'r3', text: 'Iron(III) oxide' },
            },
            {
              left: { id: 'l4', text: 'Methane cháy trên bếp biogas', image: 'biogas-stove' },
              right: { id: 'r4', text: 'Carbon dioxide và nước' },
            },
            {
              left: {
                id: 'l5',
                text: 'Nitrogen gặp hydrogen trong nhà máy phân đạm',
                image: 'rice-field',
              },
              right: { id: 'r5', text: 'Ammonia' },
            },
          ],
          explanation:
            'Sản phẩm chỉ chứa các nguyên tố có trong chất tham gia. Than gồm chủ yếu là carbon nên cháy thành carbon dioxide. Methane có thêm hydrogen nên còn sinh ra nước. Nitrogen với hydrogen thì chỉ có thể tạo ra chất gồm N và H: ammonia NH₃.',
          conceptIds: ['reactants-products', 'reaction'],
        },
        {
          id: 'u4-l5-e4',
          type: 'balance-reaction',
          reactionId: 'methane-combustion',
          prompt:
            'Methane cháy trên bếp biogas: CH₄ + O₂ → CO₂ + H₂O. Cân bằng phương trình này. Gợi ý: xét carbon, rồi hydrogen, để oxygen sau cùng',
          explanation:
            'Carbon đã bằng nhau. CH₄ có 4 H nên cần 2 H₂O. Lúc này vế phải có 2 + 2 = 4 O, nên cần 2 O₂. Kết quả: CH₄ + 2O₂ → CO₂ + 2H₂O. Oxygen để sau cùng vì nó nằm trong cả hai sản phẩm: sửa nó sớm thì lát nữa lại lệch.',
          conceptIds: ['balancing', 'combustion'],
        },
        {
          id: 'u4-l5-e5',
          type: 'true-false',
          prompt: 'Viết Mg + O₂ → MgO₂ là một cách đúng để cân bằng phản ứng magnesium cháy.',
          visual: { id: 'v', moleculeId: 'mgo' },
          answer: false,
          explanation:
            'Không được sửa chỉ số: sản phẩm của phản ứng là MgO, còn MgO₂ là một chất khác. Cách đúng là thêm hệ số: 2Mg + O₂ → 2MgO.',
          conceptIds: ['coefficient', 'balancing'],
        },
        {
          id: 'u4-l5-e6',
          type: 'mcq',
          prompt:
            'Nhà máy phân đạm cho khí nitrogen N₂ phản ứng với khí hydrogen H₂ để tạo ra ammonia NH₃. Một phân tử N₂ tạo được mấy phân tử NH₃?',
          visual: { id: 'v', image: 'rice-field' },
          options: [
            { id: 'a', text: '1' },
            { id: 'b', text: '2' },
            { id: 'c', text: '3' },
          ],
          correctOptionId: 'b',
          explanation:
            'Một phân tử N₂ có 2 nguyên tử nitrogen. Mỗi phân tử NH₃ cần 1 nguyên tử nitrogen, nên tạo được 2 phân tử NH₃.',
          conceptIds: ['conservation-of-mass', 'coefficient'],
        },
        {
          id: 'u4-l5-e7',
          type: 'balance-reaction',
          reactionId: 'ammonia-synthesis',
          prompt: 'Cân bằng phương trình tổng hợp ammonia để làm phân đạm: N₂ + H₂ → NH₃',
          explanation:
            'Vế trái có 2 N nên cần 2 NH₃. Hai phân tử NH₃ có 6 H, mỗi phân tử H₂ có 2 H, nên cần 3 H₂. Kết quả: N₂ + 3H₂ → 2NH₃.',
          conceptIds: ['balancing', 'chemical-equation'],
        },
        {
          id: 'u4-l5-e11',
          type: 'mcq',
          prompt:
            'Phương trình N₂ + 3H₂ → 2NH₃ còn cho biết tỉ lệ: cứ 1 phân tử N₂ thì cần 3 phân tử H₂. Vậy 100 phân tử N₂ cần bao nhiêu phân tử H₂ để phản ứng vừa hết?',
          options: [
            { id: 'a', text: '100' },
            { id: 'b', text: '200' },
            { id: 'c', text: '300' },
          ],
          correctOptionId: 'c',
          explanation:
            'Hệ số cho biết tỉ lệ số phân tử giữa các chất: 1 N₂ đi với 3 H₂ và tạo ra 2 NH₃. Gấp lên 100 lần thì 100 N₂ cần 300 H₂ và tạo ra 200 NH₃. Đây là tỉ lệ về số phân tử, không phải tỉ lệ về khối lượng.',
          conceptIds: ['coefficient', 'chemical-equation'],
        },
        {
          id: 'u4-l5-e8',
          type: 'sort',
          prompt:
            'Sự cháy là phản ứng với oxygen xảy ra nhanh, toả nhiều nhiệt và phát sáng. Phản ứng nào là sự cháy?',
          groups: [
            { id: 'burning', label: 'Sự cháy' },
            { id: 'other', label: 'Không phải sự cháy' },
          ],
          items: [
            {
              id: 'i1',
              text: 'Than hồng trong bếp nướng',
              image: 'charcoal-grill',
              groupId: 'burning',
            },
            { id: 'i2', text: 'Đinh sắt gỉ dần', image: 'rusty-nail', groupId: 'other' },
            { id: 'i3', text: 'Que pháo bông cháy', image: 'sparkler', groupId: 'burning' },
            { id: 'i4', text: 'Oxy già sủi bọt', image: 'hydrogen-peroxide', groupId: 'other' },
            { id: 'i5', text: 'Ngọn lửa bếp biogas', image: 'biogas-stove', groupId: 'burning' },
            { id: 'i6', text: 'Giấm gặp baking soda', image: 'vinegar-volcano', groupId: 'other' },
          ],
          explanation:
            'Than, pháo bông và methane đều phản ứng nhanh với oxygen, toả nhiệt và phát sáng. Sắt gỉ cũng là phản ứng với oxygen nhưng rất chậm, không phát sáng, nên không phải sự cháy. Oxy già sủi bọt và giấm gặp baking soda thì không cần tới oxygen.',
          conceptIds: ['combustion', 'oxidation'],
        },
        {
          id: 'u4-l5-e9',
          type: 'balance-reaction',
          reactionId: 'rusting',
          prompt:
            'Thử thách: cân bằng phản ứng sắt bị gỉ, Fe + O₂ → Fe₂O₃. Gợi ý: bắt đầu từ oxygen, tìm số nhỏ nhất chia hết cho cả 2 và 3',
          explanation:
            'Mỗi O₂ có 2 O, mỗi Fe₂O₃ có 3 O. Số nhỏ nhất chia hết cho cả 2 và 3 là 6, nên lấy 3 O₂ và 2 Fe₂O₃. Hai Fe₂O₃ cần 4 Fe. Kết quả: 4Fe + 3O₂ → 2Fe₂O₃.',
          conceptIds: ['balancing', 'oxidation'],
        },
        {
          id: 'u4-l5-e10',
          type: 'fill-blank',
          prompt: 'Điền vào chỗ trống',
          template:
            'Than, methane và magnesium khi cháy đều cần một chất khí lấy từ không khí: khí ___.',
          blanks: [
            {
              accepted: ['oxygen', 'O₂', 'O2'],
              wordBank: ['nitrogen', 'oxygen', 'carbon dioxide'],
            },
          ],
          explanation:
            'Sự cháy cần oxygen. Khi ngọn nến bị úp kín trong một chiếc lọ, oxygen bên trong giảm dần, đến lúc không còn đủ thì nến tắt.',
          conceptIds: ['combustion'],
        },
      ],
      unlocksMolecules: ['mg', 'mgo'],
      baseXp: 10,
    },

    // ───────────────────────── Checkpoint Unit 4 ─────────────────────────
    {
      id: 'u4-checkpoint',
      title: 'Kiểm tra Unit 4',
      kind: 'checkpoint',
      exercises: [
        {
          id: 'u4-cp-e1',
          type: 'mcq',
          prompt:
            'Cây xanh quang hợp theo sơ đồ: carbon dioxide + nước → glucose (một loại đường) + oxygen. Những chất nào là chất tham gia?',
          options: [
            { id: 'a', text: 'Carbon dioxide và nước' },
            { id: 'b', text: 'Glucose và oxygen' },
            { id: 'c', text: 'Carbon dioxide và oxygen' },
          ],
          correctOptionId: 'a',
          explanation:
            'Chất tham gia đứng bên trái mũi tên: carbon dioxide và nước. Bên phải mũi tên là các sản phẩm: glucose và oxygen. Dù phản ứng lạ hay quen, cách đọc sơ đồ vẫn vậy.',
          conceptIds: ['reactants-products', 'chemical-equation'],
        },
        {
          id: 'u4-cp-e2',
          type: 'sort',
          prompt: 'Có chất mới sinh ra hay không? Xếp mỗi việc vào đúng nhóm',
          groups: [
            { id: 'reaction', label: 'Phản ứng hoá học' },
            { id: 'physical', label: 'Biến đổi vật lí' },
          ],
          items: [
            {
              id: 'i1',
              text: 'Viên sủi gặp nước, sinh ra khí carbon dioxide',
              groupId: 'reaction',
            },
            { id: 'i2', text: 'Sương đọng trên lá buổi sớm', groupId: 'physical' },
            { id: 'i3', text: 'Củi cháy thành tro và khói', groupId: 'reaction' },
            {
              id: 'i4',
              text: 'Muối tan trong bát canh',
              image: 'salt-shaker',
              groupId: 'physical',
            },
            { id: 'i5', text: 'Sữa để lâu bị chua', groupId: 'reaction' },
            { id: 'i6', text: 'Sáp nến chảy thành giọt', groupId: 'physical' },
          ],
          explanation:
            'Viên sủi sinh ra khí carbon dioxide, củi cháy thành tro và khói, sữa chua đi vì có chất mới tạo vị chua. Cả ba đều có chất mới nên là phản ứng hoá học. Sương đọng là hơi nước ngưng tụ, muối tan là hoà tan, sáp chảy là nóng chảy: chất vẫn là chất cũ.',
          conceptIds: ['reaction', 'physical-change', 'chemical-change'],
        },
        {
          id: 'u4-cp-e3',
          type: 'balance-reaction',
          reactionId: 'water-formation',
          prompt: 'Cân bằng phương trình của phản ứng tạo thành nước: H₂ + O₂ → H₂O',
          explanation:
            'Cần 2 phân tử H₂O để đủ 2 O, rồi cần 2 phân tử H₂ để đủ 4 H. Kết quả: 2H₂ + O₂ → 2H₂O.',
          conceptIds: ['balancing'],
        },
        {
          id: 'u4-cp-e4',
          type: 'true-false',
          prompt: 'Khi cân bằng phương trình, bạn có thể sửa chỉ số trong công thức nếu cần.',
          answer: false,
          explanation:
            'Chỉ số là một phần của công thức. Sửa chỉ số là đổi sang chất khác. Bạn chỉ được thêm hệ số đứng trước công thức.',
          conceptIds: ['coefficient', 'balancing'],
        },
        {
          id: 'u4-cp-e5',
          type: 'mcq',
          prompt:
            'Khí carbon monoxide (CO) cháy trong oxygen thành carbon dioxide (CO₂). Cách viết nào là phương trình hoá học đúng của phản ứng này?',
          options: [
            { id: 'a', text: 'CO + O₂ → CO₂' },
            { id: 'b', text: '2CO + O₂ → 2CO₂' },
            { id: 'c', text: 'CO + O₂ → CO₃' },
            { id: 'd', text: '2CO + O₂ → CO₂' },
          ],
          correctOptionId: 'b',
          explanation:
            'Đếm từng vế: 2CO + O₂ có 2 C và 4 O, 2CO₂ cũng có 2 C và 4 O. Cách viết CO + O₂ → CO₂ lệch oxygen (3 và 2). Cách viết 2CO + O₂ → CO₂ lệch cả carbon lẫn oxygen. Còn CO + O₂ → CO₃ tuy đủ nguyên tử nhưng đã sửa chỉ số, mà CO₃ thì không phải carbon dioxide.',
          conceptIds: ['balancing', 'coefficient'],
        },
        {
          id: 'u4-cp-e6',
          type: 'match-pairs',
          prompt: 'Nối mỗi phản ứng với dấu hiệu của nó',
          pairs: [
            {
              left: { id: 'l1', text: 'Sắt gỉ', image: 'rusty-nail' },
              right: { id: 'r1', text: 'Chuyển sang màu nâu đỏ' },
            },
            {
              left: { id: 'l2', text: 'Oxy già trên vết xước', image: 'hydrogen-peroxide' },
              right: { id: 'r2', text: 'Sủi bọt trắng' },
            },
            {
              left: { id: 'l3', text: 'Pháo bông cháy', image: 'sparkler' },
              right: { id: 'r3', text: 'Phát ánh sáng trắng chói' },
            },
            {
              left: { id: 'l4', text: 'Methane cháy', image: 'biogas-stove' },
              right: { id: 'r4', text: 'Ngọn lửa xanh, toả nhiệt' },
            },
          ],
          explanation:
            'Đổi màu, sủi bọt khí, phát sáng và toả nhiệt đều là dấu hiệu gợi ý có chất mới sinh ra.',
          conceptIds: ['reaction-signs'],
        },
        {
          id: 'u4-cp-e7',
          type: 'balance-reaction',
          reactionId: 'magnesium-burning',
          prompt: 'Cân bằng phương trình của phản ứng magnesium cháy: Mg + O₂ → MgO',
          explanation:
            'Một phân tử O₂ có 2 nguyên tử oxygen, đủ cho 2 MgO. Vậy cần 2 Mg. Kết quả: 2Mg + O₂ → 2MgO.',
          conceptIds: ['balancing', 'combustion'],
        },
        {
          id: 'u4-cp-e8',
          type: 'mcq',
          prompt:
            'Lò vôi nung 100 kg calcium carbonate (đá vôi), thu được 56 kg calcium oxide (vôi sống) và khí carbon dioxide bay lên. Lượng khí carbon dioxide đã bay đi nặng bao nhiêu?',
          options: [
            { id: 'a', text: '44 kg' },
            { id: 'b', text: '56 kg' },
            { id: 'c', text: '156 kg' },
          ],
          correctOptionId: 'a',
          explanation:
            'Tổng khối lượng hai sản phẩm phải bằng 100 kg đá vôi ban đầu. Vôi sống chiếm 56 kg, vậy khí carbon dioxide nặng 100 − 56 = 44 kg. Khí bay đi mắt không thấy, nhưng nó vẫn có khối lượng.',
          conceptIds: ['conservation-of-mass'],
        },
        {
          id: 'u4-cp-e9',
          type: 'fill-blank',
          prompt: 'Điền vào chỗ trống',
          template: 'Trong phản ứng hoá học, các nguyên tử không mất đi mà chỉ ___ lại.',
          blanks: [{ accepted: ['sắp xếp'], wordBank: ['biến mất', 'sắp xếp', 'nhân đôi'] }],
          explanation:
            'Liên kết cũ đứt ra, các nguyên tử sắp xếp lại và tạo liên kết mới. Vì thế số nguyên tử mỗi loại trước và sau phản ứng luôn bằng nhau.',
          conceptIds: ['reaction', 'conservation-of-mass'],
        },
        {
          id: 'u4-cp-e10',
          type: 'balance-reaction',
          reactionId: 'methane-combustion',
          prompt: 'Cân bằng phương trình của phản ứng methane cháy: CH₄ + O₂ → CO₂ + H₂O',
          explanation:
            '4 H trong CH₄ cần 2 H₂O. Vế phải khi đó có 4 O, nên cần 2 O₂. Kết quả: CH₄ + 2O₂ → CO₂ + 2H₂O.',
          conceptIds: ['balancing', 'combustion'],
        },
        {
          id: 'u4-cp-e11',
          type: 'order-steps',
          prompt: 'Sắp xếp các bước lập một phương trình hoá học',
          steps: [
            { id: 's1', text: 'Viết sơ đồ phản ứng với công thức đúng của các chất' },
            { id: 's2', text: 'Đếm số nguyên tử mỗi nguyên tố ở từng vế' },
            { id: 's3', text: 'Thêm hệ số trước công thức cho đến khi hai vế bằng nhau' },
            { id: 's4', text: 'Đếm lại lần cuối để kiểm tra' },
          ],
          explanation:
            'Công thức phải đúng trước đã, vì sau đó bạn chỉ được đổi hệ số. Đếm, thêm hệ số, rồi đếm lại.',
          conceptIds: ['balancing', 'chemical-equation'],
        },
        {
          id: 'u4-cp-e12',
          type: 'balance-reaction',
          reactionId: 'ammonia-synthesis',
          prompt: 'Cân bằng phương trình của phản ứng tổng hợp ammonia: N₂ + H₂ → NH₃',
          explanation:
            '2 N ở vế trái cần 2 NH₃. Hai phân tử NH₃ có 6 H, nên cần 3 H₂. Kết quả: N₂ + 3H₂ → 2NH₃.',
          conceptIds: ['balancing', 'chemical-equation'],
        },
      ],
      baseXp: 20,
    },
  ],
}
