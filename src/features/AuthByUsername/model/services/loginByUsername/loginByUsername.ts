import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { userActions, type IUser } from 'entitites/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

interface ILoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<
  IUser,
  ILoginByUsernameProps,
  { rejectValue: string }
>('login/loginByUsername', async (authData, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:8000/login', authData)

    if (!response.data) {
      throw new Error('error')
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
    thunkAPI.dispatch(userActions.setAuthData(response.data as IUser))

    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue('error')
  }
})
