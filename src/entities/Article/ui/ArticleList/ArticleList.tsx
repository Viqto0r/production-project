import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { type IArticle } from '../../model/types/article'
import { EArticleView } from '../../model/consts/consts'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { useTranslation } from 'react-i18next'
import { Text } from '@/shared/ui/Text'
import { ETextSize } from '@/shared/ui/Text/ui/Text'

interface IArticleListProps {
  className?: string
  articles: IArticle[]
  isLoading?: boolean
  view?: EArticleView
  target?: HTMLAnchorElement['target']
}

const renderSkeleton = (view: EArticleView) => {
  const length = view === EArticleView.SMALL ? 9 : 3

  return Array.from({ length }).map((_, idx) => (
    <ArticleListItemSkeleton key={idx} view={view} />
  ))
}

export const ArticleList: FC<IArticleListProps> = memo((props) => {
  const {
    className,
    articles,
    isLoading,
    view = EArticleView.SMALL,
    target,
  } = props
  const { t } = useTranslation()

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={ETextSize.L} title={t('статьи не найдены')} />
      </div>
    )
  }

  return (
    <div
      className={classNames(cls.ArticleList, {}, [className, cls[view]])}
      data-testid="ArticleList"
    >
      {articles.map((article) => (
        <ArticleListItem
          article={article}
          key={article.id}
          view={view}
          target={target}
        />
      ))}

      {isLoading && renderSkeleton(view)}
    </div>
  )
})
