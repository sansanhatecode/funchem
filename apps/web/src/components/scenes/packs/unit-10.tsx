import type { Unit10SceneId } from '@funchem/content/lib'
import type { ComponentType } from 'react'
import { BalloonAndJugScene } from '../art/balloon-and-jug'
import { BalloonsRiseSinkScene } from '../art/balloons-rise-sink'
import { EggCartonDozenScene } from '../art/egg-carton-dozen'
import { GlucoseOnScaleScene } from '../art/glucose-on-scale'
import { HotpotGasCanScene } from '../art/hotpot-gas-can'
import { OneMoleSamplesScene } from '../art/one-mole-samples'
import { SandwichRecipeScene } from '../art/sandwich-recipe'
import type { SceneProps } from '../kit'

/** Phần vẽ của các cảnh trong gói này: mỗi id trong danh sách cảnh phải có một mục ở đây. */
const art: Record<Unit10SceneId, ComponentType<SceneProps>> = {
  'egg-carton-dozen': EggCartonDozenScene,
  'one-mole-samples': OneMoleSamplesScene,
  'glucose-on-scale': GlucoseOnScaleScene,
  'balloon-and-jug': BalloonAndJugScene,
  'balloons-rise-sink': BalloonsRiseSinkScene,
  'hotpot-gas-can': HotpotGasCanScene,
  'sandwich-recipe': SandwichRecipeScene,
}

/** Vẽ một cảnh của gói. Cả gói được tải thành một phần riêng, chỉ khi trang có dùng tới. */
export default function ScenePack({
  id,
  label,
}: {
  id: Unit10SceneId
  label?: string | undefined
}) {
  const Art = art[id]
  return <Art label={label} />
}
