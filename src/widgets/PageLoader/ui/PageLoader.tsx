import { memo, type FC } from 'react'
import { Loader } from '@/shared/ui/Loader'
import cls from './PageLoader.module.scss'

interface IPageLoaderProps {
  className?: string
}

export const PageLoader: FC<IPageLoaderProps> = memo(() => {
  return (
    <div className={cls.PageLoader}>
      <Loader />
    </div>
  )
})
