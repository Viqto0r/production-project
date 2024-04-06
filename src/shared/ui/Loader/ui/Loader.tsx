import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Loader.module.scss'
import { type FC } from 'react'

interface ILoaderProps {
  className?: string
}

export const Loader: FC<ILoaderProps> = ({ className }) => {
  return (
    <div className={classNames(cls['lds-ellipsis'], {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
