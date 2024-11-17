import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getArticleCommentsIsLoading = (state: IStateSchema) =>
  state.articleDetailsPage?.comments.isLoading

export const getArticleCommentsError = (state: IStateSchema) =>
  state.articleDetailsPage?.comments?.error
