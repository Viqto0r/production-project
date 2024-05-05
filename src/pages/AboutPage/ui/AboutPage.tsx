import { memo } from 'react'
import { useTranslation } from 'react-i18next'

export default memo(function AboutPage() {
  const { t } = useTranslation()

  return <div>{t('о сайте')}</div>
})
