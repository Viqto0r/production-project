import type { Meta, StoryObj } from '@storybook/react'
import ProfileRating from './ProfileRating'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Features/ProfileRating',
  component: ProfileRating,
  args: {},
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof ProfileRating>

export default meta
export type Story = StoryObj<typeof meta>

export const ProfileRatingNormal: Story = {
  args: {
    profileId: '1',
  },
  decorators: [],
}
