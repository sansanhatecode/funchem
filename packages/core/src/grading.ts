import {
  type Answer,
  type ContentRegistry,
  type Exercise,
  type Lesson,
  parseFormula,
  sameCounts,
} from '@funchem/content'

export interface GradeResult {
  exerciseId: string
  correct: boolean
  /** lý do ngắn khi sai, để giao diện hiện cùng explanation */
  reason?: string
}

const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, ' ')

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b)
}

/** Chấm một bài tập. Không ném lỗi với câu trả lời lệch dạng, chỉ trả về sai. */
export function gradeExercise(
  exercise: Exercise,
  answer: Answer,
  registry: ContentRegistry,
): GradeResult {
  const id = exercise.id
  if (answer.type !== exercise.type) {
    return { exerciseId: id, correct: false, reason: 'Câu trả lời không đúng dạng bài' }
  }

  switch (exercise.type) {
    case 'mcq': {
      if (answer.type !== 'mcq') break
      return { exerciseId: id, correct: answer.optionId === exercise.correctOptionId }
    }

    case 'true-false': {
      if (answer.type !== 'true-false') break
      return { exerciseId: id, correct: answer.value === exercise.answer }
    }

    case 'match-pairs': {
      if (answer.type !== 'match-pairs') break
      const expected = new Map(exercise.pairs.map((p) => [p.left.id, p.right.id]))
      if (answer.pairs.length !== expected.size) {
        return { exerciseId: id, correct: false, reason: 'Chưa nối đủ các cặp' }
      }
      const seenLeft = new Set<string>()
      for (const p of answer.pairs) {
        if (seenLeft.has(p.leftId))
          return { exerciseId: id, correct: false, reason: 'Một mục được nối hai lần' }
        seenLeft.add(p.leftId)
        if (expected.get(p.leftId) !== p.rightId) return { exerciseId: id, correct: false }
      }
      return { exerciseId: id, correct: true }
    }

    case 'build-molecule': {
      if (answer.type !== 'build-molecule') break
      const target = registry.molecules.get(exercise.targetMoleculeId)
      if (!target) return { exerciseId: id, correct: false, reason: 'Thiếu dữ liệu phân tử' }
      const want = parseFormula(target.formula)
      const got = Object.fromEntries(Object.entries(answer.atoms).filter(([, n]) => (n ?? 0) > 0))
      return { exerciseId: id, correct: sameCounts(want, got) }
    }

    case 'balance-reaction': {
      if (answer.type !== 'balance-reaction') break
      const rx = registry.reactions.get(exercise.reactionId)
      if (!rx) return { exerciseId: id, correct: false, reason: 'Thiếu dữ liệu phản ứng' }
      if (
        answer.reactants.length !== rx.reactants.length ||
        answer.products.length !== rx.products.length
      ) {
        return { exerciseId: id, correct: false, reason: 'Số hệ số không khớp' }
      }
      const all = [...answer.reactants, ...answer.products]
      if (all.some((c) => c > exercise.maxCoefficient)) {
        return { exerciseId: id, correct: false, reason: 'Hệ số vượt giới hạn' }
      }
      const total = (sides: typeof rx.reactants, coeffs: number[]) => {
        const counts: Record<string, number> = {}
        sides.forEach((s, i) => {
          const m = registry.molecules.get(s.moleculeId)
          if (!m) return
          for (const [el, n] of Object.entries(parseFormula(m.formula))) {
            counts[el] = (counts[el] ?? 0) + n * coeffs[i]!
          }
        })
        return counts
      }
      const left = total(rx.reactants, answer.reactants)
      const right = total(rx.products, answer.products)
      const keys = new Set([...Object.keys(left), ...Object.keys(right)])
      for (const k of keys) {
        if ((left[k] ?? 0) !== (right[k] ?? 0)) {
          return {
            exerciseId: id,
            correct: false,
            reason: `Số nguyên tử ${k} hai vế chưa bằng nhau`,
          }
        }
      }
      if (all.reduce(gcd) !== 1) {
        return { exerciseId: id, correct: false, reason: 'Đã cân bằng nhưng hệ số chưa tối giản' }
      }
      return { exerciseId: id, correct: true }
    }

    case 'fill-blank': {
      if (answer.type !== 'fill-blank') break
      if (answer.values.length !== exercise.blanks.length) {
        return { exerciseId: id, correct: false, reason: 'Chưa điền đủ chỗ trống' }
      }
      const ok = exercise.blanks.every((b, i) =>
        b.accepted.map(norm).includes(norm(answer.values[i] ?? '')),
      )
      return { exerciseId: id, correct: ok }
    }

    case 'sort': {
      if (answer.type !== 'sort') break
      for (const item of exercise.items) {
        if (answer.assignments[item.id] !== item.groupId) return { exerciseId: id, correct: false }
      }
      return { exerciseId: id, correct: true }
    }

    case 'order-steps': {
      if (answer.type !== 'order-steps') break
      const expected = exercise.steps.map((s) => s.id)
      const ok =
        expected.length === answer.order.length && expected.every((s, i) => s === answer.order[i])
      return { exerciseId: id, correct: ok }
    }
  }
  return { exerciseId: id, correct: false, reason: 'Câu trả lời không đúng dạng bài' }
}

export interface LessonSubmission {
  lessonId: string
  answers: { exerciseId: string; answer: Answer }[]
}

export interface LessonGrade {
  lessonId: string
  results: GradeResult[]
  total: number
  correct: number
  /** 0..1 */
  accuracy: number
  /** checkpoint cần đạt ngưỡng; bài thường luôn pass */
  passed: boolean
  xpEarned: number
}

/** Ngưỡng điểm để qua checkpoint */
export const CHECKPOINT_PASS_ACCURACY = 0.8

/** Thưởng XP theo độ chính xác, cộng vào baseXp của bài */
export function xpBonus(accuracy: number): number {
  if (accuracy >= 1) return 5
  if (accuracy >= 0.8) return 2
  return 0
}

/**
 * Chấm cả bài học. Bài tập không có câu trả lời tính là sai.
 * Câu trả lời cho bài tập không thuộc bài học bị bỏ qua.
 */
export function gradeLesson(
  lesson: Lesson,
  submission: LessonSubmission,
  registry: ContentRegistry,
): LessonGrade {
  const byId = new Map(submission.answers.map((a) => [a.exerciseId, a.answer]))
  const results = lesson.exercises.map((ex) => {
    const ans = byId.get(ex.id)
    if (!ans)
      return { exerciseId: ex.id, correct: false, reason: 'Chưa trả lời' } satisfies GradeResult
    return gradeExercise(ex, ans, registry)
  })
  const total = results.length
  const correct = results.filter((r) => r.correct).length
  const accuracy = total === 0 ? 0 : correct / total
  const passed = lesson.kind === 'checkpoint' ? accuracy >= CHECKPOINT_PASS_ACCURACY : true
  const xpEarned = passed
    ? lesson.baseXp + xpBonus(accuracy)
    : Math.round(lesson.baseXp * accuracy * 0.5)
  return { lessonId: lesson.id, results, total, correct, accuracy, passed, xpEarned }
}
