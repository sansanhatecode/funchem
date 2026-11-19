import type { Answer, Exercise } from '@funchem/content/lib'

/** Mỗi câu sai được hỏi lại tối đa chừng này lần ở cuối lượt. */
export const MAX_RETRIES = 2

export type Submitted = { exerciseId: string; answer: Answer }

/** Một lượt hỏi trong hàng đợi: câu gốc, hoặc lần hỏi lại của một câu đã trả lời sai. */
export interface RunItem {
  exercise: Exercise
  retry: boolean
}

export interface RunState {
  queue: RunItem[]
  /** câu trả lời ĐẦU TIÊN của từng bài tập, theo thứ tự làm; đây là thứ gửi lên server chấm điểm */
  answers: Submitted[]
}

export function startRun(exercises: readonly Exercise[]): RunState {
  return { queue: exercises.map((exercise) => ({ exercise, retry: false })), answers: [] }
}

/**
 * Ghi nhận kết quả vừa kiểm tra của câu ở vị trí `pos`.
 * - Câu gốc: lưu câu trả lời (điểm chỉ tính theo lần đầu).
 * - Lần hỏi lại: không lưu, chỉ để học.
 * - Trả lời sai: xếp câu đó vào cuối hàng đợi để hỏi lại, tối đa MAX_RETRIES lần cho mỗi câu.
 */
export function applyCheck(
  state: RunState,
  pos: number,
  answer: Answer,
  correct: boolean,
): RunState {
  const item = state.queue[pos]
  if (!item) return state
  const answers = item.retry
    ? state.answers
    : [...state.answers, { exerciseId: item.exercise.id, answer }]
  if (correct) return { queue: state.queue, answers }
  const tries = state.queue.filter((q) => q.retry && q.exercise.id === item.exercise.id).length
  const queue =
    tries < MAX_RETRIES ? [...state.queue, { exercise: item.exercise, retry: true }] : state.queue
  return { queue, answers }
}
