import type { Meta, StoryObj } from '@storybook/react'
import { CommentList } from './CommentList'

const meta = {
  title: 'Entities/CommentList',
  component: CommentList,
  args: {},
} satisfies Meta<typeof CommentList>

export default meta
export type Story = StoryObj<typeof meta>

export const CommentListNormal: Story = {
  args: {},
  decorators: [],
}
