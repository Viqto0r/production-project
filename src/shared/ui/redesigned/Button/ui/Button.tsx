import { ReactNode, type ButtonHTMLAttributes, type FC } from 'react'
import { type TMods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'

type TButtonVariant = 'clear' | 'outlined' | 'filled'
type TButtonSize = 'm' | 'l' | 'xl'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: TButtonVariant
  size?: TButtonSize
  square?: boolean
  fullWidth?: boolean
  addonLeft?: ReactNode
  addonRight?: ReactNode
}

export const Button: FC<IButtonProps> = ({
  children,
  variant = 'outline',
  size = 'm',
  square,
  className,
  disabled,
  fullWidth,
  addonLeft,
  addonRight,
  ...otherProps
}) => {
  const mods: TMods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls['full-width']]: fullWidth,
    [cls['with-addon']]: !!addonLeft || !!addonRight,
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
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      {children}
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </button>
  )
}
