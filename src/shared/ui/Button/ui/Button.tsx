import { type ButtonHTMLAttributes, type FC } from 'react'
import { type TMods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum EButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum EButtonSize {
  M_SIZE = 'm-size',
  L_SIZE = 'l-size',
  XL_SIZE = 'xl-size',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: EButtonTheme
  size?: EButtonSize
  square?: boolean
}

export const Button: FC<IButtonProps> = ({
  children,
  theme = EButtonTheme.OUTLINE,
  size = EButtonSize.M_SIZE,
  square,
  className,
  disabled,
  ...otherProps
}) => {
  const mods: TMods = { [cls.square]: square, [cls.disabled]: disabled }

  return (
    <button
      className={classNames(cls.Button, mods, [
        cls[theme],
        cls[size],
        className,
      ])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
