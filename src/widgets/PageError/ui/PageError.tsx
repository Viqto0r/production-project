import { memo, useCallback, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/deprecated/Button'
import cls from './PageError.module.scss'

interface IPageErrorProps {
  className?: string
}

export const PageError: FC<IPageErrorProps> = memo(() => {
  const { t } = useTranslation()
  const onReload = useCallback(() => {
    location.reload()
  }, [])

  return (
    <div className={cls.PageError}>
      <div>{t('произошла непредвиденная ошибка')}</div>
      <Button onClick={onReload}>{t('перезагрузить страницу')}</Button>
    </div>
  )
})
