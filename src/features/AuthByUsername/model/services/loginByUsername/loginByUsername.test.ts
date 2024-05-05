import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { userActions } from 'entitites/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername', () => {
  const responseValue = { id: '1', username: 'admin' }

  test('success', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: responseValue }))
    const thunk = new TestAsyncThunk(loginByUsername)

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
    expect(mockedAxios.post).toHaveBeenCalled()
  })

  test('reject', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const thunk = new TestAsyncThunk(loginByUsername)

    const response = await thunk.callThunk({
      username: 'admin',
      password: '123',
    })

    expect(response.payload).toEqual('error')
    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(response.meta.requestStatus).toBe('rejected')
    // eslint-disable-next-line
    expect(mockedAxios.post).toHaveBeenCalled()
  })
})
