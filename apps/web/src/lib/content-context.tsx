'use client'

import type { ContentLookup } from '@funchem/content/lib'
import { createContext, type ReactNode, useContext, useMemo } from 'react'
import type { ContentSlice } from './content-types'

const EMPTY: ContentLookup = { molecules: new Map(), reactions: new Map() }
const ContentContext = createContext<ContentLookup>(EMPTY)

/**
 * Đưa phần nội dung server đã cắt sẵn cho các thành phần bên dưới.
 * Trình duyệt không nhập kho nội dung; nó chỉ biết những gì màn hình này cần.
 */
export function ContentProvider({ slice, children }: { slice: ContentSlice; children: ReactNode }) {
  const value = useMemo<ContentLookup>(
    () => ({
      molecules: new Map(slice.molecules.map((m) => [m.id, m])),
      reactions: new Map(slice.reactions.map((r) => [r.id, r])),
    }),
    [slice],
  )
  return <ContentContext value={value}>{children}</ContentContext>
}

/** Tra phân tử và phản ứng của màn hình hiện tại. */
export function useContent(): ContentLookup {
  return useContext(ContentContext)
}
