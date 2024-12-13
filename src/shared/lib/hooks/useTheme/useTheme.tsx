import { useContext, useEffect } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localstorage'
import { ETheme } from '../../../const/theme'

interface IUseThemeResult {
  theme: ETheme
  toggleTheme: () => void
}

export const useTheme = (): IUseThemeResult => {
  const { theme = ETheme.LIGHT, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    document.body.className = theme
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleTheme = (): void => {
    let newTheme: ETheme

    switch (theme) {
      case ETheme.DARK:
        newTheme = ETheme.LIGHT
        break
      case ETheme.LIGHT:
        newTheme = ETheme.ORANGE
        break
      case ETheme.ORANGE:
        newTheme = ETheme.DARK
        break

      default:
        newTheme = ETheme.LIGHT
    }

    setTheme?.(newTheme)
    document.body.className = newTheme
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}
