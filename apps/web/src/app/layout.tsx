import type { Metadata, Viewport } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import type { ReactNode } from 'react'
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from '@/lib/site'
import { Providers } from './providers'
import './globals.css'

const beVietnam = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-be-vietnam',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s · ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  // Ảnh xem trước lấy từ opengraph-image.tsx; tiêu đề và mô tả lấy theo từng trang.
  openGraph: { type: 'website', siteName: SITE_NAME, locale: 'vi_VN' },
  twitter: { card: 'summary_large_image' },
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
