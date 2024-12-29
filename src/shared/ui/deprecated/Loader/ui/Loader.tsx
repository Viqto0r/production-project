import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Loader.module.scss'
import { memo, type FC } from 'react'

interface ILoaderProps {
  className?: string
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Loader: FC<ILoaderProps> = memo(({ className }) => {
  return (
    <div className={classNames(cls['lds-ellipsis'], {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
})
