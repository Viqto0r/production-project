import { type DeepPartial } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
  test('return value', () => {
    const state: DeepPartial<IStateSchema> = { counter: { value: 0 } }

    expect(getCounterValue(state as IStateSchema)).toBe(0)
  })
})
