import { content } from '@funchem/content'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LessonPlayer } from '@/components/learn/lesson-player'

type Props = { params: Promise<{ lessonId: string }> }

export function generateStaticParams() {
  return [...content.lessons.keys()].map((lessonId) => ({ lessonId }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lessonId } = await params
  return { title: content.lessons.get(lessonId)?.lesson.title ?? 'Bài học' }
}

export default async function LessonPage({ params }: Props) {
  const { lessonId } = await params
  if (!content.lessons.has(lessonId)) notFound()
  return <LessonPlayer lessonId={lessonId} />
}
