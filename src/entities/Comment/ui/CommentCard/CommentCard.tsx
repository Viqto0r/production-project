import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { type IComment } from '../../model/types/comment'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { Text } from '@/shared/ui/deprecated/Text'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton/ui/ui/Skeleton'
import { AppLink } from '@/shared/ui/deprecated/AppLink'
import { getRouteProfile } from '@/shared/const/router'
import { VStack } from '@/shared/ui/deprecated/Stack'

interface ICommentCardProps {
  className?: string
  comment?: IComment
  isLoading?: boolean
}

export const CommentCard: FC<ICommentCardProps> = memo((props) => {
  const { className, comment, isLoading } = props

  if (isLoading) {
    return (
      <VStack
        gap="8"
        className={classNames(cls.CommentCard, {}, [className, cls.loading])}
        max
        data-testid="CommentCard.Loading"
      >
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} className={cls.username} />
        </div>
        <Skeleton width="100%" height={50} className={cls.text} />
      </VStack>
    )
  }

  if (!comment) {
    return null
  }

  const { user } = comment

  return (
    <VStack
      max
      gap="8"
      className={classNames(cls.CommentCard, {}, [className])}
      data-testid="CommentCard.Content"
    >
      <AppLink to={getRouteProfile(user.id)} className={cls.header}>
        {user.avatar && <Avatar size={30} alt="аватар" src={user.avatar} />}
        <Text className={cls.username} title={user.username} />
      </AppLink>
      <Text className={cls.text} text={comment.text} />
    </VStack>
  )
})
