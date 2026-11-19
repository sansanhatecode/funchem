import type { UnitInput } from '../../schema/lesson.js'

/**
 * Unit 9: Công thức và hoá trị
 * 6 bài học + checkpoint: lớp electron, lớp vỏ bền của khí hiếm (vì sao nguyên tử liên kết),
 * hoá trị, lập công thức từ hoá trị, khối lượng nguyên tử (amu), khối lượng phân tử.
 * Chưa dạy mol (Unit 10).
 */
export const unit09: UnitInput = {
  id: 'u9-formulas',
  order: 9,
  title: 'Công thức và hoá trị',
  tagline: 'Lớp electron, hoá trị và cân nặng của phân tử',
  color: '#14B8A6',
  lessons: [
    // ───────────────────────── Bài 1: Lớp electron ─────────────────────────
    {
      id: 'u9-l1-electron-shells',
      title: 'Electron xếp thành lớp',
      intro: {
        title: 'Ánh đèn vàng trên phố',
        story: [
          'Tối đến, nhiều con đường sáng lên một màu vàng cam quen thuộc. Loại bóng đèn ấy chứa hơi sodium (natri): vô số nguyên tử sodium bay lơ lửng trong bóng. Khi có dòng điện, electron của chúng nhận năng lượng rồi nhả ra thành ánh sáng vàng cam.',
          'Ở Unit 1 bạn đã biết electron chuyển động quanh hạt nhân. Theo mô hình mà các nhà khoa học dùng để hình dung nguyên tử, electron không bay lộn xộn mà xếp thành từng lớp, gọi là lớp electron. Lớp thứ nhất ở sát hạt nhân nhất, rồi tới lớp thứ hai, lớp thứ ba.',
          'Mỗi lớp chỉ chứa được một số electron nhất định: lớp thứ nhất tối đa 2, lớp thứ hai tối đa 8. Electron xếp vào lớp gần hạt nhân trước, lớp đó đầy rồi mới sang lớp kế tiếp.',
          'Sodium có 11 electron: 2 ở lớp thứ nhất, 8 ở lớp thứ hai, còn 1 electron đứng một mình ở lớp thứ ba. Lớp xa hạt nhân nhất gọi là lớp ngoài cùng. Bạn phóng to để đếm thử nhé. Các bài sau sẽ cho thấy chính electron ở lớp ngoài cùng quyết định nguyên tử liên kết ra sao.',
        ],
        visual: { type: 'atom', element: 'Na', scene: 'sodium-street-lamp' },
      },
      exercises: [
        {
          id: 'u9-l1-e1',
          type: 'mcq',
          prompt: 'Lớp electron thứ nhất, lớp ở sát hạt nhân nhất, chứa được tối đa mấy electron?',
          options: [
            { id: 'a', text: '1 electron' },
            { id: 'b', text: '2 electron' },
            { id: 'c', text: '8 electron' },
          ],
          correctOptionId: 'b',
          explanation:
            'Lớp thứ nhất nhỏ nhất nên chỉ chứa được tối đa 2 electron. Con số 8 là sức chứa của lớp thứ hai.',
          conceptIds: ['electron-shell'],
        },
        {
          id: 'u9-l1-e2',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Electron xếp vào lớp ___ hạt nhân trước. Lớp thứ hai chứa được tối đa ___ electron.',
          blanks: [
            { accepted: ['gần'], wordBank: ['gần', 'xa'] },
            { accepted: ['8'], wordBank: ['2', '8', '10'] },
          ],
          explanation:
            'Electron lấp đầy lớp gần hạt nhân trước rồi mới sang lớp kế tiếp. Lớp thứ nhất chứa tối đa 2, lớp thứ hai chứa tối đa 8.',
          conceptIds: ['electron-shell'],
        },
        {
          id: 'u9-l1-e3',
          type: 'true-false',
          prompt: 'Nguyên tử sodium có 11 electron, và cả 11 electron cùng nằm trên một lớp.',
          visual: { id: 'v', image: 'sodium-street-lamp' },
          answer: false,
          explanation:
            'Không lớp nào ở gần hạt nhân chứa nổi 11 electron. Lớp thứ nhất nhận 2, lớp thứ hai nhận 8, electron thứ 11 phải sang lớp thứ ba. Vậy sodium có 3 lớp electron, xếp 2, 8, 1.',
          conceptIds: ['electron-shell'],
        },
        {
          id: 'u9-l1-e4',
          type: 'order-steps',
          prompt:
            'Oxygen nằm ở ô số 8 của bảng tuần hoàn. Sắp xếp các bước để tìm ra cách electron của nó xếp thành lớp',
          steps: [
            { id: 's1', text: 'Oxygen có 8 proton, nên nguyên tử có 8 electron' },
            { id: 's2', text: '2 electron đầu tiên vào lớp thứ nhất, lớp này đầy' },
            { id: 's3', text: '6 electron còn lại vào lớp thứ hai' },
            { id: 's4', text: 'Kết quả: 2 lớp electron, lớp ngoài cùng có 6 electron' },
          ],
          explanation:
            'Số electron bằng số proton, tức bằng số ô trong bảng tuần hoàn. Xếp từ trong ra: lớp thứ nhất 2, lớp thứ hai nhận 6 electron còn lại. Oxygen xếp 2, 6.',
          conceptIds: ['electron-shell', 'atomic-number'],
        },
        {
          id: 'u9-l1-e5',
          type: 'mcq',
          prompt: 'Nguyên tử carbon có 6 electron. Lớp ngoài cùng của nó có mấy electron?',
          options: [
            { id: 'a', text: '2 electron' },
            { id: 'b', text: '4 electron' },
            { id: 'c', text: '6 electron' },
          ],
          correctOptionId: 'b',
          explanation:
            'Lớp thứ nhất nhận 2 electron là đầy. 4 electron còn lại sang lớp thứ hai, và đó là lớp ngoài cùng của carbon. Con số 6 là tổng số electron, không phải số electron lớp ngoài cùng.',
          conceptIds: ['electron-shell'],
        },
        {
          id: 'u9-l1-e6',
          type: 'match-pairs',
          prompt:
            'Nối mỗi nguyên tử với cách electron của nó xếp thành lớp, tính từ trong ra ngoài',
          pairs: [
            { left: { id: 'l1', text: 'Hydrogen: 1 electron' }, right: { id: 'r1', text: '1' } },
            { left: { id: 'l2', text: 'Helium: 2 electron' }, right: { id: 'r2', text: '2' } },
            { left: { id: 'l3', text: 'Nitrogen: 7 electron' }, right: { id: 'r3', text: '2, 5' } },
            { left: { id: 'l4', text: 'Neon: 10 electron' }, right: { id: 'r4', text: '2, 8' } },
            {
              left: { id: 'l5', text: 'Magnesium: 12 electron' },
              right: { id: 'r5', text: '2, 8, 2' },
            },
          ],
          explanation:
            'Cứ xếp từ trong ra: lớp thứ nhất tối đa 2, lớp thứ hai tối đa 8, còn dư thì sang lớp thứ ba. Cộng các số trong mỗi cách xếp, bạn sẽ được lại đúng tổng số electron.',
          conceptIds: ['electron-shell'],
        },
        {
          id: 'u9-l1-e7',
          type: 'fill-blank',
          prompt:
            'Aluminium (nhôm) có 13 electron. Xếp lần lượt vào lớp thứ nhất, lớp thứ hai rồi gõ con số còn thiếu',
          template: 'Lớp ngoài cùng của nguyên tử aluminium có ___ electron.',
          blanks: [{ accepted: ['3', 'ba'] }],
          explanation:
            'Lớp thứ nhất nhận 2, lớp thứ hai nhận 8, vậy đã xếp được 10 electron. Còn 13 − 10 = 3 electron nằm ở lớp thứ ba, lớp ngoài cùng. Aluminium xếp 2, 8, 3.',
          conceptIds: ['electron-shell'],
        },
        {
          id: 'u9-l1-e8',
          type: 'sort',
          prompt: 'Mỗi nguyên tử dưới đây có mấy lớp electron?',
          groups: [
            { id: 'one', label: '1 lớp' },
            { id: 'two', label: '2 lớp' },
            { id: 'three', label: '3 lớp' },
          ],
          items: [
            { id: 'i1', text: 'Hydrogen (1 electron)', groupId: 'one' },
            { id: 'i2', text: 'Carbon (6 electron)', groupId: 'two' },
            { id: 'i3', text: 'Sodium (11 electron)', groupId: 'three' },
            { id: 'i4', text: 'Helium (2 electron)', groupId: 'one' },
            { id: 'i5', text: 'Oxygen (8 electron)', groupId: 'two' },
            { id: 'i6', text: 'Chlorine (17 electron)', groupId: 'three' },
          ],
          explanation:
            'Tới 2 electron thì một lớp là đủ. Từ 3 tới 10 electron cần hai lớp, vì lớp thứ hai nhận thêm được 8. Từ 11 electron trở đi phải mở sang lớp thứ ba: sodium xếp 2, 8, 1 và chlorine xếp 2, 8, 7.',
          conceptIds: ['electron-shell'],
        },
        {
          id: 'u9-l1-e9',
          type: 'mcq',
          prompt:
            'Lithium, sodium và potassium nằm cùng một cột của bảng tuần hoàn. Electron của chúng xếp như sau: lithium 2, 1. Sodium 2, 8, 1. Potassium 2, 8, 8, 1. Ba nguyên tử này giống nhau ở điểm nào?',
          options: [
            { id: 'a', text: 'Có cùng số lớp electron' },
            { id: 'b', text: 'Có cùng tổng số electron' },
            { id: 'c', text: 'Lớp ngoài cùng đều có 1 electron' },
          ],
          correctOptionId: 'c',
          explanation:
            'Số lớp khác nhau (2, 3 và 4 lớp), tổng số electron cũng khác nhau (3, 11 và 19). Điểm chung là lớp ngoài cùng đều có 1 electron. Ở Unit 1 bạn đã biết các nguyên tố cùng cột thường có tính chất giống nhau. Giờ bạn thấy lí do: lớp ngoài cùng của chúng giống nhau.',
          conceptIds: ['electron-shell', 'periodic-table'],
        },
        {
          id: 'u9-l1-e10',
          type: 'true-false',
          prompt:
            'Nguyên tử nào có tổng số electron nhiều hơn thì lớp ngoài cùng của nó cũng có nhiều electron hơn.',
          answer: false,
          explanation:
            'Sodium có 11 electron nhưng lớp ngoài cùng chỉ có 1 (xếp 2, 8, 1). Oxygen chỉ có 8 electron mà lớp ngoài cùng có tới 6 (xếp 2, 6). Mỗi lần mở sang một lớp mới, việc đếm electron lớp ngoài cùng lại bắt đầu từ 1.',
          conceptIds: ['electron-shell'],
        },
      ],
      unlocksMolecules: [],
      baseXp: 10,
    },

    // ───────────────────────── Bài 2: Lớp vỏ bền của khí hiếm ─────────────────────────
    {
      id: 'u9-l2-noble-gases',
      title: 'Bí mật của khí hiếm',
      intro: {
        title: 'Biển hiệu đỏ rực trong đêm',
        story: [
          'Trên phố đêm có những biển hiệu chữ uốn bằng ống thuỷ tinh, sáng một màu đỏ cam. Trong ống là khí neon. Cho dòng điện chạy qua thì neon phát sáng. Dùng bao nhiêu năm, khí neon trong ống vẫn còn nguyên, không phản ứng với thứ gì.',
          'Neon là một khí hiếm. Ở Unit 1 bạn đã biết nguyên tử khí hiếm hầu như không ghép với nguyên tử nào khác. Phóng to một nguyên tử neon, bạn sẽ thấy 10 electron xếp 2, 8. Lớp ngoài cùng có đúng 8 electron.',
          'Các khí hiếm khác cũng vậy: argon xếp 2, 8, 8. Riêng helium chỉ có một lớp với 2 electron, và lớp thứ nhất như thế là đã đầy. Lớp ngoài cùng có 8 electron (với helium là 2) là một cách sắp xếp rất bền. Vì thế nguyên tử khí hiếm đứng riêng một mình.',
          'Nguyên tử của các nguyên tố khác chưa có lớp vỏ electron bền như vậy. Khi liên kết với nhau, chúng có xu hướng đạt được lớp vỏ electron giống khí hiếm, bằng cách cho đi, nhận thêm hoặc dùng chung electron. Đó là lí do các nguyên tử liên kết với nhau.',
        ],
        visual: { type: 'atom', element: 'Ne', scene: 'neon-sign' },
      },
      exercises: [
        {
          id: 'u9-l2-e1',
          type: 'mcq',
          prompt: 'Nguyên tử neon có 10 electron. Lớp ngoài cùng của nó có bao nhiêu electron?',
          visual: { id: 'v', image: 'neon-sign' },
          options: [
            { id: 'a', text: '2 electron' },
            { id: 'b', text: '8 electron' },
            { id: 'c', text: '10 electron' },
          ],
          correctOptionId: 'b',
          explanation:
            'Neon xếp 2, 8: lớp thứ nhất 2 electron, lớp thứ hai 8 electron. Lớp thứ hai là lớp ngoài cùng, và nó vừa đầy. Con số 10 là tổng số electron.',
          conceptIds: ['noble-gas-shell', 'electron-shell'],
        },
        {
          id: 'u9-l2-e2',
          type: 'match-pairs',
          prompt: 'Nối mỗi khí hiếm với cách electron của nó xếp thành lớp',
          pairs: [
            { left: { id: 'l1', text: 'Helium: 2 electron' }, right: { id: 'r1', text: '2' } },
            { left: { id: 'l2', text: 'Neon: 10 electron' }, right: { id: 'r2', text: '2, 8' } },
            {
              left: { id: 'l3', text: 'Argon: 18 electron' },
              right: { id: 'r3', text: '2, 8, 8' },
            },
          ],
          explanation:
            'Cả ba đều kết thúc bằng một lớp ngoài cùng bền: helium 2 electron (lớp thứ nhất đã đầy), neon và argon 8 electron.',
          conceptIds: ['noble-gas-shell', 'electron-shell'],
        },
        {
          id: 'u9-l2-e3',
          type: 'fill-blank',
          prompt: 'Chọn số đúng cho từng chỗ trống',
          template:
            'Lớp ngoài cùng của neon và argon đều có ___ electron. Riêng helium chỉ có ___ electron ở lớp ngoài cùng.',
          blanks: [
            { accepted: ['8'], wordBank: ['2', '8', '10'] },
            { accepted: ['2'], wordBank: ['1', '2', '8'] },
          ],
          explanation:
            'Helium chỉ có một lớp, mà lớp thứ nhất chứa tối đa 2 electron nên 2 là đã đầy. Các khí hiếm còn lại đều có 8 electron ở lớp ngoài cùng.',
          conceptIds: ['noble-gas-shell'],
        },
        {
          id: 'u9-l2-e4',
          type: 'sort',
          prompt:
            'Mỗi dãy số là cách electron của một nguyên tử xếp thành lớp. Lớp ngoài cùng đã giống khí hiếm chưa?',
          groups: [
            { id: 'yes', label: 'Đã giống khí hiếm' },
            { id: 'no', label: 'Chưa giống khí hiếm' },
          ],
          items: [
            { id: 'i1', text: '2, 8', groupId: 'yes' },
            { id: 'i2', text: '2, 8, 1', groupId: 'no' },
            { id: 'i3', text: '2', groupId: 'yes' },
            { id: 'i4', text: '2, 6', groupId: 'no' },
            { id: 'i5', text: '2, 8, 8', groupId: 'yes' },
            { id: 'i6', text: '2, 8, 7', groupId: 'no' },
          ],
          explanation:
            '2 là helium, 2, 8 là neon, 2, 8, 8 là argon: lớp ngoài cùng đã bền. Ba dãy còn lại là sodium (lớp ngoài cùng 1 electron), oxygen (6 electron) và chlorine (7 electron), chưa dãy nào có đủ 8 electron ở lớp ngoài cùng.',
          conceptIds: ['noble-gas-shell', 'electron-shell'],
        },
        {
          id: 'u9-l2-e5',
          type: 'mcq',
          prompt:
            'Nguyên tử sodium xếp electron 2, 8, 1. Khi tạo thành muối ăn, nó cho đi 1 electron và trở thành ion Na⁺. Ion Na⁺ có lớp vỏ electron giống khí hiếm nào?',
          visual: { id: 'v', moleculeId: 'nacl' },
          options: [
            { id: 'a', text: 'Helium (2)' },
            { id: 'b', text: 'Neon (2, 8)' },
            { id: 'c', text: 'Argon (2, 8, 8)' },
          ],
          correctOptionId: 'b',
          explanation:
            'Cho đi electron duy nhất ở lớp thứ ba, sodium còn lại 10 electron xếp 2, 8, giống hệt neon. Lưu ý: Na⁺ vẫn là sodium vì hạt nhân vẫn có 11 proton. Nó chỉ giống neon ở cách xếp electron.',
          conceptIds: ['noble-gas-shell', 'ion', 'ionic-bond'],
        },
        {
          id: 'u9-l2-e6',
          type: 'mcq',
          prompt:
            'Nguyên tử chlorine xếp electron 2, 8, 7. Trong muối ăn, nó nhận thêm 1 electron và trở thành ion Cl⁻. Lúc này electron của nó xếp thế nào?',
          options: [
            { id: 'a', text: '2, 8, 6' },
            { id: 'b', text: '2, 8, 8' },
            { id: 'c', text: '2, 8, 7, 1' },
          ],
          correctOptionId: 'b',
          explanation:
            'Lớp ngoài cùng của chlorine có 7 electron, còn đúng một chỗ trống. Electron nhận thêm vào chỗ đó, thành 2, 8, 8, giống argon. Nếu chọn 2, 8, 6 thì bạn đã bớt đi thay vì thêm vào.',
          conceptIds: ['noble-gas-shell', 'ion', 'ionic-bond'],
        },
        {
          id: 'u9-l2-e7',
          type: 'order-steps',
          prompt:
            'Que pháo bông cháy sáng tạo ra magnesium oxide MgO, một hợp chất ion. Sắp xếp các bước hình thành liên kết giữa magnesium và oxygen',
          steps: [
            {
              id: 's1',
              text: 'Lúc đầu: magnesium xếp 2, 8, 2 còn oxygen xếp 2, 6. Cả hai chưa giống khí hiếm',
            },
            {
              id: 's2',
              text: 'Magnesium cho đi 2 electron ở lớp ngoài cùng, thành ion Mg²⁺ xếp 2, 8',
            },
            { id: 's3', text: 'Oxygen nhận 2 electron đó, thành ion O²⁻ cũng xếp 2, 8' },
            { id: 's4', text: 'Hai ion mang điện trái dấu hút nhau: đó là liên kết ion' },
          ],
          explanation:
            'Magnesium cho 2 electron, oxygen nhận đúng 2 electron ấy, và cả hai ion đều có lớp vỏ giống neon. Số 2 nhỏ ở góc trên cho biết ion mang hai điện tích. Việc cho và nhận tạo ra các ion, còn liên kết ion chính là lực hút giữa các ion trái dấu.',
          conceptIds: ['noble-gas-shell', 'ionic-bond', 'ion'],
        },
        {
          id: 'u9-l2-e8',
          type: 'true-false',
          prompt: 'Biển hiệu neon phát sáng vì khí neon trong ống đang cháy.',
          visual: { id: 'v', image: 'neon-sign' },
          answer: false,
          explanation:
            'Cháy là phản ứng với oxygen và tạo ra chất mới. Neon là khí hiếm, lớp ngoài cùng đã đủ 8 electron nên nó không phản ứng. Dòng điện chỉ truyền năng lượng cho electron của neon, electron nhả năng lượng ấy ra thành ánh sáng. Khí neon vẫn còn nguyên.',
          conceptIds: ['noble-gas-shell', 'combustion'],
        },
        {
          id: 'u9-l2-e9',
          type: 'mcq',
          prompt:
            'Dây tóc bóng đèn sợi đốt nóng hơn 2000 °C. Gặp oxygen ở nhiệt độ ấy, nó sẽ cháy đứt ngay. Vì thế người ta rút hết không khí rồi bơm khí argon vào bóng. Vì sao argon bảo vệ được dây tóc?',
          options: [
            {
              id: 'a',
              text: 'Lớp ngoài cùng của argon đã đủ 8 electron nên nó không phản ứng với dây tóc',
            },
            { id: 'b', text: 'Argon phản ứng với dây tóc tạo thành một lớp áo bảo vệ' },
            { id: 'c', text: 'Argon làm dây tóc nguội đi tới nhiệt độ phòng' },
          ],
          correctOptionId: 'a',
          explanation:
            'Argon là khí hiếm, xếp electron 2, 8, 8. Lớp ngoài cùng đã bền nên nó hầu như không phản ứng với chất nào, kể cả kim loại đang nóng sáng. Dây tóc vẫn rất nóng, chỉ là quanh nó không còn oxygen để cháy.',
          conceptIds: ['noble-gas-shell'],
        },
        {
          id: 'u9-l2-e10',
          type: 'sort',
          prompt:
            'Khi tạo hợp chất ion, nguyên tử có 1 hoặc 2 electron lớp ngoài cùng thường cho đi số electron đó. Nguyên tử có 6 hoặc 7 electron lớp ngoài cùng thường nhận thêm cho đủ 8. Xếp mỗi nguyên tử vào đúng nhóm',
          groups: [
            { id: 'give', label: 'Cho đi electron' },
            { id: 'take', label: 'Nhận thêm electron' },
          ],
          items: [
            { id: 'i1', text: 'Sodium: 2, 8, 1', groupId: 'give' },
            { id: 'i2', text: 'Chlorine: 2, 8, 7', groupId: 'take' },
            { id: 'i3', text: 'Magnesium: 2, 8, 2', groupId: 'give' },
            { id: 'i4', text: 'Oxygen: 2, 6', groupId: 'take' },
            { id: 'i5', text: 'Potassium: 2, 8, 8, 1', groupId: 'give' },
            { id: 'i6', text: 'Fluorine: 2, 7', groupId: 'take' },
          ],
          explanation:
            'Sodium, magnesium, potassium là kim loại: cho đi 1 hoặc 2 electron lớp ngoài cùng thì lớp bên trong, vốn đã đủ 8, trở thành lớp ngoài cùng. Chlorine, oxygen, fluorine là phi kim: nhận thêm 1 hoặc 2 electron là lớp ngoài cùng đủ 8. Đây chính là chuyện "kim loại cho, phi kim nhận" bạn gặp ở Unit 2.',
          conceptIds: ['noble-gas-shell', 'ion', 'metal', 'nonmetal'],
        },
      ],
      unlocksMolecules: ['ne'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 3: Hoá trị ─────────────────────────
    {
      id: 'u9-l3-valence',
      title: 'Hoá trị: mỗi nguyên tử mấy liên kết?',
      intro: {
        title: 'Mùi trứng thối và cốc nước',
        story: [
          'Quả trứng để quá lâu, đập ra là mùi thối xộc lên. Thủ phạm là khí hydrogen sulfide, công thức H₂S, một khí độc. Lạ ở chỗ công thức này giống hệt nước H₂O, chỉ đổi O thành S. Vì sao sulfur và oxygen đều đi với đúng 2 nguyên tử hydrogen?',
          'Hãy đếm electron lớp ngoài cùng. Oxygen (xếp 2, 6) và sulfur (xếp 2, 8, 6) đều có 6 electron, thiếu 2 electron nữa thì giống khí hiếm. Hydrogen có 1 electron, thiếu 1 electron nữa thì giống helium.',
          'Phi kim gặp phi kim thì dùng chung electron. Mỗi liên kết cộng hoá trị là một cặp electron dùng chung, và cặp này được tính cho cả hai nguyên tử. Sulfur dùng chung 2 cặp với 2 nguyên tử hydrogen: lớp ngoài cùng của nó thành 8, còn mỗi hydrogen có 2. Oxygen trong nước cũng làm y như vậy.',
          'Trong chất cộng hoá trị, số cặp electron mà một nguyên tử dùng chung với các nguyên tử khác gọi là hoá trị của nguyên tố đó. Hoá trị là con số cho biết khả năng liên kết của nguyên tử, viết bằng số La Mã. Hydrogen có hoá trị I. Oxygen có hoá trị II. Sulfur trong H₂S cũng có hoá trị II.',
        ],
        visual: { type: 'molecule', moleculeId: 'h2s', scene: 'rotten-egg' },
      },
      exercises: [
        {
          id: 'u9-l3-e1',
          type: 'mcq',
          prompt:
            'Trong phân tử hydrogen sulfide H₂S, nguyên tử sulfur dùng chung mấy cặp electron với các nguyên tử hydrogen?',
          visual: { id: 'v', moleculeId: 'h2s' },
          options: [
            { id: 'a', text: '1 cặp' },
            { id: 'b', text: '2 cặp' },
            { id: 'c', text: '6 cặp' },
          ],
          correctOptionId: 'b',
          explanation:
            'Sulfur liên kết với 2 nguyên tử hydrogen, mỗi liên kết là 1 cặp electron dùng chung, tổng cộng 2 cặp. Con số 6 là số electron lớp ngoài cùng của sulfur trước khi liên kết.',
          conceptIds: ['valence', 'covalent-bond'],
        },
        {
          id: 'u9-l3-e2',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Hoá trị là con số cho biết khả năng ___ của nguyên tử, và được viết bằng số ___.',
          blanks: [
            { accepted: ['liên kết'], wordBank: ['liên kết', 'phát sáng', 'chuyển động'] },
            { accepted: ['La Mã'], wordBank: ['La Mã', 'thập phân', 'âm'] },
          ],
          explanation:
            'Hoá trị nói lên một nguyên tử liên kết được tới đâu. Người ta viết nó bằng số La Mã: I, II, III, IV. Cách viết này giúp phân biệt hoá trị với chỉ số trong công thức.',
          conceptIds: ['valence'],
        },
        {
          id: 'u9-l3-e3',
          type: 'match-pairs',
          prompt:
            'Hydrogen có hoá trị I. Vì thế một nguyên tử liên kết được với bao nhiêu nguyên tử hydrogen thì hoá trị của nó là bấy nhiêu. Nối mỗi nguyên tố với hoá trị của nó',
          pairs: [
            {
              left: { id: 'l1', text: 'Chlorine trong HCl' },
              right: { id: 'r1', text: 'Hoá trị I' },
            },
            {
              left: { id: 'l2', text: 'Oxygen trong H₂O' },
              right: { id: 'r2', text: 'Hoá trị II' },
            },
            {
              left: { id: 'l3', text: 'Nitrogen trong NH₃' },
              right: { id: 'r3', text: 'Hoá trị III' },
            },
            {
              left: { id: 'l4', text: 'Carbon trong CH₄' },
              right: { id: 'r4', text: 'Hoá trị IV' },
            },
          ],
          explanation:
            'Chỉ cần đếm số nguyên tử hydrogen: HCl có 1, H₂O có 2, NH₃ có 3, CH₄ có 4. Mỗi nguyên tử hydrogen là một cặp electron dùng chung, nên hoá trị tăng dần từ I tới IV.',
          conceptIds: ['valence', 'formula'],
        },
        {
          id: 'u9-l3-e4',
          type: 'mcq',
          prompt:
            'Nguyên tử nitrogen có 5 electron ở lớp ngoài cùng. Nó cần dùng chung mấy cặp electron để lớp ngoài cùng có đủ 8?',
          visual: { id: 'v', moleculeId: 'nh3' },
          options: [
            { id: 'a', text: '2 cặp' },
            { id: 'b', text: '3 cặp' },
            { id: 'c', text: '5 cặp' },
          ],
          correctOptionId: 'b',
          explanation:
            'Mỗi cặp dùng chung đem lại cho nitrogen thêm 1 electron của nguyên tử bên kia. Nó thiếu 8 − 5 = 3 electron nên cần 3 cặp. Vì thế nitrogen có hoá trị III và ammonia là NH₃.',
          conceptIds: ['valence', 'noble-gas-shell', 'covalent-bond'],
        },
        {
          id: 'u9-l3-e5',
          type: 'true-false',
          prompt:
            'Trong phân tử CO₂, carbon nối với mỗi nguyên tử oxygen bằng một liên kết đôi, tức 2 cặp electron dùng chung. Vậy carbon trong CO₂ có hoá trị IV.',
          visual: { id: 'v', moleculeId: 'co2' },
          answer: true,
          explanation:
            'Hai liên kết đôi là 2 × 2 = 4 cặp electron dùng chung, nên carbon có hoá trị IV, giống như trong CH₄. Mỗi oxygen dùng chung 2 cặp nên vẫn có hoá trị II.',
          conceptIds: ['valence', 'multiple-bond'],
        },
        {
          id: 'u9-l3-e6',
          type: 'build-molecule',
          prompt:
            'Carbon có hoá trị IV, hydrogen có hoá trị I. Ghép phân tử gồm 1 nguyên tử carbon và vừa đủ số nguyên tử hydrogen',
          targetMoleculeId: 'ch4',
          availableAtoms: { C: 2, H: 6, O: 2 },
          explanation:
            'Carbon tạo được 4 liên kết, mỗi hydrogen tạo được 1 liên kết. Vậy 1 carbon cần đúng 4 hydrogen: CH₄, khí methane trong biogas.',
          conceptIds: ['valence', 'formula'],
        },
        {
          id: 'u9-l3-e7',
          type: 'mcq',
          prompt:
            'Nguyên tử chlorine có 7 electron ở lớp ngoài cùng. Trong phân tử khí chlorine Cl₂, hai nguyên tử chlorine dùng chung với nhau mấy cặp electron?',
          visual: { id: 'v', moleculeId: 'cl2' },
          options: [
            { id: 'a', text: '1 cặp' },
            { id: 'b', text: '2 cặp' },
            { id: 'c', text: '7 cặp' },
          ],
          correctOptionId: 'a',
          explanation:
            'Mỗi nguyên tử chlorine chỉ thiếu 1 electron là đủ 8. Hai nguyên tử góp mỗi bên 1 electron thành 1 cặp dùng chung, và cặp này tính cho cả hai. Vì thế chlorine có hoá trị I, và Cl₂ có một liên kết đơn.',
          conceptIds: ['valence', 'covalent-bond', 'noble-gas-shell'],
        },
        {
          id: 'u9-l3-e8',
          type: 'sort',
          prompt:
            'Xếp mỗi nguyên tử vào đúng hoá trị của nó trong chất đã cho. Nhớ rằng một liên kết đôi là 2 cặp electron dùng chung',
          groups: [
            { id: 'one', label: 'Hoá trị I' },
            { id: 'two', label: 'Hoá trị II' },
          ],
          items: [
            { id: 'i1', text: 'Hydrogen trong H₂O', groupId: 'one' },
            { id: 'i2', text: 'Oxygen trong H₂O', groupId: 'two' },
            { id: 'i3', text: 'Chlorine trong HCl', groupId: 'one' },
            { id: 'i4', text: 'Sulfur trong H₂S', groupId: 'two' },
            { id: 'i5', text: 'Oxygen trong CO₂', groupId: 'two' },
          ],
          explanation:
            'Hydrogen và chlorine chỉ dùng chung 1 cặp electron: hoá trị I. Oxygen và sulfur dùng chung 2 cặp: hoá trị II. Trong CO₂, mỗi oxygen có một liên kết đôi với carbon, cũng là 2 cặp.',
          conceptIds: ['valence'],
        },
        {
          id: 'u9-l3-e9',
          type: 'true-false',
          prompt:
            'Oxygen có hoá trị II, nghĩa là nguyên tử oxygen trong phân tử nước mang 2 điện tích.',
          visual: { id: 'v', moleculeId: 'h2o' },
          answer: false,
          explanation:
            'Hoá trị không phải là điện tích. Nó chỉ cho biết oxygen dùng chung 2 cặp electron, tức tạo được 2 liên kết. Hoá trị viết bằng số La Mã và không có dấu cộng hay trừ. Điện tích của ion thì viết kiểu khác, như Na⁺ hay Cl⁻.',
          conceptIds: ['valence', 'ion'],
        },
        {
          id: 'u9-l3-e10',
          type: 'mcq',
          prompt:
            'Trong phân tử khí nitrogen N₂, hai nguyên tử nitrogen nối với nhau bằng một liên kết ba. Mỗi nguyên tử nitrogen dùng chung mấy cặp electron?',
          visual: { id: 'v', moleculeId: 'n2' },
          options: [
            { id: 'a', text: '1 cặp' },
            { id: 'b', text: '3 cặp' },
            { id: 'c', text: '6 cặp' },
          ],
          correctOptionId: 'b',
          explanation:
            'Liên kết ba là 3 cặp electron dùng chung, và cả 3 cặp tính cho mỗi nguyên tử. Vậy nitrogen trong N₂ có hoá trị III, đúng như trong NH₃: lớp ngoài cùng có 5 electron, cần thêm 3.',
          conceptIds: ['valence', 'multiple-bond'],
        },
      ],
      unlocksMolecules: ['h2s', 'cl2'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 4: Lập công thức từ hoá trị ─────────────────────────
    {
      id: 'u9-l4-writing-formulas',
      title: 'Lập công thức từ hoá trị',
      intro: {
        title: 'Chiếc thìa bạc xỉn đen',
        story: [
          'Đồ bằng bạc để lâu cứ xỉn dần thành màu xám đen. Lớp xỉn ấy là silver sulfide: bạc đã phản ứng với lượng rất nhỏ khí hydrogen sulfide lẫn trong không khí. Công thức của nó là Ag₂S. Vì sao lại là 2 nguyên tử bạc với 1 nguyên tử sulfur?',
          'Bạc có hoá trị I, sulfur ở đây có hoá trị II. Bạn có thể hình dung mỗi hoá trị là một cánh tay: sulfur có 2 tay, mỗi nguyên tử bạc có 1 tay. Để không tay nào bỏ trống, 1 sulfur phải nắm 2 bạc. Nguyên tử không có tay thật, đây chỉ là cách hình dung cho dễ.',
          'Viết thành phép tính: trong công thức của hợp chất hai nguyên tố, hoá trị nhân với chỉ số của nguyên tố này bằng hoá trị nhân với chỉ số của nguyên tố kia. Đó là quy tắc hoá trị. Với Ag₂S: bạc có I × 2 = 2, sulfur có II × 1 = 2. Quy tắc này dùng cho những hợp chất mà nguyên tử của cùng một nguyên tố không nối trực tiếp với nhau, tức là hầu hết hợp chất bạn gặp ở mức này.',
          'Quy tắc này dùng được cho cả hợp chất ion. Hoá trị của kim loại bằng số electron mà nguyên tử của nó cho đi: sodium, potassium và bạc có hoá trị I. Magnesium, calcium và kẽm có hoá trị II. Aluminium có hoá trị III. Biết hoá trị là bạn tự viết được công thức.',
        ],
        visual: { type: 'molecule', moleculeId: 'ag2s', scene: 'tarnished-silver' },
      },
      exercises: [
        {
          id: 'u9-l4-e1',
          type: 'mcq',
          prompt:
            'Bạc (Ag) có hoá trị I, sulfur (S) có hoá trị II. Một nguyên tử sulfur liên kết với mấy nguyên tử bạc?',
          visual: { id: 'v', image: 'tarnished-silver' },
          options: [
            { id: 'a', text: '1 nguyên tử bạc' },
            { id: 'b', text: '2 nguyên tử bạc' },
            { id: 'c', text: '3 nguyên tử bạc' },
          ],
          correctOptionId: 'b',
          explanation:
            'Sulfur có hoá trị II, mỗi nguyên tử bạc chỉ có hoá trị I, nên cần 2 nguyên tử bạc cho 1 nguyên tử sulfur. Công thức là Ag₂S. Kiểm tra bằng quy tắc hoá trị: I × 2 = II × 1.',
          conceptIds: ['writing-formula', 'valence'],
        },
        {
          id: 'u9-l4-e2',
          type: 'fill-blank',
          prompt:
            'Kiểm tra quy tắc hoá trị với nước H₂O: hydrogen có hoá trị I, oxygen có hoá trị II. Chọn số đúng cho từng chỗ trống',
          template: 'Hydrogen: I × 2 = ___. Oxygen: II × 1 = ___. Hai kết quả bằng nhau.',
          blanks: [
            { accepted: ['2'], wordBank: ['1', '2', '3'] },
            { accepted: ['2'], wordBank: ['1', '2', '4'] },
          ],
          explanation:
            'Chỉ số của hydrogen là 2, của oxygen là 1 (không ghi). Hoá trị nhân chỉ số ở cả hai bên đều bằng 2. Công thức nào viết đúng cũng qua được phép kiểm tra này.',
          conceptIds: ['writing-formula', 'valence'],
        },
        {
          id: 'u9-l4-e3',
          type: 'order-steps',
          prompt:
            'Aluminium (nhôm) có hoá trị III, oxygen có hoá trị II. Sắp xếp các bước lập công thức của aluminium oxide',
          steps: [
            { id: 's1', text: 'Viết hai kí hiệu cạnh nhau, kim loại đứng trước: Al, O' },
            { id: 's2', text: 'Tìm số nhỏ nhất chia hết cho cả hai hoá trị 3 và 2: đó là 6' },
            {
              id: 's3',
              text: 'Chia 6 cho từng hoá trị để ra chỉ số: 6 : 3 = 2 nguyên tử Al, 6 : 2 = 3 nguyên tử O',
            },
            { id: 's4', text: 'Viết công thức Al₂O₃ rồi kiểm tra: III × 2 = II × 3 = 6' },
          ],
          explanation:
            'Mẹo là tìm số nhỏ nhất chia hết cho cả hai hoá trị, rồi chia nó cho từng hoá trị để ra chỉ số. Cách này luôn cho công thức gọn nhất. Aluminium oxide Al₂O₃ chính là lớp màng bảo vệ vỏ lon nhôm bạn gặp ở Unit 7.',
          conceptIds: ['writing-formula', 'valence'],
        },
        {
          id: 'u9-l4-e4',
          type: 'build-molecule',
          prompt:
            'Hộp hút ẩm trong tủ quần áo chứa calcium chloride. Calcium có hoá trị II, chlorine có hoá trị I. Ghép công thức của calcium chloride với 1 nguyên tử calcium',
          targetMoleculeId: 'cacl2',
          availableAtoms: { Ca: 3, Cl: 4 },
          explanation:
            'Calcium có hoá trị II, mỗi chlorine có hoá trị I, nên 1 calcium đi với 2 chlorine: CaCl₂. Kiểm tra: II × 1 = I × 2.',
          conceptIds: ['writing-formula', 'valence'],
        },
        {
          id: 'u9-l4-e5',
          type: 'mcq',
          prompt:
            'Magnesium có hoá trị II, chlorine có hoá trị I. Công thức nào là của magnesium chloride?',
          options: [
            { id: 'a', text: 'MgCl' },
            { id: 'b', text: 'MgCl₂' },
            { id: 'c', text: 'Mg₂Cl' },
          ],
          correctOptionId: 'b',
          explanation:
            'Số nhỏ nhất chia hết cho cả 2 và 1 là 2. Magnesium: 2 : 2 = 1 nguyên tử. Chlorine: 2 : 1 = 2 nguyên tử. Vậy là MgCl₂. Mg₂Cl đặt chỉ số nhầm bên: nguyên tố có hoá trị nhỏ hơn mới cần nhiều nguyên tử hơn.',
          conceptIds: ['writing-formula', 'valence'],
        },
        {
          id: 'u9-l4-e6',
          type: 'mcq',
          prompt:
            'Quy tắc hoá trị còn giúp tìm hoá trị chưa biết. Trong gỉ sắt Fe₂O₃, oxygen có hoá trị II. Sắt có hoá trị mấy?',
          visual: { id: 'v', moleculeId: 'fe2o3' },
          options: [
            { id: 'a', text: 'Hoá trị II' },
            { id: 'b', text: 'Hoá trị III' },
            { id: 'c', text: 'Hoá trị VI' },
          ],
          correctOptionId: 'b',
          explanation:
            'Phía oxygen: II × 3 = 6. Phía sắt cũng phải bằng 6, mà có 2 nguyên tử sắt, nên hoá trị của sắt là 6 : 2 = 3, viết là III. Tên của chất này, iron(III) oxide, ghi sẵn hoá trị trong ngoặc vì sắt còn có thể có hoá trị II trong hợp chất khác.',
          conceptIds: ['writing-formula', 'valence'],
        },
        {
          id: 'u9-l4-e7',
          type: 'match-pairs',
          prompt: 'Nối mỗi cặp nguyên tố (kèm hoá trị) với công thức của hợp chất chúng tạo thành',
          pairs: [
            { left: { id: 'l1', text: 'Na (I) và O (II)' }, right: { id: 'r1', text: 'Na₂O' } },
            { left: { id: 'l2', text: 'Ca (II) và O (II)' }, right: { id: 'r2', text: 'CaO' } },
            { left: { id: 'l3', text: 'Al (III) và Cl (I)' }, right: { id: 'r3', text: 'AlCl₃' } },
            { left: { id: 'l4', text: 'C (IV) và O (II)' }, right: { id: 'r4', text: 'CO₂' } },
            { left: { id: 'l5', text: 'N (III) và H (I)' }, right: { id: 'r5', text: 'NH₃' } },
          ],
          explanation:
            'Hai hoá trị bằng nhau thì mỗi bên 1 nguyên tử: CaO. Với carbon và oxygen, số nhỏ nhất chia hết cho cả 4 và 2 là 4, nên có 4 : 4 = 1 nguyên tử C và 4 : 2 = 2 nguyên tử O: CO₂. Các cặp còn lại làm tương tự.',
          conceptIds: ['writing-formula', 'valence'],
        },
        {
          id: 'u9-l4-e8',
          type: 'true-false',
          prompt:
            'Trong khí sulfur dioxide, sulfur có hoá trị IV và oxygen có hoá trị II. Công thức của khí này là S₂O₄.',
          answer: false,
          explanation:
            'Số nhỏ nhất chia hết cho cả 4 và 2 là 4, nên chỉ cần 1 nguyên tử S và 2 nguyên tử O: SO₂, đúng công thức của khí gây mưa acid bạn gặp ở Unit 5. Một nguyên tử sulfur dùng chung 4 cặp electron là vừa đủ cho 2 nguyên tử oxygen, không cần tới nguyên tử sulfur thứ hai. Bạn cũng thấy sulfur có nhiều hoá trị: II trong H₂S, IV trong SO₂.',
          conceptIds: ['writing-formula', 'valence'],
        },
        {
          id: 'u9-l4-e9',
          type: 'mcq',
          prompt:
            'Trong calcium hydroxide Ca(OH)₂ (vôi tôi), nhóm OH luôn đi cùng nhau như một khối và có hoá trị I. Calcium có hoá trị II. Dấu ngoặc và số 2 trong công thức cho biết điều gì?',
          visual: { id: 'v', moleculeId: 'caoh2' },
          options: [
            { id: 'a', text: 'Có 2 nhóm OH đi với 1 nguyên tử calcium' },
            { id: 'b', text: 'Có 2 nguyên tử calcium đi với 1 nhóm OH' },
            { id: 'c', text: 'Chỉ riêng hydrogen được nhân đôi' },
          ],
          correctOptionId: 'a',
          explanation:
            'Coi cả nhóm OH như một "nguyên tố" có hoá trị I rồi áp dụng quy tắc hoá trị: II × 1 = I × 2. Vậy 1 calcium cần 2 nhóm OH. Dấu ngoặc cho biết số 2 nhân cho cả nhóm: 2 nguyên tử O và 2 nguyên tử H.',
          conceptIds: ['writing-formula', 'valence', 'formula'],
        },
        {
          id: 'u9-l4-e10',
          type: 'balance-reaction',
          reactionId: 'aluminium-oxidation',
          prompt:
            'Phải viết đúng công thức rồi mới cân bằng được phương trình. Nhôm phản ứng với khí oxygen tạo thành aluminium oxide Al₂O₃. Cân bằng phương trình này',
          explanation:
            'Vế phải cần số nguyên tử O chia hết cho 3, vế trái O₂ cho số chẵn, nên chọn 6 nguyên tử O: 3 O₂ và 2 Al₂O₃. Hai Al₂O₃ có 4 nguyên tử Al, nên đặt 4 trước Al. Kết quả: 4Al + 3O₂ → 2Al₂O₃.',
          conceptIds: ['writing-formula', 'balancing', 'chemical-equation'],
        },
      ],
      unlocksMolecules: ['ag2s', 'cacl2'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 5: Khối lượng nguyên tử ─────────────────────────
    {
      id: 'u9-l5-atomic-mass',
      title: 'Cân một nguyên tử',
      intro: {
        title: 'Chiếc cân ở tiệm kim hoàn',
        story: [
          'Ở tiệm kim hoàn, viên kim cương bé bằng hạt đậu được đặt lên một chiếc cân nhạy tới từng phần nghìn gam. Kim cương là carbon gần như nguyên chất: vô số nguyên tử carbon liên kết chặt với nhau.',
          'Vậy một nguyên tử carbon nặng bao nhiêu? Khoảng 0,00000000000000000000002 gam, sau dấu phẩy có tới 22 chữ số 0. Không chiếc cân nào cân nổi một nguyên tử, và con số dài như thế cũng rất khó dùng.',
          'Vì vậy các nhà khoa học dùng một đơn vị riêng cho nguyên tử, gọi là amu (đơn vị khối lượng nguyên tử). Một proton nặng xấp xỉ 1 amu. Một neutron cũng xấp xỉ 1 amu. Electron nhẹ hơn proton khoảng 1800 lần, nên gần như không đáng kể.',
          'Khối lượng của nguyên tử vì thế gần bằng tổng số proton và neutron trong hạt nhân. Bạn phóng to vào một nguyên tử carbon mà xem: hạt nhân có 6 proton và 6 neutron, nên khối lượng nguyên tử của carbon xấp xỉ 12 amu.',
        ],
        visual: { type: 'atom', element: 'C', scene: 'diamond-scale' },
      },
      exercises: [
        {
          id: 'u9-l5-e1',
          type: 'mcq',
          prompt: 'Các nhà khoa học dùng đơn vị amu để đo điều gì?',
          options: [
            { id: 'a', text: 'Khối lượng của nguyên tử' },
            { id: 'b', text: 'Số lớp electron của nguyên tử' },
            { id: 'c', text: 'Điện tích của hạt nhân' },
          ],
          correctOptionId: 'a',
          explanation:
            'amu là đơn vị khối lượng nguyên tử. Nguyên tử nhẹ tới mức đo bằng gam sẽ ra những con số có hơn hai mươi chữ số 0 sau dấu phẩy, nên người ta dùng amu cho gọn.',
          conceptIds: ['atomic-mass'],
        },
        {
          id: 'u9-l5-e2',
          type: 'match-pairs',
          prompt: 'Nối mỗi hạt với đặc điểm của nó',
          pairs: [
            {
              left: { id: 'l1', text: 'Proton' },
              right: { id: 'r1', text: 'Xấp xỉ 1 amu, mang điện dương' },
            },
            {
              left: { id: 'l2', text: 'Neutron' },
              right: { id: 'r2', text: 'Xấp xỉ 1 amu, không mang điện' },
            },
            {
              left: { id: 'l3', text: 'Electron' },
              right: { id: 'r3', text: 'Nhẹ hơn proton khoảng 1800 lần' },
            },
          ],
          explanation:
            'Proton và neutron nặng gần bằng nhau, mỗi hạt xấp xỉ 1 amu, và cùng nằm trong hạt nhân. Electron mang điện âm, nhẹ hơn rất nhiều.',
          conceptIds: ['atomic-mass', 'subatomic-particles'],
        },
        {
          id: 'u9-l5-e3',
          type: 'fill-blank',
          prompt:
            'Nguyên tử helium trong quả bóng bay có 2 proton, 2 neutron và 2 electron. Gõ con số còn thiếu',
          template: 'Khối lượng của nguyên tử helium xấp xỉ ___ amu.',
          blanks: [{ accepted: ['4', 'bốn'] }],
          explanation:
            '2 proton và 2 neutron, mỗi hạt xấp xỉ 1 amu, tổng cộng xấp xỉ 4 amu. Hai electron quá nhẹ nên không cần cộng vào.',
          conceptIds: ['atomic-mass'],
        },
        {
          id: 'u9-l5-e4',
          type: 'true-false',
          prompt: 'Phần lớn khối lượng của một nguyên tử nằm ở các electron.',
          answer: false,
          explanation:
            'Gần như toàn bộ khối lượng nằm ở hạt nhân, nơi có proton và neutron. Mỗi electron nhẹ hơn proton khoảng 1800 lần, nên dù nguyên tử có nhiều electron, phần của chúng vẫn không đáng kể.',
          conceptIds: ['atomic-mass', 'subatomic-particles'],
        },
        {
          id: 'u9-l5-e5',
          type: 'mcq',
          prompt:
            'Nguyên tử oxygen có 8 proton, 8 neutron và 8 electron. Khối lượng của nó xấp xỉ bao nhiêu?',
          options: [
            { id: 'a', text: '8 amu' },
            { id: 'b', text: '16 amu' },
            { id: 'c', text: '24 amu' },
          ],
          correctOptionId: 'b',
          explanation:
            '8 proton + 8 neutron = 16 hạt trong hạt nhân, mỗi hạt xấp xỉ 1 amu. Nếu ra 24 thì bạn đã cộng cả 8 electron, nhưng electron nhẹ tới mức không làm thay đổi kết quả.',
          conceptIds: ['atomic-mass'],
        },
        {
          id: 'u9-l5-e6',
          type: 'match-pairs',
          prompt: 'Nối mỗi nguyên tử với khối lượng xấp xỉ của nó',
          pairs: [
            {
              left: { id: 'l1', text: 'Sodium: 11 proton, 12 neutron' },
              right: { id: 'r1', text: '23 amu' },
            },
            {
              left: { id: 'l2', text: 'Magnesium: 12 proton, 12 neutron' },
              right: { id: 'r2', text: '24 amu' },
            },
            {
              left: { id: 'l3', text: 'Aluminium: 13 proton, 14 neutron' },
              right: { id: 'r3', text: '27 amu' },
            },
            {
              left: { id: 'l4', text: 'Sulfur: 16 proton, 16 neutron' },
              right: { id: 'r4', text: '32 amu' },
            },
            {
              left: { id: 'l5', text: 'Calcium: 20 proton, 20 neutron' },
              right: { id: 'r5', text: '40 amu' },
            },
          ],
          explanation:
            'Cứ cộng số proton với số neutron: 11 + 12 = 23, 12 + 12 = 24, 13 + 14 = 27, 16 + 16 = 32, 20 + 20 = 40. Đây cũng là những con số bạn sẽ dùng khi tính khối lượng phân tử ở bài sau.',
          conceptIds: ['atomic-mass'],
        },
        {
          id: 'u9-l5-e7',
          type: 'mcq',
          prompt:
            'Nguyên tử magnesium nặng 24 amu, nguyên tử carbon nặng 12 amu. So với nguyên tử carbon, nguyên tử magnesium thế nào?',
          options: [
            { id: 'a', text: 'Nặng gấp 2 lần' },
            { id: 'b', text: 'Nặng gấp 12 lần' },
            { id: 'c', text: 'Nhẹ bằng một nửa' },
          ],
          correctOptionId: 'a',
          explanation:
            '24 : 12 = 2, nên một nguyên tử magnesium nặng bằng hai nguyên tử carbon. Dùng amu, bạn so sánh được các nguyên tử với nhau bằng những phép chia nhỏ như thế này. Con số 12 là hiệu 24 − 12, không phải số lần.',
          conceptIds: ['atomic-mass'],
        },
        {
          id: 'u9-l5-e8',
          type: 'order-steps',
          prompt: 'Sắp xếp các nguyên tử theo thứ tự từ nhẹ nhất tới nặng nhất',
          steps: [
            { id: 's1', text: 'Hydrogen: 1 proton, không có neutron' },
            { id: 's2', text: 'Carbon: 6 proton, 6 neutron' },
            { id: 's3', text: 'Oxygen: 8 proton, 8 neutron' },
            { id: 's4', text: 'Sulfur: 16 proton, 16 neutron' },
            { id: 's5', text: 'Iron (sắt): 26 proton, 30 neutron' },
          ],
          explanation:
            'Cộng proton với neutron: hydrogen 1 amu, carbon 12 amu, oxygen 16 amu, sulfur 32 amu, sắt 56 amu. Hydrogen là nguyên tử nhẹ nhất trong mọi nguyên tử.',
          conceptIds: ['atomic-mass'],
        },
        {
          id: 'u9-l5-e9',
          type: 'true-false',
          prompt: 'Một nguyên tử sulfur (32 amu) nặng bằng hai nguyên tử oxygen (16 amu) cộng lại.',
          answer: true,
          explanation:
            '16 + 16 = 32. Hai nguyên tử oxygen cộng lại nặng đúng bằng một nguyên tử sulfur. Ở bài sau, bạn sẽ cộng khối lượng các nguyên tử như thế này để tính khối lượng của cả một phân tử.',
          conceptIds: ['atomic-mass'],
        },
        {
          id: 'u9-l5-e10',
          type: 'mcq',
          prompt:
            'Một nguyên tử vàng nặng khoảng 197 amu, một nguyên tử aluminium (nhôm) nặng khoảng 27 amu. Nguyên tử vàng nặng gấp khoảng mấy lần nguyên tử nhôm?',
          visual: { id: 'v', image: 'gold-ring' },
          options: [
            { id: 'a', text: 'Khoảng 2 lần' },
            { id: 'b', text: 'Khoảng 7 lần' },
            { id: 'c', text: 'Khoảng 170 lần' },
          ],
          correctOptionId: 'b',
          explanation:
            '197 : 27 được hơn 7 một chút. Con số 170 là hiệu 197 − 27, không phải số lần. Nguyên tử vàng nặng như vậy là một phần lí do khiến chiếc nhẫn vàng nặng tay hơn hẳn một chiếc nhẫn nhôm cùng cỡ.',
          conceptIds: ['atomic-mass'],
        },
      ],
      unlocksMolecules: [],
      baseXp: 10,
    },

    // ───────────────────────── Bài 6: Khối lượng phân tử ─────────────────────────
    {
      id: 'u9-l6-molecular-mass',
      title: 'Phân tử nặng bao nhiêu?',
      intro: {
        title: 'Quả bóng sát trần, quả bóng dưới sàn',
        story: [
          'Trong tiệc sinh nhật, quả bóng bơm khí helium bay lên nằm sát trần nhà. Quả bóng bạn tự thổi bằng miệng thì rơi xuống sàn. Cùng là bóng bay, sao lại khác nhau thế?',
          'Trong quả bóng sát trần là các nguyên tử helium đứng riêng lẻ, mỗi nguyên tử nặng 4 amu. Còn không khí quanh bạn chủ yếu gồm phân tử nitrogen N₂ và phân tử oxygen O₂. Muốn so sánh, ta phải biết một phân tử nặng bao nhiêu.',
          'Khối lượng phân tử bằng tổng khối lượng của các nguyên tử trong phân tử, cũng tính theo amu. Nitrogen nặng 14 amu nên N₂ nặng 14 × 2 = 28 amu. Oxygen nặng 16 amu nên O₂ nặng 16 × 2 = 32 amu. Với nước H₂O: 1 × 2 + 16 = 18 amu.',
          'Ở cùng nhiệt độ và áp suất, hai thể tích khí bằng nhau chứa số hạt gần như nhau. Hạt helium nhẹ hơn hạt không khí khoảng 7 lần, nên quả bóng helium nhẹ hơn phần không khí mà nó chiếm chỗ và bị đẩy lên. Hơi bạn thổi ra thì vẫn chủ yếu là N₂ và O₂, nặng xấp xỉ không khí. Cộng thêm vỏ cao su, quả bóng ấy rơi xuống.',
        ],
        visual: { type: 'molecule', moleculeId: 'he', scene: 'party-balloons' },
      },
      exercises: [
        {
          id: 'u9-l6-e1',
          type: 'mcq',
          prompt: 'Khối lượng phân tử được tính bằng cách nào?',
          options: [
            { id: 'a', text: 'Cộng khối lượng của tất cả các nguyên tử trong phân tử' },
            { id: 'b', text: 'Đếm số nguyên tử có trong phân tử' },
            { id: 'c', text: 'Lấy khối lượng của nguyên tử nặng nhất trong phân tử' },
          ],
          correctOptionId: 'a',
          explanation:
            'Phân tử gồm các nguyên tử liên kết với nhau, nên nó nặng bằng tổng khối lượng của tất cả các nguyên tử ấy. Chỉ đếm số nguyên tử là chưa đủ, vì mỗi loại nguyên tử nặng nhẹ khác nhau.',
          conceptIds: ['molecular-mass'],
        },
        {
          id: 'u9-l6-e2',
          type: 'fill-blank',
          prompt:
            'Một phân tử nước H₂O gồm 2 nguyên tử hydrogen (mỗi nguyên tử 1 amu) và 1 nguyên tử oxygen (16 amu). Gõ con số còn thiếu',
          template: 'Khối lượng phân tử của nước là ___ amu.',
          blanks: [{ accepted: ['18'] }],
          explanation:
            '1 × 2 + 16 = 18 amu. Chỉ số 2 sau H cho biết có 2 nguyên tử hydrogen, nên phần của hydrogen là 2 amu chứ không phải 1.',
          conceptIds: ['molecular-mass', 'formula'],
        },
        {
          id: 'u9-l6-e3',
          type: 'order-steps',
          prompt:
            'Tính khối lượng phân tử của carbon dioxide CO₂, biết carbon nặng 12 amu và oxygen nặng 16 amu. Sắp xếp các bước theo thứ tự',
          steps: [
            { id: 's1', text: 'Đọc công thức CO₂: có 1 nguyên tử C và 2 nguyên tử O' },
            { id: 's2', text: 'Tính phần của carbon trước: 12 × 1 = 12 amu' },
            { id: 's3', text: 'Rồi tới phần của oxygen: 16 × 2 = 32 amu' },
            { id: 's4', text: 'Cộng hai phần lại: 12 + 32 = 44 amu' },
          ],
          explanation:
            'Đọc công thức để biết mỗi loại có mấy nguyên tử, nhân khối lượng nguyên tử với chỉ số, rồi cộng tất cả. Một phân tử CO₂ nặng 44 amu.',
          conceptIds: ['molecular-mass', 'formula'],
        },
        {
          id: 'u9-l6-e4',
          type: 'mcq',
          prompt:
            'Methane CH₄ là khí chính trong biogas. Carbon nặng 12 amu, hydrogen nặng 1 amu. Một phân tử methane nặng bao nhiêu?',
          visual: { id: 'v', moleculeId: 'ch4' },
          options: [
            { id: 'a', text: '13 amu' },
            { id: 'b', text: '16 amu' },
            { id: 'c', text: '17 amu' },
          ],
          correctOptionId: 'b',
          explanation:
            '12 + 1 × 4 = 16 amu. Nếu ra 13 thì bạn mới tính 1 nguyên tử hydrogen. Chỉ số 4 cho biết có tới 4 nguyên tử hydrogen trong mỗi phân tử.',
          conceptIds: ['molecular-mass', 'formula'],
        },
        {
          id: 'u9-l6-e5',
          type: 'match-pairs',
          prompt:
            'Biết hydrogen nặng 1 amu, nitrogen 14 amu, oxygen 16 amu. Nối mỗi chất với khối lượng phân tử của nó',
          pairs: [
            { left: { id: 'l1', text: 'H₂' }, right: { id: 'r1', text: '2 amu' } },
            { left: { id: 'l2', text: 'NH₃' }, right: { id: 'r2', text: '17 amu' } },
            { left: { id: 'l3', text: 'N₂' }, right: { id: 'r3', text: '28 amu' } },
            { left: { id: 'l4', text: 'O₂' }, right: { id: 'r4', text: '32 amu' } },
            { left: { id: 'l5', text: 'H₂O₂' }, right: { id: 'r5', text: '34 amu' } },
          ],
          explanation:
            'H₂: 1 × 2 = 2. NH₃: 14 + 1 × 3 = 17. N₂: 14 × 2 = 28. O₂: 16 × 2 = 32. H₂O₂: 1 × 2 + 16 × 2 = 34. Phân tử hydrogen là phân tử nhẹ nhất.',
          conceptIds: ['molecular-mass', 'formula'],
        },
        {
          id: 'u9-l6-e6',
          type: 'true-false',
          prompt:
            'Biết hydrogen nặng 1 amu, carbon 12 amu, oxygen 16 amu. Phân tử methane CH₄ có 5 nguyên tử nên nặng hơn phân tử oxygen O₂ chỉ có 2 nguyên tử.',
          answer: false,
          explanation:
            'CH₄ nặng 12 + 4 = 16 amu, còn O₂ nặng 16 × 2 = 32 amu, gấp đôi. Nhiều nguyên tử hơn chưa chắc nặng hơn: bốn nguyên tử hydrogen của methane cộng lại mới được 4 amu.',
          conceptIds: ['molecular-mass'],
        },
        {
          id: 'u9-l6-e7',
          type: 'fill-blank',
          prompt:
            'Vỏ trứng và đá vôi chứa calcium carbonate CaCO₃. Calcium nặng 40 amu, carbon 12 amu, oxygen 16 amu. Cộng theo công thức rồi gõ con số còn thiếu',
          template: 'Khối lượng tính theo công thức CaCO₃ là ___ amu.',
          blanks: [{ accepted: ['100'] }],
          explanation:
            '40 + 12 + 16 × 3 = 40 + 12 + 48 = 100 amu. Calcium carbonate là hợp chất ion, không gồm các phân tử riêng lẻ, nhưng cách tính vẫn thế: cộng khối lượng các nguyên tử theo công thức.',
          conceptIds: ['molecular-mass', 'formula'],
        },
        {
          id: 'u9-l6-e8',
          type: 'sort',
          prompt:
            'Không khí là hỗn hợp, các hạt của nó nặng trung bình khoảng 29 amu. Biết hydrogen nặng 1 amu, helium 4 amu, carbon 12 amu, oxygen 16 amu. Hạt của mỗi khí dưới đây nhẹ hơn hay nặng hơn 29 amu?',
          groups: [
            { id: 'lighter', label: 'Nhẹ hơn 29 amu' },
            { id: 'heavier', label: 'Nặng hơn 29 amu' },
          ],
          items: [
            { id: 'i1', text: 'Helium He', groupId: 'lighter' },
            { id: 'i2', text: 'Carbon dioxide CO₂', groupId: 'heavier' },
            { id: 'i3', text: 'Hydrogen H₂', groupId: 'lighter' },
            { id: 'i4', text: 'Propane C₃H₈', groupId: 'heavier' },
            { id: 'i5', text: 'Methane CH₄', groupId: 'lighter' },
          ],
          explanation:
            'He 4 amu, H₂ 2 amu, CH₄ 16 amu: nhẹ hơn hạt không khí. CO₂ nặng 12 + 32 = 44 amu, propane C₃H₈ nặng 36 + 8 = 44 amu: nặng hơn. Khí có hạt nhẹ thường bay lên, khí có hạt nặng thường tụ xuống chỗ thấp. Vì thế gas rò rỉ từ bình (có propane) hay đọng sát sàn nhà.',
          conceptIds: ['molecular-mass'],
        },
        {
          id: 'u9-l6-e9',
          type: 'mcq',
          prompt:
            'Methane cháy: CH₄ + 2O₂ → CO₂ + 2H₂O. Các chất tham gia nặng tổng cộng 16 + 2 × 32 = 80 amu. Biết CO₂ nặng 44 amu và H₂O nặng 18 amu, các sản phẩm nặng tổng cộng bao nhiêu?',
          options: [
            { id: 'a', text: '62 amu' },
            { id: 'b', text: '80 amu' },
            { id: 'c', text: '98 amu' },
          ],
          correctOptionId: 'b',
          explanation:
            '44 + 2 × 18 = 80 amu, đúng bằng khối lượng các chất tham gia. Đây là định luật bảo toàn khối lượng ở Unit 4, giờ kiểm tra được bằng con số: nguyên tử không mất đi nên khối lượng cũng không đổi. Nếu ra 62 thì bạn quên hệ số 2 trước H₂O.',
          conceptIds: ['molecular-mass', 'conservation-of-mass'],
        },
        {
          id: 'u9-l6-e10',
          type: 'mcq',
          prompt:
            'Glucose C₆H₁₂O₆ là loại đường tế bào dùng để lấy năng lượng. Carbon nặng 12 amu, hydrogen 1 amu, oxygen 16 amu. Một phân tử glucose nặng bao nhiêu?',
          visual: { id: 'v', moleculeId: 'c6h12o6' },
          options: [
            { id: 'a', text: '24 amu' },
            { id: 'b', text: '29 amu' },
            { id: 'c', text: '180 amu' },
          ],
          correctOptionId: 'c',
          explanation:
            '12 × 6 + 1 × 12 + 16 × 6 = 72 + 12 + 96 = 180 amu, nặng gấp 10 lần một phân tử nước. Con số 24 là số nguyên tử trong phân tử. Còn 29 là khi bạn quên nhân với các chỉ số.',
          conceptIds: ['molecular-mass', 'formula'],
        },
      ],
      unlocksMolecules: [],
      baseXp: 10,
    },

    // ───────────────────────── Kiểm tra Unit 9 ─────────────────────────
    {
      id: 'u9-checkpoint',
      title: 'Kiểm tra Unit 9',
      kind: 'checkpoint',
      exercises: [
        {
          id: 'u9-cp-e1',
          type: 'mcq',
          prompt:
            'Mặt quẹt bên hông bao diêm có chứa phosphorus. Nguyên tử phosphorus có 15 electron. Chúng xếp thành lớp như thế nào?',
          options: [
            { id: 'a', text: '2, 13' },
            { id: 'b', text: '2, 8, 5' },
            { id: 'c', text: '8, 7' },
          ],
          correctOptionId: 'b',
          explanation:
            'Lớp thứ nhất tối đa 2, lớp thứ hai tối đa 8, còn 15 − 10 = 5 electron sang lớp thứ ba. Lớp thứ hai không thể chứa 13 electron, và lớp thứ nhất không thể chứa 8.',
          conceptIds: ['electron-shell'],
        },
        {
          id: 'u9-cp-e2',
          type: 'sort',
          prompt: 'Lớp vỏ electron của mỗi nguyên tử hay ion dưới đây đã giống khí hiếm chưa?',
          groups: [
            { id: 'yes', label: 'Đã giống khí hiếm' },
            { id: 'no', label: 'Chưa giống khí hiếm' },
          ],
          items: [
            { id: 'i1', text: 'Nguyên tử helium: 2', groupId: 'yes' },
            { id: 'i2', text: 'Nguyên tử chlorine: 2, 8, 7', groupId: 'no' },
            { id: 'i3', text: 'Ion Na⁺: 2, 8', groupId: 'yes' },
            { id: 'i4', text: 'Nguyên tử oxygen: 2, 6', groupId: 'no' },
            { id: 'i5', text: 'Ion Cl⁻: 2, 8, 8', groupId: 'yes' },
            { id: 'i6', text: 'Nguyên tử sodium: 2, 8, 1', groupId: 'no' },
          ],
          explanation:
            'Lớp ngoài cùng có 8 electron (hoặc 2 với helium) là giống khí hiếm. Nguyên tử sodium và chlorine chưa đạt, nhưng sau khi cho và nhận 1 electron, ion Na⁺ giống neon còn ion Cl⁻ giống argon.',
          conceptIds: ['noble-gas-shell', 'ion'],
        },
        {
          id: 'u9-cp-e3',
          type: 'mcq',
          prompt:
            'Khi hàn, kim loại nóng chảy rất dễ phản ứng với oxygen trong không khí làm mối hàn bị giòn. Thợ hàn thổi một dòng khí argon bao quanh mối hàn. Vì sao argon giúp được việc này?',
          options: [
            { id: 'a', text: 'Argon phản ứng với oxygen trước khi oxygen chạm tới kim loại' },
            {
              id: 'b',
              text: 'Argon là khí hiếm, hầu như không phản ứng, và đẩy không khí ra khỏi mối hàn',
            },
            { id: 'c', text: 'Argon kết hợp với kim loại nóng chảy thành lớp vỏ cứng' },
          ],
          correctOptionId: 'b',
          explanation:
            'Argon xếp electron 2, 8, 8. Lớp ngoài cùng đã đủ 8 nên nó không phản ứng với oxygen, cũng không phản ứng với kim loại. Nó chỉ chiếm chỗ quanh mối hàn, không cho oxygen lại gần.',
          conceptIds: ['noble-gas-shell'],
        },
        {
          id: 'u9-cp-e4',
          type: 'fill-blank',
          prompt:
            'Magnesium xếp electron 2, 8, 2. Oxygen xếp electron 2, 6. Chọn từ đúng cho từng chỗ trống',
          template:
            'Khi tạo thành magnesium oxide, nguyên tử magnesium ___ 2 electron, còn nguyên tử oxygen ___ 2 electron.',
          blanks: [
            { accepted: ['cho đi'], wordBank: ['cho đi', 'nhận thêm'] },
            { accepted: ['nhận thêm'], wordBank: ['nhận thêm', 'cho đi'] },
          ],
          explanation:
            'Magnesium là kim loại, cho đi 2 electron lớp ngoài cùng thành Mg²⁺ xếp 2, 8. Oxygen là phi kim, nhận 2 electron thành O²⁻ cũng xếp 2, 8. Cả hai ion đều có lớp vỏ giống neon.',
          conceptIds: ['noble-gas-shell', 'ionic-bond'],
        },
        {
          id: 'u9-cp-e5',
          type: 'match-pairs',
          prompt: 'Hydrogen có hoá trị I. Nối mỗi nguyên tố với hoá trị của nó trong chất đã cho',
          pairs: [
            {
              left: { id: 'l1', text: 'Chlorine trong HCl' },
              right: { id: 'r1', text: 'Hoá trị I' },
            },
            {
              left: { id: 'l2', text: 'Sulfur trong H₂S' },
              right: { id: 'r2', text: 'Hoá trị II' },
            },
            {
              left: { id: 'l3', text: 'Nitrogen trong NH₃' },
              right: { id: 'r3', text: 'Hoá trị III' },
            },
            {
              left: { id: 'l4', text: 'Carbon trong CH₄' },
              right: { id: 'r4', text: 'Hoá trị IV' },
            },
          ],
          explanation:
            'Mỗi nguyên tử hydrogen ứng với một cặp electron dùng chung. Đếm số hydrogen trong công thức là ra hoá trị của nguyên tố còn lại: 1, 2, 3 và 4.',
          conceptIds: ['valence'],
        },
        {
          id: 'u9-cp-e6',
          type: 'build-molecule',
          prompt:
            'Ở nhiều nơi, người ta làm đông đậu phụ bằng nước ót lấy từ ruộng muối, thứ nước chứa magnesium chloride. Magnesium có hoá trị II, chlorine có hoá trị I. Ghép công thức của magnesium chloride với 1 nguyên tử magnesium',
          targetMoleculeId: 'mgcl2',
          availableAtoms: { Mg: 3, Cl: 4 },
          explanation:
            'Magnesium có hoá trị II, mỗi chlorine có hoá trị I, nên 1 magnesium đi với 2 chlorine: MgCl₂. Kiểm tra bằng quy tắc hoá trị: II × 1 = I × 2.',
          conceptIds: ['writing-formula', 'valence'],
        },
        {
          id: 'u9-cp-e7',
          type: 'mcq',
          prompt:
            'Trong hợp chất P₂O₅, oxygen có hoá trị II. Dùng quy tắc hoá trị để tìm hoá trị của phosphorus',
          options: [
            { id: 'a', text: 'Hoá trị II' },
            { id: 'b', text: 'Hoá trị V' },
            { id: 'c', text: 'Hoá trị X' },
          ],
          correctOptionId: 'b',
          explanation:
            'Phía oxygen: II × 5 = 10. Phía phosphorus cũng phải bằng 10, mà có 2 nguyên tử, nên hoá trị là 10 : 2 = 5, viết là V. Con số 10 là tích chung của hai bên, chưa chia cho chỉ số 2.',
          conceptIds: ['writing-formula', 'valence'],
        },
        {
          id: 'u9-cp-e8',
          type: 'true-false',
          prompt:
            'Aluminium (nhôm) có hoá trị III, chlorine có hoá trị I. Công thức của aluminium chloride là Al₃Cl.',
          answer: false,
          explanation:
            'Thử kiểm tra Al₃Cl: III × 3 = 9 nhưng I × 1 = 1, hai bên không bằng nhau. Công thức đúng là AlCl₃: III × 1 = I × 3. Nguyên tố có hoá trị nhỏ hơn mới cần nhiều nguyên tử hơn.',
          conceptIds: ['writing-formula', 'valence'],
        },
        {
          id: 'u9-cp-e9',
          type: 'fill-blank',
          prompt:
            'Kem đánh răng có hợp chất của fluorine. Nguyên tử fluorine có 9 proton, 10 neutron và 9 electron. Gõ con số còn thiếu',
          template: 'Khối lượng của nguyên tử fluorine xấp xỉ ___ amu.',
          blanks: [{ accepted: ['19'] }],
          explanation:
            '9 proton + 10 neutron = 19 hạt trong hạt nhân, mỗi hạt xấp xỉ 1 amu. Electron quá nhẹ nên không tính. Nếu ra 28 thì bạn đã cộng cả 9 electron.',
          conceptIds: ['atomic-mass'],
        },
        {
          id: 'u9-cp-e10',
          type: 'order-steps',
          prompt:
            'Biết hydrogen nặng 1 amu, carbon 12 amu, nitrogen 14 amu, oxygen 16 amu. Sắp xếp các phân tử theo thứ tự từ nhẹ nhất tới nặng nhất',
          steps: [
            { id: 's1', text: 'Hydrogen H₂' },
            { id: 's2', text: 'Methane CH₄' },
            { id: 's3', text: 'Nước H₂O' },
            { id: 's4', text: 'Nitrogen N₂' },
            { id: 's5', text: 'Carbon dioxide CO₂' },
          ],
          explanation:
            'H₂ nặng 2 amu, CH₄ nặng 16 amu, H₂O nặng 18 amu, N₂ nặng 28 amu, CO₂ nặng 44 amu. Methane có tới 5 nguyên tử mà vẫn nhẹ hơn nước, vì bốn nguyên tử hydrogen chỉ góp 4 amu.',
          conceptIds: ['molecular-mass'],
        },
        {
          id: 'u9-cp-e11',
          type: 'mcq',
          prompt:
            'Baking soda làm bánh nở có công thức NaHCO₃. Sodium nặng 23 amu, hydrogen 1 amu, carbon 12 amu, oxygen 16 amu. Khối lượng tính theo công thức NaHCO₃ là bao nhiêu?',
          visual: { id: 'v', image: 'baking-cake' },
          options: [
            { id: 'a', text: '52 amu' },
            { id: 'b', text: '84 amu' },
            { id: 'c', text: '100 amu' },
          ],
          correctOptionId: 'b',
          explanation:
            '23 + 1 + 12 + 16 × 3 = 84 amu. Nếu ra 52 thì bạn mới tính 1 nguyên tử oxygen, trong khi chỉ số 3 cho biết có 3 nguyên tử. Còn 100 amu là của calcium carbonate CaCO₃.',
          conceptIds: ['molecular-mass', 'formula'],
        },
      ],
      unlocksMolecules: [],
      baseXp: 20,
    },
  ],
}
