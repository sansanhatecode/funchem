import Link from 'next/link'
import type { ReactNode } from 'react'
import { Mascot } from '@/components/mascot'
import { SceneView } from '@/components/scenes'
import { CheckIcon, LockIcon, StarIcon } from '@/components/ui/icons'
import { ProgressBar } from '@/components/ui/progress-bar'
import { cn } from '@/lib/cn'
import type { OutlineLesson, OutlineUnit } from '@/lib/content-types'

export type LessonStatus = 'locked' | 'available' | 'completed'

// Độ lệch ngang của từng nút, tạo đường đi uốn lượn
const OFFSETS = [0, 52, 84, 52, 0, -52, -84, -52]

const statusLabel: Record<LessonStatus, string> = {
  locked: 'chưa mở',
  available: 'sẵn sàng',
  completed: 'đã xong',
}

export function UnitPath({
  unit,
  statusOf,
  ratio,
  currentLessonId,
}: {
  unit: OutlineUnit
  statusOf: (lessonId: string) => LessonStatus
  ratio: number
  /** bài đang chờ học: có bong bóng "Bắt đầu" và linh vật đứng cạnh */
  currentLessonId: string | undefined
}) {
  const bannerScene = unit.lessons.map((l) => l.scene).find(Boolean)
  return (
    <section aria-labelledby={`unit-${unit.id}`} className="mt-8">
      <div
        className="flex items-stretch overflow-hidden rounded-(--radius-card) text-white"
        style={{ backgroundColor: unit.color }}
      >
        <div className="min-w-0 flex-1 p-5">
          <p className="text-sm font-bold opacity-90">Unit {unit.order}</p>
          <h2 id={`unit-${unit.id}`} className="text-xl font-extrabold">
            {unit.title}
          </h2>
          <p className="text-sm opacity-90">{unit.tagline}</p>
          <ProgressBar
            className="mt-3 bg-white/30"
            value={ratio}
            label={`Tiến độ Unit ${unit.order}`}
            color="#ffffff"
          />
        </div>
        {bannerScene && (
          <div className="hidden w-36 shrink-0 min-[420px]:block" aria-hidden="true">
            <SceneView id={bannerScene} still decorative className="h-full" />
          </div>
        )}
      </div>

      <ol className="mt-14 flex flex-col items-center gap-9">
        {unit.lessons.map((lesson, i) => {
          const offset = OFFSETS[i % OFFSETS.length]!
          const isCurrent = lesson.id === currentLessonId
          return (
            <li
              key={lesson.id}
              // bài đang chờ học có bong bóng "Bắt đầu" phía trên, cần thêm khoảng trống
              className={cn('relative', isCurrent && i > 0 && 'mt-8')}
              style={{ transform: `translateX(${offset}px)` }}
            >
              <LessonNode
                lesson={lesson}
                index={i}
                status={statusOf(lesson.id)}
                color={unit.color}
                isCurrent={isCurrent}
                // neo vào vòng tròn chứ không phải cả ô (tên bài dài làm ô rộng ra và đẩy hình ra ngoài màn hình)
                aside={
                  <>
                    <Sticker
                      lesson={lesson}
                      side={offset > 0 ? 'left' : 'right'}
                      locked={statusOf(lesson.id) === 'locked'}
                      index={i}
                    />
                    {isCurrent && (
                      <span
                        className={cn(
                          'absolute top-2 block',
                          offset > 0 ? 'left-full ml-2' : 'right-full mr-2',
                        )}
                        aria-hidden="true"
                      >
                        <Mascot mood="wave" size={48} />
                      </span>
                    )}
                  </>
                }
              />
            </li>
          )
        })}
      </ol>
    </section>
  )
}

/** Ảnh nhỏ của hiện tượng mà bài học nói tới, dán cạnh nút như một miếng sticker. */
function Sticker({
  lesson,
  side,
  locked,
  index,
}: {
  lesson: OutlineLesson
  side: 'left' | 'right'
  locked: boolean
  index: number
}) {
  const scene = lesson.scene
  if (!scene) return null
  return (
    <span
      aria-hidden="true"
      className={cn(
        'absolute top-1 block w-24 overflow-hidden rounded-2xl border-4 border-paper shadow-(--shadow-card)',
        side === 'left' ? 'right-full mr-5' : 'left-full ml-5',
        locked && 'opacity-50 grayscale',
      )}
      style={{ transform: `rotate(${index % 2 ? 5 : -5}deg)` }}
    >
      <SceneView id={scene} still decorative />
    </span>
  )
}

function LessonNode({
  lesson,
  index,
  status,
  color,
  isCurrent,
  aside,
}: {
  lesson: OutlineLesson
  index: number
  status: LessonStatus
  color: string
  isCurrent: boolean
  /** hình trang trí đặt cạnh vòng tròn */
  aside: ReactNode
}) {
  const isCheckpoint = lesson.kind === 'checkpoint'
  const locked = status === 'locked'
  const kind = isCheckpoint ? 'Kiểm tra' : `Bài ${index + 1}`

  const circle = (
    <span className="relative block">
      {aside}
      <span
        aria-hidden="true"
        className={cn(
          'grid place-items-center rounded-full text-2xl font-extrabold text-white transition-transform duration-100',
          isCheckpoint ? 'size-24' : 'size-20',
          locked
            ? 'bg-line text-ink-soft shadow-[0_6px_0_#cfd6df]'
            : 'shadow-[0_6px_0_rgb(0_0_0/0.18)] group-active:translate-y-[6px] group-active:shadow-none',
          status === 'completed' && 'ring-4 ring-sun ring-offset-2 ring-offset-canvas',
        )}
        style={locked ? undefined : { backgroundColor: color }}
      >
        {status === 'completed' ? (
          <CheckIcon weight="bold" size={34} />
        ) : locked ? (
          <LockIcon weight="fill" size={28} />
        ) : isCheckpoint ? (
          <StarIcon weight="fill" size={38} />
        ) : (
          index + 1
        )}
      </span>
    </span>
  )
  const caption = (
    <span
      className={cn(
        'mt-3 block max-w-40 text-center text-sm leading-tight font-bold',
        locked && 'text-ink-soft',
      )}
    >
      {lesson.title}
    </span>
  )

  if (locked) {
    return (
      <div
        className="flex flex-col items-center"
        aria-label={`${kind}: ${lesson.title}, ${statusLabel[status]}`}
      >
        {circle}
        {caption}
      </div>
    )
  }
  return (
    <Link
      href={`/learn/${lesson.id}`}
      className="group relative flex flex-col items-center rounded-3xl"
      aria-label={`${kind}: ${lesson.title}, ${statusLabel[status]}`}
    >
      {isCurrent && (
        <span
          aria-hidden="true"
          className="absolute -top-9 rounded-xl border-2 border-line bg-paper px-3 py-1 text-xs font-extrabold tracking-wide uppercase"
          style={{ color, animation: 'bounce-soft 1.6s ease-in-out infinite' }}
        >
          Bắt đầu
        </span>
      )}
      {circle}
      {caption}
    </Link>
  )
}
