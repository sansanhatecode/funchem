import type { Metadata } from 'next'
import { Profile } from './profile'

export const metadata: Metadata = { title: 'Hồ sơ' }

export default function ProfilePage() {
  return <Profile />
}
