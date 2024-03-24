import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './Button.module.scss'

export enum EThemeButton {
  CLEAR = 'clear',
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
