import type { CoreSceneId } from '@funchem/content/lib'
import type { ComponentType } from 'react'
import { BalloonsScene } from '../art/balloons'
import { BiogasStoveScene } from '../art/biogas-stove'
import { CandleScene } from '../art/candle'
import { CharcoalPencilScene } from '../art/charcoal-pencil'
import { ClassroomScene } from '../art/classroom'
import { CoalStoveScene } from '../art/coal-stove'
import { CopperWireScene } from '../art/copper-wire'
import { GlassOfWaterScene } from '../art/glass-of-water'
import { GoldRingScene } from '../art/gold-ring'
import { HandSanitizerScene } from '../art/hand-sanitizer'
import { IronNailScene, RustyNailScene } from '../art/nail'
import { RiceFieldScene } from '../art/rice-field'
import { RocketScene } from '../art/rocket'
import { SaltShakerScene } from '../art/salt-shaker'
import { SnackBagScene } from '../art/snack-bag'
import { SodaCanScene } from '../art/soda-can'
import { ToothpasteScene } from '../art/toothpaste'
import { IceCubesScene } from '../art/ice-cubes'
import { BoilingKettleScene } from '../art/boiling-kettle'
import { WetClothesScene } from '../art/wet-clothes'
import { SugarTeaScene } from '../art/sugar-tea'
import { FryingEggScene } from '../art/frying-egg'
import { PerfumeScene } from '../art/perfume'
import { VinegarVolcanoScene } from '../art/vinegar-volcano'
import { SparklerScene } from '../art/sparkler'
import { CharcoalGrillScene } from '../art/charcoal-grill'
import { HydrogenPeroxideScene } from '../art/hydrogen-peroxide'
import { BakingCakeScene } from '../art/baking-cake'
import { VinegarBottleScene } from '../art/vinegar-bottle'
import type { SceneProps } from '../kit'

/** Phần vẽ của các cảnh trong gói này: mỗi id trong danh sách cảnh phải có một mục ở đây. */
const art: Record<CoreSceneId, ComponentType<SceneProps>> = {
  'iron-nail': IronNailScene,
  'rusty-nail': RustyNailScene,
  'gold-ring': GoldRingScene,
  'copper-wire': CopperWireScene,
  'charcoal-pencil': CharcoalPencilScene,
  classroom: ClassroomScene,
  balloons: BalloonsScene,
  'glass-of-water': GlassOfWaterScene,
  'soda-can': SodaCanScene,
  rocket: RocketScene,
  'salt-shaker': SaltShakerScene,
  'biogas-stove': BiogasStoveScene,
  candle: CandleScene,
  'snack-bag': SnackBagScene,
  'rice-field': RiceFieldScene,
  'coal-stove': CoalStoveScene,
  'hand-sanitizer': HandSanitizerScene,
  toothpaste: ToothpasteScene,
  'ice-cubes': IceCubesScene,
  'boiling-kettle': BoilingKettleScene,
  'wet-clothes': WetClothesScene,
  'sugar-tea': SugarTeaScene,
  'frying-egg': FryingEggScene,
  perfume: PerfumeScene,
  'vinegar-volcano': VinegarVolcanoScene,
  sparkler: SparklerScene,
  'charcoal-grill': CharcoalGrillScene,
  'hydrogen-peroxide': HydrogenPeroxideScene,
  'baking-cake': BakingCakeScene,
  'vinegar-bottle': VinegarBottleScene,
}

/** Vẽ một cảnh của gói. Cả gói được tải thành một phần riêng, chỉ khi trang có dùng tới. */
export default function ScenePack({ id, label }: { id: CoreSceneId; label?: string | undefined }) {
  const Art = art[id]
  return <Art label={label} />
}
