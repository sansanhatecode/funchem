import { z } from 'zod'
import { IdSchema, LifeExampleSchema } from './molecule.js'

export const ReactionSideSchema = z.object({
  moleculeId: IdSchema,
  /** hệ số đã cân bằng, tối giản */
  coefficient: z.number().int().positive(),
})
export type ReactionSide = z.infer<typeof ReactionSideSchema>

export const ReactionSchema = z.object({
  id: IdSchema,
  /** tên thân thiện, ví dụ "Sắt bị gỉ" */
  name: z.string().min(1),
  reactants: z.array(ReactionSideSchema).min(1),
  products: z.array(ReactionSideSchema).min(1),
  /** dấu hiệu quan sát được: đổi màu, sủi bọt, toả nhiệt... */
  signs: z.array(z.string()).default([]),
  /** điều kiện: nhiệt độ, ánh sáng, xúc tác... (tuỳ chọn, hiển thị trên mũi tên) */
  condition: z.string().optional(),
  story: LifeExampleSchema,
  conceptIds: z.array(IdSchema).default([]),
})
export type Reaction = z.infer<typeof ReactionSchema>
export type ReactionInput = z.input<typeof ReactionSchema>
