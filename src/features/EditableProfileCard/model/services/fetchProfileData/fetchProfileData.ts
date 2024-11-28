import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { EValidateProfileErrors } from '../../types/editableProfileCardSchema'
import { type IProfile } from 'entities/Profile'

export const fetchProfileData = createAsyncThunk<
  IProfile,
  string,
  IThunkConfig<string>
>('profile/fetchProfileData', async (profileId, { rejectWithValue, extra }) => {
  try {
    const response = await extra.api.get(`/profile/${profileId}`)

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    return rejectWithValue(EValidateProfileErrors.SERVER_ERROR)
  }
})
