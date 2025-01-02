import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { ETheme } from '../../../const/theme'

type TSaveAction = (theme: ETheme) => void
interface IUseThemeResult {
  theme: ETheme
  toggleTheme: (saveAction?: TSaveAction) => void
}

export const useTheme = (): IUseThemeResult => {
  const { theme = ETheme.LIGHT, setTheme } = useContext(ThemeContext)

  const toggleTheme = (saveAction?: TSaveAction): void => {
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
    saveAction?.(newTheme)
  }

  return { theme, toggleTheme }
}
