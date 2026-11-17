import { content } from '@funchem/content'
import type { ReactNode } from 'react'
import { ContentProvider } from '@/lib/content-context'

/** Các trang xem trước dành cho người phát triển được dùng toàn bộ nội dung. */
export default function DevLayout({ children }: { children: ReactNode }) {
  return (
    <ContentProvider
      slice={{
        molecules: [...content.molecules.values()],
        reactions: [...content.reactions.values()],
      }}
    >
      {children}
    </ContentProvider>
  )
}
