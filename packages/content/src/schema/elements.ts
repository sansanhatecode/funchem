import { z } from 'zod'
import { ELEMENT_SYMBOLS } from '../elements.js'

// Dữ liệu nguyên tố nằm ở ../elements.ts (không phụ thuộc zod) để mã chạy ở trình duyệt dùng được
// mà không kéo theo thư viện kiểm tra dữ liệu.
export * from '../elements.js'

export const ElementSymbolSchema = z.enum(ELEMENT_SYMBOLS)

/** Số lượng nguyên tử theo nguyên tố, ví dụ H2O → { H: 2, O: 1 } */
export const ElementCountsSchema = z.partialRecord(
  ElementSymbolSchema,
  z.number().int().nonnegative(),
)
export type ElementCounts = z.infer<typeof ElementCountsSchema>
