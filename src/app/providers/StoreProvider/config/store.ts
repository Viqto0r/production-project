import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type IStateSchema } from './StateSchema'
import { counterReducer } from 'entitites/Counter'
import { userReducer } from 'entitites/User'
import { loginReducer } from 'features/AuthByUsername'

export const createReduxStore = (initialState: IStateSchema) => {
  const rootReducer: ReducersMapObject<IStateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  }

  return configureStore<IStateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
}
