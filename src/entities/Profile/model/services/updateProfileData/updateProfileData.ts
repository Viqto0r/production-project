import { getFormData } from './../../selectors/getFormData/getFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { type IProfile } from '../../types/profile'

export const updateProfileData = createAsyncThunk<
  IProfile,
  // eslint-disable-next-line
  void,
  IThunkConfig<string>
>(
  'profile/updateProfileData',
  async (_, { rejectWithValue, extra, getState }) => {
    try {
      const formData = getFormData(getState())
      const response = await extra.api.put('/profile', formData)

      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)
