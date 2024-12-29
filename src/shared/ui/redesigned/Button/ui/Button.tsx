import { type ButtonHTMLAttributes, type FC } from 'react'
import { type TMods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'

type TButtonVariant = 'clear' | 'outlined'
type TButtonSize = 'm' | 'l' | 'xl'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: TButtonVariant
  size?: TButtonSize
  square?: boolean
  fullWidth?: boolean
}

export const Button: FC<IButtonProps> = ({
  children,
  variant = 'outline',
  size = 'm',
  square,
  className,
  disabled,
  fullWidth,
  ...otherProps
}) => {
  const mods: TMods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls['full-width']]: fullWidth,
  }

  return (
    <button
      className={classNames(cls.Button, mods, [
        cls[variant],
        cls[size],
        className,
      ])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
