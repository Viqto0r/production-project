import { memo, type ReactNode, type FC, type HTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Card.module.scss'

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

export const Card: FC<ICardProps> = memo((props) => {
  const { className, children, ...otherProps } = props

  return (
    <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
      {children}
    </div>
  )
})
