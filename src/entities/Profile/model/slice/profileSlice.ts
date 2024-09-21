import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IProfile, type IProfileSchema } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const initialState: IProfileSchema = {
  isLoading: true,
  readonly: true,
  data: undefined,
  form: undefined,
  error: undefined,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfileDate(state, { payload }: PayloadAction<IProfile>) {
      state.form = { ...state.form, ...payload }
    },
    setReadonly(state, { payload }: PayloadAction<IProfileSchema['readonly']>) {
      state.readonly = payload
    },
    resetProfile(state) {
      state.form = state.data
      state.readonly = true
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchProfileData.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = payload
      })
      .addCase(fetchProfileData.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.data = payload
        state.form = payload
      })
      .addCase(updateProfileData.pending, (state) => {
        state.isLoading = true
        state.readonly = true
        state.error = undefined
      })
      .addCase(updateProfileData.rejected, (state, { payload }) => {
        state.isLoading = false
        state.readonly = false
        state.error = payload
      })
      .addCase(updateProfileData.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.data = payload
        state.form = payload
      })
  },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
