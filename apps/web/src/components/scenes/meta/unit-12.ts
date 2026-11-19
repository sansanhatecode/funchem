import type { Unit12SceneId } from '@funchem/content/lib'
import type { SceneMeta } from '../scene-def'

/** Nhãn và điểm phóng to của từng cảnh. Phần vẽ nằm ở ../packs/unit-12.tsx và chỉ được tải khi cần. */
export const unit12Meta: Record<Unit12SceneId, SceneMeta> = {
  'burnt-toast': {
    label:
      'Lò nướng bánh mì màu đỏ bật lên hai lát bánh, một lát đã cháy đen đang bốc khói xám, bên cạnh là đĩa có lát bánh nướng vàng',
    hotspot: { x: 98, y: 84 },
  },
  'hotpot-gas-stove': {
    label:
      'Nồi lẩu đang sôi trên bếp gas mini với vòng lửa xanh, ngăn bên trái của bếp mở nắp, lộ ra lon gas nhỏ nằm ngang',
    hotspot: { x: 76, y: 165 },
  },
  'bromine-water': {
    label:
      'Hai bình tam giác đang được sục khí trên bàn thí nghiệm: bình sục methane vẫn giữ màu vàng cam của nước bromine, bình sục ethylene đã mất màu',
    hotspot: { x: 250, y: 150 },
  },
  'oil-rig': {
    label:
      'Giàn khoan dầu giữa biển với tháp khoan đỏ, sàn vàng trên các chân thép, đầu cần đốt khí có ngọn đuốc đang cháy',
    hotspot: { x: 290, y: 50 },
  },
  'refinery-tower': {
    label:
      'Tháp chưng cất cao của nhà máy lọc dầu, cạnh lò đun đỏ lửa, năm ống ở năm tầng dẫn ra năm bồn sản phẩm có màu sẫm dần từ trên xuống dưới',
    hotspot: { x: 150, y: 96 },
  },
  'gas-station': {
    label:
      'Chiếc xe máy xanh đang được bơm xăng ở cây xăng, vòi bơm cắm vào miệng bình, trụ bơm màu xanh lá hiện các con số',
    hotspot: { x: 252, y: 142 },
  },
  'alcohol-lamp': {
    label:
      'Đèn cồn thuỷ tinh cháy với ngọn lửa xanh nhạt, đun đáy một ống nghiệm kẹp nghiêng trên giá sắt, bên cạnh là nắp chụp của đèn',
    hotspot: { x: 128, y: 162 },
  },
  'vinegar-jar': {
    label:
      'Hũ thuỷ tinh miệng rộng đựng giấm vàng nhạt, trên mặt nổi lớp màng trắng đục, miệng hũ đậy vải thưa buộc dây, bên cạnh là chai rượu trắng',
    hotspot: { x: 140, y: 144 },
  },
  'nail-polish-remover': {
    label:
      'Chai nước tẩy sơn móng tay nắp hồng và lọ sơn đỏ trên bàn, cạnh bàn tay có một móng vừa được miếng bông lau sạch sơn',
    hotspot: { x: 84, y: 160 },
  },
}
