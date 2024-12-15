import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import {
  type IArticleTextBlock,
  type IArticle,
} from '../../model/types/article'
import { EArticleView, EArticleBlockType } from '../../model/consts/consts'
import { Text } from '@/shared/ui/Text'
import { Icon } from '@/shared/ui/Icon'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { Card } from '@/shared/ui/Card'
import { Avatar } from '@/shared/ui/Avatar'
import { Button } from '@/shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { EButtonTheme } from '@/shared/ui/Button/ui/Button'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import { getRouteArticleDetails } from '@/shared/const/router'
import { AppLink } from '@/shared/ui/AppLink'
import { AppImage } from '@/shared/ui/AppImage/ui/AppImage'
import { Skeleton } from '@/shared/ui/Skeleton/ui/ui/Skeleton'

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
          <AppImage
            className={cls.img}
            src={article.img}
            alt={article.title}
            fallback={<Skeleton width="100%" height={250} />}
          />
          {textBlock && (
            <ArticleTextBlock block={textBlock} className={cls.textBlock} />
          )}
          <div className={cls.footer}>
            <AppLink to={getRouteArticleDetails(article.id)} target={target}>
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
      to={getRouteArticleDetails(article.id)}
      target={target}
    >
      <Card>
        <div className={cls.imageWrapper}>
          <AppImage
            className={cls.img}
            src={article.img}
            alt={article.title}
            fallback={<Skeleton width={200} height={200} />}
          />
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
