import { Menu } from '@headlessui/react'
import { Fragment, type ReactNode, type FC } from 'react'
import cls from './Dropdown.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { type TDropdownDirection } from 'shared/types/ui'
import { AppLink } from '../../AppLink'

export interface DropdownItem {
  disabled?: boolean
  content?: ReactNode
  onClick?: () => void
  href?: string
}

interface IDropdownProps {
  className?: string
  items: DropdownItem[]
  trigger: ReactNode
  direction?: TDropdownDirection
}

export const Dropdown: FC<IDropdownProps> = (props) => {
  const { className, trigger, items, direction = 'bottom-right' } = props

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>{trigger}</Menu.Button>

      <Menu.Items
        className={classNames(cls.menu, {}, [className, cls[direction]])}
      >
        {items?.map(({ content, href, disabled, onClick }, idx) => {
          const itemContent = ({ active }: { active: boolean }) => (
            <button
              className={classNames(cls.item, { [cls.active]: active })}
              onClick={onClick}
              disabled={disabled}
            >
              {content}
            </button>
          )

          if (href) {
            return (
              <Menu.Item as={AppLink} to={href} key={idx} disabled={disabled}>
                {itemContent}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item as={Fragment} key={idx} disabled={disabled}>
              {itemContent}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}
