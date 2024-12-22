import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from '@/app/providers/StoreProvider'
import { getUserDataByIdQuery } from '../../api/userApi'
import { IUser } from '../types/userSchema'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const initAuthData = createAsyncThunk<IUser, void, IThunkConfig<string>>(
  'user/initAuthData',
  async (_, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY)

    if (!userId) {
      return rejectWithValue('error')
    }

    try {
      const response = await dispatch(getUserDataByIdQuery(userId)).unwrap()

      return response
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)
