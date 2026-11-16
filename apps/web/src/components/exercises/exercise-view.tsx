'use client'

import type { Answer, Exercise } from '@funchem/content'
import { BalanceReactionExercise } from './balance-reaction'
import { BuildMoleculeExercise } from './build-molecule'
import { FillBlankExercise } from './fill-blank'
import { MatchPairsExercise } from './match-pairs'
import { McqExercise } from './mcq'
import { OrderStepsExercise } from './order-steps'
import type { AnswerOf } from './shared'
import { SortExercise } from './sort'
import { TrueFalseExercise } from './true-false'

export interface ExerciseViewProps {
  exercise: Exercise
  value: Answer | null
  onChange: (answer: Answer) => void
  checked: boolean
}

/** Chọn component theo dạng bài. Câu trả lời lệch dạng (không nên xảy ra) được coi như chưa trả lời. */
export function ExerciseView({ exercise, value, onChange, checked }: ExerciseViewProps) {
  const v = <T extends Answer['type']>(type: T) =>
    value?.type === type ? (value as AnswerOf<T>) : null
  switch (exercise.type) {
    case 'mcq':
      return (
        <McqExercise exercise={exercise} value={v('mcq')} onChange={onChange} checked={checked} />
      )
    case 'true-false':
      return (
        <TrueFalseExercise
          exercise={exercise}
          value={v('true-false')}
          onChange={onChange}
          checked={checked}
        />
      )
    case 'match-pairs':
      return (
        <MatchPairsExercise
          exercise={exercise}
          value={v('match-pairs')}
          onChange={onChange}
          checked={checked}
        />
      )
    case 'build-molecule':
      return (
        <BuildMoleculeExercise
          exercise={exercise}
          value={v('build-molecule')}
          onChange={onChange}
          checked={checked}
        />
      )
    case 'balance-reaction':
      return (
        <BalanceReactionExercise
          exercise={exercise}
          value={v('balance-reaction')}
          onChange={onChange}
          checked={checked}
        />
      )
    case 'fill-blank':
      return (
        <FillBlankExercise
          exercise={exercise}
          value={v('fill-blank')}
          onChange={onChange}
          checked={checked}
        />
      )
    case 'sort':
      return (
        <SortExercise exercise={exercise} value={v('sort')} onChange={onChange} checked={checked} />
      )
    case 'order-steps':
      return (
        <OrderStepsExercise
          exercise={exercise}
          value={v('order-steps')}
          onChange={onChange}
          checked={checked}
        />
      )
  }
}
