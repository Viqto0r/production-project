import { type Reducer } from '@reduxjs/toolkit'
import {
  type IStateSchema,
  type IStateSchemaKeys,
  type IStoreWithReducerManager,
} from '@/app/providers/StoreProvider'
import { type PropsWithChildren, useEffect, type FC } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type TReducerList = {
  [key in IStateSchemaKeys]?: Reducer<NonNullable<IStateSchema[key]>>
}

interface IDynamicModuleLoaderProps extends PropsWithChildren {
  reducers: TReducerList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = ({
  children,
  removeAfterUnmount = true,
  reducers,
}) => {
  const store = useStore() as IStoreWithReducerManager
  const dispatch = useDispatch()

  useEffect(() => {
    const reducerMap = store.reducerManager.getReducerMap()

    Object.entries(reducers).forEach(([name, reducer]) => {
      const isMounted = name in reducerMap

      // Добавляем новый редьюсер, если он не вмонтирован
      if (!isMounted) {
        store.reducerManager.add(name as IStateSchemaKeys, reducer)
        dispatch({ type: `@INIT add ${name} reducer ` })
      }
    })

    return () => {
      if (removeAfterUnmount) {
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
