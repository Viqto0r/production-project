import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { EArticleView, type IArticle } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface IArticleListProps {
  className?: string
  articles: IArticle[]
  isLoading?: boolean
  view?: EArticleView
}

const renderSkeleton = (view: EArticleView) => {
  const length = view === EArticleView.SMALL ? 9 : 3

  return Array.from({ length }).map((_, idx) => (
    <ArticleListItemSkeleton key={idx} view={view} />
  ))
}

export const ArticleList: FC<IArticleListProps> = memo((props) => {
  const { className, articles, isLoading, view = EArticleView.SMALL } = props

  const renderArticle = (article: IArticle) => (
    <ArticleListItem key={article.id} article={article} view={view} />
  )

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {renderSkeleton(view)}
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length ? articles.map(renderArticle) : null}
    </div>
  )
})
