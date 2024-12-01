import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotificationButton.module.scss'
import { Icon } from 'shared/ui/Icon'
import NotificationIcon from 'shared/assets/icons/Notification.svg'
import { Popover } from 'shared/ui/Popups'
import { NotificationList } from 'entities/Notification'
import { Button, EButtonTheme } from 'shared/ui/Button/ui/Button'

interface INotificationButtonProps {
  className?: string
}

export const NotificationButton: FC<INotificationButtonProps> = memo(
  (props) => {
    const { className } = props

    return (
      <Popover
        direction="bottom-left"
        className={classNames('', {}, [className])}
        trigger={
          <Button theme={EButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
          </Button>
        }
      >
        <NotificationList className={cls.notifications} />
      </Popover>
    )
  }
)
