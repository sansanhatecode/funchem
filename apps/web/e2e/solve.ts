import { type ContentRegistry, type Exercise, parseFormula } from '@funchem/content'
import type { Locator } from '@playwright/test'

const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, ' ')

/**
 * Trả lời ĐÚNG một bài tập bằng cách thao tác giao diện như người học.
 * Đáp án lấy từ nội dung, nên test không phụ thuộc vào bài học cụ thể.
 */
export async function solveExercise(scope: Locator, exercise: Exercise, registry: ContentRegistry) {
  switch (exercise.type) {
    case 'mcq':
      await scope.locator(`[data-option-id="${exercise.correctOptionId}"]`).click()
      break
    case 'true-false':
      await scope.locator(`[data-value="${exercise.answer}"]`).click()
      break
    case 'match-pairs':
      for (const p of exercise.pairs) {
        await scope.locator(`[data-left-id="${p.left.id}"]`).click()
        await scope.locator(`[data-right-id="${p.right.id}"]`).click()
      }
      break
    case 'build-molecule': {
      const target = registry.molecules.get(exercise.targetMoleculeId)!
      for (const [el, n] of Object.entries(parseFormula(target.formula))) {
        for (let i = 0; i < n; i++) await scope.getByTestId(`add-atom-${el}`).click()
      }
      break
    }
    case 'balance-reaction': {
      const rx = registry.reactions.get(exercise.reactionId)!
      for (const side of ['reactants', 'products'] as const) {
        for (const [i, term] of rx[side].entries()) {
          for (let k = 1; k < term.coefficient; k++)
            await scope.getByTestId(`coef-inc-${side}-${i}`).click()
        }
      }
      break
    }
    case 'fill-blank':
      for (const [i, blank] of exercise.blanks.entries()) {
        if (blank.wordBank) {
          const accepted = blank.accepted.map(norm)
          const word = blank.wordBank.find((w) => accepted.includes(norm(w)))
          if (!word) throw new Error(`${exercise.id}: wordBank không chứa đáp án`)
          await scope.locator(`[data-word="${word}"]`).click()
        } else {
          await scope.locator(`[data-blank="${i}"]`).fill(blank.accepted[0]!)
        }
      }
      break
    case 'sort':
      for (const item of exercise.items) {
        await scope.locator(`[data-item-id="${item.id}"]`).click()
        await scope.locator(`[data-group-id="${item.groupId}"]`).click()
      }
      break
    case 'order-steps':
      for (const step of exercise.steps) await scope.locator(`[data-step-id="${step.id}"]`).click()
      break
  }
}

/** Trả lời SAI một bài trắc nghiệm hoặc đúng/sai. Trả về false nếu dạng bài khác. */
export async function answerWrong(scope: Locator, exercise: Exercise): Promise<boolean> {
  if (exercise.type === 'mcq') {
    const wrong = exercise.options.find((o) => o.id !== exercise.correctOptionId)!
    await scope.locator(`[data-option-id="${wrong.id}"]`).click()
    return true
  }
  if (exercise.type === 'true-false') {
    await scope.locator(`[data-value="${!exercise.answer}"]`).click()
    return true
  }
  return false
}
