import { lazy, Suspense } from 'react'
import { IProfileRatingProps } from './ProfileRating'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton/ui/ui/Skeleton'

export const ArticleRatingLazy = lazy(
  async () => await import('./ProfileRating')
)

export const ProfileRatingAsync = (props: IProfileRatingProps) => {
  return (
    <Suspense fallback={<Skeleton width="100%" height={140} />}>
      <ArticleRatingLazy {...props} />
    </Suspense>
  )
}
