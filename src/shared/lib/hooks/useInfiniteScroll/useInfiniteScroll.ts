import { useEffect, type MutableRefObject } from 'react'

export interface IUseInfiniteScrollOptions {
  callback?: () => void
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = ({
  callback,
  triggerRef,
  wrapperRef,
}: IUseInfiniteScrollOptions) => {
  useEffect(() => {
    if (!callback) return

    const trigger = triggerRef.current
    const wrapper = wrapperRef.current

    const options = {
      root: wrapper,
      rootMargin: '0px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback()
      }
    }, options)

    observer.observe(trigger)

    return () => {
      observer.unobserve(trigger)
    }
  }, [callback, triggerRef, wrapperRef])
}
