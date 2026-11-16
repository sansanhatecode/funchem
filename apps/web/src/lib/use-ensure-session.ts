'use client'

import { useEffect } from 'react'
import { authClient, useSession } from './auth-client'

let inflight: Promise<void> | null = null

/**
 * Tạo phiên khách ẩn danh nếu server xác nhận là chưa đăng nhập.
 *
 * Không được dựa vào trạng thái phiên ở trình duyệt: ngay sau khi đăng nhập có một khoảnh khắc
 * trạng thái đó tạm trống, và tạo phiên khách lúc ấy sẽ ghi đè lên phiên của tài khoản thật.
 * Vì vậy luôn hỏi lại server, và nếu việc hỏi bị lỗi (mất mạng, server lỗi) thì không làm gì.
 */
function ensureGuestSession(): Promise<void> {
  inflight ??= (async () => {
    try {
      const res = await authClient.getSession()
      if (!res.error && !res.data) await authClient.signIn.anonymous()
    } finally {
      inflight = null
    }
  })()
  return inflight
}

/**
 * Bảo đảm luôn có phiên đăng nhập: nếu chưa có thì tạo tài khoản khách ẩn danh.
 * Nhờ vậy tiến độ được lưu ở server từ bài đầu tiên, và giữ nguyên khi đăng ký sau.
 */
export function useEnsureSession() {
  const session = useSession()

  useEffect(() => {
    if (session.isPending || session.error || session.data) return
    void ensureGuestSession()
  }, [session.isPending, session.error, session.data])

  return session
}
