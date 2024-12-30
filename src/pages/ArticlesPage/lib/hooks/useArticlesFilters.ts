import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelector'
import { ChangeEvent, useCallback } from 'react'
import {
  EArticleSortField,
  EArticleType,
  EArticleView,
} from '@/entities/Article'
import { articlesPageActions } from '../../model/slice/articlesPageSlice'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { ESortOrderType } from '@/shared/types/sort'

export const useArticlesFilters = () => {
  const dispatch = useAppDispatch()

  const view = useSelector(getArticlesPageView)
  const sort = useSelector(getArticlesPageSort)
  const order = useSelector(getArticlesPageOrder)
  const search = useSelector(getArticlesPageSearch)
  const type = useSelector(getArticlesPageType)

  const onChangeView = useCallback(
    (view: EArticleView) => {
      dispatch(articlesPageActions.setView(view))
    },
    [dispatch]
  )

  const refetchData = useCallback(() => {
    dispatch(articlesPageActions.setPage(1))
    dispatch(fetchArticlesList({ isReplace: true }))
  }, [dispatch])

  const debouncedRefetchData = useDebounce(refetchData, 500)

  const onChangeSort = useCallback(
    (value: string) => {
      dispatch(articlesPageActions.setSort(value as EArticleSortField))

      refetchData()
    },
    [dispatch, refetchData]
  )

  const onChangeOrder = useCallback(
    (value: string) => {
      dispatch(articlesPageActions.setOrder(value as ESortOrderType))

      refetchData()
    },
    [dispatch, refetchData]
  )

  const onChangeSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(articlesPageActions.setSearch(e.target.value))

      debouncedRefetchData()
    },
    [dispatch, debouncedRefetchData]
  )

  const onChangeTab = useCallback(
    (articleType: EArticleType) => {
      dispatch(articlesPageActions.setType(articleType))

      refetchData()
    },
    [dispatch, refetchData]
  )

  return {
    view,
    sort,
    type,
    order,
    search,
    onChangeTab,
    onChangeView,
    onChangeSort,
    onChangeOrder,
    onChangeSearch,
  }
}
