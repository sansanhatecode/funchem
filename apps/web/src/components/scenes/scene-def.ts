import type { ComponentType } from 'react'
import type { SceneProps } from './kit'

export interface SceneDef {
  Component: ComponentType<SceneProps>
  /** mô tả cảnh cho trình đọc màn hình */
  label: string
  /** điểm sẽ phóng to vào, theo toạ độ khung 320x200 */
  hotspot: { x: number; y: number }
}
