import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { type IArticle } from 'entities/Article'

export const fetchArticlesList = createAsyncThunk<
  IArticle[],
  // eslint-disable-next-line
  void,
  IThunkConfig<string>
>('articles/fetchArticlesList', async (_, { rejectWithValue, extra }) => {
  try {
    const response = await extra.api.get<IArticle[]>('/articles', {
      params: {
        _expand: 'user',
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
