import { useEffect, useState } from 'react'
import { Button } from '@/shared/ui/deprecated/Button'

export const ThrowButton = () => {
  const [error, setError] = useState(false)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  const onThrow = () => {
    setError(true)
  }
  // eslint-disable-next-line
  return <Button onClick={onThrow}>Throw error</Button>
}
