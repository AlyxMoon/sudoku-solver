export const getPossibleAnswers = cells => {
  if (!cells || !Array.isArray(cells) || cells.length !== 81) {
    return Array.apply(null, Array(81)).map(() => {})
  }

  return cells.map((cell, i) => {
    if (cell) return null

    const possibles = [
      !isNumberInRow(1, i, cells) && !isNumberInColumn(1, i, cells) && !isNumberInBlock(1, i, cells),
      !isNumberInRow(2, i, cells) && !isNumberInColumn(2, i, cells) && !isNumberInBlock(2, i, cells),
      !isNumberInRow(3, i, cells) && !isNumberInColumn(3, i, cells) && !isNumberInBlock(3, i, cells),
      !isNumberInRow(4, i, cells) && !isNumberInColumn(4, i, cells) && !isNumberInBlock(4, i, cells),
      !isNumberInRow(5, i, cells) && !isNumberInColumn(5, i, cells) && !isNumberInBlock(5, i, cells),
      !isNumberInRow(6, i, cells) && !isNumberInColumn(6, i, cells) && !isNumberInBlock(6, i, cells),
      !isNumberInRow(7, i, cells) && !isNumberInColumn(7, i, cells) && !isNumberInBlock(7, i, cells),
      !isNumberInRow(8, i, cells) && !isNumberInColumn(8, i, cells) && !isNumberInBlock(8, i, cells),
      !isNumberInRow(9, i, cells) && !isNumberInColumn(9, i, cells) && !isNumberInBlock(9, i, cells)
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
  })
}

export const getRowOfCell = i => {
  return Math.floor(i / 9)
}
export const getColumnOfCell = i => {
  return i % 9
}
export const getBlockOfCell = i => {
  const row = getRowOfCell(i)
  const column = getColumnOfCell(i)

  return (Math.floor(row / 3) * 3) + Math.floor(column / 3)
}

export const getIndexesOfNumInRow = (num, row, cells) => {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8]
    .map(c => row * 9 + c)
    .filter(c => cells[c] === num)
}

export const getCountOfNumInColumn = (num, column, cells) => {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8].reduce((sum, c) => {
    return cells[c * 9 + column] === num ? sum + 1 : sum
  }, 0)
}

export const getCountOfNumInBlock = (num, block, cells) => {
  return [0, 1, 2, 9, 10, 11, 18, 19, 20].some(c => {
    const offset = ((block % 3) * 3) + (Math.floor(block / 3) * 27)
    return cells[offset + c] === num
  })
}

const isNumberInRow = (num, i, cells) => {
  const row = getRowOfCell(i)
  return [0, 1, 2, 3, 4, 5, 6, 7, 8].some(c => {
    return cells[row * 9 + c] === num
  })
}

const isNumberInColumn = (num, i, cells) => {
  const column = getColumnOfCell(i)

  return [0, 1, 2, 3, 4, 5, 6, 7, 8].some(c => {
    return cells[c * 9 + column] === num
  })
}

const isNumberInBlock = (num, i, cells) => {
  const block = getBlockOfCell(i)

  return [0, 1, 2, 9, 10, 11, 18, 19, 20].some(c => {
    const offset = ((block % 3) * 3) + (Math.floor(block / 3) * 27)
    return cells[offset + c] === num
  })
}
