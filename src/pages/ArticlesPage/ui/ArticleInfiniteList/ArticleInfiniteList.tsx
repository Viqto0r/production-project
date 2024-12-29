import { memo, type FC } from 'react'
import { ArticleList } from '@/entities/Article'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getArticles } from '../../model/slice/articlesPageSlice'
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelector'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSearchParams } from 'react-router-dom'
import { Text } from '@/shared/ui/deprecated/Text'
import { useTranslation } from 'react-i18next'

interface IArticleInfiniteListProps {
  className?: string
}

export const ArticleInfiniteList: FC<IArticleInfiniteListProps> = memo(
  (props) => {
    const { className } = props

    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()
    const { t } = useTranslation()

    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const error = useSelector(getArticlesPageError)
    const view = useSelector(getArticlesPageView)

    useInitialEffect(() => {
      queueMicrotask(async () => {
        await dispatch(initArticlesPage(searchParams))
      })
    })

    if (error) {
      return <Text text={t('ошибка при загрузке статей')} />
    }

    return (
      <ArticleList
        view={view}
        articles={articles}
        isLoading={isLoading}
        className={className}
      />
    )
  }
)
