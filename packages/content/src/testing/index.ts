import { concepts } from '../data/concepts.js'
import { molecules } from '../data/molecules/index.js'
import { reactions } from '../data/reactions/index.js'
import { buildRegistry, type ContentRegistry } from '../registry.js'
import type { UnitInput } from '../schema/lesson.js'

/**
 * Nội dung cố định cho test. KHÔNG dùng trong sản phẩm.
 * Test của core và api dựa vào các id và đáp án ở đây, nên nội dung thật
 * trong data/units có thể thay đổi tự do mà không làm vỡ test.
 * Phân tử, phản ứng và concept dùng chung với nội dung thật; đừng đổi id của chúng.
 */
const fixtureUnit1: UnitInput = {
  id: 'u1-building-blocks',
  order: 1,
  title: 'Mọi thứ được làm từ gì?',
  tagline: 'Nguyên tử, nguyên tố và bảng tuần hoàn',
  color: '#58CC02',
  lessons: [
    {
      id: 'u1-l1-atoms',
      title: 'Viên gạch nhỏ nhất',
      intro: {
        title: 'Cắt mãi thì còn gì?',
        story: [
          'Lấy một hạt muối, cắt đôi. Rồi cắt đôi nữa. Cứ thế mãi.',
          'Đến một lúc bạn gặp những "viên gạch" không thể cắt nhỏ hơn mà vẫn là muối. Đó là các nguyên tử.',
          'Mọi thứ quanh bạn, kể cả chính bạn, đều xếp từ những viên gạch này.',
        ],
        visual: { type: 'molecule', moleculeId: 'nacl' },
      },
      exercises: [
        {
          id: 'u1-l1-e1',
          type: 'mcq',
          prompt: 'Viên gạch nhỏ nhất tạo nên mọi vật được gọi là gì?',
          options: [
            { id: 'a', text: 'Nguyên tử' },
            { id: 'b', text: 'Tế bào' },
            { id: 'c', text: 'Hạt cát' },
          ],
          correctOptionId: 'a',
          explanation:
            'Tế bào là đơn vị của sinh vật, còn nguyên tử là đơn vị của mọi vật chất, kể cả tế bào.',
          conceptIds: ['atom'],
        },
        {
          id: 'u1-l1-e2',
          type: 'true-false',
          prompt: 'Cơ thể bạn cũng được tạo nên từ nguyên tử.',
          answer: true,
          explanation: 'Đúng. Chủ yếu là oxygen, carbon, hydrogen và nitrogen.',
          conceptIds: ['atom'],
        },
        {
          id: 'u1-l1-e3',
          type: 'mcq',
          prompt: 'Nguyên tử này là của nguyên tố nào?',
          visual: { id: 'v', moleculeId: 'fe' },
          options: [
            { id: 'a', text: 'Oxygen' },
            { id: 'b', text: 'Iron (sắt)' },
            { id: 'c', text: 'Hydrogen' },
          ],
          correctOptionId: 'b',
          explanation: 'Ký hiệu Fe là sắt, từ tên Latinh "ferrum".',
          conceptIds: ['element'],
        },
        {
          id: 'u1-l1-e4',
          type: 'match-pairs',
          prompt: 'Nối ký hiệu với tên nguyên tố',
          pairs: [
            { left: { id: 'l1', text: 'O' }, right: { id: 'r1', text: 'Oxygen' } },
            { left: { id: 'l2', text: 'H' }, right: { id: 'r2', text: 'Hydrogen' } },
            { left: { id: 'l3', text: 'Fe' }, right: { id: 'r3', text: 'Iron (sắt)' } },
            { left: { id: 'l4', text: 'Na' }, right: { id: 'r4', text: 'Sodium (natri)' } },
          ],
          explanation:
            'Một số ký hiệu lấy từ tên Latinh nên không giống tên tiếng Việt, như Fe (iron) và Na (sodium).',
          conceptIds: ['element'],
        },
      ],
      unlocksMolecules: ['fe'],
      baseXp: 10,
    },
    {
      id: 'u1-l2-elements',
      title: 'Cùng loại thì cùng tên',
      intro: {
        title: 'Hơn 100 loại gạch',
        story: [
          'Không phải nguyên tử nào cũng giống nhau. Có khoảng 118 loại, mỗi loại là một nguyên tố.',
          'Oxygen bạn thở, sắt trong cây đinh, vàng trong chiếc nhẫn đều là những nguyên tố khác nhau.',
          'Khí oxygen trong không khí thực ra là từng cặp nguyên tử O nắm tay nhau.',
        ],
        visual: { type: 'molecule', moleculeId: 'o2' },
      },
      exercises: [
        {
          id: 'u1-l2-e1',
          type: 'build-molecule',
          prompt: 'Ghép hai nguyên tử oxygen thành một phân tử khí oxygen',
          targetMoleculeId: 'o2',
          availableAtoms: { O: 3, H: 2 },
          explanation: 'Khí oxygen trong không khí luôn đi thành cặp: O₂.',
          conceptIds: ['molecule', 'element'],
        },
        {
          id: 'u1-l2-e2',
          type: 'sort',
          prompt: 'Thứ nào là nguyên tố, thứ nào không phải?',
          groups: [
            { id: 'element', label: 'Nguyên tố' },
            { id: 'not', label: 'Không phải' },
          ],
          items: [
            { id: 'i1', text: 'Gold (vàng)', groupId: 'element' },
            { id: 'i2', text: 'Nước', groupId: 'not' },
            { id: 'i3', text: 'Iron (sắt)', groupId: 'element' },
            { id: 'i4', text: 'Muối ăn', groupId: 'not' },
          ],
          explanation:
            'Nước và muối ăn do hai nguyên tố trở lên ghép lại, nên là hợp chất, không phải nguyên tố.',
          conceptIds: ['element', 'compound'],
        },
        {
          id: 'u1-l2-e3',
          type: 'fill-blank',
          prompt: 'Điền vào chỗ trống',
          template: 'Khí oxygen trong không khí gồm ___ nguyên tử O ghép lại.',
          blanks: [{ accepted: ['2', 'hai'], wordBank: ['1', '2', '3'] }],
          explanation: 'Công thức O₂: chỉ số 2 nghĩa là hai nguyên tử.',
          conceptIds: ['formula'],
        },
      ],
      unlocksMolecules: ['o2'],
      baseXp: 10,
    },
    {
      id: 'u1-checkpoint',
      title: 'Kiểm tra Unit 1',
      kind: 'checkpoint',
      exercises: [
        {
          id: 'u1-cp-e1',
          type: 'mcq',
          prompt: 'Ký hiệu nào là của sodium?',
          options: [
            { id: 'a', text: 'N' },
            { id: 'b', text: 'Na' },
            { id: 'c', text: 'Ni' },
          ],
          correctOptionId: 'b',
          explanation: 'N là nitrogen, Ni là nickel. Sodium là Na.',
          conceptIds: ['element'],
        },
        {
          id: 'u1-cp-e2',
          type: 'order-steps',
          prompt: 'Sắp xếp từ nhỏ đến lớn',
          steps: [
            { id: 's1', text: 'Nguyên tử' },
            { id: 's2', text: 'Phân tử' },
            { id: 's3', text: 'Hạt muối' },
            { id: 's4', text: 'Lọ muối' },
          ],
          explanation:
            'Nguyên tử ghép thành phân tử, rất nhiều phân tử tạo thành hạt muối bạn nhìn thấy.',
          conceptIds: ['atom', 'molecule'],
        },
      ],
      baseXp: 20,
    },
  ],
}

/** Unit thứ hai của fixture: có bài cân bằng phản ứng để phủ đủ 8 dạng bài. */
const fixtureUnit2: UnitInput = {
  id: 'u2-fixture',
  order: 2,
  title: 'Fixture Unit 2',
  tagline: 'Chỉ dùng cho test',
  color: '#1CB0F6',
  lessons: [
    {
      id: 'u2-l1-reactions',
      title: 'Phản ứng',
      intro: {
        title: 'Ngọn lửa xanh',
        story: ['Methane cháy với oxygen tạo ra khí carbon dioxide và nước.'],
        visual: { type: 'reaction', reactionId: 'methane-combustion' },
      },
      exercises: [
        {
          id: 'u2-l1-e1',
          type: 'balance-reaction',
          prompt: 'Cân bằng phản ứng cháy của methane',
          reactionId: 'methane-combustion',
          explanation: 'Mỗi vế có 1 C, 4 H và 4 O.',
          conceptIds: ['conservation-of-mass'],
        },
        {
          id: 'u2-l1-e2',
          type: 'build-molecule',
          prompt: 'Ghép một phân tử nước',
          targetMoleculeId: 'h2o',
          availableAtoms: { H: 3, O: 2, C: 1 },
          explanation: 'Nước gồm 2 nguyên tử H và 1 nguyên tử O.',
          conceptIds: ['molecule'],
        },
      ],
      unlocksMolecules: ['h2o', 'co2'],
    },
    {
      id: 'u2-checkpoint',
      title: 'Kiểm tra Fixture 2',
      kind: 'checkpoint',
      exercises: [
        {
          id: 'u2-cp-e1',
          type: 'true-false',
          prompt: 'Trong phản ứng hoá học, số nguyên tử mỗi loại không đổi.',
          answer: true,
          explanation: 'Đó là định luật bảo toàn khối lượng.',
          conceptIds: ['conservation-of-mass'],
        },
      ],
    },
  ],
}

export const fixtureContent: ContentRegistry = buildRegistry({
  units: [fixtureUnit1, fixtureUnit2],
  molecules,
  reactions,
  concepts,
})
