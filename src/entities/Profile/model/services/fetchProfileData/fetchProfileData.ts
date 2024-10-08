import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { type IProfile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<
  IProfile,
  // eslint-disable-next-line
  void,
  IThunkConfig<string>
>('profile/fetchProfileData', async (_, { rejectWithValue, extra }) => {
  try {
    const response = await extra.api.get('/profile')

    return response.data
  } catch (e) {
    return rejectWithValue('error')
  }
})
