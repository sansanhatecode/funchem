import type { Unit07SceneId } from '@funchem/content/lib'
import type { SceneMeta } from '../scene-def'

/** Nhãn và điểm phóng to của từng cảnh. Phần vẽ nằm ở ../packs/unit-07.tsx và chỉ được tải khi cần. */
export const unit07Meta: Record<Unit07SceneId, SceneMeta> = {
  'metal-kitchen': {
    label:
      'Góc bếp: chiếc nồi nhôm sáng bóng đang đun trên bếp gas, chiếc chảo treo trên tường và chùm chìa khoá trên bàn',
    hotspot: { x: 130, y: 112 },
  },
  'aluminium-cans': {
    label:
      'Hai vỏ lon ngoài sân sau mưa: vỏ lon nhôm vẫn sáng lấp lánh, vỏ hộp sắt bên cạnh đã gỉ nâu',
    hotspot: { x: 108, y: 112 },
  },
  'zinc-acid': {
    label:
      'Ống nghiệm trên giá gỗ trong phòng thí nghiệm: viên kẽm xám sủi bọt khí trong dung dịch acid không màu, bên cạnh là kính bảo hộ và lọ hydrochloric acid',
    hotspot: { x: 160, y: 142 },
  },
  'zinc-roof': {
    label: 'Ngôi nhà nhỏ lợp mái tôn mạ kẽm sáng màu bạc dưới trời mưa',
    hotspot: { x: 160, y: 70 },
  },
  'sodium-water': {
    label:
      'Thí nghiệm của giáo viên sau tấm chắn trong suốt: mẩu natri vo tròn chạy vòng trên mặt nước trong chậu thuỷ tinh, xì bọt khí và bốc cháy với ngọn lửa vàng',
    hotspot: { x: 214, y: 96 },
  },
  'copper-coated-nail': {
    label:
      'Cây đinh sắt ngâm trong cốc dung dịch xanh lam: phần ngập trong dung dịch phủ một lớp đồng đỏ nâu, phần phía trên vẫn xám bạc',
    hotspot: { x: 172, y: 118 },
  },
  'blast-furnace': {
    label:
      'Lò cao luyện gang: quặng nâu đỏ và than cốc được đưa lên đỉnh lò, dòng gang nóng chảy đỏ rực rót từ đáy lò vào thùng',
    hotspot: { x: 156, y: 120 },
  },
  'steel-bridge': {
    label: 'Cây cầu giàn thép màu xanh bắc qua sông, một đoàn tàu đỏ chạy trên cầu',
    hotspot: { x: 160, y: 56 },
  },
  'banana-bag': {
    label:
      'Nải chuối chín vàng còn một quả xanh, đựng trong chiếc túi nilon trắng trong đặt trên bàn, làn khí ethylene toả ra được vẽ tượng trưng bằng vài sợi xanh nhạt',
    hotspot: { x: 172, y: 40 },
  },
  'plastic-recycling': {
    label:
      'Thùng tái chế màu xanh có biểu tượng ba mũi tên, một chai nhựa đang được thả vào, bên cạnh là đống chai lọ nhựa và túi nilon',
    hotspot: { x: 206, y: 150 },
  },
}
