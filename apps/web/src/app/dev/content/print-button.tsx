'use client'

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="min-h-10 rounded-full border-2 border-line bg-paper px-4 text-sm font-extrabold hover:bg-canvas"
    >
      In hoặc lưu PDF
    </button>
  )
}
