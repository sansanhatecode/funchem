import type { Metadata, Viewport } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import type { ReactNode } from 'react'
import { Providers } from './providers'
import './globals.css'

const beVietnam = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-be-vietnam',
  display: 'swap',
})

export const metadata: Metadata = {
  title: { default: 'FunChem: học hoá học bằng hình ảnh', template: '%s · FunChem' },
  description:
    'Học hoá học từ con số 0 bằng hình ảnh sinh động. Phân tử và phản ứng được hình hoá, gắn với đời sống hằng ngày.',
}

export const viewport: Viewport = { themeColor: '#12b886', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi" className={beVietnam.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
