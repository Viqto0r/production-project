import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { EArticleType, type IArticle } from 'entities/Article'
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../../selectors/articlesPageSelector'
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams'

interface IFetchArticlesListProps {
  isReplace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
  IArticle[],
  // eslint-disable-next-line
  IFetchArticlesListProps,
  IThunkConfig<string>
>('articles/fetchArticlesList', async ({ isReplace }, thunkApi) => {
  const { rejectWithValue, extra, getState } = thunkApi
  const page = getArticlesPageNum(getState())
  const limit = getArticlesPageLimit(getState())
  const sort = getArticlesPageSort(getState())
  const order = getArticlesPageOrder(getState())
  const search = getArticlesPageSearch(getState())
  const type = getArticlesPageType(getState())

  try {
    addQueryParams({ sort, order, search, type })

    const response = await extra.api.get<IArticle[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        q: search,
        type: type === EArticleType.ALL ? undefined : type,
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
