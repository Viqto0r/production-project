import type { Meta, StoryObj } from '@storybook/react'
import ArticleRating from './ArticleRating'

const meta = {
  title: 'Features/ArticleRating',
  component: ArticleRating,
  args: {},
} satisfies Meta<typeof ArticleRating>

export default meta
export type Story = StoryObj<typeof meta>

export const ArticleRatingNormal: Story = {
  args: { articleId: '1' },
  decorators: [],
}
