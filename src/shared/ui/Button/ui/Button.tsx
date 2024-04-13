import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum EThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: EThemeButton
}

export const Button: FC<IButtonProps> = ({
  children,
  theme,
  className,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(cls.Button, {}, [cls[theme], className])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
