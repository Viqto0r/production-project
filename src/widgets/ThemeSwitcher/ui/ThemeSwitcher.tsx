import { useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { Button, EThemeButton } from 'shared/ui/Button'

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button theme={EThemeButton.CLEAR} onClick={toggleTheme}>
      {theme === ETheme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}
