import { useTranslation } from 'react-i18next'
import { Button, EThemeButton } from 'shared/ui/Button/Button'
import { useTheme } from 'app/providers/ThemeProvider'

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation()
  const { theme } = useTheme()

  const toggle = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')

  return (
    <Button theme={EThemeButton.CLEAR} onClick={toggle}>
      {t('язык')}
    </Button>
  )
}
