import type { UnitInput } from '../../schema/lesson.js'

/**
 * Unit 10: Đếm bằng mol
 * 6 bài học + checkpoint: mol và số Avogadro, khối lượng mol, chuyển đổi giữa số mol,
 * khối lượng và số hạt, thể tích mol của chất khí, tỉ khối của chất khí, tính theo phương trình.
 *
 * Khối lượng nguyên tử dùng số làm tròn như sách: H 1, C 12, N 14, O 16, Na 23, Mg 24, Al 27,
 * S 32, Ca 40, Fe 56, Cu 64, Zn 65. Thể tích mol chất khí ở điều kiện chuẩn (25 °C, 1 bar): 24,79 L/mol.
 */
export const unit10: UnitInput = {
  id: 'u10-mole',
  order: 10,
  title: 'Đếm bằng mol',
  tagline: 'Mol, khối lượng mol và tính theo phương trình',
  color: '#00B8A9',
  lessons: [
    // ───────────────────────── Bài 1: Mol và số Avogadro ─────────────────────────
    {
      id: 'u10-l1-mole',
      title: 'Một tá, một ram, một mol',
      intro: {
        title: 'Vỉ trứng và chén nước',
        story: [
          'Ra chợ, ít ai mua trứng từng quả một. Người bán xếp sẵn theo tá: một tá là 12 quả. Giấy in thì bán theo ram: một ram là 500 tờ. Thứ gì nhỏ mà nhiều, người ta gom thành nhóm cho dễ đếm.',
          'Nguyên tử và phân tử còn nhỏ hơn thế rất nhiều. Chén nước bé xíu cạnh vỉ trứng chứa nhiều phân tử nước hơn hẳn số hạt cát trên mọi bãi biển của Trái Đất. Đếm từng hạt là việc không ai làm nổi.',
          'Vì thế các nhà hoá học dùng một cái "tá" khổng lồ, gọi là mol. Một mol là lượng chất có chứa 6,022 × 10²³ nguyên tử hoặc phân tử của chất đó. Con số này gọi là số Avogadro. Viết đầy đủ, nó là số 6022 kèm theo 20 chữ số 0, tức khoảng 602 nghìn tỉ tỉ.',
          'Chén nước trong hình chỉ có khoảng 18 mL, hơn một thìa canh một chút. Vậy mà trong đó có 1 mol phân tử nước. Phóng to lên, bạn sẽ gặp chúng.',
        ],
        visual: { type: 'molecule', moleculeId: 'h2o', scene: 'egg-carton-dozen' },
      },
      exercises: [
        {
          id: 'u10-l1-e1',
          type: 'mcq',
          prompt: 'Một tá trứng là 12 quả. Vậy một mol phân tử nước là bao nhiêu phân tử?',
          visual: { id: 'v', image: 'egg-carton-dozen' },
          options: [
            { id: 'a', text: '6022 phân tử' },
            { id: 'b', text: '6,022 × 10²³ phân tử' },
            { id: 'c', text: '23 phân tử' },
          ],
          correctOptionId: 'b',
          explanation:
            'Một mol luôn là 6,022 × 10²³ hạt, cũng như một tá luôn là 12. Kí hiệu 10²³ nghĩa là số 1 kèm theo 23 chữ số 0, nên 6,022 × 10²³ lớn gấp 6022 tới một trăm tỉ tỉ lần.',
          conceptIds: ['mole'],
        },
        {
          id: 'u10-l1-e2',
          type: 'match-pairs',
          prompt: 'Nối mỗi cách gom nhóm với số lượng của nó',
          pairs: [
            { left: { id: 'l1', text: 'Một đôi đũa' }, right: { id: 'r1', text: '2 chiếc' } },
            { left: { id: 'l2', text: 'Một tá trứng' }, right: { id: 'r2', text: '12 quả' } },
            { left: { id: 'l3', text: 'Một ram giấy' }, right: { id: 'r3', text: '500 tờ' } },
            {
              left: { id: 'l4', text: 'Một mol nguyên tử sắt' },
              right: { id: 'r4', text: '6,022 × 10²³ nguyên tử' },
            },
          ],
          explanation:
            'Đôi, tá, ram và mol đều là cách gom nhóm để đếm cho nhanh. Chỉ khác ở độ lớn: thứ càng nhỏ và càng nhiều thì nhóm càng phải lớn. Nguyên tử nhỏ nhất nên cần nhóm lớn nhất.',
          conceptIds: ['mole'],
        },
        {
          id: 'u10-l1-e3',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Mol là lượng chất có chứa 6,022 × 10²³ ___ hoặc phân tử của chất đó. Con số này gọi là số ___.',
          blanks: [
            { accepted: ['nguyên tử'], wordBank: ['nguyên tử', 'gam', 'lít'] },
            { accepted: ['Avogadro'], wordBank: ['Avogadro', 'Mendeleev', 'hiệu nguyên tử'] },
          ],
          explanation:
            'Mol đếm số hạt, tức số nguyên tử hoặc số phân tử, chứ không đo gam hay lít. Con số 6,022 × 10²³ mang tên nhà khoa học người Ý Avogadro. Mendeleev là người lập ra bảng tuần hoàn.',
          conceptIds: ['mole'],
        },
        {
          id: 'u10-l1-e4',
          type: 'true-false',
          prompt: 'Mol là một đơn vị đo khối lượng, giống như gam và kilôgam.',
          answer: false,
          explanation:
            'Mol cho biết có bao nhiêu hạt, giống như tá cho biết có bao nhiêu quả trứng. Còn nặng bao nhiêu thì phải đặt lên cân mới biết. Một tá trứng gà và một tá trứng cút đều là 12 quả nhưng nặng khác nhau.',
          conceptIds: ['mole'],
        },
        {
          id: 'u10-l1-e5',
          type: 'mcq',
          prompt:
            '2 tá trứng là 2 × 12 = 24 quả. Tính theo cách đó, 2 mol nguyên tử carbon là bao nhiêu nguyên tử?',
          options: [
            { id: 'a', text: '6,022 × 10²³ nguyên tử' },
            { id: 'b', text: '12,044 × 10²³ nguyên tử' },
            { id: 'c', text: '6,022 × 10⁴⁶ nguyên tử' },
          ],
          correctOptionId: 'b',
          explanation:
            'Số hạt bằng số mol nhân với số Avogadro: 2 × 6,022 × 10²³ = 12,044 × 10²³ nguyên tử. Bạn chỉ nhân đôi phần 6,022, còn phần 10²³ giữ nguyên. Nhân đôi cả số 23 ở trên là nhầm sang một con số lớn hơn không biết bao nhiêu lần.',
          conceptIds: ['mole'],
        },
        {
          id: 'u10-l1-e6',
          type: 'fill-blank',
          prompt:
            'Nửa tá trứng là 6 quả. Một ngụm nước nhỏ chứa 3,011 × 10²³ phân tử nước, đúng bằng một nửa số Avogadro. Điền số vào chỗ trống',
          template: 'Ngụm nước đó chứa ___ mol phân tử nước.',
          blanks: [{ accepted: ['0,5', '0.5', '1/2', '0,50', '0.50'] }],
          explanation:
            '3,011 × 10²³ đúng bằng một nửa của 6,022 × 10²³, nên đó là nửa mol, viết là 0,5 mol. Số mol không cần phải là số nguyên, cũng như bạn vẫn mua được nửa tá trứng.',
          conceptIds: ['mole'],
        },
        {
          id: 'u10-l1-e7',
          type: 'sort',
          prompt: 'Người ta dùng mol để đếm những thứ nào?',
          groups: [
            { id: 'mol', label: 'Đếm bằng mol' },
            { id: 'normal', label: 'Đếm theo cách thường ngày' },
          ],
          items: [
            { id: 'i1', text: 'Nguyên tử carbon trong cục than', groupId: 'mol' },
            { id: 'i2', text: 'Quả trứng trong vỉ', groupId: 'normal' },
            { id: 'i3', text: 'Phân tử nước trong chén nước', groupId: 'mol' },
            { id: 'i4', text: 'Tờ giấy trong ram giấy', groupId: 'normal' },
            { id: 'i5', text: 'Phân tử carbon dioxide trong lon nước ngọt', groupId: 'mol' },
            { id: 'i6', text: 'Viên bi trong hộp', groupId: 'normal' },
          ],
          explanation:
            'Mol dành cho những hạt vô cùng nhỏ và vô cùng nhiều như nguyên tử, phân tử. Với đồ vật thường ngày thì mol lớn quá mức: 1 mol quả trứng đủ phủ kín cả bề mặt Trái Đất một lớp dày hàng chục kilômét.',
          conceptIds: ['mole'],
        },
        {
          id: 'u10-l1-e8',
          type: 'true-false',
          prompt: '1 mol phân tử nước và 1 mol nguyên tử sắt có số hạt bằng nhau.',
          answer: true,
          explanation:
            'Mol của chất nào cũng là 6,022 × 10²³ hạt. 1 mol nước có 6,022 × 10²³ phân tử nước, 1 mol sắt có 6,022 × 10²³ nguyên tử sắt. Số hạt bằng nhau, còn khối lượng thì khác nhau. Bài sau sẽ nói về điều đó.',
          conceptIds: ['mole'],
        },
        {
          id: 'u10-l1-e9',
          type: 'mcq',
          prompt:
            'Mỗi chiếc xe đạp có 2 bánh, nên một tá xe đạp có 2 tá bánh xe. Mỗi phân tử nước H₂O có 2 nguyên tử hydrogen. Vậy 1 mol phân tử nước có bao nhiêu mol nguyên tử hydrogen?',
          visual: { id: 'v', moleculeId: 'h2o' },
          options: [
            { id: 'a', text: '1 mol' },
            { id: 'b', text: '2 mol' },
            { id: 'c', text: '3 mol' },
          ],
          correctOptionId: 'b',
          explanation:
            'Mỗi phân tử góp 2 nguyên tử hydrogen, nên 1 mol phân tử góp 2 mol nguyên tử hydrogen. Con số 3 mol là tổng số mol nguyên tử của cả hai nguyên tố: 2 mol hydrogen và 1 mol oxygen.',
          conceptIds: ['mole', 'formula'],
        },
        {
          id: 'u10-l1-e10',
          type: 'order-steps',
          prompt: 'Sắp xếp các lượng nước sau từ ít phân tử nhất tới nhiều phân tử nhất',
          steps: [
            { id: 's1', text: 'Một tá phân tử nước' },
            { id: 's2', text: 'Một tỉ phân tử nước' },
            { id: 's3', text: '0,5 mol phân tử nước' },
            { id: 's4', text: '1 mol phân tử nước' },
            { id: 's5', text: '2 mol phân tử nước' },
          ],
          explanation:
            'Một tỉ nghe rất to, nhưng chỉ là số 1 kèm 9 chữ số 0. Nửa mol đã là khoảng 301 nghìn tỉ tỉ phân tử, lớn hơn một tỉ không biết bao nhiêu lần. Một tỉ phân tử nước gộp lại vẫn nhỏ tới mức mắt bạn không thể thấy.',
          conceptIds: ['mole'],
        },
      ],
      unlocksMolecules: [],
      baseXp: 10,
    },

    // ───────────────────────── Bài 2: Khối lượng mol ─────────────────────────
    {
      id: 'u10-l2-molar-mass',
      title: 'Một mol nặng bao nhiêu?',
      intro: {
        title: 'Một tá trứng gà, một tá trứng cút',
        story: [
          'Một tá trứng gà và một tá trứng cút đều là 12 quả. Đặt lên cân thì khác hẳn: tá trứng gà nặng khoảng 700 g, tá trứng cút chỉ khoảng 120 g. Số lượng như nhau, nhưng mỗi quả nặng nhẹ khác nhau.',
          'Mol cũng vậy. Trên bàn là 1 mol của bốn chất: 12 g carbon (vài mẩu than nhỏ), 18 g nước, 27 g nhôm và 56 g sắt. Phần nào cũng chứa 6,022 × 10²³ hạt. Chúng nặng khác nhau vì mỗi loại hạt nặng nhẹ khác nhau.',
          'Khối lượng của 1 mol chất gọi là khối lượng mol, kí hiệu là M, đơn vị là g/mol (đọc là gam trên mol). Có một điều rất tiện: khối lượng mol có trị số đúng bằng khối lượng nguyên tử hoặc khối lượng phân tử tính theo amu. Một nguyên tử carbon nặng 12 amu, nên 1 mol carbon nặng 12 g.',
          'Với chất gồm nhiều nguyên tử, bạn cộng lần lượt theo công thức. Nước H₂O có 2 nguyên tử H (mỗi nguyên tử 1 amu) và 1 nguyên tử O (16 amu). Vậy M của nước là 2 × 1 + 16 = 18 g/mol.',
        ],
        visual: { type: 'molecule', moleculeId: 'c', scene: 'one-mole-samples' },
      },
      exercises: [
        {
          id: 'u10-l2-e1',
          type: 'mcq',
          prompt: 'Khối lượng mol của một chất cho bạn biết điều gì?',
          options: [
            { id: 'a', text: 'Khối lượng của một nguyên tử chất đó, tính bằng gam' },
            { id: 'b', text: 'Khối lượng của 1 mol chất đó, tính bằng gam' },
            { id: 'c', text: 'Số hạt có trong 1 gam chất đó' },
          ],
          correctOptionId: 'b',
          explanation:
            'Khối lượng mol là khối lượng của cả 1 mol, tức của 6,022 × 10²³ hạt gộp lại. Một nguyên tử riêng lẻ thì nhẹ tới mức không cái cân nào trong nhà đo nổi.',
          conceptIds: ['molar-mass'],
        },
        {
          id: 'u10-l2-e2',
          type: 'fill-blank',
          prompt: 'Chọn kí hiệu và đơn vị đúng cho từng chỗ trống',
          template: 'Khối lượng mol có kí hiệu là ___ và đơn vị là ___.',
          blanks: [
            { accepted: ['M'], wordBank: ['M', 'A', 'Z'] },
            { accepted: ['g/mol'], wordBank: ['g/mol', 'amu', 'mol/g'] },
          ],
          explanation:
            'M là khối lượng mol, đơn vị g/mol: bao nhiêu gam cho mỗi mol. Còn amu là đơn vị cho khối lượng của một nguyên tử hay một phân tử riêng lẻ.',
          conceptIds: ['molar-mass'],
        },
        {
          id: 'u10-l2-e3',
          type: 'match-pairs',
          prompt:
            'Khối lượng mol có trị số bằng khối lượng nguyên tử tính theo amu. Nối mỗi kim loại với khối lượng mol của nó',
          pairs: [
            {
              left: { id: 'l1', text: 'Magnesium, mỗi nguyên tử nặng 24 amu' },
              right: { id: 'r1', text: '24 g/mol' },
            },
            {
              left: { id: 'l2', text: 'Aluminium (nhôm), mỗi nguyên tử nặng 27 amu' },
              right: { id: 'r2', text: '27 g/mol' },
            },
            {
              left: { id: 'l3', text: 'Iron (sắt), mỗi nguyên tử nặng 56 amu' },
              right: { id: 'r3', text: '56 g/mol' },
            },
            {
              left: { id: 'l4', text: 'Copper (đồng), mỗi nguyên tử nặng 64 amu' },
              right: { id: 'r4', text: '64 g/mol' },
            },
          ],
          explanation:
            'Trị số giữ nguyên, chỉ đổi đơn vị từ amu sang g/mol. Nhờ vậy bạn không cần học thêm bảng số nào mới: biết khối lượng nguyên tử là biết luôn khối lượng mol.',
          conceptIds: ['molar-mass'],
        },
        {
          id: 'u10-l2-e4',
          type: 'order-steps',
          prompt:
            'Tính khối lượng mol của carbon dioxide CO₂, biết C = 12 và O = 16. Sắp xếp các bước, tính lần lượt theo thứ tự nguyên tố trong công thức',
          steps: [
            { id: 's1', text: 'Đọc công thức: CO₂ có 1 nguyên tử C và 2 nguyên tử O' },
            { id: 's2', text: 'Phần của carbon: 1 × 12 = 12' },
            { id: 's3', text: 'Phần của oxygen: 2 × 16 = 32' },
            { id: 's4', text: 'Cộng hai phần: 12 + 32 = 44' },
            { id: 's5', text: 'Ghi kết quả kèm đơn vị: M = 44 g/mol' },
          ],
          explanation:
            'Chỉ số nhỏ trong công thức cho biết mỗi nguyên tố có mấy nguyên tử. Nhân số nguyên tử với khối lượng nguyên tử của nguyên tố đó, rồi cộng tất cả lại. Đừng quên đơn vị g/mol ở cuối.',
          conceptIds: ['molar-mass', 'formula'],
        },
        {
          id: 'u10-l2-e5',
          type: 'mcq',
          prompt: 'Khối lượng mol của khí methane CH₄ là bao nhiêu? Biết C = 12 và H = 1.',
          visual: { id: 'v', moleculeId: 'ch4' },
          options: [
            { id: 'a', text: '13 g/mol' },
            { id: 'b', text: '16 g/mol' },
            { id: 'c', text: '48 g/mol' },
          ],
          correctOptionId: 'b',
          explanation:
            'CH₄ có 1 C và 4 H: 12 + 4 × 1 = 16 g/mol. Ra 13 là do chỉ tính một nguyên tử hydrogen. Ra 48 là do lấy 12 nhân 4, trong khi chỉ số 4 thuộc về hydrogen chứ không thuộc về carbon.',
          conceptIds: ['molar-mass', 'formula'],
        },
        {
          id: 'u10-l2-e6',
          type: 'fill-blank',
          prompt:
            'Khí oxygen bạn hít thở gồm các phân tử O₂, mỗi phân tử có 2 nguyên tử oxygen. Biết O = 16. Điền số vào chỗ trống',
          template: 'Khối lượng mol của khí oxygen O₂ là ___ g/mol.',
          blanks: [{ accepted: ['32', '32,0', '32.0'] }],
          explanation:
            'Mỗi phân tử O₂ có 2 nguyên tử oxygen, nên M = 2 × 16 = 32 g/mol. Con số 16 g/mol là của 1 mol nguyên tử O riêng lẻ, không phải của khí oxygen.',
          conceptIds: ['molar-mass', 'formula'],
        },
        {
          id: 'u10-l2-e7',
          type: 'true-false',
          prompt: '1 mol nước và 1 mol sắt nặng bằng nhau, vì chúng có số hạt bằng nhau.',
          visual: { id: 'v', image: 'one-mole-samples' },
          answer: false,
          explanation:
            'Số hạt bằng nhau nhưng mỗi hạt nặng khác nhau. Một phân tử nước nặng 18 amu, một nguyên tử sắt nặng 56 amu. Vì thế 1 mol nước nặng 18 g, còn 1 mol sắt nặng 56 g.',
          conceptIds: ['molar-mass', 'mole'],
        },
        {
          id: 'u10-l2-e8',
          type: 'sort',
          prompt:
            'Nước có khối lượng mol 18 g/mol. Tính khối lượng mol của từng chất khí rồi xếp vào đúng nhóm. Biết H = 1, C = 12, N = 14, O = 16',
          groups: [
            { id: 'less', label: 'M nhỏ hơn 18 g/mol' },
            { id: 'more', label: 'M lớn hơn 18 g/mol' },
          ],
          items: [
            { id: 'i1', text: 'Hydrogen H₂', moleculeId: 'h2', groupId: 'less' },
            { id: 'i2', text: 'Carbon dioxide CO₂', moleculeId: 'co2', groupId: 'more' },
            { id: 'i3', text: 'Ammonia NH₃', moleculeId: 'nh3', groupId: 'less' },
            { id: 'i4', text: 'Nitrogen N₂', moleculeId: 'n2', groupId: 'more' },
            { id: 'i5', text: 'Methane CH₄', moleculeId: 'ch4', groupId: 'less' },
          ],
          explanation:
            'H₂: 2 × 1 = 2. CH₄: 12 + 4 = 16. NH₃: 14 + 3 = 17. Ba chất này có M nhỏ hơn 18. N₂: 2 × 14 = 28. CO₂: 12 + 2 × 16 = 44. Hai chất này có M lớn hơn 18.',
          conceptIds: ['molar-mass', 'formula'],
        },
        {
          id: 'u10-l2-e9',
          type: 'mcq',
          prompt:
            'Vỏ trứng và đá vôi đều chứa calcium carbonate CaCO₃. Khối lượng mol của CaCO₃ là bao nhiêu? Biết Ca = 40, C = 12, O = 16.',
          visual: { id: 'v', moleculeId: 'caco3' },
          options: [
            { id: 'a', text: '68 g/mol' },
            { id: 'b', text: '100 g/mol' },
            { id: 'c', text: '204 g/mol' },
          ],
          correctOptionId: 'b',
          explanation:
            'CaCO₃ có 1 Ca, 1 C và 3 O: 40 + 12 + 3 × 16 = 100 g/mol. Ra 68 là do quên nhân 3 cho oxygen. Ra 204 là do nhân 3 cho cả ba nguyên tố, trong khi chỉ số 3 chỉ thuộc về oxygen.',
          conceptIds: ['molar-mass', 'formula'],
        },
        {
          id: 'u10-l2-e10',
          type: 'true-false',
          prompt:
            'Một phân tử nước nặng 18 amu, còn 1 mol nước nặng 18 g. Hai con số giống nhau, vậy amu và gam là cùng một đơn vị.',
          answer: false,
          explanation:
            'Trị số giống nhau nhưng ý nghĩa khác nhau. 18 amu là khối lượng của một phân tử nước. 18 g là khối lượng của 6,022 × 10²³ phân tử nước. Một gam lớn gấp 6,022 × 10²³ lần một amu.',
          conceptIds: ['molar-mass'],
        },
      ],
      unlocksMolecules: [],
      baseXp: 10,
    },

    // ───────────────────────── Bài 3: Chuyển đổi số mol, khối lượng, số hạt ─────────────────────────
    {
      id: 'u10-l3-convert',
      title: 'Cân để đếm',
      intro: {
        title: 'Đếm bằng cái cân',
        story: [
          'Tiệm kim khí không đếm từng con ốc vít. Họ cân. Biết 10 con nặng 20 g, thì một túi 200 g có 100 con. Cái cân lúc này chính là một cách đếm.',
          'Trên cân nhà bếp là một bát bột glucose, loại đường có nhiều trong nho chín. Cân chỉ 180 g. Khối lượng mol của glucose C₆H₁₂O₆ là 6 × 12 + 12 × 1 + 6 × 16 = 180 g/mol. Vậy bát đường chứa đúng 1 mol glucose.',
          'Nhà hoá học gọi số mol là n, khối lượng là m (tính bằng gam). Muốn biết số mol, lấy khối lượng chia cho khối lượng mol: n = m : M. Cân được 360 g glucose thì n = 360 : 180 = 2 mol. Muốn đi ngược lại, từ số mol ra khối lượng, bạn nhân: m = n × M.',
          'Có số mol là có số hạt, vì mỗi mol chứa 6,022 × 10²³ hạt. Bát đường 1 mol kia chứa 6,022 × 10²³ phân tử glucose. Bạn vừa đếm được thứ mắt không nhìn thấy, chỉ bằng một cái cân.',
        ],
        visual: { type: 'molecule', moleculeId: 'c6h12o6', scene: 'glucose-on-scale' },
      },
      exercises: [
        {
          id: 'u10-l3-e1',
          type: 'match-pairs',
          prompt: 'Nối mỗi kí hiệu với ý nghĩa của nó',
          pairs: [
            { left: { id: 'l1', text: 'n' }, right: { id: 'r1', text: 'Số mol, đơn vị mol' } },
            { left: { id: 'l2', text: 'm' }, right: { id: 'r2', text: 'Khối lượng, đơn vị g' } },
            {
              left: { id: 'l3', text: 'M' },
              right: { id: 'r3', text: 'Khối lượng mol, đơn vị g/mol' },
            },
            {
              left: { id: 'l4', text: '6,022 × 10²³' },
              right: { id: 'r4', text: 'Số hạt có trong 1 mol' },
            },
          ],
          explanation:
            'Chữ m thường là khối lượng bạn cân được. Chữ M hoa là khối lượng của riêng 1 mol, tính từ công thức của chất. Hai chữ này dễ nhầm, nên lần nào viết bạn cũng nên nhìn kĩ chữ hoa hay chữ thường.',
          conceptIds: ['mole-conversion', 'molar-mass'],
        },
        {
          id: 'u10-l3-e2',
          type: 'fill-blank',
          prompt: 'Chọn phép tính đúng cho từng chỗ trống',
          template:
            'Muốn tính số mol, lấy khối lượng ___ khối lượng mol. Muốn tính khối lượng, lấy số mol ___ khối lượng mol.',
          blanks: [
            { accepted: ['chia cho'], wordBank: ['chia cho', 'nhân với', 'cộng với'] },
            { accepted: ['nhân với'], wordBank: ['chia cho', 'nhân với', 'trừ đi'] },
          ],
          explanation:
            'n = m : M và m = n × M. Nghĩ như túi ốc vít: lấy khối lượng cả túi chia cho khối lượng một nhóm thì ra số nhóm. Lấy số nhóm nhân với khối lượng một nhóm thì ra khối lượng cả túi.',
          conceptIds: ['mole-conversion'],
        },
        {
          id: 'u10-l3-e3',
          type: 'mcq',
          prompt:
            'Một túi bột glucose nặng 360 g. Khối lượng mol của glucose là 180 g/mol. Trong túi có bao nhiêu mol glucose?',
          options: [
            { id: 'a', text: '0,5 mol' },
            { id: 'b', text: '2 mol' },
            { id: 'c', text: '180 mol' },
          ],
          correctOptionId: 'b',
          explanation:
            'n = m : M = 360 : 180 = 2 mol. Ra 0,5 là do chia ngược, lấy 180 chia 360. Ra 180 là do lấy hai số trừ nhau.',
          conceptIds: ['mole-conversion'],
        },
        {
          id: 'u10-l3-e4',
          type: 'fill-blank',
          prompt:
            'Một cuộn dây đồng chứa 0,5 mol nguyên tử đồng. Khối lượng mol của đồng là 64 g/mol. Dùng m = n × M để điền số vào chỗ trống',
          template: 'Cuộn dây đồng nặng ___ g.',
          blanks: [{ accepted: ['32', '32,0', '32.0'] }],
          explanation: 'm = n × M = 0,5 × 64 = 32 g. Nửa mol thì nặng bằng nửa khối lượng mol.',
          conceptIds: ['mole-conversion'],
        },
        {
          id: 'u10-l3-e5',
          type: 'mcq',
          prompt:
            'Một cốc nước chứa 180 g nước. Khối lượng mol của nước là 18 g/mol. Cốc nước có bao nhiêu mol phân tử nước?',
          visual: { id: 'v', image: 'glass-of-water' },
          options: [
            { id: 'a', text: '0,1 mol' },
            { id: 'b', text: '10 mol' },
            { id: 'c', text: '162 mol' },
          ],
          correctOptionId: 'b',
          explanation:
            'n = m : M = 180 : 18 = 10 mol. Một cốc nước bình thường đã chứa 10 mol phân tử nước, tức 10 lần số Avogadro.',
          conceptIds: ['mole-conversion'],
        },
        {
          id: 'u10-l3-e6',
          type: 'true-false',
          prompt: '18 g nước và 18 g sắt chứa số mol bằng nhau, vì khối lượng của chúng bằng nhau.',
          answer: false,
          explanation:
            'Cùng khối lượng không có nghĩa là cùng số mol. Nước có M = 18 g/mol nên 18 g nước là 1 mol. Sắt có M = 56 g/mol nên 18 g sắt chưa tới nửa mol. Hạt càng nặng thì cùng một khối lượng càng chứa ít hạt.',
          conceptIds: ['mole-conversion', 'molar-mass'],
        },
        {
          id: 'u10-l3-e7',
          type: 'order-steps',
          prompt:
            'Trong 9 g nước có bao nhiêu phân tử nước? Bài này cần đi qua số mol. Sắp xếp các bước theo thứ tự',
          steps: [
            { id: 's1', text: 'Đọc đề: đã biết khối lượng m = 9 g, cần tìm số phân tử' },
            { id: 's2', text: 'Tính khối lượng mol của nước: M = 2 × 1 + 16 = 18 g/mol' },
            { id: 's3', text: 'Từ m và M tính số mol: n = 9 : 18 = 0,5 mol' },
            {
              id: 's4',
              text: 'Từ số mol tính số phân tử: 0,5 × 6,022 × 10²³ = 3,011 × 10²³ phân tử',
            },
          ],
          explanation:
            'Số mol là cây cầu ở giữa. Từ khối lượng, bạn đi qua số mol rồi mới tới số hạt: gam, rồi mol, rồi số phân tử. Mỗi lần chỉ làm một phép tính.',
          conceptIds: ['mole-conversion', 'mole'],
        },
        {
          id: 'u10-l3-e8',
          type: 'sort',
          prompt: 'Mỗi lượng chất dưới đây ít hơn, đúng bằng hay nhiều hơn 1 mol?',
          groups: [
            { id: 'less', label: 'Ít hơn 1 mol' },
            { id: 'equal', label: 'Đúng 1 mol' },
            { id: 'more', label: 'Nhiều hơn 1 mol' },
          ],
          items: [
            { id: 'i1', text: '6 g carbon (M = 12 g/mol)', groupId: 'less' },
            { id: 'i2', text: '44 g carbon dioxide (M = 44 g/mol)', groupId: 'equal' },
            { id: 'i3', text: '54 g nước (M = 18 g/mol)', groupId: 'more' },
            { id: 'i4', text: '4 g khí oxygen (M = 32 g/mol)', groupId: 'less' },
            { id: 'i5', text: '100 g calcium carbonate (M = 100 g/mol)', groupId: 'equal' },
            { id: 'i6', text: '112 g sắt (M = 56 g/mol)', groupId: 'more' },
          ],
          explanation:
            'So khối lượng với khối lượng mol. Nhỏ hơn M thì chưa tới 1 mol: 6 g carbon là 0,5 mol, 4 g oxygen còn ít hơn nữa. Bằng M thì đúng 1 mol. Lớn hơn M thì hơn 1 mol: 54 g nước là 3 mol, 112 g sắt là 2 mol.',
          conceptIds: ['mole-conversion'],
        },
        {
          id: 'u10-l3-e9',
          type: 'mcq',
          prompt:
            'Một chai nước ngọt có ga loại 600 mL chứa khoảng 4,4 g khí carbon dioxide hoà tan. Khối lượng mol của CO₂ là 44 g/mol. Trong chai có khoảng bao nhiêu mol CO₂?',
          visual: { id: 'v', image: 'soda-can' },
          options: [
            { id: 'a', text: '0,1 mol' },
            { id: 'b', text: '10 mol' },
            { id: 'c', text: '1 mol' },
          ],
          correctOptionId: 'a',
          explanation:
            'n = m : M = 4,4 : 44 = 0,1 mol. Ra 10 là do chia ngược, lấy 44 chia 4,4. Chỉ một phần mười mol thôi mà đã là khoảng 0,6 × 10²³ phân tử CO₂, đủ làm chai nước sủi bọt mỗi lần mở nắp.',
          conceptIds: ['mole-conversion'],
        },
        {
          id: 'u10-l3-e10',
          type: 'fill-blank',
          prompt:
            'Mỗi ngày, một người lớn thở ra khoảng 20 mol khí carbon dioxide. Khối lượng mol của CO₂ là 44 g/mol. Điền số vào chỗ trống',
          template: 'Lượng CO₂ đó nặng khoảng ___ g.',
          blanks: [{ accepted: ['880', '880,0', '880.0'] }],
          explanation:
            'm = n × M = 20 × 44 = 880 g, gần một kilôgam mỗi ngày. Khí cũng là chất và có khối lượng. Như bạn đã biết ở bài về cơ thể, số carbon này đến từ thức ăn bạn đã ăn.',
          conceptIds: ['mole-conversion', 'respiration'],
        },
      ],
      unlocksMolecules: [],
      baseXp: 10,
    },

    // ───────────────────────── Bài 4: Thể tích mol của chất khí ─────────────────────────
    {
      id: 'u10-l4-molar-volume',
      title: 'Một mol khí chiếm bao nhiêu chỗ?',
      intro: {
        title: 'Quả bóng 24,79 lít',
        story: [
          'Một quả bóng bay bơm thật căng, to hơn cả bình nước lọc 20 lít đặt bên cạnh. Chất khí không có hình dạng riêng và rất nhẹ, nên muốn biết có bao nhiêu khí, người ta thường đo thể tích thay vì đặt lên cân.',
          'Ở thể khí, các phân tử ở rất xa nhau. Khoảng trống giữa chúng lớn hơn bản thân phân tử rất nhiều, nên phân tử to hay nhỏ gần như không ảnh hưởng tới chỗ mà cả đám khí chiếm. Vì thế, ở cùng nhiệt độ và áp suất, 1 mol khí nào cũng chiếm thể tích như nhau.',
          'Để ai tính cũng ra cùng một số, người ta chọn một mốc chung gọi là điều kiện chuẩn: nhiệt độ 25 °C và áp suất 1 bar. Áp suất cho biết chất khí ép lên mọi thứ quanh nó mạnh tới đâu, và 1 bar gần bằng sức ép của không khí quanh bạn. Ở điều kiện chuẩn, 1 mol chất khí bất kì chiếm 24,79 L. Con số này gọi là thể tích mol của chất khí.',
          'Quả bóng trong hình rộng khoảng 36 cm và chứa khoảng 1 mol khí oxygen, nặng 32 g. Nếu bơm vào đó 1 mol khí hydrogen, bóng vẫn to như vậy nhưng khí bên trong chỉ nặng 2 g. Gọi thể tích là V, bạn có: V = n × 24,79 (L), và ngược lại n = V : 24,79.',
        ],
        visual: { type: 'molecule', moleculeId: 'o2', scene: 'balloon-and-jug' },
      },
      exercises: [
        {
          id: 'u10-l4-e1',
          type: 'fill-blank',
          prompt: 'Chọn số đúng cho từng chỗ trống',
          template: 'Điều kiện chuẩn là nhiệt độ ___ °C và áp suất ___ bar.',
          blanks: [
            { accepted: ['25'], wordBank: ['0', '25', '100'] },
            { accepted: ['1'], wordBank: ['1', '10', '24,79'] },
          ],
          explanation:
            'Điều kiện chuẩn là 25 °C và 1 bar, gần với không khí trong một căn phòng dễ chịu. Còn 24,79 là số lít mà 1 mol khí chiếm ở điều kiện đó, không phải áp suất.',
          conceptIds: ['molar-volume'],
        },
        {
          id: 'u10-l4-e2',
          type: 'mcq',
          prompt: 'Ở điều kiện chuẩn, 1 mol khí oxygen O₂ (M = 32 g/mol) chiếm thể tích bao nhiêu?',
          visual: { id: 'v', image: 'balloon-and-jug' },
          options: [
            { id: 'a', text: '18 L' },
            { id: 'b', text: '24,79 L' },
            { id: 'c', text: '32 L' },
          ],
          correctOptionId: 'b',
          explanation:
            'Ở điều kiện chuẩn, 1 mol khí nào cũng chiếm 24,79 L. Con số 32 là khối lượng mol của oxygen tính bằng gam, không phải thể tích. Thể tích của 1 mol khí không phụ thuộc vào việc khí đó nặng hay nhẹ.',
          conceptIds: ['molar-volume'],
        },
        {
          id: 'u10-l4-e3',
          type: 'true-false',
          prompt:
            'Ở điều kiện chuẩn, 1 mol khí carbon dioxide chiếm nhiều chỗ hơn 1 mol khí hydrogen, vì phân tử CO₂ to và nặng hơn.',
          answer: false,
          explanation:
            'Cả hai đều chiếm 24,79 L. Trong chất khí, các phân tử cách nhau rất xa, nên kích thước của từng phân tử gần như không đáng kể so với khoảng trống giữa chúng. Khác nhau là ở khối lượng: 44 g so với 2 g.',
          conceptIds: ['molar-volume', 'particle-model'],
        },
        {
          id: 'u10-l4-e4',
          type: 'mcq',
          prompt:
            'Một bình chứa 2 mol khí nitrogen N₂ (M = 28 g/mol) ở điều kiện chuẩn. Dùng V = n × 24,79, khí trong bình chiếm thể tích bao nhiêu?',
          options: [
            { id: 'a', text: '12,395 L' },
            { id: 'b', text: '49,58 L' },
            { id: 'c', text: '56 L' },
          ],
          correctOptionId: 'b',
          explanation:
            'V = 2 × 24,79 = 49,58 L. Ra 12,395 là do chia 24,79 cho 2 thay vì nhân. Ra 56 là do nhân 2 với khối lượng mol 28, đó là số gam chứ không phải số lít.',
          conceptIds: ['molar-volume'],
        },
        {
          id: 'u10-l4-e5',
          type: 'match-pairs',
          prompt: 'Nối số mol khí với thể tích của nó ở điều kiện chuẩn',
          pairs: [
            { left: { id: 'l1', text: '0,1 mol' }, right: { id: 'r1', text: '2,479 L' } },
            { left: { id: 'l2', text: '0,5 mol' }, right: { id: 'r2', text: '12,395 L' } },
            { left: { id: 'l3', text: '1 mol' }, right: { id: 'r3', text: '24,79 L' } },
            { left: { id: 'l4', text: '3 mol' }, right: { id: 'r4', text: '74,37 L' } },
          ],
          explanation:
            'Lần nào cũng là V = n × 24,79. Một phần mười mol thì dời dấu phẩy sang trái một chữ số: 2,479 L. Nửa mol thì lấy một nửa: 12,395 L. Ba mol thì gấp ba: 74,37 L.',
          conceptIds: ['molar-volume'],
        },
        {
          id: 'u10-l4-e6',
          type: 'fill-blank',
          prompt:
            'Một bình khí lớn chứa 247,9 L khí oxygen ở điều kiện chuẩn. Dùng n = V : 24,79 để điền số vào chỗ trống',
          template: 'Bình khí chứa ___ mol khí oxygen.',
          blanks: [{ accepted: ['10', '10,0', '10.0'] }],
          explanation:
            'n = 247,9 : 24,79 = 10 mol. Hai số chỉ khác nhau ở vị trí dấu phẩy, nên thể tích này đúng gấp 10 lần thể tích mol.',
          conceptIds: ['molar-volume'],
        },
        {
          id: 'u10-l4-e7',
          type: 'sort',
          prompt: 'Ở điều kiện chuẩn, con số 24,79 L cho 1 mol dùng được với chất nào?',
          groups: [
            { id: 'yes', label: 'Dùng được' },
            { id: 'no', label: 'Không dùng được' },
          ],
          items: [
            { id: 'i1', text: 'Khí oxygen trong bình khí', groupId: 'yes' },
            { id: 'i2', text: 'Nước lỏng trong cốc', image: 'glass-of-water', groupId: 'no' },
            { id: 'i3', text: 'Khí helium trong bóng bay', image: 'balloons', groupId: 'yes' },
            { id: 'i4', text: 'Sắt trong cây đinh', image: 'iron-nail', groupId: 'no' },
            { id: 'i5', text: 'Khí carbon dioxide vừa thoát khỏi lon nước ngọt', groupId: 'yes' },
            { id: 'i6', text: 'Muối ăn trong lọ', image: 'salt-shaker', groupId: 'no' },
          ],
          explanation:
            'Con số 24,79 L chỉ dành cho chất khí. Ở thể lỏng và thể rắn, các hạt nằm sát nhau nên 1 mol chiếm ít chỗ hơn rất nhiều: 1 mol nước lỏng chỉ khoảng 18 mL, 1 mol sắt chỉ khoảng 7 mL.',
          conceptIds: ['molar-volume', 'state-of-matter'],
        },
        {
          id: 'u10-l4-e8',
          type: 'true-false',
          prompt:
            'Quả bóng chứa 1 mol khí được đem phơi nắng cho nóng lên 40 °C. Lúc này 1 mol khí bên trong vẫn chiếm đúng 24,79 L.',
          answer: false,
          explanation:
            'Con số 24,79 L chỉ đúng ở 25 °C và 1 bar. Khi nóng lên, các phân tử khí chuyển động nhanh hơn và đẩy vỏ bóng căng ra, nên vẫn 1 mol khí đó nhưng chiếm nhiều chỗ hơn. Số phân tử thì không đổi.',
          conceptIds: ['molar-volume', 'particle-motion'],
        },
        {
          id: 'u10-l4-e9',
          type: 'order-steps',
          prompt:
            '64 g khí oxygen O₂ (M = 32 g/mol) chiếm bao nhiêu lít ở điều kiện chuẩn? Bài này cần đi qua số mol. Sắp xếp các bước theo thứ tự',
          steps: [
            { id: 's1', text: 'Đọc đề: đã biết khối lượng m = 64 g, cần tìm thể tích V' },
            { id: 's2', text: 'Đổi khối lượng ra số mol: n = 64 : 32 = 2 mol' },
            { id: 's3', text: 'Đổi số mol ra thể tích: V = 2 × 24,79' },
            { id: 's4', text: 'Ghi kết quả: V = 49,58 L' },
          ],
          explanation:
            'Không có phép tính nào đi thẳng từ gam sang lít. Số mol lại là cây cầu: gam chia cho M thành mol, rồi mol nhân với 24,79 thành lít.',
          conceptIds: ['molar-volume', 'mole-conversion'],
        },
        {
          id: 'u10-l4-e10',
          type: 'mcq',
          prompt:
            'Một chai nước ngọt có ga loại 600 mL chứa 0,1 mol khí carbon dioxide hoà tan. Nếu toàn bộ lượng khí này thoát ra, ở điều kiện chuẩn nó chiếm thể tích bao nhiêu?',
          visual: { id: 'v', image: 'soda-can' },
          options: [
            { id: 'a', text: '0,2479 L' },
            { id: 'b', text: '2,479 L' },
            { id: 'c', text: '4,4 L' },
          ],
          correctOptionId: 'b',
          explanation:
            'V = 0,1 × 24,79 = 2,479 L, gấp khoảng 4 lần thể tích của chính cái chai. Khí bị nén và hoà tan trong nước nên mới nằm gọn trong chai. Vì thế mở nắp là nghe tiếng xì. Con số 4,4 là số gam của 0,1 mol CO₂, không phải số lít.',
          conceptIds: ['molar-volume'],
        },
      ],
      unlocksMolecules: [],
      baseXp: 10,
    },

    // ───────────────────────── Bài 5: Tỉ khối của chất khí ─────────────────────────
    {
      id: 'u10-l5-relative-density',
      title: 'Khí nào nặng, khí nào nhẹ?',
      intro: {
        title: 'Quả bay lên, quả nằm lại',
        story: [
          'Hai quả bóng to bằng nhau. Quả bơm khí helium vọt lên, kéo căng sợi dây. Quả bơm khí carbon dioxide thì rơi ngay xuống sàn. Cùng là bóng bay, sao lại khác nhau như thế?',
          'Bạn vừa học: ở cùng điều kiện, 1 mol khí nào cũng chiếm chỗ như nhau. Vậy hai quả bóng to bằng nhau chứa số mol khí bằng nhau. Nhưng 1 mol helium chỉ nặng 4 g, còn 1 mol carbon dioxide nặng 44 g. Cùng một thể tích, khí nào có khối lượng mol lớn hơn thì nặng hơn.',
          'Muốn biết khí A nặng hay nhẹ hơn khí B bao nhiêu lần, lấy khối lượng mol của A chia cho khối lượng mol của B. Kết quả gọi là tỉ khối của A so với B, kí hiệu là d. Tỉ khối của CO₂ so với helium là 44 : 4 = 11, nghĩa là CO₂ nặng gấp 11 lần helium.',
          'Hay dùng nhất là so với không khí. Không khí là hỗn hợp, chủ yếu gồm nitrogen (28 g/mol) và oxygen (32 g/mol). Tính trung bình, 1 mol không khí nặng khoảng 29 g. Khí nào có M nhỏ hơn 29 thì nhẹ hơn không khí, lớn hơn 29 thì nặng hơn. Helium có M = 4, nhẹ hơn không khí rất nhiều, đủ để nâng cả vỏ bóng bay lên.',
        ],
        visual: { type: 'molecule', moleculeId: 'he', scene: 'balloons-rise-sink' },
      },
      exercises: [
        {
          id: 'u10-l5-e1',
          type: 'mcq',
          prompt: 'Tỉ khối của khí A so với khí B được tính như thế nào?',
          options: [
            { id: 'a', text: 'Lấy khối lượng mol của A trừ khối lượng mol của B' },
            { id: 'b', text: 'Lấy khối lượng mol của A chia cho khối lượng mol của B' },
            { id: 'c', text: 'Lấy khối lượng mol của A nhân với khối lượng mol của B' },
          ],
          correctOptionId: 'b',
          explanation:
            'Tỉ khối là một phép chia: d = M của A chia cho M của B. Kết quả cho biết A nặng gấp mấy lần B. Vì chia hai số cùng đơn vị, tỉ khối chỉ là một con số, không kèm đơn vị nào.',
          conceptIds: ['relative-density'],
        },
        {
          id: 'u10-l5-e2',
          type: 'fill-blank',
          prompt: 'Chọn số và từ đúng cho từng chỗ trống',
          template:
            'Tính trung bình, 1 mol không khí nặng khoảng ___ g. Khí nào có khối lượng mol nhỏ hơn con số này thì ___ hơn không khí.',
          blanks: [
            { accepted: ['29'], wordBank: ['29', '24,79', '32'] },
            { accepted: ['nhẹ'], wordBank: ['nhẹ', 'nặng'] },
          ],
          explanation:
            'Không khí chủ yếu gồm nitrogen (28) và oxygen (32), trong đó nitrogen nhiều hơn hẳn, nên trung bình là khoảng 29 g/mol. Còn 24,79 là số lít của 1 mol khí ở điều kiện chuẩn, không phải số gam.',
          conceptIds: ['relative-density'],
        },
        {
          id: 'u10-l5-e3',
          type: 'sort',
          prompt: 'So khối lượng mol của mỗi khí với 29 g/mol của không khí rồi xếp vào đúng nhóm',
          groups: [
            { id: 'light', label: 'Nhẹ hơn không khí' },
            { id: 'heavy', label: 'Nặng hơn không khí' },
          ],
          items: [
            { id: 'i1', text: 'Hydrogen, M = 2 g/mol', moleculeId: 'h2', groupId: 'light' },
            { id: 'i2', text: 'Carbon dioxide, M = 44 g/mol', moleculeId: 'co2', groupId: 'heavy' },
            { id: 'i3', text: 'Methane, M = 16 g/mol', moleculeId: 'ch4', groupId: 'light' },
            { id: 'i4', text: 'Sulfur dioxide, M = 64 g/mol', moleculeId: 'so2', groupId: 'heavy' },
            { id: 'i5', text: 'Ammonia, M = 17 g/mol', moleculeId: 'nh3', groupId: 'light' },
            { id: 'i6', text: 'Oxygen, M = 32 g/mol', moleculeId: 'o2', groupId: 'heavy' },
          ],
          explanation:
            'Hydrogen (2), methane (16) và ammonia (17) đều nhỏ hơn 29 nên nhẹ hơn không khí. Oxygen (32), carbon dioxide (44) và sulfur dioxide (64) lớn hơn 29 nên nặng hơn. Trong đó oxygen chỉ nặng hơn không khí một chút.',
          conceptIds: ['relative-density'],
        },
        {
          id: 'u10-l5-e4',
          type: 'mcq',
          prompt:
            'Khí oxygen có M = 32 g/mol, khí hydrogen có M = 2 g/mol. Tỉ khối của oxygen so với hydrogen là bao nhiêu?',
          options: [
            { id: 'a', text: '16' },
            { id: 'b', text: '30' },
            { id: 'c', text: '64' },
          ],
          correctOptionId: 'a',
          explanation:
            'd = 32 : 2 = 16. Khí oxygen nặng gấp 16 lần khí hydrogen. Ra 30 là do lấy hai số trừ nhau, ra 64 là do nhân. Tỉ khối luôn là phép chia.',
          conceptIds: ['relative-density'],
        },
        {
          id: 'u10-l5-e5',
          type: 'true-false',
          prompt:
            'Khí methane có M = 16 g/mol, khí oxygen có M = 32 g/mol. Tỉ khối của methane so với oxygen là 0,5, nghĩa là methane nặng bằng một nửa oxygen.',
          answer: true,
          explanation:
            'd = 16 : 32 = 0,5. Tỉ khối nhỏ hơn 1 cho biết khí đứng trước nhẹ hơn khí đứng sau. Lớn hơn 1 thì nặng hơn. Đúng bằng 1 thì hai khí nặng như nhau.',
          conceptIds: ['relative-density'],
        },
        {
          id: 'u10-l5-e6',
          type: 'fill-blank',
          prompt:
            'Lon gas của bếp gas mini chứa butane C₄H₁₀, có M = 58 g/mol. Không khí có khối lượng mol trung bình 29 g/mol. Điền số vào chỗ trống',
          template: 'Tỉ khối của butane so với không khí là ___.',
          blanks: [{ accepted: ['2', '2,0', '2.0'] }],
          explanation:
            'd = 58 : 29 = 2. Khí butane nặng gấp đôi không khí. Khi so với không khí, bạn luôn chia khối lượng mol của khí cho 29.',
          conceptIds: ['relative-density'],
        },
        {
          id: 'u10-l5-e7',
          type: 'mcq',
          prompt:
            'Bình gas nấu bếp chứa propane (M = 44 g/mol) và butane (M = 58 g/mol). Nếu gas rò rỉ nhiều trong một căn bếp kín gió, khí gas sẽ dồn về đâu trước?',
          visual: { id: 'v', image: 'gas-stove-wok' },
          options: [
            { id: 'a', text: 'Sát trần nhà' },
            { id: 'b', text: 'Sát sàn nhà và những chỗ trũng' },
            { id: 'c', text: 'Ngang tầm mặt bếp' },
          ],
          correctOptionId: 'b',
          explanation:
            'Cả hai khí đều có M lớn hơn 29 nên nặng hơn không khí. Khi thoát ra nhiều, chúng chìm xuống và tụ ở chỗ thấp. Vì thế khi ngửi thấy mùi gas, người ta khoá van, mở hết cửa cho thoáng và báo người lớn, tuyệt đối không bật lửa hay bật công tắc điện.',
          conceptIds: ['relative-density'],
        },
        {
          id: 'u10-l5-e8',
          type: 'order-steps',
          prompt:
            'Tính khối lượng mol của từng khí rồi sắp xếp từ nhẹ nhất tới nặng nhất. Biết H = 1, C = 12, N = 14, O = 16',
          steps: [
            { id: 's1', text: 'Hydrogen H₂', moleculeId: 'h2' },
            { id: 's2', text: 'Methane CH₄', moleculeId: 'ch4' },
            { id: 's3', text: 'Nitrogen N₂', moleculeId: 'n2' },
            { id: 's4', text: 'Carbon dioxide CO₂', moleculeId: 'co2' },
          ],
          explanation:
            'H₂: 2 × 1 = 2. CH₄: 12 + 4 × 1 = 16. N₂: 2 × 14 = 28. CO₂: 12 + 2 × 16 = 44. Ở cùng điều kiện, khí có khối lượng mol nhỏ hơn thì nhẹ hơn, nên thứ tự là H₂, CH₄, N₂, CO₂.',
          conceptIds: ['relative-density', 'molar-mass'],
        },
        {
          id: 'u10-l5-e9',
          type: 'true-false',
          prompt:
            'Carbon dioxide nặng hơn không khí, nên trong lớp học toàn bộ khí CO₂ nằm thành một lớp sát sàn, còn oxygen ở hết phía trên.',
          answer: false,
          explanation:
            'Các phân tử khí chuyển động không ngừng và tự trộn lẫn vào nhau, như bạn đã gặp ở phần khuếch tán. Vì thế không khí trong phòng là một hỗn hợp khá đều. Khí nặng chỉ tụ lại ở chỗ thấp khi nó thoát ra nhiều và nhanh, chưa kịp trộn đều, nhất là ở nơi kín gió.',
          conceptIds: ['relative-density', 'diffusion'],
        },
        {
          id: 'u10-l5-e10',
          type: 'mcq',
          prompt:
            'Đáy giếng cạn bỏ hoang lâu ngày thường tích tụ khí carbon dioxide (M = 44 g/mol). Tỉ khối của CO₂ so với không khí (29 g/mol) cho biết điều gì?',
          options: [
            { id: 'a', text: 'Khoảng 1,5: CO₂ nặng hơn không khí nên đọng lại dưới đáy giếng' },
            { id: 'b', text: 'Khoảng 0,66: CO₂ nhẹ hơn không khí nên bay hết lên miệng giếng' },
            { id: 'c', text: 'Đúng bằng 1: CO₂ nặng như không khí nên ở đâu cũng như nhau' },
          ],
          correctOptionId: 'a',
          explanation:
            'd = 44 : 29, khoảng 1,5. CO₂ nặng gấp rưỡi không khí. Trong lòng giếng sâu và kín gió, nó đọng ở đáy và chiếm chỗ của oxygen, người xuống đó có thể bị ngạt. Con số 0,66 là do chia ngược, lấy 29 chia cho 44.',
          conceptIds: ['relative-density'],
        },
      ],
      unlocksMolecules: ['c4h10'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 6: Tính theo phương trình hoá học ─────────────────────────
    {
      id: 'u10-l6-stoichiometry',
      title: 'Phương trình là công thức nấu ăn',
      intro: {
        title: 'Hai lát bánh mì, một quả trứng',
        story: [
          'Công thức làm bánh mì kẹp trứng: 2 lát bánh mì và 1 quả trứng ốp la cho ra 1 chiếc bánh kẹp. Muốn làm 5 chiếc, bạn cần 10 lát bánh mì và 5 quả trứng. Bạn vừa tính theo tỉ lệ của công thức.',
          'Phương trình hoá học cũng là một công thức như thế. 2H₂ + O₂ → 2H₂O nói rằng: cứ 2 phân tử hydrogen phản ứng với 1 phân tử oxygen thì tạo ra 2 phân tử nước. Gom mỗi loại phân tử thành từng mol, tỉ lệ vẫn thế: 2 mol H₂ phản ứng với 1 mol O₂ tạo ra 2 mol H₂O. Các hệ số chính là tỉ lệ số mol.',
          'Hệ số là tỉ lệ số mol, không phải tỉ lệ khối lượng. 2 mol H₂ chỉ nặng 4 g, còn 1 mol O₂ nặng 32 g. Cộng lại là 36 g, đúng bằng khối lượng của 2 mol nước. Khối lượng vẫn được bảo toàn.',
          'Vì thế, tính theo phương trình luôn đi qua số mol. Đổi lượng chất đã biết ra mol. Dùng tỉ lệ hệ số để suy ra số mol của chất cần tìm. Cuối cùng đổi số mol đó sang gam hoặc lít.',
        ],
        visual: { type: 'reaction', reactionId: 'water-formation', scene: 'sandwich-recipe' },
      },
      exercises: [
        {
          id: 'u10-l6-e1',
          type: 'mcq',
          prompt:
            'Công thức: 2 lát bánh mì và 1 quả trứng cho ra 1 chiếc bánh kẹp. Muốn làm 4 chiếc bánh kẹp, bạn cần bao nhiêu lát bánh mì?',
          visual: { id: 'v', image: 'sandwich-recipe' },
          options: [
            { id: 'a', text: '4 lát' },
            { id: 'b', text: '6 lát' },
            { id: 'c', text: '8 lát' },
          ],
          correctOptionId: 'c',
          explanation:
            'Mỗi chiếc cần 2 lát, nên 4 chiếc cần 4 × 2 = 8 lát. Bạn vừa dùng tỉ lệ 2 lát cho 1 chiếc. Tính theo phương trình hoá học cũng dùng đúng kiểu tỉ lệ này.',
          conceptIds: ['stoichiometry'],
        },
        {
          id: 'u10-l6-e2',
          type: 'fill-blank',
          prompt: 'Chọn từ và số đúng cho từng chỗ trống',
          template:
            'Trong phương trình 2H₂ + O₂ → 2H₂O, các hệ số cho biết tỉ lệ ___ của các chất. Cứ 2 mol H₂ thì phản ứng vừa đủ với ___ mol O₂.',
          blanks: [
            { accepted: ['số mol'], wordBank: ['số mol', 'khối lượng', 'nhiệt độ'] },
            { accepted: ['1'], wordBank: ['1', '2', '4'] },
          ],
          explanation:
            'Hệ số 2 trước H₂ và hệ số 1 (không viết ra) trước O₂ cho tỉ lệ 2 mol H₂ với 1 mol O₂. Đó là tỉ lệ số mol, cũng là tỉ lệ số phân tử, chứ không phải tỉ lệ số gam.',
          conceptIds: ['stoichiometry', 'coefficient'],
        },
        {
          id: 'u10-l6-e3',
          type: 'balance-reaction',
          reactionId: 'magnesium-burning',
          prompt:
            'Muốn tính theo phương trình thì phương trình phải được cân bằng trước. Cân bằng phản ứng magnesium cháy trong que pháo bông',
          explanation:
            'Vế trái có 2 O trong O₂, nên cần 2 MgO ở vế phải. Khi đó vế phải có 2 Mg, nên đặt hệ số 2 trước Mg. Kết quả: 2Mg + O₂ → 2MgO. Các hệ số 2, 1, 2 này sẽ là tỉ lệ số mol ở câu sau.',
          conceptIds: ['balancing', 'stoichiometry'],
        },
        {
          id: 'u10-l6-e4',
          type: 'match-pairs',
          prompt:
            'Magnesium cháy: 2Mg + O₂ → 2MgO. Cứ 2 mol Mg thì cần 1 mol O₂. Nối lượng magnesium với lượng oxygen vừa đủ để đốt hết',
          pairs: [
            { left: { id: 'l1', text: '2 mol Mg' }, right: { id: 'r1', text: '1 mol O₂' } },
            { left: { id: 'l2', text: '4 mol Mg' }, right: { id: 'r2', text: '2 mol O₂' } },
            { left: { id: 'l3', text: '1 mol Mg' }, right: { id: 'r3', text: '0,5 mol O₂' } },
            { left: { id: 'l4', text: '10 mol Mg' }, right: { id: 'r4', text: '5 mol O₂' } },
          ],
          explanation:
            'Số mol O₂ luôn bằng một nửa số mol Mg, đúng như tỉ lệ 2 với 1 của hệ số. Lượng magnesium tăng hay giảm bao nhiêu lần thì lượng oxygen tăng hay giảm bấy nhiêu lần.',
          conceptIds: ['stoichiometry'],
        },
        {
          id: 'u10-l6-e5',
          type: 'true-false',
          prompt:
            'Theo phương trình 2H₂ + O₂ → 2H₂O, cứ 2 g hydrogen thì phản ứng vừa đủ với 1 g oxygen.',
          answer: false,
          explanation:
            'Hệ số cho tỉ lệ số mol chứ không cho tỉ lệ số gam. 2 g hydrogen là 1 mol H₂ (M = 2 g/mol). 1 mol H₂ cần 0,5 mol O₂, mà 0,5 mol O₂ nặng 0,5 × 32 = 16 g. Vậy 2 g hydrogen cần tới 16 g oxygen.',
          conceptIds: ['stoichiometry', 'mole-conversion'],
        },
        {
          id: 'u10-l6-e6',
          type: 'mcq',
          prompt:
            'Khí methane cháy trên bếp biogas: CH₄ + 2O₂ → CO₂ + 2H₂O. Đốt cháy hết 3 mol methane cần bao nhiêu mol khí oxygen?',
          visual: { id: 'v', image: 'biogas-stove' },
          options: [
            { id: 'a', text: '1,5 mol' },
            { id: 'b', text: '3 mol' },
            { id: 'c', text: '6 mol' },
          ],
          correctOptionId: 'c',
          explanation:
            'Hệ số cho biết 1 mol CH₄ cần 2 mol O₂. Vậy 3 mol CH₄ cần 3 × 2 = 6 mol O₂. Ra 1,5 là do chia cho 2 thay vì nhân. Ra 3 là do quên hệ số 2 đứng trước O₂.',
          conceptIds: ['stoichiometry'],
        },
        {
          id: 'u10-l6-e7',
          type: 'order-steps',
          prompt:
            'Than cháy: C + O₂ → CO₂. Đốt cháy hết 24 g than, coi than chỉ gồm carbon (M = 12 g/mol). Thu được bao nhiêu gam CO₂ (M = 44 g/mol)? Sắp xếp các bước theo thứ tự',
          steps: [
            { id: 's1', text: 'Đổi than ra số mol: n = 24 : 12 = 2 mol C' },
            { id: 's2', text: 'Đọc tỉ lệ hệ số trong phương trình: 1 mol C tạo ra 1 mol CO₂' },
            { id: 's3', text: 'Suy ra số mol sản phẩm: 2 mol C tạo ra 2 mol CO₂' },
            { id: 's4', text: 'Đổi số mol CO₂ ra gam: m = 2 × 44 = 88 g' },
          ],
          explanation:
            'Ba chặng: gam ra mol, mol chất này sang mol chất kia theo hệ số, rồi mol ra gam. 24 g than cho ra 88 g CO₂. Phần tăng thêm 64 g chính là 2 mol oxygen lấy từ không khí.',
          conceptIds: ['stoichiometry', 'mole-conversion', 'conservation-of-mass'],
        },
        {
          id: 'u10-l6-e8',
          type: 'mcq',
          prompt:
            'Lò vôi nung đá vôi: CaCO₃ → CaO + CO₂. Nung hết 100 g calcium carbonate CaCO₃ (M = 100 g/mol) thì thu được bao nhiêu gam vôi sống CaO (M = 56 g/mol)?',
          visual: { id: 'v', image: 'lime-kiln' },
          options: [
            { id: 'a', text: '44 g' },
            { id: 'b', text: '56 g' },
            { id: 'c', text: '100 g' },
          ],
          correctOptionId: 'b',
          explanation:
            '100 g CaCO₃ là 100 : 100 = 1 mol. Theo phương trình, 1 mol CaCO₃ tạo ra 1 mol CaO, nặng 1 × 56 = 56 g. Con số 44 g là khối lượng khí CO₂ đã bay đi. Cộng lại 56 + 44 = 100 g, khối lượng được bảo toàn.',
          conceptIds: ['stoichiometry', 'mole-conversion', 'conservation-of-mass'],
        },
        {
          id: 'u10-l6-e9',
          type: 'fill-blank',
          prompt:
            'Kẽm tan trong hydrochloric acid: Zn + 2HCl → ZnCl₂ + H₂. Cho 2 mol kẽm phản ứng hết. Chọn số đúng cho từng chỗ trống',
          template: '2 mol Zn tạo ra ___ mol khí H₂. Ở điều kiện chuẩn, lượng khí này chiếm ___ L.',
          blanks: [
            { accepted: ['2'], wordBank: ['1', '2', '4'] },
            { accepted: ['49,58'], wordBank: ['24,79', '49,58', '99,16'] },
          ],
          explanation:
            'Hệ số của Zn và H₂ đều là 1, nên 2 mol Zn tạo ra 2 mol H₂. Hệ số 2 trong phương trình là của HCl, không phải của H₂. Với chất khí, đổi mol ra lít: V = 2 × 24,79 = 49,58 L.',
          conceptIds: ['stoichiometry', 'molar-volume'],
        },
        {
          id: 'u10-l6-e10',
          type: 'mcq',
          prompt:
            'Trong phòng thí nghiệm, người ta thả 6,5 g kẽm (M = 65 g/mol) vào hydrochloric acid lấy dư, tức nhiều hơn mức cần, để kẽm phản ứng hết: Zn + 2HCl → ZnCl₂ + H₂. Ở điều kiện chuẩn thu được bao nhiêu lít khí hydrogen?',
          visual: { id: 'v', image: 'zinc-acid' },
          options: [
            { id: 'a', text: '2,479 L' },
            { id: 'b', text: '4,958 L' },
            { id: 'c', text: '24,79 L' },
          ],
          correctOptionId: 'a',
          explanation:
            'Gam ra mol: 6,5 : 65 = 0,1 mol Zn. Theo hệ số, 0,1 mol Zn tạo ra 0,1 mol H₂. Mol ra lít: 0,1 × 24,79 = 2,479 L. Ra 4,958 là do nhân thêm hệ số 2 của HCl. Ra 24,79 là do coi 6,5 g kẽm như 1 mol.',
          conceptIds: ['stoichiometry', 'molar-volume', 'mole-conversion'],
        },
      ],
      unlocksMolecules: [],
      baseXp: 10,
    },

    // ───────────────────────── Kiểm tra Unit 10 ─────────────────────────
    {
      id: 'u10-checkpoint',
      title: 'Kiểm tra Unit 10',
      kind: 'checkpoint',
      exercises: [
        {
          id: 'u10-cp-e1',
          type: 'match-pairs',
          prompt: 'Nối mỗi đại lượng với con số hoặc đơn vị của nó',
          pairs: [
            {
              left: { id: 'l1', text: 'Số Avogadro' },
              right: { id: 'r1', text: '6,022 × 10²³ hạt trong 1 mol' },
            },
            { left: { id: 'l2', text: 'Khối lượng mol M' }, right: { id: 'r2', text: 'g/mol' } },
            {
              left: { id: 'l3', text: 'Thể tích mol của chất khí ở điều kiện chuẩn' },
              right: { id: 'r3', text: '24,79 L/mol' },
            },
            {
              left: { id: 'l4', text: 'Khối lượng mol trung bình của không khí' },
              right: { id: 'r4', text: 'Khoảng 29 g/mol' },
            },
          ],
          explanation:
            'Bốn mốc của cả Unit: số Avogadro đổi giữa số mol và số hạt, khối lượng mol đổi giữa số mol và số gam, thể tích mol đổi giữa số mol và số lít khí, còn 29 g/mol dùng để so một khí với không khí.',
          conceptIds: ['mole', 'molar-mass', 'molar-volume', 'relative-density'],
        },
        {
          id: 'u10-cp-e2',
          type: 'mcq',
          prompt:
            'Kim cương chỉ gồm các nguyên tử carbon (M = 12 g/mol). Một viên kim cương nặng 1,2 g chứa bao nhiêu mol nguyên tử carbon?',
          options: [
            { id: 'a', text: '0,1 mol' },
            { id: 'b', text: '10 mol' },
            { id: 'c', text: '14,4 mol' },
          ],
          correctOptionId: 'a',
          explanation:
            'n = m : M = 1,2 : 12 = 0,1 mol. Ra 10 là do chia ngược, ra 14,4 là do nhân. Viên kim cương nhỏ xíu ấy vẫn chứa khoảng 0,6 × 10²³ nguyên tử carbon.',
          conceptIds: ['mole-conversion'],
        },
        {
          id: 'u10-cp-e3',
          type: 'true-false',
          prompt:
            '1 mol khí oxygen O₂ chứa 6,022 × 10²³ phân tử O₂, tức là 2 mol nguyên tử oxygen.',
          visual: { id: 'v', moleculeId: 'o2' },
          answer: true,
          explanation:
            'Một mol phân tử là 6,022 × 10²³ phân tử. Mỗi phân tử O₂ có 2 nguyên tử oxygen, nên 1 mol phân tử O₂ có 2 mol nguyên tử oxygen. Giống như một tá xe đạp có 2 tá bánh xe.',
          conceptIds: ['mole', 'formula'],
        },
        {
          id: 'u10-cp-e4',
          type: 'mcq',
          prompt:
            'Nước rửa tay khô chứa ethanol C₂H₆O. Khối lượng mol của ethanol là bao nhiêu? Biết C = 12, H = 1, O = 16.',
          visual: { id: 'v', moleculeId: 'c2h6o' },
          options: [
            { id: 'a', text: '29 g/mol' },
            { id: 'b', text: '46 g/mol' },
            { id: 'c', text: '58 g/mol' },
          ],
          correctOptionId: 'b',
          explanation:
            'C₂H₆O có 2 C, 6 H và 1 O: 2 × 12 + 6 × 1 + 16 = 46 g/mol. Ra 29 là do chỉ tính mỗi nguyên tố một nguyên tử, bỏ qua các chỉ số 2 và 6.',
          conceptIds: ['molar-mass', 'formula'],
        },
        {
          id: 'u10-cp-e5',
          type: 'fill-blank',
          prompt:
            'Một thìa bột glucose nặng 18 g. Khối lượng mol của glucose là 180 g/mol. Điền số vào chỗ trống',
          template: 'Thìa bột đó chứa ___ mol glucose.',
          blanks: [{ accepted: ['0,1', '0.1', '1/10', '0,10', '0.10'] }],
          explanation:
            'n = m : M = 18 : 180 = 0,1 mol. Khối lượng nhỏ hơn khối lượng mol 10 lần thì số mol là một phần mười.',
          conceptIds: ['mole-conversion'],
        },
        {
          id: 'u10-cp-e6',
          type: 'order-steps',
          prompt:
            'Một viên nước đá nặng 36 g. Trong đó có bao nhiêu phân tử nước? Sắp xếp các bước theo thứ tự',
          steps: [
            { id: 's1', text: 'Đọc đề: đã biết khối lượng m = 36 g, cần tìm số phân tử' },
            { id: 's2', text: 'Tính khối lượng mol của nước: M = 2 × 1 + 16 = 18 g/mol' },
            { id: 's3', text: 'Từ m và M tính số mol: n = 36 : 18 = 2 mol' },
            {
              id: 's4',
              text: 'Từ số mol tính số phân tử: 2 × 6,022 × 10²³ = 12,044 × 10²³ phân tử',
            },
          ],
          explanation:
            'Từ gam sang số hạt luôn đi qua số mol. Nước đá vẫn là nước H₂O, chỉ khác ở thể rắn, nên khối lượng mol vẫn là 18 g/mol.',
          conceptIds: ['mole-conversion', 'mole'],
        },
        {
          id: 'u10-cp-e7',
          type: 'true-false',
          prompt: 'Ở 25 °C và 1 bar, 1 mol nước lỏng chiếm thể tích 24,79 L.',
          answer: false,
          explanation:
            'Con số 24,79 L chỉ dùng cho chất khí. Nước ở 25 °C là chất lỏng, các phân tử nằm sát nhau, nên 1 mol nước (18 g) chỉ chiếm khoảng 18 mL, ít hơn tới hơn một nghìn lần.',
          conceptIds: ['molar-volume', 'state-of-matter'],
        },
        {
          id: 'u10-cp-e8',
          type: 'mcq',
          prompt:
            'Khi xe ô tô va chạm mạnh, túi khí bung ra trong chớp mắt nhờ khoảng 2 mol khí nitrogen vừa sinh ra. Tính ở điều kiện chuẩn, lượng khí này chiếm thể tích bao nhiêu?',
          options: [
            { id: 'a', text: '24,79 L' },
            { id: 'b', text: '49,58 L' },
            { id: 'c', text: '56 L' },
          ],
          correctOptionId: 'b',
          explanation:
            'V = n × 24,79 = 2 × 24,79 = 49,58 L, đủ làm căng một chiếc túi che trước ngực người lái. Con số 56 là khối lượng của 2 mol nitrogen tính bằng gam, không phải thể tích.',
          conceptIds: ['molar-volume'],
        },
        {
          id: 'u10-cp-e9',
          type: 'sort',
          prompt:
            'Tính khối lượng mol của từng khí, so với 29 g/mol của không khí, rồi xếp vào đúng nhóm. Biết H = 1, C = 12, N = 14, O = 16, S = 32',
          groups: [
            { id: 'light', label: 'Nhẹ hơn không khí' },
            { id: 'heavy', label: 'Nặng hơn không khí' },
          ],
          items: [
            { id: 'i1', text: 'Ammonia NH₃', moleculeId: 'nh3', groupId: 'light' },
            { id: 'i2', text: 'Propane C₃H₈', moleculeId: 'c3h8', groupId: 'heavy' },
            { id: 'i3', text: 'Ethylene C₂H₄', moleculeId: 'c2h4', groupId: 'light' },
            { id: 'i4', text: 'Sulfur dioxide SO₂', moleculeId: 'so2', groupId: 'heavy' },
            { id: 'i5', text: 'Oxygen O₂', moleculeId: 'o2', groupId: 'heavy' },
          ],
          explanation:
            'NH₃: 14 + 3 = 17. C₂H₄: 2 × 12 + 4 = 28. Hai khí này có M nhỏ hơn 29 nên nhẹ hơn không khí. O₂: 2 × 16 = 32. C₃H₈: 3 × 12 + 8 = 44. SO₂: 32 + 2 × 16 = 64. Ba khí này nặng hơn không khí.',
          conceptIds: ['relative-density', 'molar-mass'],
        },
        {
          id: 'u10-cp-e10',
          type: 'fill-blank',
          prompt:
            'Khí sulfur dioxide SO₂ có M = 64 g/mol, khí oxygen O₂ có M = 32 g/mol. Chọn số và từ đúng cho từng chỗ trống',
          template: 'Tỉ khối của SO₂ so với O₂ là ___, nghĩa là SO₂ ___ hơn oxygen.',
          blanks: [
            { accepted: ['2'], wordBank: ['0,5', '2', '32'] },
            { accepted: ['nặng'], wordBank: ['nặng', 'nhẹ'] },
          ],
          explanation:
            'd = 64 : 32 = 2. Tỉ khối lớn hơn 1 nên SO₂ nặng hơn, cụ thể là nặng gấp đôi oxygen. Con số 0,5 là tỉ khối theo chiều ngược lại, của oxygen so với SO₂.',
          conceptIds: ['relative-density'],
        },
        {
          id: 'u10-cp-e11',
          type: 'balance-reaction',
          reactionId: 'baking-soda-decomposition',
          prompt:
            'Trong lò nướng, baking soda NaHCO₃ phân huỷ thành sodium carbonate, nước và khí carbon dioxide. Cân bằng phương trình này',
          explanation:
            'Na₂CO₃ có 2 Na nên cần 2 NaHCO₃. Khi đó vế trái có 2 Na, 2 H, 2 C và 6 O. Vế phải: Na₂CO₃ + H₂O + CO₂ cũng có 2 Na, 2 H, 2 C và 6 O. Kết quả: 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂.',
          conceptIds: ['balancing', 'stoichiometry'],
        },
        {
          id: 'u10-cp-e12',
          type: 'mcq',
          prompt:
            'Bánh nở là nhờ khí CO₂ từ baking soda: 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂. Nếu 16,8 g baking soda NaHCO₃ (M = 84 g/mol) phân huỷ hết, lượng khí CO₂ sinh ra chiếm bao nhiêu lít khi đo ở điều kiện chuẩn?',
          visual: { id: 'v', image: 'baking-cake' },
          options: [
            { id: 'a', text: '2,479 L' },
            { id: 'b', text: '4,958 L' },
            { id: 'c', text: '24,79 L' },
          ],
          correctOptionId: 'a',
          explanation:
            'Gam ra mol: 16,8 : 84 = 0,2 mol NaHCO₃. Theo hệ số, 2 mol NaHCO₃ tạo ra 1 mol CO₂, nên 0,2 mol tạo ra 0,1 mol CO₂. Mol ra lít: 0,1 × 24,79 = 2,479 L. Ra 4,958 là do quên tỉ lệ 2 với 1.',
          conceptIds: ['stoichiometry', 'molar-volume', 'mole-conversion'],
        },
      ],
      baseXp: 20,
    },
  ],
}
