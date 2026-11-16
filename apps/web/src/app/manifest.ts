import type { MetadataRoute } from 'next'

/** Cho phép cài FunChem lên màn hình chính của điện thoại. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'FunChem: học hoá học bằng hình ảnh',
    short_name: 'FunChem',
    description: 'Hoá học ở khắp mọi nơi. Nhìn hiện tượng, phóng to, thấy nguyên tử.',
    start_url: '/learn',
    display: 'standalone',
    background_color: '#f6f8fb',
    theme_color: '#12b886',
    lang: 'vi',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }],
  }
}
