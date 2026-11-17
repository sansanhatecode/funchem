import {
  content,
  type Exercise,
  type IntroCard,
  type Molecule,
  type Reaction,
} from '@funchem/content'
import type { ContentSlice, ExercisesBundle, LessonBundle, OutlineUnit } from './content-types'
import { lessonScene } from './lesson-scene'

/**
 * Cắt kho nội dung thành từng phần nhỏ cho trình duyệt. File này chỉ chạy ở server:
 * nó là nơi duy nhất (cùng các trang server) được nhập cả kho `content`.
 */

function exerciseMoleculeIds(ex: Exercise): string[] {
  const ids: (string | undefined)[] = []
  switch (ex.type) {
    case 'mcq':
      ids.push(ex.visual?.moleculeId, ...ex.options.map((o) => o.moleculeId))
      break
    case 'true-false':
      ids.push(ex.visual?.moleculeId)
      break
    case 'match-pairs':
      for (const p of ex.pairs) ids.push(p.left.moleculeId, p.right.moleculeId)
      break
    case 'build-molecule':
      ids.push(ex.targetMoleculeId)
      break
    case 'sort':
      ids.push(...ex.items.map((i) => i.moleculeId))
      break
    case 'order-steps':
      ids.push(...ex.steps.map((s) => s.moleculeId))
      break
    default:
      break
  }
  return ids.filter((id): id is string => Boolean(id))
}

/** Gom đủ phân tử và phản ứng mà các bài tập, thẻ Khám phá và danh sách thêm cần tới. */
export function sliceFor(input: {
  exercises?: Exercise[]
  intro?: IntroCard | undefined
  moleculeIds?: string[]
  reactionIds?: string[]
}): ContentSlice {
  const moleculeIds = new Set(input.moleculeIds)
  const reactionIds = new Set(input.reactionIds)
  for (const ex of input.exercises ?? []) {
    for (const id of exerciseMoleculeIds(ex)) moleculeIds.add(id)
    if (ex.type === 'balance-reaction') reactionIds.add(ex.reactionId)
  }
  const v = input.intro?.visual
  if (v?.type === 'molecule' || v?.type === 'states') moleculeIds.add(v.moleculeId)
  if (v?.type === 'reaction') reactionIds.add(v.reactionId)

  const reactions = [...reactionIds]
    .map((id) => content.reactions.get(id))
    .filter((r): r is Reaction => Boolean(r))
  for (const rx of reactions)
    for (const side of [...rx.reactants, ...rx.products]) moleculeIds.add(side.moleculeId)
  const molecules = [...moleculeIds]
    .map((id) => content.molecules.get(id))
    .filter((m): m is Molecule => Boolean(m))
  return { molecules, reactions }
}

export function lessonBundle(lessonId: string): LessonBundle | null {
  const entry = content.lessons.get(lessonId)
  if (!entry) return null
  const { lesson, unit } = entry
  const flat = content.units.flatMap((u) => u.lessons)
  const next = flat[flat.findIndex((l) => l.id === lessonId) + 1]
  return {
    lesson,
    unit: { order: unit.order, color: unit.color },
    next: next ? { id: next.id, title: next.title } : null,
    unitCount: content.units.length,
    slice: sliceFor({
      exercises: lesson.exercises,
      intro: lesson.intro,
      moleculeIds: lesson.unlocksMolecules,
    }),
  }
}

export function exercisesBundle(ids: string[]): ExercisesBundle {
  const exercises = ids
    .map((id) => content.exercises.get(id)?.exercise)
    .filter((e): e is Exercise => Boolean(e))
  return { exercises, unitCount: content.units.length, slice: sliceFor({ exercises }) }
}

export function outline(): OutlineUnit[] {
  return content.units.map((u) => ({
    id: u.id,
    order: u.order,
    title: u.title,
    tagline: u.tagline,
    color: u.color,
    lessons: u.lessons.map((l) => ({
      id: l.id,
      title: l.title,
      kind: l.kind,
      scene: lessonScene(l),
    })),
  }))
}
