import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { useTranslation } from 'react-i18next'

interface IArticlesPageProps {
  className?: string
}

const ArticlesPage: FC<IArticlesPageProps> = memo((props) => {
  const { className } = props
  const { t } = useTranslation('article')

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      {t('')}ArticlesPage
    </div>
  )
})

export default ArticlesPage
