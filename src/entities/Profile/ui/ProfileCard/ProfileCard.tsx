import { type FC } from 'react'
import { type IProfile } from '../../model/types/profile'
// eslint-disable-next-line
import { ToggleFeatures } from '@/shared/lib/features'
import {
  ProfileCardDeprecated,
  ProfileCardDeprecatedError,
  ProfileCardDeprecatedLoader,
} from '../ProfileCardDeprecated/ProfileCardDeprecated'
import {
  ProfileCardRedesigned,
  ProfileCardRedesignedError,
  ProfileCardRedesignedSkeleton,
} from '../ProfileCardRedesigned/ProfileCardRedesigned'

export interface IProfileCardProps {
  className?: string
  data?: IProfile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeValue: (value: string, name: string | undefined) => void
}

export const ProfileCard: FC<IProfileCardProps> = (props) => {
  const { isLoading, error } = props

  if (isLoading) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<ProfileCardRedesignedSkeleton />}
        off={<ProfileCardDeprecatedLoader />}
      />
    )
  }

  if (error) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<ProfileCardRedesignedError />}
        off={<ProfileCardDeprecatedError />}
      />
    )
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ProfileCardRedesigned {...props} />}
      off={<ProfileCardDeprecated {...props} />}
    />
  )
}
