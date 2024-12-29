import { Suspense } from 'react'
import { Loader } from '@/shared/ui/deprecated/Loader'
import { type StoryFn } from '@storybook/react'

export const SuspenseDecorator = (Story: StoryFn) => (
  <Suspense fallback={<Loader />}>
    <Story />
  </Suspense>
)
