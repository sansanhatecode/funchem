import type { CSSProperties } from 'react'

const COLORS = ['#12b886', '#ffc233', '#ff7a45', '#1cb0f6', '#ff8fb1', '#9b7ede']

/** Pháo giấy rơi một lượt khi hoàn thành bài. Chỉ để trang trí; tắt khi hệ điều hành bật giảm chuyển động. */
export function Confetti({ count = 36 }: { count?: number }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-0 overflow-visible motion-reduce:hidden"
    >
      {Array.from({ length: count }, (_, i) => {
        // vị trí giả ngẫu nhiên nhưng ổn định giữa các lần render
        const x = (i * 61) % 100
        const drift = ((i * 37) % 80) - 40
        const style = {
          left: `${x}%`,
          width: 8 + (i % 3) * 3,
          height: 10 + (i % 4) * 3,
          backgroundColor: COLORS[i % COLORS.length],
          borderRadius: i % 3 === 0 ? '999px' : '2px',
          animation: `confetti-fall ${1.6 + (i % 5) * 0.25}s cubic-bezier(0.2, 0.6, 0.4, 1) ${(i % 9) * 0.07}s both`,
          '--cx': `${drift}px`,
          '--cr': `${360 + (i % 4) * 180}deg`,
        } as CSSProperties
        return <span key={i} className="absolute top-0 block" style={style} />
      })}
    </div>
  )
}
