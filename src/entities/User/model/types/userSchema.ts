import { type IUser } from '../consts/consts'

export enum EUserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER',
}

export interface IUserSchema {
  authData?: IUser
  _isInit: boolean
}
