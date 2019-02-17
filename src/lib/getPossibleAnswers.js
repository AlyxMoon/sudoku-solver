export default (cells) => {
  if (!cells || !Array.isArray(cells) || cells.length !== 81) {
    return Array.apply(null, Array(87)).map(() => {})
  }

  return cells.map((cell, i) => {
    if (cell) return null
    return {
      1: !isNumberInRow(1, i, cells) && !isNumberInColumn(1, i, cells) && !isNumberInBlock(1, i, cells),
      2: !isNumberInRow(2, i, cells) && !isNumberInColumn(2, i, cells) && !isNumberInBlock(2, i, cells),
      3: !isNumberInRow(3, i, cells) && !isNumberInColumn(3, i, cells) && !isNumberInBlock(3, i, cells),
      4: !isNumberInRow(4, i, cells) && !isNumberInColumn(4, i, cells) && !isNumberInBlock(4, i, cells),
      5: !isNumberInRow(5, i, cells) && !isNumberInColumn(5, i, cells) && !isNumberInBlock(5, i, cells),
      6: !isNumberInRow(6, i, cells) && !isNumberInColumn(6, i, cells) && !isNumberInBlock(6, i, cells),
      7: !isNumberInRow(7, i, cells) && !isNumberInColumn(7, i, cells) && !isNumberInBlock(7, i, cells),
      8: !isNumberInRow(8, i, cells) && !isNumberInColumn(8, i, cells) && !isNumberInBlock(8, i, cells),
      9: !isNumberInRow(9, i, cells) && !isNumberInColumn(9, i, cells) && !isNumberInBlock(9, i, cells)
    }
  })
}

const getRowOfCell = i => {
  return Math.floor(i / 9)
}
const getColumnOfCell = i => {
  return i % 9
}
const getBlockOfCell = i => {
  const row = getRowOfCell(i)
  const column = getColumnOfCell(i)

  return (Math.floor(row / 3) * 3) + Math.floor(column / 3)
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
  return false
  // const block = getBlockOfCell(i)
  // if (block === 4) console.log('I am a 4 boi', i, getRowOfCell(i), getColumnOfCell(i))
  //
  // if (i === 19) console.log('WOO!', num, i, block)
  // return [0, 1, 2, 9, 10, 11, 18, 19, 20].some(c => {
  //   return cells[(block * 3) + (Math.floor(block / 3) * 9) + c] === num
  // })
}
