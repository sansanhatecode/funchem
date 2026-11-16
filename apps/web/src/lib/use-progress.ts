'use client'

import { type ProgressResponse, unwrap } from '@funchem/api-client'
import { useQuery } from '@tanstack/react-query'
import { api } from './api'
import { useEnsureSession } from './use-ensure-session'

export const progressKey = (userId: string | undefined) => ['progress', userId] as const

/** Phiên đăng nhập (tự tạo khách nếu chưa có) + tiến độ từ server. */
export function useProgress() {
  const session = useEnsureSession()
  const user = session.data?.user
  const query = useQuery<ProgressResponse>({
    queryKey: progressKey(user?.id),
    queryFn: async () => unwrap(await api.me.progress.$get()),
    enabled: Boolean(user),
  })
  return {
    user,
    isGuest: Boolean((user as { isAnonymous?: boolean | null } | undefined)?.isAnonymous),
    progress: query.data,
    isLoading: !user || query.isPending,
    isError: query.isError,
    refetch: query.refetch,
  }
}
