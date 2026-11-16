import { describe, expect, it } from 'vitest'
import { effectiveStreak, localDate, updateStreak } from './streak.js'

const TZ = 'Asia/Ho_Chi_Minh'

describe('streak', () => {
  it('localDate theo múi giờ', () => {
    // 23:30 UTC ngày 1 = 06:30 ngày 2 ở Việt Nam
    expect(localDate(new Date('2026-11-01T23:30:00Z'), TZ)).toBe('2026-11-02')
    expect(localDate(new Date('2026-11-01T23:30:00Z'), 'UTC')).toBe('2026-11-01')
  })
  it('lần đầu học → streak 1', () => {
    const s = updateStreak(
      { streakCurrent: 0, streakLongest: 0, lastActiveDate: null },
      new Date('2026-11-10T03:00:00Z'),
      TZ,
    )
    expect(s).toEqual({ streakCurrent: 1, streakLongest: 1, lastActiveDate: '2026-11-10' })
  })
  it('cùng ngày không đổi', () => {
    const prev = { streakCurrent: 3, streakLongest: 5, lastActiveDate: '2026-11-10' }
    expect(updateStreak(prev, new Date('2026-11-10T15:00:00Z'), TZ)).toBe(prev)
  })
  it('hôm qua → +1 và cập nhật kỷ lục', () => {
    const s = updateStreak(
      { streakCurrent: 5, streakLongest: 5, lastActiveDate: '2026-11-10' },
      new Date('2026-11-11T01:00:00Z'),
      TZ,
    )
    expect(s.streakCurrent).toBe(6)
    expect(s.streakLongest).toBe(6)
  })
  it('bỏ lỡ một ngày → về 1, giữ kỷ lục', () => {
    const s = updateStreak(
      { streakCurrent: 5, streakLongest: 9, lastActiveDate: '2026-11-10' },
      new Date('2026-11-12T01:00:00Z'),
      TZ,
    )
    expect(s).toEqual({ streakCurrent: 1, streakLongest: 9, lastActiveDate: '2026-11-12' })
  })
  it('effectiveStreak về 0 khi đã bỏ lỡ', () => {
    const st = { streakCurrent: 4, streakLongest: 4, lastActiveDate: '2026-11-10' }
    expect(effectiveStreak(st, new Date('2026-11-11T01:00:00Z'), TZ)).toBe(4)
    expect(effectiveStreak(st, new Date('2026-11-12T01:00:00Z'), TZ)).toBe(0)
  })
})
