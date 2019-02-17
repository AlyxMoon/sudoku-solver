/* eslint-disable no-unused-expressions */
import { expect } from 'chai'
import getPossibleAnswers from '@/lib/getPossibleAnswers'

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
