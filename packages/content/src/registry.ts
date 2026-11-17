import { concepts as rawConcepts } from './data/concepts/index.js'
import { molecules as rawMolecules } from './data/molecules/index.js'
import { reactions as rawReactions } from './data/reactions/index.js'
import { units as rawUnits } from './data/units/index.js'
import { countAtoms, parseFormula, sameCounts } from './formula.js'
import {
  ConceptSchema,
  type Exercise,
  type Lesson,
  MoleculeSchema,
  ReactionSchema,
  type Unit,
  UnitSchema,
  type Molecule,
  type Reaction,
  type Concept,
} from './schema/index.js'

/** Phiên bản nội dung, tăng khi thay đổi bài học đã phát hành. Lưu kèm mỗi lần làm bài. */
export const CONTENT_VERSION = '2026.11.2'

export interface ContentRegistry {
  version: string
  units: Unit[]
  molecules: Map<string, Molecule>
  reactions: Map<string, Reaction>
  concepts: Map<string, Concept>
  lessons: Map<string, { lesson: Lesson; unit: Unit; index: number }>
  exercises: Map<string, { exercise: Exercise; lesson: Lesson }>
}

export class ContentValidationError extends Error {
  constructor(public readonly problems: string[]) {
    super(`Nội dung không hợp lệ:\n- ${problems.join('\n- ')}`)
    this.name = 'ContentValidationError'
  }
}

/** Xây registry từ dữ liệu thô, kiểm tra schema và tham chiếu chéo. Ném lỗi nếu có vấn đề. */
export function buildRegistry(input: {
  units: unknown[]
  molecules: unknown[]
  reactions: unknown[]
  concepts: unknown[]
}): ContentRegistry {
  const problems: string[] = []

  const concepts = new Map<string, Concept>()
  for (const raw of input.concepts) {
    const r = ConceptSchema.safeParse(raw)
    if (!r.success) {
      problems.push(`concept: ${r.error.message}`)
      continue
    }
    concepts.set(r.data.id, r.data)
  }
  const checkConcepts = (ids: string[], where: string) => {
    for (const id of ids)
      if (!concepts.has(id)) problems.push(`${where}: concept "${id}" không tồn tại`)
  }

  const molecules = new Map<string, Molecule>()
  for (const raw of input.molecules) {
    const r = MoleculeSchema.safeParse(raw)
    if (!r.success) {
      problems.push(`molecule ${(raw as { id?: string })?.id ?? '?'}: ${r.error.message}`)
      continue
    }
    const m = r.data
    if (molecules.has(m.id)) problems.push(`molecule "${m.id}" bị trùng id`)
    try {
      const fromFormula = parseFormula(m.formula)
      if (!sameCounts(fromFormula, countAtoms(m.atoms))) {
        problems.push(`molecule "${m.id}": số nguyên tử vẽ không khớp công thức ${m.formula}`)
      }
    } catch (e) {
      problems.push(`molecule "${m.id}": ${(e as Error).message}`)
    }
    checkConcepts(m.conceptIds, `molecule "${m.id}"`)
    molecules.set(m.id, m)
  }

  const reactions = new Map<string, Reaction>()
  for (const raw of input.reactions) {
    const r = ReactionSchema.safeParse(raw)
    if (!r.success) {
      problems.push(`reaction ${(raw as { id?: string })?.id ?? '?'}: ${r.error.message}`)
      continue
    }
    const rx = r.data
    if (reactions.has(rx.id)) problems.push(`reaction "${rx.id}" bị trùng id`)
    for (const side of [...rx.reactants, ...rx.products]) {
      if (!molecules.has(side.moleculeId)) {
        problems.push(`reaction "${rx.id}": molecule "${side.moleculeId}" không tồn tại`)
      }
    }
    const balance = checkReactionBalance(rx, molecules)
    if (balance) problems.push(`reaction "${rx.id}": ${balance}`)
    checkConcepts(rx.conceptIds, `reaction "${rx.id}"`)
    reactions.set(rx.id, rx)
  }

  const units: Unit[] = []
  const lessons = new Map<string, { lesson: Lesson; unit: Unit; index: number }>()
  const exercises = new Map<string, { exercise: Exercise; lesson: Lesson }>()
  const unlockedBy = new Map<string, string>()
  for (const raw of input.units) {
    const r = UnitSchema.safeParse(raw)
    if (!r.success) {
      problems.push(`unit ${(raw as { id?: string })?.id ?? '?'}: ${r.error.message}`)
      continue
    }
    const u = r.data
    units.push(u)
    u.lessons.forEach((lesson, index) => {
      if (lessons.has(lesson.id)) problems.push(`lesson "${lesson.id}" bị trùng id`)
      lessons.set(lesson.id, { lesson, unit: u, index })
      for (const mid of lesson.unlocksMolecules) {
        if (!molecules.has(mid))
          problems.push(`lesson "${lesson.id}": unlocksMolecules "${mid}" không tồn tại`)
        // một phân tử chỉ được mở khoá ở một bài, nếu không lần sau sẽ không còn gì để mở
        const first = unlockedBy.get(mid)
        if (first)
          problems.push(`lesson "${lesson.id}": phân tử "${mid}" đã được mở khoá ở "${first}"`)
        else unlockedBy.set(mid, lesson.id)
      }
      if (lesson.intro) {
        const v = lesson.intro.visual
        if ((v.type === 'molecule' || v.type === 'states') && !molecules.has(v.moleculeId))
          problems.push(`lesson "${lesson.id}": intro molecule "${v.moleculeId}" không tồn tại`)
        if (v.type === 'reaction' && !reactions.has(v.reactionId))
          problems.push(`lesson "${lesson.id}": intro reaction "${v.reactionId}" không tồn tại`)
      }
      for (const ex of lesson.exercises) {
        if (exercises.has(ex.id)) problems.push(`exercise "${ex.id}" bị trùng id`)
        exercises.set(ex.id, { exercise: ex, lesson })
        checkConcepts(ex.conceptIds, `exercise "${ex.id}"`)
        for (const mid of referencedMolecules(ex)) {
          if (!molecules.has(mid))
            problems.push(`exercise "${ex.id}": molecule "${mid}" không tồn tại`)
        }
        if (ex.type === 'balance-reaction' && !reactions.has(ex.reactionId)) {
          problems.push(`exercise "${ex.id}": reaction "${ex.reactionId}" không tồn tại`)
        }
        for (const issue of solvabilityIssues(ex, molecules, reactions)) {
          problems.push(`exercise "${ex.id}": ${issue}`)
        }
      }
    })
  }
  units.sort((a, b) => a.order - b.order)
  const orders = new Set(units.map((u) => u.order))
  if (orders.size !== units.length) problems.push('unit.order bị trùng')

  if (problems.length) throw new ContentValidationError(problems)
  return { version: CONTENT_VERSION, units, molecules, reactions, concepts, lessons, exercises }
}

const normLabel = (s: string) => s.trim().toLowerCase().replace(/\s+/g, ' ')
const itemKey = (i: {
  text?: string | undefined
  moleculeId?: string | undefined
  image?: string | undefined
}) =>
  // giữ nguyên hoa thường: có câu hỏi mà các lựa chọn chỉ khác nhau ở chỗ đó ("NA", "Na", "na")
  `${(i.text ?? '').trim().replace(/\s+/g, ' ')}|${i.moleculeId ?? ''}|${i.text ? '' : (i.image ?? '')}`

/**
 * Những lỗi khiến một bài tập không thể trả lời đúng, hoặc có hai lựa chọn trông giống hệt nhau.
 * Bắt ngay lúc nạp nội dung thay vì đợi tới khi người học gặp.
 */
function solvabilityIssues(
  ex: Exercise,
  molecules: Map<string, Molecule>,
  reactions: Map<string, Reaction>,
): string[] {
  const issues: string[] = []
  const duplicates = (keys: string[]) => keys.filter((k, i) => keys.indexOf(k) !== i)
  switch (ex.type) {
    case 'mcq':
      if (duplicates(ex.options.map(itemKey)).length) issues.push('có hai lựa chọn giống hệt nhau')
      break
    case 'match-pairs':
      if (duplicates(ex.pairs.map((p) => itemKey(p.left))).length)
        issues.push('cột trái có hai mục giống hệt nhau')
      if (duplicates(ex.pairs.map((p) => itemKey(p.right))).length)
        issues.push('cột phải có hai mục giống hệt nhau')
      break
    case 'build-molecule': {
      const target = molecules.get(ex.targetMoleculeId)
      if (!target) break
      for (const [el, n] of Object.entries(parseFormula(target.formula))) {
        const have = (ex.availableAtoms as Record<string, number | undefined>)[el] ?? 0
        if (have < n) issues.push(`cần ${n} nguyên tử ${el} nhưng chỉ cấp ${have}`)
      }
      break
    }
    case 'balance-reaction': {
      const rx = reactions.get(ex.reactionId)
      if (!rx) break
      const max = Math.max(...[...rx.reactants, ...rx.products].map((t) => t.coefficient))
      if (max > ex.maxCoefficient)
        issues.push(`cần hệ số ${max} nhưng maxCoefficient là ${ex.maxCoefficient}`)
      break
    }
    case 'fill-blank':
      ex.blanks.forEach((b, i) => {
        if (!b.wordBank) return
        const bank = b.wordBank.map(normLabel)
        if (!b.accepted.some((a) => bank.includes(normLabel(a))))
          issues.push(`chỗ trống ${i + 1}: ngân hàng từ không chứa đáp án`)
        if (duplicates(bank).length) issues.push(`chỗ trống ${i + 1}: ngân hàng từ có từ lặp`)
      })
      break
    case 'sort':
      for (const g of ex.groups) {
        if (!ex.items.some((it) => it.groupId === g.id))
          issues.push(`nhóm "${g.label}" không có mục nào`)
      }
      if (duplicates(ex.items.map(itemKey)).length) issues.push('có hai mục giống hệt nhau')
      break
    case 'order-steps':
      if (duplicates(ex.steps.map(itemKey)).length) issues.push('có hai bước giống hệt nhau')
      break
    default:
      break
  }
  return issues
}

function referencedMolecules(ex: Exercise): string[] {
  const ids: string[] = []
  const push = (item?: { moleculeId?: string | undefined }) => {
    if (item?.moleculeId) ids.push(item.moleculeId)
  }
  switch (ex.type) {
    case 'mcq':
      push(ex.visual)
      ex.options.forEach(push)
      break
    case 'match-pairs':
      ex.pairs.forEach((p) => {
        push(p.left)
        push(p.right)
      })
      break
    case 'build-molecule':
      ids.push(ex.targetMoleculeId)
      break
    case 'sort':
      ex.items.forEach(push)
      break
    case 'order-steps':
      ex.steps.forEach(push)
      break
    case 'true-false':
      push(ex.visual)
      break
    default:
      break
  }
  return ids
}

/** Trả về mô tả lỗi nếu phản ứng (với hệ số đã cho) không bảo toàn nguyên tử, ngược lại null. */
export function checkReactionBalance(
  rx: Pick<Reaction, 'reactants' | 'products'>,
  molecules: Map<string, Molecule>,
): string | null {
  const total = (sides: Reaction['reactants']) => {
    const counts: Record<string, number> = {}
    for (const s of sides) {
      const m = molecules.get(s.moleculeId)
      if (!m) return null
      for (const [el, n] of Object.entries(parseFormula(m.formula))) {
        counts[el] = (counts[el] ?? 0) + n * s.coefficient
      }
    }
    return counts
  }
  const left = total(rx.reactants)
  const right = total(rx.products)
  if (!left || !right) return 'thiếu phân tử'
  const keys = new Set([...Object.keys(left), ...Object.keys(right)])
  for (const k of keys) {
    if ((left[k] ?? 0) !== (right[k] ?? 0)) {
      return `không cân bằng ở ${k}: trái ${left[k] ?? 0}, phải ${right[k] ?? 0}`
    }
  }
  return null
}

/** Registry mặc định từ nội dung trong repo. Ném lỗi ngay khi import nếu nội dung sai. */
export const content: ContentRegistry = buildRegistry({
  units: rawUnits,
  molecules: rawMolecules,
  reactions: rawReactions,
  concepts: rawConcepts,
})
