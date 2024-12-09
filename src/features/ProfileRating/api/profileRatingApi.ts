import { IRating } from '@/entities/Rating'
import { rtkApi } from '@/shared/api/rtkApi'

interface IGetProfileRatingArgs {
  userId: string
  profileId: string
}

interface IRateProfileArgs extends IGetProfileRatingArgs {
  rate: number
  feedback?: string
  rateId: string
  method?: 'POST' | 'PUT'
}

const profileRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProfileRating: build.query<IRating[], IGetProfileRatingArgs>({
      query: (params) => ({
        url: '/profile-ratings',
        params,
      }),
    }),
    // eslint-disable-next-line
    rateProfile: build.mutation<void, IRateProfileArgs>({
      query: ({ method = 'POST', rateId, ...body }) => ({
        url: `/profile-ratings/${rateId}`,
        method,
        body,
      }),
    }),
  }),
})

export const { useGetProfileRatingQuery, useRateProfileMutation } =
  profileRatingApi
