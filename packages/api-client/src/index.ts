import type { AppType } from '@funchem/api/app'
import { hc, type InferResponseType } from 'hono/client'

export interface ApiClientOptions {
  /**
   * Token cho mobile (Better Auth bearer). Web không cần vì dùng cookie.
   * Hàm được gọi trước mỗi request.
   */
  getToken?: () => string | null | Promise<string | null>
  fetch?: typeof fetch
}

/**
 * Client có kiểu cho FunChem API, dùng chung cho web và mobile.
 * Kiểu sinh từ định nghĩa route của Hono: đổi API là lỗi compile ở đây.
 */
export function createApiClient(baseUrl: string, options: ApiClientOptions = {}) {
  const baseFetch = options.fetch ?? fetch
  return hc<AppType>(baseUrl, {
    fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
      const headers = new Headers(init?.headers)
      const token = await options.getToken?.()
      if (token) headers.set('Authorization', `Bearer ${token}`)
      return baseFetch(input, { ...init, headers, credentials: 'include' })
    },
  })
}

export type ApiClient = ReturnType<typeof createApiClient>

export type ProgressResponse = InferResponseType<ApiClient['me']['progress']['$get'], 200>
export type AttemptResponse = InferResponseType<ApiClient['attempts']['$post'], 201>
export type MeResponse = InferResponseType<ApiClient['me']['$get'], 200>

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

/** Đọc JSON hoặc ném ApiError nếu response không ok. */
export async function unwrap<T>(res: {
  ok: boolean
  status: number
  json(): Promise<T>
}): Promise<T> {
  if (!res.ok) {
    let msg = `HTTP ${res.status}`
    try {
      const body = (await res.json()) as { error?: string }
      if (body?.error) msg = body.error
    } catch {
      /* ignore */
    }
    throw new ApiError(res.status, msg)
  }
  return res.json()
}
