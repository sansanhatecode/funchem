'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/cn'
import { SceneArt, SCENES, type SceneViewProps } from './index'

/**
 * Như SceneView, nhưng chỉ vẽ cảnh (và tải gói cảnh của nó) khi khung sắp lọt vào màn hình.
 * Dùng cho những chỗ xếp rất nhiều ảnh thu nhỏ như bản đồ học hay bộ sưu tập,
 * để trang không phải tải gói cảnh của mọi Unit ngay từ đầu.
 */
export function LazySceneView({
  id,
  className,
  still = false,
  decorative = false,
  fill = false,
}: SceneViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [near, setNear] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || near) return
    if (typeof IntersectionObserver === 'undefined') {
      setNear(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setNear(true)
      },
      { rootMargin: '400px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [near])

  return (
    <div
      ref={ref}
      className={cn(
        'overflow-hidden bg-canvas',
        fill ? 'h-full w-full' : 'aspect-[8/5]',
        still && 'scene-still',
        className,
      )}
      role={!near && !decorative ? 'img' : undefined}
      aria-label={!near && !decorative ? SCENES[id].label : undefined}
    >
      {near && <SceneArt id={id} label={decorative ? undefined : SCENES[id].label} />}
    </div>
  )
}
