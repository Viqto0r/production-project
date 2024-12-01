import { getProfileError } from './getProfileError'
import { type IStateSchema } from 'app/providers/StoreProvider'

const error = 'error'

describe('getProfileError', () => {
  test('should work with filled state', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        error,
      },
    }
    expect(getProfileError(state as IStateSchema)).toBe(error)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getProfileError(state as IStateSchema)).toBe(undefined)
  })
})
