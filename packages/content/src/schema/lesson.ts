import { z } from 'zod'
import { ELEMENTS, ElementSymbolSchema } from './elements.js'
import { ExerciseSchema } from './exercise.js'
import { IdSchema } from './molecule.js'
import { SceneIdSchema } from './scene.js'

/**
 * Hình mở đầu bài học. Luôn hiện hiện tượng ngoài đời trước, rồi phóng to xuống cấp nguyên tử.
 * - molecule / reaction: `scene` ghi đè cảnh mặc định (lấy từ ví dụ đời sống đầu tiên của phân tử,
 *   hoặc từ câu chuyện của phản ứng).
 * - states: phòng thí nghiệm ba trạng thái của cùng một chất, mỗi trạng thái một cảnh.
 * - periodic-table: phóng to từ cảnh vào bảng tuần hoàn tương tác, làm nổi các nguyên tố trong `highlight`.
 * - atom: phóng to từ cảnh vào bên trong một nguyên tử (hạt nhân và các lớp electron).
 */
export const IntroVisualSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('molecule'), moleculeId: IdSchema, scene: SceneIdSchema.optional() }),
  z.object({ type: z.literal('reaction'), reactionId: IdSchema, scene: SceneIdSchema.optional() }),
  z.object({
    type: z.literal('states'),
    moleculeId: IdSchema,
    scenes: z.object({ solid: SceneIdSchema, liquid: SceneIdSchema, gas: SceneIdSchema }),
  }),
  z.object({
    type: z.literal('periodic-table'),
    scene: SceneIdSchema,
    highlight: z.array(ElementSymbolSchema).default([]),
  }),
  z.object({
    type: z.literal('atom'),
    /** chỉ vẽ được 20 nguyên tố đầu (tới calcium) cho dễ nhìn */
    element: ElementSymbolSchema.refine(
      (e) => ELEMENTS[e].number <= 20,
      'chỉ hỗ trợ nguyên tố có số hiệu tới 20',
    ),
    scene: SceneIdSchema,
  }),
])
export type IntroVisual = z.infer<typeof IntroVisualSchema>

export const IntroCardSchema = z.object({
  title: z.string().min(1),
  /** 2–4 câu kể chuyện gắn với đời sống, mỗi phần tử là một đoạn ngắn */
  story: z.array(z.string().min(1)).min(1).max(4),
  visual: IntroVisualSchema,
})
export type IntroCard = z.infer<typeof IntroCardSchema>

export const LessonSchema = z
  .object({
    id: IdSchema,
    title: z.string().min(1),
    kind: z.enum(['lesson', 'checkpoint']).default('lesson'),
    intro: IntroCardSchema.optional(),
    exercises: z.array(ExerciseSchema).min(1),
    /** phân tử được thêm vào bộ sưu tập khi hoàn thành bài */
    unlocksMolecules: z.array(IdSchema).default([]),
    /** XP cơ bản khi hoàn thành; core sẽ cộng thưởng theo độ chính xác */
    baseXp: z.number().int().positive().default(10),
  })
  .superRefine((l, ctx) => {
    const ids = new Set(l.exercises.map((e) => e.id))
    if (ids.size !== l.exercises.length) {
      ctx.addIssue({
        code: 'custom',
        message: 'id bài tập bị trùng trong bài học',
        path: ['exercises'],
      })
    }
    if (l.kind === 'lesson' && !l.intro) {
      ctx.addIssue({
        code: 'custom',
        message: 'bài học thường cần thẻ Khám phá (intro)',
        path: ['intro'],
      })
    }
  })
export type Lesson = z.infer<typeof LessonSchema>
export type LessonInput = z.input<typeof LessonSchema>

export const UnitSchema = z
  .object({
    id: IdSchema,
    order: z.number().int().positive(),
    title: z.string().min(1),
    tagline: z.string().min(1),
    /** màu chủ đạo của Unit, hex */
    color: z.string().regex(/^#[0-9a-fA-F]{6}$/),
    lessons: z.array(LessonSchema).min(1),
  })
  .superRefine((u, ctx) => {
    const ids = new Set(u.lessons.map((l) => l.id))
    if (ids.size !== u.lessons.length) {
      ctx.addIssue({ code: 'custom', message: 'id bài học bị trùng trong unit', path: ['lessons'] })
    }
    const last = u.lessons[u.lessons.length - 1]
    if (last && last.kind !== 'checkpoint') {
      ctx.addIssue({
        code: 'custom',
        message: 'bài cuối Unit phải là checkpoint',
        path: ['lessons'],
      })
    }
  })
export type Unit = z.infer<typeof UnitSchema>
export type UnitInput = z.input<typeof UnitSchema>

export const ConceptSchema = z.object({
  id: IdSchema,
  title: z.string().min(1),
})
export type Concept = z.infer<typeof ConceptSchema>
