import type { Metadata } from 'next'
import { outline } from '@/lib/content-slices'
import { LearnHome } from './learn-home'

export const metadata: Metadata = { title: 'Học' }

/** Bản đồ học chỉ cần dàn ý (tiêu đề và cảnh của từng bài), không cần bài tập. */
export default function LearnPage() {
  return <LearnHome units={outline()} />
}
