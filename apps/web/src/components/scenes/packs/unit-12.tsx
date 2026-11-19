import type { Unit12SceneId } from '@funchem/content/lib'
import type { ComponentType } from 'react'
import { AlcoholLampScene } from '../art/alcohol-lamp'
import { BromineWaterScene } from '../art/bromine-water'
import { BurntToastScene } from '../art/burnt-toast'
import { GasStationScene } from '../art/gas-station'
import { HotpotGasStoveScene } from '../art/hotpot-gas-stove'
import { NailPolishRemoverScene } from '../art/nail-polish-remover'
import { OilRigScene } from '../art/oil-rig'
import { RefineryTowerScene } from '../art/refinery-tower'
import { VinegarJarScene } from '../art/vinegar-jar'
import type { SceneProps } from '../kit'

/** Phần vẽ của các cảnh trong gói này: mỗi id trong danh sách cảnh phải có một mục ở đây. */
const art: Record<Unit12SceneId, ComponentType<SceneProps>> = {
  'burnt-toast': BurntToastScene,
  'hotpot-gas-stove': HotpotGasStoveScene,
  'bromine-water': BromineWaterScene,
  'oil-rig': OilRigScene,
  'refinery-tower': RefineryTowerScene,
  'gas-station': GasStationScene,
  'alcohol-lamp': AlcoholLampScene,
  'vinegar-jar': VinegarJarScene,
  'nail-polish-remover': NailPolishRemoverScene,
}

/** Vẽ một cảnh của gói. Cả gói được tải thành một phần riêng, chỉ khi trang có dùng tới. */
export default function ScenePack({
  id,
  label,
}: {
  id: Unit12SceneId
  label?: string | undefined
}) {
  const Art = art[id]
  return <Art label={label} />
}
