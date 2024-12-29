import type { StoryObj } from '@storybook/react'
import { CommentList } from './CommentList'

const meta = {
  title: 'Entities/Comments/CommentList',
  component: CommentList,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const CommentListNormal: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'Comment 1',
        user: {
          id: '1',
          username: 'User 1',
          avatar:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png',
        },
      },
      {
        id: '1',
        text: 'Comment 2',
        user: {
          id: '1',
          username: 'User 2',
          avatar:
            'https://media.istockphoto.com/id/1152537185/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%85%D0%B0%D0%BA%D0%B5%D1%80-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82-%D0%BD%D0%B0-%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA%D0%B5-%D0%B2-%D1%82%D0%B5%D0%BC%D0%BD%D0%BE%D1%82%D0%B5.jpg?s=612x612&w=0&k=20&c=uZq9lmm4FGgOi7lIEzYbNPMLG7SdvUu4_me8BeqMG5Y=',
        },
      },
    ],
  },
  decorators: [],
}

export const CommentListEmpty: Story = {
  args: {},
  decorators: [],
}

export const CommentListIsLoading: Story = {
  args: {
    isLoading: true,
  },
  decorators: [],
}
