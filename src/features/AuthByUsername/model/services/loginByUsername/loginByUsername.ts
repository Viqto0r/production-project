import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from '@/app/providers/StoreProvider'
import { userActions, type IUser } from '@/entities/User'

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
      const response = await extra.api.post<IUser>('/login', authData)

      if (!response.data) {
        throw new Error('error')
      }

      dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)
