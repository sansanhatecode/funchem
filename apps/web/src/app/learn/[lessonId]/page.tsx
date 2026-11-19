import { content } from '@funchem/content'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LessonPlayer } from '@/components/learn/lesson-player'
import { ContentProvider } from '@/lib/content-context'
import { lessonBundle } from '@/lib/content-slices'
import { NO_INDEX, toDescription } from '@/lib/site'

type Props = { params: Promise<{ lessonId: string }> }

export function generateStaticParams() {
  return [...content.lessons.keys()].map((lessonId) => ({ lessonId }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lessonId } = await params
  const entry = content.lessons.get(lessonId)
  if (!entry) return { title: 'Bài học', robots: NO_INDEX }
  const { lesson, unit } = entry
  return {
    title: lesson.title,
    // Mô tả hiện khi chia sẻ link bài học: lấy từ câu chuyện mở đầu, bài kiểm tra thì lấy theo chương.
    description: toDescription(
      lesson.intro
        ? lesson.intro.story.join(' ')
        : `Bài kiểm tra cuối chương “${unit.title}”: ${unit.tagline}`,
    ),
    // Nội dung bài chỉ hiện sau khi có phiên và bài đã mở khoá, nên bot chỉ thấy khung chờ.
    robots: NO_INDEX,
  }
}

/** Server cắt sẵn đúng một bài học cùng phân tử, phản ứng nó dùng rồi mới gửi xuống trình duyệt. */
export default async function LessonPage({ params }: Props) {
  const { lessonId } = await params
  const bundle = lessonBundle(lessonId)
  if (!bundle) notFound()
  return (
    <ContentProvider slice={bundle.slice}>
      <LessonPlayer bundle={bundle} />
    </ContentProvider>
  )
}
