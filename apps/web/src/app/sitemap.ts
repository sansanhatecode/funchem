import type { MetadataRoute } from 'next'
import { INDEXED_PATHS, SITE_URL } from '@/lib/site'

const PRIORITY: Record<(typeof INDEXED_PATHS)[number], number> = {
  '/': 1,
  '/learn': 0.8,
  '/molecules': 0.7,
  '/terms': 0.2,
  '/privacy': 0.2,
}

export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXED_PATHS.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    changeFrequency: path === '/terms' || path === '/privacy' ? 'yearly' : 'weekly',
    priority: PRIORITY[path],
  }))
}
