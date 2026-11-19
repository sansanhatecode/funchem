import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

/**
 * Chỉ chặn những đường dẫn không phải trang cho người đọc. Trang cá nhân không chặn ở đây
 * mà đánh dấu noindex trong metadata, vì bot phải tải được trang thì mới thấy dấu đó.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/dev/', '/content/'] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
