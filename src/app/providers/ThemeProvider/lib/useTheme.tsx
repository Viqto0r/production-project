import { useContext } from 'react'
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext'

interface IUseThemeResult {
  theme: ETheme
  toggleTheme: () => void
}

export const useTheme = (): IUseThemeResult => {
  const { theme = ETheme.LIGHT, setTheme } = useContext(ThemeContext)

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
