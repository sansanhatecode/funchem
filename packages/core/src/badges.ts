export interface BadgeDef {
  id: string
  title: string
  description: string
  /** nhóm, để giao diện chọn màu và biểu tượng */
  kind: 'start' | 'unit' | 'streak' | 'collector' | 'xp' | 'perfect'
}

export interface BadgeState {
  /** số bài (kể cả checkpoint đã qua) đã hoàn thành */
  lessonsCompleted: number
  /** thứ tự các Unit đã qua checkpoint, ví dụ [1, 2] */
  unitsPassed: number[]
  streakLongest: number
  moleculesUnlocked: number
  xpTotal: number
  /** đã từng đạt 100% ở một bài nào chưa */
  hasPerfectLesson: boolean
}

const STREAKS = [3, 7, 30]
const COLLECTOR = [5, 10, 20]
const XP = [100, 500, 1000]

/** Danh sách huy hiệu cho một chương trình có `unitCount` Unit. */
export function badgeCatalog(unitCount: number): BadgeDef[] {
  return [
    {
      id: 'first-lesson',
      title: 'Bước đầu tiên',
      description: 'Hoàn thành bài học đầu tiên',
      kind: 'start',
    },
    {
      id: 'perfect-lesson',
      title: 'Không sai câu nào',
      description: 'Đạt 100% trong một bài học',
      kind: 'perfect',
    },
    ...Array.from({ length: unitCount }, (_, i) => ({
      id: `unit-${i + 1}`,
      title: `Xong Unit ${i + 1}`,
      description: `Vượt qua bài kiểm tra Unit ${i + 1}`,
      kind: 'unit' as const,
    })),
    ...STREAKS.map((n) => ({
      id: `streak-${n}`,
      title: `${n} ngày liên tiếp`,
      description: `Học ${n} ngày liền không nghỉ`,
      kind: 'streak' as const,
    })),
    ...COLLECTOR.map((n) => ({
      id: `collector-${n}`,
      title: `Sưu tầm ${n} phân tử`,
      description: `Mở khoá ${n} phân tử trong bộ sưu tập`,
      kind: 'collector' as const,
    })),
    ...XP.map((n) => ({
      id: `xp-${n}`,
      title: `${n} XP`,
      description: `Tích luỹ ${n} điểm kinh nghiệm`,
      kind: 'xp' as const,
    })),
  ]
}

/** Id các huy hiệu mà trạng thái hiện tại xứng đáng có. */
export function earnedBadges(state: BadgeState): string[] {
  const out: string[] = []
  if (state.lessonsCompleted >= 1) out.push('first-lesson')
  if (state.hasPerfectLesson) out.push('perfect-lesson')
  for (const u of state.unitsPassed) out.push(`unit-${u}`)
  for (const n of STREAKS) if (state.streakLongest >= n) out.push(`streak-${n}`)
  for (const n of COLLECTOR) if (state.moleculesUnlocked >= n) out.push(`collector-${n}`)
  for (const n of XP) if (state.xpTotal >= n) out.push(`xp-${n}`)
  return out
}
