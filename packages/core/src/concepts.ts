/**
 * Độ mạnh khái niệm 0..1 cho ôn tập. Mô hình đơn giản, đủ cho MVP:
 * đúng tăng, sai giảm mạnh hơn; khoảng cách ôn tập tăng theo độ mạnh.
 */
export interface ConceptStrength {
  strength: number
  lastReviewedAt: Date
  nextReviewAt: Date
}

const clamp01 = (x: number) => Math.min(1, Math.max(0, x))

export function updateConceptStrength(
  prev: ConceptStrength | null,
  correct: boolean,
  at: Date,
): ConceptStrength {
  const base = prev?.strength ?? 0.3
  const strength = clamp01(correct ? base + 0.2 : base - 0.3)
  // 1 ngày khi yếu, tới 14 ngày khi mạnh
  const days = Math.max(1, Math.round(1 + strength * 13))
  return {
    strength,
    lastReviewedAt: at,
    nextReviewAt: new Date(at.getTime() + days * 86_400_000),
  }
}

/** Khái niệm cần ôn: đến hạn hoặc yếu. */
export function conceptsDueForReview(
  all: Map<string, ConceptStrength>,
  now: Date,
  limit = 5,
): string[] {
  return [...all.entries()]
    .filter(([, c]) => c.nextReviewAt <= now || c.strength < 0.5)
    .sort((a, b) => a[1].strength - b[1].strength)
    .slice(0, limit)
    .map(([id]) => id)
}
