import { z } from 'zod'
import { UNIT05_SCENE_IDS } from './scenes/unit-05.js'
import { UNIT06_SCENE_IDS } from './scenes/unit-06.js'
import { UNIT07_SCENE_IDS } from './scenes/unit-07.js'
import { UNIT08_SCENE_IDS } from './scenes/unit-08.js'

/**
 * Các cảnh minh hoạ đời sống. Nội dung chỉ tham chiếu theo id;
 * mỗi nền tảng (web, mobile) tự vẽ cảnh tương ứng.
 * Thêm id mới thì web sẽ báo lỗi biên dịch cho tới khi cảnh được vẽ.
 * Cảnh của Unit 1-4 nằm ở đây; từ Unit 5 mỗi Unit có một file riêng trong ./scenes.
 */
export const CORE_SCENE_IDS = [
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

export const SCENE_IDS = [
  ...CORE_SCENE_IDS,
  ...UNIT05_SCENE_IDS,
  ...UNIT06_SCENE_IDS,
  ...UNIT07_SCENE_IDS,
  ...UNIT08_SCENE_IDS,
] as const

export type CoreSceneId = (typeof CORE_SCENE_IDS)[number]
export type Unit05SceneId = (typeof UNIT05_SCENE_IDS)[number]
export type Unit06SceneId = (typeof UNIT06_SCENE_IDS)[number]
export type Unit07SceneId = (typeof UNIT07_SCENE_IDS)[number]
export type Unit08SceneId = (typeof UNIT08_SCENE_IDS)[number]
export type SceneId = (typeof SCENE_IDS)[number]
export const SceneIdSchema = z.enum(SCENE_IDS)
