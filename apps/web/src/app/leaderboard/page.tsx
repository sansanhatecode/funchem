import type { Metadata } from 'next'
import { Leaderboard } from './leaderboard'

export const metadata: Metadata = { title: 'Bảng xếp hạng' }

export default function LeaderboardPage() {
  return <Leaderboard />
}
