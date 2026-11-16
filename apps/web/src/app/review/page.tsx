import type { Metadata } from 'next'
import { ReviewPlayer } from './review-player'

export const metadata: Metadata = { title: 'Ôn tập' }

export default function ReviewPage() {
  return <ReviewPlayer />
}
