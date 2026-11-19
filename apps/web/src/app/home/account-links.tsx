'use client'

import { type ProfileResponse, unwrap } from '@funchem/api-client'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { buttonClass } from '@/components/ui/button'
import { api } from '@/lib/api'
import { useSession } from '@/lib/auth-client'

/**
 * Tài khoản đang đăng nhập ở trang chủ. Chỉ đọc phiên, không tạo phiên khách:
 * người mới ghé trang chủ chưa cần tài khoản. Khách ẩn danh được coi như chưa đăng nhập.
 */
function useAccount() {
  const session = useSession()
  const user = session.data?.user
  const signedIn = Boolean(user) && !(user as { isAnonymous?: boolean | null }).isAnonymous
  const profile = useQuery<ProfileResponse>({
    queryKey: ['profile', user?.id],
    queryFn: async () => unwrap(await api.me.profile.$get()),
    enabled: signedIn,
  })
  if (!signedIn || !user) return null
  return { name: profile.data?.displayName || user.name || user.email }
}

/** Góc phải thanh đầu trang: "Đăng nhập", hoặc tên người dùng dẫn tới hồ sơ khi đã đăng nhập. */
export function HeaderAccount() {
  const account = useAccount()
  if (!account) {
    return (
      <Link href="/login" className={buttonClass('ghost', 'md')}>
        Đăng nhập
      </Link>
    )
  }
  return (
    <Link
      href="/profile"
      aria-label={`Hồ sơ của ${account.name}`}
      className={buttonClass('ghost', 'md', 'min-w-0')}
    >
      <span className="max-w-[12rem] truncate">{account.name}</span>
    </Link>
  )
}

/** Hai nút ở phần mở đầu. Đã đăng nhập thì không mời đăng nhập nữa. */
export function HeroActions() {
  const account = useAccount()
  return (
    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
      <Link href="/learn" className={buttonClass('primary', 'lg')}>
        {account ? 'Học tiếp' : 'Bắt đầu học'}
      </Link>
      {!account && (
        <Link href="/login" className={buttonClass('secondary', 'lg')}>
          Tôi đã có tài khoản
        </Link>
      )}
    </div>
  )
}
