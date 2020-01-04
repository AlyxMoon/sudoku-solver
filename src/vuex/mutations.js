
export const SET_OPTION = (state, payload) => {
  state.options[payload.option] = payload.value
}

export const PAUSE_ALGORITHM = (state) => {
  state.pauseAlgorithm = true
}

export const RESUME_ALGORITHM = (state) => {
  state.pauseAlgorithm = false
}

export const BEGIN_SOLVING = (state) => {
  state.pause = true
  state.solving = true
  state.finishedSolving = false
}

export const CANCEL_SOLVING = (state) => {
  state.solving = false
  state.finishedSolving = false
}

export const FINISHED_SOLVING = (state) => {
  state.finishedSolving = true
}

export const SET_THEME = (state, payload) => {
  state.theme = payload.theme
}

export const SET_ACTIVE_CELL = (state, payload) => {
  state.activeCell = payload.cell
}

export const SET_CELLS = (state, payload) => {
  state.cells = payload.cells
}

export const UPDATE_CELL = (state, payload) => {
  state.cells.splice(state.activeCell, 1, payload.num)
  state.activeCell = null
}

export const SET_POSSIBLE_ANSWERS = (state, payload) => {
  state.possibleAnswers = payload.cells
}

export const SET_COMPUTED_CELLS = (state, payload) => {
  state.computedCells = payload.cells
}

export const UPDATE_COMPUTED_CELL = (state, payload) => {
  console.log('updating the cell', payload)
  state.computedCells.splice(payload.cell, 1, payload.num)
}
