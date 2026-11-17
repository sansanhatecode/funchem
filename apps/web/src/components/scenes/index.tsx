import type { CoreSceneId, SceneId } from '@funchem/content'
import { cn } from '@/lib/cn'
import { BalloonsScene } from './art/balloons'
import { BiogasStoveScene } from './art/biogas-stove'
import { CandleScene } from './art/candle'
import { CharcoalPencilScene } from './art/charcoal-pencil'
import { ClassroomScene } from './art/classroom'
import { CoalStoveScene } from './art/coal-stove'
import { CopperWireScene } from './art/copper-wire'
import { GlassOfWaterScene } from './art/glass-of-water'
import { GoldRingScene } from './art/gold-ring'
import { HandSanitizerScene } from './art/hand-sanitizer'
import { IronNailScene, RustyNailScene } from './art/nail'
import { RiceFieldScene } from './art/rice-field'
import { RocketScene } from './art/rocket'
import { SaltShakerScene } from './art/salt-shaker'
import { SnackBagScene } from './art/snack-bag'
import { SodaCanScene } from './art/soda-can'
import { ToothpasteScene } from './art/toothpaste'
import { IceCubesScene } from './art/ice-cubes'
import { BoilingKettleScene } from './art/boiling-kettle'
import { WetClothesScene } from './art/wet-clothes'
import { SugarTeaScene } from './art/sugar-tea'
import { FryingEggScene } from './art/frying-egg'
import { PerfumeScene } from './art/perfume'
import { VinegarVolcanoScene } from './art/vinegar-volcano'
import { SparklerScene } from './art/sparkler'
import { CharcoalGrillScene } from './art/charcoal-grill'
import { HydrogenPeroxideScene } from './art/hydrogen-peroxide'
import { BakingCakeScene } from './art/baking-cake'
import { VinegarBottleScene } from './art/vinegar-bottle'
import type { SceneDef } from './scene-def'
import { unit05Scenes } from './unit-05'
import { unit06Scenes } from './unit-06'
import { unit07Scenes } from './unit-07'
import { unit08Scenes } from './unit-08'

export type { SceneDef } from './scene-def'

/** Cảnh của Unit 1-4. Từ Unit 5, mỗi Unit có file riêng (unit-05.tsx, …). */
const coreScenes: Record<CoreSceneId, SceneDef> = {
  'iron-nail': {
    Component: IronNailScene,
    label: 'Cây đinh sắt sáng bóng trên bàn thợ, cạnh cây búa',
    hotspot: { x: 128, y: 142 },
  },
  'rusty-nail': {
    Component: RustyNailScene,
    label: 'Cây đinh sắt gỉ nâu đỏ nằm trên tấm ván dưới trời mưa',
    hotspot: { x: 164, y: 135 },
  },
  'gold-ring': {
    Component: GoldRingScene,
    label: 'Chiếc nhẫn vàng lấp lánh dựng trong hộp nhung tím đang mở trên bàn',
    hotspot: { x: 122, y: 84 },
  },
  'copper-wire': {
    Component: CopperWireScene,
    label:
      'Đoạn dây điện vỏ đỏ bị tuốt ở đầu, lộ các sợi đồng màu cam xoè ra, phía trên là bóng đèn đang sáng',
    hotspot: { x: 196, y: 110 },
  },
  'charcoal-pencil': {
    Component: CharcoalPencilScene,
    label: 'Mấy cục than đen nằm cạnh tờ giấy trắng có nét vẽ bằng bút chì than chì',
    hotspot: { x: 112, y: 156 },
  },
  classroom: {
    Component: ClassroomScene,
    label:
      'Tấm áp phích bảng tuần hoàn nhiều màu treo trên tường lớp học, bên dưới là bàn giáo viên',
    hotspot: { x: 207, y: 47 },
  },
  balloons: {
    Component: BalloonsScene,
    label: 'Chùm năm quả bóng bay helium nhiều màu lơ lửng trên bãi cỏ',
    hotspot: { x: 186, y: 100 },
  },
  'glass-of-water': {
    Component: GlassOfWaterScene,
    label: 'Ly nước đá có ống hút và lát chanh trên bàn',
    hotspot: { x: 160, y: 128 },
  },
  'soda-can': {
    Component: SodaCanScene,
    label:
      'Lon nước cam có ga vừa mở, bọt trắng và bọt khí trào lên khỏi miệng lon, bên cạnh là ly nước ngọt sủi bọt',
    hotspot: { x: 137, y: 48 },
  },
  rocket: {
    Component: RocketScene,
    label: 'Tên lửa trắng mũi đỏ rời bệ phóng, phụt lửa và cuộn hơi nước trắng xoá dưới trời xanh',
    hotspot: { x: 160, y: 176 },
  },
  'salt-shaker': {
    Component: SaltShakerScene,
    label: 'Lọ muối nghiêng rắc những hạt muối trắng xuống bát canh nóng bốc khói trên bàn bếp',
    hotspot: { x: 176, y: 114 },
  },
  'biogas-stove': {
    Component: BiogasStoveScene,
    label: 'Nồi đun trên bếp biogas với ngọn lửa xanh',
    hotspot: { x: 160, y: 132 },
  },
  candle: {
    Component: CandleScene,
    label: 'Cây nến đang cháy toả quầng sáng ấm, bên cạnh có hộp diêm và chiếc lọ thuỷ tinh úp',
    hotspot: { x: 160, y: 72 },
  },
  'snack-bag': {
    Component: SnackBagScene,
    label: 'Gói bim bim màu tím phồng căng đứng trên bàn, bên cạnh vài miếng khoai tây chiên vàng',
    hotspot: { x: 158, y: 100 },
  },
  'rice-field': {
    Component: RiceFieldScene,
    label:
      'Bác nông dân đội nón lá rải phân đạm trên ruộng lúa xanh, cạnh bao phân mở miệng đầy hạt trắng',
    hotspot: { x: 209, y: 96 },
  },
  'coal-stove': {
    Component: CoalStoveScene,
    label:
      'Bếp than tổ ong đang cháy đỏ trong căn phòng đóng kín cửa vào ban đêm, làn khí xám mờ bốc lên',
    hotspot: { x: 160, y: 68 },
  },
  'hand-sanitizer': {
    Component: HandSanitizerScene,
    label: 'Chai gel rửa tay khô có vòi nhấn, một giọt gel xanh rơi xuống lòng bàn tay đang ngửa',
    hotspot: { x: 120, y: 152 },
  },
  toothpaste: {
    Component: ToothpasteScene,
    label:
      'Tuýp kem đánh răng bóp dải kem sọc đỏ xanh lên bàn chải, phía sau là cốc súc miệng và gương',
    hotspot: { x: 108, y: 108 },
  },
  'ice-cubes': {
    Component: IceCubesScene,
    label:
      'Ba viên nước đá to xếp chồng trên bàn bếp, một viên nhỏ bên cạnh đang tan thành vũng nước',
    hotspot: { x: 148, y: 88 },
  },
  'boiling-kettle': {
    Component: BoilingKettleScene,
    label: 'Ấm nước màu đỏ đang sôi trên bếp ga lửa xanh, làn sương trắng bốc lên phía trên vòi ấm',
    hotspot: { x: 97, y: 76 },
  },
  'wet-clothes': {
    Component: WetClothesScene,
    label:
      'Áo phông, khăn tắm và đôi tất còn ướt phơi trên dây ngoài trời nắng, nước nhỏ giọt xuống cỏ',
    hotspot: { x: 160, y: 142 },
  },
  'sugar-tea': {
    Component: SugarTeaScene,
    label:
      'Cốc trà thuỷ tinh đang được khuấy bằng thìa, các viên đường tan dần trong trà, bên cạnh là hũ đường',
    hotspot: { x: 138, y: 146 },
  },
  'frying-egg': {
    Component: FryingEggScene,
    label:
      'Quả trứng ốp la đang rán trong chảo trên bếp ga, lòng trắng đã chín trắng đục quanh lòng đỏ',
    hotspot: { x: 120, y: 104 },
  },
  perfume: {
    Component: PerfumeScene,
    label: 'Lọ nước hoa đang xịt ra một làn sương trắng, hương lan dần khắp phòng',
    hotspot: { x: 206, y: 64 },
  },
  'vinegar-volcano': {
    Component: VinegarVolcanoScene,
    label:
      'Mô hình núi lửa trên khay đang phun bọt trắng hồng chảy xuống sườn núi, bên cạnh là chai giấm và một thìa baking soda',
    hotspot: { x: 152, y: 68 },
  },
  sparkler: {
    Component: SparklerScene,
    label:
      'Bàn tay cầm que pháo bông cháy sáng trắng, toé tia lửa giữa trời đêm Tết có đèn lồng đỏ',
    hotspot: { x: 146, y: 78 },
  },
  'charcoal-grill': {
    Component: CharcoalGrillScene,
    label:
      'Bếp nướng than hoa lúc chiều tối, than hồng rực dưới ba xiên thịt nướng, khói mỏng bay lên',
    hotspot: { x: 139, y: 101 },
  },
  'hydrogen-peroxide': {
    Component: HydrogenPeroxideScene,
    label: 'Chai oxy già màu nâu và cục bông gòn đặt cạnh đầu gối bị xước đang sủi bọt trắng',
    hotspot: { x: 196, y: 104 },
  },
  'baking-cake': {
    Component: BakingCakeScene,
    label:
      'Chiếc bánh bông lan vàng mới nướng đã cắt một miếng, lộ ruột bánh xốp đầy lỗ khí, bên cạnh là hộp và thìa baking soda',
    hotspot: { x: 86, y: 178 },
  },
  'vinegar-bottle': {
    Component: VinegarBottleScene,
    label: 'Chai thuỷ tinh đựng giấm vàng nhạt ngâm tỏi ớt trên bàn bếp, bên cạnh là bát đồ chua',
    hotspot: { x: 166, y: 106 },
  },
}

/**
 * Mọi cảnh đời sống. Kiểu Record<SceneId, …> bảo đảm nội dung không thể
 * tham chiếu tới một cảnh chưa được vẽ.
 */
export const SCENES: Record<SceneId, SceneDef> = {
  ...coreScenes,
  ...unit05Scenes,
  ...unit06Scenes,
  ...unit07Scenes,
  ...unit08Scenes,
}

export interface SceneViewProps {
  id: SceneId
  className?: string
  /** đứng yên, dùng cho ảnh thu nhỏ */
  still?: boolean
  /** ẩn khỏi trình đọc màn hình khi đã có chữ mô tả bên cạnh */
  decorative?: boolean
  /** lấp đầy khung cha (cảnh tự cắt quanh tâm) thay vì giữ tỉ lệ 8:5 */
  fill?: boolean
}

/** Hiển thị một cảnh, mặc định trong khung tỉ lệ 8:5. */
export function SceneView({
  id,
  className,
  still = false,
  decorative = false,
  fill = false,
}: SceneViewProps) {
  const def = SCENES[id]
  return (
    <div
      className={cn(
        'overflow-hidden',
        fill ? 'h-full w-full' : 'aspect-[8/5]',
        still && 'scene-still',
        className,
      )}
    >
      <def.Component label={decorative ? undefined : def.label} />
    </div>
  )
}
