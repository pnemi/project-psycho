import * as storage from '../storage'

describe('local storage', () => {
  beforeAll(() => {
    jest
      .spyOn(window.localStorage.__proto__, 'setItem')
      .mockImplementation(() => {})
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('saves stringified item successfully', () => {
    storage.save('detective', {
      name: 'detective',
    })

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'psycho_detective',
      '{"name":"detective"}'
    )
  })

  it('does not save undefined value', () => {
    storage.save('_', undefined)

    expect(localStorage.setItem).not.toHaveBeenCalled()
  })

  it('parses loaded value successfully', () => {
    jest
      .spyOn(window.localStorage.__proto__, 'getItem')
      .mockImplementation(() => '{"name":"detective"}')

    const loadedValue = storage.load('detective')

    expect(loadedValue).toMatchObject({
      name: 'detective',
    })
  })

  it('returns default value if looked up item not present', () => {
    jest
      .spyOn(window.localStorage.__proto__, 'getItem')
      .mockImplementation(() => null)

    const loadedValue = storage.load('detective', 'not_found')

    expect(loadedValue).toBe('not_found')
  })
})
