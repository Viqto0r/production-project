import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NotificationItem.module.scss'
import { type INotification } from '../../model/types/notification'
import { Card as CardDeprecated, ECardTheme } from '@/shared/ui/deprecated/Card'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { AppLink } from '@/shared/ui/deprecated/AppLink'
import { ToggleFeatures } from '@/shared/lib/features'
import { Card } from '@/shared/ui/redesigned/Card'
import { Text } from '@/shared/ui/redesigned/Text'

interface INotificationItemProps {
  className?: string
  item: INotification
}

export const NotificationItem: FC<INotificationItemProps> = memo((props) => {
  const { className, item } = props

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card className={classNames(cls.NotificationItem, {}, [className])}>
          <Text title={item.title} text={item.description} />
        </Card>
      }
      off={
        <CardDeprecated
          className={classNames(cls.NotificationItem, {}, [className])}
          theme={ECardTheme.OUTLINED}
        >
          <TextDeprecated title={item.title} text={item.description} />
        </CardDeprecated>
      }
    />
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
