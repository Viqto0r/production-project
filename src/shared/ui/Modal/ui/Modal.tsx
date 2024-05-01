import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { lazy, useCallback, useEffect, useRef, useState, type FC } from 'react'
import { Portal } from 'widgets/Portal/Portal'

interface IModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
  lazy?: boolean
}
const ANIMATION_DELAY = 300

export const Modal: FC<IModalProps> = ({
  children,
  className,
  isOpen,
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const [isMounted, setIsMounted] = useState(false)

  const handleOnClose = useCallback(() => {
    setIsClosing(true)
    timeoutRef.current = setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, ANIMATION_DELAY)
  }, [onClose])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleOnClose()
      }
    },
    [handleOnClose]
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

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div
        className={classNames(
          cls.Modal,
          { [cls.open]: isOpen, [cls.isClosing]: isClosing },
          [className]
        )}
      >
        <div className={cls.overlay} onClick={handleOnClose}>
          <div className={cls.content} onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
