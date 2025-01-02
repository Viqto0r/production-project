import { forwardRef, type ButtonHTMLAttributes, type FC } from 'react'
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
  M = 'm-size',
  L = 'l-size',
  XL = 'xl-size',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: EButtonTheme
  size?: EButtonSize
  square?: boolean
  fullWidth?: boolean
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Button: FC<IButtonProps> = forwardRef((props, ref) => {
  const {
    children,
    theme = EButtonTheme.OUTLINE,
    size = EButtonSize.M,
    square,
    className,
    disabled,
    fullWidth,
    ...otherProps
  } = props

  const mods: TMods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls['full-width']]: fullWidth,
  }

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
})
