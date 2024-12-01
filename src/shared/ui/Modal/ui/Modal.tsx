import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import {
  type MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react'
import { Portal } from 'widgets/Portal/Portal'
import { Overlay } from '../../Overlay'

interface IModalProps extends PropsWithChildren {
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
  lazy,
}) => {
  const [isClosing, setIsClosing] = useState(false)
  const timeoutRef = useRef() as MutableRefObject<NodeJS.Timeout>
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
        <Overlay onClick={handleOnClose} className={cls.overlay} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  )
}
