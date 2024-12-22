import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type IAvatarDropdownSchema } from '../types/avatarDropdownSchema'

const initialState: IAvatarDropdownSchema = {}

const avatarDropdownSlice = createSlice({
  name: 'avatarDropdown',
  initialState,
  reducers: {
    set(state, { payload }: PayloadAction<unknown>) {},
  },
  // extraReducers(builder) {
  //  builder
  //    .addCase(.pending, (state) => {
  //      state.isLoading = true
  //      state.error = undefined
  //    })
  //    .addCase(.rejected, (state, { payload }) => {
  //      state.isLoading = false
  //      state.error = payload
  //    })
  //    .addCase(.fulfilled, (state, { payload }) => {
  //      state.isLoading = false
  //    })
  // },
})

export const {
  actions: avatarDropdownActions,
  reducer: avatarDropdownReducer,
} = avatarDropdownSlice
