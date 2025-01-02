import { forwardRef, type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum EAppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINE = 'outline',
}

interface IAppLinkProps extends LinkProps {
  className?: string
  theme?: string
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const AppLink: FC<IAppLinkProps> = forwardRef(
  (
    { children, className, theme = EAppLinkTheme.PRIMARY, ...otherProps },
    ref
  ) => {
    return (
      <Link
        className={classNames(cls.AppLink, {}, [cls[theme], className])}
        {...otherProps}
      >
        {children}
      </Link>
    )
  }
)
