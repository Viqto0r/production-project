import {
  type FC,
  type PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext'
import { ETheme } from '@/shared/const/theme'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage'
import { toggleFeatures } from '@/shared/lib/features'

interface IThemeProviderProps extends PropsWithChildren {
  initialTheme?: ETheme
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme

export const ThemeProvider: FC<IThemeProviderProps> = ({
  children,
  initialTheme,
}) => {
  const [isThemeInit, setIsThemeInit] = useState(false)
  const [theme, setTheme] = useState(
    initialTheme ?? fallbackTheme ?? ETheme.LIGHT
  )
  useEffect(() => {
    if (!isThemeInit && initialTheme) {
      setTheme(initialTheme)
      setIsThemeInit(true)
    }
  }, [initialTheme, isThemeInit])

  useEffect(() => {
    document.body.className =
      theme +
      toggleFeatures({
        name: 'isAppRedesigned',
        on: () => ' app_redesigned',
        off: () => '',
      })

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
  }, [theme])

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
