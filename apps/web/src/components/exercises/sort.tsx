'use client'

import {
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  useMemo,
  useRef,
  useState,
} from 'react'
import { cn } from '@/lib/cn'
import { seededShuffle } from '@/lib/shuffle'
import { type ExerciseProps, ItemContent, Mark } from './shared'

/** Vùng thả dành cho khay thẻ chưa xếp. */
const TRAY = 'tray'
/** Di quá ngưỡng này (px) mới tính là kéo, dưới ngưỡng vẫn là một lần chạm. */
const DRAG_THRESHOLD = 6

interface Drag {
  itemId: string
  pointerId: number
  el: HTMLElement
  startX: number
  startY: number
  moved: boolean
}

/**
 * Phân loại bằng kéo thả: kéo thẻ vào nhóm, kéo giữa các nhóm, hoặc kéo trả về khay.
 * Vẫn giữ cách chạm thẻ rồi chạm nhóm để dùng được bằng bàn phím và trình đọc màn hình.
 */
export function SortExercise({ exercise, value, onChange, checked }: ExerciseProps<'sort'>) {
  const [selected, setSelected] = useState<string | null>(null)
  const [dragging, setDragging] = useState<string | null>(null)
  const [over, setOver] = useState<string | null>(null)
  const drag = useRef<Drag | null>(null)
  /** vừa kéo xong: bỏ qua cú click mà trình duyệt bắn ra ngay sau khi nhả, cho tới lần nhấn kế tiếp */
  const justDragged = useRef(false)

  const items = useMemo(() => seededShuffle(exercise.items, exercise.id), [exercise])
  const assignments = value?.assignments ?? {}
  const tray = items.filter((i) => !assignments[i.id])

  const assign = (itemId: string, groupId: string | null) => {
    const next = { ...assignments }
    if (groupId) next[itemId] = groupId
    else delete next[itemId]
    onChange({ type: 'sort', assignments: next })
  }

  /** Vùng thả nằm dưới con trỏ, bỏ qua chính thẻ đang kéo. */
  const dropTargetAt = (x: number, y: number, el: HTMLElement) =>
    document
      .elementsFromPoint(x, y)
      .find((e) => !el.contains(e))
      ?.closest<HTMLElement>('[data-drop]')?.dataset.drop ?? null

  const endDrag = () => {
    const d = drag.current
    if (!d) return
    d.el.style.transform = ''
    if (d.el.hasPointerCapture(d.pointerId)) d.el.releasePointerCapture(d.pointerId)
    drag.current = null
    setDragging(null)
    setOver(null)
  }

  const dragHandlers = (itemId: string) => ({
    onPointerDown: (e: ReactPointerEvent<HTMLButtonElement>) => {
      if (checked || drag.current || (e.pointerType === 'mouse' && e.button !== 0)) return
      drag.current = {
        itemId,
        pointerId: e.pointerId,
        el: e.currentTarget,
        startX: e.clientX,
        startY: e.clientY,
        moved: false,
      }
      // giữ con trỏ ngay từ lúc nhấn: vuốt nhanh ra khỏi thẻ thì thẻ vẫn nhận được chuyển động
      e.currentTarget.setPointerCapture(e.pointerId)
    },
    onPointerMove: (e: ReactPointerEvent<HTMLButtonElement>) => {
      const d = drag.current
      if (!d || d.pointerId !== e.pointerId) return
      const dx = e.clientX - d.startX
      const dy = e.clientY - d.startY
      if (!d.moved) {
        if (Math.hypot(dx, dy) < DRAG_THRESHOLD) return
        d.moved = true
        setDragging(d.itemId)
        setSelected(null)
      }
      // ghi thẳng vào style để không vẽ lại cả bài ở mỗi lần di chuyển
      d.el.style.transform = `translate(${dx}px, ${dy}px) scale(1.06)`
      setOver(dropTargetAt(e.clientX, e.clientY, d.el))
    },
    onPointerUp: (e: ReactPointerEvent<HTMLButtonElement>) => {
      const d = drag.current
      if (!d || d.pointerId !== e.pointerId) return
      if (d.moved) {
        const target = dropTargetAt(e.clientX, e.clientY, d.el)
        justDragged.current = true
        endDrag()
        if (target) assign(d.itemId, target === TRAY ? null : target)
      } else {
        drag.current = null
      }
    },
    onPointerCancel: endDrag,
  })

  /** Chạy hành động của cú chạm, trừ khi cú click này là đuôi của một lần kéo. */
  const onTap = (action: () => void) => (e: ReactMouseEvent) => {
    // detail === 0 là click từ bàn phím, không bao giờ là đuôi của một lần kéo
    if (justDragged.current && e.detail !== 0) return
    action()
  }

  const chip = (itemId: string, extra?: string) =>
    cn(
      'touch-none rounded-xl border-2 bg-paper px-3 py-2 text-sm font-bold select-none',
      'disabled:pointer-events-none',
      dragging === itemId
        ? 'relative z-20 cursor-grabbing shadow-[0_10px_24px_rgb(31_41_55/0.22)]'
        : 'transition-transform duration-100 enabled:cursor-grab active:translate-y-[2px]',
      extra,
    )

  const zoneActive = (id: string) => over === id || (selected !== null && id !== TRAY)

  return (
    <div
      className="flex flex-col gap-4"
      // lần nhấn mới bắt đầu thì cú click thừa của lần kéo trước (nếu có) đã qua
      onPointerDownCapture={() => (justDragged.current = false)}
    >
      <p className="text-sm text-ink-soft">
        Kéo từng thẻ vào nhóm của nó. Bạn cũng có thể chạm thẻ rồi chạm vào tên nhóm.
      </p>

      <ul
        data-drop={TRAY}
        className={cn(
          'flex min-h-14 flex-wrap justify-center gap-2 rounded-2xl p-1 transition-colors duration-100',
          over === TRAY && 'bg-brand-soft/60',
        )}
        aria-label="Thẻ chưa xếp"
      >
        {tray.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              disabled={checked}
              data-item-id={item.id}
              aria-pressed={selected === item.id}
              {...dragHandlers(item.id)}
              onClick={onTap(() => setSelected(selected === item.id ? null : item.id))}
              className={chip(
                item.id,
                selected === item.id
                  ? 'border-brand bg-brand-soft ring-2 ring-brand/30'
                  : 'border-line',
              )}
            >
              <ItemContent item={item} moleculeSize={68} />
            </button>
          </li>
        ))}
        {tray.length === 0 && !checked && (
          <li className="self-center text-sm text-ink-soft">Đã xếp hết.</li>
        )}
      </ul>

      <div
        className={cn('grid gap-3', exercise.groups.length === 3 ? 'grid-cols-3' : 'grid-cols-2')}
      >
        {exercise.groups.map((g) => {
          const inGroup = items.filter((i) => assignments[i.id] === g.id)
          return (
            <div
              key={g.id}
              data-drop={g.id}
              className={cn(
                'flex min-h-36 flex-col rounded-2xl border-2 border-dashed p-2 transition-colors duration-100',
                over === g.id
                  ? 'border-brand bg-brand-soft'
                  : zoneActive(g.id) || dragging
                    ? 'border-brand bg-brand-soft/40'
                    : 'border-line bg-canvas',
              )}
            >
              <button
                type="button"
                data-group-id={g.id}
                disabled={checked || !selected}
                onClick={() => {
                  if (selected) {
                    assign(selected, g.id)
                    setSelected(null)
                  }
                }}
                className="rounded-xl px-2 py-1.5 text-center text-sm font-extrabold enabled:bg-brand enabled:text-ink"
                aria-label={selected ? `Xếp thẻ đang chọn vào nhóm ${g.label}` : `Nhóm ${g.label}`}
              >
                {g.label}
              </button>
              <ul
                className="mt-2 flex flex-1 flex-wrap content-start justify-center gap-2"
                aria-label={`Thẻ trong nhóm ${g.label}`}
              >
                {inGroup.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      disabled={checked}
                      data-item-id={item.id}
                      {...dragHandlers(item.id)}
                      onClick={onTap(() => assign(item.id, null))}
                      aria-label={`Lấy thẻ ra khỏi nhóm ${g.label}`}
                      className={chip(
                        item.id,
                        cn(
                          'flex items-center gap-1.5',
                          !checked && 'border-line',
                          checked &&
                            (item.groupId === g.id
                              ? 'border-good bg-good-soft'
                              : 'border-bad bg-bad-soft'),
                        ),
                      )}
                    >
                      <ItemContent item={item} moleculeSize={60} />
                      {checked && <Mark ok={item.groupId === g.id} />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
