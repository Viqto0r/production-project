import { IFeatureFlags } from '@/shared/types/featuresFlags'
import { type EUserRole } from '../types/userSchema'

export interface IUser {
  id: string
  username: string
  avatar?: string
  roles?: EUserRole[]
  features?: IFeatureFlags
}
