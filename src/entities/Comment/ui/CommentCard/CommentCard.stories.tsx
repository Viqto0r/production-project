import type { StoryObj } from '@storybook/react'
import { CommentCard } from './CommentCard'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'

const meta = {
  title: 'Entities/Comments/CommentCard',
  component: CommentCard,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

const normalArgs = {
  comment: {
    id: '1',
    text: '123',
    user: {
      id: '1',
      username: 'Name',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png',
    },
  },
}

export const CommentCardNormal: Story = {
  args: normalArgs,
}

export const CommentCardNormalRedesigned: Story = {
  args: normalArgs,
  decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })],
}

export const CommentCardIsLoading: Story = {
  args: {
    ...normalArgs,
    isLoading: true,
  },
}
