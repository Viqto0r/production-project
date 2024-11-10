import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { type IArticle } from 'entities/Article'
import { getArticlesPageLimit } from '../../selectors/articlesPageSelector'

interface IFetchArticlesListProps {
  page?: number
}

export const fetchArticlesList = createAsyncThunk<
  IArticle[],
  IFetchArticlesListProps,
  IThunkConfig<string>
>('articles/fetchArticlesList', async (props, thunkApi) => {
  const { rejectWithValue, extra, getState } = thunkApi
  const { page = 1 } = props
  const limit = getArticlesPageLimit(getState())

  try {
    const response = await extra.api.get<IArticle[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
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
