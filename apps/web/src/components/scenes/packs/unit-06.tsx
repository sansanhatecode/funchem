import type { Unit06SceneId } from '@funchem/content/lib'
import type { ComponentType } from 'react'
import { BreadOvenScene } from '../art/bread-oven'
import { FirewoodStoveScene } from '../art/firewood-stove'
import { FizzingColdCupScene } from '../art/fizzing-cold-cup'
import { GasStoveWokScene } from '../art/gas-stove-wok'
import { LimeKilnScene } from '../art/lime-kiln'
import { OpenFridgeScene } from '../art/open-fridge'
import { PickleJarsScene } from '../art/pickle-jars'
import { PotatoPeroxideScene } from '../art/potato-peroxide'
import { PressureCookerScene } from '../art/pressure-cooker'
import type { SceneProps } from '../kit'

/** Phần vẽ của các cảnh trong gói này: mỗi id trong danh sách cảnh phải có một mục ở đây. */
const art: Record<Unit06SceneId, ComponentType<SceneProps>> = {
  'gas-stove-wok': GasStoveWokScene,
  'lime-kiln': LimeKilnScene,
  'fizzing-cold-cup': FizzingColdCupScene,
  'open-fridge': OpenFridgeScene,
  'pressure-cooker': PressureCookerScene,
  'firewood-stove': FirewoodStoveScene,
  'potato-peroxide': PotatoPeroxideScene,
  'bread-oven': BreadOvenScene,
  'pickle-jars': PickleJarsScene,
}

/** Vẽ một cảnh của gói. Cả gói được tải thành một phần riêng, chỉ khi trang có dùng tới. */
export default function ScenePack({
  id,
  label,
}: {
  id: Unit06SceneId
  label?: string | undefined
}) {
  const Art = art[id]
  return <Art label={label} />
}
