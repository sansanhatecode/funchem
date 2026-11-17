import type { LessonGrade } from './grading.js'

/** Số lượt ôn tập được cộng XP mỗi ngày. Ôn thêm vẫn được, nhưng không cộng XP nữa. */
export const REVIEW_REWARDED_RUNS_PER_DAY = 3

/**
 * XP thực nhận cho một lần làm bài.
 *
 * - Làm lại một bài đã hoàn thành chỉ được một nửa, để việc cày lại bài cũ
 *   không vượt mặt việc học bài mới trên bảng xếp hạng.
 * - Trong một ngày, mỗi bài chỉ cho tối đa bằng lần làm tốt nhất của ngày đó:
 *   làm lại nhiều lần không cộng dồn, nhưng trượt rồi làm lại tốt hơn vẫn được phần chênh.
 */
export function xpForAttempt(
  grade: Pick<LessonGrade, 'xpEarned'>,
  opts: { alreadyCompleted: boolean; earnedTodayForLesson?: number },
): number {
  const full = opts.alreadyCompleted ? Math.ceil(grade.xpEarned / 2) : grade.xpEarned
  return Math.max(0, full - (opts.earnedTodayForLesson ?? 0))
}

/**
 * XP cho một lượt ôn tập: 1 XP mỗi câu đúng, tối đa 10.
 * Chỉ `REVIEW_REWARDED_RUNS_PER_DAY` lượt đầu trong ngày được cộng XP.
 */
export function xpForReview(correct: number, opts: { rewardedRunsToday?: number } = {}): number {
  if ((opts.rewardedRunsToday ?? 0) >= REVIEW_REWARDED_RUNS_PER_DAY) return 0
  return Math.min(10, Math.max(0, correct))
}
