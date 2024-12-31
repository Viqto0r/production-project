import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useGetNotificationsQuery } from '../../api/notificationApi'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { toggleFeatures } from '@/shared/lib/features'

interface INotificationListProps {
  className?: string
}

export const NotificationList: FC<INotificationListProps> = memo((props) => {
  const { className } = props
  const { data: notifications, isLoading } = useGetNotificationsQuery(null, {
    pollingInterval: 10000,
  })

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  })

  if (isLoading) {
    return (
      <VStack gap="16" max className={classNames('', {}, [className])}>
        <Skeleton width="100%" border="8px" height="85px"></Skeleton>
        <Skeleton width="100%" border="8px" height="85px"></Skeleton>
        <Skeleton width="100%" border="8px" height="85px"></Skeleton>
      </VStack>
    )
  }

  return (
    <VStack gap="16" max className={classNames('', {}, [className])}>
      {notifications?.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
  )
})
