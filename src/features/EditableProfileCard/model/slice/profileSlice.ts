import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { type IProfileSchema } from '../types/editableProfileCardSchema'
import { type IProfile } from '@/entities/Profile'

const initialState: IProfileSchema = {
  isLoading: true,
  readonly: true,
  data: undefined,
  form: undefined,
  error: undefined,
  validateErrors: [],
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfileData(state, { payload }: PayloadAction<IProfile>) {
      state.form = { ...state.form, ...payload }
    },
    setReadonly(state, { payload }: PayloadAction<IProfileSchema['readonly']>) {
      state.readonly = payload
    },
    resetProfile(state) {
      state.form = state.data
      state.readonly = true
      state.validateErrors = undefined
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
        state.error = undefined
      })
      .addCase(updateProfileData.pending, (state) => {
        state.isLoading = true
        state.readonly = true
        state.validateErrors = undefined
      })
      .addCase(updateProfileData.rejected, (state, { payload }) => {
        state.isLoading = false
        state.readonly = false
        state.validateErrors = payload
      })
      .addCase(updateProfileData.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.data = payload
        state.form = payload
        state.validateErrors = undefined
        state.readonly = true
      })
  },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
