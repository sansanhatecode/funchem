import type { NextConfig } from 'next'

const config: NextConfig = {
  reactStrictMode: true,
  // test trình duyệt build ra thư mục riêng để không đụng bản dev đang chạy
  distDir: process.env.NEXT_DIST_DIR ?? '.next',
}

export default config
