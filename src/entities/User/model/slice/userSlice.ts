import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { IUser, type IUserSchema } from '../types/userSchema'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import { setFeatureFlags } from '@/shared/lib/features'
import { saveJsonSettings } from '../services/saveJsonSettings'
import { initAuthData } from '../services/initAuthData'

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
      localStorage.setItem(USER_LOCALSTORAGE_KEY, payload.id)
    },
    logout(state) {
      state.authData = undefined
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    },
  },

  extraReducers(builder) {
    builder.addCase(saveJsonSettings.fulfilled, (state, { payload }) => {
      if (state.authData) {
        state.authData.jsonSettings = payload
      }
    })
    builder.addCase(initAuthData.rejected, (state) => {
      state._isInit = true
    })
    builder.addCase(initAuthData.fulfilled, (state, { payload }) => {
      state.authData = payload
      setFeatureFlags(payload.features)
      state._isInit = true
    })
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
