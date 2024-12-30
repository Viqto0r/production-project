import { memo, ReactElement, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './StickyContentLayout.module.scss'

interface IStickyContentLayoutProps {
  className?: string
  left?: ReactElement
  content: ReactElement
  right?: ReactElement
}

export const StickyContentLayout: FC<IStickyContentLayoutProps> = memo(
  (props) => {
    const { className, left, content, right } = props

    return (
      <div className={classNames(cls.StickyContentLayout, {}, [className])}>
        {left && <div className={cls.left}>{left}</div>}
        <div className={cls.content}>{content}</div>
        {right && <div className={cls.right}>{right}</div>}
      </div>
    )
  }
)
