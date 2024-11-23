import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getArticleRecommendationsIsLoading = (state: IStateSchema) =>
  state.articleDetailsPage?.recommendations?.isLoading

export const getArticleRecommendationsError = (state: IStateSchema) =>
  state.articleDetailsPage?.recommendations?.error