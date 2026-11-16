export interface StreakState {
  streakCurrent: number
  streakLongest: number
  /** ngày hoạt động gần nhất theo múi giờ người dùng, dạng YYYY-MM-DD, null nếu chưa học bao giờ */
  lastActiveDate: string | null
}

/** Ngày YYYY-MM-DD của một thời điểm theo múi giờ IANA (ví dụ "Asia/Ho_Chi_Minh"). */
export function localDate(at: Date, timeZone: string): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(at)
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '00'
  return `${get('year')}-${get('month')}-${get('day')}`
}

/** Số ngày chênh lệch giữa hai ngày YYYY-MM-DD (b - a). */
export function daysBetween(a: string, b: string): number {
  const toUtc = (d: string) => {
    const [y, m, day] = d.split('-').map(Number) as [number, number, number]
    return Date.UTC(y, m - 1, day)
  }
  return Math.round((toUtc(b) - toUtc(a)) / 86_400_000)
}

/**
 * Cập nhật streak khi người dùng hoàn thành một bài tại thời điểm `at`.
 * - cùng ngày: giữ nguyên
 * - hôm qua: +1
 * - xa hơn hoặc lần đầu: về 1
 */
export function updateStreak(state: StreakState, at: Date, timeZone: string): StreakState {
  const today = localDate(at, timeZone)
  if (state.lastActiveDate === today) return state
  let streakCurrent = 1
  if (state.lastActiveDate && daysBetween(state.lastActiveDate, today) === 1) {
    streakCurrent = state.streakCurrent + 1
  }
  return {
    streakCurrent,
    streakLongest: Math.max(state.streakLongest, streakCurrent),
    lastActiveDate: today,
  }
}

/** Streak còn hiệu lực để hiển thị (0 nếu đã bỏ lỡ từ 2 ngày trở lên). */
export function effectiveStreak(state: StreakState, now: Date, timeZone: string): number {
  if (!state.lastActiveDate) return 0
  const gap = daysBetween(state.lastActiveDate, localDate(now, timeZone))
  return gap <= 1 ? state.streakCurrent : 0
}
