import type { Molecule } from './schema/molecule.js'
import type { Reaction } from './schema/reaction.js'

/**
 * Phần nội dung tối thiểu để vẽ và chấm một bài tập: tra phân tử và phản ứng theo id.
 * Kho nội dung đầy đủ (ContentRegistry) thoả mãn kiểu này, và trình duyệt cũng dựng được
 * một bản nhỏ chỉ gồm những gì bài đang học cần.
 */
export interface ContentLookup {
  molecules: Map<string, Molecule>
  reactions: Map<string, Reaction>
}
