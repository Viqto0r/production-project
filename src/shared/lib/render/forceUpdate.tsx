import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

const ForceUpdateContext = createContext({ value: true, forceUpdate: () => {} })

/** Костыль для принудительной перерисовки без перезагрузки страницы */
export const useForceUpdate = () => {
  const { forceUpdate } = useContext(ForceUpdateContext)

  return forceUpdate
}

export const ForceUpdateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [value, setValue] = useState(true)

  const forceUpdate = useCallback(() => {
    setValue((prev) => !prev)

    setTimeout(() => {
      setValue((prev) => !prev)
    })
  }, [])

  const contextValue = useMemo(
    () => ({ value, forceUpdate }),
    [forceUpdate, value]
  )

  if (!value) {
    return null
  }

  return (
    <ForceUpdateContext.Provider value={contextValue}>
      {children}
    </ForceUpdateContext.Provider>
  )
}
