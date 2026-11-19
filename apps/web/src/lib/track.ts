import { API_URL } from './config'

export type LearningEventType = 'lesson_start' | 'lesson_exit' | 'review_start' | 'review_exit'

export interface LearningEvent {
  type: LearningEventType
  lessonId?: string
  exerciseId?: string
  /** số câu đã trả lời trong lượt này */
  answered?: number
}

function post(path: string, body: unknown) {
  // keepalive: request vẫn được gửi khi người dùng đang rời trang hoặc đóng tab
  void fetch(`${API_URL}${path}`, {
    method: 'POST',
    credentials: 'include',
    keepalive: true,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }).catch(() => {
    // phân tích và báo lỗi không bao giờ được làm hỏng trải nghiệm học
  })
}

/** Ghi một sự kiện học tập để phân tích (bài nào bị bỏ dở, bỏ ở câu nào). Không chờ, không báo lỗi. */
export function trackEvent(event: LearningEvent) {
  post('/events', event)
}

const MAX_REPORTS_PER_PAGE = 5
let reported = 0
const seen = new Set<string>()

/** Báo một lỗi JavaScript về API (API ghi log và chuyển cho dịch vụ giám sát nếu có). */
export function reportError(error: unknown, source: 'error' | 'unhandledrejection' | 'boundary') {
  const err = error instanceof Error ? error : new Error(String(error))
  const message = (err.message || err.name || 'Lỗi không rõ').slice(0, 500)
  if (seen.has(message) || reported >= MAX_REPORTS_PER_PAGE) return
  seen.add(message)
  reported++
  post('/client-errors', {
    message,
    stack: err.stack?.slice(0, 4000),
    url: window.location.href.slice(0, 500),
    source,
  })
}

/** Bắt lỗi chưa được xử lí ở cấp cửa sổ. Trả về hàm gỡ bỏ. */
export function installErrorReporting(): () => void {
  const onError = (e: ErrorEvent) => reportError(e.error ?? e.message, 'error')
  const onRejection = (e: PromiseRejectionEvent) => reportError(e.reason, 'unhandledrejection')
  window.addEventListener('error', onError)
  window.addEventListener('unhandledrejection', onRejection)
  return () => {
    window.removeEventListener('error', onError)
    window.removeEventListener('unhandledrejection', onRejection)
  }
}
