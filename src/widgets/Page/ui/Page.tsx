import {
  memo,
  type ReactNode,
  type FC,
  useRef,
  type MutableRefObject,
  type UIEvent,
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { scrollSaverActions } from '../model/slices/scrollSaverSlice'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import { getScrollByPath } from '../model/selectors/scrollSaverSelectors'
import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle'

interface IPageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page: FC<IPageProps> = memo((props) => {
  const { className, children, onScrollEnd } = props
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollTop = useSelector((state: IStateSchema) =>
    getScrollByPath(state, pathname)
  )

  useInfiniteScroll({
    callback: onScrollEnd,
    wrapperRef,
    triggerRef,
  })

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollTop
  })

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollSaverActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop,
      })
    )
  }, 500)

  return (
    <section
      className={classNames(cls.Page, {}, [className])}
      ref={wrapperRef}
      onScroll={onScroll}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  )
})
