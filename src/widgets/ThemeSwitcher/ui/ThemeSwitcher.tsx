import { useTheme } from 'app/providers/ThemeProvider'
import { Button, EThemeButton } from 'shared/ui/Button/Button'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button theme={EThemeButton.CLEAR} onClick={toggleTheme}>
      {theme === ETheme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}
