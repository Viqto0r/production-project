import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { type FC, useState, memo } from 'react'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LanguageSwitcher } from '@/features/LanguageSwitcher'
import { Button, EThemeButton } from '@/shared/ui/deprecated/Button'
import { EButtonSize } from '@/shared/ui/deprecated/Button/ui/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { VStack } from '@/shared/ui/deprecated/Stack'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppLogo } from '@/shared/ui/deprecated/AppLogo'

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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <aside
          data-testid="sidebar"
          className={classNames(
            cls.SidebarRedesigned,
            { [cls.collapsed]: collapsed },
            [className]
          )}
        >
          <AppLogo className={cls.appLogo} />
        </aside>
      }
      off={
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
              return (
                <SidebarItem key={item.path} collapsed={collapsed} {...item} />
              )
            })}
          </VStack>
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LanguageSwitcher short={collapsed} />
          </div>
        </aside>
      }
    />
  )
})
