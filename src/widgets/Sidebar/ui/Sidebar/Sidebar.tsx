import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { type FC, useState, memo } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { Button, EThemeButton } from 'shared/ui/Button'
import { EButtonSize } from 'shared/ui/Button/ui/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'

interface ISidebarProps {
  className?: string
}

export const Sidebar: FC<ISidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapse = () => {
    setCollapsed((collapsed) => !collapsed)
  }

  const sidebarItemList = useSelector(getSidebarItems)

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={toggleCollapse}
        className={cls.collapsedBtn}
        size={EButtonSize.L_SIZE}
        theme={EThemeButton.BACKGROUND_INVERTED}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.links}>
        {sidebarItemList.map((item) => {
          return <SidebarItem key={item.path} collapsed={collapsed} {...item} />
        })}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  )
})
