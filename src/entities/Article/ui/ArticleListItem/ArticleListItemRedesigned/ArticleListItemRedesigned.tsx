import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleListItemRedesigned.module.scss'
import { IArticleListItemProps } from '../ArticleListItem'
import { useTranslation } from 'react-i18next'
import { Text } from '@/shared/ui/redesigned/Text'
import { Icon } from '@/shared/ui/redesigned/Icon'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Card } from '@/shared/ui/redesigned/Card'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Button } from '@/shared/ui/redesigned/Button'
import { getRouteArticleDetails } from '@/shared/const/router'
import { EArticleBlockType, EArticleView } from '../../../model/consts/consts'
import { IArticleTextBlock } from '../../../model/types/article'

export const ArticleListItemRedesigned: FC<IArticleListItemProps> = memo(
  (props) => {
    const { className, article, view, target } = props
    const { t } = useTranslation('article-details')

    const userInfo = (
      <>
        <Avatar
          size={32}
          src={article.user.avatar}
          alt={article.user.username}
          className={cls.avatar}
        />
        <Text text={article.user.username} bold />
      </>
    )

    const views = (
      <HStack gap="8">
        <Icon Svg={EyeIcon} />
        <Text className={cls.views} text={article.views.toString()} />
      </HStack>
    )

    if (view === EArticleView.BIG) {
      const textBlock = article.blocks.find(
        (block) => block.type === EArticleBlockType.TEXT
      ) as IArticleTextBlock

      return (
        <Card
          className={classNames('', {}, [className, cls[view]])}
          data-testid="ArticleListItem"
          fullWidth
          padding="24"
        >
          <VStack max gap="16">
            <HStack gap="8">
              {userInfo}
              <Text text={article.createdAt} />
            </HStack>
            <Text title={article.title} bold />
            <Text title={article.subtitle} size="s" />
            <AppImage
              className={cls.img}
              src={article.img}
              alt={article.title}
              fallback={<Skeleton width="100%" height={250} />}
            />
            {textBlock?.paragraphs && (
              <Text
                className={cls.textBlock}
                text={textBlock.paragraphs.slice(0, 2).join(' ')}
              />
            )}
            <HStack max justify="between">
              <AppLink to={getRouteArticleDetails(article.id)} target={target}>
                <Button>{t('читать далее')}</Button>
              </AppLink>
              {views}
            </HStack>
          </VStack>
        </Card>
      )
    }

    return (
      <AppLink
        className={classNames('', {}, [className, cls[view]])}
        to={getRouteArticleDetails(article.id)}
        target={target}
        data-testid="ArticleListItem"
      >
        <Card className={cls.card} border="round" padding="0">
          <AppImage
            className={cls.img}
            src={article.img}
            alt={article.title}
            fallback={<Skeleton width="100%" height={200} />}
          />
          <VStack className={cls.info} gap="4">
            <Text title={article.title} className={cls.title} />
            <VStack className={cls.footer} gap="4" max>
              <HStack justify="between" max>
                <Text text={article.createdAt} className={cls.date} />
                {views}
              </HStack>
              <HStack gap="4">{userInfo}</HStack>
            </VStack>
          </VStack>
        </Card>
      </AppLink>
    )
  }
)
