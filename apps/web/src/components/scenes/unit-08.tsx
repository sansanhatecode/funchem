import type { Unit08SceneId } from '@funchem/content/lib'
import { CurdledMilkScene } from './art/curdled-milk'
import { FruitPlateScene } from './art/fruit-plate'
import { IodinePotatoScene } from './art/iodine-potato'
import { JoggingBreathScene } from './art/jogging-breath'
import { OilOnWaterScene } from './art/oil-on-water'
import { RiceBowlScene } from './art/rice-bowl'
import { SportsDrinkScene } from './art/sports-drink'
import { SunlitLeafScene } from './art/sunlit-leaf'
import type { SceneDef } from './scene-def'

/** Các cảnh của Unit 8: mỗi id trong UNIT08_SCENE_IDS phải có một mục ở đây. */
export const unit08Scenes: Record<Unit08SceneId, SceneDef> = {
  'jogging-breath': {
    Component: JoggingBreathScene,
    label:
      'Bạn nhỏ đội mũ len chạy bộ trên đường chạy buổi sáng lạnh, thở ra những làn hơi trắng trước miệng',
    hotspot: { x: 204, y: 56 },
  },
  'fruit-plate': {
    Component: FruitPlateScene,
    label:
      'Đĩa hoa quả có chùm nho tím và quả chuối chín, bên cạnh là cốc nước mía có đá và khúc mía',
    hotspot: { x: 98, y: 118 },
  },
  'sunlit-leaf': {
    Component: SunlitLeafScene,
    label: 'Chiếc lá xanh to trên cành hứng luồng nắng chiếu xuống từ mặt trời',
    hotspot: { x: 178, y: 104 },
  },
  'rice-bowl': {
    Component: RiceBowlScene,
    label: 'Bát cơm trắng đầy ngọn bốc khói trên bàn, bên cạnh là đôi đũa',
    hotspot: { x: 160, y: 88 },
  },
  'iodine-potato': {
    Component: IodinePotatoScene,
    label:
      'Ống nhỏ giọt nhỏ dung dịch iodine màu nâu vàng lên lát khoai tây, chỗ bị nhỏ chuyển sang màu xanh tím, bên cạnh là lọ iodine',
    hotspot: { x: 138, y: 146 },
  },
  'oil-on-water': {
    Component: OilOnWaterScene,
    label:
      'Cốc nước có lớp dầu ăn vàng nổi bên trên, vài hạt dầu tròn đang nổi dần lên, cạnh chai dầu ăn',
    hotspot: { x: 150, y: 134 },
  },
  'curdled-milk': {
    Component: CurdledMilkScene,
    label:
      'Nửa quả chanh vắt giọt xuống cốc sữa, sữa trong cốc vón lại thành từng cục trắng, cạnh chai sữa tươi',
    hotspot: { x: 160, y: 122 },
  },
  'sports-drink': {
    Component: SportsDrinkScene,
    label:
      'Chai nước điện giải màu xanh đặt trên băng ghế cạnh đôi giày thể thao, phía sau là sân chạy',
    hotspot: { x: 96, y: 150 },
  },
}
