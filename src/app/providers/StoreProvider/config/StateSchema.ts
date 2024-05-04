import { type ICounterSchema } from 'entitites/Counter'
import { type IUserSchema } from 'entitites/User'
import { type ILoginSchema } from 'features/AuthByUsername'

export interface IStateSchema {
  counter: ICounterSchema
  user: IUserSchema
  loginForm: ILoginSchema
}
