import { rtkApi } from 'shared/api/rtkApi'

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendations: build.query({
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
