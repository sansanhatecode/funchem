import type { Unit06SceneId } from '@funchem/content/lib'
import type { SceneMeta } from '../scene-def'

/** Nhãn và điểm phóng to của từng cảnh. Phần vẽ nằm ở ../packs/unit-06.tsx và chỉ được tải khi cần. */
export const unit06Meta: Record<Unit06SceneId, SceneMeta> = {
  'gas-stove-wok': {
    label:
      'Bình gas màu đỏ nối ống dẫn sang bếp gas lửa xanh, trên bếp là chảo sâu lòng đang xào rau củ',
    hotspot: { x: 210, y: 146 },
  },
  'lime-kiln': {
    label:
      'Lò nung vôi xây gạch đỏ lửa ở cửa lò, khói bốc lên từ miệng lò, bên trái là đống đá vôi xám, bên phải là đống vôi sống trắng',
    hotspot: { x: 160, y: 164 },
  },
  'fizzing-cold-cup': {
    label:
      'Cốc giấm sủi bọt trắng sau khi cho baking soda vào, nhiệt kế cắm trong cốc và mũi tên xanh chỉ xuống cho thấy nhiệt độ đang giảm',
    hotspot: { x: 150, y: 136 },
  },
  'open-fridge': {
    label:
      'Tủ lạnh mở cửa, bên trong có cốc sữa còn ngon cùng trứng và rau củ, còn cốc sữa bỏ quên trên bàn bên ngoài đã vón lại và bốc mùi chua',
    hotspot: { x: 54, y: 104 },
  },
  'pressure-cooker': {
    label: 'Nồi áp suất bằng kim loại đậy kín trên bếp gas lửa xanh, van trên nắp đang phụt hơi',
    hotspot: { x: 160, y: 112 },
  },
  'firewood-stove': {
    label:
      'Bếp củi với những thanh củi chẻ nhỏ đang cháy rực dưới nồi đặt trên kiềng, bên cạnh là khúc gỗ to chưa chẻ có cái rìu cắm trên',
    hotspot: { x: 222, y: 160 },
  },
  'potato-peroxide': {
    label:
      'Lát khoai tây sống trong cốc oxy già phủ kín bọt trắng đang sủi lên, bên cạnh là chai oxy già màu nâu và củ khoai tây cắt dở',
    hotspot: { x: 170, y: 134 },
  },
  'bread-oven': {
    label: 'Hai ổ bánh mì vàng ruộm đang nở phồng trong lò nướng nóng rực, nhìn qua cửa kính lò',
    hotspot: { x: 166, y: 122 },
  },
  'pickle-jars': {
    label:
      'Hũ thuỷ tinh lớn muối dưa cải vàng xanh có bọt khí li ti nổi lên, bên cạnh là mấy hũ sữa chua trắng và một chiếc thìa',
    hotspot: { x: 110, y: 130 },
  },
}
