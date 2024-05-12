import { $api } from 'shared/api/api'
import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type IStateSchema } from './StateSchema'
import { counterReducer } from 'entitites/Counter'
import { userReducer } from 'entitites/User'
import { createReducerManager } from './reducerManager'
import { type NavigateFunction } from 'react-router-dom'

export const createReduxStore = (
  initialState?: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>,
  navigate?: NavigateFunction
) => {
  const rootReducers: ReducersMapObject = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const extraArg = {
    api: $api,
    navigate,
  }

  const store = configureStore({
    // @ts-expect-error
    reducer: reducerManager.reduce as ReducersMapObject<IStateSchema>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      })
    },
  })
  // @ts-expect-error

  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
