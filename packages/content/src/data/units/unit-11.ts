import type { UnitInput } from '../../schema/lesson.js'

/**
 * Unit 11: Dung dịch và tách chất
 * 6 bài học + checkpoint: chất tan và dung môi (nối tiếp Unit 3), dung dịch bão hoà và độ tan,
 * nồng độ phần trăm, nồng độ mol, huyền phù và nhũ tương, tách chất (lọc, cô cạn, chiết).
 */
export const unit11: UnitInput = {
  id: 'u11-solutions',
  order: 11,
  title: 'Dung dịch và tách chất',
  tagline: 'Tan bao nhiêu, đậm cỡ nào, tách ra sao',
  color: '#C08A3E',
  lessons: [
    // ───────────────────────── Bài 1: Chất tan, dung môi, dung dịch ─────────────────────────
    {
      id: 'u11-l1-solutions',
      title: 'Trong nước biển có gì?',
      intro: {
        title: 'Ngụm nước biển mặn chát',
        story: [
          'Tắm biển, lỡ uống phải một ngụm nước, bạn thấy mặn chát. Nhưng múc một cốc nước biển lên nhìn thì nó trong veo, chẳng thấy hạt muối nào. Muối trốn ở đâu?',
          'Phóng to lên: muối ăn (sodium chloride) đã tách thành các ion Na⁺ và Cl⁻, bơi lẫn giữa các phân tử nước. Chúng nhỏ tới mức mắt không thấy, và có mặt đều ở mọi chỗ. Ở Unit 3 bạn đã gọi tên ba vai này: muối là chất tan, nước là dung môi, nước biển là dung dịch.',
          'Chất tan không nhất thiết là chất rắn. Trong nước biển còn có khí oxygen hoà tan, nhờ đó cá mới thở được dưới nước. Nước có ga là khí carbon dioxide tan trong nước. Giấm ăn là acetic acid, một chất lỏng, tan trong nước. Tất cả đều là dung dịch: hỗn hợp lỏng đồng nhất của các chất đã tan vào nhau.',
          'Dung môi cũng không chỉ có nước: trong chai nước hoa, ethanol (cồn) là dung môi hoà tan các chất thơm. Và hãy nhớ, khi tan, chất tan không biến mất. Hoà tan hết 5 g muối vào 100 g nước, bạn được đúng 105 g dung dịch.',
        ],
        visual: { type: 'molecule', moleculeId: 'nacl-aq', scene: 'sea-wave' },
      },
      exercises: [
        {
          id: 'u11-l1-e1',
          type: 'sort',
          prompt:
            'Chất bị hoà tan là chất tan, chất hoà tan nó là dung môi. Xếp mỗi chất vào đúng vai',
          groups: [
            { id: 'solute', label: 'Chất tan' },
            { id: 'solvent', label: 'Dung môi' },
          ],
          items: [
            { id: 'i1', text: 'Muối trong nước biển', image: 'sea-wave', groupId: 'solute' },
            { id: 'i2', text: 'Nước trong nước biển', groupId: 'solvent' },
            { id: 'i3', text: 'Khí oxygen trong nước bể cá', groupId: 'solute' },
            { id: 'i4', text: 'Đường trong cốc nước đường', groupId: 'solute' },
            { id: 'i5', text: 'Nước trong cốc nước đường', groupId: 'solvent' },
          ],
          explanation:
            'Muối, đường và khí oxygen đều bị nước hoà tan nên là chất tan. Nước hoà tan chúng nên là dung môi. Chất tan có thể là chất rắn như muối, đường, mà cũng có thể là chất khí như oxygen.',
          conceptIds: ['solution'],
        },
        {
          id: 'u11-l1-e2',
          type: 'mcq',
          prompt: 'Cá thở dưới nước nhờ khí oxygen. Khí oxygen ấy ở dạng nào trong nước?',
          visual: { id: 'v', image: 'fish-tank' },
          options: [
            { id: 'a', text: 'Các phân tử O₂ tan lẫn giữa các phân tử nước' },
            { id: 'b', text: 'Nguyên tử O nằm sẵn trong mỗi phân tử H₂O' },
            { id: 'c', text: 'Những bong bóng khí to mà cá nuốt lấy' },
          ],
          correctOptionId: 'a',
          explanation:
            'Một ít khí oxygen từ không khí tan vào nước, thành các phân tử O₂ nằm lẫn giữa các phân tử nước. Mang cá lấy chính các phân tử O₂ đã tan này. Nguyên tử O trong H₂O thì liên kết chặt với hydrogen, cá không dùng được. Máy sục khí tạo bong bóng để oxygen có thêm chỗ tiếp xúc và tan vào nước nhanh hơn.',
          conceptIds: ['solution'],
        },
        {
          id: 'u11-l1-e3',
          type: 'true-false',
          prompt: 'Chỉ chất rắn mới tan được trong nước.',
          answer: false,
          explanation:
            'Chất khí và chất lỏng cũng tan được trong nước. Nước có ga chứa khí carbon dioxide hoà tan, nước ao hồ chứa khí oxygen hoà tan, còn giấm ăn là acetic acid (một chất lỏng) tan trong nước.',
          conceptIds: ['solution'],
        },
        {
          id: 'u11-l1-e4',
          type: 'fill-blank',
          prompt: 'Khi tan, chất tan không biến mất mà lẫn vào dung môi. Chọn số đúng',
          template: 'Hoà tan hết 5 g muối vào 100 g nước, bạn được ___ g dung dịch.',
          blanks: [{ accepted: ['105'], wordBank: ['95', '100', '105'] }],
          explanation:
            'Khối lượng dung dịch bằng khối lượng dung môi cộng khối lượng chất tan: 100 + 5 = 105 g. Muối không còn nhìn thấy được nhưng mọi ion của nó vẫn nằm trong cốc, nên cốc nước nặng thêm đúng 5 g.',
          conceptIds: ['solution', 'conservation-of-mass'],
        },
        {
          id: 'u11-l1-e5',
          type: 'match-pairs',
          prompt: 'Nối mỗi dung dịch với chất tan có trong nó',
          pairs: [
            {
              left: { id: 'l1', text: 'Nước biển' },
              right: { id: 'r1', text: 'Sodium chloride' },
            },
            {
              left: { id: 'l2', text: 'Giấm ăn' },
              right: { id: 'r2', text: 'Acetic acid' },
            },
            {
              left: { id: 'l3', text: 'Nước khoáng có ga' },
              right: { id: 'r3', text: 'Carbon dioxide' },
            },
            {
              left: { id: 'l4', text: 'Nước mía' },
              right: { id: 'r4', text: 'Saccharose' },
            },
          ],
          explanation:
            'Nước biển mặn vì sodium chloride (muối ăn). Giấm chua vì acetic acid. Bọt trong nước có ga là khí carbon dioxide thoát ra. Nước mía ngọt vì saccharose (đường mía). Bốn chất tan thuộc đủ ba thể: rắn, lỏng và khí.',
          conceptIds: ['solution'],
        },
        {
          id: 'u11-l1-e6',
          type: 'mcq',
          prompt:
            'Nước hoa gồm các chất thơm hoà tan trong ethanol (cồn). Trong chai nước hoa, ethanol đóng vai gì?',
          visual: { id: 'v', image: 'perfume' },
          options: [
            { id: 'a', text: 'Chất tan' },
            { id: 'b', text: 'Dung môi' },
            { id: 'c', text: 'Dung dịch' },
          ],
          correctOptionId: 'b',
          explanation:
            'Ethanol hoà tan các chất thơm nên ethanol là dung môi, các chất thơm là chất tan. Cả chai nước hoa mới là dung dịch. Nước là dung môi quen thuộc nhất nhưng không phải dung môi duy nhất.',
          conceptIds: ['solution'],
        },
        {
          id: 'u11-l1-e7',
          type: 'true-false',
          prompt:
            'Trong cốc nước muối đã khuấy tan hết, các ion của muối dồn xuống đáy nên nước ở đáy mặn hơn nước ở trên.',
          answer: false,
          explanation:
            'Dung dịch là hỗn hợp đồng nhất. Các ion Na⁺ và Cl⁻ chuyển động không ngừng cùng các phân tử nước nên phân tán đều khắp cốc. Ngụm trên cùng mặn như ngụm dưới cùng, và để yên bao lâu cũng vậy.',
          conceptIds: ['solution', 'particle-motion'],
        },
        {
          id: 'u11-l1-e8',
          type: 'mcq',
          prompt:
            'Khuấy đều một cốc nước đường và một cốc nước lẫn cát. Vì sao chỉ cốc nước đường là dung dịch?',
          options: [
            {
              id: 'a',
              text: 'Vì đường có vị ngọt, còn cát không có vị gì',
            },
            {
              id: 'b',
              text: 'Vì đường nhẹ hơn cát nên không chìm xuống đáy',
            },
            {
              id: 'c',
              text: 'Vì đường tách thành từng phân tử lẫn đều vào nước, còn cát vẫn là hạt',
            },
          ],
          correctOptionId: 'c',
          explanation:
            'Dung dịch phải đồng nhất: chất tan tách tới từng phân tử hay ion và lẫn đều vào dung môi. Đường làm được điều đó. Cát không tan, vẫn là những hạt nhìn thấy được và chìm xuống ngay khi bạn ngừng khuấy.',
          conceptIds: ['solution', 'mixture'],
        },
        {
          id: 'u11-l1-e9',
          type: 'sort',
          prompt:
            'Dung dịch là hỗn hợp đồng nhất, nên phải có ít nhất hai chất đã tan vào nhau. Thứ nào là dung dịch?',
          groups: [
            { id: 'yes', label: 'Dung dịch' },
            { id: 'no', label: 'Không phải dung dịch' },
          ],
          items: [
            { id: 'i1', text: 'Nước muối', groupId: 'yes' },
            { id: 'i2', text: 'Giấm ăn', image: 'vinegar-bottle', groupId: 'yes' },
            { id: 'i3', text: 'Nước lẫn cát', groupId: 'no' },
            { id: 'i4', text: 'Dầu ăn đổ vào nước', image: 'oil-on-water', groupId: 'no' },
            { id: 'i5', text: 'Nước cất, chỉ gồm các phân tử nước', groupId: 'no' },
            { id: 'i6', text: 'Nước khoáng có ga', groupId: 'yes' },
          ],
          explanation:
            'Nước muối, giấm và nước có ga đều có chất tan lẫn đều trong nước. Cát và dầu ăn không tan trong nước nên hỗn hợp không đồng nhất. Nước cất thì chỉ có một chất nên là chất tinh khiết, không phải hỗn hợp, vì thế cũng không phải dung dịch.',
          conceptIds: ['solution', 'mixture'],
        },
        {
          id: 'u11-l1-e10',
          type: 'true-false',
          prompt: 'Muối tan vào nước là một biến đổi vật lí: không có chất mới nào sinh ra.',
          answer: true,
          explanation:
            'Đúng như bạn đã học ở Unit 3. Trong nước muối vẫn chỉ có muối và nước. Cho nước bay hơi hết, bạn thu lại được đúng lượng muối ban đầu. Bài cuối của Unit này sẽ dùng chính điều đó để tách muối ra.',
          conceptIds: ['solution', 'physical-change'],
        },
      ],
      unlocksMolecules: ['nacl-aq'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 2: Dung dịch bão hoà và độ tan ─────────────────────────
    {
      id: 'u11-l2-solubility',
      title: 'Tan tới đâu thì dừng?',
      intro: {
        title: 'Thìa muối không chịu tan',
        story: [
          'Bạn pha nước muối: thêm một thìa, khuấy, tan hết. Thêm thìa nữa, vẫn tan. Nhưng tới một lúc, dù khuấy mỏi tay, vẫn còn một lớp muối trắng nằm lì ở đáy cốc.',
          'Dung dịch không thể hoà tan thêm chất tan nữa ở nhiệt độ đó gọi là dung dịch bão hoà. Còn hoà tan thêm được thì gọi là dung dịch chưa bão hoà. Phóng to lớp muối ở đáy cốc bão hoà: các ion vẫn xếp khít thành tinh thể. Cứ có ion nào rời tinh thể vào nước thì lại có ion khác từ nước quay về bám vào, nên lớp muối không vơi đi.',
          'Mỗi chất có một mức riêng, gọi là độ tan: số gam chất đó tan được trong 100 g nước để tạo thành dung dịch bão hoà, ở một nhiệt độ xác định. Ở 25 °C, độ tan của muối ăn khoảng 36 g, còn của đường khoảng 200 g.',
          'Nhiệt độ làm độ tan thay đổi. Với phần lớn chất rắn, nước càng nóng thì tan được càng nhiều: nước sôi hoà tan được lượng đường nhiều hơn gấp đôi so với nước ở nhiệt độ phòng. Chất khí thì ngược lại: nước càng ấm, khí tan được càng ít. Vì thế lon nước ngọt để ấm khi mở sẽ sủi bọt mạnh hơn lon ướp lạnh.',
        ],
        visual: { type: 'molecule', moleculeId: 'nacl', scene: 'salt-at-bottom' },
      },
      exercises: [
        {
          id: 'u11-l2-e1',
          type: 'mcq',
          prompt:
            'Khuấy mãi mà ở đáy cốc nước muối vẫn còn một lớp muối không tan. Dung dịch trong cốc lúc này gọi là gì?',
          visual: { id: 'v', image: 'salt-at-bottom' },
          options: [
            { id: 'a', text: 'Dung dịch bão hoà' },
            { id: 'b', text: 'Dung dịch chưa bão hoà' },
            { id: 'c', text: 'Dung môi' },
          ],
          correctOptionId: 'a',
          explanation:
            'Còn muối dư ở đáy dù đã khuấy kĩ nghĩa là nước không hoà tan thêm được nữa ở nhiệt độ này: dung dịch đã bão hoà. Nếu thêm muối mà vẫn tan hết thì dung dịch chưa bão hoà.',
          conceptIds: ['solubility'],
        },
        {
          id: 'u11-l2-e2',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Độ tan của một chất trong nước là số gam chất đó tan được trong ___ g nước để tạo thành dung dịch ___, ở một nhiệt độ xác định.',
          blanks: [
            { accepted: ['100'], wordBank: ['1', '100', '1000'] },
            { accepted: ['bão hoà'], wordBank: ['bão hoà', 'chưa bão hoà', 'loãng'] },
          ],
          explanation:
            'Độ tan là mức tối đa, nên phải đo ở lúc dung dịch vừa bão hoà. Người ta quy ước tính cho 100 g nước để so sánh được các chất với nhau. Phải nói rõ nhiệt độ vì đổi nhiệt độ thì độ tan đổi theo.',
          conceptIds: ['solubility'],
        },
        {
          id: 'u11-l2-e3',
          type: 'sort',
          prompt: 'Khi nước ấm lên, chất nào tan được nhiều hơn, chất nào tan được ít đi?',
          groups: [
            { id: 'more', label: 'Tan được nhiều hơn' },
            { id: 'less', label: 'Tan được ít đi' },
          ],
          items: [
            { id: 'i1', text: 'Đường', image: 'sugar-tea', groupId: 'more' },
            { id: 'i2', text: 'Khí carbon dioxide', image: 'soda-can', groupId: 'less' },
            { id: 'i3', text: 'Khí oxygen', groupId: 'less' },
          ],
          explanation:
            'Đường là chất rắn, và như phần lớn chất rắn, nó tan được nhiều hơn trong nước nóng. Carbon dioxide và oxygen là chất khí: nước càng ấm thì chúng tan được càng ít và thoát bớt ra ngoài.',
          conceptIds: ['solubility'],
        },
        {
          id: 'u11-l2-e4',
          type: 'mcq',
          prompt:
            'Ở 25 °C, độ tan của muối ăn khoảng 36 g, tức là 100 g nước hoà tan được tối đa khoảng 36 g muối. Vậy 200 g nước ở 25 °C hoà tan được tối đa khoảng bao nhiêu gam muối?',
          options: [
            { id: 'a', text: '18 g' },
            { id: 'b', text: '36 g' },
            { id: 'c', text: '72 g' },
          ],
          correctOptionId: 'c',
          explanation:
            'Lượng nước gấp đôi thì hoà tan được lượng muối gấp đôi: 36 × 2 = 72 g. Độ tan 36 g là tính cho 100 g nước, không phải cho mọi cốc nước to nhỏ.',
          conceptIds: ['solubility'],
        },
        {
          id: 'u11-l2-e5',
          type: 'true-false',
          prompt:
            'Cốc nước muối đã bão hoà. Chỉ cần khuấy thật mạnh và thật lâu thì phần muối ở đáy sẽ tan hết.',
          answer: false,
          explanation:
            'Khuấy chỉ giúp chất tan tan nhanh hơn, không giúp tan được nhiều hơn. Lượng tối đa tan được do nhiệt độ và bản chất của chất tan, dung môi quyết định. Muốn phần muối ở đáy tan hết, phải thêm nước.',
          conceptIds: ['solubility'],
        },
        {
          id: 'u11-l2-e6',
          type: 'mcq',
          prompt:
            'Ở 25 °C, độ tan của muối ăn khoảng 36 g. Bạn cho 40 g muối vào 100 g nước ở nhiệt độ này rồi khuấy kĩ. Chuyện gì xảy ra?',
          options: [
            { id: 'a', text: 'Cả 40 g muối tan hết' },
            { id: 'b', text: 'Khoảng 36 g tan, còn khoảng 4 g nằm lại ở đáy' },
            { id: 'c', text: 'Muối không tan chút nào vì quá nhiều' },
          ],
          correctOptionId: 'b',
          explanation:
            '100 g nước chỉ hoà tan được tối đa khoảng 36 g muối. Phần vượt mức, 40 − 36 = 4 g, nằm lại ở đáy. Phần nước muối phía trên là dung dịch bão hoà.',
          conceptIds: ['solubility'],
        },
        {
          id: 'u11-l2-e7',
          type: 'fill-blank',
          prompt:
            'Độ tan tính cho 100 g nước. Nếu đo với lượng nước khác, bạn quy về 100 g. Chọn số đúng',
          template:
            'Ở 20 °C, 50 g nước hoà tan được tối đa 18 g muối ăn. Vậy 100 g nước hoà tan được tối đa ___ g, đó chính là độ tan của muối ăn ở 20 °C.',
          blanks: [{ accepted: ['36'], wordBank: ['9', '18', '36'] }],
          explanation:
            '100 g nước gấp đôi 50 g nước nên hoà tan được gấp đôi lượng muối: 18 × 2 = 36 g. Bạn cũng thấy độ tan của muối ăn ở 20 °C và 25 °C gần như bằng nhau. Muối ăn là một chất rắn có độ tan thay đổi rất ít theo nhiệt độ.',
          conceptIds: ['solubility'],
        },
        {
          id: 'u11-l2-e8',
          type: 'mcq',
          prompt: 'Trưa hè oi bức, cá trong ao hay ngoi lên sát mặt nước để đớp không khí. Vì sao?',
          options: [
            { id: 'a', text: 'Nước ấm lên nên khí oxygen tan trong nước ít đi' },
            { id: 'b', text: 'Nước ấm lên nên khí oxygen tan trong nước nhiều quá' },
            { id: 'c', text: 'Nước ấm lên nên các phân tử nước mất bớt nguyên tử oxygen' },
          ],
          correctOptionId: 'a',
          explanation:
            'Nước càng ấm, chất khí tan được càng ít. Lượng oxygen hoà tan trong ao giảm đi, cá thiếu oxygen nên ngoi lên lớp nước sát mặt, nơi tiếp xúc với không khí. Phân tử nước thì vẫn nguyên là H₂O dù nóng hay lạnh.',
          conceptIds: ['solubility', 'solution'],
        },
        {
          id: 'u11-l2-e9',
          type: 'true-false',
          prompt:
            'Dung dịch bão hoà nào cũng đậm đặc, kể cả nước vôi trong, nơi 100 g nước chỉ hoà tan được chưa tới 0,2 g calcium hydroxide là đã bão hoà.',
          answer: false,
          explanation:
            'Bão hoà chỉ có nghĩa là không hoà tan thêm được nữa, không có nghĩa là đậm đặc. Calcium hydroxide rất ít tan, nên nước vôi trong đã bão hoà mà vẫn rất loãng. Ngược lại, 100 g nước hoà tan 100 g đường là rất đặc mà vẫn chưa bão hoà.',
          conceptIds: ['solubility'],
        },
        {
          id: 'u11-l2-e10',
          type: 'order-steps',
          prompt:
            'Người ta làm đường phèn nhờ độ tan của đường giảm khi nước nguội đi. Sắp xếp các bước theo thứ tự',
          steps: [
            { id: 's1', text: 'Đun nước thật nóng và hoà tan vào đó thật nhiều đường' },
            { id: 's2', text: 'Để nồi nước đường nguội dần, độ tan của đường giảm theo' },
            { id: 's3', text: 'Nước nguội không còn giữ nổi hết lượng đường đã tan lúc nóng' },
            {
              id: 's4',
              text: 'Phần đường dư tách ra khỏi dung dịch, kết thành những viên đường phèn',
              image: 'rock-sugar',
            },
          ],
          explanation:
            'Nước nóng hoà tan được nhiều đường hơn nước nguội. Khi dung dịch nguội đi, lượng đường vượt quá độ tan ở nhiệt độ mới phải tách ra, và các phân tử đường xếp lại dần thành tinh thể to. Việc này mất nhiều ngày, nên viên đường phèn mới to và trong như vậy.',
          conceptIds: ['solubility'],
        },
      ],
      unlocksMolecules: [],
      baseXp: 10,
    },

    // ───────────────────────── Bài 3: Nồng độ phần trăm ─────────────────────────
    {
      id: 'u11-l3-percent',
      title: 'Đậm hay nhạt: nồng độ phần trăm',
      intro: {
        title: 'Con số 0,9% trên chai nước muối',
        story: [
          'Chai nước muối sinh lí trong tủ thuốc ghi "Sodium chloride 0,9%". Con số ấy cho biết dung dịch đậm hay nhạt. Mức đậm nhạt của một dung dịch gọi là nồng độ.',
          'Nồng độ phần trăm, kí hiệu C%, cho biết trong 100 g dung dịch có bao nhiêu gam chất tan. Nước muối 0,9% nghĩa là cứ 100 g dung dịch thì có 0,9 g muối, còn lại 99,1 g là nước.',
          'Cách tính: C% = khối lượng chất tan : khối lượng dung dịch × 100%. Hãy để ý số chia: đó là khối lượng của cả dung dịch, tức chất tan cộng dung môi, chứ không phải của riêng nước. Hoà tan 10 g đường vào 90 g nước, bạn được 100 g dung dịch, nên C% = 10 : 100 × 100% = 10%.',
          'Nồng độ là chuyện tỉ lệ, không phải chuyện nhiều hay ít. Rót nửa chai nước muối ra cốc, phần trong cốc và phần còn lại trong chai đều vẫn là 0,9%, vì dung dịch thì chỗ nào cũng như nhau.',
        ],
        visual: { type: 'molecule', moleculeId: 'nacl-aq', scene: 'saline-bottle' },
      },
      exercises: [
        {
          id: 'u11-l3-e1',
          type: 'mcq',
          prompt: 'Nước muối sinh lí có nồng độ 0,9%. Con số này cho biết điều gì?',
          visual: { id: 'v', image: 'saline-bottle' },
          options: [
            { id: 'a', text: 'Cứ 100 g nước thì có 0,9 g muối' },
            { id: 'b', text: 'Cứ 100 g dung dịch thì có 0,9 g muối' },
            { id: 'c', text: 'Cả chai có tổng cộng 0,9 g muối' },
          ],
          correctOptionId: 'b',
          explanation:
            'Nồng độ phần trăm tính trên 100 g dung dịch, tức là cả muối lẫn nước. Nó là một tỉ lệ nên đúng cho chai to cũng như chai nhỏ, không cho biết tổng lượng muối trong chai.',
          conceptIds: ['percent-concentration'],
        },
        {
          id: 'u11-l3-e2',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Nồng độ phần trăm bằng khối lượng ___ chia cho khối lượng ___, rồi nhân với 100%.',
          blanks: [
            { accepted: ['chất tan'], wordBank: ['chất tan', 'dung môi', 'dung dịch'] },
            { accepted: ['dung dịch'], wordBank: ['chất tan', 'dung môi', 'dung dịch'] },
          ],
          explanation:
            'Số bị chia là khối lượng chất tan. Số chia là khối lượng của cả dung dịch, gồm chất tan cộng dung môi. Chia cho khối lượng dung môi là lỗi hay gặp nhất khi tính nồng độ phần trăm.',
          conceptIds: ['percent-concentration'],
        },
        {
          id: 'u11-l3-e3',
          type: 'true-false',
          prompt:
            'Rót bỏ một nửa cốc nước đường 10%, phần nước đường còn lại trong cốc chỉ còn nồng độ 5%.',
          answer: false,
          explanation:
            'Phần còn lại vẫn là 10%. Khi rót, đường và nước đi ra cùng nhau theo đúng tỉ lệ cũ, vì dung dịch đồng nhất. Lượng đường giảm một nửa, lượng dung dịch cũng giảm một nửa, nên tỉ lệ không đổi.',
          conceptIds: ['percent-concentration', 'solution'],
        },
        {
          id: 'u11-l3-e4',
          type: 'mcq',
          prompt:
            'Hoà tan hết 20 g đường vào 180 g nước, được 200 g dung dịch. Nồng độ phần trăm của đường trong dung dịch là bao nhiêu?',
          options: [
            { id: 'a', text: '10%' },
            { id: 'b', text: '11%' },
            { id: 'c', text: '20%' },
          ],
          correctOptionId: 'a',
          explanation:
            'C% = 20 : 200 × 100% = 10%. Nếu ra khoảng 11% thì bạn đã chia cho 180 g nước thay vì 200 g dung dịch. Còn 20 chỉ là số gam đường, chưa phải nồng độ.',
          conceptIds: ['percent-concentration'],
        },
        {
          id: 'u11-l3-e5',
          type: 'order-steps',
          prompt:
            'Hoà tan hết 25 g muối vào 100 g nước. Sắp xếp các bước tính nồng độ phần trăm của dung dịch',
          steps: [
            { id: 's1', text: 'Tìm khối lượng dung dịch: 25 + 100 = 125 g' },
            { id: 's2', text: 'Chia khối lượng chất tan cho khối lượng dung dịch: 25 : 125 = 0,2' },
            { id: 's3', text: 'Nhân với 100%: 0,2 × 100% = 20%' },
          ],
          explanation:
            'Đề cho khối lượng nước chứ chưa cho khối lượng dung dịch, nên việc đầu tiên là cộng chất tan với dung môi. Sau đó mới chia và nhân với 100%. Kết quả là 20%, không phải 25%.',
          conceptIds: ['percent-concentration'],
        },
        {
          id: 'u11-l3-e6',
          type: 'fill-blank',
          prompt:
            'Biết nồng độ, bạn tính ngược được lượng chất tan: lấy khối lượng dung dịch nhân với nồng độ phần trăm rồi chia cho 100. Chọn số đúng',
          template: 'Trong 200 g nước đường 15% có ___ g đường.',
          blanks: [{ accepted: ['30'], wordBank: ['15', '30', '185'] }],
          explanation:
            '200 × 15 : 100 = 30 g. Cách nghĩ khác: 15% nghĩa là cứ 100 g dung dịch có 15 g đường, vậy 200 g dung dịch có 30 g đường. Phần còn lại, 170 g, là nước.',
          conceptIds: ['percent-concentration'],
        },
        {
          id: 'u11-l3-e7',
          type: 'mcq',
          prompt:
            'Nam hoà tan 50 g đường vào 150 g nước. Mai hoà tan 50 g đường vào 200 g nước. Cốc của ai có nồng độ đường cao hơn?',
          options: [
            { id: 'a', text: 'Cốc của Nam' },
            { id: 'b', text: 'Cốc của Mai' },
            { id: 'c', text: 'Hai cốc bằng nhau vì cùng có 50 g đường' },
          ],
          correctOptionId: 'a',
          explanation:
            'Cùng lượng đường mà ít nước hơn thì đậm hơn. Cốc của Nam: 50 : 200 × 100% = 25%. Cốc của Mai: 50 : 250 × 100% = 20%. Nồng độ phụ thuộc vào tỉ lệ giữa chất tan và dung dịch, không chỉ vào lượng chất tan.',
          conceptIds: ['percent-concentration'],
        },
        {
          id: 'u11-l3-e8',
          type: 'true-false',
          prompt: 'Hoà tan hết 10 g muối vào 100 g nước thì được dung dịch muối 10%.',
          answer: false,
          explanation:
            'Dung dịch nặng 100 + 10 = 110 g, nên nồng độ là 10 : 110 × 100%, khoảng 9,1%. Muốn được đúng 10% thì 10 g muối phải nằm trong 100 g dung dịch, tức là chỉ cần 90 g nước.',
          conceptIds: ['percent-concentration'],
        },
        {
          id: 'u11-l3-e9',
          type: 'match-pairs',
          prompt:
            'Bốn cốc đều có 5 g muối nhưng lượng dung dịch khác nhau. Nối mỗi cốc với nồng độ của nó',
          pairs: [
            {
              left: { id: 'l1', text: '5 g muối trong 25 g dung dịch' },
              right: { id: 'r1', text: '20%' },
            },
            {
              left: { id: 'l2', text: '5 g muối trong 50 g dung dịch' },
              right: { id: 'r2', text: '10%' },
            },
            {
              left: { id: 'l3', text: '5 g muối trong 100 g dung dịch' },
              right: { id: 'r3', text: '5%' },
            },
            {
              left: { id: 'l4', text: '5 g muối trong 200 g dung dịch' },
              right: { id: 'r4', text: '2,5%' },
            },
          ],
          explanation:
            '5 : 25 = 0,2 tức 20%. 5 : 50 = 0,1 tức 10%. 5 : 100 = 0,05 tức 5%. 5 : 200 = 0,025 tức 2,5%. Cùng một lượng muối, dung dịch càng nhiều thì càng loãng: lượng dung dịch gấp đôi thì nồng độ còn một nửa.',
          conceptIds: ['percent-concentration'],
        },
        {
          id: 'u11-l3-e10',
          type: 'order-steps',
          prompt:
            'Bạn cần pha 200 g nước đường 10%. Tính xong hết rồi mới cân đong. Sắp xếp các bước theo thứ tự',
          steps: [
            { id: 's1', text: 'Tính lượng đường: 200 × 10 : 100 = 20 g' },
            { id: 's2', text: 'Tính lượng nước: 200 − 20 = 180 g' },
            { id: 's3', text: 'Cân 20 g đường cho vào cốc' },
            { id: 's4', text: 'Rót 180 g nước vào cốc đã có đường' },
            { id: 's5', text: 'Khuấy cho tới khi đường tan hết' },
          ],
          explanation:
            'Từ nồng độ và khối lượng dung dịch, bạn tính ra lượng chất tan trước. Lượng nước là phần còn lại của dung dịch, không phải 200 g. Cân đường, thêm nước, khuấy tan là xong: 20 g đường trong 200 g dung dịch, đúng 10%.',
          conceptIds: ['percent-concentration'],
        },
      ],
      unlocksMolecules: [],
      baseXp: 10,
    },

    // ───────────────────────── Bài 4: Nồng độ mol ─────────────────────────
    {
      id: 'u11-l4-molarity',
      title: 'Đếm hạt trong một lít',
      intro: {
        title: 'Cùng 10 gam, khác số hạt',
        story: [
          'Pha hai ca nước, mỗi ca 1 lít: ca thứ nhất hoà tan 10 g muối ăn, ca thứ hai hoà tan 10 g đường. Cân thì bằng nhau, nhưng số hạt chất tan trong hai ca khác nhau xa. Một phân tử đường nặng gần gấp 6 lần một cặp ion Na⁺ và Cl⁻ của muối, nên 10 g đường có ít hạt hơn nhiều.',
          'Với nhà hoá học, số hạt mới là điều quan trọng, vì các chất phản ứng với nhau theo từng hạt. Ở Unit 10 bạn đã biết cách đếm hạt bằng mol: 1 mol là 6,022 × 10²³ hạt, và số mol n = m : M, với M là khối lượng mol của chất.',
          'Nồng độ mol cho biết trong 1 lít dung dịch có bao nhiêu mol chất tan. Cách tính: nồng độ mol = số mol chất tan : thể tích dung dịch tính bằng lít. Đơn vị là mol/L, viết gọn là M. Hoà tan 1 mol muối ăn thành 2 lít dung dịch thì nồng độ mol là 1 : 2 = 0,5 mol/L, viết là 0,5 M.',
          'Có hai chỗ dễ nhầm. Một: thể tích phải đổi ra lít, 500 mL là 0,5 L. Hai: đó là thể tích của cả dung dịch sau khi pha, không phải của lượng nước lúc đầu. Vì thế muốn có đúng 1 lít dung dịch, người ta hoà tan chất tan vào một ít nước trước, rồi mới thêm nước cho tới vạch 1 lít.',
        ],
        visual: { type: 'molecule', moleculeId: 'nacl-aq', scene: 'measuring-jug' },
      },
      exercises: [
        {
          id: 'u11-l4-e1',
          type: 'mcq',
          prompt: 'Nồng độ mol của một dung dịch cho biết điều gì?',
          options: [
            { id: 'a', text: 'Số mol chất tan có trong 1 lít dung dịch' },
            { id: 'b', text: 'Số gam chất tan có trong 100 g dung dịch' },
            { id: 'c', text: 'Số gam chất tan tối đa tan được trong 100 g nước' },
          ],
          correctOptionId: 'a',
          explanation:
            'Nồng độ mol đếm chất tan bằng mol và đo dung dịch bằng lít. Số gam chất tan trong 100 g dung dịch là nồng độ phần trăm. Số gam tối đa tan được trong 100 g nước là độ tan.',
          conceptIds: ['molar-concentration'],
        },
        {
          id: 'u11-l4-e2',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template: 'Nồng độ mol bằng số ___ chất tan chia cho ___ dung dịch tính bằng lít.',
          blanks: [
            { accepted: ['mol'], wordBank: ['mol', 'gam', 'lít'] },
            { accepted: ['thể tích'], wordBank: ['thể tích', 'khối lượng', 'nhiệt độ'] },
          ],
          explanation:
            'Nồng độ mol = số mol chất tan : thể tích dung dịch (lít). Khác với nồng độ phần trăm, ở đây chất tan được đếm bằng mol, còn dung dịch được đo bằng thể tích chứ không cân khối lượng.',
          conceptIds: ['molar-concentration'],
        },
        {
          id: 'u11-l4-e3',
          type: 'match-pairs',
          prompt: 'Nối mỗi cách viết với nghĩa của nó',
          pairs: [
            {
              left: { id: 'l1', text: '1 M' },
              right: { id: 'r1', text: '1 mol chất tan trong 1 lít dung dịch' },
            },
            {
              left: { id: 'l2', text: '0,5 M' },
              right: { id: 'r2', text: '0,5 mol chất tan trong 1 lít dung dịch' },
            },
            {
              left: { id: 'l3', text: '500 mL' },
              right: { id: 'r3', text: '0,5 L' },
            },
            {
              left: { id: 'l4', text: '250 mL' },
              right: { id: 'r4', text: '0,25 L' },
            },
          ],
          explanation:
            'Chữ M sau con số là cách viết gọn của mol/L. Còn 1 L = 1000 mL, nên muốn đổi mL ra L thì chia cho 1000: 500 mL là 0,5 L, 250 mL là 0,25 L. Nhớ đổi ra lít trước khi tính nồng độ mol.',
          conceptIds: ['molar-concentration'],
        },
        {
          id: 'u11-l4-e4',
          type: 'mcq',
          prompt:
            'Hoà tan 2 mol đường thành 4 lít dung dịch. Nồng độ mol của dung dịch là bao nhiêu?',
          options: [
            { id: 'a', text: '0,5 M' },
            { id: 'b', text: '2 M' },
            { id: 'c', text: '8 M' },
          ],
          correctOptionId: 'a',
          explanation:
            'Nồng độ mol = 2 : 4 = 0,5 mol/L, tức 0,5 M. Nếu ra 2 thì bạn đã chia ngược, lấy thể tích chia cho số mol. Nếu ra 8 thì bạn đã nhân thay vì chia.',
          conceptIds: ['molar-concentration'],
        },
        {
          id: 'u11-l4-e5',
          type: 'true-false',
          prompt: '500 mL dung dịch có hoà tan 0,1 mol muối thì có nồng độ 0,2 M.',
          answer: true,
          explanation:
            'Đổi 500 mL ra 0,5 L, rồi chia: 0,1 : 0,5 = 0,2 mol/L. Nếu quên đổi đơn vị mà chia cho 500, bạn sẽ ra một con số nhỏ hơn đáp án đúng 1000 lần.',
          conceptIds: ['molar-concentration'],
        },
        {
          id: 'u11-l4-e6',
          type: 'mcq',
          prompt: 'Cách nào pha được đúng 1 lít dung dịch muối ăn 1 M?',
          visual: { id: 'v', image: 'measuring-jug' },
          options: [
            {
              id: 'a',
              text: 'Đong sẵn đúng 1 lít nước, rồi đổ 1 mol muối vào và khuấy',
            },
            {
              id: 'b',
              text: 'Hoà tan 1 mol muối vào ít nước, rồi thêm nước tới vạch 1 lít',
            },
            {
              id: 'c',
              text: 'Hoà tan 1 g muối vào ít nước, rồi thêm nước tới vạch 1 lít',
            },
          ],
          correctOptionId: 'b',
          explanation:
            'Nồng độ mol tính theo thể tích của cả dung dịch. Đổ muối vào sẵn 1 lít nước thì dung dịch thu được nhiều hơn 1 lít một chút, nên nồng độ thấp hơn 1 M một chút. Còn 1 g muối thì ít hơn 1 mol rất nhiều: 1 mol muối ăn nặng 58,5 g.',
          conceptIds: ['molar-concentration'],
        },
        {
          id: 'u11-l4-e7',
          type: 'fill-blank',
          prompt:
            'Biết nồng độ mol, bạn tính ngược được số mol chất tan: lấy nồng độ mol nhân với thể tích dung dịch tính bằng lít. Chọn số đúng',
          template: 'Trong 2 lít dung dịch muối 0,5 M có ___ mol muối.',
          blanks: [{ accepted: ['1'], wordBank: ['0,25', '1', '4'] }],
          explanation:
            '0,5 × 2 = 1 mol. Cách nghĩ khác: 0,5 M nghĩa là mỗi lít có 0,5 mol muối, vậy 2 lít có 1 mol. Nếu ra 0,25 hay 4 thì bạn đã chia thay vì nhân.',
          conceptIds: ['molar-concentration'],
        },
        {
          id: 'u11-l4-e8',
          type: 'order-steps',
          prompt:
            'Hoà tan 18 g glucose (khối lượng mol M = 180 g/mol) thành 0,5 lít dung dịch. Sắp xếp các bước tính nồng độ mol',
          steps: [
            { id: 's1', text: 'Đổi khối lượng glucose ra số mol: 18 : 180 = 0,1 mol' },
            { id: 's2', text: 'Chia số mol vừa tìm được cho thể tích dung dịch: 0,1 : 0,5 = 0,2' },
            { id: 's3', text: 'Ghi kết quả kèm đơn vị: 0,2 mol/L, viết gọn là 0,2 M' },
          ],
          explanation:
            'Nồng độ mol cần số mol, mà đề lại cho số gam. Vậy bước đầu là đổi gam ra mol bằng n = m : M như ở Unit 10. Có số mol rồi mới chia cho thể tích dung dịch tính bằng lít.',
          conceptIds: ['molar-concentration'],
        },
        {
          id: 'u11-l4-e9',
          type: 'mcq',
          prompt:
            'Ca A: 10 g muối ăn (M = 58,5 g/mol) hoà tan thành 1 lít dung dịch. Ca B: 10 g saccharose (M = 342 g/mol) hoà tan thành 1 lít dung dịch. Ca nào có nồng độ mol cao hơn?',
          options: [
            { id: 'a', text: 'Ca A, vì 10 g muối ăn ứng với số mol lớn hơn' },
            { id: 'b', text: 'Ca B, vì phân tử saccharose to và nặng hơn' },
            { id: 'c', text: 'Hai ca bằng nhau, vì cùng 10 g chất tan trong 1 lít' },
          ],
          correctOptionId: 'a',
          explanation:
            'Số mol n = m : M. Cùng 10 g, chất nào có khối lượng mol nhỏ hơn thì số mol lớn hơn. Muối ăn: 10 : 58,5, khoảng 0,17 mol. Saccharose: 10 : 342, khoảng 0,03 mol. Cùng thể tích 1 lít nên ca A có nồng độ mol cao hơn, gần gấp 6 lần.',
          conceptIds: ['molar-concentration'],
        },
        {
          id: 'u11-l4-e10',
          type: 'sort',
          prompt:
            'Bạn đã gặp ba cách dùng con số để nói về dung dịch. Mỗi câu dưới đây nói về đại lượng nào?',
          groups: [
            { id: 's', label: 'Độ tan' },
            { id: 'c', label: 'Nồng độ phần trăm' },
            { id: 'm', label: 'Nồng độ mol' },
          ],
          items: [
            {
              id: 'i1',
              text: 'Ở 25 °C, 100 g nước hoà tan được tối đa 36 g muối ăn',
              groupId: 's',
            },
            { id: 'i2', text: 'Cứ 100 g dung dịch có 0,9 g muối', groupId: 'c' },
            { id: 'i3', text: 'Cứ 1 lít dung dịch có 0,5 mol muối', groupId: 'm' },
            { id: 'i4', text: 'Nước đường 15%', groupId: 'c' },
            { id: 'i5', text: 'Dung dịch hydrochloric acid 0,1 M', groupId: 'm' },
          ],
          explanation:
            'Độ tan là mức tối đa tan được trong 100 g nước ở một nhiệt độ. Nồng độ phần trăm là số gam chất tan trong 100 g dung dịch, có dấu %. Nồng độ mol là số mol chất tan trong 1 lít dung dịch, có chữ M hoặc mol/L.',
          conceptIds: ['solubility', 'percent-concentration', 'molar-concentration'],
        },
      ],
      unlocksMolecules: [],
      baseXp: 10,
    },

    // ───────────────────────── Bài 5: Huyền phù và nhũ tương ─────────────────────────
    {
      id: 'u11-l5-suspension-emulsion',
      title: 'Trong, đục và tách lớp',
      intro: {
        title: 'Cốc nước sông mùa lũ',
        story: [
          'Mùa lũ, nước sông Hồng đỏ ngầu phù sa. Múc một cốc để yên trên bàn, vài giờ sau lớp bùn mịn lắng xuống đáy, nước phía trên trong dần. Cốc nước muối thì để cả năm cũng không lắng ra hạt muối nào. Khác nhau ở đâu?',
          'Ở cỡ hạt. Phóng to phần nước giữa các hạt bùn, bạn chỉ gặp các phân tử nước. Còn mỗi hạt phù sa là cả một khối rắn gồm ít nhất hàng tỉ nguyên tử dính chặt nhau. Chúng không tan, chỉ lơ lửng làm nước đục, rồi chìm dần xuống đáy. Hỗn hợp gồm những hạt chất rắn nhỏ lơ lửng trong chất lỏng gọi là huyền phù.',
          'Giờ lắc mạnh chai dầu giấm trộn salad: dầu vỡ thành vô số giọt li ti lơ lửng trong giấm, cả chai đục lên. Hỗn hợp gồm những giọt chất lỏng nhỏ lơ lửng trong một chất lỏng khác không hoà tan nó gọi là nhũ tương. Để yên một lúc, các giọt dầu gộp lại và nổi lên thành lớp riêng. Sữa cũng là nhũ tương: những giọt chất béo li ti lơ lửng trong nước.',
          'Cách nhận ra: dung dịch thì trong suốt, dù có thể có màu, và để yên bao lâu cũng không lắng, không tách lớp. Huyền phù và nhũ tương thì đục. Chúng là hỗn hợp không đồng nhất, và để yên thì thường lắng xuống hoặc tách lớp.',
        ],
        visual: { type: 'molecule', moleculeId: 'h2o', scene: 'muddy-river' },
      },
      exercises: [
        {
          id: 'u11-l5-e1',
          type: 'mcq',
          prompt:
            'Nước sông mùa lũ đục ngầu vì có những hạt phù sa rắn, nhỏ, lơ lửng trong nước. Hỗn hợp này gọi là gì?',
          visual: { id: 'v', image: 'muddy-river' },
          options: [
            { id: 'a', text: 'Dung dịch' },
            { id: 'b', text: 'Huyền phù' },
            { id: 'c', text: 'Nhũ tương' },
          ],
          correctOptionId: 'b',
          explanation:
            'Hạt chất rắn nhỏ lơ lửng trong chất lỏng là huyền phù. Phù sa không tan trong nước nên đây không phải dung dịch. Nhũ tương thì phải là giọt chất lỏng lơ lửng trong một chất lỏng khác.',
          conceptIds: ['suspension-emulsion'],
        },
        {
          id: 'u11-l5-e2',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Huyền phù gồm các hạt chất ___ lơ lửng trong chất lỏng. Nhũ tương gồm các giọt chất ___ lơ lửng trong một chất lỏng khác.',
          blanks: [
            { accepted: ['rắn'], wordBank: ['rắn', 'lỏng', 'khí'] },
            { accepted: ['lỏng'], wordBank: ['rắn', 'lỏng', 'khí'] },
          ],
          explanation:
            'Hai loại hỗn hợp này giống nhau ở chỗ đều có thứ không tan lơ lửng trong chất lỏng. Chúng khác nhau ở thứ lơ lửng: hạt rắn thì là huyền phù, giọt lỏng thì là nhũ tương.',
          conceptIds: ['suspension-emulsion'],
        },
        {
          id: 'u11-l5-e3',
          type: 'true-false',
          prompt: 'Lắc mạnh chai dầu giấm, dầu ăn tan vào giấm và cả chai trở thành một dung dịch.',
          visual: { id: 'v', image: 'salad-dressing' },
          answer: false,
          explanation:
            'Lắc chỉ làm dầu vỡ thành những giọt li ti lơ lửng trong giấm, tạo thành nhũ tương. Dầu không tan: mỗi giọt vẫn gồm vô số phân tử dầu tụ lại với nhau. Bằng chứng là chai đục lên, và để yên thì dầu lại nổi thành lớp riêng.',
          conceptIds: ['suspension-emulsion', 'solution'],
        },
        {
          id: 'u11-l5-e4',
          type: 'sort',
          prompt: 'Xếp mỗi hỗn hợp vào đúng loại',
          groups: [
            { id: 'sol', label: 'Dung dịch' },
            { id: 'sus', label: 'Huyền phù' },
            { id: 'emu', label: 'Nhũ tương' },
          ],
          items: [
            { id: 'i1', text: 'Nước muối', groupId: 'sol' },
            { id: 'i2', text: 'Nước sông lẫn phù sa', image: 'muddy-river', groupId: 'sus' },
            { id: 'i3', text: 'Dầu giấm vừa lắc', image: 'salad-dressing', groupId: 'emu' },
            {
              id: 'i4',
              text: 'Bột sắn dây khuấy trong nước nguội, để yên thì lắng',
              groupId: 'sus',
            },
            { id: 'i5', text: 'Nước đường', groupId: 'sol' },
            { id: 'i6', text: 'Sữa', groupId: 'emu' },
          ],
          explanation:
            'Muối và đường tan hẳn vào nước nên tạo dung dịch trong suốt. Phù sa và bột sắn dây là hạt rắn không tan trong nước nguội, lơ lửng rồi lắng: huyền phù. Dầu trong giấm và chất béo trong sữa là những giọt lỏng li ti lơ lửng: nhũ tương.',
          conceptIds: ['suspension-emulsion', 'solution'],
        },
        {
          id: 'u11-l5-e5',
          type: 'mcq',
          prompt:
            'Để yên, phù sa trong cốc nước sông lắng xuống đáy, còn muối trong cốc nước muối thì không. Vì sao?',
          options: [
            {
              id: 'a',
              text: 'Vì muối đã bay hơi khỏi cốc, không còn gì để lắng',
            },
            {
              id: 'b',
              text: 'Vì phù sa có khối lượng, còn muối khi tan thì hết khối lượng',
            },
            {
              id: 'c',
              text: 'Vì hạt phù sa là khối rắn to, còn muối đã tách thành từng ion',
            },
          ],
          correctOptionId: 'c',
          explanation:
            'Mỗi hạt phù sa gồm vô số nguyên tử dính chặt, đủ nặng để chìm dần. Muối khi tan đã tách tới từng ion, nhỏ ngang phân tử nước, và bị các phân tử nước va đập liên tục nên phân tán đều mãi. Muối vẫn còn nguyên trong cốc và vẫn có khối lượng.',
          conceptIds: ['suspension-emulsion', 'solution', 'particle-motion'],
        },
        {
          id: 'u11-l5-e6',
          type: 'match-pairs',
          prompt: 'Bạn để yên ba cốc chất lỏng và quan sát. Nối mỗi quan sát với kết luận',
          pairs: [
            {
              left: { id: 'l1', text: 'Trong suốt, để lâu không lắng, không tách lớp' },
              right: { id: 'r1', text: 'Dung dịch' },
            },
            {
              left: { id: 'l2', text: 'Đục, để yên thì hạt rắn lắng xuống đáy' },
              right: { id: 'r2', text: 'Huyền phù' },
            },
            {
              left: { id: 'l3', text: 'Đục, để yên thì tách thành hai lớp chất lỏng' },
              right: { id: 'r3', text: 'Nhũ tương' },
            },
          ],
          explanation:
            'Dung dịch đồng nhất nên trong suốt và bền. Huyền phù có hạt rắn không tan nên đục, rồi hạt rắn lắng xuống. Nhũ tương có giọt lỏng không tan nên đục, rồi các giọt gộp lại thành một lớp chất lỏng riêng.',
          conceptIds: ['suspension-emulsion', 'solution'],
        },
        {
          id: 'u11-l5-e7',
          type: 'true-false',
          prompt: 'Dung dịch nào cũng không màu như nước.',
          answer: false,
          explanation:
            'Trong suốt không có nghĩa là không màu. Dung dịch copper(II) sulfate bạn gặp ở Unit 7 có màu xanh lam mà vẫn trong suốt, nhìn xuyên qua được. Dấu hiệu của dung dịch là trong suốt và không lắng, không tách lớp, chứ không phải là không màu.',
          conceptIds: ['solution'],
        },
        {
          id: 'u11-l5-e8',
          type: 'mcq',
          prompt:
            'Một số chai thuốc nước là huyền phù. Trên nhãn thường ghi "Lắc kĩ trước khi dùng". Vì sao cần lắc?',
          options: [
            { id: 'a', text: 'Để các hạt rắn đã lắng ở đáy phân tán đều trở lại' },
            { id: 'b', text: 'Để các hạt rắn tan hẳn vào nước thành dung dịch' },
            { id: 'c', text: 'Để các hạt rắn biến thành những giọt chất lỏng' },
          ],
          correctOptionId: 'a',
          explanation:
            'Trong huyền phù, hạt rắn không tan nên để yên là lắng xuống đáy chai. Lắc làm các hạt lơ lửng đều trở lại, nhờ đó phần rót ra nào cũng có lượng hạt như nhau. Lắc không làm hạt rắn tan, cũng không biến chúng thành chất lỏng.',
          conceptIds: ['suspension-emulsion'],
        },
        {
          id: 'u11-l5-e9',
          type: 'order-steps',
          prompt: 'Bạn lắc chai dầu giấm rồi đặt xuống bàn. Sắp xếp những gì xảy ra theo thứ tự',
          steps: [
            { id: 's1', text: 'Lắc mạnh: lớp dầu vỡ ra thành vô số giọt li ti' },
            { id: 's2', text: 'Các giọt dầu lơ lửng khắp chai, cả chai đục lên: đó là nhũ tương' },
            { id: 's3', text: 'Chai đứng yên, các giọt dầu gộp dần thành giọt to và nổi lên' },
            { id: 's4', text: 'Chai tách lại thành hai lớp: dầu ở trên, giấm ở dưới' },
          ],
          explanation:
            'Dầu ăn không tan trong giấm (giấm phần lớn là nước) và nhẹ hơn giấm. Lắc chỉ chia dầu thành giọt nhỏ trong chốc lát. Khi chai đứng yên, các giọt chạm nhau, gộp lại và nổi lên, nên nhũ tương này tách lớp trở lại.',
          conceptIds: ['suspension-emulsion', 'lipid'],
        },
        {
          id: 'u11-l5-e10',
          type: 'mcq',
          prompt:
            'Nước rửa bát bọc quanh các giọt dầu mỡ li ti và giữ chúng lơ lửng trong nước, không cho bám lại vào bát. Hỗn hợp nước và các giọt dầu mỡ lơ lửng ấy thuộc loại nào?',
          options: [
            { id: 'a', text: 'Dung dịch' },
            { id: 'b', text: 'Huyền phù' },
            { id: 'c', text: 'Nhũ tương' },
          ],
          correctOptionId: 'c',
          explanation:
            'Giọt chất lỏng (dầu mỡ) lơ lửng trong một chất lỏng khác (nước) là nhũ tương. Dầu mỡ vẫn không tan trong nước, nên nước rửa bát đục chứ không trong. Nhờ lớp nước rửa bát bọc ngoài, các giọt dầu không gộp lại được và trôi đi theo nước.',
          conceptIds: ['suspension-emulsion', 'lipid'],
        },
      ],
      unlocksMolecules: [],
      baseXp: 10,
    },

    // ───────────────────────── Bài 6: Tách chất khỏi hỗn hợp ─────────────────────────
    {
      id: 'u11-l6-separation',
      title: 'Gỡ hỗn hợp: lọc, cô cạn, chiết',
      intro: {
        title: 'Từ nước biển tới hạt muối',
        story: [
          'Ở ruộng muối ven biển, người ta dẫn nước biển vào những ô phẳng rồi phơi nắng. Nắng và gió làm nước bay hơi dần. Muối không bay hơi theo nên ở lại, kết thành lớp hạt trắng. Tách chất rắn đã tan ra khỏi dung dịch bằng cách cho dung môi bay hơi hết gọi là cô cạn. Trong phòng thí nghiệm, người ta cô cạn bằng cách đun.',
          'Buổi sáng pha cà phê phin: nước nóng ngấm qua bột cà phê, mang theo những chất tan được, chảy qua các lỗ nhỏ xuống cốc. Bã cà phê không tan và to hơn lỗ phin nên bị giữ lại. Đó là lọc: tách chất rắn không tan ra khỏi chất lỏng nhờ một lớp có lỗ nhỏ như giấy lọc, vải hay lưới.',
          'Còn hai chất lỏng không tan vào nhau, như dầu ăn và nước? Để yên, chúng tự tách thành hai lớp, chất nhẹ hơn nổi lên trên. Người ta cho hỗn hợp vào phễu chiết, một chiếc bình có khoá ở đáy, rồi mở khoá cho lớp dưới chảy ra hết thì khoá lại. Cách tách này gọi là chiết.',
          'Mỗi cách dựa vào một điểm khác nhau giữa các chất trong hỗn hợp. Lọc: hạt rắn không tan thì không lọt qua lỗ nhỏ, chất lỏng thì lọt. Cô cạn: nước dễ bay hơi, muối thì không. Chiết: hai chất lỏng không tan vào nhau và nặng nhẹ khác nhau.',
        ],
        visual: { type: 'molecule', moleculeId: 'nacl', scene: 'salt-field' },
      },
      exercises: [
        {
          id: 'u11-l6-e1',
          type: 'match-pairs',
          prompt: 'Nối mỗi cách tách với việc nó làm được',
          pairs: [
            {
              left: { id: 'l1', text: 'Lọc' },
              right: { id: 'r1', text: 'Tách chất rắn không tan khỏi chất lỏng' },
            },
            {
              left: { id: 'l2', text: 'Cô cạn' },
              right: { id: 'r2', text: 'Tách chất rắn đã tan khỏi dung dịch' },
            },
            {
              left: { id: 'l3', text: 'Chiết' },
              right: { id: 'r3', text: 'Tách hai chất lỏng không tan vào nhau' },
            },
          ],
          explanation:
            'Lọc giữ lại hạt rắn không tan trên lớp lọc. Cô cạn cho dung môi bay hơi để chất rắn đã tan ở lại. Chiết rút riêng từng lớp của hai chất lỏng không tan vào nhau.',
          conceptIds: ['separation'],
        },
        {
          id: 'u11-l6-e2',
          type: 'mcq',
          prompt:
            'Ở ruộng muối, người ta phơi nước biển dưới nắng cho tới khi chỉ còn lại muối. Đó là cách tách nào?',
          visual: { id: 'v', image: 'salt-field' },
          options: [
            { id: 'a', text: 'Lọc' },
            { id: 'b', text: 'Cô cạn' },
            { id: 'c', text: 'Chiết' },
          ],
          correctOptionId: 'b',
          explanation:
            'Muối đã tan trong nước biển, nên phải cho nước bay hơi thì muối mới ở lại: đó là cô cạn. Ruộng muối dùng nắng và gió thay cho bếp đun. Lọc không giữ được muối đã tan, còn chiết chỉ dùng cho hai chất lỏng không tan vào nhau.',
          conceptIds: ['separation', 'state-change'],
        },
        {
          id: 'u11-l6-e3',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Pha cà phê phin: bã cà phê ___ trong nước nên bị phin giữ lại, còn nước cà phê chảy qua các lỗ nhỏ xuống cốc. Cách tách này gọi là ___.',
          blanks: [
            { accepted: ['không tan'], wordBank: ['không tan', 'tan hết', 'bay hơi'] },
            { accepted: ['lọc'], wordBank: ['lọc', 'cô cạn', 'chiết'] },
          ],
          explanation:
            'Bã cà phê là chất rắn không tan, hạt lại to hơn lỗ phin nên bị giữ lại. Nước cùng các chất đã tan trong nó thì lọt qua. Tách chất rắn không tan khỏi chất lỏng nhờ lớp có lỗ nhỏ là lọc.',
          conceptIds: ['separation'],
        },
        {
          id: 'u11-l6-e4',
          type: 'sort',
          prompt: 'Mỗi việc dưới đây nên dùng cách tách nào?',
          groups: [
            { id: 'filter', label: 'Lọc' },
            { id: 'evap', label: 'Cô cạn' },
            { id: 'extract', label: 'Chiết' },
          ],
          items: [
            { id: 'i1', text: 'Lấy cát ra khỏi nước lẫn cát', groupId: 'filter' },
            { id: 'i2', text: 'Lấy muối ra khỏi nước muối', groupId: 'evap' },
            { id: 'i3', text: 'Tách dầu ăn khỏi nước', image: 'oil-on-water', groupId: 'extract' },
            {
              id: 'i4',
              text: 'Giữ bã cà phê lại, lấy nước cà phê',
              image: 'coffee-phin',
              groupId: 'filter',
            },
            { id: 'i5', text: 'Lấy đường ra khỏi nước đường', groupId: 'evap' },
          ],
          explanation:
            'Cát và bã cà phê là chất rắn không tan: lọc. Muối và đường đã tan trong nước: cô cạn cho nước bay hơi. Dầu ăn và nước là hai chất lỏng không tan vào nhau: chiết.',
          conceptIds: ['separation'],
        },
        {
          id: 'u11-l6-e5',
          type: 'true-false',
          prompt:
            'Đổ nước muối qua giấy lọc thì muối bị giữ lại trên giấy, nước chảy xuống không còn mặn.',
          answer: false,
          explanation:
            'Muối đã tan thành các ion nhỏ ngang phân tử nước, nên lọt qua lỗ giấy lọc cùng với nước. Nước chảy xuống vẫn mặn như cũ. Lọc chỉ giữ được hạt rắn không tan. Muốn lấy muối đã tan thì phải cô cạn.',
          conceptIds: ['separation', 'solution'],
        },
        {
          id: 'u11-l6-e6',
          type: 'mcq',
          prompt: 'Khi cô cạn nước muối, nước đi đâu?',
          options: [
            { id: 'a', text: 'Nước bay hơi vào không khí, muối ở lại' },
            { id: 'b', text: 'Nước biến dần thành muối' },
            { id: 'c', text: 'Nước và muối cùng bay hơi, rồi muối rơi xuống lại' },
          ],
          correctOptionId: 'a',
          explanation:
            'Các phân tử nước rời dung dịch, bay vào không khí thành hơi nước. Muối ăn rất khó bay hơi nên các ion ở lại và xếp thành tinh thể. Không có chất nào biến thành chất khác: đây là biến đổi vật lí.',
          conceptIds: ['separation', 'state-change', 'physical-change'],
        },
        {
          id: 'u11-l6-e7',
          type: 'mcq',
          prompt:
            'Hỗn hợp dầu ăn và nước trong phễu chiết đã tách thành hai lớp. Mở khoá ở đáy phễu, chất nào chảy ra trước?',
          visual: { id: 'v', image: 'oil-on-water' },
          options: [
            { id: 'a', text: 'Dầu ăn, vì dầu nhẹ hơn nên chảy nhanh hơn' },
            { id: 'b', text: 'Nước, vì nước nặng hơn nên nằm ở lớp dưới' },
            { id: 'c', text: 'Cả hai cùng lúc, vì chúng đã trộn đều' },
          ],
          correctOptionId: 'b',
          explanation:
            'Dầu ăn nhẹ hơn nước nên nổi ở trên, nước nằm ở lớp dưới. Khoá của phễu chiết ở đáy nên lớp dưới, tức là nước, chảy ra trước. Khi nước vừa chảy hết thì khoá lại, trong phễu chỉ còn dầu.',
          conceptIds: ['separation', 'lipid'],
        },
        {
          id: 'u11-l6-e8',
          type: 'order-steps',
          prompt: 'Muối ăn bị lẫn cát. Sắp xếp các bước để lấy lại muối sạch',
          steps: [
            { id: 's1', text: 'Cho hỗn hợp vào nước và khuấy: muối tan, cát không tan' },
            { id: 's2', text: 'Đổ qua giấy lọc: cát bị giữ lại, nước muối chảy xuống cốc' },
            { id: 's3', text: 'Cô cạn phần nước muối vừa lọc được: nước bay hơi dần' },
            { id: 's4', text: 'Muối sạch ở lại sau khi nước bay hơi hết' },
          ],
          explanation:
            'Bạn dùng hai điểm khác nhau giữa muối và cát. Muối tan trong nước còn cát thì không, nên hoà vào nước rồi lọc là bỏ được cát. Sau đó nước dễ bay hơi còn muối thì không, nên cô cạn là thu được muối.',
          conceptIds: ['separation'],
        },
        {
          id: 'u11-l6-e9',
          type: 'mcq',
          prompt:
            'Khuấy bột sắn dây vào nước nguội rồi để yên, bột lắng xuống đáy bát. Nghiêng bát rót nhẹ phần nước trong ở trên đi, bột ở lại. Cách tách này gọi là lắng gạn. Nó dùng được là nhờ bột sắn dây có đặc điểm gì?',
          options: [
            { id: 'a', text: 'Tan hết trong nước nguội' },
            { id: 'b', text: 'Không tan trong nước nguội và nhẹ hơn nước' },
            { id: 'c', text: 'Không tan trong nước nguội và nặng hơn nước' },
          ],
          correctOptionId: 'c',
          explanation:
            'Bột không tan nên vẫn là những hạt rắn, và nặng hơn nước nên tự chìm xuống đáy khi để yên. Nhờ vậy chỉ cần rót phần nước phía trên đi. Nếu bột tan thì không có gì để lắng, còn nếu nhẹ hơn nước thì nó đã nổi lên.',
          conceptIds: ['separation', 'suspension-emulsion'],
        },
        {
          id: 'u11-l6-e10',
          type: 'true-false',
          prompt:
            'Ethanol (cồn) tan hoàn toàn trong nước. Dù vậy, dùng phễu chiết vẫn tách được ethanol ra khỏi nước vì cả hai đều là chất lỏng.',
          answer: false,
          explanation:
            'Chiết chỉ dùng được khi hai chất lỏng không tan vào nhau và tự tách thành hai lớp. Ethanol tan hoàn toàn trong nước, tạo thành dung dịch đồng nhất, không có lớp nào để rút riêng ra.',
          conceptIds: ['separation', 'solution'],
        },
      ],
      unlocksMolecules: [],
      baseXp: 10,
    },

    // ───────────────────────── Checkpoint ─────────────────────────
    {
      id: 'u11-checkpoint',
      title: 'Kiểm tra Unit 11',
      kind: 'checkpoint',
      exercises: [
        {
          id: 'u11-cp-e1',
          type: 'mcq',
          prompt:
            'Bạn pha nước chanh: vắt chanh vào cốc nước, lọc bỏ tép và hạt, thêm đường rồi khuấy tan. Trong cốc nước chanh ấy, chất nào là dung môi?',
          options: [
            { id: 'a', text: 'Đường' },
            { id: 'b', text: 'Nước' },
            { id: 'c', text: 'Acid trong nước cốt chanh' },
          ],
          correctOptionId: 'b',
          explanation:
            'Nước hoà tan cả đường lẫn acid của chanh nên nước là dung môi. Đường và acid là hai chất tan. Một dung dịch có thể có nhiều chất tan cùng lúc.',
          conceptIds: ['solution'],
        },
        {
          id: 'u11-cp-e2',
          type: 'true-false',
          prompt:
            'Chai nước có ga để ngoài nắng khi mở sẽ xì bọt mạnh hơn chai để trong tủ lạnh, vì nước càng ấm thì chất khí tan được càng ít.',
          answer: true,
          explanation:
            'Đúng. Độ tan của chất khí giảm khi nhiệt độ tăng. Trong chai ấm, nước giữ được ít khí carbon dioxide hơn, nên vừa mở nắp là khí thoát ra ào ạt.',
          conceptIds: ['solubility'],
        },
        {
          id: 'u11-cp-e3',
          type: 'fill-blank',
          prompt: 'Tính nồng độ phần trăm rồi gõ con số vào chỗ trống',
          template:
            'Hoà tan hết 30 g đường vào 170 g nước, được 200 g dung dịch. Nồng độ phần trăm của đường là ___ %.',
          blanks: [{ accepted: ['15', '15%', '15 %', '15,0', '15.0'] }],
          explanation:
            'C% = khối lượng chất tan : khối lượng dung dịch × 100% = 30 : 200 × 100% = 15%. Số chia là 200 g dung dịch, không phải 170 g nước.',
          conceptIds: ['percent-concentration'],
        },
        {
          id: 'u11-cp-e4',
          type: 'mcq',
          prompt:
            'Ở 25 °C, độ tan của muối ăn khoảng 36 g, tức là 100 g nước hoà tan được tối đa khoảng 36 g muối. Bạn cho 20 g muối vào 50 g nước ở 25 °C rồi khuấy kĩ. Kết quả là gì?',
          options: [
            { id: 'a', text: 'Muối tan hết, dung dịch chưa bão hoà' },
            { id: 'b', text: 'Khoảng 18 g tan, còn khoảng 2 g ở đáy, dung dịch bão hoà' },
            { id: 'c', text: 'Khoảng 10 g tan, còn khoảng 10 g ở đáy, dung dịch bão hoà' },
          ],
          correctOptionId: 'b',
          explanation:
            '50 g nước bằng một nửa 100 g nước nên chỉ hoà tan được tối đa khoảng 36 : 2 = 18 g muối. Bạn cho vào 20 g, vậy còn dư khoảng 2 g không tan. Phần nước muối phía trên lớp muối dư là dung dịch bão hoà.',
          conceptIds: ['solubility'],
        },
        {
          id: 'u11-cp-e5',
          type: 'match-pairs',
          prompt: 'Nối mỗi tên gọi với ý nghĩa của nó',
          pairs: [
            {
              left: { id: 'l1', text: 'Độ tan' },
              right: {
                id: 'r1',
                text: 'Số gam chất tan tối đa trong 100 g nước ở một nhiệt độ',
              },
            },
            {
              left: { id: 'l2', text: 'Nồng độ phần trăm' },
              right: { id: 'r2', text: 'Số gam chất tan trong 100 g dung dịch' },
            },
            {
              left: { id: 'l3', text: 'Nồng độ mol' },
              right: { id: 'r3', text: 'Số mol chất tan trong 1 lít dung dịch' },
            },
            {
              left: { id: 'l4', text: 'Dung dịch bão hoà' },
              right: { id: 'r4', text: 'Dung dịch không hoà tan thêm được chất tan nữa' },
            },
          ],
          explanation:
            'Độ tan nói về mức tối đa và tính trên 100 g nước. Nồng độ phần trăm tính trên 100 g dung dịch. Nồng độ mol đếm chất tan bằng mol trong 1 lít dung dịch. Dung dịch bão hoà là dung dịch đã chạm mức tối đa ở nhiệt độ đó.',
          conceptIds: ['solubility', 'percent-concentration', 'molar-concentration'],
        },
        {
          id: 'u11-cp-e6',
          type: 'mcq',
          prompt:
            'Nước biển có nồng độ muối khoảng 3,5%. Nếu cho nước bay hơi hết từ 1000 g nước biển, còn lại khoảng bao nhiêu gam muối?',
          visual: { id: 'v', image: 'sea-wave' },
          options: [
            { id: 'a', text: '3,5 g' },
            { id: 'b', text: '35 g' },
            { id: 'c', text: '350 g' },
          ],
          correctOptionId: 'b',
          explanation:
            '3,5% nghĩa là cứ 100 g nước biển có 3,5 g muối. 1000 g gấp 10 lần 100 g, nên có 3,5 × 10 = 35 g muối. Cũng có thể tính: 1000 × 3,5 : 100 = 35 g.',
          conceptIds: ['percent-concentration', 'separation'],
        },
        {
          id: 'u11-cp-e7',
          type: 'fill-blank',
          prompt: 'Tính nồng độ mol rồi gõ con số vào chỗ trống',
          template:
            'Hoà tan 0,5 mol sodium chloride thành 2 lít dung dịch. Nồng độ mol của dung dịch là ___ M.',
          blanks: [{ accepted: ['0,25', '0.25', '0,25 M', '0.25 M', '0,25M', '0.25M'] }],
          explanation:
            'Nồng độ mol = số mol chất tan : thể tích dung dịch (lít) = 0,5 : 2 = 0,25 mol/L, viết gọn là 0,25 M.',
          conceptIds: ['molar-concentration'],
        },
        {
          id: 'u11-cp-e8',
          type: 'true-false',
          prompt: 'Trong 250 mL dung dịch đường 2 M có 500 mol đường.',
          answer: false,
          explanation:
            'Phải đổi thể tích ra lít trước: 250 mL = 0,25 L. Số mol đường = 2 × 0,25 = 0,5 mol. Con số 500 là do lấy 2 nhân thẳng với 250 mà quên đổi đơn vị.',
          conceptIds: ['molar-concentration'],
        },
        {
          id: 'u11-cp-e9',
          type: 'sort',
          prompt: 'Xếp mỗi hỗn hợp vào đúng loại',
          groups: [
            { id: 'sol', label: 'Dung dịch' },
            { id: 'sus', label: 'Huyền phù' },
            { id: 'emu', label: 'Nhũ tương' },
          ],
          items: [
            { id: 'i1', text: 'Nước muối sinh lí', image: 'saline-bottle', groupId: 'sol' },
            {
              id: 'i2',
              text: 'Nước vo gạo: hạt bột gạo li ti lơ lửng trong nước',
              groupId: 'sus',
            },
            {
              id: 'i3',
              text: 'Sốt mayonnaise: giọt dầu li ti lơ lửng trong nước chanh và lòng đỏ trứng',
              groupId: 'emu',
            },
            { id: 'i4', text: 'Giấm ăn', image: 'vinegar-bottle', groupId: 'sol' },
            { id: 'i5', text: 'Nước sông mùa lũ', image: 'muddy-river', groupId: 'sus' },
            { id: 'i6', text: 'Sữa tươi', groupId: 'emu' },
          ],
          explanation:
            'Nước muối sinh lí và giấm trong suốt, chất tan đã lẫn đều vào nước: dung dịch. Nước vo gạo và nước sông mùa lũ có hạt rắn lơ lửng, để yên thì lắng cặn: huyền phù. Mayonnaise và sữa có giọt chất béo lỏng li ti lơ lửng: nhũ tương.',
          conceptIds: ['suspension-emulsion', 'solution'],
        },
        {
          id: 'u11-cp-e10',
          type: 'mcq',
          prompt:
            'Luộc mì xong, bạn đổ cả nồi qua chiếc rổ: sợi mì ở lại trong rổ, nước chảy đi. Bạn vừa dùng cách tách nào?',
          options: [
            { id: 'a', text: 'Lọc' },
            { id: 'b', text: 'Cô cạn' },
            { id: 'c', text: 'Chiết' },
          ],
          correctOptionId: 'a',
          explanation:
            'Sợi mì là chất rắn không tan, to hơn lỗ rổ nên bị giữ lại, còn nước thì lọt qua. Đó là lọc, giống hệt chiếc phin giữ bã cà phê. Cô cạn thì phải cho nước bay hơi hết, còn chiết dùng cho hai chất lỏng không tan vào nhau.',
          conceptIds: ['separation'],
        },
        {
          id: 'u11-cp-e11',
          type: 'order-steps',
          prompt:
            'Ở lò đường thủ công, người ta làm đường từ cây mía. Sắp xếp các bước theo thứ tự',
          steps: [
            { id: 's1', text: 'Ép cây mía, thu được nước mía còn lẫn bã vụn' },
            { id: 's2', text: 'Lọc nước mía để giữ lại bã vụn và cặn' },
            { id: 's3', text: 'Đun nước mía đã lọc cho nước bay hơi dần' },
            { id: 's4', text: 'Đường kết lại thành khối khi nước đã bay hơi gần hết' },
          ],
          explanation:
            'Bã mía là chất rắn không tan nên lọc là giữ lại được. Đường thì đã tan trong nước mía, nên phải cho nước bay hơi, tức là cô cạn, thì đường mới tách ra. Đây cũng là hai bước bạn dùng để tách muối khỏi cát.',
          conceptIds: ['separation'],
        },
        {
          id: 'u11-cp-e12',
          type: 'true-false',
          prompt:
            'Chum nước mưa lẫn bụi đất hơi đục. Để yên một đêm, cặn đất lắng xuống đáy chum và nước phía trên trong hơn, vì nước đục ấy là huyền phù chứ không phải dung dịch.',
          answer: true,
          explanation:
            'Đúng. Hạt đất là chất rắn không tan, lơ lửng trong nước: đó là huyền phù. Để yên thì hạt rắn lắng dần xuống đáy. Nếu là dung dịch thì để bao lâu cũng không lắng ra thứ gì.',
          conceptIds: ['suspension-emulsion', 'separation'],
        },
      ],
      baseXp: 20,
    },
  ],
}
