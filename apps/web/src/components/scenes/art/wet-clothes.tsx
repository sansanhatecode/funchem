import { C, IndoorBg, Scene, type SceneProps } from '../kit'

// TODO(scene): bản tạm, chờ vẽ
export function WetClothesScene(props: SceneProps) {
  return (
    <Scene {...props}>
      <IndoorBg />
      <text x="160" y="104" textAnchor="middle" fontSize="16" fontWeight="700" fill={C.inkSoft}>
        wet-clothes
      </text>
    </Scene>
  )
}
