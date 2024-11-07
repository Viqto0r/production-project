import { getProfileReadonly } from './getProfileReadonly'
import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

const readonly = true

describe('getProfileReadonly', () => {
  test('should work with filled state', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        readonly,
      },
    }
    expect(getProfileReadonly(state as IStateSchema)).toBe(readonly)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getProfileReadonly(state as IStateSchema)).toBe(undefined)
  })
})
