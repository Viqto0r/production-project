import { getLoginError } from './getLoginError'
import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

describe('getLoginError', () => {
  test('with error', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        error: 'error',
      },
    }
    expect(getLoginError(state as IStateSchema)).toBe('error')
  })

  test('with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getLoginError(state as IStateSchema)).toBe(undefined)
  })
})
