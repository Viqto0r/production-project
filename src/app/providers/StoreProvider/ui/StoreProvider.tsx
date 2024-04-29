import { type FC } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type IStateSchema } from '../config/StateSchema'

interface IStoreProveiderProps {
  initialState?: IStateSchema
}

export const StoreProvider: FC<IStoreProveiderProps> = ({
  children,
  initialState,
}) => {
  const store = createReduxStore(initialState)
  return <Provider store={store}>{children}</Provider>
}
