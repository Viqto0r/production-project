import type { Meta, StoryObj } from '@storybook/react'
import { CommentCard } from './CommentCard'

const meta = {
  title: 'Entities/CommentCard',
  component: CommentCard,
  args: {},
} satisfies Meta<typeof CommentCard>

export default meta
export type Story = StoryObj<typeof meta>

export const CommentCardNormal: Story = {
  args: {
    comment: {
      id: '1',
      text: '123',
      user: {
        id: '1',
        username: 'Name',
        avatar: '',
      },
    },
  },
}
