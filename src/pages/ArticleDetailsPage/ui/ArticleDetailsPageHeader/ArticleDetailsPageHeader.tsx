import { memo, useCallback, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPageHeader.module.scss'
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useSelector } from 'react-redux'
import { canEditArticleSelector } from 'pages/ArticlesPage'
import { getArticleDetailsData } from 'entities/Article'

interface IArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader: FC<IArticleDetailsPageHeaderProps> =
  memo((props) => {
    const { className } = props
    const { t } = useTranslation('article-details')
    const navigate = useNavigate()
    const canEdit = useSelector(canEditArticleSelector)
    const article = useSelector(getArticleDetailsData)

    const onBackToList = useCallback(() => {
      navigate(RoutePath.articles)
    }, [navigate])

    const onEdit = useCallback(() => {
      navigate(`${RoutePath.article_details}${article?.id}/edit`)
    }, [article?.id, navigate])

    return (
      <div
        className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}
      >
        <Button onClick={onBackToList}>{t('назад к списку')}</Button>
        {canEdit && <Button onClick={onEdit}>{t('редактировать')}</Button>}
      </div>
    )
  })
