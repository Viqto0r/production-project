import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react'

type TSpring = typeof import('@react-spring/web')
type TGesture = typeof import('@use-gesture/react')

interface IAnimationContextPayload {
  Gesture?: TGesture
  Spring?: TSpring
  isLoaded?: boolean
}

const AnimationContext = createContext<IAnimationContextPayload>({})

const getAsyncAnimationModules = async () => {
  return await Promise.all([
    import('@react-spring/web'),
    import('@use-gesture/react'),
  ])
}

export const AnimationProvider: FC<PropsWithChildren> = ({ children }) => {
  const SpringRef = useRef<TSpring>()
  const GestureRef = useRef<TGesture>()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      SpringRef.current = Spring
      GestureRef.current = Gesture
      setIsLoaded(true)
    })
  }, [])

  const value = useMemo(
    () => ({
      Spring: SpringRef.current,
      Gesture: GestureRef.current,
      isLoaded,
    }),
    [isLoaded]
  )

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  )
}

export const useAnimationLibs = () =>
  useContext(AnimationContext) as Required<IAnimationContextPayload>
