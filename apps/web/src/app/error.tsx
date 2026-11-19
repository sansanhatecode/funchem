'use client'

import { useEffect } from 'react'
import { Mascot } from '@/components/mascot'
import { Button } from '@/components/ui/button'
import { reportError } from '@/lib/track'

/** Màn hình thay thế khi một trang gặp lỗi lúc hiển thị. Lỗi được báo về API để theo dõi. */
export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    reportError(error, 'boundary')
  }, [error])

  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center gap-4 p-6 text-center">
      <Mascot mood="oops" size={120} />
      <h1 className="text-2xl font-extrabold">Có gì đó trục trặc</h1>
      <p className="text-ink-soft">
        Trang này vừa gặp lỗi. Tiến độ đã lưu của bạn không bị ảnh hưởng. Thử tải lại nhé.
      </p>
      <Button size="lg" onClick={reset}>
        Thử lại
      </Button>
    </main>
  )
}
