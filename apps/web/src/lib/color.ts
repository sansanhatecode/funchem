/** Màu chữ đậm của giao diện (--color-ink). */
export const INK = '#1f2a37'
const WHITE = '#ffffff'

function channels(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  const full = h.length === 3 ? [...h].map((c) => c + c).join('') : h
  return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16)) as [number, number, number]
}

function luminance(hex: string): number {
  const [r, g, b] = channels(hex).map((v) => {
    const c = v / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  }) as [number, number, number]
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/** Tỉ lệ tương phản WCAG giữa hai màu hex, từ 1 (giống nhau) tới 21 (đen trên trắng). */
export function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x) as [number, number]
  return (hi + 0.05) / (lo + 0.05)
}

/**
 * Màu chữ đọc được trên một nền màu bất kì (ví dụ màu của Unit):
 * chữ trắng nếu đủ tương phản 4.5:1 theo WCAG AA, không thì chữ đậm (hoặc đen tuyền).
 */
export function inkOn(background: string): string {
  if (contrast(WHITE, background) >= 4.5) return WHITE
  // vài màu trung bình (đỏ tươi…) không đủ tương phản với cả chữ trắng lẫn chữ đậm: dùng đen tuyền
  return contrast(INK, background) >= 4.5 ? INK : '#000000'
}

/**
 * Làm đậm dần một màu cho tới khi dùng được làm màu chữ trên nền cho trước (mặc định nền trắng).
 * Giữ sắc màu của Unit cho chữ nhỏ mà vẫn đạt 4.5:1.
 */
export function readableOn(color: string, background = WHITE, min = 4.5): string {
  const [r, g, b] = channels(color)
  for (let t = 0; t <= 1; t += 0.05) {
    const hex = `#${[r, g, b]
      .map((v) =>
        Math.round(v * (1 - t))
          .toString(16)
          .padStart(2, '0'),
      )
      .join('')}`
    if (contrast(hex, background) >= min) return hex
  }
  return INK
}
