import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { type FC, useState, memo } from 'react'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LanguageSwitcher } from '@/features/LanguageSwitcher'
import { Button, EThemeButton } from '@/shared/ui/deprecated/Button'
import { EButtonSize } from '@/shared/ui/deprecated/Button/ui/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useSidebarItems } from '../../model/selectors/getSidebarItems'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppLogo } from '@/shared/ui/redesigned/AppLogo'
import { Icon } from '@/shared/ui/redesigned/Icon'
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg'

interface ISidebarProps {
  className?: string
}

export const Sidebar: FC<ISidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapse = () => {
    setCollapsed((collapsed) => !collapsed)
  }

  const sidebarItemList = useSidebarItems()

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
          <AppLogo className={cls.appLogo} size={collapsed ? 30 : 50} />
          <VStack role="navigation" className={cls.links} gap="8">
            {sidebarItemList.map((item) => {
              return (
                <SidebarItem
                  key={item.path}
                  collapsed={collapsed}
                  item={item}
                />
              )
            })}
          </VStack>
          <Icon
            data-testid="sidebar-toggle"
            onClick={toggleCollapse}
            className={cls.collapsedBtn}
            Svg={ArrowIcon}
            clickable
          />
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LanguageSwitcher short={collapsed} />
          </div>
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
                <SidebarItem
                  key={item.path}
                  collapsed={collapsed}
                  item={item}
                />
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
