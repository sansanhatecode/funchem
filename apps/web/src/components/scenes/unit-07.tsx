import type { Unit07SceneId } from '@funchem/content/lib'
import { AluminiumCansScene } from './art/aluminium-cans'
import { BananaBagScene } from './art/banana-bag'
import { BlastFurnaceScene } from './art/blast-furnace'
import { CopperCoatedNailScene } from './art/copper-coated-nail'
import { MetalKitchenScene } from './art/metal-kitchen'
import { PlasticRecyclingScene } from './art/plastic-recycling'
import { SodiumWaterScene } from './art/sodium-water'
import { SteelBridgeScene } from './art/steel-bridge'
import { ZincAcidScene } from './art/zinc-acid'
import { ZincRoofScene } from './art/zinc-roof'
import type { SceneDef } from './scene-def'

/** Các cảnh của Unit 7: mỗi id trong UNIT07_SCENE_IDS phải có một mục ở đây. */
export const unit07Scenes: Record<Unit07SceneId, SceneDef> = {
  'metal-kitchen': {
    Component: MetalKitchenScene,
    label:
      'Góc bếp: chiếc nồi nhôm sáng bóng đang đun trên bếp gas, chiếc chảo treo trên tường và chùm chìa khoá trên bàn',
    hotspot: { x: 130, y: 112 },
  },
  'aluminium-cans': {
    Component: AluminiumCansScene,
    label:
      'Hai vỏ lon ngoài sân sau mưa: vỏ lon nhôm vẫn sáng lấp lánh, vỏ hộp sắt bên cạnh đã gỉ nâu',
    hotspot: { x: 108, y: 112 },
  },
  'zinc-acid': {
    Component: ZincAcidScene,
    label:
      'Ống nghiệm trên giá gỗ trong phòng thí nghiệm: viên kẽm xám sủi bọt khí trong dung dịch acid không màu, bên cạnh là kính bảo hộ và lọ hydrochloric acid',
    hotspot: { x: 160, y: 142 },
  },
  'zinc-roof': {
    Component: ZincRoofScene,
    label: 'Ngôi nhà nhỏ lợp mái tôn mạ kẽm sáng màu bạc dưới trời mưa',
    hotspot: { x: 160, y: 70 },
  },
  'sodium-water': {
    Component: SodiumWaterScene,
    label:
      'Thí nghiệm của giáo viên sau tấm chắn trong suốt: mẩu natri vo tròn chạy vòng trên mặt nước trong chậu thuỷ tinh, xì bọt khí và bốc cháy với ngọn lửa vàng',
    hotspot: { x: 214, y: 96 },
  },
  'copper-coated-nail': {
    Component: CopperCoatedNailScene,
    label:
      'Cây đinh sắt ngâm trong cốc dung dịch xanh lam: phần ngập trong dung dịch phủ một lớp đồng đỏ nâu, phần phía trên vẫn xám bạc',
    hotspot: { x: 172, y: 118 },
  },
  'blast-furnace': {
    Component: BlastFurnaceScene,
    label:
      'Lò cao luyện gang: quặng nâu đỏ và than cốc được đưa lên đỉnh lò, dòng gang nóng chảy đỏ rực rót từ đáy lò vào thùng',
    hotspot: { x: 156, y: 120 },
  },
  'steel-bridge': {
    Component: SteelBridgeScene,
    label: 'Cây cầu giàn thép màu xanh bắc qua sông, một đoàn tàu đỏ chạy trên cầu',
    hotspot: { x: 160, y: 56 },
  },
  'banana-bag': {
    Component: BananaBagScene,
    label:
      'Nải chuối chín vàng còn một quả xanh, đựng trong chiếc túi nilon trắng trong đặt trên bàn, làn khí ethylene toả ra được vẽ tượng trưng bằng vài sợi xanh nhạt',
    hotspot: { x: 172, y: 40 },
  },
  'plastic-recycling': {
    Component: PlasticRecyclingScene,
    label:
      'Thùng tái chế màu xanh có biểu tượng ba mũi tên, một chai nhựa đang được thả vào, bên cạnh là đống chai lọ nhựa và túi nilon',
    hotspot: { x: 206, y: 150 },
  },
}
