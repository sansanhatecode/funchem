import type { UnitInput } from '../../schema/lesson.js'

/**
 * Unit 3: Rắn, lỏng, khí
 * 5 bài học + checkpoint: ba thể của chất, sự chuyển thể, hoà tan và dung dịch,
 * chuyển động của hạt, biến đổi vật lí và biến đổi hoá học.
 */
export const unit03: UnitInput = {
  id: 'u3-states',
  order: 3,
  title: 'Rắn, lỏng, khí',
  tagline: 'Ba thể của chất, sự hoà tan và hai kiểu biến đổi',
  color: '#FF9600',
  lessons: [
    // ───────────────────────── Bài 1: Ba thể của chất ─────────────────────────
    {
      id: 'u3-l1-three-states',
      title: 'Một chất, ba dáng vẻ',
      intro: {
        title: 'Đá, nước và hơi nước',
        story: [
          'Viên đá trong cốc trà đá, nước trong ly và hơi nước thoát ra từ vòi ấm đang sôi. Ba thứ trông khác hẳn nhau, nhưng đều là nước.',
          'Đó là ba thể (hay ba trạng thái) của chất: rắn, lỏng và khí. Viên đá cứng, tự giữ hình dạng. Nước lỏng chảy được, rót vào ly nào thì mang hình ly đó, nhưng thể tích, tức khoảng không gian nó chiếm, vẫn vậy: một lít nước rót sang bình nào cũng là một lít. Hơi nước thì lan ra khắp gian bếp, có bao nhiêu chỗ trống là chiếm hết.',
          'Vì sao lại khác nhau như vậy? Phóng to lên, cả ba đều gồm cùng một loại hạt là phân tử H₂O. Chỉ cách các hạt xếp và chuyển động là khác. Trong nước đá, chúng xếp ngay hàng thẳng lối và chỉ rung tại chỗ. Trong nước lỏng, chúng vẫn ở sát nhau nhưng trượt qua nhau được. Trong hơi nước, chúng ở rất xa nhau và bay tự do. Giữa các hạt khí còn nhiều khoảng trống, nên chất khí nén được, tức là ép lại cho chiếm ít chỗ hơn. Chất rắn và chất lỏng thì rất khó nén.',
          'Hơi nước không màu nên mắt không thấy được. Làn trắng phía trên vòi ấm là thứ khác, bài sau bạn sẽ biết.',
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
          prompt: 'Viên đá trong cốc trà đá là nước ở thể nào?',
          visual: { id: 'v', image: 'ice-cubes' },
          options: [
            { id: 'a', text: 'Rắn' },
            { id: 'b', text: 'Lỏng' },
            { id: 'c', text: 'Khí' },
          ],
          correctOptionId: 'a',
          explanation:
            'Nước đá là nước ở thể rắn: cứng, tự giữ hình dạng, không rót được như nước lỏng. Chất tạo nên nó vẫn là H₂O.',
          conceptIds: ['state-of-matter'],
        },
        {
          id: 'u3-l1-e2',
          type: 'match-pairs',
          prompt: 'Cùng là nước. Nối mỗi hình với thể của nước trong đó',
          pairs: [
            {
              left: { id: 'l1', text: 'Viên đá', image: 'ice-cubes' },
              right: { id: 'r1', text: 'Thể rắn' },
            },
            {
              left: { id: 'l2', text: 'Nước trong ly', image: 'glass-of-water' },
              right: { id: 'r2', text: 'Thể lỏng' },
            },
            {
              left: {
                id: 'l3',
                text: 'Hơi nước không màu ở ngay miệng vòi ấm đang sôi',
                image: 'boiling-kettle',
              },
              right: { id: 'r3', text: 'Thể khí' },
            },
          ],
          explanation:
            'Viên đá ở thể rắn, nước trong ly ở thể lỏng, còn hơi nước thoát ra từ ấm đang sôi ở thể khí. Cả ba đều gồm các phân tử H₂O.',
          conceptIds: ['state-of-matter'],
        },
        {
          id: 'u3-l1-e3',
          type: 'mcq',
          prompt: 'Trong nước đá, các phân tử nước xếp và chuyển động ra sao?',
          options: [
            { id: 'a', text: 'Ở rất xa nhau và bay tự do' },
            { id: 'b', text: 'Xếp theo hàng lối và chỉ rung tại chỗ' },
            { id: 'c', text: 'Trượt qua nhau liên tục' },
          ],
          correctOptionId: 'b',
          explanation:
            'Ở thể rắn, các hạt bị giữ tại chỗ theo một trật tự nhất định và chỉ rung nhẹ. Vì thế viên đá cứng và giữ được hình dạng. Ở rất xa nhau và bay tự do là hơi nước, còn trượt qua nhau là nước lỏng.',
          conceptIds: ['particle-model', 'state-of-matter'],
        },
        {
          id: 'u3-l1-e4',
          type: 'true-false',
          prompt:
            'Khi nước đá chảy thành nước lỏng, các phân tử H₂O biến thành một loại phân tử khác.',
          visual: { id: 'v', moleculeId: 'h2o' },
          answer: false,
          explanation:
            'Phân tử vẫn là H₂O. Chỉ cách các phân tử xếp và chuyển động thay đổi: từ ngay hàng thẳng lối sang trượt qua nhau.',
          conceptIds: ['state-of-matter', 'particle-model'],
        },
        {
          id: 'u3-l1-e5',
          type: 'sort',
          prompt: 'Mỗi mô tả ứng với thể nào?',
          groups: [
            { id: 'solid', label: 'Rắn' },
            { id: 'liquid', label: 'Lỏng' },
            { id: 'gas', label: 'Khí' },
          ],
          items: [
            { id: 'i1', text: 'Tự giữ hình dạng, không rót được', groupId: 'solid' },
            {
              id: 'i2',
              text: 'Rót được, nằm gọn ở đáy và mang hình vật chứa',
              groupId: 'liquid',
            },
            { id: 'i3', text: 'Tự lan ra chiếm hết khoảng trống của vật chứa', groupId: 'gas' },
            { id: 'i4', text: 'Các hạt ở rất xa nhau', groupId: 'gas' },
            { id: 'i5', text: 'Các hạt ở sát nhau nhưng trượt qua nhau được', groupId: 'liquid' },
            { id: 'i6', text: 'Các hạt xếp theo hàng lối, chỉ rung tại chỗ', groupId: 'solid' },
          ],
          explanation:
            'Chất rắn giữ nguyên hình dạng vì các hạt bị giữ tại chỗ. Chất lỏng chảy được vì các hạt trượt qua nhau. Chất khí lan khắp nơi vì các hạt ở xa nhau và bay tự do.',
          conceptIds: ['state-of-matter', 'particle-model'],
        },
        {
          id: 'u3-l1-e6',
          type: 'mcq',
          prompt: 'Một lon nước ngọt có ga vừa mở có đủ ba thể. Thứ nào ở thể rắn?',
          visual: { id: 'v', image: 'soda-can' },
          options: [
            { id: 'a', moleculeId: 'co2', text: 'Bọt khí carbon dioxide' },
            { id: 'b', moleculeId: 'h2o', text: 'Nước trong lon' },
            { id: 'c', moleculeId: 'al', text: 'Vỏ lon bằng aluminium (nhôm)' },
          ],
          correctOptionId: 'c',
          explanation:
            'Vỏ lon làm bằng nhôm, một kim loại ở thể rắn: nó cứng và tự giữ hình dạng. Nước trong lon ở thể lỏng, còn bọt carbon dioxide ở thể khí.',
          conceptIds: ['state-of-matter'],
        },
        {
          id: 'u3-l1-e11',
          type: 'match-pairs',
          prompt:
            'Thể tích là khoảng không gian mà một lượng chất chiếm. Nối mỗi thể với đặc điểm về hình dạng và thể tích của nó',
          pairs: [
            {
              left: { id: 'l1', text: 'Thể rắn' },
              right: { id: 'r1', text: 'Hình dạng và thể tích đều giữ nguyên' },
            },
            {
              left: { id: 'l2', text: 'Thể lỏng' },
              right: { id: 'r2', text: 'Thể tích giữ nguyên, hình dạng theo vật chứa' },
            },
            {
              left: { id: 'l3', text: 'Thể khí' },
              right: { id: 'r3', text: 'Lan ra chiếm hết vật chứa, không có thể tích riêng' },
            },
          ],
          explanation:
            'Viên đá đặt vào ly nào cũng vẫn hình ấy, to chừng ấy. Một lít nước rót sang bình khác thì đổi hình dạng nhưng vẫn là một lít. Còn chất khí thì vật chứa rộng bao nhiêu, nó lan ra chiếm hết bấy nhiêu: bơm helium vào quả bóng bay, helium lan khắp quả bóng.',
          conceptIds: ['state-of-matter', 'particle-model'],
        },
        {
          id: 'u3-l1-e8',
          type: 'true-false',
          prompt: 'Trong vỏ lon nhôm, các nguyên tử aluminium (nhôm) đứng yên hoàn toàn.',
          visual: { id: 'v', moleculeId: 'al' },
          answer: false,
          explanation:
            'Ở thể rắn, các hạt không rời khỏi chỗ của mình nhưng vẫn rung nhẹ không ngừng. Không có hạt nào đứng yên hoàn toàn.',
          conceptIds: ['particle-model'],
        },
        {
          id: 'u3-l1-e9',
          type: 'fill-blank',
          prompt:
            'Khi bơm xe đạp, mỗi lần ấn tay bơm xuống là không khí trong ống bơm bị ép lại, chiếm ít chỗ hơn. Chọn từ đúng',
          template:
            'Chất khí nén lại được vì các hạt của nó ở rất ___ nhau, còn nhiều khoảng trống để dồn lại gần hơn.',
          blanks: [{ accepted: ['xa'], wordBank: ['xa', 'sát'] }],
          explanation:
            'Trong chất khí, các hạt ở rất xa nhau nên ép lại gần nhau được. Trong chất rắn và chất lỏng, các hạt đã ở sát nhau sẵn nên rất khó nén. Khi bị nén, từng hạt không nhỏ đi, chỉ khoảng trống giữa chúng hẹp lại.',
          conceptIds: ['state-of-matter', 'particle-model'],
        },
        {
          id: 'u3-l1-e12',
          type: 'sort',
          prompt:
            'Nén là ép một chất lại cho nó chiếm ít chỗ hơn. Thứ nào nén lại được, thứ nào rất khó nén?',
          groups: [
            { id: 'easy', label: 'Nén lại được' },
            { id: 'hard', label: 'Rất khó nén' },
          ],
          items: [
            { id: 'i1', text: 'Không khí trong ống bơm xe đạp', groupId: 'easy' },
            { id: 'i2', text: 'Nước đựng đầy trong chai', groupId: 'hard' },
            { id: 'i3', text: 'Khí helium trong quả bóng bay', image: 'balloons', groupId: 'easy' },
            { id: 'i4', text: 'Cây đinh sắt', image: 'iron-nail', groupId: 'hard' },
            { id: 'i5', text: 'Dầu ăn đựng đầy trong chai', groupId: 'hard' },
          ],
          explanation:
            'Không khí và helium là chất khí: các hạt ở rất xa nhau nên ép lại gần nhau được. Nhờ vậy người ta nén được rất nhiều khí vào một chiếc bình nhỏ. Nước và dầu ăn là chất lỏng, đinh sắt là chất rắn: các hạt đã ở sát nhau sẵn, gần như không còn chỗ để dồn lại, nên rất khó nén.',
          conceptIds: ['state-of-matter', 'particle-model'],
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
            'Phân tử nước ở thể nào cũng to như nhau, và viên đá hay ly nước đều có vô vàn phân tử. Nước lỏng rót được vì các phân tử không bị giữ tại chỗ mà trượt qua nhau.',
          conceptIds: ['particle-model', 'state-of-matter'],
        },
      ],
      unlocksMolecules: ['al'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 2: Sự chuyển thể ─────────────────────────
    {
      id: 'u3-l2-changing-state',
      title: 'Chảy ra, bay hơi, đọng lại',
      intro: {
        title: 'Quần áo ướt rồi lại khô',
        story: [
          'Phơi quần áo ướt ngoài sân, vài giờ sau là khô. Nước đi đâu? Từng phân tử nước rời khỏi vải, bay vào không khí thành hơi nước. Chất lỏng chuyển thành khí như vậy gọi là sự bay hơi.',
          'Chiều ngược lại cũng có. Hơi nước gặp lạnh thì tụ lại thành giọt, như những giọt nước đọng bên ngoài ly nước đá. Đó là sự ngưng tụ.',
          'Rắn và lỏng cũng đổi qua lại được. Viên đá để ngoài tủ lạnh chảy thành nước: đó là sự nóng chảy. Nước trong ngăn đá cứng lại thành đá: đó là sự đông đặc. Với nước, cả hai đều xảy ra ở 0 °C. Chừng nào đá còn đang chảy, nhiệt độ của nó vẫn đứng ở 0 °C: nhiệt nhận vào lúc này chỉ dùng để chuyển thể.',
          'Còn sôi thì sao? Bay hơi diễn ra lặng lẽ trên mặt nước, ở nhiệt độ nào cũng có. Khi đun tới khoảng 100 °C, nước chuyển thành hơi ngay cả trong lòng nó, bọt hơi nổi lên ùng ục: đó là sự sôi. Suốt lúc sôi, nhiệt độ của nước cũng giữ nguyên ở khoảng 100 °C. Dù chuyển thể kiểu nào, phân tử H₂O vẫn y nguyên.',
        ],
        visual: { type: 'molecule', moleculeId: 'h2o', scene: 'wet-clothes' },
      },
      exercises: [
        {
          id: 'u3-l2-e1',
          type: 'match-pairs',
          prompt:
            'Chất đổi từ thể này sang thể khác gọi là sự chuyển thể. Nối mỗi sự chuyển thể với tên của nó',
          pairs: [
            { left: { id: 'l1', text: 'Rắn thành lỏng' }, right: { id: 'r1', text: 'Nóng chảy' } },
            { left: { id: 'l2', text: 'Lỏng thành rắn' }, right: { id: 'r2', text: 'Đông đặc' } },
            { left: { id: 'l3', text: 'Lỏng thành khí' }, right: { id: 'r3', text: 'Bay hơi' } },
            { left: { id: 'l4', text: 'Khí thành lỏng' }, right: { id: 'r4', text: 'Ngưng tụ' } },
          ],
          explanation:
            'Nóng chảy và đông đặc là hai chiều ngược nhau giữa rắn và lỏng. Bay hơi và ngưng tụ là hai chiều ngược nhau giữa lỏng và khí. Sôi cũng là lỏng thành khí, nhưng xảy ra cả trong lòng chất lỏng.',
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
            'Thuỷ tinh không cho nước thấm qua. Những giọt nước ấy đến từ bên ngoài: không khí quanh bạn luôn có hơi nước. Gặp thành ly lạnh, các phân tử nước chậm lại, tụ vào nhau thành giọt. Đó là sự ngưng tụ.',
          conceptIds: ['state-change'],
        },
        {
          id: 'u3-l2-e3',
          type: 'true-false',
          prompt: 'Làn sương trắng phía trên vòi ấm đang sôi chính là hơi nước.',
          visual: { id: 'v', image: 'boiling-kettle' },
          answer: false,
          explanation:
            'Hơi nước là chất khí không màu, mắt không nhìn thấy được. Làn trắng bạn thấy là hơi nước gặp không khí mát hơn và ngưng tụ thành những giọt nước li ti.',
          conceptIds: ['state-change', 'state-of-matter'],
        },
        {
          id: 'u3-l2-e5',
          type: 'sort',
          prompt:
            'Nóng chảy, bay hơi và sôi cần nhận thêm nhiệt. Ngưng tụ và đông đặc thì ngược lại: chúng xảy ra khi chất mất bớt nhiệt. Mỗi hiện tượng dưới đây thuộc nhóm nào?',
          groups: [
            { id: 'gain', label: 'Nhận thêm nhiệt' },
            { id: 'lose', label: 'Mất bớt nhiệt' },
          ],
          items: [
            { id: 'i1', text: 'Viên đá chảy thành nước', image: 'ice-cubes', groupId: 'gain' },
            { id: 'i2', text: 'Nước sôi trong ấm', image: 'boiling-kettle', groupId: 'gain' },
            { id: 'i3', text: 'Hơi nước đọng thành giọt ngoài ly lạnh', groupId: 'lose' },
            { id: 'i4', text: 'Nước trong khay đông thành đá', groupId: 'lose' },
            { id: 'i5', text: 'Quần áo ướt khô dần', image: 'wet-clothes', groupId: 'gain' },
          ],
          explanation:
            'Đá chảy là nóng chảy, quần áo khô là bay hơi, nước trong ấm thì sôi. Cả ba đều cần nhận thêm nhiệt, vì nhiệt giúp các phân tử thắng được lực hút đang giữ chúng lại với nhau. Hơi nước đọng thành giọt là ngưng tụ, nước đông thành đá là đông đặc: cả hai xảy ra khi mất bớt nhiệt.',
          conceptIds: ['state-change'],
        },
        {
          id: 'u3-l2-e6',
          type: 'mcq',
          prompt: 'Bay hơi và sôi đều là chất lỏng chuyển thành hơi. Chúng khác nhau ở điểm nào?',
          options: [
            { id: 'a', text: 'Bay hơi tạo ra chất mới, còn sôi thì không' },
            { id: 'b', text: 'Bay hơi chỉ xảy ra ở 100 °C, còn sôi thì ở nhiệt độ nào cũng được' },
            { id: 'c', text: 'Bay hơi xảy ra ở mọi nhiệt độ, còn nước chỉ sôi ở khoảng 100 °C' },
          ],
          correctOptionId: 'c',
          explanation:
            'Quần áo vẫn khô ở nhiệt độ thường vì nước bay hơi từ từ trên bề mặt, ở nhiệt độ nào cũng được. Sôi thì chỉ xảy ra khi nước nóng tới nhiệt độ sôi, khoảng 100 °C: lúc đó nước chuyển thành hơi cả ở trong lòng nó, tạo thành các bọt hơi nổi lên. Bọt ấy là nước ở thể khí, không phải không khí. Cả bay hơi lẫn sôi đều không tạo ra chất mới.',
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
            'Ở 0 °C nước đá bắt đầu nóng chảy, và cũng ở 0 °C nước lỏng bắt đầu đông đặc. Còn khoảng 100 °C là nhiệt độ sôi của nước, 37 °C là thân nhiệt của bạn.',
          conceptIds: ['state-change'],
        },
        // e4 đứng sau e7 có chủ ý: người học cần gặp 0 °C và 100 °C trước khi
        // được hỏi vì sao nhiệt độ giữ nguyên trong lúc chuyển thể.
        {
          id: 'u3-l2-e4',
          type: 'mcq',
          prompt:
            'Khi nước đang sôi, nhiệt từ bếp chỉ dùng để chuyển nước thành hơi, nên nhiệt độ của nước giữ nguyên ở khoảng 100 °C. Ấm nước đang sôi mà bếp được vặn lửa to hơn thì chuyện gì xảy ra?',
          visual: { id: 'v', image: 'boiling-kettle' },
          options: [
            { id: 'a', text: 'Nước nóng lên quá 100 °C rất nhiều' },
            { id: 'b', text: 'Nước vẫn khoảng 100 °C, chỉ sôi mạnh hơn và cạn nhanh hơn' },
            { id: 'c', text: 'Nước nguội dần vì hơi nước mang hết nhiệt đi' },
          ],
          correctOptionId: 'b',
          explanation:
            'Lửa to hơn thì cấp nhiệt nhanh hơn, nhưng chừng nào nước còn đang sôi, nhiệt ấy chỉ làm nước chuyển thành hơi nhanh hơn. Nhiệt độ của nước vẫn đứng ở khoảng 100 °C. Nước đá cũng vậy: trong lúc đang nóng chảy, nó giữ nguyên 0 °C cho tới khi chảy hết.',
          conceptIds: ['state-change'],
        },
        {
          id: 'u3-l2-e11',
          type: 'fill-blank',
          prompt:
            'Một cốc đầy đá viên để trên bàn, thỉnh thoảng được khuấy đều. Đá nhận nhiệt từ không khí ấm xung quanh và chảy dần. Chọn số đúng',
          template:
            'Chừng nào trong cốc còn đá đang nóng chảy, nhiệt độ của nước trong cốc vẫn ở khoảng ___ °C.',
          blanks: [{ accepted: ['0'], wordBank: ['0', '10', '25'] }],
          explanation:
            'Trong lúc đá đang nóng chảy, nhiệt nhận vào chỉ dùng để chuyển đá thành nước, nên nhiệt độ đứng ở khoảng 0 °C. Chỉ khi viên đá cuối cùng chảy hết, nước trong cốc mới ấm dần lên. Cũng giống nước đang sôi giữ nguyên khoảng 100 °C cho tới khi cạn.',
          conceptIds: ['state-change'],
        },
        {
          id: 'u3-l2-e8',
          type: 'true-false',
          prompt:
            'Lon nhôm cũ được nấu chảy ở khoảng 660 °C để đúc thành lon mới. Kim loại lỏng lúc đó vẫn là aluminium (nhôm).',
          visual: { id: 'v', moleculeId: 'al' },
          answer: true,
          explanation:
            'Nóng chảy chỉ làm các nguyên tử aluminium (nhôm) rời khỏi hàng lối và trượt qua nhau. Không có chất mới sinh ra, nên khi nguội nó lại là nhôm rắn.',
          conceptIds: ['state-change', 'state-of-matter'],
        },
        {
          id: 'u3-l2-e9',
          type: 'order-steps',
          prompt:
            'Một nồi đựng vài viên đá, đậy nắp, được đun trên bếp. Sắp xếp các việc xảy ra theo thứ tự',
          steps: [
            { id: 's1', text: 'Đá nóng chảy thành nước lỏng' },
            { id: 's2', text: 'Nước nóng dần lên' },
            { id: 's3', text: 'Nước sôi, hơi nước bốc lên rất mạnh' },
            {
              id: 's4',
              text: 'Bếp tắt, nắp nồi được mở ra: mặt trong nắp đọng đầy giọt nước do hơi nước ngưng tụ',
            },
          ],
          explanation:
            'Rắn thành lỏng, lỏng thành khí, rồi khí lại thành lỏng trên nắp nồi. Suốt hành trình ấy, chất vẫn là nước.',
          conceptIds: ['state-change'],
        },
        {
          id: 'u3-l2-e10',
          type: 'mcq',
          prompt:
            'Nước rửa tay khô chứa nhiều ethanol (cồn). Xoa lên tay, vài giây sau tay đã khô và thấy mát. Vì sao?',
          visual: { id: 'v', image: 'hand-sanitizer' },
          options: [
            { id: 'a', text: 'Ethanol bay hơi rất nhanh và lấy nhiệt từ da tay' },
            { id: 'b', text: 'Ethanol thấm hết vào trong da' },
            { id: 'c', text: 'Ethanol biến thành nước rồi chảy đi' },
          ],
          correctOptionId: 'a',
          explanation:
            'Ethanol bay hơi nhanh hơn nước nhiều, nên tay khô chỉ sau vài giây. Bay hơi cần nhận thêm nhiệt, và ethanol lấy nhiệt ấy từ chính da tay bạn. Vì thế bạn thấy mát.',
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
          'Phóng to lên: các phân tử nước bám quanh hạt đường và kéo từng phân tử đường rời ra. Đường tách thành từng phân tử riêng lẻ, lẫn vào giữa các phân tử nước, nhỏ đến mức mắt không thấy nữa. Đó là sự hoà tan.',
          'Chất bị hoà tan, ở đây là đường, gọi là chất tan. Chất hoà tan chất khác, ở đây là nước, gọi là dung môi. Hỗn hợp thu được gọi là dung dịch. Nó đồng nhất, nghĩa là chỗ nào cũng như nhau: ngụm trà nào cũng ngọt như ngụm nào.',
          'Đừng nhầm hoà tan với nóng chảy. Viên đá nóng chảy là một chất tự chuyển từ rắn sang lỏng khi nóng lên. Còn hoà tan cần hai chất: đường phải gặp nước mới tan.',
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
              left: { id: 'l1', moleculeId: 'nacl', text: 'Sodium chloride (muối ăn)' },
              right: { id: 'r1', text: 'Chất tan' },
            },
            {
              left: { id: 'l2', moleculeId: 'h2o', text: 'Nước' },
              right: { id: 'r2', text: 'Dung môi' },
            },
            { left: { id: 'l3', text: 'Nước muối' }, right: { id: 'r3', text: 'Dung dịch' } },
          ],
          explanation:
            'Muối bị hoà tan nên là chất tan. Nước hoà tan muối nên là dung môi. Hỗn hợp đồng nhất của cả hai là dung dịch.',
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
          prompt: 'Muối đã tan hết trong một bát nước muối. Làm sao lấy lại muối?',
          visual: { id: 'v', image: 'salt-shaker' },
          options: [
            { id: 'a', text: 'Lọc qua giấy lọc' },
            { id: 'b', text: 'Khuấy thật mạnh' },
            { id: 'c', text: 'Đun hoặc phơi cho nước bay hơi hết' },
          ],
          correctOptionId: 'c',
          explanation:
            'Nước bay hơi đi, muối ở lại. Cách này gọi là cô cạn, và người làm muối cũng phơi nước biển như vậy. Lọc thì không được: khi tan, muối đã tách thành các ion Na⁺ và Cl⁻ riêng lẻ, nhỏ đến mức chui qua giấy lọc cùng với nước. Khuấy mạnh chỉ làm muối lẫn đều hơn.',
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
            { id: 'i6', text: 'Bột ngọt (mì chính)', groupId: 'soluble' },
          ],
          explanation:
            'Đường, muối và bột ngọt tan trong nước, tạo thành dung dịch: khuấy xong bạn không còn thấy chúng nữa. Cát và đinh sắt chìm xuống đáy, dầu ăn nổi lên trên. Khuấy bao lâu bạn vẫn nhìn thấy chúng, vì chúng không tan trong nước.',
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
          prompt:
            'Ghép phân tử acetic acid CH₃COOH, chất tạo vị chua của giấm. Mẹo đếm: trong công thức này chữ C xuất hiện 2 lần, chữ O 2 lần, còn H có ở hai chỗ là H₃ và H',
          targetMoleculeId: 'c2h4o2',
          availableAtoms: { C: 3, H: 6, O: 3, N: 1 },
          explanation:
            'Đếm từng chỗ trong CH₃COOH: 2 nguyên tử carbon, 3 + 1 = 4 nguyên tử hydrogen và 2 nguyên tử oxygen. Vì thế công thức còn được viết gộp là C₂H₄O₂.',
          conceptIds: ['formula', 'molecule'],
        },
        {
          id: 'u3-l3-e8',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng',
          template:
            'Nước đường ngọt đều từ trên xuống dưới, không còn thấy hạt đường nào. Hỗn hợp đồng nhất như vậy của chất tan và dung môi gọi là ___.',
          blanks: [{ accepted: ['dung dịch'], wordBank: ['dung dịch', 'hợp chất', 'đơn chất'] }],
          explanation:
            'Nước đường, nước muối, giấm đều là dung dịch. Chất tan và dung môi chỉ trộn lẫn với nhau chứ không liên kết thành chất mới, nên dung dịch là hỗn hợp chứ không phải hợp chất.',
          conceptIds: ['solution', 'mixture'],
        },
        {
          id: 'u3-l3-e9',
          type: 'mcq',
          prompt:
            'Bạn cho thêm mãi đường vào một cốc nước và khuấy thật kĩ. Tới một lúc, đường không tan thêm nữa mà lắng xuống đáy. Vì sao?',
          options: [
            { id: 'a', text: 'Vì bạn khuấy chưa đủ lâu' },
            { id: 'b', text: 'Vì một cốc nước chỉ hoà tan được một lượng đường nhất định' },
            { id: 'c', text: 'Vì phần đường cho vào sau đã biến thành chất khác' },
          ],
          correctOptionId: 'b',
          explanation:
            'Ở mỗi nhiệt độ, một lượng nước chỉ hoà tan được tối đa một lượng đường nhất định. Quá mức đó, đường thừa lắng xuống đáy dù bạn khuấy bao lâu: khuấy chỉ giúp tan nhanh hơn chứ không giúp tan nhiều hơn. Khi ấy ta nói dung dịch đã bão hoà. Muốn đường tan thêm, phải thêm nước hoặc dùng nước nóng hơn.',
          conceptIds: ['solution'],
        },
        {
          id: 'u3-l3-e10',
          type: 'sort',
          prompt:
            'Nóng chảy chỉ cần một chất và nhiệt. Hoà tan thì cần hai chất: chất tan và dung môi. Mỗi việc dưới đây là nóng chảy hay hoà tan?',
          groups: [
            { id: 'melt', label: 'Nóng chảy' },
            { id: 'dissolve', label: 'Hoà tan' },
          ],
          items: [
            {
              id: 'i1',
              text: 'Viên đá để trên bàn tan thành nước',
              image: 'ice-cubes',
              groupId: 'melt',
            },
            {
              id: 'i2',
              text: 'Thìa đường khuấy trong cốc trà',
              image: 'sugar-tea',
              groupId: 'dissolve',
            },
            {
              id: 'i3',
              text: 'Sáp nến mềm ra rồi nhỏ giọt cạnh ngọn lửa',
              image: 'candle',
              groupId: 'melt',
            },
            {
              id: 'i4',
              text: 'Muối nêm vào nồi canh',
              image: 'salt-shaker',
              groupId: 'dissolve',
            },
            { id: 'i5', text: 'Lon nhôm cũ hoá lỏng trong lò nung', groupId: 'melt' },
            { id: 'i6', text: 'Bột ngọt (mì chính) khuấy vào bát nước dùng', groupId: 'dissolve' },
          ],
          explanation:
            'Đá, sáp nến và nhôm tự chuyển từ rắn sang lỏng khi đủ nóng: đó là nóng chảy, không cần thêm chất nào khác. Đường, muối và bột ngọt thì phải gặp nước mới tan: đó là hoà tan. Đời thường ta hay nói "đá tan", nhưng viên đá không tan vào chất nào cả. Trong hoá học, đó là nóng chảy.',
          conceptIds: ['solution', 'state-change'],
        },
        {
          id: 'u3-l3-e11',
          type: 'true-false',
          prompt:
            'Thả một viên đường vào cốc nước ấm, viên đường nhỏ dần rồi không còn thấy nữa. Viên đường đã nóng chảy.',
          visual: { id: 'v', image: 'sugar-tea' },
          answer: false,
          explanation:
            'Viên đường đã hoà tan chứ không nóng chảy: các phân tử nước kéo từng phân tử đường rời ra, lẫn vào giữa chúng. Nóng chảy là một chất tự chuyển từ rắn sang lỏng khi đủ nóng, mà nước ấm thì chưa đủ nóng để làm đường chảy lỏng. Đời thường ta hay nói "đường tan chảy trong nước", nhưng trong hoá học đó là hoà tan.',
          conceptIds: ['solution', 'state-change'],
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
          'Nước hoa gồm các chất thơm hoà tan trong ethanol (cồn). Xịt ra, chúng bay hơi. Các phân tử bay lung tung, va vào phân tử không khí, đổi hướng liên tục và cứ thế lan dần ra khắp phòng. Hiện tượng các hạt tự lan ra như vậy gọi là khuếch tán.',
          'Khuếch tán xảy ra được vì các hạt không bao giờ đứng yên. Càng nóng, chúng chuyển động càng nhanh. Vì thế bát canh nóng thơm lừng cả bếp: các phân tử mùi thoát khỏi bát canh nhiều hơn và lan đi nhanh hơn so với lúc canh đã nguội.',
          'Nhớ nhé: nóng lên, từng hạt không to ra và cũng không nhiều thêm. Chúng chỉ chuyển động nhanh hơn.',
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
            'Các phân tử luôn chuyển động hỗn loạn nên tự lan từ nơi có nhiều đến nơi có ít. Nước hoa không biến thành không khí, và mũi bạn cũng không hút được nó từ xa: chính các phân tử mùi thơm tự bay tới chỗ bạn.',
          conceptIds: ['diffusion', 'particle-motion'],
        },
        {
          id: 'u3-l4-e2',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng',
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
            'Nhiệt độ càng cao, các phân tử chuyển động càng nhanh. Có thể nói nhiệt độ cho biết các hạt đang chuyển động mạnh tới đâu.',
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
          prompt: 'Khí carbon monoxide không có mùi nên không khuếch tán được như mùi nước hoa.',
          visual: { id: 'v', moleculeId: 'co' },
          answer: false,
          explanation:
            'Khuếch tán là do các hạt chuyển động, không liên quan đến mùi. Chất khí nào cũng tự lan ra. Với CO, chỉ là mũi bạn không phát hiện được, và chính vì thế nó càng nguy hiểm.',
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
              right: {
                id: 'r4',
                text: 'Nóng hơn thì các phân tử chuyển động nhanh hơn, va chạm nhiều và mạnh hơn',
              },
            },
          ],
          explanation:
            'Mọi hiện tượng này đều giải thích được bằng một ý: các hạt luôn chuyển động, và chuyển động nhanh hay chậm tuỳ theo nhiệt độ và thể của chất.',
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
          'Bạn hẳn đã thấy một cây nến đang cháy. Sáp gần ngọn lửa chảy thành giọt, lăn xuống rồi đông đặc lại. Nó vẫn là sáp, chỉ đổi dạng. Biến đổi không tạo ra chất mới như vậy gọi là biến đổi vật lí.',
          'Nhưng cây nến cứ ngắn dần. Phần sáp thấm lên bấc đã cháy: nó kết hợp với oxygen trong không khí, biến thành khí carbon dioxide và hơi nước. Chất mới đã sinh ra. Biến đổi có tạo ra chất mới gọi là biến đổi hoá học.',
          'Muốn phân biệt, hãy tự hỏi: sau khi biến đổi, chất có còn là chất cũ không?',
        ],
        visual: { type: 'molecule', moleculeId: 'o2', scene: 'candle' },
      },
      exercises: [
        {
          id: 'u3-l5-e1',
          type: 'mcq',
          prompt: 'Viên đá nóng chảy thành nước. Đây là biến đổi gì?',
          visual: { id: 'v', image: 'ice-cubes' },
          options: [
            { id: 'a', text: 'Biến đổi hoá học, vì viên đá đã biến mất' },
            { id: 'b', text: 'Biến đổi vật lí, vì nước vẫn là nước' },
            { id: 'c', text: 'Không có biến đổi nào cả' },
          ],
          correctOptionId: 'b',
          explanation:
            'Viên đá không biến mất, nó chỉ đổi từ thể rắn sang thể lỏng. Trước và sau đều là H₂O. Không có chất mới nên đây là biến đổi vật lí.',
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
            'Nhiệt làm các chất trong trứng biến thành chất khác. Màu mới và mùi mới là dấu hiệu cho thấy có chất mới sinh ra, nên đây là biến đổi hoá học. Còn hoà tan thì phải có một chất tan vào chất khác, ở đây không có.',
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
            { id: 'i1', text: 'Viên đá chảy thành nước', image: 'ice-cubes', groupId: 'physical' },
            {
              id: 'i2',
              text: 'Đinh sắt bị gỉ, phủ một lớp nâu đỏ xốp',
              image: 'rusty-nail',
              groupId: 'chemical',
            },
            { id: 'i3', text: 'Đường tan trong trà', image: 'sugar-tea', groupId: 'physical' },
            {
              id: 'i4',
              text: 'Than cháy thành tro và khí',
              image: 'charcoal-grill',
              groupId: 'chemical',
            },
            { id: 'i5', text: 'Quần áo ướt khô đi', image: 'wet-clothes', groupId: 'physical' },
            { id: 'i6', text: 'Trứng rán chín', image: 'frying-egg', groupId: 'chemical' },
          ],
          explanation:
            'Nóng chảy, hoà tan, bay hơi chỉ làm chất đổi dạng, chất vẫn là chất cũ: đó là biến đổi vật lí. Gỉ, cháy, rán chín tạo ra chất mới, có màu, mùi hay tính chất khác hẳn: đó là biến đổi hoá học.',
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
            'Cây đinh sắt để ngoài mưa phủ một lớp gỉ nâu đỏ. Thành phần chính của gỉ là iron(III) oxide, công thức Fe₂O₃. Vì sao đây là biến đổi hoá học?',
          visual: { id: 'v', moleculeId: 'fe2o3' },
          options: [
            { id: 'a', text: 'Vì gỉ là chất mới, khác hẳn sắt ban đầu' },
            { id: 'b', text: 'Vì cây đinh bị ướt' },
            { id: 'c', text: 'Vì cây đinh đổi hình dạng' },
          ],
          correctOptionId: 'a',
          explanation:
            'Trong không khí ẩm, các nguyên tử iron (sắt) đã kết hợp với oxygen thành iron(III) oxide: một chất mới, giòn, xốp, màu nâu đỏ, không còn tính chất của sắt. Chỉ bị ướt hay đổi hình dạng thôi thì sắt vẫn là sắt.',
          conceptIds: ['chemical-change', 'oxidation'],
        },
        {
          id: 'u3-l5-e6',
          type: 'true-false',
          prompt:
            'Vỏ trứng chủ yếu là calcium carbonate (CaCO₃). Đập quả trứng, vỏ vỡ thành nhiều mảnh. Mỗi mảnh vỏ vẫn là calcium carbonate.',
          visual: { id: 'v', moleculeId: 'caco3' },
          answer: true,
          explanation:
            'Đập vỡ chỉ làm đổi kích thước và hình dạng, không có chất mới nào sinh ra. Mảnh vỏ nhỏ đến đâu vẫn là calcium carbonate, nên đây là biến đổi vật lí.',
          conceptIds: ['physical-change'],
        },
        {
          id: 'u3-l5-e7',
          type: 'match-pairs',
          prompt: 'Nối mỗi việc với điều xảy ra với chất',
          pairs: [
            {
              left: { id: 'l1', text: 'Tờ giấy bị xé' },
              right: { id: 'r1', text: 'Vẫn là giấy, chỉ nhỏ hơn' },
            },
            {
              left: { id: 'l2', text: 'Tờ giấy bị cháy' },
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
            'Xé, đập vỡ, nóng chảy không tạo ra chất mới, dù có khi không làm lại như cũ được. Cháy thì khác: giấy biến thành tro, khói và các chất khí.',
          conceptIds: ['physical-change', 'chemical-change'],
        },
        {
          id: 'u3-l5-e8',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Biến đổi không tạo ra chất mới là biến đổi ___. Biến đổi có tạo ra chất mới là biến đổi ___.',
          blanks: [
            { accepted: ['vật lí'], wordBank: ['vật lí', 'hoá học', 'sinh học'] },
            { accepted: ['hoá học'], wordBank: ['vật lí', 'hoá học', 'sinh học'] },
          ],
          explanation:
            'Câu hỏi quyết định luôn là: có chất mới sinh ra hay không? Không có là biến đổi vật lí, có là biến đổi hoá học.',
          conceptIds: ['physical-change', 'chemical-change'],
        },
        {
          id: 'u3-l5-e9',
          type: 'mcq',
          prompt: 'Nước đang sôi, bọt nổi lên ùng ục. Bọt đó là gì?',
          visual: { id: 'v', image: 'boiling-kettle' },
          options: [
            { id: 'a', text: 'Hơi nước, tức vẫn là H₂O ở thể khí' },
            { id: 'b', text: 'Khí hydrogen và khí oxygen do nước bị tách ra' },
            { id: 'c', text: 'Không khí từ bên ngoài chui vào nước' },
          ],
          correctOptionId: 'a',
          explanation:
            'Sôi chỉ là nước chuyển từ thể lỏng sang thể khí ngay trong lòng nó, nên bọt là hơi nước. Phân tử H₂O không bị tách ra, và không khí cũng không chui vào. Không có chất mới nên sôi là biến đổi vật lí. Thấy sủi bọt chưa chắc là có chất mới: phải xem bọt đó là chất gì.',
          conceptIds: ['physical-change', 'state-change'],
        },
        {
          id: 'u3-l5-e10',
          type: 'order-steps',
          prompt: 'Câu chuyện của một cây nến. Sắp xếp theo thứ tự',
          steps: [
            { id: 's1', text: 'Que diêm châm lửa vào bấc nến' },
            { id: 's2', text: 'Sáp quanh bấc nóng chảy thành chất lỏng' },
            { id: 's3', text: 'Sáp lỏng thấm lên bấc và chuyển thành hơi' },
            { id: 's4', text: 'Hơi sáp cháy với oxygen, tạo ra khí carbon dioxide và hơi nước' },
          ],
          explanation:
            'Nóng chảy và chuyển thành hơi là biến đổi vật lí: vẫn là sáp. Chỉ ở bước cuối, khi sáp cháy, mới có chất mới sinh ra. Đó là một phản ứng hoá học, chủ đề của Unit 4.',
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
              left: { id: 'l1', text: 'Miếng bơ chảy ra trên lát bánh mì nóng' },
              right: { id: 'r1', text: 'Nóng chảy' },
            },
            {
              left: { id: 'l2', text: 'Vũng nước mưa trên sân khô dần dưới nắng' },
              right: { id: 'r2', text: 'Bay hơi' },
            },
            {
              left: { id: 'l3', text: 'Gương nhà tắm mờ đi khi có người tắm nước nóng' },
              right: { id: 'r3', text: 'Ngưng tụ' },
            },
            {
              left: { id: 'l4', text: 'Mỡ trong bát canh để nguội đóng lại thành váng trắng' },
              right: { id: 'r4', text: 'Đông đặc' },
            },
          ],
          explanation:
            'Bơ từ rắn thành lỏng là nóng chảy. Nước mưa từ lỏng thành hơi là bay hơi. Hơi nước gặp mặt gương mát, tụ thành những giọt li ti là ngưng tụ. Mỡ lỏng nguội đi rồi cứng lại là đông đặc.',
          conceptIds: ['state-change'],
        },
        {
          id: 'u3-cp-e13',
          type: 'mcq',
          prompt:
            'Bình khí của thợ lặn nhỏ gọn mà đủ khí để thở dưới nước khá lâu, vì người ta đã nén rất nhiều không khí vào bình. Vì sao chất khí nén được, còn nước thì rất khó nén?',
          options: [
            { id: 'a', text: 'Vì từng hạt khí mềm, bị ép thì nhỏ lại' },
            { id: 'b', text: 'Vì các hạt khí nhẹ hơn các phân tử nước' },
            { id: 'c', text: 'Vì các hạt khí ở rất xa nhau, còn nhiều khoảng trống' },
          ],
          correctOptionId: 'c',
          explanation:
            'Trong chất khí, các hạt ở rất xa nhau và bay tự do, nên ép lại gần nhau được. Khi bị nén, từng hạt không nhỏ đi, chỉ khoảng trống giữa chúng hẹp lại. Trong nước lỏng, các phân tử đã ở sát nhau sẵn nên rất khó nén. Hạt nặng hay nhẹ không quyết định chuyện này.',
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
          prompt: 'Ở nhiệt độ phòng, mỗi chất ở thể nào?',
          groups: [
            { id: 'solid', label: 'Rắn' },
            { id: 'liquid', label: 'Lỏng' },
            { id: 'gas', label: 'Khí' },
          ],
          items: [
            { id: 'i1', moleculeId: 'fe', text: 'Iron (sắt)', groupId: 'solid' },
            { id: 'i2', moleculeId: 'h2o', text: 'Nước', groupId: 'liquid' },
            { id: 'i3', moleculeId: 'o2', text: 'Khí oxygen', groupId: 'gas' },
            { id: 'i4', moleculeId: 'nacl', text: 'Sodium chloride (muối ăn)', groupId: 'solid' },
            { id: 'i5', moleculeId: 'c2h6o', text: 'Ethanol (cồn)', groupId: 'liquid' },
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
          prompt:
            'Bổ một quả mít chín trong bếp, lát sau cả nhà đều ngửi thấy. Mùi mít tự lan đi nhờ hiện tượng nào?',
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
          id: 'u3-cp-e14',
          type: 'true-false',
          prompt:
            'Nồi nước luộc rau đang sôi. Vặn lửa to hơn nữa thì nước trong nồi nóng lên quá 100 °C rất nhiều.',
          answer: false,
          explanation:
            'Trong lúc sôi, nhiệt độ của nước giữ nguyên ở khoảng 100 °C. Lửa to hơn chỉ làm nước chuyển thành hơi nhanh hơn, nồi cạn nhanh hơn. Nước đá đang nóng chảy cũng vậy: nó giữ nguyên 0 °C cho tới khi chảy hết.',
          conceptIds: ['state-change'],
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
            { id: 'i1', text: 'Sáp nến cháy trong ngọn lửa', image: 'candle', groupId: 'chemical' },
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
          prompt: 'Điều gì cho biết chắc chắn một biến đổi là biến đổi hoá học?',
          options: [
            { id: 'a', text: 'Chất đổi hình dạng' },
            { id: 'b', text: 'Chất chuyển thể' },
            { id: 'c', text: 'Có chất mới được tạo ra' },
          ],
          correctOptionId: 'c',
          explanation:
            'Đổi hình dạng hay chuyển thể vẫn là chất cũ. Chỉ khi có chất mới sinh ra thì mới là biến đổi hoá học.',
          conceptIds: ['chemical-change'],
        },
      ],
      baseXp: 20,
    },
  ],
}
