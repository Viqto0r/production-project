import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Overlay.module.scss'

interface IOverlayProps {
  className?: string
  onClick?: () => void
}

export const Overlay: FC<IOverlayProps> = memo((props) => {
  const { className, onClick } = props

  return (
    <div
      className={classNames(cls.Overlay, {}, [className])}
      onClick={onClick}
    />
  )
})
