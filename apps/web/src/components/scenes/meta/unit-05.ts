import type { Unit05SceneId } from '@funchem/content/lib'
import type { SceneMeta } from '../scene-def'

/** Nhãn và điểm phóng to của từng cảnh. Phần vẽ nằm ở ../packs/unit-05.tsx và chỉ được tải khi cần. */
export const unit05Meta: Record<Unit05SceneId, SceneMeta> = {
  'lime-and-vinegar': {
    label:
      'Nửa quả chanh xanh mọng nước đặt cạnh một quả chanh nguyên và chén giấm ngâm ớt tỏi trên bàn ăn',
    hotspot: { x: 226, y: 125 },
  },
  'metal-in-acid': {
    label:
      'Cốc thuỷ tinh đựng hydrochloric acid trong phòng thí nghiệm, mẩu magnesium dưới đáy đang sủi bọt khí, bên cạnh là kính bảo hộ',
    hotspot: { x: 160, y: 132 },
  },
  limewash: {
    label:
      'Xô vôi trắng có chổi quét dựng bên gốc cây vừa được quét vôi trắng, cạnh xô là mấy cục vôi sống',
    hotspot: { x: 112, y: 120 },
  },
  'soap-bar': {
    label:
      'Bánh xà phòng hồng phủ đầy bọt trắng nằm trên khay cạnh vòi nước, bong bóng xà phòng bay lên',
    hotspot: { x: 214, y: 132 },
  },
  'cabbage-indicator': {
    label:
      'Ba cốc nước bắp cải tím xếp hàng: cốc bên trái nhỏ giấm chuyển màu hồng đỏ, cốc giữa giữ màu tím, cốc bên phải thêm baking soda chuyển màu xanh, phía sau là nửa cây bắp cải tím',
    hotspot: { x: 70, y: 126 },
  },
  'litmus-paper': {
    label:
      'Hai mẩu giấy quỳ tím nhúng vào hai cốc: trong cốc nước chanh giấy hoá đỏ, trong cốc nước xà phòng giấy hoá xanh, ở giữa là xấp giấy quỳ còn tím',
    hotspot: { x: 100, y: 138 },
  },
  'ph-test-lemonade': {
    label:
      'Ly nước chanh có đá và lát chanh, mẩu giấy pH vừa nhúng đã đổi đầu sang màu cam đỏ, bên cạnh là bảng màu để so',
    hotspot: { x: 112, y: 128 },
  },
  antacid: {
    label:
      'Chai thuốc giảm acid dạ dày màu trắng có hình dạ dày trên nhãn, bên cạnh là thìa đầy thuốc sữa trắng đục',
    hotspot: { x: 200, y: 171 },
  },
  'acid-rain': {
    label:
      'Nhà máy nhả khói xám lên trời mưa, mưa acid rơi xuống bức tượng đá đã mòn lỗ chỗ và cái cây úa lá',
    hotspot: { x: 84, y: 34 },
  },
  'eggshell-vinegar': {
    label:
      'Quả trứng ngâm trong cốc giấm, vỏ trứng phủ kín bọt khí li ti và bọt nổi dần lên mặt cốc, bên cạnh là chai giấm và một quả trứng khác',
    hotspot: { x: 160, y: 124 },
  },
}
