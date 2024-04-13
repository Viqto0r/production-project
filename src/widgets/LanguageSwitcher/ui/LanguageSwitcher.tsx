import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, EThemeButton } from 'shared/ui/Button'
import cls from './LanguageSwitcher.module.scss'

export const LanguageSwitcher: FC = () => {
  const { t, i18n } = useTranslation()

  const toggle = async () =>
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')

  return (
    <Button
      theme={EThemeButton.CLEAR}
      onClick={toggle}
      className={cls.LanguageSwitcher}
    >
      {t('язык')}
    </Button>
  )
}
