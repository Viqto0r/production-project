import type { Meta, StoryObj } from '@storybook/react'
import ArticleRating from './ArticleRating'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Features/ArticleRating',
  component: ArticleRating,
  args: {},
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticleRating>

export default meta
export type Story = StoryObj<typeof meta>

export const ArticleRatingNormal: Story = {
  args: { articleId: '1' },
  decorators: [],
}
