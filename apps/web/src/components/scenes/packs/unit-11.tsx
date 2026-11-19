import type { Unit11SceneId } from '@funchem/content/lib'
import type { ComponentType } from 'react'
import { CoffeePhinScene } from '../art/coffee-phin'
import { FishTankScene } from '../art/fish-tank'
import { MeasuringJugScene } from '../art/measuring-jug'
import { MuddyRiverScene } from '../art/muddy-river'
import { RockSugarScene } from '../art/rock-sugar'
import { SaladDressingScene } from '../art/salad-dressing'
import { SalineBottleScene } from '../art/saline-bottle'
import { SaltAtBottomScene } from '../art/salt-at-bottom'
import { SaltFieldScene } from '../art/salt-field'
import { SeaWaveScene } from '../art/sea-wave'
import type { SceneProps } from '../kit'

/** Phần vẽ của các cảnh trong gói này: mỗi id trong danh sách cảnh phải có một mục ở đây. */
const art: Record<Unit11SceneId, ComponentType<SceneProps>> = {
  'sea-wave': SeaWaveScene,
  'fish-tank': FishTankScene,
  'salt-at-bottom': SaltAtBottomScene,
  'rock-sugar': RockSugarScene,
  'saline-bottle': SalineBottleScene,
  'measuring-jug': MeasuringJugScene,
  'muddy-river': MuddyRiverScene,
  'salad-dressing': SaladDressingScene,
  'coffee-phin': CoffeePhinScene,
  'salt-field': SaltFieldScene,
}

/** Vẽ một cảnh của gói. Cả gói được tải thành một phần riêng, chỉ khi trang có dùng tới. */
export default function ScenePack({
  id,
  label,
}: {
  id: Unit11SceneId
  label?: string | undefined
}) {
  const Art = art[id]
  return <Art label={label} />
}
