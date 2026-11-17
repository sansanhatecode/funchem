'use client'

import type { SceneId } from '@funchem/content/lib'
import { MagnifyingGlassMinusIcon, MagnifyingGlassPlusIcon } from '@phosphor-icons/react'
import { type ReactNode, useState } from 'react'
import { cn } from '@/lib/cn'
import { SCENES } from './index'

export interface ZoomSceneProps {
  scene: SceneId
  /** thế giới hạt hiện ra sau khi phóng to; phải lấp đầy khung 8:5 */
  children: ReactNode
  /** điều khiển từ ngoài (không bắt buộc) */
  zoomed?: boolean
  onZoomChange?: (zoomed: boolean) => void
  className?: string
  /** chữ trên nút khi chưa phóng to */
  zoomLabel?: string
}

const ZOOM_MS = 900

/**
 * Hiện tượng trước, nguyên tử sau.
 * Ban đầu là cảnh đời sống. Bấm kính lúp: máy quay lao vào một điểm trên cảnh,
 * và thế giới hạt mở ra từ chính điểm đó.
 */
export function ZoomScene({
  scene,
  children,
  zoomed: controlled,
  onZoomChange,
  className,
  zoomLabel,
}: ZoomSceneProps) {
  const [inner, setInner] = useState(false)
  const zoomed = controlled ?? inner
  const def = SCENES[scene]
  const hx = (def.hotspot.x / 320) * 100
  const hy = (def.hotspot.y / 200) * 100

  const toggle = () => {
    const next = !zoomed
    setInner(next)
    onZoomChange?.(next)
  }

  return (
    <div className="flex flex-col gap-2.5">
      <div
        className={cn(
          'relative aspect-[8/5] w-full overflow-hidden rounded-2xl border border-line bg-canvas',
          className,
        )}
      >
        {/* cảnh đời sống */}
        <div
          className="absolute inset-0"
          aria-hidden={zoomed}
          style={{
            transformOrigin: `${hx}% ${hy}%`,
            transform: zoomed ? 'scale(9)' : 'scale(1)',
            opacity: zoomed ? 0 : 1,
            transition: `transform ${ZOOM_MS}ms cubic-bezier(0.6, 0, 0.3, 1), opacity ${ZOOM_MS * 0.55}ms ease ${zoomed ? ZOOM_MS * 0.35 : 0}ms`,
          }}
        >
          <def.Component label={def.label} />
        </div>

        {/* thế giới hạt, mở ra từ điểm phóng to */}
        <div
          className="absolute inset-0"
          aria-hidden={!zoomed}
          style={{
            clipPath: `circle(${zoomed ? 150 : 0}% at ${hx}% ${hy}%)`,
            transition: `clip-path ${ZOOM_MS}ms cubic-bezier(0.6, 0, 0.3, 1)`,
            visibility: zoomed ? 'visible' : 'hidden',
            transitionBehavior: 'allow-discrete',
          }}
        >
          <div
            className="h-full w-full"
            style={{
              transformOrigin: `${hx}% ${hy}%`,
              transform: zoomed ? 'scale(1)' : 'scale(0.35)',
              transition: `transform ${ZOOM_MS}ms cubic-bezier(0.2, 0.8, 0.3, 1)`,
            }}
          >
            {children}
          </div>
        </div>

        {/* vòng kính lúp nhấp nháy tại điểm sẽ phóng to */}
        {!zoomed && (
          <button
            type="button"
            onClick={toggle}
            aria-label="Phóng to vào điểm này"
            className="absolute size-12 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ left: `${hx}%`, top: `${hy}%` }}
          >
            <span className="absolute inset-0 rounded-full border-[3px] border-white shadow-[0_0_0_2px_rgb(31_42_55/0.25)]" />
            <span
              className="absolute inset-0 rounded-full border-[3px] border-white"
              style={{ animation: 'lens-ping 1.6s ease-out infinite' }}
            />
          </button>
        )}
      </div>

      {/* nút nằm dưới khung để không che vật đang xem */}
      <button
        type="button"
        onClick={toggle}
        aria-pressed={zoomed}
        className={cn(
          'flex min-h-11 items-center gap-2 self-center rounded-full px-5 text-sm font-extrabold',
          'shadow-[0_3px_0_rgb(0_0_0/0.18)] transition-transform duration-100 active:translate-y-[3px] active:shadow-none',
          zoomed ? 'border-2 border-line bg-paper text-ink' : 'bg-ink text-white',
        )}
      >
        {zoomed ? (
          <MagnifyingGlassMinusIcon size={20} weight="bold" />
        ) : (
          <MagnifyingGlassPlusIcon size={20} weight="bold" />
        )}
        {zoomed ? 'Thu nhỏ' : (zoomLabel ?? 'Phóng to tới nguyên tử')}
      </button>
    </div>
  )
}
