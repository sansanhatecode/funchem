import type { UnitInput } from '../../schema/lesson.js'

/**
 * Unit 4: Phản ứng hoá học đầu tiên
 * 5 bài học + checkpoint: chất phản ứng và sản phẩm, dấu hiệu phản ứng,
 * bảo toàn khối lượng, hệ số và cân bằng phương trình, phản ứng quanh ta.
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
          'Lớp gỉ ấy không phải là sắt bị bẩn. Các nguyên tử iron (sắt) đã kết hợp với oxygen trong không khí thành một chất mới: iron(III) oxide.',
          'Quá trình biến chất này thành chất khác gọi là phản ứng hoá học. Chất ban đầu gọi là chất phản ứng (còn gọi là chất tham gia), chất mới sinh ra gọi là sản phẩm.',
          'Trong phản ứng, các nguyên tử không biến mất. Chúng chỉ rời bạn cũ và sắp xếp lại thành chất mới. Con số đứng trước mỗi công thức trong hình cho biết cần mấy nguyên tử hay phân tử. Bài 4 sẽ nói kỹ.',
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
            { id: 'b', text: 'Chất phản ứng' },
            { id: 'c', text: 'Dung môi' },
          ],
          correctOptionId: 'a',
          explanation:
            'Chất có lúc đầu là chất phản ứng. Chất mới sinh ra sau phản ứng là sản phẩm.',
          conceptIds: ['reactants-products', 'reaction'],
        },
        {
          id: 'u4-l1-e2',
          type: 'sort',
          prompt:
            'Bếp biogas cháy: methane và oxygen biến thành carbon dioxide và nước. Xếp mỗi chất vào đúng nhóm',
          groups: [
            { id: 'reactant', label: 'Chất phản ứng' },
            { id: 'product', label: 'Sản phẩm' },
          ],
          items: [
            { id: 'i1', moleculeId: 'co2', text: 'Carbon dioxide', groupId: 'product' },
            { id: 'i2', moleculeId: 'ch4', text: 'Methane', groupId: 'reactant' },
            { id: 'i3', moleculeId: 'h2o', text: 'Nước', groupId: 'product' },
            { id: 'i4', moleculeId: 'o2', text: 'Oxygen', groupId: 'reactant' },
          ],
          explanation:
            'Methane và oxygen có từ đầu nên là chất phản ứng. Carbon dioxide và nước sinh ra sau khi cháy nên là sản phẩm.',
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
            'Iron (sắt) và oxygen là hai chất phản ứng. Chúng kết hợp thành iron(III) oxide, tức gỉ sắt. Đó là sản phẩm.',
          conceptIds: ['reactants-products', 'oxidation'],
        },
        {
          id: 'u4-l1-e4',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Iron (sắt) + oxygen → iron(III) oxide (gỉ sắt). Các chất đứng trước mũi tên là ___, chất đứng sau mũi tên là ___.',
          blanks: [
            { accepted: ['chất phản ứng'], wordBank: ['chất phản ứng', 'sản phẩm', 'dung môi'] },
            { accepted: ['sản phẩm'], wordBank: ['chất phản ứng', 'sản phẩm', 'dung môi'] },
          ],
          explanation:
            'Mũi tên đọc là "tạo thành". Chất phản ứng viết bên trái mũi tên, sản phẩm viết bên phải.',
          conceptIds: ['reactants-products', 'chemical-equation'],
        },
        {
          id: 'u4-l1-e5',
          type: 'true-false',
          prompt:
            'Trong phản ứng hoá học, các nguyên tử cũ bị phá huỷ và nguyên tử mới được tạo ra.',
          answer: false,
          explanation:
            'Nguyên tử không mất đi và cũng không sinh thêm. Chỉ liên kết giữa chúng đứt ra rồi nối lại theo cách khác, tạo thành chất mới.',
          conceptIds: ['reaction', 'conservation-of-mass'],
        },
        {
          id: 'u4-l1-e6',
          type: 'order-steps',
          prompt: 'Điều gì xảy ra ở cấp nguyên tử khi methane cháy? Sắp xếp theo thứ tự',
          steps: [
            { id: 's1', text: 'Phân tử methane và phân tử oxygen va vào nhau' },
            { id: 's2', text: 'Các liên kết cũ đứt ra' },
            { id: 's3', text: 'Các nguyên tử sắp xếp lại' },
            { id: 's4', text: 'Liên kết mới hình thành, tạo ra carbon dioxide và nước' },
          ],
          explanation:
            'Phản ứng nào cũng theo kịch bản này: liên kết cũ đứt, nguyên tử sắp xếp lại, liên kết mới hình thành.',
          conceptIds: ['reaction'],
        },
        {
          id: 'u4-l1-e7',
          type: 'match-pairs',
          prompt: 'Nối chất phản ứng với sản phẩm của chúng',
          pairs: [
            {
              left: { id: 'l1', text: 'Iron (sắt) + oxygen' },
              right: { id: 'r1', text: 'Iron(III) oxide' },
            },
            { left: { id: 'l2', text: 'Hydrogen + oxygen' }, right: { id: 'r2', text: 'Nước' } },
            {
              left: { id: 'l3', text: 'Methane + oxygen' },
              right: { id: 'r3', text: 'Carbon dioxide + nước' },
            },
            {
              left: { id: 'l4', text: 'Carbon + oxygen' },
              right: { id: 'r4', text: 'Carbon dioxide' },
            },
          ],
          explanation:
            'Sản phẩm chỉ chứa những nguyên tố đã có trong chất phản ứng. Carbon cháy không thể sinh ra nước vì không có hydrogen. Methane CH₄ có cả hydrogen nên sinh ra cả nước.',
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
          prompt: 'Nước đá tan thành nước lỏng là một phản ứng hoá học.',
          visual: { id: 'v', image: 'ice-cubes' },
          answer: false,
          explanation:
            'Trước và sau đều là H₂O, không có chất mới. Đó là biến đổi vật lí. Phản ứng hoá học phải tạo ra chất mới.',
          conceptIds: ['reaction', 'physical-change'],
        },
        {
          id: 'u4-l1-e10',
          type: 'mcq',
          prompt:
            'Nhỏ oxy già (hydrogen peroxide) lên vết xước, nó tách thành nước và khí oxygen. Phản ứng này có mấy chất phản ứng?',
          visual: { id: 'v', image: 'hydrogen-peroxide' },
          options: [
            { id: 'a', text: '1' },
            { id: 'b', text: '2' },
            { id: 'c', text: '3' },
          ],
          correctOptionId: 'a',
          explanation:
            'Chỉ có một chất phản ứng là hydrogen peroxide, nhưng có hai sản phẩm là nước và khí oxygen. Phản ứng không nhất thiết phải có hai chất gặp nhau.',
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
          'Bọt đó chứa khí carbon dioxide, một chất mới vừa sinh ra. Baking soda (NaHCO₃) đã phản ứng với acetic acid (CH₃COOH) trong giấm.',
          'Ta không nhìn thấy nguyên tử, nhưng có thể nhận ra phản ứng qua các dấu hiệu: sủi bọt khí, đổi màu, toả nhiệt hay phát sáng, hoặc xuất hiện chất rắn mới (kết tủa).',
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
              left: { id: 'l4', text: 'Thổi hơi vào cốc nước vôi trong' },
              right: { id: 'r4', text: 'Xuất hiện chất rắn làm nước vẩn đục' },
            },
          ],
          explanation:
            'Bốn dấu hiệu thường gặp: đổi màu, sủi bọt khí, toả nhiệt hay phát sáng, và xuất hiện chất rắn. Khí carbon dioxide trong hơi thở phản ứng với nước vôi trong, tạo ra calcium carbonate, một chất rắn màu trắng không tan.',
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
          prompt: 'Có phản ứng hoá học hay không?',
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
            { id: 'i5', text: 'Bánh nở phồng trong lò', image: 'baking-cake', groupId: 'yes' },
            { id: 'i6', text: 'Viên đá tan trong ly', image: 'ice-cubes', groupId: 'no' },
          ],
          explanation:
            'Oxy già sủi bọt vì sinh ra khí oxygen, pháo bông cháy thành chất mới, baking soda trong bột bánh gặp nóng sinh ra khí carbon dioxide. Sôi, hoà tan và tan chảy thì không tạo ra chất mới.',
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
            'Na là sodium (natri), không phải nitrogen. Số 3 chỉ thuộc về chữ O đứng ngay trước nó. Tên hoá học của baking soda là sodium hydrogencarbonate.',
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
            'Giả sử giấm và baking soda phản ứng vừa hết với nhau. Khi bọt đã tan, trong cốc còn lại gì?',
          options: [
            { id: 'a', text: 'Vẫn là giấm và baking soda như ban đầu' },
            { id: 'b', text: 'Không còn gì cả' },
            { id: 'c', text: 'Nước và sodium acetate hoà tan trong đó' },
          ],
          correctOptionId: 'c',
          explanation:
            'Phản ứng tạo ra ba sản phẩm: khí carbon dioxide bay đi, còn nước và sodium acetate ở lại. Sodium acetate tan trong nước nên bạn không nhìn thấy nó.',
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
            'Chỉ khi hai chất phản ứng gặp nhau thì phản ứng mới bắt đầu. Khí sinh ra chiếm nhiều chỗ hơn hẳn nên đẩy bọt trào lên.',
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
          'Bật bếp biogas: mỗi phân tử methane gặp 2 phân tử oxygen, cháy thành 1 phân tử carbon dioxide và 2 phân tử nước. Hãy thử đếm số nguyên tử trước và sau phản ứng.',
          'Trước: 1 carbon, 4 hydrogen, 4 oxygen. Sau: vẫn 1 carbon, 4 hydrogen, 4 oxygen. Không nguyên tử nào mất đi, không nguyên tử nào sinh thêm. Chúng chỉ đổi chỗ.',
          'Nguyên tử còn đủ nên tổng khối lượng cũng không đổi. Đó là định luật bảo toàn khối lượng: tổng khối lượng các chất phản ứng bằng tổng khối lượng các sản phẩm.',
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
            { id: 'b', text: 'Trạng thái của các chất' },
            { id: 'c', text: 'Số nguyên tử của mỗi nguyên tố' },
          ],
          correctOptionId: 'c',
          explanation:
            'Nguyên tử chỉ sắp xếp lại nên số nguyên tử mỗi loại không đổi. Số phân tử thì có thể thay đổi: 2 phân tử H₂ và 1 phân tử O₂ tạo thành 2 phân tử H₂O.',
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
            '12 + 32 = 44. Tổng khối lượng các chất phản ứng luôn bằng tổng khối lượng các sản phẩm.',
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
            'Khối lượng không mất đi, nó theo khí carbon dioxide bay vào không khí. Nếu giữ lại được toàn bộ lượng khí đó thì cân sẽ chỉ đúng như lúc đầu. Đừng tự đậy kín chai để thử: khí sinh ra có thể làm bật nắp hoặc vỡ chai.',
          conceptIds: ['conservation-of-mass'],
        },
        {
          id: 'u4-l3-e7',
          type: 'match-pairs',
          prompt:
            'Sau "núi lửa", các nguyên tử nằm trong ba sản phẩm. Nối mỗi sản phẩm với nơi nó ở',
          pairs: [
            {
              left: { id: 'l1', moleculeId: 'co2', text: 'Carbon dioxide' },
              right: { id: 'r1', text: 'Chất khí, bay vào không khí' },
            },
            {
              left: { id: 'l2', moleculeId: 'h2o', text: 'Nước' },
              right: { id: 'r2', text: 'Chất lỏng, ở lại trong cốc' },
            },
            {
              left: { id: 'l3', moleculeId: 'c2h3nao2', text: 'Sodium acetate' },
              right: { id: 'r3', text: 'Chất rắn, tan vào nước trong cốc' },
            },
          ],
          explanation:
            'Cộng cả ba sản phẩm, kể cả phần khí đã bay đi, khối lượng vẫn đúng bằng giấm và baking soda đã phản ứng.',
          conceptIds: ['conservation-of-mass', 'reactants-products'],
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
            'Gỉ sắt gồm các nguyên tử iron (sắt) ban đầu cộng thêm các nguyên tử oxygen lấy từ không khí. Khối lượng tăng thêm đúng bằng lượng oxygen đã kết hợp vào.',
          conceptIds: ['conservation-of-mass', 'oxidation'],
        },
        {
          id: 'u4-l3-e10',
          type: 'build-molecule',
          prompt: 'Ghép sodium acetate CH₃COONa, chất ở lại trong cốc sau "núi lửa"',
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
          'Than trong bếp nướng cháy đỏ rực: mỗi nguyên tử carbon lấy một phân tử oxygen, thành một phân tử carbon dioxide. Viết gọn lại: C + O₂ → CO₂. Đó là một phương trình hoá học.',
          'Phương trình đúng phải có số nguyên tử mỗi loại bằng nhau ở hai vế. Phương trình này vừa khít: mỗi vế có 1 C và 2 O.',
          'Nếu chưa bằng thì sao? Ta viết một con số đứng trước công thức, gọi là hệ số, để lấy thêm chất đó. 2H₂O nghĩa là 2 phân tử nước, 2Mg nghĩa là 2 nguyên tử magnesium. Hệ số luôn chọn nhỏ nhất có thể: viết 2H₂ + O₂ → 2H₂O, không viết 4H₂ + 2O₂ → 4H₂O.',
          'Tuyệt đối không sửa con số nhỏ bên dưới, gọi là chỉ số. Đổi H₂O thành H₂O₂ là biến nước thành một chất khác: oxy già.',
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
            'Số đứng trước công thức là hệ số, cho biết có bao nhiêu phân tử. 2H₂O là 2 phân tử nước, tổng cộng 4 nguyên tử hydrogen và 2 nguyên tử oxygen.',
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
            'Hệ số đứng trước cho biết số phân tử. Chỉ số nhỏ bên dưới là một phần của công thức: đổi chỉ số là đổi sang chất khác.',
          conceptIds: ['coefficient', 'formula'],
        },
        {
          id: 'u4-l4-e3',
          type: 'balance-reaction',
          reactionId: 'carbon-combustion',
          prompt:
            'Cân bằng phương trình của phản ứng than cháy. Hãy đếm nguyên tử trước khi đổi hệ số!',
          explanation:
            'Mỗi vế đều có 1 C và 2 O nên phương trình đã cân bằng sẵn: C + O₂ → CO₂, mọi hệ số đều là 1. Viết 2C + 2O₂ → 2CO₂ cũng đủ nguyên tử nhưng chưa tối giản.',
          conceptIds: ['balancing', 'chemical-equation'],
        },
        {
          id: 'u4-l4-e4',
          type: 'true-false',
          prompt: 'Để cân bằng phương trình, bạn được phép đổi H₂O thành H₂O₂.',
          visual: { id: 'v', moleculeId: 'h2o2' },
          answer: false,
          explanation:
            'Đổi chỉ số là đổi sang chất khác: H₂O là nước, còn H₂O₂ là hydrogen peroxide (oxy già). Khi cân bằng, chỉ được thay đổi hệ số đứng trước công thức.',
          conceptIds: ['coefficient', 'balancing'],
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
            'Có 3 phân tử, mỗi phân tử có 2 nguyên tử oxygen: 3 × 2 = 6. Hệ số nhân với cả phân tử, tức là nhân với mọi nguyên tử trong công thức.',
          conceptIds: ['coefficient'],
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
            'Cân bằng là lặp lại hai việc: đếm, rồi thêm hệ số cho nguyên tố đang lệch. Sửa xong chỗ này có thể lệch chỗ khác, nên luôn đếm lại.',
          conceptIds: ['balancing'],
        },
        {
          id: 'u4-l4-e7',
          type: 'balance-reaction',
          reactionId: 'water-formation',
          prompt: 'Đến lượt bạn: cân bằng phản ứng tạo thành nước',
          explanation:
            'Vế trái có 2 O nên cần 2 phân tử H₂O. Khi đó vế phải có 4 H, nên cần 2 phân tử H₂. Kết quả: 2H₂ + O₂ → 2H₂O.',
          conceptIds: ['balancing', 'chemical-equation'],
        },
        {
          id: 'u4-l4-e8',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Con số đứng trước công thức, cho biết lấy mấy phân tử hay mấy nguyên tử của chất đó, gọi là ___. Con số nhỏ bên dưới, là một phần của công thức, gọi là ___.',
          blanks: [
            { accepted: ['hệ số'], wordBank: ['hệ số', 'chỉ số', 'ký hiệu'] },
            { accepted: ['chỉ số'], wordBank: ['hệ số', 'chỉ số', 'ký hiệu'] },
          ],
          explanation:
            'Trong 2H₂O, số 2 đứng trước là hệ số, số 2 nhỏ sau chữ H là chỉ số. Khi cân bằng, bạn chỉ được thay đổi hệ số.',
          conceptIds: ['coefficient'],
        },
        {
          id: 'u4-l4-e9',
          type: 'balance-reaction',
          reactionId: 'carbon-monoxide-burning',
          prompt:
            'Cân bằng phương trình của phản ứng khí carbon monoxide cháy trên bếp than tổ ong',
          explanation:
            'Carbon đã bằng nhau, chỉ oxygen bị lệch: trái 3, phải 2. Thử lấy 2 CO₂: vế phải có 2 C và 4 O. Vế trái cần 2 C nên lấy 2 CO, khi đó oxygen là 2 + 2 = 4, vừa khít. Kết quả: 2CO + O₂ → 2CO₂.',
          conceptIds: ['balancing', 'combustion'],
        },
        {
          id: 'u4-l4-e10',
          type: 'balance-reaction',
          reactionId: 'peroxide-decomposition',
          prompt:
            'Cân bằng phương trình của phản ứng oxy già sủi bọt: hydrogen peroxide tách thành nước và khí oxygen',
          explanation:
            'Một phân tử H₂O₂ tạo ra 1 phân tử H₂O thì dư 1 nguyên tử O, chưa đủ làm một phân tử O₂. Lấy 2 phân tử H₂O₂ thì vừa đủ. Kết quả: 2H₂O₂ → 2H₂O + O₂.',
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
          'Lớp thuốc bọc quanh que pháo có trộn bột kim loại. Loại cho tia sáng trắng thường có magnesium. Khi cháy, magnesium kết hợp với oxygen thành magnesium oxide, một chất rắn màu trắng, đồng thời toả nhiệt và phát sáng rất mạnh.',
          'Bếp than, bếp biogas, cây đinh gỉ, nhà máy phân đạm: quanh bạn đâu đâu cũng có phản ứng hoá học. Phương trình nào cũng cân bằng được bằng cách đếm nguyên tử.',
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
            'Magnesium và oxygen là chất phản ứng. Sản phẩm là magnesium oxide MgO, một chất rắn màu trắng, khác hẳn kim loại magnesium ánh bạc.',
          conceptIds: ['reactants-products', 'combustion'],
        },
        {
          id: 'u4-l5-e2',
          type: 'balance-reaction',
          reactionId: 'magnesium-burning',
          prompt: 'Cân bằng phương trình của phản ứng magnesium cháy',
          explanation:
            'Vế trái có 2 O nên cần 2 MgO. Khi đó vế phải có 2 Mg, nên cần 2 Mg ở vế trái. Kết quả: 2Mg + O₂ → 2MgO.',
          conceptIds: ['balancing', 'combustion'],
        },
        {
          id: 'u4-l5-e3',
          type: 'match-pairs',
          prompt: 'Nối mỗi phản ứng với sản phẩm của nó',
          pairs: [
            {
              left: { id: 'l1', text: 'Than cháy', image: 'charcoal-grill' },
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
              left: { id: 'l4', text: 'Bếp biogas cháy', image: 'biogas-stove' },
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
            'Sản phẩm chỉ chứa các nguyên tố có trong chất phản ứng. Than gồm chủ yếu là carbon nên cháy thành carbon dioxide. Methane có thêm hydrogen nên còn sinh ra nước.',
          conceptIds: ['reactants-products', 'reaction'],
        },
        {
          id: 'u4-l5-e4',
          type: 'balance-reaction',
          reactionId: 'methane-combustion',
          prompt: 'Cân bằng phương trình của phản ứng methane cháy trên bếp biogas',
          explanation:
            'CH₄ có 4 H nên cần 2 H₂O. Lúc này vế phải có 2 + 2 = 4 O, nên cần 2 O₂. Kết quả: CH₄ + 2O₂ → CO₂ + 2H₂O.',
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
            'Nhà máy phân đạm cho khí nitrogen N₂ phản ứng với khí hydrogen để tạo ra ammonia NH₃. Một phân tử N₂ tạo được mấy phân tử NH₃?',
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
          prompt: 'Cân bằng phương trình của phản ứng tổng hợp ammonia để làm phân đạm',
          explanation:
            'Vế trái có 2 N nên cần 2 NH₃. Hai phân tử NH₃ có 6 H, nên cần 3 H₂. Kết quả: N₂ + 3H₂ → 2NH₃.',
          conceptIds: ['balancing', 'chemical-equation'],
        },
        {
          id: 'u4-l5-e8',
          type: 'sort',
          prompt: 'Phản ứng nào là sự cháy?',
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
            'Sự cháy là phản ứng với oxygen xảy ra nhanh, toả nhiều nhiệt và phát sáng. Sắt gỉ cũng là phản ứng với oxygen nhưng rất chậm, không phát sáng, nên không phải sự cháy.',
          conceptIds: ['combustion', 'oxidation'],
        },
        {
          id: 'u4-l5-e9',
          type: 'balance-reaction',
          reactionId: 'rusting',
          prompt: 'Thử thách: cân bằng phản ứng sắt bị gỉ',
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
            'Sự cháy cần oxygen. Úp chiếc lọ lên ngọn nến, oxygen bên trong giảm dần, đến lúc không còn đủ thì nến tắt.',
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
          prompt: 'Trong phản ứng CH₄ + 2O₂ → CO₂ + 2H₂O, những chất nào là chất phản ứng?',
          options: [
            { id: 'a', text: 'CH₄ và O₂' },
            { id: 'b', text: 'CO₂ và H₂O' },
            { id: 'c', text: 'CH₄ và CO₂' },
          ],
          correctOptionId: 'a',
          explanation:
            'Chất phản ứng đứng bên trái mũi tên: methane CH₄ và oxygen O₂. Bên phải mũi tên là các sản phẩm.',
          conceptIds: ['reactants-products', 'chemical-equation'],
        },
        {
          id: 'u4-cp-e2',
          type: 'sort',
          prompt: 'Có chất mới sinh ra hay không?',
          groups: [
            { id: 'reaction', label: 'Phản ứng hoá học' },
            { id: 'physical', label: 'Biến đổi vật lí' },
          ],
          items: [
            {
              id: 'i1',
              text: 'Giấm gặp baking soda',
              image: 'vinegar-volcano',
              groupId: 'reaction',
            },
            { id: 'i2', text: 'Nước sôi', image: 'boiling-kettle', groupId: 'physical' },
            { id: 'i3', text: 'Pháo bông cháy', image: 'sparkler', groupId: 'reaction' },
            { id: 'i4', text: 'Đá tan', image: 'ice-cubes', groupId: 'physical' },
            { id: 'i5', text: 'Đinh sắt gỉ', image: 'rusty-nail', groupId: 'reaction' },
            { id: 'i6', text: 'Đường tan trong trà', image: 'sugar-tea', groupId: 'physical' },
          ],
          explanation:
            'Phản ứng hoá học tạo ra chất mới: khí carbon dioxide, magnesium oxide, gỉ sắt. Sôi, tan chảy và hoà tan chỉ làm chất đổi dạng.',
          conceptIds: ['reaction', 'physical-change', 'chemical-change'],
        },
        {
          id: 'u4-cp-e3',
          type: 'balance-reaction',
          reactionId: 'water-formation',
          prompt: 'Cân bằng phương trình của phản ứng tạo thành nước',
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
          prompt: '2NH₃ có tổng cộng bao nhiêu nguyên tử hydrogen?',
          visual: { id: 'v', moleculeId: 'nh3' },
          options: [
            { id: 'a', text: '3' },
            { id: 'b', text: '5' },
            { id: 'c', text: '6' },
          ],
          correctOptionId: 'c',
          explanation: 'Có 2 phân tử, mỗi phân tử có 3 nguyên tử hydrogen: 2 × 3 = 6.',
          conceptIds: ['coefficient'],
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
          prompt: 'Cân bằng phương trình của phản ứng magnesium cháy',
          explanation:
            'Một phân tử O₂ có 2 nguyên tử oxygen, đủ cho 2 MgO. Vậy cần 2 Mg. Kết quả: 2Mg + O₂ → 2MgO.',
          conceptIds: ['balancing', 'combustion'],
        },
        {
          id: 'u4-cp-e8',
          type: 'mcq',
          prompt:
            '8,4 g baking soda phản ứng vừa hết với 6 g acetic acid. Tổng khối lượng các sản phẩm, kể cả khí bay đi, là bao nhiêu?',
          options: [
            { id: 'a', text: '2,4 g' },
            { id: 'b', text: '8,4 g' },
            { id: 'c', text: '14,4 g' },
          ],
          correctOptionId: 'c',
          explanation:
            '8,4 + 6 = 14,4. Tổng khối lượng sản phẩm bằng tổng khối lượng chất phản ứng, kể cả khi một sản phẩm là chất khí.',
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
          prompt: 'Cân bằng phương trình của phản ứng methane cháy',
          explanation:
            '4 H trong CH₄ cần 2 H₂O. Vế phải khi đó có 4 O, nên cần 2 O₂. Kết quả: CH₄ + 2O₂ → CO₂ + 2H₂O.',
          conceptIds: ['balancing', 'combustion'],
        },
        {
          id: 'u4-cp-e11',
          type: 'order-steps',
          prompt: 'Sắp xếp các bước cân bằng một phương trình hoá học',
          steps: [
            { id: 's1', text: 'Viết đúng công thức các chất ở hai vế' },
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
          prompt: 'Cân bằng phương trình của phản ứng tổng hợp ammonia',
          explanation:
            '2 N ở vế trái cần 2 NH₃. Hai phân tử NH₃ có 6 H, nên cần 3 H₂. Kết quả: N₂ + 3H₂ → 2NH₃.',
          conceptIds: ['balancing', 'chemical-equation'],
        },
      ],
      baseXp: 20,
    },
  ],
}
