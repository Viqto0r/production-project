import { type FC } from 'react'
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'

export const NotFoundPage: FC = () => {
  const { t } = useTranslation()
  return <div className={cls.NotFoundPage}>{t('страница не найдена')}</div>
}
