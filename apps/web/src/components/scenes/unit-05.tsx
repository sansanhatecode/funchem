import type { Unit05SceneId } from '@funchem/content'
import { AcidRainScene } from './art/acid-rain'
import { AntacidScene } from './art/antacid'
import { CabbageIndicatorScene } from './art/cabbage-indicator'
import { EggshellVinegarScene } from './art/eggshell-vinegar'
import { LimeAndVinegarScene } from './art/lime-and-vinegar'
import { LimewashScene } from './art/limewash'
import { LitmusPaperScene } from './art/litmus-paper'
import { MetalInAcidScene } from './art/metal-in-acid'
import { PhTestLemonadeScene } from './art/ph-test-lemonade'
import { SoapBarScene } from './art/soap-bar'
import type { SceneDef } from './scene-def'

/** Các cảnh của Unit 5: mỗi id trong UNIT05_SCENE_IDS phải có một mục ở đây. */
export const unit05Scenes: Record<Unit05SceneId, SceneDef> = {
  'lime-and-vinegar': {
    Component: LimeAndVinegarScene,
    label:
      'Nửa quả chanh xanh mọng nước đặt cạnh một quả chanh nguyên và chén giấm ngâm ớt tỏi trên bàn ăn',
    hotspot: { x: 226, y: 125 },
  },
  'metal-in-acid': {
    Component: MetalInAcidScene,
    label:
      'Cốc thuỷ tinh đựng hydrochloric acid trong phòng thí nghiệm, mẩu magnesium dưới đáy đang sủi bọt khí, bên cạnh là kính bảo hộ',
    hotspot: { x: 160, y: 132 },
  },
  limewash: {
    Component: LimewashScene,
    label:
      'Xô vôi trắng có chổi quét dựng bên gốc cây vừa được quét vôi trắng, cạnh xô là mấy cục vôi sống',
    hotspot: { x: 112, y: 120 },
  },
  'soap-bar': {
    Component: SoapBarScene,
    label:
      'Bánh xà phòng hồng phủ đầy bọt trắng nằm trên khay cạnh vòi nước, bong bóng xà phòng bay lên',
    hotspot: { x: 214, y: 132 },
  },
  'cabbage-indicator': {
    Component: CabbageIndicatorScene,
    label:
      'Ba cốc nước bắp cải tím xếp hàng: cốc bên trái nhỏ giấm chuyển màu hồng đỏ, cốc giữa giữ màu tím, cốc bên phải thêm baking soda chuyển màu xanh, phía sau là nửa cây bắp cải tím',
    hotspot: { x: 70, y: 126 },
  },
  'litmus-paper': {
    Component: LitmusPaperScene,
    label:
      'Hai mẩu giấy quỳ tím nhúng vào hai cốc: trong cốc nước chanh giấy hoá đỏ, trong cốc nước xà phòng giấy hoá xanh, ở giữa là xấp giấy quỳ còn tím',
    hotspot: { x: 100, y: 138 },
  },
  'ph-test-lemonade': {
    Component: PhTestLemonadeScene,
    label:
      'Ly nước chanh có đá và lát chanh, mẩu giấy pH vừa nhúng đã đổi đầu sang màu cam đỏ, bên cạnh là bảng màu để so',
    hotspot: { x: 112, y: 128 },
  },
  antacid: {
    Component: AntacidScene,
    label:
      'Chai thuốc giảm acid dạ dày màu trắng có hình dạ dày trên nhãn, bên cạnh là thìa đầy thuốc sữa trắng đục',
    hotspot: { x: 200, y: 171 },
  },
  'acid-rain': {
    Component: AcidRainScene,
    label:
      'Nhà máy nhả khói xám lên trời mưa, mưa acid rơi xuống bức tượng đá đã mòn lỗ chỗ và cái cây úa lá',
    hotspot: { x: 84, y: 34 },
  },
  'eggshell-vinegar': {
    Component: EggshellVinegarScene,
    label:
      'Quả trứng ngâm trong cốc giấm, vỏ trứng phủ kín bọt khí li ti và bọt nổi dần lên mặt cốc, bên cạnh là chai giấm và một quả trứng khác',
    hotspot: { x: 160, y: 124 },
  },
}
