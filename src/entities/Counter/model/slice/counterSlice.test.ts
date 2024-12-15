import { counterReducer, useCounterActions } from './counterSlice'

describe('counterSlice', () => {
  const { increment, decrement } = useCounterActions()
  test('increment', () => {
    const state = { value: 10 }
    expect(counterReducer(state, increment())).toEqual({
      value: 11,
    })
  })

  test('decrement', () => {
    const state = { value: 10 }
    expect(counterReducer(state, decrement())).toEqual({
      value: 9,
    })
  })

  test('empty initialState', () => {
    expect(counterReducer(undefined, increment())).toEqual({
      value: 1,
    })
  })
})
