import { createSlice } from '@reduxjs/toolkit'
import { type IProfileSchema } from '../types/profile'

const initialState: IProfileSchema = {
  isLoading: false,
  readonly: true,
  data: undefined,
  error: undefined,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
