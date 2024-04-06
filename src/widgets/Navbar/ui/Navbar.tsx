import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink'
import { EAppLinkTheme } from 'shared/ui/AppLink/ui/AppLink'
import cls from './NavBar.module.scss'
import { useTranslation } from 'react-i18next'

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={EAppLinkTheme.SECONDARY}
          className={cls.mainLink}
          to='/'
        >
          {t('главная страница')}
        </AppLink>
        <AppLink theme={EAppLinkTheme.SECONDARY} to='about'>
          {t('о сайте')}
        </AppLink>
      </div>
    </div>
  )
}
