import type { ReactionInput } from '../../schema/reaction.js'

/** Phản ứng xuất hiện lần đầu ở Unit 8. */
export const unit08Reactions: ReactionInput[] = [
  {
    id: 'cellular-respiration',
    name: 'Hô hấp tế bào',
    reactants: [
      { moleculeId: 'c6h12o6', coefficient: 1 },
      { moleculeId: 'o2', coefficient: 6 },
    ],
    products: [
      { moleculeId: 'co2', coefficient: 6 },
      { moleculeId: 'h2o', coefficient: 6 },
    ],
    signs: ['Cơ thể ấm lên', 'Hơi thở ra có carbon dioxide và hơi nước', 'Không có ngọn lửa'],
    condition: 'enzyme trong tế bào',
    story: {
      illustration: 'jogging-breath',
      title: 'Hơi thở trong buổi sáng lạnh',
      description:
        'Khi bạn chạy, các tế bào cơ cần nhiều năng lượng hơn. Chúng cho glucose phản ứng với oxygen nhiều hơn, tạo ra carbon dioxide và nước. Bạn thở gấp để lấy thêm oxygen và thải carbon dioxide ra ngoài.',
    },
    conceptIds: ['reaction', 'conservation-of-mass', 'respiration'],
  },
  {
    id: 'photosynthesis',
    name: 'Quang hợp',
    reactants: [
      { moleculeId: 'co2', coefficient: 6 },
      { moleculeId: 'h2o', coefficient: 6 },
    ],
    products: [
      { moleculeId: 'c6h12o6', coefficient: 1 },
      { moleculeId: 'o2', coefficient: 6 },
    ],
    signs: ['Cây lớn lên', 'Lá nhả ra khí oxygen', 'Chỉ diễn ra khi có ánh sáng'],
    condition: 'ánh sáng, chất diệp lục',
    story: {
      illustration: 'sunlit-leaf',
      title: 'Chiếc lá hứng nắng',
      description:
        'Lá cây lấy carbon dioxide từ không khí và nước từ rễ. Nhờ chất diệp lục hứng năng lượng ánh sáng, lá ghép chúng thành glucose và nhả khí oxygen ra không khí.',
    },
    conceptIds: ['reaction', 'conservation-of-mass', 'photosynthesis'],
  },
]
