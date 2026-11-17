import type { UnitInput } from '../../schema/lesson.js'

/**
 * Unit 2: Nguyên tử bắt tay nhau
 * 5 bài học + checkpoint: phân tử, đọc công thức, liên kết cộng hoá trị, liên kết ion,
 * đơn chất, hợp chất, hỗn hợp.
 */
export const unit02: UnitInput = {
  id: 'u2-bonding',
  order: 2,
  title: 'Nguyên tử bắt tay nhau',
  tagline: 'Phân tử, liên kết và cách đọc công thức',
  color: '#1CB0F6',
  lessons: [
    // ───────────────────────── Bài 1: Phân tử ─────────────────────────
    {
      id: 'u2-l1-molecules',
      title: 'Nguyên tử kết bạn',
      intro: {
        title: 'Hiếm khi đi một mình',
        story: [
          'Ở Unit 1, bạn chia nhỏ cây đinh sắt mãi và gặp nguyên tử. Giờ hãy tưởng tượng làm vậy với ly nước trên bàn: chia đôi, rồi lại chia đôi.',
          'Lần này, hạt nhỏ nhất mà vẫn còn là nước không phải một nguyên tử. Đó là một nhóm 3 nguyên tử dính chặt vào nhau: 1 nguyên tử oxygen và 2 nguyên tử hydrogen.',
          'Khi các nguyên tử dính chặt vào nhau như vậy, ta nói chúng liên kết với nhau. Một nhóm nguyên tử liên kết với nhau gọi là phân tử. Ly nước chứa vô số phân tử nước giống hệt nhau.',
          'Khí oxygen bạn đang hít thở cũng thế. Các nguyên tử oxygen không bay lẻ loi mà đi thành từng đôi, mỗi đôi là một phân tử oxygen.',
        ],
        visual: { type: 'molecule', moleculeId: 'h2o' },
      },
      exercises: [
        {
          id: 'u2-l1-e1',
          type: 'mcq',
          prompt: 'Một nhóm nguyên tử dính chặt với nhau được gọi là gì?',
          options: [
            { id: 'a', text: 'Phân tử' },
            { id: 'b', text: 'Hạt nhân' },
            { id: 'c', text: 'Nguyên tố' },
          ],
          correctOptionId: 'a',
          explanation:
            'Phân tử là nhóm từ hai nguyên tử trở lên liên kết với nhau. Hạt nhân là phần ở giữa một nguyên tử, còn nguyên tố là một loại nguyên tử.',
          conceptIds: ['molecule'],
        },
        {
          id: 'u2-l1-e2',
          type: 'mcq',
          prompt: 'Hình nào là phân tử nước?',
          options: [
            { id: 'a', moleculeId: 'o2' },
            { id: 'b', moleculeId: 'h2' },
            { id: 'c', moleculeId: 'h2o' },
          ],
          correctOptionId: 'c',
          explanation:
            'Phân tử nước gồm 1 nguyên tử oxygen (đỏ) ở giữa và 2 nguyên tử hydrogen (trắng) ở hai bên. Hai hình còn lại chỉ có một loại nguyên tử: hai O là phân tử khí oxygen, hai H là phân tử khí hydrogen.',
          conceptIds: ['molecule'],
        },
        {
          id: 'u2-l1-e3',
          type: 'build-molecule',
          prompt: 'Ghép một phân tử nước',
          targetMoleculeId: 'h2o',
          availableAtoms: { H: 4, O: 2, C: 1 },
          explanation: 'Mỗi phân tử nước cần đúng 2 nguyên tử hydrogen và 1 nguyên tử oxygen.',
          conceptIds: ['molecule'],
        },
        {
          id: 'u2-l1-e4',
          type: 'true-false',
          prompt: 'Phân tử khí oxygen gồm 2 nguyên tử oxygen liên kết với nhau.',
          visual: { id: 'v', moleculeId: 'o2' },
          answer: true,
          explanation:
            'Đúng. Khí oxygen bạn hít thở gồm rất nhiều phân tử, mỗi phân tử là hai nguyên tử oxygen đi thành đôi.',
          conceptIds: ['molecule'],
        },
        {
          id: 'u2-l1-e5',
          type: 'match-pairs',
          prompt: 'Nối phân tử với tên của nó',
          pairs: [
            { left: { id: 'l1', moleculeId: 'h2o' }, right: { id: 'r1', text: 'Nước' } },
            { left: { id: 'l2', moleculeId: 'o2' }, right: { id: 'r2', text: 'Khí oxygen' } },
            { left: { id: 'l3', moleculeId: 'h2' }, right: { id: 'r3', text: 'Khí hydrogen' } },
          ],
          explanation:
            'Hai nguyên tử O là khí oxygen, hai nguyên tử H là khí hydrogen. Một O nối với hai H là nước.',
          conceptIds: ['molecule'],
        },
        {
          id: 'u2-l1-e6',
          type: 'build-molecule',
          prompt: 'Ghép một phân tử khí oxygen',
          targetMoleculeId: 'o2',
          availableAtoms: { O: 3, H: 2 },
          explanation:
            'Phân tử khí oxygen gồm đúng 2 nguyên tử oxygen, không cần thêm nguyên tử nào khác.',
          conceptIds: ['molecule'],
        },
        {
          id: 'u2-l1-e7',
          type: 'fill-blank',
          prompt: 'Chọn số đúng cho từng chỗ trống',
          template: 'Một phân tử nước gồm ___ nguyên tử hydrogen và ___ nguyên tử oxygen.',
          blanks: [
            { accepted: ['2', 'hai'], wordBank: ['1', '2', '3'] },
            { accepted: ['1', 'một'], wordBank: ['1', '2', '3'] },
          ],
          explanation: 'Phân tử nước nào cũng vậy: 2 hydrogen và 1 oxygen, không hơn không kém.',
          conceptIds: ['molecule'],
        },
        {
          id: 'u2-l1-e8',
          type: 'sort',
          prompt: 'Hình nào vẽ một nguyên tử đứng riêng, hình nào vẽ một phân tử?',
          groups: [
            { id: 'atom', label: 'Một nguyên tử' },
            { id: 'molecule', label: 'Một phân tử' },
          ],
          items: [
            { id: 'i1', moleculeId: 'he', groupId: 'atom' },
            { id: 'i2', moleculeId: 'h2', groupId: 'molecule' },
            { id: 'i3', moleculeId: 'h2o', groupId: 'molecule' },
            { id: 'i4', moleculeId: 'au', groupId: 'atom' },
            { id: 'i5', moleculeId: 'o2', groupId: 'molecule' },
          ],
          explanation:
            'Phân tử có từ hai nguyên tử trở lên liên kết với nhau. Hình He và hình Au mỗi hình chỉ vẽ một nguyên tử. Khí helium trong bóng bay gồm các nguyên tử bay riêng lẻ, không liên kết với nhau.',
          conceptIds: ['molecule', 'atom'],
        },
        {
          id: 'u2-l1-e9',
          type: 'true-false',
          prompt: 'Phân tử nào cũng phải gồm các nguyên tử khác loại.',
          answer: false,
          explanation:
            'Không bắt buộc. Phân tử khí oxygen gồm 2 nguyên tử cùng loại, còn phân tử nước gồm 2 loại nguyên tử khác nhau. Chỉ cần từ hai nguyên tử trở lên liên kết với nhau là thành phân tử.',
          conceptIds: ['molecule', 'element'],
        },
        {
          id: 'u2-l1-e10',
          type: 'order-steps',
          prompt: 'Sắp xếp từ nhỏ đến lớn',
          steps: [
            { id: 's1', text: 'Một nguyên tử hydrogen' },
            { id: 's2', text: 'Một phân tử nước' },
            { id: 's3', text: 'Một giọt nước' },
            { id: 's4', text: 'Một ly nước' },
          ],
          explanation:
            'Nguyên tử ghép thành phân tử. Một giọt nước nhỏ đã chứa hơn một nghìn tỉ tỉ phân tử nước.',
          conceptIds: ['molecule', 'atom'],
        },
      ],
      unlocksMolecules: ['h2o', 'o2'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 2: Đọc công thức ─────────────────────────
    {
      id: 'u2-l2-formulas',
      title: 'Đọc công thức hoá học',
      intro: {
        title: 'H₂O, CO₂ nói gì?',
        story: [
          'Mở một lon nước ngọt, bạn nghe tiếng xì. Đó là khí carbon dioxide thoát ra. Các nhà hoá học ghi chất khí này thật gọn: CO₂.',
          'CO₂ là một công thức hoá học. Giống công thức nấu ăn, nó cho biết một phân tử gồm những nguyên tử nào và mỗi loại có mấy nguyên tử.',
          'Cách đọc: mỗi kí hiệu là một nguyên tố. Con số nhỏ ở chân, gọi là chỉ số, cho biết có mấy nguyên tử của nguyên tố đứng ngay trước nó. Không ghi số nghĩa là 1.',
          'Vậy mỗi phân tử CO₂ có 1 nguyên tử carbon và 2 nguyên tử oxygen. Còn H₂O, công thức của nước, là 2 nguyên tử hydrogen và 1 nguyên tử oxygen.',
        ],
        visual: { type: 'molecule', moleculeId: 'co2' },
      },
      exercises: [
        {
          id: 'u2-l2-e1',
          type: 'mcq',
          prompt: 'Đây là phân tử CO₂. Nó có mấy nguyên tử oxygen?',
          visual: { id: 'v', moleculeId: 'co2' },
          options: [
            { id: 'a', text: '1' },
            { id: 'b', text: '2' },
            { id: 'c', text: '3' },
          ],
          correctOptionId: 'b',
          explanation:
            'Chỉ số 2 đứng ngay sau chữ O cho biết có 2 nguyên tử oxygen. Trong hình là hai quả bóng đỏ. Sau chữ C không ghi số nên chỉ có 1 nguyên tử carbon.',
          conceptIds: ['formula'],
        },
        {
          id: 'u2-l2-e2',
          type: 'mcq',
          prompt: 'Trong công thức NH₃, sau chữ N không ghi số nào. Điều đó nghĩa là gì?',
          options: [
            { id: 'a', text: 'Phân tử không có nitrogen' },
            { id: 'b', text: 'Có 3 nguyên tử nitrogen' },
            { id: 'c', text: 'Có 1 nguyên tử nitrogen' },
          ],
          correctOptionId: 'c',
          explanation:
            'Không ghi số nghĩa là 1. Chỉ số 3 chỉ thuộc về chữ H đứng ngay trước nó. Vậy NH₃ có 1 nguyên tử nitrogen và 3 nguyên tử hydrogen.',
          conceptIds: ['formula'],
        },
        {
          id: 'u2-l2-e3',
          type: 'mcq',
          prompt: 'Hình nào ứng với công thức CH₄?',
          options: [
            { id: 'a', moleculeId: 'ch4' },
            { id: 'b', moleculeId: 'nh3' },
            { id: 'c', moleculeId: 'co2' },
            { id: 'd', moleculeId: 'h2o' },
          ],
          correctOptionId: 'a',
          explanation:
            'CH₄ gồm 1 nguyên tử carbon và 4 nguyên tử hydrogen: một quả bóng C ở giữa, bốn quả bóng H xung quanh. Chất này tên là methane, khí cháy được trong bếp biogas.',
          conceptIds: ['formula', 'molecule'],
        },
        {
          id: 'u2-l2-e4',
          type: 'match-pairs',
          prompt: 'Nối công thức với thành phần của phân tử',
          pairs: [
            { left: { id: 'l1', text: 'H₂O' }, right: { id: 'r1', text: '2 hydrogen, 1 oxygen' } },
            { left: { id: 'l2', text: 'CO₂' }, right: { id: 'r2', text: '1 carbon, 2 oxygen' } },
            { left: { id: 'l3', text: 'CH₄' }, right: { id: 'r3', text: '1 carbon, 4 hydrogen' } },
            {
              left: { id: 'l4', text: 'NH₃' },
              right: { id: 'r4', text: '1 nitrogen, 3 hydrogen' },
            },
          ],
          explanation:
            'Đọc từng kí hiệu để biết nguyên tố, rồi nhìn chỉ số ngay sau nó để biết có mấy nguyên tử. Không có chỉ số nghĩa là 1.',
          conceptIds: ['formula'],
        },
        {
          id: 'u2-l2-e5',
          type: 'build-molecule',
          prompt: 'Ghép phân tử ammonia NH₃',
          targetMoleculeId: 'nh3',
          availableAtoms: { N: 2, H: 5, O: 1 },
          explanation:
            'NH₃ cần 1 nguyên tử nitrogen và 3 nguyên tử hydrogen. Ammonia là khí có mùi khai rất nồng.',
          conceptIds: ['formula', 'molecule'],
        },
        {
          id: 'u2-l2-e6',
          type: 'true-false',
          prompt: 'CO (trong hình) và CO₂ là cùng một chất.',
          visual: { id: 'v', moleculeId: 'co' },
          answer: false,
          explanation:
            'Chỉ hơn kém nhau một nguyên tử oxygen mà thành hai chất khác hẳn. CO₂ có trong nước ngọt có ga. Còn CO, tên là carbon monoxide, là khí độc sinh ra khi đốt than trong phòng kín.',
          conceptIds: ['formula'],
        },
        {
          id: 'u2-l2-e7',
          type: 'mcq',
          prompt:
            'Ethanol (cồn) là chất chính trong chai cồn sát khuẩn. Phân tử ethanol có công thức C₂H₆O. Nó có tổng cộng bao nhiêu nguyên tử?',
          visual: { id: 'v', moleculeId: 'c2h6o' },
          options: [
            { id: 'a', text: '3' },
            { id: 'b', text: '8' },
            { id: 'c', text: '9' },
          ],
          correctOptionId: 'c',
          explanation:
            '2 carbon + 6 hydrogen + 1 oxygen = 9 nguyên tử. Sau chữ O không ghi số nghĩa là 1, bỏ sót nó thì chỉ đếm được 8. Còn 3 là số nguyên tố, không phải số nguyên tử.',
          conceptIds: ['formula'],
        },
        {
          id: 'u2-l2-e8',
          type: 'build-molecule',
          prompt: 'Ghép phân tử khí carbon dioxide CO₂',
          targetMoleculeId: 'co2',
          availableAtoms: { C: 2, O: 3, H: 2 },
          explanation:
            'CO₂ cần 1 nguyên tử carbon và 2 nguyên tử oxygen. Nếu chỉ lấy 1 oxygen, bạn sẽ được CO, một chất khác.',
          conceptIds: ['formula', 'molecule'],
        },
        {
          id: 'u2-l2-e9',
          type: 'sort',
          prompt: 'Đếm tổng số nguyên tử trong mỗi phân tử',
          groups: [
            { id: 'three', label: 'Đúng 3 nguyên tử' },
            { id: 'more', label: 'Nhiều hơn 3 nguyên tử' },
          ],
          items: [
            { id: 'i1', text: 'H₂O', groupId: 'three' },
            { id: 'i2', text: 'NH₃', groupId: 'more' },
            { id: 'i3', text: 'CO₂', groupId: 'three' },
            { id: 'i4', text: 'CH₄', groupId: 'more' },
            { id: 'i5', text: 'C₂H₆O', groupId: 'more' },
          ],
          explanation:
            'H₂O có 2 + 1 = 3 nguyên tử, CO₂ có 1 + 2 = 3. NH₃ có 4, CH₄ có 5, còn C₂H₆O có tới 9 nguyên tử.',
          conceptIds: ['formula'],
        },
        {
          id: 'u2-l2-e10',
          type: 'fill-blank',
          prompt: 'Chọn công thức đúng',
          template:
            'Một phân tử có 1 nguyên tử carbon và 4 nguyên tử hydrogen. Công thức của nó là ___.',
          blanks: [{ accepted: ['CH₄', 'CH4'], wordBank: ['C₄H', 'CH₄', 'CH₃', 'C₄H₄'] }],
          explanation:
            'Chỉ số đứng ngay sau nguyên tố mà nó đếm. 4 hydrogen viết là H₄, 1 carbon chỉ viết C. Ghép lại thành CH₄. Còn C₄H lại là 4 carbon và 1 hydrogen.',
          conceptIds: ['formula'],
        },
      ],
      unlocksMolecules: ['co2', 'nh3'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 3: Liên kết cộng hoá trị ─────────────────────────
    {
      id: 'u2-l3-covalent',
      title: 'Cùng nắm tay',
      intro: {
        title: 'Chia sẻ để gắn bó',
        story: [
          'Tên lửa này bay lên nhờ đốt hydrogen. Trong khí hydrogen, các nguyên tử không đi lẻ mà dính với nhau thành từng đôi, mỗi đôi là một phân tử H₂. Thứ gì giữ chúng lại với nhau?',
          'Đó là electron, hạt mang điện âm bạn đã gặp ở Unit 1. Mỗi nguyên tử hydrogen góp 1 electron để cả hai dùng chung. Cặp electron dùng chung này hút cả hai hạt nhân mang điện dương, nên giữ hai nguyên tử ở cạnh nhau.',
          'Liên kết tạo ra nhờ dùng chung electron gọi là liên kết cộng hoá trị. Bạn có thể hình dung nó như hai người bạn nắm tay nhau. Trong hình, mỗi cái nắm tay được vẽ bằng một vạch nối.',
          'Một cặp electron dùng chung là một liên kết đơn. Có những nguyên tử dùng chung hai hoặc ba cặp, như thể nắm nhau bằng hai, ba tay. Đó là liên kết đôi và liên kết ba.',
        ],
        visual: { type: 'molecule', moleculeId: 'h2' },
      },
      exercises: [
        {
          id: 'u2-l3-e1',
          type: 'mcq',
          prompt: 'Trong liên kết cộng hoá trị, các nguyên tử làm gì với electron?',
          options: [
            { id: 'a', text: 'Một nguyên tử lấy hẳn electron của nguyên tử kia' },
            { id: 'b', text: 'Góp electron để dùng chung' },
            { id: 'c', text: 'Biến electron thành proton' },
          ],
          correctOptionId: 'b',
          explanation:
            'Trong liên kết cộng hoá trị, mỗi nguyên tử góp electron để dùng chung. Cặp electron dùng chung hút cả hai hạt nhân nên giữ hai nguyên tử ở cạnh nhau. Chuyện một nguyên tử lấy hẳn electron thuộc về một kiểu liên kết khác, bạn sẽ gặp ở bài sau.',
          conceptIds: ['covalent-bond'],
        },
        {
          id: 'u2-l3-e2',
          type: 'mcq',
          prompt: 'Hai nguyên tử oxygen trong O₂ nối với nhau bằng hai vạch. Đó là liên kết gì?',
          visual: { id: 'v', moleculeId: 'o2' },
          options: [
            { id: 'a', text: 'Liên kết đơn' },
            { id: 'b', text: 'Liên kết đôi' },
            { id: 'c', text: 'Liên kết ba' },
          ],
          correctOptionId: 'b',
          explanation:
            'Mỗi vạch là một cặp electron dùng chung. Hai vạch là hai cặp, tức liên kết đôi. Vạch nối chỉ là cách vẽ: giữa hai nguyên tử không có cái que nào, chỉ có lực hút.',
          conceptIds: ['covalent-bond', 'multiple-bond'],
        },
        {
          id: 'u2-l3-e3',
          type: 'match-pairs',
          prompt: 'Nối phân tử với kiểu liên kết của nó',
          pairs: [
            { left: { id: 'l1', moleculeId: 'h2' }, right: { id: 'r1', text: 'Liên kết đơn' } },
            { left: { id: 'l2', moleculeId: 'o2' }, right: { id: 'r2', text: 'Liên kết đôi' } },
            { left: { id: 'l3', moleculeId: 'n2' }, right: { id: 'r3', text: 'Liên kết ba' } },
          ],
          explanation:
            'Đếm số vạch nối: H₂ có một vạch là liên kết đơn, O₂ có hai vạch là liên kết đôi, N₂ có ba vạch là liên kết ba. Dùng chung càng nhiều cặp electron, hai nguyên tử thường càng khó bị tách rời.',
          conceptIds: ['multiple-bond'],
        },
        {
          id: 'u2-l3-e4',
          type: 'build-molecule',
          prompt: 'Ghép phân tử khí nitrogen (nitơ) N₂',
          targetMoleculeId: 'n2',
          availableAtoms: { N: 3, O: 2, H: 1 },
          explanation:
            'Phân tử N₂ gồm 2 nguyên tử nitrogen nối với nhau bằng liên kết ba nên rất khó tách. Khí nitrogen chiếm gần bốn phần năm không khí quanh bạn.',
          conceptIds: ['molecule', 'multiple-bond'],
        },
        {
          id: 'u2-l3-e5',
          type: 'mcq',
          prompt: 'Trong phân tử methane CH₄, nguyên tử carbon ở giữa tạo mấy liên kết?',
          visual: { id: 'v', moleculeId: 'ch4' },
          options: [
            { id: 'a', text: '2' },
            { id: 'b', text: '3' },
            { id: 'c', text: '4' },
          ],
          correctOptionId: 'c',
          explanation:
            'Đếm các vạch nối quanh nguyên tử carbon: có 4 vạch, mỗi vạch là một liên kết đơn với một nguyên tử hydrogen. Có thể nói carbon có 4 "tay", còn mỗi nguyên tử hydrogen chỉ có 1 "tay".',
          conceptIds: ['covalent-bond'],
        },
        {
          id: 'u2-l3-e6',
          type: 'fill-blank',
          prompt: 'Điền vào chỗ trống',
          template: 'Liên kết ba gồm ___ cặp electron dùng chung.',
          blanks: [{ accepted: ['3', 'ba'], wordBank: ['1', '2', '3'] }],
          explanation:
            'Liên kết đơn là 1 cặp electron dùng chung, liên kết đôi là 2 cặp, liên kết ba là 3 cặp.',
          conceptIds: ['multiple-bond'],
        },
        {
          id: 'u2-l3-e7',
          type: 'sort',
          prompt: 'Nhìn các vạch nối và xếp phân tử vào đúng nhóm',
          groups: [
            { id: 'single', label: 'Chỉ có liên kết đơn' },
            { id: 'multiple', label: 'Có liên kết đôi hoặc ba' },
          ],
          items: [
            { id: 'i1', moleculeId: 'h2o', groupId: 'single' },
            { id: 'i2', moleculeId: 'co2', groupId: 'multiple' },
            { id: 'i3', moleculeId: 'ch4', groupId: 'single' },
            { id: 'i4', moleculeId: 'n2', groupId: 'multiple' },
            { id: 'i5', moleculeId: 'nh3', groupId: 'single' },
            { id: 'i6', moleculeId: 'o2', groupId: 'multiple' },
          ],
          explanation:
            'Nước, methane, ammonia chỉ có liên kết đơn. CO₂ có hai liên kết đôi, O₂ có một liên kết đôi, N₂ có một liên kết ba.',
          conceptIds: ['covalent-bond', 'multiple-bond'],
        },
        {
          id: 'u2-l3-e8',
          type: 'order-steps',
          prompt: 'Hai nguyên tử hydrogen tạo thành phân tử H₂ như thế nào?',
          steps: [
            { id: 's1', text: 'Hai nguyên tử hydrogen ở riêng lẻ, mỗi nguyên tử có 1 electron' },
            { id: 's2', text: 'Hai nguyên tử tiến lại gần nhau' },
            { id: 's3', text: 'Mỗi nguyên tử góp 1 electron để dùng chung' },
            { id: 's4', text: 'Cặp electron dùng chung giữ hai nguyên tử thành phân tử H₂' },
          ],
          explanation:
            'Cặp electron dùng chung mang điện âm, nằm giữa hai hạt nhân mang điện dương và hút cả hai. Nó giống cái nắm tay giữ hai người bạn ở cạnh nhau.',
          conceptIds: ['covalent-bond'],
        },
        {
          id: 'u2-l3-e9',
          type: 'true-false',
          prompt:
            'Nguyên tử hydrogen chỉ có 1 electron. Nó có thể tạo liên kết đôi với một nguyên tử khác.',
          answer: false,
          explanation:
            'Liên kết đôi cần mỗi bên góp 2 electron. Hydrogen chỉ có 1 electron nên chỉ góp được vào một cặp dùng chung. Vì thế trong mọi phân tử ở Unit này, mỗi nguyên tử hydrogen chỉ có đúng một vạch nối.',
          conceptIds: ['covalent-bond', 'multiple-bond'],
        },
        {
          id: 'u2-l3-e10',
          type: 'mcq',
          prompt:
            'Các phân tử H₂, O₂, N₂, H₂O, CH₄ đều có liên kết cộng hoá trị. Chúng tạo từ hydrogen, carbon, nitrogen và oxygen, cả bốn đều là phi kim. Vậy liên kết cộng hoá trị thường hình thành giữa những nguyên tố nào?',
          options: [
            { id: 'a', text: 'Phi kim với phi kim' },
            { id: 'b', text: 'Kim loại với phi kim' },
            { id: 'c', text: 'Chỉ giữa các nguyên tử cùng loại' },
          ],
          correctOptionId: 'a',
          explanation:
            'Các phi kim như H, C, N, O thường dùng chung electron với nhau. Không cần cùng loại: trong nước, oxygen liên kết với hydrogen. Còn kim loại gặp phi kim thì khác hẳn, bạn sẽ thấy ở bài sau.',
          conceptIds: ['covalent-bond', 'nonmetal'],
        },
      ],
      unlocksMolecules: ['h2', 'n2'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 4: Liên kết ion ─────────────────────────
    {
      id: 'u2-l4-ionic',
      title: 'Cho và nhận',
      intro: {
        title: 'Một bên cho, một bên nhận',
        story: [
          'Hạt muối ăn bạn nêm vào canh có tên hoá học là sodium chloride. Nó tạo từ hai nguyên tố: sodium (natri), một kim loại, và chlorine, một phi kim. Hai nguyên tố này không dùng chung electron như ở bài trước.',
          'Nguyên tử sodium cho hẳn 1 electron sang nguyên tử chlorine. Mất 1 electron mang điện âm, sodium dư điện dương, viết là Na⁺. Nhận thêm 1 electron, chlorine dư điện âm, viết là Cl⁻. Nguyên tử mang điện như vậy gọi là ion.',
          'Điện trái dấu thì hút nhau, nên Na⁺ và Cl⁻ hút chặt lấy nhau. Lực hút đó chính là liên kết ion. Kim loại gặp phi kim thường liên kết theo kiểu này.',
          'Phóng to một hạt muối, bạn sẽ thấy vô số ion Na⁺ và Cl⁻ xếp xen kẽ thành một khối đều đặn. Mỗi ion hút mọi ion trái dấu quanh nó, nên trong muối không có phân tử nào đứng riêng.',
        ],
        visual: { type: 'molecule', moleculeId: 'nacl' },
      },
      exercises: [
        {
          id: 'u2-l4-e1',
          type: 'mcq',
          prompt: 'Khi tạo thành muối ăn, nguyên tử sodium làm gì với electron của nó?',
          options: [
            { id: 'a', text: 'Cho hẳn 1 electron sang chlorine' },
            { id: 'b', text: 'Dùng chung 1 electron với chlorine' },
            { id: 'c', text: 'Giữ nguyên, không thay đổi gì' },
          ],
          correctOptionId: 'a',
          explanation:
            'Sodium cho hẳn 1 electron, chlorine nhận lấy. Đây là kiểu cho và nhận. Dùng chung electron là kiểu của liên kết cộng hoá trị ở bài trước.',
          conceptIds: ['ionic-bond'],
        },
        {
          id: 'u2-l4-e2',
          type: 'fill-blank',
          prompt: 'Điền vào chỗ trống',
          template: 'Nguyên tử mang điện vì đã cho hoặc nhận electron được gọi là ___.',
          blanks: [{ accepted: ['ion'], wordBank: ['phân tử', 'ion', 'proton'] }],
          explanation:
            'Ion là nguyên tử đã mất hoặc nhận thêm electron nên không còn trung hoà về điện. Phân tử là nhóm nguyên tử liên kết với nhau, còn proton là một hạt nằm trong hạt nhân.',
          conceptIds: ['ion'],
        },
        {
          id: 'u2-l4-e3',
          type: 'true-false',
          prompt: 'Khi mất 1 electron, nguyên tử sodium trở thành ion mang điện dương.',
          answer: true,
          explanation:
            'Đúng. Sodium vẫn còn 11 proton mang điện dương nhưng chỉ còn 10 electron mang điện âm. Dương nhiều hơn âm một đơn vị nên ta viết Na⁺.',
          conceptIds: ['ion', 'subatomic-particles'],
        },
        {
          id: 'u2-l4-e4',
          type: 'match-pairs',
          prompt: 'Nối kí hiệu với mô tả',
          pairs: [
            {
              left: { id: 'l1', text: 'Na' },
              right: { id: 'r1', text: 'Nguyên tử sodium, trung hoà về điện' },
            },
            {
              left: { id: 'l2', text: 'Na⁺' },
              right: { id: 'r2', text: 'Sodium đã mất 1 electron' },
            },
            {
              left: { id: 'l3', text: 'Cl' },
              right: { id: 'r3', text: 'Nguyên tử chlorine, trung hoà về điện' },
            },
            {
              left: { id: 'l4', text: 'Cl⁻' },
              right: { id: 'r4', text: 'Chlorine đã nhận thêm 1 electron' },
            },
          ],
          explanation:
            'Dấu + nhỏ ở góc trên nghĩa là đã mất 1 electron nên mang điện dương. Dấu − nghĩa là đã nhận thêm 1 electron nên mang điện âm. Không có dấu là nguyên tử trung hoà về điện.',
          conceptIds: ['ion'],
        },
        {
          id: 'u2-l4-e5',
          type: 'order-steps',
          prompt: 'Liên kết ion trong muối ăn hình thành thế nào? Sắp xếp theo thứ tự',
          steps: [
            { id: 's1', text: 'Nguyên tử sodium gặp nguyên tử chlorine' },
            { id: 's2', text: 'Sodium cho chlorine 1 electron' },
            { id: 's3', text: 'Sodium thành ion Na⁺, chlorine thành ion Cl⁻' },
            { id: 's4', text: 'Hai ion trái dấu hút chặt lấy nhau' },
          ],
          explanation:
            'Cho và nhận electron tạo ra hai ion trái dấu. Lực hút giữa các ion trái dấu mới chính là liên kết ion. Kiểu liên kết này thường gặp khi một kim loại, như sodium, gặp một phi kim, như chlorine.',
          conceptIds: ['ionic-bond', 'ion'],
        },
        {
          id: 'u2-l4-e6',
          type: 'mcq',
          prompt:
            'Sodium fluoride NaF có trong nhiều loại kem đánh răng. Sodium là kim loại, fluorine là phi kim. Liên kết giữa chúng là gì?',
          visual: { id: 'v', moleculeId: 'naf' },
          options: [
            { id: 'a', text: 'Liên kết cộng hoá trị đơn' },
            { id: 'b', text: 'Liên kết ion' },
            { id: 'c', text: 'Liên kết cộng hoá trị đôi' },
          ],
          correctOptionId: 'b',
          explanation:
            'Kim loại gặp phi kim thường cho và nhận electron. Sodium cho fluorine 1 electron, tạo thành hai ion Na⁺ và F⁻ hút nhau. Trong hình, liên kết ion được vẽ bằng nét đứt, khác với vạch liền của liên kết cộng hoá trị.',
          conceptIds: ['ionic-bond'],
        },
        {
          id: 'u2-l4-e7',
          type: 'sort',
          prompt: 'Các nguyên tử trong mỗi chất dùng chung electron hay cho và nhận electron?',
          groups: [
            { id: 'covalent', label: 'Dùng chung electron (cộng hoá trị)' },
            { id: 'ionic', label: 'Cho và nhận electron (ion)' },
          ],
          items: [
            { id: 'i1', moleculeId: 'h2o', groupId: 'covalent' },
            { id: 'i2', moleculeId: 'nacl', groupId: 'ionic' },
            { id: 'i3', moleculeId: 'ch4', groupId: 'covalent' },
            { id: 'i4', moleculeId: 'naf', groupId: 'ionic' },
            { id: 'i5', moleculeId: 'co2', groupId: 'covalent' },
          ],
          explanation:
            'H₂O, CH₄, CO₂ chỉ gồm phi kim nên các nguyên tử dùng chung electron. NaCl và NaF có kim loại sodium đi với phi kim nên cho và nhận electron.',
          conceptIds: ['ionic-bond', 'covalent-bond'],
        },
        {
          id: 'u2-l4-e8',
          type: 'true-false',
          prompt: 'Hạt muối ăn gồm những phân tử NaCl đứng riêng lẻ.',
          visual: { id: 'v', moleculeId: 'nacl' },
          answer: false,
          explanation:
            'Trong hạt muối không có phân tử riêng lẻ. Vô số ion Na⁺ và Cl⁻ xếp xen kẽ thành một khối, mỗi ion hút mọi ion trái dấu quanh nó. Hình chỉ vẽ một cặp ion cho dễ nhìn. Công thức NaCl cho biết tỉ lệ: cứ 1 ion Na⁺ thì có 1 ion Cl⁻.',
          conceptIds: ['ionic-bond', 'formula'],
        },
        {
          id: 'u2-l4-e9',
          type: 'mcq',
          prompt:
            'Potassium (kali) là kim loại. Hydrogen, carbon, oxygen và chlorine là phi kim. Cặp nguyên tố nào tạo liên kết ion?',
          options: [
            { id: 'a', text: 'Hydrogen và oxygen' },
            { id: 'b', text: 'Carbon và hydrogen' },
            { id: 'c', text: 'Potassium và chlorine' },
          ],
          correctOptionId: 'c',
          explanation:
            'Potassium là kim loại, chlorine là phi kim. Giống sodium, potassium cho chlorine 1 electron, tạo ra các ion K⁺ và Cl⁻ hút nhau. Hai cặp còn lại đều là phi kim với phi kim nên dùng chung electron.',
          conceptIds: ['ionic-bond', 'metal', 'nonmetal'],
        },
        {
          id: 'u2-l4-e10',
          type: 'build-molecule',
          prompt:
            'Trong muối ăn NaCl, cứ 1 sodium thì có 1 chlorine. Chọn đúng các nguyên tử cho một cặp như vậy',
          targetMoleculeId: 'nacl',
          availableAtoms: { Na: 2, Cl: 2, O: 1 },
          explanation:
            'Một nguyên tử sodium cho đúng 1 electron, một nguyên tử chlorine nhận đúng 1 electron, nên chúng đi với nhau theo tỉ lệ 1 : 1.',
          conceptIds: ['ionic-bond', 'formula'],
        },
      ],
      unlocksMolecules: ['nacl', 'naf'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 5: Đơn chất, hợp chất, hỗn hợp ─────────────────────────
    {
      id: 'u2-l5-compounds',
      title: 'Đơn chất, hợp chất, hỗn hợp',
      intro: {
        title: 'Đổi bạn nắm tay',
        story: [
          'Tên lửa này mang theo hai chất: hydrogen H₂ và oxygen O₂. Mỗi chất chỉ tạo từ một nguyên tố. Những chất như vậy gọi là đơn chất.',
          'Khi có tia lửa, các nguyên tử buông tay bạn cũ và nắm tay bạn mới, tạo thành nước H₂O. Nước tạo từ hai nguyên tố liên kết với nhau nên là một hợp chất.',
          'Hợp chất có tính chất khác hẳn các đơn chất tạo ra nó: hydrogen cháy được, oxygen nuôi ngọn lửa, còn nước lại dập được lửa.',
          'Không khí thì khác. Khí nitrogen và khí oxygen trong không khí chỉ trộn lẫn với nhau, không có liên kết mới nào giữa chúng. Nhiều chất trộn lẫn như vậy gọi là hỗn hợp.',
        ],
        visual: { type: 'reaction', reactionId: 'water-formation' },
      },
      exercises: [
        {
          id: 'u2-l5-e1',
          type: 'mcq',
          prompt:
            'Ethanol C₂H₆O, chất chính trong cồn sát khuẩn, tạo từ ba nguyên tố liên kết với nhau: carbon, hydrogen và oxygen. Ethanol là gì?',
          visual: { id: 'v', moleculeId: 'c2h6o' },
          options: [
            { id: 'a', text: 'Một đơn chất' },
            { id: 'b', text: 'Một nguyên tố' },
            { id: 'c', text: 'Một hợp chất' },
          ],
          correctOptionId: 'c',
          explanation:
            'Hợp chất là chất tạo từ hai nguyên tố trở lên liên kết với nhau. Ethanol có carbon, hydrogen và oxygen trong cùng một phân tử nên là hợp chất. Đơn chất thì chỉ tạo từ một nguyên tố.',
          conceptIds: ['compound'],
        },
        {
          id: 'u2-l5-e2',
          type: 'sort',
          prompt: 'Đơn chất hay hợp chất?',
          groups: [
            { id: 'elemental', label: 'Đơn chất (một nguyên tố)' },
            { id: 'compound', label: 'Hợp chất (từ hai nguyên tố trở lên)' },
          ],
          items: [
            { id: 'i1', moleculeId: 'o2', groupId: 'elemental' },
            { id: 'i2', moleculeId: 'h2o', groupId: 'compound' },
            { id: 'i3', moleculeId: 'n2', groupId: 'elemental' },
            { id: 'i4', moleculeId: 'co2', groupId: 'compound' },
            { id: 'i5', moleculeId: 'nacl', groupId: 'compound' },
            { id: 'i6', moleculeId: 'au', groupId: 'elemental' },
          ],
          explanation:
            'O₂ và N₂ có hai nguyên tử nhưng chỉ một nguyên tố nên vẫn là đơn chất, giống như gold (vàng). Hợp chất phải có từ hai nguyên tố khác nhau, như H₂O, CO₂ và NaCl.',
          conceptIds: ['elemental-substance', 'compound'],
        },
        {
          id: 'u2-l5-e3',
          type: 'true-false',
          prompt: 'Khí oxygen O₂ là một hợp chất vì phân tử có 2 nguyên tử.',
          visual: { id: 'v', moleculeId: 'o2' },
          answer: false,
          explanation:
            'Muốn biết đơn chất hay hợp chất, bạn đếm số nguyên tố chứ không đếm số nguyên tử. O₂ có hai nguyên tử nhưng đều là oxygen nên là đơn chất. Hợp chất cần từ hai nguyên tố khác nhau.',
          conceptIds: ['elemental-substance', 'compound'],
        },
        {
          id: 'u2-l5-e4',
          type: 'mcq',
          prompt:
            'Hoà muối vào nước, bạn được nước muối. Muối và nước chỉ trộn lẫn với nhau chứ không liên kết thành chất mới. Nước muối là gì?',
          options: [
            { id: 'a', text: 'Một hợp chất' },
            { id: 'b', text: 'Một hỗn hợp' },
            { id: 'c', text: 'Một đơn chất' },
          ],
          correctOptionId: 'b',
          explanation:
            'Hỗn hợp là nhiều chất trộn lẫn, pha nhiều hay ít tuỳ ý, và mỗi chất vẫn là chính nó. Khi nước bay hơi hết, muối vẫn còn lại. Người ta làm muối từ nước biển theo đúng cách đó.',
          conceptIds: ['mixture'],
        },
        {
          id: 'u2-l5-e5',
          type: 'sort',
          prompt: 'Hợp chất hay hỗn hợp?',
          groups: [
            { id: 'compound', label: 'Hợp chất' },
            { id: 'mixture', label: 'Hỗn hợp' },
          ],
          items: [
            { id: 'i1', text: 'Nước cất (H₂O)', groupId: 'compound' },
            { id: 'i2', text: 'Không khí', groupId: 'mixture' },
            { id: 'i3', text: 'Khí carbon dioxide (CO₂)', groupId: 'compound' },
            { id: 'i4', text: 'Nước biển', groupId: 'mixture' },
            { id: 'i5', text: 'Nước ngọt có ga', groupId: 'mixture' },
            { id: 'i6', text: 'Ethanol (C₂H₆O)', groupId: 'compound' },
          ],
          explanation:
            'Hợp chất có công thức cố định, như H₂O hay CO₂. Không khí, nước biển, nước ngọt có ga là nhiều chất trộn lẫn, pha nhiều hay ít đều được, nên không viết được bằng một công thức.',
          conceptIds: ['compound', 'mixture'],
        },
        {
          id: 'u2-l5-e6',
          type: 'match-pairs',
          prompt: 'Nối hợp chất với nơi bạn gặp nó',
          pairs: [
            {
              left: { id: 'l1', moleculeId: 'ch4' },
              right: { id: 'r1', text: 'Khí đốt từ hầm biogas', image: 'biogas-stove' },
            },
            {
              left: { id: 'l2', moleculeId: 'co2' },
              right: { id: 'r2', text: 'Bọt khí trong nước ngọt có ga', image: 'soda-can' },
            },
            {
              left: { id: 'l3', moleculeId: 'nacl' },
              right: { id: 'r3', text: 'Lọ muối ăn', image: 'salt-shaker' },
            },
            {
              left: { id: 'l4', moleculeId: 'h2o' },
              right: { id: 'r4', text: 'Ly nước uống', image: 'glass-of-water' },
            },
            {
              left: { id: 'l5', moleculeId: 'c2h6o' },
              right: { id: 'r5', text: 'Chai cồn sát khuẩn', image: 'hand-sanitizer' },
            },
          ],
          explanation:
            'Methane CH₄, khí carbon dioxide CO₂, muối ăn NaCl, nước H₂O và ethanol C₂H₆O đều là những hợp chất bạn gặp hằng ngày.',
          conceptIds: ['compound', 'formula'],
        },
        {
          id: 'u2-l5-e7',
          type: 'true-false',
          visual: { id: 'v', image: 'salt-shaker' },
          prompt:
            'Khí chlorine rất độc. Muối ăn tạo từ sodium và chlorine nên cũng độc như khí chlorine.',
          answer: false,
          explanation:
            'Hợp chất có tính chất khác hẳn các đơn chất tạo ra nó. Sodium là kim loại phản ứng mãnh liệt với nước, chlorine là khí độc màu vàng lục. Liên kết với nhau, chúng thành muối ăn bạn nêm vào canh mỗi ngày.',
          conceptIds: ['compound'],
        },
        {
          id: 'u2-l5-e8',
          type: 'fill-blank',
          prompt: 'Điền vào chỗ trống',
          template:
            'Không khí gồm khí nitrogen, khí oxygen và vài khí khác trộn lẫn với nhau. Không khí là một ___.',
          blanks: [{ accepted: ['hỗn hợp'], wordBank: ['hợp chất', 'đơn chất', 'hỗn hợp'] }],
          explanation:
            'Các khí trong không khí chỉ trộn lẫn, không liên kết với nhau thành chất mới. Mỗi phân tử N₂ hay O₂ vẫn bay riêng. Vì thế không khí là hỗn hợp, không phải hợp chất.',
          conceptIds: ['mixture'],
        },
        {
          id: 'u2-l5-e9',
          type: 'build-molecule',
          prompt: 'Ghép phân tử methane CH₄, khí cháy trong bếp biogas',
          targetMoleculeId: 'ch4',
          availableAtoms: { C: 2, H: 6, O: 1 },
          explanation:
            'Methane là hợp chất của hai nguyên tố: 1 nguyên tử carbon liên kết với 4 nguyên tử hydrogen.',
          conceptIds: ['compound', 'formula'],
        },
        {
          id: 'u2-l5-e10',
          type: 'order-steps',
          prompt: 'Khí hydrogen và khí oxygen biến thành nước theo thứ tự nào?',
          steps: [
            { id: 's1', text: 'Phân tử H₂ và phân tử O₂ gặp nhau' },
            { id: 's2', text: 'Tia lửa làm các liên kết cũ đứt ra' },
            { id: 's3', text: 'Các nguyên tử H và O sắp xếp lại' },
            { id: 's4', text: 'Liên kết mới hình thành, tạo ra phân tử H₂O' },
          ],
          explanation:
            'Không nguyên tử nào mất đi hay sinh thêm, chúng chỉ đổi bạn nắm tay. Sự đổi bạn như vậy gọi là phản ứng hoá học. Bạn sẽ học kĩ về nó ở Unit 4.',
          conceptIds: ['reaction', 'compound'],
        },
      ],
      unlocksMolecules: ['ch4', 'c2h6o'],
      baseXp: 10,
    },

    // ───────────────────────── Checkpoint Unit 2 ─────────────────────────
    {
      id: 'u2-checkpoint',
      title: 'Kiểm tra Unit 2',
      kind: 'checkpoint',
      exercises: [
        {
          id: 'u2-cp-e1',
          type: 'mcq',
          prompt: 'Hình nào là phân tử khí carbon dioxide CO₂?',
          options: [
            { id: 'a', moleculeId: 'ch4' },
            { id: 'b', moleculeId: 'co' },
            { id: 'c', moleculeId: 'h2o' },
            { id: 'd', moleculeId: 'co2' },
          ],
          correctOptionId: 'd',
          explanation:
            'CO₂ có 1 nguyên tử carbon ở giữa và 2 nguyên tử oxygen hai bên. Hình chỉ có 1 oxygen là CO, một chất khác.',
          conceptIds: ['formula', 'molecule'],
        },
        {
          id: 'u2-cp-e2',
          type: 'build-molecule',
          prompt: 'Ghép phân tử ammonia NH₃',
          targetMoleculeId: 'nh3',
          availableAtoms: { N: 2, H: 5, C: 1 },
          explanation:
            'Chỉ số 3 đứng ngay sau H, còn sau N không ghi số. Vậy NH₃ gồm 1 nguyên tử nitrogen và 3 nguyên tử hydrogen.',
          conceptIds: ['formula', 'molecule'],
        },
        {
          id: 'u2-cp-e3',
          type: 'fill-blank',
          prompt: 'Chọn số đúng cho từng chỗ trống',
          template:
            'Khí trong bình gas nhà bếp có propane, công thức C₃H₈. Mỗi phân tử propane có ___ nguyên tử carbon và ___ nguyên tử hydrogen.',
          blanks: [
            { accepted: ['3', 'ba'], wordBank: ['3', '8', '11'] },
            { accepted: ['8', 'tám'], wordBank: ['3', '8', '11'] },
          ],
          explanation:
            'Chỉ số 3 đứng ngay sau C nên có 3 nguyên tử carbon. Chỉ số 8 đứng ngay sau H nên có 8 nguyên tử hydrogen. Còn 11 là tổng số nguyên tử của cả phân tử.',
          conceptIds: ['formula'],
        },
        {
          id: 'u2-cp-e4',
          type: 'sort',
          prompt: 'Liên kết trong mỗi chất là liên kết cộng hoá trị hay liên kết ion?',
          groups: [
            { id: 'covalent', label: 'Liên kết cộng hoá trị' },
            { id: 'ionic', label: 'Liên kết ion' },
          ],
          items: [
            { id: 'i1', moleculeId: 'nh3', groupId: 'covalent' },
            { id: 'i2', moleculeId: 'naf', groupId: 'ionic' },
            { id: 'i3', moleculeId: 'h2o', groupId: 'covalent' },
            { id: 'i4', moleculeId: 'nacl', groupId: 'ionic' },
            { id: 'i5', moleculeId: 'o2', groupId: 'covalent' },
          ],
          explanation:
            'Phi kim với phi kim thì dùng chung electron, tạo liên kết cộng hoá trị: NH₃, H₂O, O₂. Kim loại sodium gặp phi kim thì cho và nhận electron, tạo liên kết ion: NaF, NaCl.',
          conceptIds: ['covalent-bond', 'ionic-bond'],
        },
        {
          id: 'u2-cp-e5',
          type: 'true-false',
          prompt: 'Trong liên kết ion, hai nguyên tử dùng chung electron.',
          answer: false,
          explanation:
            'Dùng chung electron là liên kết cộng hoá trị. Trong liên kết ion, một bên cho hẳn electron, bên kia nhận, rồi hai ion trái dấu hút nhau.',
          conceptIds: ['ionic-bond', 'covalent-bond'],
        },
        {
          id: 'u2-cp-e6',
          type: 'match-pairs',
          prompt: 'Nối khái niệm với ví dụ',
          pairs: [
            { left: { id: 'l1', text: 'Đơn chất' }, right: { id: 'r1', text: 'Khí oxygen O₂' } },
            { left: { id: 'l2', text: 'Hợp chất' }, right: { id: 'r2', text: 'Nước H₂O' } },
            { left: { id: 'l3', text: 'Hỗn hợp' }, right: { id: 'r3', text: 'Không khí' } },
            { left: { id: 'l4', text: 'Ion' }, right: { id: 'r4', text: 'Na⁺' } },
          ],
          explanation:
            'O₂ chỉ có một nguyên tố nên là đơn chất. H₂O có hai nguyên tố liên kết nên là hợp chất. Không khí là nhiều chất trộn lẫn. Na⁺ là nguyên tử sodium đã mất 1 electron.',
          conceptIds: ['elemental-substance', 'compound', 'mixture', 'ion'],
        },
        {
          id: 'u2-cp-e7',
          type: 'mcq',
          prompt:
            'Phân tử N₂ có ba vạch nối giữa hai nguyên tử. Chúng dùng chung mấy cặp electron?',
          visual: { id: 'v', moleculeId: 'n2' },
          options: [
            { id: 'a', text: '1 cặp' },
            { id: 'b', text: '2 cặp' },
            { id: 'c', text: '3 cặp' },
          ],
          correctOptionId: 'c',
          explanation:
            'Mỗi vạch là một cặp electron dùng chung. Ba vạch là liên kết ba, gồm 3 cặp.',
          conceptIds: ['multiple-bond', 'covalent-bond'],
        },
        {
          id: 'u2-cp-e8',
          type: 'order-steps',
          prompt: 'Sắp xếp theo tổng số nguyên tử trong phân tử, từ ít đến nhiều',
          steps: [
            { id: 's1', text: 'O₂' },
            { id: 's2', text: 'CO₂' },
            { id: 's3', text: 'NH₃' },
            { id: 's4', text: 'CH₄' },
          ],
          explanation: 'O₂ có 2 nguyên tử, CO₂ có 3, NH₃ có 4 và CH₄ có 5.',
          conceptIds: ['formula'],
        },
        {
          id: 'u2-cp-e9',
          type: 'mcq',
          prompt: 'Nguyên tử sodium mất 1 electron thì trở thành gì?',
          options: [
            { id: 'a', text: 'Ion âm Na⁻' },
            { id: 'b', text: 'Ion dương Na⁺' },
            { id: 'c', text: 'Một nguyên tố khác' },
          ],
          correctOptionId: 'b',
          explanation:
            'Mất 1 electron mang điện âm, sodium còn dư một điện tích dương nên thành Na⁺. Số proton không đổi nên nó vẫn là sodium.',
          conceptIds: ['ion'],
        },
        {
          id: 'u2-cp-e10',
          type: 'true-false',
          prompt:
            'Một loại phân kali bón cho cây là potassium chloride KCl. Giống muối ăn, nó gồm các ion K⁺ và Cl⁻. Công thức KCl cho biết cứ 1 ion K⁺ thì có 1 ion Cl⁻.',
          answer: true,
          explanation:
            'Đúng. Giống muối ăn NaCl, potassium chloride không gồm các phân tử riêng lẻ mà là vô số ion K⁺ và Cl⁻ xếp xen kẽ. Công thức KCl cho biết tỉ lệ giữa chúng là 1 : 1.',
          conceptIds: ['formula', 'ionic-bond'],
        },
        {
          id: 'u2-cp-e11',
          type: 'sort',
          prompt: 'Đơn chất, hợp chất hay hỗn hợp?',
          groups: [
            { id: 'elemental', label: 'Đơn chất' },
            { id: 'compound', label: 'Hợp chất' },
            { id: 'mixture', label: 'Hỗn hợp' },
          ],
          items: [
            { id: 'i1', text: 'Gold (vàng, Au)', groupId: 'elemental' },
            { id: 'i2', text: 'Nước cất (H₂O)', groupId: 'compound' },
            { id: 'i3', text: 'Nước khoáng (nước có hoà tan chất khoáng)', groupId: 'mixture' },
            { id: 'i4', text: 'Khí nitrogen (N₂)', groupId: 'elemental' },
            { id: 'i5', text: 'Khí methane (CH₄)', groupId: 'compound' },
            { id: 'i6', text: 'Không khí', groupId: 'mixture' },
          ],
          explanation:
            'Tạo từ một nguyên tố là đơn chất. Từ hai nguyên tố liên kết với nhau là hợp chất. Nhiều chất chỉ trộn lẫn với nhau là hỗn hợp: nước khoáng là nước có hoà tan các chất khoáng, không khí là nhiều khí trộn lẫn.',
          conceptIds: ['elemental-substance', 'compound', 'mixture'],
        },
        {
          id: 'u2-cp-e12',
          type: 'mcq',
          prompt:
            'Chai oxy già trong tủ thuốc chứa hydrogen peroxide, công thức H₂O₂. Phân tử này khác phân tử nước H₂O ở điểm nào?',
          visual: { id: 'v', moleculeId: 'h2o2' },
          options: [
            { id: 'a', text: 'Có nhiều hơn phân tử nước một nguyên tử oxygen' },
            { id: 'b', text: 'Có nhiều hơn phân tử nước một nguyên tử hydrogen' },
            { id: 'c', text: 'Không khác gì, chỉ là hai cách viết của nước' },
          ],
          correctOptionId: 'a',
          explanation:
            'H₂O₂ có 2 hydrogen và 2 oxygen, còn H₂O có 2 hydrogen và 1 oxygen. Chỉ thêm một nguyên tử oxygen là thành chất khác hẳn: nước thì uống được, còn oxy già thì tuyệt đối không.',
          conceptIds: ['formula', 'compound'],
        },
      ],
      baseXp: 20,
    },
  ],
}
