import type { StoryObj } from '@storybook/react'
import { StarRating } from './StarRating'

const meta = {
  title: 'Shared/StarRating',
  component: StarRating,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const StarRatingNormal: Story = {
  args: {},
  decorators: [],
}
