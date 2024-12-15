import { memo, type FC } from 'react'
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

export const NotFoundPage: FC = memo(() => {
  const { t } = useTranslation()
  return (
    <Page data-testid="NotFoundPage" className={cls.NotFoundPage}>
      {t('страница не найдена')}
    </Page>
  )
})
