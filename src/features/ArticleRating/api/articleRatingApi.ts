import { IRating } from '@/entities/Rating'
import { rtkApi } from '@/shared/api/rtkApi'

interface IGetArticleRatingArgs {
  userId: string
  articleId: string
}

interface IRateArticleArgs extends IGetArticleRatingArgs {
  rate: number
  feedback?: string
  rateId: string
  method?: 'POST' | 'PUT'
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<IRating[], IGetArticleRatingArgs>({
      query: (params) => ({
        url: '/article-ratings',
        params,
      }),
    }),
    // eslint-disable-next-line
    rateArticle: build.mutation<void, IRateArticleArgs>({
      query: ({ method = 'POST', rateId, ...body }) => ({
        url: `/article-ratings/${rateId}`,
        method,
        body,
      }),
    }),
  }),
})

export const { useGetArticleRatingQuery, useRateArticleMutation } =
  articleRatingApi
