import { classNames } from './classNames'

describe('className', () => {
  test('one class', () => {
    expect(classNames('class')).toBe('class')
  })

  test('with additional', () => {
    expect(classNames('class', {}, ['additional1', 'additional2'])).toBe(
      'class additional1 additional2'
    )
  })

  test('with mods', () => {
    expect(classNames('class', { selected: true })).toBe('class selected')
  })

  test('with additional and mods', () => {
    expect(classNames('class', { selected: true }, ['additional'])).toBe(
      'class additional selected'
    )
  })

  test('with false mods', () => {
    expect(classNames('class', { selected: true, hover: false })).toBe(
      'class selected'
    )
  })

  test('with additional === undefined', () => {
    expect(classNames('class', {}, [undefined])).toBe('class')
  })

  test('with additional === undefined', () => {
    expect(classNames('class', {}, [undefined])).toBe('class')
  })
})
