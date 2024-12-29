import { memo, useMemo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import UserIcon from '../../../../assets/icons/UserAvatarFallback.svg'
import { AppImage } from '../../../redesigned/AppImage'
import { Icon } from '../../Icon'
import { Skeleton } from '../../Skeleton/'

interface IAvatarProps {
  className?: string
  src?: string
  alt?: string
  size?: number
}

export const Avatar: FC<IAvatarProps> = memo((props) => {
  const { className, src, alt, size = 150 } = props

  const styles = useMemo(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  )

  const fallback = <Skeleton width={size} height={size} border="50%" />
  const errorFallback = <Icon Svg={UserIcon} width={size} height={size} />

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
