import { memo, useCallback, type FC } from 'react'
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
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface IArticleListItemProps {
  className?: string
  article: IArticle
  view: EArticleView
}

export const ArticleListItem: FC<IArticleListItemProps> = memo((props) => {
  const { className, article, view } = props
  const { t } = useTranslation('article-details')
  const navigate = useNavigate()

  const types = <Text className={cls.types} text={article.type.join(', ')} />
  const views = (
    <>
      <Text className={cls.views} text={article.views.toString()} />
      <Icon Svg={EyeIcon} />
    </>
  )

  const onOpenArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article.id}`)
  }, [article.id, navigate])

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
            <Button theme={EButtonTheme.OUTLINE} onClick={onOpenArticle}>
              {t('читать далее')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card onClick={onOpenArticle}>
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
    </div>
  )
})
