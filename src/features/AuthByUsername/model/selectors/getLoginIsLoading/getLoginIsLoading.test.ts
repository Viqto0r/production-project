import { type IStateSchema } from '@/app/providers/StoreProvider'
import { getLoginIsLoading } from './getLoginIsLoading'

describe('getLoginIsLoading', () => {
  test('isLoading true', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        isLoading: true,
      },
    }
    expect(getLoginIsLoading(state as IStateSchema)).toBe(true)
  })

  test('with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getLoginIsLoading(state as IStateSchema)).toBe(false)
  })
})
