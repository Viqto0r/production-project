import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  IUpdateFeatureFlagsArg,
  updateFeatureFlagsMutation,
} from '../api/featureFlagsApi'
import { IThunkConfig } from '@/app/providers/StoreProvider'
import { getAllFeatureFlags, setFeatureFlags } from '../lib/setGetFeatures'

export const updateFeatureFlags = createAsyncThunk<
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  void,
  IUpdateFeatureFlagsArg,
  IThunkConfig<string>
>(
  'features/updateFeatureFlags',
  async ({ userId, features: newFeatures }, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi

    const features = {
      ...getAllFeatureFlags(),
      ...newFeatures,
    }

    try {
      await dispatch(
        updateFeatureFlagsMutation({
          userId,
          features,
        })
      )

      setFeatureFlags(features)
      window.location.reload()
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)
