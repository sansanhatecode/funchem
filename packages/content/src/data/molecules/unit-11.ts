import type { MoleculeInput } from '../../schema/molecule.js'

/** Phân tử xuất hiện lần đầu ở Unit 11. */
export const unit11Molecules: MoleculeInput[] = [
  {
    id: 'nacl-aq',
    name: 'Dung dịch sodium chloride',
    commonName: 'nước muối',
    formula: 'NaCl',
    state: 'liquid',
    atoms: [
      { id: 'na', element: 'Na', x: 36, y: 50 },
      { id: 'cl', element: 'Cl', x: 66, y: 50 },
    ],
    bonds: [{ a: 'na', b: 'cl', kind: 'ionic' }],
    lifeExamples: [
      {
        illustration: 'sea-wave',
        title: 'Nước biển',
        description:
          'Cứ 1 kg nước biển có khoảng 35 g muối hoà tan, phần lớn là sodium chloride. Nước biển trong veo vì muối đã tách thành các ion nhỏ tới mức mắt không thấy.',
      },
      {
        illustration: 'saline-bottle',
        title: 'Nước muối sinh lí',
        description:
          'Chai nước muối sinh lí ghi 0,9%: cứ 100 g dung dịch thì có khoảng 0,9 g sodium chloride, còn lại là nước.',
      },
      {
        title: 'Nồi canh vừa nêm',
        description:
          'Nêm muối vào nồi canh rồi khuấy, muối tan đều khắp nồi. Thìa canh nào cũng mặn như thìa nào.',
      },
    ],
    funFact:
      'Nước cất gần như không dẫn điện, nhưng nước muối thì dẫn điện tốt. Đó là nhờ các ion Na⁺ và Cl⁻ mang điện, di chuyển tự do giữa các phân tử nước.',
    conceptIds: ['solution', 'ion', 'mixture'],
    // trong nước, sodium chloride tách hết thành ion Na⁺ và ion Cl⁻
    ions: [
      { atomIds: ['na'], charge: 1 },
      { atomIds: ['cl'], charge: -1 },
    ],
  },
]
