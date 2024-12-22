import {
  type FC,
  type PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext'
import { ETheme } from '@/shared/const/theme'
import { useJsonSettings } from '@/entities/User'

interface IThemeProviderProps extends PropsWithChildren {
  initialTheme?: ETheme
}

export const ThemeProvider: FC<IThemeProviderProps> = ({
  children,
  initialTheme,
}) => {
  const { theme: defaultTheme } = useJsonSettings()
  const [isThemeInit, setIsThemeInit] = useState(false)
  const [theme, setTheme] = useState(
    initialTheme ?? defaultTheme ?? ETheme.LIGHT
  )
  useEffect(() => {
    if (!isThemeInit && defaultTheme) {
      setTheme(defaultTheme)
      setIsThemeInit(true)
    }
  }, [defaultTheme, isThemeInit])

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
