import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getArticleCommentsIsLoading = (state: IStateSchema) =>
  state.articleDetailsComments?.isLoading

export const getArticleCommentsError = (state: IStateSchema) =>
  state.articleDetailsComments?.error
