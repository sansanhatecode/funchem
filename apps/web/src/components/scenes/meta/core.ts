import type { CoreSceneId } from '@funchem/content/lib'
import type { SceneMeta } from '../scene-def'

/** Nhãn và điểm phóng to của từng cảnh. Phần vẽ nằm ở ../packs/core.tsx và chỉ được tải khi cần. */
export const coreMeta: Record<CoreSceneId, SceneMeta> = {
  'iron-nail': {
    label: 'Cây đinh sắt sáng bóng trên bàn thợ, cạnh cây búa',
    hotspot: { x: 128, y: 142 },
  },
  'rusty-nail': {
    label: 'Cây đinh sắt gỉ nâu đỏ nằm trên tấm ván dưới trời mưa',
    hotspot: { x: 164, y: 135 },
  },
  'gold-ring': {
    label: 'Chiếc nhẫn vàng lấp lánh dựng trong hộp nhung tím đang mở trên bàn',
    hotspot: { x: 122, y: 84 },
  },
  'copper-wire': {
    label:
      'Đoạn dây điện vỏ đỏ bị tuốt ở đầu, lộ các sợi đồng màu cam xoè ra, phía trên là bóng đèn đang sáng',
    hotspot: { x: 196, y: 110 },
  },
  'charcoal-pencil': {
    label: 'Mấy cục than đen nằm cạnh tờ giấy trắng có nét vẽ bằng bút chì than chì',
    hotspot: { x: 112, y: 156 },
  },
  classroom: {
    label:
      'Tấm áp phích bảng tuần hoàn nhiều màu treo trên tường lớp học, bên dưới là bàn giáo viên',
    hotspot: { x: 207, y: 47 },
  },
  balloons: {
    label: 'Chùm năm quả bóng bay helium nhiều màu lơ lửng trên bãi cỏ',
    hotspot: { x: 186, y: 100 },
  },
  'glass-of-water': {
    label: 'Ly nước trong có ống hút đặt trên bàn, nắng chiếu qua cửa sổ',
    hotspot: { x: 160, y: 128 },
  },
  'soda-can': {
    label:
      'Lon nước cam có ga vừa mở, bọt trắng và bọt khí trào lên khỏi miệng lon, bên cạnh là ly nước ngọt sủi bọt',
    hotspot: { x: 137, y: 48 },
  },
  rocket: {
    label: 'Tên lửa trắng mũi đỏ rời bệ phóng, phụt lửa và cuộn mây trắng xoá dưới trời xanh',
    hotspot: { x: 160, y: 176 },
  },
  'salt-shaker': {
    label: 'Lọ muối nghiêng rắc những hạt muối trắng xuống bát canh nóng bốc khói trên bàn bếp',
    hotspot: { x: 176, y: 114 },
  },
  'biogas-stove': {
    label: 'Nồi đun trên bếp biogas với ngọn lửa xanh',
    hotspot: { x: 160, y: 132 },
  },
  candle: {
    label: 'Cây nến đang cháy toả quầng sáng ấm, bên cạnh có hộp diêm và chiếc lọ thuỷ tinh úp',
    hotspot: { x: 160, y: 72 },
  },
  'snack-bag': {
    label: 'Gói bim bim màu tím phồng căng đứng trên bàn, bên cạnh vài miếng khoai tây chiên vàng',
    hotspot: { x: 158, y: 100 },
  },
  'rice-field': {
    label:
      'Bác nông dân đội nón lá rải phân đạm trên ruộng lúa xanh, cạnh bao phân mở miệng đầy hạt trắng',
    hotspot: { x: 209, y: 96 },
  },
  'coal-stove': {
    label:
      'Bếp than tổ ong đang cháy đỏ trong căn phòng đóng kín cửa vào ban đêm, làn khí xám mờ bốc lên',
    hotspot: { x: 160, y: 68 },
  },
  'hand-sanitizer': {
    label: 'Chai gel rửa tay khô có vòi nhấn, một giọt gel xanh rơi xuống lòng bàn tay đang ngửa',
    hotspot: { x: 120, y: 152 },
  },
  toothpaste: {
    label:
      'Tuýp kem đánh răng bóp dải kem sọc đỏ xanh lên bàn chải, phía sau là cốc súc miệng và gương',
    hotspot: { x: 108, y: 108 },
  },
  'ice-cubes': {
    label:
      'Ba viên nước đá to xếp chồng trên bàn bếp, một viên nhỏ bên cạnh đang tan thành vũng nước',
    hotspot: { x: 148, y: 88 },
  },
  'boiling-kettle': {
    label: 'Ấm nước màu đỏ đang sôi trên bếp ga lửa xanh, làn sương trắng bốc lên phía trên vòi ấm',
    hotspot: { x: 97, y: 76 },
  },
  'wet-clothes': {
    label:
      'Áo phông, khăn tắm và đôi tất còn ướt phơi trên dây ngoài trời nắng, nước nhỏ giọt xuống cỏ',
    hotspot: { x: 160, y: 142 },
  },
  'sugar-tea': {
    label:
      'Cốc trà thuỷ tinh đang được khuấy bằng thìa, các viên đường tan dần trong trà, bên cạnh là hũ đường',
    hotspot: { x: 138, y: 146 },
  },
  'frying-egg': {
    label:
      'Quả trứng ốp la đang rán trong chảo trên bếp ga, lòng trắng đã chín trắng đục quanh lòng đỏ',
    hotspot: { x: 120, y: 104 },
  },
  perfume: {
    label: 'Lọ nước hoa đang xịt ra một làn sương trắng, hương lan dần khắp phòng',
    hotspot: { x: 206, y: 64 },
  },
  'vinegar-volcano': {
    label:
      'Mô hình núi lửa trên khay đang phun bọt trắng hồng chảy xuống sườn núi, bên cạnh là chai giấm và một thìa baking soda',
    hotspot: { x: 152, y: 68 },
  },
  sparkler: {
    label:
      'Bàn tay cầm que pháo bông cháy sáng trắng, toé tia lửa giữa trời đêm Tết có đèn lồng đỏ',
    hotspot: { x: 146, y: 78 },
  },
  'charcoal-grill': {
    label:
      'Bếp nướng than hoa lúc chiều tối, than hồng rực dưới ba xiên thịt nướng, khói mỏng bay lên',
    hotspot: { x: 139, y: 101 },
  },
  'hydrogen-peroxide': {
    label: 'Chai oxy già màu nâu và cục bông gòn đặt cạnh đầu gối bị xước đang sủi bọt trắng',
    hotspot: { x: 196, y: 104 },
  },
  'baking-cake': {
    label:
      'Chiếc bánh bông lan vàng mới nướng đã cắt một miếng, lộ ruột bánh xốp đầy lỗ khí, bên cạnh là hộp và thìa baking soda',
    hotspot: { x: 86, y: 178 },
  },
  'vinegar-bottle': {
    label: 'Chai thuỷ tinh đựng giấm vàng nhạt ngâm tỏi ớt trên bàn bếp, bên cạnh là bát đồ chua',
    hotspot: { x: 166, y: 106 },
  },
}
