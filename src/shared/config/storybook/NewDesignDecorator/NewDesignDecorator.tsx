import { type StoryFn } from '@storybook/react'
import { setFeatureFlags } from '@/shared/lib/features'
import { getAllFeatureFlags } from '@/shared/lib/features/lib/setGetFeatures'

export const NewDesignDecorator = (Story: StoryFn) => {
  setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true })

  return (
    <div className="app_redesigned" style={{ width: '100%', height: '100%' }}>
      <Story />
    </div>
  )
}
