import type { Unit08SceneId } from '@funchem/content/lib'
import type { SceneMeta } from '../scene-def'

/** Nhãn và điểm phóng to của từng cảnh. Phần vẽ nằm ở ../packs/unit-08.tsx và chỉ được tải khi cần. */
export const unit08Meta: Record<Unit08SceneId, SceneMeta> = {
  'jogging-breath': {
    label:
      'Bạn nhỏ đội mũ len chạy bộ trên đường chạy buổi sáng lạnh, thở ra những làn sương trắng trước miệng',
    hotspot: { x: 204, y: 56 },
  },
  'fruit-plate': {
    label:
      'Đĩa hoa quả có chùm nho tím và quả chuối chín, bên cạnh là cốc nước mía có đá và khúc mía',
    hotspot: { x: 98, y: 118 },
  },
  'sunlit-leaf': {
    label: 'Chiếc lá xanh to trên cành hứng luồng nắng chiếu xuống từ mặt trời',
    hotspot: { x: 178, y: 104 },
  },
  'rice-bowl': {
    label: 'Bát cơm trắng đầy ngọn còn nóng hổi trên bàn, bên cạnh là đôi đũa',
    hotspot: { x: 160, y: 88 },
  },
  'iodine-potato': {
    label:
      'Ống nhỏ giọt nhỏ dung dịch iodine màu nâu vàng lên lát khoai tây, chỗ bị nhỏ chuyển sang màu xanh tím, bên cạnh là lọ iodine',
    hotspot: { x: 138, y: 146 },
  },
  'oil-on-water': {
    label:
      'Cốc nước có lớp dầu ăn vàng nổi bên trên, vài hạt dầu tròn đang nổi dần lên, cạnh chai dầu ăn',
    hotspot: { x: 150, y: 134 },
  },
  'curdled-milk': {
    label:
      'Nửa quả chanh vắt giọt xuống cốc sữa, sữa trong cốc vón lại thành từng cục trắng, cạnh chai sữa tươi',
    hotspot: { x: 160, y: 122 },
  },
  'sports-drink': {
    label:
      'Chai nước điện giải màu xanh đặt trên băng ghế cạnh đôi giày thể thao, phía sau là sân chạy',
    hotspot: { x: 96, y: 150 },
  },
}
