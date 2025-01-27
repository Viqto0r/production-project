import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { type IComment } from '../../model/types/comment'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'

interface ICommentListProps {
  className?: string
  comments?: IComment[]
  isLoading?: boolean
}

export const CommentList: FC<ICommentListProps> = memo((props) => {
  const { className, comments, isLoading } = props
  const { t } = useTranslation('article-details')

  if (isLoading) {
    return (
      <VStack max gap="16" className={classNames('', {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    )
  }
  return (
    <VStack max gap="16" className={classNames('', {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text text={t('комментарии отсутствуют')} />}
          off={<TextDeprecated text={t('комментарии отсутствуют')} />}
        />
      )}
    </VStack>
  )
})
