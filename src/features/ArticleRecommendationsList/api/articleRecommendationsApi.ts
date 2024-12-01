import { type IArticle } from '@/entities/Article'
import { rtkApi } from '@/shared/api/rtkApi'

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendations: build.query<IArticle[], number>({
      query: (_limit) => ({
        url: '/articles',
        params: {
          _limit,
        },
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useGetArticleRecommendationsQuery } = recommendationsApi
