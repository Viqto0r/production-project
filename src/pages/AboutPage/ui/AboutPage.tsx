import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

export default memo(function AboutPage() {
  const { t } = useTranslation()

  return <Page>{t('о сайте')}</Page>
})
