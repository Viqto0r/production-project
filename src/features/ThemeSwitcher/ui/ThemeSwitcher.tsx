import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import ThemeIcon from '@/shared/assets/icons/theme-icon.svg'
import { Button, EThemeButton } from '@/shared/ui/Button'
import { memo, useCallback } from 'react'
import { saveJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Icon } from '@/shared/ui/Icon'

export const ThemeSwitcher = memo(() => {
  const { toggleTheme } = useTheme()
  const dispatch = useAppDispatch()

  const onToggleTheme = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }))
    })
  }, [dispatch, toggleTheme])

  return (
    <Button theme={EThemeButton.CLEAR} onClick={onToggleTheme}>
      <Icon Svg={ThemeIcon} width={40} height={40} inverted />
    </Button>
  )
})
