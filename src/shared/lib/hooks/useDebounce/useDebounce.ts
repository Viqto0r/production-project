import { useCallback, useRef } from 'react'

export const useDebounce = (
  callback: (...args: any[]) => any,
  delay: number
) => {
  const timerRef = useRef<NodeJS.Timeout>()

  return useCallback(
    (...args: unknown[]) => {
      timerRef.current && clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        callback(...args)
      }, delay)
    },
    [callback, delay]
  )
}
