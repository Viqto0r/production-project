import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'

interface IArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = memo((props) => {
  const { className } = props
  const { t } = useTranslation('article-details')
  const { id: articleId } = useParams<{ id: string }>()

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      {articleId ? <ArticleDetails id={articleId} /> : t('статья не найдена')}
    </div>
  )
})

export default ArticleDetailsPage
