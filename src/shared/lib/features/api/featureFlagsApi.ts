import { rtkApi } from '@/shared/api/rtkApi'
import { IFeatureFlags } from '@/shared/types/featuresFlags'

export interface IUpdateFeatureFlagsArg {
  userId: string
  features: Partial<IFeatureFlags>
}

const featureFlagsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    updateFeatureFlags: build.mutation<void, IUpdateFeatureFlagsArg>({
      query: ({ userId, features }: IUpdateFeatureFlagsArg) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: { features },
      }),
    }),
  }),
})

export const updateFeatureFlagsMutation =
  featureFlagsApi.endpoints.updateFeatureFlags.initiate
