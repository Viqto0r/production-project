import type { StoryObj } from '@storybook/react'
import { RatingCard } from './RatingCard'

const meta = {
  title: 'Entities/RatingCard',
  component: RatingCard,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const RatingCardNormal: Story = {
  args: {},
  decorators: [],
}
