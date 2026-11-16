'use client'

import { useEffect, useRef } from 'react'
import { authClient, useSession } from './auth-client'

/**
 * Bảo đảm luôn có phiên đăng nhập: nếu chưa có thì tạo tài khoản khách ẩn danh.
 * Nhờ vậy tiến độ được lưu ở server từ bài đầu tiên, và giữ nguyên khi đăng ký sau.
 */
export function useEnsureSession() {
  const session = useSession()
  const started = useRef(false)

  useEffect(() => {
    if (session.isPending || session.data || started.current) return
    started.current = true
    void authClient.signIn.anonymous()
  }, [session.isPending, session.data])

  return session
}
