import type { Unit06SceneId } from '@funchem/content'
import { BreadOvenScene } from './art/bread-oven'
import { FirewoodStoveScene } from './art/firewood-stove'
import { FizzingColdCupScene } from './art/fizzing-cold-cup'
import { GasStoveWokScene } from './art/gas-stove-wok'
import { LimeKilnScene } from './art/lime-kiln'
import { OpenFridgeScene } from './art/open-fridge'
import { PickleJarsScene } from './art/pickle-jars'
import { PotatoPeroxideScene } from './art/potato-peroxide'
import { PressureCookerScene } from './art/pressure-cooker'
import type { SceneDef } from './scene-def'

/** Các cảnh của Unit 6: mỗi id trong UNIT06_SCENE_IDS phải có một mục ở đây. */
export const unit06Scenes: Record<Unit06SceneId, SceneDef> = {
  'gas-stove-wok': {
    Component: GasStoveWokScene,
    label:
      'Bình gas màu đỏ nối ống dẫn sang bếp gas lửa xanh, trên bếp là chảo sâu lòng đang xào rau củ',
    hotspot: { x: 210, y: 146 },
  },
  'lime-kiln': {
    Component: LimeKilnScene,
    label:
      'Lò nung vôi xây gạch đỏ lửa ở cửa lò, khói bốc lên từ miệng lò, bên trái là đống đá vôi xám, bên phải là đống vôi sống trắng',
    hotspot: { x: 160, y: 164 },
  },
  'fizzing-cold-cup': {
    Component: FizzingColdCupScene,
    label:
      'Cốc giấm sủi bọt trắng sau khi cho baking soda vào, nhiệt kế cắm trong cốc và mũi tên xanh chỉ xuống cho thấy nhiệt độ đang giảm',
    hotspot: { x: 150, y: 136 },
  },
  'open-fridge': {
    Component: OpenFridgeScene,
    label:
      'Tủ lạnh mở cửa, bên trong có cốc sữa còn ngon cùng trứng và rau củ, còn cốc sữa bỏ quên trên bàn bên ngoài đã vón lại và bốc mùi chua',
    hotspot: { x: 54, y: 104 },
  },
  'pressure-cooker': {
    Component: PressureCookerScene,
    label: 'Nồi áp suất bằng kim loại đậy kín trên bếp gas lửa xanh, van trên nắp đang phụt hơi',
    hotspot: { x: 160, y: 112 },
  },
  'firewood-stove': {
    Component: FirewoodStoveScene,
    label:
      'Bếp củi với những thanh củi chẻ nhỏ đang cháy rực dưới nồi đặt trên kiềng, bên cạnh là khúc gỗ to chưa chẻ có cái rìu cắm trên',
    hotspot: { x: 222, y: 160 },
  },
  'potato-peroxide': {
    Component: PotatoPeroxideScene,
    label:
      'Lát khoai tây sống trong cốc oxy già phủ kín bọt trắng đang sủi lên, bên cạnh là chai oxy già màu nâu và củ khoai tây cắt dở',
    hotspot: { x: 170, y: 134 },
  },
  'bread-oven': {
    Component: BreadOvenScene,
    label: 'Hai ổ bánh mì vàng ruộm đang nở phồng trong lò nướng nóng rực, nhìn qua cửa kính lò',
    hotspot: { x: 166, y: 122 },
  },
  'pickle-jars': {
    Component: PickleJarsScene,
    label:
      'Hũ thuỷ tinh lớn muối dưa cải vàng xanh có bọt khí li ti nổi lên, bên cạnh là mấy hũ sữa chua trắng và một chiếc thìa',
    hotspot: { x: 110, y: 130 },
  },
}
