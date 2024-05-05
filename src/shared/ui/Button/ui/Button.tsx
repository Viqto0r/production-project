import { memo, type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum EButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
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

export const Button: FC<IButtonProps> = memo(
  ({ children, theme, size, square, className, disabled, ...otherProps }) => {
    return (
      <button
        className={classNames(
          cls.Button,
          { [cls.square]: square, [cls.disabled]: disabled },
          [cls[theme], cls[size], className]
        )}
        {...otherProps}
      >
        {children}
      </button>
    )
  }
)
