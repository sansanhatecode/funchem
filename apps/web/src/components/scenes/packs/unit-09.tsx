import type { Unit09SceneId } from '@funchem/content/lib'
import type { ComponentType } from 'react'
import { DesiccantBoxScene } from '../art/desiccant-box'
import { DiamondScaleScene } from '../art/diamond-scale'
import { NeonSignScene } from '../art/neon-sign'
import { PartyBalloonsScene } from '../art/party-balloons'
import { RottenEggScene } from '../art/rotten-egg'
import { SodiumStreetLampScene } from '../art/sodium-street-lamp'
import { SwimmingPoolScene } from '../art/swimming-pool'
import { TarnishedSilverScene } from '../art/tarnished-silver'
import type { SceneProps } from '../kit'

/** Phần vẽ của các cảnh trong gói này: mỗi id trong danh sách cảnh phải có một mục ở đây. */
const art: Record<Unit09SceneId, ComponentType<SceneProps>> = {
  'sodium-street-lamp': SodiumStreetLampScene,
  'neon-sign': NeonSignScene,
  'rotten-egg': RottenEggScene,
  'swimming-pool': SwimmingPoolScene,
  'tarnished-silver': TarnishedSilverScene,
  'desiccant-box': DesiccantBoxScene,
  'diamond-scale': DiamondScaleScene,
  'party-balloons': PartyBalloonsScene,
}

/** Vẽ một cảnh của gói. Cả gói được tải thành một phần riêng, chỉ khi trang có dùng tới. */
export default function ScenePack({
  id,
  label,
}: {
  id: Unit09SceneId
  label?: string | undefined
}) {
  const Art = art[id]
  return <Art label={label} />
}
