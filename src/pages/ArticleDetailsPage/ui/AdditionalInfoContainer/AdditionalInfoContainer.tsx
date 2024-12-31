import { getArticleDetailsData } from '@/entities/Article'
import { Card } from '@/shared/ui/redesigned/Card'
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo'
import { memo, useCallback, type FC } from 'react'
import { useSelector } from 'react-redux'
import cls from './AdditionalInfoContainer.module.scss'
import { useNavigate } from 'react-router-dom'
import { getRouteArticleEdit } from '@/shared/const/router'

export const AdditionalInfoContainer: FC = memo((props) => {
  const article = useSelector(getArticleDetailsData)
  const navigate = useNavigate()

  const onEdit = useCallback(() => {
    if (article?.id) {
      navigate(getRouteArticleEdit(article?.id))
    }
  }, [article?.id, navigate])

  if (!article) {
    return null
  }

  return (
    <Card padding="24" border="medium-round" className={cls.card}>
      <ArticleAdditionalInfo
        onEdit={onEdit}
        author={article?.user}
        views={article?.views}
        createdAt={article?.createdAt}
      />
    </Card>
  )
})
