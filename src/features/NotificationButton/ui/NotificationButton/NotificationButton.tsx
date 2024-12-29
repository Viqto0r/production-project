import { memo, useCallback, useState, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NotificationButton.module.scss'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg'
import Notification from '@/shared/assets/icons/notification.svg'
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups'
import { NotificationList } from '@/entities/Notification'
import {
  Button as ButtonDeprecated,
  EButtonTheme,
} from '@/shared/ui/deprecated/Button/ui/Button'
import { Drawer } from '@/shared/ui/deprecated/Drawer'
import { BrowserView, MobileView } from 'react-device-detect'
import { ToggleFeatures } from '@/shared/lib/features'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Popover } from '@/shared/ui/redesigned/Popups'

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
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<Icon Svg={Notification} clickable onClick={handleOpen} />}
        off={
          <ButtonDeprecated onClick={handleOpen} theme={EButtonTheme.CLEAR}>
            <IconDeprecated Svg={NotificationIconDeprecated} inverted />
          </ButtonDeprecated>
        }
      />
    )

    return (
      <div>
        <BrowserView>
          <ToggleFeatures
            feature="isAppRedesigned"
            on={
              <Popover
                direction="bottom-left"
                className={classNames('', {}, [className])}
                trigger={trigger}
              >
                <NotificationList className={cls.notifications} />
              </Popover>
            }
            off={
              <PopoverDeprecated
                direction="bottom-left"
                className={classNames('', {}, [className])}
                trigger={trigger}
              >
                <NotificationList className={cls.notifications} />
              </PopoverDeprecated>
            }
          />
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
