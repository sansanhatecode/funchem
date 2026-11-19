import type { Unit10SceneId } from '@funchem/content/lib'
import type { SceneMeta } from '../scene-def'

/** Nhãn và điểm phóng to của từng cảnh. Phần vẽ nằm ở ../packs/unit-10.tsx và chỉ được tải khi cần. */
export const unit10Meta: Record<Unit10SceneId, SceneMeta> = {
  'egg-carton-dozen': {
    label:
      'Vỉ giấy mở nắp đựng một tá trứng xếp thành hai hàng sáu quả, bên cạnh là một chén thuỷ tinh nhỏ đựng chút nước',
    hotspot: { x: 270, y: 152 },
  },
  'one-mole-samples': {
    label:
      'Bốn chiếc đĩa nhỏ xếp hàng trên bàn, mỗi đĩa đựng một mol của một chất kèm thẻ ghi khối lượng: 12 g than, 18 g nước, 27 g nhôm và 56 g đinh sắt',
    hotspot: { x: 48, y: 124 },
  },
  'glucose-on-scale': {
    label:
      'Bát bột glucose trắng đặt trên cân nhà bếp điện tử, màn hình cân hiện 180 g, bên cạnh là túi bột và chiếc thìa',
    hotspot: { x: 150, y: 92 },
  },
  'balloon-and-jug': {
    label:
      'Quả bóng bay đỏ bơm căng khí helium, buộc dây vào quả cân nhỏ trên sàn, to hơn hẳn bình nước lọc 20 lít màu xanh đặt bên cạnh',
    hotspot: { x: 112, y: 82 },
  },
  'balloons-rise-sink': {
    label:
      'Trong phòng, quả bóng vàng bơm khí helium bay lên kéo căng sợi dây buộc vào ghế, còn quả bóng xanh bơm khí carbon dioxide nằm trên sàn',
    hotspot: { x: 104, y: 56 },
  },
  'hotpot-gas-can': {
    label:
      'Nồi lẩu bốc hơi trên bếp gas mini lửa xanh, nắp ngăn bên phải mở để lộ lon gas butane nằm ngang',
    hotspot: { x: 252, y: 150 },
  },
  'sandwich-recipe': {
    label:
      'Trên thớt gỗ xếp theo công thức: hai lát bánh mì cộng một quả trứng ốp la, mũi tên chỉ sang một chiếc bánh mì kẹp trứng',
    hotspot: { x: 264, y: 112 },
  },
}
