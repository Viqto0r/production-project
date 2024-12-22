import { ETheme } from '../../const/theme'
import { createContext } from 'react'

export interface IThemeContextProps {
  theme?: ETheme
  setTheme?: (theme: ETheme) => void
}

export const ThemeContext = createContext<IThemeContextProps>({})
