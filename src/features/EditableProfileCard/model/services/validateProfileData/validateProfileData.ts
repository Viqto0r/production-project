import { type IProfile } from '@/entities/Profile'
import { EValidateProfileErrors } from '../../consts/consts'

export const validateProfileData = (profile?: IProfile) => {
  const errors: EValidateProfileErrors[] = []

  if (!profile) {
    return []
  }

  if (!profile.firstName || !profile.lastName) {
    errors.push(EValidateProfileErrors.INCORRECT_USER_DATA)
  }

  if (!profile.age) {
    errors.push(EValidateProfileErrors.INCORRECT_AGE)
  }

  if (!profile.country) {
    errors.push(EValidateProfileErrors.INCORRECT_COUNTRY)
  }

  return errors
}
