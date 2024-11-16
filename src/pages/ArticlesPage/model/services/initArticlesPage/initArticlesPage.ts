import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { getArticlesPageIsInit } from '../../selectors/articlesPageSelector'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const initArticlesPage = createAsyncThunk<
  // eslint-disable-next-line
  void,
  // eslint-disable-next-line
  void,
  IThunkConfig<string>
>('articles/initArticlesPage', async (_, { getState, dispatch }) => {
  const isInit = getArticlesPageIsInit(getState())

  if (!isInit) {
    dispatch(articlesPageActions.initState())
    dispatch(fetchArticlesList({ page: 1 }))
  }
})
