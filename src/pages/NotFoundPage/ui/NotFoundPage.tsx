import { memo, type FC } from 'react'
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'
import { Page } from 'shared/ui/Page/Page'

export const NotFoundPage: FC = memo(() => {
  const { t } = useTranslation()
  return <Page className={cls.NotFoundPage}>{t('страница не найдена')}</Page>
})
