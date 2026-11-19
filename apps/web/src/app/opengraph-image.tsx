import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const alt = 'FunChem: học hoá học bằng hình ảnh'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/** Ảnh xem trước mặc định khi chia sẻ link FunChem (Zalo, Facebook, Messenger). Dựng một lần lúc build. */
export default async function Image() {
  const font = await readFile(join(process.cwd(), 'assets/BeVietnamPro-ExtraBold.ttf'))
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 96px',
        background: 'linear-gradient(135deg, #12b886 0%, #0b8f69 100%)',
        color: '#ffffff',
        fontFamily: 'Be Vietnam Pro',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* cùng hình phân tử nước với icon.svg */}
        <svg width="132" height="132" viewBox="0 0 64 64">
          <rect width="64" height="64" rx="14" fill="#ffffff" />
          <line
            x1="32"
            y1="26"
            x2="18"
            y2="42"
            stroke="#0b8f69"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <line
            x1="32"
            y1="26"
            x2="46"
            y2="42"
            stroke="#0b8f69"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle cx="32" cy="25" r="11" fill="#ef4444" stroke="#ffffff" strokeWidth="3" />
          <circle cx="18" cy="43" r="7.5" fill="#12b886" />
          <circle cx="46" cy="43" r="7.5" fill="#12b886" />
        </svg>
        <div style={{ marginLeft: 36, fontSize: 104, letterSpacing: -3 }}>FunChem</div>
      </div>
      <div style={{ marginTop: 56, fontSize: 68, lineHeight: 1.15, letterSpacing: -1.5 }}>
        Học hoá học bằng hình ảnh
      </div>
      <div style={{ marginTop: 28, fontSize: 36, opacity: 0.9 }}>
        Nhìn hiện tượng, phóng to, thấy nguyên tử.
      </div>
    </div>,
    {
      ...size,
      fonts: [{ name: 'Be Vietnam Pro', data: font, style: 'normal', weight: 800 }],
    },
  )
}
