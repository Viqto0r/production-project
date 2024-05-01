import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type IStateSchema } from './StateSchema'
import { counterReducer } from 'entitites/Counter'
import { userReducer } from 'entitites/User'

export const createReduxStore = (initialState: IStateSchema) => {
  const rootReducer: ReducersMapObject<IStateSchema> = {
    counter: counterReducer,
    user: userReducer,
  }

  return configureStore<IStateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
}
