/**
 * URL công khai của web, dùng cho canonical, sitemap, robots và ảnh xem trước khi chia sẻ link.
 * Chỉ dùng ở server. Thứ tự ưu tiên: NEXT_PUBLIC_SITE_URL, domain production do Vercel cấp, localhost.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
).replace(/\/+$/, '')

export const SITE_NAME = 'FunChem'
export const SITE_TITLE = 'FunChem: học hoá học bằng hình ảnh'
export const SITE_DESCRIPTION =
  'Học hoá học từ con số 0 bằng hình ảnh sinh động. Phân tử và phản ứng được hình hoá, gắn với đời sống hằng ngày.'

/** Các trang công khai được lập chỉ mục. Trang cá nhân và trang bài học (cần phiên mới thấy nội dung) không nằm ở đây. */
export const INDEXED_PATHS = ['/', '/learn', '/molecules', '/terms', '/privacy'] as const

/** Dùng cho các trang chỉ có nghĩa với người đang đăng nhập: không lập chỉ mục, vẫn cho bot đi theo link. */
export const NO_INDEX = { index: false, follow: true } as const

/** Cắt một đoạn văn cho vừa thẻ description, không cắt giữa từ. */
export function toDescription(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean
  const cut = clean.slice(0, max - 1)
  const lastSpace = cut.lastIndexOf(' ')
  return `${(lastSpace > max / 2 ? cut.slice(0, lastSpace) : cut).replace(/[\s,.;:]+$/, '')}…`
}
