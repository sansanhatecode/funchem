import type { Metadata } from 'next'
import { LearnHome } from './learn-home'

export const metadata: Metadata = { title: 'Học' }

export default function LearnPage() {
  return <LearnHome />
}
