import type { SceneId } from '@funchem/content/lib'
import dynamic from 'next/dynamic'
import type { ComponentType } from 'react'
import { cn } from '@/lib/cn'
import { coreMeta } from './meta/core'
import { unit05Meta } from './meta/unit-05'
import { unit06Meta } from './meta/unit-06'
import { unit07Meta } from './meta/unit-07'
import { unit08Meta } from './meta/unit-08'
import { unit09Meta } from './meta/unit-09'
import { unit10Meta } from './meta/unit-10'
import type { SceneMeta } from './scene-def'

export type { SceneMeta } from './scene-def'

type PackProps = { id: never; label?: string | undefined }

/**
 * Phần vẽ của các cảnh, chia thành gói: Unit 1-4 chung một gói, từ Unit 5 mỗi Unit một gói.
 * Mỗi gói là một phần JavaScript riêng, trình duyệt chỉ tải gói mà trang đang xem dùng tới,
 * nên thêm Unit mới không làm các trang khác nặng thêm.
 * Thêm Unit: tạo meta/unit-XX.ts, packs/unit-XX.tsx rồi đăng kí ở hai bảng dưới đây.
 */
const PACKS = {
  core: dynamic(() => import('./packs/core')),
  unit05: dynamic(() => import('./packs/unit-05')),
  unit06: dynamic(() => import('./packs/unit-06')),
  unit07: dynamic(() => import('./packs/unit-07')),
  unit08: dynamic(() => import('./packs/unit-08')),
  unit09: dynamic(() => import('./packs/unit-09')),
  unit10: dynamic(() => import('./packs/unit-10')),
}

type PackName = keyof typeof PACKS

const inPack = <K extends string>(pack: PackName, meta: Record<K, SceneMeta>) =>
  Object.fromEntries(
    Object.entries<SceneMeta>(meta).map(([id, m]) => [id, { ...m, pack }]),
  ) as Record<K, SceneMeta & { pack: PackName }>

/**
 * Mọi cảnh đời sống. Kiểu Record<SceneId, …> bảo đảm nội dung không thể
 * tham chiếu tới một cảnh chưa được khai báo.
 */
export const SCENES: Record<SceneId, SceneMeta & { pack: PackName }> = {
  ...inPack('core', coreMeta),
  ...inPack('unit05', unit05Meta),
  ...inPack('unit06', unit06Meta),
  ...inPack('unit07', unit07Meta),
  ...inPack('unit08', unit08Meta),
  ...inPack('unit09', unit09Meta),
  ...inPack('unit10', unit10Meta),
}

/** Phần vẽ của một cảnh, lấp đầy khung cha. `label` bỏ trống thì cảnh ẩn khỏi trình đọc màn hình. */
export function SceneArt({ id, label }: { id: SceneId; label?: string | undefined }) {
  const Pack = PACKS[SCENES[id].pack] as ComponentType<PackProps>
  return <Pack id={id as never} label={label} />
}

export interface SceneViewProps {
  id: SceneId
  className?: string
  /** đứng yên, dùng cho ảnh thu nhỏ */
  still?: boolean
  /** ẩn khỏi trình đọc màn hình khi đã có chữ mô tả bên cạnh */
  decorative?: boolean
  /** lấp đầy khung cha (cảnh tự cắt quanh tâm) thay vì giữ tỉ lệ 8:5 */
  fill?: boolean
}

/** Hiển thị một cảnh, mặc định trong khung tỉ lệ 8:5. */
export function SceneView({
  id,
  className,
  still = false,
  decorative = false,
  fill = false,
}: SceneViewProps) {
  return (
    <div
      className={cn(
        'overflow-hidden',
        fill ? 'h-full w-full' : 'aspect-[8/5]',
        still && 'scene-still',
        className,
      )}
    >
      <SceneArt id={id} label={decorative ? undefined : SCENES[id].label} />
    </div>
  )
}
