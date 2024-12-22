import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

export default memo(function MainPage() {
  const { t } = useTranslation()

  return <Page data-testid="MainPage">{t('главная страница')}</Page>
})
