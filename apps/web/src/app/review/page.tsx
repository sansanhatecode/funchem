import type { Metadata } from 'next'
import { NO_INDEX } from '@/lib/site'
import { ReviewPlayer } from './review-player'

export const metadata: Metadata = { title: 'Ôn tập', robots: NO_INDEX }

export default function ReviewPage() {
  return <ReviewPlayer />
}
