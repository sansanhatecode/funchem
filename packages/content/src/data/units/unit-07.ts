import type { UnitInput } from '../../schema/lesson.js'

const SERIES = 'K, Na, Ca, Mg, Al, Zn, Fe, Pb, H, Cu, Ag, Au'

/**
 * Unit 7: Hoá học quanh nhà
 * 6 bài học + checkpoint: tính chất vật lí của kim loại, kim loại phản ứng với oxygen và acid,
 * dãy hoạt động hoá học, kim loại đẩy kim loại khỏi dung dịch muối, tách sắt và hợp kim, polymer.
 */
export const unit07: UnitInput = {
  id: 'u7-metals-materials',
  order: 7,
  title: 'Hoá học quanh nhà',
  tagline: 'Kim loại, hợp kim và nhựa',
  color: '#2B70C9',
  lessons: [
    // ───────────────────────── Bài 1: Tính chất vật lí của kim loại ─────────────────────────
    {
      id: 'u7-l1-metal-properties',
      title: 'Vì sao nồi làm bằng kim loại?',
      intro: {
        title: 'Một góc bếp toàn kim loại',
        story: [
          'Nhìn quanh bếp mà xem: nồi nhôm đang sôi trên bếp, chiếc chảo treo trên tường, chùm chìa khoá ai để quên trên bàn. Trong tường còn có dây điện lõi đồng. Vì sao những thứ này đều làm bằng kim loại mà không phải gỗ hay nhựa?',
          'Vì kim loại có bốn tài lẻ chung. Chúng dẫn nhiệt tốt, nên lửa ở đáy nồi làm chín cả nồi canh. Chúng dẫn điện tốt, nên làm được lõi dây điện. Chúng có ánh kim, tức là vẻ sáng lấp lánh của bề mặt. Và chúng có tính dẻo: bị đập hay kéo thì bẹp ra, dài ra chứ không vỡ vụn, nên dát được thành lá mỏng và kéo được thành sợi.',
          'Phóng to vào thành nồi, bạn thấy các nguyên tử aluminium (nhôm) xếp khít thành hàng lối. Một số electron không ở yên bên nguyên tử nào mà chạy tự do khắp khối kim loại. Chính các electron tự do này mang dòng điện đi và truyền nhiệt rất nhanh. Còn khi bị đập, các lớp nguyên tử trượt lên nhau mà không rời nhau, nên kim loại chỉ đổi hình dạng.',
          'Nhưng mỗi kim loại một tính. Nhôm nhẹ nên làm nồi, làm vỏ máy bay. Iron (sắt) nặng và chắc hơn nhôm, lại bị nam châm hút. Copper (đồng) dẫn điện gần như tốt nhất. Gold (vàng) dẻo nhất và gần như không bao giờ xỉn màu.',
        ],
        visual: { type: 'molecule', moleculeId: 'al', scene: 'metal-kitchen' },
      },
      exercises: [
        {
          id: 'u7-l1-e1',
          type: 'mcq',
          prompt:
            'Chỉ có đáy nồi chạm lửa, vậy mà chẳng mấy chốc cả thành nồi cũng nóng. Đó là nhờ tính chất nào của kim loại?',
          visual: { id: 'v', image: 'metal-kitchen' },
          options: [
            { id: 'a', text: 'Dẫn nhiệt' },
            { id: 'b', text: 'Dẫn điện' },
            { id: 'c', text: 'Ánh kim' },
          ],
          correctOptionId: 'a',
          explanation:
            'Kim loại dẫn nhiệt tốt: nhiệt từ đáy nồi truyền nhanh ra khắp thân nồi rồi vào thức ăn. Dẫn điện là cho dòng điện chạy qua, còn ánh kim là vẻ sáng lấp lánh của bề mặt.',
          conceptIds: ['metal-properties'],
        },
        {
          id: 'u7-l1-e2',
          type: 'match-pairs',
          prompt: 'Mỗi đồ vật dưới đây dùng tới một tài lẻ của kim loại. Nối cho đúng',
          pairs: [
            {
              left: { id: 'l1', text: 'Lõi dây điện', image: 'copper-wire' },
              right: { id: 'r1', text: 'Dẫn điện' },
            },
            {
              left: { id: 'l2', text: 'Đáy nồi trên bếp', image: 'metal-kitchen' },
              right: { id: 'r2', text: 'Dẫn nhiệt' },
            },
            {
              left: { id: 'l3', text: 'Nhẫn vàng lấp lánh', image: 'gold-ring' },
              right: { id: 'r3', text: 'Ánh kim' },
            },
            {
              left: { id: 'l4', text: 'Lá nhôm mỏng gói đồ nướng' },
              right: { id: 'r4', text: 'Tính dẻo' },
            },
          ],
          explanation:
            'Dây điện cần dẫn điện, đáy nồi cần dẫn nhiệt. Chiếc nhẫn đẹp nhờ ánh kim. Còn lá nhôm gói đồ nướng là một khối nhôm được cán mỏng hơn cả tờ giấy mà không rách, nhờ tính dẻo.',
          conceptIds: ['metal-properties'],
        },
        {
          id: 'u7-l1-e3',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Kim loại bị búa đập thì bẹp ra chứ không vỡ vụn. Tính chất đó gọi là ___. Vẻ sáng lấp lánh của bề mặt kim loại gọi là ___.',
          blanks: [
            { accepted: ['tính dẻo'], wordBank: ['tính dẻo', 'ánh kim', 'tính giòn'] },
            { accepted: ['ánh kim'], wordBank: ['tính dẻo', 'ánh kim', 'tính giòn'] },
          ],
          explanation:
            'Tính dẻo giúp kim loại dát được thành lá mỏng và kéo được thành sợi. Ánh kim là vẻ sáng của bề mặt kim loại khi phản chiếu ánh sáng. Thuỷ tinh hay viên phấn thì giòn: đập là vỡ.',
          conceptIds: ['metal-properties'],
        },
        {
          id: 'u7-l1-e4',
          type: 'true-false',
          prompt: 'Kim loại nào cũng cứng, nặng và bị nam châm hút.',
          answer: false,
          explanation:
            'Mỗi kim loại một tính. Nhôm nhẹ, sodium (natri) mềm tới mức cắt được bằng dao, mercury (thuỷ ngân) còn ở thể lỏng. Trong bốn kim loại của bài này, chỉ sắt bị nam châm hút. Điểm chung của kim loại là ánh kim, dẫn điện, dẫn nhiệt và tính dẻo.',
          conceptIds: ['metal-properties', 'metal'],
        },
        {
          id: 'u7-l1-e5',
          type: 'mcq',
          prompt:
            'Dùng búa đập một miếng vàng, nó bẹp dần thành lá mỏng mà không vỡ. Ở cấp nguyên tử, chuyện gì đã xảy ra?',
          visual: { id: 'v', image: 'gold-ring' },
          options: [
            { id: 'a', text: 'Từng nguyên tử vàng bị búa đập cho bẹp ra' },
            { id: 'b', text: 'Các lớp nguyên tử trượt lên nhau nhưng vẫn bám lấy nhau' },
            { id: 'c', text: 'Các nguyên tử vàng rời hẳn nhau ra rồi dính lại' },
          ],
          correctOptionId: 'b',
          explanation:
            'Nguyên tử không hề bẹp đi. Trong kim loại, các lớp nguyên tử trượt được lên nhau mà vẫn giữ lấy nhau, nên cả khối chỉ đổi hình dạng. Vàng là kim loại dẻo nhất: một hạt vàng nhỏ dát được thành lá mỏng tới mức ánh sáng xuyên qua.',
          conceptIds: ['metal-properties', 'particle-model'],
        },
        {
          id: 'u7-l1-e6',
          type: 'sort',
          prompt: 'Điều nào đúng với mọi kim loại, điều nào chỉ đúng với một số kim loại?',
          groups: [
            { id: 'all', label: 'Kim loại nào cũng có' },
            { id: 'some', label: 'Chỉ một số kim loại' },
          ],
          items: [
            { id: 'i1', text: 'Dẫn điện', groupId: 'all' },
            { id: 'i2', text: 'Bị nam châm hút', groupId: 'some' },
            { id: 'i3', text: 'Dẫn nhiệt', groupId: 'all' },
            { id: 'i4', text: 'Ở thể lỏng ở nhiệt độ phòng', groupId: 'some' },
            { id: 'i5', text: 'Có ánh kim', groupId: 'all' },
            { id: 'i6', text: 'Có tính dẻo', groupId: 'all' },
          ],
          explanation:
            'Dẫn điện, dẫn nhiệt, ánh kim và tính dẻo là bốn tính chất chung của kim loại. Bị nam châm hút thì chỉ có sắt và vài kim loại khác. Ở thể lỏng ở nhiệt độ phòng thì có mercury (thuỷ ngân), còn hầu hết kim loại ở thể rắn.',
          conceptIds: ['metal-properties', 'metal'],
        },
        {
          id: 'u7-l1-e7',
          type: 'mcq',
          prompt:
            'Lõi của hầu hết dây điện trong nhà làm bằng một kim loại màu đỏ cam, dẫn điện gần như tốt nhất. Đó là kim loại nào?',
          visual: { id: 'v', image: 'copper-wire' },
          options: [
            { id: 'a', moleculeId: 'al', text: 'Aluminium (nhôm)' },
            { id: 'b', moleculeId: 'fe', text: 'Iron (sắt)' },
            { id: 'c', moleculeId: 'cu', text: 'Copper (đồng)' },
          ],
          correctOptionId: 'c',
          explanation:
            'Đó là copper (đồng). Đồng dẫn điện chỉ kém bạc, lại dẻo nên kéo được thành sợi nhỏ. Nhôm và sắt có màu trắng xám, không phải đỏ cam.',
          conceptIds: ['metal-properties', 'metal'],
        },
        {
          id: 'u7-l1-e8',
          type: 'match-pairs',
          prompt: 'Mỗi kim loại một tính. Nối kim loại với điểm riêng của nó',
          pairs: [
            {
              left: { id: 'l1', moleculeId: 'al', text: 'Aluminium (nhôm)' },
              right: { id: 'r1', text: 'Nhẹ, làm nồi và vỏ máy bay' },
            },
            {
              left: { id: 'l2', moleculeId: 'fe', text: 'Iron (sắt)' },
              right: { id: 'r2', text: 'Bị nam châm hút' },
            },
            {
              left: { id: 'l3', moleculeId: 'cu', text: 'Copper (đồng)' },
              right: { id: 'r3', text: 'Màu đỏ cam, làm lõi dây điện' },
            },
            {
              left: { id: 'l4', moleculeId: 'au', text: 'Gold (vàng)' },
              right: { id: 'r4', text: 'Dẻo nhất, gần như không bao giờ xỉn màu' },
            },
          ],
          explanation:
            'Người ta chọn kim loại theo việc cần làm: cần nhẹ thì dùng nhôm, cần dẫn điện thì dùng đồng, cần đẹp bền mãi thì dùng vàng. Sắt nặng và chắc hơn nhôm, lại là kim loại duy nhất trong bốn kim loại này bị nam châm hút.',
          conceptIds: ['metal-properties', 'metal'],
        },
        {
          id: 'u7-l1-e9',
          type: 'true-false',
          prompt: 'Kim loại dẫn điện được là nhờ có những electron chạy tự do khắp khối kim loại.',
          visual: { id: 'v', image: 'copper-wire' },
          answer: true,
          explanation:
            'Bạn đã biết electron mang điện âm. Trong kim loại, một số electron không ở yên bên nguyên tử nào. Nối dây vào nguồn điện, các electron tự do này cùng chạy về một phía, tạo thành dòng điện. Nhựa và gỗ không có electron tự do nên không dẫn điện.',
          conceptIds: ['metal-properties', 'subatomic-particles'],
        },
        {
          id: 'u7-l1-e10',
          type: 'mcq',
          prompt: 'Quai nồi và cán chảo thường được bọc nhựa hoặc gỗ. Vì sao?',
          visual: { id: 'v', image: 'metal-kitchen' },
          options: [
            { id: 'a', text: 'Vì nhựa và gỗ dẫn nhiệt tốt hơn kim loại' },
            { id: 'b', text: 'Vì nhựa và gỗ có ánh kim đẹp hơn kim loại' },
            { id: 'c', text: 'Vì nhựa và gỗ dẫn nhiệt kém nên tay cầm không bị nóng' },
          ],
          correctOptionId: 'c',
          explanation:
            'Kim loại dẫn nhiệt tốt nên quai nồi bằng kim loại cũng nóng lên rất nhanh. Nhựa và gỗ dẫn nhiệt kém, nhiệt khó truyền tới tay bạn. Dù vậy, khi bắc nồi nóng vẫn nên dùng miếng lót tay.',
          conceptIds: ['metal-properties'],
        },
      ],
      unlocksMolecules: [],
      baseXp: 10,
    },

    // ───────────────────────── Bài 2: Kim loại phản ứng với oxygen và acid ─────────────────────────
    {
      id: 'u7-l2-metals-react',
      title: 'Kim loại cũng biết phản ứng',
      intro: {
        title: 'Lon nhôm không gỉ, vì sao?',
        story: [
          'Hai cái vỏ lon bị bỏ quên ở góc sân. Sau một mùa mưa, vỏ hộp sắt đã gỉ nâu, còn vỏ lon nhôm vẫn sáng. Có phải nhôm không phản ứng với oxygen?',
          'Ngược lại là khác. Aluminium (nhôm) phản ứng với oxygen còn nhanh hơn sắt. Mặt nhôm vừa lộ ra không khí là phủ ngay một lớp aluminium oxide Al₂O₃. Lớp này mỏng tới mức mắt không thấy, nhưng kín và bám rất chặt, nên oxygen không chạm được vào phần nhôm bên dưới. Gỉ sắt thì xốp và dễ bong, nên sắt cứ bị ăn dần vào trong.',
          'Hợp chất của một nguyên tố với oxygen gọi là oxide. Nhiều kim loại phản ứng với oxygen tạo thành oxide: magnesium cháy sáng trong pháo bông thành magnesium oxide, sắt gỉ chậm chạp thành iron(III) oxide.',
          'Kim loại còn phản ứng với acid. Acid là những chất khi tan trong nước tạo ra ion H⁺, như acetic acid làm giấm có vị chua. Trong phòng thí nghiệm, giáo viên thả một viên zinc (kẽm) vào dung dịch hydrochloric acid HCl: viên kẽm sủi bọt khí hydrogen và tan dần. Thí nghiệm này chỉ làm ở trường, có kính bảo hộ, vì acid ăn da và hydrogen dễ cháy.',
        ],
        visual: { type: 'reaction', reactionId: 'aluminium-oxidation' },
      },
      exercises: [
        {
          id: 'u7-l2-e1',
          type: 'mcq',
          prompt:
            'Mặt nhôm vừa gặp không khí là tự phủ một lớp màng mỏng và kín. Lớp màng đó là chất gì?',
          visual: { id: 'v', image: 'aluminium-cans' },
          options: [
            { id: 'a', moleculeId: 'al2o3', text: 'Aluminium oxide' },
            { id: 'b', moleculeId: 'fe2o3', text: 'Iron(III) oxide' },
            { id: 'c', moleculeId: 'al', text: 'Aluminium (nhôm)' },
          ],
          correctOptionId: 'a',
          explanation:
            'Aluminium (nhôm) kết hợp với oxygen trong không khí thành aluminium oxide Al₂O₃. Iron(III) oxide là gỉ của sắt, không phải của nhôm.',
          conceptIds: ['oxide', 'reactants-products'],
        },
        {
          id: 'u7-l2-e2',
          type: 'true-false',
          prompt: 'Vỏ lon nhôm không gỉ nâu như hộp sắt vì nhôm không phản ứng với oxygen.',
          visual: { id: 'v', image: 'aluminium-cans' },
          answer: false,
          explanation:
            'Nhôm phản ứng với oxygen còn nhanh hơn sắt. Khác nhau là ở sản phẩm: lớp aluminium oxide kín và bám chặt nên che được phần nhôm bên dưới, còn gỉ sắt xốp và dễ bong nên sắt cứ bị ăn dần vào trong.',
          conceptIds: ['oxide', 'oxidation'],
        },
        {
          id: 'u7-l2-e3',
          type: 'match-pairs',
          prompt: 'Kim loại gặp phi kim. Nối mỗi cặp chất phản ứng với sản phẩm của chúng',
          pairs: [
            {
              left: { id: 'l1', text: 'Magnesium + oxygen' },
              right: { id: 'r1', moleculeId: 'mgo', text: 'Magnesium oxide' },
            },
            {
              left: { id: 'l2', text: 'Iron (sắt) + oxygen' },
              right: { id: 'r2', moleculeId: 'fe2o3', text: 'Iron(III) oxide' },
            },
            {
              left: { id: 'l3', text: 'Aluminium (nhôm) + oxygen' },
              right: { id: 'r3', moleculeId: 'al2o3', text: 'Aluminium oxide' },
            },
            {
              left: { id: 'l4', text: 'Sodium (natri) + chlorine' },
              right: { id: 'r4', moleculeId: 'nacl', text: 'Sodium chloride (muối ăn)' },
            },
          ],
          explanation:
            'Sản phẩm chỉ chứa những nguyên tố có trong chất phản ứng. Kim loại với oxygen tạo thành oxide. Kim loại cũng phản ứng với phi kim khác: natri gặp khí chlorine tạo thành sodium chloride, chính là muối ăn.',
          conceptIds: ['oxide', 'reactants-products'],
        },
        {
          id: 'u7-l2-e4',
          type: 'build-molecule',
          prompt: 'Ghép aluminium oxide Al₂O₃, lớp áo vô hình của đồ nhôm',
          targetMoleculeId: 'al2o3',
          availableAtoms: { Al: 3, O: 4, Fe: 2 },
          explanation:
            'Al₂O₃ gồm 2 nguyên tử aluminium và 3 nguyên tử oxygen. Công thức này có dạng giống hệt Fe₂O₃ của gỉ sắt, chỉ khác kim loại.',
          conceptIds: ['formula', 'oxide'],
        },
        {
          id: 'u7-l2-e5',
          type: 'balance-reaction',
          reactionId: 'aluminium-oxidation',
          prompt: 'Cân bằng phương trình của phản ứng nhôm tự phủ lớp aluminium oxide',
          explanation:
            'Mỗi O₂ có 2 O, mỗi Al₂O₃ có 3 O. Số nhỏ nhất chia hết cho cả 2 và 3 là 6, nên lấy 3 O₂ và 2 Al₂O₃. Hai Al₂O₃ cần 4 Al. Kết quả: 4Al + 3O₂ → 2Al₂O₃. Các hệ số giống hệt phương trình sắt gỉ bạn từng cân bằng.',
          conceptIds: ['balancing', 'oxide'],
        },
        {
          id: 'u7-l2-e6',
          type: 'mcq',
          prompt:
            'Trong phòng thí nghiệm, giáo viên thả một viên kẽm (Zn) vào dung dịch hydrochloric acid (HCl). Bọt khí sủi lên quanh viên kẽm. Đó là khí gì?',
          visual: { id: 'v', image: 'zinc-acid' },
          options: [
            { id: 'a', moleculeId: 'o2', text: 'Oxygen' },
            { id: 'b', moleculeId: 'h2', text: 'Hydrogen' },
            { id: 'c', moleculeId: 'co2', text: 'Carbon dioxide' },
          ],
          correctOptionId: 'b',
          explanation:
            'Sản phẩm chỉ chứa những nguyên tố có trong chất phản ứng: Zn, H và Cl. Kẽm và hydrochloric acid không có O hay C để tạo ra oxygen hay carbon dioxide. Kẽm đã đẩy hydrogen ra khỏi acid thành khí H₂.',
          conceptIds: ['acid', 'reactants-products'],
        },
        {
          id: 'u7-l2-e7',
          type: 'sort',
          prompt: 'Kẽm gặp hydrochloric acid: Zn + 2HCl → ZnCl₂ + H₂. Xếp mỗi chất vào đúng nhóm',
          groups: [
            { id: 'reactant', label: 'Chất phản ứng' },
            { id: 'product', label: 'Sản phẩm' },
          ],
          items: [
            { id: 'i1', moleculeId: 'zncl2', text: 'Zinc chloride', groupId: 'product' },
            { id: 'i2', moleculeId: 'zn', text: 'Zinc (kẽm)', groupId: 'reactant' },
            { id: 'i3', moleculeId: 'h2', text: 'Hydrogen', groupId: 'product' },
            { id: 'i4', moleculeId: 'hcl', text: 'Hydrochloric acid', groupId: 'reactant' },
          ],
          explanation:
            'Kẽm và hydrochloric acid đứng trước mũi tên nên là chất phản ứng. Khí hydrogen bay lên, còn zinc chloride tan trong nước nên bạn không nhìn thấy. Zinc chloride thuộc nhóm hợp chất gọi là muối, cùng họ với muối ăn.',
          conceptIds: ['acid', 'reactants-products', 'salt'],
        },
        {
          id: 'u7-l2-e8',
          type: 'balance-reaction',
          reactionId: 'zinc-hydrochloric-acid',
          prompt: 'Cân bằng phương trình của phản ứng kẽm với hydrochloric acid',
          explanation:
            'ZnCl₂ có 2 Cl, mà mỗi HCl chỉ có 1 Cl, nên cần 2 HCl. Hai HCl có 2 H, vừa đủ cho một phân tử H₂. Kết quả: Zn + 2HCl → ZnCl₂ + H₂.',
          conceptIds: ['balancing', 'acid'],
        },
        {
          id: 'u7-l2-e9',
          type: 'true-false',
          prompt:
            'Viên kẽm nhỏ dần rồi biến mất trong acid, nghĩa là các nguyên tử zinc đã bị phá huỷ.',
          visual: { id: 'v', image: 'zinc-acid' },
          answer: false,
          explanation:
            'Không nguyên tử nào mất đi. Các nguyên tử zinc rời viên kẽm, thành ion Zn²⁺ của zinc chloride tan trong nước. Chúng nhỏ tới mức mắt không thấy, giống như đường tan trong trà.',
          conceptIds: ['conservation-of-mass', 'solution'],
        },
        {
          id: 'u7-l2-e10',
          type: 'mcq',
          prompt:
            'Dưa chua, canh chua có chứa acid. Vì sao không nên đựng những món này lâu ngày trong nồi nhôm?',
          visual: { id: 'v', image: 'metal-kitchen' },
          options: [
            { id: 'a', text: 'Vì acid phản ứng dần với nhôm, làm mòn nồi và đưa nhôm vào thức ăn' },
            { id: 'b', text: 'Vì nhôm dẫn nhiệt tốt nên món chua để trong nồi mau bị nguội' },
            { id: 'c', text: 'Vì acid làm lớp aluminium oxide dày thêm, khiến nồi nặng hơn' },
          ],
          correctOptionId: 'a',
          explanation:
            'Acid trong đồ chua phản ứng chậm với lớp aluminium oxide rồi với nhôm bên dưới. Nồi bị mòn dần, còn nhôm đi vào thức ăn. Vì thế đồ chua thường được đựng trong hũ thuỷ tinh, sành sứ hoặc inox.',
          conceptIds: ['acid', 'oxide'],
        },
      ],
      unlocksMolecules: ['al2o3', 'zn'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 3: Dãy hoạt động hoá học ─────────────────────────
    {
      id: 'u7-l3-reactivity-series',
      title: 'Bảng xếp hạng kim loại',
      intro: {
        title: 'Mẩu natri chạy trên mặt nước',
        story: [
          'Trong một video thí nghiệm, thầy giáo đứng sau tấm chắn, thả một mẩu sodium (natri) nhỏ bằng hạt đậu vào chậu nước. Mẩu kim loại vo tròn lại, chạy vòng vòng trên mặt nước, xì xì rồi bốc cháy. Trong khi đó, chiếc nhẫn vàng ngâm nước cả đời vẫn y nguyên.',
          'Natri đã phản ứng với nước và đẩy hydrogen ra khỏi nước thành khí. Chính khí hydrogen xì ra đẩy mẩu natri chạy. Có kim loại hăng hái phản ứng như thế, có kim loại lại gần như trơ. Ta nói chúng khác nhau về mức độ hoạt động hoá học.',
          `Xếp các kim loại quen thuộc từ hăng hái nhất tới trơ nhất, ta được dãy hoạt động hoá học: ${SERIES}. Đọc lần lượt: potassium (kali), sodium (natri), calcium, magnesium, aluminium (nhôm), zinc (kẽm), iron (sắt), lead (chì), hydrogen, copper (đồng), silver (bạc), gold (vàng). Càng đứng về bên trái, kim loại hoạt động càng mạnh.`,
          'H là hydrogen, không phải kim loại. Nó được đặt vào làm mốc: kim loại đứng trước H đẩy được hydrogen ra khỏi dung dịch acid, kim loại đứng sau H thì không. Đứng đầu dãy, kali và natri phản ứng mạnh ngay cả với nước. Cuối dãy, bạc và vàng gần như trơ, nên được làm trang sức.',
        ],
        visual: { type: 'molecule', moleculeId: 'h2', scene: 'sodium-water' },
      },
      exercises: [
        {
          id: 'u7-l3-e1',
          type: 'mcq',
          prompt: `Trong dãy hoạt động hoá học ${SERIES}, kim loại nào hoạt động mạnh nhất?`,
          options: [
            { id: 'a', text: 'Au (vàng)' },
            { id: 'b', text: 'K (kali)' },
            { id: 'c', text: 'Fe (sắt)' },
          ],
          correctOptionId: 'b',
          explanation:
            'Dãy xếp theo mức độ hoạt động giảm dần từ trái sang phải. K (potassium, kali) đứng đầu nên hoạt động mạnh nhất. Au (vàng) đứng cuối nên trơ nhất.',
          conceptIds: ['reactivity-series'],
        },
        {
          id: 'u7-l3-e2',
          type: 'sort',
          prompt: `Dãy hoạt động hoá học: ${SERIES}. Xếp mỗi kim loại vào đúng nhóm`,
          groups: [
            { id: 'before', label: 'Đứng trước H' },
            { id: 'after', label: 'Đứng sau H' },
          ],
          items: [
            { id: 'i1', moleculeId: 'cu', text: 'Copper (đồng)', groupId: 'after' },
            { id: 'i2', moleculeId: 'mg', text: 'Magnesium', groupId: 'before' },
            { id: 'i3', moleculeId: 'au', text: 'Gold (vàng)', groupId: 'after' },
            { id: 'i4', moleculeId: 'zn', text: 'Zinc (kẽm)', groupId: 'before' },
            { id: 'i5', moleculeId: 'fe', text: 'Iron (sắt)', groupId: 'before' },
            { id: 'i6', text: 'Silver (bạc)', groupId: 'after' },
          ],
          explanation:
            'Magnesium, kẽm và sắt đứng bên trái H. Đồng, bạc và vàng đứng bên phải H. Vị trí so với H cho biết kim loại có đẩy được hydrogen ra khỏi dung dịch acid hay không.',
          conceptIds: ['reactivity-series'],
        },
        {
          id: 'u7-l3-e3',
          type: 'true-false',
          prompt: 'H có mặt trong dãy hoạt động hoá học vì hydrogen cũng là một kim loại.',
          answer: false,
          explanation:
            'Hydrogen là phi kim. Nó được đặt vào dãy để làm mốc so sánh: kim loại đứng trước H đẩy được hydrogen ra khỏi dung dịch acid, kim loại đứng sau H thì không.',
          conceptIds: ['reactivity-series'],
        },
        {
          id: 'u7-l3-e4',
          type: 'fill-blank',
          prompt: 'Chọn kí hiệu còn thiếu trong dãy hoạt động hoá học',
          template: 'K, Na, Ca, Mg, Al, ___, Fe, Pb, H, ___, Ag, Au.',
          blanks: [
            { accepted: ['Zn'], wordBank: ['Zn', 'Cu', 'Hg'] },
            { accepted: ['Cu'], wordBank: ['Zn', 'Cu', 'Hg'] },
          ],
          explanation:
            'Zn (kẽm) đứng ngay trước Fe (sắt). Cu (đồng) đứng ngay sau H. Nhiều bạn nhớ cả dãy bằng một câu vần: "Khi Nào Cần May Áo Záp Sắt, Phải Hỏi Cửa Á Âu". Chữ "Záp" cố ý viết sai chính tả để nhớ chữ Z của Zn.',
          conceptIds: ['reactivity-series'],
        },
        {
          id: 'u7-l3-e5',
          type: 'mcq',
          prompt: `Dãy hoạt động hoá học: ${SERIES}. Giáo viên thả một mẩu đồng (Cu) vào dung dịch hydrochloric acid. Điều gì xảy ra?`,
          visual: { id: 'v', image: 'copper-wire' },
          options: [
            { id: 'a', text: 'Sủi bọt khí hydrogen, vì kim loại nào cũng đẩy được hydrogen' },
            { id: 'b', text: 'Đồng bốc cháy, vì đồng hoạt động mạnh hơn cả kali' },
            { id: 'c', text: 'Không có phản ứng, vì đồng đứng sau H trong dãy' },
          ],
          correctOptionId: 'c',
          explanation:
            'Chỉ kim loại đứng trước H mới đẩy được hydrogen ra khỏi dung dịch acid. Đồng đứng sau H nên mẩu đồng nằm yên, không sủi bọt. Bạc và vàng cũng vậy.',
          conceptIds: ['reactivity-series', 'acid'],
        },
        {
          id: 'u7-l3-e6',
          type: 'order-steps',
          prompt: 'Sắp xếp các kim loại từ hoạt động mạnh nhất tới yếu nhất',
          steps: [
            { id: 's1', text: 'Potassium (kali), K' },
            { id: 's2', text: 'Magnesium, Mg' },
            { id: 's3', text: 'Zinc (kẽm), Zn' },
            { id: 's4', text: 'Iron (sắt), Fe' },
            { id: 's5', text: 'Copper (đồng), Cu' },
            { id: 's6', text: 'Gold (vàng), Au' },
          ],
          explanation: `Theo dãy ${SERIES}: kali mạnh nhất, rồi tới magnesium, kẽm, sắt. Đồng đã đứng sau H, còn vàng đứng cuối cùng.`,
          conceptIds: ['reactivity-series'],
        },
        {
          id: 'u7-l3-e7',
          type: 'match-pairs',
          prompt: 'Nối mỗi nhóm kim loại với cách chúng phản ứng',
          pairs: [
            {
              left: { id: 'l1', text: 'Kali, natri (đầu dãy)', image: 'sodium-water' },
              right: { id: 'r1', text: 'Phản ứng mạnh ngay cả với nước' },
            },
            {
              left: { id: 'l2', text: 'Kẽm, sắt (trước H)', image: 'zinc-acid' },
              right: {
                id: 'r2',
                text: 'Không sủi bọt trong nước, nhưng sủi bọt hydrogen trong dung dịch acid',
              },
            },
            {
              left: { id: 'l3', text: 'Bạc, vàng (cuối dãy)', image: 'gold-ring' },
              right: { id: 'r3', text: 'Gần như trơ, nên được làm trang sức' },
            },
          ],
          explanation:
            'Càng đứng đầu dãy, kim loại càng hăng hái: kali và natri đẩy được hydrogen ra khỏi cả nước. Kẽm và sắt phải gặp acid mới đẩy được hydrogen. Bạc và vàng đứng cuối dãy, gần như không phản ứng với oxygen, nước hay hydrochloric acid, nên trang sức giữ được vẻ sáng đẹp.',
          conceptIds: ['reactivity-series'],
        },
        {
          id: 'u7-l3-e8',
          type: 'mcq',
          prompt:
            'Giáo viên thả một mẩu magnesium và một mẩu sắt cùng cỡ vào hai ống nghiệm đựng cùng một loại dung dịch acid. Mg đứng trước Fe trong dãy hoạt động hoá học. Ống nào sủi bọt mạnh hơn?',
          options: [
            { id: 'a', text: 'Ống có magnesium, vì magnesium hoạt động mạnh hơn sắt' },
            { id: 'b', text: 'Ống có sắt, vì sắt đứng gần H hơn magnesium' },
            { id: 'c', text: 'Hai ống như nhau, vì cả hai kim loại đều đứng trước H' },
          ],
          correctOptionId: 'a',
          explanation:
            'Cả hai đều đứng trước H nên đều đẩy được hydrogen. Nhưng magnesium đứng xa về bên trái hơn, hoạt động mạnh hơn, nên sủi bọt dữ dội hơn hẳn. Sắt chỉ sủi bọt lăn tăn.',
          conceptIds: ['reactivity-series', 'acid'],
        },
        {
          id: 'u7-l3-e9',
          type: 'fill-blank',
          prompt: 'Chọn sản phẩm còn thiếu',
          template:
            'Kẽm đứng trước H nên đẩy được hydrogen ra khỏi hydrochloric acid: Zn + 2HCl → ___ + H₂.',
          blanks: [{ accepted: ['ZnCl₂', 'ZnCl2'], wordBank: ['ZnO', 'ZnCl₂', 'ZnH₂'] }],
          explanation:
            'Vế trái có 1 Zn, 2 H và 2 Cl. Khí H₂ đã lấy 2 H, vậy chất còn lại phải chứa 1 Zn và 2 Cl: zinc chloride ZnCl₂. Vế trái không có nguyên tử oxygen nào để tạo ra ZnO.',
          conceptIds: ['reactivity-series', 'conservation-of-mass', 'salt'],
        },
        {
          id: 'u7-l3-e10',
          type: 'mcq',
          prompt:
            'Thí nghiệm thả natri vào nước chỉ do giáo viên làm sau tấm chắn, còn bạn xem qua video. Vì sao phải cẩn thận như vậy?',
          visual: { id: 'v', image: 'sodium-water' },
          options: [
            { id: 'a', text: 'Vì phản ứng diễn ra rất chậm, phải chờ nhiều giờ mới thấy' },
            { id: 'b', text: 'Vì phản ứng toả nhiều nhiệt, sinh khí hydrogen dễ cháy nổ' },
            { id: 'c', text: 'Vì natri gặp nước sẽ đông cứng lại, rất khó lấy ra' },
          ],
          correctOptionId: 'b',
          explanation:
            'Natri đứng gần đầu dãy nên phản ứng với nước rất mãnh liệt: toả nhiệt, sinh khí hydrogen dễ cháy, có thể bắn tung toé và nổ. Kali còn dữ dội hơn. Đây là thí nghiệm tuyệt đối không tự làm.',
          conceptIds: ['reactivity-series'],
        },
      ],
      unlocksMolecules: ['zncl2'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 4: Kim loại đẩy kim loại khỏi dung dịch muối ─────────────────────────
    {
      id: 'u7-l4-displacement',
      title: 'Kim loại mạnh đẩy kim loại yếu',
      intro: {
        title: 'Đồng ở đâu ra?',
        story: [
          'Thả một cây đinh sắt xám bạc vào cốc dung dịch màu xanh lam. Ít phút sau nhấc lên, phần đinh ngập trong dung dịch đã phủ một lớp đỏ nâu. Đó là kim loại copper (đồng). Đồng ở đâu ra?',
          'Dung dịch xanh ấy là copper(II) sulfate CuSO₄ tan trong nước. Nó là một muối, cùng họ với muối ăn NaCl: gồm ion kim loại Cu²⁺ và ion sulfate SO₄²⁻ hút nhau. Tan vào nước, hai loại ion này tách rời nhau. Chính ion Cu²⁺ làm dung dịch có màu xanh lam.',
          'Sắt hoạt động mạnh hơn đồng. Mỗi nguyên tử iron (sắt) trên mặt đinh nhường 2 electron cho một ion Cu²⁺. Nguyên tử sắt thành ion Fe²⁺ và tan vào dung dịch. Ion Cu²⁺ nhận electron, trở lại thành nguyên tử đồng và bám lên đinh. Sắt đã đẩy đồng ra khỏi dung dịch muối: Fe + CuSO₄ → FeSO₄ + Cu.',
          'Quy tắc chung: kim loại đứng trước trong dãy hoạt động hoá học đẩy được kim loại đứng sau ra khỏi dung dịch muối. Riêng kali, natri và calcium thì không, vì chúng phản ứng với nước trong dung dịch trước.',
        ],
        visual: { type: 'reaction', reactionId: 'iron-copper-sulfate' },
      },
      exercises: [
        {
          id: 'u7-l4-e1',
          type: 'mcq',
          prompt:
            'Lớp màu đỏ nâu bám lên cây đinh sắt sau khi ngâm trong dung dịch copper(II) sulfate là chất gì?',
          visual: { id: 'v', image: 'copper-coated-nail' },
          options: [
            { id: 'a', moleculeId: 'fe2o3', text: 'Iron(III) oxide (gỉ sắt)' },
            { id: 'b', moleculeId: 'cu', text: 'Copper (đồng)' },
            { id: 'c', moleculeId: 'fe', text: 'Iron (sắt)' },
          ],
          correctOptionId: 'b',
          explanation:
            'Đó là copper (đồng) vừa bị sắt đẩy ra khỏi dung dịch. Gỉ sắt cũng nâu đỏ nhưng xốp, sần sùi và phải nhiều ngày mới xuất hiện. Lớp đồng thì bám lên chỉ sau ít phút.',
          conceptIds: ['displacement', 'reactants-products'],
        },
        {
          id: 'u7-l4-e2',
          type: 'sort',
          prompt: 'Sắt đẩy đồng: Fe + CuSO₄ → FeSO₄ + Cu. Xếp mỗi chất vào đúng nhóm',
          groups: [
            { id: 'reactant', label: 'Chất phản ứng' },
            { id: 'product', label: 'Sản phẩm' },
          ],
          items: [
            { id: 'i1', moleculeId: 'feso4', text: 'Iron(II) sulfate', groupId: 'product' },
            { id: 'i2', moleculeId: 'fe', text: 'Iron (sắt)', groupId: 'reactant' },
            { id: 'i3', moleculeId: 'cu', text: 'Copper (đồng)', groupId: 'product' },
            { id: 'i4', moleculeId: 'cuso4', text: 'Copper(II) sulfate', groupId: 'reactant' },
          ],
          explanation:
            'Sắt và copper(II) sulfate đứng trước mũi tên nên là chất phản ứng. Iron(II) sulfate và đồng sinh ra sau phản ứng nên là sản phẩm. Hai kim loại đã đổi chỗ cho nhau: sắt vào dung dịch, đồng ra ngoài.',
          conceptIds: ['displacement', 'reactants-products'],
        },
        {
          id: 'u7-l4-e3',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Dung dịch copper(II) sulfate có màu ___. Khi ngâm đinh sắt, màu ấy nhạt dần vì các ion ___ rời dung dịch, thành nguyên tử đồng bám lên đinh.',
          blanks: [
            { accepted: ['xanh lam'], wordBank: ['đỏ nâu', 'xanh lam', 'vàng'] },
            { accepted: ['Cu²⁺', 'Cu2+'], wordBank: ['Fe²⁺', 'Na⁺', 'Cu²⁺'] },
          ],
          explanation:
            'Màu xanh lam là của ion Cu²⁺. Mỗi ion Cu²⁺ nhận electron từ sắt thì thành một nguyên tử đồng và rời dung dịch. Ion Cu²⁺ ít dần nên màu xanh nhạt dần.',
          conceptIds: ['displacement', 'reaction-signs', 'ion'],
        },
        {
          id: 'u7-l4-e4',
          type: 'true-false',
          prompt: 'Lớp đồng bám trên đinh là do các nguyên tử sắt đã biến thành nguyên tử đồng.',
          visual: { id: 'v', image: 'copper-coated-nail' },
          answer: false,
          explanation:
            'Phản ứng hoá học không biến nguyên tố này thành nguyên tố khác. Đồng có sẵn trong dung dịch ở dạng ion Cu²⁺. Nguyên tử sắt thì thành ion Fe²⁺ và tan vào dung dịch. Hai bên chỉ đổi chỗ cho nhau.',
          conceptIds: ['displacement', 'conservation-of-mass'],
        },
        {
          id: 'u7-l4-e5',
          type: 'order-steps',
          prompt:
            'Chuyện gì xảy ra ở cấp nguyên tử khi đinh sắt gặp dung dịch copper(II) sulfate? Sắp xếp theo thứ tự',
          steps: [
            { id: 's1', text: 'Ion Cu²⁺ trong dung dịch chạm vào mặt đinh sắt' },
            { id: 's2', text: 'Một nguyên tử sắt nhường 2 electron cho ion Cu²⁺' },
            {
              id: 's3',
              text: 'Ion Cu²⁺ thành nguyên tử đồng, nguyên tử sắt thành ion Fe²⁺',
            },
            { id: 's4', text: 'Lớp đồng trên đinh dày dần, dung dịch nhạt màu dần' },
          ],
          explanation:
            'Sắt hoạt động mạnh hơn nên nhường electron cho ion Cu²⁺. Mất electron, sắt thành ion và tan đi. Nhận electron, ion đồng trở lại thành kim loại và bám lên đinh. Chuyện này lặp lại vô số lần nên lớp đồng dày dần.',
          conceptIds: ['displacement', 'ion'],
        },
        {
          id: 'u7-l4-e6',
          type: 'build-molecule',
          prompt: 'Ghép copper(II) sulfate CuSO₄, chất làm dung dịch có màu xanh lam',
          targetMoleculeId: 'cuso4',
          availableAtoms: { Cu: 2, S: 2, O: 5, Fe: 1 },
          explanation:
            'CuSO₄ gồm 1 nguyên tử copper, 1 nguyên tử sulfur và 4 nguyên tử oxygen. Số 4 chỉ thuộc về chữ O đứng ngay trước nó. Thay Cu bằng Fe, bạn được iron(II) sulfate FeSO₄.',
          conceptIds: ['formula', 'salt'],
        },
        {
          id: 'u7-l4-e7',
          type: 'mcq',
          prompt: `Dãy hoạt động hoá học: ${SERIES}. Trong phòng thí nghiệm, nhúng một lá kẽm vào dung dịch copper(II) sulfate. Điều gì xảy ra?`,
          options: [
            { id: 'a', text: 'Không có gì xảy ra, vì kẽm hoạt động yếu hơn đồng' },
            { id: 'b', text: 'Kẽm đẩy đồng ra, lá kẽm phủ một lớp đồng đỏ nâu' },
            { id: 'c', text: 'Đồng đẩy kẽm ra, dung dịch có màu xanh đậm thêm' },
          ],
          correctOptionId: 'b',
          explanation:
            'Kẽm đứng trước đồng trong dãy nên đẩy được đồng ra khỏi dung dịch muối, giống hệt sắt. Lá kẽm phủ một lớp đồng, còn dung dịch nhạt màu dần vì ion Cu²⁺ ít đi.',
          conceptIds: ['displacement', 'reactivity-series'],
        },
        {
          id: 'u7-l4-e8',
          type: 'true-false',
          prompt:
            'Đồng đứng sau sắt trong dãy hoạt động hoá học. Vì thế thả một sợi dây đồng vào dung dịch iron(II) sulfate thì không có phản ứng.',
          visual: { id: 'v', image: 'copper-wire' },
          answer: true,
          explanation:
            'Đồng hoạt động yếu hơn sắt. Kim loại yếu không đẩy được kim loại mạnh ra khỏi dung dịch muối, nên sợi dây đồng cứ nằm yên trong cốc. Phản ứng chỉ chạy một chiều: sắt đẩy được đồng, còn đồng không đẩy được sắt.',
          conceptIds: ['displacement', 'reactivity-series'],
        },
        {
          id: 'u7-l4-e9',
          type: 'mcq',
          prompt:
            'Đồng đứng trước bạc trong dãy hoạt động hoá học. Nhúng sợi dây đồng vào dung dịch silver nitrate, một muối của bạc, không màu. Vài giờ sau, dây đồng phủ đầy tinh thể bạc lấp lánh và dung dịch chuyển dần sang xanh lam. Vì sao dung dịch hoá xanh?',
          options: [
            { id: 'a', text: 'Vì đồng tan vào dung dịch thành ion Cu²⁺ có màu xanh lam' },
            { id: 'b', text: 'Vì bạc tan vào dung dịch thành ion có màu xanh lam' },
            { id: 'c', text: 'Vì nước tự đổi sang màu xanh khi ngâm kim loại lâu' },
          ],
          correctOptionId: 'a',
          explanation:
            'Đồng mạnh hơn bạc nên đẩy bạc ra khỏi dung dịch muối. Bạc bám lên dây, còn các nguyên tử đồng thành ion Cu²⁺ đi vào dung dịch. Bạn đã biết ion Cu²⁺ có màu xanh lam, y như trong dung dịch copper(II) sulfate.',
          conceptIds: ['displacement', 'reactivity-series', 'ion'],
        },
        {
          id: 'u7-l4-e10',
          type: 'mcq',
          prompt:
            'Người trồng nho pha dung dịch copper(II) sulfate để trừ nấm cho cây. Vì sao họ pha trong xô nhựa chứ không dùng xô sắt?',
          options: [
            { id: 'a', text: 'Vì xô sắt dẫn nhiệt tốt nên dung dịch trong xô sẽ sôi lên' },
            { id: 'b', text: 'Vì đồng trong dung dịch đẩy sắt ra, làm thành xô dày thêm' },
            { id: 'c', text: 'Vì sắt đẩy đồng ra khỏi dung dịch, xô bị ăn mòn và thuốc hỏng' },
          ],
          correctOptionId: 'c',
          explanation:
            'Xô sắt gặp dung dịch copper(II) sulfate cũng phản ứng như cây đinh: sắt tan dần vào dung dịch, đồng bám lên thành xô. Xô thủng dần, còn dung dịch mất ion Cu²⁺ nên hết tác dụng. Nhựa không phản ứng nên được chọn. Chất này độc, người pha phải đeo găng tay và khẩu trang.',
          conceptIds: ['displacement'],
        },
      ],
      unlocksMolecules: ['cuso4', 'feso4'],
      baseXp: 10,
    },

    // ───────────────────────── Bài 5: Tách kim loại và hợp kim ─────────────────────────
    {
      id: 'u7-l5-ores-and-alloys',
      title: 'Từ quặng tới thép',
      intro: {
        title: 'Sắt trốn trong đá',
        story: [
          'Cây cầu thép, cái xoong, chiếc xe đạp: sắt ở khắp nơi. Nhưng đào đất lên, bạn gần như không bao giờ gặp một cục sắt sáng bóng. Trong tự nhiên, sắt nằm trong quặng: thứ đá nâu đỏ chứa nhiều iron(III) oxide Fe₂O₃, cùng chất với gỉ sắt.',
          'Muốn có sắt, phải gỡ oxygen ra khỏi iron(III) oxide. Trong lò cao nóng tới khoảng 2.000 °C, than cốc cháy thiếu oxygen sinh ra khí carbon monoxide CO. Khí này lấy oxygen của iron(III) oxide và thành carbon dioxide, để lại sắt nóng chảy: Fe₂O₃ + 3CO → 2Fe + 3CO₂.',
          'Sắt chảy ra từ lò còn lẫn vài phần trăm carbon, gọi là gang: cứng nhưng giòn. Bớt carbon đi, ta được thép: cứng mà dẻo dai hơn. Gang và thép đều là hợp kim, tức là vật liệu tạo ra bằng cách nấu chảy một kim loại cùng với một ít kim loại khác hoặc phi kim, rồi để nguội.',
          'Sắt nguyên chất khá mềm nên ít khi được dùng. Pha thêm chất khác, kim loại cứng hơn, bền hơn hoặc khó gỉ hơn. Vì thế hầu hết đồ kim loại quanh bạn là hợp kim.',
        ],
        visual: { type: 'reaction', reactionId: 'iron-extraction' },
      },
      exercises: [
        {
          id: 'u7-l5-e1',
          type: 'mcq',
          prompt: 'Quặng sắt màu nâu đỏ chứa nhiều chất nào?',
          options: [
            { id: 'a', moleculeId: 'fe', text: 'Iron (sắt) ở dạng kim loại' },
            { id: 'b', moleculeId: 'al2o3', text: 'Aluminium oxide' },
            { id: 'c', moleculeId: 'fe2o3', text: 'Iron(III) oxide' },
          ],
          correctOptionId: 'c',
          explanation:
            'Quặng sắt chứa nhiều iron(III) oxide Fe₂O₃, cùng chất với gỉ sắt. Trong tự nhiên, sắt gần như không bao giờ nằm sẵn ở dạng kim loại, vì nó đã kết hợp với oxygen từ lâu.',
          conceptIds: ['metal-extraction', 'oxide'],
        },
        {
          id: 'u7-l5-e2',
          type: 'sort',
          prompt:
            'Trong lò cao, iron(III) oxide gặp carbon monoxide, tạo thành sắt và carbon dioxide. Xếp mỗi chất vào đúng nhóm',
          groups: [
            { id: 'reactant', label: 'Chất phản ứng' },
            { id: 'product', label: 'Sản phẩm' },
          ],
          items: [
            { id: 'i1', moleculeId: 'fe', text: 'Iron (sắt)', groupId: 'product' },
            { id: 'i2', moleculeId: 'co', text: 'Carbon monoxide', groupId: 'reactant' },
            { id: 'i3', moleculeId: 'fe2o3', text: 'Iron(III) oxide', groupId: 'reactant' },
            { id: 'i4', moleculeId: 'co2', text: 'Carbon dioxide', groupId: 'product' },
          ],
          explanation:
            'Iron(III) oxide và carbon monoxide là chất phản ứng. Carbon monoxide lấy oxygen của iron(III) oxide và thành carbon dioxide, để lại sắt. Carbon monoxide là khí độc, nên khí lò cao được thu lại để đốt tiếp chứ không thả thẳng ra ngoài.',
          conceptIds: ['metal-extraction', 'reactants-products'],
        },
        {
          id: 'u7-l5-e3',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Sắt lẫn vài phần trăm carbon, cứng nhưng giòn, gọi là ___. Bớt carbon đi thì được ___, cứng mà dẻo dai hơn.',
          blanks: [
            { accepted: ['gang'], wordBank: ['thép', 'gang', 'quặng'] },
            { accepted: ['thép'], wordBank: ['thép', 'gang', 'quặng'] },
          ],
          explanation:
            'Gang chứa khoảng 2 tới 5 phần trăm carbon: cứng nhưng giòn, đập mạnh là vỡ. Thép chứa dưới 2 phần trăm carbon: vừa cứng vừa dẻo dai, nên được dùng làm cầu, làm khung nhà, làm xe.',
          conceptIds: ['alloy'],
        },
        {
          id: 'u7-l5-e4',
          type: 'balance-reaction',
          reactionId: 'iron-extraction',
          prompt: 'Cân bằng phương trình của phản ứng tách sắt khỏi iron(III) oxide trong lò cao',
          explanation:
            'Fe₂O₃ có 2 Fe nên vế phải cần 2 Fe. Mỗi phân tử CO lấy thêm đúng 1 nguyên tử O để thành CO₂. Fe₂O₃ có 3 O để cho, nên cần 3 CO và sinh ra 3 CO₂. Đếm lại: mỗi vế có 2 Fe, 3 C và 6 O. Kết quả: Fe₂O₃ + 3CO → 2Fe + 3CO₂.',
          conceptIds: ['balancing', 'metal-extraction'],
        },
        {
          id: 'u7-l5-e5',
          type: 'true-false',
          prompt: 'Hợp kim là một hợp chất, có công thức hoá học cố định như nước H₂O.',
          visual: { id: 'v', image: 'steel-bridge' },
          answer: false,
          explanation:
            'Hợp kim là hỗn hợp: các chất được nấu chảy và trộn vào nhau theo tỉ lệ do người làm chọn. Thép có thể chứa nhiều hay ít carbon tuỳ loại. Hợp chất như nước thì khác: lúc nào cũng đúng 2 hydrogen với 1 oxygen.',
          conceptIds: ['alloy', 'mixture', 'compound'],
        },
        {
          id: 'u7-l5-e6',
          type: 'match-pairs',
          prompt:
            'Mỗi hợp kim có thành phần và tính chất riêng. Nối mỗi hợp kim với đồ vật hợp với nó nhất',
          pairs: [
            {
              left: { id: 'l1', text: 'Inox: thép pha chromium và nickel, gần như không gỉ' },
              right: { id: 'r1', text: 'Bồn rửa bát, lúc nào cũng ướt' },
            },
            {
              left: { id: 'l2', text: 'Duralumin: nhôm pha chút đồng, nhẹ mà cứng' },
              right: { id: 'r2', text: 'Vỏ máy bay' },
            },
            {
              left: { id: 'l3', text: 'Gang: sắt lẫn nhiều carbon, cứng nhưng giòn' },
              right: { id: 'r3', text: 'Nắp cống, chảo gang' },
            },
            {
              left: { id: 'l4', text: 'Đồng thau: đồng pha kẽm, vàng óng' },
              right: { id: 'r4', text: 'Chìa khoá, kèn trumpet' },
            },
          ],
          explanation:
            'Chọn hợp kim theo việc cần làm. Chỗ luôn ướt cần inox không gỉ. Máy bay cần duralumin nhẹ mà cứng. Gang dễ đúc và chịu nén tốt nên làm nắp cống, chảo. Đồng thau vàng óng, dễ gia công nên làm chìa khoá và kèn.',
          conceptIds: ['alloy'],
        },
        {
          id: 'u7-l5-e7',
          type: 'mcq',
          prompt:
            'Sắt nguyên chất khá mềm. Pha thêm một ít carbon thì thành thép, cứng hơn hẳn. Ở cấp nguyên tử, vì sao lại thế?',
          visual: { id: 'v', image: 'steel-bridge' },
          options: [
            { id: 'a', text: 'Nguyên tử carbon làm từng nguyên tử sắt to ra và cứng lại' },
            { id: 'b', text: 'Nguyên tử carbon đẩy hết electron tự do ra khỏi khối sắt' },
            {
              id: 'c',
              text: 'Nguyên tử carbon chen vào giữa, làm các lớp nguyên tử sắt khó trượt',
            },
          ],
          correctOptionId: 'c',
          explanation:
            'Ở bài 1, bạn đã biết kim loại dẻo vì các lớp nguyên tử trượt được lên nhau. Trong thép, những nguyên tử carbon nhỏ nằm chen giữa các nguyên tử sắt như những viên sỏi kẹt giữa hai tấm ván, khiến các lớp khó trượt. Vì thế thép cứng hơn sắt nguyên chất.',
          conceptIds: ['alloy', 'metal-properties'],
        },
        {
          id: 'u7-l5-e8',
          type: 'match-pairs',
          prompt:
            'Kim loại hoạt động càng mạnh thì giữ oxygen càng chặt, càng khó tách ra khỏi quặng. Nối mỗi kim loại với cách con người có được nó',
          pairs: [
            {
              left: { id: 'l1', text: 'Vàng (cuối dãy hoạt động)', image: 'gold-ring' },
              right: { id: 'r1', text: 'Có sẵn ở dạng kim loại trong tự nhiên, chỉ việc đãi lấy' },
            },
            {
              left: { id: 'l2', text: 'Sắt (giữa dãy)', image: 'blast-furnace' },
              right: {
                id: 'r2',
                text: 'Dùng carbon monoxide lấy oxygen khỏi oxide ở nhiệt độ cao',
              },
            },
            {
              left: { id: 'l3', text: 'Nhôm (gần đầu dãy)', image: 'soda-can' },
              right: { id: 'r3', text: 'Phải dùng dòng điện để tách khỏi oxide nóng chảy' },
            },
          ],
          explanation:
            'Vàng gần như trơ nên nằm sẵn trong đất cát ở dạng kim loại. Sắt hoạt động vừa phải nên carbon monoxide gỡ được oxygen ra khỏi nó. Nhôm giữ oxygen chặt tới mức carbon monoxide chịu thua, phải dùng dòng điện rất mạnh mới tách được. Vì thế hồi thế kỉ 19, nhôm từng quý hơn cả vàng.',
          conceptIds: ['metal-extraction', 'reactivity-series'],
        },
        {
          id: 'u7-l5-e9',
          type: 'sort',
          prompt:
            'Sắt thép gỉ khi gặp cả oxygen lẫn nước. Việc nào giúp chống gỉ, việc nào làm sắt thép mau gỉ?',
          groups: [
            { id: 'protect', label: 'Chống gỉ' },
            { id: 'rust', label: 'Mau gỉ' },
          ],
          items: [
            { id: 'i1', text: 'Sơn kín bề mặt', groupId: 'protect' },
            { id: 'i2', text: 'Để ngoài mưa', image: 'rusty-nail', groupId: 'rust' },
            { id: 'i3', text: 'Mạ một lớp kẽm', image: 'zinc-roof', groupId: 'protect' },
            { id: 'i4', text: 'Bôi dầu mỡ lên xích xe', groupId: 'protect' },
            { id: 'i5', text: 'Cất dao khi còn ướt', groupId: 'rust' },
            { id: 'i6', text: 'Lau khô sau khi rửa', groupId: 'protect' },
          ],
          explanation:
            'Sơn, dầu mỡ và lớp mạ kẽm đều là tấm áo che, không cho oxygen và nước chạm vào sắt thép. Lau khô thì lấy đi nước. Còn để ngoài mưa hay cất lúc còn ướt là mời cả nước lẫn oxygen tới cùng lúc.',
          conceptIds: ['oxidation', 'alloy'],
        },
        {
          id: 'u7-l5-e10',
          type: 'true-false',
          prompt:
            'Những nguyên tử sắt chảy ra từ lò cao chính là những nguyên tử sắt đã nằm sẵn trong quặng.',
          visual: { id: 'v', image: 'blast-furnace' },
          answer: true,
          explanation:
            'Phản ứng hoá học không tạo ra nguyên tử mới. Các nguyên tử sắt đã nằm sẵn trong quặng, gắn với oxygen thành iron(III) oxide. Lò cao chỉ gỡ oxygen đi: Fe₂O₃ + 3CO → 2Fe + 3CO₂. Hai vế đều có đúng 2 nguyên tử Fe.',
          conceptIds: ['metal-extraction', 'conservation-of-mass'],
        },
      ],
      unlocksMolecules: [],
      baseXp: 10,
    },

    // ───────────────────────── Bài 6: Polymer ─────────────────────────
    {
      id: 'u7-l6-polymers',
      title: 'Nhựa: phân tử dài như sợi xích',
      intro: {
        title: 'Nải chuối và chiếc túi nilon',
        story: [
          'Nải chuối xanh mua về, để vài hôm là chín vàng. Chuối chín toả ra một chất khí thúc cả nải cùng chín: ethylene C₂H₄. Mỗi phân tử ethylene nhỏ xíu, gồm 2 nguyên tử carbon nối với nhau bằng liên kết đôi và 4 nguyên tử hydrogen.',
          'Chiếc túi nilon đựng nải chuối cũng làm từ ethylene. Trong nhà máy, người ta làm liên kết đôi mở ra thành liên kết đơn. Mỗi nguyên tử carbon dư ra một tay để nắm lấy phân tử bên cạnh. Hàng nghìn, hàng vạn phân tử ethylene cứ thế nối đuôi nhau thành một sợi xích dài.',
          'Phân tử khổng lồ gồm rất nhiều mắt xích giống nhau nối lại như vậy gọi là polymer. Phân tử nhỏ ban đầu gọi là monomer. Polymer làm từ ethylene có tên polyethylene, viết tắt là PE: một chất rắn dẻo, không tan trong nước.',
          'Nhựa quanh bạn đều là polymer. Chúng nhẹ, bền, không gỉ, không thấm nước, lại rẻ. Nhưng chính vì quá bền mà túi nilon vứt đi có thể nằm lại trong đất, trong biển hàng trăm năm.',
        ],
        visual: { type: 'molecule', moleculeId: 'c2h4' },
      },
      exercises: [
        {
          id: 'u7-l6-e1',
          type: 'mcq',
          prompt: 'Chất khí do chuối chín toả ra, cũng là nguyên liệu làm túi nilon, có tên là gì?',
          visual: { id: 'v', image: 'banana-bag' },
          options: [
            { id: 'a', moleculeId: 'ch4', text: 'Methane' },
            { id: 'b', moleculeId: 'c2h4', text: 'Ethylene' },
            { id: 'c', moleculeId: 'co2', text: 'Carbon dioxide' },
          ],
          correctOptionId: 'b',
          explanation:
            'Đó là ethylene C₂H₄. Chuối chín toả ra khí này, và nhà máy cũng dùng chính loại phân tử này để làm nhựa polyethylene. Ethylene cho nhà máy được lấy từ dầu mỏ và khí thiên nhiên chứ không phải từ chuối.',
          conceptIds: ['polymer', 'molecule'],
        },
        {
          id: 'u7-l6-e2',
          type: 'build-molecule',
          prompt: 'Ghép phân tử ethylene C₂H₄, viên gạch để xây nên nhựa polyethylene',
          targetMoleculeId: 'c2h4',
          availableAtoms: { C: 3, H: 6, O: 1 },
          explanation:
            'Ethylene gồm 2 nguyên tử carbon và 4 nguyên tử hydrogen. Hai nguyên tử carbon nối với nhau bằng liên kết đôi, mỗi carbon giữ thêm 2 hydrogen.',
          conceptIds: ['formula', 'multiple-bond'],
        },
        {
          id: 'u7-l6-e3',
          type: 'fill-blank',
          prompt: 'Chọn từ đúng cho từng chỗ trống',
          template:
            'Phân tử khổng lồ gồm rất nhiều mắt xích nối nhau gọi là ___. Phân tử nhỏ ban đầu, như ethylene, gọi là ___.',
          blanks: [
            { accepted: ['polymer'], wordBank: ['monomer', 'polymer', 'hợp kim'] },
            { accepted: ['monomer'], wordBank: ['monomer', 'polymer', 'hợp kim'] },
          ],
          explanation:
            'Polymer là phân tử khổng lồ gồm rất nhiều mắt xích. Monomer là phân tử nhỏ dùng để nối thành polymer. "Poly" nghĩa là nhiều, "mono" nghĩa là một: polyethylene là "nhiều ethylene".',
          conceptIds: ['polymer'],
        },
        {
          id: 'u7-l6-e4',
          type: 'order-steps',
          prompt: 'Từ khí ethylene tới chiếc túi nilon. Sắp xếp theo thứ tự',
          steps: [
            {
              id: 's1',
              text: 'Các phân tử ethylene bay riêng lẻ, mỗi phân tử có một liên kết đôi',
            },
            { id: 's2', text: 'Liên kết đôi mở ra thành liên kết đơn, mỗi carbon dư một tay' },
            { id: 's3', text: 'Các phân tử nắm tay nhau, nối dài thành mạch polyethylene' },
            { id: 's4', text: 'Nhựa polyethylene được thổi thành màng mỏng làm túi' },
          ],
          explanation:
            'Liên kết đôi là chìa khoá: khi nó mở ra thành liên kết đơn, mỗi nguyên tử carbon có thêm một tay để nối với phân tử bên cạnh. Cứ thế, khí ethylene thành những mạch dài của nhựa polyethylene, một chất rắn dẻo.',
          conceptIds: ['polymer', 'multiple-bond'],
        },
        {
          id: 'u7-l6-e5',
          type: 'true-false',
          prompt:
            'Khi các phân tử ethylene nối thành polyethylene, không nguyên tử carbon hay hydrogen nào bị mất đi.',
          answer: true,
          explanation:
            'Các phân tử ethylene chỉ mở liên kết đôi rồi nối với nhau, không nguyên tử nào rời đi. Mỗi mắt xích trong mạch vẫn có đúng 2 carbon và 4 hydrogen như phân tử ethylene ban đầu.',
          conceptIds: ['polymer', 'conservation-of-mass'],
        },
        {
          id: 'u7-l6-e6',
          type: 'mcq',
          prompt:
            '1.000 phân tử ethylene C₂H₄ nối thành một mạch polyethylene. Mạch đó có bao nhiêu nguyên tử carbon?',
          visual: { id: 'v', moleculeId: 'c2h4' },
          options: [
            { id: 'a', text: '1.000' },
            { id: 'b', text: '2.000' },
            { id: 'c', text: '4.000' },
          ],
          correctOptionId: 'b',
          explanation:
            'Mỗi phân tử ethylene góp 2 nguyên tử carbon: 1.000 × 2 = 2.000. Mạch đó còn có 4.000 nguyên tử hydrogen. Mạch polyethylene thật còn dài hơn thế nhiều lần.',
          conceptIds: ['polymer', 'formula'],
        },
        {
          id: 'u7-l6-e7',
          type: 'sort',
          prompt:
            'Polymer không chỉ do nhà máy làm ra. Cây cối và động vật cũng tự tạo polymer, gọi là polymer thiên nhiên. Xếp mỗi thứ vào đúng nhóm',
          groups: [
            { id: 'natural', label: 'Polymer thiên nhiên' },
            { id: 'synthetic', label: 'Polymer tổng hợp' },
          ],
          items: [
            { id: 'i1', text: 'Tinh bột trong hạt gạo', image: 'rice-field', groupId: 'natural' },
            { id: 'i2', text: 'Túi nilon', image: 'banana-bag', groupId: 'synthetic' },
            { id: 'i3', text: 'Sợi bông', groupId: 'natural' },
            { id: 'i4', text: 'Chai nhựa', image: 'plastic-recycling', groupId: 'synthetic' },
            { id: 'i5', text: 'Tơ tằm', groupId: 'natural' },
            { id: 'i6', text: 'Ống nước nhựa', groupId: 'synthetic' },
          ],
          explanation:
            'Cây lúa tự nối các phân tử đường thành tinh bột, cây bông tạo ra sợi bông, con tằm nhả tơ. Đó là polymer thiên nhiên. Túi nilon, chai nhựa, ống nhựa do con người nối các monomer lại trong nhà máy, gọi là polymer tổng hợp.',
          conceptIds: ['polymer'],
        },
        {
          id: 'u7-l6-e8',
          type: 'match-pairs',
          prompt: 'Nối mỗi tính chất của nhựa với đồ vật cần tới tính chất đó',
          pairs: [
            {
              left: { id: 'l1', text: 'Không dẫn điện' },
              right: { id: 'r1', text: 'Vỏ bọc dây điện', image: 'copper-wire' },
            },
            {
              left: { id: 'l2', text: 'Kéo được thành màng mỏng, không thấm nước' },
              right: { id: 'r2', text: 'Túi nilon, áo mưa' },
            },
            {
              left: { id: 'l3', text: 'Cứng cáp mà nhẹ, rơi không vỡ' },
              right: { id: 'r3', text: 'Chai sữa tắm, can đựng nước' },
            },
          ],
          explanation:
            'Nhựa không có electron tự do như kim loại nên không dẫn điện, bọc ngoài dây điện để bạn không bị giật. Nhựa dẻo, kéo được thành màng mỏng không thấm nước. Nhựa lại nhẹ và rơi không vỡ như thuỷ tinh.',
          conceptIds: ['polymer'],
        },
        {
          id: 'u7-l6-e9',
          type: 'sort',
          prompt:
            'Túi nilon và chai nhựa rất khó phân huỷ. Việc nào nên làm, việc nào không nên làm?',
          groups: [
            { id: 'good', label: 'Nên làm' },
            { id: 'bad', label: 'Không nên làm' },
          ],
          items: [
            { id: 'i1', text: 'Mang túi vải hoặc làn đi chợ', groupId: 'good' },
            { id: 'i2', text: 'Đốt túi nilon ở góc vườn', groupId: 'bad' },
            {
              id: 'i3',
              text: 'Phân loại chai nhựa để tái chế',
              image: 'plastic-recycling',
              groupId: 'good',
            },
            { id: 'i4', text: 'Vứt túi nilon xuống sông', groupId: 'bad' },
            { id: 'i5', text: 'Dùng lại túi nilon còn sạch', groupId: 'good' },
            { id: 'i6', text: 'Lấy thật nhiều túi nilon dù không cần', groupId: 'bad' },
          ],
          explanation:
            'Polyethylene không bị vi sinh vật phân huỷ, nên rác nhựa có thể nằm lại hàng trăm năm. Cách tốt nhất là dùng ít đi, dùng lại nhiều lần và phân loại để tái chế. Đốt nhựa sinh ra khói độc, còn vứt xuống sông thì nhựa trôi ra biển, làm hại cá và rùa.',
          conceptIds: ['polymer'],
        },
        {
          id: 'u7-l6-e10',
          type: 'mcq',
          prompt:
            'Ở nhà máy tái chế, chai nhựa cũ được băm nhỏ, nấu chảy rồi đúc thành đồ mới. Khi nhựa nóng chảy, điều gì xảy ra với các mạch polymer?',
          visual: { id: 'v', image: 'plastic-recycling' },
          options: [
            { id: 'a', text: 'Các mạch cháy hết thành carbon dioxide và nước' },
            { id: 'b', text: 'Các mạch tách trở lại thành khí ethylene' },
            { id: 'c', text: 'Các mạch vẫn nguyên vẹn, chỉ trượt qua nhau' },
          ],
          correctOptionId: 'c',
          explanation:
            'Nóng chảy là biến đổi vật lí, giống như sáp nến chảy: các mạch polymer vẫn nguyên, chỉ trượt qua nhau nên nhựa mềm ra. Nguội đi, nhựa cứng lại thành hình mới. Vì thế chai nhựa cũ có thể thành ghế, thành chậu cây, miễn là nó được bỏ vào đúng thùng tái chế.',
          conceptIds: ['polymer', 'physical-change'],
        },
      ],
      unlocksMolecules: ['c2h4'],
      baseXp: 10,
    },

    // ───────────────────────── Checkpoint Unit 7 ─────────────────────────
    {
      id: 'u7-checkpoint',
      title: 'Kiểm tra Unit 7',
      kind: 'checkpoint',
      exercises: [
        {
          id: 'u7-cp-e1',
          type: 'mcq',
          prompt:
            'Người thợ kéo một thỏi đồng qua những lỗ khuôn nhỏ dần, cho tới khi nó thành sợi dây mảnh như sợi tóc mà không đứt. Việc này dựa vào tính chất nào của kim loại?',
          visual: { id: 'v', image: 'copper-wire' },
          options: [
            { id: 'a', text: 'Dẫn nhiệt' },
            { id: 'b', text: 'Tính dẻo' },
            { id: 'c', text: 'Ánh kim' },
          ],
          correctOptionId: 'b',
          explanation:
            'Tính dẻo cho phép kim loại bị kéo dài, dát mỏng mà không gãy vỡ, vì các lớp nguyên tử trượt được lên nhau. Sợi dây đồng làm ra sau đó được dùng nhờ một tính chất khác: dẫn điện.',
          conceptIds: ['metal-properties'],
        },
        {
          id: 'u7-cp-e2',
          type: 'true-false',
          prompt: 'Nồi nhôm, dây đồng và nhẫn vàng đều bị nam châm hút, vì chúng đều là kim loại.',
          answer: false,
          explanation:
            'Bị nam châm hút không phải tính chất chung của kim loại. Sắt bị hút, còn nhôm, đồng và vàng thì không. Tính chất chung của kim loại là ánh kim, dẫn điện, dẫn nhiệt và tính dẻo.',
          conceptIds: ['metal-properties', 'metal'],
        },
        {
          id: 'u7-cp-e3',
          type: 'balance-reaction',
          reactionId: 'aluminium-oxidation',
          prompt:
            'Cân bằng phương trình của phản ứng nhôm tự phủ lớp aluminium oxide trong không khí',
          explanation:
            'Cần 6 nguyên tử O ở mỗi vế: 3 O₂ và 2 Al₂O₃. Hai Al₂O₃ có 4 Al. Kết quả: 4Al + 3O₂ → 2Al₂O₃.',
          conceptIds: ['balancing', 'oxide'],
        },
        {
          id: 'u7-cp-e4',
          type: 'match-pairs',
          prompt: 'Nối mỗi cặp chất phản ứng với sản phẩm của chúng',
          pairs: [
            {
              left: { id: 'l1', text: 'Aluminium (nhôm) + oxygen' },
              right: { id: 'r1', text: 'Aluminium oxide' },
            },
            {
              left: { id: 'l2', text: 'Zinc (kẽm) + hydrochloric acid' },
              right: { id: 'r2', text: 'Zinc chloride + hydrogen' },
            },
            {
              left: { id: 'l3', text: 'Iron (sắt) + copper(II) sulfate' },
              right: { id: 'r3', text: 'Iron(II) sulfate + copper (đồng)' },
            },
            {
              left: { id: 'l4', text: 'Iron(III) oxide + carbon monoxide' },
              right: { id: 'r4', text: 'Iron (sắt) + carbon dioxide' },
            },
          ],
          explanation:
            'Sản phẩm luôn chứa đúng những nguyên tố có trong chất phản ứng. Kim loại với oxygen tạo oxide. Kim loại đứng trước H với acid tạo muối và khí hydrogen. Kim loại mạnh đẩy kim loại yếu ra khỏi dung dịch muối. Carbon monoxide lấy oxygen của iron(III) oxide.',
          conceptIds: ['reactants-products', 'displacement', 'metal-extraction'],
        },
        {
          id: 'u7-cp-e5',
          type: 'order-steps',
          prompt: 'Sắp xếp các kim loại từ hoạt động mạnh nhất tới yếu nhất',
          steps: [
            { id: 's1', text: 'Sodium (natri), Na' },
            { id: 's2', text: 'Aluminium (nhôm), Al' },
            { id: 's3', text: 'Iron (sắt), Fe' },
            { id: 's4', text: 'Copper (đồng), Cu' },
            { id: 's5', text: 'Silver (bạc), Ag' },
          ],
          explanation: `Dãy hoạt động hoá học: ${SERIES}. Natri gần đầu dãy, rồi tới nhôm, sắt. Đồng và bạc đứng sau H.`,
          conceptIds: ['reactivity-series'],
        },
        {
          id: 'u7-cp-e6',
          type: 'mcq',
          prompt:
            'Các nhà khảo cổ đào được một chiếc nhẫn vàng vẫn sáng bóng sau 2.000 năm nằm trong đất, còn lưỡi kiếm sắt chôn cùng thì gỉ gần hết. Dãy hoạt động hoá học giải thích điều này thế nào?',
          visual: { id: 'v', image: 'gold-ring' },
          options: [
            { id: 'a', text: 'Vàng đứng đầu dãy nên đã phản ứng xong từ rất sớm' },
            { id: 'b', text: 'Vàng đứng cuối dãy nên gần như không phản ứng, sắt thì có' },
            { id: 'c', text: 'Sắt đứng sau vàng trong dãy nên yếu và mau hỏng hơn' },
          ],
          correctOptionId: 'b',
          explanation:
            'Vàng đứng cuối dãy hoạt động hoá học nên gần như không phản ứng với oxygen và nước, nghìn năm vẫn sáng. Sắt đứng trước H, hoạt động mạnh hơn nhiều, nên phản ứng dần với oxygen và nước trong đất thành gỉ.',
          conceptIds: ['reactivity-series', 'oxidation'],
        },
        {
          id: 'u7-cp-e7',
          type: 'fill-blank',
          prompt: 'Chọn đáp án đúng cho từng chỗ trống',
          template:
            'Sắt đứng ___ đồng trong dãy hoạt động hoá học, nên sắt đẩy được đồng ra khỏi dung dịch copper(II) sulfate: Fe + CuSO₄ → ___ + Cu.',
          blanks: [
            { accepted: ['trước'], wordBank: ['trước', 'sau'] },
            { accepted: ['FeSO₄', 'FeSO4'], wordBank: ['Fe₂O₃', 'FeSO₄', 'CuO'] },
          ],
          explanation:
            'Kim loại đứng trước đẩy được kim loại đứng sau ra khỏi dung dịch muối. Sắt chiếm chỗ của đồng, tạo thành iron(II) sulfate FeSO₄, còn đồng bám lên đinh thành lớp đỏ nâu.',
          conceptIds: ['displacement', 'reactivity-series'],
        },
        {
          id: 'u7-cp-e8',
          type: 'true-false',
          prompt:
            'Thả một chiếc nhẫn bạc vào dung dịch copper(II) sulfate thì không có phản ứng, vì bạc đứng sau đồng trong dãy hoạt động hoá học.',
          answer: true,
          explanation:
            'Bạc hoạt động yếu hơn đồng. Kim loại yếu không đẩy được kim loại mạnh ra khỏi dung dịch muối, nên chiếc nhẫn vẫn y nguyên và dung dịch vẫn xanh lam.',
          conceptIds: ['displacement', 'reactivity-series'],
        },
        {
          id: 'u7-cp-e9',
          type: 'balance-reaction',
          reactionId: 'iron-extraction',
          prompt: 'Cân bằng phương trình của phản ứng tách sắt khỏi iron(III) oxide trong lò cao',
          explanation:
            'Mỗi CO lấy 1 nguyên tử O để thành CO₂. Fe₂O₃ có 3 O nên cần 3 CO, sinh ra 3 CO₂ và để lại 2 Fe. Kết quả: Fe₂O₃ + 3CO → 2Fe + 3CO₂.',
          conceptIds: ['balancing', 'metal-extraction'],
        },
        {
          id: 'u7-cp-e10',
          type: 'sort',
          prompt: 'Kim loại gần như nguyên chất hay hợp kim?',
          groups: [
            { id: 'pure', label: 'Kim loại gần như nguyên chất' },
            { id: 'alloy', label: 'Hợp kim' },
          ],
          items: [
            { id: 'i1', text: 'Thép làm cầu', image: 'steel-bridge', groupId: 'alloy' },
            { id: 'i2', text: 'Lõi dây điện bằng đồng', image: 'copper-wire', groupId: 'pure' },
            { id: 'i3', text: 'Bồn rửa inox', groupId: 'alloy' },
            { id: 'i4', text: 'Nhẫn vàng ta', image: 'gold-ring', groupId: 'pure' },
            { id: 'i5', text: 'Chìa khoá đồng thau', groupId: 'alloy' },
            { id: 'i6', text: 'Chảo gang', groupId: 'alloy' },
          ],
          explanation:
            'Thép và gang là sắt pha carbon. Inox là thép pha thêm chromium và nickel. Đồng thau là đồng pha kẽm. Lõi dây điện thì cần đồng gần như nguyên chất để dẫn điện tốt nhất, còn vàng ta gần như chỉ gồm toàn nguyên tử gold.',
          conceptIds: ['alloy'],
        },
        {
          id: 'u7-cp-e11',
          type: 'mcq',
          prompt:
            'Polyethylene là polymer, còn ethylene là monomer của nó. Câu nào mô tả đúng quan hệ giữa hai chất?',
          visual: { id: 'v', moleculeId: 'c2h4' },
          options: [
            { id: 'a', text: 'Một phân tử ethylene vỡ ra thành nhiều phân tử polyethylene nhỏ' },
            { id: 'b', text: 'Ethylene và polyethylene là hai tên gọi của cùng một phân tử' },
            {
              id: 'c',
              text: 'Rất nhiều phân tử ethylene nối với nhau thành một mạch polyethylene',
            },
          ],
          correctOptionId: 'c',
          explanation:
            'Monomer là phân tử nhỏ, polymer là phân tử khổng lồ do rất nhiều monomer nối lại. Hàng nghìn phân tử ethylene mở liên kết đôi và nối đuôi nhau thành một mạch polyethylene.',
          conceptIds: ['polymer'],
        },
        {
          id: 'u7-cp-e12',
          type: 'mcq',
          prompt:
            'Sau buổi liên hoan lớp, còn lại vỏ chai nhựa, vỏ lon nhôm và túi nilon. Cách xử lí nào tốt nhất cho môi trường?',
          visual: { id: 'v', image: 'plastic-recycling' },
          options: [
            {
              id: 'a',
              text: 'Phân loại chai nhựa và lon nhôm để tái chế, túi sạch giữ lại dùng tiếp',
            },
            { id: 'b', text: 'Gom tất cả lại rồi đốt ở góc sân trường cho nhanh gọn' },
            { id: 'c', text: 'Chôn tất cả xuống đất vì chúng sẽ tự phân huỷ sau vài tuần' },
          ],
          correctOptionId: 'a',
          explanation:
            'Nhựa và nhôm đều tái chế được: nấu chảy rồi đúc thành đồ mới. Đốt nhựa sinh ra khói độc. Chôn cũng không ổn, vì polyethylene không bị vi sinh vật phân huỷ và có thể nằm lại trong đất hàng trăm năm.',
          conceptIds: ['polymer'],
        },
      ],
      baseXp: 20,
    },
  ],
}
