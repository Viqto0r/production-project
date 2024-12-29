import { memo, ReactElement, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './MainLayout.module.scss'

interface IMainLayoutProps {
  className?: string
  header: ReactElement
  content: ReactElement
  sidebar: ReactElement
  toolbar?: ReactElement
}

export const MainLayout: FC<IMainLayoutProps> = memo((props) => {
  const { className, content, header, sidebar, toolbar } = props

  return (
    <div className={classNames(cls.MainLayout, {}, [className])}>
      <div className={cls.sidebar}>{sidebar}</div>
      <div className={cls.content}>{content}</div>
      <div className={cls.rightBar}>
        <div className={cls.header}>{header}</div>
        <div className={cls.toolbar}>{toolbar}</div>
      </div>
    </div>
  )
})
