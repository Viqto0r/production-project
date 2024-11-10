import {
  memo,
  type ReactNode,
  type FC,
  useRef,
  type MutableRefObject,
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'

interface IPageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page: FC<IPageProps> = memo((props) => {
  const { className, children, onScrollEnd } = props
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

  useInfiniteScroll({
    callback: onScrollEnd,
    wrapperRef,
    triggerRef,
  })

  return (
    <section className={classNames(cls.Page, {}, [className])} ref={wrapperRef}>
      {children}
      <div ref={triggerRef} />
    </section>
  )
})
