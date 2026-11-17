'use client'

import { layoutReaction, REACTION_STEPS } from '@funchem/chem-ui'
import {
  elementLabel,
  ELEMENTS,
  equationText,
  type Reaction,
  type SceneId,
} from '@funchem/content/lib'
import { useEffect, useMemo, useState } from 'react'
import { ZoomScene } from '@/components/scenes/zoom-scene'
import { Button } from '@/components/ui/button'
import { ArrowCounterClockwiseIcon, ArrowRightIcon, PlayIcon } from '@/components/ui/icons'
import { cn } from '@/lib/cn'
import { MicroBackdrop } from './particle-view'
import { AtomShape, BondShape } from './shapes'
import { useContent } from '@/lib/content-context'

const FRAME = { width: 320, height: 200 }
const STAGE = { width: 320, height: 184 }
const STAGE_TOP = 8
const MOVE_MS = 900

export interface ReactionPlayerProps {
  reaction: Reaction
  /** hiện câu chuyện đời sống và dấu hiệu phản ứng bên dưới */
  showStory?: boolean
  /** cảnh mở đầu thay cho cảnh trong câu chuyện của phản ứng */
  scene?: SceneId | undefined
}

/**
 * Một phản ứng, nhìn từ ngoài vào trong.
 * Mở đầu là hiện tượng ngoài đời (đinh gỉ, bếp cháy). Bấm kính lúp để lao xuống cấp nguyên tử
 * và xem 4 bước: chất phản ứng → liên kết đứt → sắp xếp lại → sản phẩm.
 * Mỗi nguyên tử là một phần tử duy nhất di chuyển từ vị trí cũ sang vị trí mới,
 * nên người học thấy tận mắt không nguyên tử nào mất đi hay sinh ra.
 */
export function ReactionPlayer({
  reaction,
  showStory = false,
  scene: sceneOverride,
}: ReactionPlayerProps) {
  const content = useContent()
  const layout = useMemo(
    () => layoutReaction(reaction, content.molecules, STAGE),
    [reaction, content.molecules],
  )
  const scene = sceneOverride ?? reaction.story.illustration
  const [zoomed, setZoomed] = useState(!scene)
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(false)
  const last = REACTION_STEPS.length - 1

  useEffect(() => {
    if (!playing) return
    if (step >= last) {
      setPlaying(false)
      return
    }
    const t = setTimeout(() => setStep((s) => s + 1), MOVE_MS + 700)
    return () => clearTimeout(t)
  }, [playing, step, last])

  const current = REACTION_STEPS[step]!
  const equation = equationText(reaction, content.molecules)

  const stage = (
    <svg
      viewBox={`0 0 ${FRAME.width} ${FRAME.height}`}
      preserveAspectRatio="xMidYMid slice"
      className="block h-full w-full"
      role="img"
      aria-label={`Hoạt hình phản ứng ${reaction.name}: ${equation}. Bước ${step + 1}: ${current.title}.`}
    >
      <MicroBackdrop />
      <g transform={`translate(0 ${STAGE_TOP})`}>
        <g style={{ opacity: step === 0 ? 1 : 0, transition: 'opacity 300ms' }}>
          {layout.reactants.flatMap((m) => m.bonds.map((b) => <BondShape key={b.key} bond={b} />))}
        </g>
        <g
          style={{
            opacity: step === last ? 1 : 0,
            transition: `opacity 400ms ${step === last ? 200 : 0}ms`,
          }}
        >
          {layout.products.flatMap((m) => m.bonds.map((b) => <BondShape key={b.key} bond={b} />))}
        </g>
        {layout.atoms.map((a) => {
          const p = step === 0 ? a.from : step === 1 ? a.apart : a.to
          return (
            <g
              key={a.key}
              style={{
                transform: `translate(${p.x}px, ${p.y}px) scale(${p.r / 10})`,
                transition: `transform ${step === 1 ? 500 : MOVE_MS}ms cubic-bezier(0.45, 0, 0.2, 1)`,
              }}
            >
              <AtomShape element={a.element} r={10} />
            </g>
          )
        })}
      </g>
    </svg>
  )

  return (
    <div className="flex w-full flex-col gap-3">
      {scene ? (
        <ZoomScene
          scene={scene}
          zoomed={zoomed}
          zoomLabel="Phóng to xem phản ứng"
          onZoomChange={(z) => {
            setZoomed(z)
            setStep(0)
            // vừa lao xuống tới nơi là phản ứng tự chạy
            setPlaying(z)
          }}
        >
          {stage}
        </ZoomScene>
      ) : (
        <div className="aspect-[8/5] overflow-hidden rounded-2xl border border-line">{stage}</div>
      )}

      {!zoomed && (
        <div className="rounded-2xl border border-line bg-paper p-4">
          <p className="font-extrabold">{reaction.story.title}</p>
          <p className="mt-1 text-sm text-ink-soft">{reaction.story.description}</p>
        </div>
      )}

      {zoomed && (
        <>
          <p className="text-center text-lg font-extrabold tracking-wide">
            {equation}
            {reaction.condition && (
              <span className="ml-2 text-sm font-medium text-ink-soft">({reaction.condition})</span>
            )}
          </p>

          <ol className="flex items-center justify-center gap-2" aria-label="Các bước của phản ứng">
            {REACTION_STEPS.map((s, i) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => {
                    setPlaying(false)
                    setStep(i)
                  }}
                  aria-current={i === step ? 'step' : undefined}
                  className={cn(
                    'min-w-8 rounded-full px-3 py-1.5 text-xs font-bold whitespace-nowrap transition-colors',
                    i === step
                      ? 'bg-brand text-white'
                      : 'bg-line text-ink-soft hover:bg-brand-soft',
                  )}
                >
                  <span className="sr-only">Bước </span>
                  {i + 1}
                  {i === step ? `. ${s.title}` : <span className="sr-only">: {s.title}</span>}
                </button>
              </li>
            ))}
          </ol>
          <p className="min-h-10 text-center text-sm text-ink-soft" aria-live="polite">
            {current.caption}
          </p>

          <div className="flex justify-center gap-3">
            <Button
              variant="secondary"
              onClick={() => {
                setStep(0)
                setPlaying(true)
              }}
            >
              {step === 0 && !playing ? (
                <PlayIcon weight="fill" size={18} />
              ) : (
                <ArrowCounterClockwiseIcon weight="bold" size={18} />
              )}
              {step === 0 && !playing ? 'Phát' : 'Phát lại'}
            </Button>
            <Button
              onClick={() => {
                setPlaying(false)
                setStep((s) => (s >= last ? 0 : s + 1))
              }}
            >
              {step >= last ? 'Về đầu' : 'Bước tiếp'}
              {step < last && <ArrowRightIcon weight="bold" size={18} />}
            </Button>
          </div>

          <div className="rounded-2xl bg-brand-soft p-3 text-center text-sm">
            <p className="font-bold">Đếm nguyên tử: trước và sau bằng nhau</p>
            <ul className="mt-2 flex flex-wrap justify-center gap-2">
              {layout.counts.map((c) => (
                <li
                  key={c.element}
                  className="flex items-center gap-1.5 rounded-full bg-paper px-3 py-1 font-bold"
                >
                  <span
                    aria-hidden="true"
                    className="inline-block size-3 rounded-full border border-ink/20"
                    style={{ backgroundColor: ELEMENTS[c.element].color }}
                  />
                  {c.count} {elementLabel(c.element)}
                </li>
              ))}
            </ul>
          </div>

          {showStory && reaction.signs.length > 0 && (
            <div className="rounded-2xl border border-line bg-paper p-4">
              <p className="font-extrabold">Dấu hiệu bạn thấy được</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {reaction.signs.map((s) => (
                  <li key={s} className="rounded-full bg-canvas px-3 py-1 text-xs font-bold">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  )
}
