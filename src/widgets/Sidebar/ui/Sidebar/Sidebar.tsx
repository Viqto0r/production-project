import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { type FC, useState, memo } from 'react'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher'
import { Button, EThemeButton } from '@/shared/ui/Button'
import { EButtonSize } from '@/shared/ui/Button/ui/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { VStack } from '@/shared/ui/Stack'

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
    <aside
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={toggleCollapse}
        className={cls.collapsedBtn}
        size={EButtonSize.L}
        theme={EThemeButton.BACKGROUND_INVERTED}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <VStack role="navigation" className={cls.links} gap="8">
        {sidebarItemList.map((item) => {
          return <SidebarItem key={item.path} collapsed={collapsed} {...item} />
        })}
      </VStack>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </aside>
  )
})
