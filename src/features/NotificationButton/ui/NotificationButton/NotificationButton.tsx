import { memo, useCallback, useState, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NotificationButton.module.scss'
import { Icon } from '@/shared/ui/Icon'
import NotificationIcon from '@/shared/assets/icons/Notification.svg'
import { Popover } from '@/shared/ui/Popups'
import { NotificationList } from '@/entities/Notification'
import { Button, EButtonTheme } from '@/shared/ui/Button/ui/Button'
import { Drawer } from '@/shared/ui/Drawer'
import { BrowserView, MobileView } from 'react-device-detect'

interface INotificationButtonProps {
  className?: string
}

export const NotificationButton: FC<INotificationButtonProps> = memo(
  (props) => {
    const { className } = props

    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = useCallback(() => {
      setIsOpen(true)
    }, [])

    const handleClose = useCallback(() => {
      setIsOpen(false)
    }, [])

    const trigger = (
      <Button onClick={handleOpen} theme={EButtonTheme.CLEAR}>
        <Icon Svg={NotificationIcon} inverted />
      </Button>
    )

    return (
      <div>
        <BrowserView>
          <Popover
            direction="bottom-left"
            className={classNames('', {}, [className])}
            trigger={trigger}
          >
            <NotificationList className={cls.notifications} />
          </Popover>
        </BrowserView>
        <MobileView>
          {trigger}
          <Drawer isOpen={isOpen} onClose={handleClose}>
            <NotificationList />
          </Drawer>
        </MobileView>
      </div>
    )
  }
)
