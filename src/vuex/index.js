import * as actions from './actions'
import * as mutations from './mutations'

const state = {
  activeCell: null,
  cells: Array.apply(null, Array(81)).map(() => {}),
  possibleAnswers: Array.apply(null, Array(81)).map(() => {}),
  computedCells: Array.apply(null, Array(81)).map(() => {}),

  solving: false,
  finishedSolving: false,
  pauseAlgorithm: false,

  allowedThemes: ['default', 'other'],
  options: {
    showPossibleAnswers: false,
    solveMode: 'brute',
    theme: 'default'
  }
}

export { state, actions, mutations }
