import type { UnitInput } from '../../schema/lesson.js'

/**
 * Unit 2 — Nguyên tử bắt tay nhau
 * 5 bài học + checkpoint: phân tử, đọc công thức, liên kết cộng hoá trị, liên kết ion,
 * đơn chất – hợp chất – hỗn hợp.
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
          'Không khí bạn đang hít có khí oxygen. Nhưng các nguyên tử oxygen không bay lẻ loi: chúng đi thành từng đôi, dính chặt vào nhau.',
          'Một nhóm nguyên tử dính chặt với nhau như vậy gọi là phân tử.',
          'Ly nước trên bàn chứa vô số phân tử nước giống hệt nhau. Mỗi phân tử gồm 1 nguyên tử oxygen và 2 nguyên tử hydrogen.',
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
            'Phân tử nước gồm 1 nguyên tử oxygen (đỏ) ở giữa và 2 nguyên tử hydrogen (trắng) ở hai bên.',
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
            'Đúng. Khí oxygen bạn hít thở là các phân tử gồm hai nguyên tử O đi thành đôi.',
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
            'Phân tử có từ hai nguyên tử trở lên liên kết với nhau. Hình He và hình Au mỗi hình chỉ có một nguyên tử. Helium còn đặc biệt ở chỗ nguyên tử của nó luôn ở một mình, không kết đôi với ai.',
          conceptIds: ['molecule', 'atom'],
        },
        {
          id: 'u2-l1-e9',
          type: 'true-false',
          prompt: 'Phân tử nào cũng phải gồm các nguyên tử khác loại.',
          answer: false,
          explanation:
            'Phân tử có thể gồm các nguyên tử cùng loại, như O₂ và H₂, hoặc khác loại, như H₂O.',
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
          'Chắc bạn đã nghe "H₂O" là nước. Đó là một công thức hoá học, giống như công thức nấu ăn của một phân tử.',
          'Chữ cái cho biết có nguyên tố nào. Con số nhỏ phía dưới cho biết có mấy nguyên tử của nguyên tố đứng ngay trước nó. Không ghi số nghĩa là 1.',
          'Tiếng xì khi bạn mở lon nước ngọt là khí CO₂ thoát ra. Mỗi phân tử CO₂ có 1 nguyên tử carbon và 2 nguyên tử oxygen.',
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
            'Số 2 nhỏ đứng sau chữ O cho biết có 2 nguyên tử oxygen. Trong hình là hai quả bóng đỏ.',
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
            'Không ghi số nghĩa là 1. Số 3 chỉ thuộc về chữ H đứng ngay trước nó: NH₃ có 1 nitrogen và 3 hydrogen.',
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
            'CH₄ gồm 1 nguyên tử carbon và 4 nguyên tử hydrogen. Đây là methane, khí cháy được trong bếp biogas.',
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
            'Đọc từng chữ cái để biết nguyên tố, rồi nhìn số nhỏ ngay sau nó để biết có mấy nguyên tử.',
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
            'Chỉ khác một nguyên tử oxygen mà thành hai chất khác hẳn. CO₂ có trong nước ngọt có ga, còn CO là khí độc sinh ra khi đốt than trong phòng kín.',
          conceptIds: ['formula'],
        },
        {
          id: 'u2-l2-e7',
          type: 'mcq',
          prompt:
            'Đây là phân tử ethanol C₂H₆O, chất chính trong cồn sát khuẩn. Nó có tổng cộng bao nhiêu nguyên tử?',
          visual: { id: 'v', moleculeId: 'c2h6o' },
          options: [
            { id: 'a', text: '3' },
            { id: 'b', text: '8' },
            { id: 'c', text: '9' },
          ],
          correctOptionId: 'c',
          explanation:
            '2 carbon + 6 hydrogen + 1 oxygen = 9 nguyên tử. Cộng các chỉ số lại, và nhớ rằng không ghi số nghĩa là 1.',
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
            'Số nhỏ đứng ngay sau nguyên tố mà nó đếm. 4 hydrogen viết là H₄, 1 carbon chỉ viết C. Ghép lại thành CH₄.',
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
          'Vì sao hai nguyên tử hydrogen lại dính được vào nhau? Bí mật nằm ở các electron.',
          'Mỗi nguyên tử hydrogen góp 1 electron để cả hai cùng dùng chung, như hai người bạn đưa tay ra nắm lấy nhau. Kiểu liên kết bằng cách chia sẻ electron này gọi là liên kết cộng hoá trị.',
          'Một cái nắm tay là một cặp electron dùng chung, gọi là liên kết đơn. Có những nguyên tử nắm nhau bằng hai hay ba tay: đó là liên kết đôi và liên kết ba.',
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
            'Cộng hoá trị nghĩa là cùng góp, cùng dùng. Cặp electron dùng chung giữ hai nguyên tử ở cạnh nhau.',
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
            'Mỗi vạch là một cái nắm tay, tức một cặp electron dùng chung. Hai vạch là liên kết đôi.',
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
            'H₂ nắm nhau một tay, O₂ hai tay, N₂ ba tay. Càng nhiều tay, hai nguyên tử càng khó bị tách rời.',
          conceptIds: ['multiple-bond'],
        },
        {
          id: 'u2-l3-e4',
          type: 'build-molecule',
          prompt: 'Ghép phân tử khí nitrogen N₂',
          targetMoleculeId: 'n2',
          availableAtoms: { N: 3, O: 2, H: 1 },
          explanation:
            'Hai nguyên tử nitrogen nắm nhau bằng ba tay, tức liên kết ba, nên rất khó tách. Khí nitrogen chiếm gần bốn phần năm không khí.',
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
            'Carbon có 4 "tay", mỗi tay nắm một nguyên tử hydrogen bằng một liên kết đơn. Hydrogen thì chỉ có 1 tay.',
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
            'Cặp electron dùng chung nằm giữa hai hạt nhân và hút cả hai, giống cái nắm tay giữ hai người bạn.',
          conceptIds: ['covalent-bond'],
        },
        {
          id: 'u2-l3-e9',
          type: 'true-false',
          prompt: 'Một nguyên tử hydrogen có thể tạo liên kết đôi.',
          answer: false,
          explanation:
            'Hydrogen chỉ có 1 electron nên chỉ góp được vào một cặp dùng chung. Nó luôn tạo đúng một liên kết đơn.',
          conceptIds: ['covalent-bond', 'multiple-bond'],
        },
        {
          id: 'u2-l3-e10',
          type: 'mcq',
          prompt: 'Liên kết cộng hoá trị thường hình thành giữa những nguyên tố nào?',
          options: [
            { id: 'a', text: 'Phi kim với phi kim' },
            { id: 'b', text: 'Kim loại với kim loại' },
            { id: 'c', text: 'Chỉ giữa các nguyên tử cùng loại' },
          ],
          correctOptionId: 'a',
          explanation:
            'Các phi kim như H, C, N, O thường chia sẻ electron với nhau. Bài sau bạn sẽ thấy kim loại gặp phi kim thì khác hẳn.',
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
          'Hạt muối bạn nêm vào canh làm từ sodium và chlorine. Hai nguyên tố này không chia sẻ electron như ở bài trước.',
          'Nguyên tử sodium cho hẳn 1 electron sang nguyên tử chlorine. Mất electron, sodium mang điện dương (Na⁺). Nhận electron, chlorine mang điện âm (Cl⁻). Nguyên tử mang điện như vậy gọi là ion.',
          'Trái dấu thì hút nhau: Na⁺ và Cl⁻ hút chặt lấy nhau. Lực hút đó chính là liên kết ion.',
        ],
        visual: { type: 'molecule', moleculeId: 'nacl' },
      },
      exercises: [
        {
          id: 'u2-l4-e1',
          type: 'mcq',
          prompt: 'Trong muối ăn, nguyên tử sodium làm gì với electron của nó?',
          options: [
            { id: 'a', text: 'Cho hẳn 1 electron sang chlorine' },
            { id: 'b', text: 'Dùng chung 1 electron với chlorine' },
            { id: 'c', text: 'Giữ nguyên, không thay đổi gì' },
          ],
          correctOptionId: 'a',
          explanation:
            'Sodium cho hẳn 1 electron, chlorine nhận lấy. Đây là kiểu cho–nhận, khác với kiểu dùng chung của liên kết cộng hoá trị.',
          conceptIds: ['ionic-bond'],
        },
        {
          id: 'u2-l4-e2',
          type: 'fill-blank',
          prompt: 'Điền vào chỗ trống',
          template: 'Nguyên tử mang điện vì đã cho hoặc nhận electron được gọi là ___.',
          blanks: [{ accepted: ['ion'], wordBank: ['phân tử', 'ion', 'proton'] }],
          explanation:
            'Ion là nguyên tử đã mất hoặc nhận thêm electron nên không còn trung hoà về điện.',
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
          prompt: 'Nối ký hiệu với mô tả',
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
            'Dấu + nghĩa là đã mất electron nên mang điện dương. Dấu − nghĩa là đã nhận thêm electron nên mang điện âm.',
          conceptIds: ['ion'],
        },
        {
          id: 'u2-l4-e5',
          type: 'order-steps',
          prompt: 'Liên kết ion trong muối ăn hình thành thế nào?',
          steps: [
            { id: 's1', text: 'Nguyên tử sodium gặp nguyên tử chlorine' },
            { id: 's2', text: 'Sodium cho chlorine 1 electron' },
            { id: 's3', text: 'Sodium thành ion Na⁺, chlorine thành ion Cl⁻' },
            { id: 's4', text: 'Hai ion trái dấu hút chặt lấy nhau' },
          ],
          explanation:
            'Cho–nhận electron tạo ra hai ion trái dấu. Lực hút giữa chúng chính là liên kết ion.',
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
            { id: 'c', text: 'Liên kết đôi' },
          ],
          correctOptionId: 'b',
          explanation:
            'Kim loại gặp phi kim thường cho–nhận electron. Sodium cho fluorine 1 electron, tạo thành hai ion Na⁺ và F⁻ hút nhau.',
          conceptIds: ['ionic-bond'],
        },
        {
          id: 'u2-l4-e7',
          type: 'sort',
          prompt: 'Chia sẻ hay cho–nhận?',
          groups: [
            { id: 'covalent', label: 'Chia sẻ electron (cộng hoá trị)' },
            { id: 'ionic', label: 'Cho–nhận electron (ion)' },
          ],
          items: [
            { id: 'i1', moleculeId: 'h2o', groupId: 'covalent' },
            { id: 'i2', moleculeId: 'nacl', groupId: 'ionic' },
            { id: 'i3', moleculeId: 'ch4', groupId: 'covalent' },
            { id: 'i4', moleculeId: 'naf', groupId: 'ionic' },
            { id: 'i5', moleculeId: 'co2', groupId: 'covalent' },
          ],
          explanation:
            'H₂O, CH₄, CO₂ chỉ gồm phi kim nên chia sẻ electron. NaCl và NaF có kim loại sodium đi với phi kim nên cho–nhận electron.',
          conceptIds: ['ionic-bond', 'covalent-bond'],
        },
        {
          id: 'u2-l4-e8',
          type: 'true-false',
          prompt: 'Hạt muối ăn gồm những phân tử NaCl đứng riêng lẻ.',
          visual: { id: 'v', moleculeId: 'nacl' },
          answer: false,
          explanation:
            'Trong hạt muối không có phân tử riêng lẻ. Vô số ion Na⁺ và Cl⁻ xếp xen kẽ thành một khối tinh thể. Công thức NaCl chỉ cho biết tỉ lệ: cứ 1 sodium thì có 1 chlorine.',
          conceptIds: ['ionic-bond', 'formula'],
        },
        {
          id: 'u2-l4-e9',
          type: 'mcq',
          prompt: 'Cặp nguyên tố nào dễ tạo liên kết ion nhất?',
          options: [
            { id: 'a', text: 'Hydrogen và oxygen' },
            { id: 'b', text: 'Carbon và hydrogen' },
            { id: 'c', text: 'Potassium và chlorine' },
          ],
          correctOptionId: 'c',
          explanation:
            'Potassium là kim loại, chlorine là phi kim: potassium cho chlorine 1 electron, tạo hợp chất ion KCl. Hai cặp còn lại đều là phi kim nên chia sẻ electron.',
          conceptIds: ['ionic-bond', 'metal', 'nonmetal'],
        },
        {
          id: 'u2-l4-e10',
          type: 'build-molecule',
          prompt:
            'Muối ăn NaCl cứ 1 sodium thì có 1 chlorine. Hãy chọn đúng các nguyên tử cho một cặp như vậy',
          targetMoleculeId: 'nacl',
          availableAtoms: { Na: 2, Cl: 2, O: 1 },
          explanation:
            'Một sodium cho đúng 1 electron, một chlorine nhận đúng 1 electron, nên chúng đi với nhau theo tỉ lệ 1 : 1.',
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
          'Khí hydrogen H₂ và khí oxygen O₂ đều chỉ gồm một nguyên tố. Những chất như vậy gọi là đơn chất.',
          'Khi có tia lửa, các nguyên tử buông tay bạn cũ và nắm tay bạn mới, tạo thành nước H₂O. Nước gồm hai nguyên tố liên kết với nhau nên là một hợp chất.',
          'Hợp chất có tính chất khác hẳn các đơn chất tạo ra nó: hydrogen cháy được, oxygen nuôi ngọn lửa, còn nước lại dập được lửa.',
          'Việc các nguyên tử đổi bạn như thế gọi là phản ứng hoá học. Bạn sẽ khám phá nó ở Unit 4.',
        ],
        visual: { type: 'reaction', reactionId: 'water-formation' },
      },
      exercises: [
        {
          id: 'u2-l5-e1',
          type: 'mcq',
          prompt:
            'Phân tử ethanol C₂H₆O, chất chính trong cồn sát khuẩn, gồm ba nguyên tố liên kết với nhau. Ethanol là gì?',
          visual: { id: 'v', moleculeId: 'c2h6o' },
          options: [
            { id: 'a', text: 'Một đơn chất' },
            { id: 'b', text: 'Một nguyên tố' },
            { id: 'c', text: 'Một hợp chất' },
          ],
          correctOptionId: 'c',
          explanation:
            'Hợp chất là chất gồm từ hai nguyên tố trở lên liên kết với nhau. Ethanol có carbon, hydrogen và oxygen trong cùng một phân tử.',
          conceptIds: ['compound'],
        },
        {
          id: 'u2-l5-e2',
          type: 'sort',
          prompt: 'Đơn chất hay hợp chất?',
          groups: [
            { id: 'elemental', label: 'Đơn chất (một nguyên tố)' },
            { id: 'compound', label: 'Hợp chất (từ hai nguyên tố)' },
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
            'O₂ và N₂ có hai nguyên tử nhưng chỉ một nguyên tố nên vẫn là đơn chất, giống như gold (vàng). Hợp chất phải có từ hai nguyên tố khác nhau.',
          conceptIds: ['elemental-substance', 'compound'],
        },
        {
          id: 'u2-l5-e3',
          type: 'true-false',
          prompt: 'Khí oxygen O₂ là một hợp chất vì phân tử có 2 nguyên tử.',
          visual: { id: 'v', moleculeId: 'o2' },
          answer: false,
          explanation:
            'Hợp chất cần từ hai nguyên tố khác nhau. O₂ có hai nguyên tử nhưng đều là oxygen, nên nó là đơn chất.',
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
            'Hỗn hợp là nhiều chất trộn lẫn, pha nhiều hay ít tuỳ ý và mỗi chất vẫn là chính nó. Đun cạn nước muối, bạn lại thu được muối.',
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
            'Hợp chất có công thức cố định, như H₂O hay CO₂. Không khí, nước biển, nước ngọt có ga là nhiều chất trộn lẫn nên không viết được bằng một công thức.',
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
          prompt: 'Muối ăn có tính chất giống hệt sodium và chlorine tạo ra nó.',
          answer: false,
          explanation:
            'Sodium là kim loại phản ứng mãnh liệt với nước, chlorine là khí độc màu vàng lục. Liên kết lại, chúng thành muối ăn bạn nêm vào canh. Hợp chất có tính chất khác hẳn các nguyên tố tạo nên nó.',
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
            'Các khí trong không khí chỉ trộn lẫn, không liên kết với nhau. Mỗi phân tử N₂ hay O₂ vẫn bay riêng.',
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
            'Không nguyên tử nào mất đi hay sinh thêm, chúng chỉ đổi bạn nắm tay. Đó là điều xảy ra trong mọi phản ứng hoá học, bạn sẽ học kỹ ở Unit 4.',
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
          explanation: 'Chỉ số 3 đứng sau H: NH₃ gồm 1 nguyên tử nitrogen và 3 nguyên tử hydrogen.',
          conceptIds: ['formula', 'molecule'],
        },
        {
          id: 'u2-cp-e3',
          type: 'fill-blank',
          prompt: 'Chọn số đúng cho từng chỗ trống',
          template:
            'Công thức CH₄ cho biết phân tử có ___ nguyên tử carbon và ___ nguyên tử hydrogen.',
          blanks: [
            { accepted: ['1', 'một'], wordBank: ['1', '2', '4'] },
            { accepted: ['4', 'bốn'], wordBank: ['1', '2', '4'] },
          ],
          explanation: 'Sau C không ghi số nên có 1 carbon. Số 4 đứng sau H nên có 4 hydrogen.',
          conceptIds: ['formula'],
        },
        {
          id: 'u2-cp-e4',
          type: 'sort',
          prompt: 'Chia sẻ hay cho–nhận?',
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
            'Phi kim với phi kim thì chia sẻ electron: NH₃, H₂O, O₂. Kim loại sodium gặp phi kim thì cho–nhận electron: NaF, NaCl.',
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
          prompt: 'Công thức NaCl cho biết trong muối ăn cứ 1 sodium thì có 1 chlorine.',
          visual: { id: 'v', moleculeId: 'nacl' },
          answer: true,
          explanation:
            'Đúng. Muối ăn không gồm các phân tử riêng lẻ mà là vô số ion Na⁺ và Cl⁻ xếp xen kẽ, theo tỉ lệ 1 : 1.',
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
            { id: 'i3', text: 'Nước biển', groupId: 'mixture' },
            { id: 'i4', text: 'Khí nitrogen (N₂)', groupId: 'elemental' },
            { id: 'i5', text: 'Khí methane (CH₄)', groupId: 'compound' },
            { id: 'i6', text: 'Không khí', groupId: 'mixture' },
          ],
          explanation:
            'Một nguyên tố là đơn chất. Từ hai nguyên tố liên kết với nhau là hợp chất. Nhiều chất chỉ trộn lẫn với nhau là hỗn hợp.',
          conceptIds: ['elemental-substance', 'compound', 'mixture'],
        },
        {
          id: 'u2-cp-e12',
          type: 'mcq',
          prompt: 'CO và CO₂ khác nhau ở điểm nào?',
          options: [
            { id: 'a', text: 'Phân tử CO₂ có nhiều hơn CO một nguyên tử oxygen' },
            { id: 'b', text: 'Phân tử CO có thêm một nguyên tử carbon' },
            { id: 'c', text: 'Chúng là một chất, chỉ khác cách viết' },
          ],
          correctOptionId: 'a',
          explanation:
            'CO có 1 oxygen, CO₂ có 2 oxygen. Chỉ một con số nhỏ thay đổi là thành chất khác hẳn: CO rất độc, còn CO₂ có trong hơi thở của bạn.',
          conceptIds: ['formula', 'compound'],
        },
      ],
      baseXp: 20,
    },
  ],
}
