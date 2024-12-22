import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

export default memo(function AboutPage() {
  const { t } = useTranslation()

  return <Page data-testid="AboutPage">{t('о сайте')}</Page>
})
