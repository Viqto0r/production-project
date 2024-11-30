import { useEffect } from 'react'

export const useInitialEffect = (callback: () => void) => {
  useEffect(() => {
    if (__PROJECT__ === 'frontend') {
      callback()
    }
    // eslint-disable-next-line
  }, [])
}
