import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from '@/app/providers/StoreProvider'
import { IJsonSettings } from '../types/jsonSettings'
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData'
import { getJsonSettings } from '../selectors/getJsonSettings/getJsonSettings'
import { setJsonSettingsMutation } from '../../api/userApi'

export const saveJsonSettings = createAsyncThunk<
  IJsonSettings,
  IJsonSettings,
  IThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings: IJsonSettings, thunkApi) => {
  const { rejectWithValue, getState, dispatch } = thunkApi

  const userData = getUserAuthData(getState())
  const currentSettings = getJsonSettings(getState())

  if (!userData) {
    return rejectWithValue('error')
  }

  try {
    const response = await dispatch(
      setJsonSettingsMutation({
        userId: userData.id,
        jsonSettings: { ...currentSettings, ...newJsonSettings },
      })
    ).unwrap()

    const { jsonSettings } = response

    if (!jsonSettings) {
      return rejectWithValue('error')
    }

    return jsonSettings
  } catch (e) {
    return rejectWithValue('error')
  }
})
