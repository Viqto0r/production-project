import { type ICounterSchema } from 'entitites/Counter'
import { type IUserSchema } from 'entitites/User'

export interface IStateSchema {
  counter: ICounterSchema
  user: IUserSchema
}
