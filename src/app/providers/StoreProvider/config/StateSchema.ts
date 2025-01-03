import {
  type Reducer,
  type AnyAction,
  type CombinedState,
  type ReducersMapObject,
  type EnhancedStore,
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type IArticleDetailsSchema } from '@/entities/Article'
import { type ICounterSchema } from '@/entities/Counter'
import { type IUserSchema } from '@/entities/User'
import { type IAddCommentFormSchema } from '@/features/AddCommentForm'
import { type ILoginSchema } from '@/features/AuthByUsername'
import { type IProfileSchema } from '@/features/EditableProfileCard'
import { type IArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage'
import { type IArticlePageSchema } from '@/pages/ArticlesPage'
import { type rtkApi } from '@/shared/api/rtkApi'
import { type IScrollSaverSchema } from '@/widgets/Page'

export interface IStateSchema {
  counter: ICounterSchema
  user: IUserSchema
  scrollSaver: IScrollSaverSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // Асинхронные редьюсеры
  loginForm?: ILoginSchema
  profile?: IProfileSchema
  articlesPage?: IArticlePageSchema
  articleDetails?: IArticleDetailsSchema
  articleDetailsPage?: IArticleDetailsPageSchema
  addCommentForm?: IAddCommentFormSchema
}

export type IStateSchemaKeys = keyof IStateSchema

export type IReducerManager = (
  initialReducers: ReducersMapObject<IStateSchema>
) => {
  getReducerMap: () => ReducersMapObject<IStateSchema>
  reduce: (
    state: IStateSchema,
    action: AnyAction
  ) => CombinedState<IStateSchema>
  add: (key: IStateSchemaKeys, reducer: Reducer) => void
  remove: (key: IStateSchemaKeys) => void
}

export interface IStoreWithReducerManager extends EnhancedStore<IStateSchema> {
  reducerManager: ReturnType<IReducerManager>
}

interface IThunkExtraArg {
  api: AxiosInstance
}

export interface IThunkConfig<T> {
  rejectValue: T
  extra: IThunkExtraArg
  state: IStateSchema
}
