import type { Meta, StoryObj } from '@storybook/react'
import { ArticleRecommendationsList } from './ArticleRecommendationsList'

const meta = {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  args: {},
} satisfies Meta<typeof ArticleRecommendationsList>

export default meta
export type Story = StoryObj<typeof meta>

export const ArticleRecommendationsListNormal: Story = {
  args: {},
  decorators: [],
}
