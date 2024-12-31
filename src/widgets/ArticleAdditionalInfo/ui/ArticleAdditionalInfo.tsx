import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleAdditionalInfo.module.scss'
import { IUser } from '@/entities/User'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Text } from '@/shared/ui/redesigned/Text'
import { Button } from '@/shared/ui/redesigned/Button'
import { useTranslation } from 'react-i18next'

interface IArticleAdditionalInfoProps {
  className?: string
  author: IUser
  createdAt: string
  views: number
  onEdit: () => void
}

export const ArticleAdditionalInfo: FC<IArticleAdditionalInfoProps> = memo(
  (props) => {
    const { className, author, createdAt, views, onEdit } = props
    const { t } = useTranslation('article-details')

    return (
      <VStack
        gap="32"
        className={classNames(cls.ArticleAdditionalInfo, {}, [className])}
      >
        <HStack gap="8">
          <Avatar src={author.avatar} size={32} />
          <Text text={author.username} bold />
          <Text text={createdAt} />
        </HStack>
        <Button onClick={onEdit}>{t('редактировать')}</Button>
        <Text text={t('{{count}} просмотров', { count: views })} />
      </VStack>
    )
  }
)
