import { lazy, Suspense } from 'react'
import { IArticleRatingProps } from './ArticleRating'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton/ui/ui/Skeleton'

export const ArticleRatingLazy = lazy(
  async () => await import('./ArticleRating')
)

export const ArticleRatingAsync = (props: IArticleRatingProps) => {
  return (
    <Suspense fallback={<Skeleton width="100%" height={140} />}>
      <ArticleRatingLazy {...props} />
    </Suspense>
  )
}
