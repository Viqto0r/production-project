import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
} from '../../selectors/articlesPageSelector'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const fetchNextArticlesPage = createAsyncThunk<
  // eslint-disable-next-line
  void,
  // eslint-disable-next-line
  void,
  IThunkConfig<string>
>('articles/fetchNextArticlesPage', async (_, { getState, dispatch }) => {
  const page = getArticlesPageNum(getState())
  const hasMore = getArticlesPageHasMore(getState())
  const isLoading = getArticlesPageIsLoading(getState())
  if (hasMore && !isLoading) {
    dispatch(fetchArticlesList({}))
    dispatch(articlesPageActions.setPage(page + 1))
  }
})
