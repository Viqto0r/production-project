import { loginByUsername } from './loginByUsername'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

describe('loginByUsername', () => {
  const responseValue = { id: '1', username: 'admin' }

  test('success', async () => {
    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ data: responseValue }))

    const response = await thunk.callThunk({
      username: 'admin',
      password: '123',
    })

    expect(response.payload).toEqual(responseValue)
    expect(thunk.dispatch).toBeCalledWith(
      userActions.setAuthData(responseValue)
    )
    expect(thunk.dispatch).toBeCalledTimes(3)
    expect(response.meta.requestStatus).toBe('fulfilled')
    // eslint-disable-next-line
    expect(thunk.api.post).toHaveBeenCalled()
  })

  test('reject', async () => {
    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))

    const response = await thunk.callThunk({
      username: 'admin',
      password: '123',
    })

    expect(response.payload).toEqual('error')
    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(response.meta.requestStatus).toBe('rejected')
    // eslint-disable-next-line
    expect(thunk.api.post).toHaveBeenCalled()
  })
})
