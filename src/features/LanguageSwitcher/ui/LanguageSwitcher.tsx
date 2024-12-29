import { memo, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Button as ButtonDeprecated,
  EThemeButton,
} from '@/shared/ui/deprecated/Button'
import cls from './LanguageSwitcher.module.scss'
import { ToggleFeatures } from '@/shared/lib/features'
import { Button } from '@/shared/ui/redesigned/Button'

interface LanguageSwitcherProps {
  short: boolean
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = memo(({ short }) => {
  const { t, i18n } = useTranslation()
  const language = short ? 'короткий язык' : 'язык'

  const toggle = async () =>
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<Button variant="clear">{t(language)}</Button>}
      off={
        <ButtonDeprecated
          theme={EThemeButton.CLEAR}
          onClick={toggle}
          className={cls.LanguageSwitcher}
        >
          {t(language)}
        </ButtonDeprecated>
      }
    />
  )
})
