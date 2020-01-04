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

  solveModes: ['brute'],
  solveSpeeds: {
    fastest: 0,
    fast: 30,
    'kinda slow': 80,
    'really slow': 1000,
  },
  themes: ['default', 'dim', 'other'],
  options: {
    showPossibleAnswers: false,
    solveMode: 'brute',
    solveSpeed: 'fast',
    theme: 'default',
  },
}

export { state, actions, mutations }
