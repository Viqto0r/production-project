import { type CSSProperties, memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Skeleton.module.scss'

interface ISkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  border?: string | number
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Skeleton: FC<ISkeletonProps> = memo((props) => {
  const { className, height, width, border } = props

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  }

  return (
    <div className={classNames(cls.Skeleton, {}, [className])} style={styles} />
  )
})
