import type { ContentRegistry, Exercise } from '@funchem/content'

export interface ReviewInput {
  /** các bài đã hoàn thành; chỉ ôn nội dung đã học */
  completedLessonIds: Iterable<string>
  /** khái niệm cần ôn, yếu nhất đứng trước (xem conceptsDueForReview) */
  dueConceptIds: string[]
  count?: number
  /** để chọn ổn định trong test; mặc định đổi theo ngày ở nơi gọi */
  seed?: string
}

function rng(seed: string) {
  let h = 2166136261
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619)
  return () => {
    h += 0x6d2b79f5
    let t = h
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function shuffle<T>(items: T[], rand: () => number): T[] {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[out[i], out[j]] = [out[j]!, out[i]!]
  }
  return out
}

/**
 * Chọn bài tập cho một lượt ôn: ưu tiên câu thuộc khái niệm đang yếu hoặc đến hạn,
 * phần còn lại lấy ngẫu nhiên từ các bài đã học. Không lặp câu.
 */
export function pickReviewExercises(registry: ContentRegistry, input: ReviewInput): Exercise[] {
  const count = input.count ?? 8
  const rand = rng(input.seed ?? 'review')
  const pool: Exercise[] = []
  for (const lessonId of input.completedLessonIds) {
    const entry = registry.lessons.get(lessonId)
    if (entry) pool.push(...entry.lesson.exercises)
  }
  if (pool.length === 0) return []

  const picked: Exercise[] = []
  const seen = new Set<string>()
  const take = (ex: Exercise) => {
    if (picked.length < count && !seen.has(ex.id)) {
      seen.add(ex.id)
      picked.push(ex)
    }
  }
  // mỗi khái niệm yếu góp tối đa 2 câu, để một lượt ôn phủ được nhiều khái niệm
  for (const conceptId of input.dueConceptIds) {
    const matching = shuffle(
      pool.filter((ex) => ex.conceptIds.includes(conceptId)),
      rand,
    )
    matching.slice(0, 2).forEach(take)
  }
  shuffle(pool, rand).forEach(take)
  return shuffle(picked, rand)
}
