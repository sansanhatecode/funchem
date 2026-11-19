import type { Metadata } from 'next'
import { NO_INDEX } from '@/lib/site'
import { Profile } from './profile'

export const metadata: Metadata = { title: 'Hồ sơ', robots: NO_INDEX }

export default function ProfilePage() {
  return <Profile />
}
