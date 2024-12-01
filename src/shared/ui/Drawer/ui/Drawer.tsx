import { memo, type PropsWithChildren, type FC } from 'react'
import { classNames, type TMods } from 'shared/lib/classNames/classNames'
import cls from './Drawer.module.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { Portal } from 'widgets/Portal/Portal'
import { Overlay } from '../../Overlay'
import { useModal } from 'shared/lib/hooks/useModal/useModal'

interface IDrawerProps extends PropsWithChildren {
  className?: string
  isOpen?: boolean
  onClose: () => void
  lazy?: boolean
}

export const Drawer: FC<IDrawerProps> = memo((props) => {
  const { className, children, isOpen, onClose, lazy } = props

  const { close, isClosing, isMounted } = useModal({
    onClose,
    isOpen,
    animationDelay: 300,
  })

  const { theme } = useTheme()

  if (lazy && !isMounted) {
    return null
  }

  const mods: TMods = { [cls.open]: isOpen, [cls.isClosing]: isClosing }

  return (
    <Portal>
      <div
        className={classNames(cls.Drawer, mods, [
          theme,
          className,
          'app_drawer',
        ])}
      >
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  )
})
