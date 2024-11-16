import { type FC } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type IStateSchema } from '../config/StateSchema'
import { type ReducersMapObject } from '@reduxjs/toolkit'

interface IStoreProviderProps {
  initialState?: DeepPartial<IStateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export const StoreProvider: FC<IStoreProviderProps> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  const store = createReduxStore(
    initialState as IStateSchema,
    asyncReducers as ReducersMapObject<IStateSchema>
  )
  return <Provider store={store}>{children}</Provider>
}
