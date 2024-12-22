import { useCallback, useRef } from 'react'

export const useThrottle = (
  callback: (...args: any[]) => any,
  delay: number
) => {
  const isThrottleRef = useRef(false)

  return useCallback(
    (...args: unknown[]) => {
      if (!isThrottleRef.current) {
        callback(...args)
        isThrottleRef.current = true

        setTimeout(() => {
          isThrottleRef.current = false
        }, delay)
      }
    },
    [callback, delay]
  )
}
