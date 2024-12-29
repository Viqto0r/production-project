import { type FC } from 'react'
import { type LinkProps } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { NavLink } from 'react-router-dom'

export type TAppLinkVariant = 'primary' | 'red'

interface IAppLinkProps extends LinkProps {
  className?: string
  variant?: TAppLinkVariant
  activeClassName?: string
}

export const AppLink: FC<IAppLinkProps> = ({
  children,
  className,
  variant = 'primary',
  activeClassName = '',
  ...otherProps
}) => {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames('', { [activeClassName]: isActive }, [
          cls[variant],
          className,
        ])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  )
}
