import { type FC, type PropsWithChildren, useMemo, useState } from 'react'
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage'
import { ETheme } from '@/shared/const/theme'

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme) || ETheme.LIGHT

interface IThemeProviderProps extends PropsWithChildren {
  initialTheme?: ETheme
}

export const ThemeProvider: FC<IThemeProviderProps> = ({
  children,
  initialTheme,
}) => {
  const [theme, setTheme] = useState(initialTheme || defaultTheme)

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
