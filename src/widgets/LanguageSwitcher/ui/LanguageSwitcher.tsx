import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, EThemeButton } from 'shared/ui/Button'
import cls from './LanguageSwitcher.module.scss'

interface LanguageSwitcherProps {
  short: boolean
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ short }) => {
  const { t, i18n } = useTranslation()
  const language = short ? 'короткий язык' : 'язык'

  const toggle = async () =>
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')

  return (
    <Button
      theme={EThemeButton.CLEAR}
      onClick={toggle}
      className={cls.LanguageSwitcher}
    >
      {t(language)}
    </Button>
  )
}
