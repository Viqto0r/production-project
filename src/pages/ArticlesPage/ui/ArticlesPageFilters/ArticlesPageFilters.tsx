import { type ChangeEvent, memo, useCallback, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPageFilters.module.scss'
import {
  ArticleSortSelector,
  ArticleViewSelector,
  type EArticleType,
  ESortFieldNames,
  type EArticleSortField,
  type EArticleView,
  ArticleTypeTabs,
} from 'entities/Article'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  getArticlesPageOrder,
  getArticlesPageView,
  getArticlesPageSort,
  getArticlesPageSearch,
  getArticlesPageType,
} from '../../model/selectors/articlesPageSelector'
import { articlesPageActions } from '../../model/slice/articlesPageSlice'
import { useTranslation } from 'react-i18next'
import { Card } from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input'
import { type ESortOrderType } from 'shared/types'
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce'

interface IArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters: FC<IArticlesPageFiltersProps> = memo(
  (props) => {
    const { className } = props

    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const view = useSelector(getArticlesPageView)
    const sort = useSelector(getArticlesPageSort)
    const order = useSelector(getArticlesPageOrder)
    const search = useSelector(getArticlesPageSearch)
    const type = useSelector(getArticlesPageType)

    const handleViewClick = useCallback(
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

    const handleChangeSort = useCallback(
      (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target

        if (name === ESortFieldNames.SORT) {
          dispatch(articlesPageActions.setSort(value as EArticleSortField))
        }

        if (name === ESortFieldNames.ORDER) {
          dispatch(articlesPageActions.setOrder(value as ESortOrderType))
        }

        refetchData()
      },
      [dispatch, refetchData]
    )

    const handleChangeSearch = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(articlesPageActions.setSearch(e.target.value))

        debouncedRefetchData()
      },
      [dispatch, debouncedRefetchData]
    )

    const handleChangeType = useCallback(
      (articleType: EArticleType) => {
        dispatch(articlesPageActions.setType(articleType))

        refetchData()
      },
      [dispatch, refetchData]
    )

    return (
      <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
        <div className={cls.sortWrapper}>
          <ArticleSortSelector
            order={order}
            sort={sort}
            onChangeSort={handleChangeSort}
          />
          <ArticleViewSelector view={view} onViewClick={handleViewClick} />
        </div>
        <Card>
          <Input
            placeholder={t('поиск')}
            value={search}
            onChange={handleChangeSearch}
          />
        </Card>
        <ArticleTypeTabs onChangeTab={handleChangeType} value={type} />
      </div>
    )
  }
)
