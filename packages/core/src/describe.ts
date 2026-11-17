import {
  type ContentItem,
  type ContentLookup,
  ELEMENTS,
  type ElementSymbol,
  equationText,
  type Exercise,
  formatFormula,
  moleculeLabel,
  parseFormula,
} from '@funchem/content/lib'

function itemLabel(item: ContentItem, registry: ContentLookup): string {
  if (item.text) return item.text
  if (item.moleculeId) {
    const m = registry.molecules.get(item.moleculeId)
    return m ? `${moleculeLabel(m)}, ${formatFormula(m.formula)}` : item.moleculeId
  }
  return item.id
}

/**
 * Mô tả đáp án đúng bằng chữ, để hiện trong khung phản hồi khi người học trả lời sai.
 * Dùng chung cho web và mobile.
 */
export function describeCorrectAnswer(exercise: Exercise, registry: ContentLookup): string {
  switch (exercise.type) {
    case 'mcq': {
      const opt = exercise.options.find((o) => o.id === exercise.correctOptionId)
      return opt ? itemLabel(opt, registry) : ''
    }
    case 'true-false':
      return exercise.answer ? 'Đúng' : 'Sai'
    case 'match-pairs':
      return exercise.pairs
        .map((p) => `${itemLabel(p.left, registry)} – ${itemLabel(p.right, registry)}`)
        .join(', ')
    case 'build-molecule': {
      const m = registry.molecules.get(exercise.targetMoleculeId)
      if (!m) return ''
      const parts = (Object.entries(parseFormula(m.formula)) as [ElementSymbol, number][]).map(
        ([el, n]) => `${n} ${ELEMENTS[el].name}`,
      )
      return `${formatFormula(m.formula)}: ${parts.join(' + ')}`
    }
    case 'balance-reaction': {
      const rx = registry.reactions.get(exercise.reactionId)
      return rx ? equationText(rx, registry.molecules) : ''
    }
    case 'fill-blank': {
      let i = 0
      return exercise.template.replace(/___/g, () => exercise.blanks[i++]?.accepted[0] ?? '___')
    }
    case 'sort':
      return exercise.groups
        .map(
          (g) =>
            `${g.label}: ${exercise.items
              .filter((it) => it.groupId === g.id)
              .map((it) => itemLabel(it, registry))
              .join(', ')}`,
        )
        .join(' · ')
    case 'order-steps':
      return exercise.steps.map((s) => itemLabel(s, registry)).join(' → ')
  }
}
