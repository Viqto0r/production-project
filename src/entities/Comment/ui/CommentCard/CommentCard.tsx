import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { type IComment } from 'entities/Comment/model/types/comment'
import { Avatar } from 'shared/ui/Avatar'
import { Text } from 'shared/ui/Text'
import { Skeleton } from 'shared/ui/Skeleton/ui/ui/Skeleton'

interface ICommentCardProps {
  className?: string
  comment: IComment
  isLoading?: boolean
}

export const CommentCard: FC<ICommentCardProps> = memo((props) => {
  const { className, comment, isLoading } = props

  const { user } = comment

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} className={cls.username} />
        </div>
        <Skeleton width="100%" height={50} className={cls.text} />
      </div>
    )
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <div className={cls.header}>
        {user.avatar && <Avatar size={30} alt="аватар" src={user.avatar} />}
        <Text className={cls.username} title={user.username} />
      </div>
      <Text className={cls.text} text={comment.text} />
    </div>
  )
})
