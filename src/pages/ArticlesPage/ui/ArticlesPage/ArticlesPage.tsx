import { memo, useCallback, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import {
  ArticleList,
  ArticleViewSelector,
  type EArticleView,
} from 'entities/Article'
import {
  DynamicModuleLoader,
  type TReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from '../../model/slice/articlesPageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useSelector } from 'react-redux'
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelector'
import { Page } from 'shared/ui/Page/Page'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'

interface IArticlesPageProps {
  className?: string
}

const asyncReducers: TReducerList = { articlesPage: articlesPageReducer }

const ArticlesPage: FC<IArticlesPageProps> = memo((props) => {
  const { className } = props

  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const view = useSelector(getArticlesPageView)

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState())
    dispatch(fetchArticlesList({ page: 1 }))
  })

  const handleViewClick = useCallback(
    (view: EArticleView) => {
      dispatch(articlesPageActions.setView(view))
    },
    [dispatch]
  )

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={asyncReducers}>
      <Page
        className={classNames(cls.ArticlesPage, {}, [className])}
        onScrollEnd={onLoadNextPart}
      >
        <ArticleViewSelector view={view} onViewClick={handleViewClick} />
        <ArticleList view={view} articles={articles} isLoading={isLoading} />
      </Page>
    </DynamicModuleLoader>
  )
})

export default ArticlesPage
