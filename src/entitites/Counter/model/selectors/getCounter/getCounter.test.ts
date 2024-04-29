import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { getCounter } from './getCounter'
import { type DeepPartial } from '@reduxjs/toolkit'

describe('', () => {
  test('return counter', () => {
    const state: DeepPartial<IStateSchema> = { counter: { value: 0 } }

    expect(getCounter(state as IStateSchema)).toEqual({ value: 0 })
  })
})
