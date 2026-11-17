import type { UnitInput } from '../../schema/lesson.js'

/**
 * Unit 1: Mọi thứ được làm từ gì?
 * 5 bài học + checkpoint: nguyên tử, nguyên tố, kí hiệu, bảng tuần hoàn, bên trong nguyên tử.
 */
export const unit01: UnitInput = {
  id: 'u1-building-blocks',
  order: 1,
  title: 'Mọi thứ được làm từ gì?',
  tagline: 'Nguyên tử, nguyên tố và bảng tuần hoàn',
  color: '#58CC02',
  lessons: [
    // ───────────────────────── Bài 1: Nguyên tử ─────────────────────────
    {
      id: 'u1-l1-atoms',
      title: 'Viên gạch nhỏ nhất',
      intro: {
        title: 'Chia mãi thì còn gì?',
        story: [
          'Cầm một cây đinh sắt. Tưởng tượng bạn chia đôi nó, rồi lại chia đôi, cứ thế mãi.',
          'Đến một lúc, bạn chỉ còn một hạt bé xíu, không thể chia nhỏ hơn mà vẫn là sắt. Hạt đó gọi là nguyên tử.',
          'Nguyên tử nhỏ tới mức mắt thường và cả kính hiển vi ở trường đều không thấy được. Vì thế trong hình vẽ, mỗi nguyên tử được vẽ thành một quả bóng nhỏ cho dễ hình dung.',
          'Không chỉ cây đinh. Ly nước, không khí và cả cơ thể bạn đều xếp từ những hạt bé xíu như vậy.',
        ],
        visual: { type: 'molecule', moleculeId: 'fe' },
      },
      exercises: [
        {
          id: 'u1-l1-e1',
          type: 'mcq',
          prompt: 'Hạt nhỏ nhất của sắt mà vẫn còn là sắt được gọi là gì?',
          options: [
            { id: 'a', text: 'Tế bào' },
            { id: 'b', text: 'Nguyên tử' },
            { id: 'c', text: 'Hạt bụi' },
          ],
          correctOptionId: 'b',
          explanation:
            'Đó là nguyên tử, viên gạch nhỏ xíu xếp nên mọi vật. Tế bào chỉ có ở sinh vật, và chính nó cũng xếp từ vô số nguyên tử. Hạt bụi tuy bé nhưng vẫn chia nhỏ tiếp được.',
          conceptIds: ['atom'],
        },
        {
          id: 'u1-l1-e2',
          type: 'true-false',
          prompt: 'Cơ thể bạn cũng được tạo nên từ nguyên tử.',
          answer: true,
          explanation:
            'Đúng. Da, xương, máu, tóc của bạn đều xếp từ nguyên tử, giống như cây đinh hay ly nước. Vật sống và vật không sống đều làm từ nguyên tử, còn bản thân nguyên tử thì không phải là vật sống.',
          conceptIds: ['atom'],
        },
        {
          id: 'u1-l1-e3',
          type: 'mcq',
          prompt: 'Trong hình, mỗi quả bóng là một nguyên tử. Hình này có mấy nguyên tử?',
          visual: { id: 'v', moleculeId: 'h2o' },
          options: [
            { id: 'a', text: '2' },
            { id: 'b', text: '3' },
            { id: 'c', text: '4' },
          ],
          correctOptionId: 'b',
          explanation:
            'Có 3 quả bóng, 1 đỏ và 2 trắng, tức là 3 nguyên tử. Màu chỉ là quy ước để dễ phân biệt, nguyên tử thật không có màu. Ba nguyên tử này dính vào nhau thành một hạt nước tí hon, bạn sẽ gặp lại nó ở Unit 2.',
          conceptIds: ['atom'],
        },
        {
          id: 'u1-l1-e4',
          type: 'match-pairs',
          prompt:
            'Nguyên tử có nhiều loại. Trong hoá học, sắt có tên quốc tế là iron, vàng là gold, đồng là copper. Mỗi vật dưới đây xếp chủ yếu từ loại nguyên tử nào?',
          pairs: [
            {
              left: { id: 'l1', text: 'Cây đinh', image: 'iron-nail' },
              right: { id: 'r1', text: 'Nguyên tử iron (sắt)' },
            },
            {
              left: { id: 'l2', text: 'Chiếc nhẫn vàng', image: 'gold-ring' },
              right: { id: 'r2', text: 'Nguyên tử gold (vàng)' },
            },
            {
              left: { id: 'l3', text: 'Lõi dây điện', image: 'copper-wire' },
              right: { id: 'r3', text: 'Nguyên tử copper (đồng)' },
            },
            {
              left: { id: 'l4', text: 'Cục than', image: 'charcoal-pencil' },
              right: { id: 'r4', text: 'Nguyên tử carbon' },
            },
          ],
          explanation:
            'Cây đinh xếp chủ yếu từ nguyên tử iron (sắt), nhẫn vàng từ nguyên tử gold (vàng), lõi dây điện từ nguyên tử copper (đồng). Còn cục than xếp chủ yếu từ nguyên tử carbon. Bài sau bạn sẽ tìm hiểu kĩ hơn về các loại nguyên tử này.',
          conceptIds: ['atom', 'element'],
        },
        {
          id: 'u1-l1-e5',
          type: 'true-false',
          prompt: 'Nguyên tử to cỡ hạt cát, nhìn kĩ bằng mắt thường là thấy.',
          answer: false,
          explanation:
            'Nguyên tử nhỏ hơn hạt cát rất nhiều. Mắt thường và cả kính hiển vi ở trường đều không thấy được nó. Bề ngang một sợi tóc đã xếp vừa hàng trăm nghìn nguyên tử.',
          conceptIds: ['atom'],
        },
        {
          id: 'u1-l1-e6',
          type: 'sort',
          prompt:
            'Thứ gì cân được và chiếm chỗ thì đều làm từ nguyên tử. Bạn thử xếp các thứ sau vào đúng nhóm.',
          groups: [
            { id: 'matter', label: 'Làm từ nguyên tử' },
            { id: 'not', label: 'Không làm từ nguyên tử' },
          ],
          items: [
            { id: 'i1', text: 'Ly nước', groupId: 'matter' },
            { id: 'i2', text: 'Không khí', groupId: 'matter' },
            { id: 'i3', text: 'Ánh nắng', groupId: 'not' },
            { id: 'i4', text: 'Chiếc điện thoại', groupId: 'matter' },
            { id: 'i5', text: 'Tiếng nhạc', groupId: 'not' },
          ],
          explanation:
            'Ly nước, không khí, chiếc điện thoại đều cân được và chiếm chỗ, nên đều làm từ nguyên tử. Không khí nhẹ nhưng vẫn cân được: quả bóng đá bơm căng nặng hơn lúc còn xẹp. Ánh nắng và tiếng nhạc thì không cân được, cũng không chứa được trong bình. Ánh nắng là năng lượng, còn tiếng nhạc là sự rung động truyền đi trong không khí.',
          conceptIds: ['atom'],
        },
        {
          id: 'u1-l1-e7',
          type: 'order-steps',
          prompt: 'Sắp xếp các thứ sau từ nhỏ đến lớn',
          steps: [
            { id: 's1', text: 'Một nguyên tử iron (sắt)' },
            { id: 's2', text: 'Một hạt mạt sắt (vụn sắt rơi ra khi giũa)' },
            { id: 's3', text: 'Một cây đinh' },
            { id: 's4', text: 'Cầu Long Biên' },
          ],
          explanation:
            'Một hạt mạt sắt bé tí đã chứa hàng tỉ tỉ nguyên tử iron (sắt). Càng nhiều nguyên tử xếp lại, vật càng lớn: từ hạt mạt sắt, tới cây đinh, tới cả một cây cầu thép.',
          conceptIds: ['atom'],
        },
        {
          id: 'u1-l1-e8',
          type: 'mcq',
          visual: { id: 'v', image: 'iron-nail' },
          prompt:
            'Một hạt mạt sắt bé tí đã chứa hàng tỉ tỉ nguyên tử. Vậy một cây đinh sắt nhỏ chứa khoảng bao nhiêu nguyên tử iron (sắt)?',
          options: [
            { id: 'a', text: 'Cỡ số người trong một sân vận động' },
            { id: 'b', text: 'Cỡ số người trên cả Trái Đất' },
            { id: 'c', text: 'Nhiều hơn số hạt cát trên mọi bãi biển' },
          ],
          correctOptionId: 'c',
          explanation:
            'Trái Đất có khoảng 8 tỉ người, vẫn còn quá ít so với "tỉ tỉ". Một cây đinh nhỏ chứa hàng chục nghìn tỉ tỉ nguyên tử iron (sắt), theo ước tính còn nhiều hơn số hạt cát trên mọi bãi biển cộng lại. Nguyên tử nhỏ đến mức khó tưởng tượng nổi.',
          conceptIds: ['atom'],
        },
        {
          id: 'u1-l1-e9',
          type: 'fill-blank',
          prompt: 'Điền vào chỗ trống',
          template: 'Mọi vật quanh ta đều được xếp từ những hạt vô cùng nhỏ gọi là ___.',
          blanks: [{ accepted: ['nguyên tử'], wordBank: ['tế bào', 'nguyên tử', 'hạt cát'] }],
          explanation:
            'Nguyên tử là viên gạch xây nên mọi vật, dù vật đó ở thể rắn, lỏng hay khí. Tế bào thì chỉ có ở sinh vật, còn hạt cát vẫn to hơn nguyên tử rất nhiều.',
          conceptIds: ['atom'],
        },
        {
          id: 'u1-l1-e10',
          type: 'mcq',
          prompt: 'Nếu phá vỡ một nguyên tử iron (sắt) thành các mảnh nhỏ hơn thì sao?',
          visual: { id: 'v', moleculeId: 'fe' },
          options: [
            { id: 'a', text: 'Các mảnh không còn là sắt nữa' },
            { id: 'b', text: 'Được hai nguyên tử iron (sắt) nhỏ hơn' },
            { id: 'c', text: 'Được hai hạt mạt sắt tí hon' },
          ],
          correctOptionId: 'a',
          explanation:
            'Nguyên tử vẫn có thể bị phá vỡ, nhưng các mảnh thu được không còn là sắt. Vì thế nguyên tử là hạt nhỏ nhất còn giữ được "chất sắt". Cuối Unit này bạn sẽ được nhìn vào bên trong nguyên tử.',
          conceptIds: ['atom'],
        },
      ],
      unlocksMolecules: ['fe'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 2: Nguyên tố ─────────────────────────
    {
      id: 'u1-l2-elements',
      title: 'Mỗi loại một tên',
      intro: {
        title: 'Hơn 100 loại gạch',
        story: [
          'Một chiếc nhẫn vàng ta gần như chỉ gồm một loại nguyên tử: nguyên tử gold (vàng). Lõi dây điện thì gồm toàn nguyên tử copper (đồng), một loại khác hẳn.',
          'Mỗi loại nguyên tử như vậy là một nguyên tố, và có tên riêng. Sách hoá học gọi nguyên tố bằng tên quốc tế: vàng là gold, đồng là copper, sắt là iron, còn oxi trong không khí là oxygen.',
          'Đến nay con người đã tìm ra 118 nguyên tố. Giống như vài chục chữ cái ghép thành mọi từ tiếng Việt, chừng ấy loại gạch ghép thành mọi thứ bạn thấy.',
        ],
        visual: { type: 'molecule', moleculeId: 'au' },
      },
      exercises: [
        {
          id: 'u1-l2-e1',
          type: 'mcq',
          prompt: 'Gold (vàng), copper (đồng), oxygen đều là nguyên tố. Vậy một nguyên tố là gì?',
          options: [
            { id: 'a', text: 'Một nguyên tử riêng lẻ' },
            { id: 'b', text: 'Một đồ vật làm bằng kim loại' },
            { id: 'c', text: 'Một loại nguyên tử' },
          ],
          correctOptionId: 'c',
          explanation:
            'Mỗi nguyên tố là một loại nguyên tử. Chiếc nhẫn vàng ta chứa vô số nguyên tử, nhưng chúng cùng một loại nên chỉ thuộc một nguyên tố là gold (vàng). Nguyên tố cũng không phải lúc nào cũng là kim loại: oxygen có trong không khí bạn thở.',
          conceptIds: ['element'],
        },
        {
          id: 'u1-l2-e2',
          type: 'mcq',
          prompt: 'Mỗi màu là một loại nguyên tử. Hình này có mấy nguyên tố?',
          visual: { id: 'v', moleculeId: 'h2o' },
          options: [
            { id: 'a', text: '1' },
            { id: 'b', text: '2' },
            { id: 'c', text: '3' },
          ],
          correctOptionId: 'b',
          explanation:
            'Có 3 nguyên tử nhưng chỉ 2 loại: oxygen (đỏ) và hydrogen (trắng). Vậy hình này có 2 nguyên tố. Con số 3 là số nguyên tử, không phải số nguyên tố.',
          conceptIds: ['element', 'atom'],
        },
        {
          id: 'u1-l2-e3',
          type: 'true-false',
          prompt: 'Hình này gồm 2 nguyên tố khác nhau.',
          visual: { id: 'v', moleculeId: 'o2' },
          answer: false,
          explanation:
            'Hai quả bóng cùng màu, tức là hai nguyên tử cùng một loại, đều là oxygen. Có 2 nguyên tử nhưng chỉ có 1 nguyên tố.',
          conceptIds: ['element', 'atom'],
        },
        {
          id: 'u1-l2-e4',
          type: 'sort',
          prompt:
            'Một nguyên tố chỉ gồm một loại nguyên tử. Nước gồm hai loại nguyên tử, gỗ gồm ít nhất ba loại. Thứ nào dưới đây là một nguyên tố?',
          groups: [
            { id: 'element', label: 'Nguyên tố' },
            { id: 'not', label: 'Không phải nguyên tố' },
          ],
          items: [
            { id: 'i1', text: 'Gold (vàng)', groupId: 'element' },
            { id: 'i2', text: 'Nước', groupId: 'not' },
            { id: 'i3', text: 'Iron (sắt)', groupId: 'element' },
            { id: 'i4', text: 'Gỗ', groupId: 'not' },
            { id: 'i5', text: 'Oxygen', groupId: 'element' },
          ],
          explanation:
            'Gold (vàng), iron (sắt), oxygen mỗi thứ chỉ gồm một loại nguyên tử nên là nguyên tố. Nước do hai loại nguyên tử là hydrogen và oxygen ghép lại. Gỗ do nhiều loại ghép lại, chủ yếu là carbon, hydrogen và oxygen. Vì thế nước và gỗ không phải là nguyên tố.',
          conceptIds: ['element'],
        },
        {
          id: 'u1-l2-e5',
          type: 'match-pairs',
          prompt: 'Nối mỗi nguyên tố với nơi bạn gặp nó',
          pairs: [
            {
              left: { id: 'l1', text: 'Oxygen' },
              right: { id: 'r1', text: 'Không khí bạn hít thở' },
            },
            {
              left: { id: 'l2', text: 'Carbon' },
              right: { id: 'r2', text: 'Cục than, ruột bút chì' },
            },
            {
              left: { id: 'l3', text: 'Calcium (canxi)' },
              right: { id: 'r3', text: 'Xương và răng' },
            },
            {
              left: { id: 'l4', text: 'Aluminium (nhôm)' },
              right: { id: 'r4', text: 'Vỏ lon nước ngọt' },
            },
          ],
          explanation:
            'Oxygen có trong không khí bạn hít thở. Than và ruột bút chì gồm chủ yếu là carbon. Xương và răng chứa nhiều calcium (canxi). Vỏ lon làm bằng aluminium (nhôm) vì kim loại này rất nhẹ. Nguyên tố không ở đâu xa: chúng có ngay quanh bạn và trong cơ thể bạn.',
          conceptIds: ['element'],
        },
        {
          id: 'u1-l2-e6',
          type: 'fill-blank',
          prompt: 'Điền vào chỗ trống',
          template: 'Đến nay con người đã tìm ra ___ nguyên tố.',
          blanks: [{ accepted: ['118'], wordBank: ['18', '118', '1 triệu'] }],
          explanation:
            'Con người mới tìm ra 118 nguyên tố. Khoảng 90 nguyên tố có sẵn trong tự nhiên, số còn lại do con người tạo ra trong phòng thí nghiệm.',
          conceptIds: ['element'],
        },
        {
          id: 'u1-l2-e7',
          type: 'mcq',
          prompt:
            'Chỉ có 118 nguyên tố, nhưng quanh bạn lại có hàng triệu chất khác nhau như nước, đường, muối, nhựa. Vì sao?',
          options: [
            { id: 'a', text: 'Vì các nguyên tử ghép với nhau theo rất nhiều cách' },
            { id: 'b', text: 'Vì mỗi chất là một nguyên tố riêng' },
            { id: 'c', text: 'Vì nguyên tử liên tục đổi sang loại khác' },
          ],
          correctOptionId: 'a',
          explanation:
            'Giống như vài chục chữ cái ghép thành vô số từ, nguyên tử của các nguyên tố ghép với nhau theo rất nhiều cách, tạo thành hàng triệu chất. Nếu mỗi chất là một nguyên tố riêng thì phải có hàng triệu nguyên tố. Còn các nguyên tử quanh bạn thì hầu như không tự đổi sang loại khác.',
          conceptIds: ['element', 'atom'],
        },
        {
          id: 'u1-l2-e8',
          type: 'true-false',
          visual: { id: 'v', image: 'charcoal-pencil' },
          prompt:
            'Kim cương và than chì trong ruột bút chì trông khác hẳn nhau, nhưng đều chỉ gồm nguyên tử carbon. Vậy cả hai được tạo nên từ cùng một nguyên tố.',
          answer: true,
          explanation:
            'Đúng. Nguyên tố tính theo loại nguyên tử, không tính theo vẻ ngoài. Kim cương và than chì đều chỉ gồm nguyên tử carbon, chỉ khác cách các nguyên tử xếp với nhau.',
          conceptIds: ['element'],
        },
        {
          id: 'u1-l2-e9',
          type: 'mcq',
          prompt: 'Mỗi màu là một loại nguyên tử. Hình nào chỉ gồm một nguyên tố?',
          options: [
            { id: 'a', moleculeId: 'co2' },
            { id: 'b', moleculeId: 'h2o' },
            { id: 'c', moleculeId: 'ch4' },
            { id: 'd', moleculeId: 'h2' },
          ],
          correctOptionId: 'd',
          explanation:
            'Hình có hai quả bóng trắng chỉ gồm một loại nguyên tử là hydrogen, nên chỉ có một nguyên tố. Ba hình còn lại đều có hai màu, tức là hai nguyên tố.',
          conceptIds: ['element'],
        },
      ],
      unlocksMolecules: ['au'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 3: Kí hiệu hoá học ─────────────────────────
    {
      id: 'u1-l3-symbols',
      title: 'Tên viết tắt của nguyên tố',
      intro: {
        title: 'Cu, Fe, Ca là gì?',
        story: [
          'Trên cuộn dây điện hay hộp sữa, đôi khi bạn thấy những chữ như Cu, Fe, Ca. Đó là kí hiệu hoá học, tên viết tắt của nguyên tố.',
          'Kí hiệu gồm một hoặc hai chữ cái lấy từ tên nguyên tố. Chữ đầu luôn viết hoa, chữ thứ hai nếu có thì viết thường: O là oxygen, H là hydrogen, C là carbon, Ca là calcium.',
          'Vài kí hiệu trông lạ vì lấy từ tên Latin của nguyên tố: copper (đồng) là Cu, từ "cuprum". Iron (sắt) là Fe, từ "ferrum". Gold (vàng) là Au, từ "aurum".',
        ],
        visual: { type: 'molecule', moleculeId: 'cu' },
      },
      exercises: [
        {
          id: 'u1-l3-e1',
          type: 'match-pairs',
          prompt: 'Nối kí hiệu với tên nguyên tố',
          pairs: [
            { left: { id: 'l1', text: 'O' }, right: { id: 'r1', text: 'Oxygen' } },
            { left: { id: 'l2', text: 'H' }, right: { id: 'r2', text: 'Hydrogen' } },
            { left: { id: 'l3', text: 'C' }, right: { id: 'r3', text: 'Carbon' } },
            { left: { id: 'l4', text: 'N' }, right: { id: 'r4', text: 'Nitrogen' } },
          ],
          explanation:
            'Nhiều kí hiệu chính là chữ cái đầu trong tên quốc tế của nguyên tố: Oxygen, Hydrogen, Carbon, Nitrogen.',
          conceptIds: ['chemical-symbol'],
        },
        {
          id: 'u1-l3-e2',
          type: 'mcq',
          prompt:
            'Chữ trên quả bóng là kí hiệu hoá học của nguyên tử. Nguyên tử trong hình thuộc nguyên tố nào?',
          visual: { id: 'v', moleculeId: 'cu' },
          options: [
            { id: 'a', text: 'Calcium' },
            { id: 'b', text: 'Carbon' },
            { id: 'c', text: 'Copper (đồng)' },
          ],
          correctOptionId: 'c',
          explanation:
            'Cu là copper (đồng), viết tắt của tên Latin "cuprum". Calcium có kí hiệu Ca, còn carbon chỉ có một chữ C.',
          conceptIds: ['chemical-symbol'],
        },
        {
          id: 'u1-l3-e3',
          type: 'mcq',
          prompt:
            'Sodium (natri) là nguyên tố có trong muối ăn. Kí hiệu của nó viết thế nào mới đúng?',
          options: [
            { id: 'a', text: 'NA' },
            { id: 'b', text: 'Na' },
            { id: 'c', text: 'na' },
            { id: 'd', text: 'nA' },
          ],
          correctOptionId: 'b',
          explanation:
            'Chữ đầu luôn viết hoa, chữ thứ hai viết thường, nên phải viết là Na. Các kí hiệu hai chữ khác cũng vậy: Fe, Cu, Au.',
          conceptIds: ['chemical-symbol'],
        },
        {
          id: 'u1-l3-e4',
          type: 'match-pairs',
          prompt:
            'Những kí hiệu này đến từ tên Latin nên không giống tên quốc tế. Nối mỗi kí hiệu với nguyên tố của nó',
          pairs: [
            { left: { id: 'l1', text: 'Fe' }, right: { id: 'r1', text: 'Iron (sắt)' } },
            { left: { id: 'l2', text: 'Na' }, right: { id: 'r2', text: 'Sodium (natri)' } },
            { left: { id: 'l3', text: 'K' }, right: { id: 'r3', text: 'Potassium (kali)' } },
            { left: { id: 'l4', text: 'Au' }, right: { id: 'r4', text: 'Gold (vàng)' } },
            { left: { id: 'l5', text: 'Ag' }, right: { id: 'r5', text: 'Silver (bạc)' } },
          ],
          explanation:
            'Tên Latin của chúng là ferrum, natrium, kalium, aurum và argentum. Tên quen gọi natri và kali trong tiếng Việt cũng bắt nguồn từ đó.',
          conceptIds: ['chemical-symbol'],
        },
        {
          id: 'u1-l3-e5',
          type: 'fill-blank',
          prompt: 'Điền vào chỗ trống',
          template: 'Kí hiệu hoá học của gold (vàng) là ___.',
          blanks: [{ accepted: ['Au'], wordBank: ['Ag', 'Va', 'Au', 'V'] }],
          explanation:
            'Gold (vàng) là Au, từ tên Latin "aurum". Kí hiệu không lấy từ tên tiếng Việt nên không phải là Va hay V. Ag là silver (bạc), còn V là một kim loại khác tên vanadium.',
          conceptIds: ['chemical-symbol'],
        },
        {
          id: 'u1-l3-e6',
          type: 'true-false',
          prompt: 'Kí hiệu hoá học của iron (sắt) là S.',
          answer: false,
          explanation:
            'Kí hiệu không lấy từ chữ đầu của tên tiếng Việt. Iron (sắt) có kí hiệu Fe, từ tên Latin "ferrum". Còn S là kí hiệu của sulfur (lưu huỳnh).',
          conceptIds: ['chemical-symbol'],
        },
        {
          id: 'u1-l3-e7',
          type: 'sort',
          prompt: 'Kí hiệu nào viết đúng quy tắc: chữ đầu viết hoa, chữ sau viết thường?',
          groups: [
            { id: 'right', label: 'Viết đúng' },
            { id: 'wrong', label: 'Viết sai' },
          ],
          items: [
            { id: 'i1', text: 'Fe', groupId: 'right' },
            { id: 'i2', text: 'CU', groupId: 'wrong' },
            { id: 'i3', text: 'Na', groupId: 'right' },
            { id: 'i4', text: 'au', groupId: 'wrong' },
            { id: 'i5', text: 'Cl', groupId: 'right' },
            { id: 'i6', text: 'hE', groupId: 'wrong' },
          ],
          explanation:
            'Kí hiệu đúng có chữ đầu viết hoa, chữ sau viết thường. Vì vậy phải viết Cu, Au, He. Viết đúng hoa thường rất quan trọng: Co là nguyên tố cobalt, còn CO lại là hai nguyên tố C và O đứng cạnh nhau.',
          conceptIds: ['chemical-symbol'],
        },
        {
          id: 'u1-l3-e8',
          type: 'mcq',
          prompt: 'Trên hộp sữa ghi "giàu Ca". Sữa đó giàu nguyên tố gì?',
          options: [
            { id: 'a', text: 'Calcium (canxi)' },
            { id: 'b', text: 'Carbon' },
            { id: 'c', text: 'Copper (đồng)' },
          ],
          correctOptionId: 'a',
          explanation:
            'Ca là calcium (canxi), nguyên tố có nhiều trong xương và răng. Carbon là C, còn copper (đồng) là Cu.',
          conceptIds: ['chemical-symbol', 'element'],
        },
        {
          id: 'u1-l3-e9',
          type: 'mcq',
          prompt: 'Hình nào là nguyên tử gold (vàng)?',
          options: [
            { id: 'a', moleculeId: 'cu' },
            { id: 'b', moleculeId: 'fe' },
            { id: 'c', moleculeId: 'au' },
            { id: 'd', moleculeId: 'c' },
          ],
          correctOptionId: 'c',
          explanation: 'Au là gold (vàng). Cu là copper (đồng), Fe là iron (sắt), C là carbon.',
          conceptIds: ['chemical-symbol'],
        },
        {
          id: 'u1-l3-e10',
          type: 'fill-blank',
          prompt: 'Chọn kí hiệu đúng cho từng chỗ trống',
          template: 'Nước được tạo nên từ hydrogen (kí hiệu ___) và oxygen (kí hiệu ___).',
          blanks: [
            { accepted: ['H'], wordBank: ['Hy', 'H', 'He'] },
            { accepted: ['O'], wordBank: ['O', 'Ox', 'Os'] },
          ],
          explanation:
            'Hydrogen là H, oxygen là O, đều lấy chữ cái đầu của tên. He là helium, còn Os là osmium, những nguyên tố khác hẳn.',
          conceptIds: ['chemical-symbol'],
        },
      ],
      unlocksMolecules: ['cu'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 4: Bảng tuần hoàn ─────────────────────────
    {
      id: 'u1-l4-periodic-table',
      title: 'Tấm bản đồ nguyên tố',
      intro: {
        title: 'Bản đồ của mọi nguyên tố',
        story: [
          'Trong phòng học hoá thường treo một tấm bảng đầy ô vuông. Đó là bảng tuần hoàn, tấm bản đồ xếp chỗ cho tất cả các nguyên tố.',
          'Mỗi ô là một nguyên tố, đánh số lần lượt từ trái sang phải, hết hàng trên thì xuống hàng dưới. Hydrogen ở ô số 1, helium ô số 2, carbon trong cục than ô số 6, oxygen ô số 8.',
          'Phần lớn tấm bảng, ở bên trái và ở giữa, là kim loại như sắt, đồng, vàng: sáng bóng, dẫn điện và dẫn nhiệt tốt. Góc trên bên phải là phi kim như carbon, nitrogen, oxygen: thường không sáng bóng và dẫn điện kém.',
          'Cột ngoài cùng bên phải là các khí hiếm như helium, neon. Nguyên tử của chúng hầu như không ghép với nguyên tử nào khác. Bạn phóng to tấm bảng rồi chạm vào từng nguyên tố để xem mình gặp nó ở đâu nhé.',
        ],
        visual: {
          type: 'periodic-table',
          scene: 'classroom',
          highlight: ['H', 'He', 'C', 'N', 'O', 'Ne', 'Cl', 'K', 'Ca', 'Fe', 'Cu', 'Au'],
        },
      },
      exercises: [
        {
          id: 'u1-l4-e1',
          type: 'mcq',
          prompt: 'Các ô trong bảng tuần hoàn được đánh số như thế nào?',
          options: [
            { id: 'a', text: 'Theo thứ tự chữ cái của tên nguyên tố' },
            { id: 'b', text: 'Lần lượt 1, 2, 3... bắt đầu từ hydrogen' },
            { id: 'c', text: 'Theo năm nguyên tố được tìm ra' },
          ],
          correctOptionId: 'b',
          explanation:
            'Các ô được đánh số lần lượt, bắt đầu từ hydrogen ở ô số 1. Con số của mỗi ô gọi là số hiệu nguyên tử, mỗi nguyên tố có một số riêng. Bài sau bạn sẽ biết con số này đến từ đâu.',
          conceptIds: ['periodic-table', 'atomic-number'],
        },
        {
          id: 'u1-l4-e2',
          type: 'order-steps',
          prompt: 'Sắp xếp bốn nguyên tố theo số ô trong bảng tuần hoàn, từ nhỏ đến lớn',
          steps: [
            { id: 's1', text: 'Hydrogen (H)' },
            { id: 's2', text: 'Helium (He)' },
            { id: 's3', text: 'Carbon (C)' },
            { id: 's4', text: 'Oxygen (O)' },
          ],
          explanation: 'Hydrogen ở ô số 1, helium ô số 2, carbon ô số 6 và oxygen ô số 8.',
          conceptIds: ['periodic-table', 'atomic-number'],
        },
        {
          id: 'u1-l4-e3',
          type: 'sort',
          prompt:
            'Chữ trên mỗi quả bóng là kí hiệu của nguyên tố. Nguyên tố đó là kim loại, phi kim hay khí hiếm?',
          groups: [
            { id: 'metal', label: 'Kim loại' },
            { id: 'nonmetal', label: 'Phi kim' },
            { id: 'noble', label: 'Khí hiếm' },
          ],
          items: [
            { id: 'i1', moleculeId: 'fe', groupId: 'metal' },
            { id: 'i2', moleculeId: 'c', groupId: 'nonmetal' },
            { id: 'i3', moleculeId: 'cu', groupId: 'metal' },
            { id: 'i4', moleculeId: 'o2', groupId: 'nonmetal' },
            { id: 'i5', moleculeId: 'au', groupId: 'metal' },
            { id: 'i6', moleculeId: 'he', groupId: 'noble' },
          ],
          explanation:
            'Iron (sắt), copper (đồng), gold (vàng) là kim loại: sáng bóng, dẫn điện và dẫn nhiệt tốt. Carbon và oxygen là phi kim, ở góc trên bên phải của bảng. Helium là khí hiếm, ở cột ngoài cùng bên phải.',
          conceptIds: ['metal', 'nonmetal'],
        },
        {
          id: 'u1-l4-e4',
          type: 'mcq',
          prompt: 'Sắt, đồng, vàng đều là kim loại. Kim loại thường có đặc điểm nào?',
          options: [
            { id: 'a', text: 'Trong suốt như thuỷ tinh' },
            { id: 'b', text: 'Xỉn màu và dẫn điện kém' },
            { id: 'c', text: 'Sáng bóng và dẫn điện tốt' },
          ],
          correctOptionId: 'c',
          explanation:
            'Kim loại sáng bóng, dẫn điện và dẫn nhiệt tốt. Vì thế dây điện làm bằng đồng, còn nồi chảo làm bằng nhôm hay gang. Dẫn điện kém là đặc điểm thường gặp ở phi kim.',
          conceptIds: ['metal'],
        },
        {
          id: 'u1-l4-e5',
          type: 'match-pairs',
          prompt:
            'Nối mỗi nguyên tố với nơi bạn gặp nó. Chưa chắc cặp nào thì bạn nối các cặp đã biết trước rồi loại trừ dần.',
          pairs: [
            {
              left: { id: 'l1', text: 'Helium (He)' },
              right: { id: 'r1', text: 'Bóng bay lơ lửng' },
            },
            {
              left: { id: 'l2', text: 'Neon (Ne)' },
              right: { id: 'r2', text: 'Biển hiệu phát sáng đỏ cam' },
            },
            {
              left: { id: 'l3', text: 'Calcium (Ca)' },
              right: { id: 'r3', text: 'Xương, răng, vỏ trứng' },
            },
            {
              left: { id: 'l4', text: 'Chlorine (Cl)' },
              right: { id: 'r4', text: 'Chất khử trùng nước hồ bơi' },
            },
            {
              left: { id: 'l5', text: 'Potassium (kali, K)' },
              right: { id: 'r5', text: 'Quả chuối' },
            },
          ],
          explanation:
            'Helium dùng để bơm bóng bay, neon phát sáng đỏ cam trong biển hiệu. Calcium có trong xương, răng và vỏ trứng. Chlorine có trong chất khử trùng nước hồ bơi, còn potassium (kali) có nhiều trong chuối. Cả năm đều nằm trong 20 ô đầu tiên của bảng tuần hoàn.',
          conceptIds: ['periodic-table', 'element'],
        },
        {
          id: 'u1-l4-e6',
          type: 'true-false',
          prompt: 'Phần lớn các nguyên tố trong bảng tuần hoàn là kim loại.',
          answer: true,
          explanation:
            'Đúng. Trong 118 nguyên tố có hơn 90 nguyên tố là kim loại, tức là hơn ba phần tư.',
          conceptIds: ['periodic-table', 'metal'],
        },
        {
          id: 'u1-l4-e7',
          type: 'fill-blank',
          prompt: 'Điền vào chỗ trống',
          template:
            'Carbon ở ô số 6, oxygen ở ô số 8. Nitrogen nằm giữa hai nguyên tố này, ở ô số ___.',
          blanks: [{ accepted: ['7', 'bảy'], wordBank: ['5', '7', '9'] }],
          explanation:
            'Các ô được đánh số liên tiếp, không bỏ số nào. Carbon 6, nitrogen 7, oxygen 8 là ba hàng xóm đứng cạnh nhau.',
          conceptIds: ['periodic-table', 'atomic-number'],
        },
        {
          id: 'u1-l4-e11',
          type: 'fill-blank',
          prompt:
            'Trong bảng tuần hoàn, mỗi hàng ngang gọi là một chu kì, mỗi cột dọc gọi là một nhóm. Chọn từ đúng cho từng chỗ trống',
          template:
            'Carbon, nitrogen, oxygen đứng cạnh nhau trên một hàng ngang nên thuộc cùng một ___. Helium và neon nằm chung một cột dọc nên thuộc cùng một ___.',
          blanks: [
            { accepted: ['chu kì', 'chu kỳ'], wordBank: ['nhóm', 'chu kì', 'ô'] },
            { accepted: ['nhóm'], wordBank: ['nhóm', 'chu kì', 'ô'] },
          ],
          explanation:
            'Hàng ngang là chu kì, cột dọc là nhóm. Các nguyên tố cùng một nhóm thường có tính chất giống nhau: helium và neon cùng nhóm, và đều là khí hiếm.',
          conceptIds: ['periodic-table'],
        },
        {
          id: 'u1-l4-e8',
          type: 'mcq',
          prompt:
            'Nguyên tố này ở ô số 2, là một khí hiếm rất nhẹ dùng để bơm bóng bay. Tên nó là gì?',
          visual: { id: 'v', moleculeId: 'he' },
          options: [
            { id: 'a', text: 'Helium' },
            { id: 'b', text: 'Hydrogen' },
            { id: 'c', text: 'Neon' },
          ],
          correctOptionId: 'a',
          explanation:
            'He là helium, ô số 2. Hydrogen ở ô số 1 có kí hiệu H, còn neon là Ne. Helium nhẹ hơn không khí và không cháy, nên an toàn để bơm bóng bay.',
          conceptIds: ['periodic-table', 'chemical-symbol'],
        },
        {
          id: 'u1-l4-e9',
          type: 'true-false',
          prompt:
            'Mercury (thuỷ ngân) là chất lỏng trong nhiệt kế kiểu cũ. Nó sáng bóng như bạc và dẫn điện. Vậy thuỷ ngân là một kim loại.',
          answer: true,
          explanation:
            'Đúng. Sáng bóng và dẫn điện là dấu hiệu của kim loại, dù ở thể rắn hay thể lỏng. Mercury (thuỷ ngân, kí hiệu Hg) là kim loại duy nhất ở thể lỏng ngay ở nhiệt độ phòng. Nó độc, nên nếu nhiệt kế thuỷ ngân vỡ thì đừng chạm tay vào và báo ngay cho người lớn.',
          conceptIds: ['metal'],
        },
        {
          id: 'u1-l4-e10',
          type: 'mcq',
          prompt: 'Dựa vào vị trí trong bảng tuần hoàn, nguyên tố nào dưới đây là phi kim?',
          options: [
            { id: 'a', text: 'Sodium (natri, Na), cột ngoài cùng bên trái' },
            { id: 'b', text: 'Zinc (kẽm, Zn), khoảng giữa bảng' },
            { id: 'c', text: 'Calcium (Ca), cột thứ hai từ trái sang' },
            { id: 'd', text: 'Sulfur (lưu huỳnh, S), góc trên bên phải' },
          ],
          correctOptionId: 'd',
          explanation:
            'Phi kim tụ lại ở góc trên bên phải, nên sulfur (lưu huỳnh) là phi kim. Nó là chất rắn màu vàng, không sáng bóng. Bất ngờ chưa: sodium trong muối ăn và calcium trong xương đều là kim loại. Chỉ có hydrogen là ngoại lệ, đứng ở góc trên bên trái nhưng lại là phi kim.',
          conceptIds: ['metal', 'nonmetal'],
        },
      ],
      unlocksMolecules: ['c'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 5: Bên trong nguyên tử ─────────────────────────
    {
      id: 'u1-l5-inside-atom',
      title: 'Bên trong nguyên tử',
      intro: {
        title: 'Nhìn vào bên trong',
        story: [
          'Quả bóng bay bay lên được vì chứa khí helium, nhẹ hơn không khí. Nguyên tử helium nhỏ xíu, nhưng bên trong nó còn có những hạt nhỏ hơn nữa.',
          'Ở giữa là hạt nhân, gồm các proton mang điện dương và các neutron không mang điện. Chuyển động quanh hạt nhân là các electron mang điện âm, nhỏ và nhẹ hơn rất nhiều.',
          'Nguyên tử có bao nhiêu proton thì có bấy nhiêu electron. Điện dương và điện âm bù trừ nhau nên cả nguyên tử không mang điện.',
          'Số proton quyết định nguyên tử thuộc nguyên tố nào. Nguyên tử helium nào cũng có đúng 2 proton, vì thế helium nằm ở ô số 2 của bảng tuần hoàn.',
        ],
        visual: { type: 'atom', element: 'He', scene: 'balloons' },
      },
      exercises: [
        {
          id: 'u1-l5-e1',
          type: 'match-pairs',
          prompt: 'Nối mỗi hạt với đặc điểm của nó',
          pairs: [
            {
              left: { id: 'l1', text: 'Proton' },
              right: { id: 'r1', text: 'Trong hạt nhân, mang điện dương' },
            },
            {
              left: { id: 'l2', text: 'Neutron' },
              right: { id: 'r2', text: 'Trong hạt nhân, không mang điện' },
            },
            {
              left: { id: 'l3', text: 'Electron' },
              right: { id: 'r3', text: 'Quanh hạt nhân, mang điện âm' },
            },
          ],
          explanation:
            'Proton (mang điện dương) và neutron (không mang điện) nằm sát nhau trong hạt nhân. Electron (mang điện âm) chuyển động ở vùng xung quanh.',
          conceptIds: ['subatomic-particles'],
        },
        {
          id: 'u1-l5-e2',
          type: 'mcq',
          prompt: 'Trong nguyên tử, hạt nào chuyển động quanh hạt nhân?',
          options: [
            { id: 'a', text: 'Proton' },
            { id: 'b', text: 'Neutron' },
            { id: 'c', text: 'Electron' },
          ],
          correctOptionId: 'c',
          explanation:
            'Electron mang điện âm, bị hạt nhân mang điện dương hút nên luôn ở quanh hạt nhân. Proton và neutron thì nằm ngay trong hạt nhân. Hình electron chạy trên vòng tròn chỉ là mô hình để dễ hình dung.',
          conceptIds: ['subatomic-particles'],
        },
        {
          id: 'u1-l5-e3',
          type: 'fill-blank',
          prompt: 'Điền vào chỗ trống',
          template:
            'Số ô của một nguyên tố trong bảng tuần hoàn bằng số ___ trong mỗi nguyên tử của nó.',
          blanks: [{ accepted: ['proton'], wordBank: ['neutron', 'proton', 'hạt nhân'] }],
          explanation:
            'Số ô, còn gọi là số hiệu nguyên tử, chính là số proton. Hydrogen có 1 proton nên ở ô số 1, helium có 2 proton nên ở ô số 2. Số neutron thì không quyết định vị trí của nguyên tố.',
          conceptIds: ['atomic-number', 'subatomic-particles'],
        },
        {
          id: 'u1-l5-e4',
          type: 'mcq',
          prompt: 'Carbon nằm ở ô số 6. Mỗi nguyên tử carbon có bao nhiêu proton?',
          visual: { id: 'v', moleculeId: 'c' },
          options: [
            { id: 'a', text: '6' },
            { id: 'b', text: '4' },
            { id: 'c', text: '12' },
          ],
          correctOptionId: 'a',
          explanation:
            'Số ô chính là số proton. Carbon ở ô số 6 nên mỗi nguyên tử carbon có 6 proton.',
          conceptIds: ['atomic-number'],
        },
        {
          id: 'u1-l5-e5',
          type: 'true-false',
          prompt: 'Oxygen ở ô số 8. Vậy một nguyên tử có 8 proton thì chắc chắn là oxygen.',
          answer: true,
          explanation:
            'Đúng. Nguyên tử nào có 8 proton cũng là oxygen, và chỉ oxygen mới có 8 proton. Các nguyên tử có cùng số proton thì thuộc cùng một nguyên tố.',
          conceptIds: ['atomic-number', 'element'],
        },
        {
          id: 'u1-l5-e6',
          type: 'sort',
          prompt:
            'Giả sử bạn thêm bớt được từng hạt trong một nguyên tử. Thay đổi nào biến nó thành nguyên tử của một nguyên tố khác?',
          groups: [
            { id: 'changed', label: 'Thành nguyên tố khác' },
            { id: 'same', label: 'Vẫn là nguyên tố cũ' },
          ],
          items: [
            { id: 'i1', text: 'Thêm 1 proton', groupId: 'changed' },
            { id: 'i2', text: 'Thêm 1 electron', groupId: 'same' },
            { id: 'i3', text: 'Bớt 1 proton', groupId: 'changed' },
            { id: 'i4', text: 'Bớt 1 electron', groupId: 'same' },
            { id: 'i5', text: 'Thêm 1 neutron', groupId: 'same' },
          ],
          explanation:
            'Chỉ số proton mới quyết định nguyên tử thuộc nguyên tố nào. Thêm hay bớt proton là đổi sang nguyên tố khác. Thêm bớt neutron thì nguyên tử vẫn thuộc nguyên tố cũ. Thêm bớt electron cũng vậy, nó chỉ làm nguyên tử mang điện, chuyện này bạn sẽ gặp lại ở Unit 2.',
          conceptIds: ['atomic-number', 'subatomic-particles'],
        },
        {
          id: 'u1-l5-e7',
          type: 'mcq',
          prompt:
            'Điện dương của một proton vừa đủ bù điện âm của một electron, và cả nguyên tử thì không mang điện. Nguyên tử helium có 2 proton. Vậy nó có mấy electron?',
          visual: { id: 'v', moleculeId: 'he' },
          options: [
            { id: 'a', text: '1' },
            { id: 'b', text: '2' },
            { id: 'c', text: '4' },
          ],
          correctOptionId: 'b',
          explanation:
            'Để điện dương và điện âm bù trừ hết cho nhau, số electron phải bằng số proton. Helium có 2 proton nên có 2 electron. Khi đó người ta nói nguyên tử trung hoà về điện.',
          conceptIds: ['subatomic-particles'],
        },
        {
          id: 'u1-l5-e8',
          type: 'order-steps',
          prompt: 'Sắp xếp các hạt sau từ nhỏ đến lớn',
          steps: [
            { id: 's1', text: 'Electron' },
            { id: 's2', text: 'Hạt nhân' },
            { id: 's3', text: 'Nguyên tử' },
            { id: 's4', text: 'Hạt cát' },
          ],
          explanation:
            'Electron nhỏ hơn hạt nhân, hạt nhân nằm lọt trong nguyên tử, còn một hạt cát chứa vô số nguyên tử. Hạt nhân nhỏ hơn nguyên tử hàng chục nghìn lần: nếu nguyên tử to bằng sân vận động Mỹ Đình thì hạt nhân chỉ như một hạt đậu đặt giữa sân.',
          conceptIds: ['subatomic-particles', 'atom'],
        },
        {
          id: 'u1-l5-e9',
          type: 'true-false',
          prompt: 'Nguyên tử gold (vàng) và nguyên tử iron (sắt) có cùng số proton.',
          answer: false,
          explanation:
            'Khác nguyên tố thì khác số proton. Iron (sắt) ở ô số 26 nên có 26 proton, gold (vàng) ở ô số 79 nên có 79 proton.',
          conceptIds: ['atomic-number', 'element'],
        },
        {
          id: 'u1-l5-e10',
          type: 'mcq',
          prompt:
            'Nguyên tử sodium (natri) có 11 proton. Sodium nằm ở ô số mấy trong bảng tuần hoàn?',
          options: [
            { id: 'a', text: 'Ô số 1' },
            { id: 'b', text: 'Ô số 23' },
            { id: 'c', text: 'Ô số 11' },
          ],
          correctOptionId: 'c',
          explanation:
            'Số ô bằng số proton. Sodium (natri) có 11 proton nên nằm ở ô số 11. Bảng tuần hoàn xếp các nguyên tố theo số proton tăng dần.',
          conceptIds: ['atomic-number', 'periodic-table'],
        },
      ],
      unlocksMolecules: ['he'],
      baseXp: 10,
    },

    // ───────────────────────── Checkpoint Unit 1 ─────────────────────────
    {
      id: 'u1-checkpoint',
      title: 'Kiểm tra Unit 1',
      kind: 'checkpoint',
      exercises: [
        {
          id: 'u1-cp-e1',
          type: 'mcq',
          prompt:
            'Tờ giấy bạc gói đồ ăn gần như chỉ gồm toàn nguyên tử aluminium (nhôm). Mỗi loại nguyên tử như vậy được gọi là gì?',
          options: [
            { id: 'a', text: 'Một nguyên tố' },
            { id: 'b', text: 'Một hạt nhân' },
            { id: 'c', text: 'Một electron' },
          ],
          correctOptionId: 'a',
          explanation:
            'Mỗi loại nguyên tử là một nguyên tố. Aluminium (nhôm) là một trong 118 nguyên tố đã biết. Hạt nhân và electron chỉ là những phần bên trong một nguyên tử.',
          conceptIds: ['element', 'atom'],
        },
        {
          id: 'u1-cp-e2',
          type: 'match-pairs',
          prompt: 'Nối kí hiệu với tên nguyên tố',
          pairs: [
            { left: { id: 'l1', text: 'Na' }, right: { id: 'r1', text: 'Sodium (natri)' } },
            { left: { id: 'l2', text: 'Cu' }, right: { id: 'r2', text: 'Copper (đồng)' } },
            { left: { id: 'l3', text: 'Ag' }, right: { id: 'r3', text: 'Silver (bạc)' } },
            { left: { id: 'l4', text: 'K' }, right: { id: 'r4', text: 'Potassium (kali)' } },
            { left: { id: 'l5', text: 'C' }, right: { id: 'r5', text: 'Carbon' } },
          ],
          explanation:
            'Na, Cu, Ag, K đến từ tên Latin: natrium, cuprum, argentum, kalium. C là chữ đầu của "carbon".',
          conceptIds: ['chemical-symbol'],
        },
        {
          id: 'u1-cp-e3',
          type: 'mcq',
          prompt:
            'Đáy nồi, chảo thường làm bằng kim loại như aluminium (nhôm) để thức ăn nóng nhanh. Người ta dựa vào đặc điểm nào của kim loại?',
          options: [
            { id: 'a', text: 'Kim loại sáng bóng' },
            { id: 'b', text: 'Kim loại dẫn nhiệt tốt' },
            { id: 'c', text: 'Kim loại chiếm phần lớn bảng tuần hoàn' },
          ],
          correctOptionId: 'b',
          explanation:
            'Kim loại dẫn nhiệt tốt nên hơi nóng từ bếp truyền nhanh qua đáy nồi tới thức ăn. Kim loại cũng sáng bóng và chiếm phần lớn bảng tuần hoàn, nhưng hai điều đó không giúp nấu nhanh hơn.',
          conceptIds: ['metal'],
        },
        {
          id: 'u1-cp-e4',
          type: 'true-false',
          prompt: 'Phá vỡ một nguyên tử gold (vàng), bạn được hai mẩu vàng nhỏ hơn.',
          answer: false,
          explanation:
            'Nguyên tử là hạt nhỏ nhất còn là vàng. Phá vỡ nó thì các mảnh thu được không còn là vàng nữa.',
          conceptIds: ['atom'],
        },
        {
          id: 'u1-cp-e5',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template: 'Trong hạt nhân có proton và ___. Chuyển động quanh hạt nhân là các ___.',
          blanks: [
            { accepted: ['neutron'], wordBank: ['neutron', 'electron', 'nguyên tố'] },
            { accepted: ['electron'], wordBank: ['proton', 'neutron', 'electron'] },
          ],
          explanation:
            'Hạt nhân gồm proton và neutron. Electron mang điện âm chuyển động ở vùng quanh hạt nhân.',
          conceptIds: ['subatomic-particles'],
        },
        {
          id: 'u1-cp-e6',
          type: 'sort',
          prompt: 'Kim loại, phi kim hay khí hiếm?',
          groups: [
            { id: 'metal', label: 'Kim loại' },
            { id: 'nonmetal', label: 'Phi kim' },
            { id: 'noble', label: 'Khí hiếm' },
          ],
          items: [
            { id: 'i1', text: 'Aluminium (nhôm, Al)', groupId: 'metal' },
            { id: 'i2', text: 'Oxygen (O)', groupId: 'nonmetal' },
            { id: 'i3', text: 'Silver (bạc, Ag)', groupId: 'metal' },
            { id: 'i4', text: 'Carbon (C)', groupId: 'nonmetal' },
            { id: 'i5', text: 'Helium (He)', groupId: 'noble' },
            { id: 'i6', text: 'Neon (Ne)', groupId: 'noble' },
          ],
          explanation:
            'Aluminium (nhôm) và silver (bạc) là kim loại. Oxygen và carbon là phi kim, nằm ở góc trên bên phải bảng tuần hoàn. Helium và neon là khí hiếm, nằm ở cột ngoài cùng bên phải.',
          conceptIds: ['metal', 'nonmetal'],
        },
        {
          id: 'u1-cp-e7',
          type: 'mcq',
          visual: { id: 'v', image: 'snack-bag' },
          prompt:
            'Gói bim bim phồng căng vì được bơm đầy khí nitrogen. Nitrogen nằm ở ô số 7 của bảng tuần hoàn. Một nguyên tử nitrogen có bao nhiêu proton?',
          options: [
            { id: 'a', text: '3' },
            { id: 'b', text: '14' },
            { id: 'c', text: '7' },
          ],
          correctOptionId: 'c',
          explanation:
            'Số ô trong bảng tuần hoàn bằng số proton. Nitrogen ở ô số 7 nên mỗi nguyên tử nitrogen có 7 proton.',
          conceptIds: ['atomic-number'],
        },
        {
          id: 'u1-cp-e8',
          type: 'order-steps',
          prompt:
            'Trong bảng tuần hoàn, hydrogen ở ô số 1, carbon ô số 6, sodium (natri) ô số 11, iron (sắt) ô số 26, gold (vàng) ô số 79. Sắp xếp các nguyên tử theo số proton, từ ít đến nhiều',
          steps: [
            { id: 's1', text: 'Hydrogen (H)' },
            { id: 's2', text: 'Carbon (C)' },
            { id: 's3', text: 'Sodium (natri, Na)' },
            { id: 's4', text: 'Iron (sắt, Fe)' },
            { id: 's5', text: 'Gold (vàng, Au)' },
          ],
          explanation:
            'Số ô chính là số proton: hydrogen 1, carbon 6, sodium 11, iron (sắt) 26, gold (vàng) 79. Càng về cuối bảng, nguyên tử càng nhiều proton.',
          conceptIds: ['atomic-number', 'periodic-table'],
        },
        {
          id: 'u1-cp-e9',
          type: 'mcq',
          prompt:
            'Mỗi quả bóng là một nguyên tử, mỗi màu là một loại nguyên tử. Hình này có mấy nguyên tử và mấy nguyên tố?',
          visual: { id: 'v', moleculeId: 'h2o' },
          options: [
            { id: 'a', text: '2 nguyên tử, 3 nguyên tố' },
            { id: 'b', text: '3 nguyên tử, 3 nguyên tố' },
            { id: 'c', text: '3 nguyên tử, 2 nguyên tố' },
          ],
          correctOptionId: 'c',
          explanation:
            'Có 3 quả bóng nên có 3 nguyên tử. Chỉ có 2 màu, tức 2 loại nguyên tử: oxygen và hydrogen, nên có 2 nguyên tố.',
          conceptIds: ['atom', 'element'],
        },
        {
          id: 'u1-cp-e10',
          type: 'true-false',
          prompt: 'Kí hiệu hoá học của silver (bạc) là Ba.',
          answer: false,
          explanation:
            'Kí hiệu không lấy từ tên tiếng Việt. Silver (bạc) là Ag, từ tên Latin "argentum". Ba là kí hiệu của barium, một nguyên tố khác.',
          conceptIds: ['chemical-symbol'],
        },
        {
          id: 'u1-cp-e11',
          type: 'mcq',
          prompt: 'Hạt nào quyết định một nguyên tử thuộc nguyên tố nào?',
          options: [
            { id: 'a', text: 'Electron' },
            { id: 'b', text: 'Proton' },
            { id: 'c', text: 'Neutron' },
          ],
          correctOptionId: 'b',
          explanation:
            'Số proton quyết định tên nguyên tố: 1 proton là hydrogen, 6 proton là carbon, 79 proton là gold (vàng). Thêm bớt electron hay neutron thì nguyên tử vẫn thuộc nguyên tố cũ.',
          conceptIds: ['atomic-number', 'subatomic-particles'],
        },
        {
          id: 'u1-cp-e12',
          type: 'match-pairs',
          prompt: 'Nối mỗi nguyên tử với nơi bạn gặp nó',
          pairs: [
            {
              left: { id: 'l1', moleculeId: 'fe' },
              right: { id: 'r1', text: 'Cây đinh', image: 'iron-nail' },
            },
            {
              left: { id: 'l2', moleculeId: 'cu' },
              right: { id: 'r2', text: 'Lõi dây điện', image: 'copper-wire' },
            },
            {
              left: { id: 'l3', moleculeId: 'he' },
              right: { id: 'r3', text: 'Bóng bay lơ lửng', image: 'balloons' },
            },
            {
              left: { id: 'l4', moleculeId: 'c' },
              right: { id: 'r4', text: 'Cục than', image: 'charcoal-pencil' },
            },
            {
              left: { id: 'l5', moleculeId: 'au' },
              right: { id: 'r5', text: 'Nhẫn cưới', image: 'gold-ring' },
            },
          ],
          explanation:
            'Fe là iron (sắt), Cu là copper (đồng), He là helium, C là carbon, Au là gold (vàng). Biết kí hiệu là bạn đọc được thành phần của rất nhiều thứ quanh mình.',
          conceptIds: ['chemical-symbol', 'element'],
        },
      ],
      baseXp: 20,
    },
  ],
}
