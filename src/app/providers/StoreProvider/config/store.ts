import { configureStore } from '@reduxjs/toolkit'
import { type IStateSchema } from './StateSchema'
import { counterReducer } from 'entitites/Counter'

export const createReduxStore = (initialState: IStateSchema) =>
  configureStore<IStateSchema>({
    reducer: { counter: counterReducer },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
