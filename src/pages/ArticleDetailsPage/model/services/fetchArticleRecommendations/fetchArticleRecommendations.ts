import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/StoreProvider'
import { type IArticle } from 'entities/Article'

export const fetchArticlesRecommendations = createAsyncThunk<
  IArticle[],
  // eslint-disable-next-line
  void,
  IThunkConfig<string>
>('articles/fetchArticlesRecommendations', async (_, thunkApi) => {
  const { rejectWithValue, extra } = thunkApi
  try {
    const response = await extra.api.get<IArticle[]>('/articles', {
      params: {
        _limit: 4,
      },
    })

    if (!response.data) {
      throw new Error()
    }
    return response.data
  } catch (e) {
    return rejectWithValue('')
  }
})
