import { getProfileIsLoading } from './getProfileIsLoading'
import { type IStateSchema } from '@/app/providers/StoreProvider'

const isLoading = true

describe('getProfileIsLoading', () => {
  test('should work with filled state', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        isLoading,
      },
    }
    expect(getProfileIsLoading(state as IStateSchema)).toBe(isLoading)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getProfileIsLoading(state as IStateSchema)).toBe(undefined)
  })
})
