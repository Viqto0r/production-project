import { type ReactNode, type FC, type HTMLAttributes } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Card.module.scss'

export enum ECardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}
interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  theme?: ECardTheme
  fullWidth?: boolean
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Card: FC<ICardProps> = (props) => {
  const {
    className,
    children,
    theme = ECardTheme.NORMAL,
    fullWidth,
    ...otherProps
  } = props

  return (
    <div
      className={classNames(cls.Card, { [cls['full-width']]: fullWidth }, [
        className,
        cls[theme],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  )
}
