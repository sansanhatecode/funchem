import type { UnitInput } from '../../schema/lesson.js'

/**
 * Unit 1 — Mọi thứ được làm từ gì?
 * 5 bài học + checkpoint: nguyên tử, nguyên tố, ký hiệu, bảng tuần hoàn, bên trong nguyên tử.
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
          'Cây đinh, ly nước, không khí và cả cơ thể bạn đều xếp từ những hạt bé xíu như vậy.',
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
            'Nguyên tử là những viên gạch nhỏ xíu xếp nên mọi vật. Tế bào lớn hơn rất nhiều và chính nó cũng được xếp từ nguyên tử.',
          conceptIds: ['atom'],
        },
        {
          id: 'u1-l1-e2',
          type: 'true-false',
          prompt: 'Cơ thể bạn cũng được tạo nên từ nguyên tử.',
          answer: true,
          explanation:
            'Đúng. Da, xương, máu đều xếp từ nguyên tử, nhiều nhất là oxygen, carbon, hydrogen và nitrogen.',
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
            'Có 3 quả bóng, 1 đỏ và 2 trắng, tức là 3 nguyên tử. Chúng dính vào nhau thành một hạt nước tí hon, bạn sẽ gặp lại nó ở Unit 2.',
          conceptIds: ['atom'],
        },
        {
          id: 'u1-l1-e4',
          type: 'match-pairs',
          prompt: 'Mỗi vật dưới đây xếp chủ yếu từ loại nguyên tử nào?',
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
            'Nguyên tử không chỉ có một loại. Iron (sắt), gold (vàng), copper (đồng), carbon là những loại nguyên tử khác nhau, bài sau bạn sẽ gọi tên chúng.',
          conceptIds: ['atom', 'element'],
        },
        {
          id: 'u1-l1-e5',
          type: 'true-false',
          prompt: 'Nguyên tử to cỡ hạt cát, nhìn kỹ bằng mắt thường là thấy.',
          answer: false,
          explanation:
            'Nguyên tử nhỏ đến mức mắt thường và cả kính hiển vi thông thường đều không thấy được. Bề ngang một sợi tóc xếp vừa hàng trăm nghìn nguyên tử.',
          conceptIds: ['atom'],
        },
        {
          id: 'u1-l1-e6',
          type: 'sort',
          prompt: 'Thứ nào được tạo nên từ nguyên tử?',
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
            'Thứ gì cân được hay chứa được trong bình đều làm từ nguyên tử, kể cả không khí. Ánh nắng là năng lượng, còn âm thanh là sự rung động truyền đi, chúng không phải là vật chất.',
          conceptIds: ['atom'],
        },
        {
          id: 'u1-l1-e7',
          type: 'order-steps',
          prompt: 'Sắp xếp từ nhỏ đến lớn',
          steps: [
            { id: 's1', text: 'Một nguyên tử iron (sắt)' },
            { id: 's2', text: 'Một hạt mạt sắt' },
            { id: 's3', text: 'Một cây đinh' },
            { id: 's4', text: 'Cầu Long Biên' },
          ],
          explanation:
            'Một hạt mạt sắt bé tí đã chứa hàng tỉ tỉ nguyên tử iron (sắt). Càng nhiều nguyên tử xếp lại, vật càng lớn.',
          conceptIds: ['atom'],
        },
        {
          id: 'u1-l1-e8',
          type: 'mcq',
          visual: { id: 'v', image: 'iron-nail' },
          prompt: 'Một cây đinh sắt nhỏ chứa khoảng bao nhiêu nguyên tử iron (sắt)?',
          options: [
            { id: 'a', text: 'Khoảng một trăm' },
            { id: 'b', text: 'Khoảng một triệu' },
            { id: 'c', text: 'Nhiều hơn số hạt cát trên mọi bãi biển' },
          ],
          correctOptionId: 'c',
          explanation:
            'Một cây đinh nhỏ chứa hàng chục nghìn tỉ tỉ nguyên tử iron (sắt), nhiều hơn hẳn số hạt cát trên mọi bãi biển cộng lại. Nguyên tử nhỏ đến mức khó tưởng tượng nổi.',
          conceptIds: ['atom'],
        },
        {
          id: 'u1-l1-e9',
          type: 'fill-blank',
          prompt: 'Điền vào chỗ trống',
          template: 'Mọi vật quanh ta đều được xếp từ những hạt vô cùng nhỏ gọi là ___.',
          blanks: [{ accepted: ['nguyên tử'], wordBank: ['tế bào', 'nguyên tử', 'hạt cát'] }],
          explanation: 'Nguyên tử là viên gạch xây nên mọi vật chất: rắn, lỏng hay khí.',
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
            { id: 'c', text: 'Được hai cây đinh tí hon' },
          ],
          correctOptionId: 'a',
          explanation:
            'Nguyên tử vẫn có thể bị phá vỡ, nhưng các mảnh thu được không còn là sắt. Vì thế nguyên tử là hạt nhỏ nhất còn giữ được "chất sắt".',
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
          'Một chiếc nhẫn vàng ta gần như chỉ gồm toàn nguyên tử gold (vàng). Lõi dây điện thì gồm toàn nguyên tử copper (đồng).',
          'Mỗi loại nguyên tử như vậy là một nguyên tố, và có tên riêng. Vàng có tên quốc tế là gold, đồng là copper, sắt là iron, còn khí bạn thở là oxygen.',
          'Con người mới biết khoảng 118 nguyên tố. Giống như vài chục chữ cái ghép thành mọi từ tiếng Việt, chừng ấy loại gạch ghép thành mọi thứ bạn thấy.',
        ],
        visual: { type: 'molecule', moleculeId: 'au' },
      },
      exercises: [
        {
          id: 'u1-l2-e1',
          type: 'mcq',
          prompt: 'Nguyên tố là gì?',
          options: [
            { id: 'a', text: 'Một vật rất nhỏ như hạt bụi' },
            { id: 'b', text: 'Một vật làm bằng kim loại' },
            { id: 'c', text: 'Một loại nguyên tử' },
          ],
          correctOptionId: 'c',
          explanation:
            'Mỗi nguyên tố là một loại nguyên tử. Gold (vàng) là một nguyên tố, oxygen là một nguyên tố khác.',
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
            'Có 3 nguyên tử nhưng chỉ 2 loại: oxygen (đỏ) và hydrogen (trắng). Vậy hình này có 2 nguyên tố.',
          conceptIds: ['element', 'atom'],
        },
        {
          id: 'u1-l2-e3',
          type: 'true-false',
          prompt: 'Hình này gồm 2 nguyên tố khác nhau.',
          visual: { id: 'v', moleculeId: 'o2' },
          answer: false,
          explanation:
            'Hai nguyên tử trong hình cùng một loại, đều là oxygen. Có 2 nguyên tử nhưng chỉ có 1 nguyên tố.',
          conceptIds: ['element', 'atom'],
        },
        {
          id: 'u1-l2-e4',
          type: 'sort',
          prompt: 'Thứ nào là một nguyên tố?',
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
            'Gold (vàng), iron (sắt), oxygen mỗi thứ chỉ gồm một loại nguyên tử. Nước và gỗ do nhiều loại nguyên tử ghép lại nên không phải là nguyên tố.',
          conceptIds: ['element'],
        },
        {
          id: 'u1-l2-e5',
          type: 'match-pairs',
          prompt: 'Nối nguyên tố với nơi bạn gặp nó',
          pairs: [
            {
              left: { id: 'l1', text: 'Oxygen' },
              right: { id: 'r1', text: 'Không khí bạn hít thở' },
            },
            {
              left: { id: 'l2', text: 'Carbon' },
              right: { id: 'r2', text: 'Cục than, ruột bút chì' },
            },
            { left: { id: 'l3', text: 'Calcium' }, right: { id: 'r3', text: 'Xương và răng' } },
            {
              left: { id: 'l4', text: 'Aluminium (nhôm)' },
              right: { id: 'r4', text: 'Vỏ lon nước ngọt' },
            },
          ],
          explanation:
            'Các nguyên tố không ở đâu xa: chúng có trong không khí, trong đồ dùng và ngay trong cơ thể bạn.',
          conceptIds: ['element'],
        },
        {
          id: 'u1-l2-e6',
          type: 'fill-blank',
          prompt: 'Điền vào chỗ trống',
          template: 'Đến nay con người biết khoảng ___ nguyên tố.',
          blanks: [{ accepted: ['118'], wordBank: ['18', '118', '1 triệu'] }],
          explanation:
            'Chỉ khoảng 118 nguyên tố, trong đó chừng 90 loại có sẵn trong tự nhiên, số còn lại do con người tạo ra trong phòng thí nghiệm.',
          conceptIds: ['element'],
        },
        {
          id: 'u1-l2-e7',
          type: 'mcq',
          prompt: 'Chỉ có khoảng 118 nguyên tố, nhưng lại có hàng triệu chất khác nhau. Vì sao?',
          options: [
            { id: 'a', text: 'Vì các nguyên tử ghép với nhau theo rất nhiều cách' },
            { id: 'b', text: 'Vì mỗi chất là một nguyên tố riêng' },
            { id: 'c', text: 'Vì nguyên tử liên tục đổi sang loại khác' },
          ],
          correctOptionId: 'a',
          explanation:
            'Giống như vài chục chữ cái ghép thành vô số từ, các nguyên tố ghép với nhau thành hàng triệu chất khác nhau.',
          conceptIds: ['element', 'atom'],
        },
        {
          id: 'u1-l2-e8',
          type: 'true-false',
          visual: { id: 'v', image: 'charcoal-pencil' },
          prompt: 'Kim cương và ruột bút chì đều làm từ cùng một nguyên tố: carbon.',
          answer: true,
          explanation:
            'Đúng. Cả hai đều chỉ gồm nguyên tử carbon, chỉ khác cách các nguyên tử xếp với nhau.',
          conceptIds: ['element'],
        },
        {
          id: 'u1-l2-e9',
          type: 'mcq',
          prompt: 'Hình nào chỉ gồm một nguyên tố?',
          options: [
            { id: 'a', moleculeId: 'co2' },
            { id: 'b', moleculeId: 'h2o' },
            { id: 'c', moleculeId: 'ch4' },
            { id: 'd', moleculeId: 'h2' },
          ],
          correctOptionId: 'd',
          explanation:
            'Hình có hai quả bóng trắng chỉ gồm một loại nguyên tử: hydrogen. Ba hình còn lại đều có hai loại nguyên tử khác màu.',
          conceptIds: ['element'],
        },
      ],
      unlocksMolecules: ['au'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 3: Ký hiệu hoá học ─────────────────────────
    {
      id: 'u1-l3-symbols',
      title: 'Tên viết tắt của nguyên tố',
      intro: {
        title: 'Cu, Fe, Ca là gì?',
        story: [
          'Trên cuộn dây điện hay hộp sữa, đôi khi bạn thấy những chữ như Cu, Fe, Ca. Đó là ký hiệu hoá học, tên viết tắt của nguyên tố.',
          'Ký hiệu gồm một hoặc hai chữ cái, chữ đầu luôn viết hoa: O là oxygen, H là hydrogen, C là carbon.',
          'Vài ký hiệu trông lạ vì lấy từ tên Latinh: copper (đồng) là Cu, từ "cuprum". Iron (sắt) là Fe, từ "ferrum". Gold (vàng) là Au, từ "aurum".',
        ],
        visual: { type: 'molecule', moleculeId: 'cu' },
      },
      exercises: [
        {
          id: 'u1-l3-e1',
          type: 'match-pairs',
          prompt: 'Nối ký hiệu với tên nguyên tố',
          pairs: [
            { left: { id: 'l1', text: 'O' }, right: { id: 'r1', text: 'Oxygen' } },
            { left: { id: 'l2', text: 'H' }, right: { id: 'r2', text: 'Hydrogen' } },
            { left: { id: 'l3', text: 'C' }, right: { id: 'r3', text: 'Carbon' } },
            { left: { id: 'l4', text: 'N' }, right: { id: 'r4', text: 'Nitrogen' } },
          ],
          explanation:
            'Nhiều ký hiệu chính là chữ cái đầu trong tên quốc tế của nguyên tố: Oxygen, Hydrogen, Carbon, Nitrogen.',
          conceptIds: ['chemical-symbol'],
        },
        {
          id: 'u1-l3-e2',
          type: 'mcq',
          prompt: 'Nguyên tử trong hình thuộc nguyên tố nào?',
          visual: { id: 'v', moleculeId: 'cu' },
          options: [
            { id: 'a', text: 'Calcium' },
            { id: 'b', text: 'Carbon' },
            { id: 'c', text: 'Copper (đồng)' },
          ],
          correctOptionId: 'c',
          explanation:
            'Cu là copper (đồng), viết tắt của tên Latinh "cuprum". Calcium là Ca, còn carbon là C.',
          conceptIds: ['chemical-symbol'],
        },
        {
          id: 'u1-l3-e3',
          type: 'mcq',
          prompt: 'Cách viết nào đúng cho ký hiệu của sodium (natri)?',
          options: [
            { id: 'a', text: 'NA' },
            { id: 'b', text: 'Na' },
            { id: 'c', text: 'na' },
            { id: 'd', text: 'nA' },
          ],
          correctOptionId: 'b',
          explanation: 'Chữ đầu luôn viết hoa, chữ thứ hai (nếu có) viết thường: Na, Fe, Cu, Au.',
          conceptIds: ['chemical-symbol'],
        },
        {
          id: 'u1-l3-e4',
          type: 'match-pairs',
          prompt: 'Những ký hiệu này đến từ tên Latinh. Nối với tên nguyên tố',
          pairs: [
            { left: { id: 'l1', text: 'Fe' }, right: { id: 'r1', text: 'Iron (sắt)' } },
            { left: { id: 'l2', text: 'Na' }, right: { id: 'r2', text: 'Sodium (natri)' } },
            { left: { id: 'l3', text: 'K' }, right: { id: 'r3', text: 'Potassium (kali)' } },
            { left: { id: 'l4', text: 'Au' }, right: { id: 'r4', text: 'Gold (vàng)' } },
            { left: { id: 'l5', text: 'Ag' }, right: { id: 'r5', text: 'Silver (bạc)' } },
          ],
          explanation:
            'Tên Latinh của chúng là ferrum, natrium, kalium, aurum và argentum. Tên quen gọi natri và kali trong tiếng Việt cũng bắt nguồn từ đó.',
          conceptIds: ['chemical-symbol'],
        },
        {
          id: 'u1-l3-e5',
          type: 'fill-blank',
          prompt: 'Điền vào chỗ trống',
          template: 'Ký hiệu hoá học của gold (vàng) là ___.',
          blanks: [{ accepted: ['Au'], wordBank: ['Ag', 'Va', 'Au', 'V'] }],
          explanation:
            'Gold (vàng) là Au, từ "aurum". Ag là silver (bạc), còn V là một kim loại khác tên vanadium.',
          conceptIds: ['chemical-symbol'],
        },
        {
          id: 'u1-l3-e6',
          type: 'true-false',
          prompt: 'Ký hiệu hoá học của iron (sắt) là S.',
          answer: false,
          explanation: 'S là sulfur (lưu huỳnh). Iron (sắt) có ký hiệu Fe, từ tên Latinh "ferrum".',
          conceptIds: ['chemical-symbol'],
        },
        {
          id: 'u1-l3-e7',
          type: 'sort',
          prompt: 'Ký hiệu nào viết đúng quy tắc?',
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
            'Ký hiệu đúng có chữ đầu viết hoa, chữ sau viết thường. Vì vậy phải viết Cu, Au, He.',
          conceptIds: ['chemical-symbol'],
        },
        {
          id: 'u1-l3-e8',
          type: 'mcq',
          prompt: 'Trên hộp sữa ghi "giàu Ca". Sữa đó giàu nguyên tố gì?',
          options: [
            { id: 'a', text: 'Calcium' },
            { id: 'b', text: 'Carbon' },
            { id: 'c', text: 'Copper (đồng)' },
          ],
          correctOptionId: 'a',
          explanation:
            'Ca là calcium, nguyên tố giúp xương và răng chắc khoẻ. Carbon là C, copper (đồng) là Cu.',
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
          prompt: 'Chọn ký hiệu đúng cho từng chỗ trống',
          template: 'Nước được tạo nên từ hydrogen (ký hiệu ___) và oxygen (ký hiệu ___).',
          blanks: [
            { accepted: ['H'], wordBank: ['Hy', 'H', 'He'] },
            { accepted: ['O'], wordBank: ['O', 'Ox', 'Os'] },
          ],
          explanation:
            'Hydrogen là H, oxygen là O. Còn He là helium, một nguyên tố khác hẳn hydrogen.',
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
          'Phòng học hoá nào cũng treo một tấm bảng đầy ô vuông. Đó là bảng tuần hoàn, tấm bản đồ xếp tất cả các nguyên tố.',
          'Mỗi ô là một nguyên tố, đánh số lần lượt: hydrogen số 1, helium số 2... Carbon trong cục than nằm ở ô số 6.',
          'Kim loại như sắt, đồng, vàng chiếm phần lớn tấm bảng, ở bên trái và ở giữa. Phi kim như carbon, nitrogen, oxygen tụ lại ở góc trên bên phải.',
        ],
        visual: {
          type: 'periodic-table',
          scene: 'classroom',
          highlight: ['H', 'He', 'C', 'N', 'O', 'Fe', 'Cu', 'Au'],
        },
      },
      exercises: [
        {
          id: 'u1-l4-e1',
          type: 'mcq',
          prompt: 'Trong bảng tuần hoàn, các nguyên tố được xếp theo thứ tự nào?',
          options: [
            { id: 'a', text: 'Theo bảng chữ cái' },
            { id: 'b', text: 'Theo số thứ tự tăng dần, bắt đầu từ hydrogen số 1' },
            { id: 'c', text: 'Theo năm được tìm ra' },
          ],
          correctOptionId: 'b',
          explanation:
            'Mỗi nguyên tố có một số thứ tự riêng, gọi là số hiệu nguyên tử. Bài sau bạn sẽ biết con số này đến từ đâu.',
          conceptIds: ['periodic-table', 'atomic-number'],
        },
        {
          id: 'u1-l4-e2',
          type: 'order-steps',
          prompt: 'Sắp xếp theo thứ tự trong bảng tuần hoàn, bắt đầu từ ô số 1',
          steps: [
            { id: 's1', text: 'Hydrogen (H)' },
            { id: 's2', text: 'Helium (He)' },
            { id: 's3', text: 'Carbon (C)' },
            { id: 's4', text: 'Oxygen (O)' },
          ],
          explanation: 'Hydrogen ở ô số 1, helium số 2, carbon số 6 và oxygen số 8.',
          conceptIds: ['periodic-table', 'atomic-number'],
        },
        {
          id: 'u1-l4-e3',
          type: 'sort',
          prompt: 'Kim loại hay phi kim?',
          groups: [
            { id: 'metal', label: 'Kim loại' },
            { id: 'nonmetal', label: 'Phi kim' },
          ],
          items: [
            { id: 'i1', moleculeId: 'fe', groupId: 'metal' },
            { id: 'i2', moleculeId: 'c', groupId: 'nonmetal' },
            { id: 'i3', moleculeId: 'cu', groupId: 'metal' },
            { id: 'i4', moleculeId: 'o2', groupId: 'nonmetal' },
            { id: 'i5', moleculeId: 'au', groupId: 'metal' },
          ],
          explanation:
            'Iron (sắt), copper (đồng), gold (vàng) là kim loại: sáng bóng, dẫn điện và dẫn nhiệt tốt. Carbon và oxygen là phi kim.',
          conceptIds: ['metal', 'nonmetal'],
        },
        {
          id: 'u1-l4-e4',
          type: 'mcq',
          prompt: 'Đặc điểm nào thường gặp ở kim loại?',
          options: [
            { id: 'a', text: 'Trong suốt như thuỷ tinh' },
            { id: 'b', text: 'Luôn ở dạng khí' },
            { id: 'c', text: 'Sáng bóng và dẫn điện tốt' },
          ],
          correctOptionId: 'c',
          explanation:
            'Kim loại sáng bóng, dẫn điện và dẫn nhiệt tốt. Vì thế dây điện làm bằng đồng, còn nồi chảo làm bằng nhôm hay gang.',
          conceptIds: ['metal'],
        },
        {
          id: 'u1-l4-e5',
          type: 'match-pairs',
          prompt: 'Nối nguyên tố với nơi bạn gặp nó',
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
              left: { id: 'l3', text: 'Silicon (Si)' },
              right: { id: 'r3', text: 'Cát và chip điện thoại' },
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
            'Cả năm đều nằm trong 20 ô đầu tiên của bảng tuần hoàn. Bạn gặp chúng mỗi ngày, từ quả chuối đến chiếc điện thoại.',
          conceptIds: ['periodic-table', 'element'],
        },
        {
          id: 'u1-l4-e6',
          type: 'true-false',
          prompt: 'Phần lớn các nguyên tố trong bảng tuần hoàn là kim loại.',
          answer: true,
          explanation: 'Đúng. Hơn ba phần tư số nguyên tố là kim loại.',
          conceptIds: ['periodic-table', 'metal'],
        },
        {
          id: 'u1-l4-e7',
          type: 'fill-blank',
          prompt: 'Điền vào chỗ trống',
          template: 'Carbon ở ô số 6, nitrogen ở ô số 7. Ô kế tiếp, số ___, là của oxygen.',
          blanks: [{ accepted: ['8', 'tám'], wordBank: ['5', '8', '9'] }],
          explanation:
            'Các ô được đánh số liên tiếp. Carbon 6, nitrogen 7, oxygen 8 là ba hàng xóm đứng cạnh nhau.',
          conceptIds: ['periodic-table', 'atomic-number'],
        },
        {
          id: 'u1-l4-e8',
          type: 'mcq',
          prompt: 'Nguyên tố này ở ô số 2, là một khí rất nhẹ dùng để bơm bóng bay. Tên nó là gì?',
          visual: { id: 'v', moleculeId: 'he' },
          options: [
            { id: 'a', text: 'Helium' },
            { id: 'b', text: 'Hydrogen' },
            { id: 'c', text: 'Neon' },
          ],
          correctOptionId: 'a',
          explanation:
            'He là helium, ô số 2. Helium nhẹ hơn không khí và không cháy, nên an toàn để bơm bóng bay.',
          conceptIds: ['periodic-table', 'chemical-symbol'],
        },
        {
          id: 'u1-l4-e9',
          type: 'true-false',
          prompt: 'Có kim loại ở dạng lỏng ngay ở nhiệt độ phòng.',
          answer: true,
          explanation:
            'Đúng. Mercury (thuỷ ngân, Hg) là kim loại lỏng, từng được dùng trong nhiệt kế. Nó độc, nên nếu nhiệt kế vỡ thì đừng chạm tay vào.',
          conceptIds: ['metal'],
        },
        {
          id: 'u1-l4-e10',
          type: 'mcq',
          prompt: 'Nguyên tố nào sau đây là phi kim?',
          options: [
            { id: 'a', text: 'Sodium (natri, Na)' },
            { id: 'b', text: 'Zinc (kẽm, Zn)' },
            { id: 'c', text: 'Calcium (Ca)' },
            { id: 'd', text: 'Sulfur (lưu huỳnh, S)' },
          ],
          correctOptionId: 'd',
          explanation:
            'Sulfur (lưu huỳnh) là phi kim màu vàng. Bất ngờ chưa: sodium trong muối ăn và calcium trong xương đều là kim loại.',
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
          'Nguyên tử nhỏ xíu, nhưng bên trong nó còn có những hạt nhỏ hơn nữa.',
          'Ở giữa là hạt nhân, gồm proton mang điện dương và neutron không mang điện. Chuyển động quanh hạt nhân là các electron mang điện âm, nhẹ hơn rất nhiều.',
          'Số proton quyết định nguyên tử thuộc nguyên tố nào. Helium trong bóng bay luôn có đúng 2 proton, vì thế nó nằm ở ô số 2 của bảng tuần hoàn.',
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
            'Proton (dương) và neutron (không mang điện) nằm chặt trong hạt nhân. Electron (âm) chuyển động ở vùng xung quanh.',
          conceptIds: ['subatomic-particles'],
        },
        {
          id: 'u1-l5-e2',
          type: 'mcq',
          prompt: 'Hạt nào chuyển động quanh hạt nhân?',
          options: [
            { id: 'a', text: 'Proton' },
            { id: 'b', text: 'Neutron' },
            { id: 'c', text: 'Electron' },
          ],
          correctOptionId: 'c',
          explanation:
            'Electron rất nhẹ và mang điện âm, bị hạt nhân mang điện dương hút nên luôn ở quanh hạt nhân.',
          conceptIds: ['subatomic-particles'],
        },
        {
          id: 'u1-l5-e3',
          type: 'fill-blank',
          prompt: 'Điền vào chỗ trống',
          template:
            'Số ô của một nguyên tố trong bảng tuần hoàn bằng số ___ trong nguyên tử của nó.',
          blanks: [{ accepted: ['proton'], wordBank: ['neutron', 'proton', 'hạt nhân'] }],
          explanation:
            'Số ô, hay số hiệu nguyên tử, chính là số proton. Hydrogen có 1 proton nên ở ô số 1.',
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
          explanation: 'Số hiệu nguyên tử chính là số proton. Carbon ở ô số 6 nên có 6 proton.',
          conceptIds: ['atomic-number'],
        },
        {
          id: 'u1-l5-e5',
          type: 'true-false',
          prompt: 'Một nguyên tử có 8 proton thì chắc chắn là oxygen.',
          answer: true,
          explanation:
            'Đúng. Oxygen ở ô số 8. Nguyên tử nào có 8 proton cũng là oxygen, và chỉ oxygen mới có 8 proton.',
          conceptIds: ['atomic-number', 'element'],
        },
        {
          id: 'u1-l5-e6',
          type: 'sort',
          prompt: 'Thay đổi nào biến nguyên tử thành một nguyên tố khác?',
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
            'Chỉ số proton mới quyết định tên nguyên tố. Thêm bớt electron hay neutron thì nguyên tử vẫn thuộc nguyên tố cũ.',
          conceptIds: ['atomic-number', 'subatomic-particles'],
        },
        {
          id: 'u1-l5-e7',
          type: 'mcq',
          prompt: 'Nguyên tử helium có 2 proton. Để trung hoà về điện, nó có mấy electron?',
          visual: { id: 'v', moleculeId: 'he' },
          options: [
            { id: 'a', text: '1' },
            { id: 'b', text: '2' },
            { id: 'c', text: '4' },
          ],
          correctOptionId: 'b',
          explanation:
            'Mỗi proton mang một điện tích dương, mỗi electron mang một điện tích âm. Nguyên tử có số electron bằng số proton nên trung hoà về điện.',
          conceptIds: ['subatomic-particles'],
        },
        {
          id: 'u1-l5-e8',
          type: 'order-steps',
          prompt: 'Sắp xếp từ nhỏ đến lớn',
          steps: [
            { id: 's1', text: 'Electron' },
            { id: 's2', text: 'Hạt nhân' },
            { id: 's3', text: 'Nguyên tử' },
            { id: 's4', text: 'Hạt cát' },
          ],
          explanation:
            'Hạt nhân nhỏ hơn nguyên tử hàng chục nghìn lần. Nếu nguyên tử to bằng sân vận động Mỹ Đình thì hạt nhân chỉ như một hạt đậu đặt giữa sân.',
          conceptIds: ['subatomic-particles', 'atom'],
        },
        {
          id: 'u1-l5-e9',
          type: 'true-false',
          prompt: 'Nguyên tử gold (vàng) và nguyên tử iron (sắt) có cùng số proton.',
          answer: false,
          explanation:
            'Iron (sắt) có 26 proton, gold (vàng) có 79 proton. Khác số proton nghĩa là khác nguyên tố.',
          conceptIds: ['atomic-number', 'element'],
        },
        {
          id: 'u1-l5-e10',
          type: 'mcq',
          prompt: 'Nguyên tử sodium có 11 proton. Sodium nằm ở ô số mấy trong bảng tuần hoàn?',
          options: [
            { id: 'a', text: 'Ô số 1' },
            { id: 'b', text: 'Ô số 23' },
            { id: 'c', text: 'Ô số 11' },
          ],
          correctOptionId: 'c',
          explanation: 'Số ô bằng số proton. Sodium có 11 proton nên nằm ở ô số 11.',
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
            'Một chiếc nhẫn vàng ta gần như chỉ gồm một loại nguyên tử. Mỗi loại nguyên tử được gọi là gì?',
          options: [
            { id: 'a', text: 'Một nguyên tố' },
            { id: 'b', text: 'Một hạt nhân' },
            { id: 'c', text: 'Một electron' },
          ],
          correctOptionId: 'a',
          explanation:
            'Mỗi loại nguyên tử là một nguyên tố. Gold (vàng) là một trong khoảng 118 nguyên tố đã biết.',
          conceptIds: ['element', 'atom'],
        },
        {
          id: 'u1-cp-e2',
          type: 'match-pairs',
          prompt: 'Nối ký hiệu với tên nguyên tố',
          pairs: [
            { left: { id: 'l1', text: 'Na' }, right: { id: 'r1', text: 'Sodium (natri)' } },
            { left: { id: 'l2', text: 'Cu' }, right: { id: 'r2', text: 'Copper (đồng)' } },
            { left: { id: 'l3', text: 'Ag' }, right: { id: 'r3', text: 'Silver (bạc)' } },
            { left: { id: 'l4', text: 'K' }, right: { id: 'r4', text: 'Potassium (kali)' } },
            { left: { id: 'l5', text: 'C' }, right: { id: 'r5', text: 'Carbon' } },
          ],
          explanation:
            'Na, Cu, Ag, K đến từ tên Latinh: natrium, cuprum, argentum, kalium. C là chữ đầu của "carbon".',
          conceptIds: ['chemical-symbol'],
        },
        {
          id: 'u1-cp-e3',
          type: 'mcq',
          prompt: 'Hình nào là nguyên tử iron (sắt)?',
          options: [
            { id: 'a', moleculeId: 'cu' },
            { id: 'b', moleculeId: 'fe' },
            { id: 'c', moleculeId: 'au' },
            { id: 'd', moleculeId: 'he' },
          ],
          correctOptionId: 'b',
          explanation:
            'Fe là iron (sắt), từ "ferrum". Cu là copper (đồng), Au là gold (vàng), He là helium.',
          conceptIds: ['chemical-symbol'],
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
          prompt: 'Kim loại hay phi kim?',
          groups: [
            { id: 'metal', label: 'Kim loại' },
            { id: 'nonmetal', label: 'Phi kim' },
          ],
          items: [
            { id: 'i1', text: 'Aluminium (nhôm, Al)', groupId: 'metal' },
            { id: 'i2', text: 'Oxygen (O)', groupId: 'nonmetal' },
            { id: 'i3', text: 'Silver (bạc, Ag)', groupId: 'metal' },
            { id: 'i4', text: 'Carbon (C)', groupId: 'nonmetal' },
            { id: 'i5', text: 'Sodium (natri, Na)', groupId: 'metal' },
            { id: 'i6', text: 'Sulfur (lưu huỳnh, S)', groupId: 'nonmetal' },
          ],
          explanation:
            'Aluminium (nhôm), silver (bạc), sodium là kim loại. Oxygen, carbon, sulfur (lưu huỳnh) là phi kim, nằm ở góc trên bên phải bảng tuần hoàn.',
          conceptIds: ['metal', 'nonmetal'],
        },
        {
          id: 'u1-cp-e7',
          type: 'mcq',
          prompt: 'Nitrogen nằm ở ô số 7. Một nguyên tử nitrogen có bao nhiêu proton?',
          options: [
            { id: 'a', text: '3' },
            { id: 'b', text: '14' },
            { id: 'c', text: '7' },
          ],
          correctOptionId: 'c',
          explanation:
            'Số ô trong bảng tuần hoàn bằng số proton. Nitrogen ở ô số 7 nên có 7 proton.',
          conceptIds: ['atomic-number'],
        },
        {
          id: 'u1-cp-e8',
          type: 'order-steps',
          prompt: 'Sắp xếp theo số proton, từ ít đến nhiều',
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
          prompt: 'Hình này có mấy nguyên tử và mấy nguyên tố?',
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
          prompt: 'Ký hiệu hoá học của silver (bạc) là Ba.',
          answer: false,
          explanation:
            'Silver (bạc) là Ag, từ tên Latinh "argentum". Ba là ký hiệu của barium, một nguyên tố khác.',
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
            'Số proton quyết định tên nguyên tố: 1 proton là hydrogen, 6 proton là carbon, 79 proton là gold (vàng).',
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
            'Fe là iron (sắt), Cu là copper (đồng), He là helium, C là carbon, Au là gold (vàng). Biết ký hiệu là bạn đọc được thành phần của rất nhiều thứ quanh mình.',
          conceptIds: ['chemical-symbol', 'element'],
        },
      ],
      baseXp: 20,
    },
  ],
}
