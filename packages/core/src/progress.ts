import type { ContentRegistry, Unit } from '@funchem/content'
import { passAccuracy } from './grading.js'

export type LessonStatus = 'locked' | 'available' | 'completed'

export interface LessonRecord {
  lessonId: string
  bestAccuracy: number
}

/** Một bài tính là hoàn thành khi lần làm tốt nhất đạt ngưỡng của loại bài (bài thường 50%, checkpoint 80%). */
export function isLessonCompleted(
  lessonId: string,
  records: Map<string, LessonRecord>,
  registry: ContentRegistry,
): boolean {
  const rec = records.get(lessonId)
  if (!rec) return false
  const entry = registry.lessons.get(lessonId)
  if (!entry) return false
  return rec.bestAccuracy >= passAccuracy(entry.lesson.kind)
}

/**
 * Trạng thái từng bài trên bản đồ.
 * Bài đầu Unit 1 luôn mở. Bài kế tiếp mở khi bài trước hoàn thành.
 * Bài đầu Unit n mở khi checkpoint Unit n-1 đã qua.
 */
export function computeLessonStatuses(
  registry: ContentRegistry,
  records: Map<string, LessonRecord>,
): Map<string, LessonStatus> {
  const out = new Map<string, LessonStatus>()
  let prevUnitPassed = true
  for (const unit of registry.units) {
    let prevDone = prevUnitPassed
    for (const lesson of unit.lessons) {
      const done = isLessonCompleted(lesson.id, records, registry)
      out.set(lesson.id, done ? 'completed' : prevDone ? 'available' : 'locked')
      prevDone = done
    }
    const cp = unit.lessons.at(-1)
    prevUnitPassed = cp ? isLessonCompleted(cp.id, records, registry) : false
  }
  return out
}

export interface UnitProgress {
  unitId: string
  completed: number
  total: number
  /** 0..1 */
  ratio: number
  passed: boolean
}

export function computeUnitProgress(unit: Unit, statuses: Map<string, LessonStatus>): UnitProgress {
  const total = unit.lessons.length
  const completed = unit.lessons.filter((l) => statuses.get(l.id) === 'completed').length
  const cp = unit.lessons.at(-1)
  return {
    unitId: unit.id,
    completed,
    total,
    ratio: total ? completed / total : 0,
    passed: cp ? statuses.get(cp.id) === 'completed' : false,
  }
}
