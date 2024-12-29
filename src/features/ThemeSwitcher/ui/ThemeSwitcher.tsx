import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import ThemeIconDeprecated from '@/shared/assets/icons/theme-icon.svg'
import ThemeIcon from '@/shared/assets/icons/theme.svg'
import {
  Button as ButtonDeprecated,
  EThemeButton,
} from '@/shared/ui/deprecated/Button'
import { memo, useCallback } from 'react'
import { saveJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { ToggleFeatures } from '@/shared/lib/features'
import { Icon } from '@/shared/ui/redesigned/Icon'

export const ThemeSwitcher = memo(() => {
  const { toggleTheme } = useTheme()
  const dispatch = useAppDispatch()

  const onToggleTheme = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }))
    })
  }, [dispatch, toggleTheme])

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<Icon Svg={ThemeIcon} clickable onClick={onToggleTheme} />}
      off={
        <ButtonDeprecated theme={EThemeButton.CLEAR} onClick={onToggleTheme}>
          <IconDeprecated
            Svg={ThemeIconDeprecated}
            width={40}
            height={40}
            inverted
          />
        </ButtonDeprecated>
      }
    />
  )
})
