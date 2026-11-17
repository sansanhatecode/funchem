import type { Exercise, Lesson, Molecule, Reaction, SceneId } from '@funchem/content/lib'

/** Phân tử và phản ứng mà một màn hình cần, do server cắt sẵn từ kho nội dung. */
export interface ContentSlice {
  molecules: Molecule[]
  reactions: Reaction[]
}

/** Dàn ý của chương trình cho bản đồ học: chỉ tiêu đề và cảnh, không kèm bài tập. */
export interface OutlineLesson {
  id: string
  title: string
  kind: Lesson['kind']
  scene: SceneId | undefined
}
export interface OutlineUnit {
  id: string
  order: number
  title: string
  tagline: string
  color: string
  lessons: OutlineLesson[]
}

/** Mọi thứ trình phát cần để chạy đúng một bài học. */
export interface LessonBundle {
  lesson: Lesson
  unit: { order: number; color: string }
  /** bài kế tiếp theo thứ tự chương trình */
  next: { id: string; title: string } | null
  /** tổng số Unit, dùng để mô tả huy hiệu */
  unitCount: number
  slice: ContentSlice
}

export interface ExercisesBundle {
  exercises: Exercise[]
  unitCount: number
  slice: ContentSlice
}
