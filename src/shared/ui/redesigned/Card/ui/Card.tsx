import { type ReactNode, type FC, type HTMLAttributes } from 'react'
import { classNames, TMods } from '@/shared/lib/classNames/classNames'
import cls from './Card.module.scss'

type TCardVariant = 'normal' | 'outlined' | 'light'
type TCardPaddings = '0' | '8' | '16' | '24'
type TCardBorder = 'round' | 'normal'

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  variant?: TCardVariant
  fullWidth?: boolean
  fullHeight?: boolean
  padding?: TCardPaddings
  border?: TCardBorder
}

const mapPaddingToClass: Record<TCardPaddings, string> = {
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
    fullHeight,
    padding = '8',
    border = 'normal',
    ...otherProps
  } = props

  const paddingClass = mapPaddingToClass[padding]
  const mods: TMods = {
    [cls['full-width']]: fullWidth,
    [cls['full-height']]: fullHeight,
  }

  return (
    <div
      className={classNames('', mods, [
        className,
        cls[variant],
        cls[paddingClass],
        cls[border],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  )
}
