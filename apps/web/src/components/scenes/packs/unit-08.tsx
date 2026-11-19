import type { Unit08SceneId } from '@funchem/content/lib'
import type { ComponentType } from 'react'
import { CurdledMilkScene } from '../art/curdled-milk'
import { FruitPlateScene } from '../art/fruit-plate'
import { IodinePotatoScene } from '../art/iodine-potato'
import { JoggingBreathScene } from '../art/jogging-breath'
import { OilOnWaterScene } from '../art/oil-on-water'
import { RiceBowlScene } from '../art/rice-bowl'
import { SportsDrinkScene } from '../art/sports-drink'
import { SunlitLeafScene } from '../art/sunlit-leaf'
import type { SceneProps } from '../kit'

/** Phần vẽ của các cảnh trong gói này: mỗi id trong danh sách cảnh phải có một mục ở đây. */
const art: Record<Unit08SceneId, ComponentType<SceneProps>> = {
  'jogging-breath': JoggingBreathScene,
  'fruit-plate': FruitPlateScene,
  'sunlit-leaf': SunlitLeafScene,
  'rice-bowl': RiceBowlScene,
  'iodine-potato': IodinePotatoScene,
  'oil-on-water': OilOnWaterScene,
  'curdled-milk': CurdledMilkScene,
  'sports-drink': SportsDrinkScene,
}

/** Vẽ một cảnh của gói. Cả gói được tải thành một phần riêng, chỉ khi trang có dùng tới. */
export default function ScenePack({
  id,
  label,
}: {
  id: Unit08SceneId
  label?: string | undefined
}) {
  const Art = art[id]
  return <Art label={label} />
}
