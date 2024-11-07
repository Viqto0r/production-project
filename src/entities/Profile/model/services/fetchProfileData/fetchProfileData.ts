import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { EValidateProfileErrors, type IProfile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<
  IProfile,
  // eslint-disable-next-line
  void,
  IThunkConfig<string>
>('profile/fetchProfileData', async (_, { rejectWithValue, extra }) => {
  try {
    const response = await extra.api.get('/profile')

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    return rejectWithValue(EValidateProfileErrors.SERVER_ERROR)
  }
})
