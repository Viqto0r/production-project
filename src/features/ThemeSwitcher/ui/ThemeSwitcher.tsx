import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import { ETheme } from '@/shared/const/theme'
import { Button, EThemeButton } from '@/shared/ui/Button'
import { memo } from 'react'

export const ThemeSwitcher = memo(() => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button theme={EThemeButton.CLEAR} onClick={toggleTheme}>
      {theme === ETheme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
})
