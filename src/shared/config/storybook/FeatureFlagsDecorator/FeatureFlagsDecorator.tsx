import { setFeatureFlags } from '@/shared/lib/features'
import { IFeatureFlags } from '@/shared/types/featuresFlags'
import { type StoryFn } from '@storybook/react'

export const FeatureFlagsDecorator =
  (features: IFeatureFlags) => (Story: StoryFn) => {
    setFeatureFlags(features)

    return <Story />
  }
