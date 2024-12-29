import { memo, type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { RatingCard } from '@/entities/Rating'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import {
  useGetProfileRatingQuery,
  useRateProfileMutation,
} from '../../api/profileRatingApi'

export interface IProfileRatingProps {
  className?: string
  profileId: string
}

const ProfileRating: FC<IProfileRatingProps> = memo((props) => {
  const { className, profileId } = props
  const { t } = useTranslation('profile')
  const userData = useSelector(getUserAuthData)
  const userId = userData?.id ?? ''

  const { data, isLoading, refetch } = useGetProfileRatingQuery({
    profileId,
    userId,
  })

  useInitialEffect(refetch)

  const [rateProfileMutation] = useRateProfileMutation()
  const rating = data?.[0]

  const handleRateProfile = useCallback(
    async (starsCount: number) => {
      try {
        await rateProfileMutation({
          profileId,
          userId,
          rate: starsCount,
          rateId: rating?.id ?? '',
          method: !rating ? 'POST' : 'PUT',
        })
      } catch (e) {
        console.log(e)
      }
    },
    [profileId, rateProfileMutation, rating, userId]
  )

  if (profileId === userId) {
    return null
  }

  if (isLoading) {
    return <Skeleton width="100%" height={120} />
  }

  return (
    <RatingCard
      onAccept={handleRateProfile}
      onCancel={handleRateProfile}
      className={className}
      title={t('оцените профиль')}
      rate={rating?.rate}
    />
  )
})

export default ProfileRating
