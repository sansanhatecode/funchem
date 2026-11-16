import { describe, expect, it } from 'vitest'
import { buildRegistry, content, ContentValidationError } from './registry.js'
import { formatFormula, parseFormula } from './formula.js'
import { molecules } from './data/molecules/index.js'
import { reactions } from './data/reactions/index.js'
import { concepts } from './data/concepts.js'

describe('parseFormula', () => {
  it('đếm đúng công thức đơn giản', () => {
    expect(parseFormula('H2O')).toEqual({ H: 2, O: 1 })
    expect(parseFormula('Fe2O3')).toEqual({ Fe: 2, O: 3 })
    expect(parseFormula('NaCl')).toEqual({ Na: 1, Cl: 1 })
  })
  it('xử lý ngoặc', () => {
    expect(parseFormula('Ca(OH)2')).toEqual({ Ca: 1, O: 2, H: 2 })
  })
  it('báo lỗi với nguyên tố lạ', () => {
    expect(() => parseFormula('Xx2')).toThrow(/không hỗ trợ/)
  })
  it('định dạng chỉ số dưới', () => {
    expect(formatFormula('H2O')).toBe('H₂O')
  })
})

describe('nội dung trong repo', () => {
  it('hợp lệ và có ít nhất một unit', () => {
    expect(content.units.length).toBeGreaterThan(0)
    expect(content.molecules.size).toBeGreaterThan(0)
    expect(content.reactions.size).toBeGreaterThan(0)
  })
  it('mọi phân tử và phản ứng đều gắn với một cảnh đời sống', () => {
    for (const m of content.molecules.values()) {
      expect(m.lifeExamples[0]?.illustration, `phân tử ${m.id}`).toBeDefined()
    }
    for (const r of content.reactions.values()) {
      expect(r.story.illustration, `phản ứng ${r.id}`).toBeDefined()
    }
  })
  it('mọi unit kết thúc bằng checkpoint', () => {
    for (const u of content.units) {
      expect(u.lessons.at(-1)?.kind).toBe('checkpoint')
    }
  })
})

describe('buildRegistry bắt lỗi tham chiếu', () => {
  it('phát hiện phân tử vẽ sai công thức', () => {
    const bad = {
      ...molecules[0]!,
      id: 'bad',
      formula: 'H2O',
      atoms: [{ id: 'o', element: 'O', x: 50, y: 50 }],
      bonds: [],
    }
    expect(() => buildRegistry({ units: [], molecules: [bad], reactions: [], concepts })).toThrow(
      ContentValidationError,
    )
  })
  it('phát hiện phản ứng không cân bằng', () => {
    const bad = { ...reactions[0]!, id: 'bad', products: [{ moleculeId: 'co2', coefficient: 1 }] }
    expect(() => buildRegistry({ units: [], molecules, reactions: [bad], concepts })).toThrow(
      /không cân bằng/,
    )
  })
  it('phát hiện bài tập trỏ tới phân tử không tồn tại', () => {
    const unit = {
      id: 'u-test',
      order: 99,
      title: 't',
      tagline: 't',
      color: '#000000',
      lessons: [
        {
          id: 'u-test-cp',
          title: 'cp',
          kind: 'checkpoint',
          exercises: [
            {
              id: 'u-test-e1',
              type: 'build-molecule',
              prompt: 'p',
              explanation: 'e',
              targetMoleculeId: 'khong-co',
              availableAtoms: { H: 2 },
            },
          ],
        },
      ],
    }
    expect(() => buildRegistry({ units: [unit], molecules, reactions, concepts })).toThrow(
      /khong-co/,
    )
  })
  it('phát hiện bài tập không thể trả lời đúng', () => {
    const lesson = (exercise: object) => ({
      id: 'u-bad',
      order: 98,
      title: 't',
      tagline: 't',
      color: '#000000',
      lessons: [{ id: 'u-bad-cp', title: 'cp', kind: 'checkpoint', exercises: [exercise] }],
    })
    const base = { id: 'u-bad-e1', prompt: 'p', explanation: 'e' }
    const build = (unit: object) => () =>
      buildRegistry({ units: [unit], molecules, reactions, concepts })

    expect(
      build(
        lesson({
          ...base,
          type: 'build-molecule',
          targetMoleculeId: 'h2o',
          availableAtoms: { H: 1, O: 1 },
        }),
      ),
    ).toThrow(/cần 2 nguyên tử H nhưng chỉ cấp 1/)
    expect(
      build(
        lesson({
          ...base,
          type: 'fill-blank',
          template: 'Nước là ___.',
          blanks: [{ accepted: ['hợp chất'], wordBank: ['đơn chất', 'hỗn hợp'] }],
        }),
      ),
    ).toThrow(/ngân hàng từ không chứa đáp án/)
    expect(
      build(
        lesson({ ...base, type: 'balance-reaction', reactionId: 'rusting', maxCoefficient: 3 }),
      ),
    ).toThrow(/cần hệ số 4/)
    expect(
      build(
        lesson({
          ...base,
          type: 'mcq',
          options: [
            { id: 'a', text: 'Oxygen' },
            { id: 'b', text: ' Oxygen ' },
          ],
          correctOptionId: 'a',
        }),
      ),
    ).toThrow(/hai lựa chọn giống hệt nhau/)
  })
})
