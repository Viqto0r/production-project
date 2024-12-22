import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type ILoginSchema } from '../types/loginState'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'

const initialState: ILoginSchema = {
  username: '',
  password: '',
  isLoading: false,
}

export type TSetFormFieldActionPayload = Record<
  keyof Pick<ILoginSchema, 'username' | 'password'>,
  string
>

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername(state, { payload }: PayloadAction<string>) {
      state.username = payload
    },

    setPassword(state, { payload }) {
      state.password = payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(loginByUsername.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = payload
      })
      .addCase(loginByUsername.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.username = payload.username
      })
  },
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
