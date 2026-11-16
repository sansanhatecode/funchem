import type { Answer, Exercise } from '@funchem/content'

/**
 * Câu trả lời đã đủ để bấm "Kiểm tra" chưa (chưa xét đúng sai).
 * Dùng chung cho web và mobile để nút kiểm tra bật/tắt giống nhau.
 */
export function isAnswerComplete(exercise: Exercise, answer: Answer | null): boolean {
  if (!answer || answer.type !== exercise.type) return false
  switch (answer.type) {
    case 'mcq':
      return answer.optionId.length > 0
    case 'true-false':
      return true
    case 'match-pairs':
      return exercise.type === 'match-pairs' && answer.pairs.length === exercise.pairs.length
    case 'build-molecule':
      return Object.values(answer.atoms).some((n) => (n ?? 0) > 0)
    case 'balance-reaction':
      return answer.reactants.length > 0 && answer.products.length > 0
    case 'fill-blank':
      return (
        exercise.type === 'fill-blank' &&
        answer.values.length === exercise.blanks.length &&
        answer.values.every((v) => v.trim().length > 0)
      )
    case 'sort':
      return (
        exercise.type === 'sort' && exercise.items.every((i) => Boolean(answer.assignments[i.id]))
      )
    case 'order-steps':
      return exercise.type === 'order-steps' && answer.order.length === exercise.steps.length
  }
}
