import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import {
  EArticleBlockType,
  EArticleView,
  type IArticleTextBlock,
  type IArticle,
} from '../../model/types/article'
import { Text } from 'shared/ui/Text'
import { Icon } from 'shared/ui/Icon'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { Card } from 'shared/ui/Card/Card'
import { Avatar } from 'shared/ui/Avatar'
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { EButtonTheme } from 'shared/ui/Button/ui/Button'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { AppLink } from 'shared/ui/AppLink'

interface IArticleListItemProps {
  className?: string
  article: IArticle
  view: EArticleView
  target?: HTMLAnchorElement['target']
}

export const ArticleListItem: FC<IArticleListItemProps> = memo((props) => {
  const { className, article, view, target } = props
  const { t } = useTranslation('article-details')

  const types = <Text className={cls.types} text={article.type.join(', ')} />
  const views = (
    <>
      <Text className={cls.views} text={article.views.toString()} />
      <Icon Svg={EyeIcon} />
    </>
  )

  if (view === EArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === EArticleBlockType.TEXT
    ) as IArticleTextBlock

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.header}>
            <Avatar
              size={30}
              src={article.user.avatar}
              alt={article.user.username}
            />
            <Text className={cls.username} text={article.user.username} />
            <Text className={cls.date} text={article.createdAt} />
          </div>
          <Text className={cls.title} title={article.title} />
          {types}
          <img className={cls.img} src={article.img} alt={article.title} />
          {textBlock && (
            <ArticleTextBlock block={textBlock} className={cls.textBlock} />
          )}
          <div className={cls.footer}>
            <AppLink
              to={`${RoutePath.article_details}${article.id}`}
              target={target}
            >
              <Button theme={EButtonTheme.OUTLINE}>{t('читать далее')}</Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <AppLink
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      to={`${RoutePath.article_details}${article.id}`}
      target={target}
    >
      <Card>
        <div className={cls.imageWrapper}>
          <img className={cls.img} src={article.img} alt={article.title} />
          <Text className={cls.date} text={article.createdAt} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  )
})
