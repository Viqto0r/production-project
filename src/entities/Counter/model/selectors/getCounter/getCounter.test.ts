import { type IStateSchema } from '@/app/providers/StoreProvider'
import { getCounter } from './getCounter'

describe('', () => {
  test('return counter', () => {
    const state: DeepPartial<IStateSchema> = { counter: { value: 0 } }

    expect(getCounter(state as IStateSchema)).toEqual({ value: 0 })
  })
})
