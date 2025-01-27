import {
  memo,
  type PropsWithChildren,
  type FC,
  useCallback,
  useEffect,
} from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Drawer.module.scss'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Portal } from '../../Portal'
import { Overlay } from '../../Overlay'
import {
  AnimationProvider,
  useAnimationLibs,
} from '@/shared/lib/components/AnimationProvider'
import { toggleFeatures } from '@/shared/lib/features'

interface IDrawerProps extends PropsWithChildren {
  className?: string
  isOpen?: boolean
  onClose: () => void
  lazy?: boolean
}

const height = window.innerHeight - 100

const DrawerContent: FC<IDrawerProps> = memo((props) => {
  const { className, children, isOpen, onClose } = props

  const { Gesture, Spring } = useAnimationLibs()

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

  const { theme } = useTheme()

  const handleOpenDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false })
  }, [api])

  useEffect(() => {
    if (isOpen) {
      handleOpenDrawer()
    }
  }, [handleOpenDrawer, isOpen])

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    })
  }

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) {
        cancel()
      }

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close()
        } else {
          handleOpenDrawer()
        }
      } else {
        api.start({ y: my, immediate: true })
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    }
  )

  if (!isOpen) {
    return null
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'))

  return (
    <Portal element={document.getElementById('app') ?? document.body}>
      <div
        className={classNames(cls.Drawer, {}, [
          theme,
          className,
          toggleFeatures({
            name: 'isAppRedesigned',
            on: () => cls.drawerNew,
            off: () => cls.drawerOld,
          }),
        ])}
      >
        <Overlay onClick={close} />
        <Spring.a.div
          className={cls.sheet}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  )
})

const DrawerAsync: FC<IDrawerProps> = (props) => {
  const { isLoaded } = useAnimationLibs()

  if (!isLoaded) {
    return null
  }

  return <DrawerContent {...props} />
}

export const Drawer: FC<IDrawerProps> = (props) => (
  <AnimationProvider>
    <DrawerAsync {...props} />
  </AnimationProvider>
)
