import { type Db, schema } from '@funchem/db'

export const LEARNING_EVENT_TYPES = [
  'lesson_start',
  'lesson_exit',
  'review_start',
  'review_exit',
] as const
export type LearningEventType = (typeof LEARNING_EVENT_TYPES)[number]

export interface LearningEventInput {
  userId: string
  type: LearningEventType
  lessonId?: string | undefined
  exerciseId?: string | undefined
  answered?: number | undefined
}

/** Ghi một sự kiện học tập. Chỉ để phân tích: không ảnh hưởng XP hay tiến độ. */
export async function recordLearningEvent(db: Db, input: LearningEventInput): Promise<void> {
  await db.insert(schema.learningEvents).values({
    userId: input.userId,
    type: input.type,
    lessonId: input.lessonId ?? null,
    exerciseId: input.exerciseId ?? null,
    answered: input.answered ?? null,
  })
}
