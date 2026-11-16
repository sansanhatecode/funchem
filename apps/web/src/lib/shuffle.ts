/** Xáo trộn ổn định theo seed: cùng seed cho cùng thứ tự, tránh nhảy vị trí khi render lại. */
export function seededShuffle<T>(items: readonly T[], seed: string): T[] {
  let h = 1779033703 ^ seed.length
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353)
    h = (h << 13) | (h >>> 19)
  }
  const rand = () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507)
    h = Math.imul(h ^ (h >>> 13), 3266489909)
    h ^= h >>> 16
    return (h >>> 0) / 4294967296
  }
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[out[i], out[j]] = [out[j]!, out[i]!]
  }
  // không bao giờ trả về đúng thứ tự gốc (bài sắp xếp sẽ lộ đáp án)
  if (out.length > 1 && out.every((v, i) => v === items[i])) out.push(out.shift()!)
  return out
}
