import type { StoryObj } from '@storybook/react'
import ArticleRating from './ArticleRating'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Features/ArticleRating',
  component: ArticleRating,
  args: {},
  decorators: [StoreDecorator({})],
}

export default meta
export type Story = StoryObj<typeof meta>

export const ArticleRatingNormal: Story = {
  args: { articleId: '1' },
  decorators: [],
}
