import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { type IComment } from '../../model/types/comment'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink'
import { getRouteProfile } from '@/shared/const/router'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Text } from '@/shared/ui/redesigned/Text'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Card } from '@/shared/ui/redesigned/Card'

interface ICommentCardProps {
  className?: string
  comment?: IComment
  isLoading?: boolean
}

export const CommentCard: FC<ICommentCardProps> = memo((props) => {
  const { className, comment, isLoading } = props

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  })

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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card padding="24" border="round" fullWidth>
          <VStack
            max
            gap="8"
            className={className}
            data-testid="CommentCard.Content"
          >
            <AppLink to={getRouteProfile(user.id)}>
              <HStack gap="8">
                {user.avatar && (
                  <Avatar size={30} alt="аватар" src={user.avatar} />
                )}
                <Text title={user.username} bold />
              </HStack>
            </AppLink>
            <Text text={comment.text} />
          </VStack>
        </Card>
      }
      off={
        <VStack
          max
          gap="8"
          className={classNames(cls.CommentCard, {}, [className])}
          data-testid="CommentCard.Content"
        >
          <AppLinkDeprecated
            to={getRouteProfile(user.id)}
            className={cls.header}
          >
            {user.avatar && (
              <AvatarDeprecated size={30} alt="аватар" src={user.avatar} />
            )}
            <TextDeprecated className={cls.username} title={user.username} />
          </AppLinkDeprecated>
          <TextDeprecated className={cls.text} text={comment.text} />
        </VStack>
      }
    />
  )
})
