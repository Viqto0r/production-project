import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { type FC, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { Button, EThemeButton } from 'shared/ui/Button'
import { EButtonSize } from 'shared/ui/Button/ui/Button'
import { AppLink } from 'shared/ui/AppLink'
import { EAppLinkTheme } from 'shared/ui/AppLink/ui/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/Main.svg'
import AboutIcon from 'shared/assets/icons/About.svg'

interface ISidebarProps {
  className?: string
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const toggleCollapse = () => {
    setCollapsed((collapsed) => !collapsed)
  }

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid='sidebar-toggle'
        onClick={toggleCollapse}
        className={cls.collapsedBtn}
        size={EButtonSize.L_SIZE}
        theme={EThemeButton.BACKGROUND_INVERTED}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.links}>
        <AppLink
          className={cls.item}
          theme={EAppLinkTheme.SECONDARY}
          to={RoutePath.main}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t('главная страница')}</span>
        </AppLink>
        <AppLink
          className={cls.item}
          theme={EAppLinkTheme.SECONDARY}
          to={RoutePath.about}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('о сайте')}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  )
}
