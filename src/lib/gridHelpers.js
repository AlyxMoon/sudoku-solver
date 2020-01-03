
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

export const isNumberInRow = (num, i, cells) => {
  const row = getRowOfCell(i)
  return [0, 1, 2, 3, 4, 5, 6, 7, 8].some(c => {
    return cells[row * 9 + c] === num
  })
}

export const isNumberInColumn = (num, i, cells) => {
  const column = getColumnOfCell(i)

  return [0, 1, 2, 3, 4, 5, 6, 7, 8].some(c => {
    return cells[c * 9 + column] === num
  })
}

export const isNumberInBlock = (num, i, cells) => {
  const block = getBlockOfCell(i)

  return [0, 1, 2, 9, 10, 11, 18, 19, 20].some(c => {
    const offset = ((block % 3) * 3) + (Math.floor(block / 3) * 27)
    return cells[offset + c] === num
  })
}

export const isNumberValidInCell = (num, i, cells) => {
  return !isNumberInRow(num, i, cells) && !isNumberInColumn(num, i, cells) && !isNumberInBlock(num, i, cells)
}
