import { getFormData } from './../../selectors/getFormData/getFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { EValidateProfileErrors, type IProfile } from '../../types/profile'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<
  IProfile,
  // eslint-disable-next-line
  void,
  IThunkConfig<EValidateProfileErrors[]>
>(
  'profile/updateProfileData',
  async (_, { rejectWithValue, extra, getState }) => {
    const formData = getFormData(getState())
    const errors = validateProfileData(formData)

    if (errors.length) {
      return rejectWithValue(errors)
    }

    try {
      const response = await extra.api.put(`/profile/${formData?.id}`, formData)

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      return rejectWithValue([EValidateProfileErrors.SERVER_ERROR])
    }
  }
)
