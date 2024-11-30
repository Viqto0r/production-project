import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page'

export default memo(function AdminPanelPage() {
  const { t } = useTranslation()

  return <Page>{t('админка')}</Page>
})
