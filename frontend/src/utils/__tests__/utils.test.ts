import * as utils from '../utils'

describe('utils', () => {
  it('truncates string successfully', () => {
    const truncated = utils.truncate('hello', 2)

    expect(truncated).toBe('he...')
  })

  it('returns rand array item successfully', () => {
    const array = [1, 2, 3]
    const randItem = utils.randArrayItem(array)

    expect(array).toContain(randItem)
  })
})
