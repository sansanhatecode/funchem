import type { Unit07SceneId } from '@funchem/content/lib'
import type { ComponentType } from 'react'
import { AluminiumCansScene } from '../art/aluminium-cans'
import { BananaBagScene } from '../art/banana-bag'
import { BlastFurnaceScene } from '../art/blast-furnace'
import { CopperCoatedNailScene } from '../art/copper-coated-nail'
import { MetalKitchenScene } from '../art/metal-kitchen'
import { PlasticRecyclingScene } from '../art/plastic-recycling'
import { SodiumWaterScene } from '../art/sodium-water'
import { SteelBridgeScene } from '../art/steel-bridge'
import { ZincAcidScene } from '../art/zinc-acid'
import { ZincRoofScene } from '../art/zinc-roof'
import type { SceneProps } from '../kit'

/** Phần vẽ của các cảnh trong gói này: mỗi id trong danh sách cảnh phải có một mục ở đây. */
const art: Record<Unit07SceneId, ComponentType<SceneProps>> = {
  'metal-kitchen': MetalKitchenScene,
  'aluminium-cans': AluminiumCansScene,
  'zinc-acid': ZincAcidScene,
  'zinc-roof': ZincRoofScene,
  'sodium-water': SodiumWaterScene,
  'copper-coated-nail': CopperCoatedNailScene,
  'blast-furnace': BlastFurnaceScene,
  'steel-bridge': SteelBridgeScene,
  'banana-bag': BananaBagScene,
  'plastic-recycling': PlasticRecyclingScene,
}

/** Vẽ một cảnh của gói. Cả gói được tải thành một phần riêng, chỉ khi trang có dùng tới. */
export default function ScenePack({
  id,
  label,
}: {
  id: Unit07SceneId
  label?: string | undefined
}) {
  const Art = art[id]
  return <Art label={label} />
}
