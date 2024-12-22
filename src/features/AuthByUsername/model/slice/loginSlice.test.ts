import { loginActions, loginReducer } from './loginSlice'
import { type ILoginSchema } from '../types/loginState'

describe('loginSlice', () => {
  test('set username', () => {
    const state: DeepPartial<ILoginSchema> = {
      username: '',
    }

    expect(
      loginReducer(state as ILoginSchema, loginActions.setUsername('admin'))
    ).toEqual({ username: 'admin' })
  })

  test('set password', () => {
    const state: DeepPartial<ILoginSchema> = {
      password: '',
    }

    expect(
      loginReducer(state as ILoginSchema, loginActions.setPassword('123'))
    ).toEqual({ password: '123' })
  })
})
