import {
  type Reducer,
  type AnyAction,
  type CombinedState,
  type ReducersMapObject,
  type EnhancedStore,
} from '@reduxjs/toolkit'
import { type ICounterSchema } from 'entitites/Counter'
import { type IUserSchema } from 'entitites/User'
import { type ILoginSchema } from 'features/AuthByUsername'

export interface IStateSchema {
  counter: ICounterSchema
  user: IUserSchema

  // Асинхронные редьюсеры
  loginForm?: ILoginSchema
}

export type IStateSchemaKeys = keyof IStateSchema

export type IReducerManager = (
  initialReducers: ReducersMapObject<IStateSchema>
) => {
  getReducerMap: () => ReducersMapObject<IStateSchema>
  reduce: (
    state: IStateSchema,
    action: AnyAction
  ) => CombinedState<IStateSchema>
  add: (key: IStateSchemaKeys, reducer: Reducer) => void
  remove: (key: IStateSchemaKeys) => void
}

export interface IStoreWithReducerManager extends EnhancedStore<IStateSchema> {
  reducerManager: ReturnType<IReducerManager>
}
