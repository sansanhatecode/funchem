import { z } from 'zod'
import { ElementCountsSchema } from './elements.js'
import { IdSchema } from './molecule.js'
import { SceneIdSchema } from './scene.js'

/** Một mẩu nội dung hiển thị: chữ, phân tử, hoặc cảnh đời sống. Ít nhất một trong ba. */
export const ContentItemSchema = z
  .object({
    id: z.string().min(1),
    text: z.string().optional(),
    moleculeId: IdSchema.optional(),
    /** cảnh minh hoạ đời sống */
    image: SceneIdSchema.optional(),
  })
  .refine((i) => i.text || i.moleculeId || i.image, 'cần ít nhất text, moleculeId hoặc image')
export type ContentItem = z.infer<typeof ContentItemSchema>

const Base = z.object({
  id: IdSchema,
  prompt: z.string().min(1),
  /** giải thích hiện ra sau khi trả lời, dù đúng hay sai */
  explanation: z.string().min(1),
  conceptIds: z.array(IdSchema).default([]),
})

export const McqExerciseSchema = Base.extend({
  type: z.literal('mcq'),
  /** phân tử hoặc ảnh hiện cùng câu hỏi (tuỳ chọn) */
  visual: ContentItemSchema.optional(),
  options: z.array(ContentItemSchema).min(2).max(4),
  correctOptionId: z.string().min(1),
}).refine(
  (e) => e.options.some((o) => o.id === e.correctOptionId),
  'correctOptionId không có trong options',
)

export const MatchPairsExerciseSchema = Base.extend({
  type: z.literal('match-pairs'),
  pairs: z
    .array(z.object({ left: ContentItemSchema, right: ContentItemSchema }))
    .min(2)
    .max(6),
})

export const BuildMoleculeExerciseSchema = Base.extend({
  type: z.literal('build-molecule'),
  targetMoleculeId: IdSchema,
  /** nguyên tử người học được cấp, gồm cả nguyên tử thừa để gây nhiễu */
  availableAtoms: ElementCountsSchema,
})

export const BalanceReactionExerciseSchema = Base.extend({
  type: z.literal('balance-reaction'),
  reactionId: IdSchema,
  /** hệ số tối đa cho phép chọn, mặc định 6 */
  maxCoefficient: z.number().int().min(2).max(12).default(6),
})

export const FillBlankExerciseSchema = Base.extend({
  type: z.literal('fill-blank'),
  /** câu có chỗ trống đánh dấu bằng ___ , mỗi chỗ trống tương ứng một phần tử trong blanks */
  template: z.string().regex(/___/),
  blanks: z
    .array(
      z.object({
        /** các đáp án được chấp nhận, so khớp không phân biệt hoa thường và khoảng trắng */
        accepted: z.array(z.string().min(1)).min(1),
        /** gợi ý chọn từ ngân hàng từ (nếu có) thay vì gõ tự do */
        wordBank: z.array(z.string()).optional(),
      }),
    )
    .min(1),
}).refine(
  (e) => e.template.split('___').length - 1 === e.blanks.length,
  'số chỗ trống ___ phải bằng số blanks',
)

export const SortExerciseSchema = Base.extend({
  type: z.literal('sort'),
  groups: z
    .array(z.object({ id: z.string().min(1), label: z.string().min(1) }))
    .min(2)
    .max(3),
  items: z.array(ContentItemSchema.and(z.object({ groupId: z.string().min(1) }))).min(3),
}).refine(
  (e) => e.items.every((i) => e.groups.some((g) => g.id === i.groupId)),
  'item trỏ tới group không tồn tại',
)

export const OrderStepsExerciseSchema = Base.extend({
  type: z.literal('order-steps'),
  /** các bước theo đúng thứ tự; giao diện sẽ xáo trộn */
  steps: z.array(ContentItemSchema).min(3).max(6),
})

/** prompt chính là mệnh đề cần phán đoán đúng/sai */
export const TrueFalseExerciseSchema = Base.extend({
  type: z.literal('true-false'),
  visual: ContentItemSchema.optional(),
  answer: z.boolean(),
})

export const ExerciseSchema = z.discriminatedUnion('type', [
  McqExerciseSchema,
  MatchPairsExerciseSchema,
  BuildMoleculeExerciseSchema,
  BalanceReactionExerciseSchema,
  FillBlankExerciseSchema,
  SortExerciseSchema,
  OrderStepsExerciseSchema,
  TrueFalseExerciseSchema,
])
export type Exercise = z.infer<typeof ExerciseSchema>
export type ExerciseInput = z.input<typeof ExerciseSchema>
export type ExerciseType = Exercise['type']

export const EXERCISE_TYPES = [
  'mcq',
  'match-pairs',
  'build-molecule',
  'balance-reaction',
  'fill-blank',
  'sort',
  'order-steps',
  'true-false',
] as const satisfies readonly ExerciseType[]

/** Câu trả lời người học gửi lên, theo từng dạng bài. */
export const AnswerSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('mcq'), optionId: z.string() }),
  z.object({
    type: z.literal('match-pairs'),
    pairs: z.array(z.object({ leftId: z.string(), rightId: z.string() })),
  }),
  z.object({ type: z.literal('build-molecule'), atoms: ElementCountsSchema }),
  z.object({
    type: z.literal('balance-reaction'),
    reactants: z.array(z.number().int().positive()),
    products: z.array(z.number().int().positive()),
  }),
  z.object({ type: z.literal('fill-blank'), values: z.array(z.string()) }),
  z.object({ type: z.literal('sort'), assignments: z.record(z.string(), z.string()) }),
  z.object({ type: z.literal('order-steps'), order: z.array(z.string()) }),
  z.object({ type: z.literal('true-false'), value: z.boolean() }),
])
export type Answer = z.infer<typeof AnswerSchema>
