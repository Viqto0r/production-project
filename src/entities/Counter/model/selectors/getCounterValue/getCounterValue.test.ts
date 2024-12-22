import { type IStateSchema } from '@/app/providers/StoreProvider'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
  test('return value', () => {
    const state: DeepPartial<IStateSchema> = { counter: { value: 0 } }

    expect(getCounterValue(state as IStateSchema)).toBe(0)
  })
})
