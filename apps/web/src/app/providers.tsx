'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode, useEffect, useState } from 'react'
import { installErrorReporting } from '@/lib/track'

export function Providers({ children }: { children: ReactNode }) {
  const [client] = useState(
    () => new QueryClient({ defaultOptions: { queries: { staleTime: 30_000, retry: 1 } } }),
  )
  // báo lỗi JavaScript chưa được xử lí về API
  useEffect(() => installErrorReporting(), [])
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
