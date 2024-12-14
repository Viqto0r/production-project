import { classNames, type TMods } from '@/shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { type FC, type PropsWithChildren } from 'react'
import { Portal } from '@/widgets/Portal'
import { Overlay } from '../../Overlay'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'

interface IModalProps extends PropsWithChildren {
  className?: string
  isOpen: boolean
  onClose: () => void
  lazy?: boolean
}

export const Modal: FC<IModalProps> = ({
  children,
  className,
  isOpen,
  onClose,
  lazy,
}) => {
  const { close, isClosing, isMounted } = useModal({
    isOpen,
    onClose,
    animationDelay: 300,
  })

  if (lazy && !isMounted) {
    return null
  }

  const mods: TMods = { [cls.open]: isOpen, [cls.isClosing]: isClosing }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <Overlay onClick={close} className={cls.overlay} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  )
}
