import { memo, type ReactNode, type FC, type PropsWithChildren } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Popover.module.scss'
import popupCls from '../../styles/popup.module.scss'
import { Popover as HPopover } from '@headlessui/react'
import { type TDropdownDirection } from '@/shared/types/ui'

interface IPopoverProps extends PropsWithChildren {
  className?: string
  direction?: TDropdownDirection
  trigger: ReactNode
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Popover: FC<IPopoverProps> = memo((props) => {
  const { className, trigger, direction = 'bottom-right', children } = props

  return (
    <HPopover className={classNames('', {}, [className, popupCls.popup])}>
      <HPopover.Button as="div" className={popupCls.trigger}>
        {trigger}
      </HPopover.Button>
      <HPopover.Panel
        className={classNames(cls.panel, {}, [popupCls[direction]])}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  )
})
