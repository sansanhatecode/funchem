import { z } from 'zod'

/**
 * Các cảnh minh hoạ đời sống. Nội dung chỉ tham chiếu theo id;
 * mỗi nền tảng (web, mobile) tự vẽ cảnh tương ứng.
 * Thêm id mới ở đây thì web sẽ báo lỗi biên dịch cho tới khi cảnh được vẽ.
 */
export const SCENE_IDS = [
  'iron-nail',
  'rusty-nail',
  'gold-ring',
  'copper-wire',
  'charcoal-pencil',
  'classroom',
  'balloons',
  'glass-of-water',
  'soda-can',
  'rocket',
  'salt-shaker',
  'biogas-stove',
  'candle',
  'snack-bag',
  'rice-field',
  'coal-stove',
  'hand-sanitizer',
  'toothpaste',
  'ice-cubes',
  'boiling-kettle',
  'wet-clothes',
  'sugar-tea',
  'frying-egg',
  'perfume',
  'vinegar-volcano',
  'sparkler',
  'charcoal-grill',
  'hydrogen-peroxide',
  'baking-cake',
  'vinegar-bottle',
] as const

export type SceneId = (typeof SCENE_IDS)[number]
export const SceneIdSchema = z.enum(SCENE_IDS)
