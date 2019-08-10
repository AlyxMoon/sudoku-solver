import * as actions from './actions'
import * as mutations from './mutations'

const state = {
  activeCell: null,
  cells: Array.apply(null, Array(81)).map(() => {}),
  possibleAnswers: Array.apply(null, Array(81)).map(() => {}),

  solving: false,
  solveMode: 'brute',

  allowedThemes: ['default', 'other'],
  options: {
    showPossibleAnswers: false,
    theme: 'default'
  }
}

export { state, actions, mutations }
