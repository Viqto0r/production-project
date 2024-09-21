import {
  type Reducer,
  type AnyAction,
  type CombinedState,
  type ReducersMapObject,
  type EnhancedStore,
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type ICounterSchema } from 'entities/Counter'
import { type IProfileSchema } from 'entities/Profile/model/types/profile'
import { type IUserSchema } from 'entities/User'
import { type ILoginSchema } from 'features/AuthByUsername'
import { type NavigateFunction } from 'react-router-dom'

export interface IStateSchema {
  counter: ICounterSchema
  user: IUserSchema

  // Асинхронные редьюсеры
  loginForm?: ILoginSchema
  profile?: IProfileSchema
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

interface IThunkExtraArg {
  api: AxiosInstance
  navigate?: NavigateFunction
}

export interface IThunkConfig<T> {
  rejectValue: T
  extra: IThunkExtraArg
  state: IStateSchema
}
