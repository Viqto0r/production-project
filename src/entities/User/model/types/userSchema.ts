import { IFeatureFlags } from '@/shared/types/featuresFlags'
import { EUserRole } from '../consts/consts'
import { IJsonSettings } from './jsonSettings'

export interface IUserSchema {
  authData?: IUser
  _isInit: boolean
}

export interface IUser {
  id: string
  username: string
  avatar?: string
  roles?: EUserRole[]
  features?: IFeatureFlags
  jsonSettings?: IJsonSettings
}
