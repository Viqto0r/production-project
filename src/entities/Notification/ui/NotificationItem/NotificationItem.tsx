import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NotificationItem.module.scss'
import { type INotification } from '../../model/types/notification'
import { Card, ECardTheme } from '@/shared/ui/Card/'
import { Text } from '@/shared/ui/Text'
import { AppLink } from '@/shared/ui/AppLink'

interface INotificationItemProps {
  className?: string
  item: INotification
}

export const NotificationItem: FC<INotificationItemProps> = memo((props) => {
  const { className, item } = props

  const content = (
    <Card
      className={classNames(cls.NotificationItem, {}, [className])}
      theme={ECardTheme.OUTLINED}
    >
      <Text title={item.title} text={item.description} />
    </Card>
  )

  if (item.href) {
    return (
      <AppLink className={cls.link} to={item.href} target="_blank">
        {content}
      </AppLink>
    )
  }

  return content
})
