import type { UnitInput } from '../../schema/lesson.js'

/**
 * Unit 3: Rắn, lỏng, khí
 * 5 bài học + checkpoint: ba trạng thái, sự chuyển thể, hoà tan và dung dịch,
 * chuyển động của hạt, biến đổi vật lí và biến đổi hoá học.
 */
export const unit03: UnitInput = {
  id: 'u3-states',
  order: 3,
  title: 'Rắn, lỏng, khí',
  tagline: 'Trạng thái của chất, sự hoà tan và hai kiểu biến đổi',
  color: '#FF9600',
  lessons: [
    // ───────────────────────── Bài 1: Ba trạng thái ─────────────────────────
    {
      id: 'u3-l1-three-states',
      title: 'Một chất, ba dáng vẻ',
      intro: {
        title: 'Đá, nước và hơi nước',
        story: [
          'Viên đá trong cốc trà đá, nước trong ly và hơi nước thoát ra từ vòi ấm đang sôi: ba thứ khác hẳn nhau, nhưng đều là nước.',
          'Đó là ba trạng thái của chất: rắn, lỏng và khí. Phân tử H₂O vẫn y nguyên, chỉ cách chúng xếp và chuyển động là khác.',
          'Trong nước đá, các phân tử xếp ngay hàng thẳng lối và chỉ rung tại chỗ. Trong nước lỏng, chúng vẫn ở sát nhau nhưng trượt qua nhau được. Trong hơi nước, chúng ở rất xa nhau và bay tự do.',
        ],
        visual: {
          type: 'states',
          moleculeId: 'h2o',
          scenes: { solid: 'ice-cubes', liquid: 'glass-of-water', gas: 'boiling-kettle' },
        },
      },
      exercises: [
        {
          id: 'u3-l1-e1',
          type: 'mcq',
          prompt: 'Viên đá trong cốc trà đá là nước ở trạng thái nào?',
          visual: { id: 'v', image: 'ice-cubes' },
          options: [
            { id: 'a', text: 'Rắn' },
            { id: 'b', text: 'Lỏng' },
            { id: 'c', text: 'Khí' },
          ],
          correctOptionId: 'a',
          explanation:
            'Nước đá là nước ở thể rắn: có hình dạng riêng và không tự chảy. Chất tạo nên nó vẫn là H₂O.',
          conceptIds: ['state-of-matter'],
        },
        {
          id: 'u3-l1-e2',
          type: 'match-pairs',
          prompt: 'Cùng là nước. Nối mỗi hình với trạng thái của nước trong đó',
          pairs: [
            {
              left: { id: 'l1', text: 'Viên đá', image: 'ice-cubes' },
              right: { id: 'r1', text: 'Trạng thái rắn' },
            },
            {
              left: { id: 'l2', text: 'Nước trong ly', image: 'glass-of-water' },
              right: { id: 'r2', text: 'Trạng thái lỏng' },
            },
            {
              left: { id: 'l3', text: 'Hơi nước trong vòi ấm đang sôi', image: 'boiling-kettle' },
              right: { id: 'r3', text: 'Trạng thái khí' },
            },
          ],
          explanation:
            'Viên đá ở thể rắn, nước trong ly ở thể lỏng, còn hơi nước thoát ra từ ấm đang sôi ở thể khí. Cả ba đều gồm các phân tử H₂O.',
          conceptIds: ['state-of-matter'],
        },
        {
          id: 'u3-l1-e3',
          type: 'mcq',
          prompt: 'Trong nước đá, các phân tử nước như thế nào?',
          options: [
            { id: 'a', text: 'Ở rất xa nhau và bay tự do' },
            { id: 'b', text: 'Xếp theo hàng lối và chỉ rung tại chỗ' },
            { id: 'c', text: 'Trượt qua nhau liên tục' },
          ],
          correctOptionId: 'b',
          explanation:
            'Ở thể rắn, các hạt bị giữ chặt tại chỗ theo một trật tự nhất định. Vì thế viên đá cứng và giữ được hình dạng.',
          conceptIds: ['particle-model', 'state-of-matter'],
        },
        {
          id: 'u3-l1-e4',
          type: 'true-false',
          prompt:
            'Khi nước đá tan thành nước lỏng, các phân tử H₂O biến thành một loại phân tử khác.',
          visual: { id: 'v', moleculeId: 'h2o' },
          answer: false,
          explanation:
            'Phân tử vẫn là H₂O. Chỉ cách các phân tử xếp và chuyển động thay đổi: từ ngay hàng thẳng lối sang trượt qua nhau.',
          conceptIds: ['state-of-matter', 'particle-model'],
        },
        {
          id: 'u3-l1-e5',
          type: 'sort',
          prompt: 'Mỗi mô tả ứng với trạng thái nào?',
          groups: [
            { id: 'solid', label: 'Rắn' },
            { id: 'liquid', label: 'Lỏng' },
            { id: 'gas', label: 'Khí' },
          ],
          items: [
            { id: 'i1', text: 'Có hình dạng riêng, không tự chảy', groupId: 'solid' },
            { id: 'i2', text: 'Chảy được, mang hình dạng của vật chứa', groupId: 'liquid' },
            { id: 'i3', text: 'Lan ra chiếm hết khoảng trống của vật chứa', groupId: 'gas' },
            { id: 'i4', text: 'Các hạt ở rất xa nhau', groupId: 'gas' },
            { id: 'i5', text: 'Các hạt ở sát nhau nhưng trượt qua nhau được', groupId: 'liquid' },
            { id: 'i6', text: 'Các hạt xếp theo hàng lối cố định', groupId: 'solid' },
          ],
          explanation:
            'Chất rắn giữ nguyên hình dạng vì các hạt bị giữ tại chỗ. Chất lỏng chảy được vì các hạt trượt qua nhau. Chất khí lan khắp nơi vì các hạt ở xa nhau và bay tự do.',
          conceptIds: ['state-of-matter', 'particle-model'],
        },
        {
          id: 'u3-l1-e6',
          type: 'mcq',
          prompt: 'Một lon nước ngọt có ga vừa mở có đủ ba trạng thái. Thứ nào ở trạng thái rắn?',
          visual: { id: 'v', image: 'soda-can' },
          options: [
            { id: 'a', moleculeId: 'co2', text: 'Bọt khí carbon dioxide' },
            { id: 'b', moleculeId: 'h2o', text: 'Nước trong lon' },
            { id: 'c', moleculeId: 'al', text: 'Vỏ lon bằng nhôm' },
          ],
          correctOptionId: 'c',
          explanation:
            'Vỏ lon làm bằng aluminium (nhôm), một kim loại ở thể rắn. Nước trong lon ở thể lỏng, còn bọt carbon dioxide ở thể khí.',
          conceptIds: ['state-of-matter'],
        },
        {
          id: 'u3-l1-e7',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng',
          template:
            'Bơm helium vào quả bóng bay, helium lan ra khắp quả bóng. Chất ở thể ___ luôn chiếm hết khoảng trống của vật chứa nó.',
          blanks: [{ accepted: ['khí'], wordBank: ['rắn', 'lỏng', 'khí'] }],
          explanation:
            'Các hạt của chất khí ở xa nhau và bay tự do theo mọi hướng, nên chất khí không có hình dạng hay thể tích riêng.',
          conceptIds: ['state-of-matter', 'particle-model'],
        },
        {
          id: 'u3-l1-e8',
          type: 'true-false',
          prompt: 'Trong vỏ lon nhôm, các nguyên tử aluminium đứng yên hoàn toàn.',
          visual: { id: 'v', moleculeId: 'al' },
          answer: false,
          explanation:
            'Ở thể rắn, các hạt không rời khỏi chỗ của mình nhưng vẫn rung nhẹ không ngừng. Không có hạt nào đứng yên hoàn toàn.',
          conceptIds: ['particle-model'],
        },
        {
          id: 'u3-l1-e9',
          type: 'order-steps',
          prompt:
            'Sắp xếp theo mức độ tự do của các phân tử nước, từ bị giữ chặt nhất đến tự do nhất',
          steps: [
            { id: 's1', text: 'Nước đá', image: 'ice-cubes' },
            { id: 's2', text: 'Nước lỏng', image: 'glass-of-water' },
            { id: 's3', text: 'Hơi nước', image: 'boiling-kettle' },
          ],
          explanation:
            'Trong nước đá, phân tử chỉ rung tại chỗ. Trong nước lỏng, chúng trượt qua nhau. Trong hơi nước, chúng bay tự do khắp nơi.',
          conceptIds: ['particle-model', 'state-of-matter'],
        },
        {
          id: 'u3-l1-e10',
          type: 'mcq',
          prompt: 'Vì sao nước lỏng rót được từ ấm vào cốc, còn viên đá thì không?',
          options: [
            { id: 'a', text: 'Vì trong nước lỏng, các phân tử trượt qua nhau được' },
            { id: 'b', text: 'Vì phân tử nước lỏng nhỏ hơn phân tử nước đá' },
            { id: 'c', text: 'Vì nước lỏng có ít phân tử hơn nước đá' },
          ],
          correctOptionId: 'a',
          explanation:
            'Phân tử nước ở thể nào cũng to như nhau. Nước lỏng chảy được vì các phân tử không bị giữ tại chỗ mà trượt qua nhau.',
          conceptIds: ['particle-model', 'state-of-matter'],
        },
      ],
      unlocksMolecules: ['al'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 2: Sự chuyển thể ─────────────────────────
    {
      id: 'u3-l2-changing-state',
      title: 'Tan chảy, bay hơi, đọng lại',
      intro: {
        title: 'Quần áo ướt rồi lại khô',
        story: [
          'Phơi quần áo ướt ngoài sân, vài giờ sau là khô. Nước không biến mất: từng phân tử nước rời khỏi vải và bay vào không khí. Đó là sự bay hơi.',
          'Chất có thể đổi trạng thái. Nóng lên, nước đá nóng chảy thành nước, nước bay hơi thành hơi nước. Lạnh đi thì ngược lại: hơi nước ngưng tụ thành giọt, nước đông đặc thành đá.',
          'Đổi qua đổi lại bao nhiêu lần, nó vẫn là nước. Phân tử H₂O không hề thay đổi.',
        ],
        visual: { type: 'molecule', moleculeId: 'h2o', scene: 'wet-clothes' },
      },
      exercises: [
        {
          id: 'u3-l2-e1',
          type: 'match-pairs',
          prompt: 'Nối mỗi sự chuyển thể với tên của nó',
          pairs: [
            { left: { id: 'l1', text: 'Rắn thành lỏng' }, right: { id: 'r1', text: 'Nóng chảy' } },
            { left: { id: 'l2', text: 'Lỏng thành rắn' }, right: { id: 'r2', text: 'Đông đặc' } },
            { left: { id: 'l3', text: 'Lỏng thành khí' }, right: { id: 'r3', text: 'Bay hơi' } },
            { left: { id: 'l4', text: 'Khí thành lỏng' }, right: { id: 'r4', text: 'Ngưng tụ' } },
          ],
          explanation:
            'Nóng chảy và đông đặc là hai chiều ngược nhau giữa rắn và lỏng. Bay hơi và ngưng tụ là hai chiều ngược nhau giữa lỏng và khí.',
          conceptIds: ['state-change'],
        },
        {
          id: 'u3-l2-e2',
          type: 'mcq',
          prompt: 'Bên ngoài ly nước đá đọng đầy giọt nước. Những giọt nước đó từ đâu ra?',
          visual: { id: 'v', image: 'glass-of-water' },
          options: [
            { id: 'a', text: 'Nước trong ly thấm qua thành ly' },
            { id: 'b', text: 'Hơi nước trong không khí gặp thành ly lạnh nên ngưng tụ lại' },
            { id: 'c', text: 'Đá trong ly bay hơi rồi bám ra ngoài' },
          ],
          correctOptionId: 'b',
          explanation:
            'Không khí quanh bạn luôn có hơi nước. Gặp thành ly lạnh, các phân tử nước chậm lại, tụ vào nhau thành giọt. Đó là sự ngưng tụ.',
          conceptIds: ['state-change'],
        },
        {
          id: 'u3-l2-e3',
          type: 'true-false',
          prompt: 'Làn khói trắng phía trên vòi ấm đang sôi chính là hơi nước.',
          visual: { id: 'v', image: 'boiling-kettle' },
          answer: false,
          explanation:
            'Hơi nước là chất khí không màu, mắt không nhìn thấy được. Làn trắng bạn thấy là hơi nước gặp không khí mát hơn và ngưng tụ thành những giọt nước li ti.',
          conceptIds: ['state-change', 'state-of-matter'],
        },
        {
          id: 'u3-l2-e4',
          type: 'build-molecule',
          prompt: 'Hơi nước thoát ra từ ấm đang sôi gồm những phân tử nào? Hãy ghép một phân tử',
          targetMoleculeId: 'h2o',
          availableAtoms: { H: 4, O: 3, C: 1 },
          explanation:
            'Hơi nước vẫn là H₂O: 2 nguyên tử hydrogen và 1 nguyên tử oxygen. Sôi không tách phân tử nước thành khí hydrogen và khí oxygen.',
          conceptIds: ['state-change', 'molecule'],
        },
        {
          id: 'u3-l2-e5',
          type: 'sort',
          prompt: 'Để chuyển thể, nước cần nhận thêm nhiệt hay mất bớt nhiệt?',
          groups: [
            { id: 'gain', label: 'Nhận thêm nhiệt' },
            { id: 'lose', label: 'Mất bớt nhiệt' },
          ],
          items: [
            { id: 'i1', text: 'Viên đá tan chảy', image: 'ice-cubes', groupId: 'gain' },
            { id: 'i2', text: 'Nước sôi trong ấm', image: 'boiling-kettle', groupId: 'gain' },
            { id: 'i3', text: 'Hơi nước đọng thành giọt ngoài ly lạnh', groupId: 'lose' },
            { id: 'i4', text: 'Nước trong khay đông thành đá', groupId: 'lose' },
            { id: 'i5', text: 'Quần áo ướt khô dần', image: 'wet-clothes', groupId: 'gain' },
          ],
          explanation:
            'Nóng chảy và bay hơi cần nhận thêm nhiệt để các phân tử chuyển động mạnh hơn và rời xa nhau. Ngưng tụ và đông đặc xảy ra khi chất mất bớt nhiệt.',
          conceptIds: ['state-change'],
        },
        {
          id: 'u3-l2-e6',
          type: 'mcq',
          prompt: 'Bay hơi và sôi khác nhau ở điểm nào?',
          options: [
            { id: 'a', text: 'Bay hơi tạo ra chất mới, còn sôi thì không' },
            { id: 'b', text: 'Bay hơi chỉ xảy ra ở 100 °C, còn sôi thì ở nhiệt độ nào cũng được' },
            { id: 'c', text: 'Bay hơi xảy ra ở mọi nhiệt độ, còn nước chỉ sôi ở khoảng 100 °C' },
          ],
          correctOptionId: 'c',
          explanation:
            'Quần áo vẫn khô ở nhiệt độ thường vì nước bay hơi từ từ trên bề mặt. Khi sôi, nước hoá hơi ngay cả trong lòng chất lỏng, tạo thành các bọt hơi nổi lên.',
          conceptIds: ['state-change'],
        },
        {
          id: 'u3-l2-e7',
          type: 'fill-blank',
          prompt: 'Chọn số đúng',
          template:
            'Nước đá nóng chảy ở ___ °C. Nước lỏng cũng đông đặc thành đá ở đúng nhiệt độ đó.',
          blanks: [{ accepted: ['0'], wordBank: ['0', '37', '100'] }],
          explanation:
            'Ở 0 °C nước đá bắt đầu tan, và cũng ở 0 °C nước bắt đầu đông. Còn 100 °C là nhiệt độ sôi của nước ở điều kiện thường.',
          conceptIds: ['state-change'],
        },
        {
          id: 'u3-l2-e8',
          type: 'true-false',
          prompt:
            'Lon nhôm cũ được nấu chảy ở khoảng 660 °C để đúc thành lon mới. Nhôm lỏng lúc đó vẫn là aluminium.',
          visual: { id: 'v', moleculeId: 'al' },
          answer: true,
          explanation:
            'Nóng chảy chỉ làm các nguyên tử aluminium rời khỏi hàng lối và trượt qua nhau. Không có chất mới sinh ra, nên khi nguội nó lại là nhôm rắn.',
          conceptIds: ['state-change', 'state-of-matter'],
        },
        {
          id: 'u3-l2-e9',
          type: 'order-steps',
          prompt:
            'Bỏ vài viên đá vào nồi, đậy nắp rồi bật bếp. Sắp xếp các việc xảy ra theo thứ tự',
          steps: [
            { id: 's1', text: 'Đá nóng chảy thành nước lỏng' },
            { id: 's2', text: 'Nước nóng dần lên' },
            { id: 's3', text: 'Nước sôi, hoá thành hơi nước' },
            { id: 's4', text: 'Hơi nước gặp nắp nồi mát hơn và ngưng tụ thành giọt' },
          ],
          explanation:
            'Rắn thành lỏng, lỏng thành khí, rồi khí lại thành lỏng trên nắp nồi. Suốt hành trình ấy, chất vẫn là nước.',
          conceptIds: ['state-change'],
        },
        {
          id: 'u3-l2-e10',
          type: 'mcq',
          prompt: 'Xoa nước rửa tay khô, vài giây sau tay đã khô và thấy mát. Vì sao?',
          visual: { id: 'v', image: 'hand-sanitizer' },
          options: [
            { id: 'a', text: 'Ethanol bay hơi rất nhanh và lấy nhiệt từ da tay' },
            { id: 'b', text: 'Ethanol biến thành nước' },
            { id: 'c', text: 'Ethanol đông đặc lại trên da' },
          ],
          correctOptionId: 'a',
          explanation:
            'Ethanol bay hơi nhanh hơn nước nhiều. Chất lỏng muốn bay hơi phải lấy nhiệt từ xung quanh, nên da tay bạn thấy mát.',
          conceptIds: ['state-change'],
        },
      ],
      unlocksMolecules: [],
      baseXp: 10,
    },

    // ───────────────────────── Bài 3: Hoà tan ─────────────────────────
    {
      id: 'u3-l3-dissolving',
      title: 'Tan mà không mất',
      intro: {
        title: 'Đường đi đâu mất rồi?',
        story: [
          'Thả một thìa đường vào cốc trà rồi khuấy lên. Hạt đường biến mất, nhưng trà lại ngọt. Vậy là đường vẫn còn đó.',
          'Các phân tử nước đã kéo từng phân tử đường rời khỏi hạt đường rồi chen vào giữa chúng. Đường tách thành những hạt quá nhỏ nên mắt không thấy nữa. Đó là sự hoà tan.',
          'Chất bị hoà tan (đường) gọi là chất tan. Chất hoà tan chất khác (nước) gọi là dung môi. Hỗn hợp đồng đều thu được gọi là dung dịch.',
        ],
        visual: { type: 'molecule', moleculeId: 'h2o', scene: 'sugar-tea' },
      },
      exercises: [
        {
          id: 'u3-l3-e1',
          type: 'mcq',
          prompt: 'Khuấy đường vào nước cho tan hết. Trong cốc nước đường, chất nào là dung môi?',
          visual: { id: 'v', image: 'sugar-tea' },
          options: [
            { id: 'a', text: 'Đường' },
            { id: 'b', text: 'Nước' },
            { id: 'c', text: 'Cả đường và nước' },
          ],
          correctOptionId: 'b',
          explanation:
            'Nước hoà tan đường nên nước là dung môi. Đường bị hoà tan nên đường là chất tan.',
          conceptIds: ['solution'],
        },
        {
          id: 'u3-l3-e2',
          type: 'match-pairs',
          prompt: 'Pha một cốc nước muối. Nối mỗi thứ với vai trò của nó',
          pairs: [
            {
              left: { id: 'l1', moleculeId: 'nacl', text: 'Muối ăn' },
              right: { id: 'r1', text: 'Chất tan' },
            },
            {
              left: { id: 'l2', moleculeId: 'h2o', text: 'Nước' },
              right: { id: 'r2', text: 'Dung môi' },
            },
            { left: { id: 'l3', text: 'Nước muối' }, right: { id: 'r3', text: 'Dung dịch' } },
          ],
          explanation:
            'Muối bị hoà tan nên là chất tan. Nước hoà tan muối nên là dung môi. Hỗn hợp đồng đều của cả hai là dung dịch.',
          conceptIds: ['solution'],
        },
        {
          id: 'u3-l3-e3',
          type: 'true-false',
          prompt: 'Đường tan trong trà nghĩa là đường đã biến mất.',
          visual: { id: 'v', image: 'sugar-tea' },
          answer: false,
          explanation:
            'Đường vẫn còn nguyên, chỉ tách thành từng phân tử lẫn vào giữa các phân tử nước. Bằng chứng: trà có vị ngọt, và cốc trà nặng thêm đúng bằng lượng đường bạn cho vào.',
          conceptIds: ['solution'],
        },
        {
          id: 'u3-l3-e4',
          type: 'mcq',
          prompt: 'Làm sao lấy lại muối từ một bát nước muối?',
          visual: { id: 'v', image: 'salt-shaker' },
          options: [
            { id: 'a', text: 'Lọc qua giấy lọc' },
            { id: 'b', text: 'Khuấy thật mạnh' },
            { id: 'c', text: 'Đun hoặc phơi cho nước bay hơi hết' },
          ],
          correctOptionId: 'c',
          explanation:
            'Nước bay hơi đi, muối ở lại. Người làm muối cũng phơi nước biển theo cách này. Lọc không giữ được muối vì các hạt muối đã tan quá nhỏ, chui lọt qua giấy lọc.',
          conceptIds: ['solution', 'mixture'],
        },
        {
          id: 'u3-l3-e5',
          type: 'sort',
          prompt: 'Thả vào nước rồi khuấy đều. Thứ nào tan, thứ nào không?',
          groups: [
            { id: 'soluble', label: 'Tan trong nước' },
            { id: 'insoluble', label: 'Không tan trong nước' },
          ],
          items: [
            { id: 'i1', text: 'Đường', image: 'sugar-tea', groupId: 'soluble' },
            { id: 'i2', text: 'Cát', groupId: 'insoluble' },
            { id: 'i3', text: 'Muối ăn', image: 'salt-shaker', groupId: 'soluble' },
            { id: 'i4', text: 'Dầu ăn', groupId: 'insoluble' },
            { id: 'i5', text: 'Cây đinh sắt', image: 'iron-nail', groupId: 'insoluble' },
            { id: 'i6', text: 'Cồn (ethanol)', image: 'hand-sanitizer', groupId: 'soluble' },
          ],
          explanation:
            'Đường, muối và ethanol tan trong nước, tạo thành dung dịch. Cát và đinh sắt chìm xuống đáy, dầu ăn nổi lên trên: chúng không tan trong nước.',
          conceptIds: ['solution'],
        },
        {
          id: 'u3-l3-e6',
          type: 'mcq',
          prompt:
            'Giấm ăn là dung dịch: một lượng nhỏ acetic acid hoà tan trong nước. Trong giấm, acetic acid là gì?',
          visual: { id: 'v', image: 'vinegar-bottle' },
          options: [
            { id: 'a', text: 'Chất tan' },
            { id: 'b', text: 'Dung môi' },
            { id: 'c', text: 'Dung dịch' },
          ],
          correctOptionId: 'a',
          explanation:
            'Nước chiếm phần lớn và hoà tan acetic acid, nên nước là dung môi còn acetic acid là chất tan. Chính acetic acid làm giấm có vị chua.',
          conceptIds: ['solution'],
        },
        {
          id: 'u3-l3-e7',
          type: 'build-molecule',
          prompt: 'Ghép phân tử acetic acid CH₃COOH, chất tạo vị chua của giấm',
          targetMoleculeId: 'c2h4o2',
          availableAtoms: { C: 3, H: 6, O: 3, N: 1 },
          explanation:
            'Đếm từng nhóm trong CH₃COOH: 2 nguyên tử carbon, 3 + 1 = 4 nguyên tử hydrogen và 2 nguyên tử oxygen. Vì thế công thức còn được viết gộp là C₂H₄O₂.',
          conceptIds: ['formula', 'molecule'],
        },
        {
          id: 'u3-l3-e8',
          type: 'fill-blank',
          prompt: 'Điền vào chỗ trống',
          template: 'Hỗn hợp đồng đều của chất tan và dung môi gọi là ___.',
          blanks: [{ accepted: ['dung dịch'], wordBank: ['dung dịch', 'hợp chất', 'đơn chất'] }],
          explanation:
            'Nước đường, nước muối, giấm đều là dung dịch. Chất tan và dung môi chỉ trộn lẫn với nhau chứ không liên kết thành hợp chất mới.',
          conceptIds: ['solution', 'mixture'],
        },
        {
          id: 'u3-l3-e9',
          type: 'true-false',
          prompt: 'Cứ khuấy đủ lâu thì một cốc nước hoà tan được bao nhiêu đường cũng hết.',
          answer: false,
          explanation:
            'Mỗi lượng nước chỉ hoà tan được một lượng đường nhất định. Quá mức đó, đường thừa lắng xuống đáy cốc dù bạn khuấy bao lâu. Khi ấy ta nói dung dịch đã bão hoà.',
          conceptIds: ['solution'],
        },
        {
          id: 'u3-l3-e10',
          type: 'order-steps',
          prompt: 'Chuyện gì xảy ra khi viên đường tan trong nước? Sắp xếp theo thứ tự',
          steps: [
            { id: 's1', text: 'Viên đường rơi vào nước' },
            { id: 's2', text: 'Các phân tử nước bám quanh những phân tử đường ở mặt ngoài' },
            { id: 's3', text: 'Từng phân tử đường bị kéo rời khỏi viên đường' },
            { id: 's4', text: 'Các phân tử đường lẫn đều vào giữa các phân tử nước' },
          ],
          explanation:
            'Viên đường tan dần từ ngoài vào trong. Cuối cùng không còn hạt đường nào đủ to để nhìn thấy, nhưng mọi phân tử đường vẫn còn nguyên.',
          conceptIds: ['solution', 'particle-motion'],
        },
      ],
      unlocksMolecules: ['c2h4o2'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 4: Hạt luôn chuyển động ─────────────────────────
    {
      id: 'u3-l4-moving-particles',
      title: 'Hạt không bao giờ đứng yên',
      intro: {
        title: 'Mùi nước hoa đi khắp phòng',
        story: [
          'Ai đó xịt nước hoa ở góc phòng. Một lát sau, bạn ngồi tận góc kia cũng ngửi thấy, dù không có ngọn gió nào.',
          'Nước hoa là các chất thơm hoà tan trong ethanol. Khi xịt ra, chúng bay hơi. Các phân tử bay hỗn loạn, va vào phân tử không khí, đổi hướng liên tục và dần lan ra khắp phòng. Hiện tượng này gọi là khuếch tán.',
          'Các hạt không bao giờ đứng yên. Càng nóng, chúng chuyển động càng nhanh. Vì thế mùi bát canh nóng lan xa hơn nhiều so với lúc canh đã nguội.',
        ],
        visual: { type: 'molecule', moleculeId: 'c2h6o', scene: 'perfume' },
      },
      exercises: [
        {
          id: 'u3-l4-e1',
          type: 'mcq',
          prompt: 'Xịt nước hoa ở một góc phòng kín gió. Vì sao lát sau cả phòng đều ngửi thấy?',
          visual: { id: 'v', image: 'perfume' },
          options: [
            { id: 'a', text: 'Vì nước hoa biến thành không khí' },
            { id: 'b', text: 'Vì mũi bạn hút các phân tử mùi thơm về phía mình' },
            { id: 'c', text: 'Vì các phân tử mùi thơm tự chuyển động và lan dần ra khắp phòng' },
          ],
          correctOptionId: 'c',
          explanation:
            'Các phân tử luôn chuyển động hỗn loạn nên tự lan từ nơi có nhiều đến nơi có ít. Trong chất khí, các hạt bay nhanh và ở xa nhau nên mùi lan đi rất dễ.',
          conceptIds: ['diffusion', 'particle-motion'],
        },
        {
          id: 'u3-l4-e2',
          type: 'fill-blank',
          prompt: 'Điền vào chỗ trống',
          template:
            'Hiện tượng các hạt của một chất tự lan ra và xen lẫn vào giữa các hạt của chất khác gọi là sự ___.',
          blanks: [
            {
              accepted: ['khuếch tán'],
              wordBank: ['khuếch tán', 'ngưng tụ', 'đông đặc', 'nóng chảy'],
            },
          ],
          explanation:
            'Khuếch tán xảy ra vì các hạt luôn chuyển động. Không cần ai khuấy hay quạt, chúng vẫn tự trộn lẫn vào nhau.',
          conceptIds: ['diffusion'],
        },
        {
          id: 'u3-l4-e3',
          type: 'true-false',
          prompt: 'Trong một ly nước để yên trên bàn, các phân tử nước cũng đứng yên.',
          visual: { id: 'v', image: 'glass-of-water' },
          answer: false,
          explanation:
            'Ly nước trông phẳng lặng, nhưng các phân tử bên trong vẫn chuyển động và va vào nhau không ngừng. Chúng quá nhỏ nên mắt bạn không thấy.',
          conceptIds: ['particle-motion'],
        },
        {
          id: 'u3-l4-e4',
          type: 'mcq',
          prompt:
            'Thả một viên đường vào cốc trà nóng và một viên vào cốc trà đá, không khuấy. Viên nào tan nhanh hơn?',
          visual: { id: 'v', image: 'sugar-tea' },
          options: [
            { id: 'a', text: 'Viên trong cốc trà đá' },
            { id: 'b', text: 'Viên trong cốc trà nóng' },
            { id: 'c', text: 'Hai viên tan nhanh như nhau' },
          ],
          correctOptionId: 'b',
          explanation:
            'Trà nóng thì các phân tử nước chuyển động nhanh hơn, va vào viên đường nhiều và mạnh hơn, nên kéo các phân tử đường ra nhanh hơn.',
          conceptIds: ['particle-motion', 'solution'],
        },
        {
          id: 'u3-l4-e5',
          type: 'order-steps',
          prompt:
            'Sắp xếp từ nơi các phân tử nước chuyển động chậm nhất đến nơi chúng chuyển động nhanh nhất',
          steps: [
            { id: 's1', text: 'Viên đá trong tủ đông', image: 'ice-cubes' },
            { id: 's2', text: 'Nước mát trong ly', image: 'glass-of-water' },
            { id: 's3', text: 'Nước đang sôi trong ấm', image: 'boiling-kettle' },
          ],
          explanation:
            'Nhiệt độ càng cao, các phân tử chuyển động càng nhanh. Thật ra nhiệt độ chính là thước đo mức độ chuyển động của các hạt.',
          conceptIds: ['particle-motion'],
        },
        {
          id: 'u3-l4-e6',
          type: 'mcq',
          prompt:
            'Bếp than cháy trong phòng đóng kín sinh ra khí carbon monoxide (CO). Khí này sẽ đi đâu?',
          visual: { id: 'v', image: 'coal-stove' },
          options: [
            { id: 'a', text: 'Chỉ quanh quẩn sát bếp than' },
            { id: 'b', text: 'Lan dần ra khắp căn phòng' },
            { id: 'c', text: 'Tự biến mất sau vài phút' },
          ],
          correctOptionId: 'b',
          explanation:
            'Các phân tử CO chuyển động không ngừng và khuếch tán khắp phòng. CO rất độc, lại không màu, không mùi nên bạn không nhận ra. Đừng bao giờ đốt than trong phòng kín.',
          conceptIds: ['diffusion', 'particle-motion'],
        },
        {
          id: 'u3-l4-e7',
          type: 'true-false',
          prompt: 'Khí carbon monoxide không có mùi nên nó không khuếch tán như nước hoa.',
          visual: { id: 'v', moleculeId: 'co' },
          answer: false,
          explanation:
            'Khuếch tán là do các hạt chuyển động, không liên quan đến mùi. Chất khí nào cũng lan ra. Với CO, chỉ là mũi bạn không phát hiện được.',
          conceptIds: ['diffusion'],
        },
        {
          id: 'u3-l4-e8',
          type: 'match-pairs',
          prompt: 'Nối hiện tượng với lời giải thích',
          pairs: [
            {
              left: { id: 'l1', text: 'Mùi nước hoa lan khắp phòng', image: 'perfume' },
              right: { id: 'r1', text: 'Các phân tử mùi thơm khuếch tán trong không khí' },
            },
            {
              left: { id: 'l2', text: 'Quần áo ướt khô dần', image: 'wet-clothes' },
              right: { id: 'r2', text: 'Các phân tử nước lần lượt thoát vào không khí' },
            },
            {
              left: { id: 'l3', text: 'Viên đá giữ nguyên hình dạng', image: 'ice-cubes' },
              right: { id: 'r3', text: 'Các phân tử chỉ rung tại chỗ' },
            },
            {
              left: { id: 'l4', text: 'Đường tan nhanh trong trà nóng', image: 'sugar-tea' },
              right: { id: 'r4', text: 'Nóng hơn thì các phân tử va chạm nhanh và mạnh hơn' },
            },
          ],
          explanation:
            'Mọi hiện tượng này đều giải thích được bằng một ý: các hạt luôn chuyển động, và chuyển động nhanh hay chậm tuỳ theo nhiệt độ và trạng thái.',
          conceptIds: ['particle-motion', 'diffusion', 'state-of-matter'],
        },
        {
          id: 'u3-l4-e9',
          type: 'mcq',
          prompt: 'Để chùm bóng bay ngoài nắng, bóng căng hơn. Vì sao?',
          visual: { id: 'v', image: 'balloons' },
          options: [
            { id: 'a', text: 'Vì các hạt khí bên trong to ra' },
            { id: 'b', text: 'Vì các hạt khí chuyển động nhanh hơn và đập vào vỏ bóng mạnh hơn' },
            { id: 'c', text: 'Vì có thêm hạt khí mới sinh ra trong bóng' },
          ],
          correctOptionId: 'b',
          explanation:
            'Nóng lên, các hạt không to ra và cũng không nhiều thêm. Chúng chỉ chuyển động nhanh hơn, va vào vỏ bóng mạnh hơn và đẩy vỏ bóng căng ra.',
          conceptIds: ['particle-motion'],
        },
        {
          id: 'u3-l4-e10',
          type: 'sort',
          prompt: 'Việc nào làm các hạt chuyển động nhanh hơn, việc nào làm chúng chậm lại?',
          groups: [
            { id: 'faster', label: 'Hạt chuyển động nhanh hơn' },
            { id: 'slower', label: 'Hạt chuyển động chậm lại' },
          ],
          items: [
            { id: 'i1', text: 'Đun ấm nước trên bếp', image: 'boiling-kettle', groupId: 'faster' },
            { id: 'i2', text: 'Cất chai nước vào tủ lạnh', groupId: 'slower' },
            {
              id: 'i3',
              text: 'Phơi quần áo dưới nắng gắt',
              image: 'wet-clothes',
              groupId: 'faster',
            },
            { id: 'i4', text: 'Để bát canh nóng nguội dần', groupId: 'slower' },
            {
              id: 'i5',
              text: 'Làm nóng chảo để rán trứng',
              image: 'frying-egg',
              groupId: 'faster',
            },
          ],
          explanation:
            'Làm nóng là truyền thêm năng lượng cho các hạt, khiến chúng chuyển động nhanh hơn. Làm lạnh thì ngược lại.',
          conceptIds: ['particle-motion'],
        },
      ],
      unlocksMolecules: ['co'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 5: Biến đổi vật lí và hoá học ─────────────────────────
    {
      id: 'u3-l5-physical-vs-chemical',
      title: 'Đổi dạng hay đổi chất?',
      intro: {
        title: 'Một cây nến, hai kiểu biến đổi',
        story: [
          'Thắp một cây nến. Sáp gần ngọn lửa chảy thành giọt, lăn xuống rồi đông cứng lại. Nó vẫn là sáp, chỉ đổi dạng. Đó là biến đổi vật lí.',
          'Nhưng cây nến cứ ngắn dần. Phần sáp thấm lên bấc đã cháy: nó kết hợp với oxygen trong không khí, biến thành khí carbon dioxide và hơi nước. Chất mới đã sinh ra. Đó là biến đổi hoá học.',
          'Muốn phân biệt, hãy tự hỏi: sau khi biến đổi, chất có còn là chất cũ không?',
        ],
        visual: { type: 'molecule', moleculeId: 'o2', scene: 'candle' },
      },
      exercises: [
        {
          id: 'u3-l5-e1',
          type: 'mcq',
          prompt: 'Viên đá tan thành nước. Đây là biến đổi gì?',
          visual: { id: 'v', image: 'ice-cubes' },
          options: [
            { id: 'a', text: 'Biến đổi hoá học, vì viên đá đã biến mất' },
            { id: 'b', text: 'Biến đổi vật lí, vì nước vẫn là nước' },
            { id: 'c', text: 'Không có biến đổi nào cả' },
          ],
          correctOptionId: 'b',
          explanation:
            'Trước và sau đều là H₂O, chỉ đổi từ thể rắn sang thể lỏng. Không có chất mới nên đây là biến đổi vật lí.',
          conceptIds: ['physical-change'],
        },
        {
          id: 'u3-l5-e2',
          type: 'mcq',
          prompt:
            'Rán trứng: lòng trắng trong veo chuyển sang trắng đục, mép trứng vàng nâu và dậy mùi thơm. Để nguội, trứng không trở lại như cũ. Đây là biến đổi gì?',
          visual: { id: 'v', image: 'frying-egg' },
          options: [
            { id: 'a', text: 'Biến đổi vật lí' },
            { id: 'b', text: 'Sự hoà tan' },
            { id: 'c', text: 'Biến đổi hoá học' },
          ],
          correctOptionId: 'c',
          explanation:
            'Nhiệt làm các chất trong trứng biến thành chất khác, có màu và mùi mới. Có chất mới sinh ra nên đây là biến đổi hoá học.',
          conceptIds: ['chemical-change'],
        },
        {
          id: 'u3-l5-e3',
          type: 'sort',
          prompt: 'Biến đổi vật lí hay biến đổi hoá học?',
          groups: [
            { id: 'physical', label: 'Biến đổi vật lí' },
            { id: 'chemical', label: 'Biến đổi hoá học' },
          ],
          items: [
            { id: 'i1', text: 'Đá tan', image: 'ice-cubes', groupId: 'physical' },
            { id: 'i2', text: 'Đinh sắt bị gỉ', image: 'rusty-nail', groupId: 'chemical' },
            { id: 'i3', text: 'Đường tan trong trà', image: 'sugar-tea', groupId: 'physical' },
            { id: 'i4', text: 'Than cháy', image: 'charcoal-grill', groupId: 'chemical' },
            { id: 'i5', text: 'Quần áo ướt khô đi', image: 'wet-clothes', groupId: 'physical' },
            { id: 'i6', text: 'Trứng rán chín', image: 'frying-egg', groupId: 'chemical' },
          ],
          explanation:
            'Tan chảy, hoà tan, bay hơi chỉ làm chất đổi dạng: đó là biến đổi vật lí. Gỉ, cháy, rán chín tạo ra chất mới: đó là biến đổi hoá học.',
          conceptIds: ['physical-change', 'chemical-change'],
        },
        {
          id: 'u3-l5-e4',
          type: 'true-false',
          prompt:
            'Hoà tan đường vào nước là biến đổi hoá học, vì hạt đường không còn nhìn thấy nữa.',
          visual: { id: 'v', image: 'sugar-tea' },
          answer: false,
          explanation:
            'Phân tử đường vẫn nguyên vẹn, chỉ lẫn vào giữa các phân tử nước. Cho nước bay hơi hết, bạn thu lại được đường. Hoà tan là biến đổi vật lí.',
          conceptIds: ['physical-change', 'solution'],
        },
        {
          id: 'u3-l5-e5',
          type: 'mcq',
          prompt:
            'Cây đinh sắt để ngoài mưa phủ một lớp gỉ nâu đỏ, công thức Fe₂O₃. Vì sao đây là biến đổi hoá học?',
          visual: { id: 'v', moleculeId: 'fe2o3' },
          options: [
            { id: 'a', text: 'Vì gỉ là chất mới, khác hẳn sắt ban đầu' },
            { id: 'b', text: 'Vì cây đinh bị ướt' },
            { id: 'c', text: 'Vì cây đinh đổi hình dạng' },
          ],
          correctOptionId: 'a',
          explanation:
            'Các nguyên tử iron (sắt) đã kết hợp với oxygen thành iron(III) oxide: một chất mới, giòn, xốp, màu nâu đỏ, không còn tính chất của sắt.',
          conceptIds: ['chemical-change', 'oxidation'],
        },
        {
          id: 'u3-l5-e6',
          type: 'mcq',
          prompt:
            'Vỏ trứng chủ yếu là calcium carbonate CaCO₃. Bạn đập quả trứng, vỏ vỡ thành nhiều mảnh. Các mảnh vỏ đó là chất gì?',
          visual: { id: 'v', moleculeId: 'caco3' },
          options: [
            { id: 'a', text: 'Một chất mới sinh ra khi vỏ vỡ' },
            { id: 'b', text: 'Khí carbon dioxide' },
            { id: 'c', text: 'Vẫn là calcium carbonate như lúc đầu' },
          ],
          correctOptionId: 'c',
          explanation:
            'Đập vỡ chỉ làm đổi kích thước và hình dạng. Mảnh vỏ nhỏ đến đâu vẫn là calcium carbonate, nên đây là biến đổi vật lí.',
          conceptIds: ['physical-change'],
        },
        {
          id: 'u3-l5-e7',
          type: 'match-pairs',
          prompt: 'Nối mỗi việc với điều xảy ra với chất',
          pairs: [
            {
              left: { id: 'l1', text: 'Xé tờ giấy' },
              right: { id: 'r1', text: 'Vẫn là giấy, chỉ nhỏ hơn' },
            },
            {
              left: { id: 'l2', text: 'Đốt tờ giấy' },
              right: { id: 'r2', text: 'Thành tro và khói: chất mới' },
            },
            {
              left: { id: 'l3', text: 'Sáp nến chảy', image: 'candle' },
              right: { id: 'r3', text: 'Vẫn là sáp, chuyển sang thể lỏng' },
            },
            {
              left: { id: 'l4', text: 'Vỏ trứng bị đập vỡ', image: 'frying-egg' },
              right: { id: 'r4', text: 'Vẫn là calcium carbonate, chỉ vụn hơn' },
            },
          ],
          explanation:
            'Xé, đập vỡ, nóng chảy không tạo ra chất mới, dù có khi không làm lại như cũ được. Đốt thì khác: giấy biến thành tro, khói và các chất khí.',
          conceptIds: ['physical-change', 'chemical-change'],
        },
        {
          id: 'u3-l5-e8',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Biến đổi không tạo ra chất mới là biến đổi ___. Biến đổi có tạo ra chất mới là biến đổi ___.',
          blanks: [
            { accepted: ['vật lí'], wordBank: ['vật lí', 'hoá học', 'trạng thái'] },
            { accepted: ['hoá học'], wordBank: ['vật lí', 'hoá học', 'trạng thái'] },
          ],
          explanation:
            'Câu hỏi quyết định luôn là: có chất mới sinh ra hay không? Không có là biến đổi vật lí, có là biến đổi hoá học.',
          conceptIds: ['physical-change', 'chemical-change'],
        },
        {
          id: 'u3-l5-e9',
          type: 'mcq',
          prompt: 'Đun nước sôi, bọt nổi lên ùng ục. Có chất mới sinh ra không?',
          visual: { id: 'v', image: 'boiling-kettle' },
          options: [
            { id: 'a', text: 'Không, bọt đó là hơi nước, vẫn là H₂O' },
            { id: 'b', text: 'Có, bọt đó là khí hydrogen và khí oxygen' },
            { id: 'c', text: 'Có, bọt đó là một chất khí mới' },
          ],
          correctOptionId: 'a',
          explanation:
            'Sôi chỉ là nước chuyển từ thể lỏng sang thể khí. Thấy sủi bọt chưa chắc là có chất mới: phải xem bọt đó là chất gì.',
          conceptIds: ['physical-change', 'state-change'],
        },
        {
          id: 'u3-l5-e10',
          type: 'order-steps',
          prompt: 'Câu chuyện của một cây nến. Sắp xếp theo thứ tự',
          steps: [
            { id: 's1', text: 'Que diêm châm lửa vào bấc nến' },
            { id: 's2', text: 'Sáp quanh bấc nóng chảy thành chất lỏng' },
            { id: 's3', text: 'Sáp lỏng thấm lên bấc và hoá hơi' },
            { id: 's4', text: 'Hơi sáp cháy với oxygen, tạo ra khí carbon dioxide và hơi nước' },
          ],
          explanation:
            'Nóng chảy và hoá hơi là biến đổi vật lí: vẫn là sáp. Chỉ ở bước cuối, khi sáp cháy, mới có chất mới sinh ra. Đó là một phản ứng hoá học, chủ đề của Unit 4.',
          conceptIds: ['physical-change', 'chemical-change', 'combustion'],
        },
      ],
      unlocksMolecules: ['caco3'],
      baseXp: 10,
    },

    // ───────────────────────── Checkpoint Unit 3 ─────────────────────────
    {
      id: 'u3-checkpoint',
      title: 'Kiểm tra Unit 3',
      kind: 'checkpoint',
      exercises: [
        {
          id: 'u3-cp-e1',
          type: 'match-pairs',
          prompt: 'Nối hiện tượng với tên sự chuyển thể',
          pairs: [
            {
              left: { id: 'l1', text: 'Viên đá tan', image: 'ice-cubes' },
              right: { id: 'r1', text: 'Nóng chảy' },
            },
            {
              left: { id: 'l2', text: 'Quần áo ướt khô đi', image: 'wet-clothes' },
              right: { id: 'r2', text: 'Bay hơi' },
            },
            {
              left: { id: 'l3', text: 'Giọt nước đọng ngoài ly lạnh', image: 'glass-of-water' },
              right: { id: 'r3', text: 'Ngưng tụ' },
            },
            {
              left: { id: 'l4', text: 'Nước trong khay thành đá' },
              right: { id: 'r4', text: 'Đông đặc' },
            },
          ],
          explanation:
            'Rắn thành lỏng là nóng chảy, lỏng thành khí là bay hơi, khí thành lỏng là ngưng tụ, lỏng thành rắn là đông đặc.',
          conceptIds: ['state-change'],
        },
        {
          id: 'u3-cp-e2',
          type: 'mcq',
          prompt: 'Ở trạng thái nào các hạt ở rất xa nhau và bay tự do?',
          options: [
            { id: 'a', text: 'Rắn' },
            { id: 'b', text: 'Lỏng' },
            { id: 'c', text: 'Khí' },
          ],
          correctOptionId: 'c',
          explanation:
            'Trong chất khí, các hạt ở xa nhau và bay tự do, nên chất khí lan ra chiếm hết vật chứa.',
          conceptIds: ['particle-model', 'state-of-matter'],
        },
        {
          id: 'u3-cp-e3',
          type: 'true-false',
          prompt: 'Nước sôi là biến đổi hoá học vì có bọt khí nổi lên.',
          visual: { id: 'v', image: 'boiling-kettle' },
          answer: false,
          explanation:
            'Bọt trong nước sôi là hơi nước, vẫn là H₂O. Không có chất mới nên sôi là biến đổi vật lí.',
          conceptIds: ['physical-change', 'state-change'],
        },
        {
          id: 'u3-cp-e4',
          type: 'sort',
          prompt: 'Ở nhiệt độ phòng, mỗi chất ở trạng thái nào?',
          groups: [
            { id: 'solid', label: 'Rắn' },
            { id: 'liquid', label: 'Lỏng' },
            { id: 'gas', label: 'Khí' },
          ],
          items: [
            { id: 'i1', moleculeId: 'fe', text: 'Iron (sắt)', groupId: 'solid' },
            { id: 'i2', moleculeId: 'h2o', text: 'Nước', groupId: 'liquid' },
            { id: 'i3', moleculeId: 'o2', text: 'Khí oxygen', groupId: 'gas' },
            { id: 'i4', moleculeId: 'nacl', text: 'Muối ăn', groupId: 'solid' },
            { id: 'i5', moleculeId: 'c2h6o', text: 'Ethanol', groupId: 'liquid' },
            { id: 'i6', moleculeId: 'co2', text: 'Carbon dioxide', groupId: 'gas' },
          ],
          explanation:
            'Iron (sắt) và muối ăn là chất rắn, nước và ethanol là chất lỏng, oxygen và carbon dioxide là chất khí. Mỗi chất có nhiệt độ nóng chảy và nhiệt độ sôi riêng.',
          conceptIds: ['state-of-matter'],
        },
        {
          id: 'u3-cp-e5',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template: 'Pha muối vào nước: muối là ___, còn nước là ___.',
          blanks: [
            { accepted: ['chất tan'], wordBank: ['chất tan', 'dung môi', 'dung dịch'] },
            { accepted: ['dung môi'], wordBank: ['chất tan', 'dung môi', 'dung dịch'] },
          ],
          explanation:
            'Chất bị hoà tan là chất tan, chất hoà tan chất khác là dung môi. Nước muối thu được là dung dịch.',
          conceptIds: ['solution'],
        },
        {
          id: 'u3-cp-e6',
          type: 'mcq',
          prompt: 'Cốc trà đường đã khuấy tan hết. Đường đang ở đâu?',
          visual: { id: 'v', image: 'sugar-tea' },
          options: [
            { id: 'a', text: 'Vẫn ở trong cốc, lẫn đều vào giữa các phân tử nước' },
            { id: 'b', text: 'Đã biến mất hoàn toàn' },
            { id: 'c', text: 'Đã biến thành nước' },
          ],
          correctOptionId: 'a',
          explanation:
            'Tan không có nghĩa là mất. Các phân tử đường vẫn còn nguyên, chỉ tách rời nhau và lẫn vào nước nên mắt không thấy.',
          conceptIds: ['solution'],
        },
        {
          id: 'u3-cp-e7',
          type: 'mcq',
          prompt: 'Mùi nước hoa tự lan khắp phòng nhờ hiện tượng nào?',
          visual: { id: 'v', image: 'perfume' },
          options: [
            { id: 'a', text: 'Ngưng tụ' },
            { id: 'b', text: 'Khuếch tán' },
            { id: 'c', text: 'Đông đặc' },
            { id: 'd', text: 'Nóng chảy' },
          ],
          correctOptionId: 'b',
          explanation:
            'Các phân tử mùi thơm chuyển động hỗn loạn và tự lan ra, xen lẫn vào giữa các phân tử không khí. Đó là sự khuếch tán.',
          conceptIds: ['diffusion'],
        },
        {
          id: 'u3-cp-e8',
          type: 'true-false',
          prompt: 'Nhiệt độ càng cao, các hạt chuyển động càng nhanh.',
          answer: true,
          explanation:
            'Đúng. Vì thế đường tan nhanh hơn trong trà nóng, và mùi thức ăn nóng lan xa hơn so với khi đã nguội.',
          conceptIds: ['particle-motion'],
        },
        {
          id: 'u3-cp-e9',
          type: 'sort',
          prompt: 'Biến đổi vật lí hay biến đổi hoá học?',
          groups: [
            { id: 'physical', label: 'Biến đổi vật lí' },
            { id: 'chemical', label: 'Biến đổi hoá học' },
          ],
          items: [
            { id: 'i1', text: 'Nến cháy', image: 'candle', groupId: 'chemical' },
            { id: 'i2', text: 'Muối tan trong canh', image: 'salt-shaker', groupId: 'physical' },
            { id: 'i3', text: 'Đinh sắt bị gỉ', image: 'rusty-nail', groupId: 'chemical' },
            { id: 'i4', text: 'Bóp méo lon nhôm', image: 'soda-can', groupId: 'physical' },
            { id: 'i5', text: 'Trứng rán chín', image: 'frying-egg', groupId: 'chemical' },
            { id: 'i6', text: 'Nước đông thành đá', image: 'ice-cubes', groupId: 'physical' },
          ],
          explanation:
            'Hoà tan, bóp méo, đông đặc không tạo ra chất mới. Cháy, gỉ, rán chín thì có: chất sau biến đổi không còn là chất ban đầu.',
          conceptIds: ['physical-change', 'chemical-change'],
        },
        {
          id: 'u3-cp-e10',
          type: 'build-molecule',
          prompt:
            'Nước đá, nước lỏng và hơi nước đều gồm cùng một loại phân tử. Hãy ghép phân tử đó',
          targetMoleculeId: 'h2o',
          availableAtoms: { H: 3, O: 2, N: 1 },
          explanation:
            'Dù ở thể rắn, lỏng hay khí, nước vẫn là H₂O: 2 nguyên tử hydrogen và 1 nguyên tử oxygen.',
          conceptIds: ['state-of-matter', 'molecule'],
        },
        {
          id: 'u3-cp-e11',
          type: 'order-steps',
          prompt: 'Làm muối từ nước biển. Sắp xếp theo thứ tự',
          steps: [
            { id: 's1', text: 'Dẫn nước biển vào ruộng muối' },
            { id: 's2', text: 'Nắng làm nước bay hơi dần' },
            { id: 's3', text: 'Nước còn lại ngày càng mặn' },
            { id: 's4', text: 'Muối kết thành hạt trắng trên ruộng' },
          ],
          explanation:
            'Nước bay hơi đi, còn muối ở lại. Hoà tan và bay hơi đều là biến đổi vật lí, nên muối vẫn nguyên là muối.',
          conceptIds: ['solution', 'state-change', 'physical-change'],
        },
        {
          id: 'u3-cp-e12',
          type: 'mcq',
          prompt: 'Dấu hiệu chắc chắn nhất của một biến đổi hoá học là gì?',
          options: [
            { id: 'a', text: 'Chất đổi hình dạng' },
            { id: 'b', text: 'Chất đổi trạng thái' },
            { id: 'c', text: 'Có chất mới được tạo ra' },
          ],
          correctOptionId: 'c',
          explanation:
            'Đổi hình dạng hay đổi trạng thái vẫn là chất cũ. Chỉ khi có chất mới sinh ra thì mới là biến đổi hoá học.',
          conceptIds: ['chemical-change'],
        },
      ],
      baseXp: 20,
    },
  ],
}
