import type { LessonGrade } from './grading.js'

/**
 * XP thực nhận cho một lần làm bài.
 * Làm lại một bài đã hoàn thành chỉ được một nửa, để việc cày lại bài cũ
 * không vượt mặt việc học bài mới trên bảng xếp hạng.
 */
export function xpForAttempt(
  grade: Pick<LessonGrade, 'xpEarned'>,
  opts: { alreadyCompleted: boolean },
): number {
  return opts.alreadyCompleted ? Math.ceil(grade.xpEarned / 2) : grade.xpEarned
}

/** XP cho một lượt ôn tập: 1 XP mỗi câu đúng, tối đa 10. */
export function xpForReview(correct: number): number {
  return Math.min(10, Math.max(0, correct))
}
