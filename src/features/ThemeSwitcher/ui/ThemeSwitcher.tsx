import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import { ETheme } from '@/shared/const/theme'
import { Button, EThemeButton } from '@/shared/ui/Button'
import { memo, useCallback } from 'react'
import { saveJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

export const ThemeSwitcher = memo(() => {
  const { theme, toggleTheme } = useTheme()
  const dispatch = useAppDispatch()

  const onToggleTheme = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }))
    })
  }, [dispatch, toggleTheme])

  return (
    <Button theme={EThemeButton.CLEAR} onClick={onToggleTheme}>
      {theme === ETheme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
})
