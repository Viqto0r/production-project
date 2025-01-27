import { counterActions, counterReducer } from './counterSlice'

describe('counterSlice', () => {
  test('increment', () => {
    const state = { value: 10 }
    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    })
  })

  test('decrement', () => {
    const state = { value: 10 }
    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    })
  })

  test('empty initialState', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    })
  })
})
