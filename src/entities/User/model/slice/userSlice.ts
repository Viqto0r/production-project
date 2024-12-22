import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IUserSchema } from '../types/userSchema'
import { type IUser } from '../consts/consts'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import { setFeatureFlags } from '@/shared/lib/features'

const initialState: IUserSchema = {
  _isInit: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData(state, { payload }: PayloadAction<IUser>) {
      state.authData = payload
      setFeatureFlags(payload.features)
    },
    initAuthData(state) {
      const json = localStorage.getItem(USER_LOCALSTORAGE_KEY)

      if (json) {
        const user = JSON.parse(json) as IUser
        state.authData = user
        setFeatureFlags(user.features)
      }

      state._isInit = true
    },
    logout(state) {
      state.authData = undefined
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    },
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
