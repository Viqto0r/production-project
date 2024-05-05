import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type IStateSchema } from './StateSchema'
import { counterReducer } from 'entitites/Counter'
import { userReducer } from 'entitites/User'
import { createReducerManager } from './reducerManager'

export const createReduxStore = (
  initialState: IStateSchema,
  asyncReducers: ReducersMapObject<IStateSchema>
) => {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore<IStateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
  // @ts-expect-error

  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
