import { content } from '@funchem/content'
import { describe, expect, it } from 'vitest'
import { exercisesBundle, lessonBundle, outline, sliceFor } from './content-slices'

describe('cắt nội dung cho trình duyệt', () => {
  it('bài không tồn tại trả về null', () => {
    expect(lessonBundle('khong-co')).toBeNull()
  })

  it.each([...content.lessons.keys()])('%s: slice có đủ mọi phân tử và phản ứng bài cần', (id) => {
    const bundle = lessonBundle(id)!
    const molecules = new Set(bundle.slice.molecules.map((m) => m.id))
    const reactions = new Map(bundle.slice.reactions.map((r) => [r.id, r]))
    const needMolecule = (mid: string | undefined) => {
      if (mid) expect(molecules.has(mid), `thiếu phân tử ${mid}`).toBe(true)
    }
    const needReaction = (rid: string) => {
      const r = reactions.get(rid)
      expect(r, `thiếu phản ứng ${rid}`).toBeDefined()
      for (const side of [...r!.reactants, ...r!.products]) needMolecule(side.moleculeId)
    }
    for (const mid of bundle.lesson.unlocksMolecules) needMolecule(mid)
    const v = bundle.lesson.intro?.visual
    if (v?.type === 'molecule' || v?.type === 'states') needMolecule(v.moleculeId)
    if (v?.type === 'reaction') needReaction(v.reactionId)
    for (const ex of bundle.lesson.exercises) {
      if (ex.type === 'balance-reaction') needReaction(ex.reactionId)
      if (ex.type === 'build-molecule') needMolecule(ex.targetMoleculeId)
      if (ex.type === 'mcq') {
        needMolecule(ex.visual?.moleculeId)
        ex.options.forEach((o) => needMolecule(o.moleculeId))
      }
    }
  })

  it('slice của một bài nhỏ hơn hẳn cả kho', () => {
    const bundle = lessonBundle('u1-l1-atoms')!
    expect(bundle.slice.molecules.length).toBeLessThan(content.molecules.size / 2)
  })

  it('bài cuối chương trình không có bài kế tiếp, các bài khác thì có', () => {
    const ids = content.units.flatMap((u) => u.lessons.map((l) => l.id))
    expect(lessonBundle(ids.at(-1)!)!.next).toBeNull()
    expect(lessonBundle(ids[0]!)!.next?.id).toBe(ids[1])
  })

  it('sliceFor kéo theo phân tử của phản ứng', () => {
    const slice = sliceFor({ reactionIds: ['water-formation'] })
    expect(slice.reactions.map((r) => r.id)).toEqual(['water-formation'])
    expect(slice.molecules.map((m) => m.id).sort()).toEqual(['h2', 'h2o', 'o2'])
  })

  it('exercisesBundle bỏ qua id lạ và giữ thứ tự được hỏi', () => {
    const [a, b] = [...content.exercises.keys()]
    const bundle = exercisesBundle([b!, 'khong-co', a!])
    expect(bundle.exercises.map((e) => e.id)).toEqual([b, a])
  })

  it('dàn ý cho bản đồ học không kèm bài tập', () => {
    const units = outline()
    expect(units).toHaveLength(content.units.length)
    expect(JSON.stringify(units)).not.toContain('"exercises"')
    expect(units[0]!.lessons[0]).toMatchObject({ id: content.units[0]!.lessons[0]!.id })
  })
})
