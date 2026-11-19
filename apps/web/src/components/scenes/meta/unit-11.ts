import type { Unit11SceneId } from '@funchem/content/lib'
import type { SceneMeta } from '../scene-def'

/** Nhãn và điểm phóng to của từng cảnh. Phần vẽ nằm ở ../packs/unit-11.tsx và chỉ được tải khi cần. */
export const unit11Meta: Record<Unit11SceneId, SceneMeta> = {
  'sea-wave': {
    label:
      'Bãi biển ngày nắng: con sóng bạc đầu cuộn vào bờ cát, trên cát có chiếc xô đỏ đựng nước biển, một con sao biển và vỏ sò',
    hotspot: { x: 150, y: 116 },
  },
  'fish-tank': {
    label:
      'Bể cá cảnh có hai chú cá vàng, cây thuỷ sinh và viên đá sủi đang đẩy từng chuỗi bong bóng khí nổi lên mặt nước',
    hotspot: { x: 202, y: 108 },
  },
  'salt-at-bottom': {
    label:
      'Cốc nước muối đang được khuấy bằng thìa, một lớp muối trắng không tan vẫn nằm ở đáy cốc, bên cạnh là hũ muối',
    hotspot: { x: 156, y: 152 },
  },
  'rock-sugar': {
    label:
      'Hũ nước đường màu vàng có sợi chỉ buộc vào chiếc đũa gác ngang miệng hũ, quanh sợi chỉ bám chùm tinh thể đường phèn, bên cạnh là đĩa đường phèn',
    hotspot: { x: 156, y: 114 },
  },
  'saline-bottle': {
    label:
      'Chai nước muối sinh lí nắp xanh, nhãn ghi 0,9%, đặt cạnh lọ nhỏ giọt và mấy cục bông gòn',
    hotspot: { x: 152, y: 90 },
  },
  'measuring-jug': {
    label:
      'Ca đong thuỷ tinh có vạch chia, nước đầy tới vạch 1 lít, chiếc thìa đang khuấy cho muối tan, bên cạnh là bát muối',
    hotspot: { x: 164, y: 120 },
  },
  'muddy-river': {
    label:
      'Dòng sông mùa lũ đỏ ngầu phù sa, trên cầu gỗ là cốc nước sông để yên: bùn lắng thành lớp ở đáy, nước phía trên trong dần',
    hotspot: { x: 232, y: 96 },
  },
  'salad-dressing': {
    label:
      'Chai dầu giấm trộn salad tách thành hai lớp, dầu vàng ở trên và giấm nâu đỏ ở dưới, vài giọt dầu đang nổi lên, cạnh bát rau trộn cà chua',
    hotspot: { x: 100, y: 124 },
  },
  'coffee-phin': {
    label:
      'Phin cà phê bằng nhôm đặt trên cốc thuỷ tinh, từng giọt cà phê nâu nhỏ xuống cốc, bã cà phê nằm lại trong phin',
    hotspot: { x: 160, y: 112 },
  },
  'salt-field': {
    label:
      'Ruộng muối ven biển dưới nắng: các ô nước biển cạn, những đống muối trắng hình nón và người làm muối đội nón lá đang cào muối',
    hotspot: { x: 112, y: 164 },
  },
}
