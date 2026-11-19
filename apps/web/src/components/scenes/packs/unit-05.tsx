import type { Unit05SceneId } from '@funchem/content/lib'
import type { ComponentType } from 'react'
import { AcidRainScene } from '../art/acid-rain'
import { AntacidScene } from '../art/antacid'
import { CabbageIndicatorScene } from '../art/cabbage-indicator'
import { EggshellVinegarScene } from '../art/eggshell-vinegar'
import { LimeAndVinegarScene } from '../art/lime-and-vinegar'
import { LimewashScene } from '../art/limewash'
import { LitmusPaperScene } from '../art/litmus-paper'
import { MetalInAcidScene } from '../art/metal-in-acid'
import { PhTestLemonadeScene } from '../art/ph-test-lemonade'
import { SoapBarScene } from '../art/soap-bar'
import type { SceneProps } from '../kit'

/** Phần vẽ của các cảnh trong gói này: mỗi id trong danh sách cảnh phải có một mục ở đây. */
const art: Record<Unit05SceneId, ComponentType<SceneProps>> = {
  'lime-and-vinegar': LimeAndVinegarScene,
  'metal-in-acid': MetalInAcidScene,
  limewash: LimewashScene,
  'soap-bar': SoapBarScene,
  'cabbage-indicator': CabbageIndicatorScene,
  'litmus-paper': LitmusPaperScene,
  'ph-test-lemonade': PhTestLemonadeScene,
  antacid: AntacidScene,
  'acid-rain': AcidRainScene,
  'eggshell-vinegar': EggshellVinegarScene,
}

/** Vẽ một cảnh của gói. Cả gói được tải thành một phần riêng, chỉ khi trang có dùng tới. */
export default function ScenePack({
  id,
  label,
}: {
  id: Unit05SceneId
  label?: string | undefined
}) {
  const Art = art[id]
  return <Art label={label} />
}
