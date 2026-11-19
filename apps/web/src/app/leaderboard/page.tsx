import type { Metadata } from 'next'
import { NO_INDEX } from '@/lib/site'
import { Leaderboard } from './leaderboard'

export const metadata: Metadata = { title: 'Bảng xếp hạng', robots: NO_INDEX }

export default function LeaderboardPage() {
  return <Leaderboard />
}
