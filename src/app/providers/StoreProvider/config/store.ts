import { $api } from 'shared/api/api'
import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type IStateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { scrollSaverReducer } from 'widgets/Page'

export const createReduxStore = (
  initialState?: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>
) => {
  const rootReducers: ReducersMapObject = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scrollSaver: scrollSaverReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const extraArg = {
    api: $api,
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
