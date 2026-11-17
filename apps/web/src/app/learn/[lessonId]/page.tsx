import { content } from '@funchem/content'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LessonPlayer } from '@/components/learn/lesson-player'
import { ContentProvider } from '@/lib/content-context'
import { lessonBundle } from '@/lib/content-slices'

type Props = { params: Promise<{ lessonId: string }> }

export function generateStaticParams() {
  return [...content.lessons.keys()].map((lessonId) => ({ lessonId }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lessonId } = await params
  return { title: content.lessons.get(lessonId)?.lesson.title ?? 'Bài học' }
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
