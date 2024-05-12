import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { userActions, type IUser } from 'entitites/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

interface ILoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<
  IUser,
  ILoginByUsernameProps,
  IThunkConfig<string>
>(
  'login/loginByUsername',
  async (authData, { dispatch, rejectWithValue, extra }) => {
    try {
      const response = await extra.api.post('/login', authData)
      if (!response.data) {
        throw new Error('error')
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      dispatch(userActions.setAuthData(response.data as IUser))

      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)
