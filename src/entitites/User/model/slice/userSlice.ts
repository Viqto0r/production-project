import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IUser, type IUserSchema } from '../types/userSchema'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

const initialState: IUserSchema = {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData(state, { payload }: PayloadAction<IUser>) {
      state.authData = payload
    },
    initAuthData(state) {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)

      if (user) {
        state.authData = JSON.parse(user)
      }
    },
    logout(state) {
      state.authData = undefined
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    },
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
