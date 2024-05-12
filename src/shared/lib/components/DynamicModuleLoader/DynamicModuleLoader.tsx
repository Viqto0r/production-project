import { type Reducer } from '@reduxjs/toolkit'
import {
  type IStateSchemaKeys,
  type IStoreWithReducerManager,
} from 'app/providers/StoreProvider/config/StateSchema'
import { useEffect, type FC } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type TReducerList = {
  [key in IStateSchemaKeys]?: Reducer
}

interface IDynamicModuleLoaderProps {
  reducers: TReducerList
  removeAfterunmount?: boolean
}

export const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = ({
  children,
  removeAfterunmount,
  reducers,
}) => {
  const store = useStore() as IStoreWithReducerManager
  const dispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as IStateSchemaKeys, reducer)
      dispatch({ type: `@INIT add ${name} reducer ` })
    })

    return () => {
      if (removeAfterunmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as IStateSchemaKeys)
          dispatch({ type: `@INIT remove ${name} reducer ` })
        })
      }
    }
    // eslint-disable-next-line
  }, [])

  return <>{children}</>
}
