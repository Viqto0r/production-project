import { memo, type FC } from 'react'
import { type IArticle } from '../../model/types/article'
import { EArticleView } from '../../model/consts/consts'
import { ToggleFeatures } from '@/shared/lib/features'
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated'
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned'

export interface IArticleListItemProps {
  className?: string
  article: IArticle
  view: EArticleView
  target?: HTMLAnchorElement['target']
}

export const ArticleListItem: FC<IArticleListItemProps> = memo((props) => {
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ArticleListItemRedesigned {...props} />}
      off={<ArticleListItemDeprecated {...props} />}
    />
  )
})
