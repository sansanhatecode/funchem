import { content, type Lesson, type SceneId } from '@funchem/content'

/** Cảnh đời sống đại diện cho một bài học (lấy từ thẻ Khám phá của bài). */
export function lessonScene(lesson: Lesson): SceneId | undefined {
  const v = lesson.intro?.visual
  if (!v) return undefined
  switch (v.type) {
    case 'molecule':
      return (
        v.scene ??
        content.molecules.get(v.moleculeId)?.lifeExamples.find((e) => e.illustration)?.illustration
      )
    case 'reaction':
      return v.scene ?? content.reactions.get(v.reactionId)?.story.illustration
    case 'states':
      return v.scenes.liquid
    case 'periodic-table':
    case 'atom':
      return v.scene
  }
}
