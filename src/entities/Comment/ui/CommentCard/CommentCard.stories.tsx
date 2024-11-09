import type { Meta, StoryObj } from '@storybook/react'
import { CommentCard } from './CommentCard'

const meta = {
  title: 'Entities/Comments/CommentCard',
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
        avatar:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png',
      },
    },
  },
}

export const CommentCardIsLoading: Story = {
  args: {
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
    isLoading: true,
  },
}
