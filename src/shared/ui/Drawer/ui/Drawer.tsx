import { memo, type PropsWithChildren, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Drawer.module.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { Portal } from 'widgets/Portal/Portal'
import { Overlay } from '../../Overlay'

interface IDrawerProps extends PropsWithChildren {
  className?: string
  isOpen?: boolean
  onClose?: () => void
}

export const Drawer: FC<IDrawerProps> = memo((props) => {
  const { className, children, isOpen, onClose } = props

  const { theme } = useTheme()

  return (
    <Portal>
      <div
        className={classNames(cls.Drawer, { [cls.opened]: isOpen }, [
          theme,
          className,
          'app_drawer',
        ])}
      >
        <Overlay onClick={onClose} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  )
})
