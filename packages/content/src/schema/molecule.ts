import { z } from 'zod'
import { ElementSymbolSchema } from './elements.js'
import { SceneIdSchema } from './scene.js'

export const IdSchema = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'id phải là kebab-case')

export const LifeExampleSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  /** cảnh minh hoạ hiện tượng ngoài đời; ví dụ đầu tiên của mỗi phân tử bắt buộc có */
  illustration: SceneIdSchema.optional(),
})
export type LifeExample = z.infer<typeof LifeExampleSchema>

export const AtomSchema = z.object({
  id: z.string().min(1),
  element: ElementSymbolSchema,
  /** toạ độ 2D trong hộp 100x100, dùng chung cho web (SVG) và mobile (react-native-svg) */
  x: z.number().min(0).max(100),
  y: z.number().min(0).max(100),
})
export type Atom = z.infer<typeof AtomSchema>

export const BondSchema = z.object({
  a: z.string().min(1),
  b: z.string().min(1),
  order: z.union([z.literal(1), z.literal(2), z.literal(3)]).default(1),
  /** liên kết ion vẽ kiểu khác (không có que, hai ion đặt cạnh nhau) */
  kind: z.enum(['covalent', 'ionic']).default('covalent'),
})
export type Bond = z.infer<typeof BondSchema>

export const IonSchema = z.object({
  /** id các nguyên tử (trong `atoms` của chất) tạo nên ion này */
  atomIds: z.array(z.string().min(1)).min(1),
  /** điện tích, ví dụ 1 cho H⁺, -2 cho SO₄²⁻ */
  charge: z
    .number()
    .int()
    .min(-3)
    .max(3)
    .refine((c) => c !== 0, 'ion phải mang điện'),
})
export type Ion = z.infer<typeof IonSchema>

export const MoleculeSchema = z
  .object({
    id: IdSchema,
    /** tên theo chương trình 2018 (tên quốc tế), ví dụ "Sodium chloride", "Oxygen"; riêng nước vẫn là "Nước" */
    name: z.string().min(1),
    /** tên thường gọi trong đời sống nếu khác tên chính, ví dụ "muối ăn", "sắt", "gỉ sắt" */
    commonName: z.string().optional(),
    /** công thức có chỉ số dưới dạng chữ thường, ví dụ "H2O"; giao diện tự chuyển số thành chỉ số dưới */
    formula: z.string().regex(/^[A-Za-z0-9()]+$/),
    atoms: z.array(AtomSchema).min(1),
    bonds: z.array(BondSchema),
    /** trạng thái thường gặp ở điều kiện phòng */
    state: z.enum(['solid', 'liquid', 'gas']),
    lifeExamples: z.array(LifeExampleSchema).min(1),
    funFact: z.string().optional(),
    conceptIds: z.array(IdSchema).default([]),
    /**
     * Chất này ở trong nước thì tách thành ion (acid mạnh, base tan, muối tan).
     * Mỗi phần tử là một ion: các nguyên tử tạo nên nó và điện tích của nó.
     * Chất có trường này và `state: 'liquid'` được vẽ ở hình phóng to như một dung dịch:
     * các ion bơi giữa những phân tử nước, thay vì phân tử còn nguyên vẹn.
     */
    ions: z.array(IonSchema).min(2).optional(),
  })
  .superRefine((m, ctx) => {
    if (m.ions) {
      const seen = new Map<string, number>()
      for (const ion of m.ions) for (const id of ion.atomIds) seen.set(id, (seen.get(id) ?? 0) + 1)
      for (const a of m.atoms) {
        if (seen.get(a.id) !== 1) {
          ctx.addIssue({
            code: 'custom',
            message: `nguyên tử "${a.id}" phải thuộc đúng một ion`,
            path: ['ions'],
          })
        }
      }
      if (
        seen.size > m.atoms.length ||
        [...seen.keys()].some((id) => !m.atoms.some((a) => a.id === id))
      ) {
        ctx.addIssue({
          code: 'custom',
          message: 'ion trỏ tới nguyên tử không tồn tại',
          path: ['ions'],
        })
      }
      if (m.ions.reduce((sum, ion) => sum + ion.charge, 0) !== 0) {
        ctx.addIssue({
          code: 'custom',
          message: 'tổng điện tích các ion phải bằng 0',
          path: ['ions'],
        })
      }
    }
    const ids = new Set(m.atoms.map((a) => a.id))
    if (ids.size !== m.atoms.length) {
      ctx.addIssue({ code: 'custom', message: 'id nguyên tử bị trùng', path: ['atoms'] })
    }
    m.bonds.forEach((b, i) => {
      if (!ids.has(b.a) || !ids.has(b.b)) {
        ctx.addIssue({
          code: 'custom',
          message: `liên kết ${i} trỏ tới nguyên tử không tồn tại`,
          path: ['bonds', i],
        })
      }
      if (b.a === b.b) {
        ctx.addIssue({
          code: 'custom',
          message: `liên kết ${i} nối nguyên tử với chính nó`,
          path: ['bonds', i],
        })
      }
    })
  })
export type Molecule = z.infer<typeof MoleculeSchema>
export type MoleculeInput = z.input<typeof MoleculeSchema>

export { moleculeComposition, moleculeLabel } from '../labels.js'
