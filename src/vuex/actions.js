import { isNumberValidInCell } from '@/lib'

export const setOption = (context, payload) => {
  if (payload.option === 'theme') {
    if (!context.state.allowedThemes.includes(payload.value)) {
      payload.value = 'default'
    }
  }

  context.commit('SET_OPTION', payload)
}

export const setActiveCell = (context, cell) => {
  if (cell < 0 || cell >= 81) return

  if (context.state.activeCell === cell) {
    cell = null
  }

  context.commit('SET_ACTIVE_CELL', { cell })
}

export const updateCell = (context, num) => {
  if (!isNaN(context.state.activeCell) && context.state.activeCell !== null && !isNaN(num)) {
    context.commit('UPDATE_CELL', { num })
    context.dispatch('updatePossibleAnswers')
  }
}

export const updatePossibleAnswers = (context) => {
  const cells = context.state.cells.slice()

  if (!cells || !Array.isArray(cells) || cells.length !== 81) {
    context.commit('SET_POSSIBLE_ANSWERS', { cells: Array.apply(null, Array(81)).map(() => {}) })
  }

  context.commit('SET_POSSIBLE_ANSWERS', { cells: cells.map((cell, i) => {
    if (cell) return null

    const possibles = [
      isNumberValidInCell(1, i, cells),
      isNumberValidInCell(2, i, cells),
      isNumberValidInCell(3, i, cells),
      isNumberValidInCell(4, i, cells),
      isNumberValidInCell(5, i, cells),
      isNumberValidInCell(6, i, cells),
      isNumberValidInCell(7, i, cells),
      isNumberValidInCell(8, i, cells),
      isNumberValidInCell(9, i, cells)
    ]
    if (possibles.reduce((count, possible) => count + (possible ? 1 : 0), 0) === 1) {
      return possibles.findIndex(possible => possible) + 1
    } else {
      return {
        1: possibles[0],
        2: possibles[1],
        3: possibles[2],
        4: possibles[3],
        5: possibles[4],
        6: possibles[5],
        7: possibles[6],
        8: possibles[7],
        9: possibles[8]
      }
    }
  }) })
}

export const solve = (context) => {
  context.commit('BEGIN_SOLVING')

  if (context.state.options.solveMode === 'brute') {
    context.dispatch('solveByBruteForce')
  }
}

export const stop = (context) => {
  context.commit('CANCEL_SOLVING')
}

export const togglePause = (context) => {
  if (context.state.pauseAlgorithm) {
    context.commit('RESUME_ALGORITHM')
  } else {
    context.commit('PAUSE_ALGORITHM')
  }
}

export const solveByBruteForce = (context) => {
  context.commit('SET_COMPUTED_CELLS', { cells: context.state.cells.slice() })

  let cell = 0
  let diff = 1
  let timer = window.setInterval(() => {
    if (context.state.pauseAlgorithm) return
    while (cell >= 0 && cell < 81 && context.state.cells[cell]) {
      cell += diff
    }

    console.log(cell, 'still solving')
    if (cell < 0 || cell >= 81 || context.state.solving === false) {
      window.clearInterval(timer)
      context.commit('FINISHED_SOLVING')
    }

    let start = context.state.computedCells[cell] || 1

    for (let i = start; i <= 9; i++) {
      if (isNumberValidInCell(i, cell, context.state.computedCells)) {
        context.commit('UPDATE_COMPUTED_CELL', { cell, num: i })
        diff = 1
        break
      } else if (i === 9) {
        context.commit('UPDATE_COMPUTED_CELL', { cell, num: null })
        diff = -1
      }
    }

    cell += diff
  }, 20)
}
