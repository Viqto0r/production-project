import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

export default memo(function ForbiddenPage() {
  const { t } = useTranslation()

  return (
    <Page data-testid="ForbiddenPage">
      {t('у вас нет доступа к этой странице')}
    </Page>
  )
})
