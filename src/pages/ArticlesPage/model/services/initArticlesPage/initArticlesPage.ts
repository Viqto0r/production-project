import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from '@/app/providers/StoreProvider'
import { getArticlesPageIsInit } from '../../selectors/articlesPageSelector'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { type EArticleType, type EArticleSortField } from '@/entities/Article'
import { type ESortOrderType } from '@/shared/types'

export const initArticlesPage = createAsyncThunk<
  // eslint-disable-next-line
  void,
  URLSearchParams,
  IThunkConfig<string>
>('articles/initArticlesPage', async (searchParams, { getState, dispatch }) => {
  const isInit = getArticlesPageIsInit(getState())

  if (!isInit) {
    const orderFromUrl = searchParams.get('order') as ESortOrderType
    const sortFromUrl = searchParams.get('sort') as EArticleSortField
    const searchFromUrl = searchParams.get('search')
    const typeFromUrl = searchParams.get('type') as EArticleType

    if (orderFromUrl) {
      dispatch(articlesPageActions.setOrder(orderFromUrl))
    }

    if (sortFromUrl) {
      dispatch(articlesPageActions.setSort(sortFromUrl))
    }

    if (searchFromUrl) {
      dispatch(articlesPageActions.setSearch(searchFromUrl))
    }

    if (typeFromUrl) {
      dispatch(articlesPageActions.setType(typeFromUrl))
    }

    dispatch(articlesPageActions.initState())
    dispatch(fetchArticlesList({}))
  }
})
