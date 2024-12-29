import { type ReactNode, type FC, type HTMLAttributes } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Card.module.scss'

type TCardVariant = 'normal' | 'outlined' | 'light'
type CardPaddings = '0' | '8' | '16' | '24'

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  variant?: TCardVariant
  fullWidth?: boolean
  padding?: CardPaddings
}

const mapPaddingToClass: Record<CardPaddings, string> = {
  0: 'gap_0',
  8: 'gap_8',
  16: 'gap_16',
  24: 'gap_24',
}

export const Card: FC<ICardProps> = (props) => {
  const {
    className,
    children,
    variant = 'normal',
    fullWidth,
    padding = '8',
    ...otherProps
  } = props

  const paddingClass = mapPaddingToClass[padding]

  return (
    <div
      className={classNames(cls.Card, { [cls['full-width']]: fullWidth }, [
        className,
        cls[variant],
        cls[paddingClass],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  )
}
