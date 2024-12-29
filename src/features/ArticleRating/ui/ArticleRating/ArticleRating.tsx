import { memo, useCallback, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { RatingCard } from '@/entities/Rating'
import {
  useGetArticleRatingQuery,
  useRateArticleMutation,
} from '../../api/articleRatingApi'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton/ui/ui/Skeleton'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'

export interface IArticleRatingProps {
  className?: string
  articleId: string
}

const ArticleRating: FC<IArticleRatingProps> = memo((props) => {
  const { className, articleId } = props
  const { t } = useTranslation('article-details')
  const userData = useSelector(getUserAuthData)
  const userId = userData?.id ?? ''

  const { data, isLoading, refetch } = useGetArticleRatingQuery({
    articleId,
    userId,
  })

  useInitialEffect(refetch)

  const [rateArticleMutation] = useRateArticleMutation()
  const rating = data?.[0]

  const handleRateArticle = useCallback(
    async (starsCount: number, feedback?: string) => {
      try {
        await rateArticleMutation({
          articleId,
          userId,
          rate: starsCount,
          feedback,
          rateId: rating?.id ?? '',
          method: !rating ? 'POST' : 'PUT',
        })
      } catch (e) {
        console.log(e)
      }
    },
    [articleId, rateArticleMutation, rating, userId]
  )

  if (isLoading) {
    return <Skeleton width="100%" height={120} />
  }

  return (
    <RatingCard
      onAccept={handleRateArticle}
      onCancel={handleRateArticle}
      className={className}
      title={t('оцените статью')}
      feedbackTitle={t(
        'оставьте свой отзыв о статье, это поможет улучшить качество'
      )}
      hasFeedback
      rate={rating?.rate}
    />
  )
})

export default ArticleRating
