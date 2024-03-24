import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import { AppLink } from 'shared/ui/AppLink'
import { EAppLinkTheme } from 'shared/ui/AppLink/ui/AppLink'
import cls from './NavBar.module.scss'

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={EAppLinkTheme.SECONDARY}
          className={cls.mainLink}
          to='/'
        >
          Main
        </AppLink>
        <AppLink theme={EAppLinkTheme.SECONDARY} to='about'>
          About
        </AppLink>
      </div>
    </div>
  )
}
