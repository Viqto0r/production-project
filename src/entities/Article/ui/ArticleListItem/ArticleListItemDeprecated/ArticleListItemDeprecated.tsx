import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from '../ArticleListItem.module.scss'
import { IArticleListItemProps } from '../ArticleListItem'
import { useTranslation } from 'react-i18next'
import { Text } from '@/shared/ui/deprecated/Text'
import { Icon } from '@/shared/ui/deprecated/Icon'
import { EArticleBlockType, EArticleView } from '../../../model/consts/consts'
import { IArticleTextBlock } from '../../../model/types/article'
import { Card } from '@/shared/ui/deprecated/Card'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { ArticleTextBlock } from '../../ArticleTextBlock/ArticleTextBlock'
import { getRouteArticleDetails } from '@/shared/const/router'
import { EButtonTheme } from '@/shared/ui/deprecated/Button/ui/Button'
import { AppLink } from '@/shared/ui/deprecated/AppLink'
import { Button } from '@/shared/ui/deprecated/Button'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'

export const ArticleListItemDeprecated: FC<IArticleListItemProps> = memo(
  (props) => {
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
          className={classNames('', {}, [className, cls[view]])}
          data-testid="ArticleListItem"
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
                <Button theme={EButtonTheme.OUTLINE}>
                  {t('читать далее')}
                </Button>
              </AppLink>
              {views}
            </div>
          </Card>
        </div>
      )
    }

    return (
      <AppLink
        className={classNames('', {}, [className, cls[view]])}
        to={getRouteArticleDetails(article.id)}
        target={target}
        data-testid="ArticleListItem"
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
  }
)
