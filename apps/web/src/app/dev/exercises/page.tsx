import { notFound } from 'next/navigation'
import { ExerciseGallery } from './exercise-gallery'

/** Trang thử nghiệm mọi dạng bài và hoạt hình phản ứng. Chỉ có ở môi trường phát triển. */
export default function DevExercisesPage() {
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_ENABLE_DEV_PAGES !== '1')
    notFound()
  return <ExerciseGallery />
}
