import {
  type MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

interface IUseModalProps {
  onClose: () => void
  animationDelay: number
  isOpen?: boolean
}

export const useModal = ({
  onClose,
  animationDelay,
  isOpen,
}: IUseModalProps) => {
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const timeoutRef = useRef() as MutableRefObject<NodeJS.Timeout>

  const close = useCallback(() => {
    setIsClosing(true)
    timeoutRef.current = setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, animationDelay)
  }, [animationDelay, onClose])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
      }
    },
    [close]
  )

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      clearTimeout(timeoutRef.current)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  return {
    isClosing,
    isMounted,
    close,
  }
}
