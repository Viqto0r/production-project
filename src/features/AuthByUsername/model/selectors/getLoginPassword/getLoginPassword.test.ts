import { type IStateSchema } from '@/app/providers/StoreProvider'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword', () => {
  test('password "123"', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        password: '123',
      },
    }
    expect(getLoginPassword(state as IStateSchema)).toBe('123')
  })

  test('with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getLoginPassword(state as IStateSchema)).toBe('')
  })
})
