import {
  content,
  ELEMENTS,
  type ElementSymbol,
  equationText,
  type Exercise,
  formatFormula,
  type Lesson,
  type Molecule,
  moleculeLabel,
  parseFormula,
  type Unit,
} from '@funchem/content'
import { describeCorrectAnswer } from '@funchem/core'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MoleculeView } from '@/components/chem/molecule-view'
import { ItemContent } from '@/components/exercises/shared'
import { SceneView } from '@/components/scenes'
import { cn } from '@/lib/cn'
import { lessonScene } from '@/lib/lesson-scene'
import { seededShuffle } from '@/lib/shuffle'
import { PrintButton } from './print-button'

export const metadata: Metadata = { title: 'Toàn bộ nội dung' }

const TYPE_LABEL: Record<Exercise['type'], string> = {
  mcq: 'Trắc nghiệm',
  'true-false': 'Đúng hay sai',
  'match-pairs': 'Nối cặp',
  'build-molecule': 'Ghép phân tử',
  'balance-reaction': 'Cân bằng phản ứng',
  'fill-blank': 'Điền chỗ trống',
  sort: 'Phân loại',
  'order-steps': 'Sắp xếp thứ tự',
}

type Search = { unit?: string | undefined; answers?: string | undefined }

/**
 * Trang soát nội dung: toàn bộ kiến thức và câu hỏi của chương trình trên một trang,
 * kèm đáp án và giải thích. Lọc theo Unit, ẩn hiện đáp án, in được. Chỉ có ở môi trường phát triển.
 */
export default async function DevContentPage({ searchParams }: { searchParams: Promise<Search> }) {
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_ENABLE_DEV_PAGES !== '1')
    notFound()
  const { unit: unitParam, answers } = await searchParams
  const showAnswers = answers !== '0'
  const units = content.units.filter((u) => !unitParam || String(u.order) === unitParam)
  const href = (next: Search) => {
    const q = new URLSearchParams()
    const merged = { unit: unitParam, answers, ...next }
    if (merged.unit) q.set('unit', merged.unit)
    if (merged.answers === '0') q.set('answers', '0')
    const s = q.toString()
    return s ? `/dev/content?${s}` : '/dev/content'
  }
  const exerciseCount = units.reduce(
    (n, u) => n + u.lessons.reduce((m, l) => m + l.exercises.length, 0),
    0,
  )

  return (
    <div className="mx-auto max-w-4xl px-5 pb-20 print:max-w-none print:px-0">
      <header className="py-6">
        <h1 className="text-3xl font-extrabold">Toàn bộ nội dung FunChem</h1>
        <p className="mt-1 text-ink-soft">
          {units.length} Unit, {units.reduce((n, u) => n + u.lessons.length, 0)} bài,{' '}
          {exerciseCount} câu hỏi. Phiên bản nội dung {content.version}.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2 print:hidden">
          <Chip href={href({ unit: undefined })} active={!unitParam}>
            Tất cả
          </Chip>
          {content.units.map((u) => (
            <Chip
              key={u.id}
              href={href({ unit: String(u.order) })}
              active={unitParam === String(u.order)}
            >
              Unit {u.order}
            </Chip>
          ))}
          <span className="mx-1 h-6 w-px bg-line" aria-hidden="true" />
          <Chip href={href({ answers: showAnswers ? '0' : undefined })} active={false}>
            {showAnswers ? 'Ẩn đáp án' : 'Hiện đáp án'}
          </Chip>
          <PrintButton />
        </div>

        <nav
          aria-label="Mục lục"
          className="mt-5 rounded-2xl border border-line bg-paper p-4 print:hidden"
        >
          <p className="font-extrabold">Mục lục</p>
          <ul className="mt-2 grid gap-x-6 gap-y-1 sm:grid-cols-2">
            {units.map((u) => (
              <li key={u.id}>
                <a
                  href={`#${u.id}`}
                  className="font-bold text-brand-deep underline-offset-4 hover:underline"
                >
                  Unit {u.order}: {u.title}
                </a>
                <ul className="mt-1 mb-2 ml-4 text-sm text-ink-soft">
                  {u.lessons.map((l, i) => (
                    <li key={l.id}>
                      <a href={`#${l.id}`} className="underline-offset-4 hover:underline">
                        {l.kind === 'checkpoint' ? 'Kiểm tra' : `Bài ${i + 1}`}: {l.title} (
                        {l.exercises.length} câu)
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex flex-col gap-12">
        {units.map((u) => (
          <UnitBlock key={u.id} unit={u} showAnswers={showAnswers} />
        ))}
      </main>
    </div>
  )
}

function Chip({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'flex min-h-10 items-center rounded-full border-2 px-4 text-sm font-extrabold',
        active
          ? 'border-brand bg-brand-soft text-brand-deep'
          : 'border-line bg-paper hover:bg-canvas',
      )}
    >
      {children}
    </Link>
  )
}

function UnitBlock({ unit, showAnswers }: { unit: Unit; showAnswers: boolean }) {
  const conceptIds = [
    ...new Set(unit.lessons.flatMap((l) => l.exercises.flatMap((e) => e.conceptIds))),
  ]
  const moleculeIds = [...new Set(unit.lessons.flatMap((l) => l.unlocksMolecules))]
  const reactionIds = [
    ...new Set(
      unit.lessons.flatMap((l) => [
        ...(l.intro?.visual.type === 'reaction' ? [l.intro.visual.reactionId] : []),
        ...l.exercises.flatMap((e) => (e.type === 'balance-reaction' ? [e.reactionId] : [])),
      ]),
    ),
  ]

  return (
    <section id={unit.id} className="scroll-mt-4">
      <div
        className="rounded-(--radius-card) p-5 text-white print:border print:text-ink"
        style={{ backgroundColor: unit.color }}
      >
        <p className="text-sm font-bold opacity-90">Unit {unit.order}</p>
        <h2 className="text-2xl font-extrabold">{unit.title}</h2>
        <p className="opacity-90">{unit.tagline}</p>
      </div>

      <div className="mt-4 rounded-2xl border border-line bg-paper p-4">
        <h3 className="font-extrabold">Khái niệm trong Unit này</h3>
        <ul className="mt-2 flex flex-wrap gap-2">
          {conceptIds.map((id) => (
            <li key={id} className="rounded-full bg-canvas px-3 py-1 text-sm font-bold">
              {content.concepts.get(id)?.title ?? id}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-col gap-10">
        {unit.lessons.map((lesson, i) => (
          <LessonBlock
            key={lesson.id}
            lesson={lesson}
            index={i}
            color={unit.color}
            showAnswers={showAnswers}
          />
        ))}
      </div>

      {moleculeIds.length > 0 && (
        <div className="mt-10">
          <h3 className="text-xl font-extrabold">Phân tử mở khoá trong Unit {unit.order}</h3>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {moleculeIds.map((id) => {
              const m = content.molecules.get(id)
              return m ? <MoleculeCard key={id} molecule={m} /> : null
            })}
          </ul>
        </div>
      )}

      {reactionIds.length > 0 && (
        <div className="mt-10">
          <h3 className="text-xl font-extrabold">Phản ứng dùng trong Unit {unit.order}</h3>
          <ul className="mt-3 flex flex-col gap-3">
            {reactionIds.map((id) => {
              const rx = content.reactions.get(id)
              if (!rx) return null
              return (
                <li
                  key={id}
                  className="break-inside-avoid rounded-2xl border border-line bg-paper p-4"
                >
                  <p className="font-extrabold">
                    {rx.name}: {equationText(rx, content.molecules)}
                    {rx.condition && (
                      <span className="font-medium text-ink-soft"> ({rx.condition})</span>
                    )}
                  </p>
                  <p className="mt-1 text-sm">
                    <span className="font-bold">{rx.story.title}. </span>
                    {rx.story.description}
                  </p>
                  {rx.signs.length > 0 && (
                    <p className="mt-1 text-sm text-ink-soft">Dấu hiệu: {rx.signs.join(', ')}.</p>
                  )}
                  <Id>{rx.id}</Id>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </section>
  )
}

function MoleculeCard({ molecule: m }: { molecule: Molecule }) {
  const parts = (Object.entries(parseFormula(m.formula)) as [ElementSymbol, number][])
    .map(([el, n]) => `${n} ${ELEMENTS[el].name}`)
    .join(', ')
  return (
    <li className="flex break-inside-avoid gap-3 rounded-2xl border border-line bg-paper p-3">
      <MoleculeView molecule={m} size={72} decorative />
      <div className="min-w-0 text-sm">
        <p className="font-extrabold">
          {moleculeLabel(m)}{' '}
          <span className="font-bold text-ink-soft">{formatFormula(m.formula)}</span>
        </p>
        <p className="text-ink-soft">
          {{ solid: 'Thể rắn', liquid: 'Thể lỏng', gas: 'Thể khí' }[m.state]}. Gồm {parts}.
        </p>
        {m.lifeExamples.map((ex) => (
          <p key={ex.title} className="mt-1">
            <span className="font-bold">{ex.title}: </span>
            {ex.description}
          </p>
        ))}
        {m.funFact && <p className="mt-1 text-ink-soft">Bạn có biết? {m.funFact}</p>}
        <Id>{m.id}</Id>
      </div>
    </li>
  )
}

function LessonBlock({
  lesson,
  index,
  color,
  showAnswers,
}: {
  lesson: Lesson
  index: number
  color: string
  showAnswers: boolean
}) {
  const scene = lessonScene(lesson)
  const v = lesson.intro?.visual
  const zoomTarget = !v
    ? null
    : v.type === 'molecule' || v.type === 'states'
      ? `${v.type === 'states' ? 'ba trạng thái của ' : ''}${moleculeLabel(content.molecules.get(v.moleculeId) ?? { name: v.moleculeId })}`
      : v.type === 'reaction'
        ? `phản ứng ${equationText(content.reactions.get(v.reactionId)!, content.molecules)}`
        : v.type === 'periodic-table'
          ? 'bảng tuần hoàn'
          : v.type === 'ph-scale'
            ? `thang pH (${v.items.map((it) => `${it.label} ${it.ph}`).join(', ')})`
            : `bên trong nguyên tử ${ELEMENTS[v.element].name}`

  return (
    <article id={lesson.id} className="scroll-mt-4">
      <header className="border-l-8 pl-4" style={{ borderColor: color }}>
        <p className="text-sm font-bold text-ink-soft">
          {lesson.kind === 'checkpoint' ? 'Bài kiểm tra' : `Bài ${index + 1}`} ·{' '}
          {lesson.exercises.length} câu · {lesson.baseXp} XP
          {lesson.unlocksMolecules.length > 0 &&
            ` · mở khoá: ${lesson.unlocksMolecules.map((id) => content.molecules.get(id)?.name ?? id).join(', ')}`}
        </p>
        <h3 className="text-xl font-extrabold">{lesson.title}</h3>
        <Id>{lesson.id}</Id>
      </header>

      {lesson.intro && (
        <div className="mt-4 break-inside-avoid rounded-2xl bg-brand-soft p-4">
          <p className="text-sm font-extrabold text-brand-deep">Kiến thức mở đầu</p>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            {scene && (
              <SceneView
                id={scene}
                still
                className="w-full shrink-0 rounded-xl border border-line sm:w-56"
              />
            )}
            <div className="min-w-0">
              <p className="text-lg font-extrabold">{lesson.intro.title}</p>
              {lesson.intro.story.map((p) => (
                <p key={p} className="mt-2">
                  {p}
                </p>
              ))}
              {zoomTarget && (
                <p className="mt-2 text-sm text-ink-soft">
                  Phóng to từ cảnh này vào: {zoomTarget}.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <ol className="mt-4 flex flex-col gap-3">
        {lesson.exercises.map((ex, i) => (
          <ExerciseBlock key={ex.id} exercise={ex} number={i + 1} showAnswers={showAnswers} />
        ))}
      </ol>
    </article>
  )
}

function Id({ children }: { children: string }) {
  return <p className="mt-1 font-mono text-xs text-ink-soft/70">{children}</p>
}

function Answer({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-2 rounded-xl bg-good-soft px-3 py-2 text-sm">
      <span className="font-extrabold text-good">Đáp án: </span>
      {children}
    </p>
  )
}

function ExerciseBlock({
  exercise: ex,
  number,
  showAnswers,
}: {
  exercise: Exercise
  number: number
  showAnswers: boolean
}) {
  return (
    <li className="break-inside-avoid rounded-2xl border border-line bg-paper p-4">
      <p className="flex flex-wrap items-center gap-x-2 text-xs font-bold text-ink-soft">
        <span className="grid size-6 place-items-center rounded-full bg-ink text-white">
          {number}
        </span>
        <span className="rounded-full bg-canvas px-2 py-0.5">{TYPE_LABEL[ex.type]}</span>
        <span className="font-mono font-normal opacity-70">{ex.id}</span>
      </p>
      <p className="mt-2 text-lg font-extrabold">{ex.prompt}</p>

      {(ex.type === 'mcq' || ex.type === 'true-false') && ex.visual && (
        <div className="mt-2 inline-block rounded-xl border border-line bg-canvas p-2">
          <ItemContent item={ex.visual} moleculeSize={96} />
        </div>
      )}

      <ExerciseBody exercise={ex} showAnswers={showAnswers} />

      {showAnswers && (
        <p className="mt-2 text-sm">
          <span className="font-extrabold">Giải thích: </span>
          {ex.explanation}
        </p>
      )}
      {ex.conceptIds.length > 0 && (
        <p className="mt-2 text-xs text-ink-soft">
          Khái niệm: {ex.conceptIds.map((id) => content.concepts.get(id)?.title ?? id).join(', ')}
        </p>
      )}
    </li>
  )
}

function ExerciseBody({ exercise: ex, showAnswers }: { exercise: Exercise; showAnswers: boolean }) {
  switch (ex.type) {
    case 'mcq':
      return (
        <ol className="mt-2 grid gap-2 sm:grid-cols-2">
          {ex.options.map((o, i) => {
            const correct = showAnswers && o.id === ex.correctOptionId
            return (
              <li
                key={o.id}
                className={cn(
                  'flex items-center gap-2 rounded-xl border-2 px-3 py-2',
                  correct ? 'border-good bg-good-soft font-bold' : 'border-line',
                )}
              >
                <span className="font-extrabold">{String.fromCharCode(65 + i)}.</span>
                <ItemContent item={o} moleculeSize={64} />
                {correct && <span className="ml-auto text-sm font-extrabold text-good">Đúng</span>}
              </li>
            )
          })}
        </ol>
      )

    case 'true-false':
      return showAnswers ? (
        <Answer>{ex.answer ? 'Đúng' : 'Sai'}</Answer>
      ) : (
        <p className="mt-2 text-sm text-ink-soft">Đúng hay sai?</p>
      )

    case 'match-pairs': {
      const rights = showAnswers
        ? ex.pairs.map((p) => p.right)
        : seededShuffle(
            ex.pairs.map((p) => p.right),
            ex.id,
          )
      return (
        <table className="mt-2 w-full border-separate border-spacing-y-1 text-sm">
          <caption className="sr-only">{showAnswers ? 'Các cặp đúng' : 'Hai cột cần nối'}</caption>
          <tbody>
            {ex.pairs.map((p, i) => (
              <tr key={p.left.id}>
                <td className="w-1/2 rounded-l-xl border-2 border-r-0 border-line px-3 py-2 font-bold">
                  <ItemContent item={p.left} moleculeSize={56} />
                </td>
                <td
                  className={cn(
                    'rounded-r-xl border-2 px-3 py-2',
                    showAnswers ? 'border-good bg-good-soft' : 'border-line',
                  )}
                >
                  <ItemContent item={rights[i]!} moleculeSize={56} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    }

    case 'build-molecule': {
      const target = content.molecules.get(ex.targetMoleculeId)
      const pool = (Object.entries(ex.availableAtoms) as [ElementSymbol, number][])
        .map(([el, n]) => `${ELEMENTS[el].name} × ${n}`)
        .join(', ')
      return (
        <div className="mt-2 text-sm">
          <p>
            <span className="font-bold">Nguyên tử được cấp: </span>
            {pool}
          </p>
          {showAnswers && target && (
            <div className="mt-2 flex items-center gap-3 rounded-xl bg-good-soft px-3 py-2">
              <MoleculeView molecule={target} size={64} decorative />
              <p>
                <span className="font-extrabold text-good">Đáp án: </span>
                {describeCorrectAnswer(ex, content)}
              </p>
            </div>
          )}
        </div>
      )
    }

    case 'balance-reaction': {
      const rx = content.reactions.get(ex.reactionId)
      if (!rx) return null
      const ones = { reactants: rx.reactants.map(() => 1), products: rx.products.map(() => 1) }
      return (
        <div className="mt-2 text-sm">
          <p>
            <span className="font-bold">Phương trình chưa cân bằng: </span>
            {equationText(rx, content.molecules, ones)}
          </p>
          {showAnswers && <Answer>{equationText(rx, content.molecules)}</Answer>}
        </div>
      )
    }

    case 'fill-blank':
      return (
        <div className="mt-2 text-sm">
          <p className="rounded-xl border-2 border-line px-3 py-2 text-base">
            {ex.template.replace(/___/g, '______')}
          </p>
          {ex.blanks.map((b, i) => (
            <p key={i} className="mt-1 text-ink-soft">
              {ex.blanks.length > 1 ? `Chỗ trống ${i + 1}: ` : 'Các từ để chọn: '}
              {b.wordBank ? b.wordBank.join(' / ') : 'tự gõ'}
            </p>
          ))}
          {showAnswers && <Answer>{describeCorrectAnswer(ex, content)}</Answer>}
        </div>
      )

    case 'sort':
      return (
        <div
          className={cn(
            'mt-2 grid gap-2 text-sm',
            ex.groups.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2',
          )}
        >
          {showAnswers ? (
            ex.groups.map((g) => (
              <div key={g.id} className="rounded-xl border-2 border-good bg-good-soft p-2">
                <p className="font-extrabold">{g.label}</p>
                <ul className="mt-1 flex flex-wrap gap-2">
                  {ex.items
                    .filter((it) => it.groupId === g.id)
                    .map((it) => (
                      <li key={it.id} className="rounded-lg bg-paper px-2 py-1">
                        <ItemContent item={it} moleculeSize={48} />
                      </li>
                    ))}
                </ul>
              </div>
            ))
          ) : (
            <>
              <p className="sm:col-span-full">
                <span className="font-bold">Nhóm: </span>
                {ex.groups.map((g) => g.label).join(' / ')}
              </p>
              <ul className="flex flex-wrap gap-2 sm:col-span-full">
                {ex.items.map((it) => (
                  <li key={it.id} className="rounded-lg border-2 border-line px-2 py-1">
                    <ItemContent item={it} moleculeSize={48} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )

    case 'order-steps': {
      const steps = showAnswers ? ex.steps : seededShuffle(ex.steps, ex.id)
      return (
        <ol className="mt-2 flex flex-col gap-1 text-sm">
          {steps.map((s, i) => (
            <li
              key={s.id}
              className={cn(
                'flex items-center gap-2 rounded-xl border-2 px-3 py-2',
                showAnswers ? 'border-good bg-good-soft' : 'border-line',
              )}
            >
              <span className="font-extrabold">{showAnswers ? `${i + 1}.` : '•'}</span>
              <ItemContent item={s} moleculeSize={48} />
            </li>
          ))}
        </ol>
      )
    }
  }
}
