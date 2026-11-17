import type { UnitInput } from '../../schema/lesson.js'

/**
 * Unit 6: Hoá học trong bếp
 * 6 bài học + checkpoint: phản ứng toả nhiệt, phản ứng thu nhiệt, tốc độ phản ứng và nhiệt độ,
 * diện tích bề mặt tiếp xúc và nồng độ, chất xúc tác và enzyme, lên men.
 */
export const unit06: UnitInput = {
  id: 'u6-kitchen',
  order: 6,
  title: 'Hoá học trong bếp',
  tagline: 'Nhiệt, tốc độ phản ứng và lên men',
  color: '#FFC800',
  lessons: [
    // ───────────────────────── Bài 1: Phản ứng toả nhiệt ─────────────────────────
    {
      id: 'u6-l1-exothermic',
      title: 'Bếp lửa toả nhiệt',
      intro: {
        title: 'Vòng lửa xanh dưới đáy chảo',
        story: [
          'Mẹ vặn núm bếp gas. Tách một tiếng, vòng lửa xanh bùng lên. Chỉ một phút sau, chảo đã nóng tới mức dầu reo lách tách.',
          'Trong bình gas có propane (C₃H₈). Gặp tia lửa mồi, propane phản ứng với oxygen trong không khí, tạo thành carbon dioxide và hơi nước. Đó là sự cháy, giống như methane cháy trên bếp biogas.',
          'Phản ứng này còn cho ra một thứ không có trong phương trình: nhiệt. Phản ứng giải phóng năng lượng dạng nhiệt ra xung quanh gọi là phản ứng toả nhiệt. Nhờ nó mà chảo nóng lên và thức ăn chín.',
          'Đốt than, củi, xăng, dầu cũng đều là phản ứng toả nhiệt. Những chất khi cháy toả nhiều nhiệt như vậy được gọi là nhiên liệu.',
        ],
        visual: { type: 'reaction', reactionId: 'propane-combustion' },
      },
      exercises: [
        {
          id: 'u6-l1-e1',
          type: 'mcq',
          prompt: 'Bếp gas đang cháy làm chảo nóng rực. Phản ứng cháy của gas thuộc loại nào?',
          visual: { id: 'v', image: 'gas-stove-wok' },
          options: [
            { id: 'a', text: 'Phản ứng toả nhiệt: nó giải phóng nhiệt ra xung quanh' },
            { id: 'b', text: 'Biến đổi vật lí: không có chất mới sinh ra' },
            { id: 'c', text: 'Sự hoà tan: gas tan vào trong không khí' },
          ],
          correctOptionId: 'a',
          explanation:
            'Gas cháy tạo ra chất mới là carbon dioxide và hơi nước, nên đây là một phản ứng hoá học. Phản ứng giải phóng nhiệt ra xung quanh, làm nóng chảo, nên gọi là phản ứng toả nhiệt.',
          conceptIds: ['exothermic-endothermic', 'combustion'],
        },
        {
          id: 'u6-l1-e2',
          type: 'sort',
          prompt:
            'Propane cháy: propane và oxygen biến thành carbon dioxide và nước. Xếp mỗi chất vào đúng nhóm',
          groups: [
            { id: 'reactant', label: 'Chất tham gia' },
            { id: 'product', label: 'Sản phẩm' },
          ],
          items: [
            { id: 'i1', moleculeId: 'h2o', text: 'Nước', groupId: 'product' },
            { id: 'i2', moleculeId: 'c3h8', text: 'Propane', groupId: 'reactant' },
            { id: 'i3', moleculeId: 'co2', text: 'Carbon dioxide', groupId: 'product' },
            { id: 'i4', moleculeId: 'o2', text: 'Oxygen', groupId: 'reactant' },
          ],
          explanation:
            'Propane và oxygen có từ đầu nên là chất tham gia. Carbon dioxide và nước sinh ra sau khi cháy nên là sản phẩm. Nhiệt không phải là một chất, nên nó không nằm trong nhóm nào.',
          conceptIds: ['reactants-products', 'combustion'],
        },
        {
          id: 'u6-l1-e3',
          type: 'build-molecule',
          prompt: 'Ghép phân tử propane C₃H₈, nhiên liệu trong bình gas',
          targetMoleculeId: 'c3h8',
          availableAtoms: { C: 4, H: 10, O: 2 },
          explanation:
            'Propane gồm 3 nguyên tử carbon nối thành một mạch và 8 nguyên tử hydrogen bám quanh. Trong phân tử không có oxygen: oxygen để đốt gas lấy từ không khí.',
          conceptIds: ['formula', 'molecule'],
        },
        {
          id: 'u6-l1-e4',
          type: 'match-pairs',
          prompt: 'Mỗi nhiên liệu đang cháy ở đâu? Nối cho đúng',
          pairs: [
            {
              left: { id: 'l1', moleculeId: 'c3h8', text: 'Propane' },
              right: { id: 'r1', image: 'gas-stove-wok', text: 'Bếp gas' },
            },
            {
              left: { id: 'l2', moleculeId: 'ch4', text: 'Methane' },
              right: { id: 'r2', image: 'biogas-stove', text: 'Bếp biogas' },
            },
            {
              left: { id: 'l3', moleculeId: 'c', text: 'Carbon trong than' },
              right: { id: 'r3', image: 'charcoal-grill', text: 'Bếp than nướng thịt' },
            },
            {
              left: { id: 'l4', text: 'Sáp' },
              right: { id: 'r4', image: 'candle', text: 'Cây nến' },
            },
          ],
          explanation:
            'Propane trong bình gas, methane trong bếp biogas, carbon trong than, sáp trong nến đều là nhiên liệu. Chúng cháy với oxygen và toả nhiệt. Xăng, dầu trong động cơ xe cũng vậy.',
          conceptIds: ['exothermic-endothermic', 'combustion'],
        },
        {
          id: 'u6-l1-e5',
          type: 'mcq',
          prompt:
            'Một phân tử propane C₃H₈ có 3 nguyên tử carbon. Khi cháy, mỗi nguyên tử carbon nằm trong một phân tử CO₂. Vậy một phân tử propane tạo ra mấy phân tử CO₂?',
          visual: { id: 'v', moleculeId: 'c3h8' },
          options: [
            { id: 'a', text: '1' },
            { id: 'b', text: '3' },
            { id: 'c', text: '8' },
          ],
          correctOptionId: 'b',
          explanation:
            'Nguyên tử không mất đi. 3 nguyên tử carbon của propane phải nằm trong 3 phân tử CO₂, vì mỗi phân tử CO₂ chỉ có 1 carbon. Số 8 là số nguyên tử hydrogen, chúng sẽ đi vào nước.',
          conceptIds: ['conservation-of-mass', 'formula'],
        },
        {
          id: 'u6-l1-e6',
          type: 'fill-blank',
          prompt: 'Đếm tiếp hydrogen rồi chọn số đúng',
          template:
            'Một phân tử propane C₃H₈ có 8 nguyên tử hydrogen. Mỗi phân tử nước H₂O cần 2 nguyên tử hydrogen. Vậy 8 nguyên tử hydrogen tạo được ___ phân tử nước.',
          blanks: [{ accepted: ['4', 'bốn'], wordBank: ['2', '4', '8'] }],
          explanation:
            '8 chia 2 bằng 4. Một phân tử propane cháy hết cho ra 3 phân tử CO₂ và 4 phân tử H₂O.',
          conceptIds: ['conservation-of-mass', 'formula'],
        },
        {
          id: 'u6-l1-e7',
          type: 'order-steps',
          prompt: 'Cân bằng sơ đồ C₃H₈ + O₂ → CO₂ + H₂O. Sắp xếp các bước theo thứ tự',
          steps: [
            { id: 's1', text: 'Bắt đầu từ carbon: trái 3, phải 1. Đặt hệ số 3 trước CO₂' },
            { id: 's2', text: 'Tiếp theo là hydrogen: trái 8, phải 2. Đặt hệ số 4 trước H₂O' },
            { id: 's3', text: 'Giờ mới đếm oxygen ở vế phải: 3 × 2 + 4 × 1 = 10' },
            { id: 's4', text: 'Đặt hệ số 5 trước O₂ để vế trái cũng có 10 oxygen' },
            { id: 's5', text: 'Đếm lần cuối: mỗi vế có 3 carbon, 8 hydrogen, 10 oxygen' },
          ],
          explanation:
            'Mẹo với phản ứng cháy: cân bằng carbon trước, hydrogen sau, để oxygen lại cuối cùng. Oxygen có mặt trong cả hai sản phẩm, nên phải biết hệ số của CO₂ và H₂O rồi mới đếm được.',
          conceptIds: ['balancing', 'coefficient'],
        },
        {
          id: 'u6-l1-e8',
          type: 'balance-reaction',
          reactionId: 'propane-combustion',
          prompt:
            'Đến lượt bạn: cân bằng phương trình propane cháy trên bếp gas. Nhớ thứ tự: carbon, hydrogen, rồi mới tới oxygen',
          explanation:
            '3 C cần 3 CO₂. 8 H cần 4 H₂O. Vế phải khi đó có 3 × 2 + 4 = 10 nguyên tử oxygen, nên cần 5 O₂. Kết quả: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.',
          conceptIds: ['balancing', 'combustion'],
        },
        {
          id: 'u6-l1-e9',
          type: 'mcq',
          prompt:
            'Bật bếp gas chỉ cần một tia lửa lúc đầu. Sau đó bếp cháy tiếp mà không cần mồi thêm. Nhiệt giữ cho ngọn lửa cháy tiếp lấy từ đâu?',
          visual: { id: 'v', image: 'gas-stove-wok' },
          options: [
            { id: 'a', text: 'Từ tia lửa mồi, vì nó vẫn còn nóng mãi' },
            { id: 'b', text: 'Từ chiếc chảo đặt trên bếp' },
            { id: 'c', text: 'Từ chính phản ứng cháy, vì nó toả nhiệt' },
          ],
          correctOptionId: 'c',
          explanation:
            'Tia lửa chỉ để mồi cho những phân tử đầu tiên phản ứng. Phản ứng cháy toả nhiệt, và chính nhiệt đó làm lượng gas tiếp theo bắt cháy. Vì thế phản ứng toả nhiệt có thể tự nuôi mình cho tới khi hết nhiên liệu hoặc hết oxygen.',
          conceptIds: ['exothermic-endothermic', 'combustion'],
        },
        {
          id: 'u6-l1-e10',
          type: 'mcq',
          prompt:
            'Gas rò rỉ chỉ cần gặp một tia lửa nhỏ là bùng cháy. Công tắc điện khi bật tắt cũng có thể phát ra tia lửa. Nếu ngửi thấy mùi gas trong bếp, việc nào nên làm?',
          options: [
            { id: 'a', text: 'Bật quạt điện cho mùi gas bay đi' },
            { id: 'b', text: 'Khoá van bình gas, mở cửa cho thoáng và gọi người lớn' },
            { id: 'c', text: 'Bật bếp lên để đốt hết chỗ gas bị rò' },
          ],
          correctOptionId: 'b',
          explanation:
            'Phản ứng cháy của gas toả nhiệt rất mạnh, nên gas rò rỉ là chuyện nguy hiểm. Việc cần làm là cắt nguồn gas và mở cửa cho gas loãng đi. Không bật tắt bất cứ thứ gì chạy điện và không bật lửa, vì một tia lửa nhỏ cũng đủ làm mồi.',
          conceptIds: ['combustion', 'exothermic-endothermic'],
        },
      ],
      unlocksMolecules: ['c3h8'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 2: Phản ứng thu nhiệt ─────────────────────────
    {
      id: 'u6-l2-endothermic',
      title: 'Phản ứng phải nuôi bằng nhiệt',
      intro: {
        title: 'Lò vôi đỏ lửa ngày đêm',
        story: [
          'Ở các làng nghề làm vôi, người ta xếp đá vôi vào lò rồi đốt than liên tục mấy ngày liền. Lửa mà tắt giữa chừng là hỏng cả mẻ.',
          'Đá vôi là calcium carbonate (CaCO₃). Ở khoảng 900 °C, nó tách thành calcium oxide (CaO, quen gọi là vôi sống) và khí carbon dioxide. Nhưng phản ứng này không tự nuôi được mình như ngọn lửa bếp gas. Nó lấy nhiệt của lò, hết nhiệt là dừng.',
          'Phản ứng hấp thụ năng lượng dạng nhiệt từ xung quanh như vậy gọi là phản ứng thu nhiệt. Nó ngược với phản ứng toả nhiệt ở bài trước.',
          'Trong bếp cũng có phản ứng thu nhiệt. Cắm nhiệt kế vào cốc giấm rồi cho baking soda vào: hỗn hợp sủi bọt, còn số chỉ nhiệt kế thì tụt xuống vài độ. Phản ứng đang lấy nhiệt của chính dung dịch trong cốc.',
        ],
        visual: { type: 'reaction', reactionId: 'limestone-decomposition' },
      },
      exercises: [
        {
          id: 'u6-l2-e1',
          type: 'mcq',
          prompt: 'Nung đá vôi là một phản ứng thu nhiệt. Điều đó có nghĩa là gì?',
          visual: { id: 'v', image: 'lime-kiln' },
          options: [
            { id: 'a', text: 'Phản ứng giải phóng nhiệt ra xung quanh' },
            { id: 'b', text: 'Phản ứng hấp thụ nhiệt từ xung quanh' },
            { id: 'c', text: 'Phản ứng không liên quan gì tới nhiệt' },
          ],
          correctOptionId: 'b',
          explanation:
            'Thu nhiệt nghĩa là thu vào: phản ứng hấp thụ nhiệt từ xung quanh. Đá vôi lấy nhiệt của lò để tách thành vôi sống và khí carbon dioxide. Giải phóng nhiệt ra xung quanh là phản ứng toả nhiệt.',
          conceptIds: ['exothermic-endothermic'],
        },
        {
          id: 'u6-l2-e2',
          type: 'true-false',
          prompt:
            'Lò vôi tắt lửa giữa chừng thì đá vôi trong lò vẫn tiếp tục tách thành vôi sống cho tới hết.',
          visual: { id: 'v', image: 'lime-kiln' },
          answer: false,
          explanation:
            'Phản ứng thu nhiệt chỉ diễn ra khi còn được cấp nhiệt. Ngừng cấp nhiệt là phản ứng dừng. Nó khác hẳn gas trên bếp: gas đã cháy thì tự toả nhiệt để cháy tiếp, còn đá vôi không tự làm nóng mình được.',
          conceptIds: ['exothermic-endothermic'],
        },
        {
          id: 'u6-l2-e3',
          type: 'balance-reaction',
          reactionId: 'limestone-decomposition',
          prompt:
            'Cân bằng phương trình của phản ứng nung đá vôi. Nhớ đếm nguyên tử trước khi đổi hệ số!',
          explanation:
            'Mỗi vế đều có 1 Ca, 1 C và 3 O, nên phương trình đã cân bằng sẵn: CaCO₃ → CaO + CO₂. Nhiệt không phải là một chất nên không có mặt trong phương trình. Người ta ghi nó phía trên mũi tên như một điều kiện.',
          conceptIds: ['balancing', 'conservation-of-mass'],
        },
        {
          id: 'u6-l2-e4',
          type: 'mcq',
          prompt:
            'Cắm nhiệt kế vào cốc giấm rồi cho baking soda vào. Hỗn hợp sủi bọt mạnh, còn số chỉ nhiệt kế tụt xuống vài độ. Phản ứng này thuộc loại nào?',
          visual: { id: 'v', image: 'fizzing-cold-cup' },
          options: [
            { id: 'a', text: 'Thu nhiệt, vì nó lấy nhiệt của dung dịch làm dung dịch lạnh đi' },
            { id: 'b', text: 'Toả nhiệt, vì nó sủi bọt rất mạnh' },
            { id: 'c', text: 'Toả nhiệt, vì khí bay ra mang nhiệt đi mất' },
          ],
          correctOptionId: 'a',
          explanation:
            'Nhiệt độ của dung dịch giảm, tức là phản ứng đã lấy nhiệt của dung dịch. Đó là phản ứng thu nhiệt. Sủi bọt mạnh chỉ cho biết có khí sinh ra, không cho biết phản ứng toả hay thu nhiệt.',
          conceptIds: ['exothermic-endothermic', 'reaction-signs'],
        },
        {
          id: 'u6-l2-e5',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Phản ứng toả nhiệt làm xung quanh ___ lên. Phản ứng thu nhiệt làm xung quanh ___ đi.',
          blanks: [
            { accepted: ['nóng'], wordBank: ['nóng', 'lạnh', 'sáng'] },
            { accepted: ['lạnh'], wordBank: ['nóng', 'lạnh', 'sáng'] },
          ],
          explanation:
            'Phản ứng toả nhiệt đưa nhiệt ra xung quanh nên xung quanh nóng lên. Phản ứng thu nhiệt lấy nhiệt của xung quanh nên xung quanh lạnh đi. Năng lượng không tự sinh ra hay mất đi, nó chỉ chuyển từ nơi này sang nơi khác.',
          conceptIds: ['exothermic-endothermic'],
        },
        {
          id: 'u6-l2-e6',
          type: 'sort',
          prompt: 'Toả nhiệt hay thu nhiệt?',
          groups: [
            { id: 'exo', label: 'Toả nhiệt' },
            { id: 'endo', label: 'Thu nhiệt' },
          ],
          items: [
            { id: 'i1', text: 'Gas cháy trên bếp', image: 'gas-stove-wok', groupId: 'exo' },
            { id: 'i2', text: 'Nung đá vôi trong lò', image: 'lime-kiln', groupId: 'endo' },
            {
              id: 'i3',
              text: 'Than hồng trong bếp nướng',
              image: 'charcoal-grill',
              groupId: 'exo',
            },
            {
              id: 'i4',
              text: 'Giấm gặp baking soda',
              image: 'fizzing-cold-cup',
              groupId: 'endo',
            },
            { id: 'i5', text: 'Que pháo bông cháy', image: 'sparkler', groupId: 'exo' },
          ],
          explanation:
            'Mọi sự cháy đều toả nhiệt: gas, than, pháo bông. Nung đá vôi phải cấp nhiệt liên tục, còn giấm với baking soda làm dung dịch lạnh đi, nên cả hai là thu nhiệt.',
          conceptIds: ['exothermic-endothermic'],
        },
        {
          id: 'u6-l2-e7',
          type: 'mcq',
          prompt:
            'Bếp gas cần một tia lửa mới cháy. Lò vôi cần đốt than suốt mấy ngày. Vì sao gas cháy là toả nhiệt, còn nung đá vôi là thu nhiệt?',
          options: [
            { id: 'a', text: 'Vì gas là chất khí, còn đá vôi là chất rắn' },
            { id: 'b', text: 'Vì cả hai đều cần nhiệt lúc đầu, nên thật ra đều là thu nhiệt' },
            {
              id: 'c',
              text: 'Vì gas chỉ cần mồi rồi tự toả nhiệt, còn đá vôi phải được cấp nhiệt liên tục',
            },
          ],
          correctOptionId: 'c',
          explanation:
            'Cần mồi lúc đầu chưa phải là thu nhiệt. Gas cháy rồi thì tự toả nhiệt và nuôi được ngọn lửa. Đá vôi thì khác: nó hấp thụ nhiệt trong suốt quá trình, ngừng đốt lò là phản ứng dừng.',
          conceptIds: ['exothermic-endothermic', 'combustion'],
        },
        {
          id: 'u6-l2-e8',
          type: 'match-pairs',
          prompt: 'Nối mỗi phản ứng với điều bạn quan sát được',
          pairs: [
            {
              left: { id: 'l1', text: 'Gas cháy trên bếp', image: 'gas-stove-wok' },
              right: { id: 'r1', text: 'Chiếc chảo phía trên nóng lên' },
            },
            {
              left: { id: 'l2', text: 'Giấm gặp baking soda', image: 'fizzing-cold-cup' },
              right: { id: 'r2', text: 'Số chỉ nhiệt kế tụt xuống' },
            },
            {
              left: { id: 'l3', text: 'Nung đá vôi', image: 'lime-kiln' },
              right: { id: 'r3', text: 'Phải đốt lò liên tục, tắt lửa là dừng' },
            },
            {
              left: { id: 'l4', text: 'Que pháo bông cháy', image: 'sparkler' },
              right: { id: 'r4', text: 'Tia sáng chói bắn ra tí tách' },
            },
          ],
          explanation:
            'Phản ứng toả nhiệt làm xung quanh nóng lên, có khi còn phát sáng. Phản ứng thu nhiệt làm xung quanh lạnh đi, hoặc đòi phải cấp nhiệt liên tục.',
          conceptIds: ['exothermic-endothermic', 'reaction-signs'],
        },
        {
          id: 'u6-l2-e9',
          type: 'order-steps',
          prompt: 'Một mẻ vôi ra lò như thế nào? Sắp xếp theo thứ tự',
          steps: [
            { id: 's1', text: 'Thợ xếp đá vôi và than vào lò' },
            { id: 's2', text: 'Than cháy, toả nhiệt làm lò nóng tới khoảng 900 °C' },
            { id: 's3', text: 'Đá vôi hấp thụ nhiệt, tách thành calcium oxide và carbon dioxide' },
            { id: 's4', text: 'Khí carbon dioxide bay ra khỏi lò' },
            { id: 's5', text: 'Lò nguội, thợ lấy vôi sống ra' },
          ],
          explanation:
            'Trong lò vôi có hai phản ứng nối đuôi nhau. Than cháy là phản ứng toả nhiệt. Nhiệt đó nuôi phản ứng thu nhiệt của đá vôi. Việc này chỉ dành cho thợ lành nghề: lò rất nóng và khí thoát ra rất ngạt.',
          conceptIds: ['exothermic-endothermic', 'reaction'],
        },
        {
          id: 'u6-l2-e10',
          type: 'mcq',
          prompt:
            'Thả vôi sống (CaO) vào nước, nó phản ứng với nước và nóng lên dữ dội, nước có thể sôi sùng sục. Phản ứng giữa vôi sống và nước thuộc loại nào?',
          options: [
            { id: 'a', text: 'Toả nhiệt' },
            { id: 'b', text: 'Thu nhiệt' },
            { id: 'c', text: 'Không toả cũng không thu nhiệt' },
          ],
          correctOptionId: 'a',
          explanation:
            'Xung quanh nóng lên, vậy phản ứng đã giải phóng nhiệt: đó là phản ứng toả nhiệt. Thật thú vị: làm ra vôi sống thì thu nhiệt, còn vôi sống gặp nước lại toả nhiệt. Hố vôi đang sôi gây bỏng rất nặng, nên đừng bao giờ lại gần.',
          conceptIds: ['exothermic-endothermic'],
        },
      ],
      unlocksMolecules: [],
      baseXp: 10,
    },

    // ───────────────────────── Bài 3: Tốc độ phản ứng và nhiệt độ ─────────────────────────
    {
      id: 'u6-l3-rate-temperature',
      title: 'Nhanh hay chậm?',
      intro: {
        title: 'Cốc sữa để quên trên bàn',
        story: [
          'Tối hè, bạn rót hai cốc sữa tươi. Một cốc cất vào tủ lạnh, một cốc để quên trên bàn. Sáng hôm sau, cốc trên bàn đã có mùi chua, có khi còn vón lợn cợn. Cốc trong tủ lạnh vẫn như lúc mới rót.',
          'Sữa bị chua vì vi khuẩn cắt đường trong sữa thành những phân tử đường nhỏ hơn như glucose, rồi biến glucose thành lactic acid, một chất có vị chua. Đó là một phản ứng hoá học, và nó xảy ra ở cả hai cốc. Khác nhau là ở ngoài bàn nó diễn ra nhanh, còn trong tủ lạnh thì rất chậm.',
          'Mức độ nhanh hay chậm của một phản ứng gọi là tốc độ phản ứng. Nhiệt độ càng cao thì tốc độ phản ứng càng lớn. Bạn đã biết càng nóng, các hạt chuyển động càng nhanh. Chúng va vào nhau nhiều hơn và mạnh hơn, nên phản ứng cũng xảy ra nhanh hơn.',
          'Tủ lạnh không làm phản ứng dừng hẳn, nó chỉ làm phản ứng chậm lại. Vì thế thức ăn để trong tủ lạnh vẫn hỏng, chỉ là lâu hơn nhiều.',
        ],
        visual: { type: 'reaction', reactionId: 'lactic-fermentation' },
      },
      exercises: [
        {
          id: 'u6-l3-e1',
          type: 'mcq',
          prompt: 'Tốc độ phản ứng cho bạn biết điều gì về một phản ứng?',
          options: [
            { id: 'a', text: 'Phản ứng toả nhiệt hay thu nhiệt' },
            { id: 'b', text: 'Phản ứng tạo ra bao nhiêu sản phẩm' },
            { id: 'c', text: 'Phản ứng xảy ra nhanh hay chậm' },
          ],
          correctOptionId: 'c',
          explanation:
            'Tốc độ phản ứng chỉ mức độ nhanh hay chậm của phản ứng. Toả hay thu nhiệt, nhiều hay ít sản phẩm là những chuyện khác.',
          conceptIds: ['reaction-rate'],
        },
        {
          id: 'u6-l3-e2',
          type: 'sort',
          prompt: 'Phản ứng nào nhanh, phản ứng nào chậm?',
          groups: [
            { id: 'fast', label: 'Nhanh: thấy ngay trong vài giây' },
            { id: 'slow', label: 'Chậm: nhiều ngày mới thấy' },
          ],
          items: [
            { id: 'i1', text: 'Que pháo bông cháy', image: 'sparkler', groupId: 'fast' },
            { id: 'i2', text: 'Đinh sắt bị gỉ', image: 'rusty-nail', groupId: 'slow' },
            { id: 'i3', text: 'Gas bắt lửa trên bếp', image: 'gas-stove-wok', groupId: 'fast' },
            {
              id: 'i4',
              text: 'Sữa bị chua dần trong tủ lạnh',
              image: 'open-fridge',
              groupId: 'slow',
            },
            {
              id: 'i5',
              text: 'Giấm gặp baking soda sủi bọt',
              image: 'vinegar-volcano',
              groupId: 'fast',
            },
            { id: 'i6', text: 'Dưa cải muối chua dần', image: 'pickle-jars', groupId: 'slow' },
          ],
          explanation:
            'Mỗi phản ứng có tốc độ riêng. Sự cháy và giấm gặp baking soda xảy ra gần như tức thì. Sắt gỉ, sữa bị chua trong tủ lạnh và dưa muối chua dần là những phản ứng chậm, phải nhiều ngày mới thấy rõ.',
          conceptIds: ['reaction-rate'],
        },
        {
          id: 'u6-l3-e3',
          type: 'true-false',
          prompt: 'Cho thức ăn vào tủ lạnh thì các phản ứng làm hỏng thức ăn sẽ dừng hẳn.',
          visual: { id: 'v', image: 'open-fridge' },
          answer: false,
          explanation:
            'Nhiệt độ thấp chỉ làm phản ứng chậm lại chứ không dừng hẳn. Vì thế thức ăn trong tủ lạnh vẫn hỏng dần, và hộp sữa nào cũng có hạn dùng.',
          conceptIds: ['reaction-rate'],
        },
        {
          id: 'u6-l3-e4',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Nhiệt độ càng cao, các hạt chuyển động càng ___ và va vào nhau càng nhiều, nên tốc độ phản ứng càng ___.',
          blanks: [
            { accepted: ['nhanh'], wordBank: ['nhanh', 'chậm', 'đều'] },
            { accepted: ['lớn'], wordBank: ['lớn', 'nhỏ', 'ổn định'] },
          ],
          explanation:
            'Muốn phản ứng, các hạt phải va vào nhau đủ mạnh. Nóng lên thì hạt chuyển động nhanh hơn, va chạm nhiều hơn và mạnh hơn, nên phản ứng nhanh hơn.',
          conceptIds: ['reaction-rate', 'particle-motion'],
        },
        {
          id: 'u6-l3-e5',
          type: 'mcq',
          prompt:
            'Trong nồi thường, nước sôi ở khoảng 100 °C và không nóng thêm được nữa. Trong nồi áp suất đậy kín, nước nóng tới khoảng 120 °C. Vì sao hầm xương bằng nồi áp suất nhanh mềm hơn?',
          visual: { id: 'v', image: 'pressure-cooker' },
          options: [
            {
              id: 'a',
              text: 'Vì nhiệt độ cao hơn nên các phản ứng làm mềm xương xảy ra nhanh hơn',
            },
            { id: 'b', text: 'Vì nồi đậy kín nên nước trong nồi nhiều hơn' },
            { id: 'c', text: 'Vì trong nồi áp suất không còn không khí' },
          ],
          correctOptionId: 'a',
          explanation:
            'Nấu chín và làm mềm thức ăn gồm nhiều phản ứng hoá học. Nóng hơn 20 °C, các phản ứng đó nhanh hơn hẳn, nên thời gian hầm thường rút xuống chỉ còn khoảng một phần ba tới một nửa. Nồi áp suất phải do người lớn dùng, và không được mở nắp khi hơi chưa xả hết.',
          conceptIds: ['reaction-rate'],
        },
        {
          id: 'u6-l3-e6',
          type: 'order-steps',
          prompt:
            'Một hộp sữa đã mở, để ở đâu thì chua nhanh nhất? Sắp xếp từ nhanh nhất tới chậm nhất',
          steps: [
            { id: 's1', text: 'Trên bàn bếp giữa trưa hè, khoảng 35 °C' },
            { id: 's2', text: 'Trong phòng bật điều hoà, khoảng 25 °C' },
            { id: 's3', text: 'Trong ngăn mát tủ lạnh, khoảng 4 °C' },
            { id: 's4', text: 'Trong ngăn đá, khoảng âm 18 °C' },
          ],
          explanation:
            'Nhiệt độ càng thấp, phản ứng làm sữa chua càng chậm. Ở 35 °C chỉ vài tiếng là sữa hỏng. Trong ngăn đá, phản ứng chậm tới mức gần như đứng yên.',
          conceptIds: ['reaction-rate'],
        },
        {
          id: 'u6-l3-e7',
          type: 'true-false',
          prompt: 'Phản ứng nào xảy ra nhanh thì chắc chắn là phản ứng toả nhiệt.',
          visual: { id: 'v', image: 'fizzing-cold-cup' },
          answer: false,
          explanation:
            'Nhanh hay chậm và toả hay thu nhiệt là hai chuyện khác nhau. Giấm gặp baking soda sủi bọt rất nhanh nhưng lại thu nhiệt. Ngược lại, sắt gỉ rất chậm mà vẫn toả nhiệt, chỉ là ít và từ từ nên bạn không cảm thấy.',
          conceptIds: ['reaction-rate', 'exothermic-endothermic'],
        },
        {
          id: 'u6-l3-e8',
          type: 'mcq',
          prompt:
            'Bột bánh mì nở được là nhờ những phản ứng hoá học sinh ra khí trong bột. Mùa đông trời lạnh, bột nở rất chậm. Người thợ nên làm gì cho bột nở nhanh hơn?',
          options: [
            { id: 'a', text: 'Cất bột vào tủ lạnh' },
            { id: 'b', text: 'Đặt bột ở chỗ ấm' },
            { id: 'c', text: 'Đặt bột ở chỗ tối' },
          ],
          correctOptionId: 'b',
          explanation:
            'Ấm hơn thì phản ứng nhanh hơn, nên thợ làm bánh thường ủ bột ở chỗ ấm chừng 30 °C. Ấm vừa phải thôi: các phản ứng này nhờ men sống trong bột, nóng quá thì men chết. Bài 6 sẽ kể về men.',
          conceptIds: ['reaction-rate'],
        },
        {
          id: 'u6-l3-e9',
          type: 'balance-reaction',
          reactionId: 'lactic-fermentation',
          prompt:
            'Trong cốc sữa để quên, vi khuẩn cắt đường của sữa thành glucose C₆H₁₂O₆, rồi biến glucose thành lactic acid C₃H₆O₃. Cân bằng phương trình của bước thứ hai',
          explanation:
            'Glucose có 6 C, 12 H, 6 O. Mỗi phân tử lactic acid có 3 C, 6 H, 3 O, đúng bằng một nửa. Vậy một phân tử glucose tách thành 2 phân tử lactic acid: C₆H₁₂O₆ → 2C₃H₆O₃.',
          conceptIds: ['balancing', 'conservation-of-mass'],
        },
        {
          id: 'u6-l3-e10',
          type: 'mcq',
          prompt:
            'Thịt, cá để ngăn đá giữ được hàng tháng, còn để ngăn mát chỉ được vài ngày. Vì sao?',
          options: [
            { id: 'a', text: 'Vì trong ngăn đá không còn oxygen' },
            {
              id: 'b',
              text: 'Vì ngăn đá lạnh hơn nhiều nên các phản ứng làm hỏng thức ăn chậm hơn nhiều',
            },
            { id: 'c', text: 'Vì cái lạnh của ngăn đá diệt sạch vi khuẩn' },
          ],
          correctOptionId: 'b',
          explanation:
            'Càng lạnh, phản ứng càng chậm. Ngăn đá không hút hết oxygen và cũng không diệt sạch vi khuẩn, nó chỉ làm mọi thứ chậm lại. Rã đông xong, thức ăn lại hỏng nhanh như thường, nên cần nấu ngay.',
          conceptIds: ['reaction-rate'],
        },
      ],
      unlocksMolecules: ['c3h6o3'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 4: Bề mặt tiếp xúc và nồng độ ─────────────────────────
    {
      id: 'u6-l4-surface-concentration',
      title: 'Chẻ nhỏ, quạt mạnh',
      intro: {
        title: 'Vì sao phải chẻ củi?',
        story: [
          'Bà nhóm bếp củi. Bà không châm lửa vào khúc gỗ to, mà chẻ nó thành những thanh nhỏ rồi mới nhóm. Thanh củi nhỏ bén lửa ngay, còn khúc gỗ to thì hơ mãi chỉ ám khói.',
          'Muốn cháy, gỗ phải gặp oxygen. Nhưng các phân tử oxygen trong không khí chỉ chạm được vào lớp ngoài cùng của thanh củi. Mặt ngoài ấy, nơi hai chất gặp nhau, gọi là bề mặt tiếp xúc.',
          'Chẻ khúc gỗ ra, những mặt gỗ mới lộ ra ngoài. Vẫn chừng ấy gỗ, nhưng diện tích bề mặt tiếp xúc lớn hơn nhiều. Oxygen chạm được nhiều chỗ hơn cùng một lúc, nên củi cháy nhanh hơn.',
          'Lửa yếu thì bà quạt mấy cái, lửa lại bùng lên. Quạt đưa không khí mới tới, nên quanh củi có nhiều oxygen hơn. Một chất có càng nhiều hạt trong cùng một khoảng không gian thì ta nói nồng độ của nó càng cao. Nồng độ chất tham gia càng cao, phản ứng càng nhanh.',
        ],
        visual: { type: 'molecule', moleculeId: 'o2', scene: 'firewood-stove' },
      },
      exercises: [
        {
          id: 'u6-l4-e1',
          type: 'mcq',
          prompt: 'Cùng một lượng gỗ, cách nào làm gỗ bén lửa và cháy nhanh nhất?',
          visual: { id: 'v', image: 'firewood-stove' },
          options: [
            { id: 'a', text: 'Để nguyên khúc gỗ to' },
            { id: 'b', text: 'Bổ khúc gỗ làm đôi' },
            { id: 'c', text: 'Chẻ khúc gỗ thành nhiều thanh nhỏ' },
          ],
          correctOptionId: 'c',
          explanation:
            'Chẻ càng nhỏ, càng nhiều mặt gỗ lộ ra ngoài để gặp oxygen. Diện tích bề mặt tiếp xúc lớn hơn thì phản ứng cháy nhanh hơn.',
          conceptIds: ['reaction-rate'],
        },
        {
          id: 'u6-l4-e2',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Chẻ nhỏ củi làm diện tích bề mặt tiếp xúc với oxygen ___, nên phản ứng cháy xảy ra ___ hơn.',
          blanks: [
            { accepted: ['lớn hơn'], wordBank: ['lớn hơn', 'nhỏ hơn', 'không đổi'] },
            { accepted: ['nhanh'], wordBank: ['nhanh', 'chậm', 'ít'] },
          ],
          explanation:
            'Phản ứng giữa chất rắn và chất khí chỉ xảy ra ở mặt ngoài của chất rắn. Mặt ngoài càng rộng thì càng nhiều hạt gặp được nhau cùng lúc.',
          conceptIds: ['reaction-rate'],
        },
        {
          id: 'u6-l4-e3',
          type: 'true-false',
          prompt:
            'Viên than tổ ong được đục nhiều lỗ để than tiếp xúc với không khí nhiều hơn và cháy tốt hơn.',
          visual: { id: 'v', image: 'coal-stove' },
          answer: true,
          explanation:
            'Mỗi cái lỗ là thêm một mặt than lộ ra, lại là đường cho không khí đi xuyên qua viên than. Diện tích bề mặt tiếp xúc với oxygen tăng lên nên than cháy đều và nhanh hơn một cục than đặc.',
          conceptIds: ['reaction-rate', 'combustion'],
        },
        {
          id: 'u6-l4-e4',
          type: 'mcq',
          prompt:
            'Một khối gỗ hình hộp có 6 mặt lộ ra ngoài. Bạn bổ đôi nó rồi tách hai nửa ra. Tổng diện tích bề mặt gỗ lộ ra ngoài thay đổi thế nào?',
          options: [
            { id: 'a', text: 'Tăng lên, vì có thêm hai mặt cắt mới lộ ra' },
            { id: 'b', text: 'Không đổi, vì lượng gỗ vẫn như cũ' },
            { id: 'c', text: 'Giảm đi, vì mỗi nửa nhỏ hơn khối ban đầu' },
          ],
          correctOptionId: 'a',
          explanation:
            'Lượng gỗ không đổi, nhưng hai mặt cắt trước kia nằm kín bên trong giờ đã lộ ra. Cứ mỗi lần chẻ là thêm bề mặt mới. Vì thế cùng một lượng chất, hạt càng nhỏ thì tổng diện tích bề mặt càng lớn.',
          conceptIds: ['reaction-rate'],
        },
        {
          id: 'u6-l4-e5',
          type: 'sort',
          prompt: 'Việc nào làm phản ứng nhanh hơn, việc nào làm phản ứng chậm đi?',
          groups: [
            { id: 'faster', label: 'Nhanh hơn' },
            { id: 'slower', label: 'Chậm đi' },
          ],
          items: [
            {
              id: 'i1',
              text: 'Chẻ nhỏ củi trước khi nhóm bếp',
              image: 'firewood-stove',
              groupId: 'faster',
            },
            { id: 'i2', text: 'Cất thức ăn vào tủ lạnh', image: 'open-fridge', groupId: 'slower' },
            { id: 'i3', text: 'Quạt gió vào bếp than', image: 'charcoal-grill', groupId: 'faster' },
            {
              id: 'i4',
              text: 'Đóng bớt cửa gió của bếp than tổ ong',
              image: 'coal-stove',
              groupId: 'slower',
            },
            {
              id: 'i5',
              text: 'Hầm xương bằng nồi áp suất',
              image: 'pressure-cooker',
              groupId: 'faster',
            },
            {
              id: 'i6',
              text: 'Pha loãng giấm bằng nước trước khi cho baking soda vào',
              groupId: 'slower',
            },
          ],
          explanation:
            'Chẻ nhỏ làm tăng diện tích bề mặt tiếp xúc. Quạt gió làm tăng nồng độ oxygen quanh than, đóng cửa gió thì ngược lại. Nồi áp suất làm tăng nhiệt độ, tủ lạnh làm giảm nhiệt độ. Giấm pha loãng có nồng độ acetic acid thấp hơn nên sủi bọt chậm hơn.',
          conceptIds: ['reaction-rate'],
        },
        {
          id: 'u6-l4-e6',
          type: 'mcq',
          prompt:
            'Không khí chỉ có khoảng một phần năm là oxygen. Trong phòng thí nghiệm, cô giáo đưa một que đóm (que gỗ nhỏ) còn tàn đỏ vào lọ chứa toàn khí oxygen. Que đóm lập tức bùng cháy sáng rực. Vì sao?',
          options: [
            { id: 'a', text: 'Vì trong lọ nóng hơn ở ngoài' },
            {
              id: 'b',
              text: 'Vì nồng độ oxygen trong lọ cao hơn trong không khí nên phản ứng cháy nhanh hơn',
            },
            { id: 'c', text: 'Vì que đóm có bề mặt tiếp xúc lớn hơn khi ở trong lọ' },
          ],
          correctOptionId: 'b',
          explanation:
            'Vẫn que đóm ấy, vẫn nhiệt độ ấy, chỉ khác là quanh nó có nhiều phân tử oxygen hơn gấp mấy lần. Nồng độ chất tham gia càng cao thì các hạt gặp nhau càng thường xuyên, phản ứng càng nhanh.',
          conceptIds: ['reaction-rate', 'combustion'],
        },
        {
          id: 'u6-l4-e7',
          type: 'match-pairs',
          prompt: 'Mỗi ví dụ dưới đây nói về yếu tố nào làm thay đổi tốc độ phản ứng?',
          pairs: [
            {
              left: { id: 'l1', text: 'Sữa cất tủ lạnh thì lâu bị chua hơn', image: 'open-fridge' },
              right: { id: 'r1', text: 'Nhiệt độ' },
            },
            {
              left: { id: 'l2', text: 'Củi chẻ nhỏ dễ cháy hơn', image: 'firewood-stove' },
              right: { id: 'r2', text: 'Diện tích bề mặt tiếp xúc' },
            },
            {
              left: { id: 'l3', text: 'Quạt mạnh, than cháy rực hơn', image: 'charcoal-grill' },
              right: { id: 'r3', text: 'Nồng độ' },
            },
          ],
          explanation:
            'Tủ lạnh hạ nhiệt độ. Chẻ củi làm tăng diện tích bề mặt tiếp xúc. Quạt đưa thêm không khí mới tới, làm tăng nồng độ oxygen quanh than. Cả ba đều là cách điều khiển tốc độ phản ứng.',
          conceptIds: ['reaction-rate'],
        },
        {
          id: 'u6-l4-e8',
          type: 'order-steps',
          prompt:
            'Vỏ trứng là calcium carbonate. Ngâm trong giấm, nó phản ứng với acetic acid và sủi bọt khí carbon dioxide. Cùng một lượng vỏ trứng, sắp xếp từ sủi bọt chậm nhất tới nhanh nhất',
          steps: [
            { id: 's1', text: 'Nửa vỏ trứng để nguyên' },
            { id: 's2', text: 'Vỏ trứng bóp thành vài mảnh to' },
            { id: 's3', text: 'Vỏ trứng giã thành mảnh vụn' },
            { id: 's4', text: 'Vỏ trứng nghiền thành bột mịn' },
          ],
          explanation:
            'Mảnh càng nhỏ thì tổng diện tích bề mặt tiếp xúc với giấm càng lớn, nên sủi bọt càng nhanh. Đây là thí nghiệm bạn làm được trong bếp với hai cái cốc, ít giấm ăn và vỏ trứng đã rửa sạch.',
          conceptIds: ['reaction-rate'],
        },
        {
          id: 'u6-l4-e9',
          type: 'mcq',
          prompt:
            'Bạn ngâm hai phần vỏ trứng nặng bằng nhau vào hai cốc giấm đầy như nhau: một phần để nguyên mảnh, một phần giã nhỏ. Giấm rất nhiều, thừa đủ để phản ứng hết chỗ vỏ trứng. Khi vỏ trứng ở cả hai cốc đã phản ứng hết thì kết quả thế nào?',
          options: [
            {
              id: 'a',
              text: 'Cốc vỏ giã nhỏ xong trước và sinh ra nhiều khí hơn',
            },
            {
              id: 'b',
              text: 'Cốc vỏ giã nhỏ xong trước, nhưng hai cốc sinh ra lượng khí như nhau',
            },
            {
              id: 'c',
              text: 'Hai cốc xong cùng lúc vì lượng vỏ trứng bằng nhau',
            },
          ],
          correctOptionId: 'b',
          explanation:
            'Giã nhỏ chỉ làm phản ứng nhanh hơn. Giấm thì cốc nào cũng thừa, nên lượng khí sinh ra phụ thuộc vào lượng vỏ trứng, mà hai cốc có lượng vỏ trứng bằng nhau. Nguyên tử không tự sinh thêm, nên nhanh hơn không có nghĩa là nhiều hơn.',
          conceptIds: ['reaction-rate', 'conservation-of-mass'],
        },
        {
          id: 'u6-l4-e10',
          type: 'true-false',
          prompt:
            'Đường xay mịn tan trong cốc trà nhanh hơn đường phèn cục to. Đây là một ví dụ về tốc độ phản ứng hoá học.',
          visual: { id: 'v', image: 'sugar-tea' },
          answer: false,
          explanation:
            'Đường tan trong trà là hoà tan, một biến đổi vật lí: không có chất mới nên không có phản ứng nào để nói tới tốc độ phản ứng. Dù vậy lí do thì quen: hạt đường nhỏ có diện tích bề mặt tiếp xúc với nước lớn hơn nên tan nhanh hơn.',
          conceptIds: ['reaction-rate', 'physical-change'],
        },
      ],
      unlocksMolecules: [],
      baseXp: 10,
    },

    // ───────────────────────── Bài 5: Chất xúc tác ─────────────────────────
    {
      id: 'u6-l5-catalyst',
      title: 'Chất xúc tác: giúp mà không hao',
      intro: {
        title: 'Lát khoai tây và cốc oxy già',
        story: [
          'Chai oxy già loại 3% trong tủ thuốc trông lặng như nước. Thật ra hydrogen peroxide trong đó vẫn đang tự tách thành nước và khí oxygen, nhưng chậm tới mức để cả năm chai vẫn chưa hết.',
          'Thả một lát khoai tây sống vào cốc oxy già. Lát khoai lập tức phủ kín bọt trắng. Bọt đó là khí oxygen: vẫn là phản ứng cũ, nhưng giờ nhanh hơn rất nhiều lần.',
          'Trong khoai tây có một chất giúp hydrogen peroxide tách ra nhanh hơn, còn bản thân nó thì không bị tiêu hao. Hết bọt, rót thêm oxy già mới vào, lát khoai lại sủi tiếp. Chất làm phản ứng xảy ra nhanh hơn mà sau phản ứng vẫn còn nguyên gọi là chất xúc tác.',
          'Chất xúc tác do cơ thể sống tạo ra gọi là enzyme. Trong máu bạn cũng có loại enzyme như của khoai tây, vì thế oxy già sủi bọt trên vết xước. Nước bọt, men làm bánh, men giấm đều chứa enzyme.',
        ],
        visual: { type: 'reaction', reactionId: 'peroxide-with-potato' },
      },
      exercises: [
        {
          id: 'u6-l5-e1',
          type: 'mcq',
          prompt:
            'Lát khoai tây làm oxy già sủi bọt nhanh hơn hẳn. Chất có trong khoai tây đóng vai trò gì trong phản ứng này?',
          visual: { id: 'v', image: 'potato-peroxide' },
          options: [
            { id: 'a', text: 'Chất tham gia: nó bị dùng hết dần' },
            { id: 'b', text: 'Chất xúc tác: nó làm phản ứng nhanh hơn mà không bị tiêu hao' },
            { id: 'c', text: 'Sản phẩm: nó được sinh ra từ phản ứng' },
          ],
          correctOptionId: 'b',
          explanation:
            'Chất tham gia duy nhất là hydrogen peroxide, sản phẩm là nước và khí oxygen. Chất trong khoai tây chỉ giúp phản ứng nhanh hơn và vẫn còn nguyên sau phản ứng. Đó là chất xúc tác.',
          conceptIds: ['catalyst'],
        },
        {
          id: 'u6-l5-e2',
          type: 'true-false',
          prompt:
            'Khi cốc oxy già đã sủi hết bọt, chất xúc tác trong lát khoai tây cũng đã bị dùng hết.',
          visual: { id: 'v', image: 'potato-peroxide' },
          answer: false,
          explanation:
            'Thứ đã hết là hydrogen peroxide, chất tham gia. Chất xúc tác thì vẫn còn đó: rót thêm oxy già mới vào, lát khoai lại sủi bọt tiếp. Nếu muốn tự thử, hãy làm cùng người lớn và chỉ dùng oxy già loại 3% của tủ thuốc.',
          conceptIds: ['catalyst'],
        },
        {
          id: 'u6-l5-e3',
          type: 'sort',
          prompt: 'Trong phản ứng oxy già sủi bọt trên lát khoai tây, mỗi chất đóng vai gì?',
          groups: [
            { id: 'reactant', label: 'Chất tham gia' },
            { id: 'product', label: 'Sản phẩm' },
            { id: 'catalyst', label: 'Chất xúc tác' },
          ],
          items: [
            { id: 'i1', moleculeId: 'o2', text: 'Oxygen', groupId: 'product' },
            { id: 'i2', text: 'Enzyme trong khoai tây', groupId: 'catalyst' },
            { id: 'i3', moleculeId: 'h2o2', text: 'Hydrogen peroxide', groupId: 'reactant' },
            { id: 'i4', moleculeId: 'h2o', text: 'Nước', groupId: 'product' },
          ],
          explanation:
            'Hydrogen peroxide mất đi nên là chất tham gia. Nước và oxygen sinh ra nên là sản phẩm. Enzyme trước và sau phản ứng vẫn thế, nó là chất xúc tác.',
          conceptIds: ['catalyst', 'reactants-products'],
        },
        {
          id: 'u6-l5-e4',
          type: 'balance-reaction',
          reactionId: 'peroxide-with-potato',
          prompt:
            'Cân bằng phương trình hydrogen peroxide tách thành nước và khí oxygen. Để ý: enzyme không có mặt trong phương trình',
          explanation:
            'Cần 2 phân tử H₂O₂ mới đủ oxygen cho 2 phân tử H₂O và 1 phân tử O₂. Kết quả: 2H₂O₂ → 2H₂O + O₂. Chất xúc tác không bị biến đổi nên không viết ở vế nào, người ta ghi nó phía trên mũi tên.',
          conceptIds: ['balancing', 'catalyst'],
        },
        {
          id: 'u6-l5-e5',
          type: 'fill-blank',
          prompt: 'Điền vào chỗ trống',
          template: 'Chất xúc tác do cơ thể sống tạo ra gọi là ___.',
          blanks: [{ accepted: ['enzyme'], wordBank: ['nhiên liệu', 'enzyme', 'dung môi'] }],
          explanation:
            'Enzyme là chất xúc tác của sự sống. Cây khoai tây, con men, vi khuẩn và cả cơ thể bạn đều tự làm ra enzyme để các phản ứng cần thiết xảy ra đủ nhanh.',
          conceptIds: ['catalyst'],
        },
        {
          id: 'u6-l5-e6',
          type: 'mcq',
          prompt:
            'Nhai kĩ một miếng cơm trắng, lát sau bạn thấy ngọt nhẹ. Enzyme trong nước bọt đã giúp tinh bột trong cơm biến thành đường. Nếu không có enzyme này thì sao?',
          options: [
            {
              id: 'a',
              text: 'Tinh bột vẫn có thể thành đường, nhưng chậm tới mức bạn chẳng kịp thấy ngọt',
            },
            { id: 'b', text: 'Tinh bột biến thành đường nhanh hơn' },
            { id: 'c', text: 'Tinh bột biến thành một chất khác hẳn chứ không phải đường' },
          ],
          correctOptionId: 'a',
          explanation:
            'Chất xúc tác không tạo ra phản ứng mới, nó chỉ làm một phản ứng vốn rất chậm trở nên nhanh. Không có enzyme, tinh bột ngâm trong nước ấm rất lâu vẫn gần như chưa thành đường.',
          conceptIds: ['catalyst', 'reaction-rate'],
        },
        {
          id: 'u6-l5-e7',
          type: 'match-pairs',
          prompt: 'Mỗi enzyme chỉ giúp một phản ứng nhất định. Nối enzyme với việc của nó',
          pairs: [
            {
              left: { id: 'l1', text: 'Enzyme trong nước bọt' },
              right: { id: 'r1', text: 'Giúp tinh bột biến thành đường' },
            },
            {
              left: { id: 'l2', text: 'Enzyme trong khoai tây và trong máu' },
              right: { id: 'r2', text: 'Giúp hydrogen peroxide tách thành nước và oxygen' },
            },
            {
              left: { id: 'l3', text: 'Enzyme trong men làm bánh' },
              right: { id: 'r3', text: 'Giúp đường biến thành khí làm bột nở' },
            },
          ],
          explanation:
            'Enzyme rất kén việc: enzyme của nước bọt không làm oxy già sủi bọt, enzyme của khoai tây không làm bột nở. Mỗi loại chỉ khớp với một phản ứng, giống chìa nào thì mở khoá nấy.',
          conceptIds: ['catalyst'],
        },
        {
          id: 'u6-l5-e8',
          type: 'true-false',
          prompt:
            'Thêm chất xúc tác vào thì cùng một lượng oxy già sẽ cho ra nhiều khí oxygen hơn.',
          answer: false,
          explanation:
            'Chất xúc tác chỉ làm phản ứng nhanh hơn, không làm tăng lượng sản phẩm. Lượng khí oxygen phụ thuộc vào lượng hydrogen peroxide ban đầu. Có lát khoai, bạn thu được chừng ấy khí trong vài phút thay vì vài năm.',
          conceptIds: ['catalyst', 'conservation-of-mass'],
        },
        {
          id: 'u6-l5-e9',
          type: 'sort',
          prompt: 'Mỗi việc dưới đây thay đổi tốc độ phản ứng bằng yếu tố nào?',
          groups: [
            { id: 'temp', label: 'Nhiệt độ' },
            { id: 'surface', label: 'Bề mặt tiếp xúc' },
            { id: 'catalyst', label: 'Chất xúc tác' },
          ],
          items: [
            {
              id: 'i1',
              text: 'Oxy già gặp máu ở vết xước thì sủi bọt',
              image: 'hydrogen-peroxide',
              groupId: 'catalyst',
            },
            { id: 'i2', text: 'Cất sữa vào tủ lạnh', image: 'open-fridge', groupId: 'temp' },
            {
              id: 'i3',
              text: 'Chẻ nhỏ củi cho dễ cháy',
              image: 'firewood-stove',
              groupId: 'surface',
            },
            {
              id: 'i4',
              text: 'Hầm xương bằng nồi áp suất',
              image: 'pressure-cooker',
              groupId: 'temp',
            },
            {
              id: 'i5',
              text: 'Nước bọt giúp tinh bột thành đường khi nhai cơm',
              groupId: 'catalyst',
            },
            {
              id: 'i6',
              text: 'Than tổ ong đục nhiều lỗ',
              image: 'coal-stove',
              groupId: 'surface',
            },
          ],
          explanation:
            'Tủ lạnh và nồi áp suất thay đổi nhiệt độ. Chẻ củi và đục lỗ viên than làm tăng diện tích bề mặt tiếp xúc. Máu và nước bọt có enzyme, tức là chất xúc tác. Cùng với nồng độ, đó là bốn yếu tố làm thay đổi tốc độ phản ứng.',
          conceptIds: ['reaction-rate', 'catalyst'],
        },
        {
          id: 'u6-l5-e10',
          type: 'mcq',
          prompt:
            'Ống xả của ô tô, xe máy đời mới có một bộ phận chứa kim loại quý làm chất xúc tác. Nó giúp khí độc carbon monoxide phản ứng nhanh với oxygen thành carbon dioxide. Sau nhiều năm xe chạy, lượng kim loại quý đó thế nào?',
          options: [
            { id: 'a', text: 'Đã hết từ lâu, vì nó bị dùng dần trong phản ứng' },
            { id: 'b', text: 'Nhiều lên, vì nó được sinh ra từ phản ứng' },
            { id: 'c', text: 'Gần như còn nguyên, vì chất xúc tác không bị tiêu hao' },
          ],
          correctOptionId: 'c',
          explanation:
            'Chất xúc tác không phải chất tham gia nên không bị dùng hết, cũng không phải sản phẩm nên không sinh thêm. Chừng ấy kim loại xử lí khí thải suốt đời xe. Chất xúc tác không chỉ có trong cơ thể sống: enzyme chỉ là một loại chất xúc tác.',
          conceptIds: ['catalyst'],
        },
      ],
      unlocksMolecules: [],
      baseXp: 10,
    },

    // ───────────────────────── Bài 6: Lên men ─────────────────────────
    {
      id: 'u6-l6-fermentation',
      title: 'Bánh nở và hũ dưa chua',
      intro: {
        title: 'Ai thổi phồng ổ bánh mì?',
        story: [
          'Cục bột mì vừa nhào xong chỉ bằng nắm tay. Ủ ấm một tiếng, nó phồng lên gấp đôi. Cho vào lò, nó thành ổ bánh mì vàng ruộm, ruột đầy lỗ xốp.',
          'Thủ phạm là men làm bánh, một loại nấm bé xíu còn sống. Men ăn đường có trong bột, như glucose (C₆H₁₂O₆), rồi nhờ enzyme biến nó thành ethanol và khí carbon dioxide. Hàng triệu bong bóng khí kẹt lại trong bột, đẩy bột phồng lên. Ethanol thì bay hơi gần hết khi nướng.',
          'Nấm men, vi khuẩn là những sinh vật nhỏ tới mức mắt thường không thấy, gọi chung là vi sinh vật. Quá trình vi sinh vật dùng enzyme biến chất này thành chất khác gọi là lên men.',
          'Lên men có ở khắp gian bếp. Vi khuẩn lactic biến đường thành lactic acid, làm sữa thành sữa chua và làm dưa cải chua giòn. Vi khuẩn giấm biến ethanol trong rượu thành acetic acid, chất làm nên vị chua của giấm.',
        ],
        visual: { type: 'reaction', reactionId: 'alcoholic-fermentation' },
      },
      exercises: [
        {
          id: 'u6-l6-e1',
          type: 'mcq',
          prompt: 'Khi ủ bột bánh mì, men sinh ra khí nào làm bột nở phồng?',
          visual: { id: 'v', image: 'bread-oven' },
          options: [
            { id: 'a', moleculeId: 'o2', text: 'Oxygen' },
            { id: 'b', moleculeId: 'n2', text: 'Nitrogen' },
            { id: 'c', moleculeId: 'co2', text: 'Carbon dioxide' },
          ],
          correctOptionId: 'c',
          explanation:
            'Men biến glucose thành ethanol và khí carbon dioxide. Chính những bong bóng carbon dioxide kẹt trong bột làm bột phồng lên, rồi để lại các lỗ xốp trong ruột bánh.',
          conceptIds: ['fermentation'],
        },
        {
          id: 'u6-l6-e2',
          type: 'fill-blank',
          prompt: 'Điền vào chỗ trống',
          template:
            'Quá trình vi sinh vật như nấm men, vi khuẩn dùng enzyme biến chất này thành chất khác gọi là ___.',
          blanks: [{ accepted: ['lên men'], wordBank: ['sự cháy', 'hoà tan', 'lên men'] }],
          explanation:
            'Lên men là phản ứng hoá học do vi sinh vật thực hiện nhờ enzyme của chúng. Bánh mì, sữa chua, dưa muối, kim chi, giấm đều là sản phẩm của lên men.',
          conceptIds: ['fermentation', 'catalyst'],
        },
        {
          id: 'u6-l6-e3',
          type: 'true-false',
          prompt: 'Men làm bánh là một chất bột không có sự sống, giống như baking soda.',
          answer: false,
          explanation:
            'Men làm bánh là nấm men, một sinh vật sống đang ngủ khi ở dạng khô. Gặp nước ấm và đường, nó thức dậy và bắt đầu lên men. Baking soda thì là một hợp chất, không có sự sống.',
          conceptIds: ['fermentation'],
        },
        {
          id: 'u6-l6-e4',
          type: 'balance-reaction',
          reactionId: 'alcoholic-fermentation',
          prompt:
            'Cân bằng phương trình lên men trong bột bánh mì: glucose C₆H₁₂O₆ thành ethanol C₂H₆O và carbon dioxide. Gợi ý: xét hydrogen trước, rồi carbon, cuối cùng đếm lại oxygen',
          explanation:
            'Thử 2 phân tử ethanol: đã có 4 C và 12 H, vừa đủ hydrogen. Còn thiếu 2 C, nên cần 2 CO₂. Đếm oxygen: 2 + 4 = 6, vừa khít. Kết quả: C₆H₁₂O₆ → 2C₂H₆O + 2CO₂.',
          conceptIds: ['balancing', 'fermentation'],
        },
        {
          id: 'u6-l6-e5',
          type: 'mcq',
          prompt:
            'Bánh bông lan không dùng men mà dùng bột nở có baking soda (NaHCO₃). Trong lò nóng, baking soda bị nhiệt phân, tức là bị nhiệt tách ra thành sodium carbonate (Na₂CO₃), nước và một chất khí làm bánh nở. Khí đó là gì?',
          visual: { id: 'v', image: 'baking-cake' },
          options: [
            { id: 'a', moleculeId: 'co2', text: 'Carbon dioxide' },
            { id: 'b', moleculeId: 'o2', text: 'Oxygen' },
            { id: 'c', moleculeId: 'h2', text: 'Hydrogen' },
          ],
          correctOptionId: 'a',
          explanation:
            'Baking soda có nguyên tử carbon, mà sodium carbonate và nước chưa dùng hết số carbon và oxygen đó. Phần còn lại bay ra thành khí carbon dioxide. Phản ứng này thu nhiệt: phải có nhiệt của lò thì nó mới xảy ra.',
          conceptIds: ['reactants-products', 'exothermic-endothermic'],
        },
        {
          id: 'u6-l6-e6',
          type: 'balance-reaction',
          reactionId: 'baking-soda-decomposition',
          prompt:
            'Cân bằng phương trình baking soda bị nhiệt phân trong lò nướng. Gợi ý: bắt đầu từ sodium (Na)',
          explanation:
            'Na₂CO₃ có 2 Na nên cần 2 NaHCO₃. Khi đó vế trái có 2 H, 2 C và 6 O. Vế phải: Na₂CO₃, H₂O và CO₂ cũng có 2 H, 2 C và 3 + 1 + 2 = 6 O. Kết quả: 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂.',
          conceptIds: ['balancing'],
        },
        {
          id: 'u6-l6-e7',
          type: 'match-pairs',
          prompt: 'Nối mỗi món với điều đã xảy ra khi làm ra nó',
          pairs: [
            {
              left: { id: 'l1', text: 'Bánh mì', image: 'bread-oven' },
              right: { id: 'r1', text: 'Men biến glucose thành ethanol và khí làm bột nở' },
            },
            {
              left: { id: 'l2', text: 'Dưa muối, sữa chua', image: 'pickle-jars' },
              right: { id: 'r2', text: 'Vi khuẩn lactic biến đường thành lactic acid' },
            },
            {
              left: { id: 'l3', text: 'Giấm', image: 'vinegar-bottle' },
              right: { id: 'r3', text: 'Vi khuẩn giấm biến ethanol thành acetic acid' },
            },
            {
              left: { id: 'l4', text: 'Bánh bông lan', image: 'baking-cake' },
              right: { id: 'r4', text: 'Không lên men: baking soda bị nhiệt phân' },
            },
          ],
          explanation:
            'Ba món đầu đều nhờ vi sinh vật lên men, mỗi loài tạo ra một chất riêng. Bánh bông lan thì nở nhờ một phản ứng không cần sinh vật nào: nhiệt tách baking soda ra và giải phóng khí.',
          conceptIds: ['fermentation'],
        },
        {
          id: 'u6-l6-e8',
          type: 'mcq',
          prompt:
            'Muốn làm giấm, người ta cho rượu loãng và vi khuẩn giấm vào hũ, rồi chỉ đậy miệng hũ bằng vải thưa cho thoáng khí. Vi khuẩn giấm biến ethanol thành acetic acid và nước: C₂H₆O + ? → CH₃COOH + H₂O. Vế phải có 3 nguyên tử oxygen, vế trái mới có 1, còn carbon và hydrogen thì đã đủ. Vi khuẩn giấm phải lấy thêm chất nào từ không khí?',
          visual: { id: 'v', image: 'vinegar-bottle' },
          options: [
            { id: 'a', moleculeId: 'co2', text: 'Carbon dioxide' },
            { id: 'b', moleculeId: 'o2', text: 'Oxygen' },
            { id: 'c', moleculeId: 'n2', text: 'Nitrogen' },
          ],
          correctOptionId: 'b',
          explanation:
            'Vế trái còn thiếu đúng 2 nguyên tử oxygen, tức là một phân tử O₂: C₂H₆O + O₂ → CH₃COOH + H₂O. Carbon dioxide cũng có oxygen, nhưng nó mang theo cả carbon, mà carbon thì đã đủ rồi. Đậy kín hũ thì vi khuẩn giấm thiếu oxygen và rượu không thành giấm được. Sách lớp 9 gọi ethanol là ethylic alcohol, hai tên chỉ cùng một chất.',
          conceptIds: ['fermentation', 'reactants-products'],
        },
        {
          id: 'u6-l6-e9',
          type: 'sort',
          prompt:
            'Căn bếp lúc nấu ăn đầy những biến đổi. Biến đổi nào tạo ra chất mới, biến đổi nào không?',
          groups: [
            { id: 'chemical', label: 'Biến đổi hoá học' },
            { id: 'physical', label: 'Biến đổi vật lí' },
          ],
          items: [
            {
              id: 'i1',
              text: 'Đường đun trên chảo ngả nâu thành caramel',
              groupId: 'chemical',
            },
            { id: 'i2', text: 'Nước trong ấm sôi', image: 'boiling-kettle', groupId: 'physical' },
            {
              id: 'i3',
              text: 'Miếng thịt nướng vàng nâu, dậy mùi thơm',
              image: 'charcoal-grill',
              groupId: 'chemical',
            },
            { id: 'i4', text: 'Đường tan trong cốc trà', image: 'sugar-tea', groupId: 'physical' },
            {
              id: 'i5',
              text: 'Bột bánh mì nở phồng khi ủ men',
              image: 'bread-oven',
              groupId: 'chemical',
            },
            { id: 'i6', text: 'Miếng bơ chảy ra trên chảo nóng', groupId: 'physical' },
          ],
          explanation:
            'Màu mới và mùi mới là dấu hiệu có chất mới: đường thành caramel, thịt nướng vàng thơm đều là biến đổi hoá học khi đun nóng. Bột nở là do lên men sinh ra khí. Còn sôi, tan và chảy thì không tạo ra chất mới nào: nước vẫn là nước, đường vẫn là đường, bơ vẫn là bơ.',
          conceptIds: ['chemical-change', 'physical-change', 'reaction-signs'],
        },
        {
          id: 'u6-l6-e10',
          type: 'mcq',
          prompt:
            'Hũ dưa cải muối để ngoài bếp vài ngày thì vừa chua. Muốn dưa không chua thêm quá nhanh, bạn nên làm gì?',
          visual: { id: 'v', image: 'pickle-jars' },
          options: [
            { id: 'a', text: 'Cất hũ dưa vào tủ lạnh' },
            { id: 'b', text: 'Đặt hũ dưa cạnh bếp cho ấm' },
            { id: 'c', text: 'Cho thêm đường vào hũ dưa' },
          ],
          correctOptionId: 'a',
          explanation:
            'Lên men cũng là phản ứng hoá học, nên nhiệt độ thấp làm nó chậm lại. Trong tủ lạnh, vi khuẩn lactic làm việc rất chậm và dưa giữ được độ chua vừa ăn lâu hơn. Để chỗ ấm hay thêm đường chỉ làm dưa chua nhanh hơn.',
          conceptIds: ['fermentation', 'reaction-rate'],
        },
      ],
      unlocksMolecules: ['c6h12o6', 'na2co3'],
      baseXp: 10,
    },

    // ───────────────────────── Checkpoint Unit 6 ─────────────────────────
    {
      id: 'u6-checkpoint',
      title: 'Kiểm tra Unit 6',
      kind: 'checkpoint',
      exercises: [
        {
          id: 'u6-cp-e1',
          type: 'sort',
          prompt: 'Toả nhiệt hay thu nhiệt?',
          groups: [
            { id: 'exo', label: 'Toả nhiệt' },
            { id: 'endo', label: 'Thu nhiệt' },
          ],
          items: [
            { id: 'i1', text: 'Nung đá vôi thành vôi sống', image: 'lime-kiln', groupId: 'endo' },
            { id: 'i2', text: 'Gas cháy trên bếp', image: 'gas-stove-wok', groupId: 'exo' },
            {
              id: 'i3',
              text: 'Giấm gặp baking soda',
              image: 'fizzing-cold-cup',
              groupId: 'endo',
            },
            { id: 'i4', text: 'Nến cháy', image: 'candle', groupId: 'exo' },
            {
              id: 'i5',
              text: 'Baking soda bị nhiệt phân trong lò nướng',
              image: 'baking-cake',
              groupId: 'endo',
            },
            { id: 'i6', text: 'Vôi sống gặp nước', groupId: 'exo' },
          ],
          explanation:
            'Sự cháy và vôi sống gặp nước làm xung quanh nóng lên: toả nhiệt. Nung đá vôi và nhiệt phân baking soda phải được cấp nhiệt liên tục, giấm với baking soda làm dung dịch lạnh đi: thu nhiệt.',
          conceptIds: ['exothermic-endothermic'],
        },
        {
          id: 'u6-cp-e2',
          type: 'balance-reaction',
          reactionId: 'propane-combustion',
          prompt: 'Cân bằng phương trình của phản ứng propane cháy trên bếp gas',
          explanation:
            'Carbon trước: 3 C cần 3 CO₂. Hydrogen sau: 8 H cần 4 H₂O. Oxygen cuối cùng: vế phải có 6 + 4 = 10 O, nên cần 5 O₂. Kết quả: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.',
          conceptIds: ['balancing', 'combustion'],
        },
        {
          id: 'u6-cp-e3',
          type: 'mcq',
          prompt:
            'Túi sưởi ấm tay dùng một lần chứa bột sắt. Xé bao ra, bột sắt gặp oxygen trong không khí và phản ứng dần dần, túi ấm lên suốt mấy tiếng. Phản ứng trong túi thuộc loại nào?',
          options: [
            { id: 'a', text: 'Thu nhiệt, vì phản ứng xảy ra chậm' },
            { id: 'b', text: 'Toả nhiệt, vì nó làm xung quanh ấm lên' },
            { id: 'c', text: 'Thu nhiệt, vì không có ngọn lửa' },
          ],
          correctOptionId: 'b',
          explanation:
            'Túi và bàn tay ấm lên, tức là phản ứng giải phóng nhiệt ra xung quanh: toả nhiệt. Không cần có lửa, cũng không cần phải nhanh. Đây chính là phản ứng sắt gỉ, được làm cho nhanh hơn, một phần nhờ dùng bột sắt mịn.',
          conceptIds: ['exothermic-endothermic'],
        },
        {
          id: 'u6-cp-e4',
          type: 'true-false',
          prompt: 'Phản ứng nào cần mồi lửa lúc đầu thì đều là phản ứng thu nhiệt.',
          answer: false,
          explanation:
            'Gas, than, củi đều cần mồi nhưng cháy rồi thì tự toả nhiệt: chúng là phản ứng toả nhiệt. Phản ứng thu nhiệt là phản ứng phải được cấp nhiệt liên tục, ngừng cấp là dừng, như nung đá vôi.',
          conceptIds: ['exothermic-endothermic'],
        },
        {
          id: 'u6-cp-e5',
          type: 'mcq',
          prompt:
            'Viên sủi thả vào nước sẽ phản ứng và sủi bọt khí. Bạn thả một viên vào cốc nước ấm, một viên vào cốc nước lạnh. Viên nào sủi hết trước?',
          options: [
            { id: 'a', text: 'Viên trong cốc nước ấm, vì nhiệt độ cao thì phản ứng nhanh hơn' },
            { id: 'b', text: 'Viên trong cốc nước lạnh, vì nước lạnh giữ khí tốt hơn' },
            { id: 'c', text: 'Hai viên hết cùng lúc, vì chúng giống hệt nhau' },
          ],
          correctOptionId: 'a',
          explanation:
            'Nhiệt độ càng cao, các hạt chuyển động càng nhanh và va chạm càng nhiều, nên phản ứng càng nhanh. Hai viên giống nhau sẽ cho lượng khí như nhau, chỉ khác là nhanh hay chậm.',
          conceptIds: ['reaction-rate'],
        },
        {
          id: 'u6-cp-e6',
          type: 'match-pairs',
          prompt: 'Nối mỗi yếu tố làm thay đổi tốc độ phản ứng với ví dụ của nó',
          pairs: [
            {
              left: { id: 'l1', text: 'Nhiệt độ' },
              right: { id: 'r1', text: 'Cá để ngăn đá giữ được lâu', image: 'open-fridge' },
            },
            {
              left: { id: 'l2', text: 'Diện tích bề mặt tiếp xúc' },
              right: { id: 'r2', text: 'Than tổ ong đục nhiều lỗ', image: 'coal-stove' },
            },
            {
              left: { id: 'l3', text: 'Nồng độ' },
              right: { id: 'r3', text: 'Quạt gió vào bếp than', image: 'charcoal-grill' },
            },
            {
              left: { id: 'l4', text: 'Chất xúc tác' },
              right: {
                id: 'r4',
                text: 'Lát khoai tây làm oxy già sủi bọt',
                image: 'potato-peroxide',
              },
            },
          ],
          explanation:
            'Bốn yếu tố làm thay đổi tốc độ phản ứng: nhiệt độ, diện tích bề mặt tiếp xúc, nồng độ và chất xúc tác. Người nấu bếp dùng cả bốn mỗi ngày.',
          conceptIds: ['reaction-rate', 'catalyst'],
        },
        {
          id: 'u6-cp-e7',
          type: 'mcq',
          prompt:
            'Một khúc gỗ cháy từ từ. Nhưng mùn cưa bay lơ lửng trong xưởng gỗ, nếu gặp tia lửa, có thể bùng cháy trong nháy mắt. Vì sao?',
          options: [
            { id: 'a', text: 'Vì mùn cưa là một chất khác với gỗ' },
            { id: 'b', text: 'Vì mùn cưa nóng hơn khúc gỗ' },
            {
              id: 'c',
              text: 'Vì hạt mùn cưa rất nhỏ nên tổng diện tích bề mặt tiếp xúc với oxygen rất lớn',
            },
          ],
          correctOptionId: 'c',
          explanation:
            'Mùn cưa vẫn là gỗ, nhưng mỗi hạt bé xíu đều được oxygen bao quanh. Diện tích bề mặt tiếp xúc lớn gấp rất nhiều lần khúc gỗ nên phản ứng cháy nhanh tới mức thành nổ. Vì thế xưởng gỗ, nhà máy xay bột luôn phải hút bụi và cấm lửa.',
          conceptIds: ['reaction-rate', 'combustion'],
        },
        {
          id: 'u6-cp-e8',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Chất làm phản ứng xảy ra nhanh hơn mà sau phản ứng vẫn còn nguyên gọi là ___. Chất như vậy do cơ thể sống tạo ra thì gọi là ___.',
          blanks: [
            { accepted: ['chất xúc tác'], wordBank: ['chất xúc tác', 'nhiên liệu', 'sản phẩm'] },
            { accepted: ['enzyme'], wordBank: ['glucose', 'ethanol', 'enzyme'] },
          ],
          explanation:
            'Chất xúc tác giúp phản ứng nhanh hơn mà không bị tiêu hao. Enzyme là chất xúc tác do sinh vật tạo ra, như enzyme trong khoai tây, trong nước bọt và trong men.',
          conceptIds: ['catalyst'],
        },
        {
          id: 'u6-cp-e9',
          type: 'true-false',
          prompt:
            'Dùng chất xúc tác hay nghiền nhỏ chất tham gia đều làm phản ứng nhanh hơn, nhưng không làm tăng lượng sản phẩm thu được.',
          answer: true,
          explanation:
            'Lượng sản phẩm do lượng chất tham gia quyết định, vì nguyên tử không tự sinh thêm. Chất xúc tác và việc nghiền nhỏ chỉ giúp bạn tới đích sớm hơn.',
          conceptIds: ['reaction-rate', 'catalyst', 'conservation-of-mass'],
        },
        {
          id: 'u6-cp-e10',
          type: 'balance-reaction',
          reactionId: 'alcoholic-fermentation',
          prompt: 'Cân bằng phương trình men biến glucose thành ethanol và carbon dioxide',
          explanation:
            '12 H của glucose vừa đủ cho 2 phân tử ethanol C₂H₆O. Hai phân tử đó dùng 4 C, còn 2 C đi vào 2 CO₂. Oxygen: 2 + 4 = 6. Kết quả: C₆H₁₂O₆ → 2C₂H₆O + 2CO₂.',
          conceptIds: ['balancing', 'fermentation'],
        },
        {
          id: 'u6-cp-e11',
          type: 'order-steps',
          prompt: 'Một ổ bánh mì ra đời như thế nào? Sắp xếp theo thứ tự',
          steps: [
            { id: 's1', text: 'Nhào bột mì với nước và men' },
            { id: 's2', text: 'Ủ bột ở chỗ ấm' },
            { id: 's3', text: 'Men biến glucose thành ethanol và khí carbon dioxide' },
            { id: 's4', text: 'Bong bóng khí kẹt trong bột, bột phồng lên gấp đôi' },
            { id: 's5', text: 'Nướng bánh: ethanol bay hơi, các lỗ khí ở lại trong ruột bánh' },
          ],
          explanation:
            'Có men và có hơi ấm thì phản ứng lên men mới chạy đủ nhanh. Khí sinh ra làm bột phồng lên trước, rồi lò nướng mới giữ lại hình dạng xốp ấy.',
          conceptIds: ['fermentation', 'reaction-rate'],
        },
        {
          id: 'u6-cp-e12',
          type: 'mcq',
          prompt:
            'Chai rượu vang mở nắp rồi để quên vài tuần thì có mùi chua như giấm. Chuyện gì đã xảy ra?',
          options: [
            { id: 'a', text: 'Ethanol bay hơi hết, chỉ còn lại nước' },
            {
              id: 'b',
              text: 'Vi khuẩn giấm dùng oxygen trong không khí biến ethanol thành acetic acid',
            },
            { id: 'c', text: 'Men biến acetic acid thành ethanol' },
          ],
          correctOptionId: 'b',
          explanation:
            'Chai đã mở nên không khí lọt vào. Vi khuẩn giấm lấy oxygen để biến ethanol thành acetic acid, chất tạo vị chua của giấm. Đó chính là lên men giấm: C₂H₆O + O₂ → CH₃COOH + H₂O.',
          conceptIds: ['fermentation'],
        },
      ],
      baseXp: 20,
    },
  ],
}
