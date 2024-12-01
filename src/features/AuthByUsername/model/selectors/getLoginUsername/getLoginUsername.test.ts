import { type IStateSchema } from '@/app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername', () => {
  test('username "admin"', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        username: 'admin',
      },
    }
    expect(getLoginUsername(state as IStateSchema)).toBe('admin')
  })

  test('with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getLoginUsername(state as IStateSchema)).toBe('')
  })
})
