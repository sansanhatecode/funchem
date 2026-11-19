import type { Unit09SceneId } from '@funchem/content/lib'
import type { SceneMeta } from '../scene-def'

/** Nhãn và điểm phóng to của từng cảnh. Phần vẽ nằm ở ../packs/unit-09.tsx và chỉ được tải khi cần. */
export const unit09Meta: Record<Unit09SceneId, SceneMeta> = {
  'sodium-street-lamp': {
    label:
      'Cây đèn đường toả ánh sáng vàng cam xuống con phố buổi tối, bên dưới dựng một chiếc xe đạp',
    hotspot: { x: 164, y: 52 },
  },
  'neon-sign': {
    label:
      'Biển hiệu ống neon đỏ cam uốn thành chữ CAFE và hình tách cà phê, sáng rực trên bức tường gạch trong đêm',
    hotspot: { x: 120, y: 84 },
  },
  'rotten-egg': {
    label:
      'Quả trứng hỏng vừa đập ra bát, lòng đỏ ngả màu xám xanh, những làn mùi bốc lên và một con ruồi bay quanh',
    hotspot: { x: 160, y: 104 },
  },
  'swimming-pool': {
    label:
      'Hồ bơi ngoài trời nước xanh trong dưới nắng, có dây phao chia làn, thang inox và chiếc phao bơi màu cam',
    hotspot: { x: 150, y: 146 },
  },
  'tarnished-silver': {
    label:
      'Hai chiếc thìa bạc trên khăn nhung tím: một chiếc sáng bóng, một chiếc đã xỉn đen đang được chùi bằng miếng vải',
    hotspot: { x: 84, y: 146 },
  },
  'desiccant-box': {
    label:
      'Hộp hút ẩm đặt trong tủ quần áo: ngăn trên đầy hạt trắng, nước nhỏ giọt xuống đọng ở ngăn dưới',
    hotspot: { x: 160, y: 122 },
  },
  'diamond-scale': {
    label:
      'Viên kim cương nhỏ lấp lánh đặt trên đĩa của chiếc cân tiểu li ở quầy tiệm kim hoàn, màn hình cân hiện hai phần mười gam',
    hotspot: { x: 124, y: 102 },
  },
  'party-balloons': {
    label:
      'Phòng tiệc sinh nhật: quả bóng đỏ bơm helium bay lên chạm trần, quả bóng xanh thổi bằng miệng nằm trên sàn',
    hotspot: { x: 112, y: 46 },
  },
}
