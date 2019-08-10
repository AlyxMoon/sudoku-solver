
export const SET_OPTION = (state, payload) => {
  state.options[payload.option] = payload.value
}

export const BEGIN_SOLVING = (state) => {
  state.solving = true
}

export const END_SOLVING = (state) => {
  state.solving = false
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

export const SET_POSSIBLE_ANSWERS = (state, payload) => {
  state.possibleAnswers = payload.cells
}

export const UPDATE_CELL = (state, payload) => {
  state.cells.splice(state.activeCell, 1, payload.num)
  state.activeCell = null
}
