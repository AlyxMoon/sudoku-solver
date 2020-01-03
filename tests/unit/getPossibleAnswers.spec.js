/* eslint-disable no-unused-expressions */
import { expect } from 'chai'
import {
  getRowOfCell, getColumnOfCell, getBlockOfCell,
  getPossibleAnswers
} from '@/lib/getPossibleAnswers'

describe('getRowOfCell()', () => {
  it('should correctly identify row 1', () => {
    [0, 1, 2, 3, 4, 5, 6, 7, 8].forEach(cell => expect(getRowOfCell(cell)).to.equal(0))
  })
  it('should correctly identify row 2', () => {
    [9, 10, 11, 12, 13, 14, 15, 16, 17].forEach(cell => expect(getRowOfCell(cell)).to.equal(1))
  })
  it('should correctly identify row 3', () => {
    [18, 19, 20, 21, 22, 23, 24, 25, 26].forEach(cell => expect(getRowOfCell(cell)).to.equal(2))
  })
  it('should correctly identify row 4', () => {
    [27, 28, 29, 30, 31, 32, 33, 34, 35].forEach(cell => expect(getRowOfCell(cell)).to.equal(3))
  })
  it('should correctly identify row 5', () => {
    [36, 37, 38, 39, 40, 41, 42, 43, 44].forEach(cell => expect(getRowOfCell(cell)).to.equal(4))
  })
  it('should correctly identify row 6', () => {
    [45, 46, 47, 48, 49, 50, 51, 52, 53].forEach(cell => expect(getRowOfCell(cell)).to.equal(5))
  })
  it('should correctly identify row 7', () => {
    [54, 55, 56, 57, 58, 59, 60, 61, 62].forEach(cell => expect(getRowOfCell(cell)).to.equal(6))
  })
  it('should correctly identify row 8', () => {
    [63, 64, 65, 66, 67, 68, 69, 70, 71].forEach(cell => expect(getRowOfCell(cell)).to.equal(7))
  })
  it('should correctly identify row 9', () => {
    [72, 73, 74, 75, 76, 77, 78, 79, 80].forEach(cell => expect(getRowOfCell(cell)).to.equal(8))
  })
})

describe('getColumnOfCell()', () => {
  it('should correctly identify column 1', () => {
    [0, 9, 18, 27, 36, 45, 54, 63, 72].forEach(cell => expect(getColumnOfCell(cell)).to.equal(0))
  })
  it('should correctly identify column 2', () => {
    [1, 10, 19, 28, 37, 46, 55, 64, 73].forEach(cell => expect(getColumnOfCell(cell)).to.equal(1))
  })
  it('should correctly identify column 3', () => {
    [2, 11, 20, 29, 38, 47, 56, 65, 74].forEach(cell => expect(getColumnOfCell(cell)).to.equal(2))
  })
  it('should correctly identify column 4', () => {
    [3, 12, 21, 30, 39, 48, 57, 66, 75].forEach(cell => expect(getColumnOfCell(cell)).to.equal(3))
  })
  it('should correctly identify column 5', () => {
    [4, 13, 22, 31, 40, 49, 58, 67, 76].forEach(cell => expect(getColumnOfCell(cell)).to.equal(4))
  })
  it('should correctly identify column 6', () => {
    [5, 14, 23, 32, 41, 50, 59, 68, 77].forEach(cell => expect(getColumnOfCell(cell)).to.equal(5))
  })
  it('should correctly identify column 7', () => {
    [6, 15, 24, 33, 42, 51, 60, 69, 78].forEach(cell => expect(getColumnOfCell(cell)).to.equal(6))
  })
  it('should correctly identify column 8', () => {
    [7, 16, 25, 34, 43, 52, 61, 70, 79].forEach(cell => expect(getColumnOfCell(cell)).to.equal(7))
  })
  it('should correctly identify column 9', () => {
    [8, 17, 26, 35, 44, 53, 62, 71, 80].forEach(cell => expect(getColumnOfCell(cell)).to.equal(8))
  })
})

describe('getBlockOfCell()', () => {
  it('should correctly identify block 1', () => {
    [0, 1, 2, 9, 10, 11, 18, 19, 20].forEach(cell => expect(getBlockOfCell(cell)).to.equal(0))
  })
  it('should correctly identify block 2', () => {
    [3, 4, 5, 12, 13, 14, 21, 22, 23].forEach(cell => expect(getBlockOfCell(cell)).to.equal(1))
  })
  it('should correctly identify block 3', () => {
    [6, 7, 8, 15, 16, 17, 24, 25, 26].forEach(cell => expect(getBlockOfCell(cell)).to.equal(2))
  })
  it('should correctly identify block 4', () => {
    [27, 28, 29, 36, 37, 38, 45, 46, 47].forEach(cell => expect(getBlockOfCell(cell)).to.equal(3))
  })
  it('should correctly identify block 5', () => {
    [30, 31, 32, 39, 40, 41, 48, 49, 50].forEach(cell => expect(getBlockOfCell(cell)).to.equal(4))
  })
  it('should correctly identify block 6', () => {
    [33, 34, 35, 42, 43, 44, 51, 52, 53].forEach(cell => expect(getBlockOfCell(cell)).to.equal(5))
  })
  it('should correctly identify block 7', () => {
    [54, 55, 56, 63, 64, 65, 72, 73, 74].forEach(cell => expect(getBlockOfCell(cell)).to.equal(6))
  })
  it('should correctly identify block 8', () => {
    [57, 58, 59, 66, 67, 68, 75, 76, 77].forEach(cell => expect(getBlockOfCell(cell)).to.equal(7))
  })
  it('should correctly identify block 9', () => {
    [60, 61, 62, 69, 70, 71, 78, 79, 80].forEach(cell => expect(getBlockOfCell(cell)).to.equal(8))
  })
})

describe('getPossibleAnswers()', () => {
  it('should return an array of length 81', () => {
    const cells = Array.apply(null, Array(81)).map(() => {})
    expect(getPossibleAnswers(cells)).to.have.lengthOf(81)
  })
  it('should return an array of length 81 even with invalid input (array of different length)', () => {
    const cells = Array.apply(null, Array(2)).map(() => {})
    expect(getPossibleAnswers(cells)).to.have.lengthOf(81)
  })
  it('should return an array of length 81 even with invalid input (null input)', () => {
    expect(getPossibleAnswers(null)).to.have.lengthOf(81)
  })
})
