import { type IProfile } from '@/entities/Profile'
import { type EValidateProfileErrors } from '../consts/consts'

export interface IProfileSchema {
  data?: IProfile
  form?: IProfile
  isLoading: boolean
  error?: string
  readonly: boolean
  validateErrors?: EValidateProfileErrors[]
}
