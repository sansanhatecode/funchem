import type { Metadata } from 'next'
import { outline } from '@/lib/content-slices'
import { LearnHome } from './learn-home'

export const metadata: Metadata = {
  title: 'Bản đồ học',
  description:
    'Lộ trình học hoá học từ con số 0: mỗi bài bắt đầu từ một hiện tượng đời sống rồi phóng to tới nguyên tử.',
  alternates: { canonical: '/learn' },
}

/** Bản đồ học chỉ cần dàn ý (tiêu đề và cảnh của từng bài), không cần bài tập. */
export default function LearnPage() {
  return <LearnHome units={outline()} />
}
