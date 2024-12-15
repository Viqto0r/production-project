import { memo, useMemo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import UserIcon from '../../../assets/icons/UserAvatarFallback.svg'
import { AppImage } from '../../AppImage'
import { Icon } from '../../Icon'
import { Skeleton } from '../../Skeleton/ui/ui/Skeleton'

interface IAvatarProps {
  className?: string
  src?: string
  alt?: string
  size?: number
  fallbackInverted?: boolean
}

export const Avatar: FC<IAvatarProps> = memo((props) => {
  const { className, src, alt, size = 150, fallbackInverted } = props

  const styles = useMemo(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  )

  const fallback = <Skeleton width={size} height={size} border="50%" />
  const errorFallback = (
    <Icon
      Svg={UserIcon}
      width={size}
      height={size}
      inverted={fallbackInverted}
    />
  )

  return (
    <AppImage
      className={classNames(cls.Avatar, {}, [className])}
      src={src}
      style={styles}
      alt={alt}
      fallback={fallback}
      errorFallback={errorFallback}
    />
  )
})
