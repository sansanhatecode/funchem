import { exercisesBundle } from '@/lib/content-slices'

/**
 * Trả về đúng các bài tập được hỏi (cùng phân tử, phản ứng chúng cần) cho lượt ôn tập.
 * Danh sách câu ôn chỉ biết được lúc chạy, nên không cắt sẵn lúc build được.
 */
export function GET(request: Request) {
  const ids = (new URL(request.url).searchParams.get('ids') ?? '')
    .split(',')
    .filter(Boolean)
    .slice(0, 50)
  return Response.json(exercisesBundle(ids), {
    headers: { 'Cache-Control': 'public, max-age=300' },
  })
}
