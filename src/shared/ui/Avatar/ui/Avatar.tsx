import { memo, useMemo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

interface IAvatarProps {
  className?: string
  src?: string
  alt: string
  size?: number
}

export const Avatar: FC<IAvatarProps> = memo((props) => {
  const { className, src, alt, size } = props

  const styles = useMemo(
    () => ({
      width: size || 150,
      height: size || 150,
    }),
    [size]
  )

  return (
    <img
      className={classNames(cls.Avatar, {}, [className])}
      src={src}
      style={styles}
      alt={alt}
    />
  )
})
